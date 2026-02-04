// TypeScript definitions for the C3 type Data.Lazy

/**
 * Internal instance of {@link Data} as partially applied function.
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Lazy
 */
declare namespace Data {
  export interface ILazy {

    /**
     * A dummy string used as cache key when materializing a stateless {@link Data.Lazy}.
     * Materializing a stateful {@link DataRef} will use dataset().id() as cache key.
     */
    STATELESS_CACHE?: string | null;

    /**
     * Target type of the static static function returning a DataImpl subtype, or instance of a target type for member function
     * returning {@link Data}
     */
    this: any;

    /**
     * Target action returning DataImpl
     */
    action: string;

    /**
     * Applied arguments
     */
    args?: C3.Map<string | null, any> | {[key: string | null]: any};

    /**
     * The inferred output column types of this lazy instance, the key is the name of the column and the value is the c3
     * ValueType of that column. This output type can be used to decide what is the correct column type in python. Note that
     * this field is populated when creating the lazy instance, there are two cases:
     * 1. If the lazy instance is a {@link Data.FeatureSet}, this field is derived from the {@link Feature.Set#_columns};
     * 2. If the lazy instance is from {@link Evaluatable#eval eval}, this field is derived from the {@link EvalSpec}, which
     *    may not be accurate in certain corner cases, i.e. this inferred output type does not match the actual returned data
     *    column types exactly. In this case, the data will be returned as it is.
     */
    _inferredOutType?: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null};

    /**
     * Prefix to use for loading files from the client `local` folder
     *
     * see {@link Data#read_csv}
     */
    LOCAL_FOLDER_PREFIX?: string | null;
  }
}

/**
 * Internal instance of {@link Data} as partially applied function.
 *
 * @remarks this represents a made instance of Data.Lazy
 */
declare namespace Data {
  export class Lazy extends Obj {

    /**
     * A dummy string used as cache key when materializing a stateless {@link Data.Lazy}.
     * Materializing a stateful {@link DataRef} will use dataset().id() as cache key.
     */
    readonly STATELESS_CACHE?: string | null;
    withSTATELESS_CACHE(STATELESS_CACHE: string | null): Data.Lazy;

    /**
     * Target type of the static static function returning a DataImpl subtype, or instance of a target type for member function
     * returning {@link Data}
     */
    readonly this: any;
    withThis(this_: any): Data.Lazy;

    /**
     * Target action returning DataImpl
     */
    readonly action: string;
    withAction(action: string): Data.Lazy;

    /**
     * Applied arguments
     */
    readonly args?: C3.Map<string | null, any>;
    withArgs(args: C3.Map<string | null, any> | {[key: string | null]: any}): Data.Lazy;

    /**
     * The inferred output column types of this lazy instance, the key is the name of the column and the value is the c3
     * ValueType of that column. This output type can be used to decide what is the correct column type in python. Note that
     * this field is populated when creating the lazy instance, there are two cases:
     * 1. If the lazy instance is a {@link Data.FeatureSet}, this field is derived from the {@link Feature.Set#_columns};
     * 2. If the lazy instance is from {@link Evaluatable#eval eval}, this field is derived from the {@link EvalSpec}, which
     *    may not be accurate in certain corner cases, i.e. this inferred output type does not match the actual returned data
     *    column types exactly. In this case, the data will be returned as it is.
     */
    readonly _inferredOutType?: C3.Map<string | null, ValueType | null>;
    with_inferredOutType(_inferredOutType: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}): Data.Lazy;

    /**
     * Prefix to use for loading files from the client `local` folder
     *
     * see {@link Data#read_csv}
     */
    readonly LOCAL_FOLDER_PREFIX?: string | null;
    withLOCAL_FOLDER_PREFIX(LOCAL_FOLDER_PREFIX: string | null): Data.Lazy;

    /**
     * Visits this {@link DataVisitable} instance using provided {@link DataVisitor}
     *
     * @param visitor
     *        DataVisitor that implements visitation of this DataVisitable instance
     * @param name
     *        parameter or field name of currently visited {@link DataVisitable} instance
     * @param ctx
     *        state that is passed along with visitor
     */
    visit(visitor: Data.Visitor<C> | null, ctx: C | null): C | null;

    /**
     * String-based representation of instance of this type.
     */
    toString(): string | null;

    /**
     * Generically handles all static lazy methods.
     */
    static _exec(action: Action): any;

    /**
     * Convert the internal object representation to a JSON object.
     *
     * @return JSON object representation
     *
     * @see #fromJson
     */
    toJson(): any;

    toJson(include?: string | null, exclude?: string | null): any;

    toJson(include?: Include | null, exclude?: Exclude | null): any;

    /**
     * Convert the internal object representation to a _typed_ JSON object.
     * @param omitTopLevelType
     *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
     *        the outer level of the produced json.
     * @param runtime
     *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
     *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
     *
     *
     * @return JSON object representation
     *
     * @see #fromJson
     * @see #toJson
     * @see serdeser.c3doc
     * @see JsonType
     */
    toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

    toTypedJson(include?: string | null, exclude?: string | null): any;

    toTypedJson(include?: Include | null, exclude?: Exclude | null): any;

    toJsonString(): string;

    /**
     * Convert the internal object representation to a serialized JSON string.
     *
     * @return JSON object as string
     */
    toJsonString(pretty: boolean): string;

    toTypedJsonString(): string;

    toTypedJsonString(pretty?: boolean, omitTopLevelType?: boolean): string;

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
    static fromJson(json: any | null): Data.Lazy | null;

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
    static fromJsonString(json: string | null): Data.Lazy | null;

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
    static fromXmlString(xml: string | null): Data.Lazy | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Lazy | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Lazy;

    /**
     * Whether all the fields of this instance are empty.
     */
    isEmptyObj(): boolean;

    /**
     * @param other
     *         data instance to compare based on the reference.
     * @return true if other is the same instance as this Data else false.
     * @see Data#equal_
     * @see Data#equalTo
     */
    isSame(other: Data | null): boolean;

    /**
     * Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
     * @param names
     *         names associated with the desired attribute values.
     * @return the attribute values associated with the given attribute names
     */
    fieldValues(names: C3.Array<string | null>): any;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Lazy;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Lazy;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Lazy | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Lazy | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.Lazy;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Lazy;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Lazy;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.Lazy;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.Lazy;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.Lazy;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.Lazy;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.Lazy;

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
    withoutFieldAtPath(path: string): Data.Lazy;

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
    withoutField(field: string | null): Data.Lazy;

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
    withoutField(field: FieldType | null): Data.Lazy;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.Lazy;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.Lazy;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.Lazy;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.Lazy;

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
    defaultField(field: string): Data.Lazy;

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
    defaultField(field: FieldType): Data.Lazy;

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
    unsetField(field: string): Data.Lazy;

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
    unsetField(field: FieldType): Data.Lazy;

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
    removeField(field: string): Data.Lazy;

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
    removeField(field: FieldType): Data.Lazy;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.Lazy;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.Lazy;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.Lazy;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.Lazy;

    mergeJson(json: any | null): Data.Lazy;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.Lazy;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.Lazy;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.Lazy | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.Lazy | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.Lazy | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.Lazy | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.Lazy | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.Lazy | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.Lazy | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.Lazy | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.Lazy | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.Lazy;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.Lazy;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.Lazy;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.Lazy;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.Lazy;

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
    static make(fields: any, withDefaults?: boolean): Data.Lazy;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.Lazy;

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
    afterMake(): Data.Lazy;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.Lazy;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.Lazy>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.Lazy;

    /**
     * returns parent dataset if subtype is a {@link Data.Stateful}. Otherwise, throws an error.
     */
    get dataset(): Dataset;

    /**
     * @return name of the {@link Source} type from which the data originates
     */
    get sourceName(): string;

    /**
     * @return name used to reference concrete DataImpl for execution
     */
    concreteId(): string;

    /**
     * Converts this DataImpl to a {@link PyAst.Module} that can be executed by {@link DataImpl#fromPySrc).
     */
    toPyAst(spec?: ToPySrcSpec | null): PyAst.Module;

    /**
     * Converts this DataImpl to Python source code that can be executed by {@link DataImpl#fromPySrc).
     */
    toPySrc(spec?: ToPySrcSpec | null): string;

    /**
     * Converts this DataImpl to {@link DataToPyAstVisitorCtx} that can be converted to a python AST.
     * Calls the implementation specific to the running execution mode.
     */
    toDataToPyAstVisitorCtx(spec?: ToPySrcSpec | null): DataToPyAstVisitorCtx;

    /**
     * @return the `Data` instance referenced by this {@link DataImpl}.
     */
    dereference(): Data;

    /**
     * Creates {@link Workflow} representation of this DataImpl. {@link DataImpl.Lazy} instances are represented as
     * {@link Workflow.Action} vertices with arguments represented as {@link Workflow.Const} vertices. Concrete Data
     * subtypes (e.g. {@link Data.Pandas}) are represented as Workflow.Const vertices.
     */
    toWorkflow(spec?: DataToWorkflowSpec | null): Workflow | null;

