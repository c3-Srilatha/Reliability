// TypeScript definitions for the C3 type HttpHeaderName

/**
 * Http header names used by C3 platform.
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpHeaderName
 */
declare interface IHttpHeaderName {

  /**
   * Media type(s) that is/are acceptable for the response.
   */
  readonly ACCEPT: 'Accept';

  /**
   * Authentication credentials for HTTP authentication.
   */
  readonly AUTHORIZATION: 'Authorization';

  /**
   * List of acceptable encodings. See HTTP compression.
   */
  readonly ACCEPT_ENCODING: 'Accept-Encoding';

  /**
   * The Media type of the body of the request (used with POST and PUT requests).
   */
  readonly CONTENT_TYPE: 'Content-Type';

  /**
   * The Content Encoding of the body of the request (used with POST and PUT requests).
   */
  readonly CONTENT_ENCODING: 'Content-Encoding';

  /**
   * The Content Location of the body of the request (used with POST and PUT requests).
   */
  readonly CONTENT_LOCATION: 'Content-Location';

  /**
   * How the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page,
   * or as an attachment, that is downloaded and saved locally.
   */
  readonly CONTENT_DISPOSITION: 'Content-Disposition';

  /**
   * The length of the content body
   */
  readonly CONTENT_LENGTH: 'Content-Length';

  /**
   * The Content-Language representation header is used to describe the language(s) intended for the audience,
   * so users can differentiate it according to their own preferred language.
   */
  readonly CONTENT_LANGUAGE: 'Content-Language';

  /**
   * The Content-MD5 header is used by servers to provide a message-integrity check for the message body.
   * Only an origin server or requesting client should insert a Content-MD5 header in the message.
   * The value of the header is an MD5 digest[6] of the (potentially encoded) message body.
   */
  readonly CONTENT_MD5: 'Content-MD5';

  /**
   * An HTTP cookie previously sent by the server with Set-Cookie (below).
   */
  readonly COOKIE: 'Cookie';

  /**
   * The response header containing the hash of the response body for caching.
   *
   * @see #IF_NONE_MATCH
   */
  readonly ETAG: 'ETag';

  /**
   * The request header containing the hash of the prior cached response for invalidation check.
   *
   * @see #ETAG
   */
  readonly IF_NONE_MATCH: 'If-None-Match';

  /**
   * The Location response-header field is used to redirect the recipient to a location other than the Request-URI for
   * completion of the request or identification of a new resource. For 201 (Created) responses, the Location is that
   * of the new resource which was created by the request. For 3xx responses, the location SHOULD indicate the server's
   * preferred URI for automatic redirection to the resource. The field value consists of a single URI-reference.
   * When it has the form of a relative reference ([RFC3986], Section 4.2), the final value is computed by resolving it
   * against the effective request URI ([RFC3986], Section 5).
   */
  readonly LOCATION: 'Location';

  readonly LAST_MODIFIED: 'Last-Modified';

  /**
   * The Upgrade general-header allows the client to specify what additional communication protocols it supports and
   * would like to use if the server finds it appropriate to switch protocols. The server MUST use the Upgrade header
   * field within a 101 (Switching Protocols) response to indicate which protocol(s) are being switched.
   */
  readonly UPGRADE: 'Upgrade';

  /**
   * Endpoint URI of WebSocket proxy request. Used for the Upgrade Connection request.
   */
  readonly WS_UPGRADE_PROXY_TO: 'X-WS-Proxy-To';

  /**
   * The Connection general-header field allows the sender to specify options that are desired for that particular
   * connection and MUST NOT be communicated by proxies over further connections.
   */
  readonly CONNECTION: 'Connection';

  /**
   * The Host header specifies the Internet host and port number of the resource being requested,
   * as obtained from the original URI given by the user or referring resource (RFC 2616 ).
   */
  readonly HOST: 'Host';

  /**
   * The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the originating host requested
   * by the client in the Host HTTP request header to the proxy or load balancer.
   */
  readonly X_FORWARDED_HOST: 'X-Forwarded-Host';

  /**
   * The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that
   * a client used to connect to the proxy or load balancer.
   */
  readonly X_FORWARDED_PROTO: 'X-Forwarded-Proto';

