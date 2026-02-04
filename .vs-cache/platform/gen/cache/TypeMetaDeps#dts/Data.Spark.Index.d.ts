// TypeScript definitions for the C3 type Data.Spark.Index

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.Index
 */
declare namespace Data.Spark {
  export interface IIndex {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.Index
 */
declare namespace Data.Spark {
  export class Index {

    get T(): any;

    get asi8(): C3.Array<any> | null;

    get dtype(): any;

    get empty(): boolean | null;

    get has_duplicates(): boolean | null;

    get hasnans(): boolean | null;

    get inferred_type(): string | null;

    get is_all_dates(): boolean | null;

    get is_monotonic(): boolean | null;

    get is_monotonic_decreasing(): boolean | null;

    get is_monotonic_increasing(): boolean | null;

    get is_unique(): boolean | null;

    get name(): any;

    get names(): C3.Array<any> | null;

    get ndim(): number | null;

    get nlevels(): number | null;

    get shape(): any;

    get size(): number | null;

    all(axis?: any, skipna?: boolean | null): boolean | null;

    any(axis?: any): boolean | null;

    append(other?: any): Data.Spark.Index | null;

    argmax(): number | null;

    argmin(): number | null;

    asof(label?: any): any;

    astype(dtype?: any): any;

    copy(name?: any, deep?: boolean | null): Data.Spark.Index | null;

    delete(loc?: C3.Array<number | null> | number | null | null): Data.Spark.Index | null;

    difference(other?: any, sort?: boolean | null): Data.Spark.Index | null;

    drop(labels?: C3.Array<any> | null): Data.Spark.Index | null;

    drop_duplicates(keep?: boolean | string | null | null): Data.Spark.Index | null;

    droplevel(level?: any): Data.Spark.Index | null;

    dropna(how?: string | null): Data.Spark.Index | null;

    equals(other?: any): boolean | null;

    fillna(value?: any): Data.Spark.Index | null;

    get_level_values(level?: any): Data.Spark.Index | null;

    holds_integer(): boolean | null;

    identical(other?: any): boolean | null;

    insert(loc?: number | null, item?: any): Data.Spark.Index | null;

    intersection(other?: any): Data.Spark.Index | null;

    is_boolean(): boolean | null;

    is_categorical(): boolean | null;

    is_floating(): boolean | null;

    is_integer(): boolean | null;

    is_interval(): boolean | null;

    is_numeric(): boolean | null;

    is_object(): boolean | null;

    is_type_compatible(kind?: string | null): boolean | null;

    isin(values?: any): any;

    isna(): any;

    isnull(): any;

    item(): any;

    map(mapper?: any, na_action?: string | null): Data.Spark.Index | null;

    max(): any;

    min(): any;

    notna(): any;

    notnull(): any;

    nunique(dropna?: boolean | null, approx?: boolean | null, rsd?: number | null): number | null;

    repeat(repeats?: number | null): Data.Spark.Index | null;

    shift(periods?: number | null, fill_value?: any): any;

    sort(): any;

    sort_values(return_indexer?: boolean | null, ascending?: boolean | null): any;

    symmetric_difference(other?: any, result_name?: any, sort?: boolean | null): Data.Spark.Index | null;

    take(indices?: any): any;

    to_frame(index?: boolean | null, name?: any): Data.Spark.DataFrame | null;

    to_list(): C3.Array<any> | null;

    to_pandas(): Data.Spark.Index | null;

    to_series(name?: any): Data.Spark.Series | null;

    tolist(): C3.Array<any> | null;

    transpose(): Data.Spark.Index | null;

    union(other?: any, sort?: boolean | null): Data.Spark.Index | null;

    unique(level?: any): Data.Spark.Index | null;

    value_counts(normalize?: boolean | null, sort?: boolean | null, ascending?: boolean | null, bins?: any, dropna?: boolean | null): Data.Spark.Series | null;

    view(): Data.Spark.Index | null;
  }
}

