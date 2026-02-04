// TypeScript definitions for the C3 type EnvironmentVariable

/**
 * Environment Variable names
 *
 * @remarks this represents a value passed to a method that expects an instance of EnvironmentVariable
 */
declare interface IEnvironmentVariable {

  /**
   * id of the current action.
   * The corresponding environment variable name is C3_ACTION_ID.
   */
  readonly ACTION_ID: 'C3_ACTION_ID';

  /**
   * Action Authentication Token. It is valid while the action used to generate it is running,
   * only in the server where the action is running.
   * The corresponding environment variable name is C3_ACTION_AUTH_TOKEN.
   */
  readonly ACTION_AUTH_TOKEN: 'C3_ACTION_AUTH_TOKEN';

  /**
   * Specifies a valid C3 Env name.
   * The corresponding environment variable name is C3_Env.
   */
  readonly ENV: 'C3_ENV';

  /**
   * Specifies a valid C3 App name in the context of the ENV.
   * The corresponding environment variable name is C3_APP.
   */
  readonly APP: 'C3_APP';

  /**
   * Specifies a connector type that will be used to connect external action engine
   */
  readonly CONNECTOR: 'C3_CONNECTOR';

  /**
   * Specifies full server host url.
   * The corresponding environment variable name is C3_HOST_URL.
   */
  readonly HOST_URL: 'C3_HOST_URL';

  /**
   * Specifies the library path for CUDA installations.
   * The corresponding environment variable name is LD_LIBRARY_PATH
   */
  readonly LD_LIBRARY_PATH: "LD_LIBRARY_PATH";
}

/**
 * Environment Variable names
 *
 * @remarks this represents a made instance of EnvironmentVariable
 */
declare class EnvironmentVariable {

  /**
   * id of the current action.
   * The corresponding environment variable name is C3_ACTION_ID.
   */
  static readonly ACTION_ID: 'C3_ACTION_ID';

  /**
   * Action Authentication Token. It is valid while the action used to generate it is running,
   * only in the server where the action is running.
   * The corresponding environment variable name is C3_ACTION_AUTH_TOKEN.
   */
  static readonly ACTION_AUTH_TOKEN: 'C3_ACTION_AUTH_TOKEN';

  /**
   * Specifies a valid C3 Env name.
   * The corresponding environment variable name is C3_Env.
   */
  static readonly ENV: 'C3_ENV';

  /**
   * Specifies a valid C3 App name in the context of the ENV.
   * The corresponding environment variable name is C3_APP.
   */
  static readonly APP: 'C3_APP';

  /**
   * Specifies a connector type that will be used to connect external action engine
   */
  static readonly CONNECTOR: 'C3_CONNECTOR';

  /**
   * Specifies full server host url.
   * The corresponding environment variable name is C3_HOST_URL.
   */
  static readonly HOST_URL: 'C3_HOST_URL';

  /**
   * Specifies the library path for CUDA installations.
   * The corresponding environment variable name is LD_LIBRARY_PATH
   */
  static readonly LD_LIBRARY_PATH: "LD_LIBRARY_PATH";

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
