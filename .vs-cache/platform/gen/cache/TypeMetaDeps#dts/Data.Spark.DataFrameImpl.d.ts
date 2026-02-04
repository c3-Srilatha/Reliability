// TypeScript definitions for the C3 type Data.Spark.DataFrameImpl

/**
 * Internal implementation of Pandas on Spark DataFrame backed by Spark engine
 * See the interface {@link Data.Spark.DataFrame} for declared APIs
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.DataFrameImpl
 */
declare namespace Data.Spark {
  export interface IDataFrameImpl {

    /**
     * Underlying execution engine ({@link Data.ExecutionEngine}) that executes the plan
     * It's the same engine of Spark Session when we created this Data.Spark instance
     */
    engine?: IData.ExecutionEngine | null;

    /**
     * The plan that used to actualize this Data.Spark instance
     */
    pipeline?: IPipelineSpec | null;

    /**
     * The id number that represent this Data.Spark instance
     */
    nodeId?: string | null;

    /**
     * The output name of the pipeline
     */
    outputId?: string | null;
  }
}

/**
 * Internal implementation of Pandas on Spark DataFrame backed by Spark engine
 * See the interface {@link Data.Spark.DataFrame} for declared APIs
 *
 * @remarks this represents a made instance of Data.Spark.DataFrameImpl
 */
declare namespace Data.Spark {
  export class DataFrameImpl extends Obj {

    /**
     * Underlying execution engine ({@link Data.ExecutionEngine}) that executes the plan
     * It's the same engine of Spark Session when we created this Data.Spark instance
     */
    engine?: Data.ExecutionEngine | null;
    withEngine(engine: IData.ExecutionEngine | null): Data.Spark.DataFrameImpl;

    /**
     * The plan that used to actualize this Data.Spark instance
     */
    pipeline?: PipelineSpec | null;
    withPipeline(pipeline: IPipelineSpec | null): Data.Spark.DataFrameImpl;

    /**
     * The id number that represent this Data.Spark instance
     */
    nodeId?: string | null;
    withNodeId(nodeId: string | null): Data.Spark.DataFrameImpl;

    /**
     * The output name of the pipeline
     */
    outputId?: string | null;
    withOutputId(outputId: string | null): Data.Spark.DataFrameImpl;

    get T(): Data.Spark.DataFrame | null;

    get axes(): C3.Array<any> | null;

    get columns(): any;

    get dtypes(): Data.Spark.Series | null;

    get empty(): boolean | null;

    get iat(): any;

    get iloc(): Data.Spark.IlocIndexer | null;

    get index(): Data.Spark.Index | null | Data.Spark.MultiIndex | null | Data.Spark.CategoricalIndex | null | Data.Spark.DatetimeIndex | null | Data.Spark.TimedeltaIndex | null | null;

    get loc(): Data.Spark.LocIndexer | null;

    get ndim(): number | null;

    get shape(): [number | null, number | null] | null;

    get size(): number | null;

    get style(): any;

    /**
     * Internal method for implementation of {@link Data.Spark.DataFrameImpl#to_spark}
     * It will send request to  store evaluated DataFrame under unique Id and will return this id to the authoring layer.
     */
    cache(user_id?: string | null, session_id?: string | null, index_col?: C3.Array<string | null> | string | null | null): string | null;

    /**
     * Implements assign semantics
     * @param kwargs
     *        The map or dictionary of new column names to their new values. Can be:
     *            - single value
     *            - Data.Spark.Series
     * @return
     *        {@link Data.Spark.DataFrame} with new column names specified by kwargs
     */
    assign(kwargs?: C3.Map<string | null, any>): Data.Spark.DataFrame | null;

    /**
     * Save content of dataframe into DataLake table.
     * @param table
     *        Table to write to
     * @param spec
     *        write spec for writing table
     */
    write_table(table: DataLake.Table, spec?: DataLake.Table.WriteSpec | null): DataLake.Table.Snapshot | null;

    /**
     * Upsert objects from dataframe to C3.
     * @param typeName
     *        C3 type to upsert
     * @param spec
     *        Additional fields that can be passed to upsert like batchSize etc.
     * @return
     *       Count of objects which are upserted to the c3server.
     */
    upsert(typeName: string, spec?: Data.SparkUpsertSpec | null): number | null;

    /**
     * Apply {@link Transform} on a Data.Spark.DataFrame and return a new Data.Spark.DataFrame.
     * The source DataFrame should match the schema defined in {@link Transform#source}
     * @param transform
     *        Instance of {@link Transform} to be applied. If transform is null, return the same DataFrame.
     */
    applyC3Transform(transform?: Transform | null): Data.Spark.DataFrame | null;

