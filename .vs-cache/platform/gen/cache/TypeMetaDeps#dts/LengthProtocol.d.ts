// TypeScript definitions for the C3 type LengthProtocol

/**
 * Marker type indicating support for implementation language syntax for the length of a composite object.
 *
 * @see FieldProtocol
 * @see InProtocol
 *
 * @remarks this represents a value passed to a method that expects an instance of LengthProtocol
 */
declare interface ILengthProtocol {
}

/**
 * Marker type indicating support for implementation language syntax for the length of a composite object.
 *
 * @see FieldProtocol
 * @see InProtocol
 *
 * @remarks this represents a made instance of LengthProtocol
 */
declare class LengthProtocol {

  /**
   * Implements the js `.length` property or py `len()` support.
   * @return the number of elements in this instance
   */
  _length_(): number;
}

