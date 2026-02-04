#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DFEMetadata import DFEMetadata
from c3.platform.SourceAnalytics import SourceAnalytics
from c3.platform.SourceMetrics import SourceMetrics
from c3.platform.AnalyticMetadata import AnalyticMetadata
from c3.platform.Type import Type
from c3.platform.TriggerAnalyticsOptions import TriggerAnalyticsOptions
from c3.platform.InvocationStats import InvocationStats
from c3.platform.SourceSimpleMetrics import SourceSimpleMetrics
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type ACBase


class ACBase(Value):
    """
    @remarks this represents a made instance of ACBase
    """
    def __init__(self) -> None: ...

    @classmethod
    def allDFEs(cls) -> Union[Array[DFEMetadata]]:
    """
    Get the metadata for all identified DFE types.  Note that these are not all necessarily used
    by analytics.
    """
        ...
    @classmethod
    def allAnalytics(cls) -> Union[Array[AnalyticMetadata]]:
    """
    Get the metadata for all identified analytic types.  Note that these are not all necessarily
    reachable due to their dependencies.
    """
        ...
    @classmethod
    def allCategories(cls) -> Union[Array[str]]:
    """
    Get the defined categories of analytics, usually used to identify distinct applications.
    """
        ...
    @classmethod
    def completeGraph(cls) -> Union[str]:
    """
    Produce a DOT format graph visualization file for all analytics known.
    This includes all analytics, whether they are used or not.
    """
        ...
    @classmethod
    def categoryGraph(cls, name: str=None, closure: bool=None) -> Union[str]:
    """
    Produce a DOT format graph visualization file for analytics used by a single category.
    This includes analytics for the specified category plus the ones they depend on, if
    the second argument is true.
    """
        ...
    @classmethod
    def sourceTypes(cls, unused: bool=None) -> Union[Array[Type]]:
    """
    Get the unique set of source types for which DFEs are defined.
    The optional argument specifies whether to include unused DFEs as well (default false).
    """
        ...
    @classmethod
    def sourceMetrics(cls, sourceTypes: Array[Type]=None, unused: bool=None) -> Union[Array[SourceMetrics]]:
    """
    Get the configured metrics of interest for the specified source types.  If the list of types is empty,
    interesting metrics are returned for all interesting source types (see sourceTypes above).
    The optional argument specifies whether to include unused DFEs as well (default false).
    """
        ...
    @classmethod
    def sourceSimpleMetrics(cls, sourceTypes: Array[Type]=None, unused: bool=None) -> Union[Array[SourceSimpleMetrics]]:
    """
    Get the ultimate, simple, metrics of interest for the specified source types.  If the list of types is empty,
    source metrics are returned for all interesting source types (see sourceTypes above).
    The optional argument specifies whether to include unused DFEs as well (default false).
    """
        ...
    @classmethod
    def sourceAnalytics(cls, sourceTypes: Array[Type]=None) -> Union[Array[SourceAnalytics]]:
    """
    Get the analytics defined for the specified source types.  If the list of types is empty,
    defined analytics are returned for all interesting source types (see sourceTypes above).
    """
        ...
    @classmethod
    def checkAllEvents(cls, options: TriggerAnalyticsOptions=None) -> Union[InvocationStats]:
    """
    Periodically, we check all active event DFEs to see if their condition has been raised within the
    most recent relevant time period.  This method checks all objects for each DFE by executing a
    query matching the condition filter and triggers batch jobs to process the matching objects.
    """
        ...
    @classmethod
    def groupInAnalyticWhitelist(cls, groupName: str=None) -> bool:
    """
    Check if the given analytic name or one of analytics in given group is in whitelisted analytics.
    If TenantConfig "ACE-AnalyticWhitelist" is empty or not found, will return true. Analytic Group mapping will be
    derived from TenantConfig "ACE-AnalyticGroups".
    When "ACE-AnalyticGroups" is not mapped, groupName will be checked for any matching analytic type name.
    """
        ...
    @classmethod
    def analyticWhitelist(cls) -> Union[Array[str]]:
    """
    Give list of analytics whitelisted with TenantConfig "ACE-AnalyticWhitelist".
    """
        ...
    @classmethod
    def timeBeforeStartOfTime(cls, timeRange: TimeRange=None) -> bool:
    """
    Returns true, if the time range provided is before start of time for period construction /invalidation.
    See TenantConfig  ACE-StartOfTime and ACE-EndOfTime.
    """
        ...