  /**
   * The Origin header specifies the origin of the request.
   */
  readonly ORIGIN: 'Origin';

  /**
   * The Referer HTTP request header contains an absolute or partial address of the page that makes the request.
   */
  readonly REFERER: 'Referer';

  /**
   * The HTTP Set-Cookie header sent in response.
   */
  readonly SET_COOKIE: 'Set-Cookie';

  /**
   * Only HTTPS access is allowed.
   */
  readonly STRICT_TRANSPORT_SECURITY: 'Strict-Transport-Security';

  /**
   * Indicates that the action can stream back results.
   */
  readonly STREAM: 'X-Stream';

  readonly PRETTY_PRINT: 'X-Pretty-Print';

  readonly ENVELOPE: 'X-Envelope';

  readonly REQUEST_ENVELOPE: 'X-Request-Envelope';

  readonly RESPONSE_ENVELOPE: 'X-Response-Envelope';

  /**
   * Opaque client id in request
   */
  readonly CLIENT_ID: 'X-Client-Id';

  /**
   * Opaque client request id in request
   */
  readonly REQUEST_ID: 'X-Request-Id';

  /**
   * This header is used to inform the dispatcher that this request is a child action of the given parent action id.
   * The corresponding http header name is "X-C3-Parent-Action-Id".
   */
  readonly C3_PARENT_ACTION_ID: 'X-C3-Parent-Action-Id';

  /**
   * This header can be set by a client to overwrite the 'Referer' header.
   * For example, Rails uses it to pass the real request referrer instead of the Rails endpoint.
   */
  readonly C3_REFERRER: 'X-C3-Referrer';

  readonly C3_TYPE_AWARE: 'X-C3-Type-Aware';

  readonly C3_PROXY_URL: 'X-C3-Proxy-Url';

  /**
   * Environment associated with the request's host (domain).
   */
  readonly C3_ENV: 'X-C3-Env';

  /**
   * Application associated with the request's host (domain).
   */
  readonly C3_APP: 'X-C3-App';

  /**
   * Cookie indicating whether canonical url was used for the request.
   */
  readonly C3_CANONICAL: 'X-C3-Canonical';

  /**
   * CSRF protection token.
   */
  readonly C3_CSRF_TOKEN: 'X-C3-Csrf';

  /**
   * CSRF protection token.
   */
  readonly X_CSRF_TOKEN: 'X-Csrf-Token';

  /**
   * C3 Server Action id
   */
  readonly ACTION_INFO: 'X-Action-Info';

  /**
   * {@link Duration} after which the action should be interrupted, if still running.
   */
  readonly ACTION_INTERRUPT_IN: 'X-Action-Interrupt-In';

  /**
   * C3 Server Action execution time
   */
  readonly TIMING_INFO: 'X-Timing-Info';

  /**
   * This header allows to run an action in context of an impersonatee user if the impersonator(original user) has permissions
   * to execute {@link UserAdmin#impersonate} and if impersonator has higher security level than impersonatee.
   */
  readonly IMPERSONATE_USER: 'X-Impersonate-User';

  /**
   * Tunnel request to.
   */
  readonly TUNNEL_TO: 'X-Tunnel-To';

  /**
   * Request tunneled from.
   */
  readonly TUNNEL_FROM: 'X-Tunnel-From';

  /**
   * Authorization token for tunneled request.
   */
  readonly TUNNEL_AUTHORIZATION: 'X-Tunnel-Authorization';

  /**
   * Tenant for tunneled request.
   */
  readonly TUNNEL_TENANT: 'X-Tunnel-Tenant';

  /**
   * Tag for tunneled request.
   */
  readonly TUNNEL_TAG: 'X-Tunnel-Tag';

  /**
   * Http status code of tunneled request.
   */
  readonly TUNNEL_STATUS: 'X-Tunnel-Status';

  /**
   * c3auth token returned by tunneled request.
   */
  readonly TUNNEL_FROM_C3AUTH: 'X-Tunnel-From-C3Auth';

  /**
   * Canonical header from tunneled request.
   */
  readonly TUNNEL_FROM_CANONICAL: 'X-Tunnel-From-Canonical';

