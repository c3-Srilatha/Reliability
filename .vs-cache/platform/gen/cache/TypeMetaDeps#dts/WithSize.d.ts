// TypeScript definitions for the C3 type WithSize

/**
 * @remarks this represents a value passed to a method that expects an instance of WithSize
 */
declare interface IWithSize {
}

/**
 * @remarks this represents a made instance of WithSize
 */
declare class WithSize {

  /**
   * Implements the js `.length` property or py `len()` support.
   * @return the number of elements in this instance
   */
  _length_(): number;

  /**
   * Number of elements in this instance.
   */
  get size(): number;

  /**
   * @return true if this instance is empty.
   */
  isEmpty(): boolean;
}

