// TypeScript definitions for the C3 type Lambda.Engine

/**
 * @remarks this represents a value passed to a method that expects an instance of Lambda.Engine
 */
declare namespace Lambda {
  export interface IEngine {

    /**
     * The unique and required name of this instance.
     */
    name: string;

    /**
     * The unique and required id of this instance.
     */
    id: string;

    /**
     * Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
     *
     * For internal use only!
     *
     * This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
     * Value in config framework may be missing if the engine is been {@link #terminate terminated}.
     */
    _deploymentCache?: any;

    /**
     * Errors that are captured during engine start
     */
    _onStartError?: string | null;

    /**
     * Current context of this engine
     */
    context?: IMapBuilder<string | null, any> | null;
  }
}

/**
 * @remarks this represents a made instance of Lambda.Engine
 */
declare namespace Lambda {
  export class Engine extends Obj {

    /**
     * The unique and required name of this instance.
     */
    name: string;
    withName(name: string): Lambda.Engine;

    /**
     * The unique and required id of this instance.
     */
    id: string;
    withId(id: string): Lambda.Engine;

    /**
     * Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
     *
     * For internal use only!
     *
     * This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
     * Value in config framework may be missing if the engine is been {@link #terminate terminated}.
     */
    _deploymentCache?: any;
    with_deploymentCache(_deploymentCache: any): Lambda.Engine;

    /**
     * Errors that are captured during engine start
     */
    _onStartError?: string | null;
    with_onStartError(_onStartError: string | null): Lambda.Engine;

    /**
     * Current context of this engine
     */
    context?: MapBuilder<string | null, any> | null;
    withContext(context: IMapBuilder<string | null, any> | null): Lambda.Engine;

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
    static fromJson(json: any | null): Lambda.Engine | null;

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
    static fromJsonString(json: string | null): Lambda.Engine | null;

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
    static fromXmlString(xml: string | null): Lambda.Engine | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Lambda.Engine | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Lambda.Engine;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Lambda.Engine;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Lambda.Engine;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Lambda.Engine | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Lambda.Engine | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Lambda.Engine;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Lambda.Engine;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Lambda.Engine;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Lambda.Engine;

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
    withField(field: string, value: any, doNotConvert?: boolean): Lambda.Engine;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Lambda.Engine;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Lambda.Engine;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Lambda.Engine;

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
    withoutFieldAtPath(path: string): Lambda.Engine;

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
    withoutField(field: string | null): Lambda.Engine;

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
    withoutField(field: FieldType | null): Lambda.Engine;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Lambda.Engine;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Lambda.Engine;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Lambda.Engine;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Lambda.Engine;

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
    defaultField(field: string): Lambda.Engine;

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
    defaultField(field: FieldType): Lambda.Engine;

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
    unsetField(field: string): Lambda.Engine;

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
    unsetField(field: FieldType): Lambda.Engine;

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
    removeField(field: string): Lambda.Engine;

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
    removeField(field: FieldType): Lambda.Engine;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Lambda.Engine;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Lambda.Engine;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Lambda.Engine;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Lambda.Engine;

    mergeJson(json: any | null): Lambda.Engine;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Lambda.Engine;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Lambda.Engine;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Lambda.Engine | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Lambda.Engine | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Lambda.Engine | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Lambda.Engine | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Lambda.Engine | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Lambda.Engine | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Lambda.Engine | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Lambda.Engine | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Lambda.Engine | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Lambda.Engine;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Lambda.Engine;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Lambda.Engine;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Lambda.Engine;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Lambda.Engine;

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
    static make(fields: any, withDefaults?: boolean): Lambda.Engine;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Lambda.Engine | null;

    /**
     * Construct an instance with initial state.
     */
    static make(): Lambda.Engine;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Lambda.Engine;

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
    afterMake(): Lambda.Engine;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Lambda.Engine;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Lambda.Engine>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Lambda.Engine;

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
    singletonMap(): C3.Map<string | null, WithKey | null>;

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
    static fromString(s: string | null): Lambda.Engine | null;

    /**
     * Get the single instance of this Named Type by name.
     * @param name
     *         The unique name of the instance to retrieve.
     * @param failIfMissing
     *         If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
     *         returned.
     * @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
     *         retrieve instance from cache.
     */
    static forName(name: string | null, failIfMissing?: boolean): Lambda.Engine | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string | null, failIfMissing?: boolean): Lambda.Engine | null;

    /**
     * @return lambda to calculate target {@link Server server node} for {@link Action action} called on this
     * {@link Engine}.
     *
     * Used internally for dispatching.
     * @see #targetNode
     */
    static targetNodeFunc(methodType: MethodType): λFunction<C3.Map<string | null, any>, string> | null;

