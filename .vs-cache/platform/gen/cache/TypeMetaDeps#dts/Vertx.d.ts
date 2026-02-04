// TypeScript definitions for the C3 type Vertx

/**
 * @remarks this represents a value passed to a method that expects an instance of Vertx
 */
declare interface IVertx {
}

/**
 * @remarks this represents a made instance of Vertx
 */
declare class Vertx {

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): Vertx;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): Vertx | null;

  /**
   * Construct an instance with initial state.
   */
  static make(): Vertx;

  start(port: number, allowDuplicateServer?: boolean): void;

  static start(port: number, allowDuplicateServer?: boolean): void;

  stop(): void;

  static stop(): void;

  client(): any;

  static client(): any;

  port(): number;

  static port(): number;

  ipAddress(): string;

  static ipAddress(): string;
}

