// TypeScript definitions for the C3 type ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric

/**
 * This type represents a {@link ReliabilityRiskMlScoringMetric} for scoring a {@link ReliabilityRiskMl.ReconstructionPipeline}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric
 */
declare namespace ReliabilityRiskMl.ReconstructionPipeline {
  export interface IScoringMetric {

    /**
     * Name of this scoring metric.
     */
    name?: string;

    /**
     * If True, then the indices of `targetOutput`, `modelOutput`, and `context` are used for score
     * calculation.
     */
    useIndex?: boolean;

    /**
     * If the provided data does not fit in memory, then use this value as batch size to iterate through and compute incremental
     * metrics on batches of data.
     */
    batchSize?: number;

    /**
     * The actual {@link MlScoringMetric} that computes a score based on the selected {@link outputsToSelect}
     * and {@link targetsToSelect}. The user can provide a custom scoring metric
     * that mixins {@link MlScoringMetric}.
     */
    actualScoringMetric: IMlScoringMetric<any, any, any>;

    /**
     * A list of model outputs to select for scoring. The available options are `'reconstructions'`,
     * `'residuals'`, `'scaledReconstructions'`, `'scaledResiduals'`, `'riskScore'`,
     * `'riskScoreNormalized'`, and `'alert'`, where `'scaledReconstructions'` and `'scaledResiduals'`
     * are the scaled (e.g., standardized) version of `'reconstructions'` and `'residuals'`. The selected
     * outputs will be passed to the `DO` of {@link actualScoringMetric}.
     */
    outputsToSelect: Array_Type<string> | Array<string>;

    /**
     * A list of model inputs or targets to select for scoring. The available options are `'features'`,
     * `'scaledFeatures'`, `'trainingMask'`, `'inferenceMask'`, `'alertContext'`, where `'scaledFeatures'`
     * is the scaled (e.g., standardized) version of `'features'`. The selected inputs will be
     * passed to the `DY` of {@link actualScoringMetric}.
     */
    targetsToSelect?: Array_Type<string> | Array<string>;
  }
}

/**
 * This type represents a {@link ReliabilityRiskMlScoringMetric} for scoring a {@link ReliabilityRiskMl.ReconstructionPipeline}.
 *
 * @remarks this represents a made instance of ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric
 */
declare namespace ReliabilityRiskMl.ReconstructionPipeline {
  export class ScoringMetric extends Obj  {