    /**
     * @return lambda to calculate target {@link App.ThreadPool thread pool} for {@link Action action} called on this
     * {@link Engine}.
     *
     * Used internally for dispatching.
     * @see #targetThreadPool
     */
    static targetThreadPoolFunc(methodType: MethodType): λFunction<C3.Map<string | null, any>, string> | null;

    /**
     * Deploys new {@link Engine engine} based on spec.
     *
     * If current node cannot run actions for the {@link Engine engine}, such actions will be routed to
     * {@link #targetNodes} for execution.
     *
     * You can use advanced options to control spinning up of {@link Engine engine} on {@link App.Node nodes}:
     * - Use {@link Engine.DeploySpec#autoStart} to control whether {@link Engine engine} should be started
     *   automatically on all {@link App.Node nodes} that match filter (See {@link Engine.DeploySpec#nodeRole nodeRole},
     *   {@link Engine.DeploySpec#altNodeRoles}, {@link Engine.DeploySpec#nodePools}).
     * - Use {@link Engine.DeploySpec#failActionIfEngineNotReady} to control behavior of {@link Action actions} routed to
     *   {@link #isHealthy unhealthy} {@link Engine engine}.
     * - Use {@link Engine.DeploySpec#initializingNodeAvoidanceDuration} to avoid routing of {@link Action actions} to newly added
     *   {@link App.Node nodes}. This helps to avoid routing of {@link Action actions} to {@link Engine engines} that
     *   have not yet finished initialization.
     *
     * @see activate
     * @see deactivate
     * @see Engine.Controller
     */
    static deploy(spec: Lambda.Engine.DeploySpec): Lambda.Engine;

    /**
     * Activate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    activate(): void;

    /**
     * Deactivate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    deactivate(): void;

    /**
     * Current state of this engine.
     */
    get state(): string | null;

    static threadPoolsSummary(engineTypeName: string, id: string): Engine.Summary | null;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    summaryHelper(): C3.Array<Engine.Summary | null>;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    summary(): Data;

    /**
     * Return summary information about current state of this {@link Engine} deployment on current {@link #targetNodes node}.
     */
    summarizeInstance(): Engine.Summary;

    /**
     * Return {@link App.Node.Thread.Info} for each {@link App.Node.Thread thread} that are running on given
     * {@link App.Node node} and belong to this {@link Engine engine} deployment.
     */
    summarizeThreads(node: string): Data;

    /**
     * @return list of errors that this {@link Engine} deployment has.
     */
    errors(): C3.Array<string | null>;

    /**
     * @return true if the {@link Engine} instance is started.
     */
    isRunning(): boolean;

    /**
     * @return true if the {@link Engine} instance is ready to serve requests.
     */
    isHealthy(): boolean;

    /**
     * @return true if the {@link Engine} instance specified by name is ready to serve requests.
     */
    static isHealthy(engineType: string, name: string): boolean;

