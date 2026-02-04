// TypeScript definitions for the C3 type FieldProtocol

/**
 * Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
 *
 * @see FieldsProtocol
 * @see MutableFieldProtocol
 * @see ItemProtocol
 * @see InProtocol
 *
 * @remarks this represents a value passed to a method that expects an instance of FieldProtocol
 */
declare interface IFieldProtocol {
}

/**
 * Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
 *
 * @see FieldsProtocol
 * @see MutableFieldProtocol
 * @see ItemProtocol
 * @see InProtocol
 *
 * @remarks this represents a made instance of FieldProtocol
 */
declare class FieldProtocol {

  /**
   * Implements the `.` syntactic sugar in js and py.
   * @param name
   *           name associated with the desired attribute value.
   * @return the attribute value associated with the given attribute name
   */
  _field_(name: string): T | null;
}

