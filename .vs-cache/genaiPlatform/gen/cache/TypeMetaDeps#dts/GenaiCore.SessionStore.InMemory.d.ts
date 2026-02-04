// TypeScript definitions for the C3 type GenaiCore.SessionStore.InMemory

/**
 * An in-memory session store. This session store is **NOT** distributed or safe to use on its own
 * for use cases where there are multiple instances of the same session client. It is designed for development
 * and for use in combination with a distributed session store like {@link GenaiCore.SessionStore.Kv}.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenaiCore.SessionStore.InMemory
 */
declare namespace GenaiCore.SessionStore {
  export interface IInMemory {

    /**
     * The serializer to use on each element of `state` in {@link #updateState}. The symmetric
     * deserialization will be used on each element of `state` returned from {@link #getState} prior
     * to returning to caller.
     * If no serializer is provided, then a default serializer will be selected.
     */
    serializer: IGenaiCore.SessionStore.Serializer;

    /**
     * The retention policy for {@link GenaiCore.SessionStore.Persistable#cleanUpSessions} that determines which sessions to
     * retain and which to clean up via {@link #deleteStateBatch}.
     * If no retention policy is provided, then a default simple time-to-live policy will be
     * selected {@link GenaiCore.SessionStore.RetentionPolicy.Ttl}.
     */
    retentionPolicy?: IGenaiCore.SessionStore.RetentionPolicy;

    /**
     * Whether to disable tracing instrumentation for this session store.
     */
    disableTracingInstrumentation?: boolean;

    /**
     * The maximum number of sessions to retain in memory. If the number of sessions reaches this value,
     * the least-recently used session will be removed to make room for each new session.
     * If set to -1, then there is no limit on the number of sessions.
     */
    maxNumberSessions?: number;

    /**
     * The maximum total memory in MB to use for storing session state. If the total memory used by all sessions
     * exceeds this value, the least-recently used session will be removed (repeatedly if necessary) until the
     * total memory used is below this value.
     */
    maxTotalMemoryMB?: number;

    /**
     * The id of the store. This is necessary to differentiate between multiple instances.
     *
     * **NOTE** It is the responsibility of the user to ensure that the id is unique within a given Python process/thread.
     */
    id: string;
  }
}

/**
 * An in-memory session store. This session store is **NOT** distributed or safe to use on its own
 * for use cases where there are multiple instances of the same session client. It is designed for development
 * and for use in combination with a distributed session store like {@link GenaiCore.SessionStore.Kv}.
 *
 * @remarks this represents a made instance of GenaiCore.SessionStore.InMemory
 */
declare namespace GenaiCore.SessionStore {
  export class InMemory extends Obj  {

    /**
     * The serializer to use on each element of `state` in {@link #updateState}. The symmetric
     * deserialization will be used on each element of `state` returned from {@link #getState} prior
     * to returning to caller.
     * If no serializer is provided, then a default serializer will be selected.
     */
    readonly serializer: GenaiCore.SessionStore.Serializer;
    withSerializer(serializer: IGenaiCore.SessionStore.Serializer): GenaiCore.SessionStore.InMemory;

    /**
     * The retention policy for {@link GenaiCore.SessionStore.Persistable#cleanUpSessions} that determines which sessions to
     * retain and which to clean up via {@link #deleteStateBatch}.
     * If no retention policy is provided, then a default simple time-to-live policy will be
     * selected {@link GenaiCore.SessionStore.RetentionPolicy.Ttl}.
     */
    readonly retentionPolicy?: GenaiCore.SessionStore.RetentionPolicy;
    withRetentionPolicy(retentionPolicy: IGenaiCore.SessionStore.RetentionPolicy | null): GenaiCore.SessionStore.InMemory;

