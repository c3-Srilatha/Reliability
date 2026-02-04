// TypeScript definitions for the C3 type Data.Spark.DatetimeMethods

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.DatetimeMethods
 */
declare namespace Data.Spark {
  export interface IDatetimeMethods {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.DatetimeMethods
 */
declare namespace Data.Spark {
  export class DatetimeMethods {

    get date(): Data.Spark.Series | null;

    get day(): Data.Spark.Series | null;

    get dayofweek(): Data.Spark.Series | null;

    get dayofyear(): Data.Spark.Series | null;

    get days_in_month(): Data.Spark.Series | null;

    get daysinmonth(): Data.Spark.Series | null;

    get hour(): Data.Spark.Series | null;

    get is_leap_year(): Data.Spark.Series | null;

    get is_month_end(): Data.Spark.Series | null;

    get is_month_start(): Data.Spark.Series | null;

    get is_quarter_end(): Data.Spark.Series | null;

    get is_quarter_start(): Data.Spark.Series | null;

    get is_year_end(): Data.Spark.Series | null;

    get is_year_start(): Data.Spark.Series | null;

    get microsecond(): Data.Spark.Series | null;

    get minute(): Data.Spark.Series | null;

    get month(): Data.Spark.Series | null;

    get nanosecond(): Data.Spark.Series | null;

    get quarter(): Data.Spark.Series | null;

    get second(): Data.Spark.Series | null;

    get time(): Data.Spark.Series | null;

    get timetz(): Data.Spark.Series | null;

    get week(): Data.Spark.Series | null;

    get weekday(): Data.Spark.Series | null;

    get weekofyear(): Data.Spark.Series | null;

    get year(): Data.Spark.Series | null;

    ceil(freq?: any): Data.Spark.Series | null;

    day_name(locale?: string | null): Data.Spark.Series | null;

    floor(freq?: any): Data.Spark.Series | null;

    month_name(locale?: string | null): Data.Spark.Series | null;

    normalize(): Data.Spark.Series | null;

    round(freq?: any): Data.Spark.Series | null;

    strftime(date_format?: string | null): Data.Spark.Series | null;
  }
}

