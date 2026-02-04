// TypeScript definitions for the C3 type AsyncPersistableProxy

/**
 * If the {@link AsyncThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
 * {@link AsyncTypeProxy normal proxy} is extended by this "persistable proxy".
 *
 * @remarks this represents a value passed to a method that expects an instance of AsyncPersistableProxy
 */
declare interface IAsyncPersistableProxy {
}

/**
 * If the {@link AsyncThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
 * {@link AsyncTypeProxy normal proxy} is extended by this "persistable proxy".
 *
 * @remarks this represents a made instance of AsyncPersistableProxy
 */
declare class AsyncPersistableProxy {

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
  typeSystem(): AsyncThinTypeSystem;

  /**
   * Get the connection on which this proxy operates.
   *
   * @return server connection
   */
  connection(): ServerConnection;

  /**
   * Get the persistable version of proxy this proxy if the underlying type is persistable.
   */
  asPersistable(failIfNot?: boolean): AsyncPersistableProxy | null;

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
  call(action: string, thisArg?: any | null, ...args: any | null[]): C3.Promise<any | null> | null;

  /**
   * Call a method on this type, specifying the arguments as name/value pairs. It handles both static and member
   * functions. For member methods args should contain `this` key. If target method is overloaded will match overload
   * based on argument value types.
   *
   * This matches Python's dict unpacking (`fn(**args)`).
   *
   * @see #call
   */
  callByName(action: string, args?: any | null): C3.Promise<any | null> | null;

  /**
   * Call a method on this type, specifying the arguments positionally as an array. It handles both static and member
   * functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
   * on argument value types.
   *
   * This matches the JavaScript `Function.apply` or Python's list unpacking (`fn(*args)`).
   *
   * Additionally, you can specify a {@Link TimeoutSpec} for the call. Consequently the {@link Action} dispatched as a
   * result of this call will have a timeout of the specified value. Alternatively, you can only choose to specify the
   * {@link Duration} after which you would like the action to be interrupted; in that case, the action will be stopped
   * after a duration that is twice the specified interrupt duration.
   *
   * @see #call
   * @see Action#interrupt
   * @see Action#stop
   */
  callByPosition(action: string, thisArg?: any | null, args?: C3.Array<any | null>, timeout?: string | null | TimeoutSpec | null | null): C3.Promise<any | null> | null;

  /**
   * Retrieve a single instance of this type by {@link Identifiable id}.
   */
  get(id: string | null, include?: string | null): C3.Promise<any | null> | null;

  /**
   * Query instances of this type using a variety of criteria a specified in the {@link FetchSpec} spec.
   */
  fetch(spec?: any | null): C3.Promise<any | null> | null;
}

