// TypeScript definitions for the C3 type ReliabilityMl.Project.ModelValidationUiOptions

/**
 * Options that can be configured to customize the UI for model validation for a
 * particular {@link ReliabilityMl.Project}. Model validation in the UI only shows inputs and
 * outputs of a model on its training dataset, so the context is the {@link ReliabilityMlModel} and
 * the {@link ReliabilityMlDatasetPreparationRun} that was used to train the model.
 * The relevant asset can be found through {@link ReliabilityMlDatasetPreparationRun#parent}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMl.Project.ModelValidationUiOptions
 */
declare namespace ReliabilityMl.Project {
  export interface IModelValidationUiOptions {

    /**
     * When getting the model validation data for the model validation chart,
     * this lambda is called to add the model outputs to the returned data.
     * If not defined or if the lambda throws an error, model outputs are not added to the data.
     * Must be defined in python.
     *
     * To test the lambda, you can use the output of ModelValidationDataGetter type, getDatasetData function.
     * The first and second values of the return tuple are the datasetPreparationRun and datasetData respectively
     * that should be used as arguments this function.
     *
     * param model
     *           The model for which model validation data is being fetched.
     * param datasetPreparationRun
     *           The dataset preparation run that was used to train the model.
     * param datasetData
     *           The data of the datasetPreparationRun given as a pandas DataFrame.
     *           This will include all the feature inputs as well as all the masks.
     *           Each column represents a feature/mask, and each row represents a sample indexed by timestamp.
     *
     * return Returns the following tuple (datasetDataWithModelOutputs, columnGroups, featureToColumnGroups)
     *         - datasetDataWithModelOutputs: The datasetData with the model outputs added as a DataFrame.
     *         - columnGroups: An array of column groups. Each column group is an array of column names that should be plotted on
     *           the same axis in the model validation chart. These will be plotted as soon as the chart loads.
     *         - featureToColumnGroups: A dictionary where the keys are feature names and the values are the column groups that should be plotted
     *           when the feature is select in the UI.
     *
     * Example return:
     * ```
     * (
     *    <some DataFrame>,
     *    [['riskScore_training', 'riskScore_validation'], ['alert']],
     *    {
     *      'Feature_1': [['Feature_1', 'Feature_1_reconstruction'], ['Feature_1_residual']],
     *      'Feature_2': [['Feature_2', 'Feature_2_reconstruction'], ['Feature_2_residual']],
     *    }
     * )
     * ```js
     *
     * This will plot riskScore_training and riskScore_validation on the same axis, and alert on a separate axis upon
     * loading the chart.
     *
     * When Feature_x is selected in the UI, it will plot Feature_x and Feature_x_reconstruction on the same axis, and
     * Feature_x_residual on a separate axis. When Feature_y is selected in the UI, it will plot Feature_y and
     * Feature_y_reconstruction on the same axis, and Feature_y_residual on a separate axis. The DataFrame should
     * contain columns 'Feature_x', 'Feature_x_reconstruction', 'Feature_x_residual', 'Feature_y',
     * 'Feature_y_reconstruction', 'Feature_y_residual', 'riskScore_training', 'riskScore_validation', and 'alert'.
     */
    addModelOutputsForModelValidationChartLambda?: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any>;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model validation chart.
     *
     * param model
     *           The model whose thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a column name.
     * - Each value is a list containing:
     *    - **recommended option(s)**: Objects representing one or more thresholds, where each object contains:
     *      - `key`: The name of the threshold (should be a translation key).
     *      - `value`: The threshold value.
     *    or
     *    - **numeric value** (supports only one threshold) to support lambda implementations before REL 19.0.
     *
     * These thresholds will be plotted on the same axis as the data for each corresponding column name key.
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [2.0],
     *   'Feature_x': [
     *     {
     *       'customDescriptiveTranslationKey': 1.52,
     *     },
     *   ],
     *   'Feature_y': [
     *     {
     *       'customDescriptiveTranslationKey': 20.0,
     *     },
     *     {
     *       'customDescriptiveTranslationKey': 205.0,
     *     },
     *   ],
     * }
     * ```
     */
    getThresholdsForModelValidationChartLambda?: λFunction<ReliabilityMlModel, any>;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model experiment preview chart.
     *
     * param model
     *           The model whose alert thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a value from {@link ReliabilityMl.Project#primaryModelOutputs}.
     * - The value of each key is a list of numeric thresholds. These thresholds will be plotted on the same axis as the corresponding primary model output.
     *
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [1.52, 2.0],
     *   'riskScoreNormalized': [205],
     * }
     * ```
     */
    getAlertThresholdsLambda?: λFunction<ReliabilityMlModel, any>;

