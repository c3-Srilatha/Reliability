// TypeScript definitions for the C3 type Data.Spark.Series

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.Series
 */
declare namespace Data.Spark {
  export interface ISeries {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.Series
 */
declare namespace Data.Spark {
  export class Series {

    get T(): any;

    get axes(): C3.Array<any> | null;

    get dtype(): any;

    get dtypes(): any;

    get empty(): boolean | null;

    get hasnans(): boolean | null;

    get iat(): any;

    get iloc(): Data.Spark.IlocIndexer | null;

    get index(): Data.Spark.Index | null | Data.Spark.MultiIndex | null | Data.Spark.CategoricalIndex | null | Data.Spark.DatetimeIndex | null | Data.Spark.TimedeltaIndex | null | null;

    get is_monotonic(): boolean | null;

    get is_monotonic_decreasing(): boolean | null;

    get is_monotonic_increasing(): boolean | null;

    get is_unique(): boolean | null;

    get loc(): Data.Spark.LocIndexer | null;

    get name(): any;

    get ndim(): number | null;

    get shape(): any;

    get size(): number | null;

    get str(): Data.Spark.StringMethods | null;

    get dt(): Data.Spark.DatetimeMethods | null;

    abs(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    add(other?: any, fill_value?: number | null | number | null | string | null | null): Data.Spark.Series | null;

    add_prefix(prefix?: string | null): Data.Spark.Series | null;

    add_suffix(suffix?: string | null): Data.Spark.Series | null;

    agg(func?: C3.Array<string | null> | string | null | null): Data.Spark.Series | null;

    aggregate(func?: C3.Array<string | null> | string | null | null): Data.Spark.Series | null;

    align(other?: any, join?: string | null, axis?: any, copy?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    all(axis?: any, skipna?: boolean | null): boolean | null;

    any(axis?: any): boolean | null;

    append(to_append?: any, ignore_index?: boolean | null, verify_integrity?: boolean | null): Data.Spark.Series | null;

    apply(func?: λFunction<C3.Array<any>, any> | null, args?: any): Data.Spark.Series | null;

    argmax(axis?: any, skipna?: boolean | null): number | null;

    argmin(axis?: any, skipna?: boolean | null): number | null;

    argsort(): Data.Spark.Series | null;

    asof(where?: any): Data.Spark.Series | null;

    astype(dtype?: any): any;

    at_time(time?: any, asof?: boolean | null, axis?: any): Data.Spark.Series | null;

    autocorr(lag?: number | null): number | null;

    backfill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    between(left?: any, right?: any, inclusive?: boolean | string | null | null): Data.Spark.Series | null;

    between_time(start_time?: any, end_time?: any, include_start?: boolean | null, include_end?: boolean | null, axis?: any): Data.Spark.Series | null;

    bfill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    bool(): boolean | null;

    clip(lower?: number | null | number | null | null, upper?: number | null | number | null | null, inplace?: boolean | null): Data.Spark.Series | null;

    combine_first(other?: any): Data.Spark.Series | null;

    compare(other?: any, keep_shape?: boolean | null, keep_equal?: boolean | null): Data.Spark.DataFrame | null;

    copy(deep?: boolean | null): Data.Spark.Series | null;

    corr(other?: any, method?: string | null, min_periods?: number | null): number | null;

    count(axis?: any, numeric_only?: boolean | null): Data.Spark.Series | null;

    cov(other?: any, min_periods?: number | null, ddof?: number | null): number | null;

    cummax(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cummin(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumprod(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumsum(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    describe(percentiles?: C3.Array<number | null> | null): Data.Spark.Series | null;

    diff(periods?: number | null): Data.Spark.Series | null;

    div(other?: any): Data.Spark.Series | null;

    divide(other?: any): Data.Spark.Series | null;

    divmod(other?: any): Data.Spark.Series | null;

    dot(other?: any): Data.Spark.Series | null;

    drop(labels?: any, index?: any, columns?: any, level?: number | null, inplace?: boolean | null): Data.Spark.Series | null;

    drop_duplicates(keep?: boolean | string | null | null, inplace?: boolean | null): Data.Spark.Series | null;

    droplevel(level?: any): Data.Spark.Series | null;

    dropna(axis?: any, inplace?: boolean | null): Data.Spark.Series | null;

    duplicated(keep?: boolean | string | null | null): Data.Spark.Series | null;

    eq(other?: any): Data.Spark.Series | null;

    equals(other?: any): Data.Spark.Series | null;

    ewm(com?: number | null, span?: number | null, halflife?: number | null, alpha?: number | null, min_periods?: number | null, ignore_na?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    expanding(min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    explode(): Data.Spark.Series | null;

    ffill(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    fillna(value?: any, method?: string | null, axis?: any, inplace?: boolean | null, limit?: number | null): Data.Spark.Series | null;

    filter(items?: any, like?: string | null, regex?: string | null, axis?: any): Data.Spark.Series | null;

    first(offset?: any): Data.Spark.Series | null;

    first_valid_index(): any;

    floordiv(other?: any): Data.Spark.Series | null;

    ge(other?: any): Data.Spark.Series | null;

    get(key?: any, default_?: any): any;

    get_dtype_counts(): Data.Spark.Series | null;

    groupby(by?: any, axis?: any, as_index?: boolean | null, dropna?: boolean | null): Data.Spark.SeriesGroupBy | null;

    gt(other?: any): Data.Spark.Series | null;

    head(n?: number | null): Data.Spark.Series | null;

    hist(bins?: any): any;

    idxmax(skipna?: boolean | null): any;

    idxmin(skipna?: boolean | null): any;

    interpolate(method?: string | null, limit?: number | null, limit_direction?: string | null, limit_area?: string | null): Data.Spark.Series | null;

    isin(values?: any): any;

    isna(): any;

    isnull(): any;

    item(): any;

    items(): Iterator<any> | null;

    iteritems(): Iterator<any> | null;

    keys(): Data.Spark.Index | null;

    kurt(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    kurtosis(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    last(offset?: any): Data.Spark.Series | null;

    last_valid_index(): any;

    le(other?: any): Data.Spark.Series | null;

    lt(other?: any): Data.Spark.Series | null;

    mad(): number | null;

    map(arg?: any, na_action?: string | null): Data.Spark.Series | null;

    mask(cond?: any, other?: any): Data.Spark.Series | null;

    max(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    mean(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    median(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, accuracy?: number | null): Data.Spark.Series | null;

    min(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    mod(other?: any): Data.Spark.Series | null;

    mode(dropna?: boolean | null): Data.Spark.Series | null;

    mul(other?: any): Data.Spark.Series | null;

    ne(other?: any): Data.Spark.Series | null;

    nlargest(n?: number | null): Data.Spark.Series | null;

    notna(): any;

    notnull(): any;

    nsmallest(n?: number | null): Data.Spark.Series | null;

    nunique(dropna?: boolean | null, approx?: boolean | null, rsd?: number | null): number | null;

    pad(axis?: any, inplace?: any, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    pct_change(periods?: number | null): Data.Spark.Series | null;

    pipe(func?: λFunction<C3.Array<any>, any> | null): any;

    pop(item?: any): Data.Spark.Series | null;

    pow(other?: any): Data.Spark.Series | null;

    prod(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    product(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    quantile(q?: any, accuracy?: number | null): Data.Spark.Series | null;

    radd(other?: any, fill_value?: number | null | number | null | string | null | null): Data.Spark.Series | null;

    rank(method?: string | null, ascending?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    rdiv(other?: any): Data.Spark.Series | null;

    rdivmod(other?: any): Data.Spark.Series | null;

    reindex(index?: any, fill_value?: any): Data.Spark.Series | null;

    reindex_like(other?: any): Data.Spark.Series | null;

    rename(index?: any): Data.Spark.Series | null;

    rename_axis(mapper?: any, index?: any, inplace?: boolean | null): Data.Spark.Series | null;

    repeat(repeats?: any): Data.Spark.Series | null;

    replace(to_replace?: any, value?: any, regex?: boolean | string | null | null): Data.Spark.Series | null;

    resample(rule?: any, closed?: any, label?: any, on?: any): Data.Spark.Resampler | null;

    reset_index(level?: any, drop?: boolean | null, name?: any, inplace?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    rfloordiv(other?: any): Data.Spark.Series | null;

    rmod(other?: any): Data.Spark.Series | null;

    rmul(other?: any): Data.Spark.Series | null;

    rolling(window?: number | null, min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    round(decimals?: number | null): Data.Spark.Series | null;

    rpow(other?: any): Data.Spark.Series | null;

    rsub(other?: any): Data.Spark.Series | null;

    rtruediv(other?: any): Data.Spark.Series | null;

    sample(n?: number | null, frac?: number | null, replace?: boolean | null, random_state?: number | null, ignore_index?: boolean | null): Data.Spark.Series | null;

    searchsorted(value?: any, side?: string | null): number | null;

    sem(axis?: any, skipna?: boolean | null, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    shift(periods?: number | null, fill_value?: any): any;

    skew(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    sort_index(axis?: any, level?: C3.Array<number | null> | number | null | null, ascending?: boolean | null, inplace?: boolean | null, kind?: string | null, na_position?: string | null, ignore_index?: boolean | null): Data.Spark.Series | null;

    sort_values(ascending?: boolean | null, inplace?: boolean | null, na_position?: string | null, ignore_index?: boolean | null): Data.Spark.Series | null;

    squeeze(axis?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    std(axis?: any, skipna?: boolean | null, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    sub(other?: any): Data.Spark.Series | null;

    sum(axis?: any, skipna?: boolean | null, numeric_only?: boolean | null, min_count?: number | null): Data.Spark.Series | null;

    swapaxes(i?: any, j?: any, copy?: boolean | null): Data.Spark.Series | null;

    swaplevel(i?: any, j?: any, copy?: boolean | null): Data.Spark.Series | null;

    tail(n?: number | null): Data.Spark.Series | null;

    take(indices?: any): any;

    to_clipboard(excel?: boolean | null, sep?: string | null): any;

    to_csv(path?: string | null, sep?: string | null, na_rep?: string | null, columns?: C3.Array<any> | null, header?: boolean | null, quotechar?: string | null, date_format?: string | null, escapechar?: string | null, num_files?: number | null, mode?: string | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): string | null;

    to_dataframe(name?: any): Data.Spark.DataFrame | null;

    to_dict(into?: any): any;

    to_excel(excel_writer?: any, sheet_name?: string | null, na_rep?: string | null, float_format?: string | null, columns?: C3.Array<string | null> | string | null | null, header?: boolean | null, index?: boolean | null, index_label?: C3.Array<string | null> | string | null | null, startrow?: number | null, startcol?: number | null, engine?: string | null, merge_cells?: boolean | null, encoding?: string | null, inf_rep?: string | null, verbose?: boolean | null, freeze_panes?: [number | null, number | null] | null): any;

    to_frame(name?: any): Data.Spark.DataFrame | null;

    to_json(path?: string | null, compression?: string | null, num_files?: number | null, mode?: string | null, orient?: string | null, lines?: boolean | null, partition_cols?: C3.Array<string | null> | string | null | null, index_col?: C3.Array<string | null> | string | null | null): string | null;

    to_latex(buf?: any, columns?: C3.Array<any> | null, col_space?: number | null, header?: boolean | null, index?: boolean | null, na_rep?: string | null, formatters?: C3.Array<λFunction<any, string | null> | null> | C3.Map<any, λFunction<any, string | null> | null> | null, float_format?: λFunction<number | null, string | null> | null, sparsify?: boolean | null, index_names?: boolean | null, bold_rows?: boolean | null, column_format?: string | null, longtable?: boolean | null, escape?: boolean | null, encoding?: string | null, decimal?: string | null, multicolumn?: boolean | null, multicolumn_format?: string | null, multirow?: boolean | null): string | null;

    to_list(): C3.Array<any> | null;

    to_markdown(buf?: any, mode?: string | null): string | null;

    to_pandas(): Data.Spark.Series | null;

    to_string(buf?: any, na_rep?: string | null, float_format?: λFunction<number | null, string | null> | null, header?: boolean | null, index?: boolean | null, length?: boolean | null, dtype?: boolean | null, name?: boolean | null, max_rows?: number | null): string | null;

    tolist(): C3.Array<any> | null;

    transform(func?: C3.Array<λFunction<C3.Array<any>, any> | null> | λFunction<C3.Array<any>, any> | null | null, axis?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    transpose(): Data.Spark.Series | null;

    truediv(other?: any): Data.Spark.Series | null;

    truncate(before?: any, after?: any, axis?: any, copy?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    unique(): Data.Spark.Series | null;

    unstack(level?: number | null): Data.Spark.DataFrame | null;

    update(other?: any): any;

    value_counts(normalize?: boolean | null, sort?: boolean | null, ascending?: boolean | null, bins?: any, dropna?: boolean | null): Data.Spark.Series | null;

    var(axis?: any, ddof?: number | null, numeric_only?: boolean | null): Data.Spark.Series | null;

    where(cond?: any, other?: any): Data.Spark.Series | null;

    xs(key?: any, level?: number | null): Data.Spark.Series | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
