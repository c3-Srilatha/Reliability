#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type OAuthEnum


class OAuthEnum(OAuthCodeChallengeMethodEnum):
    """
    Values used in OAuth requests.
    
    @remarks this represents a made instance of OAuthEnum
    """
    
    plain: Optional[str]=None
    """
    {@link OAuth.authorize} code_challenge_method
    code_challenge = code_verifier
    """

    S256: Optional[str]=None
    """
    {@link OAuth.authorize} code_challenge_method
    code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))
    """

    authorization_code: Optional[str]=None
    """
    {@link OAuth.token} grant_type: Application exchanges an authorization code for an access token.
    """

    client_credentials: Optional[str]=None
    """
    {@link OAuth.token} grant_type: The client credentials (or other forms of client authentication) can be
    used as an authorization grant when the authorization scope is limited to the protected resources under
    the control of the client, or to protected resources previously arranged with the authorization server.
    """

    password: Optional[str]=None
    """
    {@link OAuth.token} grant_type: The resource owner password credentials (i.e., username and password)
    can be used directly as an authorization grant to obtain an access token.
    
    NOT SUPPORTED
    """

    implicit: Optional[str]=None
    """
    {@link OAuth.token} grant_type: used to obtain access tokens (it does not support the issuance of refresh
    tokens) and is optimized for public clients known to operate a particular redirection URI. These clients
    are typically implemented in a browser using a scripting language such as JavaScript.
    Since this is a redirection-based flow, the client must be capable of interacting with the resource
    owner's user-agent (typically a web browser) and capable of receiving incoming requests (via redirection)
    from the authorization server.
    
    NOT SUPPORTED
    """

    refresh_token: Optional[str]=None
    """
    {@link OAuth.tokenRefresh} grant_type: Used to refresh an access token
    """

    bearer: Optional[str]=None
    """
    {@link OAuth.tokenRefresh} /token token_type value
    """

    access_token: Optional[str]=None
    """
    {@link OAuth.tokenRefresh} /token token_type_hint value
    """

    code: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize response_type value
    """

    response_type: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    client_id: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    client_secret: Optional[str]=None
    """
    {@link OAuth.token} /token parameter name
    """

    scope: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    redirect_uri: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    state: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    grant_type: Optional[str]=None
    """
    {@link OAuth.token} /token parameter name
    """

    code_verifier: Optional[str]=None
    """
    {@link OAuth.token} /token parameter name, used for PKCE authorization
    """

    code_challenge: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    code_challenge_method: Optional[str]=None
    """
    {@link OAuth.authorize} /authorize parameter name
    """

    token: Optional[str]=None
    """
    {@link OAuth.revoke} revoke parameter name
    """

    token_type_hint: Optional[str]=None
    """
    {@link OAuth.revoke} revoke parameter name
    """

    client_assertion_type: Optional[str]=None
    """
    Used  by the Rest Engine when configured to use the OAuth2 client credentials flow.
    The client assertion type is the type of assertion used to authenticate the client.
    """

    client_assertion: Optional[str]=None
    """
    Used by the Rest Engine when configured to use the OAuth2 client credentials flow.
    The client assertion is the assertion used to authenticate the client.
    """
    def __init__(self, plain: Optional[str]=None, S256: Optional[str]=None, authorization_code: Optional[str]=None, client_credentials: Optional[str]=None, password: Optional[str]=None, implicit: Optional[str]=None, refresh_token: Optional[str]=None, bearer: Optional[str]=None, access_token: Optional[str]=None, code: Optional[str]=None, response_type: Optional[str]=None, client_id: Optional[str]=None, client_secret: Optional[str]=None, scope: Optional[str]=None, redirect_uri: Optional[str]=None, state: Optional[str]=None, grant_type: Optional[str]=None, code_verifier: Optional[str]=None, code_challenge: Optional[str]=None, code_challenge_method: Optional[str]=None, token: Optional[str]=None, token_type_hint: Optional[str]=None, client_assertion_type: Optional[str]=None, client_assertion: Optional[str]=None) -> None: ...

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

