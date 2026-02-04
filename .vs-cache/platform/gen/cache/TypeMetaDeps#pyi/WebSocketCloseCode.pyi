#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type WebSocketCloseCode


class WebSocketCloseCode():
    """
    Common WebSocket close codes used by the platform.
    These codes indicate the reason why the WebSocket connection was closed.
    
    @remarks this represents a made instance of WebSocketCloseCode
    """
    
    NORMAL: Optional[int]=None
    """
    Normal closure - the purpose for which the connection was established has been fulfilled
    """

    GOING_AWAY: Optional[int]=None
    """
    Going away - the endpoint is going away, such as a server going down
    """

    PROTOCOL_ERROR: Optional[int]=None
    """
    Protocol error - the endpoint is terminating the connection due to a protocol error
    """

    UNSUPPORTED_DATA: Optional[int]=None
    """
    Unsupported data - the endpoint is terminating the connection because it has received data of a type it cannot accept
    """

    INVALID_FRAME_PAYLOAD_DATA: Optional[int]=None
    """
    Invalid frame payload data - the endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message
    """

    POLICY_VIOLATION: Optional[int]=None
    """
    Policy violation - the endpoint is terminating the connection because it has received a message that violates its policy
    """

    MESSAGE_TOO_BIG: Optional[int]=None
    """
    Message too big - the endpoint is terminating the connection because it has received a message that is too big for it to process
    """

    INTERNAL_SERVER_ERROR: Optional[int]=None
    """
    Internal server error - the server is terminating the connection because it encountered an unexpected condition
    """

    AUTHENTICATION_FAILED: Optional[int]=None
    """
    Authentication failed - custom code for authentication failure
    """

    SESSION_EXPIRED: Optional[int]=None
    """
    Session expired - custom code for session expiration
    """
    def __init__(self, NORMAL: Optional[int]=None, GOING_AWAY: Optional[int]=None, PROTOCOL_ERROR: Optional[int]=None, UNSUPPORTED_DATA: Optional[int]=None, INVALID_FRAME_PAYLOAD_DATA: Optional[int]=None, POLICY_VIOLATION: Optional[int]=None, MESSAGE_TOO_BIG: Optional[int]=None, INTERNAL_SERVER_ERROR: Optional[int]=None, AUTHENTICATION_FAILED: Optional[int]=None, SESSION_EXPIRED: Optional[int]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[int]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: int, failIfInvalid: bool=None) -> Union[str]:
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
    def valueIndex(cls, value: int, failIfInvalid: bool=None) -> int:
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
    def values(cls) -> Union[Array[int]]:
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
    def valueToLabels(cls) -> Union[Map[int, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, int]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: int) -> bool:
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
    def eachValue(cls, action: Callable[[int]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

