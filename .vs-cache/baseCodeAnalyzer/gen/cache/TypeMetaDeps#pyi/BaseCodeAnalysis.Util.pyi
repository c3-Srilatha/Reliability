#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Lambda import Lambda

# Python definitions for the C3 type BaseCodeAnalysis.Util


class Util(Value):
    """
    Type to store utility functions for the {@link BaseCodeAnalysis} and related packages.
    
    @remarks this represents a made instance of BaseCodeAnalysis.Util
    """
    def __init__(self) -> None: ...

    @classmethod
    def callLambdaInEnvContext(cls, func: Lambda[FunctionType]=None) -> Union[Any]:
    """
    Utility method to call functions in the context of the app environment's context, i.e., in the `<env>/c3` app.
    Use this util to call platform APIs that should only be called in the context of an environment - for example,
    calls to {@link Pkg.Store}.
    
    The {@link Lambda#call} returns a {@link Boxed} `any` Type value. This function will return the unboxed value.
    
    @param func
              The {@link Lambda} function to call in the context of the app environment.
    @returns  The result of the function call. This will be a JSON-serialized value as returned by
              the `callJson` function.
    """
        ...

