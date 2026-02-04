#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MetricInvalidationSpec import MetricInvalidationSpec

# Python definitions for the C3 type MetricsListener


class MetricsListener(MetricsListenerDeps, Value):
    """
    Base invalidation listener for the metrics queue.
    
    @remarks this represents a made instance of MetricsListener
    """
    def __init__(self) -> None: ...

    @classmethod
    def dependencies(cls) -> Union[Array[str]]:
    """
    @return the list of SimpleMetrics that the listener is interested in. The default implementation returns the
    simple metrics specified in the invalidationDependency of the specified source type (if any).  Override to do
    something different.
    """
        ...
    @classmethod
    def invalidate(cls, specs: Array[MetricInvalidationSpec]=None) -> None:
    """
    Called by MetricsQueue.compute when registered metrics are invalidated.
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

