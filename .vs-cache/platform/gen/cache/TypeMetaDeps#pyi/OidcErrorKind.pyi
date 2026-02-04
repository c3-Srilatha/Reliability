#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type OidcErrorKind


class OidcErrorKind(OAuthErrorEnum):
    """
    Values that can be returned in the {@link OAuthErrorResponse.error} field of an {@link OAuthErrorResponse}
    
    @remarks this represents a made instance of OidcErrorKind
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

    interaction_required: Optional[str]=None
    """
    The Authorization Server requires End-User interaction of some form to proceed. This error MAY be returned when
    the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be
    completed without displaying a user interface for End-User interaction.
    """

    login_required: Optional[str]=None
    """
    The Authorization Server requires End-User authentication. This error MAY be returned when the prompt parameter
    value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying
    a user interface for End-User authentication.
    """

    account_selection_required: Optional[str]=None
    """
    The End-User is REQUIRED to select a session at the Authorization Server. The End-User MAY be authenticated at the
    Authorization Server with different associated accounts, but the End-User did not select a session. This error MAY
    be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request
    cannot be completed without displaying a user interface to prompt for a session to use.
    """

    consent_required: Optional[str]=None
    """
    The Authorization Server requires End-User consent. This error MAY be returned when the prompt parameter value in
    the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user
    interface for End-User consent.
    """

    invalid_request_uri: Optional[str]=None
    """
    The request_uri in the Authorization Request returns an error or contains invalid data.
    """

    invalid_request_object: Optional[str]=None
    """
    The request parameter contains an invalid Request Object.
    """

    request_not_supported: Optional[str]=None
    """
    The Oidc Provider does not support use of the request parameter.
    """

    request_uri_not_supported: Optional[str]=None
    """
    The Oidc Provider does not support use of the request_uri parameter.
    """

    registration_not_supported: Optional[str]=None
    """
    The Oidc Provider does not support use of the registration parameter.
    """
    def __init__(self, invalid_request: Optional[str]=None, invalid_client: Optional[str]=None, invalid_token: Optional[str]=None, invalid_grant: Optional[str]=None, invalid_scope: Optional[str]=None, unauthorized_client: Optional[str]=None, unsupported_grant_type: Optional[str]=None, interaction_required: Optional[str]=None, login_required: Optional[str]=None, account_selection_required: Optional[str]=None, consent_required: Optional[str]=None, invalid_request_uri: Optional[str]=None, invalid_request_object: Optional[str]=None, request_not_supported: Optional[str]=None, request_uri_not_supported: Optional[str]=None, registration_not_supported: Optional[str]=None) -> None: ...

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