    /**
     * @return true if the {@link Engine} instance is stopped.
     */
    isStopped(): boolean;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine}.
     *
     * If {@link Engine.Deployment} was removed from the config framework will return configuration with which the
     * {@link Engine} was deployed.
     */
    get deployment(): Lambda.Engine.Deployment;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine} based on config value.
     *
     * May be `null` if {@link Engine} is stopping. Use {@link #deployment} instead.
     */
    get configuredDeployment(): Lambda.Engine.Deployment;

    /**
     * @return deployment type for this engine
     */
    static deploymentType(): Type;

    /**
     * @return deployment spec for this engine
     */
    static deploySpecType(): Type;

    /**
     * Restarts this engine
     */
    restart(): Lambda.Engine;

    /**
     * Starts {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called first time any action is called on this {@link Engine} instance or by
     * {@link Engine.Controller} if {@link Engine.Deployment#autoStart} is `true`.
     *
     * Call to method idempotent and will return immediately if engine is {@link Engine.State.RUNNING}.
     *
     * If called from many threads simultaneously, calls will be blocked until some thread does start {@link Engine}.
     *
     * If start makes calls to other engines then expectation is that potential calls back from that engine into this one
     * will succeed.
     *
     * @param waitForReady If unset or `false` will return `null` immediately, without waiting for engine to be fully
     *           started or ready.
     * @param spec
     *           Wait specification that will be used in case waitForReady is set to `true`.
     * @return `null` if not waiting for ready and ready instance of the {@link Engine} otherwise.
     */
    start(waitForReady?: boolean, spec?: WaitableSpec | null): Lambda.Engine | null;

    doStart(): Lambda.Engine;

    /**
     * Stops {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called as part of C3 {@link App.Node} shutdown or by {@link Engine.Controller} if
     * {@link Engine.deployment deployment} {@link #terminate terminated} or {@link #deactivate deactivated}.
     *
     * This is where preparation for shutdown should happen and this is when this Engine should stop initiating any new
     * root actions to other Engines. E.g. all monitoring threads started by this Engine should be stopped here.
     *
     * Note that #stop will be called before #shutdown and expectation is that even after stop other methods of the engine
     * still continue to work. E.g. if Db.Engine is stopped it should still continue to process requests (because
     * another engine using Db.Engine may still be running).
     *
     * If stop fails, the graceful shutdown on C3 {@link App.Node} will be aborted.
     */
    stop(spec?: Engine.StopSpec | null): void;

    /**
     * Called as part of C3 App Node shutdown. Should free up all allocated resources. This function will not wait to
     * drain the queues and will interrupt currently running actions.
     */
    shutdown(): void;

    static stopEngineOnNode(engineName: string, spec?: Engine.StopSpec | null): boolean;

    /**
     * Optional callback that will be invoked after {@link #terminate}. Allows to do any additional cleanup that is
     * required for the engine.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return spec that will be used for {@link #deploy}
     */
    afterTerminate(spec?: Engine.StopSpec | null): void;

    /**
     * Terminates the engine. This will remove the {@link Engine.Deployment} and stop all running instances of the
     * {@link Engine}.
     *
     * @see #stop
     */
    terminate(spec?: Engine.StopSpec | null): void;

    /**
     * Update {@link Engine} instance to match {@link #deployment}.
     *
     * Will take no effect if {@link #deployment} stays the same. Usually be called from {@link Engine.Controller}.
     *
     * @see Engine.Controller
     */
    update(): void;

    /**
     * call `action` on a specific engine
     */
    call(action: Lambda<λFunction<Lambda.Engine, T | null> | null>): T | null;

    /**
     * Optional callback that will be invoked every time engine is started on an {@link App.Node}.
     * This callback is called outside of engine's dedicated ThreadPool, once per {@link App.Node}.
     *
     * @return engine with initialized field, or unmodified object.
     *
     * @see #start
     * @see #onEngineThreadStart
     */
    onStart(): Lambda.Engine;

    /**
     * Optional callback that will be invoked every time engine is stopped on an {@link App.Node}.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onEngineThreadStop
     */
    onStop(): void;

    /**
     * Optional callback that will be invoked from any new thread this Engine is used from.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * @see #start
     * @see #onStart
     */
    onEngineThreadStart(): void;

    /**
     * Optional callback that will be invoked from thread in which this engine was used when thread terminates.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onStop
     */
    onEngineThreadStop(): void;

    /**
     * Optional callback that will be invoked from {@link #update} if config changed.
     *
     * Called once per {@link App.Node}.
     *
     * @see #update
     */
    onUpdate(oldDeployment: Lambda.Engine.Deployment): void;

    /**
     * Returns `true` if engine can be started on provided `nodeId`.
     *
     * @see #targetNodes.
     */
    canRunOnNode(nodeId: string): boolean;

    /**
     * Optional callback that will be invoked at the beginning of {@link #deploy}. Allows to modify spec before it's used
     * for deployment.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return spec that will be used for {@link #deploy}
     */
    static beforeDeploy(spec: Lambda.Engine.DeploySpec): Lambda.Engine.DeploySpec;

    /**
     * If {@link Lambda.Engine.Deployment#exec exec} or {@link Lambda.Engine.Deployment#onThreadStart onThreadStart}
     * have an {@link Lambda#actionRequirement action requirement} for Python, a
     * {@link App.Node.ThreadPool.Config.Py.Simple simple Python config} will be made to persist those Lambdas' runtimes.
     *
     * NOTE: The above behavior will not occur if a non {@link App.Node.ThreadPool.Config.Py.Simple simple Python config}
     * is already configured on the spec.
     */
    static specToConfigs(spec: Lambda.Engine.DeploySpec): C3.Array<Config>;

    /**
     * Internal method that is used to identify target node for calling this {@link Engine}.
     *
     * THis implementation will try to use current node if it's in list of {@link targetNodes} or will use
     * {@link App#availableNode some available} {@link App.Node} from {@link #targetNodes}.
     *
     * Sub-types can override this logic if customization is needed.
     * Method return `null` if no dispatching is needed.
     */
    targetNode(): App.Node | null;

    /**
     * Internal method that is used to query all target node for this Engine; effectively all nodes in #targetNodePools.
     *
     * @param excludeMe
     *           If set to `true` list will not include current app node where this action is called from.
     * @param alwaysConstruct
     *           If set to `true` method returns all {@link App.Node nodes} where this {@link Engine} can be executed
     *           even if it can be executed on all {@link App.Node nodes} within the {@link App}.
     * @return list of {@link App.Node nodes} in which this {@link Engine} can run. If `alwaysConstruct=false` and engine
     *         can be executed on all {@link App.Node nodes} within the {@link App}.
     */
    targetNodes(excludeMe?: boolean, alwaysConstruct?: boolean): C3.Array<App.Node | null>;

    /**
     * Internal method that is used to identify target node-pools for this Engine; by default it'll use
     * Engine.Deployment#nodeRole or Engine.Deployment#nodePools but sub-types can override this logic
     *
     * Method returns null or empty array if {@link Engine} can run on any {@link App.Node}.
     */
    targetNodePools(): C3.Array<App.NodePool | null>;

    /**
     * Returns {@link App.Node.ThreadPool} responsible for running actions for this {@link Engine},
     * `null` if {@link Engine.Deployment#dedicatedThreadPool} is `false`.
     *
     * @see Engine.Deployment#dedicatedThreadPool
     */
    get targetThreadPool(): App.Node.ThreadPool | null;

    /**
     * List {@link Engine engines} {@lik #deploy deployed} in an {@link App}.
     *
     * @see: #deploy
     * @see: #terminate
     */
    static list(): C3.Array<Lambda.Engine>;

    /**
     * Returns {@link AppId id} of an {@link App} in which this {@link Engine.Deployment} is running.
     */
    get appId(): string;

    /**
     * Waits for the deployment to become ready across all nodes. Uses {@link #isReadyOnAllNodes} to make the check.
     *
     * This wait will complete only if there at least one node assigned to the engine.
     */
    waitForDeployment(waitSpec?: WaitSpec | null): boolean;

    /**
     * Returns true if all running nodes for the engine are healthy.
     *
     * If no nodes assigned to the engine returns `false`.
     */
    isReadyOnAllNodes(): boolean;

    /**
     * Validates that all resources required by the engine are available.
     * If the node that runs the engine does not have the required resources, eg: GPUs specified in the HardwareProfile
     * of NodePool, the engine will not start and the error will be added to the engine's error list and are available
     * via {@link #summary}.
     */
    validateOnStart(): void;

    /**
     * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
     * The value must be of the correct type if doNotConvert flag is true.
     *
     * @param name
     *           of the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, attempt to convert the value to match the field's type
     * @return this Obj
     */
    setField(field: string, value: any, doNotConvert?: boolean): Lambda.Engine;

    /**
     * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
     * The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, attempt to convert the value to match the field's type
     * @return this Obj
     */
    setField(field: FieldType, value: any, doNotConvert?: boolean): Lambda.Engine;

    /**
     * Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
     * field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
     * properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
     * collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
     * key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
     * collection field. This has the same appearance as if the collection field were assigned from a previously
     * unassigned value.
     *
     * Example:
     * ```type
     * type A mixes MutableObj {
     *   onChange: ~
     *   b: [string]
     *   c: map<string, int>
     *   d: D
     * }
     * type D mixes MutableObj {
     *   onChange: ~
     *   e: string
     * }
     * ```
     * ```js
     * var a = A.make({b: ['hello', 'goodbye'], d: {}});
     * a.b[1] = 'World'; // 1
     * a.c['hello'] = 'world'; // 2
     * a.d.e = 'hello' // 3
     * a.b.pop(); // 4
     * ```
     * `A.onChange` should be called four times:
     *   1. when the field `b` changed - the FieldPath will be "b[1]".
     *   2. when the field `c` changed - the FieldPath will be "c.hello".
     *   3. when `d` changed - the FieldPath will be "d.e".
     *   4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
     *
     * `D.onChange` should be called once - the FieldPath will be `e`.
     *
     * Note that if multiple elements of a child collection are changed, you will get multiple field paths.
     *
     * @param changed paths to fields that changed
     *
     * @see #onEdit
     */
    onChange(changed: C3.Array<string | null>): void;

    /**
     * Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
     * contains more information about the values which changed, including their prior values. This allows a full
     * difference to be calculated if desired. Note that maintaining this state is much more costly than simple
     * notification via #onChange and should only be used if truly required.
     *
     * @param edits a list of what changed and the prior values
     *
     * @see #onChange
     */
    onEdit(edits: Obj): void;

    /**
     * Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
     *
     * @param action the lambda to invoke that makes changes without notification
     */
    withoutChangeEvent(action: λConsumer<Mutable | null>): void;

    /**
     * Executes core logic of this engine
     */
    exec(...args: any[]): any;

    /**
     * Implementation of {@link #exec}.
     */
    doExec(args?: C3.Array<any>): any;

    /**
     * Sets context variable on this engine
     */
    set(name: string, value?: any): T | null;

    /**
     * Gets context variable on this engine
     */
    get(name: string): T | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
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
