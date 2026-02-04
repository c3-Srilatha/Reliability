// TypeScript definitions for the C3 type DataGrid.Tuples

/**
 * This implementation of {@link DataGrid} is based on a collection of {@link TupleType}. There is one row for each
 * tuple and columns for each of the fields across all tuples. If the collection is a {@link Map} row labels are the
 * map keys and otherwise row labels are the indices.
 *
 * The tuples need not be heterogenous and the there will be columns for all distinct indices/field names.
 *
 * If the collection is a {@link Stream}, the totalSize will return `null` until the stream has been exhausted.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataGrid.Tuples
 */
declare namespace DataGrid {
  export interface ITuples {

    /**
     * The raw data from which the grid was built.
     */
    source?: any;

    /**
     * An informative label representing the source of the data. This is meant to be displayed along with the grid
     * as its title or caption. Typically an abbreviated value type of the data.
     */
    label?: string | null;

    /**
     * A more detailed description of the source of the data. Typically the full value type of the data.
     */
    description?: string | null;

    /**
     * The column meta information for this grid. Note that this does _not_ include the label as a column.
     *
     * @see #labelCol
     */
    cols?: C3.Array<DataGrid.Col> | Array<IDataGrid.Col>;

    _coll: ICollection<Tuple | null>;

    _stream?: Stream<Tuple | null> | Array<Tuple | null>;

    _buffer?: any;

    _keys?: C3.Array<any> | Array<any>;

    /**
     * The tuple type common to all instances. This will only be set if the collection is of heterogenous types since
     * tuple types do not form a hierarchy.
     */
    tupleType?: ITupleType | null;
  }
}

/**
 * This implementation of {@link DataGrid} is based on a collection of {@link TupleType}. There is one row for each
 * tuple and columns for each of the fields across all tuples. If the collection is a {@link Map} row labels are the
 * map keys and otherwise row labels are the indices.
 *
 * The tuples need not be heterogenous and the there will be columns for all distinct indices/field names.
 *
 * If the collection is a {@link Stream}, the totalSize will return `null` until the stream has been exhausted.
 *
 * @remarks this represents a made instance of DataGrid.Tuples
 */
declare namespace DataGrid {
  export class Tuples extends Obj {

    /**
     * The raw data from which the grid was built.
     */
    readonly source?: any;
    withSource(source: any): DataGrid.Tuples;

    /**
     * An informative label representing the source of the data. This is meant to be displayed along with the grid
     * as its title or caption. Typically an abbreviated value type of the data.
     */
    readonly label?: string | null;
    withLabel(label: string | null): DataGrid.Tuples;

    /**
     * A more detailed description of the source of the data. Typically the full value type of the data.
     */
    readonly description?: string | null;
    withDescription(description: string | null): DataGrid.Tuples;

    /**
     * The column meta information for this grid. Note that this does _not_ include the label as a column.
     *
     * @see #labelCol
     */
    readonly cols?: C3.Array<DataGrid.Col>;
    withCols(cols: C3.Array<DataGrid.Col> | Array<IDataGrid.Col>): DataGrid.Tuples;

    readonly _coll: Collection<Tuple | null>;
    with_coll(_coll: ICollection<Tuple | null>): DataGrid.Tuples;

    readonly _stream?: Stream<Tuple | null>;
    with_stream(_stream: Stream<Tuple | null> | Array<Tuple | null>): DataGrid.Tuples;

    readonly _buffer?: any;
    with_buffer(_buffer: any): DataGrid.Tuples;

    readonly _keys?: C3.Array<any>;
    with_keys(_keys: C3.Array<any> | Array<any>): DataGrid.Tuples;

    /**
     * The tuple type common to all instances. This will only be set if the collection is of heterogenous types since
     * tuple types do not form a hierarchy.
     */
    readonly tupleType?: TupleType | null;
    withTupleType(tupleType: ITupleType | null): DataGrid.Tuples;

    /**
     * Implements the js `.length` property or py `len()` support.
     * @return the number of elements in this instance
     */
    _length_(): number;

    /**
     * Number of elements in this instance.
     */
    get size(): number;

    /**
     * @return true if this instance is empty.
     */
    isEmpty(): boolean;

    /**
     * Build a string representation of the already-loaded rows of the grid. This formats a string that will show the
     * cells as a table when rendered in a monospace font.
     */
    toString(): string | null;

