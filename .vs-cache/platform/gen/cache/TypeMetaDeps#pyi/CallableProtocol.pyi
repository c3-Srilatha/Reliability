#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type CallableProtocol


class CallableProtocol(Value):
    """
    Protocol to enable calling types with two arguments. In Python, instances of types that mix CallableProtocol are
    directly callable.
    
    @remarks this represents a made instance of CallableProtocol
    """
    def __init__(self) -> None: ...

    def _call_(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
    """
    Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
    `args` and `kwargs` are of `ValueType` `any`.
    """
        ...

