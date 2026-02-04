#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaUtil


class ExMachinaUtil(Value):
    """
    @remarks this represents a made instance of ExMachinaUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def getNextAvailableName(cls, typeName: str, typeFieldName: str, originalName: str) -> str:
    """
    Given the name of a type and the name to copy, return the name with the next available index
    For example,
    ExMachinaUtil.getNextAvailableName("ExMachinaProject", "name", "My Template") returns
    "My Template" if "My Template" does not exist as value in the field 'name' of 'ExMachinaProject'
    "My Template 1" if "My Template" does exist as value in the field 'name' of 'ExMachinaProject'
    "My Template 2" if "My Template" and "My Template 1" both exist as value in the field 'name' of 'ExMachinaProject'
    
    @param typeName
              The name of the type that will make a fetch() call to get all existing records of that type in the database
    @param typeFieldName
              The name of type field to get the name from
    @param originalName
              The name to generate from
    @return Either the original name if it doesn't exist. Otherwise, return the original name with the next available index
    """
        ...
    @classmethod
    def writeStringToFile(cls, url: str, content: str) -> Union[str]:
    """
    Writes a string into a file at the given location.
    
    @param url
              The location of the file
    @param content
              The string content to write into the file
    @return the url unless an exception was thrown
    """
        ...
    @classmethod
    def readFileBinary(cls, url: str) -> Union[any]:
    """
    Reads from a file and returns the binary contents
    
    @param url
              The location of the file
    @return the file contents
    """
        ...
    @classmethod
    def readFileString(cls, url: str) -> Union[str]:
    """
    Reads from a file and returns the string contents
    
    @param url
              The location of the file
    @return the file contents
    """
        ...
    @classmethod
    def checkUrl(cls, url: str) -> Union[str]:
    """
    Helper method to check whether a file URL is valid and throws an error if it is not.
    """
        ...
    @classmethod
    def getVanityUrlId(cls, tenant: str=None, tag: str=None, host: str=None) -> Union[str]:
    """
    Given a tenant and tag, returns the {@link VanityUrl.id}. This API exists to limit end-user access to the entire
    VanityUrl object.
    
    @param tenant
              The tenant.
    @param tag
              The tag.
    @param host
              The hostname to prefer if there are multiple matching VanityUrls.
    """
        ...
    @classmethod
    def isPartiallyInTimeRange(cls, start: datetime=None, end: datetime=None, rangeStart: datetime=None, rangeEnd: datetime=None) -> bool:
    """
    Returns whether a given time window falls partially within the provided range
    @param start
             The start date of the time interval
    @param end
             The end date of the time interval
    @param rangeStart
             The range start date
    @param rangeEnd
             The range end date
    """
        ...

