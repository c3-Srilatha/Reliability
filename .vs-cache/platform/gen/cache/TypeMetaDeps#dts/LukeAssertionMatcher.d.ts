// TypeScript definitions for the C3 type LukeAssertionMatcher

/**
 * Matchers that are supported by {@link LukeAsyncQueueNode#assert}
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeAssertionMatcher
 */
declare interface ILukeAssertionMatcher {

  /**
   * Deprecated C3 Matchers!
   * use toEqual instead
   */
  readonly EQUAL: 'equal';

  /**
   * use toBeGreaterThan instead
   */
  readonly GREATER_THAN: 'greaterThan';

  /**
   * use toBeLessThan instead
   */
  readonly LESS_THAN: 'lessThan';

  /**
   * use toContain instead
   */
  readonly CONTAIN: 'contain';

  /**
   * use toContain instead
   */
  readonly STRING_CONTAIN: 'stringContain';

  /**
   * use toHaveLength instead
   */
  readonly HAS_LENGTH: 'hasLength';

  /**
   * use toBeEmpty instead
   */
  readonly EMPTY: 'empty';

  /**
   * use toExist instead
   */
  readonly EXISTS: 'exists';

  /**
   * C3 Matchers
   */
  readonly TO_HAVE_LENGTH: 'toHaveLength';

  readonly TO_BE_EMPTY: 'toBeEmpty';

  readonly TO_EXIST: 'toExist';

  readonly TO_MATCH_OBJECT: 'toMatchObject';

  /**
   * Jasmine Matchers
   */
  readonly TO_BE: 'toBe';

  readonly TO_BE_CLOSE_TO: 'toBeCloseTo';

  readonly TO_BE_DEFINED: 'toBeDefined';

  readonly TO_BE_FALSE: 'toBeFalse';

  readonly TO_BE_FALSY: 'toBeFalsy';

  readonly TO_BE_GREATER_THAN: 'toBeGreaterThan';

  readonly TO_BE_GREATER_THAN_OR_EQUAL: 'toBeGreaterThanOrEqual';

  readonly TO_BE_INSTANCE_OF: 'toBeInstanceOf';

  readonly TO_BE_LESS_THAN: 'toBeLessThan';

  readonly TO_BE_LESS_THAN_OR_EQUAL: 'toBeLessThanOrEqual';

  readonly TO_BE_NAN: 'toBeNaN';

  readonly TO_BE_NEGATIVE_INFINITY: 'toBeNegativeInfinity';

  readonly TO_BE_NULL: 'toBeNull';

  readonly TO_BE_POSITIVE_INFINITY: 'toBePositiveInfinity';

  readonly TO_BE_TRUTHY: 'toBeTruthy';

  readonly TO_BE_UNDEFINED: 'toBeUndefined';

  readonly TO_CONTAIN: 'toContain';

  readonly TO_EQUAL: 'toEqual';

  readonly TO_MATCH: 'toMatch';
}

/**
 * Matchers that are supported by {@link LukeAsyncQueueNode#assert}
 *
 * @remarks this represents a made instance of LukeAssertionMatcher
 */
declare class LukeAssertionMatcher {

  /**
   * Deprecated C3 Matchers!
   * use toEqual instead
   */
  static readonly EQUAL: 'equal';

  /**
   * use toBeGreaterThan instead
   */
  static readonly GREATER_THAN: 'greaterThan';

  /**
   * use toBeLessThan instead
   */
  static readonly LESS_THAN: 'lessThan';

  /**
   * use toContain instead
   */
  static readonly CONTAIN: 'contain';

  /**
   * use toContain instead
   */
  static readonly STRING_CONTAIN: 'stringContain';

  /**
   * use toHaveLength instead
   */
  static readonly HAS_LENGTH: 'hasLength';

  /**
   * use toBeEmpty instead
   */
  static readonly EMPTY: 'empty';

  /**
   * use toExist instead
   */
  static readonly EXISTS: 'exists';

  /**
   * C3 Matchers
   */
  static readonly TO_HAVE_LENGTH: 'toHaveLength';

  static readonly TO_BE_EMPTY: 'toBeEmpty';

  static readonly TO_EXIST: 'toExist';

  static readonly TO_MATCH_OBJECT: 'toMatchObject';

  /**
   * Jasmine Matchers
   */
  static readonly TO_BE: 'toBe';

  static readonly TO_BE_CLOSE_TO: 'toBeCloseTo';

  static readonly TO_BE_DEFINED: 'toBeDefined';

  static readonly TO_BE_FALSE: 'toBeFalse';

  static readonly TO_BE_FALSY: 'toBeFalsy';

  static readonly TO_BE_GREATER_THAN: 'toBeGreaterThan';

  static readonly TO_BE_GREATER_THAN_OR_EQUAL: 'toBeGreaterThanOrEqual';

  static readonly TO_BE_INSTANCE_OF: 'toBeInstanceOf';

  static readonly TO_BE_LESS_THAN: 'toBeLessThan';

  static readonly TO_BE_LESS_THAN_OR_EQUAL: 'toBeLessThanOrEqual';

  static readonly TO_BE_NAN: 'toBeNaN';

  static readonly TO_BE_NEGATIVE_INFINITY: 'toBeNegativeInfinity';

  static readonly TO_BE_NULL: 'toBeNull';

  static readonly TO_BE_POSITIVE_INFINITY: 'toBePositiveInfinity';

  static readonly TO_BE_TRUTHY: 'toBeTruthy';

  static readonly TO_BE_UNDEFINED: 'toBeUndefined';

  static readonly TO_CONTAIN: 'toContain';

  static readonly TO_EQUAL: 'toEqual';

  static readonly TO_MATCH: 'toMatch';

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
