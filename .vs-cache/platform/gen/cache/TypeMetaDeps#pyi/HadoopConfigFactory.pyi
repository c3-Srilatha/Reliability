#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type HadoopConfigFactory

S = TypeVar('S')

class HadoopConfigFactory(Generic[S], Value):
    """
    Factory to create an Apache hadoop Configuration object.
    
    @remarks this represents a made instance of HadoopConfigFactory
    """
    def __init__(self) -> None: ...

    @classmethod
    def hadoopConfig(cls, spec: S=None) -> Any:
        ...

