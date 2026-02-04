// TypeScript definitions for the C3 type AsyncThinTypeSystem

/**
 * Type for the C3 remote thin type system, asynchronous version.
 *
 * The "thin" type system is distinguished from the {@link AsyncTypeSystem full type system} by the fact that
 * values are parsed JSON and declared methods must be called by name (using `call`).
 *
 * @remarks this represents a value passed to a method that expects an instance of AsyncThinTypeSystem
 */
declare interface IAsyncThinTypeSystem {
}

/**
 * Type for the C3 remote thin type system, asynchronous version.
 *
 * The "thin" type system is distinguished from the {@link AsyncTypeSystem full type system} by the fact that
 * values are parsed JSON and declared methods must be called by name (using `call`).
 *
 * @remarks this represents a made instance of AsyncThinTypeSystem
 */
declare class AsyncThinTypeSystem {

  /**
   * Get an asynchronous proxy to a type by name.
   */
  type(name: string, failIfMissing?: boolean): C3.Promise<AsyncTypeProxy | null>;

  /**
   * Get a synchronous instance of the thin type system for this connection. If this instance is a synchronous version,
   * the same value is returned.
   *
   * @return instance of this type system that dispatches actions in a synchronous manner
   */
  sync(): ThinTypeSystem;

  /**
   * Get an asynchronous instance of the thin type system for this connection. If this instance is an asynchronous
   * version, the same value is returned.
   *
   * @return instance of this type system that dispatches actions in an asynchronous manner using Promise
   */
  async(): AsyncThinTypeSystem;

  /**
   * Get the connection on which this instance operates.
   *
   * @return server connection
   */
  connection(): ServerConnection;

  /**
   * When no argument is provided, discard all cached metadata on this connection. When it is specified to a type, remove
   * cached metadata for the given type, and all sub types that mixes this type. This is typically used in client SDKs
   * to refresh cache for updated types. Note that existing instances will still continue to use the old types, but
   * references to types through this thin type system itself will reload after this call.
   */
  clearCache(typeName?: string | null): void;

  /**
   * True if the type with the given typeName is cached in TypeSystem.
   */
  cacheContainsType(typeName: string): boolean;

  /**
   * Build a request instance usable for calling the specified type method. The type and method name are required to
   * form the URL. The HTTP method will always be `POST`.
   *
   * If any arguments are specified, the body of the request will be JSON and it will have the JSON-related
   * headers, including `Accept: application/json`. Otherwise, the request will have no body and `Accept: *\/*`.
   *
   * @param type the name of the type on which to call the method
   * @param action the name of the method to call
   * @param args the arguments to pass, with `this` or the type name first
   * @return the HTTP request to make this call
   */
  callRequest(type: string, action: string, ...args: any[]): ServerRequest;
}

