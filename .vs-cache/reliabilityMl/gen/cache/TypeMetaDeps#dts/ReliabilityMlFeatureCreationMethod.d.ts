// TypeScript definitions for the C3 type ReliabilityMlFeatureCreationMethod

/**
 * Used within {@link ReliabilityMlFeaturePreparationSpec}. To create {@link Feature}s for all the
 * {@link Sensor}s associated with a {@link ReliabilityAsset}, we can employ two approaches. One way is
 * to create {@link Feature}s based on the {@link ExpectedSensor} associated with the
 * ReliabilityAssetSensorAssociationJob, i.e., `EXPECTED_SENSOR`. The other way is to create
 * {@link Feature}s based on the {@link Sensor#id} directly, i.e., `SENSOR`.
 * Sometimes, only some {@link ReliabilityAssetSensorRelation}s will have an associated
 * {@link ExpectedSensor}. In these cases, when {@link Feature}s from ALL {@link Sensor}s have to be
 * used in the {@link MlModel}, use the `BEST` option.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlFeatureCreationMethod
 */
declare interface IReliabilityMlFeatureCreationMethod {

  /**
   * Represents the creation of features based on the sensor's ID directly.
   * Use this method when you want to create features from the {@link Sensor#id} of a sensor.
   */
  SENSOR?: string;

  /**
   * Represents the creation of features based on the associated {@link ExpectedSensor}.
   * Use this method when you want to use an {@link ExpectedSensor} associated with the
   * ReliabilityAssetSensorAssociationJob for feature creation.
   */
  EXPECTED_SENSOR?: string;

  /**
   * Represents the use of the best available sensor data when there are mixed cases.
   * This method should be used when {@link Feature}s from all sensors are required,
   * but only some sensors have an associated {@link ExpectedSensor}.
   */
  BEST?: string;
}

/**
 * Used within {@link ReliabilityMlFeaturePreparationSpec}. To create {@link Feature}s for all the
 * {@link Sensor}s associated with a {@link ReliabilityAsset}, we can employ two approaches. One way is
 * to create {@link Feature}s based on the {@link ExpectedSensor} associated with the
 * ReliabilityAssetSensorAssociationJob, i.e., `EXPECTED_SENSOR`. The other way is to create
 * {@link Feature}s based on the {@link Sensor#id} directly, i.e., `SENSOR`.
 * Sometimes, only some {@link ReliabilityAssetSensorRelation}s will have an associated
 * {@link ExpectedSensor}. In these cases, when {@link Feature}s from ALL {@link Sensor}s have to be
 * used in the {@link MlModel}, use the `BEST` option.
 *
 * @remarks this represents a made instance of ReliabilityMlFeatureCreationMethod
 */
declare class ReliabilityMlFeatureCreationMethod {

  /**
   * Represents the creation of features based on the sensor's ID directly.
   * Use this method when you want to create features from the {@link Sensor#id} of a sensor.
   */
  readonly SENSOR?: string;
  withSENSOR(SENSOR: string | null): ReliabilityMlFeatureCreationMethod;

  /**
   * Represents the creation of features based on the associated {@link ExpectedSensor}.
   * Use this method when you want to use an {@link ExpectedSensor} associated with the
   * ReliabilityAssetSensorAssociationJob for feature creation.
   */
  readonly EXPECTED_SENSOR?: string;
  withEXPECTED_SENSOR(EXPECTED_SENSOR: string | null): ReliabilityMlFeatureCreationMethod;

  /**
   * Represents the use of the best available sensor data when there are mixed cases.
   * This method should be used when {@link Feature}s from all sensors are required,
   * but only some sensors have an associated {@link ExpectedSensor}.
   */
  readonly BEST?: string;
  withBEST(BEST: string | null): ReliabilityMlFeatureCreationMethod;

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
