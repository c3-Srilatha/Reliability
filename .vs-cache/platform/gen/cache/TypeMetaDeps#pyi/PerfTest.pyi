#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PerfTestResult import PerfTestResult
from c3.platform.PerfStepParam import PerfStepParam
from c3.platform.PerfSpec import PerfSpec

# Python definitions for the C3 type PerfTest


class PerfTest(Value):
    """
    C3 Performance Test - see /c3server/server/action-engine/test/resources/db/test/metadata/perfTest.c3typ for example
    
    @remarks this represents a made instance of PerfTest
    """
    def __init__(self) -> None: ...

    @classmethod
    def run(cls, spec: PerfSpec=None) -> Union[PerfTestResult]:
    """
    call this to run the test
    """
        ...
    @classmethod
    def step(cls, run: int=None, runs: int=None, thread: int=None, threads: int=None, param: PerfStepParam=None) -> Union[Map[str, float]]:
    """
    implement this to perform single test step;
    
    can return custom measurements that will be aggregated into PerfTestResult.measurements
    """
        ...
    @classmethod
    def beforeStep(cls, run: int=None, runs: int=None, thread: int=None, threads: int=None, param: PerfStepParam=None) -> Union[PerfStepParam]:
    """
    optionally override this function to prepare step test data and/or to customize step param;
    
    call to this function is not measured
    """
        ...

