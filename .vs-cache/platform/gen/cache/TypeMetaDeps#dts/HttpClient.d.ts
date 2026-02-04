// TypeScript definitions for the C3 type HttpClient

/**
 * Asynchronous HTTP client
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpClient
 */
declare interface IHttpClient {
}

/**
 * Asynchronous HTTP client
 *
 * @remarks this represents a made instance of HttpClient
 */
declare class HttpClient {

  /**
   * Opens HTTP client to a given url ready to send requests
   */
  static open(rootUrl: string, auth: string | null, defaultRequestHeaders?: C3.Map<string | null, string | null>): HttpClient;

  /**
   * @return root URL of this client
   */
  rootUrl(): string;

  /**
   * @return URL for a given encoded path
   */
  url(encodedPath: string | null): string;

  /**
   * Clears all default request headers including Authorization
   */
  clearDefaultRequestHeaders(): void;

  /**
   * Sets or clears provided default request header
   */
  setDefaultRequestHeader(name: string, value: string | null): void;

  /**
   * @return default HTTP headers that are sent with every request
   */
  defaultRequestHeaders(): C3.Map<string | null, string | null>;

  /**
   * @return new HttpRequest for a given encoded path
   */
  request(method: string, encodedPath: string | null): HttpRequest;

  /**
   * @return new HttpRequest for a given path and json payload
   */
  request(method: string, encodedPath: string | null, entity: any | null): HttpRequest;

  /**
   * @return promise of response for provided request
   */
  sendJson(method: string, encodedPath: string | null, entity?: any | null): C3.Promise<HttpResponse | null>;

  /**
   * Closes this connection
   */
  close(): void;
}

