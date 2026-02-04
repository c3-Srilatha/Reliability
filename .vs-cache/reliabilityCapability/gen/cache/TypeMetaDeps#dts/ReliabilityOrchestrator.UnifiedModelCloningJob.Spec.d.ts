// TypeScript definitions for the C3 type ReliabilityOrchestrator.UnifiedModelCloningJob.Spec

/**
 * Specifies the parameters that will be used to retrain a model.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityOrchestrator.UnifiedModelCloningJob.Spec
 */
declare namespace ReliabilityOrchestrator.UnifiedModelCloningJob {
  export interface ISpec {

    /**
     * The name of the model to retrain.
     * This is used to identify the model in the system.
     */
    modelName: string;

    /**
     * The {@link ReliabilityMlModel} to retrain.
     * From it, we will get the missing configuration for the data set if needed.
     */
    model: IReliabilityMlModel;

    /**
     * Validation time ranges of the retraining window
     */
    validationTimeRanges: Array_Type<TimeRange> | Array<ITimeRange>;

    /**
     * Training time ranges of the retraining window
     */
    trainingTimeRanges: Array_Type<TimeRange> | Array<ITimeRange>;

    /**
     * The excluded sensors for the new dataset that will be generated for the retrained model.
     */
    excludedSensors?: Array_Type<Sensor> | Array<ISensor>;

    /**
     * The included sensors for the new dataset that will be generated for the retrained model.
     */
    includedSensors?: Array_Type<Sensor> | Array<ISensor>;

    /**
     * The model template to use for this slot
     */
    template?: IModelTemplate;

    /**
     * The overrides to apply to the model template for this slot
     */
    hyperparameterOverrides?: Map_Type<string, any> | {[key: string]: any};

    /**
     * Flag to preserve existing non-operational masks from the original model's dataset preparation run.
     *
     * When `true`, combines existing masks with new ones specified in {@link #nonOperationalMasks}.
     * When `false` (default), replaces existing masks with new ones.
     *
     * **Note:** Only applies to non-CV models.
     */
    keepPreviousMasks?: boolean;

    /**
     * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational.
     * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
     */
    nonOperationalMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec>;

    /**
     * {@link TimeRange}s to exclude {@link Sensor} data from training data.
     */
    dateRangeMaskTimeRanges?: Array_Type<TimeRange> | Array<ITimeRange>;

    /**
     * Flag to exclude time periods when the asset may have been under maintenance.
     */
    enableMaintenanceDatabaseFilter?: boolean;

    /**
     * Flag to enable the exclusion of extreme values during the sensor correlation. Ensuring that the asset is only
     * monitored during an operational window.
     *
     * If enabled, it will read the range from #extremeValueFilterMin and #extremeValueFilterMax.
     */
    enableExtremeValueFilter?: boolean;

    /**
     * Percentage representation of the lower extreme data to be excluded from the sensor correlation.
     *
     * **NOTE**: It is expected for this field to be between 0 and 100.
     */
    extremeValueFilterMin?: number;

    /**
     * Percentage representation of the highest extreme data to be excluded from the sensor correlation.
     *
     * **NOTE**: It is expected for this field to be between 0 and 100, and higher than #extremeValueFilterMin
     */
    extremeValueFilterMax?: number;

    /**
     * Flag to enable the exclusion of very short periods of included data between excluded periods, so this filter
     * will remove those periods, assuming that they are not a good representation of a normal asset operation.
     *
     * If enabled it will use the following fields:
     * - {@link #excludeShortTimePeriod}
     */
    enableExcludeShortTimePeriodFilter?: boolean;

    /**
     * Exclude time periods that are shorter than this [duration](Period).
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#DAY}.
     */
    excludeShortTimePeriod?: IDuration;

    /**
     * Flag to exclude time periods when the asset has been under manual mode.
     *
     * Typically, data from manual periods are not used for modeling since it may not represent "normal"
     * operating behavior.
     */
    enableManualModeFilter?: boolean;

