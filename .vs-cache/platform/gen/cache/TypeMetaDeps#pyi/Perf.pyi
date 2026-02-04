#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PerfStressMemorySpec import PerfStressMemorySpec

# Python definitions for the C3 type Perf


class Perf(Value):
    """
    Performance testing tool. Helpful for diagnosing and tuning environment performance.
    
    @remarks this represents a made instance of Perf
    """
    def __init__(self) -> None: ...

    @classmethod
    def stressMemory(cls, spec: PerfStressMemorySpec=None) -> bool:
    """
    Stresses Java GC
    """
        ...
    @classmethod
    def stopMemoryStress(cls) -> None:
        ...

