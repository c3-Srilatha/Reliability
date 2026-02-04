#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MetricInvalidationSpec import MetricInvalidationSpec

# Python definitions for the C3 type CacheIntervalMetricsListener


class CacheIntervalMetricsListener(MetricsListener, Value):
    """
    MetricsQueue listener for processing cache interval metric invalidation
    
    @remarks this represents a made instance of CacheIntervalMetricsListener
    """
    def __init__(self) -> None: ...

    @classmethod
    def dependencies(cls) -> Union[Array[str]]:
    """
    Returns all simple metrics that specify a cached interval
    """
        ...
    @classmethod
    def invalidate(cls, specs: Array[MetricInvalidationSpec]=None) -> None:
    """
    Calls SimpleMetric.invalidateCache when called by MetricsQueue.compute.
    """
        ...
    @classmethod
    def callListeners(cls, srcTypeId: int, srcs: Array[MetricInvalidationSpec], batchSize: int) -> None:
    """
    Calls the invalidate function on the appropriate registered MetricListener types
    
    @param srcTypeId
           Source type id.
    @param srcs
           Sources to invalidate.
    @param batchSize
           Number of specs to process (e.g. call listeners with) in each batch.
    """
        ...

