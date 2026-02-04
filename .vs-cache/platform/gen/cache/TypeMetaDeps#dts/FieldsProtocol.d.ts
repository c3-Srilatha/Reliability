// TypeScript definitions for the C3 type FieldsProtocol

/**
 * Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
 *
 * Extends base FieldProtocol by introducing multi-field access
 *
 * Also see {@link FieldProtocol}.
 *
 * @remarks this represents a value passed to a method that expects an instance of FieldsProtocol
 */
declare interface IFieldsProtocol {
}

/**
 * Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
 *
 * Extends base FieldProtocol by introducing multi-field access
 *
 * Also see {@link FieldProtocol}.
 *
 * @remarks this represents a made instance of FieldsProtocol
 */
declare class FieldsProtocol {

  /**
   * Implements the `.` syntactic sugar in js and py.
   * @param name
   *           name associated with the desired attribute value.
   * @return the attribute value associated with the given attribute name
   */
  _field_(name: string): T | null;

  /**
   * Implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
   * @param names
   *         names associated with the desired attribute values.
   * @return the attribute values associated with the given attribute names
   */
  _fields_(names: C3.Array<string | null>): C3.Array<any>;

  /**
   * Implements the `.` auto-complete syntax in js and py.
   * @return list of all attribute names
   */
  _fieldNames_(): C3.Array<string | null>;
}

