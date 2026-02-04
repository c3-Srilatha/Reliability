#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type OidcAuthFlowKind


class OidcAuthFlowKind():
    """
    OpenID Connect performs authentication to log in the End-User or to determine that the End-User is already logged in.
    OpenID Connect returns the result of the Authentication performed by the Server to the Client in a secure manner so
    that the Client can rely on it. For this reason, the Client is called Relying Party (RP) in this case.
    
    The Authentication result is returned in an ID Token, as defined in Section 2. It has Claims expressing such
    information as the Issuer, the Subject Identifier, when the authentication expires, etc.
    
    Authentication can follow one of three paths: the Authorization Code Flow (response_type=code), the Implicit Flow
    (response_type=id_token token or response_type=id_token), or the Hybrid Flow (using other Response Type values
    defined in OAuth 2.0 Multiple Response Type Encoding Practices [OAuth.Responses]). The flows determine how the ID
    Token and Access Token are returned to the Client.
    
    @remarks this represents a made instance of OidcAuthFlowKind
    """
    
    AUTHORIZATION_CODE: Optional[str]=None

    IMPLICIT: Optional[str]=None

    HYBRID: Optional[str]=None
    def __init__(self, AUTHORIZATION_CODE: Optional[str]=None, IMPLICIT: Optional[str]=None, HYBRID: Optional[str]=None) -> None: ...

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

