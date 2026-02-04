// TypeScript definitions for the C3 type UiSdlGraphVisualizationFillColorOption

/**
 * The list of legal colors that can be used to color nodes and edges in the {@link UiSdlGraphVisualization} component.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGraphVisualizationFillColorOption
 */
declare interface IUiSdlGraphVisualizationFillColorOption {

  /**
   * Blue 50.
   */
  readonly BLUE_50: '#4F8DFF';

  /**
   * Cyan 30.
   */
  readonly CYAN_30: '#56DCE3';

  /**
   * Purple 50.
   */
  readonly PURPLE_50: '#AF73FF';

  /**
   * Slate 50.
   */
  readonly SLATE_50: '#8A90AB';

  /**
   * Plum 50.
   */
  readonly PLUM_50: '#D96AB6';

  /**
   * Forest 40.
   */
  readonly FOREST_40: '#7DBA92';

  /**
   * Choco 50.
   */
  readonly CHOCO_50: '#BF808C';

  /**
   * Yellow 20.
   */
  readonly YELLOW_20: '#FFDB99';

  /**
   * Cyan 50.
   */
  readonly CYAN_50: '#0CA0AB';

  /**
   * Plum 30.
   */
  readonly PLUM_30: '#F7B5E4';

  /**
   * Red 40.
   */
  readonly RED_40: '#FF7893';

  /**
   * Orange 40.
   */
  readonly ORANGE_40: '#FC9153';

  /**
   * Lime 40.
   */
  readonly LIME_40: '#88BD33';

  /**
   * Purple 40.
   */
  readonly PURPLE_40: '#C799FF';
}

/**
 * The list of legal colors that can be used to color nodes and edges in the {@link UiSdlGraphVisualization} component.
 *
 * @remarks this represents a made instance of UiSdlGraphVisualizationFillColorOption
 */
declare class UiSdlGraphVisualizationFillColorOption {

  /**
   * Blue 50.
   */
  static readonly BLUE_50: '#4F8DFF';

  /**
   * Cyan 30.
   */
  static readonly CYAN_30: '#56DCE3';

  /**
   * Purple 50.
   */
  static readonly PURPLE_50: '#AF73FF';

  /**
   * Slate 50.
   */
  static readonly SLATE_50: '#8A90AB';

  /**
   * Plum 50.
   */
  static readonly PLUM_50: '#D96AB6';

  /**
   * Forest 40.
   */
  static readonly FOREST_40: '#7DBA92';

  /**
   * Choco 50.
   */
  static readonly CHOCO_50: '#BF808C';

  /**
   * Yellow 20.
   */
  static readonly YELLOW_20: '#FFDB99';

  /**
   * Cyan 50.
   */
  static readonly CYAN_50: '#0CA0AB';

  /**
   * Plum 30.
   */
  static readonly PLUM_30: '#F7B5E4';

  /**
   * Red 40.
   */
  static readonly RED_40: '#FF7893';

  /**
   * Orange 40.
   */
  static readonly ORANGE_40: '#FC9153';

  /**
   * Lime 40.
   */
  static readonly LIME_40: '#88BD33';

  /**
   * Purple 40.
   */
  static readonly PURPLE_40: '#C799FF';

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