    /**
     * Name of this scoring metric.
     */
    readonly name?: string;
    withName(name: string | null): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * If True, then the indices of `targetOutput`, `modelOutput`, and `context` are used for score
     * calculation.
     */
    readonly useIndex?: boolean;
    withUseIndex(useIndex: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * If the provided data does not fit in memory, then use this value as batch size to iterate through and compute incremental
     * metrics on batches of data.
     */
    readonly batchSize?: number;
    withBatchSize(batchSize: number | null): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * The actual {@link MlScoringMetric} that computes a score based on the selected {@link outputsToSelect}
     * and {@link targetsToSelect}. The user can provide a custom scoring metric
     * that mixins {@link MlScoringMetric}.
     */
    readonly actualScoringMetric: MlScoringMetric<any, any, any>;
    withActualScoringMetric(actualScoringMetric: IMlScoringMetric<any, any, any>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * A list of model outputs to select for scoring. The available options are `'reconstructions'`,
     * `'residuals'`, `'scaledReconstructions'`, `'scaledResiduals'`, `'riskScore'`,
     * `'riskScoreNormalized'`, and `'alert'`, where `'scaledReconstructions'` and `'scaledResiduals'`
     * are the scaled (e.g., standardized) version of `'reconstructions'` and `'residuals'`. The selected
     * outputs will be passed to the `DO` of {@link actualScoringMetric}.
     */
    readonly outputsToSelect: Array_Type<string>;
    withOutputsToSelect(outputsToSelect: Array_Type<string> | Array<string>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * A list of model inputs or targets to select for scoring. The available options are `'features'`,
     * `'scaledFeatures'`, `'trainingMask'`, `'inferenceMask'`, `'alertContext'`, where `'scaledFeatures'`
     * is the scaled (e.g., standardized) version of `'features'`. The selected inputs will be
     * passed to the `DY` of {@link actualScoringMetric}.
     */
    readonly targetsToSelect?: Array_Type<string>;
    withTargetsToSelect(targetsToSelect: Array_Type<string> | Array<string> | null): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
     * `args` and `kwargs` are of `ValueType` `any`.
     */
    _call_(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): any | null;

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
    static fromJson(json: any): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric | null;

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
    static fromJsonString(json: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric | null;

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
    static fromXmlString(xml: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * For sub-types of this, the type alone is meaningful, so do NOT consider instance to be empty even if there
     * are no fields.
     */
    isEmptyObj(): boolean;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withoutFieldAtPath(path: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withoutField(field: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withoutField(field: FieldType): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    defaultField(field: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    defaultField(field: FieldType): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    unsetField(field: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    unsetField(field: FieldType): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    removeField(field: string): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    removeField(field: FieldType): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    mergeJson(json: any): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

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
    afterMake(): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric;

    /**
     * Extracts the inputs and standardizes them into a dict.
     */
    standardizeInput(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): Map_Type<string, any> | null;

    /**
     * Scores a machine learning model with ground truth.
     *
     * @param targetOutput
     *           ground truth for scoring the machine learning model
     * @param modelOutput
     *           output of the machine learning model
     * @param context
     *           additional data necessary for scoring the model
     * @return the performance of the model.  A single value allows for optimization.
     */
    doScore(targetOutput?: any, modelOutput?: any, context?: any): number;

    /**
     * Blocking call to {@link #doScore} in a single action.
     *
     * @param targetOutput
     *           ground truth for scoring the machine learning model
     * @param modelOutput
     *           output of the machine learning model
     * @param context
     *           additional data necessary for scoring the model
     * @param spec
     *           customizations for the scoring.
     * @return the performance of the model.  A single value allows for optimization.
     */
    beforeDoAfterScore(targetOutput?: any, modelOutput?: any, context?: any, spec?: MlOperationSpec): number;

    /**
     * Note that this function is dispatched to the runtime declared on {@link #doScore}.
     *
     * @param targetOutput
     *           ground truth for scoring the machine learning model
     * @param modelOutput
     *           output of the machine learning model
     * @param context
     *           additional data necessary for scoring the model
     * @param spec
     *           customizations for the scoring.
     * @return the performance of the model.  A single value allows for optimization.
     */
    scoreSync(targetOutput?: , modelOutput?: , context?: , spec?: MlOperationSpec): number;

    /**
     * Converts `modelOutput` from `DO` type to a Python native format. The default implementation does not convert the
     * input.
     */
    convertModelOutputToNative(modelOutput: ): any;

    /**
     * Converts `targetOutput` from `DY` type to a Python native format. The default implementation does not convert the input.
     */
    convertTargetOutputToNative(targetOutput: ): any;

    /**
     * Converts `context` from `DS` type to a Python native format. The default implementation does not convert the input.
     */
    convertContextToNative(context: ): any;

    /**
     * Converts {@link #targetOutput}, {@link #modelOutput}, and {@link #context} to their native format. The default
     * implementation does not convert the inputs. This should only be overridden if there is a dependency between any of
     * the inputs, as there may be a performance implication.
     */
    convertInputsToNative(targetOutput: , modelOutput: , context?: ): any;

    /**
     * Convert `targetOutput`, `modelOutput`, and `context`, which are already in a native format, to a native format that
     * is supported by this scoring metric. This method will first check if the current format of all inputs are supported
     * by this scoring metric. If so, no conversion will take place. Otherwise, this method will attempt to convert the
     * inputs into a native format specified by {@link #nativeInputFormats}. Note that this function replaces
     * {@link #convertInputsToNative} if the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertNativeToNative(targetOutput: any, modelOutput: any, context?: any): any;

    /**
     * Convert `targetOutput` which is already in a native format, to a native format that is supported by this scoring
     * metric. This method will first check if the current format of `targetOutput` is supported by this metric. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertTargetOutputToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertTargetOutputNativeToNative(targetOutput: any): any;

    /**
     * Convert `modelOutput` which is already in a native format, to a native format that is supported by this scoring
     * metric. This method will first check if the current format of `modelOutput` is supported by this metric. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertModelOutputToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertModelOutputNativeToNative(modelOutput: any): any;

    /**
     * Convert `context` which is already in a native format, to a native format that is supported by this scoring
     * metric. This method will first check if the current format of `context` is supported by this metric. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertContextToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertContextNativeToNative(context: any): any;

    /**
     * The native input formats the scoring metric expects.
     */
    nativeInputFormats(): Array_Type<string>;

    /**
     * Creates a {@link Workflow} for {@link #score} where each function needed for scoring is represented by a separate
     * {@link Workflow.Vertex}.
     */
    static expandedScoreWorkflow(): Workflow;

    /**
     * @return true if the scoring metric does not use `targetOutput` when calling {@link #doScore}.
     */
    noTarget(): boolean;

    /**
     * List of valid context names this scoring metric supports.
     */
    static contextNames(): Array_Type<string> | null;

    /**
     * Default implementation of a method to consistently generate a unique, human readable name for the scoring metric.
     * Scoring metrics with the same name SHOULD behave the same, e.g. if the scoring metric is parametrized, the
     * parameter values should be embedded in the name.
     *
     * The default implementation is to return the Type name and comma separated 'key=value' if {@link #parameters} is
     * not empty, assuming all scoring metrics with the same name behave the same.  For example, return
     * "MLAccuracyMetric", or "MyMadeUpFbetaMetric, beta=200, average=binary" (if such a metric existed).  The default
     * implementation does not recurse into 'value' to print internal values if 'value' is a container (e.g. a Mapp).  To
     * get a unique name in those situations, you should override this method.
     *
     * Note that unlike {@link StringSerializable#toString}, the purpose is *NOT* to reconstruct the corresponding
     * scoring metric from the string, but to provide a unique, human readable name for displaying in tables, e.g. column
     * names when summarizing scores on a pipeline.
     */
    toString(): string;

    /**
     * Helper function to validate that the `modelOutput` and `targetOutput` to {@link #doScore} match in shape.
     * @param modelOutput
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
     * @param targetOutput
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the labels for scoring
     * @param numColumns
     *           if specified, then this will validate that there are exactly the specified number of columns in both
     *           `modelOutput` and `targetOutput`
     */
    validateMatchingShapes(modelOutput: any, targetOutput?: any, numColumns?: number): void;

    /**
     * Helper function to validate that data is not empty.
     * @param data
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the data we need to check
     * @param inputType
     *           string representing type of input (eg. 'modelOutput' or 'targetOutput')
     */
    validateForEmptyData(data: any, inputType?: string): void;

    /**
     * Helper function to validate the shape of `sampleWeights`, often supported as part of `context` of {@link #doScore}.
     * @param modelOutput
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
     * @param weights
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the weights for scoring
     */
    validateSampleWeights(modelOutput: any, weights?: any): void;

    /**
     * Helper function to validate the shape of `modelInput`, supported as part of `context` of {@link #doScore} for
     * clustering metrics.
     * @param modelOutput
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
     * @param modelInput
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the input used to make the predictions
     */
    validateModelInput(modelOutput: any, modelInput: any): void;

    /**
     * Helper function to validate that the data in a `pd.DataFrame` is all binary (0's and 1's).
     * @param df
     *           `pd.DataFrame` to validate
     */
    validateBinaryPandas(df: any): void;

    /**
     * Helper function to extract a subsection of data and return as a `pd.DataFrame`.
     * @param data
     *           {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the data to slice
     * @param slice_idx
     *           python `slice` object, representing the subsection of data to extract
     * @return `pd.DataFrame` representing the subsection of data
     */
    extractPandasSlice(data?: any, slice_idx?: any): any | null;

    /**
     * Helper function to run the `scoreFunc` on batches of the `data`, using {@link #scoreAggregator} to aggregate the
     * results.
     * @param data
     *           list of {@link Data}, `pd.DataFrame`, or `np.ndarray` of data to batch and pass to `scoreFunc`. The
     *           number of samples should be consistent between all of the data.
     * @return the final aggregated result (i.e. `<agg>`)
     */
    batchScoreHelper(data: Array_Type<any>): any | null;

    /**
     * The scoring function to use in {@link #batchScoreHelper}.
     * @param data
     *           the data to calculate the score on. The length and position should match the `data` parameter of
     *           {@link #batchScoreHelper}.
     * @return an incremental score that will be passed to the `inc` parameter of {@link #scoreAggregator}.
     */
    scoreFunction(...data: Array_Type<any>[]): any | null;

    /**
     * The aggregation function to use in {@link #batchScoreHelper}.
     * @param agg
     *           the aggregated results.
     * @param inc
     *           the result produced by a batch scoring function.
     * @return the new aggregated result
     */
    static scoreAggregator(agg?: any, inc?: any): any | null;

    /**
     * Property of the {@link MlScoringMetric} which defines should it be higher or lower to be better.
     */
    higherIsBetter(): boolean;

    /**
     * Converts the input to native `MlNativeDataFormat`, sets feature indices, and resets the index.
     * @param data
     *           Input to to be converted to native `MlNativeDataFormat`.
     * @param outputFormat
     *           `MlNativeDataFormat` for execution of `MlScoringMetric`.
     */
    toNative(data?: any, outputFormat?: string = 'PANDAS'): any | null;
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
