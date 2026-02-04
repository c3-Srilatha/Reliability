#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Iface


class Iface(Value):
    """
    WIP Base type of services that declare formal interface i.e. collection of methods.
    
    @see Value
    @see Microservice.Iface
    
    @remarks this represents a made instance of Iface
    """
    def __init__(self) -> None: ...


