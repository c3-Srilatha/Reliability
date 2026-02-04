// TypeScript definitions for the C3 type UiSdlGraphVisualizationDefaultFitOptionOnSelect

/**
 * Enum type defining the default fit options for the graph when an item is selected.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGraphVisualizationDefaultFitOptionOnSelect
 */
declare interface IUiSdlGraphVisualizationDefaultFitOptionOnSelect {

  /**
   * Automatically adjusts the view during an update. Ensures changes are viewable without interruption.
   */
  readonly AUTO: 'auto';

  /**
   * Does not adjust the view.
   */
  readonly NONE: 'none';

  /**
   * Fits all items to the viewport at the end of an update.
   */
  readonly ALL: 'all';

  /**
   * Fits the currently selected items to the viewport at the end of an update.
   */
  readonly SELECTION: 'selection';
}

/**
 * Enum type defining the default fit options for the graph when an item is selected.
 *
 * @remarks this represents a made instance of UiSdlGraphVisualizationDefaultFitOptionOnSelect
 */
declare class UiSdlGraphVisualizationDefaultFitOptionOnSelect {

  /**
   * Automatically adjusts the view during an update. Ensures changes are viewable without interruption.
   */
  static readonly AUTO: 'auto';

  /**
   * Does not adjust the view.
   */
  static readonly NONE: 'none';

  /**
   * Fits all items to the viewport at the end of an update.
   */
  static readonly ALL: 'all';

  /**
   * Fits the currently selected items to the viewport at the end of an update.
   */
  static readonly SELECTION: 'selection';

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
