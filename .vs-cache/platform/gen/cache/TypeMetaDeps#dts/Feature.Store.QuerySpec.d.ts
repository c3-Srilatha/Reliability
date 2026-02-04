// TypeScript definitions for the C3 type Feature.Store.QuerySpec

/**
 * A common spec type used to decide what to query for a feature or feature set.
 *
 * @remarks this represents a value passed to a method that expects an instance of Feature.Store.QuerySpec
 */
declare namespace Feature.Store {
  export interface IQuerySpec {

    /**
     * Start datetime of the time range. The start date is inclusive of the date mentioned.
     * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
     */
    start?: DateTime | Date | string | null;

    /**
     * End datetime of the time range. The end date is exclusive of the date mentioned.
     * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
     */
    end?: DateTime | Date | string | null;

    /**
     * Optionally globally unique id of a "snapshot" of a Feature.Set. {@link Feature.Set.Snapshot}s are immutable and can be used to
     * access "unchanging data" for the evaluation or training. Alternatively, in case of {@link Feature.Set#createSnapshot} API,
     * **snapshotId** is used to create a single snapshot. Please also refer to {@link CreateSnapshotSpec#sourceSnapshotId} if an existing
     * snapshot is to be used to create a new snapshot.
     * Please note that if the snapshotId is specified, then:
     * 1. it will be always used. (Even if Feature.Set is created with {@link Feature.Set#doNotMaterialize} as true)
     * 2. An error will be thrown if the snapshot doesn't exist.
     * 3. An error will be thrown if {@link #skipMaterialized} is set to true.
     */
    snapshotId?: string | null;

    /**
     * Allows the Feature/Feature.Set to be evaluated directly during runtime instead of fetching materialized Data
     * from Feature Store.
     * Depending on the combination of this field and {@link FeatureBase#doNotMaterialize}, the behavior of evalFeature*()
     * is as follows:
     *
     * |    Feature/FeatureSet    | skipMaterialized = true |  skipMaterialized = false   |
     * |--------------------------|-------------------------|-----------------------------|
     * | doNotMaterialize = True  |       compute data      |         compute data        |
     * | doNotMaterialize = False |       compute data      |   get materialized data     |
     */
    skipMaterialized?: boolean;

    /**
     * If set, eval will additionally store the {@link EvalMetricsResult result} on {@link Data.Pandas#_emr}.
     */
    toEmr?: boolean;

    /**
     * A {@link Feature.Set} or {@link Feature} of which users want to evaluate the data
     */
    feature: IFeatureBase;

    /**
     * A batch subjects of which users want to query.
     */
    subjects?: C3.Array<FeatureEvaluatable> | Array<IFeatureEvaluatable>;

    /**
     * A filter to decide which subjects to query. If neither the subjects and the subjectFilter is provided,
     * all the subjects will be queried.
     */
    subjectFilter?: string | null;
  }
}

/**
 * A common spec type used to decide what to query for a feature or feature set.
 *
 * @remarks this represents a made instance of Feature.Store.QuerySpec
 */
declare namespace Feature.Store {
  export class QuerySpec extends Obj {

    /**
     * Start datetime of the time range. The start date is inclusive of the date mentioned.
     * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
     */
    readonly start?: DateTime | null;
    withStart(start: DateTime | Date | string | null): Feature.Store.QuerySpec;

    /**
     * End datetime of the time range. The end date is exclusive of the date mentioned.
     * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
     */
    readonly end?: DateTime | null;
    withEnd(end: DateTime | Date | string | null): Feature.Store.QuerySpec;

