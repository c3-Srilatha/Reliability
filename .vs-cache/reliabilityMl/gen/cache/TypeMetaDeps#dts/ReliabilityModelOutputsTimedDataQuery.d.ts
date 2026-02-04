// TypeScript definitions for the C3 type ReliabilityModelOutputsTimedDataQuery

/**
 * A {@link ReliabilityTimedDataSubquery} for querying {@link ReliabilityMlModel} outputs for a {@link ReliabilityAsset}.
 * Users can provide either a `targetModel` or `targetProject` to specify the model(s) whose outputs will be queried.
 *
 * Model outputs must be stored under the {@link ReliabilityMl.PredictionHeader} type. See the type documentation
 * to understand the different types of model outputs associated with a {@link ReliabilityMl.Project}.
 *
 * This should be called when users either provide featureOutputs or primaryModelOutputs.
 *
 *
 * Usage examples with example returns:
 * ```
 * // Query outputs from model 'myModel' for asset 'myAsset' from 2010-01-01 and 2011-01-01.
 * ReliabilityModelOutputsTimedDataQuery.make({
 *   targetAsset: 'myAsset',
 *   targetModel: ReliabilityMlModel.make('myModel'),
 *   modelStatusLabel: 'CHAMPION',
 *   featureNames: ['feature1', 'feature2'],
 *   primaryModelOutputs: ['riskScore'],
 *   featureOutputs: ['reconstructions']
 * }).execute({start: '2010-01-01', end: '2011-01-01', interval: 'DAY'})
 * ```
 *
 * Return:
 * ```
 * {
 *   riskScore: Timeseries<double>,
 *   Feature_sensor1_DAY_reconstruction: Timeseries<double>,
 *   Feature_sensor2_DAY_reconstruction: Timeseries<double>
 * }
 * ```
 *
 *
 * // Query outputs from models associated with the targetProject for asset 'myAsset' from 2010-01-01 and 2011-01-01.
 * ReliabilityModelOutputsTimedDataQuery.make({
 *   targetAsset: 'myAsset',
 *   targetProject: ReliabilityMl.Project.make('reliabilityRiskWithResidualDiagnostics'),
 *   modelStatusLabel: 'CHAMPION',
 *   featureNames: ['feature1', 'feature2'],
 *   primaryModelOutputs: ['normalizedRiskScore'],
 *   featureOutputs: ['residuals']
 * }).execute({start: '2010-01-01', end: '2011-01-01', interval: 'DAY'})
 * ```
 *
 * Return:
 * ```
 * {
 *   normalizedRiskScore: Timeseries<double>,
 *   Feature_sensor1_DAY_residual: Timeseries<double>,
 *   Feature_sensor2_DAY_residual: Timeseries<double>
 * }
 * ```
 *
 * Note that this query can be done with other queries using {@link ReliabilityTimedDataQuery}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityModelOutputsTimedDataQuery
 */
declare interface IReliabilityModelOutputsTimedDataQuery {

  /**
   * The {@link ReliabilityAsset} on which the {@link #targetModel} is deployed and generating outputs for.
   */
  targetAsset: IReliabilityAsset;

  /**
   * The {@link ReliabilityMl.Project} whose models' outputs are being queried.
   */
  targetProject?: IReliabilityMl.Project;

  /**
   * The {@link ReliabilityMlModel} for which the outputs are being queried. If provided, will override the {@link #targetProject}.
   * NOTE: The model provided must be deployed on the {@link #targetAsset}.
   */
  targetModel?: IReliabilityMlModel;

  /**
   * The deployment {@link MlModel.Route.Status} label informing which specific outputs to retrieve.
   * By default, live (CHAMPION) outputs for the model deployed on the asset are.
   */
  modelStatusLabel: string;

  /**
   * The list of {@link Feature} names for the model(s) associated with this query for which the {@link #featureOutputs}
   * are being queried.
   */
  featureNames?: Array_Type<string> | Array<string>;

  /**
   * Include contributions for the primary model outputs that are persisted under the
   * {@link ReliabilityMl.ContributionHeader} with {@link ReliabilityMl.ContributionHeader#name} set to '{featureName} + _residual'.
   *
   * For the base application, this parameter is applicable for the `reliabilityRiskWithResidualDiagnostics` and
   * `reliabilityRiskForControlValves` {@link ReliabilityMl.Project}s. These persisted contributions sum up to the `riskScore`
   * model output.
   *
   * If true, the contributions will be returned as a map with the following format where feature1_id and feature2_id
   * are the feature ids provided in the {@link #featureNames} field:
   *
   *
   * ```
   * {
   *   contribution_<feature1_id>: Timeseries<double>,
   *   contribution_<feature1_id>: Timeseries<double>,
   * }
   * ```
   */
  includeContributions?: boolean;

