// TypeScript definitions for the C3 type Data.Spark.StringMethods

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.Spark.StringMethods
 */
declare namespace Data.Spark {
  export interface IStringMethods {
  }
}

/**
 * @remarks this represents a made instance of Data.Spark.StringMethods
 */
declare namespace Data.Spark {
  export class StringMethods {

    capitalize(): Data.Spark.Series | null;

    cat(others?: any, sep?: any, na_rep?: any, join?: any): any;

    center(width?: number | null, fillchar?: string | null): Data.Spark.Series | null;

    contains(pat?: string | null, case_?: boolean | null, flags?: number | null, na?: any, regex?: boolean | null): Data.Spark.Series | null;

    count(pat?: string | null, flags?: number | null): Data.Spark.Series | null;

    decode(encoding?: any, errors?: any): any;

    encode(encoding?: any, errors?: any): any;

    endswith(pattern?: string | null, na?: any): Data.Spark.Series | null;

    extract(pat?: any, flags?: any, expand?: any): any;

    extractall(pat?: any, flags?: any): any;

    find(sub?: string | null, start?: number | null, end?: number | null): Data.Spark.Series | null;

    findall(pat?: string | null, flags?: number | null): Data.Spark.Series | null;

    get(i?: number | null): Data.Spark.Series | null;

    get_dummies(sep?: string | null): any;

    index(sub?: string | null, start?: number | null, end?: number | null): Data.Spark.Series | null;

    isalnum(): Data.Spark.Series | null;

    isalpha(): Data.Spark.Series | null;

    isdecimal(): Data.Spark.Series | null;

    isdigit(): Data.Spark.Series | null;

    islower(): Data.Spark.Series | null;

    isnumeric(): Data.Spark.Series | null;

    isspace(): Data.Spark.Series | null;

    istitle(): Data.Spark.Series | null;

    isupper(): Data.Spark.Series | null;

    join(sep?: string | null): Data.Spark.Series | null;

    len(): Data.Spark.Series | null;

    ljust(width?: number | null, fillchar?: string | null): Data.Spark.Series | null;

    lower(): Data.Spark.Series | null;

    lstrip(to_strip?: string | null): Data.Spark.Series | null;

    match(pat?: string | null, case_?: boolean | null, flags?: number | null, na?: any): Data.Spark.Series | null;

    normalize(form?: string | null): Data.Spark.Series | null;

    pad(width?: number | null, side?: string | null, fillchar?: string | null): Data.Spark.Series | null;

    partition(sep?: string | null, expand?: boolean | null): Data.Spark.Series | null;

    repeat(repeats?: number | null): Data.Spark.Series | null;

    replace(pat?: string | null, repl?: λFunction<string | null, string | null> | null | string | null | null, n?: number | null, case_?: boolean | null, flags?: number | null, regex?: boolean | null): Data.Spark.Series | null;

    rfind(sub?: string | null, start?: number | null, end?: number | null): Data.Spark.Series | null;

    rindex(sub?: string | null, start?: number | null, end?: number | null): Data.Spark.Series | null;

    rjust(width?: number | null, fillchar?: string | null): Data.Spark.Series | null;

    rpartition(sep?: string | null, expand?: boolean | null): Data.Spark.Series | null;

    rsplit(pat?: string | null, n?: number | null, expand?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    rstrip(to_strip?: string | null): Data.Spark.Series | null;

    slice(start?: number | null, stop?: number | null, step?: number | null): Data.Spark.Series | null;

    slice_replace(start?: number | null, stop?: number | null, repl?: string | null): Data.Spark.Series | null;

    split(pat?: string | null, n?: number | null, expand?: boolean | null): Data.Spark.DataFrame | null | Data.Spark.Series | null | null;

    startswith(pattern?: string | null, na?: any): Data.Spark.Series | null;

    strip(to_strip?: string | null): Data.Spark.Series | null;

    swapcase(): Data.Spark.Series | null;

    title(): Data.Spark.Series | null;

    translate(table?: C3.Map<any, any> | null): Data.Spark.Series | null;

    upper(): Data.Spark.Series | null;

    wrap(width?: number | null): Data.Spark.Series | null;

    zfill(width?: number | null): Data.Spark.Series | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
