// TypeScript definitions for the C3 type GenaiCore.Llm.Completion.LiteLlm

/**
 * Private type to provide common implementation for litellm-backed models.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenaiCore.Llm.Completion.LiteLlm
 */
declare namespace GenaiCore.Llm.Completion {
  export interface ILiteLlm {

    /**
     * Default values to provide for the task. Caller-provided option values (e.g. `completion#options`)
     * will be merged and take precedence.
     */
    defaultOptions?: any;

    /**
     * The model name to use for the LLM service.
     */
    model: string;

    /**
     * Authentication information to use for the LLM service.
     * If specified, then the first of {@link GenaiCore.Llm.Auth#flattenedAuths} will be chosen.
     * NOTE: if this is used as part of {@link GenaiCore.Llm.Client}, then {@link GenaiCore.Llm.Client#router}
     * will determine how to route between multiple auths.
     *
     * If unspecified, then the precedence will be:
     * 1. Previously used auth, if available.
     * 2. {@link #defaultAuth}.
     * 3. < Error >
     */
    auth?: IGenaiCore.Llm.Auth;

    /**
     * Pre- and post-processing functions to use on the input and output
     * of the LLM service, respectively.
     */
    processor?: IGenaiCore.Llm.Processor;
  }
}

/**
 * Private type to provide common implementation for litellm-backed models.
 *
 * @remarks this represents a made instance of GenaiCore.Llm.Completion.LiteLlm
 */
declare namespace GenaiCore.Llm.Completion {
  export class LiteLlm extends Obj  {

