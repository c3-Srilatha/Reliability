#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExactDimension import ExactDimension
from c3.location.LatLong import LatLong

# Python definitions for the C3 type LocationFunctionLibrary


class LocationFunctionLibrary(MetricFunctionLibrary, Value):
    """
    A library of location-based functions that mix in functionalities from {@link MetricFunctionLibrary} and {@link Value}.
    
    This library includes functions for calculating geographic distances and determining the central point
    of a set of latitude/longitude coordinates.
    
    @remarks this represents a made instance of LocationFunctionLibrary
    """
    def __init__(self) -> None: ...

    @classmethod
    def singleHaversineDistance(cls, xLat: float=None, xLon: float=None, yLat: float=None, yLon: float=None) -> Union[ExactDimension]:
    """
    Calculates the Haversine distance between two geographic points.
    The Haversine formula is used to calculate the shortest distance over the Earth's surface.
    
    @param xLat
              Latitude of the first point (in decimal degrees).
    @param xLon
              Longitude of the first point (in decimal degrees).
    @param yLat
              Latitude of the second point (in decimal degrees).
    @param yLon
              Longitude of the second point (in decimal degrees).
    
    @return the exact Haversine distance between the points (typically in kilometers or miles).
    """
        ...
    @classmethod
    def latLongCenter(cls, latLongs: Array[LatLong]=None) -> Union[LatLong]:
    """
    Calculates the geographic center (midpoint) of a set of latitude/longitude coordinates.
    The center is calculated as the average of the provided latitudes and longitudes.
    
    @param latLongs
              An array of latitude/longitude coordinates.
    
    @return the latitude and longitude of the center point.
    """
        ...