    /**
     * Flag to exclude time periods when the asset has a near-constant value.
     *
     * If enabled, it will use the following fields:
     * - #constantPeriodMaximumAbsChange
     * - #constantPeriodMinimumDuration
     */
    ignoreAlmostConstantPeriod?: boolean;

    /**
     * Maximum absolute change threshold to consider a period as constant.
     */
    constantPeriodMaximumAbsChange?: number;

    /**
     * Duration of time required for the Asset to be considered constant.
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#HOUR}.
     */
    constantPeriodMinimumDuration?: IDuration;

    /**
     * Flag to exclude time periods when the Asset is demostrating rapid changes in opening.
     * This usually represents an unstable process that should be ignored from modeling.
     *
     * If enabled, it will use the following fields:
     * - {@link #fastTransientLagPeriod}
     */
    enableFastTransientFilterExclusion?: boolean;

    /**
     * Lag time is the windows over which to calculate the difference in opening (rapid change).
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#MINUTE}.
     */
    fastTransientLagPeriod?: IDuration;

    /**
     * The minimum duration of the fast transient period to be considered for exclusion.
     */
    fastTransientThreshold?: number;

    /**
     * Flag to enable passing an algorithmically calculated training mask.
     *
     * **NOTE**: This field will not be used for sensor correlation but for the underlying data preparation that
     * will be triggered before triggering a model configuration job through the Model Setup With Correlation UI flow.
     */
    enableAlgorithmicTrainingMask?: boolean;
  }
}

/**
 * Specifies the parameters that will be used to retrain a model.
 *
 * @remarks this represents a made instance of ReliabilityOrchestrator.UnifiedModelCloningJob.Spec
 */
declare namespace ReliabilityOrchestrator.UnifiedModelCloningJob {
  export class Spec extends Obj  {

