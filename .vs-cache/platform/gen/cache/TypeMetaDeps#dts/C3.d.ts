// TypeScript definitions for the C3 type C3

/**
 * This type defines some commonly-used methods which are made available {@link GlobalProtocol globally}.
 *
 * In addition to these methods, it also adds all top-level types in the current package into the global
 * namespace object for easy access. (This augments the global protocol by making all types global as well.)
 *
 * ```js
 * C3.Duration === C3.type('Duration')
 * ```
 *
 * ```py
 * c3.Duration is c3.type('Duration')
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of C3
 */
declare interface IC3 {
}

/**
 * This type defines some commonly-used methods which are made available {@link GlobalProtocol globally}.
 *
 * In addition to these methods, it also adds all top-level types in the current package into the global
 * namespace object for easy access. (This augments the global protocol by making all types global as well.)
 *
 * ```js
 * C3.Duration === C3.type('Duration')
 * ```
 *
 * ```py
 * c3.Duration is c3.type('Duration')
 * ```
 *
 * @remarks this represents a made instance of C3
 */
declare class C3 {

  /**
   * Establish a connection with the server synchronously. Note that this may not be implemented by client environments
   * which have no support for synchronous HTTP calling (such as Node.js).
   *
   * @param url the base URL of the C3 server to connect
   * @param authz authentication details for a valid user
   * @param actionEngine specific {@link Action.Engine} required
   * @param spec additional options to bootstrap the connection
   */
  static connect(url: string, authz?: string | null, actionEngine?: string | null, spec?: RemoteConnectSpec | null): ServerConnection;

  /**
   * This method returns a server connection to the current environment.
   *
   * @see #connect
   */
  static connection(): ServerConnection;

  /**
   * Establish a connection with the server asynchronously.
   *
   * @param url the base URL of the C3 server to connect
   * @param authz authentication details for a valid user
   * @param actionEngine specific {@link Action.Engine} required
   * @param spec additional options to bootstrap the connection
   */
  static connectAsync(url: string, authz?: string | null, actionEngine?: string | null, spec?: RemoteConnectSpec | null): C3.Promise<ServerConnection | null>;

  /**
   * This method returns an server connection to the current environment asynchronously.
   *
   * @see #connectAsync
   */
  static connectionPromise(): C3.Promise<ServerConnection | null>;

  /**
   * Get the current Cluster.
   */
  static cluster(): Cluster;

  /**
   * Get the current Env.
   */
  static env(): Env;

  /**
   * Get the current App.
   */
  static app(): App;

  /**
   * Get the current package.
   */
  static pkg(): Pkg;

  /**
   * Get the current user.
   */
  static user(): User;

  /**
   * Get the current user session token.
   */
  static userSessionToken(): SessionToken;

  /**
   * Get the client call version, this is derived either from a declaring C3 application package version if call is
   * made from a C3 method implementation or from Api Server URL path version component, i.e. `/api/<verstion>/type/...`
   */
  static clientVersion(): string;

  /**
   * Get the client call version, this is derived either from a declaring C3 application package version if call is
   * made from a C3 method implementation or from Api Server URL path version component, i.e. `/api/<verstion>/type/...`
   */
  static clientVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Get the client app id if this is a App <-> App communication.
   */
  static clientAppId(): string;

  /**
   * Get the client user id if this is a App <-> App communication.
   */
  static clientUserId(): string;

  /**
   * Get the current Action
   */
  static action(): Action;

  /**
   * Load a type from the current package by name.
   */
  static type(name: string, failIfMissing?: boolean): Type | null;

  /**
   * @return a {@link Logger} for the current type.
   */
  static log(): Logger;

  /**
   * Get logger by name.
   */
  static logger(name: string): Logger;

  /**
   * Random value generator for testing environments and for reliably reproducing synthesized data. Random seed can be
   * set manually to reproduce a specific sequence.
   *
   * @return singleton Rnd instance.
   */
  static rnd(): Rnd;

  /**
   * Get the current Context
   */
  static context(): Context;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For static methods #thisArg should be `null`.
   *
   * @see #callKwargs
   * @see #callJson
   */
  static call(type: string, action: string, thisArg: any, ...args: any[]): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For methods #kwargs is expected to have element with name {@link FunctionParam#This} ('this')
   * unless target type is {@link DefaultInstance}.
   *
   * @see #call
   * @see #callJson
   * @see #callJsonKwargs
   */
  static callKwargs(type: string, action: string, kwargs?: C3.Map<string, any>): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For static methods #thisArg should be `null`. #args is expected to be a JSON array with method
   * arguments.
   *
   * @see #callKwargs
   * @see #callJson
   */
  static callJson(type: string, action: string, thisArg: any | null, args?: any | null): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For methods #kwargs is expected to have field with name {@link FunctionParam#This} ('this')
   * unless target type is {@link DefaultInstance}. #kwargs is expected to be a JSON object with fields for method
   * arguments.
   *
   * @see #call
   * @see #callKwargs
   * @see #callJson
   */
  static callJsonKwargs(type: string, action: string, kwargs?: any | null): T | null;

  /**
   * Runs the given lambda asynchronously.
   */
  static async(action?: λNullConsumer | null): void;

  /**
   * Runs the given lambda in parallel for all of the elements in the given collection.
   */
  static eachParallel(collection: Collection<E> | null, action: λConsumer<E | null>): void;

  /**
   * This method returns all the methods accessible via the c3 variable. This is used by the Python SDK
   */
  static pyGlobalMethods(): C3.Set<string | null>;
}


interface λConsumer<T> {
  (t: T): void
}

interface λNullConsumer {
  (): void
}
