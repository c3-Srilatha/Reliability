#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type EventStats


class EventStats(Value):
    """
    Approximate statistics for an event type
    
    @remarks this represents a made instance of EventStats
    """
    def __init__(self) -> None: ...


