// TypeScript definitions for the C3 type InProtocol

/**
 * Marker type indicating support for implementation language `in` syntax.
 *
 * @see FieldProtocol
 * @see ItemProtocol
 *
 * @remarks this represents a value passed to a method that expects an instance of InProtocol
 */
declare interface IInProtocol {
}

/**
 * Marker type indicating support for implementation language `in` syntax.
 *
 * @see FieldProtocol
 * @see ItemProtocol
 *
 * @remarks this represents a made instance of InProtocol
 */
declare class InProtocol {

  /**
   * Implements the `in` syntactic sugar in js and py.
   * @param key
   *           element to test existence of
   * @return true if there is an element corresponding to the given key
   */
  _contains_(key: any): boolean;
}

