// TypeScript definitions for the C3 type MlProject.ReliabilityRisk

/**
 * This type represents the functionality related to Reliability Risk in a Machine Learning project.
 * It contains methods for retrieving risk scores, feature contributions, sensors, and other related components.
 * These methods allow for interacting with reliability risk models, fetching timeseries data, constructing feature names,
 * and processing model parameters for predictions and contributions.
 *
 * @remarks this represents a value passed to a method that expects an instance of MlProject.ReliabilityRisk
 */
declare namespace MlProject {
  export interface IReliabilityRisk {
  }
}

/**
 * This type represents the functionality related to Reliability Risk in a Machine Learning project.
 * It contains methods for retrieving risk scores, feature contributions, sensors, and other related components.
 * These methods allow for interacting with reliability risk models, fetching timeseries data, constructing feature names,
 * and processing model parameters for predictions and contributions.
 *
 * @remarks this represents a made instance of MlProject.ReliabilityRisk
 */
declare namespace MlProject {
  export class ReliabilityRisk extends Obj  {

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
    static fromJson(json: any): MlProject.ReliabilityRisk | null;

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
    static fromJsonString(json: string): MlProject.ReliabilityRisk | null;

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
    static fromXmlString(xml: string): MlProject.ReliabilityRisk | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): MlProject.ReliabilityRisk | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): MlProject.ReliabilityRisk;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): MlProject.ReliabilityRisk;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): MlProject.ReliabilityRisk;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<MlProject.ReliabilityRisk>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<MlProject.ReliabilityRisk>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): MlProject.ReliabilityRisk;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MlProject.ReliabilityRisk;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MlProject.ReliabilityRisk;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): MlProject.ReliabilityRisk;

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
    withField(field: string, value: any, doNotConvert?: boolean): MlProject.ReliabilityRisk;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): MlProject.ReliabilityRisk;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): MlProject.ReliabilityRisk;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MlProject.ReliabilityRisk;

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
    withoutFieldAtPath(path: string): MlProject.ReliabilityRisk;

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
    withoutField(field: string): MlProject.ReliabilityRisk;

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
    withoutField(field: FieldType): MlProject.ReliabilityRisk;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): MlProject.ReliabilityRisk;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): MlProject.ReliabilityRisk;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): MlProject.ReliabilityRisk;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): MlProject.ReliabilityRisk;

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
    defaultField(field: string): MlProject.ReliabilityRisk;

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
    defaultField(field: FieldType): MlProject.ReliabilityRisk;

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
    unsetField(field: string): MlProject.ReliabilityRisk;

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
    unsetField(field: FieldType): MlProject.ReliabilityRisk;

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
    removeField(field: string): MlProject.ReliabilityRisk;

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
    removeField(field: FieldType): MlProject.ReliabilityRisk;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): MlProject.ReliabilityRisk;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): MlProject.ReliabilityRisk;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): MlProject.ReliabilityRisk;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): MlProject.ReliabilityRisk;

    mergeJson(json: any): MlProject.ReliabilityRisk;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): MlProject.ReliabilityRisk;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): MlProject.ReliabilityRisk;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<MlProject.ReliabilityRisk>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<MlProject.ReliabilityRisk> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<MlProject.ReliabilityRisk> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<MlProject.ReliabilityRisk>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<MlProject.ReliabilityRisk> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, MlProject.ReliabilityRisk> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, MlProject.ReliabilityRisk> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<MlProject.ReliabilityRisk>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<MlProject.ReliabilityRisk>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): MlProject.ReliabilityRisk;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): MlProject.ReliabilityRisk;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): MlProject.ReliabilityRisk;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): MlProject.ReliabilityRisk;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): MlProject.ReliabilityRisk;

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
    static make(fields: any, withDefaults?: boolean): MlProject.ReliabilityRisk;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): MlProject.ReliabilityRisk;

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
    afterMake(): MlProject.ReliabilityRisk;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): MlProject.ReliabilityRisk;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<MlProject.ReliabilityRisk> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): MlProject.ReliabilityRisk;

    /**
     * Gets a single persisted risk score using the provided {@link RiskScoreSpec}.
     * This method retrieves the risk score from a previously computed prediction based on a specified risk score specification.
     *
     * @param spec - The specification containing the parameters for the risk score request.
     * @returns The calculated risk score prediction.
     */
    static getRiskScore(spec: RiskScoreSpec): ReliabilityRiskScoreMlPrediction | null;

    /**
     * Gets a collection of feature contribution headers using the provided {@link RiskScoreSpec}.
     * This method retrieves headers for feature contributions, which help to understand the impact of each feature on the risk score.
     *
     * @param spec - The specification for fetching the features.
     * @param riskScoreSpec - The risk score specification that defines the risk score for which contributions are being fetched.
     * @returns A collection of headers for the feature contributions.
     */
    static fetchFeatureContributionHeaders(spec?: FetchSpec, riskScoreSpec: RiskScoreSpec): FetchResult<ReliabilityRiskScoreMlContributionHeader | ReliabilityRiskScoreMlValidationContributionHeader> | null;

    /**
     * Gets a collection of feature reconstruction headers using the provided {@link RiskScoreSpec}.
     * This method retrieves headers for the feature reconstruction, which helps to understand the predicted value for each feature.
     *
     * @param spec - The specification for fetching the features.
     * @param riskScoreSpec - The risk score specification that defines the risk score for which reconstructions are being fetched.
     * @returns A collection of headers for the feature reconstructions.
     */
    static fetchFeatureReconstructionHeaders(spec?: FetchSpec, riskScoreSpec: RiskScoreSpec): FetchResult<ReliabilityRiskScoreMlPredictionHeader> | null;

    /**
     * Gets a collection of feature contributions using the provided {@link RiskScoreSpec}.
     * This method maps feature names to their contribution values, which indicate the impact each feature had on the risk score.
     *
     * This method also normalizes the feature contribution values using either the `ModelRiskScoreContributorsRatio`, `ModelValidationRiskScoreContributorsRatio` or `RiskScoreContributorsRatio`.
     * The normalized feature contribution values sum up to 1.
     * The method fetches all the feature contribution headers for an alert and constructs a metric name depending on the {@link RiskScoreSpec}.
     * The metric is then evaluated on the {@link ReliabilityAsset} to compute the normalized value of the feature contribution.
     * For normalization, the metrics compute a sum of the feature contribution value and divide it by the sum of all the feature contribution associated with the alert.
     *
     * @param spec - The specification for fetching the features.
     * @returns A map where the keys are feature names and the values are their corresponding normalized contribution values.
     */
    static getFeatureContributions(spec: RiskScoreSpec): Map_Type<string, number> | null;

    /**
     * Gets a collection of feature reconstructions using the provided {@link RiskScoreSpec}.
     * This method maps feature names to their reconstructed values, which indicate the predicted values for each feature.
     *
     * @param spec - The specification for fetching the features.
     * @returns A map where the keys are feature names and the values are their corresponding reconstructed values.
     */
    static getFeatureReconstructions(spec: RiskScoreSpec): Map_Type<string, number> | null;

    /**
     * Returns the appropriate {@link RiskScoreSpec} for a given {@link ReliabilityRiskScoreMlPrediction}.
     * This function generates the risk score specification based on the provided risk score, which is used for obtaining risk score details.
     *
     * @param riskScore - The risk score prediction for which the spec is needed.
     * @param includeModel - Whether to include model-related information in the specification.
     * @returns The generated RiskScoreSpec for the provided risk score.
     */
    static getSpecForRiskScore(riskScore: ReliabilityRiskScoreMlPrediction, includeModel?: boolean): RiskScoreSpec;

    /**
     * Returns the name of the persisted series header from the provided mapper and column name.
     * This method helps to retrieve or persist timeseries predictions by using the given column name and mapper.
     *
     * @param mapper - A map of string keys and values representing the column mapping.
     * @param column - The name of the column for which to retrieve the series name.
     * @returns The name of the persisted timeseries series header.
     */
    static getSeriesName(mapper?: Map_Type<string, string>, column?: string): string | null;

    /**
     * Retrieves the appropriate header name for risk score timeseries, depending on whether raw or normalized risk scores
     * are being requested.
     *
     * @returns The header name for the risk score timeseries.
     */
    static getRiskScoreHeaderName(): string;

    /**
     * Retrieves the alert timeseries header name corresponding to reliability risk alerts.
     * This header identifies timeseries data associated with risk alerts.
     *
     * @returns The header name for the risk alert timeseries.
     */
    static getAlertHeaderName(): string;

    /**
     * Retrieves the header name for the sum of feature contributions.
     * This header provides the total contribution of all features for the risk score.
     *
     * @returns The header name for the feature contributions sum.
     */
    static getFeatureContributionsSumHeaderName(): string;

    /**
     * Constructs the column name for the feature which represents the given {@link Sensor} in the context of the given {@link ReliabilityAsset}.
     * This helps to determine how a sensor is represented in the model, based on the asset and sensor context.
     *
     * @param sensor - The sensor whose feature name is to be generated.
     * @param asset - The reliability asset for which the feature name is being generated.
     * @returns The generated feature name for the sensor.
     */
    static getFeatureName(sensor: Sensor, asset?: ReliabilityAsset): string | null;

    /**
     * Returns the metric name corresponding to the given feature name.
     * This is useful for converting between feature names and their corresponding metric names.
     *
     * @param featureName - The feature name whose metric name is to be returned.
     * @returns The corresponding metric name for the given feature.
     */
    static getMetricNameFromFeatureName(featureName: string): string | null;

    /**
     * Extracts the feature name from the given contribution column name.
     * This method helps to map a given column name back to its associated feature name.
     *
     * @param headerName - The column name for which the feature name is needed.
     * @param suffixConfigKey - An optional parameter to define the suffix configuration key (defaults to 'residualColumnNameSuffix').
     * @returns The extracted feature name.
     */
    static getFeatureNameFromHeaderName(headerName: string, suffixConfigKey?: string = '\'residualColumnNameSuffix\''): string | null;

    /**
     * Constructs the contribution column name for the given metric or feature name.
     * This method creates a column name based on the provided metric or feature name.
     *
     * @param metricOrFeatureName - The metric or feature name for which the contribution column name is created.
     * @param isFeatureName - A flag indicating whether the provided name is a feature name.
     * @returns The generated contribution column name.
     */
    static getContributionHeaderNameFromMetricName(metricOrFeatureName: string, isFeatureName?: boolean): string | null;

    /**
     * Constructs the contribution column name for the given asset-sensor pair.
     * This method creates the column name based on the sensor and asset provided.
     *
     * @param sensor - The sensor whose contribution column name is to be constructed.
     * @param asset - The reliability asset for which the contribution column name is needed.
     * @returns The generated contribution column name.
     */
    static getContributionHeaderName(sensor: Sensor, asset?: ReliabilityAsset): string | null;

    /**
     * Constructs the reconstruction column name for the given metric or feature name.
     * This method creates the column name used for feature reconstruction based on the metric or feature name.
     *
     * @param metricOrFeatureName - The metric or feature name for which the reconstruction column name is created.
     * @param isFeatureName - A flag indicating whether the provided name is a feature name.
     * @returns The generated reconstruction column name.
     */
    static getReconstructionHeaderNameFromMetricName(metricOrFeatureName: string, isFeatureName?: boolean): string | null;

    /**
     * Constructs the residual column name for the given metric or feature name.
     * This method creates the column name used for residual analysis based on the metric or feature name.
     *
     * @param metricOrFeatureName - The metric or feature name for which the residual column name is created.
     * @param isFeatureName - A flag indicating whether the provided name is a feature name.
     * @returns The generated residual column name.
     */
    static getResidualHeaderNameFromMetricName(metricOrFeatureName: string, isFeatureName?: boolean): string | null;

    /**
     * Constructs the reconstruction column name for the given asset-sensor pair.
     * This method creates the column name for feature reconstruction based on the sensor and asset context.
     *
     * @param sensor - The sensor for which the reconstruction column name is to be created.
     * @param asset - The reliability asset for which the reconstruction column name is needed.
     * @returns The generated reconstruction column name.
     */
    static getReconstructionHeaderName(sensor: Sensor, asset?: ReliabilityAsset): string | null;

    /**
     * Constructs the residual column name for the given asset-sensor pair.
     * This method creates the column name for residual analysis based on the sensor and asset context.
     *
     * @param sensor - The sensor for which the residual column name is to be created.
     * @param asset - The reliability asset for which the residual column name is needed.
     * @returns The generated residual column name.
     */
    static getResidualHeaderName(sensor: Sensor, asset?: ReliabilityAsset): string | null;
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
