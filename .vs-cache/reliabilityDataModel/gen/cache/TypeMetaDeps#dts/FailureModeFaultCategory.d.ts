// TypeScript definitions for the C3 type FailureModeFaultCategory

/**
 * Enum representing the categories of failure modes for faults.
 *
 * The `FailureModeFaultCategory` enum is used to classify faults based on their root cause and type.
 * Each category represents a different area of the system where faults can occur.
 * Understanding the category helps in diagnosing and addressing the fault more efficiently.
 *
 * The categories are:
 *
 * - Electrical: Faults related to electrical components or circuitry. This may include issues like power supply failure, short circuits, or component damage.
 * - Mechanical: Faults related to mechanical components such as motors, gears, and bearings. Mechanical failures can be caused by wear and tear, lack of lubrication, or physical damage.
 * - Instrumentation: Faults in sensors, gauges, or any devices used to monitor and measure system performance. Issues could stem from calibration errors, sensor malfunctions, or improper readings.
 * - Performance: Faults that affect the overall performance of the system but may not fall under the specific categories of electrical, mechanical, or instrumentation failures. These could involve software-related issues, misconfigurations, or suboptimal operation.
 *
 * @remarks this represents a value passed to a method that expects an instance of FailureModeFaultCategory
 */
declare interface IFailureModeFaultCategory {

  /**
   * Faults related to electrical components
   */
  Electrical?: string;

  /**
   * Faults related to mechanical components
   */
  Mechanical?: string;

  /**
   * Faults related to measurement or monitoring devices
   */
  Instrumentation?: string;

  /**
   * Faults affecting the performance of the system
   */
  Performance?: string;
}

/**
 * Enum representing the categories of failure modes for faults.
 *
 * The `FailureModeFaultCategory` enum is used to classify faults based on their root cause and type.
 * Each category represents a different area of the system where faults can occur.
 * Understanding the category helps in diagnosing and addressing the fault more efficiently.
 *
 * The categories are:
 *
 * - Electrical: Faults related to electrical components or circuitry. This may include issues like power supply failure, short circuits, or component damage.
 * - Mechanical: Faults related to mechanical components such as motors, gears, and bearings. Mechanical failures can be caused by wear and tear, lack of lubrication, or physical damage.
 * - Instrumentation: Faults in sensors, gauges, or any devices used to monitor and measure system performance. Issues could stem from calibration errors, sensor malfunctions, or improper readings.
 * - Performance: Faults that affect the overall performance of the system but may not fall under the specific categories of electrical, mechanical, or instrumentation failures. These could involve software-related issues, misconfigurations, or suboptimal operation.
 *
 * @remarks this represents a made instance of FailureModeFaultCategory
 */
declare class FailureModeFaultCategory {

  /**
   * Faults related to electrical components
   */
  readonly Electrical?: string;
  withElectrical(Electrical: string | null): FailureModeFaultCategory;

  /**
   * Faults related to mechanical components
   */
  readonly Mechanical?: string;
  withMechanical(Mechanical: string | null): FailureModeFaultCategory;

  /**
   * Faults related to measurement or monitoring devices
   */
  readonly Instrumentation?: string;
  withInstrumentation(Instrumentation: string | null): FailureModeFaultCategory;

  /**
   * Faults affecting the performance of the system
   */
  readonly Performance?: string;
  withPerformance(Performance: string | null): FailureModeFaultCategory;

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
