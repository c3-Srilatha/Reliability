// TypeScript definitions for the C3 type Restful

/**
 * Optional mixin for types exposing RESTful interface. It is also possible to create these endpoints without mixing
 * in this type and instead using {@link Ann.Restful @restful} annotations. Mixing in this type works best for
 * endpoints with custom handling that want to consume a raw request and produce a complete response.
 *
 * Both GET and POST requests are supported. For GET, parameters are taken from the query string. For POST they are
 * taken from the source form (supporting `application/x-www-form-urlencoded` and `multipart/form-data`.
 *
 * In addition, the method can consume the whole request by declaring a single parameter of type {@link HttpRequest}
 * or {@link Content}.
 *
 * Finally, for POST requests with JSON bodies, a single parameter can be deserialized using the
 * {@link Ann.Restful#postBody} annotation. (Other parameters can come from the path, but not from the body.)
 *
 * @see Ann.Restful
 * @see https://restfulapi.net/
 *
 * @remarks this represents a value passed to a method that expects an instance of Restful
 */
declare interface IRestful {
}

/**
 * Optional mixin for types exposing RESTful interface. It is also possible to create these endpoints without mixing
 * in this type and instead using {@link Ann.Restful @restful} annotations. Mixing in this type works best for
 * endpoints with custom handling that want to consume a raw request and produce a complete response.
 *
 * Both GET and POST requests are supported. For GET, parameters are taken from the query string. For POST they are
 * taken from the source form (supporting `application/x-www-form-urlencoded` and `multipart/form-data`.
 *
 * In addition, the method can consume the whole request by declaring a single parameter of type {@link HttpRequest}
 * or {@link Content}.
 *
 * Finally, for POST requests with JSON bodies, a single parameter can be deserialized using the
 * {@link Ann.Restful#postBody} annotation. (Other parameters can come from the path, but not from the body.)
 *
 * @see Ann.Restful
 * @see https://restfulapi.net/
 *
 * @remarks this represents a made instance of Restful
 */
declare class Restful {

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
}