  /**
   * C3 Tenant from tunneled request.
   */
  readonly TUNNEL_FROM_TENANT: 'X-Tunnel-From-Tenant';

  /**
   * C3 Tag from tunneled request.
   */
  readonly TUNNEL_FROM_TAG: 'X-Tunnel-From-Tag';

  /**
   * C3 Server Action id
   */
  readonly TUNNEL_FROM_ACTION_INFO: 'X-Tunnel-From-Action-Info';

  /**
   * C3 Server Action execution time of tunneled request
   */
  readonly TUNNEL_FROM_TIMING_INFO: 'X-Tunnel-From-Timing-Info';

  /**
   * Override default timeout (60 seconds) parameter for tunneled request. Only values greater than 60 seconds are allowed.
   */
  readonly TUNNEL_TIMEOUT_SECS: 'X-Tunnel-Timeout-Secs';

  /**
   * Provide an action engine to customize serialization the response of an API call.
   */
  readonly ACTION_ENGINE: 'X-C3-Action-Engine';

  /**
   * Specify a resource is part of a client-defined bundle.
   */
  readonly BUNDLE: 'X-C3-Bundle';

  /**
   * Specify whether to receive ping events through SSE.
   * If true the SSE channel will receive periodic ping events
   * Which serve as heartbeat to the connection.
   */
  readonly SSE_SEND_PING: 'X-C3-SSE-Send-Ping';

  /**
   * Return type of the API response. This header indicates the type of data being returned.
   */
  readonly C3_RETURN_TYPE: 'X-C3-Return-Type';

  /**
   * Jenkins specific header for text size. @see Jenkins_Test
   */
  readonly TEXT_SIZE: 'X-Text-Size';

  /**
   * Specify a authentication challenge when a 401 response is sent.
   */
  readonly WWW_AUTHENTICATE: 'WWW-Authenticate';

  /**
   * Determines how to match future request headers and whether to serve cached content for the request
   */
  readonly VARY: 'Vary';

  /**
   * Specifies a browser configuration that stops pages from loading when
   * they detect reflected cross-site scripting (XSS) attacks
   */
  readonly X_XSS_PROTECTION: 'X-XSS-Protection';

  /**
   * Specifies the resources the user agent is allowed to load for a given page.
   */
  readonly CONTENT_SECURITY_POLICY: 'Content-Security-Policy';

  /**
   * Specifies whether or not a browser should be allowed to render a page
   * in a <frame>, <iframe>, <embed> or <object>
   */
  readonly X_FRAME_OPTIONS: 'X-Frame-Options';

  /**
   * Specifies whether the response can be shared with requesting code from the given origin.
   */
  readonly ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin';

  /**
   * Specifies whether to expose the response to the frontend JavaScript code when the
   * request's credentials mode is 'include'.
   */
  readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials';

  /**
   * Specifies allowed headers in the response.
   */
  readonly ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers';

  /**
   * Specifies allowed methods in the response.
   */
  readonly ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods';

  /**
   * Specifies requested headers by client in the preflight request.
   */
  readonly ACCESS_CONTROL_REQUEST_HEADERS: 'Access-Control-Request-Headers';

  /**
   * Controls caching behavior in browsers and shared caches
   */
  readonly CACHE_CONTROL: 'Cache-Control';

  /**
   * Specifies the date/time after which the response is considered expired.
   */
  readonly EXPIRES: 'Expires';

  /**
   * Specifies a behavior that is the same as Cache-Control: no-cache if
   * the Cache-Control header field is omitted in a request.
   * Use for backwards compatibility with HTTP/1.0 clients.
   */
  readonly PRAGMA: 'Pragma';

  /**
   * The requested language from the client for localization by the server.
   *
   * @see https://www.rfc-editor.org/rfc/bcp/bcp47.txt
   */
  readonly C3_LANGUAGE: 'X-C3-Language';

  readonly C3_TENANT: 'X-C3-Tenant';

  readonly C3_TAG: 'X-C3-Tag';
}

/**
 * Http header names used by C3 platform.
 *
 * @remarks this represents a made instance of HttpHeaderName
 */
