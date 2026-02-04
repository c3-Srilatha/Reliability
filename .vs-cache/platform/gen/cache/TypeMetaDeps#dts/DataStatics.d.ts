// TypeScript definitions for the C3 type DataStatics

/**
 * This type lives in between {@link Data} and {@link Pandas.Static} in order to allow {@link ReClaim}ing of
 * static methods on Data, enabling us to handle them in a DRY and generic way.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataStatics
 */
declare interface IDataStatics {
}

/**
 * This type lives in between {@link Data} and {@link Pandas.Static} in order to allow {@link ReClaim}ing of
 * static methods on Data, enabling us to handle them in a DRY and generic way.
 *
 * @remarks this represents a made instance of DataStatics
 */
declare class DataStatics {

  /**
   * Construct a {@link Data} manually. Corresponds to pd.DataFrame constructor from Pandas 1.3.4
   */
  static dataFrame(data?: C3.Map<string | null, any> | C3.Array<any> | null, index?: any, columns?: any, dtype?: any, copy?: boolean): Data | null;

  /**
   * Construct a {@link Data.Series} manually. Corresponds to pd.Series constructor from Pandas 1.3.4
   */
  static series(data?: any, index?: any, dtype?: any, name?: any, copy?: boolean, fastpath?: boolean): Data.Series | null;

  /**
   * Construct a {@link Data.Index} manually. Corresponds to pd.Index constructor from Pandas 1.3.4
   */
  static index_(data?: any, dtype?: any, copy?: boolean, name?: any, tupleize_cols?: any): Data.Index | null | Data.MultiIndex | null | Data.DatetimeIndex | null | Data.TimedeltaIndex | null | Data.Float64Index | null | Data.Int64Index | null | null;

  /**
   * Construct a {@link Data.RangeIndex} manually. Corresponds to pd.RangeIndex constructor from Pandas 1.3.4
   */
  static rangeIndex(start?: any, stop?: number | null, step?: number | null, dtype?: any, copy?: boolean, name?: any): Data.RangeIndex | null;

  /**
   * Construct a {@link Data.CategoricalIndex} manually. Corresponds to pd.CategoricalIndex constructor from Pandas 1.3.4
   */
  static categoricalIndex(data?: any, categories?: any, ordered?: any, dtype?: any, copy?: boolean, name?: any): Data.CategoricalIndex | null;

  /**
   * Construct a {@link Data.MultiIndex} manually. Corresponds to pd.MultiIndex constructor from Pandas 1.3.4
   */
  static multiIndex(levels?: any, codes?: any, sortorder?: number | null, names?: any, dtype?: any, copy?: boolean, name?: any, verify_integrity?: any): Data.MultiIndex | null;

  /**
   * Construct a {@link Data.IntervalIndex} manually. Corresponds to pd.IntervalIndex constructor from Pandas 1.3.4
   */
  static intervalIndex(data?: any, closed?: string | null, dtype?: any, copy?: boolean, name?: any, verify_integrity?: any): Data.IntervalIndex | null;

  /**
   * Construct a {@link Data.DatetimeIndex} manually. Corresponds to pd.DatetimeIndex constructor from Pandas 1.3.4
   */
  static datetimeIndex(data?: any, freq?: any, tz?: any, normalize?: boolean, closed?: string | null, ambiguous?: any, dayfirst?: boolean, yearfirst?: boolean, dtype?: any, copy?: boolean, name?: any): Data.DatetimeIndex | null;

  /**
   * Construct a {@link Data.TimedeltaIndex} manually. Corresponds to pd.TimedeltaIndex constructor from Pandas 1.3.4
   */
  static timedeltaIndex(data?: any, unit?: any, freq?: any, copy?: boolean, name?: any): Data.TimedeltaIndex | null;

