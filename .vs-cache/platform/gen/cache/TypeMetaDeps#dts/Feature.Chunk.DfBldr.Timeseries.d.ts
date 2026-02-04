// TypeScript definitions for the C3 type Feature.Chunk.DfBldr.Timeseries

/**
 * This is the DataFrame builder to be used if the Feature / Feature.Set are timeseries. This builder handles "overlapping" timeRange of the incoming
 * {@link Feature.Chunk} by removing the already present timeRange (and associated data) from the incoming chunk.
 *
 * @see Feature.Chunk.DfBldr.Subject
 *
 * @remarks this represents a value passed to a method that expects an instance of Feature.Chunk.DfBldr.Timeseries
 */
declare namespace Feature.Chunk.DfBldr {
  export interface ITimeseries {

    /**
     * Contains a boolean value to indicate if the data is complete for a given subject.
     */
    hasCompleteDataBldr: IMapBuilder<string | null, boolean>;

    /**
     * timeRange for which the dataframe is being built.
     * Used in (@link #hasCompleteData} and {@link #add} to discard a {@link Feature.Store.Block} if data is completed
     * for the relevant **timeRange** and **subjects**.
     */
    timeRange: ITimeRange;

    /**
     * Contains the data as the blocks are being processed by {@link #process}. The chunks for each subject are not sorted.
     */
    dataBldr?: IMapBuilder<string | null, ArrayBuilder<Feature.Chunk | null> | null> | null;

    /**
     * Contains the timeRanges missing for subjects. Before adding any chunk of a certain timeRange, the missing will be initialized
     * with a timeRange equal to the {@link #timeRange} value of this DfBldr. With new chunks being added, the missing for a certain
     * subject will become shorter by cutting the timeRanges of the newly added chunks. This missing buildr is helpful to split
     * the incoming chunk into slices that only fall into this missing timeRange. If the missing of a subject all become empty, then
     * we set the {@link #hasCompletedData} value for that subject as true.
     */
    missingTimeRangeBldr?: IMapBuilder<string | null, C3.Array<TimeRange | null>> | null;
  }
}

/**
 * This is the DataFrame builder to be used if the Feature / Feature.Set are timeseries. This builder handles "overlapping" timeRange of the incoming
 * {@link Feature.Chunk} by removing the already present timeRange (and associated data) from the incoming chunk.
 *
 * @see Feature.Chunk.DfBldr.Subject
 *
 * @remarks this represents a made instance of Feature.Chunk.DfBldr.Timeseries
 */
declare namespace Feature.Chunk.DfBldr {
  export class Timeseries extends Obj {

    /**
     * Contains a boolean value to indicate if the data is complete for a given subject.
     */
    readonly hasCompleteDataBldr: MapBuilder<string | null, boolean>;
    withHasCompleteDataBldr(hasCompleteDataBldr: IMapBuilder<string | null, boolean>): Feature.Chunk.DfBldr.Timeseries;