    /**
     * Creates Data.Flow representation of this Data. See {@link Data#toWorkflow}
     */
    toDataFlow(spec?: DataToWorkflowSpec | null): PkgInference | null;

    toRealDataFlow(spec?: DataToFlowSpec | null): Data.Flow | null;

    /**
     * Cache and return a concrete {@link DataImpl} according to this Data's execution mode.
     * If a dataset is provided, the resulting {@link DataImpl} will be stateful and belong to that dataset,
     * otherwise it will be stateless.
     * if `cache` is invoked on a {@link Data.Lazy}, the corresponding concrete {@link DataImpl} will be cached on
     * this instance with the dataset id as cache key, or {@link DataImpl.Lazy#STATELESS_CACHE} if
     * no dataset is provided. see for example {@link Data.Lazy#_toPandas}.
     */
    cache(ds?: Dataset | null): Data | null;

    /**
     * Creates a DataRef in the provided Dataset which points to ths. Overloaded to add Dataset parameter for stateless
     * DataImpl. If not provided, dataset will default to Dataset.inst(). If a Dataset is provided to stateful Data, an
     * exception will be thrown
     */
    toDataRef(ds?: Dataset | null): DataRef | null;

    /**
     * @return true if the DataImpl is mutable, false otherwise. Currently, only {@link DataImpl.Ref} and its subtypes are
     * mutable, others including {@DataImpl.Pandas}, {@DataImpl.Lazy} are immutable.
     */
    isMutable(): boolean;

    /**
     * @return true if the DataImpl is cached, false otherwise. Always true for concrete subtypes of DataImpl. For
     * {@link DataImpl.Lazy}, checks if the lazy chain has been cached in memory as a concrete subtype.
     * Cache is keyed by {@link Dataset#id} if a dataset is provided and otherwise by key meaning the concrete type
     * that is in the cache does not belong to a dataset.
     * {@link DataImpl.Lazy#STATELESS_CACHE}
     */
    isCached(ds?: Dataset | null): boolean;

    /**
     * @return true iff this instance can be transferred across nodes.
     */
    supportsMultiNode(): boolean;

    /**
     * Creates a new DataImpl by executing the string PySrc provided.
     * Following are reserved keywords in the provided source:
     *  * `pd`: will refer to `import pandas as pd`
     *  * The sourceName of each Data in the `dfs` set
     */
    static fromPySrc(pySrc: string, dfs?: C3.Set<DataImpl | null>, vars?: C3.Map<string | null, any>, dataset?: Dataset | null): Data.Lazy | null;

    /**
     * Execute pySrc code on this DataImpl and return the result without storing it
     * Following are reserved keywords in the provided source:
     *  * `pd`: will refer to `import pandas as pd`
     *  * The sourceName of each DataImpl in the `dfs` set
     *  * The result is stored in 'ret'. Ex. 'ret=XXX' in pySrc
     *
     * @param pySrc
     *        The python source code that is executed in python
     * @param dfs
     *        The set of DataImpls that are used in the executed python source code
     * @param doNotConvert
     *        Whether to keep as Data/Data.Series or flatten the returned data into a c3 serializable type
     */
    static executePySrc(pySrc: string, dfs?: C3.Set<DataImpl | null>, doNotConvert?: boolean): any;

    /**
     * Execute pySrc code on this DataImpl and return the result without storing it
     * Following are reserved keywords in the provided source:
     *  * `pd`: will refer to `import pandas as pd`
     *  * The sourceName of each DataImpl in the `dfs` map
     *  * The result is stored in 'ret'. Ex. 'ret=XXX' in pySrc
     *
     * @param pySrc
     *        The python source code that is executed in python
     * @param dfs
     *        The Map of ConcreteId and corresponding DataImpls that are used in the executed python source code
     * @param doNotConvert
     *        Whether to keep as Data/Data.Series or flatten the returned data into a c3 serializable type
     */
    static executePySrc(pySrc: string, dfs?: C3.Map<string | null, DataImpl | null> | null, doNotConvert?: boolean): any;

    /**
     * Releases all resources being used by this {@link DataImpl}.
     * For example, for {@link Data.Stateful}, this removes the {@link Data} from its Dataset, thereby freeing up
     * the memory.
     * For {@link Data.Persisted}, this removes the persisted data.
     */
    close(): void;

    /**
     * @return if given method name is mutable on DataImpl
     * @see DataImpl.Ref#mutableOperators
     */
    static isMutableOperator(action: Action): boolean;

    /**
     * Build a JavaScript **Proxy** that supports the various Data protocols, notably {@Link LengthProtocol} and
     * {@link MutableItemProtocol} according to the Pandas model of item access.
     */
    static _jsDataProxy(inst: any): Data.Lazy;

    /**
     * Convenience helper to functionally cast this DataImpl to a {@link DataImpl.Lazy}. Throws an error if this is not
     * a {@link DataImpl.Lazy}
     */
    asLazy(): DataImpl.Lazy;

    /**
     * The function is intended to compare two DataImpl objects for use in unit tests. Parameters allow varying the
     * strictness of the equality checks performed. This function is a mirror for pandas.testing.assert_frame_equal and:
     * pandas.testing.assert_series_equal
     *
     * @param first
     *           the first DataImpl to compare
     * @param second
     *           the second DataImpl to compare
     * @param spec
     *           the spec to pass in the arguments for the function
     * @return whether the two DataImpls are equal
     */
    static checkEquals(first: DataImpl, second: DataImpl, spec?: Data.CheckEqualsSpec | null): boolean;

    /**
     * Helper method to create py code using PyAst.Call.fromValues
     *
     * @param methodName
     *        The name of the method to be called
     * @param args
     *        The list of DataImpls being passed as arguments to the method
     * @param keywords
     *        The mapping of keyword names to their values. This can be spec.fieldValuesByFieldName().
     */
    static getPySrcFromValues(methodName: string, args?: C3.Set<DataImpl | null>, keywords?: C3.Map<string | null, any>): string | null;

    /**
     * Helper method to create js code used for poly test generation
     *
     * @param dataType
     *        The DataImpl C3 Type, i.e. "Data" or "Data.Series"
     * @param callerName
     *        The name of the object calling the function
     * @param methodName
     *        The name of the method to be called
     * @param keywords
     *        The mapping of keyword names to their values. This can be spec.fieldValuesByFieldName().
     */
    static getJsSrcFromValues(dataType: string, callerName: string, methodName: string, keywords?: C3.Map<string | null, any>, dataInputNames?: C3.Set<string | null>): string | null;

    /**
     * Re-creates and returns a copy of the {@link DataImpl} used to create the provided {@link Data.Flow}. The returned
     * DataImpl instance will represent the only sink of the provided Data.Flow.
     */
    static fromRealDataFlow(dataFlow: Data.Flow): DataImpl;

    /**
     * Converts the {@link DataImpl} to an array where each entry represents a row
     * - If called on a {@link Data.Series}, returns an array of values
     * - If called on a {@link Data}, returns an array of tuples where each tuple represents a row and values inside the
     *   tuple correspond to columns
     * - If called on any other Data subtype, throws not implemented error
     *
     * @param limit
     *        The number of rows to return
     */
    collect(limit?: number | null): C3.Array<any>;

    /**
     * Return content of the Data either as a single value or as a Collection of converted values
     */
    value(): any;

    get inferredOutType(): C3.Map<string | null, ValueType | null>;

    /**
     * Cached helper to retrieve args which are instance of {@link DataImpl}, including "this" arg
     */
    dataArgs(): C3.Map<string | null, DataImpl | null>;

    /**
     * @return true if this is of type Evaluatable & action is eval {@see Evaluatable#eval}
     */
    isEvaluatableEval(): boolean;

    /**
     * @return true if the source action of this Data.Lazy instance is {@link Evaluatable#eval eval},
     * {@link FeatureEvaluatable#evalFeature readFeature}, {@link FeatureEvaluatable#evalFeatures readFeatures} or
     * {@link FeatureEvaluatable#evalFeatureSet readFeatureSet}
     */
    isSourceActionEval(): boolean;

    /**
     * Convenience helper to get {@link DataImpl.Lazy#ths} and cast it as {@link DataImpl.Lazy}. Throws an error if ths
     * is not a DataImpl.Lazy
     */
    thsLazy(): DataImpl.Lazy;

    /**
     * Convenience helper to retrieve type from which the method represented by this lazy was called, whether static or
     * member.
     */
    callingType(): Type;

    /**
     * The corresponding {@link MethodType} for this lazy DataImpl
     */
    methodType(): MethodType;

