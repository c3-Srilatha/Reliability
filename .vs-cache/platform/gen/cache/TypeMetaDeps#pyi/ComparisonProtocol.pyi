#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ComparisonProtocol


class ComparisonProtocol(Value):
    """
    @remarks this represents a made instance of ComparisonProtocol
    """
    def __init__(self) -> None: ...

    def lessThan(self, other: Any) -> Any:
        ...
    def lessThanEqualTo(self, other: Any) -> Any:
        ...
    def equalTo(self, other: Any) -> Any:
        ...
    def notEqualTo(self, other: Any) -> Any:
        ...
    def greaterThan(self, other: Any) -> Any:
        ...
    def greaterThanEqualTo(self, other: Any) -> Any:
        ...

