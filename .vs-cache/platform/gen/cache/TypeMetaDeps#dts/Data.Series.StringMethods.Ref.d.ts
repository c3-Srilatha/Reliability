// TypeScript definitions for the C3 type Data.Series.StringMethods.Ref

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Series.StringMethods.Ref
 */
declare namespace Data.Series.StringMethods {
  export interface IRef {

    /**
     * Dataset which this Data belongs to
     */
    ds: IDataset;

    /**
     * Id used to reference this Data within the Dataset to which it belongs
     */
    id: string;

    /**
     * Pointer to the underlying {@link DataImpl} that this DataImpl.Ref represents. Either an instance of {@link DataImpl.Lazy} or a
     * reference to a {@link Data.Stateful} by {@link Data.Stateful#id}. There is never a need for any client or
     * downstream platform code to ever directly use this field. Use {@DataImpl#dereference} to follow the pointer if
     * required.
     */
    ref?: string | null | IDataImpl.Lazy | null | null;
  }
}

/**
 * @remarks this represents a made instance of Data.Series.StringMethods.Ref
 */
declare namespace Data.Series.StringMethods {
  export class Ref extends Obj {

    /**
     * Dataset which this Data belongs to
     */
    ds: Dataset;
    withDs(ds: IDataset): Data.Series.StringMethods.Ref;

    /**
     * Id used to reference this Data within the Dataset to which it belongs
     */
    id: string;
    withId(id: string): Data.Series.StringMethods.Ref;

    /**
     * Pointer to the underlying {@link DataImpl} that this DataImpl.Ref represents. Either an instance of {@link DataImpl.Lazy} or a
     * reference to a {@link Data.Stateful} by {@link Data.Stateful#id}. There is never a need for any client or
     * downstream platform code to ever directly use this field. Use {@DataImpl#dereference} to follow the pointer if
     * required.
     */
    ref?: string | null | DataImpl.Lazy | null | null;
    withRef(ref: string | null | IDataImpl.Lazy | null | null): Data.Series.StringMethods.Ref;

    capitalize(): Data.Series | null;

    casefold(): Data.Series | null;

    cat(others?: any, sep?: any, na_rep?: any, join?: any): Data.Series | null | string | null | null;

    center(width?: any, fillchar?: any): Data.Series | null;

    contains(pat?: any, case_?: any, flags?: any, na?: any, regex?: any): Data.Series | null;

    count(pat?: any, flags?: any): Data.Series | null;

    decode(encoding?: any, errors?: any): Data.Series | null;

    encode(encoding?: any, errors?: any): Data.Series | null;

    endswith(pat?: any, na?: any): Data.Series | null;

    extract(pat?: string | null, flags?: number | null, expand?: boolean | null): Data.Series | null | string | null | null;

    extractall(pat?: any, flags?: any): Data | null;

    find(sub?: any, start?: any, end?: any): Data.Series | null;

    findall(pat?: any, flags?: any): Data.Series | null;

    fullmatch(pat?: any, case_?: any, flags?: any, na?: any): Data.Series | null;

    get(i?: any): Data.Series | null;

    get_dummies(sep?: any): Data | null;

    index(sub?: any, start?: any, end?: any): Data.Series | null;

    isalnum(): Data.Series | null;

    isalpha(): Data.Series | null;

    isdecimal(): Data.Series | null;

    isdigit(): Data.Series | null;

    islower(): Data.Series | null;

    isnumeric(): Data.Series | null;

    isspace(): Data.Series | null;

    istitle(): Data.Series | null;

    isupper(): Data.Series | null;

    join(sep?: any): Data.Series | null;

    len(): Data.Series | null;

    ljust(width?: any, fillchar?: any): Data.Series | null;

    lower(): Data.Series | null;

    lstrip(to_strip?: any): Data.Series | null;

    match(pat?: any, case_?: any, flags?: any, na?: any): Data.Series | null;

    normalize(form?: any): Data.Series | null;

    pad(width?: any, side?: any, fillchar?: any): Data.Series | null;

    partition(sep?: any, expand?: any): Data.Series | null | Data | null | Data.MultiIndex | null | null;

    repeat(repeats?: any): Data.Series | null;

    replace(pat?: any, repl?: λFunction<C3.Array<any>, any> | null | string | null | null, n?: number | null, case_?: boolean | null, flags?: number | null, regex?: boolean | null): Data.Series | null;

    rfind(sub?: any, start?: any, end?: any): Data.Series | null;

    rindex(sub?: any, start?: any, end?: any): Data.Series | null;

    rjust(width?: any, fillchar?: any): Data.Series | null;

    rpartition(sep?: any, expand?: any): Data.Series | null | Data | null | Data.MultiIndex | null | null;

