// TypeScript definitions for the C3 type UiSdlTreeListIconColor

/**
 * Colors that can be used for icons in {@link UiSdlTreeList}.
 * The values should be the color codes that will be used, but they don't actually have any effect.
 * A corresponding style needs to be set in _treeList.scss - for example, see c3-sdl-tree-list-icon-color-lilac.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlTreeListIconColor
 */
declare interface IUiSdlTreeListIconColor {

  /**
   * Lilac.
   */
  readonly LILAC: '#3a00aa';

  /**
   * Olive.
   */
  readonly OLIVE: '#6e7d34';

  /**
   * Carbon.
   */
  readonly CARBON: '#262e3d';

  /**
   * Teal.
   */
  readonly TEAL: '#005a37';

  /**
   * Magenta.
   */
  readonly MAGENTA: '#78005f';

  /**
   * Mauve.
   */
  readonly MAUVE: '#42296b';
}

/**
 * Colors that can be used for icons in {@link UiSdlTreeList}.
 * The values should be the color codes that will be used, but they don't actually have any effect.
 * A corresponding style needs to be set in _treeList.scss - for example, see c3-sdl-tree-list-icon-color-lilac.
 *
 * @remarks this represents a made instance of UiSdlTreeListIconColor
 */
declare class UiSdlTreeListIconColor {

  /**
   * Lilac.
   */
  static readonly LILAC: '#3a00aa';

  /**
   * Olive.
   */
  static readonly OLIVE: '#6e7d34';

  /**
   * Carbon.
   */
  static readonly CARBON: '#262e3d';

  /**
   * Teal.
   */
  static readonly TEAL: '#005a37';

  /**
   * Magenta.
   */
  static readonly MAGENTA: '#78005f';

  /**
   * Mauve.
   */
  static readonly MAUVE: '#42296b';

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
