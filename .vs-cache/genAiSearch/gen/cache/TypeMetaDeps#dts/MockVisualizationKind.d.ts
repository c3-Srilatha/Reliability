// TypeScript definitions for the C3 type MockVisualizationKind

/**
 * Used within {@link MockVisualizationGenerator#generateVisualization} to render one of the fake visualizations
 *
 * @remarks this represents a value passed to a method that expects an instance of MockVisualizationKind
 */
declare interface IMockVisualizationKind {

  /**
   * GRID
   */
  GRID?: string;

  /**
   * GRID_ONE_ROW
   */
  GRID_ONE_ROW?: string;

  /**
   * BAR
   */
  BAR?: string;

  /**
   * BAR_MULTIPLE_YAXES
   */
  BAR_MULTIPLE_YAXES?: string;

  /**
   * LINE_BASIC
   */
  LINE_BASIC?: string;

  /**
   * LINE_GROUPS
   */
  LINE_GROUPS?: string;

  /**
   * LINE_GROUP_BY
   */
  LINE_GROUP_BY?: string;

  /**
   * LINE_NULL
   */
  LINE_NULL?: string;

  /**
   * LINE_MULTIPLE_YAXES
   */
  LINE_MULTIPLE_YAXES?: string;

  /**
   * SCATTER_BASIC
   */
  SCATTER_BASIC?: string;

  /**
   * SCATTER_BUBBLE_SIZE_BY
   */
  SCATTER_BUBBLE_SIZE_BY?: string;

  /**
   * SCATTER_GROUP_BY
   */
  SCATTER_GROUP_BY?: string;

  /**
   * SCATTER_LARGE
   */
  SCATTER_LARGE?: string;

  /**
   * SCATTER_SMALL
   */
  SCATTER_SMALL?: string;

  /**
   * SCATTER_NULL
   */
  SCATTER_NULL?: string;

  /**
   * SCATTER_MULTIPLE_YAXES
   */
  SCATTER_MULTIPLE_YAXES?: string;

  /**
   * MAP
   */
  MAP?: string;

  /**
   * RANDOM
   */
  RANDOM?: string;

  /**
   * GRID_EVAL
   */
  GRID_EVAL?: string;

  /**
   * GRID_EVALUATE
   */
  GRID_EVALUATE?: string;

  /**
   * BAR_EVAL
   */
  BAR_EVAL?: string;

  /**
   * LINE_EVAL_METRICS
   */
  LINE_EVAL_METRICS?: string;

  /**
   * LINE_EVAL_METRICS_ALL_MISSING
   */
  LINE_EVAL_METRICS_ALL_MISSING?: string;

  /**
   * LINE_EVAL_METRICS_MISSING
   */
  LINE_EVAL_METRICS_MISSING?: string;

  /**
   * LINE_EVAL_METRICS_MULTI
   */
  LINE_EVAL_METRICS_MULTI?: string;

  /**
   * LINE_EVAL_SINGLE_METRIC
   */
  LINE_EVAL_SINGLE_METRIC?: string;

  /**
   * LINE_EVAL
   */
  LINE_EVAL?: string;

  /**
   * SCATTER_EVAL
   */
  SCATTER_EVAL?: string;

  /**
   * MAP_EVAL
   */
  MAP_EVAL?: string;

  /**
   * MAP_GROUP_EVAL
   */
  MAP_GROUP_EVAL?: string;
}

/**
 * Used within {@link MockVisualizationGenerator#generateVisualization} to render one of the fake visualizations
 *
 * @remarks this represents a made instance of MockVisualizationKind
 */
declare class MockVisualizationKind {

  /**
   * GRID
   */
  readonly GRID?: string;
  withGRID(GRID: string | null): MockVisualizationKind;

  /**
   * GRID_ONE_ROW
   */
  readonly GRID_ONE_ROW?: string;
  withGRID_ONE_ROW(GRID_ONE_ROW: string | null): MockVisualizationKind;

  /**
   * BAR
   */
  readonly BAR?: string;
  withBAR(BAR: string | null): MockVisualizationKind;

  /**
   * BAR_MULTIPLE_YAXES
   */
  readonly BAR_MULTIPLE_YAXES?: string;
  withBAR_MULTIPLE_YAXES(BAR_MULTIPLE_YAXES: string | null): MockVisualizationKind;

  /**
   * LINE_BASIC
   */
  readonly LINE_BASIC?: string;
  withLINE_BASIC(LINE_BASIC: string | null): MockVisualizationKind;

  /**
   * LINE_GROUPS
   */
  readonly LINE_GROUPS?: string;
  withLINE_GROUPS(LINE_GROUPS: string | null): MockVisualizationKind;