declare class HttpHeaderName {

  /**
   * Media type(s) that is/are acceptable for the response.
   */
  static readonly ACCEPT: 'Accept';

  /**
   * Authentication credentials for HTTP authentication.
   */
  static readonly AUTHORIZATION: 'Authorization';

  /**
   * List of acceptable encodings. See HTTP compression.
   */
  static readonly ACCEPT_ENCODING: 'Accept-Encoding';

  /**
   * The Media type of the body of the request (used with POST and PUT requests).
   */
  static readonly CONTENT_TYPE: 'Content-Type';

  /**
   * The Content Encoding of the body of the request (used with POST and PUT requests).
   */
  static readonly CONTENT_ENCODING: 'Content-Encoding';

  /**
   * The Content Location of the body of the request (used with POST and PUT requests).
   */
  static readonly CONTENT_LOCATION: 'Content-Location';

  /**
   * How the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page,
   * or as an attachment, that is downloaded and saved locally.
   */
  static readonly CONTENT_DISPOSITION: 'Content-Disposition';

  /**
   * The length of the content body
   */
  static readonly CONTENT_LENGTH: 'Content-Length';

  /**
   * The Content-Language representation header is used to describe the language(s) intended for the audience,
   * so users can differentiate it according to their own preferred language.
   */
  static readonly CONTENT_LANGUAGE: 'Content-Language';

  /**
   * The Content-MD5 header is used by servers to provide a message-integrity check for the message body.
   * Only an origin server or requesting client should insert a Content-MD5 header in the message.
   * The value of the header is an MD5 digest[6] of the (potentially encoded) message body.
   */
  static readonly CONTENT_MD5: 'Content-MD5';

  /**
   * An HTTP cookie previously sent by the server with Set-Cookie (below).
   */
  static readonly COOKIE: 'Cookie';

  /**
   * The response header containing the hash of the response body for caching.
   *
   * @see #IF_NONE_MATCH
   */
  static readonly ETAG: 'ETag';

  /**
   * The request header containing the hash of the prior cached response for invalidation check.
   *
   * @see #ETAG
   */
  static readonly IF_NONE_MATCH: 'If-None-Match';

  /**
   * The Location response-header field is used to redirect the recipient to a location other than the Request-URI for
   * completion of the request or identification of a new resource. For 201 (Created) responses, the Location is that
   * of the new resource which was created by the request. For 3xx responses, the location SHOULD indicate the server's
   * preferred URI for automatic redirection to the resource. The field value consists of a single URI-reference.
   * When it has the form of a relative reference ([RFC3986], Section 4.2), the final value is computed by resolving it
   * against the effective request URI ([RFC3986], Section 5).
   */
  static readonly LOCATION: 'Location';

  static readonly LAST_MODIFIED: 'Last-Modified';

  /**
   * The Upgrade general-header allows the client to specify what additional communication protocols it supports and
   * would like to use if the server finds it appropriate to switch protocols. The server MUST use the Upgrade header
   * field within a 101 (Switching Protocols) response to indicate which protocol(s) are being switched.
   */
  static readonly UPGRADE: 'Upgrade';

  /**
   * Endpoint URI of WebSocket proxy request. Used for the Upgrade Connection request.
   */
  static readonly WS_UPGRADE_PROXY_TO: 'X-WS-Proxy-To';

  /**
   * The Connection general-header field allows the sender to specify options that are desired for that particular
   * connection and MUST NOT be communicated by proxies over further connections.
   */
  static readonly CONNECTION: 'Connection';

  /**
   * The Host header specifies the Internet host and port number of the resource being requested,
   * as obtained from the original URI given by the user or referring resource (RFC 2616 ).
   */
  static readonly HOST: 'Host';

  /**
   * The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the originating host requested
   * by the client in the Host HTTP request header to the proxy or load balancer.
   */
  static readonly X_FORWARDED_HOST: 'X-Forwarded-Host';

  /**
   * The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that
   * a client used to connect to the proxy or load balancer.
   */
  static readonly X_FORWARDED_PROTO: 'X-Forwarded-Proto';

