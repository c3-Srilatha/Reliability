// TypeScript definitions for the C3 type Genai.Agent.Tool.UnstructuredDataQuery

/**
 * Light wrapper around {@link Genai.UnstructuredQuery.Engine} to give it a {@link Genai.Agent.Tool} interface.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Agent.Tool.UnstructuredDataQuery
 */
declare namespace Genai.Agent.Tool {
  export interface IUnstructuredDataQuery {

    /**
     * Various system fields.
     */
    meta?: IMeta;

    /**
     * The unique and required id of this instance.
     */
    id: string;
  }
}

/**
 * Light wrapper around {@link Genai.UnstructuredQuery.Engine} to give it a {@link Genai.Agent.Tool} interface.
 *
 * @remarks this represents a made instance of Genai.Agent.Tool.UnstructuredDataQuery
 */
declare namespace Genai.Agent.Tool {
  export class UnstructuredDataQuery extends Obj  {

    /**
     * Various system fields.
     */
    readonly meta?: Meta;
    withMeta(meta: IMeta | null): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * The unique and required id of this instance.
     */
    readonly id: string;
    withId(id: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    static fromJson(json: any): Genai.Agent.Tool.UnstructuredDataQuery | null;

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
    static fromJsonString(json: string): Genai.Agent.Tool.UnstructuredDataQuery | null;

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
    static fromXmlString(xml: string): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.UnstructuredDataQuery>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.UnstructuredDataQuery>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withoutFieldAtPath(path: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withoutField(field: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withoutField(field: FieldType): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Agent.Tool.UnstructuredDataQuery;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Agent.Tool.UnstructuredDataQuery;

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
    defaultField(field: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    defaultField(field: FieldType): Genai.Agent.Tool.UnstructuredDataQuery;

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
    unsetField(field: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    unsetField(field: FieldType): Genai.Agent.Tool.UnstructuredDataQuery;

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
    removeField(field: string): Genai.Agent.Tool.UnstructuredDataQuery;

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
    removeField(field: FieldType): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Agent.Tool.UnstructuredDataQuery;

    mergeJson(json: any): Genai.Agent.Tool.UnstructuredDataQuery;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    static make(fields: any, withDefaults?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Agent.Tool.UnstructuredDataQuery;

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
    afterMake(): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    config(secrets?: boolean): Genai.Agent.Tool.UnstructuredDataQuery.Config;

    /**
     * @return configuration key for this instance.
     */
    configKey(): string | null;

    /**
     * @return configuration key for this type assuming it is singleton.
     */
    configSingletonKey(): string | null;

    /**
     * @return type configuration for the given {@link Configurable} type.
     * E.g. {@see REST} & {@see RestConfig}
     */
    static typeConfig(): Genai.Agent.Tool.UnstructuredDataQuery.Config;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec): FetchResult<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<Genai.Agent.Tool.UnstructuredDataQuery>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec): Stream<Genai.Agent.Tool.UnstructuredDataQuery> | null;

    /**
     * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
     * specified maximum batch size.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

    /**
     * Fetched multiple obj instances in multiple locales based on specification.
     *
     * @param spec
     *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
     *        type.
     * @return Requested objs where key of map is locale id
     */
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<Genai.Agent.Tool.UnstructuredDataQuery>> | null;

    /**
     * @return The number of entries that match the specification.
     */
    static fetchCount(spec?: FetchFilterSpec): number;

    /**
     * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
     * For non-kv types, The count is obtained from the query explain plan for the fetch.
     * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
     * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
     * upper bound for the partition. For more accurate results, perform fillBuckets first.
     *
     * @param spec
     *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
     *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
     *        fields.
     * @param updateStatistics
     *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
     *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
     *
     * @return The requested estimated count.
     */
    static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

    /**
     * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
     * a callback function for the given batch.
     *
     * @param spec
     *           Specification of the scan action.
     * @return Statistics of the scan action.
     */
    static scan(spec: ScanSpec): ScanStats | null;

    /**
     * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
     *
     * @param spec
     *        Spec indicating how the operation should work.
     *
     * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
     *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
     *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
     *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
     *             other would be specified, depending on whether you are interested in controlling the number of batches
     *             or batch size.
     *
     * @return A stream of batch ids based on the input parameters.
     */
    static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(spec?: ExistsSpec): boolean;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(filter: Filter): boolean;

    /**
     * @return key field type.
     */
    static keyFieldType(): FieldType;

    /**
     * @return key field value.
     */
    keyFieldValue(): string | null;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    singletonMap(): Map_Type<string, WithKey>;

    /**
     * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
     */
    dependencies(): MetadataDeps<Genai.Agent.Tool.UnstructuredDataQuery>;

    save(subPath?: string, contentType?: string): Genai.Agent.Tool.UnstructuredDataQuery;

    remove(spec?: UpsertSpec): boolean;

    /**
     * Remove the metadata instance as well as its associated backward dependencies.
     * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
     */
    removeWithChildren(): boolean;

    static removeAll(removeFilter?: string): number;

    update(srcObj?: Genai.Agent.Tool.UnstructuredDataQuery, spec?: UpsertSpec): Genai.Agent.Tool.UnstructuredDataQuery | null;

    upsert(srcObj?: Genai.Agent.Tool.UnstructuredDataQuery, spec?: UpsertSpec): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * Retrieves folder that holds metadata.
     */
    static metadataFolder(): string | null;

    /**
     * If this Metadata type has arbitrary folder hierarchy.
     */
    static hasArbitraryFolderHierarchy(): boolean;

    /**
     * If metadata path is valid.
     * @param pkg
     *    name of the package
     * @param filePath
     *    path of metadata json file
     */
    static isValidMetadataJson(pkg: string, filePath: string): boolean;

    /**
     * Optional member function to enable custom validation logic.
     */
    validateMetadata(): ValidateObjResult;

    /**
     * Build the canonical string representation of this instance. This must be implemented to provide serialization.
     *
     * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
     * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
     *
     * @see #fromString
     */
    toString(): string | null;

    /**
     * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
     * provide deserialization.
     *
     * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
     * of called-on type, but perhaps not the same type.
     *
     * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
     *
     * @see #toString
     */
    static fromString(s: string): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string, failIfMissing?: boolean): Genai.Agent.Tool.UnstructuredDataQuery | null;

    /**
     * Initialize the tool if the tool has any 'expensive' state that can be pre-loaded.
     * The default implementation does nothing.
     * @param forceReload
     *           If true, all configs and setup will be re-run (instead of reusing already-loaded values)
     * @return a dictionary containing all globals initialized
     */
    initialize(forceReload?: boolean): any | null;

    /**
     * Run the tool on the given input, updating the inProgressResult, and returning a tool output.
     * @param input
     *           The input query. Note that this may not be exactly the same as the user's query, as
     *           it may have been preprocessed by the {@link Genai.Agent} before being passed to the tool.
     * @param inProgressResult
     *           The {@link Genai.Query.Result} being processed.
     * @param streamResponse
     *           If true, the tool should stream its response to the client
     * @return The tool output.
     */
    run(input: string, inProgressResult: Genai.Query.Result, streamResponse?: boolean): Genai.Agent.Tool.Output | null;

    /**
     * Generate representation of a tool to be given to a {@link Genai.Agent}
     */
    descriptionForAgent(): Genai.Agent.Tool.Description;

    /**
     * For tools that do not populate {@link Genai.Query.Result#rationale} as part of run, this method returns an
     * optional 'rationale' to be shown to the user. The default implementation only accounts for when toolOutput has its
     * structuredQuerySpec populated, in which case it is serialized as the rationale.
     *
     * NOTE: This should only be called on the tool which produced the output.
     *
     * @param input
     *           The input query that was passed to the tool.
     * @param toolOutput
     *           The output that the tool produced.
     *
     * @return The rationale for the tool's original output (toolOutput output)
     */
    rationale(input: string, toolOutput: Genai.Agent.Tool.Output): string | null;

    /**
     * For tools whose primary {@link Genai.Agent.Tool.Output#output} is not a string (or string serializable) answer, this method
     * returns a text answer given the question and tool's own output.
     * @param input
     *           The input query that was passed to the tool.
     * @param toolOutput
     *           The output that the tool produced.
     *
     * NOTE: The default implementation of `textAnswer` only handles string serializable (including string).
     * When given {@link Data}, it outputs the value for EnterpriseSearch.Tool.DefaultTextAnswer.
     *
     * NOTE: This should only be called on the tool which produced the output.
     */
    textAnswer(input: string, toolOutput: Genai.Agent.Tool.Output): string;

    /**
     * Internal function used to generate the 'human-readable' text output when the answer comes from structured data.
     *
     * @param input
     *           The input query.
     * @param outputDataStr
     *           The output data as a string which is passed to the LLM as an observation.
     * @param prompt
     *           Prompt string used by llm to generate the answer.
     * @param llm
     *           {@link Genai.UnstructuredQuery.Engine.ModelConfig} optional override of the tool's configured llm
     *
     * @return The text answer generated by llm.
     */
    textAnswerFromData(input: string, outputDataStr: string, prompt: string, llm?: Genai.UnstructuredQuery.Engine.ModelConfig): string | null;

    /**
     * Helper function to ensure that the tool has its id set. If the input tool does not have an id,
     * the default config for the type is used to set the id on the returned instance.
     * NOTE: This only works for tools with a logical default instance (defined by their config mixing DefaultInstance)
     */
    static ensureId(tool: Genai.Agent.Tool<any>): Genai.Agent.Tool.UnstructuredDataQuery;

    /**
     * Extracts the data that the tool would use to generate a human-readable answer.
     * As part of its execution, retrieveData should create and persist {@link Genai.Query.Result.Source.AbstractSourceType}[sources] and
     * corresponding {@link Genai.Query.ResultToSourceRelation}[relations] that refer to the retrieved data.
     * @param spec
     *           A spec containing all relevant parameters for retrieving the data.
     * @return The data that the tool would use to generate a human-readable answer.
     */
    retrieveData(spec: Genai.Agent.Tool.DataRetriever.RetrieveDataSpec): Genai.Agent.Tool.DataRetriever.Output;

    /**
     * Formats an output from this tool's #retrieveData method into a string that could be passed to an llm answer.
     * @param spec
     *           The spec for formatting the data.
     * @return A string that could be passed to an llm to answer the user's query.
     */
    formatData(spec: Genai.Agent.Tool.DataRetriever.FormatDataSpec): string;

    /**
     * Perform any postprocessing on an {@link Genai.Query.Result} necessary for this tool
     */
    postProcessQueryResult(result: Genai.Query.Result): Genai.Query.Result;

    /**
     * This function should return a python function with both type hints for all parameters and the return value and
     * a useful docstring. These will be used by the planner to generate a plan.
     *
     * NOTE: The agent will create a 'child' {@link Genai.Query.Result} object available as `in_progress_result`
     * in the called function. If that Result object is not updated by the function, the agent will update it with the
     * answer and logs if any.
     *
     * The function should return a Python dictionary with the following (all optional) keys:
     *  1. 'answer': when the tool is giving a text answer to the input query, 'answer' should be the corresponding key
     *  2. 'rationale': giving a brief explanation of how the answer was derived
     *  3. 'logs': a dict of log keys and messages from the function's execution
     *  4. other key/value pairs (e.g. 'data_frame') that can be used in further steps
     *
     * e.g.
     * ```
     * def pyFuncForAgent(this):
     *   def convert_currencies(starting_currency: str, target_currency: str, starting_value: float) -> dict:
     *       """
     *       Converts a value from one currency to another.
     *       Args:
     *           starting_currency (str): The currency of the inital value
     *           target_currency (str): The currency to convert to
     *           starting_value (float): The value to convert
     *
     *       Returns:
     *           results: a dict with the rationale and the converted value
     *       """
     *       rate = this.getConversionRate(starting_currency, target_currency)
     *       converted_value = this.convertCurrency(starting_currency, target_currency, starting_value)
     *       rationale = f"The conversion rate from {starting_currency} to {target_currency} was {rate}." +
     *                    "{starting_value}x{rate}={converted_value}"
     *       return {"rationale": rationale, "answer": converted_value}
     *  return convert_currencies
     */
    pyFuncForAgent(): any;

    /**
     * Returns the native tool as defined in /genAiBase/resource/code/c3genai/plan_and_execute/components/toolkit/tool.py
     */
    nativeTool(): any;

    /**
     * This function should return a python function with both type hints for all parameters and the return value and
     * a useful docstring. These will be used by the planner to generate a plan.
     *
     * NOTE: The agent will create a 'child' {@link Genai.Query.Result} object which available as `in_progress_result`
     * in the called function.
     *
     * The function MUST return a Python dictionary with results that can be consumed by subsequent steps in the plan.
     * Example keys:
     *  1. 'answer': the result of executing the function that will be returned to the agent
     *  2. 'rationale' giving a brief explanation of how the answer was derived
     *  3.  other key/value pairs (e.g. 'data_frame') that can be used in further steps
     *
     * e.g.
     * ```
     * def toolWrapperForAgent(this):
     *   import pandas as pd
     *   def table_reasoning(query: str, dataframe: pd.DataFrame) -> dict:
     *       """
     *       Performs complex math and logical reasoning over a structured table.
     *       Args:
     *           query (str): Natural language query to get insights from a structured table.
     *               Should be phrased as an explicit question or command
     *               Examples:
     *                  - What is the correlation between column A and column B?
     *                  - Calculate the total amount of X by Y.
     *
     *       Returns:
     *           results: the result of the table reasoning query.
     *       """
     *       input = c3.Genai.Agent.Tool.Util.TableReasoning.Input.make(
     *           {
     *               "table": dataframe,
     *               "query": query,
     *           }
     *       )
     *       global in_progress_result
     *       tool_answer = this.doTableReasoning(
     *           input=input, inProgressResult=in_progress_result
     *       )
     *       return {"rationale": tool_answer.rationale, "answer": tool_answer.answer}
     *
     *   return table_reasoning
     */
    toolWrapperForAgent(): any;

    /**
     * Isolates stream handling.
     * Simply calls `Genai.UnstructuredQuery.Engine` and packs the result appropriately
     * @param input
     *           The input query. Note that this may not be exactly the same as the user's query, as
     *           it may have been preprocessed by the {@link Genai.Agent} before being passed to the tool.
     * @param inProgressResult
     *           The {@link Genai.Query.Result} being processed.
     * @return The stream of strings.
     */
    runForStreaming(input: string, inProgressResult: Genai.Query.Result, streamResponse?: string): Stream<string> | null;
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
