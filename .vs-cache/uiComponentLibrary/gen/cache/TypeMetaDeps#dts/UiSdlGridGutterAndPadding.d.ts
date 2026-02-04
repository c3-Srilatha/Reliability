// TypeScript definitions for the C3 type UiSdlGridGutterAndPadding

/**
 * The padding and gutter values available for {@link UiSdlGridLayout},
 * {@link UiSdlGridContainer} and {@link UiSdlComponentContainer}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGridGutterAndPadding
 */
declare interface IUiSdlGridGutterAndPadding {

  readonly GP0: 0;

  readonly GP2: 2;

  readonly GP4: 4;

  readonly GP8: 8;

  readonly GP12: 12;

  readonly GP16: 16;

  readonly GP24: 24;

  readonly GP32: 32;

  readonly GP40: 40;

  readonly GP80: 80;
}

/**
 * The padding and gutter values available for {@link UiSdlGridLayout},
 * {@link UiSdlGridContainer} and {@link UiSdlComponentContainer}.
 *
 * @remarks this represents a made instance of UiSdlGridGutterAndPadding
 */
declare class UiSdlGridGutterAndPadding {

  static readonly GP0: 0;

  static readonly GP2: 2;

  static readonly GP4: 4;

  static readonly GP8: 8;

  static readonly GP12: 12;

  static readonly GP16: 16;

  static readonly GP24: 24;

  static readonly GP32: 32;

  static readonly GP40: 40;

  static readonly GP80: 80;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: number | null, failIfInvalid?: boolean): string | null;

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
  static valueIndex(value: number | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<number | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<number | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, number | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: number): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<number> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
