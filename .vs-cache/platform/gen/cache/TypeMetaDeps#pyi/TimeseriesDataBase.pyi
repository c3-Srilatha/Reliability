#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchTimeseriesHistoricalSpec import FetchTimeseriesHistoricalSpec
from c3.platform.EvalTimeseriesHistoricalSpec import EvalTimeseriesHistoricalSpec
from c3.platform.Obj import Obj
from c3.platform.EvalTimeseriesSpecOld import EvalTimeseriesSpecOld

# Python definitions for the C3 type TimeseriesDataBase


class TimeseriesDataBase(Value):
    """
    @remarks this represents a made instance of TimeseriesDataBase
    """
    def __init__(self) -> None: ...

    @classmethod
    def evalTimeseries(cls, spec: EvalTimeseriesSpecOld=None) -> Union[Obj]:
    """
    API to evaluate timeseries that is normalized on the fly
    @param spec The spec according to which the timeseries should be evaluated
    @return normalized timeseries based on spec
    """
        ...
    @classmethod
    def normalizeOnTheFly(cls, spec: EvalTimeseriesSpecOld=None) -> Union[Obj]:
    """
    API to normalize timeseries on the fly
    @param spec The spec according to which the timeseries should be evaluated
    @return Return normalized timeseries
    """
        ...
    @classmethod
    def evalTimeseriesHistorical(cls, spec: EvalTimeseriesHistoricalSpec=None) -> Union[Map[str, Obj]]:
    """
    API to normalize timeseries by filtering / grouping/ historical timeseries based on data version
    @param spec Spec that specifies what kind of data is desired
    @return that contains the grouping criteria and its corresponding timeseries
    """
        ...
    @classmethod
    def fetchTimeseriesHistorical(cls, spec: FetchTimeseriesHistoricalSpec=None) -> Union[Map[str, Array[Obj]]]:
    """
    API to fetch raw timeseries data points with the LATEST DATA VERSION
    @param spec Spec that specifies what kind of data is desired
    @return list of raw data point objs per group
    """
        ...

