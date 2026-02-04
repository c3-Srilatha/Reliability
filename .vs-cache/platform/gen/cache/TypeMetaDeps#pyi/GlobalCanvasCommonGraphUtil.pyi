#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GlobalCanvasMergeGraphResult import GlobalCanvasMergeGraphResult
from c3.platform.GlobalCanvasGraphNodeCategory import GlobalCanvasGraphNodeCategory
from c3.platform.GlobalCanvasGraphRegistration import GlobalCanvasGraphRegistration

# Python definitions for the C3 type GlobalCanvasCommonGraphUtil


class GlobalCanvasCommonGraphUtil(Value):
    """
    Type used for generating the graph used by Global Canvas
    
    @remarks this represents a made instance of GlobalCanvasCommonGraphUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def mergeGraphs(cls, graphRegistrations: Array[GlobalCanvasGraphRegistration]=None, categoryRegistrations: Array[GlobalCanvasGraphNodeCategory]=None) -> Union[GlobalCanvasMergeGraphResult]:
    """
    Generate a {@link GlobalCanvasGraph} by combining the {@link ActionRef}s registered in
    {@link GlobalCanvasGraphRegistration}.
    """
        ...