    /**
     * The name of the model to retrain.
     * This is used to identify the model in the system.
     */
    readonly modelName: string;
    withModelName(modelName: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The {@link ReliabilityMlModel} to retrain.
     * From it, we will get the missing configuration for the data set if needed.
     */
    readonly model: ReliabilityMlModel;
    withModel(model: IReliabilityMlModel): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Validation time ranges of the retraining window
     */
    readonly validationTimeRanges: Array_Type<TimeRange>;
    withValidationTimeRanges(validationTimeRanges: Array_Type<TimeRange> | Array<ITimeRange>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Training time ranges of the retraining window
     */
    readonly trainingTimeRanges: Array_Type<TimeRange>;
    withTrainingTimeRanges(trainingTimeRanges: Array_Type<TimeRange> | Array<ITimeRange>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The excluded sensors for the new dataset that will be generated for the retrained model.
     */
    readonly excludedSensors?: Array_Type<Sensor>;
    withExcludedSensors(excludedSensors: Array_Type<Sensor> | Array<ISensor> | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The included sensors for the new dataset that will be generated for the retrained model.
     */
    readonly includedSensors?: Array_Type<Sensor>;
    withIncludedSensors(includedSensors: Array_Type<Sensor> | Array<ISensor> | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The model template to use for this slot
     */
    readonly template?: ModelTemplate;
    withTemplate(template: IModelTemplate | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The overrides to apply to the model template for this slot
     */
    readonly hyperparameterOverrides?: Map_Type<string, any>;
    withHyperparameterOverrides(hyperparameterOverrides: Map_Type<string, any> | {[key: string]: any} | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to preserve existing non-operational masks from the original model's dataset preparation run.
     *
     * When `true`, combines existing masks with new ones specified in {@link #nonOperationalMasks}.
     * When `false` (default), replaces existing masks with new ones.
     *
     * **Note:** Only applies to non-CV models.
     */
    readonly keepPreviousMasks?: boolean;
    withKeepPreviousMasks(keepPreviousMasks: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational.
     * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
     */
    readonly nonOperationalMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>;
    withNonOperationalMasks(nonOperationalMasks: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec> | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * {@link TimeRange}s to exclude {@link Sensor} data from training data.
     */
    readonly dateRangeMaskTimeRanges?: Array_Type<TimeRange>;
    withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to exclude time periods when the asset may have been under maintenance.
     */
    readonly enableMaintenanceDatabaseFilter?: boolean;
    withEnableMaintenanceDatabaseFilter(enableMaintenanceDatabaseFilter: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to enable the exclusion of extreme values during the sensor correlation. Ensuring that the asset is only
     * monitored during an operational window.
     *
     * If enabled, it will read the range from #extremeValueFilterMin and #extremeValueFilterMax.
     */
    readonly enableExtremeValueFilter?: boolean;
    withEnableExtremeValueFilter(enableExtremeValueFilter: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Percentage representation of the lower extreme data to be excluded from the sensor correlation.
     *
     * **NOTE**: It is expected for this field to be between 0 and 100.
     */
    readonly extremeValueFilterMin?: number;
    withExtremeValueFilterMin(extremeValueFilterMin: number | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Percentage representation of the highest extreme data to be excluded from the sensor correlation.
     *
     * **NOTE**: It is expected for this field to be between 0 and 100, and higher than #extremeValueFilterMin
     */
    readonly extremeValueFilterMax?: number;
    withExtremeValueFilterMax(extremeValueFilterMax: number | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to enable the exclusion of very short periods of included data between excluded periods, so this filter
     * will remove those periods, assuming that they are not a good representation of a normal asset operation.
     *
     * If enabled it will use the following fields:
     * - {@link #excludeShortTimePeriod}
     */
    readonly enableExcludeShortTimePeriodFilter?: boolean;
    withEnableExcludeShortTimePeriodFilter(enableExcludeShortTimePeriodFilter: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Exclude time periods that are shorter than this [duration](Period).
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#DAY}.
     */
    readonly excludeShortTimePeriod?: Duration;
    withExcludeShortTimePeriod(excludeShortTimePeriod: IDuration | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to exclude time periods when the asset has been under manual mode.
     *
     * Typically, data from manual periods are not used for modeling since it may not represent "normal"
     * operating behavior.
     */
    readonly enableManualModeFilter?: boolean;
    withEnableManualModeFilter(enableManualModeFilter: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to exclude time periods when the asset has a near-constant value.
     *
     * If enabled, it will use the following fields:
     * - #constantPeriodMaximumAbsChange
     * - #constantPeriodMinimumDuration
     */
    readonly ignoreAlmostConstantPeriod?: boolean;
    withIgnoreAlmostConstantPeriod(ignoreAlmostConstantPeriod: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Maximum absolute change threshold to consider a period as constant.
     */
    readonly constantPeriodMaximumAbsChange?: number;
    withConstantPeriodMaximumAbsChange(constantPeriodMaximumAbsChange: number | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Duration of time required for the Asset to be considered constant.
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#HOUR}.
     */
    readonly constantPeriodMinimumDuration?: Duration;
    withConstantPeriodMinimumDuration(constantPeriodMinimumDuration: IDuration | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to exclude time periods when the Asset is demostrating rapid changes in opening.
     * This usually represents an unstable process that should be ignored from modeling.
     *
     * If enabled, it will use the following fields:
     * - {@link #fastTransientLagPeriod}
     */
    readonly enableFastTransientFilterExclusion?: boolean;
    withEnableFastTransientFilterExclusion(enableFastTransientFilterExclusion: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Lag time is the windows over which to calculate the difference in opening (rapid change).
     *
     * Usually the {@link Duration} is set to {@link TemporalUnit#MINUTE}.
     */
    readonly fastTransientLagPeriod?: Duration;
    withFastTransientLagPeriod(fastTransientLagPeriod: IDuration | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * The minimum duration of the fast transient period to be considered for exclusion.
     */
    readonly fastTransientThreshold?: number;
    withFastTransientThreshold(fastTransientThreshold: number | null): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Flag to enable passing an algorithmically calculated training mask.
     *
     * **NOTE**: This field will not be used for sensor correlation but for the underlying data preparation that
     * will be triggered before triggering a model configuration job through the Model Setup With Correlation UI flow.
     */
    readonly enableAlgorithmicTrainingMask?: boolean;
    withEnableAlgorithmicTrainingMask(enableAlgorithmicTrainingMask: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJson
     */
    static fromJson(json: any): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec | null;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJsonString
     */
    static fromJsonString(json: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec | null;

    /**
     * Load the XML-based representation and reconstruct the corresponding object.
     *
     * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
     * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
     * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
     * will return an instance of the correct type.
     *
     * @see #toXmlString
     */
    static fromXmlString(xml: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * asynchronous `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * Result of this function call is a copy of current instance with specified field value replaced based on result of
     * the `mapper` invocation.
     * @param field
     *           field being mapped
     * @param includeEmpty
     *           if set, invokes mapper for fields with empty value
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param action
     *           function to be executed for each pair of field type and Obj instance
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param includeEmpty
     *           if `true` will also process references with `null` / "Empty" references
     * @param mapper
     *           function to be executed for each pair of field type and Obj instance for producing new reference value
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           name of the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
     * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
     *
     * @param fields
     *           map of field names/values
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @return new Obj
     */
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
     * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
     *
     * Immutable objects may return the same instance if the field being set does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path to set value at
     * @param value
     *           value to set
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @param doNotCreateIfMissing
     *           true indicates that any empty reference along the path will not set the value
     * @return new Obj
     */
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj without the specified path field.
     *
     * Immutable objects may return the same instance if the field being removed does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path for field to remove
     * @return new Obj
     *
     * @see #withFieldAtPath
     * @see #withoutField
     */
    withoutFieldAtPath(path: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, removing the field with the provided name.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, removing the field with the provided field type.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: FieldType): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
     * exact same type as the type of the obj to respect the "ordinal" of the field type
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           field types to remove
     * @return new Obj with removed fields
     */
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
     * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
     * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
     * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
     * fields that have already been set.
     *
     * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
     * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
     *
     * @param includeEmptyRefsWithDefaults
     *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
     * @param defaultFields
     *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
     *           array will be ignored.
     * @return new Obj
     *
     * @see #defaultField
     * @see FieldType#defaultValueConst
     * @see FieldType#defaultValue
     */
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         name of the field to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         field type to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: FieldType): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         name of the field to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         field type to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: FieldType): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         name of the field to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: string): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         field type to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: FieldType): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
     *
     * @param other
     *           object
     * @param fieldPathMergeSpec
     *           mapping of fields of the object to the respective merge annotations
     * @return the new merged Obj
     */
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence.
     *
     * @param other
     *           object
     * @param otherFieldsFilter
     *           only fields of otherFieldsFilter type from other are merged into this obj.
     * @return the new merged Obj
     */
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    mergeJson(json: any): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Merge the obj references within the current obj
     * @param deep
     *        If set, traverses the reference fields within the obj as well for a deep merge
     * @param objKey
     *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
     * @param filter
     *        Field paths that need to be filtered from this merge
     * @return Obj with child references merged
     */
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct an instance from provided fields
     * @param fields
     *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
     *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
     *            to Panda.make()
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
     *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
     *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
     *
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
     *
     * ```js
     * User.make({
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     *
     * Obj.make({
     *   type: 'User',
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     * ```
     *
     * ```py
     * c3.User.make({
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.Obj.make({
     *   "type": 'User',
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.User(email='joe@smith.com', realName='Joe Smith')
     *
     * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
     * ```
     *
     * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
     * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
     * such as {@link Ann.Ser} do not apply.
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: any, withDefaults?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityOrchestrator.UnifiedModelCloningJob.Spec> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityOrchestrator.UnifiedModelCloningJob.Spec;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
