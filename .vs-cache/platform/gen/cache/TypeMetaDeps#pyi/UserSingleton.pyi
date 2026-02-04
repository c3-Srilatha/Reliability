#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type UserSingleton


class UserSingleton(Singleton, Value):
    """
    Base type for types that can only have one and only instance per user.
    
    @remarks this represents a made instance of UserSingleton
    """
    def __init__(self) -> None: ...

    @classmethod
    def inst(cls) -> UserSingleton:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[UserSingleton]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...

