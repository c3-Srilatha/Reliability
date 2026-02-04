// TypeScript definitions for the C3 type Data.GenerateDataSubTypes

/**
 * Generates a c3typ with methods and properties for different Pandas and Spark subtypes. These C3types are then
 * mixed in by the corresponding Data subtype. For instance, we would generate Data.Base.Series.c3typ
 * which contains all of the methods and properties for Data.Series. See GenerateDataSubTypes_Test for instructions
 * on how to regenerate subtypes
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.GenerateDataSubTypes
 */
declare namespace Data {
  export interface IGenerateDataSubTypes {
  }
}

/**
 * Generates a c3typ with methods and properties for different Pandas and Spark subtypes. These C3types are then
 * mixed in by the corresponding Data subtype. For instance, we would generate Data.Base.Series.c3typ
 * which contains all of the methods and properties for Data.Series. See GenerateDataSubTypes_Test for instructions
 * on how to regenerate subtypes
 *
 * @remarks this represents a made instance of Data.GenerateDataSubTypes
 */
declare namespace Data {
  export class GenerateDataSubTypes extends Obj {

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
    static fromJson(json: any | null): Data.GenerateDataSubTypes | null;

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
    static fromJsonString(json: string | null): Data.GenerateDataSubTypes | null;

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
    static fromXmlString(xml: string | null): Data.GenerateDataSubTypes | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.GenerateDataSubTypes | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.GenerateDataSubTypes;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.GenerateDataSubTypes;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.GenerateDataSubTypes;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.GenerateDataSubTypes | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.GenerateDataSubTypes | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.GenerateDataSubTypes;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.GenerateDataSubTypes;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.GenerateDataSubTypes;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.GenerateDataSubTypes;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.GenerateDataSubTypes;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.GenerateDataSubTypes;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.GenerateDataSubTypes;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.GenerateDataSubTypes;

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
    withoutFieldAtPath(path: string): Data.GenerateDataSubTypes;

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
    withoutField(field: string | null): Data.GenerateDataSubTypes;

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
    withoutField(field: FieldType | null): Data.GenerateDataSubTypes;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.GenerateDataSubTypes;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.GenerateDataSubTypes;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.GenerateDataSubTypes;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.GenerateDataSubTypes;

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
    defaultField(field: string): Data.GenerateDataSubTypes;

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
    defaultField(field: FieldType): Data.GenerateDataSubTypes;

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
    unsetField(field: string): Data.GenerateDataSubTypes;

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
    unsetField(field: FieldType): Data.GenerateDataSubTypes;

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
    removeField(field: string): Data.GenerateDataSubTypes;

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
    removeField(field: FieldType): Data.GenerateDataSubTypes;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.GenerateDataSubTypes;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.GenerateDataSubTypes;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.GenerateDataSubTypes;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.GenerateDataSubTypes;

