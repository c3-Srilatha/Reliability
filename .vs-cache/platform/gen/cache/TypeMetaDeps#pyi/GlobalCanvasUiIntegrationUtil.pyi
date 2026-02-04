#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GlobalCanvasGraphAndContext import GlobalCanvasGraphAndContext

# Python definitions for the C3 type GlobalCanvasUiIntegrationUtil


class GlobalCanvasUiIntegrationUtil(Value):
    """
    @remarks this represents a made instance of GlobalCanvasUiIntegrationUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def fetchUiMetadataGraph(cls) -> Union[GlobalCanvasGraphAndContext]:
    """
    Generate a {@link GlobalCanvasGraph} with Entity nodes and UiPage nodes
    @return The UiMetadata graph and context
    """
        ...

