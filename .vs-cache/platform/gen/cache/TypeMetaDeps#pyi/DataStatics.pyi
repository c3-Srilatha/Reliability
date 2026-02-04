#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.DatetimeIndex import Data.DatetimeIndex
from c3.platform.Data.ManualOpSpecs.ReadCsvGlobSpec import Data.ManualOpSpecs.ReadCsvGlobSpec
from c3.platform.ContentValue import ContentValue
from c3.platform.Action import Action
from c3.platform.Data.UInt64Index import Data.UInt64Index
from c3.platform.Data.TimedeltaIndex import Data.TimedeltaIndex
from c3.platform.Data.Index import Data.Index
from c3.platform.Data.IntervalIndex import Data.IntervalIndex
from c3.platform.Data import Data
from c3.platform.Data.ManualOpSpecs.ReadCsvSpec import Data.ManualOpSpecs.ReadCsvSpec
from c3.platform.Data.RangeIndex import Data.RangeIndex
from c3.platform.Data.Series import Data.Series
from c3.platform.Data.CategoricalIndex import Data.CategoricalIndex
from c3.platform.Data.Float64Index import Data.Float64Index
from c3.platform.Data.MultiIndex import Data.MultiIndex
from c3.platform.Data.Int64Index import Data.Int64Index
from c3.platform.Data.PeriodIndex import Data.PeriodIndex

# Python definitions for the C3 type DataStatics


