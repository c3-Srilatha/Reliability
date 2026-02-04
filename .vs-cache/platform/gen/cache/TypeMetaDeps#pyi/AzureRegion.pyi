#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AzureRegion


class AzureRegion():
    """
    Enumeration of all known Azure regions.
    
    @remarks this represents a made instance of AzureRegion
    """
    
    US_WEST: Optional[str]=None
    """
    Azure Cloud - Americas
    """

    US_WEST2: Optional[str]=None

    US_CENTRAL: Optional[str]=None

    US_EAST: Optional[str]=None

    US_EAST2: Optional[str]=None

    US_NORTH_CENTRAL: Optional[str]=None

    US_SOUTH_CENTRAL: Optional[str]=None

    US_WEST_CENTRAL: Optional[str]=None

    CANADA_CENTRAL: Optional[str]=None

    CANADA_EAST: Optional[str]=None

    BRAZIL_SOUTH: Optional[str]=None

    EUROPE_NORTH: Optional[str]=None
    """
    Azure Cloud - Europe
    """

    EUROPE_WEST: Optional[str]=None

    UK_SOUTH: Optional[str]=None

    UK_WEST: Optional[str]=None

    ASIA_EAST: Optional[str]=None
    """
    Azure Cloud - Asia
    """

    ASIA_SOUTHEAST: Optional[str]=None

    JAPAN_EAST: Optional[str]=None

    JAPAN_WEST: Optional[str]=None

    AUSTRALIA_EAST: Optional[str]=None

    AUSTRALIA_SOUTHEAST: Optional[str]=None

    INDIA_CENTRAL: Optional[str]=None

    INDIA_SOUTH: Optional[str]=None

    INDIA_WEST: Optional[str]=None

    KOREA_CENTRAL: Optional[str]=None

    KOREA_SOUTH: Optional[str]=None

    CHINA_NORTH: Optional[str]=None
    """
    Azure China Cloud
    """

    CHINA_EAST: Optional[str]=None

    CHINA_NORTH2: Optional[str]=None

    CHINA_EAST2: Optional[str]=None

    GERMANY_CENTRAL: Optional[str]=None
    """
    Azure German Cloud
    """

    GERMANY_NORTHEAST: Optional[str]=None

    GERMANY_WEST_CENTRAL: Optional[str]=None

    GERMANY_NORTH: Optional[str]=None

    GOV_US_VIRGINIA: Optional[str]=None
    """
    Azure Government Cloud
    """

    GOV_US_IOWA: Optional[str]=None

    GOV_US_ARIZONA: Optional[str]=None

    GOV_US_TEXAS: Optional[str]=None

    GOV_US_DOD_EAST: Optional[str]=None

    GOV_US_DOD_CENTRAL: Optional[str]=None
    def __init__(self, US_WEST: Optional[str]=None, US_WEST2: Optional[str]=None, US_CENTRAL: Optional[str]=None, US_EAST: Optional[str]=None, US_EAST2: Optional[str]=None, US_NORTH_CENTRAL: Optional[str]=None, US_SOUTH_CENTRAL: Optional[str]=None, US_WEST_CENTRAL: Optional[str]=None, CANADA_CENTRAL: Optional[str]=None, CANADA_EAST: Optional[str]=None, BRAZIL_SOUTH: Optional[str]=None, EUROPE_NORTH: Optional[str]=None, EUROPE_WEST: Optional[str]=None, UK_SOUTH: Optional[str]=None, UK_WEST: Optional[str]=None, ASIA_EAST: Optional[str]=None, ASIA_SOUTHEAST: Optional[str]=None, JAPAN_EAST: Optional[str]=None, JAPAN_WEST: Optional[str]=None, AUSTRALIA_EAST: Optional[str]=None, AUSTRALIA_SOUTHEAST: Optional[str]=None, INDIA_CENTRAL: Optional[str]=None, INDIA_SOUTH: Optional[str]=None, INDIA_WEST: Optional[str]=None, KOREA_CENTRAL: Optional[str]=None, KOREA_SOUTH: Optional[str]=None, CHINA_NORTH: Optional[str]=None, CHINA_EAST: Optional[str]=None, CHINA_NORTH2: Optional[str]=None, CHINA_EAST2: Optional[str]=None, GERMANY_CENTRAL: Optional[str]=None, GERMANY_NORTHEAST: Optional[str]=None, GERMANY_WEST_CENTRAL: Optional[str]=None, GERMANY_NORTH: Optional[str]=None, GOV_US_VIRGINIA: Optional[str]=None, GOV_US_IOWA: Optional[str]=None, GOV_US_ARIZONA: Optional[str]=None, GOV_US_TEXAS: Optional[str]=None, GOV_US_DOD_EAST: Optional[str]=None, GOV_US_DOD_CENTRAL: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...
    @classmethod
    def isGov(cls, region: str) -> bool:
    """
    Detect if region is government
    """
        ...
    @classmethod
    def isChina(cls, region: str) -> bool:
    """
    Detect if region is China
    """
        ...
    @classmethod
    def isGermany(cls, region: str) -> bool:
    """
    Detect if region is Germany
    """
        ...
    @classmethod
    def environmentForRegion(cls, region: str=None) -> Union[Any]:
    """
    Determines the appropriate azure environment information, like region-specific endpoints, for a region.
    """
        ...

