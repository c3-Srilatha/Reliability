// TypeScript definitions for the C3 type WebSocket

/**
 * @remarks this represents a value passed to a method that expects an instance of WebSocket
 */
declare interface IWebSocket {
}

/**
 * @remarks this represents a made instance of WebSocket
 */
declare class WebSocket {

  /**
   * This is a private function and it cannot be extended. It is used as a wrapper to the executor 'run' function.
   */
  static dispatchRun(target?: string | null, socketId?: number | null): void;
}