class DataStatics(Pandas.Static, Pandas.DataFrameStatic, ReClaim, Value):
    """
    This type lives in between {@link Data} and {@link Pandas.Static} in order to allow {@link ReClaim}ing of
    static methods on Data, enabling us to handle them in a DRY and generic way.
    
    @remarks this represents a made instance of DataStatics
    """
    def __init__(self) -> None: ...

    @classmethod
    def dataFrame(cls, data: Union[Map[str, Any],Array[Any]]=None, index: Any=None, columns: Any=None, dtype: Any=None, copy: bool=None) -> Union[Data]:
    """
    Construct a {@link Data} manually. Corresponds to pd.DataFrame constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def series(cls, data: Any=None, index: Any=None, dtype: Any=None, name: Any=None, copy: bool=None, fastpath: bool=None) -> Union[Data.Series]:
    """
    Construct a {@link Data.Series} manually. Corresponds to pd.Series constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def index_(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, tupleize_cols: Any=None) -> Union[Union[Data.Index,Data.MultiIndex,Data.DatetimeIndex,Data.TimedeltaIndex,Data.Float64Index,Data.Int64Index]]:
    """
    Construct a {@link Data.Index} manually. Corresponds to pd.Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def rangeIndex(cls, start: Any=None, stop: int=None, step: int=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.RangeIndex]:
    """
    Construct a {@link Data.RangeIndex} manually. Corresponds to pd.RangeIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def categoricalIndex(cls, data: Any=None, categories: Any=None, ordered: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.CategoricalIndex]:
    """
    Construct a {@link Data.CategoricalIndex} manually. Corresponds to pd.CategoricalIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def multiIndex(cls, levels: Any=None, codes: Any=None, sortorder: int=None, names: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.MultiIndex]:
    """
    Construct a {@link Data.MultiIndex} manually. Corresponds to pd.MultiIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def intervalIndex(cls, data: Any=None, closed: str=None, dtype: Any=None, copy: bool=None, name: Any=None, verify_integrity: Any=None) -> Union[Data.IntervalIndex]:
    """
    Construct a {@link Data.IntervalIndex} manually. Corresponds to pd.IntervalIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def datetimeIndex(cls, data: Any=None, freq: Any=None, tz: Any=None, normalize: bool=None, closed: str=None, ambiguous: Any=None, dayfirst: bool=None, yearfirst: bool=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.DatetimeIndex]:
    """
    Construct a {@link Data.DatetimeIndex} manually. Corresponds to pd.DatetimeIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def timedeltaIndex(cls, data: Any=None, unit: Any=None, freq: Any=None, copy: bool=None, name: Any=None) -> Union[Data.TimedeltaIndex]:
    """
    Construct a {@link Data.TimedeltaIndex} manually. Corresponds to pd.TimedeltaIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def periodIndex(cls, data: Any=None, ordinal: Any=None, freq: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, year: Any=None, month: Any=None, quarter: Any=None, day: Any=None, hour: Any=None, minute: Any=None, second: Any=None) -> Union[Data.PeriodIndex]:
    """
    Construct a {@link Data.PeriodIndex} manually. Corresponds to pd.PeriodIndex constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def int64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Int64Index]:
    """
    Construct a {@link Data.Int64Index} manually. Corresponds to pd.Int64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def uInt64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.UInt64Index]:
    """
    Construct a {@link Data.UInt64Index} manually. Corresponds to pd.UInt64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def float64Index(cls, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None) -> Union[Data.Float64Index]:
    """
    Construct a {@link Data.Float64Index} manually. Corresponds to pd.Float64Index constructor from Pandas 1.3.4
    """
        ...
    @classmethod
    def read_csv(cls, filepath_or_buffer: Union[str,ContentValue], spec: Data.ManualOpSpecs.ReadCsvSpec=None) -> Union[Data]:
    """
    Read a comma-separate values file and construct a {@link Data} out of the contents.
    
    Example usage:
    ```py
    Reading an individual csv file.
    >>> dt = c3.Data.read_csv('path-to-your-file/your-file.csv')
    
    Reading multiple csv files with the same schema inside a folder.
    >>> dt = c3.Data.read_csv('path-to-your-folder/')
    
    Reading from client "local" folder. These are files local to the calling (e.g. SDK) process.
    >>> dt = c3.PyDataTable.read_csv('local:///path-to-your-folder/')
    ```
    
    @param path
              c3 file path that contains the data. See {@link Dataset#fromFiles} for specifics on semantics.
    @param parse_dates
              list of names of "columns" in the header to interpret as datetime.
    @return a {@link Data} that contains the data of the file(s).
    """
        ...
    @classmethod
    def read_csv_glob(cls, filepath_or_buffer: str, spec: Data.ManualOpSpecs.ReadCsvGlobSpec=None) -> Union[Data]:
    """
    Simultaneously read data from multiple .csv files.
    `path` should be constructed as a glob. Only implemented for Modin execution mode
    
    Example usage:
    ```py
    >>> dt = c3.Data.read_csv_glob('path-to-your-file/*.csv')
    ```
    
    @param filepath_or_buffer
              c3 file path that contains the data.
    @param parse_dates
              list of names of "columns" in the header to interpret as datetime.
    @return a {@link Data} that contains the data of the file(s).
    """
        ...
    @classmethod
    def _read_sql_query(cls, sql: str, url: str, http_path: str, parse_dates: Any=None) -> Union[Data]:
    """
    Reads SQL query into a DataFrame equivalent.
    
    @param sql
              SQL query string
    @param url
              database connection path for the sql_alchemy engine
    @param http_path
              http_path for the sql_alchemy engine
    @param parse_dates
              list of column names to parse as dates
    """
        ...
    @classmethod
    def merge_asof(cls, left: Data=None, right: Data=None, on: Any=None, left_on: Any=None, right_on: Any=None, left_index: bool='false', right_index: bool='false', by: Any=None, left_by: Any=None, right_by: Any=None, suffixes: Any=None, tolerance: Any=None, allow_exact_matches: Any=None, direction: str='"backward"') -> Union[Data]:
    """
     Perform a merge by key distance.
    
     Both Data must be sorted by the key.
    
     For each row in the left Data:
       - A "backward" search chooses the last row in the right Data whose
         'on' key is less than or equal to the left's key.
       - A "forward" search chooses the first row in the right Data whose
         'on' key is greater than or equal to the left's key.
       - A "nearest" search chooses the row in the right Data whose 'on'
         key is closest to the left's key.
    
     @param left
            Data to merge
     @param right
            Data to merge
     @param on
            Column name to join on, needs to be present in both Data. The column being merged on must be ordered and
    numeric must be a numeric column (integer, float, or datetime). On or left_on/right_on must be provided.
     @param left_on
            Column name to join on in the left Data
     @param right_on
            Column name to join on in the left Data
     @param left_index
            Indicate if the index of the left Data should be used as the join key
     @param right_index
            Indicate if the index of the right Data should be used as the join key
     @param by
            List of column names or a single column name. These columns are matched prior to merging
     @param left_by
            Column name. Columns to match on in the left Data
     @param right_by
            Column name. Columns to match on in the right Data
     @param suffixes
            2-length list or sequence. Suffix applied to overlapping column names in the left and right Data, respectively
     @param tolerance
            int or time delta. Select asof tolerance from this range. The tolerance needs to be compatible with the
            designated merge index
     @param allow_exact_matches
            If True, allow matching with the same ‘on’ value during merge (greater-than-or-equal-to or less-than-or-equal-to)
            If False, don’t match the same ‘on’ value during merge (strictly greater-than or strictly less-than)
     @param direction
            Indicate to look for prior, subsequent, or closest matches during merge
    
     @return a {@link Data} representing the merged Data
    """
        ...
    @classmethod
    def concat(cls, objs: Any=None, axis: Union[int,str]='0', join: str='"outer"', ignore_index: bool='false', keys: Any=None, levels: Any=None, names: Any=None, verify_integrity: bool='false', sort: bool='false', copy: Any=None) -> Union[Data]:
    """
    Concatenate Data along a specified axis with optional logic along the other axis
    @param objs
              Mapping or sequence of Data objects. If a mapping is passed, the sorted keys will be used as the `keys`
              argument, unless it is passed, in which case the values will be selected.
    @param axis
              The axis to concatenate along
    @param join
           How to process indexes on the axis
    @param ignore_index
           When true index values along the concatenation axis are ignored.
    @param keys
           Sequence used to construct hierarchical index
    @param levels
           list of sequences.
           Levels to use for building a Multi-index. If left null, the multi-index will be inferred from keys
    @param names
           Names of each level in the resulting hierarchical index
    @param verify_integrity
           Check if the concatenated axis contains any duplicates
    @param sort
           Sorts the non-concatenation axis when join='outer' and it is not already aligned
    @param copy
           Does not copy data unnecessarily when false   *
    @return a {@link Data} representing the concatenated Data
    """
        ...
    @classmethod
    def json_normalize(cls, data: Any, record_path: Any=None, meta: Any=None, meta_prefix: Any=None, record_prefix: Any=None, errors: str='"raise"', sep: str='"."', max_level: int=None) -> Union[Data]:
    """
    Normalize semi-structured JSON data into a Data
    @param data
              Unserialized JSON objects
    @param record_path
              Path in each object to list of records. If not passed, data will be assumed to be an array of records.
    @param meta
           Fields to use as metadata for each record in resulting table.
    @param meta_prefix
           If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].
    @param record_prefix
           If True, prefix records with dotted (?) path, e.g. foo.bar.field if path to records is [‘foo’, ‘bar’].
    @param errors
           Configures error handling.
           ‘ignore’ : will ignore KeyError if keys listed in meta are not always present.
           ‘raise’ : will raise KeyError if keys listed in meta are not always present.
    @param sep
           Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.
    @param max_level
           Max number of levels(depth of dict) to normalize. if None, normalizes all levels.
    
    @return a {@link Data} representing the structured JSON data
    """
        ...
    @classmethod
    def from_dict(cls, data: Any=None, orient: Any=None, dtype: Any=None, columns: Any=None) -> Union[Data]:
        ...
    @classmethod
    def from_records(cls, data: Any=None, index: Any=None, exclude: Any=None, columns: Any=None, coerce_float: Any=None, nrows: Any=None) -> Union[Data]:
        ...
    @classmethod
    def _exec(cls, action: Action) -> Union[Any]:
    """
    @return executes given action representing method call on one of this type's mixin type.
    """
        ...

