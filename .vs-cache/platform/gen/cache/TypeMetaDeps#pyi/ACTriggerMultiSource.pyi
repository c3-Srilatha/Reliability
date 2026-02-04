#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TriggerAnalyticsOptions import TriggerAnalyticsOptions
from c3.platform.InvocationStats import InvocationStats
from c3.platform.MetricGroupInvalidationSpec import MetricGroupInvalidationSpec

# Python definitions for the C3 type ACTriggerMultiSource


class ACTriggerMultiSource(Value):
    """
    @remarks this represents a made instance of ACTriggerMultiSource
    """
    def __init__(self) -> None: ...

    @classmethod
    def invalidateSources(cls, sources: Array[MetricGroupInvalidationSpec]=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    When data load finishes, or the underlying object structure changes, all relevant DFEs
    for a set of source objects (any metric or event) need to be evaluated to invoke any
    downstream analytics.
    
    Instead of calling this directly, apps code should call AnalyticsQueue.invalidateSources
    so any duplicate calls may be consolidated before execution.
    
    @param sources
              sources with metric groups
    
    @param options
              trigger options or extended InvalidateSourcesOptions
    
    @see InvalidateSourcesOptions
    """
        ...
    @classmethod
    def fireAnalytics(cls, sources: Array[MetricGroupInvalidationSpec]=None, analytics: Array[str]=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    A set of analytics may be specifically fired for development purposes, or for rebuilding state
    after a change to the analytic logic or other indirect dependency not visible to the
    analytics container.  If the array of analytics is empty, all analytics for that source
    object are fired.
    """
        ...

