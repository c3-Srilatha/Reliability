// TypeScript definitions for the C3 type Data.Spark.SeriesImpl

/**
 * Internal implementation of Pandas on Spark Series backed by Spark engine
 * See the interface {@link Data.Spark.Series} for declared APIs
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.SeriesImpl
 */
declare namespace Data.Spark {
  export interface ISeriesImpl {

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
 * Internal implementation of Pandas on Spark Series backed by Spark engine
 * See the interface {@link Data.Spark.Series} for declared APIs
 *
 * @remarks this represents a made instance of Data.Spark.SeriesImpl
 */
declare namespace Data.Spark {
  export class SeriesImpl extends Obj {

    /**
     * Underlying execution engine ({@link Data.ExecutionEngine}) that executes the plan
     * It's the same engine of Spark Session when we created this Data.Spark instance
     */
    engine?: Data.ExecutionEngine | null;
    withEngine(engine: IData.ExecutionEngine | null): Data.Spark.SeriesImpl;

    /**
     * The plan that used to actualize this Data.Spark instance
     */
    pipeline?: PipelineSpec | null;
    withPipeline(pipeline: IPipelineSpec | null): Data.Spark.SeriesImpl;

    /**
     * The id number that represent this Data.Spark instance
     */
    nodeId?: string | null;
    withNodeId(nodeId: string | null): Data.Spark.SeriesImpl;

    /**
     * The output name of the pipeline
     */
    outputId?: string | null;
    withOutputId(outputId: string | null): Data.Spark.SeriesImpl;

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
    static make(): Data.Spark.SeriesImpl;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.Spark.SeriesImpl;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.Spark.SeriesImpl;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.Spark.SeriesImpl;

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
    static make(fields: any, withDefaults?: boolean): Data.Spark.SeriesImpl;

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
    static fromJson(json: any | null): Data.Spark.SeriesImpl | null;

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
    static fromJsonString(json: string | null): Data.Spark.SeriesImpl | null;

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
    static fromXmlString(xml: string | null): Data.Spark.SeriesImpl | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Spark.SeriesImpl | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Spark.SeriesImpl;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Spark.SeriesImpl;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.Spark.SeriesImpl;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Spark.SeriesImpl | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.Spark.SeriesImpl | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.Spark.SeriesImpl;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Spark.SeriesImpl;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.Spark.SeriesImpl;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.Spark.SeriesImpl;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.Spark.SeriesImpl;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.Spark.SeriesImpl;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.Spark.SeriesImpl;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.Spark.SeriesImpl;

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
    withoutFieldAtPath(path: string): Data.Spark.SeriesImpl;

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
    withoutField(field: string | null): Data.Spark.SeriesImpl;

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
    withoutField(field: FieldType | null): Data.Spark.SeriesImpl;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.Spark.SeriesImpl;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.Spark.SeriesImpl;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.Spark.SeriesImpl;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.Spark.SeriesImpl;

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
    defaultField(field: string): Data.Spark.SeriesImpl;

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
    defaultField(field: FieldType): Data.Spark.SeriesImpl;

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
    unsetField(field: string): Data.Spark.SeriesImpl;

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
    unsetField(field: FieldType): Data.Spark.SeriesImpl;

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
    removeField(field: string): Data.Spark.SeriesImpl;

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
    removeField(field: FieldType): Data.Spark.SeriesImpl;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.Spark.SeriesImpl;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.Spark.SeriesImpl;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.Spark.SeriesImpl;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.Spark.SeriesImpl;

    mergeJson(json: any | null): Data.Spark.SeriesImpl;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.Spark.SeriesImpl;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.Spark.SeriesImpl;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.Spark.SeriesImpl | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.Spark.SeriesImpl | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.Spark.SeriesImpl | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.Spark.SeriesImpl | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.Spark.SeriesImpl | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.Spark.SeriesImpl | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.Spark.SeriesImpl | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.Spark.SeriesImpl | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.Spark.SeriesImpl | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.Spark.SeriesImpl;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.Spark.SeriesImpl;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.Spark.SeriesImpl;

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
    afterMake(): Data.Spark.SeriesImpl;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.Spark.SeriesImpl;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.Spark.SeriesImpl>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.Spark.SeriesImpl;

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
    setField(field: string, value: any, doNotConvert?: boolean): Data.Spark.SeriesImpl;

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
    setField(field: FieldType, value: any, doNotConvert?: boolean): Data.Spark.SeriesImpl;

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
