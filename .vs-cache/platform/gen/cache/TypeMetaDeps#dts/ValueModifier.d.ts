// TypeScript definitions for the C3 type ValueModifier

/**
 * By default C3 value types allow empty values but do not preserve exact empty value and convert them to null. E.g. by
 * default `string` value can be set as `null` or `""` but will only get preserved / persisted as `null` and will be
 * dropped during serialization.
 *
 * This enum indicates {@link ValueType#modifier} for changing default behavior.
 *
 * ## Modifier Behavior Summary
 *
 * | DSL     | Modifier           | Can Set Empty | Retrieved As       | isNonEmpty | isNonOptionalParam | preservesEmpty |
 * |---------|--------------------|---------------|--------------------|------------|--------------------| ---------------|
 * | `type`  | (none)             | Yes           | defaultEmptyValue† | false      | false              | false          |
 * | `!type` | NON_EMPTY          | No            | N/A                | true       | true               | false          |
 * | `?type` | PRESERVES_EMPTY    | Yes           | empty preserved    | false      | false              | true           |
 * | `!?type`| NON_OPTIONAL_PARAM | Yes           | empty preserved    | false      | true               | true           |
 *
 * † {@link ValueType#defaultEmptyValue} - empty values are converted to type-specific defaults:
 *   e.g., empty string → null, null collection → [], boolean false/null → false (when not preservesEmpty).
 *
 * "empty preserved" means both null and empty values are preserved and differentiated (e.g., null vs "" for strings).
 *
 * ## Use Cases
 *
 * - `!type` - Required field, must have a non-empty value
 * - `?type` - Optional field where null/empty is meaningful and should be preserved
 * - `!?type` - Required function parameter that must be explicitly provided but can be null
 * - `type` - Optional field with automatic empty-to-default conversion
 *
 * @see ValueType#modifier
 * @see ValueType#isNonEmpty
 * @see ValueType#isNonOptionalParam
 * @see ValueType#preservesEmpty
 *
 * @remarks this represents a value passed to a method that expects an instance of ValueModifier
 */
declare interface IValueModifier {

  /**
   * Disallows empty values
   */
  readonly NON_EMPTY: "NON_EMPTY";

  /**
   * Allows empty & preserves empty values
   */
  readonly PRESERVES_EMPTY: "PRESERVES_EMPTY";

  /**
   * Indicates that function parameter is required but allows empty & preserves empty.
   */
  readonly NON_OPTIONAL_PARAM: "NON_OPTIONAL_PARAM";
}

/**
 * By default C3 value types allow empty values but do not preserve exact empty value and convert them to null. E.g. by
 * default `string` value can be set as `null` or `""` but will only get preserved / persisted as `null` and will be
 * dropped during serialization.
 *
 * This enum indicates {@link ValueType#modifier} for changing default behavior.
 *
 * ## Modifier Behavior Summary
 *
 * | DSL     | Modifier           | Can Set Empty | Retrieved As       | isNonEmpty | isNonOptionalParam | preservesEmpty |
 * |---------|--------------------|---------------|--------------------|------------|--------------------| ---------------|
 * | `type`  | (none)             | Yes           | defaultEmptyValue† | false      | false              | false          |
 * | `!type` | NON_EMPTY          | No            | N/A                | true       | true               | false          |
 * | `?type` | PRESERVES_EMPTY    | Yes           | empty preserved    | false      | false              | true           |
 * | `!?type`| NON_OPTIONAL_PARAM | Yes           | empty preserved    | false      | true               | true           |
 *
 * † {@link ValueType#defaultEmptyValue} - empty values are converted to type-specific defaults:
 *   e.g., empty string → null, null collection → [], boolean false/null → false (when not preservesEmpty).
 *
 * "empty preserved" means both null and empty values are preserved and differentiated (e.g., null vs "" for strings).
 *
 * ## Use Cases
 *
 * - `!type` - Required field, must have a non-empty value
 * - `?type` - Optional field where null/empty is meaningful and should be preserved
 * - `!?type` - Required function parameter that must be explicitly provided but can be null
 * - `type` - Optional field with automatic empty-to-default conversion
 *
 * @see ValueType#modifier
 * @see ValueType#isNonEmpty
 * @see ValueType#isNonOptionalParam
 * @see ValueType#preservesEmpty
 *
 * @remarks this represents a made instance of ValueModifier
 */
declare class ValueModifier {

  /**
   * Disallows empty values
   */
  static readonly NON_EMPTY: "NON_EMPTY";

  /**
   * Allows empty & preserves empty values
   */
  static readonly PRESERVES_EMPTY: "PRESERVES_EMPTY";

  /**
   * Indicates that function parameter is required but allows empty & preserves empty.
   */
  static readonly NON_OPTIONAL_PARAM: "NON_OPTIONAL_PARAM";

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

  /**
   * Produce the DSL syntax that represents this modifier.
   */
  static syntax(modifier?: string | null): string | null;
}


interface λConsumer<T> {
  (t: T): void
}
