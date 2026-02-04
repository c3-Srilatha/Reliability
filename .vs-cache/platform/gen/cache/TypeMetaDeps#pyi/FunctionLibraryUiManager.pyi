#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExpressionFunctionInfo import ExpressionFunctionInfo

# Python definitions for the C3 type FunctionLibraryUiManager


class FunctionLibraryUiManager(Value):
    """
    @remarks this represents a made instance of FunctionLibraryUiManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def fetchExpressionEngineFunctionInfo(cls) -> Union[Array[ExpressionFunctionInfo]]:
    """
    Returns Expression function info including custom expression engine functions
    """
        ...

