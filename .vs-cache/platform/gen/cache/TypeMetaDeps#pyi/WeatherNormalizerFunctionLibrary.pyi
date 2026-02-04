#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Timeseries import Timeseries

# Python definitions for the C3 type WeatherNormalizerFunctionLibrary


class WeatherNormalizerFunctionLibrary(Value):
    """
    @remarks this represents a made instance of WeatherNormalizerFunctionLibrary
    """
    def __init__(self) -> None: ...

    @classmethod
    def weatherNormalizeElectricity(cls, consumptionMetricName: str, electricityConsumption: Any=None, eventDate: datetime=None) -> Union[Timeseries[Any]]:
        ...
    @classmethod
    def weatherNormalizeNaturalGas(cls, consumptionMetricName: str, naturalGasConsumption: Any=None, eventDate: datetime=None) -> Union[Timeseries[Any]]:
        ...
    @classmethod
    def weatherInterpolateElectricity(cls, consumptionMetricName: str, electricityConsumption: Any=None) -> Union[Timeseries[Any]]:
        ...
    @classmethod
    def weatherInterpolateNaturalGas(cls, consumptionMetricName: str, naturalGasConsumption: Any=None) -> Union[Timeseries[Any]]:
        ...