    /**
     * This lambda function is used to retrieve comparable alerts for alert similarity calculations
     * and persist the results to either `ReliabilityAssetAlertSimilaritySmall` or `ReliabilityAssetAlertSimilarityLarge`,
     * based on the configured `ReliabilityAlertTriagingConfiguration#similarityTypeName`.
     *
     * The lambda should return an array of persisted similarity objects, ensuring that the fields:
     * `ReliabilityAssetAlertSimilarity#baseAlert` and
     * `ReliabilityAssetAlertSimilarity#comparableAlert`
     * are populated in the returned objects.
     *
     * param alert
     *           The {@link ReliabilityAssetAlert} for which similarity calculations are performed.
     * return An array of similarity objects (either small or large) based on the value of similarityTypeName.
     */
    processAlertSimilarityLambda?: λFunction<ReliabilityAssetAlert, any>;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}
/**
 * Options that can be configured to customize the UI for model validation for a
 * particular {@link ReliabilityMl.Project}. Model validation in the UI only shows inputs and
 * outputs of a model on its training dataset, so the context is the {@link ReliabilityMlModel} and
 * the {@link ReliabilityMlDatasetPreparationRun} that was used to train the model.
 * The relevant asset can be found through {@link ReliabilityMlDatasetPreparationRun#parent}.
 *
 * @remarks this represents a made instance of ReliabilityMl.Project.ModelValidationUiOptions
 */
declare namespace ReliabilityMl.Project {
  export class ModelValidationUiOptions extends Obj  {

