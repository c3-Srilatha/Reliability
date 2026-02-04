#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Url import Url
from c3.platform.User import User
from c3.platform.AuthenticationSpec import AuthenticationSpec
from c3.platform.Logger import Logger
from c3.platform.AuthenticateResult import AuthenticateResult
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse
from c3.platform.IdpConfig import IdpConfig
from c3.platform.Pair import Pair
from c3.platform.StrPair import StrPair

# Python definitions for the C3 type Authenticator


class Authenticator(Value, Restful):
    """
    @remarks this represents a made instance of Authenticator
    """
    def __init__(self) -> None: ...

    @classmethod
    def handle(cls, httpPath: str, req: HttpRequest) -> Union[HttpResponse]:
    """
    Optional handler of all HTTP requests under `@restful(endpoint)` prefix from one and only sub type of Restful
    """
        ...
    @classmethod
    def targetFor(cls, httpPath: str) -> Union[Pair[Type, MethodType]]:
    """
    Find restful type and potentially method responsible for handling HTTP request with provided path or `null`
    """
        ...
    @classmethod
    def currentRequest(cls) -> Union[HttpRequest]:
    """
    While handling a RESTful request, the incoming HTTP request can be accessed. This works even for types that do not
    mixin **Restful**, but just use {@link Ann.Restful @restful} annotations.
    """
        ...
    def origin(self) -> Union[str]:
    """
    Get the origin URL for this endpoint. This only works for RESTful endpoints that mixin **Restful**.
    
    @see endpointOrigin
    """
        ...
    @classmethod
    def endpointOrigin(cls, endpoint: str) -> Union[str]:
    """
    Get the origin URL for an endpoint. This is useful for types that do not mixin **Restful**, but just use
    {@link Ann.Restful @restful} annotations.
    """
        ...
    @classmethod
    def login(cls) -> Union[HttpResponse]:
    """
    Authenticates the user using Authorization header that is sent to the endpoint.
    
    @return - Response with status code 200 and the session token set in the Set-Cookie header. Status code 401 otherwise.
    """
        ...
    @classmethod
    def handleRequest(cls, req: HttpRequest=None) -> Union[AuthenticateResult]:
    """
    Handler of all HTTP requests that require authentication.
    """
        ...
    @overload
    @classmethod
    def authenticate(cls, req: HttpRequest) -> AuthenticateResult:
    """
    Authenticates the authorization data supplied via HttpRequest {@link HttpRequest}.
    
    @param req
             HttpRequest
    @return - User if authentication is successful, HttpResponse otherwise
    """
        ...
    @overload
    @classmethod
    def authenticate(cls, spec: AuthenticationSpec) -> AuthenticateResult:
        ...
    @overload
    @classmethod
    def authenticate(cls, authenticationData: str, req: HttpRequest=None) -> AuthenticateResult:
    """
    Authenticate user supplied authentication data.
    """
        ...
    @classmethod
    def logout(cls, req: HttpRequest=None) -> Union[HttpResponse]:
        ...
    @classmethod
    def generateActionAuthToken(cls) -> str:
    """
    Generate a C3 Action Authentication Token ({@link action-auth-token.c3doc.md Action Authentication and Propagation}).
    
    @return The action authentication token.
    """
        ...
    @classmethod
    def generateC3KeyAuthToken(cls, username: str, privateKey: str) -> str:
    """
    Generate c3 key auth token with given username and user's private key
    
    @param username
             user identifier
    @param privateKey
             private key of the user
    
    @return a c3 key auth token
    """
        ...
    @classmethod
    def generateBasicAuthToken(cls, username: str, password: str) -> str:
    """
    Generate basic auth token with given username and password.
    
    @param username
             user identifier.
    @param password
             user password.
    
    @return a basic auth token generated with given username and password.
    """
        ...
    @classmethod
    def parseBasicAuthToken(cls, token: str) -> Union[StrPair]:
    """
    Parse a basic token
    
    @param token
               token to be parsed.
    
    @return a user & password from auth token
    """
        ...
    @classmethod
    def firstLogin(cls, req: HttpRequest=None) -> bool:
    """
    Determines if the provided request is the first login or not
    """
        ...
    @classmethod
    def isAnonymousAccessAllowed(cls, req: HttpRequest) -> bool:
    """
    Returns whether authentication is required to access the given endpoint
    
    @param req
               HttpRequest
    
    @return a boolean representing whether anonymous access is allowed
    """
        ...
    @classmethod
    def idpConfig(cls, host: str, failIfMissing: bool=None) -> Union[IdpConfig]:
    """
    Returns the IdpConfig associated with the given host.
    @param host
              host for which IdpConfig is configured for
    
    @return the IdpConfig configured for the host. If it does not exist, returns null.
    """
        ...
    @classmethod
    def isIdpConfiguredForUrl(cls, url: Url) -> bool:
    """
    Returns whether basic auth is used for authentication.
    
    @return a boolean representing whether this {@link App} use basic auth.
    """
        ...
    @classmethod
    def denyUser(cls, req: HttpRequest) -> AuthenticateResult:
    """
    Prepare auth denied response
    @param req
               HttpRequest that was used to login
    """
        ...
    @classmethod
    def unauthorized(cls, req: HttpRequest, headers: Map[str, Array[str]]=None) -> AuthenticateResult:
    """
    Creates an 401 Unauthorized HttpResponse with the given headers.
    """
        ...
    @classmethod
    def noContent(cls, req: HttpRequest) -> AuthenticateResult:
    """
    The authentication result with no-content
    """
        ...
    @classmethod
    def result(cls, user: User, req: HttpRequest, resp: HttpResponse=None) -> AuthenticateResult:
    """
    The authentication result for a given user
    """
        ...
    @classmethod
    def logAuthenticationInformation(cls, logger: Logger, loggerLevel: str, msg: str) -> None:
    """
    Properly logs authentication information for all subtypes
    """
        ...

