#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type HttpMethod


class HttpMethod():
    """
    HTTP protocol request methods
    
    @remarks this represents a made instance of HttpMethod
    """
    
    GET: Optional[str]=None
    """
    The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
    """

    HEAD: Optional[str]=None
    """
    The HEAD method asks for a response identical to that of a GET request, but without the response body.
    """

    POST: Optional[str]=None
    """
    The POST method is used to submit an entity to the specified resource, often causing a change in state or side
    effects on the server.
    """

    PUT: Optional[str]=None
    """
    The PUT method replaces all current representations of the target resource with the request payload.
    """

    DELETE: Optional[str]=None
    """
    The DELETE method deletes the specified resource.
    """

    CONNECT: Optional[str]=None
    """
    The CONNECT method establishes a tunnel to the server identified by the target resource.
    """

    OPTIONS: Optional[str]=None
    """
    The OPTIONS method is used to describe the communication options for the target resource.
    """

    TRACE: Optional[str]=None
    """
    The TRACE method performs a message loop-back test along the path to the target resource.
    """

    PATCH: Optional[str]=None
    """
    The PATCH method is used to apply partial modifications to a resource.
    """
    def __init__(self, GET: Optional[str]=None, HEAD: Optional[str]=None, POST: Optional[str]=None, PUT: Optional[str]=None, DELETE: Optional[str]=None, CONNECT: Optional[str]=None, OPTIONS: Optional[str]=None, TRACE: Optional[str]=None, PATCH: Optional[str]=None) -> None: ...

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
    def isIdempotent(cls, method: str) -> bool:
    """
    Returns true if the given http method operation is idempotent GET/PUT/DELETE/OPTIONS/HEAD
    """
        ...