  /**
   * The Origin header specifies the origin of the request.
   */
  static readonly ORIGIN: 'Origin';

  /**
   * The Referer HTTP request header contains an absolute or partial address of the page that makes the request.
   */
  static readonly REFERER: 'Referer';

  /**
   * The HTTP Set-Cookie header sent in response.
   */
  static readonly SET_COOKIE: 'Set-Cookie';

  /**
   * Only HTTPS access is allowed.
   */
  static readonly STRICT_TRANSPORT_SECURITY: 'Strict-Transport-Security';

  /**
   * Indicates that the action can stream back results.
   */
  static readonly STREAM: 'X-Stream';

  static readonly PRETTY_PRINT: 'X-Pretty-Print';

  static readonly ENVELOPE: 'X-Envelope';

  static readonly REQUEST_ENVELOPE: 'X-Request-Envelope';

  static readonly RESPONSE_ENVELOPE: 'X-Response-Envelope';

  /**
   * Opaque client id in request
   */
  static readonly CLIENT_ID: 'X-Client-Id';

  /**
   * Opaque client request id in request
   */
  static readonly REQUEST_ID: 'X-Request-Id';

  /**
   * This header is used to inform the dispatcher that this request is a child action of the given parent action id.
   * The corresponding http header name is "X-C3-Parent-Action-Id".
   */
  static readonly C3_PARENT_ACTION_ID: 'X-C3-Parent-Action-Id';

  /**
   * This header can be set by a client to overwrite the 'Referer' header.
   * For example, Rails uses it to pass the real request referrer instead of the Rails endpoint.
   */
  static readonly C3_REFERRER: 'X-C3-Referrer';

  static readonly C3_TYPE_AWARE: 'X-C3-Type-Aware';

  static readonly C3_PROXY_URL: 'X-C3-Proxy-Url';

  /**
   * Environment associated with the request's host (domain).
   */
  static readonly C3_ENV: 'X-C3-Env';

  /**
   * Application associated with the request's host (domain).
   */
  static readonly C3_APP: 'X-C3-App';

  /**
   * Cookie indicating whether canonical url was used for the request.
   */
  static readonly C3_CANONICAL: 'X-C3-Canonical';

  /**
   * CSRF protection token.
   */
  static readonly C3_CSRF_TOKEN: 'X-C3-Csrf';

  /**
   * CSRF protection token.
   */
  static readonly X_CSRF_TOKEN: 'X-Csrf-Token';

  /**
   * C3 Server Action id
   */
  static readonly ACTION_INFO: 'X-Action-Info';

  /**
   * {@link Duration} after which the action should be interrupted, if still running.
   */
  static readonly ACTION_INTERRUPT_IN: 'X-Action-Interrupt-In';

  /**
   * C3 Server Action execution time
   */
  static readonly TIMING_INFO: 'X-Timing-Info';

  /**
   * This header allows to run an action in context of an impersonatee user if the impersonator(original user) has permissions
   * to execute {@link UserAdmin#impersonate} and if impersonator has higher security level than impersonatee.
   */
  static readonly IMPERSONATE_USER: 'X-Impersonate-User';

  /**
   * Tunnel request to.
   */
  static readonly TUNNEL_TO: 'X-Tunnel-To';

  /**
   * Request tunneled from.
   */
  static readonly TUNNEL_FROM: 'X-Tunnel-From';

  /**
   * Authorization token for tunneled request.
   */
  static readonly TUNNEL_AUTHORIZATION: 'X-Tunnel-Authorization';

  /**
   * Tenant for tunneled request.
   */
  static readonly TUNNEL_TENANT: 'X-Tunnel-Tenant';

  /**
   * Tag for tunneled request.
   */
  static readonly TUNNEL_TAG: 'X-Tunnel-Tag';

  /**
   * Http status code of tunneled request.
   */
  static readonly TUNNEL_STATUS: 'X-Tunnel-Status';

  /**
   * c3auth token returned by tunneled request.
   */
  static readonly TUNNEL_FROM_C3AUTH: 'X-Tunnel-From-C3Auth';

  /**
   * Canonical header from tunneled request.
   */
  static readonly TUNNEL_FROM_CANONICAL: 'X-Tunnel-From-Canonical';

