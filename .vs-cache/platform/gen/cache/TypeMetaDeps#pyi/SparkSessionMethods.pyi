#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.Spark.Series import Data.Spark.Series
from c3.platform.DataLake.RewriteDataFilesSpec import DataLake.RewriteDataFilesSpec
from c3.platform.TupleType import TupleType
from c3.platform.Data.Spark import Data.Spark
from c3.platform.DataLake.RewriteResult import DataLake.RewriteResult
from c3.platform.Data.Spark.ReadFilesByRegexSpec import Data.Spark.ReadFilesByRegexSpec
from c3.platform.EvalMetricsSpec import EvalMetricsSpec
from c3.platform.Data.ManualOpSpecs.ReadCsvSpec import Data.ManualOpSpecs.ReadCsvSpec
from c3.platform.DataLake.DeleteOrphanedFilesSpec import DataLake.DeleteOrphanedFilesSpec
from c3.platform.DataLake.Table.Snapshot import DataLake.Table.Snapshot
from c3.platform.Data.Spark.DataFrame import Data.Spark.DataFrame
from c3.platform.SourceFile import SourceFile
from c3.platform.Data.SparkEvaluateSpec import Data.SparkEvaluateSpec
from c3.platform.DataLake.DeleteOrphanedFilesResult import DataLake.DeleteOrphanedFilesResult
from c3.platform.Data.Spark.Index import Data.Spark.Index
from c3.platform.Data.SparkFetchSpec import Data.SparkFetchSpec
from c3.platform.DataLake.Table import DataLake.Table

# Python definitions for the C3 type SparkSessionMethods


