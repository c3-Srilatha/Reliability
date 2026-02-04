#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.TriggerAnalyticsOptions import TriggerAnalyticsOptions
from c3.platform.Obj import Obj
from c3.platform.InvocationStats import InvocationStats
from c3.platform.Ref import Ref

# Python definitions for the C3 type ACTrigger


class ACTrigger(Value):
    """
    @remarks this represents a made instance of ACTrigger
    """
    def __init__(self) -> None: ...

    @classmethod
    def invalidateMetric(cls, metric: str, source: Ref=None, start: datetime=None, end: datetime=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    When new meter readings arrive through the data loader or other external process, the
    dependency graph of DFEs needs to be evaluated to invoke any affected downstream analytics.
    First and last represent (inclusive) affected data point times for optimization of
    what gets recalculated.
    """
        ...
    @classmethod
    def invalidateMetrics(cls, sources: Array[Obj]=None, metrics: Array[str]=None, start: datetime=None, end: datetime=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    When new meter readings arrive through the data loader or other external process, the
    dependency graph of DFEs needs to be evaluated to invoke any affected downstream analytics.
    First and last represent (inclusive) affected data point times for optimization of
    what gets recalculated.
    
    Instead of calling this directly, apps code should call AnalyticsQueue.invalidateSources
    so any duplicate calls may be consolidated before execution.
    """
        ...
    @classmethod
    def eventsOccurred(cls, source: Ref=None, start: datetime=None, end: datetime=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    When new event conditions arise due to data changes or the passage of time, the
    dependency graph of DFEs needs to be evaluated to invoke any affected downstream analytics.
    """
        ...
    @classmethod
    def triggerDFE(cls, dfeType: Type=None, sources: Array[Obj]=None, start: datetime=None, end: datetime=None, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    A single DFE may be explicitly triggered for development purposes, or for specific event DFE
    evaluation.  This method fires the specified DFE a set of sources for the specified
    time range.
    """
        ...
    @classmethod
    def loadDFE(cls, typeName: str=None, source: Ref=None, start: datetime=None, options: TriggerAnalyticsOptions=None) -> Union[Obj]:
    """
    Construct a DFE instance from data for the specified source object.
    The DFE type qualified name must be specified, as well as the source and start time.
    If the data available does not meet the normal threshold, null is returned,
    unless the force flag is specified.
    """
        ...

