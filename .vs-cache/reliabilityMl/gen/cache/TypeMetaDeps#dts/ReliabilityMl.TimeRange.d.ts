// TypeScript definitions for the C3 type ReliabilityMl.TimeRange

/**
 * Used within `ReliabilityOrchestrator.PostTrainingJobSpec`. If the value is 'TRAIN', the time range selected
 * will correspond to the training time range provided for a {@link ReliabilityMlDatasetPreparationRun}.
 * If set to 'VAL', it will correspond to the validation time range of the {@link ReliabilityMlDatasetPreparationRun}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMl.TimeRange
 */
declare namespace ReliabilityMl {
  export interface ITimeRange {

    /**
     * When set to `TRAIN`, the selected time range corresponds to the training period during a
     * machine learning dataset preparation run. This is the time period used for training a model.
     */
    TRAIN?: string;

    /**
     * When set to `VAL`, the selected time range corresponds to the validation period during a
     * machine learning dataset preparation run. This is the time period used for validating the model.
     */
    VAL?: string;
  }
}

/**
 * Used within `ReliabilityOrchestrator.PostTrainingJobSpec`. If the value is 'TRAIN', the time range selected
 * will correspond to the training time range provided for a {@link ReliabilityMlDatasetPreparationRun}.
 * If set to 'VAL', it will correspond to the validation time range of the {@link ReliabilityMlDatasetPreparationRun}.
 *
 * @remarks this represents a made instance of ReliabilityMl.TimeRange
 */
declare namespace ReliabilityMl {
  export class TimeRange {

    /**
     * When set to `TRAIN`, the selected time range corresponds to the training period during a
     * machine learning dataset preparation run. This is the time period used for training a model.
     */
    readonly TRAIN?: string;
    withTRAIN(TRAIN: string | null): ReliabilityMl.TimeRange;

    /**
     * When set to `VAL`, the selected time range corresponds to the validation period during a
     * machine learning dataset preparation run. This is the time period used for validating the model.
     */
    readonly VAL?: string;
    withVAL(VAL: string | null): ReliabilityMl.TimeRange;

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
}


interface λConsumer<T> {
  (t: T): void
}
