#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.TriggerAnalyticsOptions import TriggerAnalyticsOptions
from c3.platform.Obj import Obj
from c3.platform.MetricGroupInvalidationSpec import MetricGroupInvalidationSpec

# Python definitions for the C3 type DefaultAnalyticsListener


class DefaultAnalyticsListener(AnalyticsListener, Value):
    """
    Default listener for the analytics queue.
    
    @remarks this represents a made instance of DefaultAnalyticsListener
    """
    def __init__(self) -> None: ...

    @classmethod
    def dependencies(cls) -> Union[Map[str, Array[str]]]:
    """
    Returns all simple metrics determined to be used by analytics.
    """
        ...
    @classmethod
    def invalidate(cls, specs: Array[MetricGroupInvalidationSpec]=None, options: TriggerAnalyticsOptions=None) -> None:
    """
    Calls AnalyticsContainer.invalidateSources when called by AnalyticsQueue.compute.
    """
        ...
    @classmethod
    def callListeners(cls, srcTypeId: int, srcs: Array[MetricGroupInvalidationSpec], batchSize: int, options: Obj=None) -> None:
    """
    Calls the invalidate function on the appropriate registered AnalyticsListener types
    
    @param srcTypeId
           Source type id.
    @param srcs
           Sources to invalidate.
    @param options
           Options to call invalidateSources with.
    @param batchSize
           Number of specs to process (e.g. call listeners with) in each batch.
    """
        ...
    @classmethod
    def listenerHandlesSrcType(cls, listener: Type, srcType: Type, metricGroup: str=None) -> bool:
    """
    Returns true if AnalyticListener has dependencies of metrics for given srcType and metricGroup.
    If metricGroup is not provided, it just checks for srcType.
    """
        ...

