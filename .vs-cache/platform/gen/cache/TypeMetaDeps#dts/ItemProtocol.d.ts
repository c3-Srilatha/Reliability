// TypeScript definitions for the C3 type ItemProtocol

/**
 * Marker type indicating support for implementation language syntax for item getter via `[]` syntax.
 *
 * @see FieldProtocol
 * @see InProtocol
 *
 * @remarks this represents a value passed to a method that expects an instance of ItemProtocol
 */
declare interface IItemProtocol {
}

/**
 * Marker type indicating support for implementation language syntax for item getter via `[]` syntax.
 *
 * @see FieldProtocol
 * @see InProtocol
 *
 * @remarks this represents a made instance of ItemProtocol
 */
declare class ItemProtocol {

  /**
   * Implements the square bracket getter `obj[item]`.
   *
   * @param key
   *         item associated with the desired element.
   * @return the element associated with the given item
   */
  _item_(key: any): any;
}