    /**
     * Whether to disable tracing instrumentation for this session store.
     */
    readonly disableTracingInstrumentation?: boolean;
    withDisableTracingInstrumentation(disableTracingInstrumentation: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * The maximum number of sessions to retain in memory. If the number of sessions reaches this value,
     * the least-recently used session will be removed to make room for each new session.
     * If set to -1, then there is no limit on the number of sessions.
     */
    readonly maxNumberSessions?: number;
    withMaxNumberSessions(maxNumberSessions: number | null): GenaiCore.SessionStore.InMemory;

    /**
     * The maximum total memory in MB to use for storing session state. If the total memory used by all sessions
     * exceeds this value, the least-recently used session will be removed (repeatedly if necessary) until the
     * total memory used is below this value.
     */
    readonly maxTotalMemoryMB?: number;
    withMaxTotalMemoryMB(maxTotalMemoryMB: number | null): GenaiCore.SessionStore.InMemory;

    /**
     * The id of the store. This is necessary to differentiate between multiple instances.
     *
     * **NOTE** It is the responsibility of the user to ensure that the id is unique within a given Python process/thread.
     */
    readonly id: string;
    withId(id: string): GenaiCore.SessionStore.InMemory;

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
    static fromJson(json: any): GenaiCore.SessionStore.InMemory | null;

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
    static fromJsonString(json: string): GenaiCore.SessionStore.InMemory | null;

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
    static fromXmlString(xml: string): GenaiCore.SessionStore.InMemory | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): GenaiCore.SessionStore.InMemory | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): GenaiCore.SessionStore.InMemory;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenaiCore.SessionStore.InMemory;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<GenaiCore.SessionStore.InMemory>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<GenaiCore.SessionStore.InMemory>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): GenaiCore.SessionStore.InMemory;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenaiCore.SessionStore.InMemory;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): GenaiCore.SessionStore.InMemory;

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
    withField(field: string, value: any, doNotConvert?: boolean): GenaiCore.SessionStore.InMemory;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): GenaiCore.SessionStore.InMemory;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): GenaiCore.SessionStore.InMemory;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): GenaiCore.SessionStore.InMemory;

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
    withoutFieldAtPath(path: string): GenaiCore.SessionStore.InMemory;

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
    withoutField(field: string): GenaiCore.SessionStore.InMemory;

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
    withoutField(field: FieldType): GenaiCore.SessionStore.InMemory;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): GenaiCore.SessionStore.InMemory;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): GenaiCore.SessionStore.InMemory;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): GenaiCore.SessionStore.InMemory;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): GenaiCore.SessionStore.InMemory;

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
    defaultField(field: string): GenaiCore.SessionStore.InMemory;

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
    defaultField(field: FieldType): GenaiCore.SessionStore.InMemory;

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
    unsetField(field: string): GenaiCore.SessionStore.InMemory;

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
    unsetField(field: FieldType): GenaiCore.SessionStore.InMemory;

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
    removeField(field: string): GenaiCore.SessionStore.InMemory;

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
    removeField(field: FieldType): GenaiCore.SessionStore.InMemory;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): GenaiCore.SessionStore.InMemory;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): GenaiCore.SessionStore.InMemory;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): GenaiCore.SessionStore.InMemory;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): GenaiCore.SessionStore.InMemory;

    mergeJson(json: any): GenaiCore.SessionStore.InMemory;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): GenaiCore.SessionStore.InMemory;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<GenaiCore.SessionStore.InMemory>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<GenaiCore.SessionStore.InMemory> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<GenaiCore.SessionStore.InMemory> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<GenaiCore.SessionStore.InMemory>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<GenaiCore.SessionStore.InMemory> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, GenaiCore.SessionStore.InMemory> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, GenaiCore.SessionStore.InMemory> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<GenaiCore.SessionStore.InMemory>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<GenaiCore.SessionStore.InMemory>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): GenaiCore.SessionStore.InMemory;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): GenaiCore.SessionStore.InMemory;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): GenaiCore.SessionStore.InMemory;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): GenaiCore.SessionStore.InMemory;

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
    static make(fields: any, withDefaults?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): GenaiCore.SessionStore.InMemory;

    /**
     * @inheritdoc
     *
     * overridden to enforce that #id is populated
     */
    static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): GenaiCore.SessionStore.InMemory;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): GenaiCore.SessionStore.InMemory;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<GenaiCore.SessionStore.InMemory> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): GenaiCore.SessionStore.InMemory;

    /**
     * This API initializes a new session with corresponding empty state to be used with other
     * APIs like {@link #updateState} and {@link #getState}.
     *
     * @param name
     *          optional name for session creation. This name must be unique within the
     *          scope of this session store. It will be combined with the unique session
     *          store id to form a globally unique id for the session.
     *          If unspecified, then a UUID will be generated.
     * @return the newly initialized session with empty state.
     */
    initState(name?: string): GenaiCore.Session;

    /**
     * @param session
     *          the session to update the state for.
     * @param state
     *          the new state. This will replace the old state completely, **not merge**!
     * @return the new session object after the update. This holds important version information, so
     *          be sure to use the new one for the next `getState` operation!
     */
    updateState(session: GenaiCore.Session, state: Map_Type<string, any>): GenaiCore.Session;

    /**
     * @inheritdoc
     *
     * Because this session store is in-memory, the version returned is always 0.
     * When used in combination with a distributed session store, the persisted session's version should
     * be included with the state stored in the value stored by `updateState`.
     *
     * e.g.
     * ```python
     * external_version = external_store.updateState(sessionId, state)
     * in_memory_store.updateState(sessionId, (external_version, state))
     * ```
     */
    doUpdateState(session: GenaiCore.Session, state: Map_Type<string, any>): GenaiCore.Session;

    /**
     * @param session
     *          the session to get the state for.
     * @return the state associated with the session.
     */
    getState(session: GenaiCore.Session): Map_Type<string, any> | null;

    /**
     * This API is the same as {@link #getState} and is called from the default implementation of {@link #getState}.
     * This function must be overridden by concrete implementations of {@link GenaiCore.SessionStore}, because {@link #getState}
     * has extra boiler-plate implementation that does, for example, logging.
     *
     * @param session
     *          the session to get the state for.
     * @return the state associated with the session.
     */
    doGetState(session: GenaiCore.Session): Map_Type<string, any> | null;

    /**
     * @param sessions
     *          the sessions to delete. The state corresponding to each session will also be deleted.
     * @return the number of sessions deleted.
     */
    deleteStateBatch(sessions: Array_Type<GenaiCore.Session>): number;

    /**
     * Deletes all sessions and all associated state from this session store.
     *
     * @param confirm
     *          user must specify `true` to delete all state for this session store.
     * @return the number of sessions deleted.
     */
    deleteAllState(confirm: boolean): number;

    /**
     * @inheritdoc
     *
     * NOTE: because this session store is in-memory, all of the sessions are always returned, regardless
     * of `offset` and `limit` options provided in the spec.
     */
    sessions(spec?: GenaiCore.SessionStore.SessionsSpec): Map_Type<string, GenaiCore.Session> | null;

    /**
     * @param id
     *          id of the session to return.
     * @return the session instance with the provided id, or null if none are found.
     */
    sessionForId(id: string): GenaiCore.Session | null;
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
