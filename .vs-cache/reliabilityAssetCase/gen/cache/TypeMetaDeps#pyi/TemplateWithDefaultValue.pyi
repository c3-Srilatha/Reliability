#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type TemplateWithDefaultValue


class TemplateWithDefaultValue(Value):
    """
    The {@link Value} type representing a template with the ability to format
    with default values for missing variables.
    
    @remarks this represents a made instance of TemplateWithDefaultValue
    """
    def __init__(self) -> None: ...

    @classmethod
    def format(cls, id: str, bindings: any=None, defaultValue: str=None) -> str:
    """
    Fill the {@link Template} by the `defaultValue` for variables not provided in the `bindings`
    
    @param id
           The identifier of the template to format.
    @param bindings
           A JSON object containing variable bindings for the template.
    @param defaultValue
           The value to use for missing variables in the template.
    @return The formatted template as a string, with default values for missing variables.
    """
        ...

