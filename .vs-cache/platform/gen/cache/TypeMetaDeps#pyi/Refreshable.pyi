#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Refreshable


class Refreshable(Value):
    """
    This type defines a single method, #refresh, that can be used to produce an updated instance for types that represent
    dynamic state. This can be used by UIs or other state-management applications to poll for changes to a type to
    which they have a reference.
    
    @remarks this represents a made instance of Refreshable
    """
    def __init__(self) -> None: ...

    def isRefreshable(self) -> bool:
    """
    Whether this particular instance supports #refresh.
    
    By default this is implemented to return `true`, but if a type that mixes in **Refreshable** sometimes has
    instances that _cannot_ be refreshed, it should override this to return the status as appropriate.
    """
        ...
    def refresh(self) -> Refreshable:
    """
    Produce a new instance with updated state representing the same query as originally performed. This can be called
    by UIs or other state-management applications to get the latest results.
    """
        ...

