#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MetricsListenerDeps


class MetricsListenerDeps(Value):
    """
    The base type used for listening on the analytics or metrics queue.
    
    @remarks this represents a made instance of MetricsListenerDeps
    """
    def __init__(self) -> None: ...


