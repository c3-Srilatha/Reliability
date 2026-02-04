// TypeScript definitions for the C3 type HttpProxyServer

/**
 * HttpProxyServer creates forward http/https proxy server on localhost.
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpProxyServer
 */
declare interface IHttpProxyServer {
}

/**
 * HttpProxyServer creates forward http/https proxy server on localhost.
 *
 * @remarks this represents a made instance of HttpProxyServer
 */
declare class HttpProxyServer {

  static start(port: number): void;

  static stop(port: number): void;
}