  /**
   * LINE_GROUP_BY
   */
  readonly LINE_GROUP_BY?: string;
  withLINE_GROUP_BY(LINE_GROUP_BY: string | null): MockVisualizationKind;

  /**
   * LINE_NULL
   */
  readonly LINE_NULL?: string;
  withLINE_NULL(LINE_NULL: string | null): MockVisualizationKind;

  /**
   * LINE_MULTIPLE_YAXES
   */
  readonly LINE_MULTIPLE_YAXES?: string;
  withLINE_MULTIPLE_YAXES(LINE_MULTIPLE_YAXES: string | null): MockVisualizationKind;

  /**
   * SCATTER_BASIC
   */
  readonly SCATTER_BASIC?: string;
  withSCATTER_BASIC(SCATTER_BASIC: string | null): MockVisualizationKind;

  /**
   * SCATTER_BUBBLE_SIZE_BY
   */
  readonly SCATTER_BUBBLE_SIZE_BY?: string;
  withSCATTER_BUBBLE_SIZE_BY(SCATTER_BUBBLE_SIZE_BY: string | null): MockVisualizationKind;

  /**
   * SCATTER_GROUP_BY
   */
  readonly SCATTER_GROUP_BY?: string;
  withSCATTER_GROUP_BY(SCATTER_GROUP_BY: string | null): MockVisualizationKind;

  /**
   * SCATTER_LARGE
   */
  readonly SCATTER_LARGE?: string;
  withSCATTER_LARGE(SCATTER_LARGE: string | null): MockVisualizationKind;

  /**
   * SCATTER_SMALL
   */
  readonly SCATTER_SMALL?: string;
  withSCATTER_SMALL(SCATTER_SMALL: string | null): MockVisualizationKind;

  /**
   * SCATTER_NULL
   */
  readonly SCATTER_NULL?: string;
  withSCATTER_NULL(SCATTER_NULL: string | null): MockVisualizationKind;

  /**
   * SCATTER_MULTIPLE_YAXES
   */
  readonly SCATTER_MULTIPLE_YAXES?: string;
  withSCATTER_MULTIPLE_YAXES(SCATTER_MULTIPLE_YAXES: string | null): MockVisualizationKind;

  /**
   * MAP
   */
  readonly MAP?: string;
  withMAP(MAP: string | null): MockVisualizationKind;

  /**
   * RANDOM
   */
  readonly RANDOM?: string;
  withRANDOM(RANDOM: string | null): MockVisualizationKind;

  /**
   * GRID_EVAL
   */
  readonly GRID_EVAL?: string;
  withGRID_EVAL(GRID_EVAL: string | null): MockVisualizationKind;

  /**
   * GRID_EVALUATE
   */
  readonly GRID_EVALUATE?: string;
  withGRID_EVALUATE(GRID_EVALUATE: string | null): MockVisualizationKind;

  /**
   * BAR_EVAL
   */
  readonly BAR_EVAL?: string;
  withBAR_EVAL(BAR_EVAL: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL_METRICS
   */
  readonly LINE_EVAL_METRICS?: string;
  withLINE_EVAL_METRICS(LINE_EVAL_METRICS: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL_METRICS_ALL_MISSING
   */
  readonly LINE_EVAL_METRICS_ALL_MISSING?: string;
  withLINE_EVAL_METRICS_ALL_MISSING(LINE_EVAL_METRICS_ALL_MISSING: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL_METRICS_MISSING
   */
  readonly LINE_EVAL_METRICS_MISSING?: string;
  withLINE_EVAL_METRICS_MISSING(LINE_EVAL_METRICS_MISSING: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL_METRICS_MULTI
   */
  readonly LINE_EVAL_METRICS_MULTI?: string;
  withLINE_EVAL_METRICS_MULTI(LINE_EVAL_METRICS_MULTI: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL_SINGLE_METRIC
   */
  readonly LINE_EVAL_SINGLE_METRIC?: string;
  withLINE_EVAL_SINGLE_METRIC(LINE_EVAL_SINGLE_METRIC: string | null): MockVisualizationKind;

  /**
   * LINE_EVAL
   */
  readonly LINE_EVAL?: string;
  withLINE_EVAL(LINE_EVAL: string | null): MockVisualizationKind;

  /**
   * SCATTER_EVAL
   */
  readonly SCATTER_EVAL?: string;
  withSCATTER_EVAL(SCATTER_EVAL: string | null): MockVisualizationKind;

  /**
   * MAP_EVAL
   */
  readonly MAP_EVAL?: string;
  withMAP_EVAL(MAP_EVAL: string | null): MockVisualizationKind;

  /**
   * MAP_GROUP_EVAL
   */
  readonly MAP_GROUP_EVAL?: string;
  withMAP_GROUP_EVAL(MAP_GROUP_EVAL: string | null): MockVisualizationKind;

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
