// TypeScript definitions for the C3 type BoolProtocol

/**
 * Marker type indicating support for implementation language syntax for truthiness.
 *
 * @remarks this represents a value passed to a method that expects an instance of BoolProtocol
 */
declare interface IBoolProtocol {
}

/**
 * Marker type indicating support for implementation language syntax for truthiness.
 *
 * @remarks this represents a made instance of BoolProtocol
 */
declare class BoolProtocol {

  /**
   * Determines if this value is truth or falsy
   */
  _bool_(): boolean;
}

