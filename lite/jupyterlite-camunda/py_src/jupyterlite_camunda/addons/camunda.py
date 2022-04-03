"""Patch index.html for Camunda plugin.
"""

from jupyterlite.addons.base import BaseAddon

PATCH = """
        // Capture and save Camunda API information sent by Camunda Plugin API
        window.addEventListener('message', function(ev) {
          if (window.location.toString().startsWith(ev.origin)) {
            const env = {};
            for (const key of Object.keys(ev.data)) {
              env['CAMUNDA_' + key.replace('Api', '_Api').replace('Token', '_Token').toUpperCase()] = key.endsWith('Api') ? ev.origin + ev.data[key] : ev.data[key];
            }
            window.localStorage.setItem('env', JSON.stringify(env));
          }
        });
        window.parent.postMessage('ready');
"""


class CamundaAddon(BaseAddon):
    """Patch index.html for Camunda plugin."""

    __all__ = ["post_build"]

    def __init__(self, manager, *args, **kwargs):
        kwargs["parent"] = manager
        kwargs["manager"] = manager
        super().__init__(*args, **kwargs)

    def post_build(self, manager):
        paths = list(manager.output_dir.glob("*/index.html"))
        yield dict(
            name="patch:index.html",
            doc=f"ensure index.html has Camunda patch",
            file_dep=[*paths],
            actions=[(self.patch, [paths])],
            targets=[*[f"{path}#camunda" for path in paths]],
        )

    def patch(self, paths):
        """Patch index.html for Camunda plugin."""
        for path in paths:
            index_html = path.read_text()
            if PATCH in index_html:
                continue
            match = index_html.find("config-utils.js")
            match = match + index_html[match:].find(");") if match > -1 else -1
            if match > -1:
                match += len(");")
                path.write_text(
                    index_html[0:match] + PATCH + index_html[match:]
                )
