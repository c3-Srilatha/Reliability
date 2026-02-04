#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type InvalidationDisabled


class InvalidationDisabled(Value):
    """
    Marker type to disable Invalidations on change of a type instances that mixin this type.
    
    @remarks this represents a made instance of InvalidationDisabled
    """
    def __init__(self) -> None: ...


