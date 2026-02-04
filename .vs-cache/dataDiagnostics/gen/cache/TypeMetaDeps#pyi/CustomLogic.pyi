#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type CustomLogic


class CustomLogic(Value):
    """
    Dummy type that contains custom logic to execute for {@link DataDiagnostic}s
    
    @remarks this represents a made instance of CustomLogic
    """
    def __init__(self) -> None: ...

    @classmethod
    def executeLogic(cls) -> None:
    """
    Runs some random logic to test.
    """
        ...