  /**
   * C3 Tenant from tunneled request.
   */
  static readonly TUNNEL_FROM_TENANT: 'X-Tunnel-From-Tenant';

  /**
   * C3 Tag from tunneled request.
   */
  static readonly TUNNEL_FROM_TAG: 'X-Tunnel-From-Tag';

  /**
   * C3 Server Action id
   */
  static readonly TUNNEL_FROM_ACTION_INFO: 'X-Tunnel-From-Action-Info';

  /**
   * C3 Server Action execution time of tunneled request
   */
  static readonly TUNNEL_FROM_TIMING_INFO: 'X-Tunnel-From-Timing-Info';

  /**
   * Override default timeout (60 seconds) parameter for tunneled request. Only values greater than 60 seconds are allowed.
   */
  static readonly TUNNEL_TIMEOUT_SECS: 'X-Tunnel-Timeout-Secs';

  /**
   * Provide an action engine to customize serialization the response of an API call.
   */
  static readonly ACTION_ENGINE: 'X-C3-Action-Engine';

  /**
   * Specify a resource is part of a client-defined bundle.
   */
  static readonly BUNDLE: 'X-C3-Bundle';

  /**
   * Specify whether to receive ping events through SSE.
   * If true the SSE channel will receive periodic ping events
   * Which serve as heartbeat to the connection.
   */
  static readonly SSE_SEND_PING: 'X-C3-SSE-Send-Ping';

  /**
   * Return type of the API response. This header indicates the type of data being returned.
   */
  static readonly C3_RETURN_TYPE: 'X-C3-Return-Type';

  /**
   * Jenkins specific header for text size. @see Jenkins_Test
   */
  static readonly TEXT_SIZE: 'X-Text-Size';

  /**
   * Specify a authentication challenge when a 401 response is sent.
   */
  static readonly WWW_AUTHENTICATE: 'WWW-Authenticate';

  /**
   * Determines how to match future request headers and whether to serve cached content for the request
   */
  static readonly VARY: 'Vary';

  /**
   * Specifies a browser configuration that stops pages from loading when
   * they detect reflected cross-site scripting (XSS) attacks
   */
  static readonly X_XSS_PROTECTION: 'X-XSS-Protection';

  /**
   * Specifies the resources the user agent is allowed to load for a given page.
   */
  static readonly CONTENT_SECURITY_POLICY: 'Content-Security-Policy';

  /**
   * Specifies whether or not a browser should be allowed to render a page
   * in a <frame>, <iframe>, <embed> or <object>
   */
  static readonly X_FRAME_OPTIONS: 'X-Frame-Options';

  /**
   * Specifies whether the response can be shared with requesting code from the given origin.
   */
  static readonly ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin';

  /**
   * Specifies whether to expose the response to the frontend JavaScript code when the
   * request's credentials mode is 'include'.
   */
  static readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials';

  /**
   * Specifies allowed headers in the response.
   */
  static readonly ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers';

  /**
   * Specifies allowed methods in the response.
   */
  static readonly ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods';

  /**
   * Specifies requested headers by client in the preflight request.
   */
  static readonly ACCESS_CONTROL_REQUEST_HEADERS: 'Access-Control-Request-Headers';

  /**
   * Controls caching behavior in browsers and shared caches
   */
  static readonly CACHE_CONTROL: 'Cache-Control';

  /**
   * Specifies the date/time after which the response is considered expired.
   */
  static readonly EXPIRES: 'Expires';

  /**
   * Specifies a behavior that is the same as Cache-Control: no-cache if
   * the Cache-Control header field is omitted in a request.
   * Use for backwards compatibility with HTTP/1.0 clients.
   */
  static readonly PRAGMA: 'Pragma';

  /**
   * The requested language from the client for localization by the server.
   *
   * @see https://www.rfc-editor.org/rfc/bcp/bcp47.txt
   */
  static readonly C3_LANGUAGE: 'X-C3-Language';

  static readonly C3_TENANT: 'X-C3-Tenant';

  static readonly C3_TAG: 'X-C3-Tag';

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
