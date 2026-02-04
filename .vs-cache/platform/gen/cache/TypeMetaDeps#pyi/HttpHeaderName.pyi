#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type HttpHeaderName


class HttpHeaderName():
    """
    Http header names used by C3 platform.
    
    @remarks this represents a made instance of HttpHeaderName
    """
    
    ACCEPT: Optional[str]=None
    """
    Media type(s) that is/are acceptable for the response.
    """

    AUTHORIZATION: Optional[str]=None
    """
    Authentication credentials for HTTP authentication.
    """

    ACCEPT_ENCODING: Optional[str]=None
    """
    List of acceptable encodings. See HTTP compression.
    """

    CONTENT_TYPE: Optional[str]=None
    """
    The Media type of the body of the request (used with POST and PUT requests).
    """

    CONTENT_ENCODING: Optional[str]=None
    """
    The Content Encoding of the body of the request (used with POST and PUT requests).
    """

    CONTENT_LOCATION: Optional[str]=None
    """
    The Content Location of the body of the request (used with POST and PUT requests).
    """

    CONTENT_DISPOSITION: Optional[str]=None
    """
    How the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page,
    or as an attachment, that is downloaded and saved locally.
    """

    CONTENT_LENGTH: Optional[str]=None
    """
    The length of the content body
    """

    CONTENT_LANGUAGE: Optional[str]=None
    """
    The Content-Language representation header is used to describe the language(s) intended for the audience,
    so users can differentiate it according to their own preferred language.
    """

    CONTENT_MD5: Optional[str]=None
    """
    The Content-MD5 header is used by servers to provide a message-integrity check for the message body.
    Only an origin server or requesting client should insert a Content-MD5 header in the message.
    The value of the header is an MD5 digest[6] of the (potentially encoded) message body.
    """

    COOKIE: Optional[str]=None
    """
    An HTTP cookie previously sent by the server with Set-Cookie (below).
    """

    ETAG: Optional[str]=None
    """
    The response header containing the hash of the response body for caching.
    
    @see #IF_NONE_MATCH
    """

    IF_NONE_MATCH: Optional[str]=None
    """
    The request header containing the hash of the prior cached response for invalidation check.
    
    @see #ETAG
    """

    LOCATION: Optional[str]=None
    """
    The Location response-header field is used to redirect the recipient to a location other than the Request-URI for
    completion of the request or identification of a new resource. For 201 (Created) responses, the Location is that
    of the new resource which was created by the request. For 3xx responses, the location SHOULD indicate the server's
    preferred URI for automatic redirection to the resource. The field value consists of a single URI-reference.
    When it has the form of a relative reference ([RFC3986], Section 4.2), the final value is computed by resolving it
    against the effective request URI ([RFC3986], Section 5).
    """

    LAST_MODIFIED: Optional[str]=None

    UPGRADE: Optional[str]=None
    """
    The Upgrade general-header allows the client to specify what additional communication protocols it supports and
    would like to use if the server finds it appropriate to switch protocols. The server MUST use the Upgrade header
    field within a 101 (Switching Protocols) response to indicate which protocol(s) are being switched.
    """

    WS_UPGRADE_PROXY_TO: Optional[str]=None
    """
    Endpoint URI of WebSocket proxy request. Used for the Upgrade Connection request.
    """

    CONNECTION: Optional[str]=None
    """
    The Connection general-header field allows the sender to specify options that are desired for that particular
    connection and MUST NOT be communicated by proxies over further connections.
    """

    HOST: Optional[str]=None
    """
    The Host header specifies the Internet host and port number of the resource being requested,
    as obtained from the original URI given by the user or referring resource (RFC 2616 ).
    """

    X_FORWARDED_HOST: Optional[str]=None
    """
    The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the originating host requested
    by the client in the Host HTTP request header to the proxy or load balancer.
    """

    X_FORWARDED_PROTO: Optional[str]=None
    """
    The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that
    a client used to connect to the proxy or load balancer.
    """

    ORIGIN: Optional[str]=None
    """
    The Origin header specifies the origin of the request.
    """

    REFERER: Optional[str]=None
    """
    The Referer HTTP request header contains an absolute or partial address of the page that makes the request.
    """

    SET_COOKIE: Optional[str]=None
    """
    The HTTP Set-Cookie header sent in response.
    """

    STRICT_TRANSPORT_SECURITY: Optional[str]=None
    """
    Only HTTPS access is allowed.
    """

    STREAM: Optional[str]=None
    """
    Indicates that the action can stream back results.
    """

    PRETTY_PRINT: Optional[str]=None

    ENVELOPE: Optional[str]=None

    REQUEST_ENVELOPE: Optional[str]=None

    RESPONSE_ENVELOPE: Optional[str]=None

    CLIENT_ID: Optional[str]=None
    """
    Opaque client id in request
    """

    REQUEST_ID: Optional[str]=None
    """
    Opaque client request id in request
    """

    C3_PARENT_ACTION_ID: Optional[str]=None
    """
    This header is used to inform the dispatcher that this request is a child action of the given parent action id.
    The corresponding http header name is "X-C3-Parent-Action-Id".
    """

    C3_REFERRER: Optional[str]=None
    """
    This header can be set by a client to overwrite the 'Referer' header.
    For example, Rails uses it to pass the real request referrer instead of the Rails endpoint.
    """

    C3_TYPE_AWARE: Optional[str]=None

    C3_PROXY_URL: Optional[str]=None

    C3_ENV: Optional[str]=None
    """
    Environment associated with the request's host (domain).
    """

    C3_APP: Optional[str]=None
    """
    Application associated with the request's host (domain).
    """

    C3_CANONICAL: Optional[str]=None
    """
    Cookie indicating whether canonical url was used for the request.
    """

    C3_CSRF_TOKEN: Optional[str]=None
    """
    CSRF protection token.
    """

    X_CSRF_TOKEN: Optional[str]=None
    """
    CSRF protection token.
    """

    ACTION_INFO: Optional[str]=None
    """
    C3 Server Action id
    """

    ACTION_INTERRUPT_IN: Optional[str]=None
    """
    {@link Duration} after which the action should be interrupted, if still running.
    """

    TIMING_INFO: Optional[str]=None
    """
    C3 Server Action execution time
    """

    IMPERSONATE_USER: Optional[str]=None
    """
    This header allows to run an action in context of an impersonatee user if the impersonator(original user) has permissions
    to execute {@link UserAdmin#impersonate} and if impersonator has higher security level than impersonatee.
    """

    TUNNEL_TO: Optional[str]=None
    """
    Tunnel request to.
    """

    TUNNEL_FROM: Optional[str]=None
    """
    Request tunneled from.
    """

    TUNNEL_AUTHORIZATION: Optional[str]=None
    """
    Authorization token for tunneled request.
    """

    TUNNEL_TENANT: Optional[str]=None
    """
    Tenant for tunneled request.
    """

    TUNNEL_TAG: Optional[str]=None
    """
    Tag for tunneled request.
    """

    TUNNEL_STATUS: Optional[str]=None
    """
    Http status code of tunneled request.
    """

    TUNNEL_FROM_C3AUTH: Optional[str]=None
    """
    c3auth token returned by tunneled request.
    """

    TUNNEL_FROM_CANONICAL: Optional[str]=None
    """
    Canonical header from tunneled request.
    """

    TUNNEL_FROM_TENANT: Optional[str]=None
    """
    C3 Tenant from tunneled request.
    """

    TUNNEL_FROM_TAG: Optional[str]=None
    """
    C3 Tag from tunneled request.
    """

    TUNNEL_FROM_ACTION_INFO: Optional[str]=None
    """
    C3 Server Action id
    """

    TUNNEL_FROM_TIMING_INFO: Optional[str]=None
    """
    C3 Server Action execution time of tunneled request
    """

    TUNNEL_TIMEOUT_SECS: Optional[str]=None
    """
    Override default timeout (60 seconds) parameter for tunneled request. Only values greater than 60 seconds are allowed.
    """

    ACTION_ENGINE: Optional[str]=None
    """
    Provide an action engine to customize serialization the response of an API call.
    """

    BUNDLE: Optional[str]=None
    """
    Specify a resource is part of a client-defined bundle.
    """

    SSE_SEND_PING: Optional[str]=None
    """
    Specify whether to receive ping events through SSE.
    If true the SSE channel will receive periodic ping events
    Which serve as heartbeat to the connection.
    """

    C3_RETURN_TYPE: Optional[str]=None
    """
    Return type of the API response. This header indicates the type of data being returned.
    """

    TEXT_SIZE: Optional[str]=None
    """
    Jenkins specific header for text size. @see Jenkins_Test
    """

    WWW_AUTHENTICATE: Optional[str]=None
    """
    Specify a authentication challenge when a 401 response is sent.
    """

    VARY: Optional[str]=None
    """
    Determines how to match future request headers and whether to serve cached content for the request
    """

    X_XSS_PROTECTION: Optional[str]=None
    """
    Specifies a browser configuration that stops pages from loading when
    they detect reflected cross-site scripting (XSS) attacks
    """

    CONTENT_SECURITY_POLICY: Optional[str]=None
    """
    Specifies the resources the user agent is allowed to load for a given page.
    """

    X_FRAME_OPTIONS: Optional[str]=None
    """
    Specifies whether or not a browser should be allowed to render a page
    in a <frame>, <iframe>, <embed> or <object>
    """

    ACCESS_CONTROL_ALLOW_ORIGIN: Optional[str]=None
    """
    Specifies whether the response can be shared with requesting code from the given origin.
    """

    ACCESS_CONTROL_ALLOW_CREDENTIALS: Optional[str]=None
    """
    Specifies whether to expose the response to the frontend JavaScript code when the
    request's credentials mode is 'include'.
    """

    ACCESS_CONTROL_ALLOW_HEADERS: Optional[str]=None
    """
    Specifies allowed headers in the response.
    """

    ACCESS_CONTROL_ALLOW_METHODS: Optional[str]=None
    """
    Specifies allowed methods in the response.
    """

    ACCESS_CONTROL_REQUEST_HEADERS: Optional[str]=None
    """
    Specifies requested headers by client in the preflight request.
    """

    CACHE_CONTROL: Optional[str]=None
    """
    Controls caching behavior in browsers and shared caches
    """

    EXPIRES: Optional[str]=None
    """
    Specifies the date/time after which the response is considered expired.
    """

    PRAGMA: Optional[str]=None
    """
    Specifies a behavior that is the same as Cache-Control: no-cache if
    the Cache-Control header field is omitted in a request.
    Use for backwards compatibility with HTTP/1.0 clients.
    """

    C3_LANGUAGE: Optional[str]=None
    """
    The requested language from the client for localization by the server.
    
    @see https://www.rfc-editor.org/rfc/bcp/bcp47.txt
    """

    C3_TENANT: Optional[str]=None

    C3_TAG: Optional[str]=None
    def __init__(self, ACCEPT: Optional[str]=None, AUTHORIZATION: Optional[str]=None, ACCEPT_ENCODING: Optional[str]=None, CONTENT_TYPE: Optional[str]=None, CONTENT_ENCODING: Optional[str]=None, CONTENT_LOCATION: Optional[str]=None, CONTENT_DISPOSITION: Optional[str]=None, CONTENT_LENGTH: Optional[str]=None, CONTENT_LANGUAGE: Optional[str]=None, CONTENT_MD5: Optional[str]=None, COOKIE: Optional[str]=None, ETAG: Optional[str]=None, IF_NONE_MATCH: Optional[str]=None, LOCATION: Optional[str]=None, LAST_MODIFIED: Optional[str]=None, UPGRADE: Optional[str]=None, WS_UPGRADE_PROXY_TO: Optional[str]=None, CONNECTION: Optional[str]=None, HOST: Optional[str]=None, X_FORWARDED_HOST: Optional[str]=None, X_FORWARDED_PROTO: Optional[str]=None, ORIGIN: Optional[str]=None, REFERER: Optional[str]=None, SET_COOKIE: Optional[str]=None, STRICT_TRANSPORT_SECURITY: Optional[str]=None, STREAM: Optional[str]=None, PRETTY_PRINT: Optional[str]=None, ENVELOPE: Optional[str]=None, REQUEST_ENVELOPE: Optional[str]=None, RESPONSE_ENVELOPE: Optional[str]=None, CLIENT_ID: Optional[str]=None, REQUEST_ID: Optional[str]=None, C3_PARENT_ACTION_ID: Optional[str]=None, C3_REFERRER: Optional[str]=None, C3_TYPE_AWARE: Optional[str]=None, C3_PROXY_URL: Optional[str]=None, C3_ENV: Optional[str]=None, C3_APP: Optional[str]=None, C3_CANONICAL: Optional[str]=None, C3_CSRF_TOKEN: Optional[str]=None, X_CSRF_TOKEN: Optional[str]=None, ACTION_INFO: Optional[str]=None, ACTION_INTERRUPT_IN: Optional[str]=None, TIMING_INFO: Optional[str]=None, IMPERSONATE_USER: Optional[str]=None, TUNNEL_TO: Optional[str]=None, TUNNEL_FROM: Optional[str]=None, TUNNEL_AUTHORIZATION: Optional[str]=None, TUNNEL_TENANT: Optional[str]=None, TUNNEL_TAG: Optional[str]=None, TUNNEL_STATUS: Optional[str]=None, TUNNEL_FROM_C3AUTH: Optional[str]=None, TUNNEL_FROM_CANONICAL: Optional[str]=None, TUNNEL_FROM_TENANT: Optional[str]=None, TUNNEL_FROM_TAG: Optional[str]=None, TUNNEL_FROM_ACTION_INFO: Optional[str]=None, TUNNEL_FROM_TIMING_INFO: Optional[str]=None, TUNNEL_TIMEOUT_SECS: Optional[str]=None, ACTION_ENGINE: Optional[str]=None, BUNDLE: Optional[str]=None, SSE_SEND_PING: Optional[str]=None, C3_RETURN_TYPE: Optional[str]=None, TEXT_SIZE: Optional[str]=None, WWW_AUTHENTICATE: Optional[str]=None, VARY: Optional[str]=None, X_XSS_PROTECTION: Optional[str]=None, CONTENT_SECURITY_POLICY: Optional[str]=None, X_FRAME_OPTIONS: Optional[str]=None, ACCESS_CONTROL_ALLOW_ORIGIN: Optional[str]=None, ACCESS_CONTROL_ALLOW_CREDENTIALS: Optional[str]=None, ACCESS_CONTROL_ALLOW_HEADERS: Optional[str]=None, ACCESS_CONTROL_ALLOW_METHODS: Optional[str]=None, ACCESS_CONTROL_REQUEST_HEADERS: Optional[str]=None, CACHE_CONTROL: Optional[str]=None, EXPIRES: Optional[str]=None, PRAGMA: Optional[str]=None, C3_LANGUAGE: Optional[str]=None, C3_TENANT: Optional[str]=None, C3_TAG: Optional[str]=None) -> None: ...

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