    /**
     * When getting the model validation data for the model validation chart,
     * this lambda is called to add the model outputs to the returned data.
     * If not defined or if the lambda throws an error, model outputs are not added to the data.
     * Must be defined in python.
     *
     * To test the lambda, you can use the output of ModelValidationDataGetter type, getDatasetData function.
     * The first and second values of the return tuple are the datasetPreparationRun and datasetData respectively
     * that should be used as arguments this function.
     *
     * param model
     *           The model for which model validation data is being fetched.
     * param datasetPreparationRun
     *           The dataset preparation run that was used to train the model.
     * param datasetData
     *           The data of the datasetPreparationRun given as a pandas DataFrame.
     *           This will include all the feature inputs as well as all the masks.
     *           Each column represents a feature/mask, and each row represents a sample indexed by timestamp.
     *
     * return Returns the following tuple (datasetDataWithModelOutputs, columnGroups, featureToColumnGroups)
     *         - datasetDataWithModelOutputs: The datasetData with the model outputs added as a DataFrame.
     *         - columnGroups: An array of column groups. Each column group is an array of column names that should be plotted on
     *           the same axis in the model validation chart. These will be plotted as soon as the chart loads.
     *         - featureToColumnGroups: A dictionary where the keys are feature names and the values are the column groups that should be plotted
     *           when the feature is select in the UI.
     *
     * Example return:
     * ```
     * (
     *    <some DataFrame>,
     *    [['riskScore_training', 'riskScore_validation'], ['alert']],
     *    {
     *      'Feature_1': [['Feature_1', 'Feature_1_reconstruction'], ['Feature_1_residual']],
     *      'Feature_2': [['Feature_2', 'Feature_2_reconstruction'], ['Feature_2_residual']],
     *    }
     * )
     * ```js
     *
     * This will plot riskScore_training and riskScore_validation on the same axis, and alert on a separate axis upon
     * loading the chart.
     *
     * When Feature_x is selected in the UI, it will plot Feature_x and Feature_x_reconstruction on the same axis, and
     * Feature_x_residual on a separate axis. When Feature_y is selected in the UI, it will plot Feature_y and
     * Feature_y_reconstruction on the same axis, and Feature_y_residual on a separate axis. The DataFrame should
     * contain columns 'Feature_x', 'Feature_x_reconstruction', 'Feature_x_residual', 'Feature_y',
     * 'Feature_y_reconstruction', 'Feature_y_residual', 'riskScore_training', 'riskScore_validation', and 'alert'.
     */
    readonly addModelOutputsForModelValidationChartLambda?: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any>;
    withAddModelOutputsForModelValidationChartLambda(addModelOutputsForModelValidationChartLambda: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any> | null): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model validation chart.
     *
     * param model
     *           The model whose thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a column name.
     * - Each value is a list containing:
     *    - **recommended option(s)**: Objects representing one or more thresholds, where each object contains:
     *      - `key`: The name of the threshold (should be a translation key).
     *      - `value`: The threshold value.
     *    or
     *    - **numeric value** (supports only one threshold) to support lambda implementations before REL 19.0.
     *
     * These thresholds will be plotted on the same axis as the data for each corresponding column name key.
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [2.0],
     *   'Feature_x': [
     *     {
     *       'customDescriptiveTranslationKey': 1.52,
     *     },
     *   ],
     *   'Feature_y': [
     *     {
     *       'customDescriptiveTranslationKey': 20.0,
     *     },
     *     {
     *       'customDescriptiveTranslationKey': 205.0,
     *     },
     *   ],
     * }
     * ```
     */
    readonly getThresholdsForModelValidationChartLambda?: λFunction<ReliabilityMlModel, any>;
    withGetThresholdsForModelValidationChartLambda(getThresholdsForModelValidationChartLambda: λFunction<ReliabilityMlModel, any> | null): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model experiment preview chart.
     *
     * param model
     *           The model whose alert thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a value from {@link ReliabilityMl.Project#primaryModelOutputs}.
     * - The value of each key is a list of numeric thresholds. These thresholds will be plotted on the same axis as the corresponding primary model output.
     *
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [1.52, 2.0],
     *   'riskScoreNormalized': [205],
     * }
     * ```
     */
    readonly getAlertThresholdsLambda?: λFunction<ReliabilityMlModel, any>;
    withGetAlertThresholdsLambda(getAlertThresholdsLambda: λFunction<ReliabilityMlModel, any> | null): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * This lambda function is used to retrieve comparable alerts for alert similarity calculations
     * and persist the results to either `ReliabilityAssetAlertSimilaritySmall` or `ReliabilityAssetAlertSimilarityLarge`,
     * based on the configured `ReliabilityAlertTriagingConfiguration#similarityTypeName`.
     *
     * The lambda should return an array of persisted similarity objects, ensuring that the fields:
     * `ReliabilityAssetAlertSimilarity#baseAlert` and
     * `ReliabilityAssetAlertSimilarity#comparableAlert`
     * are populated in the returned objects.
     *
     * param alert
     *           The {@link ReliabilityAssetAlert} for which similarity calculations are performed.
     * return An array of similarity objects (either small or large) based on the value of similarityTypeName.
     */
    readonly processAlertSimilarityLambda?: λFunction<ReliabilityAssetAlert, any>;
    withProcessAlertSimilarityLambda(processAlertSimilarityLambda: λFunction<ReliabilityAssetAlert, any> | null): ReliabilityMl.Project.ModelValidationUiOptions;

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
    static fromJson(json: any): ReliabilityMl.Project.ModelValidationUiOptions | null;

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
    static fromJsonString(json: string): ReliabilityMl.Project.ModelValidationUiOptions | null;

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
    static fromXmlString(xml: string): ReliabilityMl.Project.ModelValidationUiOptions | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityMl.Project.ModelValidationUiOptions | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMl.Project.ModelValidationUiOptions>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMl.Project.ModelValidationUiOptions>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withoutFieldAtPath(path: string): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withoutField(field: string): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withoutField(field: FieldType): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityMl.Project.ModelValidationUiOptions;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMl.Project.ModelValidationUiOptions;

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
    defaultField(field: string): ReliabilityMl.Project.ModelValidationUiOptions;

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
    defaultField(field: FieldType): ReliabilityMl.Project.ModelValidationUiOptions;

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
    unsetField(field: string): ReliabilityMl.Project.ModelValidationUiOptions;

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
    unsetField(field: FieldType): ReliabilityMl.Project.ModelValidationUiOptions;

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
    removeField(field: string): ReliabilityMl.Project.ModelValidationUiOptions;

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
    removeField(field: FieldType): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMl.Project.ModelValidationUiOptions;

    mergeJson(json: any): ReliabilityMl.Project.ModelValidationUiOptions;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityMl.Project.ModelValidationUiOptions>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityMl.Project.ModelValidationUiOptions>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityMl.Project.ModelValidationUiOptions>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityMl.Project.ModelValidationUiOptions>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMl.Project.ModelValidationUiOptions;

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
    afterMake(): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityMl.Project.ModelValidationUiOptions;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMl.Project.ModelValidationUiOptions> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityMl.Project.ModelValidationUiOptions;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