class SparkSessionMethods(Value):
    """
    @remarks this represents a made instance of SparkSessionMethods
    """
    def __init__(self) -> None: ...

    def read_files(self, path: Union[str,Array[str]], format: str=None, schema: TupleType=None, options: Map[str, str]=None) -> Union[Data.Spark.DataFrame]:
    """
    Read files of any format supported by Spark and construct a {@link Data.Spark.DataFrame} out of the contents.
    @param path
           c3 file path/list of paths to the file.
    @param format
           The {@link MediaType} of the files to read. Supported: CSV, PARQUET, JSON, AVRO, XML, ORC, TEXT.
           All files should have the same format. If not provided, it will be inferred from the first file.
    @param schema
           Optional schema to use. If not provided, it will be inferred from data.
    @param options
           Spark data source options.
    """
        ...
    def read_csv(self, filepath_or_buffer: Union[str,Array[str]], spec: Data.ManualOpSpecs.ReadCsvSpec=None) -> Union[Data.Spark.DataFrame]:
    """
    Read a comma-separate values file and construct a {@link Data.Spark.DataFrame} out of the contents.
    @param filepath_or_buffer
              c3 file path/list of paths that contains the csv data.
    @param spec
              read csv spec. See {@link Data.ManualOpSpecs.ReadCsvSpec}.
    @return a {@link Data.Spark.DataFrame} that contains the data of the file(s).
    """
        ...
    def read_parquet(self, path: Union[str,Array[str]], columns: Array[str]=None, index_col: Union[str,Array[str]]=None, pandas_metadata: bool=None, options: Map[str, Any]=None) -> Union[Data.Spark.DataFrame]:
    """
     Load a parquet object from the file path, returning a {@link Data.Spark.DataFrame}.
     @param path
          The c3 file path/list of paths to the parquet file.
     @param columns
    If it's a list of column names, only these columns will be read from the file.
    Default value is None, which will read all columns.
     @param index_col
    Index column of table in Spark.
     @param pandas_metadata
    If True, try to respect the metadata if the Parquet file is written from pandas.
     @param options
    All other options passed directly into Spark’s data source.
    """
        ...
    def DataFrame(self, data: Union[Map[str, Any],Array[Any]]=None, index: Any=None, columns: Any=None, dtype: Any=None, copy: bool=None) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} manually from the given data. Corresponds to pyspark.pandas.DataFrame constructor
    """
        ...
    def Series(self, data: Any=None, index: Any=None, dtype: Any=None, name: Any=None, copy: bool=None, fastpath: bool=None) -> Union[Data.Spark.Series]:
    """
    Construct a {@link Data.Spark.Series} manually from the given data. Corresponds to pyspark.pandas.Series constructor
    """
        ...
    def Index(self, data: Any=None, dtype: Any=None, copy: bool=None, name: Any=None, tupleize_cols: Any=None) -> Union[Data.Spark.Index]:
    """
    Construct a {@link Data.Spark.Index} manually from the given data. Corresponds to pyspark.pandas.Index constructor
    """
        ...
    def evaluate(self, typeName: str, spec: Data.SparkEvaluateSpec=None) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} from by doing evaluate operation with projections.
    Projection is a comma-delimited list of projection expressions:
    - measurements.data.quantity,count(measurements.data.quantity)
    """
        ...
    def evalMetrics(self, typeName: str, spec: EvalMetricsSpec=None, batchSize: int=None) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} from EvalMetricsSpec ({@link EvalMetricsSpec}).
    This is equivalent to `c3.typeName.evalMetrics(spec)`
    """
        ...
    def fetch(self, typeName: str, spec: Data.SparkFetchSpec=None) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} from FetchSpec ({@link FetchSpec}).
    This is equivalent to `c3.typeName.fetch(spec)`
    """
        ...
    def readFeatureSet(self, id: str, batchSize: int, flatten: bool=None) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} from by reading feature set with given id.
     @param id
            Feature set id
     @param batchSize
            Maximal number of subjects to be included into single read partition
     @param flatten
            If false result data frame will include a row per subject with array columns for timestamp and features
            If true then expands feature arrays in result dataframe.
    """
        ...
    def fromView(self, name: str) -> Union[Data.Spark.DataFrame]:
    """
    Internal methods that construct a {@link Data.Spark.DataFrame} from GlobalTempView of Spark Cluster
    """
        ...
    def load_table(self, table: DataLake.Table, snapshot: DataLake.Table.Snapshot=None) -> Union[Data.Spark.DataFrame]:
    """
    Load content of DataLake table into dataframe.
    """
        ...
    def sql(self, query: str, args: Map[str, Union[Data.Spark,DataLake.Table]]=None, limit: int=None, enforceReadOnly: bool='true') -> Union[Data.Spark.DataFrame]:
    """
    Execute Sql Query on a Spark DataFrame
    @param query
           string of sql to execute
    @param args
           map from name to {@link Data.Spark} or {@link DataLake.Table} that is referenced in the query
    @param limit
           Number of rows to limit the result to.
    @param enforceReadOnly
           If true, the query will be validated to ensure it only performs read operations.
           Defaults to true, and should be used for user-facing queries (e.g., from the UI).
           Set to false only for internal system operations where write/delete access is intentional.
    Examples:
    ```py
    df = ss.DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6]})
    ss.sql("select col1, col2 from df where col1 > 10", {"df": df})
    ```
    """
        ...
    def read_source_files(self, sources: Array[SourceFile]) -> Union[Data.Spark.DataFrame]:
    """
    Construct a {@link Data.Spark.DataFrame} by reading a list of {@link SourceFile}
    """
        ...
    def read_files_by_regex(self, spec: Data.Spark.ReadFilesByRegexSpec=None) -> Union[Data.Spark.DataFrame]:
    """
    Load and parse files by regex (e.g., log files).
    This function handles multi line entries by appending subsequent lines to the last column identified by the regex match.
    
    @param spec
           spec to parse files {@link Data.Spark.ReadFilesByRegexSpec}
    @return DataFrame with columns named based on the provided headers if 'headers' is specified.
            Otherwise, columns will be named c1, c2, ..., cN corresponding to the regex capture groups.
            If 'includePath' is true, an additional 'path' column will be present.
    """
        ...
    def rewriteDataFiles(self, table: DataLake.Table, spec: DataLake.RewriteDataFilesSpec=None) -> Union[DataLake.RewriteResult]:
    """
    Rewrite the data files of the given {@link DataLake.Table}.
    Generally used for optimizing the sizing and layout of data files within a table.
    """
        ...
    def deleteOrphanedFiles(self, table: DataLake.Table, spec: DataLake.DeleteOrphanedFilesSpec=None) -> Union[DataLake.DeleteOrphanedFilesResult]:
    """
    Return a list of orphaned file locations after deletion.
    """
        ...

