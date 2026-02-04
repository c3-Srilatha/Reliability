#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type OAuthErrorEnum


class OAuthErrorEnum():
    """
    Values that can be returned in the {@link OAuthErrorResponse.error} field of an {@link OAuthErrorResponse}
    
    @remarks this represents a made instance of OAuthErrorEnum
    """
    
    invalid_request: Optional[str]=None
    """
    The request is missing a parameter so the server can’t proceed with the request.
    This may also be returned if the request includes an unsupported parameter or repeats a parameter.
    """

    invalid_client: Optional[str]=None
    """
    Client authentication failed, such as if the request contains an invalid client ID or secret.
    Sends an HTTP 401 response in this case.
    """

    invalid_token: Optional[str]=None
    """
    Token Validation failed, such as if the token has expired.
    """

    invalid_grant: Optional[str]=None
    """
    The authorization code (or user’s password for the password grant type) is invalid or expired.
    This is also the error you would return if the redirect URI given in the authorization grant
    does not match the URI provided in this access token request.
    """

    invalid_scope: Optional[str]=None
    """
    For access token requests that include a scope (password or client_credentials grants), this error
    indicates an invalid scope value in the request.
    """

    unauthorized_client: Optional[str]=None
    """
    This client is not authorized to use the requested grant type. For example, if you restrict which
    applications can use the Implicit grant, you would return this error for the other apps.
    """

    unsupported_grant_type: Optional[str]=None
    """
    If a grant type is requested that the authorization server doesn’t recognize, use this code.
    Note that unknown grant types also use this specific error code rather than using the invalid_request above.
    """
    def __init__(self, invalid_request: Optional[str]=None, invalid_client: Optional[str]=None, invalid_token: Optional[str]=None, invalid_grant: Optional[str]=None, invalid_scope: Optional[str]=None, unauthorized_client: Optional[str]=None, unsupported_grant_type: Optional[str]=None) -> None: ...

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

