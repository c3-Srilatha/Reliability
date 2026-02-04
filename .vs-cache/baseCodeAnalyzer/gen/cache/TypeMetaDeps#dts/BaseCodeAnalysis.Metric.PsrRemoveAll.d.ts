// TypeScript definitions for the C3 type BaseCodeAnalysis.Metric.PsrRemoveAll

/**
 * Code analysis metric that identifies invocations of the `removeAll` function without any filters.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.Metric.PsrRemoveAll
 */
declare namespace BaseCodeAnalysis.Metric {
  export interface IPsrRemoveAll {
  }
}

/**
 * Code analysis metric that identifies invocations of the `removeAll` function without any filters.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.Metric.PsrRemoveAll
 */
declare namespace BaseCodeAnalysis.Metric {
  export class PsrRemoveAll extends Obj  {

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
    static fromJson(json: any): BaseCodeAnalysis.Metric.PsrRemoveAll | null;

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
    static fromJsonString(json: string): BaseCodeAnalysis.Metric.PsrRemoveAll | null;

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
    static fromXmlString(xml: string): BaseCodeAnalysis.Metric.PsrRemoveAll | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): BaseCodeAnalysis.Metric.PsrRemoveAll | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalysis.Metric.PsrRemoveAll>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalysis.Metric.PsrRemoveAll>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withField(field: string, value: any, doNotConvert?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withoutFieldAtPath(path: string): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withoutField(field: string): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withoutField(field: FieldType): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    defaultField(field: string): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    defaultField(field: FieldType): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    unsetField(field: string): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    unsetField(field: FieldType): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    removeField(field: string): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    removeField(field: FieldType): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): BaseCodeAnalysis.Metric.PsrRemoveAll;