    /**
     * Creates a new instance of Data.Lazy with the given fields. All creation of DataImpl.Lazy instances should go
     * through this function, as it will also contain special logic for expanding spec arguments.
     *
     * @param this_
     *        Type or instance which invoked the action
     * @param action
     *        Name of the action being represented
     * @param args
     *        Map from argument name to value for the action being represented
     */
    static create(this_: any, action: string, args?: C3.Map<string | null, any>): Data.Lazy;

    /**
     * Returns argument by name for this DataImpl.Lazy. If argument is not present, return null by default or fail if
     * failIfMissing = true.
     */
    arg(argName: string, failIfMissing?: boolean): T;

    /**
     * @return whether this DataImpl.Lazy represents a static action, as opposed to member
     */
    isStatic(): boolean;

    /**
     * Whether the action of this lazy can be executed with pandas
     */
    isNotPandasDispatchable(): boolean;

    /**
     * @return compressed serialized {@link DataImpl.Lazy} which can be persisted more efficiently
     *
     * @see Feature.compressedData
     */
    compress(): any;

    /**
     * Adds "id","ids","start","end" filter to spec params recursively for the given spec
     * e.g. if one of the args is {spec: EvalSpec}, this function with add the provided IdTimeRangeFilterSpec to the
     * spec field in EvalSpec
     */
    withIdTimeRangeFilterSpecRecursive(spec?: λBiFunction<DataImpl.Lazy, IdTimeRangeFilterSpec, IdTimeRangeFilterSpec> | null): DataImpl.Lazy;

    /**
     * Removes "id","ids","start","end" filter from the spec params that are IdFilterSpec or IdTimeRangeFilterSpec,
     * and "slice", "sliceByMask", "sliceByLabel" on the subject/id/timestamp Columns. Removal is done in topologicalSort order.
     * e.g. if one of the args is {spec: EvalSpec}, this function with remove the above fields from the fields in EvalSpec
     */
    withoutIdTimeRangeFilterSpec(): DataImpl.Lazy;

    /**
     * Actualizes the DataImpl.Lazy on the server and then returns the binary representation of df
     */
    toBinary(): any;

    get T(): Data | null;

    get attrs(): C3.Map<any, any> | null;

    get axes(): C3.Array<any> | null;

    get columns(): Data.Index | null | Data.RangeIndex | null | Data.MultiIndex | null | Data.CategoricalIndex | null | Data.IntervalIndex | null | Data.PeriodIndex | null | Data.DatetimeIndex | null | Data.TimedeltaIndex | null | Data.Int64Index | null | Data.UInt64Index | null | Data.Float64Index | null | null;

    get dtypes(): Data.Series | null;

    get empty(): any;

    get flags(): any;

    get iat(): any;

    /**
     * Purely integer-location based indexing for selection by position.
     *
     * Supports a subset of arguments to [pandas.DataFrame.iloc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iloc.html)
     */
    get iloc(): DataIlocIndexer | null;

    get index(): Data.Index | null | Data.RangeIndex | null | Data.MultiIndex | null | Data.CategoricalIndex | null | Data.IntervalIndex | null | Data.PeriodIndex | null | Data.DatetimeIndex | null | Data.TimedeltaIndex | null | Data.Int64Index | null | Data.UInt64Index | null | Data.Float64Index | null | null;

    /**
     * Access a group of rows and columns by label(s) or a boolean array.
     *
     * Supports a subset of arguments to [pandas.DataFrame.loc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html)
     */
    get loc(): DataLocIndexer | null;

    get ndim(): number | null;

    get shape(): C3.Array<number | null> | null;

    get size(): number | null;

    get style(): any;

    get values(): any;

    abs(): Data | null;

