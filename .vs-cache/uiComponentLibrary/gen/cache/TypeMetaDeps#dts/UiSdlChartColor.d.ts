// TypeScript definitions for the C3 type UiSdlChartColor

/**
 * All the options for UiDesigner components that have enum types for their color selection.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlChartColor
 */
declare interface IUiSdlChartColor {

  /**
   * Blue.
   */
  readonly DARK_BLUE: '#253EB5';

  /**
   * Red-50 design token color.
   */
  readonly RED50: '#FF5271';

  /**
   * Green-50 design token color.
   */
  readonly GREEN50: '#30A18A';

  /**
   * Red.
   */
  readonly RED: '#EA2D2B';

  /**
   * Green.
   */
  readonly GREEN: '#228630';

  /**
   * Orange.
   */
  readonly ORANGE: '#FB8839';

  /**
   * Lilac.
   */
  readonly LILAC: '#6D18C3';

  /**
   * Light blue.
   */
  readonly LIGHT_BLUE: '#2271E7';

  /**
   * Yellow.
   */
  readonly YELLOW: '#E8CD01';

  /**
   * Olive.
   */
  readonly OLIVE: '#82903C';

  /**
   * Sky.
   */
  readonly SKY: '#2693DD';

  /**
   * Teal.
   */
  readonly TEAL: '#009877';

  /**
   * Carbon.
   */
  readonly CARBON: '#596881';

  /**
   * Mauve.
   */
  readonly MAUVE: '#7B3F93';

  /**
   * Slate.
   */
  readonly SLATE: '#8A90AB';

  /**
   * Purple.
   */
  readonly PURPLE: '#B073FF';
}

/**
 * All the options for UiDesigner components that have enum types for their color selection.
 *
 * @remarks this represents a made instance of UiSdlChartColor
 */
declare class UiSdlChartColor {

  /**
   * Blue.
   */
  static readonly DARK_BLUE: '#253EB5';

  /**
   * Red-50 design token color.
   */
  static readonly RED50: '#FF5271';

  /**
   * Green-50 design token color.
   */
  static readonly GREEN50: '#30A18A';

  /**
   * Red.
   */
  static readonly RED: '#EA2D2B';

  /**
   * Green.
   */
  static readonly GREEN: '#228630';

  /**
   * Orange.
   */
  static readonly ORANGE: '#FB8839';

  /**
   * Lilac.
   */
  static readonly LILAC: '#6D18C3';

  /**
   * Light blue.
   */
  static readonly LIGHT_BLUE: '#2271E7';

  /**
   * Yellow.
   */
  static readonly YELLOW: '#E8CD01';

  /**
   * Olive.
   */
  static readonly OLIVE: '#82903C';

  /**
   * Sky.
   */
  static readonly SKY: '#2693DD';

  /**
   * Teal.
   */
  static readonly TEAL: '#009877';

  /**
   * Carbon.
   */
  static readonly CARBON: '#596881';

  /**
   * Mauve.
   */
  static readonly MAUVE: '#7B3F93';

  /**
   * Slate.
   */
  static readonly SLATE: '#8A90AB';

  /**
   * Purple.
   */
  static readonly PURPLE: '#B073FF';

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