    mergeJson(json: any): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<BaseCodeAnalysis.Metric.PsrRemoveAll>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<BaseCodeAnalysis.Metric.PsrRemoveAll>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<BaseCodeAnalysis.Metric.PsrRemoveAll>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<BaseCodeAnalysis.Metric.PsrRemoveAll>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    static make(fields: any, withDefaults?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): BaseCodeAnalysis.Metric.PsrRemoveAll;

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
    afterMake(): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<BaseCodeAnalysis.Metric.PsrRemoveAll> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): BaseCodeAnalysis.Metric.PsrRemoveAll;

    /**
     * Function to perform code analysis for a package for one specific metric, and package the results into
     * {@link BaseCodeAnalysis.Result}s.
     *
     * @param fileSpecs
     *           The {@link BaseCodeAnalysis.FileSpec}s containing the filenames and contents of the package.
     * @param options
     *           An optional JSON with any additional information needed to calculate results.
     * @return An array of {@link BaseCodeAnalysis.Result}s representing the metric values for files in the package.
     */
    static calculateResults(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>, options?: any): Array_Type<BaseCodeAnalysis.Metric.Result> | null;

    /**
     * Helper function to filter a list of {@link BaseCodeAnalysis.FileSpec}s by file extension.
     *
     * @param fileSpecs
     *           The {@link BaseCodeAnalysis.FileSpec}s to filter.
     * @param extensions
     *           The file extensions to filter by. For example, ['js', 'py'].
     * @param exclude
     *           If true, the fileSpecs with the specified extensions will be excluded from the result.
     * @return An array of {@link BaseCodeAnalysis.FileSpec}s that have the specified extensions.
     */
    static filterFileSpecsByExtension(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>, extensions?: Array_Type<string>, exclude?: boolean): Array_Type<BaseCodeAnalysis.FileSpec> | null;

    /**
     * Function to get an array of all the fields on a Type that have/ don't have a specific annotation
     *
     * @param fieldsOrTypes
     *           An array of either {@link TypeMeta} or {@link DeclaredFieldType} fields.
     * @param annotations
     *           The annotations to use as filter.
     * @param removeMatches
     *           A boolean value indicating whether the function should remove the elements from the fieldsOrTypes array that match the specified annotations.
     * @return An array of the filtered out {@link TypeMeta} or {@link DeclaredFieldType} fields.
     */
    static filterByAnnotations(fieldsOrTypes: Array_Type<TypeMeta | DeclaredFieldType>, annotations: Array_Type<string>, removeMatches?: boolean = 'false'): Array_Type<TypeMeta | DeclaredFieldType> | null;

    /**
     * LibCST helper function to identify the nearest variable assignment to a
     * Call node by iterating through all recorded assignments for that variable.
     *
     * This is to handle scenarios where the same variable has be reassigned several
     * times in the same file. For example, if were looking at this function:
     *
     * ```python
     * def my_function():
     *     spec = c3.FetchSpec.make(True)
     *     c3.EntityType.fetch(spec)
     *     spec = c3.FetchSpec(filter=c3.Filter.intersects("id", ids))
     *     c3.EntityType.fetch(spec)
     * ```
     *
     * when assessing the `spec` variable in `c3.EntityType.fetch(spec)`,
     * we want to get the variable assignment:
     *
     * `spec = c3.FetchSpec(filter=c3.Filter.intersects("id", ids))`
     *
     * @param variableAssignments
     *           A list of assignments for the variable being analyzed.
     * @param referenceLine
     *           The line number of the current Call node, used to compare against the variable assignments.
     * @return The cst Node for the closest variable assignment.
     */
    static getClosestVariableAssignment(variableAssignments?: any, referenceLine?: number): any | null;

    /**
     * The helper function to parse the directives from the given comments and return an array of {@link BaseCodeAnalysis.Metric.Directive}s.
     *
     * @param comments
     *           The comments to parse for directives.
     * @param metricCode
     *           The code of the metric that's being calculated. If the metric code is not specified, all directives will be returned.
     * @return An array of {@link BaseCodeAnalysis.Metric.Directive}s parsed from the comments.
     */
    static parseMetricDirectivesFromComments(comments?: Array_Type<BaseCodeAnalysis.Ast.Comment>, metricCode?: string): Array_Type<BaseCodeAnalysis.Metric.Directive> | null;

    /**
     * The helper function to update the given line and column information based on the given file package path URL.
     * This ensures all {@link BaseCodeAnalysis.Metric.Directive}s and {@link BaseCodeAnalysis.Metric.Message}s
     * use 1-indexed lines and columns regardless of language.
     *
     * @param line
     *           The line number to update.
     * @param column
     *           The column number to update.
     * @param filePkgPathUrl
     *           The file package path URL to use for updating the line and column information.
     * @return A JSON object with the updated line and column information.
     */
    static updateLocationInformation(line: number, column: number, filePkgPathUrl: string): any | null;

    /**
     * The helper function to parse comments in the given JS file and return an array of {@link BaseCodeAnalysis.Metric.Directive}s that
     * are relevant to the metric being calculated.
     *
     * @param fileSpec
     *           The {@link BaseCodeAnalysis.FileSpec} containing the filename, content, and AST of the JS file.
     *           If the AST is not populated for this file spec, an empty array will be returned.
     * @param metricCode
     *           The code of the metric that's being calculated. If the metric code is not specified, all directives will be returned.
     * @return An array of {@link BaseCodeAnalysis.Metric.Directive}s parsed from the comments in the JS file.
     */
    static parseMetricDirectivesFromJsComments(fileSpec: BaseCodeAnalysis.FileSpec, metricCode?: string): Array_Type<BaseCodeAnalysis.Metric.Directive> | null;

    /**
     * The helper function to parse comments in the given Python files and return a map with each file path pointing to
     * an array of {@link BaseCodeAnalysis.Metric.Directive}s that are relevant to the metric being calculated.
     *
     * @param fileSpecs
     *           List of {@link BaseCodeAnalysis.FileSpec} to parse directives from. Each file spec should contain the
     *           filename, content, and AST of the Python file.
     * @param metricCode
     *           The code of the metric that's being calculated. If the metric code is not specified,
     *           all directives will be returned.
     * @return   A map from a {@link BaseCodeAnalysis.FileSpec#filePkgPathUrl} to an array of
     *           {@link BaseCodeAnalysis.Metric.Directive}s parsed from the comments in the Python file.
     */
    static parseMetricDirectivesFromPyComments(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>, metricCode?: string): Map_Type<string, Array_Type<BaseCodeAnalysis.Metric.Directive>> | null;

    /**
     * The helper function to parse comments in the given c3typ file and return an array of {@link BaseCodeAnalysis.Metric.Directive}s that
     * are relevant to the metric being calculated.
     *
     * @param fileSpec
     *           The {@link BaseCodeAnalysis.FileSpec} containing the filename and content.
     * @param metricCode
     *           The code of the metric that's being calculated. If the metric code is not specified, all directives will be returned.
     * @return An array of {@link BaseCodeAnalysis.Metric.Directive}s parsed from the comments in the c3typ file.
     */
    static parseMetricDirectivesFromC3typComments(fileSpec: BaseCodeAnalysis.FileSpec, metricCode?: string): Array_Type<BaseCodeAnalysis.Metric.Directive> | null;

    /**
     * Function that traverses ECMAScript files to search for invocations to `removeAll` without using a filter.
     *
     * @param fileSpecs
     *           The file specs to search for unfiltered `removeAll` calls.
     * @return The results of the metric computation.
     */
    static searchJsForUnfilteredRemoveAll(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>): Array_Type<BaseCodeAnalysis.Metric.Result> | null;

    /**
     * Function that traverses Python files to search for invocations to `removeAll` without using a filter.
     *
     * @param fileSpecs
     *           The file specs to search for unfiltered `removeAll` calls.
     * @return The results of the metric computation.
     */
    static searchPyForUnfilteredRemoveAll(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>): Array_Type<BaseCodeAnalysis.Metric.Result> | null;
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