    mergeJson(json: any | null): Data.GenerateDataSubTypes;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.GenerateDataSubTypes;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.GenerateDataSubTypes;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.GenerateDataSubTypes | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.GenerateDataSubTypes | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.GenerateDataSubTypes | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.GenerateDataSubTypes | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.GenerateDataSubTypes | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.GenerateDataSubTypes | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.GenerateDataSubTypes | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.GenerateDataSubTypes | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.GenerateDataSubTypes | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.GenerateDataSubTypes;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.GenerateDataSubTypes;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.GenerateDataSubTypes;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.GenerateDataSubTypes;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.GenerateDataSubTypes;

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
    static make(fields: any, withDefaults?: boolean): Data.GenerateDataSubTypes;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.GenerateDataSubTypes;

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
    afterMake(): Data.GenerateDataSubTypes;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.GenerateDataSubTypes;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.GenerateDataSubTypes>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.GenerateDataSubTypes;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native spark.pandas.DataFrame class
     */
    static generateSparkDataFrame(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the spark.pandas.DataFrame subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkDataFrameSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native spark pyspark.pandas.Series class
     */
    static generateSparkSeries(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.Series subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkSeriesSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native spark pyspark.pandas.Series.str class
     */
    static generateSparkStringMethods(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.Series.str subtype
     * Generate a Type-Meta that has all of the methods and properties found in the native spark pyspark.pandas.Series.dt class
     */
    static generateSparkDatetimeMethods(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.Series.dt subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkStringMethodsSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    static sparkDatetimeMethodsSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native spark pyspark.pandas.GroupBy class
     */
    static generateSparkGroupBy(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.GroupBy subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkGroupBySpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native spark pyspark.pandas.Index class
     */
    static generateSparkIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.Index subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.CategoricalIndex class
     */
    static generateSparkCategoricalIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.CategoricalIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkCategoricalIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.MultiIndex class
     */
    static generateSparkMultiIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.MultiIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkMultiIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.CategoricalIndex class
     */
    static generateSparkDatetimeIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.CategoricalIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkDatetimeIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.MultiIndex class
     */
    static generateSparkTimedeltaIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.MultiIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkTimedeltaIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the pyspark.pandas.resample.Resampler class
     */
    static generateSparkResampler(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pyspark.pandas.resample.Resampler subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static sparkResamplerSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Builds and returns the {@link VarReferenceType}s to add to the PyClassToTypeGeneratorSpec
     */
    static _createDeclaredVars(type?: ValueType | null): C3.Array<VarReferenceType | null>;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.DataFrame class
     */
    static generateDataFrame(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.DataFrame subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static dataFrameSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native pandas pd.Series class
     */
    static generateSeries(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Series subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static seriesSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native pandas pd.Series.str class
     */
    static generateStringMethods(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Series.str subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static stringMethodsSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a Type-Meta that has all of the methods and properties found in the native pandas pd.Series.dt class
     */
    static generateCombinedDatetimelikeProperties(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Series.dt subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static combinedDatetimelikePropertiesSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.DataFrameGroupBy class
     */
    static generateDataGroupby(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.DataFrameGroupBy
     * subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static dataGroupbySpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found on native pandas classes which result from
     * calling `resample` on a DataFrame, Series, DataFrameGroupBy, or SeriesGroupBy. Note that there are actually a few
     * different classes in pandas (e.g. PeriodIndexResamplerGroupby, DatetimeIndexResampler, etc.) which can result from
     * a resample operation, depending on the type it was called on and what type of index it has. However, each of these
     * pandas classes have the exact same methods and properties, so we are only required to generate a single interface
     * to represent them all; we rely on the backing execution engine, such as native pandas (in Pandas Execution Mode) to
     * handle any differences in implementation.
     * We parameterize this generated type by method return type so that we can declare 2 subtypes, {@link Data.Resample}
     * and {@link Data.Series.Resample}, which thus have more specific return types in their metadata.
     */
    static generateResample(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the the type we use to
     * represent the result of a resample operation. See documentation for {@link GeneratePandasSubTypes#generateResample}
     * for an explanation of why this does not correspond 1-1 with a native pandas class.
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static resampleSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.DataFrame.rolling class
     */
    static generateDataRolling(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.DataFrame.rolling subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static rollingSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.core.window.expanding.Expanding class
     */
    static generateExpanding(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.core.window.expanding.Expanding subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static expandingSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.core.window.ewm.ExponentialMovingWindow class
     */
    static generateExponentialMovingWindow(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.core.window.ewm.ExponentialMovingWindow subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static exponentialMovingWindowSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.Index class
     */
    static generateIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Index subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static indexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.RangeIndex class
     */
    static generateRangeIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.RangeIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static rangeIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.CategoricalIndex class
     */
    static generateCategoricalIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.CategoricalIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static categoricalIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.MultiIndex class
     */
    static generateMultiIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.MultiIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static multiIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.IntervalIndex class
     */
    static generateIntervalIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.IntervalIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static intervalIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.DatetimeIndex class
     */
    static generateDatetimeIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.DatetimeIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static datetimeIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.TimedeltaIndex class
     */
    static generateTimedeltaIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.TimedeltaIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static timedeltaIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.PeriodIndex class
     */
    static generatePeriodIndex(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.PeriodIndex subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static periodIndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.Int64Index class
     */
    static generateInt64Index(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Int64Index subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static int64IndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.UInt64Index class
     */
    static generateUInt64Index(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.UInt64Index Index subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static uInt64IndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;

    /**
     * Generate a TypeMeta that has all of the methods and properties found in the native pandas pd.Float64Index class
     */
    static generateFloat64Index(): TypeMeta;

    /**
     * Builds and returns the {@link PyClassToTypeGeneratorSpec} used to generate the methods for the pd.Float64Index subtype
     *
     * @param inferredMethodsToSkip
     *        A set of method names for which to skip generation
     * @param inferredReturnTypes
     *        A map of method names to return types
     */
    static float64IndexSpec(inferredMethodsToSkip?: C3.Set<string | null>, inferredReturnTypes?: C3.Map<string | null, ValueType | null>): PyClassToTypeGeneratorSpec;
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