    rsplit(pat?: any, n?: any, expand?: any): Data.Series | null | Data | null | Data.MultiIndex | null | null;

    rstrip(to_strip?: any): Data.Series | null;

    slice(start?: any, stop?: any, step?: any): Data.Series | null;

    slice_replace(start?: any, stop?: any, repl?: any): Data.Series | null;

    split(pat?: any, n?: any, expand?: any): Data.Series | null | Data | null | Data.MultiIndex | null | null;

    startswith(pat?: any, na?: any): Data.Series | null;

    strip(to_strip?: any): Data.Series | null;

    swapcase(): Data.Series | null;

    title(): Data.Series | null;

    translate(table?: any): Data.Series | null;

    upper(): Data.Series | null;

    wrap(width?: any): Data.Series | null;

    zfill(width?: any): Data.Series | null;

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
    static fromJson(json: any | null): Data.Series.StringMethods.Ref | null;

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
    static fromJsonString(json: string | null): Data.Series.StringMethods.Ref | null;

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
    static fromXmlString(xml: string | null): Data.Series.StringMethods.Ref | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Series.StringMethods.Ref | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Series.StringMethods.Ref;

    /**
     * Whether all the fields of this instance are empty.
     */
    isEmptyObj(): boolean;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Series.StringMethods.Ref;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Series.StringMethods.Ref;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Series.StringMethods.Ref | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Series.StringMethods.Ref | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.Series.StringMethods.Ref;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Series.StringMethods.Ref;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Series.StringMethods.Ref;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.Series.StringMethods.Ref;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.Series.StringMethods.Ref;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.Series.StringMethods.Ref;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.Series.StringMethods.Ref;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.Series.StringMethods.Ref;

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
    withoutFieldAtPath(path: string): Data.Series.StringMethods.Ref;

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
    withoutField(field: string | null): Data.Series.StringMethods.Ref;

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
    withoutField(field: FieldType | null): Data.Series.StringMethods.Ref;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.Series.StringMethods.Ref;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.Series.StringMethods.Ref;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.Series.StringMethods.Ref;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.Series.StringMethods.Ref;

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
    defaultField(field: string): Data.Series.StringMethods.Ref;

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
    defaultField(field: FieldType): Data.Series.StringMethods.Ref;

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
    unsetField(field: string): Data.Series.StringMethods.Ref;

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
    unsetField(field: FieldType): Data.Series.StringMethods.Ref;

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
    removeField(field: string): Data.Series.StringMethods.Ref;

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
    removeField(field: FieldType): Data.Series.StringMethods.Ref;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.Series.StringMethods.Ref;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.Series.StringMethods.Ref;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.Series.StringMethods.Ref;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.Series.StringMethods.Ref;

    mergeJson(json: any | null): Data.Series.StringMethods.Ref;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.Series.StringMethods.Ref;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.Series.StringMethods.Ref;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.Series.StringMethods.Ref | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.Series.StringMethods.Ref | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.Series.StringMethods.Ref | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.Series.StringMethods.Ref | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.Series.StringMethods.Ref | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.Series.StringMethods.Ref | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.Series.StringMethods.Ref | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.Series.StringMethods.Ref | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.Series.StringMethods.Ref | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.Series.StringMethods.Ref;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.Series.StringMethods.Ref;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.Series.StringMethods.Ref;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.Series.StringMethods.Ref;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.Series.StringMethods.Ref;

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
    static make(fields: any, withDefaults?: boolean): Data.Series.StringMethods.Ref;

    /**
     * Construct an instance with initial state.
     */
    static make(): Data.Series.StringMethods.Ref;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.Series.StringMethods.Ref;

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
    afterMake(): Data.Series.StringMethods.Ref;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.Series.StringMethods.Ref;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.Series.StringMethods.Ref>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.Series.StringMethods.Ref;

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
    dereference(): DataImpl | null;

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
    cache(ds?: Dataset | null): DataImpl | null;

    /**
     * Creates a DataRef in the provided Dataset which points to ths. Overloaded to add Dataset parameter for stateless
     * DataImpl. If not provided, dataset will default to Dataset.inst(). If a Dataset is provided to stateful Data, an
     * exception will be thrown
     */
    toDataRef(ds?: Dataset | null): DataImpl.Ref;

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
    static fromPySrc(pySrc: string, dfs?: C3.Set<DataImpl | null>, vars?: C3.Map<string | null, any>, dataset?: Dataset | null): Data.Series.StringMethods.Ref | null;

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
    static _jsDataProxy(inst: any): Data.Series.StringMethods.Ref;

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
    setField(field: string, value: any, doNotConvert?: boolean): Data.Series.StringMethods.Ref;

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
    setField(field: FieldType, value: any, doNotConvert?: boolean): Data.Series.StringMethods.Ref;

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
