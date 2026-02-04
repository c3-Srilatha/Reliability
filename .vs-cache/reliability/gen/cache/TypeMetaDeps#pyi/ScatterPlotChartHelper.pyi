#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.reliabilityCapability.ScatterPlotChartDataSpec import ScatterPlotChartDataSpec
from c3.reliabilityCapability.ScatterPlotChartColorGroupingSpec import ScatterPlotChartColorGroupingSpec

# Python definitions for the C3 type ScatterPlotChartHelper


class ScatterPlotChartHelper(Value):
    """
    Type to fetch chart configs for scatter plot.
    
    @remarks this represents a made instance of ScatterPlotChartHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getChartConfig(cls, spec: ScatterPlotChartDataSpec=None, isGlobal: bool=None) -> Union[any]:
    """
    Retrieves chart config for the global and asset detail scatter plot.
    
    @param spec
              The scatter plot chart data specification
    @param isGlobal
              Whether this is a global scatter plot
    @return The chart configuration as JSON
    """
        ...
    @classmethod
    def getColorGroupingConfig(cls, spec: ScatterPlotChartDataSpec) -> Union[ScatterPlotChartColorGroupingSpec]:
    """
    Retrieves a configuration specifying how to group, label, and color data points.
    
    @param spec
              The scatter plot chart data specification
    @return The color grouping configuration specification
    """
        ...
    @classmethod
    def isMissingFields(cls, spec: ScatterPlotChartDataSpec, fields: Array[str]) -> bool:
    """
    Returns whether or not the {@link ScatterPlotChartDataSpec} does not contain all of the fields.
    
    @param spec
              The scatter plot chart data specification
    @param fields
              The fields to check for
    @return True if fields are missing, false otherwise
    """
        ...

