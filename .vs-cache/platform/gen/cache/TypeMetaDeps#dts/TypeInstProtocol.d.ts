// TypeScript definitions for the C3 type TypeInstProtocol

/**
 * Marker type indicating that instance of the subtype can provide its C3 Type and native implementation.
 *
 * Also see {@link FieldsProtocol}.
 * Also see {@link MutableFieldProtocol}.
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeInstProtocol
 */
declare interface ITypeInstProtocol {
}

/**
 * Marker type indicating that instance of the subtype can provide its C3 Type and native implementation.
 *
 * Also see {@link FieldsProtocol}.
 * Also see {@link MutableFieldProtocol}.
 *
 * @remarks this represents a made instance of TypeInstProtocol
 */
declare class TypeInstProtocol {

  /**
   * @return native object with all fields
   */
  _type_(): Type;

  /**
   * @return native object with all fields
   */
  _this_(): any;
}

