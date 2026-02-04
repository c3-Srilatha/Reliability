// TypeScript definitions for the C3 type PdfChartFontSizeEnum

/**
 * Specifies the size of the text on a chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of PdfChartFontSizeEnum
 */
declare interface IPdfChartFontSizeEnum {

  /**
   * Extra extra small font size, smaller than 'x-small'.
   */
  XX_SMALL?: string;

  /**
   * Extra small font size, smaller than 'small'.
   */
  X_SMALL?: string;

  /**
   * Small font size, typically used for less prominent text.
   */
  SMALL?: string;

  /**
   * Medium font size, the default or standard size for most text.
   */
  MEDIUM?: string;

  /**
   * Large font size, larger than 'medium'.
   */
  LARGE?: string;

  /**
   * Extra large font size, larger than 'large'.
   */
  X_LARGE?: string;

  /**
   * Extra extra large font size, the largest size available.
   */
  XX_LARGE?: string;
}

/**
 * Specifies the size of the text on a chart.
 *
 * @remarks this represents a made instance of PdfChartFontSizeEnum
 */
declare class PdfChartFontSizeEnum {

  /**
   * Extra extra small font size, smaller than 'x-small'.
   */
  readonly XX_SMALL?: string;
  withXX_SMALL(XX_SMALL: string | null): PdfChartFontSizeEnum;

  /**
   * Extra small font size, smaller than 'small'.
   */
  readonly X_SMALL?: string;
  withX_SMALL(X_SMALL: string | null): PdfChartFontSizeEnum;

  /**
   * Small font size, typically used for less prominent text.
   */
  readonly SMALL?: string;
  withSMALL(SMALL: string | null): PdfChartFontSizeEnum;

  /**
   * Medium font size, the default or standard size for most text.
   */
  readonly MEDIUM?: string;
  withMEDIUM(MEDIUM: string | null): PdfChartFontSizeEnum;

  /**
   * Large font size, larger than 'medium'.
   */
  readonly LARGE?: string;
  withLARGE(LARGE: string | null): PdfChartFontSizeEnum;

  /**
   * Extra large font size, larger than 'large'.
   */
  readonly X_LARGE?: string;
  withX_LARGE(X_LARGE: string | null): PdfChartFontSizeEnum;

  /**
   * Extra extra large font size, the largest size available.
   */
  readonly XX_LARGE?: string;
  withXX_LARGE(XX_LARGE: string | null): PdfChartFontSizeEnum;

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
