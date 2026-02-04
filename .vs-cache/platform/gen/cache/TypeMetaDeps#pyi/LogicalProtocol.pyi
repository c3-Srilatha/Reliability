#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type LogicalProtocol


class LogicalProtocol(Value):
    """
    @remarks this represents a made instance of LogicalProtocol
    """
    def __init__(self) -> None: ...

    def logicalAnd(self, other: Any) -> Any:
        ...
    def logicalOr(self, other: Any) -> Any:
        ...
    def logicalXor(self, other: Any) -> Any:
        ...
    def reflectedLogicalAnd(self, other: Any) -> Any:
        ...
    def reflectedLogicalOr(self, other: Any) -> Any:
        ...
    def reflectedLogicalXor(self, other: Any) -> Any:
        ...

