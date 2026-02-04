#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchResult import FetchResult

# Python definitions for the C3 type ReliabilityConfigForm


class ReliabilityConfigForm(Value):
    """
    Helper type for forms based on application-wide configurations, e.g. {@link ReliabilityMLConfig}.
    
    @remarks this represents a made instance of ReliabilityConfigForm
    """
    
    CONFIG_FIELDS_TO_HIDE: Optional[Map[str, Array[str]]]=None
    """
    The fields to hide in the form for the given config type.
    The key is the name of the config type, and the value is an array of field names to hide.
    """
    def __init__(self, CONFIG_FIELDS_TO_HIDE: Optional[Map[str, Array[str]]]=None) -> None: ...

    @classmethod
    def getFormConfig(cls, configTypeName: str) -> Union[any]:
    """
    Function to dynamically generate a pre-filled form based on the fields of the given {@link Config} type.
    @param configTypeName
              Name of config type for which form needs to be displayed
    @return UI component for Form based on configTypeName
    """
        ...
    @classmethod
    def getConfig(cls, configTypeName: str) -> Union[any]:
    """
    Function to get the config. This is just a wrapper to {@link Singleton#inst} but necessary because we need to
    add the name of the config type to the object.
    
    @param configTypeName
              The name of the config type to retrieve
    @return The configuration object for the specified type
    """
        ...
    @classmethod
    def getConfigAsFetchResult(cls, configTypeName: str, path: str, spec: any=None) -> Union[FetchResult[any]]:
    """
    Function to get the value of an array field in the config as a fetch result.
    Used by the form grid components to pre-populate their values.
    @param configTypeName The name of the config type.
    @param path The path to the array field in the config.
    @param spec This field is ignored, and is only present to work around form grid dataspec limitations.
    @returns The field value wrapped into a fetch result.
    """
        ...
    @classmethod
    def saveConfig(cls, formObject: any) -> None:
    """
    Function called upon form submit.
    
    @param formObject
              The form data object to be saved
    """
        ...

