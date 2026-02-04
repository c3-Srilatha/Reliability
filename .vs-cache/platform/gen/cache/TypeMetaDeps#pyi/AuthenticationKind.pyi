#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AuthenticationKind


class AuthenticationKind():
    """
    Type to represent the authentication mechanism.
    
    @remarks this represents a made instance of AuthenticationKind
    """
    
    BASIC: Optional[str]=None
    """
    Basic authentication with user name and password.
    """

    TEST: Optional[str]=None
    """
    Authentication with Test Identity Provider
    """

    C3_REGISTRATION: Optional[str]=None
    """
    Authentication for registration with C3
    """

    SAML: Optional[str]=None
    """
    Authentication using SAML
    """

    OIDC: Optional[str]=None
    """
    Authentication using Oidc
    """

    OIDC_DIRECT_LOGIN: Optional[str]=None
    """
    Authentication using Oidc Direct Login
    """

    LDAP: Optional[str]=None
    """
    Authentication using Ldap
    """

    SESSION: Optional[str]=None
    """
    Authentication using session token
    """

    APP: Optional[str]=None
    """
    Authentication using app token
    """

    UNDEFINED: Optional[str]=None
    """
    Undefined Authorization Header
    """

    C3: Optional[str]=None
    """
    Authentication with c3auth set in cookie.
    """

    KEY: Optional[str]=None
    """
    With Public private key pair authentication.
    """

    BEARER: Optional[str]=None
    """
    OAuth authentication.
    """

    ACTION: Optional[str]=None
    """
    Action authentication for call back from external process.
    """

    CLUSTER: Optional[str]=None
    """
    With cluster's public key and private key pair authentication.
    """

    SIGNATURE: Optional[str]=None
    """
    Signature based authentication. Used for inter cluster authentication.
    Currently only supported for the ClusterDispatcher.
    """

    C3BEARER: Optional[str]=None
    """
    C3 Api authentication
    """

    OAUTH_CODE: Optional[str]=None
    """
    C3 OAuth Authorization Code
    """

    OAUTH_REFRESH: Optional[str]=None
    """
    C3 OAuth Refresh Token
    """

    OAUTH_CLIENT_CREDENTIAL: Optional[str]=None
    """
    C3 OAuth Authentication with Client Credentials
    """

    K8S: Optional[str]=None
    """
    K8s Token
    """
    def __init__(self, BASIC: Optional[str]=None, TEST: Optional[str]=None, C3_REGISTRATION: Optional[str]=None, SAML: Optional[str]=None, OIDC: Optional[str]=None, OIDC_DIRECT_LOGIN: Optional[str]=None, LDAP: Optional[str]=None, SESSION: Optional[str]=None, APP: Optional[str]=None, UNDEFINED: Optional[str]=None, C3: Optional[str]=None, KEY: Optional[str]=None, BEARER: Optional[str]=None, ACTION: Optional[str]=None, CLUSTER: Optional[str]=None, SIGNATURE: Optional[str]=None, C3BEARER: Optional[str]=None, OAUTH_CODE: Optional[str]=None, OAUTH_REFRESH: Optional[str]=None, OAUTH_CLIENT_CREDENTIAL: Optional[str]=None, K8S: Optional[str]=None) -> None: ...

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

