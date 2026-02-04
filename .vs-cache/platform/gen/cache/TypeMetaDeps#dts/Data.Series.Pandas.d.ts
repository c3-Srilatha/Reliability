// TypeScript definitions for the C3 type Data.Series.Pandas

/**
 * C3 Interface to a Data.Series.Pandas backed by native pandas
 *
 * @see Data.Series
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Series.Pandas
 */
declare namespace Data.Series {
  export interface IPandas {

    /**
     * Dataset which this Data belongs to
     */
    ds: IDataset;

    /**
     * Id used to reference this Data within the Dataset to which it belongs
     */
    id: string;

    /**
     * PySrc that can be executed to re-create this DataImpl.Pandas
     */
    _pySrc?: string | null;

    _fileName?: string | null;

    /**
     * Tuple of {columnName:[value]} to create a DataImpl.Pandas from
     */
    _tuple?: any;

    /**
     * Whether the {@link #tuple} field value types can be fully supported by arrow.
     */
    _arrowSupport?: boolean;

    /**
     * All DataImpl.Pandas referenced by the pySrc
     */
    _datas?: C3.Set<DataImpl.Pandas | null> | Array<IDataImpl.Pandas | null>;

    /**
     * Pickled Pandas binary
     */
    _binary?: any | null;

    /**
     * List of pickled Pandas segments binaries
     */
    _binaries?: C3.Array<any | null> | Array<any | null>;

    _numBinarySegments?: number | null;

    /**
     * Type of binary format for reading {@link Data.Persisted}
     */
    _persistedFormat?: string | null;

    /**
     * see tableName arg for {@link Feature.Store#readData}.
     */
    _tableName?: string | null;

    /**
     * see id arg for {@link Feature.Store#readData}.
     */
    _tableEntryId?: string | null;

    /**
     * Mapping of variable names to their values to be used by the PyAst Executor
     */
    _vars?: C3.Map<string | null, any> | {[key: string | null]: any};

    /**
     * The size of a segment of binary must be small enough to not cause any Invalid Argument exceptions when sent
     * using HTTP, 10309165 is also a convenient number for testing the case when a dataframe divides evenly into
     * segments with no remainder
     */
    maxSegmentSizeClient?: number | null;
  }
}

/**
 * C3 Interface to a Data.Series.Pandas backed by native pandas
 *
 * @see Data.Series
 *
 * @remarks this represents a made instance of Data.Series.Pandas
 */
declare namespace Data.Series {
  export class Pandas extends Obj {

    /**
     * Dataset which this Data belongs to
     */
    readonly ds: Dataset;
    withDs(ds: IDataset): Data.Series.Pandas;

    /**
     * Id used to reference this Data within the Dataset to which it belongs
     */
    readonly id: string;
    withId(id: string): Data.Series.Pandas;

    /**
     * PySrc that can be executed to re-create this DataImpl.Pandas
     */
    readonly _pySrc?: string | null;
    with_pySrc(_pySrc: string | null): Data.Series.Pandas;

    readonly _fileName?: string | null;
    with_fileName(_fileName: string | null): Data.Series.Pandas;

    /**
     * Tuple of {columnName:[value]} to create a DataImpl.Pandas from
     */
    readonly _tuple?: any;
    with_tuple(_tuple: any): Data.Series.Pandas;

    /**
     * Whether the {@link #tuple} field value types can be fully supported by arrow.
     */
    readonly _arrowSupport?: boolean;
    with_arrowSupport(_arrowSupport: boolean): Data.Series.Pandas;

    /**
     * All DataImpl.Pandas referenced by the pySrc
     */
    readonly _datas?: C3.Set<DataImpl.Pandas | null>;
    with_datas(_datas: C3.Set<DataImpl.Pandas | null> | Array<IDataImpl.Pandas | null>): Data.Series.Pandas;

    /**
     * Pickled Pandas binary
     */
    readonly _binary?: any | null;
    with_binary(_binary: any | null): Data.Series.Pandas;

    /**
     * List of pickled Pandas segments binaries
     */
    readonly _binaries?: C3.Array<any | null>;
    with_binaries(_binaries: C3.Array<any | null> | Array<any | null>): Data.Series.Pandas;

    readonly _numBinarySegments?: number | null;
    with_numBinarySegments(_numBinarySegments: number | null): Data.Series.Pandas;

