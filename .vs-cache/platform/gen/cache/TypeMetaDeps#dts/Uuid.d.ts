// TypeScript definitions for the C3 type Uuid

/**
 * Create a "Universally Unique IDentifier", also called a "GUID" (Globally Unique IDentifier) value usable as a key.
 *
 * @remarks this represents a value passed to a method that expects an instance of Uuid
 */
declare interface IUuid {
}

/**
 * Create a "Universally Unique IDentifier", also called a "GUID" (Globally Unique IDentifier) value usable as a key.
 *
 * @remarks this represents a made instance of Uuid
 */
declare class Uuid {

  /**
   * Create a UUID using the best support available locally. Typically this will be a (version 4) random one.
   */
  static create(): string;
}