  /**
   * Construct a {@link Data.PeriodIndex} manually. Corresponds to pd.PeriodIndex constructor from Pandas 1.3.4
   */
  static periodIndex(data?: any, ordinal?: any, freq?: any, dtype?: any, copy?: boolean, name?: any, year?: any, month?: any, quarter?: any, day?: any, hour?: any, minute?: any, second?: any): Data.PeriodIndex | null;

  /**
   * Construct a {@link Data.Int64Index} manually. Corresponds to pd.Int64Index constructor from Pandas 1.3.4
   */
  static int64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.Int64Index | null;

  /**
   * Construct a {@link Data.UInt64Index} manually. Corresponds to pd.UInt64Index constructor from Pandas 1.3.4
   */
  static uInt64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.UInt64Index | null;

  /**
   * Construct a {@link Data.Float64Index} manually. Corresponds to pd.Float64Index constructor from Pandas 1.3.4
   */
  static float64Index(data?: any, dtype?: any, copy?: boolean, name?: any): Data.Float64Index | null;

  /**
   * Read a comma-separate values file and construct a {@link Data} out of the contents.
   *
   * Example usage:
   * ```py
   * Reading an individual csv file.
   * >>> dt = c3.Data.read_csv('path-to-your-file/your-file.csv')
   *
   * Reading multiple csv files with the same schema inside a folder.
   * >>> dt = c3.Data.read_csv('path-to-your-folder/')
   *
   * Reading from client "local" folder. These are files local to the calling (e.g. SDK) process.
   * >>> dt = c3.PyDataTable.read_csv('local:///path-to-your-folder/')
   * ```
   *
   * @param path
   *           c3 file path that contains the data. See {@link Dataset#fromFiles} for specifics on semantics.
   * @param parse_dates
   *           list of names of "columns" in the header to interpret as datetime.
   * @return a {@link Data} that contains the data of the file(s).
   */
  static read_csv(filepath_or_buffer: string | null | ContentValue | null, spec?: Data.ManualOpSpecs.ReadCsvSpec | null): Data | null;

  /**
   * Simultaneously read data from multiple .csv files.
   * `path` should be constructed as a glob. Only implemented for Modin execution mode
   *
   * Example usage:
   * ```py
   * >>> dt = c3.Data.read_csv_glob('path-to-your-file/*.csv')
   * ```
   *
   * @param filepath_or_buffer
   *           c3 file path that contains the data.
   * @param parse_dates
   *           list of names of "columns" in the header to interpret as datetime.
   * @return a {@link Data} that contains the data of the file(s).
   */
  static read_csv_glob(filepath_or_buffer: string, spec?: Data.ManualOpSpecs.ReadCsvGlobSpec | null): Data | null;

  /**
   * Reads SQL query into a DataFrame equivalent.
   *
   * @param sql
   *           SQL query string
   * @param url
   *           database connection path for the sql_alchemy engine
   * @param http_path
   *           http_path for the sql_alchemy engine
   * @param parse_dates
   *           list of column names to parse as dates
   */
  static _read_sql_query(sql: string, url: string, http_path: string, parse_dates?: any): Data | null;