    /**
     * Type of binary format for reading {@link Data.Persisted}
     */
    readonly _persistedFormat?: string | null;
    with_persistedFormat(_persistedFormat: string | null): Data.Series.Pandas;

    /**
     * see tableName arg for {@link Feature.Store#readData}.
     */
    readonly _tableName?: string | null;
    with_tableName(_tableName: string | null): Data.Series.Pandas;

    /**
     * see id arg for {@link Feature.Store#readData}.
     */
    readonly _tableEntryId?: string | null;
    with_tableEntryId(_tableEntryId: string | null): Data.Series.Pandas;

    /**
     * Mapping of variable names to their values to be used by the PyAst Executor
     */
    readonly _vars?: C3.Map<string | null, any>;
    with_vars(_vars: C3.Map<string | null, any> | {[key: string | null]: any}): Data.Series.Pandas;

    /**
     * The size of a segment of binary must be small enough to not cause any Invalid Argument exceptions when sent
     * using HTTP, 10309165 is also a convenient number for testing the case when a dataframe divides evenly into
     * segments with no remainder
     */
    readonly maxSegmentSizeClient?: number | null;
    withMaxSegmentSizeClient(maxSegmentSizeClient: number | null): Data.Series.Pandas;

    get T(): Data.Series | null;

    get array(): C3.Array<any> | null;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.Series.Pandas | null>;

    get attrs(): C3.Map<any, any> | null;

    get axes(): C3.Array<any> | null;

    get dtype(): any;

    get dtypes(): any;

    get empty(): any;

    get flags(): any;

    get hasnans(): boolean | null;

    get iat(): any;

    /**
     * Purely integer-location based indexing for selection by position.
     *
     * Supports a subset of arguments to [pandas.DataFrame.iloc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iloc.html)
     */
    get iloc(): DataIlocIndexer | null;

    get index(): Data.Index | null | Data.RangeIndex | null | Data.MultiIndex | null | Data.CategoricalIndex | null | Data.IntervalIndex | null | Data.PeriodIndex | null | Data.DatetimeIndex | null | Data.TimedeltaIndex | null | Data.Int64Index | null | Data.UInt64Index | null | Data.Float64Index | null | null;

    get is_monotonic(): any;

    get is_monotonic_decreasing(): any;

    get is_monotonic_increasing(): any;

    get is_unique(): any;

    /**
     * Access a group of rows and columns by label(s) or a boolean array.
     *
     * Supports a subset of arguments to [pandas.DataFrame.loc](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html)
     */
    get loc(): DataLocIndexer | null;

    get nbytes(): number | null;

    get ndim(): number | null;

    get shape(): any;

    get size(): number | null;

    get values(): C3.Array<any> | null;

    abs(): Data.Series | null;

