// TypeScript definitions for the C3 type Data.ManualOpSpecs.ReadCsvGlobSpec

/**
 * Spec containing parameters for {@link Data#read_csv_glob}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.ManualOpSpecs.ReadCsvGlobSpec
 */
declare namespace Data.ManualOpSpecs {
  export interface IReadCsvGlobSpec {

    sep?: string | null;

    delimiter?: string | null;

    header?: number | null | C3.Array<number | null> | Array<number | null> | string | null | null;

    names?: C3.Array<string | null> | Array<string | null>;

    index_col?: number | null | string | null | C3.Array<number | null> | Array<number | null> | C3.Array<string | null> | Array<string | null> | boolean | null;

    usecols?: C3.Array<string | null> | Array<string | null>;

    dtype?: string | null | C3.Map<string | null, string | null> | {[key: string | null]: string | null} | null;

    true_values?: C3.Array<any> | Array<any>;

    false_values?: C3.Array<any> | Array<any>;

    skipinitialspace?: boolean;

    skiprows?: number | null | C3.Array<number | null> | Array<number | null> | null;

    skipfooter?: number | null;

    nrows?: number | null;

    na_values?: string | null | C3.Map<string | null, string | null> | {[key: string | null]: string | null} | null;

    keep_default_na?: boolean;

    na_filter?: boolean;

    skip_blank_lines?: boolean;

    parse_dates?: C3.Array<string | null> | Array<string | null>;

    infer_datetime_format?: boolean;

    keep_date_col?: boolean;

    date_parser: λFunction<any, any>;

    dayfirst?: boolean;

    cache_dates?: boolean;

    thousands?: string | null;

    decimal?: string | null;

    quotechar?: string | null;

    quoting?: number | null;

    escapechar?: string | null;

    comment?: string | null;

    encoding?: string | null;

    error_bad_lines?: boolean;

    warn_bad_lines?: boolean;

    on_bad_lines?: string | null;

    delim_whitespace?: boolean;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
/**
 * Spec containing parameters for {@link Data#read_csv_glob}.
 *
 * @remarks this represents a made instance of Data.ManualOpSpecs.ReadCsvGlobSpec
 */
declare namespace Data.ManualOpSpecs {
  export class ReadCsvGlobSpec extends Obj {

    readonly sep?: string | null;
    withSep(sep: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly delimiter?: string | null;
    withDelimiter(delimiter: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly header?: number | null | C3.Array<number | null> | string | null | null;
    withHeader(header: number | null | C3.Array<number | null> | Array<number | null> | string | null | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly names?: C3.Array<string | null>;
    withNames(names: C3.Array<string | null> | Array<string | null>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly index_col?: number | null | string | null | C3.Array<number | null> | C3.Array<string | null> | boolean | null;
    withIndex_col(index_col: number | null | string | null | C3.Array<number | null> | Array<number | null> | C3.Array<string | null> | Array<string | null> | boolean | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly usecols?: C3.Array<string | null>;
    withUsecols(usecols: C3.Array<string | null> | Array<string | null>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly dtype?: string | null | C3.Map<string | null, string | null> | null;
    withDtype(dtype: string | null | C3.Map<string | null, string | null> | {[key: string | null]: string | null} | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly true_values?: C3.Array<any>;
    withTrue_values(true_values: C3.Array<any> | Array<any>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly false_values?: C3.Array<any>;
    withFalse_values(false_values: C3.Array<any> | Array<any>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly skipinitialspace?: boolean;
    withSkipinitialspace(skipinitialspace: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly skiprows?: number | null | C3.Array<number | null> | null;
    withSkiprows(skiprows: number | null | C3.Array<number | null> | Array<number | null> | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly skipfooter?: number | null;
    withSkipfooter(skipfooter: number | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly nrows?: number | null;
    withNrows(nrows: number | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly na_values?: string | null | C3.Map<string | null, string | null> | null;
    withNa_values(na_values: string | null | C3.Map<string | null, string | null> | {[key: string | null]: string | null} | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly keep_default_na?: boolean;
    withKeep_default_na(keep_default_na: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly na_filter?: boolean;
    withNa_filter(na_filter: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly skip_blank_lines?: boolean;
    withSkip_blank_lines(skip_blank_lines: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly parse_dates?: C3.Array<string | null>;
    withParse_dates(parse_dates: C3.Array<string | null> | Array<string | null>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly infer_datetime_format?: boolean;
    withInfer_datetime_format(infer_datetime_format: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly keep_date_col?: boolean;
    withKeep_date_col(keep_date_col: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly date_parser: λFunction<any, any>;
    withDate_parser(date_parser: λFunction<any, any>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly dayfirst?: boolean;
    withDayfirst(dayfirst: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly cache_dates?: boolean;
    withCache_dates(cache_dates: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly thousands?: string | null;
    withThousands(thousands: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly decimal?: string | null;
    withDecimal(decimal: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly quotechar?: string | null;
    withQuotechar(quotechar: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly quoting?: number | null;
    withQuoting(quoting: number | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly escapechar?: string | null;
    withEscapechar(escapechar: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly comment?: string | null;
    withComment(comment: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly encoding?: string | null;
    withEncoding(encoding: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly error_bad_lines?: boolean;
    withError_bad_lines(error_bad_lines: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly warn_bad_lines?: boolean;
    withWarn_bad_lines(warn_bad_lines: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly on_bad_lines?: string | null;
    withOn_bad_lines(on_bad_lines: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    readonly delim_whitespace?: boolean;
    withDelim_whitespace(delim_whitespace: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    static fromJson(json: any | null): Data.ManualOpSpecs.ReadCsvGlobSpec | null;

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
    static fromJsonString(json: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec | null;

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
    static fromXmlString(xml: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.ManualOpSpecs.ReadCsvGlobSpec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withoutFieldAtPath(path: string): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withoutField(field: string | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withoutField(field: FieldType | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    defaultField(field: string): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    defaultField(field: FieldType): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    unsetField(field: string): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    unsetField(field: FieldType): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    removeField(field: string): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    removeField(field: FieldType): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.ManualOpSpecs.ReadCsvGlobSpec;

    mergeJson(json: any | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.ManualOpSpecs.ReadCsvGlobSpec | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.ManualOpSpecs.ReadCsvGlobSpec | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.ManualOpSpecs.ReadCsvGlobSpec | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.ManualOpSpecs.ReadCsvGlobSpec | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.ManualOpSpecs.ReadCsvGlobSpec | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    static make(fields: any, withDefaults?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.ManualOpSpecs.ReadCsvGlobSpec;

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
    afterMake(): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.ManualOpSpecs.ReadCsvGlobSpec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.ManualOpSpecs.ReadCsvGlobSpec>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.ManualOpSpecs.ReadCsvGlobSpec;
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
