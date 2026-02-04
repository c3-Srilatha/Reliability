// TypeScript definitions for the C3 type Timeseries.RandomProcess

/**
 * Processes for generating random timeseries data.
 *
 * @see Timeseries.RandomSpec
 *
 * @remarks this represents a value passed to a method that expects an instance of Timeseries.RandomProcess
 */
declare namespace Timeseries {
  export interface IRandomProcess {

    /**
     * Generate uniformly distributed samples between the lower and upper bounds.
     */
    readonly UNIFORM: "UNIFORM";

    /**
     * Generate samples at either the upper or lower bound. This is used to generate binary state series. The
     * positive fraction may be used to adjust the relative frequency.
     */
    readonly BERNOULI: "BERNOULI";

    /**
     * Generate data using a random walk. This stochastic process uses the initial value as well as the step options
     * to generate data that looks more realistic than uniformly random data.
     */
    readonly WALK: "WALK";

    /**
     * Generate data using a Poisson process. This stochastic process generates an exponential probability distribution
     * which is useful to simulate events with known average frequency, but irregular arrival. The initial value defines
     * the average number of events per time period. The values will be integers.
     */
    readonly POISSON: "POISSON";
  }
}

/**
 * Processes for generating random timeseries data.
 *
 * @see Timeseries.RandomSpec
 *
 * @remarks this represents a made instance of Timeseries.RandomProcess
 */
declare namespace Timeseries {
  export class RandomProcess {

    /**
     * Generate uniformly distributed samples between the lower and upper bounds.
     */
    static readonly UNIFORM: "UNIFORM";

    /**
     * Generate samples at either the upper or lower bound. This is used to generate binary state series. The
     * positive fraction may be used to adjust the relative frequency.
     */
    static readonly BERNOULI: "BERNOULI";

    /**
     * Generate data using a random walk. This stochastic process uses the initial value as well as the step options
     * to generate data that looks more realistic than uniformly random data.
     */
    static readonly WALK: "WALK";

    /**
     * Generate data using a Poisson process. This stochastic process generates an exponential probability distribution
     * which is useful to simulate events with known average frequency, but irregular arrival. The initial value defines
     * the average number of events per time period. The values will be integers.
     */
    static readonly POISSON: "POISSON";

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
}


interface λConsumer<T> {
  (t: T): void
}