    /**
     * Build a string representation of the already-loaded rows of the grid. This formats a string that will show the
     * cells as a table when rendered in a monospace font.
     *
     * The #spec can be be used to customize the output, for example setting
     * {@link DataGrid.FormatSpec#unicodeGrid unicodeGrid} to use prettier characters than ASCII for the grid lines.
     */
    toString(spec: DataGrid.FormatSpec | null): string | null;

    /**
     * Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
     */
    _repr_(): string | null;

    /**
     * Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
     */
    _reprHtml_(): string | null;

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

    /**
     * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
     * null may be returned. The implementation must be available within the browser (typically `js-client`).
     */
    renderer(): DataGrid.HtmlRenderer | null;

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
    static fromJson(json: any | null): DataGrid.Tuples | null;

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
    static fromJsonString(json: string | null): DataGrid.Tuples | null;

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
    static fromXmlString(xml: string | null): DataGrid.Tuples | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): DataGrid.Tuples | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): DataGrid.Tuples;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGrid.Tuples;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGrid.Tuples;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGrid.Tuples | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGrid.Tuples | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataGrid.Tuples;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGrid.Tuples;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGrid.Tuples;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): DataGrid.Tuples;

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
    withField(field: string, value: any, doNotConvert?: boolean): DataGrid.Tuples;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): DataGrid.Tuples;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataGrid.Tuples;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataGrid.Tuples;

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
    withoutFieldAtPath(path: string): DataGrid.Tuples;

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
    withoutField(field: string | null): DataGrid.Tuples;

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
    withoutField(field: FieldType | null): DataGrid.Tuples;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): DataGrid.Tuples;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataGrid.Tuples;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): DataGrid.Tuples;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataGrid.Tuples;

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
    defaultField(field: string): DataGrid.Tuples;

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
    defaultField(field: FieldType): DataGrid.Tuples;

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
    unsetField(field: string): DataGrid.Tuples;

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
    unsetField(field: FieldType): DataGrid.Tuples;

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
    removeField(field: string): DataGrid.Tuples;

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
    removeField(field: FieldType): DataGrid.Tuples;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataGrid.Tuples;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): DataGrid.Tuples;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataGrid.Tuples;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataGrid.Tuples;

    mergeJson(json: any | null): DataGrid.Tuples;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataGrid.Tuples;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): DataGrid.Tuples;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<DataGrid.Tuples | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<DataGrid.Tuples | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<DataGrid.Tuples | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<DataGrid.Tuples | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<DataGrid.Tuples | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, DataGrid.Tuples | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataGrid.Tuples | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<DataGrid.Tuples | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<DataGrid.Tuples | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataGrid.Tuples;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataGrid.Tuples;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataGrid.Tuples;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): DataGrid.Tuples;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataGrid.Tuples;

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
    static make(fields: any, withDefaults?: boolean): DataGrid.Tuples;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataGrid.Tuples;

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
    afterMake(): DataGrid.Tuples;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): DataGrid.Tuples;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataGrid.Tuples>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): DataGrid.Tuples;

    /**
     * Meta information about the label. This is not part of the data proper, but represents the row labels generated
     * by the grid.
     *
     * The label column has an index of -1, since it's synthesized by the grid.
     */
    get labelCol(): DataGrid.Col;

    /**
     * Get the column meta information for a single column by its index in the #cols array.
     *
     * @param index 0-based index
     * @param failIfMissing if true, throw error if this index is out of range
     */
    col(index: number, failIfMissing?: boolean): DataGrid.Col | null;

    /**
     * Get the column meta information for a single column by its name (access path). Note that there is no guarantee
     * that column names are unique.
     *
     * @param name the column name to find
     * @param failIfMissing if true, throw error if no column has this name
     */
    col(name: string, failIfMissing?: boolean): DataGrid.Col | null;

    /**
     * Return the meta information for the timestamp column. This is a column with the name "timestamp" and the type
     * `datetime` that appears in {@link Timeseries} and {@link Feature} evaluations. Other numeric columns are likely
     * to be value(s) of the timeseries and are typically charted on the Y axis against the timestamp column on the X.
     */
    timestampCol(failIfMissing?: boolean): DataGrid.Col | null;

    /**
     * Get a single row from the grid. Note that this only returns rows that have already been loaded.
     *
     * @param index 0-based index
     * @param failIfMissing if true and the index is out of range, throw an error
     * @param spec format specification for the cell strings
     *
     * @see #hasMore
     */
    row(index: number, failIfMissing?: boolean, spec?: DataGrid.FormatSpec | null): DataGrid.Row | null;

    /**
     * Return a stream of rows that starts with the already-loaded rows and will continue to load more data as long
     * as the stream is iterated.
     *
     * In addition to the regular behavior of #row, {@link DataGrid.FormatSpec#filterColumns} and
     * {@link DataGrid.FormatSpec#sortColumns sortColumns} are supported.
     *
     * @param spec format specification for the cell strings
     */
    rows(spec?: DataGrid.FormatSpec | null): Stream<DataGrid.Row | null>;

    /**
     * Whether there are more rows than have already been loaded.
     */
    get hasMore(): boolean;

    /**
     * Load more rows from the underlying source. If there are no more rows available, this will return `0`.
     *
     * @param limit maximum number of additional rows to load
     * @return number of additional rows loaded
     */
    loadMore(limit?: number): number;

    /**
     * Estimate the total number of rows available. If the underlying data is fully loaded, this should return the
     * same value as #size, otherwise it should return the total number of rows if known. If the total number of
     * rows is not known, it should return `null`.
     */
    get totalSize(): number | null;

    /**
     * Extract the source values from the already-loaded cells of the grid.
     *
     * @param spec format specification for the cell strings
     *
     * @see DataGrid.Row#strings
     */
    strings(spec?: DataGrid.FormatSpec | null): C3.Array<C3.Array<string | null>>;

    /**
     * Extract the source values from the already-loaded cells of the grid.
     *
     * @see DataGrid.Row#sources
     */
    sources(): C3.Array<C3.Array<any>>;

    /**
     * Build a comma-separated values string from all rows of the grid. This formats a string that will be importable
     * into a spreadsheet program. The data columns will contain the printable representations, just as they would
     * appear in #toString.
     *
     * @see DataGrid.Row#strings
     */
    csv(): string | null;

    /**
     * Return a string that creates an HTML `<table>` element that displays the contents of the DataGrid. Note that
     * this class is also {@link HtmlRenderable}.
     *
     * @see DataGrid#toString
     */
    toHtml(spec?: DataGrid.HtmlSpec | null): string;

    /**
     * Return a string that creates a Markdown table that displays the contents of the DataGrid.
     *
     * @see DataGrid#toString
     * @see MarkdownTable
     */
    toMarkdown(spec?: DataGrid.HtmlSpec | null): string;

    /**
     * Extract the cell values from each row for a single column. The resulting array will be the same length as the
     * data grid's {@link #size} (only rows already loaded).
     *
     * @param index 0-based column index
     *
     * @see DataGrid.Cell#source
     */
    colValues(index: number): C3.Array<any>;

    /**
     * Extract the label source values from each row. The resulting array will be the same length as the data grid's
     * {@link #size} (only rows already loaded).
     *
     * @see DataGrid.Row#labelSource
     */
    labelValues(): C3.Array<any>;

    /**
     * Attempt to instantiate a data grid from a local data structure. This handles collections and anything that mixes
     * {@link DataGriddable}. It also may handle native structures where appropriate, such as unmade collections.
     *
     * If there is no known path to creating a DataGrid, or there isn't enough info in the specified instance, null is
     * returned.
     */
    static fromAny(value: any, spec?: DataGrid.LoadSpec | null): DataGrid | null;

    /**
     * Generate the displayed title for a value type. This is generally ValueType#toLabel, but collections are further
     * simplified.
     *
     * @see ValueType#toLabel
     */
    static valueTypeLabel(vt: ValueType): string;

    /**
     * Get the value type of the collection from which the grid is built.
     */
    collectionType(): CollectionType;

    /**
     * Get whether the the collection from which the grid is built is a map. Maps will use the map keys as the labels
     * instead of row indecies.
     */
    isMap(): boolean;

    static _useStream(coll?: Collection<any> | null): Stream<any>;

    static _initialLoad(coll?: Collection<any> | null, spec?: DataGrid.LoadSpec | null): C3.Array<any>;

    _rowPair(index: number): Pair<any, any> | null;

    _formatLabel(value?: any): string | null;

    /**
     * Use the specified collection of tuples as the basis for the visualization. This is the only valid way to
     * instantiate an instance so that state is properly set up.
     */
    static fromCollection(coll: Collection<any>, spec?: DataGrid.LoadSpec | null): DataGrid.Tuples;
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
