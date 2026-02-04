#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DisaggregationConfig import DisaggregationConfig
from c3.platform.DisaggregationUsage import DisaggregationUsage
from c3.platform.ClimateResult import ClimateResult
from c3.platform.TimedDataHeader import TimedDataHeader
from c3.platform.EvaluateResult import EvaluateResult

# Python definitions for the C3 type ClimateDisaggregation


class ClimateDisaggregation(Value):
    """
    @remarks this represents a made instance of ClimateDisaggregation
    """
    def __init__(self) -> None: ...

    @classmethod
    def disaggregateTimeseries(cls, usage: EvaluateResult=None, weather: TimedDataHeader[TimedDataPoint]=None, config: DisaggregationConfig=None) -> Union[ClimateResult]:
        ...
    @classmethod
    def disaggregate(cls, usage: Array[DisaggregationUsage]=None, weather: TimedDataHeader[TimedDataPoint]=None, config: DisaggregationConfig=None) -> Union[ClimateResult]:
        ...

