#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ModelDetailTabPanelHelper


class ModelDetailTabPanelHelper(Value):
    """
    Helper type for filling the Model Detail Page Tab Panel info.
    
    @remarks this represents a made instance of ModelDetailTabPanelHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def get(cls, id: str=None) -> Union[any]:
    """
    Function to grab information for {@link ReliabilityMlModel} on Model Detail page.
    @param id
           Id of the {@link ReliabilityMlModel} of which to grab data
    @return The model information data as JSON
    """
        ...
    @classmethod
    def updateMonitoringClassificationAsCurrentUser(cls, formObject: any=None) -> None:
    """
    Function to update model monitoring classification as the current {@link User}.
    
    @param formObject
           The form object with the monitoring classification label.
    """
        ...

