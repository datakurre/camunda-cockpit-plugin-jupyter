"""jupyterlite-robotkernel setup"""
import json
from pathlib import Path

HERE = Path(__file__).parent.resolve()
EXTENSIONS = HERE / "py_src/jupyterlite_camunda/labextensions"
__js__ = {
    path: json.loads((path / "package.json").read_text())
    for path in EXTENSIONS.iterdir()
}

setup_args = dict(
    version=list(__js__.values())[-1]["version"] if __js__ else "0.0.0",
    data_files=[
        (f"""share/jupyter/labextensions/{pkg["name"]}""", ["install.json"])
        for pkg in __js__.values()
    ]
    + [
        item
        for sublist in [
            [
                (
                    f"""share/jupyter/labextensions/{pkg["name"]}/{p.parent.relative_to(EXT).as_posix()}""",
                    [str(p.relative_to(HERE).as_posix())],
                )
                for p in EXT.rglob("*")
                if not p.is_dir()
            ]
            for EXT, pkg in __js__.items()
        ]
        for item in sublist
    ],
)

if __name__ == "__main__":
    import setuptools

    setuptools.setup(**setup_args)
