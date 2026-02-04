// TypeScript definitions for the C3 type GenAiVisualizationEnum

/**
 * Enum type to map the short hand component visualization to the name of the C3 Type that will be used to construct
 * the visualization.  The values are expected to be a type that mixes {@link GenAiVisualizationBase}.  This should be
 * the single source of truth when referring to names of the {@link GenAiVisualizationBase} extensions via string.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiVisualizationEnum
 */
declare interface IGenAiVisualizationEnum {

  /**
   * Visualization type for a Bar Chart.
   */
  BAR?: string;

  /**
   * Visualization type for a Grid.
   */
  GRID?: string;

  /**
   * Visualization type for a Histogram.
   */
  HISTOGRAM?: string;

  /**
   * Visualization type for a Line Chart.
   */
  LINE?: string;

  /**
   * Visualization type for a Map.
   */
  MAP?: string;

  /**
   * Visualization type for a Pie Chart.
   */
  PIE?: string;

  /**
   * Visualization type for a Scatter Plot.
   */
  SCATTER?: string;
}

/**
 * Enum type to map the short hand component visualization to the name of the C3 Type that will be used to construct
 * the visualization.  The values are expected to be a type that mixes {@link GenAiVisualizationBase}.  This should be
 * the single source of truth when referring to names of the {@link GenAiVisualizationBase} extensions via string.
 *
 * @remarks this represents a made instance of GenAiVisualizationEnum
 */
declare class GenAiVisualizationEnum {

  /**
   * Visualization type for a Bar Chart.
   */
  readonly BAR?: string;
  withBAR(BAR: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Grid.
   */
  readonly GRID?: string;
  withGRID(GRID: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Histogram.
   */
  readonly HISTOGRAM?: string;
  withHISTOGRAM(HISTOGRAM: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Line Chart.
   */
  readonly LINE?: string;
  withLINE(LINE: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Map.
   */
  readonly MAP?: string;
  withMAP(MAP: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Pie Chart.
   */
  readonly PIE?: string;
  withPIE(PIE: string | null): GenAiVisualizationEnum;

  /**
   * Visualization type for a Scatter Plot.
   */
  readonly SCATTER?: string;
  withSCATTER(SCATTER: string | null): GenAiVisualizationEnum;

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