    add(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    add_prefix(prefix?: string | null): Data.Series | null;

    add_suffix(suffix?: string | null): Data.Series | null;

    agg(func?: any, axis?: any): any;

    aggregate(func?: any, axis?: any): any;

    align(other?: any, join?: any, axis?: any, level?: any, copy?: any, fill_value?: any, method?: any, limit?: any, fill_axis?: any, broadcast_axis?: any): C3.Array<any> | null;

    all(axis?: any, bool_only?: any, skipna?: any, level?: any): any;

    any(axis?: any, bool_only?: any, skipna?: any, level?: any): any;

    append(to_append?: any, ignore_index?: any, verify_integrity?: any): Data.Series | null;

    apply(func?: any, convert_dtype?: any, args?: any): Data | null | Data.Series | null | null;

    argmax(axis?: any, skipna?: any): number | null;

    argmin(axis?: any, skipna?: any): number | null;

    argsort(axis?: any, kind?: any, order?: any): Data.Series | null;

    asfreq(freq?: any, method?: any, how?: string | null, normalize?: any, fill_value?: any): Data.Series | null;

    asof(where?: any, subset?: any): any;

    astype(dtype?: any, copy?: any, errors?: string | null): Data.Series | null;

    at_time(time?: any, asof?: any, axis?: any): Data.Series | null;

    autocorr(lag?: any): number | null;

    backfill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data.Series | null;

    between(left?: any, right?: any, inclusive?: any): Data.Series | null;

    between_time(start_time?: any, end_time?: any, include_start?: any, include_end?: any, axis?: any): Data.Series | null;

    bfill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data.Series | null;

    bool(): any;

    clip(lower?: any, upper?: any, axis?: any, inplace?: any): Data.Series | null;

    combine(other?: any, func?: any, fill_value?: any): Data.Series | null;

    combine_first(other?: any): Data.Series | null;

    compare(other?: Data.Series | null, align_axis?: any, keep_shape?: any, keep_equal?: any): Data | null | Data.Series | null | null;

    convert_dtypes(infer_objects?: any, convert_string?: any, convert_integer?: any, convert_boolean?: any, convert_floating?: any): Data.Series | null;

    copy(deep?: any): Data.Series | null;

    corr(other?: any, method?: any, min_periods?: any): number | null;

    count(level?: any): any;

    cov(other?: Data.Series | null, min_periods?: number | null, ddof?: number | null): number | null;

    cummax(axis?: any, skipna?: any): Data.Series | null;

    cummin(axis?: any, skipna?: any): Data.Series | null;

    cumprod(axis?: any, skipna?: any): Data.Series | null;

    cumsum(axis?: any, skipna?: any): Data.Series | null;

    describe(percentiles?: any, include?: any, exclude?: any, datetime_is_numeric?: any): Data.Series | null;

    diff(periods?: number | null): Data.Series | null;

    div(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    divide(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    divmod(other?: any, level?: any, fill_value?: any, axis?: any): C3.Array<any> | null;

    dot(other?: any): any;

    drop(labels?: any, axis?: any, index?: any, columns?: any, level?: any, inplace?: any, errors?: any): Data.Series | null;

    drop_duplicates(keep?: any, inplace?: any): Data.Series | null;

    droplevel(level?: any, axis?: any): Data.Series | null;

    dropna(axis?: any, inplace?: any, how?: any): Data.Series | null;

    duplicated(keep?: any): Data.Series | null;

    eq(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    equals(other?: any): any;

    ewm(com?: number | null, span?: number | null, halflife?: any, alpha?: number | null, min_periods?: number | null, adjust?: any, ignore_na?: any, axis?: any, times?: any): Data.Series | null;

    expanding(min_periods?: number | null, center?: any, axis?: any, method?: string | null): any;

    explode(ignore_index?: any): Data.Series | null;

    factorize(sort?: any, na_sentinel?: number | null): C3.Array<any> | null;

    ffill(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data.Series | null;

    fillna(value?: any, method?: any, axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data.Series | null;

    filter(items?: any, like?: string | null, regex?: string | null, axis?: any): Data.Series | null;

    first(offset?: any): Data.Series | null;

    first_valid_index(): any;

    floordiv(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    ge(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    get(key?: any, default_?: any): any;

    groupby(by?: any, axis?: any, level?: any, as_index?: any, sort?: any, group_keys?: any, squeeze?: any, observed?: any, dropna?: any): any;

    gt(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    head(n?: number | null): Data.Series | null;

    hist(by?: any, ax?: any, grid?: any, xlabelsize?: number | null, xrot?: number | null, ylabelsize?: number | null, yrot?: number | null, figsize?: [number | null, number | null] | null, bins?: any, backend?: string | null, legend?: any): any;

    idxmax(axis?: any, skipna?: any): any;

    idxmin(axis?: any, skipna?: any): any;

    infer_objects(): Data.Series | null;

    interpolate(method?: string | null, axis?: any, limit?: number | null, inplace?: any, limit_direction?: string | null, limit_area?: string | null, downcast?: string | null): Data.Series | null;

    isin(values?: any): Data.Series | null;

    isna(): Data.Series | null;

    isnull(): Data.Series | null;

    item(): any;

    items(): any;

    iteritems(): any;

    keys(): any;

    kurt(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    kurtosis(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    last(offset?: any): Data.Series | null;

    last_valid_index(): any;

    le(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    lt(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    mad(axis?: any, skipna?: any, level?: any): any;

    map(arg?: any, na_action?: any): Data.Series | null;

    mask(cond?: any, other?: any, inplace?: any, axis?: any, level?: any, errors?: any, try_cast?: any): Data.Series | null;

    max(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    mean(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    median(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    memory_usage(index?: any, deep?: any): number | null;

    min(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    mod(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    mode(dropna?: any): Data.Series | null;

    mul(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    multiply(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    multiply(other: any): any;

    ne(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    nlargest(n?: number | null, keep?: any): Data.Series | null;

    notna(): Data.Series | null;

    notnull(): Data.Series | null;

    nsmallest(n?: number | null, keep?: string | null): Data.Series | null;

    nunique(dropna?: any): number | null;

    pad(axis?: any, inplace?: any, limit?: number | null, downcast?: any): Data.Series | null;

    pct_change(periods?: number | null, fill_method?: any, limit?: number | null, freq?: any): Data.Series | null;

    pop(item?: any): any;

    pow(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    prod(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): any;

    product(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): any;

    quantile(q?: any, interpolation?: any): any;

    radd(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rank(axis?: any, method?: string | null, numeric_only?: any, na_option?: string | null, ascending?: any, pct?: any): Data.Series | null;

    ravel(order?: any): C3.Array<any> | null;

    rdiv(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rdivmod(other?: any, level?: any, fill_value?: any, axis?: any): C3.Array<any> | null;

    reindex(index?: any): Data.Series | null;

    /**
     * Implements pandas reindex semantics from pandas version 1.3.4 for Data.Series
     */
    reindex(index?: any, method?: string | null, copy?: any, level?: number | null | string | null | null, fill_value?: any, limit?: any, tolerance?: any): Data.Series | null;

    reindex_like(other?: any, method?: string | null, copy?: any, limit?: any, tolerance?: any): Data.Series | null;

    rename(index?: any, axis?: any, copy?: any, inplace?: any, level?: any, errors?: any): Data.Series | null;

    rename_axis(mapper?: any): Data.Series | null;

    reorder_levels(order?: any): Data.Series | null;

    repeat(repeats?: any, axis?: any): Data.Series | null;

    replace(to_replace?: any, value?: any, inplace?: any, limit?: number | null, regex?: any, method?: any): Data.Series | null;

    resample(rule?: any, axis?: any, closed?: string | null, label?: string | null, convention?: string | null, kind?: string | null, loffset?: any, base?: number | null, on?: any, level?: any, origin?: any, offset?: any): any;

    reset_index(level?: any, drop?: any, name?: any, inplace?: any): Data | null | Data.Series | null | null;

    rfloordiv(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rmod(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rmul(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rolling(window?: any, min_periods?: number | null, center?: any, win_type?: string | null, on?: string | null, axis?: any, closed?: string | null, method?: string | null): Data.Series.Rolling | null;

    round(decimals?: number | null): Data.Series | null;

    rpow(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rsub(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    rtruediv(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    sample(n?: number | null, frac?: number | null, replace?: any, weights?: any, random_state?: number | null, axis?: any, ignore_index?: any): Data.Series | null;

    searchsorted(value?: any, side?: any, sorter?: any): number | null | C3.Array<number | null> | null;

    sem(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): any;

    set_axis(labels?: any, axis?: any, inplace?: any): Data.Series | null;

    set_flags(copy?: any, allows_duplicate_labels?: any): Data.Series | null;

    shift(periods?: number | null, freq?: any, axis?: any, fill_value?: any): Data.Series | null;

    skew(axis?: any, skipna?: any, level?: any, numeric_only?: any): any;

    slice_shift(periods?: number | null, axis?: any): Data.Series | null;

    sort_index(axis?: any, level?: any, ascending?: any, inplace?: any, kind?: string | null, na_position?: string | null, sort_remaining?: any, ignore_index?: any, key?: any): Data.Series | null;

    sort_values(axis?: any, ascending?: any, inplace?: any, kind?: string | null, na_position?: string | null, ignore_index?: any, key?: any): Data.Series | null;

    squeeze(axis?: any): any;

    std(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): any;

    sub(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    subtract(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    subtract(other: any): any;

    sum(axis?: any, skipna?: any, level?: any, numeric_only?: any, min_count?: any): any;

    swapaxes(axis1?: any, axis2?: any, copy?: any): Data.Series | null;

    swaplevel(i?: any, j?: any, copy?: any): Data.Series | null;

    tail(n?: number | null): Data.Series | null;

    take(indices?: any, axis?: any, is_copy?: any): Data.Series | null;

    to_clipboard(excel?: any, sep?: string | null): any;

    to_csv(path_or_buf?: any, sep?: string | null, na_rep?: string | null, float_format?: string | null, columns?: any, header?: any, index?: any, index_label?: any, mode?: string | null, encoding?: string | null, compression?: any, quoting?: number | null, quotechar?: string | null, line_terminator?: string | null, chunksize?: number | null, date_format?: string | null, doublequote?: any, escapechar?: string | null, decimal?: string | null, errors?: string | null, storage_options?: any): string | null;

    to_dict(into?: any): C3.Map<any, any> | null;

    to_excel(excel_writer?: any, sheet_name?: string | null, na_rep?: string | null, float_format?: string | null, columns?: any, header?: any, index?: any, index_label?: any, startrow?: any, startcol?: any, engine?: any, merge_cells?: any, encoding?: any, inf_rep?: any, verbose?: any, freeze_panes?: any, storage_options?: any): any;

    to_frame(name?: any): Data | null;

    to_hdf(path_or_buf?: any, key?: string | null, mode?: string | null, complevel?: number | null, complib?: string | null, append?: any, format?: string | null, index?: any, min_itemsize?: number | null | C3.Map<string | null, number | null> | null, nan_rep?: any, dropna?: any, data_columns?: any, errors?: string | null, encoding?: string | null): any;

    to_json(path_or_buf?: any, orient?: string | null, date_format?: string | null, double_precision?: number | null, force_ascii?: any, date_unit?: string | null, default_handler?: λFunction<any, any> | null, lines?: any, compression?: any, index?: any, indent?: number | null, storage_options?: any): string | null;

    to_latex(buf?: any, columns?: any, col_space?: any, header?: any, index?: any, na_rep?: any, formatters?: any, float_format?: any, sparsify?: any, index_names?: any, bold_rows?: any, column_format?: any, longtable?: any, escape?: any, encoding?: any, decimal?: any, multicolumn?: any, multicolumn_format?: any, multirow?: any, caption?: any, label?: any, position?: any): string | null;

    to_list(): C3.Array<any> | null;

    to_markdown(buf?: any, mode?: string | null, index?: any, storage_options?: any): string | null;

    to_period(freq?: any, copy?: any): Data.Series | null;

    to_pickle(path?: any, compression?: any, protocol?: number | null, storage_options?: any): any;

    to_sql(name?: string | null, con?: any, schema?: any, if_exists?: string | null, index?: any, index_label?: any, chunksize?: any, dtype?: any, method?: any): number | null;

    to_string(buf?: any, na_rep?: any, float_format?: any, header?: any, index?: any, length?: any, dtype?: any, name?: any, max_rows?: any, min_rows?: any): string | null;

    to_timestamp(freq?: any, how?: any, copy?: any): Data.Series | null;

    to_xarray(): any;

    tolist(): any;

    transform(func?: any, axis?: any): Data.Series | null;

    transpose(): Data.Series | null;

    truediv(other?: any, level?: any, fill_value?: any, axis?: any): Data.Series | null;

    truncate(before?: any, after?: any, axis?: any, copy?: any): Data.Series | null;

    tshift(periods?: number | null, freq?: any, axis?: any): Data.Series | null;

    tz_convert(tz?: any, axis?: any, level?: any, copy?: any): Data.Series | null;

    tz_localize(tz?: any, axis?: any, level?: any, copy?: any, ambiguous?: any, nonexistent?: string | null): Data.Series | null;

    unique(): C3.Array<any> | null;

    unstack(level?: any, fill_value?: any): Data | null;

    update(other?: any): any;

    value_counts(normalize?: any, sort?: any, ascending?: any, bins?: number | null, dropna?: any): Data.Series | null;

    var(axis?: any, skipna?: any, level?: any, ddof?: any, numeric_only?: any): any;

    view(dtype?: any): Data.Series | null;

    where(cond?: any, other?: any, inplace?: any, axis?: any, level?: any, errors?: any, try_cast?: any): Data.Series | null;

    xs(key?: any, axis?: any, level?: any, drop_level?: any): Data.Series | null;

    /**
     * Generically handles all static lazy methods.
     */
    static _exec(action: Action): any;

    /**
     * Implements Python repr(this)
     */
    _repr_(): string | null;

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
    static fromJson(json: any | null): Data.Series.Pandas | null;

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
    static fromJsonString(json: string | null): Data.Series.Pandas | null;

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
    static fromXmlString(xml: string | null): Data.Series.Pandas | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Series.Pandas | null;

    /**
     * C3 Type of this instance.
     */
    type(): Type;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Series.Pandas;

    /**
     * Whether all the fields of this instance are empty.
     */
    isEmptyObj(): boolean;

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
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Series.Pandas;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Series.Pandas;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Series.Pandas | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Series.Pandas | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.Series.Pandas;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Series.Pandas;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Series.Pandas;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.Series.Pandas;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.Series.Pandas;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.Series.Pandas;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.Series.Pandas;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.Series.Pandas;

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
    withoutFieldAtPath(path: string): Data.Series.Pandas;

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
    withoutField(field: string | null): Data.Series.Pandas;

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
    withoutField(field: FieldType | null): Data.Series.Pandas;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.Series.Pandas;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.Series.Pandas;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.Series.Pandas;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.Series.Pandas;

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
    defaultField(field: string): Data.Series.Pandas;

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
    defaultField(field: FieldType): Data.Series.Pandas;

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
    unsetField(field: string): Data.Series.Pandas;

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
    unsetField(field: FieldType): Data.Series.Pandas;

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
    removeField(field: string): Data.Series.Pandas;

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
    removeField(field: FieldType): Data.Series.Pandas;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.Series.Pandas;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.Series.Pandas;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.Series.Pandas;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.Series.Pandas;

    mergeJson(json: any | null): Data.Series.Pandas;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.Series.Pandas;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.Series.Pandas;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.Series.Pandas | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.Series.Pandas | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.Series.Pandas | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.Series.Pandas | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.Series.Pandas | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.Series.Pandas | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.Series.Pandas | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.Series.Pandas | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.Series.Pandas;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.Series.Pandas;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.Series.Pandas;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.Series.Pandas;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.Series.Pandas;

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
    static make(fields: any, withDefaults?: boolean): Data.Series.Pandas;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.Series.Pandas;

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
    afterMake(): Data.Series.Pandas;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.Series.Pandas;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.Series.Pandas>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.Series.Pandas;

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
    dereference(): Data.Series;

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
    cache(ds?: Dataset | null): Data.Series | null;

    /**
     * Creates a DataRef in the provided Dataset which points to ths. Overloaded to add Dataset parameter for stateless
     * DataImpl. If not provided, dataset will default to Dataset.inst(). If a Dataset is provided to stateful Data, an
     * exception will be thrown
     */
    toDataRef(ds?: Dataset | null): Data.Series.Ref;

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
    static fromPySrc(pySrc: string, dfs?: C3.Set<DataImpl | null>, vars?: C3.Map<string | null, any>, dataset?: Dataset | null): Data.Series.Pandas | null;

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
    static _jsDataProxy(inst: any): Data.Series.Pandas;

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

    toNegative(): any;

    toPositive(): any;

    toAbsolute(): any;

    toInverted(): any;

    toRounded(decimals?: number | null): any;

    logicalAnd(other: any): any;

    logicalOr(other: any): any;

    logicalXor(other: any): any;

    reflectedLogicalAnd(other: any): any;

    reflectedLogicalOr(other: any): any;

    reflectedLogicalXor(other: any): any;

    /**
     * Implements the js `.length` property or py `len()` support.
     * @return the number of elements in this instance
     */
    _length_(): number;

    /**
     * @return native object with all fields
     */
    _this(): any;

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
     * Iterate over the values.
     */
    iter(): Iterator<any> | null;

    /**
     * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
     */
    _iter_(): any;

    /**
     * Converts this series to a {@link Data.Series.Pandas}. If parent dataset is not provided then will use default data set.
     */
    toDataPandas(ds?: Dataset | null): Data.Series.Pandas | null;

    repr(): string | null;

    neg(): Data.Series | null;

    invert(): Data.Series | null;

    /**
     * @return {@link ValueType} describing this Data.Series
     */
    dataType(): ValueType;

    /**
     * Perform a bitwise "and" operation on the Data.Series with "other"
     */
    and(other: any): Data | null | Data.Series | null | null;

    /**
     * Perform a bitwise "or" operation on the Data.Series with "other"
     */
    or(other: any): Data | null | Data.Series | null | null;

    /**
     * Mutably sets selected values in this Data.
     * @param selector
     *        Determines criteria for selection. Legal selectors are:
     *            - single index label
     *            - array of index label(s)
     *            - array of booleans (must be same length as this.shape[0])
     *            - single-column Data (Series) of booleans (must be same length as this.shape[0])
     *        Cannot be null. Deos not support slicing.
     * @param value
     *        Value to set for selected item(s). Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     */
    setItem(selector: any, value: any): Data.Series | null;

    /**
     * Mutably sets selected values in this Data.
     * @param fst
     *        Determines criteria for row selection. Legal selectors are:
     *            - single index label
     *            - array of index label(s)
     *            - {@link Slice} of index labels
     *            - array of booleans (must be same length as this.shape[0])
     *            - single-column Data (Series) of booleans (must be same length as this.shape[0])
     *        Cannot be null.
     * @param value
     *        Value to set for selected item(s). Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     *
     * @see DataLocIndexer#set
     */
    setLoc(fst: any, value: any): Data.Series | null;

    /**
     * Mutably sets selected values in this Data.
     * @param fst
     *        Determines criteria for row selection. Legal selectors are:
     *            - single index
     *            - array of indices
     *            - {@link Slice} of indices
     *            - array of booleans (must be same length as this.shape[0])
     *            - single-column Data (Series) of booleans (must be same length as this.shape[0])
     *        Cannot be null.
     * @param value
     *        Value to set for selected item(s). Can be a:
     *            - value
     *            - array of values
     *            - single-column Data (Series) of values
     *
     * @see DataIlocIndexer#set
     */
    setIloc(fst: any, value: any): Data.Series | null;

    getItem(fst?: any): any;

    /**
     * Operation represents using the `_item_` (bracket syntax) protocol on a Pandas iloc Indexer.
     */
    getIloc(fst?: any): any;

    /**
     * Operation represents using the `_item_` (bracket syntax) protocol on a Pandas loc Indexer.
     */
    getLoc(fst?: any): any;

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
     *  data = c3.Data.Series([{"a": [{"aa": 1, "ab": 1}, {"aa": 2, "ab": 2}], "b": [[{"bb": 1}], [{"bb": 2}]]}])
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
     * see: https://pandas.pydata.org/docs/reference/api/pandas.Series.align.html
     */
    _align(other?: any, join?: string | null, axis?: any, level?: any, copy?: any, fill_value?: any, method?: string | null, limit?: any, fill_axis?: any, broadcast_axis?: any): C3.Array<any> | null;

    /**
     * Encode the object as an enumerated type or categorical variable.
     *
     * This method is useful for obtaining a numeric representation of an array when all that matters is identifying
     * distinct values. factorize is available as both a top-level function
     *
     * see: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.factorize.html
     */
    _factorize(sort?: any, na_sentinel?: number | null): C3.Array<any> | null;

    /**
     * Return Integer division and modulo of series and other, element-wise (binary operator rdivmod).
     *
     * see: https://pandas.pydata.org/docs/reference/api/pandas.Series.rdivmod.html
     */
    _rdivmod(other?: any, level?: any, fill_value?: any, axis?: any): C3.Array<any> | null;

    /**
     * Return Integer division and modulo of series and other, element-wise (binary operator divmod).
     *
     * see: https://pandas.pydata.org/docs/reference/api/pandas.Series.divmod.html
     */
    _divmod(other?: any, level?: any, fill_value?: any, axis?: any): C3.Array<any> | null;

    get _shape(): C3.Array<number | null> | null;

    /**
     * Return an intermediate Data.Series.StringMethods object for the .str operators on Data.Series
     */
    get str(): Data.Series.StringMethods | null;

    /**
     * The name of this instance.
     */
    cacheKey(): string | null;

    get pySrc(): string | null;

    get fileName(): string | null;

    get tuple(): any;

    get arrowSupport(): boolean;

    get datas(): C3.Set<DataImpl.Pandas | null>;

    /**
     * Helper method to get the binary segments of the Data
     */
    get binaries(): C3.Array<any | null>;

    /**
     * Helper function to check whether the Dataset contains binary segments for this DataImpl.Pandas
     *
     * @return true if this has binary segments in the dataset, false otherwise
     */
    hasBinaries(): boolean;

    get numBinarySegments(): number | null;

    /**
     * Retrieve from the Dataset the idx-th segment of the binary of the source Pandas DataFrame
     *
     * @param idx
     *        the index the segment being queried has in sorted order
     * @return the idx-th segment of the object with the given name's binary representation
     */
    getBinarySegment(idx: number): any | null;

    /**
     * Helper method to rewind the binary buffer to the beginning
     */
    get binary(): any | null;

    get persistedFormat(): string | null;

    get tableName(): string | null;

    get tableEntryId(): string | null;

    get vars(): C3.Map<string | null, any>;

    /**
     * Create an instance of DataImpl.Pandas with the provided name
     */
    static fromBinary(name: string, data: any, dataset?: Dataset | null): Data.Series.Pandas | null;

    static fromBinary(name: string, data: C3.Array<any | null>, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Create an instance of DataImpl.Pandas with the provided name from {@link Feature.Store} store information.
     * See {@link Feature.Store#readData} and {@link Feature.Store#readDataFromArrow}.
     */
    static fromStore(name: string, tableName: string, tableEntryId: string, dataset?: Dataset | null, persistedFormat?: string | null): Data.Series.Pandas | null;

    /**
     * Create an instance of DataImpl.Pandas with the provided name from a pandas binary
     */
    static fromName(name: string, binary: any, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Create an instance of DataImpl.Pandas with the provided name and pySrc
     */
    static fromName(name: string, pySrc: string, datas?: C3.Set<DataImpl.Pandas | null>, vars?: C3.Map<string | null, any>, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Create an instance of DataImpl.Pandas with the provided name from binary segments temporarily saved in the
     * Dataset. See {@link Dataset#addBinarySegment}
     */
    static fromDatasetBinaries(name: string, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Create an instance of DataImpl.Pandas with the provided name from a pickled binary file specified by fileName
     */
    static fromBinaryFile(name: string, fileName: string, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Create a new DataImpl.Pandas from a PyAST visitor context.
     * see @DataToPyAstVisitorCtx
     */
    static fromDataToPyAstVisitorCtx(ctx: DataToPyAstVisitorCtx, dataset?: Dataset | null): Data.Series.Pandas | null;

    /**
     * Converts this DataImpl to {@link DataToPyAstVisitorCtx} that can be converted to a python AST.
     */
    static toDataToPyAstVisitorCtxEngine(ths: DataImpl, spec?: ToPySrcSpec | null): DataToPyAstVisitorCtx;

    /**
     * Dispatch a single method on an existing DataImpl.Pandas.
     *
     * @param doNotConvertData
     *         By default, if dispatch returns a pandas object it is converted to an array. If doNotConvertData is true,
     *         The native pandas value will be converted to the corresponding {@link DataImpl.Pandas} subtype
     */
    static dispatch(pandas: Data.Series.Pandas, name: string, args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>, doNotConvertData?: boolean): any;

    /**
     * Get the specified attribute from the DataImpl.Pandas. Equivalent to running
     * `getattr(pandas, name)` in python
     * @param doNotConvertData
     *         By default, if dispatch returns a pandas object it is converted to an array. If doNotConvertData is true,
     *         The native pandas value will be converted to the corresponding {@link DataImpl.Pandas} subtype
     */
    static getAttribute(pandas: Data.Series.Pandas, name: string, doNotConvertData?: boolean): any;

    /**
     * Evaluate the dataframe without returning it. Useful for eager evaluation
     * @param pandas
     *        The pandas data to be evaluate
     */
    static evaluate(pandas: Data.Series.Pandas): void;

    /**
     * Return the actual value wrapped by this DataImpl.Pandas
     * If the content converts to a pandas DataFrame, return pickled data frame as binary
     * If the content converts to a pandas Series, return the series as a list
     * Otherwise return the data as is
     */
    _value(): any;

    /**
     * Return a serialized representation of the pandas object
     */
    static toBinary(pandas: Data.Series.Pandas): any | null;

    /**
     * Generate a binary representation of this DataImpl.Pandas, segment it into smaller chunks and store them in the
     * parent dataset
     *
     * @param pandas
     *        DataImpl.Pandas object to store binary segments of in a Dataset
     */
    static storeBinariesInDataset(pandas: Data.Series.Pandas): void;

    closeDataFrame(): void;

    /**
     * write the binary of this Data to a temporary file
     * @return the path of the temporary file
     */
    persistDf(): string | null;

    /**
     * Read Data from arrow store in py-data_312 runtime.
     * Used internally to handle cross-runtime data loading (PLAT-130855).
     *
     * @param tableName
     *        name of the table for which the data is stored at.
     * @param tableEntryId
     *        id in the table for which the data is stored at.
     * @param local
     *        if True, read persisted data from the local filesystem. Otherwise, read from the remote.
     * @return the Data read from the store.
     */
    static _readFromArrowStore(tableName: string, tableEntryId: string, local?: boolean): Data | null;

    /**
     * Read Data from arrow store in py-data runtime (legacy Python 3.9).
     *
     * @param tableName
     *        name of the table for which the data is stored at.
     * @param tableEntryId
     *        id in the table for which the data is stored at.
     * @param local
     *        if True, read persisted data from the local filesystem. Otherwise, read from the remote.
     * @return the Data read from the store.
     */
    static _readFromArrowStoreLegacy(tableName: string, tableEntryId: string, local?: boolean): Data | null;
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