    /**
     * timeRange for which the dataframe is being built.
     * Used in (@link #hasCompleteData} and {@link #add} to discard a {@link Feature.Store.Block} if data is completed
     * for the relevant **timeRange** and **subjects**.
     */
    readonly timeRange: TimeRange;
    withTimeRange(timeRange: ITimeRange): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Contains the data as the blocks are being processed by {@link #process}. The chunks for each subject are not sorted.
     */
    readonly dataBldr?: MapBuilder<string | null, ArrayBuilder<Feature.Chunk | null> | null> | null;
    withDataBldr(dataBldr: IMapBuilder<string | null, ArrayBuilder<Feature.Chunk | null> | null> | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Contains the timeRanges missing for subjects. Before adding any chunk of a certain timeRange, the missing will be initialized
     * with a timeRange equal to the {@link #timeRange} value of this DfBldr. With new chunks being added, the missing for a certain
     * subject will become shorter by cutting the timeRanges of the newly added chunks. This missing buildr is helpful to split
     * the incoming chunk into slices that only fall into this missing timeRange. If the missing of a subject all become empty, then
     * we set the {@link #hasCompletedData} value for that subject as true.
     */
    readonly missingTimeRangeBldr?: MapBuilder<string | null, C3.Array<TimeRange | null>> | null;
    withMissingTimeRangeBldr(missingTimeRangeBldr: IMapBuilder<string | null, C3.Array<TimeRange | null>> | null): Feature.Chunk.DfBldr.Timeseries;

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
    static fromJson(json: any | null): Feature.Chunk.DfBldr.Timeseries | null;

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
    static fromJsonString(json: string | null): Feature.Chunk.DfBldr.Timeseries | null;

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
    static fromXmlString(xml: string | null): Feature.Chunk.DfBldr.Timeseries | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Feature.Chunk.DfBldr.Timeseries | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Chunk.DfBldr.Timeseries | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Chunk.DfBldr.Timeseries | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Feature.Chunk.DfBldr.Timeseries;

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
    withField(field: string, value: any, doNotConvert?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    withoutFieldAtPath(path: string): Feature.Chunk.DfBldr.Timeseries;

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
    withoutField(field: string | null): Feature.Chunk.DfBldr.Timeseries;

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
    withoutField(field: FieldType | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Feature.Chunk.DfBldr.Timeseries;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Feature.Chunk.DfBldr.Timeseries;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Chunk.DfBldr.Timeseries;

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
    defaultField(field: string): Feature.Chunk.DfBldr.Timeseries;

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
    defaultField(field: FieldType): Feature.Chunk.DfBldr.Timeseries;

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
    unsetField(field: string): Feature.Chunk.DfBldr.Timeseries;

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
    unsetField(field: FieldType): Feature.Chunk.DfBldr.Timeseries;

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
    removeField(field: string): Feature.Chunk.DfBldr.Timeseries;

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
    removeField(field: FieldType): Feature.Chunk.DfBldr.Timeseries;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Chunk.DfBldr.Timeseries;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Chunk.DfBldr.Timeseries;

    mergeJson(json: any | null): Feature.Chunk.DfBldr.Timeseries;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Feature.Chunk.DfBldr.Timeseries | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Feature.Chunk.DfBldr.Timeseries | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Feature.Chunk.DfBldr.Timeseries | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Feature.Chunk.DfBldr.Timeseries | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Feature.Chunk.DfBldr.Timeseries | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Feature.Chunk.DfBldr.Timeseries | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Feature.Chunk.DfBldr.Timeseries | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Feature.Chunk.DfBldr.Timeseries | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Feature.Chunk.DfBldr.Timeseries | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    static make(fields: any, withDefaults?: boolean): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Feature.Chunk.DfBldr.Timeseries;

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
    afterMake(): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Feature.Chunk.DfBldr.Timeseries;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Feature.Chunk.DfBldr.Timeseries>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Feature.Chunk.DfBldr.Timeseries;

    /**
     * @return **true** if the current instance has all the necessary data for the provided subjects and timeRange. This function needs to be implemented separately for
     * {@link Feature.Chunk.DfBldr.Timeseries} and {@link Feature.Chunk.DfBldr.Subject}. For {@link Feature.Chunk.DfBldr.Timeseries}, the subject data is complete if subject data
     * covers all the timeRange, see {@link Feature.Chunk.DfBldr.Timeseries#timeRange}. For {@link Feature.Chunk.DfBldr.Subject}, the subject data is complete only if there is one
     * chunk added for that subject.
     * This may be used to discard {@link Feature.Store.Block} for the provided TimeRange.
     */
    hasCompleteData(subjects: C3.Set<string | null>, timeRange?: TimeRange | null): boolean;

    /**
     * Helper function to instantiate a Feature.Chunk.DfBldr that has the default field values.
     * @param isTimeseries
     *        if set True, create a {@link Feature.Chunk.DfBldr.Timeseries} by passing the 2nd argument timeRange.
     * @param timeRange
     *        the timeRange of the created {@link Feature.Chunk.DfBldr.Timeseries}. This argument is only considered if the 1st argument is set to True.
     * @return a Feature.Chunk.DfBldr subType instance with default field values.
     */
    static init(isTimeseries?: boolean, timeRange?: TimeRange | null): Feature.Chunk.DfBldr;

    /**
     * Process the blocks such that the data from an earlier block MUST NOT be overwritten by the later block. When this function
     * is done, this Feature.Chunk.DfBldr will be populated with the data to be returned to the users.
     * @param blocks
     *        A list of {@link Feature.Chunk.DfBldr.Block metaBlock}s. Each block specifies the subject ids and timeRange that
     *        contain the necessary data required for this Feature.Chunk.DfBldr, i.e. subjects and timeRanges that are outside
     *        will be be processed.
     * @param projection
     *        A list of data columns to be selected from the entire set of data columns. If this field is null, then this function will
     *        process for all the data columns.
     */
    process(blocks: Collection<Feature.Chunk.DfBldr.Block>, projection?: C3.Array<string>): void;

    /**
     * This function accepts a global MapBuilder and update this dfBldr's data into the MapBuilder. This function needs to be implemented separated for
     * {@link Feature.Chunk.DfBldr.Timeseries} and {@link Feature.Chunk.DfBldr.Subject} as they have different data storage format.
     */
    stitchAndAddTo(mapBldr: MapBuilder<string | null, C3.Array<Data.Column | null>>): void;

    /**
     * Convert a collection of Feature.Store.Blocks to a collection of {@link Feature.Chunk.DfBldr.Block meta} blocks. Each meta block contains the minimum set of subjects
     * and the minimum query timeRange for each Feature.Store.Block that are within the given subjects set. This function is called before the {@link Feature.Chunk.DfBldr#process process}
     * of the blocks and the return of this function is used as the input of the following process. Note that this function also updates the dfBldr by populating the {@link #hasCompleteDataBldr}.
     *
     * @param blocks
     *        input blocks to query the desired subjects.
     * @param subjects
     *        the set of subject ids that will be queried from the blocks
     * @return a collection of Feature.Chunk.DfBldr.Blocks, each of which contains the meta information of blocks, including the query timeRange and subjects to query the data
     */
    blocksToMetas(blocks: Collection<Feature.Store.Block | null>, subjects: C3.Set<string | null>): C3.Array<Feature.Chunk.DfBldr.Block | null>;
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