    /**
     * Optionally globally unique id of a "snapshot" of a Feature.Set. {@link Feature.Set.Snapshot}s are immutable and can be used to
     * access "unchanging data" for the evaluation or training. Alternatively, in case of {@link Feature.Set#createSnapshot} API,
     * **snapshotId** is used to create a single snapshot. Please also refer to {@link CreateSnapshotSpec#sourceSnapshotId} if an existing
     * snapshot is to be used to create a new snapshot.
     * Please note that if the snapshotId is specified, then:
     * 1. it will be always used. (Even if Feature.Set is created with {@link Feature.Set#doNotMaterialize} as true)
     * 2. An error will be thrown if the snapshot doesn't exist.
     * 3. An error will be thrown if {@link #skipMaterialized} is set to true.
     */
    readonly snapshotId?: string | null;
    withSnapshotId(snapshotId: string | null): Feature.Store.QuerySpec;

    /**
     * Allows the Feature/Feature.Set to be evaluated directly during runtime instead of fetching materialized Data
     * from Feature Store.
     * Depending on the combination of this field and {@link FeatureBase#doNotMaterialize}, the behavior of evalFeature*()
     * is as follows:
     *
     * |    Feature/FeatureSet    | skipMaterialized = true |  skipMaterialized = false   |
     * |--------------------------|-------------------------|-----------------------------|
     * | doNotMaterialize = True  |       compute data      |         compute data        |
     * | doNotMaterialize = False |       compute data      |   get materialized data     |
     */
    readonly skipMaterialized?: boolean;
    withSkipMaterialized(skipMaterialized: boolean): Feature.Store.QuerySpec;

    /**
     * If set, eval will additionally store the {@link EvalMetricsResult result} on {@link Data.Pandas#_emr}.
     */
    readonly toEmr?: boolean;
    withToEmr(toEmr: boolean): Feature.Store.QuerySpec;

    /**
     * A {@link Feature.Set} or {@link Feature} of which users want to evaluate the data
     */
    readonly feature: FeatureBase;
    withFeature(feature: IFeatureBase): Feature.Store.QuerySpec;

    /**
     * A batch subjects of which users want to query.
     */
    readonly subjects?: C3.Array<FeatureEvaluatable>;
    withSubjects(subjects: C3.Array<FeatureEvaluatable> | Array<IFeatureEvaluatable>): Feature.Store.QuerySpec;

    /**
     * A filter to decide which subjects to query. If neither the subjects and the subjectFilter is provided,
     * all the subjects will be queried.
     */
    readonly subjectFilter?: string | null;
    withSubjectFilter(subjectFilter: string | null): Feature.Store.QuerySpec;

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
    static fromJson(json: any | null): Feature.Store.QuerySpec | null;

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
    static fromJsonString(json: string | null): Feature.Store.QuerySpec | null;

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
    static fromXmlString(xml: string | null): Feature.Store.QuerySpec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Feature.Store.QuerySpec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Feature.Store.QuerySpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store.QuerySpec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store.QuerySpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store.QuerySpec | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store.QuerySpec | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Store.QuerySpec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store.QuerySpec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store.QuerySpec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Feature.Store.QuerySpec;

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
    withField(field: string, value: any, doNotConvert?: boolean): Feature.Store.QuerySpec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Store.QuerySpec;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Store.QuerySpec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Store.QuerySpec;

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
    withoutFieldAtPath(path: string): Feature.Store.QuerySpec;

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
    withoutField(field: string | null): Feature.Store.QuerySpec;

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
    withoutField(field: FieldType | null): Feature.Store.QuerySpec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Feature.Store.QuerySpec;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Store.QuerySpec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Feature.Store.QuerySpec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Store.QuerySpec;

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
    defaultField(field: string): Feature.Store.QuerySpec;

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
    defaultField(field: FieldType): Feature.Store.QuerySpec;

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
    unsetField(field: string): Feature.Store.QuerySpec;

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
    unsetField(field: FieldType): Feature.Store.QuerySpec;

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
    removeField(field: string): Feature.Store.QuerySpec;

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
    removeField(field: FieldType): Feature.Store.QuerySpec;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Store.QuerySpec;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Store.QuerySpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Store.QuerySpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Store.QuerySpec;

