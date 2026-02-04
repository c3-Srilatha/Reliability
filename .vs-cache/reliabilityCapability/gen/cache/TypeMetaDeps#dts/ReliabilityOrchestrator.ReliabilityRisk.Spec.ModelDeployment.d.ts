// TypeScript definitions for the C3 type ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment

/**
 * Defines the specification for deploying trained machine learning models within the reliability risk workflow.
 *
 * This type enables users to configure model deployment settings, including:
 * - Specifying the assets and models to be deployed.
 * - Selecting a completed training job run as the source of trained models.
 * - Assigning models specific deployment labels (`CHAMPION`, `CHALLENGER`, `CANDIDATE`, or `RETIRED`).
 * - Managing transitions between deployed models, including retiring existing `CHAMPION` models.
 * - Defining deployment time ranges.
 *
 * This specification is used to orchestrate and execute the model deployment workflow.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment
 */
declare namespace ReliabilityOrchestrator.ReliabilityRisk.Spec {
  export interface IModelDeployment {

    /**
     * Name of the workflow created by this spec from the {@link #createWorkflow} API.
     */
    name: string;

    /**
     * Specify which {@link ReliabilityAsset}s whose {@link MlModel}s should be deployed.
     */
    assetFilter: string;

    /**
     * Specify the list of {@link MlModel}s to be deployed. If this field and the {@link ReliabilityOrchestrator.ModelMonitoringJobRun} are specified,
     * then this field will take precedence over the {@link ReliabilityOrchestrator.ModelMonitoringJobRun} parameter. Please ensure that the
     * {@link MlModel}s have their MlModel subjectFilter specified. You can accomplish
     * this by passing in the `subjectFilter` field when calling {@link MlModel#train}.
     */
    models?: Array_Type<MlModel> | Array<IMlModel>;

    /**
     * Instead of specifying the list of models to deploy directly, instead specify an
     * {@link MlModel.Train.JobRun} that has successfully completed. The trained models
     * from this {@link MlModel.Train.JobRun} will then be deployed.
     */
    modelTrainingJobRun?: IMlModel.Train.JobRun;

    /**
     * Specify the {@link TimeRange} for which the models should be deployed. If for a given {@link MlModel}, it is being deployed
     * to CHAMPION using {@link label}, then this field MUST be specified with `start`
     */
    deploymentPeriod?: ITimeRange;

    /**
     * The {@link MlModel.Route.Status.Label} of the models to be deployed. "Are they CHAMPION, CHALLENGER, CANDIDATE, or RETIRED?"
     */
    label: string;

    /**
     * If the {@link label} is `CHAMPION`, and if a different {@link MlModel} is already deployed as `CHAMPION`, then
     * use this field to specify how to update the {@link MlModel.Route.Status.Label} of the existing `CHAMPION` model, before deploying the
     * new {@link MlModel}. By default the existing `CHAMPION` model will be retired.
     */
    updateChampionLabel: string;

    /**
     * If a {@link modelTrainingJobRun} is passed in, force the deployment of the trained models, even if the modelTrainingJobRun has not fully completed
     */
    force?: boolean;
  }
}

/**
 * Defines the specification for deploying trained machine learning models within the reliability risk workflow.
 *
 * This type enables users to configure model deployment settings, including:
 * - Specifying the assets and models to be deployed.
 * - Selecting a completed training job run as the source of trained models.
 * - Assigning models specific deployment labels (`CHAMPION`, `CHALLENGER`, `CANDIDATE`, or `RETIRED`).
 * - Managing transitions between deployed models, including retiring existing `CHAMPION` models.
 * - Defining deployment time ranges.
 *
 * This specification is used to orchestrate and execute the model deployment workflow.
 *
 * @remarks this represents a made instance of ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment
 */
declare namespace ReliabilityOrchestrator.ReliabilityRisk.Spec {
  export class ModelDeployment extends Obj  {

