// TypeScript definitions for the C3 type Data.SparkSession

/**
 * Type represent Spark execution session, which is the entry point to c3 Data on Spark.
 * Users have to create an instance of Data.SparkSession with an engine {@link Data.ExecutionEngine}
 * to get access to c3 Data on Spark apis.
 * e.g. ss = c3.SparkCluster.inst().dataSparkSession()
 * In the examples below, 'ss' would refer to the SparkSession we created above.
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.SparkSession
 */
declare namespace Data {
  export interface ISparkSession {

    /**
     * Underlying execution engine ({@link Data.ExecutionEngine}) that executes the plan
     */
    engine?: IData.ExecutionEngine | null;
  }
}

/**
 * Type represent Spark execution session, which is the entry point to c3 Data on Spark.
 * Users have to create an instance of Data.SparkSession with an engine {@link Data.ExecutionEngine}
 * to get access to c3 Data on Spark apis.
 * e.g. ss = c3.SparkCluster.inst().dataSparkSession()
 * In the examples below, 'ss' would refer to the SparkSession we created above.
 *
 * @remarks this represents a made instance of Data.SparkSession
 */
declare namespace Data {
  export class SparkSession extends Obj {

    /**
     * Underlying execution engine ({@link Data.ExecutionEngine}) that executes the plan
     */
    readonly engine?: Data.ExecutionEngine | null;
    withEngine(engine: IData.ExecutionEngine | null): Data.SparkSession;

    /**
     * Read files of any format supported by Spark and construct a {@link Data.Spark.DataFrame} out of the contents.
     * @param path
     *        c3 file path/list of paths to the file.
     * @param format
     *        The {@link MediaType} of the files to read. Supported: CSV, PARQUET, JSON, AVRO, XML, ORC, TEXT.
     *        All files should have the same format. If not provided, it will be inferred from the first file.
     * @param schema
     *        Optional schema to use. If not provided, it will be inferred from data.
     * @param options
     *        Spark data source options.
     */
    read_files(path: string | null | C3.Array<string | null>, format?: string | null, schema?: TupleType | null, options?: C3.Map<string | null, string | null>): Data.Spark.DataFrame | null;

    /**
     * Read a comma-separate values file and construct a {@link Data.Spark.DataFrame} out of the contents.
     * @param filepath_or_buffer
     *           c3 file path/list of paths that contains the csv data.
     * @param spec
     *           read csv spec. See {@link Data.ManualOpSpecs.ReadCsvSpec}.
     * @return a {@link Data.Spark.DataFrame} that contains the data of the file(s).
     */
    read_csv(filepath_or_buffer: string | null | C3.Array<string | null>, spec?: Data.ManualOpSpecs.ReadCsvSpec | null): Data.Spark.DataFrame | null;

