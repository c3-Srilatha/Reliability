#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Ray.Ref


class Ref(Value):
    """
    @remarks this represents a made instance of Ray.Ref
    """
    def __init__(self) -> None: ...

    def get(self) -> Union[Any]:
        ...

