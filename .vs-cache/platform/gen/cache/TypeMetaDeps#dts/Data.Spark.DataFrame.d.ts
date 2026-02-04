// TypeScript definitions for the C3 type Data.Spark.DataFrame

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.DataFrame
 */
declare namespace Data.Spark {
  export interface IDataFrame {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.DataFrame
 */
declare namespace Data.Spark {
  export class DataFrame {

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
  }
}


interface λFunction<T, R> {
  (t: T): R
}
