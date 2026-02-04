// TypeScript definitions for the C3 type ImportApi

/**
 * Type to dispatch import request for a canonical
 *
 * @remarks this represents a value passed to a method that expects an instance of ImportApi
 */
declare interface IImportApi {
}

/**
 * Type to dispatch import request for a canonical
 *
 * @remarks this represents a made instance of ImportApi
 */
declare class ImportApi {

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
   * Wrapper to import incoming payload for a Source
   * @return status of the import
   */
  static process(stream?: any, source: string, contentMeta?: ContentMeta | null): void;
}