    /**
     * Returns a preview of the DataFrame, including the schema, the number of rows and first 1000 rows in json format.
     */
    preview(): Data.Spark.Preview | null;

    /**
     * Returns all row of the DataFrame as C3 tuples. Calling this method on large DataFrames can lead to memory errors.
     */
    to_tuples(): C3.Array<Tuple | null>;

    /**
     * Returns schema of the dataframe as TupleType.
     */
    schema(): TupleType | null;

    abs(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    add(other?: any): Data.Spark.DataFrame | null;

    add_prefix(prefix?: string | null): Data.Spark.DataFrame | null;

    add_suffix(suffix?: string | null): Data.Spark.DataFrame | null;

    agg(func?: C3.Array<string | null> | C3.Map<any, C3.Array<string | null>> | null): Data.Spark.DataFrame | null;

    aggregate(func?: C3.Array<string | null> | C3.Map<any, C3.Array<string | null>> | null): Data.Spark.DataFrame | null;

    align(other?: any, join?: string | null, axis?: any, copy?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    all(axis?: any, bool_only?: boolean | null, skipna?: boolean | null): Data.Spark.Series | null;

    any(axis?: any, bool_only?: boolean | null): Data.Spark.Series | null;

    append(other?: any, ignore_index?: boolean | null, verify_integrity?: boolean | null, sort?: boolean | null): Data.Spark.DataFrame | null;

    apply(func?: λFunction<C3.Array<any>, any> | null, axis?: any, args?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    applymap(func?: λFunction<any, any> | null): Data.Spark.DataFrame | null;

    astype(dtype?: any): Data.Spark.DataFrame | null;

    at_time(time?: any, asof?: boolean | null, axis?: any): Data.Spark.DataFrame | null;

    backfill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    between_time(start_time?: any, end_time?: any, include_start?: boolean | null, include_end?: boolean | null, axis?: any): Data.Spark.DataFrame | null;

    bfill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    bool(): boolean | null;

    boxplot(): any;

    clip(lower?: number | null | number | null | null, upper?: number | null | number | null | null): Data.Spark.DataFrame | null;

    combine_first(other?: any): Data.Spark.DataFrame | null;

    copy(deep?: boolean | null): Data.Spark.DataFrame | null;

    corr(method?: string | null, min_periods?: number | null): Data.Spark.DataFrame | null;

    corrwith(other?: any, axis?: any, drop?: boolean | null, method?: string | null): Data.Spark.Series | null;

    count(axis?: any, numeric_only?: boolean | null): Data.Spark.Series | null;

    cov(min_periods?: number | null, ddof?: number | null): Data.Spark.DataFrame | null;

    cummax(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cummin(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumprod(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumsum(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    describe(percentiles?: C3.Array<number | null> | null): Data.Spark.DataFrame | null;

    diff(periods?: number | null, axis?: any): Data.Spark.DataFrame | null;

    div(other?: any): Data.Spark.DataFrame | null;

    divide(other?: any): Data.Spark.DataFrame | null;

    dot(other?: any): Data.Spark.Series | null;

    drop(labels?: any, axis?: any, index?: any, columns?: any): Data.Spark.DataFrame | null;

    drop_duplicates(subset?: any, keep?: boolean | string | null | null, inplace?: boolean | null, ignore_index?: boolean | null): Data.Spark.DataFrame | null;

    droplevel(level?: any, axis?: any): Data.Spark.DataFrame | null;

    dropna(axis?: any, how?: string | null, thresh?: number | null, subset?: any, inplace?: boolean | null): Data.Spark.DataFrame | null;

    duplicated(subset?: any, keep?: boolean | string | null | null): Data.Spark.Series | null;

    eq(other?: any): Data.Spark.DataFrame | null;

    equals(other?: any): Data.Spark.DataFrame | null;

    eval(expr?: string | null, inplace?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    ewm(com?: number | null, span?: number | null, halflife?: number | null, alpha?: number | null, min_periods?: number | null, ignore_na?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    expanding(min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    explode(column?: any, ignore_index?: boolean | null): Data.Spark.DataFrame | null;

    ffill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    fillna(value?: any, method?: string | null, axis?: any, inplace?: boolean | null, limit?: number | null): Data.Spark.DataFrame | null;

    filter(items?: any, like?: string | null, regex?: string | null, axis?: any): Data.Spark.DataFrame | null;

    first(offset?: any): Data.Spark.DataFrame | null;

    first_valid_index(): any;

    floordiv(other?: any): Data.Spark.DataFrame | null;

    static from_dict(data?: C3.Map<any, any> | null, orient?: string | null, dtype?: any, columns?: C3.Array<any> | null): Data.Spark.DataFrame | null;

    static from_records(data?: any, index?: any, exclude?: C3.Array<any> | null, columns?: C3.Array<any> | null, coerce_float?: boolean | null, nrows?: number | null): Data.Spark.DataFrame | null;

    ge(other?: any): Data.Spark.DataFrame | null;

    get(key?: any, default_?: any): any;

    get_dtype_counts(): Data.Spark.Series | null;

    groupby(by?: any, axis?: any, as_index?: boolean | null, dropna?: boolean | null): Data.Spark.DataFrameGroupBy | null;

    gt(other?: any): Data.Spark.DataFrame | null;

    head(n?: number | null): Data.Spark.DataFrame | null;

    hist(bins?: any): any;

    idxmax(axis?: any): Data.Spark.Series | null;

    idxmin(axis?: any): Data.Spark.Series | null;

    info(verbose?: boolean | null, buf?: any, max_cols?: number | null): any;

    insert(loc?: number | null, column?: any, value?: any, allow_duplicates?: boolean | null): any;

    interpolate(method?: string | null, limit?: number | null, limit_direction?: string | null, limit_area?: string | null): Data.Spark.DataFrame | null;

    isin(values?: C3.Array<any> | C3.Map<any, any> | null): Data.Spark.DataFrame | null;

    isna(): Data.Spark.DataFrame | null;

    isnull(): Data.Spark.DataFrame | null;

    items(): Iterator<any> | null;

    iteritems(): Iterator<any> | null;

    iterrows(): Iterator<any> | null;

    itertuples(index?: boolean | null, name?: string | null): Iterator<any> | null;

    join(right?: any, on?: any, how?: string | null, lsuffix?: string | null, rsuffix?: string | null): Data.Spark.DataFrame | null;

    kde(bw_method?: any, ind?: any): any;

    keys(): Data.Spark.Index | null;

    kurt(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    kurtosis(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    last(offset?: any): Data.Spark.DataFrame | null;

    last_valid_index(): any;

    le(other?: any): Data.Spark.DataFrame | null;

    lt(other?: any): Data.Spark.DataFrame | null;

    mad(axis?: any): Data.Spark.Series | null;

    mask(cond?: any, other?: any): Data.Spark.DataFrame | null;

    max(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    mean(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    median(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, accuracy?: number | null): Data.Spark.Series | null;

    melt(id_vars?: any, value_vars?: any, var_name?: C3.Array<string | null> | string | null | null, value_name?: string | null): Data.Spark.DataFrame | null;

    merge(right?: any, how?: string | null, on?: any, left_on?: any, right_on?: any, left_index?: boolean | null, right_index?: boolean | null, suffixes?: [string | null, string | null] | null): Data.Spark.DataFrame | null;

    min(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    mod(other?: any): Data.Spark.DataFrame | null;

    mode(axis?: any, numeric_only?: boolean | null, dropna?: boolean | null): Data.Spark.DataFrame | null;

    mul(other?: any): Data.Spark.DataFrame | null;

    ne(other?: any): Data.Spark.DataFrame | null;

    nlargest(n?: number | null, columns?: any, keep?: string | null): Data.Spark.DataFrame | null;

    notna(): Data.Spark.DataFrame | null;

    notnull(): Data.Spark.DataFrame | null;

    nsmallest(n?: number | null, columns?: any, keep?: string | null): Data.Spark.DataFrame | null;

    nunique(axis?: any, dropna?: boolean | null, approx?: boolean | null, rsd?: number | null): Data.Spark.Series | null;

    pad(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    pct_change(periods?: number | null): Data.Spark.DataFrame | null;

    pipe(func?: λFunction<C3.Array<any>, any> | null): any;

    pivot(index?: any, columns?: any, values?: any): Data.Spark.DataFrame | null;

    pivot_table(values?: any, index?: C3.Array<any> | null, columns?: any, aggfunc?: C3.Map<any, string | null> | string | null | null, fill_value?: any): Data.Spark.DataFrame | null;

    pop(item?: any): Data.Spark.DataFrame | null;

    pow(other?: any): Data.Spark.DataFrame | null;

    prod(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    product(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    /**
     * Compute data quality metrics {@link Data.ColumnMetric} on selected columns in DataFrame.
     * If columns are not supplied all primitive type columns in the dataframe will be included in profiling.
     * If no metrics are supplied default set of metrics will be used for each column depending on the column type.
     */
    profile(columns?: C3.Array<string | null>, metrics?: C3.Array<string | null>): C3.Array<Data.ColumnMetricValue | null> | null;

    quantile(q?: any, axis?: any, numeric_only?: boolean | null, accuracy?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    query(expr?: string | null, inplace?: boolean | null): Data.Spark.DataFrame | null;

    radd(other?: any): Data.Spark.DataFrame | null;

    rank(method?: string | null, ascending?: boolean | null, numeric_only?: boolean | null): Data.Spark.DataFrame | null;

    rdiv(other?: any): Data.Spark.DataFrame | null;

    reindex(labels?: any, index?: any, columns?: any, axis?: any, copy?: boolean | null, fill_value?: any): Data.Spark.DataFrame | null;

    reindex_like(other?: any, copy?: boolean | null): Data.Spark.DataFrame | null;

    rename(mapper?: λFunction<any, any> | null | C3.Map<any, any> | null, index?: λFunction<any, any> | null | C3.Map<any, any> | null, columns?: λFunction<any, any> | null | C3.Map<any, any> | null, axis?: any, inplace?: boolean | null, level?: number | null, errors?: string | null): Data.Spark.DataFrame | null;

    rename_axis(mapper?: any, index?: any, columns?: any, axis?: any, inplace?: boolean | null): Data.Spark.DataFrame | null;

    replace(to_replace?: any, value?: any, inplace?: boolean | null, limit?: number | null, regex?: boolean | null, method?: string | null): Data.Spark.DataFrame | null;

    resample(rule?: string | null, closed?: string | null, label?: string | null, on?: any): Data.Spark.Resampler | null;

    reset_index(level?: any, drop?: boolean | null, inplace?: boolean | null, col_level?: number | null, col_fill?: string | null): Data.Spark.DataFrame | null;

    rfloordiv(other?: any): Data.Spark.DataFrame | null;

    rmod(other?: any): Data.Spark.DataFrame | null;

    rmul(other?: any): Data.Spark.DataFrame | null;

    rolling(window?: number | null, min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    round(decimals?: any): Data.Spark.DataFrame | null;

    rpow(other?: any): Data.Spark.DataFrame | null;

    rsub(other?: any): Data.Spark.DataFrame | null;

    rtruediv(other?: any): Data.Spark.DataFrame | null;

    sample(n?: number | null, frac?: number | null, replace?: boolean | null, random_state?: number | null, ignore_index?: boolean | null): Data.Spark.DataFrame | null;

    select_dtypes(include?: C3.Array<string | null> | string | null | null, exclude?: C3.Array<string | null> | string | null | null): Data.Spark.DataFrame | null;

    sem(axis?: any, skipna?: boolean | null, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    set_index(keys?: any, drop?: boolean | null, append?: boolean | null, inplace?: boolean | null): Data.Spark.DataFrame | null;

    shift(periods?: number | null, fill_value?: any): Data.Spark.DataFrame | null;

    skew(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    sort_index(axis?: any, level?: C3.Array<number | null> | number | null | null, ascending?: boolean | null, inplace?: boolean | null, kind?: string | null, na_position?: string | null, ignore_index?: boolean | null): Data.Spark.DataFrame | null;

    sort_values(by?: any, ascending?: C3.Array<boolean> | boolean | null, inplace?: boolean | null, na_position?: string | null, ignore_index?: boolean | null): Data.Spark.DataFrame | null;

    squeeze(axis?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    stack(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    std(axis?: any, skipna?: boolean | null, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    sub(other?: any): Data.Spark.DataFrame | null;

    sum(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    swapaxes(i?: any, j?: any, copy?: boolean | null): Data.Spark.DataFrame | null;

    swaplevel(i?: any, j?: any, axis?: any): Data.Spark.DataFrame | null;

    tail(n?: number | null): Data.Spark.DataFrame | null;

    take(indices?: C3.Array<number | null> | null, axis?: any): Data.Spark.DataFrame | null;

    to_clipboard(excel?: boolean | null, sep?: string | null): any;

    to_csv(path?: string | null, sep?: string | null, na_rep?: string | null, columns?: C3.Array<any> | null, header?: boolean | null, quotechar?: string | null, date_format?: string | null, escapechar?: string | null, num_files?: number | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): string | null;

    to_delta(path?: string | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): any;

    to_dict(orient?: string | null, into?: any): C3.Array<any> | null;

    to_excel(excel_writer?: any, sheet_name?: string | null, na_rep?: string | null, float_format?: string | null, columns?: C3.Array<string | null> | string | null | null, header?: boolean | null, index?: boolean | null, index_label?: C3.Array<string | null> | string | null | null, startrow?: number | null, startcol?: number | null, engine?: string | null, merge_cells?: boolean | null, encoding?: string | null, inf_rep?: string | null, verbose?: boolean | null, freeze_panes?: [number | null, number | null] | null): any;

    to_html(buf?: any, columns?: any, col_space?: number | null | C3.Map<any, number | null | string | null | null> | string | null | null, header?: boolean | null, index?: boolean | null, na_rep?: string | null, formatters?: C3.Array<λFunction<any, string | null> | null> | C3.Map<any, λFunction<any, string | null> | null> | null, float_format?: λFunction<number | null, string | null> | null, sparsify?: boolean | null, index_names?: boolean | null, justify?: string | null, max_rows?: number | null, max_cols?: number | null, show_dimensions?: boolean | null, decimal?: string | null, bold_rows?: boolean | null, classes?: any, escape?: boolean | null, notebook?: boolean | null, border?: number | null, table_id?: string | null, render_links?: boolean | null): string | null;

    to_json(path?: string | null, compression?: string | null, num_files?: number | null, mode?: string | null, orient?: string | null, lines?: boolean | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): string | null;

    to_latex(buf?: any, columns?: C3.Array<any> | null, col_space?: number | null, header?: boolean | null, index?: boolean | null, na_rep?: string | null, formatters?: C3.Array<λFunction<any, string | null> | null> | C3.Map<any, λFunction<any, string | null> | null> | null, float_format?: λFunction<number | null, string | null> | null, sparsify?: boolean | null, index_names?: boolean | null, bold_rows?: boolean | null, column_format?: string | null, longtable?: boolean | null, escape?: boolean | null, encoding?: string | null, decimal?: string | null, multicolumn?: boolean | null, multicolumn_format?: string | null, multirow?: boolean | null): string | null;

    to_markdown(buf?: any, mode?: string | null): string | null;

    to_orc(path?: string | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): any;

    to_parquet(path?: string | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, compression?: string | null, index_col?: C3.Array<string | null> | string | null | null): any;

    to_records(index?: boolean | null, column_dtypes?: any, index_dtypes?: any): C3.Array<any> | null;

    to_spark_io(path?: string | null, format?: string | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): any;

    to_string(buf?: any, columns?: any, col_space?: number | null | C3.Map<any, number | null | string | null | null> | string | null | null, header?: boolean | null, index?: boolean | null, na_rep?: string | null, formatters?: C3.Array<λFunction<any, string | null> | null> | C3.Map<any, λFunction<any, string | null> | null> | null, float_format?: λFunction<number | null, string | null> | null, sparsify?: boolean | null, index_names?: boolean | null, justify?: string | null, max_rows?: number | null, max_cols?: number | null, show_dimensions?: boolean | null, decimal?: string | null, line_width?: number | null): string | null;

    to_table(name?: string | null, format?: string | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): any;

    transform(func?: λFunction<C3.Array<any>, any> | null, axis?: any): Data.Spark.DataFrame | null;

    transpose(): Data.Spark.DataFrame | null;

    truediv(other?: any): Data.Spark.DataFrame | null;

    truncate(before?: any, after?: any, axis?: any, copy?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    unstack(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    update(other?: any, join?: string | null, overwrite?: boolean | null): any;

    var(axis?: any, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    where(cond?: any, other?: any, axis?: any): Data.Spark.DataFrame | null;

    xs(key?: any, axis?: any, level?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    /**
     * Implements Python repr(this)
     */
    _repr_(): string | null;

    addition(other: any): any;

    subtract(other: any): any;

    multiply(other: any): any;

    matrixMultiply(other: any): any;

    trueDivision(other: any): any;

    floorDivision(other: any): any;

    modulo(other: any): any;

    power(other: any, modulus?: any): any;

    reflectedAddition(other: any): any;

    reflectedSubtract(other: any): any;

    reflectedMultiply(other: any): any;

    reflectedMatrixMultiply(other: any): Data.Spark.Series | null;

    reflectedTrueDivision(other: any): any;

    reflectedFloorDivision(other: any): any;

    reflectedModulo(other: any): any;

    reflectedPower(other: any, modulus?: any): any;

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

    /**
     * Implements the `.` syntactic sugar in js and py.
     * @param name
     *           name associated with the desired attribute value.
     * @return the attribute value associated with the given attribute name
     */
    _field_(name: string): T | null;

    lessThan(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    lessThanEqualTo(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    equalTo(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    notEqualTo(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    greaterThan(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    greaterThanEqualTo(other: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    logicalAnd(other: any): any;

    logicalOr(other: any): any;

    logicalXor(other: any): any;

    reflectedLogicalAnd(other: any): any;

    reflectedLogicalOr(other: any): any;

    reflectedLogicalXor(other: any): any;

    toNegative(): any;

    toPositive(): any;

    toAbsolute(): any;

    toInverted(): any;

    toRounded(decimals?: number | null): any;

    /**
     * Use this method if you want to use a C3 iterator.
     * @return a C3 iterator of the elements of the collection
     */
    iter(): Iterator<any> | null;

    /**
     * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
     */
    _iter_(): any;

    /**
     * @return executes given action representing method call on one of this type's mixin type.
     */
    static _exec(action: Action): any;

    /**
     * Construct an instance with initial state.
     */
    static make(): Data.Spark.DataFrameImpl;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.Spark.DataFrameImpl;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.Spark.DataFrameImpl;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.Spark.DataFrameImpl;

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
    static make(fields: any, withDefaults?: boolean): Data.Spark.DataFrameImpl;

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
    static fromJson(json: any | null): Data.Spark.DataFrameImpl | null;

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
    static fromJsonString(json: string | null): Data.Spark.DataFrameImpl | null;

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
    static fromXmlString(xml: string | null): Data.Spark.DataFrameImpl | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Spark.DataFrameImpl | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Spark.DataFrameImpl;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Spark.DataFrameImpl;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Spark.DataFrameImpl;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Spark.DataFrameImpl | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Spark.DataFrameImpl | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.Spark.DataFrameImpl;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Spark.DataFrameImpl;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Spark.DataFrameImpl;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.Spark.DataFrameImpl;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.Spark.DataFrameImpl;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.Spark.DataFrameImpl;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.Spark.DataFrameImpl;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.Spark.DataFrameImpl;

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
    withoutFieldAtPath(path: string): Data.Spark.DataFrameImpl;

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
    withoutField(field: string | null): Data.Spark.DataFrameImpl;

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
    withoutField(field: FieldType | null): Data.Spark.DataFrameImpl;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.Spark.DataFrameImpl;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.Spark.DataFrameImpl;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.Spark.DataFrameImpl;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.Spark.DataFrameImpl;

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
    defaultField(field: string): Data.Spark.DataFrameImpl;

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
    defaultField(field: FieldType): Data.Spark.DataFrameImpl;

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
    unsetField(field: string): Data.Spark.DataFrameImpl;

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
    unsetField(field: FieldType): Data.Spark.DataFrameImpl;

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
    removeField(field: string): Data.Spark.DataFrameImpl;

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
    removeField(field: FieldType): Data.Spark.DataFrameImpl;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.Spark.DataFrameImpl;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.Spark.DataFrameImpl;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.Spark.DataFrameImpl;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.Spark.DataFrameImpl;

    mergeJson(json: any | null): Data.Spark.DataFrameImpl;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.Spark.DataFrameImpl;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.Spark.DataFrameImpl;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.Spark.DataFrameImpl | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.Spark.DataFrameImpl | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.Spark.DataFrameImpl | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.Spark.DataFrameImpl | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.Spark.DataFrameImpl | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.Spark.DataFrameImpl | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.Spark.DataFrameImpl | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.Spark.DataFrameImpl | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.Spark.DataFrameImpl | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.Spark.DataFrameImpl;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.Spark.DataFrameImpl;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.Spark.DataFrameImpl;

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
    afterMake(): Data.Spark.DataFrameImpl;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.Spark.DataFrameImpl;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.Spark.DataFrameImpl>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.Spark.DataFrameImpl;

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
    setField(field: string, value: any, doNotConvert?: boolean): Data.Spark.DataFrameImpl;

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
    setField(field: FieldType, value: any, doNotConvert?: boolean): Data.Spark.DataFrameImpl;

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
     * Implementation of _repr_html_() function
     */
    _reprHtml_(): string | null;

    get _shape(): [number | null, number | null] | null;

    get _columns(): C3.Array<any> | null;

    /**
     * Returns column names as an array of string
     */
    columnNames(): C3.Array<any> | null;
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
