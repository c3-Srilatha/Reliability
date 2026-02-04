#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Singleton


class Singleton(DefaultInstance, Value):
    """
    Base type for types that can only have one and only instance. It is also a {@link DefaultInstance}--its member
    methods can be called in static style--because there is known way to instantiate it. Also, because there is only
    a single instance, the data fields can also be accessed in static style.
    
    Note that the singleton behavior is only applicable within a _single_ execution environment. It does not communicate
    with any other environments so there is no synchronization between instance in one address space and another.
    For synchronization, additional support must be enabled, such as the {@link Config} framework.
    
    Singleton types should not define stateful static methods and store the state somewhere else. Instead they should
    define member methods (which can still be called in static style) and store the state in the instance.
    
    @remarks this represents a made instance of Singleton
    """
    def __init__(self) -> None: ...

    @classmethod
    def inst(cls) -> Singleton:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[Singleton]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...

