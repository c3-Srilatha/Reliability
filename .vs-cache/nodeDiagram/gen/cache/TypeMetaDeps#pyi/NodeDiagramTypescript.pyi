#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type NodeDiagramTypescript


class NodeDiagramTypescript(Value):
    """
    Type to define a '.ts' file to shareable export typescript types
    
    @remarks this represents a made instance of NodeDiagramTypescript
    """
    def __init__(self) -> None: ...

    @classmethod
    def noop(cls) -> None:
        ...

