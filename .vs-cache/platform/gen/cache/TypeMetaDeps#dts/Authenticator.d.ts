// TypeScript definitions for the C3 type Authenticator

/**
 * @remarks this represents a value passed to a method that expects an instance of Authenticator
 */
declare interface IAuthenticator {
}

/**
 * @remarks this represents a made instance of Authenticator
 */
declare class Authenticator {

  /**
   * Optional handler of all HTTP requests under `@restful(endpoint)` prefix from one and only sub type of Restful
   */
  static handle(httpPath: string, req: HttpRequest): HttpResponse | null;

  /**
   * Find restful type and potentially method responsible for handling HTTP request with provided path or `null`
   */
  static targetFor(httpPath: string): Pair<Type | null, MethodType | null> | null;

  /**
   * While handling a RESTful request, the incoming HTTP request can be accessed. This works even for types that do not
   * mixin **Restful**, but just use {@link Ann.Restful @restful} annotations.
   */
  static currentRequest(): HttpRequest | null;

  /**
   * Get the origin URL for this endpoint. This only works for RESTful endpoints that mixin **Restful**.
   *
   * @see endpointOrigin
   */
  origin(): string | null;

  /**
   * Get the origin URL for an endpoint. This is useful for types that do not mixin **Restful**, but just use
   * {@link Ann.Restful @restful} annotations.
   */
  static endpointOrigin(endpoint: string): string | null;

  /**
   * Authenticates the user using Authorization header that is sent to the endpoint.
   *
   * @return - Response with status code 200 and the session token set in the Set-Cookie header. Status code 401 otherwise.
   */
  static login(): HttpResponse | null;

  /**
   * Handler of all HTTP requests that require authentication.
   */
  static handleRequest(req?: HttpRequest | null): AuthenticateResult | null;

  /**
   * Authenticates the authorization data supplied via HttpRequest {@link HttpRequest}.
   *
   * @param req
   *          HttpRequest
   * @return - User if authentication is successful, HttpResponse otherwise
   */
  static authenticate(req: HttpRequest): AuthenticateResult;

  static authenticate(spec: AuthenticationSpec): AuthenticateResult;

  /**
   * Authenticate user supplied authentication data.
   */
  static authenticate(authenticationData: string, req?: HttpRequest | null): AuthenticateResult;

  static logout(req?: HttpRequest | null): HttpResponse | null;

  /**
   * Generate a C3 Action Authentication Token ({@link action-auth-token.c3doc.md Action Authentication and Propagation}).
   *
   * @return The action authentication token.
   */
  static generateActionAuthToken(): string;

  /**
   * Generate c3 key auth token with given username and user's private key
   *
   * @param username
   *          user identifier
   * @param privateKey
   *          private key of the user
   *
   * @return a c3 key auth token
   */
  static generateC3KeyAuthToken(username: string, privateKey: string): string;

  /**
   * Generate basic auth token with given username and password.
   *
   * @param username
   *          user identifier.
   * @param password
   *          user password.
   *
   * @return a basic auth token generated with given username and password.
   */
  static generateBasicAuthToken(username: string, password: string): string;

  /**
   * Parse a basic token
   *
   * @param token
   *            token to be parsed.
   *
   * @return a user & password from auth token
   */
  static parseBasicAuthToken(token: string): StrPair | null;

  /**
   * Determines if the provided request is the first login or not
   */
  static firstLogin(req?: HttpRequest | null): boolean;

  /**
   * Returns whether authentication is required to access the given endpoint
   *
   * @param req
   *            HttpRequest
   *
   * @return a boolean representing whether anonymous access is allowed
   */
  static isAnonymousAccessAllowed(req: HttpRequest): boolean;

  /**
   * Returns the IdpConfig associated with the given host.
   * @param host
   *           host for which IdpConfig is configured for
   *
   * @return the IdpConfig configured for the host. If it does not exist, returns null.
   */
  static idpConfig(host: string, failIfMissing?: boolean): IdpConfig | null;

  /**
   * Returns whether basic auth is used for authentication.
   *
   * @return a boolean representing whether this {@link App} use basic auth.
   */
  static isIdpConfiguredForUrl(url: Url): boolean;

  /**
   * Prepare auth denied response
   * @param req
   *            HttpRequest that was used to login
   */
  static denyUser(req: HttpRequest): AuthenticateResult;

  /**
   * Creates an 401 Unauthorized HttpResponse with the given headers.
   */
  static unauthorized(req: HttpRequest | null, headers?: C3.Map<string | null, C3.Array<string | null>>): AuthenticateResult;

  /**
   * The authentication result with no-content
   */
  static noContent(req: HttpRequest | null): AuthenticateResult;

  /**
   * The authentication result for a given user
   */
  static result(user: User, req: HttpRequest | null, resp?: HttpResponse | null): AuthenticateResult;

  /**
   * Properly logs authentication information for all subtypes
   */
  static logAuthenticationInformation(logger: Logger, loggerLevel: string, msg: string): void;
}

