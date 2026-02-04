// TypeScript definitions for the C3 type Data.Spark.Resampler

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.Resampler
 */
declare namespace Data.Spark {
  export interface IResampler {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.Resampler
 */
declare namespace Data.Spark {
  export class Resampler {

    get_make_interval(unit?: string | null, col?: any): any;

    max(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    mean(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    min(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    std(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    sum(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    var(): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;
  }
}

