// TypeScript definitions for the C3 type OsMetrics

/**
 * Type that identifies the state of the hosting operating system and run commands.
 *
 * @remarks this represents a value passed to a method that expects an instance of OsMetrics
 */
declare interface IOsMetrics {

  /**
   * the cpu count of the host on which the Os is installed.
   */
  readonly CPU_COUNT: "CPU_COUNT";

  /**
   * the memory of the host.
   */
  readonly MEMORY_GB: "MEMORY_GB";

  /**
   * the thread count of all the processes running in the Os.
   */
  readonly THREAD_COUNT: "THREAD_COUNT";

  /**
   * the process count of the Os.
   */
  readonly PROCESS_COUNT: "PROCESS_COUNT";

  /**
   * count the number of open file descriptors
   */
  readonly OPEN_FILE_DESCRIPTOR_COUNT: "OPEN_FILE_DESCRIPTOR_COUNT";

  /**
   * returns the available memory on the host
   */
  readonly FREE_MEMORY_GB: "FREE_MEMORY_GB";

  /**
   * returns the free swap space size on the host
   */
  readonly FREE_SWAP_SPACE_GB: "FREE_SWAP_SPACE_GB";

  /**
   * returns CPU Usage of the host
   */
  readonly CPU: "CPU";
}

/**
 * Type that identifies the state of the hosting operating system and run commands.
 *
 * @remarks this represents a made instance of OsMetrics
 */
declare class OsMetrics {

  /**
   * the cpu count of the host on which the Os is installed.
   */
  static readonly CPU_COUNT: "CPU_COUNT";

  /**
   * the memory of the host.
   */
  static readonly MEMORY_GB: "MEMORY_GB";

  /**
   * the thread count of all the processes running in the Os.
   */
  static readonly THREAD_COUNT: "THREAD_COUNT";

  /**
   * the process count of the Os.
   */
  static readonly PROCESS_COUNT: "PROCESS_COUNT";

  /**
   * count the number of open file descriptors
   */
  static readonly OPEN_FILE_DESCRIPTOR_COUNT: "OPEN_FILE_DESCRIPTOR_COUNT";

  /**
   * returns the available memory on the host
   */
  static readonly FREE_MEMORY_GB: "FREE_MEMORY_GB";

  /**
   * returns the free swap space size on the host
   */
  static readonly FREE_SWAP_SPACE_GB: "FREE_SWAP_SPACE_GB";

  /**
   * returns CPU Usage of the host
   */
  static readonly CPU: "CPU";

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
