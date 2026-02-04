#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LogProfileSpec import LogProfileSpec
from c3.platform.LogProfileStacksSpec import LogProfileStacksSpec
from c3.platform.ActionStackTree import ActionStackTree
from c3.platform.LogActionStat import LogActionStat

# Python definitions for the C3 type LogProfiler


class LogProfiler(Value):
    """
    Extract data on action calls for performance analysis.
    
    @remarks this represents a made instance of LogProfiler
    """
    def __init__(self) -> None: ...

    @classmethod
    def profile(cls, spec: LogProfileSpec=None) -> Union[Array[LogActionStat]]:
    """
    Quick and dirty Action Profiler based on local log file. e.g. usage:
    ```js
    c3Table(LogProfiler.profile({duration:'5m', order:'time', rid:c3Context().lastAction.id}))
    ```
    """
        ...
    @classmethod
    def stacks(cls, spec: LogProfileStacksSpec=None) -> Union[Array[ActionStackTree]]:
    """
    Use the #profile function above to query the log and reconstruct call stack "trees" using parent and root action
    ids. Note that each element in the return value is a root action and all the actions it calls are in the tree
    structure below it.
    
    ```js
    c3Viz(SvgChart.stacks(LogProfiler.stacks({duration:'5m', limit:-1, rid:c3Context().lastAction.id})))
    ```
    """
        ...

