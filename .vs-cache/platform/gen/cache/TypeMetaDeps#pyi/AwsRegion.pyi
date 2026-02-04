#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsRegion


class AwsRegion():
    """
    Enumeration of all known AWS regions.
    
    @remarks this represents a made instance of AwsRegion
    """
    
    US_EAST_1: Optional[str]=None
    """
    PLAT-8165 has an explanation why we need to remove unused regions.
    
    US East (N. Virginia)
    """

    US_EAST_2: Optional[str]=None
    """
    US East (Ohio)
    """

    US_WEST_1: Optional[str]=None
    """
    US West (N. California)
    """

    US_WEST_2: Optional[str]=None
    """
    US West (Oregon)
    """

    AP_SOUTHEAST_2: Optional[str]=None
    """
    Asia Pacific (Tokyo)
    
    AP_NORTHEAST_1 = 'ap-northeast-1'
    
    Asia Pacific (Seoul)
    
    AP_NORTHEAST_2 = 'ap-northeast-2'
    
    Asia Pacific (Singapore)
    
    AP_SOUTHEAST_1 = 'ap-southeast-1'
    
    Asia Pacific (Sydney)
    """

    EU_CENTRAL_1: Optional[str]=None
    """
    China Beijing
    
    CN_NORTH_1 = 'cn-north-1'
    
    EU (Frankfurt)
    """

    EU_WEST_1: Optional[str]=None
    """
    EU (Ireland)
    """

    US_GOV_WEST_1: Optional[str]=None
    """
    EU (London)
    
    EU_WEST_2 = 'eu-west-2'
    
    US government agencies and commercial entities use
    
    GOV_CLOUD = 'govcloud'
    
    South America (São Paulo)
    
    SA_EAST_1 = 'sa-east-1'
    
    Canada (Central)
    
    CA_central_1 = 'ca-central-1'
    
    Asia Pacific (Mumbai)
    
    AP_south_1 = 'ap-south-1'
    
    US government agencies and commercial entities use (us-west)
    """
    def __init__(self, US_EAST_1: Optional[str]=None, US_EAST_2: Optional[str]=None, US_WEST_1: Optional[str]=None, US_WEST_2: Optional[str]=None, AP_SOUTHEAST_2: Optional[str]=None, EU_CENTRAL_1: Optional[str]=None, EU_WEST_1: Optional[str]=None, US_GOV_WEST_1: Optional[str]=None) -> None: ...

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

