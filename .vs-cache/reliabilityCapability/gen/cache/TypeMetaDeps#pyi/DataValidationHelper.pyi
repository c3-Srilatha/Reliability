#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type DataValidationHelper


class DataValidationHelper(Value):
    """
    Non-entity helper type used to facilitate various data validation workflows.
    
    @remarks this represents a made instance of DataValidationHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getTypeFilterForParentAsset(cls, targetType: Type, parentAsset: str=None) -> Union[str]:
    """
    Returns a filter string for the given type which limits results to those related to the given parent asset.
    """
        ...

