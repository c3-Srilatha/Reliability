#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.WeatherDataResult import WeatherDataResult

# Python definitions for the C3 type WeatherDataService


class WeatherDataService(Value):
    """
    This type is used for fetching and persisting weather data.
    
    @remarks this represents a made instance of WeatherDataService
    """
    def __init__(self) -> None: ...

    @classmethod
    def getWeatherData(cls, zipCodes: Array[str]=None, rawHeaderType: Type=None, csvHeader: str=None, env: str=None, app: str=None, observedEndDate: datetime=None, maxHistoryDays: int=None, asyncLoadBalance: bool=None) -> Union[WeatherDataResult]:
    """
    Fetch weather data from weather.com
    
    @param zipCodes
              the list of zip codes to pull weather data for.
    @param rawHeaderType
              raw header under which to store weather data as datapoints.rawHeaderType should be an entity type that mixes in metadata.TimedDataHeader.
    @param csvHeader
              csvHeader for importData() call (should have c3 fields in the data point type corresponding to rawHeaderType). The fields should be
              in the same order as they appear in the weather data feed. Note that the platform will automatically remove the first line in the feed
              (containing WxA fields) and replace it with csvHeader.
    @param env
              default to the env/app on the action.
    @param app
              default to the env/app on the action.
    @param observedEndDate
              the date at which the data transitions from 'observed' to 'forecast', defaults to today.
    @param maxHistoryDays
              Maximum history of weather data to fetch for a WeatherStation. defaults to 761 (25 months)
    @param asyncLoadBalance
              If set, zipCodes is split into batches of 5 and redispatched as async actions. asyncLoadBalance defaults to true.
    @return the total number of data points that were loaded successfully across all zip codes.
    """
        ...
    @classmethod
    def setWeatherTimeZone(cls, zipCodes: Array[str]=None, env: str=None, app: str=None, rawHeaderType: Type=None) -> Union[WeatherDataResult]:
    """
    Compute and set the field "timeZone" on type "rawHeaderType" for a list of zipcodes.
    
    @param zipCodes
              Array of weatherStation keys for which the timeZone needs to be fetched e.g ['US-94063', 'MX-45110', 'ES-45110'].
    @param env
              The env name.
    @param app
              The app name.
    @param rawHeaderType
              The type on which the field "timeZone" needs to be persisted.
    @return the number of objects for which it computed the timezone.The structure also contains the number of invalid zips.
    """
        ...
    @classmethod
    def createWeatherStationKey(cls, countryName: str=None, countryAbbr: str=None, zipcode: str=None, latitude: str=None, longitude: str=None) -> Union[str]:
    """
    Generate weatherStation id based on the the given inputs. Either Country information
    and zipcode OR latitude and longitude should be provided for computing the weatherStation id.
    
    @param countryName
              The name of the country e.g "United States" or "Belgium".
    @param countryAbbr
              The 2 digit country abbreviation e.g "US" or "BE".
    @param latitude
              The latitude information.
    @param longitude
              The longitude information.
    @return The generated weatherStation key.
    """
        ...
    @classmethod
    def sunriseset(cls, lat: float=None, lon: float=None, date: datetime=None, offset: int=None, zenith: float=None) -> Union[Array[datetime]]:
        ...

