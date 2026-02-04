// TypeScript definitions for the C3 type UiSdlGraphVisualizationLayoutName

/**
 * Enum type defining layout names.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGraphVisualizationLayoutName
 */
declare interface IUiSdlGraphVisualizationLayoutName {

  /**
   * The organic layout is a force-directed layout making links similar lengths and reducing node and edge overlaps
   * as they distribute items evenly across the chart. They are good for any type or size of data, being particularly
   * useful for finding patterns and symmetries.
   */
  readonly ORGANIC: 'organic';

  /**
   * The organic standard
   */
  readonly STANDARD: 'standard';

  /**
   * The structural layout
   */
  readonly STRUCTURAL: 'structural';

  /**
   * The lens layout
   */
  readonly LENS: 'lens';

  /**
   *  The radial layout arranges nodes in concentric circles around a selected subject in a radial tree. Each
   *  ‘generation’ of nodes becomes a new ring surrounding the previous generations.  Generally, this layout is the best
   *  option when dealing with networks with a large number of child nodes compared to the number of parents. The radial
   *  layout makes good use of any available space and is therefore often clearer than traditional tree display methods.
   *  When using radial, make sure that each `from` node has a level that is greater than the level of its respective
   * `to` node for each edge; otherwise, you will likely encounter an unintuitive display of data.
   */
  readonly RADIAL: 'radial';

  /**
   * The sequential layout is useful for displaying data with a clear sequence of links between distinct levels of
   * nodes. It takes multiple components into account, minimizing link crossings and making efficient use of the
   * available screen space. When using sequential, make sure that each `from` node has a level that is greater than the
   * level of its respective `to` node for each edge; otherwise, you will likely encounter an unintuitive display of
   * data.
   */
  readonly SEQUENTIAL: 'sequential';

  /**
   * The tweak layout
   */
  readonly TWEAK: 'tweak';
}

/**
 * Enum type defining layout names.
 *
 * @remarks this represents a made instance of UiSdlGraphVisualizationLayoutName
 */
declare class UiSdlGraphVisualizationLayoutName {

  /**
   * The organic layout is a force-directed layout making links similar lengths and reducing node and edge overlaps
   * as they distribute items evenly across the chart. They are good for any type or size of data, being particularly
   * useful for finding patterns and symmetries.
   */
  static readonly ORGANIC: 'organic';

  /**
   * The organic standard
   */
  static readonly STANDARD: 'standard';

  /**
   * The structural layout
   */
  static readonly STRUCTURAL: 'structural';

  /**
   * The lens layout
   */
  static readonly LENS: 'lens';

  /**
   *  The radial layout arranges nodes in concentric circles around a selected subject in a radial tree. Each
   *  ‘generation’ of nodes becomes a new ring surrounding the previous generations.  Generally, this layout is the best
   *  option when dealing with networks with a large number of child nodes compared to the number of parents. The radial
   *  layout makes good use of any available space and is therefore often clearer than traditional tree display methods.
   *  When using radial, make sure that each `from` node has a level that is greater than the level of its respective
   * `to` node for each edge; otherwise, you will likely encounter an unintuitive display of data.
   */
  static readonly RADIAL: 'radial';

  /**
   * The sequential layout is useful for displaying data with a clear sequence of links between distinct levels of
   * nodes. It takes multiple components into account, minimizing link crossings and making efficient use of the
   * available screen space. When using sequential, make sure that each `from` node has a level that is greater than the
   * level of its respective `to` node for each edge; otherwise, you will likely encounter an unintuitive display of
   * data.
   */
  static readonly SEQUENTIAL: 'sequential';

  /**
   * The tweak layout
   */
  static readonly TWEAK: 'tweak';

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