    /**
     * Default values to provide for the task. Caller-provided option values (e.g. `completion#options`)
     * will be merged and take precedence.
     */
    readonly defaultOptions?: any;
    withDefaultOptions(defaultOptions: any | null): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * The model name to use for the LLM service.
     */
    readonly model: string;
    withModel(model: string): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Authentication information to use for the LLM service.
     * If specified, then the first of {@link GenaiCore.Llm.Auth#flattenedAuths} will be chosen.
     * NOTE: if this is used as part of {@link GenaiCore.Llm.Client}, then {@link GenaiCore.Llm.Client#router}
     * will determine how to route between multiple auths.
     *
     * If unspecified, then the precedence will be:
     * 1. Previously used auth, if available.
     * 2. {@link #defaultAuth}.
     * 3. < Error >
     */
    readonly auth?: GenaiCore.Llm.Auth;
    withAuth(auth: IGenaiCore.Llm.Auth | null): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Pre- and post-processing functions to use on the input and output
     * of the LLM service, respectively.
     */
    readonly processor?: GenaiCore.Llm.Processor;
    withProcessor(processor: IGenaiCore.Llm.Processor | null): GenaiCore.Llm.Completion.LiteLlm;

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
    static fromJson(json: any): GenaiCore.Llm.Completion.LiteLlm | null;

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
    static fromJsonString(json: string): GenaiCore.Llm.Completion.LiteLlm | null;

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
    static fromXmlString(xml: string): GenaiCore.Llm.Completion.LiteLlm | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): GenaiCore.Llm.Completion.LiteLlm | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<GenaiCore.Llm.Completion.LiteLlm>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<GenaiCore.Llm.Completion.LiteLlm>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): GenaiCore.Llm.Completion.LiteLlm;

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
    withField(field: string, value: any, doNotConvert?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    withoutFieldAtPath(path: string): GenaiCore.Llm.Completion.LiteLlm;

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
    withoutField(field: string): GenaiCore.Llm.Completion.LiteLlm;

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
    withoutField(field: FieldType): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): GenaiCore.Llm.Completion.LiteLlm;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): GenaiCore.Llm.Completion.LiteLlm;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): GenaiCore.Llm.Completion.LiteLlm;

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
    defaultField(field: string): GenaiCore.Llm.Completion.LiteLlm;

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
    defaultField(field: FieldType): GenaiCore.Llm.Completion.LiteLlm;

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
    unsetField(field: string): GenaiCore.Llm.Completion.LiteLlm;

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
    unsetField(field: FieldType): GenaiCore.Llm.Completion.LiteLlm;

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
    removeField(field: string): GenaiCore.Llm.Completion.LiteLlm;

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
    removeField(field: FieldType): GenaiCore.Llm.Completion.LiteLlm;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): GenaiCore.Llm.Completion.LiteLlm;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): GenaiCore.Llm.Completion.LiteLlm;

    mergeJson(json: any): GenaiCore.Llm.Completion.LiteLlm;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<GenaiCore.Llm.Completion.LiteLlm>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<GenaiCore.Llm.Completion.LiteLlm>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<GenaiCore.Llm.Completion.LiteLlm>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<GenaiCore.Llm.Completion.LiteLlm>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    static make(fields: any, withDefaults?: boolean): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): GenaiCore.Llm.Completion.LiteLlm;

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
    afterMake(): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<GenaiCore.Llm.Completion.LiteLlm> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): GenaiCore.Llm.Completion.LiteLlm;

    /**
     * @param options
     *          user provided options to the task
     * @return options merged with {@link #defaultOptions} giving precedence to the former.
     */
    mergeDefaultOptions(options?: any): any | null;

    /**
     * @param optionsBatch
     *          user provided list of options to the task
     * @return options merged with {@link #defaultOptions} giving precedence to the former.
     */
    mergeDefaultOptionsBatch(optionsBatch?: Array_Type<any>): any | null;

    /**
     * Helper function to encode the content of an image at the given path in base64 and format it such that it corresponds
     * to the OpenAi standard for base64 encoded image inputs: {@link https://platform.openai.com/docs/guides/vision}.
     *
     * @param path
     *          path in the C3 Filesystem or caller-local filesystem.
     * @param mimeType
     *          optional MIME type, e.g. "image/png". If not provided, then it will be inferred from the file extension.
     * @return base64 encoded image input for the OpenAi chat completion API.
     */
    static encodedImageFromPath(path: string, mimeType?: string): string;

    /**
     * For more details on each option, see the API reference for your LLM provider or generally
     * {@link https://platform.openai.com/docs/api-reference/chat}.
     * To set options that will be used on every call,
     * {@see #defaultOptions}.
     *
     * **NOTE** If the call to completion is not going to execute in-engine, then `options['returnJson']` must be true.
     *
     * Example
     * ```py
     * resp = my_completion.completion(
     *   messages=[
     *     {"content": "Hello world?", "role": "user"}
     *   ],
     *   options={
     *     "max_tokens": 10, "temperature": 0.3, "stream": True
     *   }
     * )
     * ```
     *
     * NOTE: For calls that stay in engine, the return value will have a native object.
     *
     * @param messages
     *          List of messages comprising the conversation so far.
     * @param options
     *          Additional kwargs for the completion API. If the specific LLM provider has
     *          different kwargs than the OpenAi API, then those will also be passed along
     *          to the native client. To set options that will be used on every call,
     * {@see #defaultOptions}.
     *          **NOTE** If the call to completion is not going to execute in-engine, then `options['returnJson']` must be true.
     * @return response in native format if called in-engine and without returnJson set, json otherwise
     */
    completion(messages: any, options?: any): any;

    /**
     * @inheritdoc
     *
     * For models whose implementation is backed by litellm, this method should be reclaimed to specify
     * the required runtime (that contains provider-specific libraries). No implementation or changes to python code
     * should be required.
     * e.g. for {@link GenaiCore.Llm.Bedrock.Model} which requires libraries in `py-bedrock_litellm`,
     * the claim is `doCompletion: ~ from super py-bedrock_litellm`
     */
    doCompletion(messages: any, options?: any): any;

    /**
     * This function is the same as {@link #completion}, except that it accepts a list of completion inputs and corresponding options.
     * This function is synchronous, blocking, and will do best-effort parallelism when calling the individual completions.
     *
     * @param messagesBatch
     *          input for which to do completion. One {@link #completion} command will be executed for each element in `messagesBatch`.
     * @param optionsBatch
     *          optional list of the options for each completion. The order of elements should match the corresponding element in `messagesBatch`.
     *          If only 1 option is specified, then it will be used for all elements in `messagesBatch`.
     * @param spec
     *          optional customizations for the `completionBatch`.
     * @return a list of responses, one from each {@link #completion}. Each response will be in the native format if called in-engine
     *          and without `returnJson` set, json otherwise. If an error occurs for a response, the error will be caught, and the
     *          exception object will be returned in the response list.
     */
    completionBatch(messagesBatch: Array_Type<Array_Type<any>>, optionsBatch?: Array_Type<any>, spec?: GenaiCore.Llm.CompletionBatchSpec): Array_Type<any>;

    /**
     * Submit a completion job which typically finishes in 24 hours, but will not time out. Mainly used for offline completion to save cost. For more details,
     * see {@link https://platform.openai.com/docs/api-reference/batch}.
     * To set options that will be used on every call, see {@link #defaultOptions}. Note that this will only be applied when optionsBatch is empty or an array of single value (where we will merge the options).
     *
     * @param input
     *         A list of messages in json format
     *         e.g.
     *         ```py
     *         messages = [
     *           [{"role": "user", "content": "What's the time in UTC format? "}, {"role": "developer", "content": "You are a helpful assistant that answers programming questions"}],
     *           [{"role", "user", "content": "When was Open AI founded?"}]
     *         ]
     *         ```
     *         or a jsonl file that follows corresponding cloud provider requirement, living in c3 file system or on disk as a native python file
     *         e.g. {@link https://platform.openai.com/docs/guides/batch#1-preparing-your-batch-file OpenAI} or {@link https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/batch-prediction-gemini#prepare_your_inputs VertexAI}.
     * @param optionsBatch
     *          optional list of the options for each completion. The order of elements should match the corresponding element in input.
     *          If only 1 option is specified, then it will be used for all elements in input.
     *          Note that this is only useful when the input is list of messages and will be ignored if input is a file.
     * @param spec
     *         optional customizations for the `submitCompletionJob`.
     * @return upserted instance of concrete subtype of {@link GenaiCore.Llm.BatchRequestJob}, e.g. {@link GenaiCore.Llm.AzureOpenAi.BatchRequestJob}
     */
    submitCompletionJob(input?: Array_Type<Array_Type<any>> | string, optionsBatch?: Array_Type<any>, spec?: GenaiCore.Llm.CompletionJobSpec): GenaiCore.Llm.BatchRequestJob;

    /**
     * @return whether this supports image inputs for the {@link #completion} API. The default implementation returns false.
     */
    supportsVision(): boolean;

    /**
     * @return whether this supports async batch completion. The default implementation returns false.
     */
    supportsCompletionJob(): boolean;

    /**
     * @return the default auth instance for this model. This is typically used when
     *         {@link #auth} is not provided.
     */
    defaultAuth(): GenaiCore.Llm.Auth | null;

    /**
     * @return {@link #defaultAuth}, if {@link #auth} is not set.
     *          If the auth instance represents a "keychain" of multiple auths,
     *          then the first is selected. If auth is a single auth, then it is returned.
     */
    firstAuth(): GenaiCore.Llm.Auth;

    /**
     * @param key
     *         the key under which the native client is cached.
     * @return the cached native client, if available, else null.
     */
    cachedNativeClient(key: string): any | null;

    /**
     * Populates the cache with the provided native client object.
     *
     * @param key
     *         the key under which the native client is cached.
     * @param client
     *         the native client object to store.
     */
    putCachedNativeClient(key: string, client: any): void;

    /**
     * Clears the native client cache. When called on `GenaiCore.Llm.Model`, this will clear the cache for all
     * subtypes. When called on a specific subtype, it will clear the cache for that subtype only (and not any
     * subtypes of that subtype).
     *
     * This should be reclaimed and implemented by all subtypes which have their own caching mechanism
     * outside of #putCachedNativeClient and #cachedNativeClient.
     */
    static clearCachedNativeClients(): void;

    /**
     * @return the details required to use this model via `litellm`.
     */
    static providerMapping(): GenaiCore.Llm.LiteLlm.ProviderMapping;

    /**
     * @return the type of {@link GenaiCore.Llm.Auth} to use for the subtype of model
     */
    static authType(): Type;

    /**
     * @return the type of {@link GenaiCore.Llm.BatchRequestJob} to use for the subtype of model.
     */
    static batchRequestJobType(): Type;

    /**
     * @return the litellm model name.
     */
    modelName(): string | null;

    /**
     * @return cloud provider name of the model, usually used as litellm's model prefix.
     */
    provider(): string | null;

    /**
     * Internal helper function to invoke litellm action by name generically.
     * @param action one of LiteLLM actions defined in {@link GenaiCore.Llm.LiteLlm.Action}
     * @param kwargs keyword arguments passed to LiteLLM action
     * @return result of the LiteLLM action
     */
    liteLlmAction(action: string, kwargs?: any): any | null;

    /**
     * Internal helper function called by {@link GenaiCore.PrivilegedAction#getSecretInvokeTaskWithAuth} to call the
     * litellm actions with the provided auth **that will have the auth secrets**.
     * @param auth
     *        the auth to use for the action
     * @param action
     *        one of LiteLLM actions defined in {@link GenaiCore.Llm.LiteLlm.Action}
     * @param kwargs
     *        keyword arguments passed to LiteLLM action
     * @return result of the LiteLLM action
     */
    liteLlmActionWithAuth(auth: GenaiCore.Llm.Auth, action: string, kwargs?: any): any | null;

    /**
     * Internal helper function called by {@link GenaiCore.PrivilegedAction#getSecretInvokeTaskWithAuth} to call the
     * completion API with the provided auth **that will have the auth secrets**.
     *
     * For models whose implementation is backed by litellm, this method should be reclaimed to specify
     * the required runtime (that contains provider-specific libraries). No implementation or changes to python code
     * should be required.
     * e.g. for {@link GenaiCore.Llm.Bedrock.Model} which requires libraries in `py-bedrock_litellm`,
     * the claim is `completionWithAuth: ~ from super py-bedrock_litellm`
     *
     * @param auth
     *          The auth to use for the completion
     * @param messages
     *          The messages to use for the completion
     * @param options
     *          Any additional options to use for the completion
     *
     * @return the completion result
     */
    completionWithAuth(auth: GenaiCore.Llm.Auth, messages: Array_Type<any>, options?: any): any;

    /**
     * Internal helper function called by {@link GenaiCore.PrivilegedAction#getSecretInvokeTaskWithAuth} to call the
     * batch completion API with the provided auth **that will have the auth secrets**.
     *
     * @param auth
     *          the auth to use for the completion job
     * @param inputFilePath
     *          the path to the input file
     * @param spec
     *          the spec to use for the completion job
     *
     * @return the job instance by the cloud provider
     */
    submitCompletionJobWithAuth(auth: GenaiCore.Llm.Auth, inputFilePath: string, spec?: GenaiCore.Llm.CompletionJobSpec): any;
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
