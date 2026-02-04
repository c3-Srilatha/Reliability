// TypeScript definitions for the C3 type UiApDemoAssetStatusEnum

/**
 * Demo asset operational status enumeration for UI testing and demonstration purposes.
 *
 * This enum defines the possible operational statuses for demo assets
 * in the Asset Performance UI library. Status values determine how
 * assets are displayed and filtered in UI components.
 *
 *
 * // Reference status values
 * UiApDemoAssetStatusEnum.OPERATIONAL
 * UiApDemoAssetStatusEnum.MAINTENANCE
 * UiApDemoAssetStatusEnum.OFFLINE
 * UiApDemoAssetStatusEnum.WARNING
 * UiApDemoAssetStatusEnum.ERROR
 *
 * @remarks this represents a value passed to a method that expects an instance of UiApDemoAssetStatusEnum
 */
declare interface IUiApDemoAssetStatusEnum {

  /**
   * Asset is operating normally and within expected parameters
   */
  OPERATIONAL?: string;

  /**
   * Asset is currently under maintenance or scheduled maintenance
   */
  MAINTENANCE?: string;

  /**
   * Asset is offline or not in service
   */
  OFFLINE?: string;

  /**
   * Asset is operating but showing warning indicators
   */
  WARNING?: string;

  /**
   * Asset has encountered an error or fault condition
   */
  ERROR?: string;
}

/**
 * Demo asset operational status enumeration for UI testing and demonstration purposes.
 *
 * This enum defines the possible operational statuses for demo assets
 * in the Asset Performance UI library. Status values determine how
 * assets are displayed and filtered in UI components.
 *
 *
 * // Reference status values
 * UiApDemoAssetStatusEnum.OPERATIONAL
 * UiApDemoAssetStatusEnum.MAINTENANCE
 * UiApDemoAssetStatusEnum.OFFLINE
 * UiApDemoAssetStatusEnum.WARNING
 * UiApDemoAssetStatusEnum.ERROR
 *
 * @remarks this represents a made instance of UiApDemoAssetStatusEnum
 */
declare class UiApDemoAssetStatusEnum {

  /**
   * Asset is operating normally and within expected parameters
   */
  readonly OPERATIONAL?: string;
  withOPERATIONAL(OPERATIONAL: string | null): UiApDemoAssetStatusEnum;

  /**
   * Asset is currently under maintenance or scheduled maintenance
   */
  readonly MAINTENANCE?: string;
  withMAINTENANCE(MAINTENANCE: string | null): UiApDemoAssetStatusEnum;

  /**
   * Asset is offline or not in service
   */
  readonly OFFLINE?: string;
  withOFFLINE(OFFLINE: string | null): UiApDemoAssetStatusEnum;

  /**
   * Asset is operating but showing warning indicators
   */
  readonly WARNING?: string;
  withWARNING(WARNING: string | null): UiApDemoAssetStatusEnum;

  /**
   * Asset has encountered an error or fault condition
   */
  readonly ERROR?: string;
  withERROR(ERROR: string | null): UiApDemoAssetStatusEnum;

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
