#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GlobalCanvasGraphAndContext import GlobalCanvasGraphAndContext

# Python definitions for the C3 type DataIntegrationGraphManager


class DataIntegrationGraphManager(Value):
    """
    @remarks this represents a made instance of DataIntegrationGraphManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def lineageGraph(cls) -> Union[GlobalCanvasGraphAndContext]:
    """
    Fetches data lineage.
    """
        ...

