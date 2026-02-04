// TypeScript definitions for the C3 type UiSdlGlobalActionType

/**
 * The global Redux action types used internally by the UI framework.
 * e.g. GLOBAL_REDIRECT, GLOBAL_ADD_METADATA etc.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlGlobalActionType
 */
declare interface IUiSdlGlobalActionType {

  /**
   * Action type to redirect to the new url with params passed in the payload.
   */
  readonly GLOBAL_REDIRECT: "GLOBAL_REDIRECT";

  /**
   * Action type to add a {@link UiSdlConnected} component's metadata in the state.
   */
  readonly GLOBAL_ADD_METADATA: "GLOBAL_ADD_METADATA";

  /**
   * Action type to add {@link UiSdlApplicationState} metadata in the state.
   */
  readonly GLOBAL_ADD_APPLICATION_METADATA: "GLOBAL_ADD_APPLICATION_METADATA";

  /**
   * Action type to set the metadata ID of the current page in the state.
   */
  readonly GLOBAL_SET_CURRENT_PAGE: "GLOBAL_SET_CURRENT_PAGE";

  /**
   * Action type to set application-level {@link Config} value in the state.
   */
  readonly GLOBAL_SET_APPLICATION_CONFIG: "GLOBAL_SET_APPLICATION_CONFIG";
}

/**
 * The global Redux action types used internally by the UI framework.
 * e.g. GLOBAL_REDIRECT, GLOBAL_ADD_METADATA etc.
 *
 * @remarks this represents a made instance of UiSdlGlobalActionType
 */
declare class UiSdlGlobalActionType {

  /**
   * Action type to redirect to the new url with params passed in the payload.
   */
  static readonly GLOBAL_REDIRECT: "GLOBAL_REDIRECT";

  /**
   * Action type to add a {@link UiSdlConnected} component's metadata in the state.
   */
  static readonly GLOBAL_ADD_METADATA: "GLOBAL_ADD_METADATA";

  /**
   * Action type to add {@link UiSdlApplicationState} metadata in the state.
   */
  static readonly GLOBAL_ADD_APPLICATION_METADATA: "GLOBAL_ADD_APPLICATION_METADATA";

  /**
   * Action type to set the metadata ID of the current page in the state.
   */
  static readonly GLOBAL_SET_CURRENT_PAGE: "GLOBAL_SET_CURRENT_PAGE";

  /**
   * Action type to set application-level {@link Config} value in the state.
   */
  static readonly GLOBAL_SET_APPLICATION_CONFIG: "GLOBAL_SET_APPLICATION_CONFIG";

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
