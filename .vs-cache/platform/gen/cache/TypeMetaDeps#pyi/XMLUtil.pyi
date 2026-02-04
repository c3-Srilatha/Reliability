#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type XMLUtil


class XMLUtil(Value):
    """
    @remarks this represents a made instance of XMLUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateXml(cls, xmlFilePath: str=None, xsdFilePath: str=None) -> bool:
    """
    Validate the xml file against a given schema file
    If the xml is not valid, an exception will be thrown containing the validation error information
    else it will return TRUE.
    @return true if the xml file is valid
    """
        ...

