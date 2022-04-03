import json
from pathlib import Path

__all__ = ["__version__", "__js__"]
__js__ = {
    pkg.name: json.loads((pkg / "package.json").read_text())
    for pkg in (Path(__file__).parent.resolve() / "labextensions").iterdir()
}
__version__ = list(__js__.values())[-1]["version"] if __js__ else "0.0.0"
