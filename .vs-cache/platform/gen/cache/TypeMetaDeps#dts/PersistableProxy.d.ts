// TypeScript definitions for the C3 type PersistableProxy

/**
 * If the {@link ThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
 * {@link TypeProxy normal proxy} is extended by this "persistable proxy".
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableProxy
 */
declare interface IPersistableProxy {
}

/**
 * If the {@link ThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
 * {@link TypeProxy normal proxy} is extended by this "persistable proxy".
 *
 * @remarks this represents a made instance of PersistableProxy
 */
declare class PersistableProxy {

  /**
   * @return the name of the type
   */
  name(): string;

  /**
   * @return whether or not this type is persistable (and whether this is a persistable proxy)
   */
  isPersistable(): boolean;

  /**
   * Get a synchronous proxy for this type. If this instance is a synchronous version, the same value is returned.
   *
   * @return instance of this proxy that dispatches actions in a synchronous manner
   */
  sync(): TypeProxy;

  /**
   * Get an asynchronous proxy for this type. If this instance is an asynchronous version, the same value is returned.
   *
   * @return instance of this proxy that dispatches actions in a asynchronous manner using Promise
   */
  async(): AsyncTypeProxy;

  /**
   * Get the instance of the type system that created this proxy.
   */
  typeSystem(): ThinTypeSystem;

  /**
   * Get the connection on which this proxy operates.
   *
   * @return server connection
   */
  connection(): ServerConnection;

  /**
   * Call a method on this type, specifying the arguments as varargs. It handles both static and member functions. For
   * static methods thisArg should be `null`. If target method is overloaded, will match overload based on argument
   * value types.
   *
   * This matches the JavaScript `Function.call` or any language's positional argument syntax (`fn(arg1, arg2, ...)`).
   *
   * @see #callByName
   * @see #callByPosition
   */
  call(action: string, thisArg?: any | null, ...args: any | null[]): any | null;

  /**
   * Call a method on this type, specifying the arguments as name/value pairs. It handles both static and member
   * functions. For member methods args should contain `this` key. If target method is overloaded will match overload
   * based on argument value types.
   *
   * This matches Python's dict unpacking (`fn(**args)`).
   *
   * @see #call
   */
  callByName(action: string, args?: any | null): any | null;

  /**
   * Call a method on this type, specifying the arguments positionaly as an array. It handles both static and member
   * functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
   * on argument value types.
   *
   * This matches the JavaScript `Function.apply` or Python's list unpacking (`fn(*args)`).
   *
   * @see #call
   */
  callByPosition(action: string, thisArg?: any | null, args?: C3.Array<any | null>): any | null;

  /**
   * Get the persistable version of proxy this proxy if the underlying type is persistable.
   */
  asPersistable(failIfMissing?: boolean): PersistableProxy | null;

  /**
   * Retrieve a single instance of this type by {@link Identifiable id}.
   */
  get(id: string | null, include?: string | null): any | null;

  /**
   * Query instances of this type using a variety of criteria a specified in the {@link FetchSpec} spec.
   */
  fetch(spec?: any | null): any | null;
}

