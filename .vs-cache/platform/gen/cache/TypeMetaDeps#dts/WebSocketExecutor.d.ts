// TypeScript definitions for the C3 type WebSocketExecutor

/**
 * This module defines the c3 actions used to implement the scriptable WebSocket functionality.
 *
 * The c3 types that want to use this functionality MUST mix the WebSocketSession type (see below)
 *
 * There are 4 scriptable functions used to establish a tcp/ip connection via websockets. Both endpoints can act as servers
 * and clients.
 * The functions are:
 *   connect:
 *      void C3.remote.tcp.WebSocket.connect(string endpointUrl, string tenant, string tag, string module, string type)
 *         endpointUrl - specifies the endpoint of the c3 websocket servlet (like (wss://beat-lvm-ep.c3-e.com/websocket)
 *         tenant, target, module, type - used to specify the target for the 'run' function
 *
 *      The connect function will establish the websocket session and cache the socket in a TLS variable that will be used by
 *      the functions below. It executes the handshake with the remote endpoint which will cause the socket in the endpoint
 *      to also be cached in the TLS which will be used by the functions below on the remote endpoint.
 *
 *   send:
 *      void C3.remote.tcp.WebSocket.send(string message)
 *         message - the message to be sent to the remote endpoint (currently only supports strings)
 *      The function will return when the message has been delivered
 *
 *   receive
 *      string C3.remote.tcp.WebSocket.receive(int timeout)
 *         timeout - number of seconds to wait for the arrival of a message
 *      The function will return the message (only string messages are currently supported) or will return null if the timer expired or the
 *      socket is closed.
 *
 *   close
 *      void C3.remote.tcp.WebSocket.close()
 *      This function closes the connection.
 *
 * @remarks this represents a value passed to a method that expects an instance of WebSocketExecutor
 */
declare interface IWebSocketExecutor {
}

/**
 * This module defines the c3 actions used to implement the scriptable WebSocket functionality.
 *
 * The c3 types that want to use this functionality MUST mix the WebSocketSession type (see below)
 *
 * There are 4 scriptable functions used to establish a tcp/ip connection via websockets. Both endpoints can act as servers
 * and clients.
 * The functions are:
 *   connect:
 *      void C3.remote.tcp.WebSocket.connect(string endpointUrl, string tenant, string tag, string module, string type)
 *         endpointUrl - specifies the endpoint of the c3 websocket servlet (like (wss://beat-lvm-ep.c3-e.com/websocket)
 *         tenant, target, module, type - used to specify the target for the 'run' function
 *
 *      The connect function will establish the websocket session and cache the socket in a TLS variable that will be used by
 *      the functions below. It executes the handshake with the remote endpoint which will cause the socket in the endpoint
 *      to also be cached in the TLS which will be used by the functions below on the remote endpoint.
 *
 *   send:
 *      void C3.remote.tcp.WebSocket.send(string message)
 *         message - the message to be sent to the remote endpoint (currently only supports strings)
 *      The function will return when the message has been delivered
 *
 *   receive
 *      string C3.remote.tcp.WebSocket.receive(int timeout)
 *         timeout - number of seconds to wait for the arrival of a message
 *      The function will return the message (only string messages are currently supported) or will return null if the timer expired or the
 *      socket is closed.
 *
 *   close
 *      void C3.remote.tcp.WebSocket.close()
 *      This function closes the connection.
 *
 * @remarks this represents a made instance of WebSocketExecutor
 */
declare class WebSocketExecutor {

  /**
   * This is a private function and it cannot be extended. It is used as a wrapper to the executor 'run' function.
   */
  static dispatchRun(target?: string | null, socketId?: number | null): void;

  static connect(): void;

  static send(): void;

  static receive(): void;

  static close(): void;

  /**
   * This function is implemented by the websocket executor and will be invoked during the handshake by the remote endpoint
   * When this function is completed, the websocket connection will be closed by the remote endpoint. It is inside this function
   * that the remote endpoint implements its networking communication functionality
   */
  static run(): void;
}

