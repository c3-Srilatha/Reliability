// TypeScript definitions for the C3 type FaultySensor.ModelRetrainValidationErrorEnum

/**
 * The different categories of failures for type {@link FaultySensor.ModelRetrainValidationError}.
 *
 * @remarks this represents a value passed to a method that expects an instance of FaultySensor.ModelRetrainValidationErrorEnum
 */
declare namespace FaultySensor {
  export interface IModelRetrainValidationErrorEnum {

    /**
     * The model (with faulty sensors removed) would have no features and therefore cannot be retrained.
     */
    NO_FEATURES?: string;

    /**
     * The model (with faulty sensors removed) would be univariate and therefore cannot be retrained.
     */
    SINGLE_FEATURE?: string;

    /**
     * One of the {@link Feature}s or {@link Feature.Set}s in the
     * {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} uses a [lambda](Feature.Set#src). This allows for
     * custom code to run in evaluating the mask which cannot guarantee that the mask does not use a
     * [faulty sensor](Sensor#operationalStatus).
     */
    LAMBDA_MASK?: string;

    /**
     * One of the {@link Feature}s in the {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} {@link Feature.Set}s
     * is not backed by a [metric](Feature#legacy).
     *
     * All mask {@link Feature}s must be backed by a metric in order to identify if they use a
     * [faulty sensor](Sensor#operationalStatus).
     */
    NON_METRIC_BACKED_MASK?: string;

    /**
     * This means that there is no {@link ReliabilityRiskMlModel#datasetPreparationRun} on the model we are validating.
     */
    NO_DATASET_PREP_RUN?: string;

    /**
     * One of [masks](ReliabilityMlDatasetPreparationRun#maskDatasets) uses a
     * [faulty sensor](Sensor#operationalStatus). This means that the model cannot be retrained because masks are a
     * critical part of the model.
     */
    MASK_USES_FAULTY_SENSOR?: string;

    /**
     * Catch all for any other validation errors.
     *
     * The {@link FaultySensor.ModelRetrainValidationError#details} field may contain more information.
     */
    OTHER?: string;
  }
}

/**
 * The different categories of failures for type {@link FaultySensor.ModelRetrainValidationError}.
 *
 * @remarks this represents a made instance of FaultySensor.ModelRetrainValidationErrorEnum
 */
declare namespace FaultySensor {
  export class ModelRetrainValidationErrorEnum {

    /**
     * The model (with faulty sensors removed) would have no features and therefore cannot be retrained.
     */
    readonly NO_FEATURES?: string;
    withNO_FEATURES(NO_FEATURES: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * The model (with faulty sensors removed) would be univariate and therefore cannot be retrained.
     */
    readonly SINGLE_FEATURE?: string;
    withSINGLE_FEATURE(SINGLE_FEATURE: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * One of the {@link Feature}s or {@link Feature.Set}s in the
     * {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} uses a [lambda](Feature.Set#src). This allows for
     * custom code to run in evaluating the mask which cannot guarantee that the mask does not use a
     * [faulty sensor](Sensor#operationalStatus).
     */
    readonly LAMBDA_MASK?: string;
    withLAMBDA_MASK(LAMBDA_MASK: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * One of the {@link Feature}s in the {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} {@link Feature.Set}s
     * is not backed by a [metric](Feature#legacy).
     *
     * All mask {@link Feature}s must be backed by a metric in order to identify if they use a
     * [faulty sensor](Sensor#operationalStatus).
     */
    readonly NON_METRIC_BACKED_MASK?: string;
    withNON_METRIC_BACKED_MASK(NON_METRIC_BACKED_MASK: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * This means that there is no {@link ReliabilityRiskMlModel#datasetPreparationRun} on the model we are validating.
     */
    readonly NO_DATASET_PREP_RUN?: string;
    withNO_DATASET_PREP_RUN(NO_DATASET_PREP_RUN: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * One of [masks](ReliabilityMlDatasetPreparationRun#maskDatasets) uses a
     * [faulty sensor](Sensor#operationalStatus). This means that the model cannot be retrained because masks are a
     * critical part of the model.
     */
    readonly MASK_USES_FAULTY_SENSOR?: string;
    withMASK_USES_FAULTY_SENSOR(MASK_USES_FAULTY_SENSOR: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

    /**
     * Catch all for any other validation errors.
     *
     * The {@link FaultySensor.ModelRetrainValidationError#details} field may contain more information.
     */
    readonly OTHER?: string;
    withOTHER(OTHER: string | null): FaultySensor.ModelRetrainValidationErrorEnum;

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
