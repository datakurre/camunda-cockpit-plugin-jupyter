from ._version import __version__, __js__

def _jupyter_labextension_paths():
    return [
        {"src": f"labextensions/{name}", "dest": pkg["name"]}
        for name, pkg in __js__.items()
    ]
