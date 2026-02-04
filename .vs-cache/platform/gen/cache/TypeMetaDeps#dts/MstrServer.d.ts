// TypeScript definitions for the C3 type MstrServer

/**
 * @remarks this represents a value passed to a method that expects an instance of MstrServer
 */
declare interface IMstrServer {
}

/**
 * @remarks this represents a made instance of MstrServer
 */
declare class MstrServer {

  static getAuthInfo(): MstrAuthInfo | null;

  static getServerUrl(): string | null;
}

