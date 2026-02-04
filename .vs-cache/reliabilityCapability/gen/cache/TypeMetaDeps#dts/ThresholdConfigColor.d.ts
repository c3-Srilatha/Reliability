// TypeScript definitions for the C3 type ThresholdConfigColor

/**
 * Enum specifying the available colors for {@link ThresholdConfig#color}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ThresholdConfigColor
 */
declare interface IThresholdConfigColor {

  /**
   * Red
   */
  RED?: string;

  /**
   * Orange
   */
  ORANGE?: string;

  /**
   * Yellow
   */
  YELLOW?: string;

  /**
   * Green
   */
  GREEN?: string;

  /**
   * Light Green
   */
  LIGHT_GREEN?: string;

  /**
   * Grey
   */
  GREY?: string;

  /**
   * Cyan
   */
  CYAN?: string;

  /**
   * Blue
   */
  BLUE?: string;

  /**
   * Olive
   */
  OLIVE?: string;

  /**
   * Purple
   */
  PURPLE?: string;

  /**
   * Plum
   */
  PLUM?: string;

  /**
   * White
   */
  WHITE?: string;
}

/**
 * Enum specifying the available colors for {@link ThresholdConfig#color}.
 *
 * @remarks this represents a made instance of ThresholdConfigColor
 */
declare class ThresholdConfigColor {

  /**
   * Red
   */
  readonly RED?: string;
  withRED(RED: string | null): ThresholdConfigColor;

  /**
   * Orange
   */
  readonly ORANGE?: string;
  withORANGE(ORANGE: string | null): ThresholdConfigColor;

  /**
   * Yellow
   */
  readonly YELLOW?: string;
  withYELLOW(YELLOW: string | null): ThresholdConfigColor;

  /**
   * Green
   */
  readonly GREEN?: string;
  withGREEN(GREEN: string | null): ThresholdConfigColor;

  /**
   * Light Green
   */
  readonly LIGHT_GREEN?: string;
  withLIGHT_GREEN(LIGHT_GREEN: string | null): ThresholdConfigColor;

  /**
   * Grey
   */
  readonly GREY?: string;
  withGREY(GREY: string | null): ThresholdConfigColor;

  /**
   * Cyan
   */
  readonly CYAN?: string;
  withCYAN(CYAN: string | null): ThresholdConfigColor;

  /**
   * Blue
   */
  readonly BLUE?: string;
  withBLUE(BLUE: string | null): ThresholdConfigColor;

  /**
   * Olive
   */
  readonly OLIVE?: string;
  withOLIVE(OLIVE: string | null): ThresholdConfigColor;

  /**
   * Purple
   */
  readonly PURPLE?: string;
  withPURPLE(PURPLE: string | null): ThresholdConfigColor;

  /**
   * Plum
   */
  readonly PLUM?: string;
  withPLUM(PLUM: string | null): ThresholdConfigColor;

  /**
   * White
   */
  readonly WHITE?: string;
  withWHITE(WHITE: string | null): ThresholdConfigColor;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): Array_Type<string> | null;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): Array_Type<string> | null;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): Map_Type<string, string> | null;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): Map_Type<string, string> | null;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string>): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string>): void;
}


interface λConsumer<T> {
  (t: T): void
}