    /**
     * Name of the workflow created by this spec from the {@link #createWorkflow} API.
     */
    readonly name: string;
    withName(name: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Specify which {@link ReliabilityAsset}s whose {@link MlModel}s should be deployed.
     */
    readonly assetFilter: string;
    withAssetFilter(assetFilter: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Specify the list of {@link MlModel}s to be deployed. If this field and the {@link ReliabilityOrchestrator.ModelMonitoringJobRun} are specified,
     * then this field will take precedence over the {@link ReliabilityOrchestrator.ModelMonitoringJobRun} parameter. Please ensure that the
     * {@link MlModel}s have their MlModel subjectFilter specified. You can accomplish
     * this by passing in the `subjectFilter` field when calling {@link MlModel#train}.
     */
    readonly models?: Array_Type<MlModel>;
    withModels(models: Array_Type<MlModel> | Array<IMlModel> | null): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Instead of specifying the list of models to deploy directly, instead specify an
     * {@link MlModel.Train.JobRun} that has successfully completed. The trained models
     * from this {@link MlModel.Train.JobRun} will then be deployed.
     */
    readonly modelTrainingJobRun?: MlModel.Train.JobRun;
    withModelTrainingJobRun(modelTrainingJobRun: IMlModel.Train.JobRun | null): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Specify the {@link TimeRange} for which the models should be deployed. If for a given {@link MlModel}, it is being deployed
     * to CHAMPION using {@link label}, then this field MUST be specified with `start`
     */
    readonly deploymentPeriod?: TimeRange;
    withDeploymentPeriod(deploymentPeriod: ITimeRange | null): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * The {@link MlModel.Route.Status.Label} of the models to be deployed. "Are they CHAMPION, CHALLENGER, CANDIDATE, or RETIRED?"
     */
    readonly label: string;
    withLabel(label: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * If the {@link label} is `CHAMPION`, and if a different {@link MlModel} is already deployed as `CHAMPION`, then
     * use this field to specify how to update the {@link MlModel.Route.Status.Label} of the existing `CHAMPION` model, before deploying the
     * new {@link MlModel}. By default the existing `CHAMPION` model will be retired.
     */
    readonly updateChampionLabel: string;
    withUpdateChampionLabel(updateChampionLabel: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * If a {@link modelTrainingJobRun} is passed in, force the deployment of the trained models, even if the modelTrainingJobRun has not fully completed
     */
    readonly force?: boolean;
    withForce(force: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    static fromJson(json: any): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment | null;

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
    static fromJsonString(json: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment | null;

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
    static fromXmlString(xml: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withoutFieldAtPath(path: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withoutField(field: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withoutField(field: FieldType): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    defaultField(field: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    defaultField(field: FieldType): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    unsetField(field: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    unsetField(field: FieldType): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    removeField(field: string): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    removeField(field: FieldType): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    mergeJson(json: any): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

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
    afterMake(): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment;

    /**
     * Pre-validation checks to be performed before the workflow is created.
     * E.g. check that required fields are set, that fields are mutually exclusive,
     * validate the state of the application is correct for the workflow to be created, etc.
     * @returns A map containing "errors" and "info" keys, each of which contains
     *          a list of strings representing the pre-validation checks. If no errors
     *          are found, the "errors" key should be an empty list, meaning the spec
     *          is valid to proceed with creating the workflow.
     */
    preValidate(): Map_Type<string, Array_Type<string>>;

    /**
     * Post-validation checks to be performed after the workflow is created.
     * E.g. Once the workflow completes, check that the expected outputs are generated,
     * that the application is in the expected state, etc.
     * @param workflow
     *        The workflow that was created by the {@link #createWorkflow} API.
     * @returns A map containing "errors" and "info" keys, each of which contains
     *          a list of strings representing the post-validation checks. If no errors
     *          are found, the "errors" key should be an empty list, meaning the workflow
     *          completed successfully and the expected outputs were generated.
     */
    postValidate(workflow?: Workflow): Map_Type<string, Array_Type<string>>;

    /**
     * Helper function to determine if the spec is valid.
     * E.g. check that required fields are set, fields are mutually exclusive, etc.
     * Does not return anything, but throws an error if the spec is invalid.
     */
    validate(): void;

    /**
     * Creates a structured workflow based on this specification.
     *
     * @returns A `Workflow` instance representing the created workflow.
     */
    createWorkflow(): Workflow | null;

    /**
     * Creates and starts a workflow execution based on this specification.
     *
     * @returns A `WorkflowExecutorRun` instance representing the running workflow execution.
     */
    createAndStartWorkflow(): WorkflowExecutorRun | null;

    /**
     * Helper function to get the trained {@link MlModel}s from a completed {@link MlOperationRun}.
     * @param modelTrainingJobRun
     *        The successfully completed model training {@link  MlModel.Train.JobRun}
     * @returns a list of {@link MlModel}s that are trained
     */
    static extractTrainedModelsFromTrainingJobRun(modelTrainingJobRun: MlModel.Train.JobRun, force?: boolean): Array_Type<MlModel> | null;

    /**
     * Helper function to deploy trained {@link MlModel}s against the respective {@link ReliabilityAsset}s
     * they were trained to detect anomalies on.
     * @param models
     *        A list of trained {@link MlModel}s, may be gotten by calling {@link extractTrainedModelsFromTrainingJobRun}
     * @param label
     *        The {@link MlModel.Route.Status.Label} of the deployed models. "Are they CHAMPION, CHALLENGER, CANDIDATE, or RETIRED?"
     * @param timeRange
     *        The time range for which the models should be deployed
     * @param updateChampionLabel
     *        If the {@link label} is `CHAMPION`, and if an existing {@link MlModel} is already deployed as `CHAMPION`, then
     *        use this field to specify the {@link MlModel.Route.Status.Label} of the existing `CHAMPION` model. By default
     *        the existing `CHAMPION` model will be retired.
     */
    static deployModels(models: Array_Type<MlModel>, label: string, timeRange?: TimeRange, updateChampionLabel?: string): void;

    /**
     * Given a list of trained {@link MlModel}s, this helper function will select the models that should be deployed from the
     * {@link assetFilter}
     * @param models
     *        A list of trained {@link MlModel}s that are candidates for deployment
     * @param assetFilter
     *        A {@link Filter} of {@link ReliabilityAsset}s to deploy models against. Only those models that were trained for
     *        {@link ReliabilityAsset}s that match this {@link Filter} will be deployed.
     */
    static selectModelsForAssetFilter(models: Array_Type<MlModel>, assetFilter: string): Array_Type<MlModel>;

    /**
     * Given either an {@link MlModel.Train.JobRun} or a list of trained models, this helper function will
     * deploy the models as `CANDIDATE` models.
     * @param modelTrainingJobRun
     *        The successfully completed model training {@link MlModel.Train.JobRun}
     * @param trainedModels
     *        A list of trained {@link ReliabilityRiskMlModel}s to deploy
     * @param assetFilter
     *        A {@link Filter} of {@link ReliabilityAsset}s to deploy models for
     * @param datasetPreparationRunFilter
     *        Instead of an assetFilter, provide a list of {@link ReliabilityMlDatasetPreparationRun}s whose corresponding
     *        {@link ReliabilityAsset}'s will be used to deploy models. One of `assetFilter` and `datasetPreparationRunFilter` must
     *        be specified - if both are provided, then `assetFilter` will take precedence.
     */
    static deployModelsAsCandidate(modelTrainingJobRun?: MlModel.Train.JobRun, trainedModels?: Array_Type<ReliabilityRiskMlModel>, assetFilter?: string, datasetPreparationRunFilter?: string): Workflow.Run | null;

    /**
     * Once several trained {@link MlModel}s are trained and deployed as `CANDIDATE`s, a "best" model from among
     * them needs to be chosen for promotion to `CHAMPION`. Given a {@link Filter} of {@link ReliabilityAsset}s,
     * this function will select the "best" {@link MlModel} for each {@link ReliabilityAsset}.
     * @param assetFilter
     *        A {@link Filter} of {@link ReliabilityAsset}s to deploy `CHAMPION` models against
     * @returns a `map<string, MlModel>` where the `string` keys are {@link ReliabilityAsset#id}s and the value
     *        is the "best" {@link MlModel}, which should be deployed as `CHAMPION`
     */
    static selectBestModelPerAsset(assetFilter: string): Map_Type<string, MlModel> | null;

    /**
     * Helper function which will, first, {@link selectBestModelPerAsset} and then {@link deployModels}
     * as `CHAMPION`.
     * @param assetFilter
     *        The {@link Filter} of {@link ReliabilityAsset}s for which the best {@link MlModel} should be
     *        deployed as `CHAMPION`
     * @param timeRange
     *        The time range for which the models corresponding to assetFilter should be deployed
     * @param updateChampionLabel
     *        If an existing {@link MlModel} is already deployed as `CHAMPION`, then use this field to specify the
     *        {@link MlModel.Route.Status.Label} of the existing `CHAMPION` model. By default, the existing `CHAMPION`
     *        model will be retired.
     */
    static selectBestModelAndPromoteToChampion(assetFilter: string, timeRange: TimeRange, updateChampionLabel?: string): Workflow.Run | null;
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
