#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ExMachinaTemplateIndustry


class ExMachinaTemplateIndustry():
    """
    Type representing industry categories
    
    @remarks this represents a made instance of ExMachinaTemplateIndustry
    """
    
    AEROSPACE_DEFENSE: Optional[str]=None
    """
    Aerospace industry
    """

    BANKING_INSURANCE: Optional[str]=None
    """
    Banking and Insurance industry
    """

    CONSTRUCTION_REAL_ESTATE: Optional[str]=None
    """
    Construction and Real Estate industry
    """

    EDUCATION: Optional[str]=None
    """
    Education industry
    """

    ENERGY_UTILITIES: Optional[str]=None
    """
    Energy and utilities industry
    """

    HEALTHCARE_PHARMA: Optional[str]=None
    """
    Healthcare and pharma industry
    """

    MANUFACTURING_CHEMICAL: Optional[str]=None
    """
    Manufacturing and chemical industry
    """

    OIL_GAS_MINING: Optional[str]=None
    """
    Oil Gas Mining industry
    """

    OTHER: Optional[str]=None
    """
    The 'Other' industry category
    """

    PROFESSIONAL_SERVICES: Optional[str]=None
    """
    Professional services industry
    """

    PUBLIC_SECTOR: Optional[str]=None
    """
    Public Sector industry
    """

    RETAIL_ECOMMERCE: Optional[str]=None
    """
    Retail and eCommerce industry
    """

    TECH_MEDIA_TELECOM: Optional[str]=None
    """
    Tech Media Telecom industry
    """

    TRANSPORTATION_LOGISTICS: Optional[str]=None
    """
    Transportation Logisitcs industry
    """
    def __init__(self, AEROSPACE_DEFENSE: Optional[str]=None, BANKING_INSURANCE: Optional[str]=None, CONSTRUCTION_REAL_ESTATE: Optional[str]=None, EDUCATION: Optional[str]=None, ENERGY_UTILITIES: Optional[str]=None, HEALTHCARE_PHARMA: Optional[str]=None, MANUFACTURING_CHEMICAL: Optional[str]=None, OIL_GAS_MINING: Optional[str]=None, OTHER: Optional[str]=None, PROFESSIONAL_SERVICES: Optional[str]=None, PUBLIC_SECTOR: Optional[str]=None, RETAIL_ECOMMERCE: Optional[str]=None, TECH_MEDIA_TELECOM: Optional[str]=None, TRANSPORTATION_LOGISTICS: Optional[str]=None) -> None: ...

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

