// TypeScript definitions for the C3 type ReliabilityMlDatasetPreparationMaskCategory

/**
 * Enum of possible masks that can be used as a part of dataset preparation.
 * See {@link ReliabilityMlDatasetPreparationHelper} for more details.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlDatasetPreparationMaskCategory
 */
declare interface IReliabilityMlDatasetPreparationMaskCategory {

  /**
   * Mask indicating that the asset is not operational.
   * This could be used to filter or handle data related to downtime or failure events.
   */
  mask_IsAssetNotOperational?: string;

  /**
   * Mask representing asset event data, such as maintenance or failure events.
   * This can be useful for isolating data that corresponds to significant asset-related events.
   */
  mask_AssetEvent?: string;

  /**
   * Mask for data occurring before an asset event.
   * This is useful for analyzing the conditions leading up to a specific asset event.
   */
  mask_PreAssetEvent?: string;

  /**
   * Mask for data occurring after an asset event.
   * This helps in understanding the impact or recovery after an asset event has occurred.
   */
  mask_PostAssetEvent?: string;

  /**
   * Mask for ad hoc training data, typically used for one-off or special training tasks.
   * This is often used for specific model training based on temporary or non-standard datasets.
   */
  mask_AdHocTraining?: string;

  /**
   * Mask for ad hoc inference data, typically used for making one-time predictions or analysis.
   * This is used when applying the model to data that wasn't part of the original training set.
   */
  mask_AdHocInference?: string;

  /**
   * Mask for algorithmically computed data.
   * This is used for features or data points that are generated through a specific algorithm, rather than being directly observed.
   */
  mask_AlgorithmicallyComputed?: string;
}

/**
 * Enum of possible masks that can be used as a part of dataset preparation.
 * See {@link ReliabilityMlDatasetPreparationHelper} for more details.
 *
 * @remarks this represents a made instance of ReliabilityMlDatasetPreparationMaskCategory
 */
declare class ReliabilityMlDatasetPreparationMaskCategory {

  /**
   * Mask indicating that the asset is not operational.
   * This could be used to filter or handle data related to downtime or failure events.
   */
  readonly mask_IsAssetNotOperational?: string;
  withMask_IsAssetNotOperational(mask_IsAssetNotOperational: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask representing asset event data, such as maintenance or failure events.
   * This can be useful for isolating data that corresponds to significant asset-related events.
   */
  readonly mask_AssetEvent?: string;
  withMask_AssetEvent(mask_AssetEvent: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask for data occurring before an asset event.
   * This is useful for analyzing the conditions leading up to a specific asset event.
   */
  readonly mask_PreAssetEvent?: string;
  withMask_PreAssetEvent(mask_PreAssetEvent: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask for data occurring after an asset event.
   * This helps in understanding the impact or recovery after an asset event has occurred.
   */
  readonly mask_PostAssetEvent?: string;
  withMask_PostAssetEvent(mask_PostAssetEvent: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask for ad hoc training data, typically used for one-off or special training tasks.
   * This is often used for specific model training based on temporary or non-standard datasets.
   */
  readonly mask_AdHocTraining?: string;
  withMask_AdHocTraining(mask_AdHocTraining: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask for ad hoc inference data, typically used for making one-time predictions or analysis.
   * This is used when applying the model to data that wasn't part of the original training set.
   */
  readonly mask_AdHocInference?: string;
  withMask_AdHocInference(mask_AdHocInference: string | null): ReliabilityMlDatasetPreparationMaskCategory;

  /**
   * Mask for algorithmically computed data.
   * This is used for features or data points that are generated through a specific algorithm, rather than being directly observed.
   */
  readonly mask_AlgorithmicallyComputed?: string;
  withMask_AlgorithmicallyComputed(mask_AlgorithmicallyComputed: string | null): ReliabilityMlDatasetPreparationMaskCategory;

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