  /**
   *  Perform a merge by key distance.
   *
   *  Both Data must be sorted by the key.
   *
   *  For each row in the left Data:
   *    - A "backward" search chooses the last row in the right Data whose
   *      'on' key is less than or equal to the left's key.
   *    - A "forward" search chooses the first row in the right Data whose
   *      'on' key is greater than or equal to the left's key.
   *    - A "nearest" search chooses the row in the right Data whose 'on'
   *      key is closest to the left's key.
   *
   *  @param left
   *         Data to merge
   *  @param right
   *         Data to merge
   *  @param on
   *         Column name to join on, needs to be present in both Data. The column being merged on must be ordered and
   * numeric must be a numeric column (integer, float, or datetime). On or left_on/right_on must be provided.
   *  @param left_on
   *         Column name to join on in the left Data
   *  @param right_on
   *         Column name to join on in the left Data
   *  @param left_index
   *         Indicate if the index of the left Data should be used as the join key
   *  @param right_index
   *         Indicate if the index of the right Data should be used as the join key
   *  @param by
   *         List of column names or a single column name. These columns are matched prior to merging
   *  @param left_by
   *         Column name. Columns to match on in the left Data
   *  @param right_by
   *         Column name. Columns to match on in the right Data
   *  @param suffixes
   *         2-length list or sequence. Suffix applied to overlapping column names in the left and right Data, respectively
   *  @param tolerance
   *         int or time delta. Select asof tolerance from this range. The tolerance needs to be compatible with the
   *         designated merge index
   *  @param allow_exact_matches
   *         If True, allow matching with the same ‘on’ value during merge (greater-than-or-equal-to or less-than-or-equal-to)
   *         If False, don’t match the same ‘on’ value during merge (strictly greater-than or strictly less-than)
   *  @param direction
   *         Indicate to look for prior, subsequent, or closest matches during merge
   *
   *  @return a {@link Data} representing the merged Data
   */
  static merge_asof(left?: Data | null, right?: Data | null, on?: any, left_on?: any, right_on?: any, left_index?: boolean | null, right_index?: boolean | null, by?: any, left_by?: any, right_by?: any, suffixes?: any, tolerance?: any, allow_exact_matches?: any, direction?: string | null): Data | null;

  /**
   * Concatenate Data along a specified axis with optional logic along the other axis
   * @param objs
   *           Mapping or sequence of Data objects. If a mapping is passed, the sorted keys will be used as the `keys`
   *           argument, unless it is passed, in which case the values will be selected.
   * @param axis
   *           The axis to concatenate along
   * @param join
   *        How to process indexes on the axis
   * @param ignore_index
   *        When true index values along the concatenation axis are ignored.
   * @param keys
   *        Sequence used to construct hierarchical index
   * @param levels
   *        list of sequences.
   *        Levels to use for building a Multi-index. If left null, the multi-index will be inferred from keys
   * @param names
   *        Names of each level in the resulting hierarchical index
   * @param verify_integrity
   *        Check if the concatenated axis contains any duplicates
   * @param sort
   *        Sorts the non-concatenation axis when join='outer' and it is not already aligned
   * @param copy
   *        Does not copy data unnecessarily when false   *
   * @return a {@link Data} representing the concatenated Data
   */
  static concat(objs?: any, axis?: number | null | string | null | null, join?: string | null, ignore_index?: boolean | null, keys?: any, levels?: any, names?: any, verify_integrity?: boolean | null, sort?: boolean | null, copy?: any): Data | null;

  /**
   * Normalize semi-structured JSON data into a Data
   * @param data
   *           Unserialized JSON objects
   * @param record_path
   *           Path in each object to list of records. If not passed, data will be assumed to be an array of records.
   * @param meta
   *        Fields to use as metadata for each record in resulting table.
   * @param meta_prefix
   *        If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].
   * @param record_prefix
   *        If True, prefix records with dotted (?) path, e.g. foo.bar.field if path to records is [‘foo’, ‘bar’].
   * @param errors
   *        Configures error handling.
   *        ‘ignore’ : will ignore KeyError if keys listed in meta are not always present.
   *        ‘raise’ : will raise KeyError if keys listed in meta are not always present.
   * @param sep
   *        Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.
   * @param max_level
   *        Max number of levels(depth of dict) to normalize. if None, normalizes all levels.
   *
   * @return a {@link Data} representing the structured JSON data
   */
  static json_normalize(data: any, record_path?: any, meta?: any, meta_prefix?: any, record_prefix?: any, errors?: string | null, sep?: string | null, max_level?: number | null): Data | null;

  static from_dict(data?: any, orient?: any, dtype?: any, columns?: any): Data | null;

  static from_records(data?: any, index?: any, exclude?: any, columns?: any, coerce_float?: any, nrows?: any): Data | null;

  /**
   * @return executes given action representing method call on one of this type's mixin type.
   */
  static _exec(action: Action): any;
}