  /**
   * The primary model outputs to retrieve for the model(s) associated with this query.
   *
   * These output names should be a subset of the outputs defined on {@link ReliabilityMl.Project#primaryModelOutputs}.
   * The project is retrieved from the {@link #targetProject} directly, or through {@link #targetModel} indirectly.
   */
  primaryModelOutputs?: Array_Type<string> | Array<string>;

  /**
   * The feature specific outputs to retrieve for the model(s) associated with this query.
   *
   * These output names should be a subset of the outputs defined on {@link ReliabilityMl.Project#featureOutputs}.
   * The project is retrieved from the {@link #targetProject} directly, or through {@link #targetModel} indirectly.
   */
  featureOutputs?: Array_Type<string> | Array<string>;

  /**
   * The default limit of each type of model output to retrieve.
   * Remix this type to change the  deafult limit.
   */
  defaultLimit?: number;
}

/**
 * A {@link ReliabilityTimedDataSubquery} for querying {@link ReliabilityMlModel} outputs for a {@link ReliabilityAsset}.
 * Users can provide either a `targetModel` or `targetProject` to specify the model(s) whose outputs will be queried.
 *
 * Model outputs must be stored under the {@link ReliabilityMl.PredictionHeader} type. See the type documentation
 * to understand the different types of model outputs associated with a {@link ReliabilityMl.Project}.
 *
 * This should be called when users either provide featureOutputs or primaryModelOutputs.
 *
 *
 * Usage examples with example returns:
 * ```
 * // Query outputs from model 'myModel' for asset 'myAsset' from 2010-01-01 and 2011-01-01.
 * ReliabilityModelOutputsTimedDataQuery.make({
 *   targetAsset: 'myAsset',
 *   targetModel: ReliabilityMlModel.make('myModel'),
 *   modelStatusLabel: 'CHAMPION',
 *   featureNames: ['feature1', 'feature2'],
 *   primaryModelOutputs: ['riskScore'],
 *   featureOutputs: ['reconstructions']
 * }).execute({start: '2010-01-01', end: '2011-01-01', interval: 'DAY'})
 * ```
 *
 * Return:
 * ```
 * {
 *   riskScore: Timeseries<double>,
 *   Feature_sensor1_DAY_reconstruction: Timeseries<double>,
 *   Feature_sensor2_DAY_reconstruction: Timeseries<double>
 * }
 * ```
 *
 *
 * // Query outputs from models associated with the targetProject for asset 'myAsset' from 2010-01-01 and 2011-01-01.
 * ReliabilityModelOutputsTimedDataQuery.make({
 *   targetAsset: 'myAsset',
 *   targetProject: ReliabilityMl.Project.make('reliabilityRiskWithResidualDiagnostics'),
 *   modelStatusLabel: 'CHAMPION',
 *   featureNames: ['feature1', 'feature2'],
 *   primaryModelOutputs: ['normalizedRiskScore'],
 *   featureOutputs: ['residuals']
 * }).execute({start: '2010-01-01', end: '2011-01-01', interval: 'DAY'})
 * ```
 *
 * Return:
 * ```
 * {
 *   normalizedRiskScore: Timeseries<double>,
 *   Feature_sensor1_DAY_residual: Timeseries<double>,
 *   Feature_sensor2_DAY_residual: Timeseries<double>
 * }
 * ```
 *
 * Note that this query can be done with other queries using {@link ReliabilityTimedDataQuery}.
 *
 * @remarks this represents a made instance of ReliabilityModelOutputsTimedDataQuery
 */
declare class ReliabilityModelOutputsTimedDataQuery extends Obj  {

