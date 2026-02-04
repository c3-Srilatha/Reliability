// TypeScript definitions for the C3 type PdfChartLegendLocationEnum

/**
 * The possible locations for a legend in a chart
 *
 * @remarks this represents a value passed to a method that expects an instance of PdfChartLegendLocationEnum
 */
declare interface IPdfChartLegendLocationEnum {

  /**
   * The legend is positioned in the upper left corner of the chart.
   */
  UPPER_LEFT?: string;

  /**
   * The legend is positioned in the upper right corner of the chart.
   */
  UPPER_RIGHT?: string;

  /**
   * The legend is positioned in the lower left corner of the chart.
   */
  LOWER_LEFT?: string;

  /**
   * The legend is positioned in the lower right corner of the chart.
   */
  LOWER_RIGHT?: string;

  /**
   * The legend is positioned at the top center of the chart.
   */
  UPPER_CENTER?: string;

  /**
   * The legend is positioned at the bottom center of the chart.
   */
  LOWER_CENTER?: string;

  /**
   * The legend is positioned in the center left of the chart.
   */
  CENTER_LEFT?: string;

  /**
   * The legend is positioned in the center right of the chart.
   */
  CENTER_RIGHT?: string;

  /**
   * The legend is positioned at the center of the chart.
   */
  CENTER?: string;

  /**
   * The legend is automatically positioned in the most optimal location.
   */
  BEST?: string;
}

/**
 * The possible locations for a legend in a chart
 *
 * @remarks this represents a made instance of PdfChartLegendLocationEnum
 */
declare class PdfChartLegendLocationEnum {

  /**
   * The legend is positioned in the upper left corner of the chart.
   */
  readonly UPPER_LEFT?: string;
  withUPPER_LEFT(UPPER_LEFT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned in the upper right corner of the chart.
   */
  readonly UPPER_RIGHT?: string;
  withUPPER_RIGHT(UPPER_RIGHT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned in the lower left corner of the chart.
   */
  readonly LOWER_LEFT?: string;
  withLOWER_LEFT(LOWER_LEFT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned in the lower right corner of the chart.
   */
  readonly LOWER_RIGHT?: string;
  withLOWER_RIGHT(LOWER_RIGHT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned at the top center of the chart.
   */
  readonly UPPER_CENTER?: string;
  withUPPER_CENTER(UPPER_CENTER: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned at the bottom center of the chart.
   */
  readonly LOWER_CENTER?: string;
  withLOWER_CENTER(LOWER_CENTER: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned in the center left of the chart.
   */
  readonly CENTER_LEFT?: string;
  withCENTER_LEFT(CENTER_LEFT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned in the center right of the chart.
   */
  readonly CENTER_RIGHT?: string;
  withCENTER_RIGHT(CENTER_RIGHT: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is positioned at the center of the chart.
   */
  readonly CENTER?: string;
  withCENTER(CENTER: string | null): PdfChartLegendLocationEnum;

  /**
   * The legend is automatically positioned in the most optimal location.
   */
  readonly BEST?: string;
  withBEST(BEST: string | null): PdfChartLegendLocationEnum;

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