    add(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    add_prefix(prefix?: string | null): Data | null;

    add_suffix(suffix?: string | null): Data | null;

    agg(func?: any, axis?: any): Data | null | Data.Series | null | null;

    aggregate(func?: any, axis?: any): Data | null | Data.Series | null | null;

    align(other?: any, join?: string | null, axis?: any, level?: any, copy?: any, fill_value?: any, method?: string | null, limit?: any, fill_axis?: any, broadcast_axis?: any): C3.Array<any> | null;

    all(axis?: any, bool_only?: any, skipna?: any, level?: any): Data | null | Data.Series | null | null;

    any(axis?: any, bool_only?: any, skipna?: any, level?: any): Data | null | Data.Series | null | null;

    append(other?: any, ignore_index?: any, verify_integrity?: any, sort?: any): Data | null;

    applymap(func?: any, na_action?: string | null): Data | null;

    asfreq(freq?: any, method?: any, how?: string | null, normalize?: any, fill_value?: any): Data | null;

    asof(where?: any, subset?: any): Data | null | Data.Series | null | null;

    astype(dtype?: any, copy?: any, errors?: string | null): Data | null;

    at_time(time?: any, asof?: any, axis?: any): Data | null;

    backfill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data | null;

    between_time(start_time?: any, end_time?: any, include_start?: any, include_end?: any, axis?: any): Data | null;

    bfill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data | null;

    bool(): any;

    boxplot(column?: any, by?: any, ax?: any, fontsize?: any, rot?: any, grid?: any, figsize?: any, layout?: any, return_type?: any, backend?: any): any;

    clip(lower?: any, upper?: any, axis?: any, inplace?: any): Data | null;

    combine(other?: Data | null, func?: any, fill_value?: any, overwrite?: any): Data | null;

    combine_first(other?: Data | null): Data | null;

    compare(other?: Data | null, align_axis?: any, keep_shape?: any, keep_equal?: any): Data | null;

    convert_dtypes(infer_objects?: any, convert_string?: any, convert_integer?: any, convert_boolean?: any, convert_floating?: any): Data | null;

    copy(deep?: any): Data | null;

    corr(method?: λBiFunction<any, any, number | null> | null | string | null | null, min_periods?: number | null): Data | null;

    corrwith(other?: any, axis?: any, drop?: any, method?: any): Data.Series | null;

    count(axis?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    cov(min_periods?: number | null, ddof?: number | null): Data | null;

    cummax(axis?: any, skipna?: any): Data | null;

    cummin(axis?: any, skipna?: any): Data | null;

    cumprod(axis?: any, skipna?: any): Data | null;

    cumsum(axis?: any, skipna?: any): Data | null;

    describe(percentiles?: any, include?: any, exclude?: any, datetime_is_numeric?: any): Data | null;

    diff(periods?: number | null, axis?: any): Data | null;

    div(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    divide(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    dot(other?: any): Data | null | Data.Series | null | null;

    drop(labels?: any, axis?: any, index?: any, columns?: any, level?: any, inplace?: any, errors?: string | null): Data | null;

    drop_duplicates(subset?: any, keep?: any, inplace?: any, ignore_index?: any): Data | null;

    droplevel(level?: any, axis?: any): Data | null;

    dropna(axis?: any, how?: string | null, thresh?: any, subset?: any, inplace?: any): Data | null;

    duplicated(subset?: any, keep?: any): Data.Series | null;

    eq(other?: any, axis?: any, level?: any): Data | null;

    eval(expr?: string | null, inplace?: any): any;

    ewm(com?: number | null, span?: number | null, halflife?: any, alpha?: number | null, min_periods?: number | null, adjust?: any, ignore_na?: any, axis?: any, times?: any): any;

    expanding(min_periods?: number | null, center?: any, axis?: any, method?: string | null): any;

    explode(column?: any, ignore_index?: any): Data | null;

    ffill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data | null;

    fillna(value?: any, method?: any, axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data | null;

    filter(items?: any, like?: string | null, regex?: string | null, axis?: any): Data | null;

    first(offset?: any): Data | null;

    first_valid_index(): any;

    floordiv(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    ge(other?: any, axis?: any, level?: any): Data | null;

    get(key?: any, default_?: any): any;

    groupby(by?: any, axis?: any, level?: any, as_index?: any, sort?: any, group_keys?: any, squeeze?: any, observed?: any, dropna?: any): Data.GroupBy | null;

    gt(other?: any, axis?: any, level?: any): Data | null;

    head(n?: number | null): Data | null;

    hist(column?: any, by?: any, grid?: any, xlabelsize?: number | null, xrot?: number | null, ylabelsize?: number | null, yrot?: number | null, ax?: any, sharex?: any, sharey?: any, figsize?: [number | null, number | null] | null, layout?: [number | null, number | null] | null, bins?: any, backend?: string | null, legend?: any): any;

    idxmax(axis?: any, skipna?: any): Data.Series | null;

    idxmin(axis?: any, skipna?: any): Data.Series | null;

    infer_objects(): Data | null;

    info(verbose?: any, buf?: any, max_cols?: number | null, memory_usage?: any, show_counts?: any, null_counts?: any): any;

    insert(loc?: any, column?: any, value?: any, allow_duplicates?: any): Data | null;

    interpolate(method?: string | null, axis?: any, limit?: number | null, inplace?: any, limit_direction?: string | null, limit_area?: string | null, downcast?: string | null): Data | null;

    isin(values?: any): Data | null;

    isna(): Data | null;

    isnull(): Data | null;

    items(): any;

    iteritems(): any;

    iterrows(): any;

    itertuples(index?: any, name?: string | null): any;

    join(other?: any, on?: any, how?: string | null, lsuffix?: string | null, rsuffix?: string | null, sort?: any): Data | null;

    keys(): any;

    kurt(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    kurtosis(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    last(offset?: any): Data | null;

    last_valid_index(): any;

    le(other?: any, axis?: any, level?: any): Data | null;

    lookup(row_labels?: any, col_labels?: any): any;

    lt(other?: any, axis?: any, level?: any): Data | null;

    mad(axis?: any, skipna?: any, level?: any): Data | null | Data.Series | null | null;

    mask(cond?: any, other?: any, inplace?: any, axis?: any, level?: any, errors?: any, try_cast?: any): Data | null;

    max(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    mean(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    median(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    melt(id_vars?: any, value_vars?: any, var_name?: any, value_name?: any, col_level?: any, ignore_index?: any): Data | null;

    memory_usage(index?: any, deep?: any): Data.Series | null;

    merge(right?: any, how?: string | null, on?: any, left_on?: any, right_on?: any, left_index?: any, right_index?: any, sort?: any, suffixes?: any, copy?: any, indicator?: any, validate?: string | null): Data | null;

    min(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    mod(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    mode(axis?: any, numeric_only?: any, dropna?: any): Data | null;

    mul(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    multiply(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    multiply(other: any): any;

    ne(other?: any, axis?: any, level?: any): Data | null;

    nlargest(n?: number | null, columns?: any, keep?: string | null): Data | null;

    notna(): Data | null;

    notnull(): Data | null;

    nsmallest(n?: number | null, columns?: any, keep?: string | null): Data | null;

    nunique(axis?: any, dropna?: any): Data.Series | null;

    pad(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data | null;

    pct_change(periods?: number | null, fill_method?: any, limit?: number | null, freq?: any): Data | null;

    pivot(index?: any, columns?: any, values?: any): Data | null;

    pivot_table(values?: any, index?: any, columns?: any, aggfunc?: any, fill_value?: any, margins?: any, dropna?: any, margins_name?: any, observed?: any, sort?: any): Data | null;

    pop(item?: any): Data.Series | null;

    pow(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    prod(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): Data | null | Data.Series | null | null;

    product(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): Data | null | Data.Series | null | null;

    quantile(q?: any, axis?: any, numeric_only?: any, interpolation?: string | null): Data | null | Data.Series | null | null;

    query(expr?: string | null, inplace?: any): Data | null;

    radd(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rank(axis?: any, method?: string | null, numeric_only?: any, na_option?: string | null, ascending?: any, pct?: any): Data | null;

    rdiv(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    reindex(): Data | null;

    /**
     * Implements pandas reindex semantics from pandas version 1.3.4
     */
    reindex(labels?: any, index?: any, columns?: any, axis?: any, method?: string | null, copy?: any, level?: number | null | string | null | null, fill_value?: any, limit?: any, tolerance?: any): Data | null;

    reindex_like(other?: any, method?: string | null, copy?: any, limit?: any, tolerance?: any): Data | null;

    rename(mapper?: any, index?: any, columns?: any, axis?: any, copy?: any, inplace?: any, level?: any, errors?: string | null): Data | null;

    rename_axis(mapper?: any): Data | null;

    reorder_levels(order?: any, axis?: any): Data | null;

    replace(to_replace?: any, value?: any, inplace?: any, limit?: number | null, regex?: any, method?: string | null): Data | null;

    resample(rule?: any, axis?: any, closed?: string | null, label?: string | null, convention?: string | null, kind?: string | null, loffset?: any, base?: number | null, on?: any, level?: any, origin?: any, offset?: any): Data.Resample | null;

    reset_index(level?: any, drop?: any, inplace?: any, col_level?: any, col_fill?: any): Data | null;

    rfloordiv(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rmod(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rmul(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rolling(window?: any, min_periods?: number | null, center?: any, win_type?: string | null, on?: string | null, axis?: any, closed?: string | null, method?: string | null): Data.Rolling | null;

    round(decimals?: Data.Series | null | number | null | C3.Map<any, number | null> | null): Data | null;

    rpow(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rsub(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    rtruediv(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    sample(n?: number | null, frac?: number | null, replace?: any, weights?: any, random_state?: number | null, axis?: any, ignore_index?: any): Data | null;

    select_dtypes(include?: any, exclude?: any): Data | null;

    sem(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    set_axis(labels?: any, axis?: any, inplace?: any): Data | null;

    set_flags(copy?: any, allows_duplicate_labels?: any): Data | null;

    set_index(keys?: any, drop?: any, append?: any, inplace?: any, verify_integrity?: any): Data | null;

    shift(periods?: number | null, freq?: any, axis?: any, fill_value?: any): Data | null;

    skew(axis?: any, skipna?: any, level?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    slice_shift(periods?: number | null, axis?: any): Data | null;

    sort_index(axis?: any, level?: any, ascending?: any, inplace?: any, kind?: string | null, na_position?: string | null, sort_remaining?: any, ignore_index?: any, key?: any): Data | null;

    sort_values(by?: any, axis?: any, ascending?: any, inplace?: any, kind?: string | null, na_position?: string | null, ignore_index?: any, key?: any): Data | null;

    squeeze(axis?: any): Data | null | Data.Series | null | number | null | null;

    stack(level?: any, dropna?: any): Data | null | Data.Series | null | null;

    std(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    sub(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    subtract(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    subtract(other: any): any;

    sum(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): Data | null | Data.Series | null | null;

    swapaxes(axis1?: any, axis2?: any, copy?: any): Data | null;

    swaplevel(i?: any, j?: any, axis?: any): Data | null;

    tail(n?: number | null): Data | null;

    take(indices?: any, axis?: any, is_copy?: any): Data | null;

    to_clipboard(excel?: any, sep?: string | null): any;

    to_csv(path_or_buf?: any, sep?: string | null, na_rep?: string | null, float_format?: string | null, columns?: any, header?: any, index?: any, index_label?: any, mode?: string | null, encoding?: string | null, compression?: any, quoting?: number | null, quotechar?: string | null, line_terminator?: string | null, chunksize?: number | null, date_format?: string | null, doublequote?: any, escapechar?: string | null, decimal?: string | null, errors?: string | null, storage_options?: any): string | null;

    to_dict(orient?: string | null, into?: any): any;

    to_excel(excel_writer?: any, sheet_name?: string | null, na_rep?: string | null, float_format?: string | null, columns?: any, header?: any, index?: any, index_label?: any, startrow?: any, startcol?: any, engine?: any, merge_cells?: any, encoding?: any, inf_rep?: any, verbose?: any, freeze_panes?: any, storage_options?: any): any;

    to_feather(path?: any): any;

    to_gbq(destination_table?: string | null, project_id?: string | null, chunksize?: number | null, reauth?: any, if_exists?: string | null, auth_local_webserver?: any, table_schema?: C3.Array<C3.Map<string | null, string | null>> | null, location?: string | null, progress_bar?: any, credentials?: any): any;

    to_hdf(path_or_buf?: any, key?: string | null, mode?: string | null, complevel?: number | null, complib?: string | null, append?: any, format?: string | null, index?: any, min_itemsize?: number | null | C3.Map<string | null, number | null> | null, nan_rep?: any, dropna?: any, data_columns?: any, errors?: string | null, encoding?: string | null): any;

    to_json(path_or_buf?: any, orient?: string | null, date_format?: string | null, double_precision?: number | null, force_ascii?: any, date_unit?: string | null, default_handler?: λFunction<any, any> | null, lines?: any, compression?: any, index?: any, indent?: number | null, storage_options?: any): string | null;

    to_latex(buf?: any, columns?: any, col_space?: any, header?: any, index?: any, na_rep?: any, formatters?: any, float_format?: any, sparsify?: any, index_names?: any, bold_rows?: any, column_format?: any, longtable?: any, escape?: any, encoding?: any, decimal?: any, multicolumn?: any, multicolumn_format?: any, multirow?: any, caption?: any, label?: any, position?: any): any;

    to_markdown(buf?: any, mode?: string | null, index?: any, storage_options?: any): string | null;

    to_parquet(path?: any, engine?: string | null, compression?: string | null, index?: any, partition_cols?: C3.Array<string | null> | null, storage_options?: any): any;

    to_period(freq?: any, axis?: any, copy?: any): Data | null;

    to_pickle(path?: any, compression?: any, protocol?: number | null, storage_options?: any): any;

    to_records(index?: any, column_dtypes?: any, index_dtypes?: any): any;

    to_sql(name?: string | null, con?: any, schema?: any, if_exists?: string | null, index?: any, index_label?: any, chunksize?: any, dtype?: any, method?: any): any;

    to_stata(path?: any, convert_dates?: C3.Map<any, string | null> | null, write_index?: any, byteorder?: string | null, time_stamp?: any, data_label?: string | null, variable_labels?: C3.Map<any, string | null> | null, version?: number | null, convert_strl?: any, compression?: any, storage_options?: any): any;

    to_string(buf?: any, columns?: any, col_space?: number | null, header?: any, index?: any, na_rep?: string | null, formatters?: any, float_format?: any, sparsify?: any, index_names?: any, justify?: string | null, max_rows?: number | null, min_rows?: number | null, max_cols?: number | null, show_dimensions?: any, decimal?: string | null, line_width?: number | null, max_colwidth?: number | null, encoding?: string | null): string | null;

    to_timestamp(freq?: any, how?: string | null, axis?: any, copy?: any): Data | null;

    to_xarray(): any;

    to_xml(path_or_buffer?: any, index?: any, root_name?: string | null, row_name?: string | null, na_rep?: string | null, attr_cols?: C3.Array<string | null> | string | null | null, elem_cols?: C3.Array<string | null> | string | null | null, namespaces?: C3.Map<string | null, string | null> | null, prefix?: string | null, encoding?: string | null, xml_declaration?: any, pretty_print?: any, parser?: string | null, stylesheet?: any, compression?: any, storage_options?: any): string | null;

    transform(func?: any, axis?: any): Data | null;

    transpose(copy?: any): Data | null;

    truediv(other?: any, axis?: any, level?: any, fill_value?: any): Data | null;

    truncate(before?: any, after?: any, axis?: any, copy?: any): Data | null;

    tshift(periods?: number | null, freq?: any, axis?: any): Data | null;

    tz_convert(tz?: any, axis?: any, level?: any, copy?: any): Data | null;

    tz_localize(tz?: any, axis?: any, level?: any, copy?: any, ambiguous?: any, nonexistent?: string | null): Data | null;

    unstack(level?: any, fill_value?: any): Data | null | Data.Series | null | null;

    update(other?: any, join?: string | null, overwrite?: any, filter_func?: any, errors?: string | null): any;

    value_counts(subset?: any, normalize?: any, sort?: any, ascending?: any, dropna?: any): Data.Series | null;

    var(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): Data | null | Data.Series | null | null;

    where(cond?: any, other?: any, inplace?: any, axis?: any, level?: any, errors?: any, try_cast?: any): Data | null;

    xs(key?: any, axis?: any, level?: any, drop_level?: any): Data | null | Data.Series | null | null;

    /**
     * Construct a {@link Data} manually. Corresponds to pd.DataFrame constructor from Pandas 1.3.4
     */
    static dataFrame(data?: C3.Map<string | null, any> | C3.Array<any> | null, index?: any, columns?: any, dtype?: any, copy?: boolean): Data | null;

    /**
     * Construct a {@link Data.Series} manually. Corresponds to pd.Series constructor from Pandas 1.3.4
     */
    static series(data?: any, index?: any, dtype?: any, name?: any, copy?: boolean, fastpath?: boolean): Data.Series | null;

    /**
     * Construct a {@link Data.Index} manually. Corresponds to pd.Index constructor from Pandas 1.3.4
     */
    static index_(data?: any, dtype?: any, copy?: boolean, name?: any, tupleize_cols?: any): Data.Index | null | Data.MultiIndex | null | Data.DatetimeIndex | null | Data.TimedeltaIndex | null | Data.Float64Index | null | Data.Int64Index | null | null;

    /**
     * Construct a {@link Data.RangeIndex} manually. Corresponds to pd.RangeIndex constructor from Pandas 1.3.4
     */
    static rangeIndex(start?: any, stop?: number | null, step?: number | null, dtype?: any, copy?: boolean, name?: any): Data.RangeIndex | null;

    /**
     * Construct a {@link Data.CategoricalIndex} manually. Corresponds to pd.CategoricalIndex constructor from Pandas 1.3.4
     */
    static categoricalIndex(data?: any, categories?: any, ordered?: any, dtype?: any, copy?: boolean, name?: any): Data.CategoricalIndex | null;

    /**
     * Construct a {@link Data.MultiIndex} manually. Corresponds to pd.MultiIndex constructor from Pandas 1.3.4
     */
    static multiIndex(levels?: any, codes?: any, sortorder?: number | null, names?: any, dtype?: any, copy?: boolean, name?: any, verify_integrity?: any): Data.MultiIndex | null;

    /**
     * Construct a {@link Data.IntervalIndex} manually. Corresponds to pd.IntervalIndex constructor from Pandas 1.3.4
     */
    static intervalIndex(data?: any, closed?: string | null, dtype?: any, copy?: boolean, name?: any, verify_integrity?: any): Data.IntervalIndex | null;

    /**
     * Construct a {@link Data.DatetimeIndex} manually. Corresponds to pd.DatetimeIndex constructor from Pandas 1.3.4
     */
    static datetimeIndex(data?: any, freq?: any, tz?: any, normalize?: boolean, closed?: string | null, ambiguous?: any, dayfirst?: boolean, yearfirst?: boolean, dtype?: any, copy?: boolean, name?: any): Data.DatetimeIndex | null;

    /**
     * Construct a {@link Data.TimedeltaIndex} manually. Corresponds to pd.TimedeltaIndex constructor from Pandas 1.3.4
     */
    static timedeltaIndex(data?: any, unit?: any, freq?: any, copy?: boolean, name?: any): Data.TimedeltaIndex | null;

    /**
     * Construct a {@link Data.PeriodIndex} manually. Corresponds to pd.PeriodIndex constructor from Pandas 1.3.4
     */
    static periodIndex(data?: any, ordinal?: any, freq?: any, dtype?: any, copy?: boolean, name?: any, year?: any, month?: any, quarter?: any, day?: any, hour?: any, minute?: any, second?: any): Data.PeriodIndex | null;

    /**
     * Construct a {@link Data.Int64Index} manually. Corresponds to pd.Int64Index constructor from Pandas 1.3.4
     */
    static int64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.Int64Index | null;

    /**
     * Construct a {@link Data.UInt64Index} manually. Corresponds to pd.UInt64Index constructor from Pandas 1.3.4
     */
    static uInt64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.UInt64Index | null;

    /**
     * Construct a {@link Data.Float64Index} manually. Corresponds to pd.Float64Index constructor from Pandas 1.3.4
     */
    static float64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.Float64Index | null;

    /**
     * Read a comma-separate values file and construct a {@link Data} out of the contents.
     *
     * Example usage:
     * ```py
     * Reading an individual csv file.
     * >>> dt = c3.Data.read_csv('path-to-your-file/your-file.csv')
     *
     * Reading multiple csv files with the same schema inside a folder.
     * >>> dt = c3.Data.read_csv('path-to-your-folder/')
     *
     * Reading from client "local" folder. These are files local to the calling (e.g. SDK) process.
     * >>> dt = c3.PyDataTable.read_csv('local:///path-to-your-folder/')
     * ```
     *
     * @param path
     *           c3 file path that contains the data. See {@link Dataset#fromFiles} for specifics on semantics.
     * @param parse_dates
     *           list of names of "columns" in the header to interpret as datetime.
     * @return a {@link Data} that contains the data of the file(s).
     */
    static read_csv(filepath_or_buffer: string | null | ContentValue | null, spec?: Data.ManualOpSpecs.ReadCsvSpec | null): Data | null;

    /**
     * Simultaneously read data from multiple .csv files.
     * `path` should be constructed as a glob. Only implemented for Modin execution mode
     *
     * Example usage:
     * ```py
     * >>> dt = c3.Data.read_csv_glob('path-to-your-file/*.csv')
     * ```
     *
     * @param filepath_or_buffer
     *           c3 file path that contains the data.
     * @param parse_dates
     *           list of names of "columns" in the header to interpret as datetime.
     * @return a {@link Data} that contains the data of the file(s).
     */
    static read_csv_glob(filepath_or_buffer: string, spec?: Data.ManualOpSpecs.ReadCsvGlobSpec | null): Data | null;

    /**
     * Reads SQL query into a DataFrame equivalent.
     *
     * @param sql
     *           SQL query string
     * @param url
     *           database connection path for the sql_alchemy engine
     * @param http_path
     *           http_path for the sql_alchemy engine
     * @param parse_dates
     *           list of column names to parse as dates
     */
    static _read_sql_query(sql: string, url: string, http_path: string, parse_dates?: any): Data | null;

    /**
     *  Perform a merge by key distance.
     *
     *  Both Data must be sorted by the key.
     *
     *  For each row in the left Data:
     *    - A "backward" search chooses the last row in the right Data whose
     *      'on' key is less than or equal to the left's key.
     *    - A "forward" search chooses the first row in the right Data whose
     *      'on' key is greater than or equal to the left's key.
     *    - A "nearest" search chooses the row in the right Data whose 'on'
     *      key is closest to the left's key.
     *
     *  @param left
     *         Data to merge
     *  @param right
     *         Data to merge
     *  @param on
     *         Column name to join on, needs to be present in both Data. The column being merged on must be ordered and
     * numeric must be a numeric column (integer, float, or datetime). On or left_on/right_on must be provided.
     *  @param left_on
     *         Column name to join on in the left Data
     *  @param right_on
     *         Column name to join on in the left Data
     *  @param left_index
     *         Indicate if the index of the left Data should be used as the join key
     *  @param right_index
     *         Indicate if the index of the right Data should be used as the join key
     *  @param by
     *         List of column names or a single column name. These columns are matched prior to merging
     *  @param left_by
     *         Column name. Columns to match on in the left Data
     *  @param right_by
     *         Column name. Columns to match on in the right Data
     *  @param suffixes
     *         2-length list or sequence. Suffix applied to overlapping column names in the left and right Data, respectively
     *  @param tolerance
     *         int or time delta. Select asof tolerance from this range. The tolerance needs to be compatible with the
     *         designated merge index
     *  @param allow_exact_matches
     *         If True, allow matching with the same ‘on’ value during merge (greater-than-or-equal-to or less-than-or-equal-to)
     *         If False, don’t match the same ‘on’ value during merge (strictly greater-than or strictly less-than)
     *  @param direction
     *         Indicate to look for prior, subsequent, or closest matches during merge
     *
     *  @return a {@link Data} representing the merged Data
     */
    static merge_asof(left?: Data | null, right?: Data | null, on?: any, left_on?: any, right_on?: any, left_index?: boolean | null, right_index?: boolean | null, by?: any, left_by?: any, right_by?: any, suffixes?: any, tolerance?: any, allow_exact_matches?: any, direction?: string | null): Data | null;

    /**
     * Concatenate Data along a specified axis with optional logic along the other axis
     * @param objs
     *           Mapping or sequence of Data objects. If a mapping is passed, the sorted keys will be used as the `keys`
     *           argument, unless it is passed, in which case the values will be selected.
     * @param axis
     *           The axis to concatenate along
     * @param join
     *        How to process indexes on the axis
     * @param ignore_index
     *        When true index values along the concatenation axis are ignored.
     * @param keys
     *        Sequence used to construct hierarchical index
     * @param levels
     *        list of sequences.
     *        Levels to use for building a Multi-index. If left null, the multi-index will be inferred from keys
     * @param names
     *        Names of each level in the resulting hierarchical index
     * @param verify_integrity
     *        Check if the concatenated axis contains any duplicates
     * @param sort
     *        Sorts the non-concatenation axis when join='outer' and it is not already aligned
     * @param copy
     *        Does not copy data unnecessarily when false   *
     * @return a {@link Data} representing the concatenated Data
     */
    static concat(objs?: any, axis?: number | null | string | null | null, join?: string | null, ignore_index?: boolean | null, keys?: any, levels?: any, names?: any, verify_integrity?: boolean | null, sort?: boolean | null, copy?: any): Data | null;

    /**
     * Normalize semi-structured JSON data into a Data
     * @param data
     *           Unserialized JSON objects
     * @param record_path
     *           Path in each object to list of records. If not passed, data will be assumed to be an array of records.
     * @param meta
     *        Fields to use as metadata for each record in resulting table.
     * @param meta_prefix
     *        If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].
     * @param record_prefix
     *        If True, prefix records with dotted (?) path, e.g. foo.bar.field if path to records is [‘foo’, ‘bar’].
     * @param errors
     *        Configures error handling.
     *        ‘ignore’ : will ignore KeyError if keys listed in meta are not always present.
     *        ‘raise’ : will raise KeyError if keys listed in meta are not always present.
     * @param sep
     *        Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.
     * @param max_level
     *        Max number of levels(depth of dict) to normalize. if None, normalizes all levels.
     *
     * @return a {@link Data} representing the structured JSON data
     */
    static json_normalize(data: any, record_path?: any, meta?: any, meta_prefix?: any, record_prefix?: any, errors?: string | null, sep?: string | null, max_level?: number | null): Data | null;

    static from_dict(data?: any, orient?: any, dtype?: any, columns?: any): Data | null;

    static from_records(data?: any, index?: any, exclude?: any, columns?: any, coerce_float?: any, nrows?: any): Data | null;

    /**
     * Iterate over info axis.
     */
    iter(): Iterator<any> | null;

    /**
     * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
     */
    _iter_(): any;

    /**
     * Generates a Iterable from the result of applying a binary operator against elements of Iterable.
     * The return type of the binary operator must match rt.
     * @elementType
     *        The return value type of the operator/ the element type of the returned Iterable
     * @spec
     *        Configures behavior of this method based on {@link OpSpec#repeatLast}
     * @other
     *        Other Iterable to apply operator on
     * @merge
     *        Binary operator to apply to elements of this and other Iterable at matching positions
     * @return the generated Iterable with return type rt.
     */
    zip(elementType?: ValueType | null, spec: OpSpec | null, other: Iterable<T> | null, merge: λQuadFunction<any, number | null, any, number | null, R | null>): Iterable<R>;

    /**
     * Implements the square bracket getter `obj[item]`.
     *
     * @param key
     *         item associated with the desired element.
     * @return the element associated with the given item
     */
    _item_(key: any): any;

    /**
     * Implements the square bracket setter `obj[item] = value`
     * @param key
     *         item associated with the element to set value for.
     * @param value
     *         value to set element to.
     */
    _setItem_(key: any, value: any): void;

    /**
     * Implements the `del` or equivalent operator
     * @param key
     *   item associated with the element to remove.
     */
    _removeItem_(key: any): void;

    addition(other: any): any;

    matrixMultiply(other: any): any;

    trueDivision(other: any): any;

    floorDivision(other: any): any;

    modulo(other: any): any;

    power(other: any, modulus?: any): any;

    reflectedAddition(other: any): any;

    reflectedSubtract(other: any): any;

    reflectedMultiply(other: any): any;

    reflectedMatrixMultiply(other: any): any;

    reflectedTrueDivision(other: any): any;

    reflectedFloorDivision(other: any): any;

    reflectedModulo(other: any): any;

    reflectedPower(other: any, modulus?: any): any;

    lessThan(other: any): any;

    lessThanEqualTo(other: any): any;

    equalTo(other: any): any;

    notEqualTo(other: any): any;

    greaterThan(other: any): any;

    greaterThanEqualTo(other: any): any;

    logicalAnd(other: any): any;

    logicalOr(other: any): any;

    logicalXor(other: any): any;

    reflectedLogicalAnd(other: any): any;

    reflectedLogicalOr(other: any): any;

    reflectedLogicalXor(other: any): any;

    /**
     * Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
     */
    _repr_(): string | null;

    /**
     * Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
     */
    _reprHtml_(): string | null;

    toNegative(): any;

    toPositive(): any;

    toAbsolute(): any;

    toInverted(): any;

    toRounded(decimals?: number | null): any;

    /**
     * Determines if this value is truth or falsy
     */
    _bool_(): boolean;

    /**
     * @return native object with all fields
     */
    _this(): any;

    /**
     * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
     * null may be returned. The implementation must be available within the browser (typically `js-client`).
     */
    renderer(): HtmlRenderer | null;

    /**
     * @return `true` if this Data contains provided element.
     */
    contains(element: any): boolean;

    /**
     * C3 ValueType of this instance.
     */
    valueType(): ValueType;

    /**
     * Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
     * considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
     *
     * @see ValueType#instanceType
     */
    static valueTypeOf(type: Type, failIfNot?: boolean): ValueType | null;

    /**
     * Implements the js `.length` property or py `len()` support.
     * @return the number of elements in this instance
     */
    _length_(): number;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    config(secrets?: boolean): DataConfig;

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
    static typeConfig(): DataConfig;

    /**
     * Build a data grid from the underlying data. If the current value is not appropriate for a grid, null should be
     * returned.
     */
    toDataGrid(spec?: DataGrid.LoadSpec | null): DataGrid | null;

    /**
     * Since there is no good way to pass in the spec when using the automatic visualization, it's possible to statically
     * set the default values in the local (client) environment. This spec will be used for the #_reprHtml method where
     * no spec may be passed.
     */
    static setDefaultSpec(spec?: DataGrid.HtmlSpec | null): void;

    /**
     * Get the default spec for the local (client) environment. Note that there may be a default value with values
     * extracted from the current environment. For example in Jupyter, display settings are taken from the current
     * [pandas](https://pandas.pydata.org/) settings.
     *
     * @see #setDefaultSpec
     */
    static defaultSpec(): DataGrid.HtmlSpec | null;

    get _shape(): C3.Array<number | null> | null;

    /**
     * @return {@link TupleType} describing this Data's schema: (name, value) pairs mapping column name to inferred
     *         {@link ValueType} for each column.
     */
    dataType(): TupleType;

    /**
     * @return {@link ValueType} of elements in this Data as a dynamic Obj reference type
     */
    elementType(): ValueType;

    /**
     * Returns true if we are in lazy evaluation mode. If false, we evaluate operations on Data eagerly
     */
    static lazyEvaluationMode(): boolean;

    /**
     * @param lazy
     *         Sets the evaluation mode to either lazy or eager if specified.
     */
    static setEvaluationMode(lazy: boolean): void;

    /**
     * If true, the python function annotated by @profile will be profiled by cprofile
     */
    static cprofileEnabled(): boolean;

    /**
     * Function to enable cprofile on the concrete data type
     */
    static setCprofileEnabled(enabled: boolean): void;

    /**
     * Execute the specified lambda against each value of the collection. The first lambda argument is the value and the
     * second is the index.
     */
    each(action: λBiConsumer<any, number | null>): void;

    /**
     * Execute the specified lambda against each value of the collection. The lambda argument is the value.
     */
    each(action: λConsumer<any>): void;

    /**
     * Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
     * interrupt iteration. The first lambda argument is the value and the second is the index.
     */
    eachWhile(action: λBiPredicate<any, number | null>): boolean;

    /**
     * Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
     * interrupt iteration. The lambda argument is the value.
     */
    eachWhile(action: λPredicate<any>): boolean;

    /**
     * @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
     * @param col
     *        Collection from which Data needs to be constructed
     * Supports all C3 collection types except map
     * For instance , for collection<Obj>:
     * ```js
     * Data.fromCollection(Bear.array(Bear.make().withName("B1")))
     * For Collection <Tuple> :
     * tupleType = ValueType.fromString("{ key: string, count: int, dim: Dimension }")
     * tupleValue = tupleType.makeValue({ key: 'foo', count: 14, dim: { value: 22.33 } })
     * Data.fromCollection(C3.Array.of(tupleType, tupleValue))
     * ```
     * @param dataset
     *        dataset on which this Data needs to be created
     * @param include
     *        If specified, only those fields provided as part of include will be included on the result Data
     * @return an instance of Data from the provided collection of {@link Obj}s or {@link Tuple}s
     */
    static fromCollection(col: Collection<Obj | null> | null | Collection<Tuple | null> | null, dataset?: Dataset | null, include?: string | null): Data.Lazy | null;

    /**
     * @return an instance of Data from the provided tuple with structure of {columnName:[value]}
     * For instance, make a tuple of
     * {type:{subject: [string], timestamp:[datetime], value:[double]},
     * subject:['a','b'], timestamp:[2000-01-01, 2000-01-02]
     * value: [1,2]}
     * calling Data.fromTuple(tuple) returns :
     *   subject  timestamp  value
     * 0       a 2000-01-01    1.0
     * 1       b 2000-01-02    2.0
     */
    static fromTuple(tuple: Tuple, dataset?: Dataset | null): Data.Lazy | null;

    /**
     * Converts this data to a {@link Data.Pandas}. If parent dataset is not provided then will use default data set.
     */
    toDataPandas(ds?: Dataset | null): Data.Pandas | null;

    /**
     * Apply a function along an axis of the {@link Data}.
     *
     * Supports a subset of arguments to
     * [pandas.DataFrame.apply](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.apply.html)
     *
     * Example usage:
     * ```py
     * >>> df = pd.DataFrame({"a" : ["foo", "foo", "baz", "qux"],
     * ...                    "b" : [10, 20, 30, 30],
     * ...                    "c" : [1, 2, 3, 4]})
     * >>> dt = c3.Data.from_pandas(df)
     * >>> dt.apply(lambda x: x+2, axis=1)
     *       a   b  c
     * 0  foo2  12  3
     * 1  foo2  22  4
     * 2  baz2  32  5
     * 3  qux2  32  6
     *
     * >>> def add_two(x):
     *         return x+2
     * >>> dt.apply(add_two, axis=1)
     *       a   b  c
     * 0  foo2  12  3
     * 1  foo2  22  4
     * 2  baz2  32  5
     * 3  qux2  32  6
     *
     * @param func
     *         lambda to apply.
     * @param axis
     *         axis along which the function is applied: 0 applies function to each column, 1 applies to each row.
     * @return a {@link Data} that represents the result of applying the given function along the given axis of the original data.
     */
    apply(func: λFunction<any, any>, axis?: number | null): Data | null;

    /**
     * Mutably sets selected values in this Data.
     * @param selector
     *        Determines criteria for selection. Legal row selectors are:
     *            - single column label (selects column)
     *            - array of column label(s) (selects columns)
     *            - array of booleans (must be same length as this.shape[1], selects rows)
     *            - single-column Data (Series) of booleans (must be same length as this.shape[1], selects rows)
     *        Cannot be null. Deos not support slicing.
     * @param value
     *        Value to set for selected item(s). Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     *            - Data
     *            - 2D array
     */
    setItem(selector: any, value: any): Data | null;

    remove(selector: any): void;

    /**
     * Get the profile folder
     */
    static profileFolder(): string;

    /**
     * Set the profile folder
     * @param folder
     *        All profile files will be saved in this folder. This folder could be tmp folders, which will be deleted
     *        after the ttl time specified in {@link TmpFileSpec}
     */
    static setProfileFolder(folder: string): void;

    /**
     * Create a `Data` instance from a {@link File} with user provided spec
     * Example usage:
     * ```py
     * >>> file = File.fromString("file.csv")
     * ```
     *
     * @param file
     *           File or the given folder where files are present
     * @param Spec
     *          {@link Data.SourceSpec},Configuration options for reading the data
     * @return a {@link Data} that contains the data of the file(s).
     */
    static fromFile(file: File, spec: Data.SourceSpec): Data | null;

    /**
     * Test whether two objects contain the same elements
     */
    equal_(other: Data): boolean;

    /**
     * @param tupleFields
     *         (key - field name, value - field type) for the dynamic object element type.
     * @param data
     *         list of elements to be populated into the table, in form of map with keys matching {@link #tupleFields}.
     * @param dataset
     *         Dataset to attach this Data to. If null, use the `default` dataset.
     * @return a newly instantiated {@link Data} with dynamic object element type.
     */
    static fromTuples(tupleFields: C3.Map<string | null, ValueType | null> | null, data: C3.Array<C3.Map<string | null, any>> | null, dataset?: Dataset | null): Data;

    /**
     * {@link Data#_repr_} with a better name
     */
    repr(): string | null;

    /**
     * Convert {@link Data} to {@link Data.Spec}
     */
    toDataSpec(): Data.Spec | null;

    /**
     * Create instance of Data from Timeseries
     */
    static fromTimeseries(ts: Timeseries<any>): Data | null;

    /**
     * Operation represents using the `_item_` (bracket syntax) protocol on a Pandas DataFrame. E.g. `df[fst]`
     */
    getItem(fst?: any): any;

    /**
     * Operation represents using the `_item_` (bracket syntax) protocol on a Pandas iloc Indexer.
     * should pass in an empty Slice object if fst value is not provided but the snd value is.
     * E.g. `df.iloc[fst]`, or `df.iloc[:, snd]`, or `df.iloc[fst, snd]`
     */
    getIloc(fst?: any, snd?: any): any;

    /**
     * Operation represents using the `_item_` (bracket syntax) protocol on a Pandas loc Indexer.
     * should pass in an empty Slice object if fst value is not provided but the snd value is.
     * E.g. `df.loc[fst]`, or `df.loc[:, snd]`, or `df.loc[fst, snd]`
     */
    getLoc(fst?: any, snd?: any): any;

    /**
     * Mutably sets selected values in this Data.
     * @param fst
     *        Determines criteria for row selection. Legal row selectors are:
     *            - single row label
     *            - array of row label(s)
     *            - {@link Slice} of row labels
     *            - array of booleans (must be same length as this.shape[0])
     *            - single-column Data (Series) of booleans (must be same length as this.shape[0])
     *        Cannot be null. Selecting all rows is represented as an empty Slice (df.loc[:, ...])
     * @param snd
     *        Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
     *        label" with "column name". If null, all columns are selected.
     * @param value
     *        Value to set for selected row/column intersection. Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     *            - Data
     *            - 2D array
     *
     * @see DataLocIndexer#set
     */
    setLoc(fst: any, snd?: any, value: any): Data | null;

    /**
     * Mutably sets selected values in this Data.
     * @param fst
     *        Determines criteria for row selection. Legal row selectors are:
     *            - single row index
     *            - array of row indices
     *            - {@link Slice} of row indices
     *            - array of booleans (must be same length as this.shape[0])
     *            - single-column Data (Series) of booleans (must be same length as this.shape[0])
     *        Cannot be null. Selecting all rows is represented as an empty Slice (df.iloc[:, ...])
     * @param snd
     *        Determines criteria for column selection. Legal column selectors are same as row selectors, replacing "row
     *        label" with "column name". If null, all columns are selected.
     * @param value
     *        Value to set for selected row/column intersection. Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     *            - Data
     *            - 2D array
     *
     * @see DataIlocIndexer#set
     */
    setIloc(fst: any, snd?: any, value: any): Data | null;

    /**
     * Return a unique ID for a new Data
     */
    static _new_data_name(prefix: string): string;

    /**
     * Helper function to convert a numpy array into a pandas dataframe, used by {@link #from_numpy}.
     *
     * @param ndarray
     *           the numpy array to convert
     * @return a pandas dataframe
     */
    static _numpy_to_pandas_native(ndarray: any): any;

    /**
     * Creates a Data from a PkgInference.Populate the Data.Lazy chain by visiting the pkgInference in a
     * topologicalSort order.
     * Additional operations on Data.Lazy can be added with the filter lambda operations.
     */
    static fromDataFlow(dataFlow: PkgInference, filter?: λFunction<DataImpl.Lazy, DataImpl.Lazy> | null): Data;

    /**
     * Removes this Data from its Dataset. Error will be thrown if calling type is not {@link Data.Stateful}.
     */
    toLazy(): Data.Lazy | null;

    /**
     * @param tableName
     *    the table name for this Data.Persisted.
     * @param id
     *    the id for this Data.Persisted.
     * @return a persisted instance of this Data or this instance, if this is already persisted. Persistence means that
     * the storage backing the instance of Data is non-ephemeral.
     * Note that the input Data cannot be empty.
     */
    toPersisted(tableName?: string | null, id?: string | null): Data;

    /**
     * @return a local persisted instance of this Data or this instance, if this is already persisted.
     * See {@link Data.Persisted.Local}.
     */
    toPersistedLocal(): Data;

    /**
     * Set of reflected operators from Pandas
     */
    static reflectedOperators(): C3.Set<string | null>;

    /**
     * Perform a bitwise "and" operation on the Data with "other"
     */
    and(other: any): Data | null;

    /**
     * Perform a bitwise "or" operation on the Data  with "other"
     */
    or(other: any): Data | null;

    /**
     * Implements pandas assign semantics from pandas version 1.3.4.
     * @param kwargs
     *        The map or dictionary of new column names to their new values. Can be:
     *            - list
     *            - Data.Series
     *            - Data only if it has 1 column
     * @return
     *        {@link Data} with new column names specified by kwargs
     */
    assign(kwargs?: C3.Map<string | null, C3.Array<any> | Data | null | Data.Series | null | null>): Data | null;

    static _valueTypeToPandasDtype(value: ValueType): string | null;

    /**
     *  Flatten specified columns. The behavior of flatten is different when:
     *    column dtype is a list-like: list is flattened, similar to `Data#explode`
     *    column dtype is a map-like: dict is expanded such that the keys of the dict become new columns in the Data
     *  Only one of include or level can be specified at a time, otherwise an error will be thrown.
     *  @param include
     *         A comma separated set of columns that determine what data to return from this operation, `a.b.c, z.x`
     *  @param level
     *         The depth at which to flatten and return all nested data
     *  @return
     *         {@link Data} when multiple columns are returned using include or when using level on a {@link Data} with
     *                      multiple columns
     *         {@link Data.Series} when a single column is returned using include
     *
     *  Examples:
     *  ```py
     *  data = c3.Data.dataFrame({"a": [{"aa": 1, "ab": 1}, {"aa": 2, "ab": 2}], "b": [[{"bb": 1}], [{"bb": 2}]]})
     *  data.flatten("a") ->
     *   0 {"aa": 1, "ab": 1}
     *   1 {"aa": 2, "ab": 2}
     *
     *  data.flatten("a.aa")
     * .     "aa"
     *   0  1
     *   1  2
     *
     *  data.flatten("b.bb") ->
     * .    "bb"
     *   0  1
     *   1  2
     *
     *  data.flatten("a.ab, b.bb") ->
     * .    "a.ab" "b.bb"
     *   0  1      1
     *   1  2      2
     *
     *  data.flatten(level=-1) ->
     * .        "a.aa"      "a.ab"    "b.bb"
     *   0      1           1         1
     *   1      2           2         2
     *  ```
     */
    flatten(include?: string | null, level?: number | null): Data | null | Data.Series | null;

    /**
     * Align two objects on their axes with the specified join method.
     *
     * Join method is specified for each axis Index.
     * see: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.align.html
     */
    _align(other?: any, join?: string | null, axis?: any, level?: any, copy?: any, fill_value?: any, method?: string | null, limit?: any, fill_axis?: any, broadcast_axis?: any): C3.Array<any> | null;

    /**
     * Returns column names as an array of string
     */
    columnNames(): C3.Array<string | null>;

    /**
     * Checks whether this instance has the input column name
     */
    hasColumn(colName: any): boolean;

    /**
     * Checks whether this instance has all the input column names
     */
    hasColumns(colNames: C3.Array<any>): boolean;

    /**
     * @return a sliced {@link Data} instance based on the spec provided. This is used internally in {@link #stream} to
     * yield {@link Data} elements in the resulting stream.
     */
    slice(spec?: Data.SliceSpec | null): Data | null;

    /**
     * @return a stream of this {@link Data} where each element is a "slice" of data points of the {@link Data}, according
     *            to the dimensions specified by the caller.
     * Usage:
     * ```python
     * stream_data = this.stream(rowCount=500)
     * while stream_data.hasNext():
     *    df = stream_data.next()
     *    ...
     * stream_data.close()
     * ```
     */
    stream(spec?: Data.StreamSpec | null): Data.Stream;

    /**
     * @return True if this Data is empty.
     */
    isEmpty(): boolean;

    /**
     * @return first element.
     */
    _first(): any;

    /**
     * @return first n element.
     */
    _first(n: number): Data | null;

    /**
     * Finds first element in this collection satisfying provided condition.
     */
    _first(test: λPredicate<any>): any;

    /**
     * @return value type of a named field.
     */
    fieldValueType(field: string): ValueType | null;

    /**
     * @return the unary arithmetic `-` operations.
     */
    neg(): Data | null;

    /**
     * @return the unary arithmetic `~` operations.
     */
    invert(): Data | null;

    /**
     * Convert the Data to a binary value. This can only be done if
     * the underlying object backing the Data is a Data.Pandas backed by a tuple.
     * For instance, Data created either from `eval` or `evalMetrics` calls.
     */
    toTuplesBinary(): any;

    /**
     * Convert the Data to an {@link ArrowIterator} which will be used to iterate through the arrow values. If this Data
     * does not have tuple field or if the tuple fields can't be supported by pyarrow, this function returns null.
     */
    toArrowIterator(): ArrowIterator;

    /**
     * @return {@link EvalMetricsResult} from the current instance.
     * Please note that this is only supported when the source of the Data instance is {@link Evaluatable#eval} or {@link FeatureEvaluatable#evalFeatureSetBatch}
     * and there are no other operations before calling **toEvalMetricsResult**.
     */
    toEvalMetricsResult(): EvalMetricsResult | null;

    /**
     * @return true if the #this is instance of Timeseries or #isEvaluatableEval and can return single Timeseries
     */
    isTimeseries(): boolean;

    /**
     * @return the inferred {@link Interval}.
     * If {@link #ths} is an instance of {@link Timeseries} or {@link #isEvaluatableEval}, then the interval is
     * retrieved from the **Timeseries** or the associated {@link EvalSpec} respectively. In other cases, it's inferred
     * from the {@link Data.Flow}.
     * Please note an empty string may be returned if the Interval could not be inferred.
     */
    inferredInterval(): string | null;

    /**
     * @return default aggregation function for this data
     */
    dataDefaultAgg(): string | null;

    /**
     * Extracts all depending {@link Data.Lazy} instances that themselves don't depend on any other {@link Data.Lazy}
     */
    sources(): C3.Array<Data | null>;

    /**
     * Creates feature from {@link Evaluatable#eval}
     */
    static fromEvalSpec(subjectType: Type, spec: EvalSpec | null): Data.Lazy;

    /**
     * Creates Data.Lazy instance from {@link LegacyMetric}
     */
    static fromMetric(subjectType: Type, legacy: LegacyMetric): Data.Lazy;

    /**
     * Creates Data.Lazy instance from metric & interval
     */
    static fromMetric(subjectType: Type, metric?: string | Metric | null | null, interval: string): Data.Lazy;

    /**
     * Creates a {@link Data.Lazy} instance from a {@link Formula} instance
     */
    static fromFormula(subjectType: Type, formula: Formula): Data.Lazy;

    /**
     * Some methods, such as {@link Data#head}, are generally called once without using the result for subsequent
     * operations. For these methods, it makes sense to additionally cache the parent operation, as we anticipate the
     * immediate results will not be used for further operations, but rather operations will be called on the parent.
     * @return a list of the name of all such methods on Data
     */
    static cacheParentMethods(): C3.Set<string | null>;

    _toPandas(datasetId: string, returnNullIfNotCached?: boolean): Data.Pandas | null;
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

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λPredicate<T> {
  (t: T): boolean
}
