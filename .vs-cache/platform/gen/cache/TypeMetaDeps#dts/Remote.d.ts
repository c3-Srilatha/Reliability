// TypeScript definitions for the C3 type Remote

/**
 * Global methods which provide a starting point for using the C3 remote feature. This types represents methods
 * available on the global "C3" (JavaScript) or "c3" (Python) namespace variable.
 *
 * Each connection is independent since it may be to not only a different server, but also potentially to a different
 * application or even a different version. This means the metadata and even potentially implementations are different
 * per connection.
 *
 * # Browser JavaScript
 *
 * First add this script tag to your HTML page to run the bootstrap code from your C3 server:
 * ```html
 * <script src="https://.../remote/c3.js"></script>
 * ```
 *
 * Then you can use `C3.connect()` to make a connection:
 *
 * ```js
 * let ts = C3.connect("http://localhost:8888/c3/c3").typeSystem();
 * let type = ts.type('Echo', true);
 * console.log(type.echoStatic().message);
 * ```
 *
 * # Node.js
 *
 * First install c3-remote npm module:
 *
 * ```js
 * wget http://localhost:8888/c3/c3/npm-modules/c3-remote.tgz -O c3-remote.tgz
 * npm install c3-remote.tgz
 * ```
 *
 * Then import it in your Node.js script and make a connection:
 *
 * ```js
 * require('@c3/remote');
 * let ts = C3.connect("http://localhost:8888/c3/c3").typeSystem();
 * let type = ts.type('Echo', true);
 * console.log(type.echoStatic().message);
 * ```
 *
 * # Notes
 *
 * The exact URLs depend on the way the server is configured. The examples above are for a "cluster URL"
 * which supports multiple environments. See {@link AppUrl} for more info.
 *
 * The initial script is only to bootstrap the C3 variable with basic code to load the actual implementation from the
 * server. This means that the code being used for different connections can vary and so connections to servers of
 * different versions will be running slightly different code.
 *
 * # Setup Sequence
 *
 * Here is a the sequence of calls made to establish a new server connection:
 *
 * ```mermaid
 * sequenceDiagram
 *     page->>browser: <script src="c3.js">
 *     browser->>server: GET c3.js
 *     server->>browser: simple static script
 *     browser->>page: set C3 variable
 *     page->>browser: C3.connect()
 *     browser->>server: GET bootstrap.js
 *     server->>browser: type system code
 *     browser->>page: type system endpoint
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of Remote
 */
declare interface IRemote {
}

/**
 * Global methods which provide a starting point for using the C3 remote feature. This types represents methods
 * available on the global "C3" (JavaScript) or "c3" (Python) namespace variable.
 *
 * Each connection is independent since it may be to not only a different server, but also potentially to a different
 * application or even a different version. This means the metadata and even potentially implementations are different
 * per connection.
 *
 * # Browser JavaScript
 *
 * First add this script tag to your HTML page to run the bootstrap code from your C3 server:
 * ```html
 * <script src="https://.../remote/c3.js"></script>
 * ```
 *
 * Then you can use `C3.connect()` to make a connection:
 *
 * ```js
 * let ts = C3.connect("http://localhost:8888/c3/c3").typeSystem();
 * let type = ts.type('Echo', true);
 * console.log(type.echoStatic().message);
 * ```
 *
 * # Node.js
 *
 * First install c3-remote npm module:
 *
 * ```js
 * wget http://localhost:8888/c3/c3/npm-modules/c3-remote.tgz -O c3-remote.tgz
 * npm install c3-remote.tgz
 * ```
 *
 * Then import it in your Node.js script and make a connection:
 *
 * ```js
 * require('@c3/remote');
 * let ts = C3.connect("http://localhost:8888/c3/c3").typeSystem();
 * let type = ts.type('Echo', true);
 * console.log(type.echoStatic().message);
 * ```
 *
 * # Notes
 *
 * The exact URLs depend on the way the server is configured. The examples above are for a "cluster URL"
 * which supports multiple environments. See {@link AppUrl} for more info.
 *
 * The initial script is only to bootstrap the C3 variable with basic code to load the actual implementation from the
 * server. This means that the code being used for different connections can vary and so connections to servers of
 * different versions will be running slightly different code.
 *
 * # Setup Sequence
 *
 * Here is a the sequence of calls made to establish a new server connection:
 *
 * ```mermaid
 * sequenceDiagram
 *     page->>browser: <script src="c3.js">
 *     browser->>server: GET c3.js
 *     server->>browser: simple static script
 *     browser->>page: set C3 variable
 *     page->>browser: C3.connect()
 *     browser->>server: GET bootstrap.js
 *     server->>browser: type system code
 *     browser->>page: type system endpoint
 * ```
 *
 * @remarks this represents a made instance of Remote
 */
declare class Remote {

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
}

