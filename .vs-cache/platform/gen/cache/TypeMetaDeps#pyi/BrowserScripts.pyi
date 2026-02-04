#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type BrowserScripts


class BrowserScripts(Value):
    """
    Holding the implementation and documentation of browser scripts that can be used by any automation engine that
    can execute scripts
    
    @remarks this represents a made instance of BrowserScripts
    """
    def __init__(self) -> None: ...

    @classmethod
    def simulateDragAndDrop(cls, sourceNodeSelector: str, destinationNodeSelector: str) -> None:
    """
    Uses javascript dragStart and dragEnd events to simulate drag and drop
    @param sourceNode
              The element to be dragged
    @param destinationNode
              The element to be dragged over and dropped onto
    """
        ...

