#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GlobalCanvasGraphAndContext import GlobalCanvasGraphAndContext

# Python definitions for the C3 type DataModelGraphManager


class DataModelGraphManager(Value):
    """
    @remarks this represents a made instance of DataModelGraphManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def relationshipGraph(cls) -> Union[GlobalCanvasGraphAndContext]:
    """
    Constructs a graph of {@link GlobalCanvasGraphNode}s and {@link GlobalCanvasGraphEdge}s representing the relationships between
    {@link Persistable} {@TypeMeta}
    """
        ...

