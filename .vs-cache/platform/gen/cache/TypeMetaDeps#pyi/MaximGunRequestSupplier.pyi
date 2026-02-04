#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MaximGunRequestSupplier


class MaximGunRequestSupplier(Value):
    """
    Base type for lambda that produces MaximGun test HTTP request for a user.
    
    @remarks this represents a made instance of MaximGunRequestSupplier
    """
    def __init__(self) -> None: ...


