#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ScanResultSpec import ScanResultSpec

# Python definitions for the C3 type Batch


class Batch(Value):
    """
    Utility entry points for dynamic batch processing. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
    
    @remarks this represents a made instance of Batch
    """
    def __init__(self) -> None: ...

    @classmethod
    def scanResult(cls, spec: ScanResultSpec) -> Union[Any]:
    """
    Execute an action and process its outputs in zero or more smaller batches.
    
    The value returned by last batch's {@link ScanResultSpec#callback} function.
    If no outputs are returned by the action, the {@link ScanResultSpec#initialContext}
    value is returned.
    
    @return return value from last callback
    """
        ...

