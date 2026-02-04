#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Uuid


class Uuid(Value):
    """
    Create a "Universally Unique IDentifier", also called a "GUID" (Globally Unique IDentifier) value usable as a key.
    
    @remarks this represents a made instance of Uuid
    """
    def __init__(self) -> None: ...

    @classmethod
    def create(cls) -> str:
    """
    Create a UUID using the best support available locally. Typically this will be a (version 4) random one.
    """
        ...

