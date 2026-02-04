// TypeScript definitions for the C3 type TypeProxyBase

/**
 * The {@link ThinTypeSystemBase thin type system} returns a simpler interface to a type that has a different set of
 * methods than the full {@link Type}/{@link TypeMeta} exposed by the {@link TypeSystemBase full type system}.
 * In particular, the individual methods of types are not exposed directly, but must be invoked using the generic
 * call/callByName/callByPosition methods of the proxy.
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeProxyBase
 */
declare interface ITypeProxyBase {
}

/**
 * The {@link ThinTypeSystemBase thin type system} returns a simpler interface to a type that has a different set of
 * methods than the full {@link Type}/{@link TypeMeta} exposed by the {@link TypeSystemBase full type system}.
 * In particular, the individual methods of types are not exposed directly, but must be invoked using the generic
 * call/callByName/callByPosition methods of the proxy.
 *
 * @remarks this represents a made instance of TypeProxyBase
 */
declare class TypeProxyBase {

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
  typeSystem(): ThinTypeSystemBase;

  /**
   * Get the connection on which this proxy operates.
   *
   * @return server connection
   */
  connection(): ServerConnection;
}