  /**
   * The {@link ReliabilityAsset} on which the {@link #targetModel} is deployed and generating outputs for.
   */
  readonly targetAsset: ReliabilityAsset;
  withTargetAsset(targetAsset: IReliabilityAsset): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The {@link ReliabilityMl.Project} whose models' outputs are being queried.
   */
  readonly targetProject?: ReliabilityMl.Project;
  withTargetProject(targetProject: IReliabilityMl.Project | null): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The {@link ReliabilityMlModel} for which the outputs are being queried. If provided, will override the {@link #targetProject}.
   * NOTE: The model provided must be deployed on the {@link #targetAsset}.
   */
  readonly targetModel?: ReliabilityMlModel;
  withTargetModel(targetModel: IReliabilityMlModel | null): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The deployment {@link MlModel.Route.Status} label informing which specific outputs to retrieve.
   * By default, live (CHAMPION) outputs for the model deployed on the asset are.
   */
  readonly modelStatusLabel: string;
  withModelStatusLabel(modelStatusLabel: string): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The list of {@link Feature} names for the model(s) associated with this query for which the {@link #featureOutputs}
   * are being queried.
   */
  readonly featureNames?: Array_Type<string>;
  withFeatureNames(featureNames: Array_Type<string> | Array<string> | null): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Include contributions for the primary model outputs that are persisted under the
   * {@link ReliabilityMl.ContributionHeader} with {@link ReliabilityMl.ContributionHeader#name} set to '{featureName} + _residual'.
   *
   * For the base application, this parameter is applicable for the `reliabilityRiskWithResidualDiagnostics` and
   * `reliabilityRiskForControlValves` {@link ReliabilityMl.Project}s. These persisted contributions sum up to the `riskScore`
   * model output.
   *
   * If true, the contributions will be returned as a map with the following format where feature1_id and feature2_id
   * are the feature ids provided in the {@link #featureNames} field:
   *
   *
   * ```
   * {
   *   contribution_<feature1_id>: Timeseries<double>,
   *   contribution_<feature1_id>: Timeseries<double>,
   * }
   * ```
   */
  readonly includeContributions?: boolean;
  withIncludeContributions(includeContributions: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The primary model outputs to retrieve for the model(s) associated with this query.
   *
   * These output names should be a subset of the outputs defined on {@link ReliabilityMl.Project#primaryModelOutputs}.
   * The project is retrieved from the {@link #targetProject} directly, or through {@link #targetModel} indirectly.
   */
  readonly primaryModelOutputs?: Array_Type<string>;
  withPrimaryModelOutputs(primaryModelOutputs: Array_Type<string> | Array<string> | null): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The feature specific outputs to retrieve for the model(s) associated with this query.
   *
   * These output names should be a subset of the outputs defined on {@link ReliabilityMl.Project#featureOutputs}.
   * The project is retrieved from the {@link #targetProject} directly, or through {@link #targetModel} indirectly.
   */
  readonly featureOutputs?: Array_Type<string>;
  withFeatureOutputs(featureOutputs: Array_Type<string> | Array<string> | null): ReliabilityModelOutputsTimedDataQuery;

  /**
   * The default limit of each type of model output to retrieve.
   * Remix this type to change the  deafult limit.
   */
  readonly defaultLimit?: number;
  withDefaultLimit(defaultLimit: number | null): ReliabilityModelOutputsTimedDataQuery;

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
  static fromJson(json: any): ReliabilityModelOutputsTimedDataQuery | null;

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
  static fromJsonString(json: string): ReliabilityModelOutputsTimedDataQuery | null;

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
  static fromXmlString(xml: string): ReliabilityModelOutputsTimedDataQuery | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityModelOutputsTimedDataQuery | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityModelOutputsTimedDataQuery>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityModelOutputsTimedDataQuery>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityModelOutputsTimedDataQuery;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  withoutFieldAtPath(path: string): ReliabilityModelOutputsTimedDataQuery;

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
  withoutField(field: string): ReliabilityModelOutputsTimedDataQuery;

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
  withoutField(field: FieldType): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityModelOutputsTimedDataQuery;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityModelOutputsTimedDataQuery;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityModelOutputsTimedDataQuery;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityModelOutputsTimedDataQuery;

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
  defaultField(field: string): ReliabilityModelOutputsTimedDataQuery;

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
  defaultField(field: FieldType): ReliabilityModelOutputsTimedDataQuery;

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
  unsetField(field: string): ReliabilityModelOutputsTimedDataQuery;

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
  unsetField(field: FieldType): ReliabilityModelOutputsTimedDataQuery;

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
  removeField(field: string): ReliabilityModelOutputsTimedDataQuery;

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
  removeField(field: FieldType): ReliabilityModelOutputsTimedDataQuery;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityModelOutputsTimedDataQuery;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityModelOutputsTimedDataQuery;

  mergeJson(json: any): ReliabilityModelOutputsTimedDataQuery;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityModelOutputsTimedDataQuery>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityModelOutputsTimedDataQuery>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityModelOutputsTimedDataQuery>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityModelOutputsTimedDataQuery>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityModelOutputsTimedDataQuery;

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
  afterMake(): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityModelOutputsTimedDataQuery> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityModelOutputsTimedDataQuery;

  /**
   * Executes this query
   *  @param timeInfo
   *        Determines the time range and interval for the query. The {@link TimeInfo#timeZone} is ignored, and data
   *        timestamps are not changed after the query is executed.
   * @returns
   *        The result of the query.
   */
  execute(timeInfo: TimeInfo): Map_Type<string, Timeseries<any>> | null;

  /**
   * Converts the timeInfo to UTC. Only the {@link TimeInfo#start} and {@link TimeInfo#end} are converted.
   * This should be done before executing any evalMetrics calls.
   *
   * @param timeInfo
   *        The timeInfo to convert.
   * @returns
   *        The converted timeInfo.
   */
  static convertTimeInfoRangeToUtc(timeInfo: TimeInfo): TimeInfo | null;
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
