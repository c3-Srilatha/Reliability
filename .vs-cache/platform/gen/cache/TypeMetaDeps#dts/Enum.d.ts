// TypeScript definitions for the C3 type Enum

/**
 * This is the mixin type of every declared enumeration type, with a generic variable which is bound to the
 * type of the enumeration values. It provides methods available on all enumerations.
 * An enumeration type is a way to declare a set of constant keys (and optionally values) which is reusable.
 *
 * Simple enumerations have the value identical to the key, of type string:
 * ```type
 * enum type Characters { GOOD BAD UGLY }
 * ```
 * Will produce a type with three constant fields, each of whose value is a string with the same text as the key.
 *
 * It is also possible to assign values to the constants:
 * ```type
 * enum type HttpStatus { OK = 200 BAD_REQUEST = 400 NOT_FOUND = 404 }
 * ```
 * In this case, the values must all be of the same type and the resulting type will have the generic variable **T**
 * bound to that value type.
 *
 * Despite the examples above, it is best to put each enumeration value on a separate line with a documentation comment.
 *
 * Enums may also be mixed in:
 * ```type
 * enum type ImageUploadHttpStatus mixes HttpStatus { TOO_BLURRY = 460 }
 * ```
 * This makes a new enum *ImageUploadHttpStatus* that has all the values of *HttpStatus*, plus the new one it defines.
 * The original HttpStatus enum is not affected.
 *
 * Note that the type of the enum value must be consistent across all mixed-in enum types (just as they must be between
 * values of the same enum type).
 *
 * When an enum is used to declare a field or function parameter, the syntax is:
 * ```type
 * status: int enum HttpStatus
 * ```
 * If a default value is desired, use the name of the enum field:
 * ```type
 * status: int enum HttpStatus = OK
 * ```
 * Enum fields (labels/values) need to be defined in order for its ordering-related APIs to work, such as values(), labelIndex()
 * See also {@link TypMeta#declaredFieldTypes}
 *
 * @var T will be bound to the type of the enum values
 *
 * @remarks this represents a value passed to a method that expects an instance of Enum
 */
declare interface IEnum<T> {
}

/**
 * This is the mixin type of every declared enumeration type, with a generic variable which is bound to the
 * type of the enumeration values. It provides methods available on all enumerations.
 * An enumeration type is a way to declare a set of constant keys (and optionally values) which is reusable.
 *
 * Simple enumerations have the value identical to the key, of type string:
 * ```type
 * enum type Characters { GOOD BAD UGLY }
 * ```
 * Will produce a type with three constant fields, each of whose value is a string with the same text as the key.
 *
 * It is also possible to assign values to the constants:
 * ```type
 * enum type HttpStatus { OK = 200 BAD_REQUEST = 400 NOT_FOUND = 404 }
 * ```
 * In this case, the values must all be of the same type and the resulting type will have the generic variable **T**
 * bound to that value type.
 *
 * Despite the examples above, it is best to put each enumeration value on a separate line with a documentation comment.
 *
 * Enums may also be mixed in:
 * ```type
 * enum type ImageUploadHttpStatus mixes HttpStatus { TOO_BLURRY = 460 }
 * ```
 * This makes a new enum *ImageUploadHttpStatus* that has all the values of *HttpStatus*, plus the new one it defines.
 * The original HttpStatus enum is not affected.
 *
 * Note that the type of the enum value must be consistent across all mixed-in enum types (just as they must be between
 * values of the same enum type).
 *
 * When an enum is used to declare a field or function parameter, the syntax is:
 * ```type
 * status: int enum HttpStatus
 * ```
 * If a default value is desired, use the name of the enum field:
 * ```type
 * status: int enum HttpStatus = OK
 * ```
 * Enum fields (labels/values) need to be defined in order for its ordering-related APIs to work, such as values(), labelIndex()
 * See also {@link TypMeta#declaredFieldTypes}
 *
 * @var T will be bound to the type of the enum values
 *
 * @remarks this represents a made instance of Enum
 */
declare class Enum<T> {

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): T | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: T | null, failIfInvalid?: boolean): string | null;

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
  static valueIndex(value: T | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<T | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<T | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, T | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: T): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<T> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
