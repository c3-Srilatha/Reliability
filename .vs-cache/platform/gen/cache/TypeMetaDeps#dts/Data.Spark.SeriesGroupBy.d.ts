// TypeScript definitions for the C3 type Data.Spark.SeriesGroupBy

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.SeriesGroupBy
 */
declare namespace Data.Spark {
  export interface ISeriesGroupBy {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.SeriesGroupBy
 */
declare namespace Data.Spark {
  export class SeriesGroupBy {

    agg(): any;

    aggregate(): any;

    all(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    any(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    apply(func?: λFunction<C3.Array<any>, any> | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    backfill(limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    bfill(limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    count(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumcount(ascending?: boolean | null): Data.Spark.Series | null;

    cummax(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cummin(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumprod(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    cumsum(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    diff(periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    ewm(com?: number | null, span?: number | null, halflife?: number | null, alpha?: number | null, min_periods?: number | null, ignore_na?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    expanding(min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    ffill(limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    fillna(value?: any, method?: string | null, axis?: any, inplace?: boolean | null, limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    filter(func?: λFunction<any, any> | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    first(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    get_group(name?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    head(n?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    idxmax(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    idxmin(skipna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    last(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    mad(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    max(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    mean(numeric_only?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    median(numeric_only?: boolean | null, accuracy?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    min(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    nlargest(n?: number | null): Data.Spark.Series | null;

    nsmallest(n?: number | null): Data.Spark.Series | null;

    nth(n?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    nunique(dropna?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    pad(limit?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    prod(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    quantile(q?: number | null, accuracy?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    rank(method?: string | null, ascending?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    rolling(window?: number | null, min_periods?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    sem(ddof?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    shift(periods?: number | null, fill_value?: any): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    size(): Data.Spark.Series | null;

    skew(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    std(ddof?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    sum(numeric_only?: boolean | null, min_count?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    tail(n?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    transform(func?: λFunction<C3.Array<any>, any> | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    unique(): Data.Spark.Series | null;

    value_counts(sort?: boolean | null, ascending?: boolean | null, dropna?: boolean | null): Data.Spark.Series | null;

    var(ddof?: number | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
