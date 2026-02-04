// TypeScript definitions for the C3 type AsyncType

/**
 * The {@link AsyncTypeSystem async full type system} returns a version of the full {@link Type} on which methods are
 * asynchronous.
 *
 * @remarks this represents a value passed to a method that expects an instance of AsyncType
 */
declare interface IAsyncType {
}

/**
 * The {@link AsyncTypeSystem async full type system} returns a version of the full {@link Type} on which methods are
 * asynchronous.
 *
 * @remarks this represents a made instance of AsyncType
 */
declare class AsyncType {

  /**
   * The name of this type
   *
   * @see TypeMeta#qname
   */
  name(): string | null;

  /**
   * @return metadata for this type
   */
  meta(): C3.Promise<TypeMeta | null>;

  /**
   * Call a method on this type, with the arguments specified positionally (as varargs). For member method calls the
   * "this" instance should be passed as `#thisArg` and for static method calls, `#thisArg` can optionally be passed as
   * specific sub-type of this type.
   */
  call(action: string, thisArg?: any, ...args: any[]): C3.Promise<any> | null;

  /**
   * Get the instance of the type system that created this type.
   */
  typeSystem(): AsyncTypeSystem;

  /**
   * Get the connection on which this type operates.
   *
   * @return server connection
   */
  connection(): ServerConnection;
}

