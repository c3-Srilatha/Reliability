// TypeScript definitions for the C3 type PrimitiveTypeName

/**
 * Primitive types correspond to distinct sub-types, but they also have variants. For example, `datetime` and `date` are
 * both {@link DateTimeType}, but with different data retrained (with and without time).
 *
 * @see PrimitiveType
 *
 * @remarks this represents a value passed to a method that expects an instance of PrimitiveTypeName
 */
declare interface IPrimitiveTypeName {

  readonly BINARY: 'binary';

  readonly BOOLEAN: 'boolean';

  readonly BYTE: 'byte';

  readonly DATE_TIME: 'datetime';

  readonly DECIMAL: 'decimal';

  readonly DOUBLE: 'double';

  readonly FLOAT: 'float';

  readonly INT: 'int';

  readonly INT16: 'int16';

  readonly INT32: 'int32';

  readonly BIGINT: 'bigint';

  readonly JSON: 'json';

  readonly NUMBER: 'number';

  readonly STRING: 'string';

  /**
   * DSL syntax for date without time component
   */
  readonly DATE_ONLY: 'date';
}

/**
 * Primitive types correspond to distinct sub-types, but they also have variants. For example, `datetime` and `date` are
 * both {@link DateTimeType}, but with different data retrained (with and without time).
 *
 * @see PrimitiveType
 *
 * @remarks this represents a made instance of PrimitiveTypeName
 */
declare class PrimitiveTypeName {

  static readonly BINARY: 'binary';

  static readonly BOOLEAN: 'boolean';

  static readonly BYTE: 'byte';

  static readonly DATE_TIME: 'datetime';

  static readonly DECIMAL: 'decimal';

  static readonly DOUBLE: 'double';

  static readonly FLOAT: 'float';

  static readonly INT: 'int';

  static readonly INT16: 'int16';

  static readonly INT32: 'int32';

  static readonly BIGINT: 'bigint';

  static readonly JSON: 'json';

  static readonly NUMBER: 'number';

  static readonly STRING: 'string';

  /**
   * DSL syntax for date without time component
   */
  static readonly DATE_ONLY: 'date';

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