    /**
     *  Load a parquet object from the file path, returning a {@link Data.Spark.DataFrame}.
     *  @param path
     *       The c3 file path/list of paths to the parquet file.
     *  @param columns
     * If it's a list of column names, only these columns will be read from the file.
     * Default value is None, which will read all columns.
     *  @param index_col
     * Index column of table in Spark.
     *  @param pandas_metadata
     * If True, try to respect the metadata if the Parquet file is written from pandas.
     *  @param options
     * All other options passed directly into Spark’s data source.
     */
    read_parquet(path: string | null | C3.Array<string | null>, columns?: C3.Array<string | null> | null, index_col?: string | null | C3.Array<string | null> | null, pandas_metadata?: boolean | null, options?: C3.Map<string | null, any>): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} manually from the given data. Corresponds to pyspark.pandas.DataFrame constructor
     */
    DataFrame(data?: C3.Map<string | null, any> | C3.Array<any> | null, index?: any, columns?: any, dtype?: any, copy?: boolean | null): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.Series} manually from the given data. Corresponds to pyspark.pandas.Series constructor
     */
    Series(data?: any, index?: any, dtype?: any, name?: any, copy?: boolean | null, fastpath?: boolean | null): Data.Spark.Series | null;

    /**
     * Construct a {@link Data.Spark.Index} manually from the given data. Corresponds to pyspark.pandas.Index constructor
     */
    Index(data?: any, dtype?: any, copy?: boolean, name?: any, tupleize_cols?: any): Data.Spark.Index | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} from by doing evaluate operation with projections.
     * Projection is a comma-delimited list of projection expressions:
     * - measurements.data.quantity,count(measurements.data.quantity)
     */
    evaluate(typeName: string, spec?: Data.SparkEvaluateSpec | null): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} from EvalMetricsSpec ({@link EvalMetricsSpec}).
     * This is equivalent to `c3.typeName.evalMetrics(spec)`
     */
    evalMetrics(typeName: string, spec?: EvalMetricsSpec | null, batchSize?: number | null): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} from FetchSpec ({@link FetchSpec}).
     * This is equivalent to `c3.typeName.fetch(spec)`
     */
    fetch(typeName: string, spec?: Data.SparkFetchSpec | null): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} from by reading feature set with given id.
     *  @param id
     *         Feature set id
     *  @param batchSize
     *         Maximal number of subjects to be included into single read partition
     *  @param flatten
     *         If false result data frame will include a row per subject with array columns for timestamp and features
     *         If true then expands feature arrays in result dataframe.
     */
    readFeatureSet(id: string, batchSize: number, flatten?: boolean): Data.Spark.DataFrame | null;

    /**
     * Internal methods that construct a {@link Data.Spark.DataFrame} from GlobalTempView of Spark Cluster
     */
    fromView(name: string): Data.Spark.DataFrame | null;

    /**
     * Load content of DataLake table into dataframe.
     */
    load_table(table: DataLake.Table, snapshot?: DataLake.Table.Snapshot | null): Data.Spark.DataFrame | null;

    /**
     * Execute Sql Query on a Spark DataFrame
     * @param query
     *        string of sql to execute
     * @param args
     *        map from name to {@link Data.Spark} or {@link DataLake.Table} that is referenced in the query
     * @param limit
     *        Number of rows to limit the result to.
     * @param enforceReadOnly
     *        If true, the query will be validated to ensure it only performs read operations.
     *        Defaults to true, and should be used for user-facing queries (e.g., from the UI).
     *        Set to false only for internal system operations where write/delete access is intentional.
     * Examples:
     * ```py
     * df = ss.DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6]})
     * ss.sql("select col1, col2 from df where col1 > 10", {"df": df})
     * ```
     */
    sql(query: string, args?: C3.Map<string | null, Data.Spark | null | DataLake.Table | null | null>, limit?: number | null, enforceReadOnly?: boolean): Data.Spark.DataFrame | null;

    /**
     * Construct a {@link Data.Spark.DataFrame} by reading a list of {@link SourceFile}
     */
    read_source_files(sources: C3.Array<SourceFile | null>): Data.Spark.DataFrame | null;

    /**
     * Load and parse files by regex (e.g., log files).
     * This function handles multi line entries by appending subsequent lines to the last column identified by the regex match.
     *
     * @param spec
     *        spec to parse files {@link Data.Spark.ReadFilesByRegexSpec}
     * @return DataFrame with columns named based on the provided headers if 'headers' is specified.
     *         Otherwise, columns will be named c1, c2, ..., cN corresponding to the regex capture groups.
     *         If 'includePath' is true, an additional 'path' column will be present.
     */
    read_files_by_regex(spec?: Data.Spark.ReadFilesByRegexSpec | null): Data.Spark.DataFrame | null;

    /**
     * Rewrite the data files of the given {@link DataLake.Table}.
     * Generally used for optimizing the sizing and layout of data files within a table.
     */
    rewriteDataFiles(table: DataLake.Table, spec?: DataLake.RewriteDataFilesSpec | null): DataLake.RewriteResult | null;

    /**
     * Return a list of orphaned file locations after deletion.
     */
    deleteOrphanedFiles(table: DataLake.Table, spec?: DataLake.DeleteOrphanedFilesSpec | null): DataLake.DeleteOrphanedFilesResult | null;

    /**
     * @return executes given action representing method call on one of this type's mixin type.
     */
    static _exec(action: Action): any;

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
    static fromJson(json: any | null): Data.SparkSession | null;

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
    static fromJsonString(json: string | null): Data.SparkSession | null;

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
    static fromXmlString(xml: string | null): Data.SparkSession | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.SparkSession | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.SparkSession;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.SparkSession;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.SparkSession;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.SparkSession | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.SparkSession | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.SparkSession;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.SparkSession;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.SparkSession;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.SparkSession;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.SparkSession;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.SparkSession;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.SparkSession;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.SparkSession;

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
    withoutFieldAtPath(path: string): Data.SparkSession;

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
    withoutField(field: string | null): Data.SparkSession;

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
    withoutField(field: FieldType | null): Data.SparkSession;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.SparkSession;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.SparkSession;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.SparkSession;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.SparkSession;

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
    defaultField(field: string): Data.SparkSession;

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
    defaultField(field: FieldType): Data.SparkSession;

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
    unsetField(field: string): Data.SparkSession;

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
    unsetField(field: FieldType): Data.SparkSession;

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
    removeField(field: string): Data.SparkSession;

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
    removeField(field: FieldType): Data.SparkSession;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.SparkSession;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.SparkSession;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.SparkSession;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.SparkSession;

    mergeJson(json: any | null): Data.SparkSession;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.SparkSession;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.SparkSession;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.SparkSession | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.SparkSession | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.SparkSession | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.SparkSession | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.SparkSession | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.SparkSession | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.SparkSession | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.SparkSession | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.SparkSession | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.SparkSession;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.SparkSession;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.SparkSession;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.SparkSession;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.SparkSession;

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
    static make(fields: any, withDefaults?: boolean): Data.SparkSession;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.SparkSession;

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
    afterMake(): Data.SparkSession;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.SparkSession;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.SparkSession>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.SparkSession;
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
