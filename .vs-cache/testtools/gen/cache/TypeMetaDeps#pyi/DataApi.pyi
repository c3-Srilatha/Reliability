#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.testtools.DataRndConfig import DataRndConfig
from c3.testtools.DataPeriodicConfig import DataPeriodicConfig
from c3.platform.TimedIntervalValue import TimedIntervalValue
from c3.testtools.DataApiContext import DataApiContext
from c3.testtools.DecimalPair import DecimalPair
from c3.testtools.DataPulseConfig import DataPulseConfig
from c3.platform.TimeRange import TimeRange
from c3.testtools.TestApiContext import TestApiContext

# Python definitions for the C3 type DataApi


class DataApi(Value):
    """
    DataApi is a set of utility functions for generating data.
    
    It is primarily intended for tests, as a complement to TestApi, but can also be used in source code.
    
    It supports common patterns of numerical and datetime data.
    
    It also lets you seed the random number generator, to ensure reproducability in a testing environment.
    
    @remarks this represents a made instance of DataApi
    """
    def __init__(self) -> None: ...

    @classmethod
    def createContext(cls, theSeed: int) -> Union[DataApiContext]:
    """
    Create a DataApiContext.
    
    @param theSeed
              Specify a non-negative seed for the random number generator.
    @return the newly created DataApiContext.
    """
        ...
    @classmethod
    def destroyContext(cls, ctx: DataApiContext) -> None:
    """
    Destroy a DataApiContext.
    
    @param ctx
              The DataApiContext to destroy.
    """
        ...
    @classmethod
    def generateSampleData(cls, sampleDataPatternFileName: str, dataMultiplier: int, timeRange: TimedIntervalValue=None, dataCtx: DataApiContext=None, testCtx: TestApiContext=None) -> Union[DataApiContext]:
    """
    Generate batches of sample data in a given environment
    
    @param sampleDataPatternFileName
             The file name for the sample data pattern to use
             Sample data pattern file format:
               - A JSON file with keys being entity type names and values being arrays of sample objects
             Any provided fields in the file would be handled as following:
               - Datetime:
                   Given numerical values are used as offsets against start time (unit is number of days).
                   e.g. 5.5 would mean 5 and half days from the current offset.
               - Numerical:
                   Given numerical values are used as multiplier against `Math.random()`.
               - String:
                   Given string values are parsed (`{{<number>}}` is used as offset).
                   e.g. 'test entity {{4}}' would become 'test entity 5' if the current offset is 1.
                   Reference fields (including {@link Unit}) should be given as string values.
               - Boolean:
                   Given values are simply copied.
               - Array:
                   Same logic as above with recursion.
               - Duration:
                   Given numerical values are used as multiplier against `Math.random()`.
                   The unit is always in milliseconds for simplicity.
               - "Primitive" Dimension-like reference:
                   Dimension-like fields are processed in a similar fashions as numerical and string fields
                   Currently supported types: {@link Dimension}, {@link MonetaryValue}, {@link ExactDimension}
             Any missing required fields would be handled as following:
               - Reference:
                   Unsupported. Error would be thrown.
               - Primitive:
                   Random values would be filled in.
    @param dataMultiplier
             The number of times the sample data pattern would be repeated
    @param timeRange
             The time range for the final sample data
    @param dataCtx
             The {@link DataApiContext} to use for random value generator
    @param testCtx
             The {@link TestApiContext} to generate the sample data on
             If given, all sample data would be generated in this context
             If not given, all sample data would be generated on the runtime environment
    @return the {@link DataApiContext} used in this API
    """
        ...
    @classmethod
    def removeSampleData(cls, sampleDataPatternFileName: str, testCtx: TestApiContext=None) -> None:
    """
    Remove all data mentioned in `sampleDataPatternFileName`
    See {@link #generateSampleData} for details
    """
        ...
    @classmethod
    def rndBool(cls, ctx: DataApiContext, n: int, trueBias: float=None) -> Union[Array[bool]]:
    """
    Generate random Boolean values.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate
    @param trueBias
              Bias the values. The default value is 0.5, meaning it is equally likely to generate
              false/true values. Bias > 0.5 favors generating true values, and bias < 0.5 favors false
    @returns the newly created array of Boolean values
    """
        ...
    @classmethod
    def rndInt(cls, ctx: DataApiContext, n: int, lo: int, hi: int) -> Union[Array[int]]:
    """
    Generate random integer values.
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate
    @param lo
              Lower bound
    @param hi
              Upper bound (inclusive)
    @return the newly created array of integer values.
    """
        ...
    @classmethod
    def rndBigInt(cls, ctx: DataApiContext, n: float, lo: float, hi: float) -> Union[Array[float]]:
    """
    Generate random big integer values.
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate
    @param lo
              Lower bound
    @param hi
              Upper bound (inclusive)
    @returns the newly created array of big integer values.
    """
        ...
    @classmethod
    def rndReal(cls, ctx: DataApiContext, n: int, lo: int, hi: int) -> Union[Array[float]]:
    """
    Generate random real values.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate.
    @param lo
              Lower bound
    @param hi
              Upper bound
    @returns the newly created array of real values
    """
        ...
    @classmethod
    def pulse(cls, ctx: DataApiContext, n: int, configs: Array[DataPulseConfig], rndConfig: DataRndConfig=None) -> Union[Array[float]]:
    """
    Create a multi-valued pulse of length n.
    Example:
      pulse(12, [{value:10, width:3, slew:1}, {value:20, width:3, slew:4}])
        -> [10, 10, 10, 12.5, 15, 17.5, 20, 20, 20, 10, 10, 10]
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate.
    @param configs
              Pulse configuration.
    @param rndConfig
              Optional random configuration.
    @return newly created multi-valued pulse.
    """
        ...
    @classmethod
    def periodic(cls, ctx: DataApiContext, n: int, configs: Array[DataPeriodicConfig], rndConfig: DataRndConfig=None) -> Union[Array[float]]:
    """
    Create periodic data.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param n
              Number of values to generate.
    @param configs
              Periodic configuration.
    @param rndConfig
              Optional random configuration.
    @return newly created periodic data.
    """
        ...
    @classmethod
    def addRandomness(cls, ctx: DataApiContext, d: Array[float], rndConfig: DataRndConfig=None) -> Union[Array[float]]:
    """
    Add a random offset each element of an array of doubles (double-precision floating point numbers).
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param d
              The array of doubles to which we will add randomness.
    @param rndConfig
              Optional random configuration.
    @return a new array of doubles with the randomness added.
    """
        ...
    @classmethod
    def genDates(cls, start: datetime, n: int, interval: str, multiplier: int) -> Union[Array[datetime]]:
    """
    Generate an array of dates at a specific interval.
    
    @param start
              Start date. The first date in the generated array.
    @param n
              The number of dates to generate.
    @param interval
              Interval. i.e. 'HOUR', 'DAY', 'MONTH', etc.
    @param multiplier
              Interval multiplier. For example, if interval is 'HOUR' and multiplier is 2, the each of the
              generated dates will be 2 hours apart.
    @return the generated array of dates.
    """
        ...
    @classmethod
    def genDateRange(cls, start: datetime, end: datetime, interval: str, multiplier: int) -> Union[Array[datetime]]:
    """
    Generate an array of dates at a specific interval. Like genDates except you specify the end date
    instead of the number of dates.
    
    @param start
              Start date. The first date in the generated array.
    @param end
              End date. The date _after_ the last date in the generated array
    @param interval
              Interval. i.e. 'HOUR', 'DAY', 'MONTH', etc.
    @param multiplier
              Interval multiplier. For example, if interval is 'HOUR' and multiplier is 2, the each of the
              generated dates will be 2 hours apart.
    @return the generated array of dates.
    
    @see DataApi.genDates
    """
        ...
    @classmethod
    def getDecimalsInRange(cls, ctx: DataApiContext, start: float, end: float, numPoints: int) -> Union[Array[float]]:
    """
    Randomly generate an array of random decimal numbers within a given range.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param start
              Lower bound on decimal range
    @param end
              Upper bound on decimal range
    @param numPoints
              Number of decimals to generate
    @return a newly created array of decimals
    """
        ...
    @classmethod
    def getDatesInRange(cls, ctx: DataApiContext, start: datetime, end: datetime, numPoints: int) -> Union[Array[datetime]]:
    """
    Generate an array of dates randomly selected between a given start date and end date.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param start
              Lower bound on date range
    @param end
              Upper bound on date range
    @param numPoints
              Number of dates to generate
    @return an array of random dates.
    """
        ...
    @classmethod
    def partitionDecimalRange(cls, ctx: DataApiContext, start: float, end: float, numPartitions: int, interval: int) -> Union[Array[DecimalPair]]:
    """
    Partition a decimal interval into non-overlapping sub-intervals.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param start
              Lower bound of interval
    @param end
              Upper bound of interval
    @param numPartitions
              Number of sub-ranges (aka, partitions) to generate
    @param interval
              Minimum gap between sub-ranges
    @return a newly created array non-overlapping sub-intervals.
    """
        ...
    @classmethod
    def partitionDateRange(cls, ctx: DataApiContext, start: datetime, end: datetime, numPartitions: int, interval: int) -> Union[Array[TimeRange]]:
    """
    Partition a date range into non-overlapping sub-ranges.
    
    @param ctx
              The DataApiContext to use for generating random values.
    @param start
              Start of the date range to partition.
    @param end
              End of the date range to partition.
    @param numPartitions
              Number of sub-ranges (aka, partitions) to generate
    @param interval
              Minimum gap between dates ranges (in milliseconds)
    @return a newly created array non-overlapping sub-ranges.
    """
        ...