    mergeJson(json: any | null): Feature.Store.QuerySpec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Store.QuerySpec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Feature.Store.QuerySpec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Feature.Store.QuerySpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Feature.Store.QuerySpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Feature.Store.QuerySpec | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Feature.Store.QuerySpec | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Feature.Store.QuerySpec | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Feature.Store.QuerySpec | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Feature.Store.QuerySpec | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Feature.Store.QuerySpec | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Feature.Store.QuerySpec | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Feature.Store.QuerySpec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Feature.Store.QuerySpec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Feature.Store.QuerySpec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Feature.Store.QuerySpec;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Feature.Store.QuerySpec;

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
    static make(fields: any, withDefaults?: boolean): Feature.Store.QuerySpec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Feature.Store.QuerySpec;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): Feature.Store.QuerySpec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Feature.Store.QuerySpec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Feature.Store.QuerySpec>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Feature.Store.QuerySpec;

    /**
     * Get 1 year timerange from 12 months ago to now, range always starts on first date of a month.
     * Ex: current time - 2016-08-23, one should get 2015-08-01 to 2016-08-01 timerange
     */
    static last12Months(): Feature.Store.QuerySpec | null;

    /**
     * Get 1 year timerange from 24 months ago to 12 months ago, range always starts on first date of a month.
     * Ex: current time - 2016-08-23, one should get 2014-08-01 to 2015-08-01 timerange.
     */
    static prevLast12Months(): Feature.Store.QuerySpec | null;

    /**
     * API to de-dup time ranges and sort it in ascending order by start, end and combine consecutive time periods
     * E.g. ["2014-01-01" -> "2015-01-01"], ["2015-01-01" -> "2016-01-01"] => ["2014-01-01" -> "2016-01-01"]
     * @param timeRanges
     *                that need to be sorted and deduped
     * @return deduped and sorted time ranges with merged consecutive ranges
     */
    static combineAndSort(timeRanges: C3.Array<TimeRange | null> | null): C3.Array<Feature.Store.QuerySpec | null>;

    /**
     * Merge various time ranges into a larger range
     * E.g. ["2014-01-01" -> "2014-02-01"], ["2015-01-01" -> "2016-01-01"] => {"2014-01-01" -> "2016-01-01"}
     */
    static coalesce(timeRanges: C3.Array<TimeRange | null> | null): Feature.Store.QuerySpec | null;

    /**
     * Whether this time range covers time
     */
    contains(time: DateTime): boolean;

    /**
     * Whether this time range covers input time range
     */
    contains(othr: TimeRange | null): boolean;

    /**
     * Returns whether this time range intersects with the other
     */
    intersects(othr: TimeRange | null): boolean;

    /**
     * Returns overlap TimeRange with the input TimeRange. Returns null if no overlap found
     */
    overlap(othr: TimeRange | null): Feature.Store.QuerySpec | null;

    /**
     * @returns TimeRange from pretty printed TimeRange
     * e.g. var tr = TimeRange.fromPrettyPrint('2017-01-01::2017-02-01')
     *      tr.start.toString() will be  '2017-01-01'
     *      tr.end.toString() will be '2017-02-01'
     */
    static fromPrettyPrint(prettyPrint: string): Feature.Store.QuerySpec;

    /**
     * Construct array of TimeRange from map<datetime, datetime>
     */
    static fromMap(map: C3.Map<DateTime | null, DateTime | null>): C3.Array<Feature.Store.QuerySpec | null>;

    /**
     * @return a prettified string representation of the TimeRange
     * e.g. TimeRange.make({start: '2017-01-01', end: '2017-02-01'}).prettyPrint()
     *      return 2017-01-01::2017-02-01
     */
    prettyPrint(): string;

    /**
     * Apply duration shift to the existing time range
     */
    shift(offset: Duration): Feature.Store.QuerySpec;

    /**
     * Helper function to get all the subject ids based on the {@link #subjects} and {@link subjectFilter} of this spec.
     */
    subjectIds(): C3.Set<string | null>;
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
