// TypeScript definitions for the C3 type WebSocketSession

/**
 * This type is used for action logging purposes (splunk action profiler).
 * All c3 types that want to use the C3.remote.tcp.WebSocket functions MUST mix this type.
 * Note that WebSocketExecutor already mixes this type.
 *
 * @remarks this represents a value passed to a method that expects an instance of WebSocketSession
 */
declare interface IWebSocketSession {
}

/**
 * This type is used for action logging purposes (splunk action profiler).
 * All c3 types that want to use the C3.remote.tcp.WebSocket functions MUST mix this type.
 * Note that WebSocketExecutor already mixes this type.
 *
 * @remarks this represents a made instance of WebSocketSession
 */
declare class WebSocketSession {

  static connect(): void;

  static send(): void;

  static receive(): void;

  static close(): void;
}

