// TypeScript definitions for the C3 type ChipsCellArrangement

/**
 * How the chips within a single {@link ChipsCell} should be arranged.
 *
 * @see ChipsCellGroupingOptions#arrangement
 *
 * @remarks this represents a value passed to a method that expects an instance of ChipsCellArrangement
 */
declare interface IChipsCellArrangement {

  /**
   * Do not apply any special arrangement to the chips. Display them in the order
   * they're stored in the array at {@link UiSdlDataGridDataItem#obj}.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'x', 'z', 'x', 'y']
   * collapseThreshold = 4
   *
   * x y x z (+2)
   * ```
   */
  NONE?: string;

  /**
   * Chips are sorted by which bin from {@link ChipsCellGroupingOptions#valuesToStyles}
   * (based on the order specified) they correspond to. If a chip doesn't correspond to
   * any bin, it will be placed at the end of the list.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'z', 'z', 'x', 'y']
   * collapseThreshold = 4
   *
   * x x y y (+2)
   * ```
   */
  SORT?: string;

  /**
   * Same as #SORT, except that {@link ChipsCell#collapseThreshold} and
   * {@link ChipsCell#numChipsToReveal} are applied to the bins individually, so
   * each bin can be collapsed and expanded independently.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'z', 'z', 'x', 'y', 'x', 'z', 'y', 'x']
   * collapseThreshold = 2
   *
   * x x (+2)
   * y y (+1)
   * z z (+1)
   * ```
   */
  GROUP?: string;
}

/**
 * How the chips within a single {@link ChipsCell} should be arranged.
 *
 * @see ChipsCellGroupingOptions#arrangement
 *
 * @remarks this represents a made instance of ChipsCellArrangement
 */
declare class ChipsCellArrangement {

  /**
   * Do not apply any special arrangement to the chips. Display them in the order
   * they're stored in the array at {@link UiSdlDataGridDataItem#obj}.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'x', 'z', 'x', 'y']
   * collapseThreshold = 4
   *
   * x y x z (+2)
   * ```
   */
  readonly NONE?: string;
  withNONE(NONE: string | null): ChipsCellArrangement;

  /**
   * Chips are sorted by which bin from {@link ChipsCellGroupingOptions#valuesToStyles}
   * (based on the order specified) they correspond to. If a chip doesn't correspond to
   * any bin, it will be placed at the end of the list.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'z', 'z', 'x', 'y']
   * collapseThreshold = 4
   *
   * x x y y (+2)
   * ```
   */
  readonly SORT?: string;
  withSORT(SORT: string | null): ChipsCellArrangement;

  /**
   * Same as #SORT, except that {@link ChipsCell#collapseThreshold} and
   * {@link ChipsCell#numChipsToReveal} are applied to the bins individually, so
   * each bin can be collapsed and expanded independently.
   *
   * Example:
   *
   * ```
   * obj[fieldPath] = ['x', 'y', 'z', 'z', 'x', 'y', 'x', 'z', 'y', 'x']
   * collapseThreshold = 2
   *
   * x x (+2)
   * y y (+1)
   * z z (+1)
   * ```
   */
  readonly GROUP?: string;
  withGROUP(GROUP: string | null): ChipsCellArrangement;

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
