#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.testtools.ExpectedTestValue import ExpectedTestValue
from c3.testtools.TestApiSpy import TestApiSpy
from c3.platform.Type import Type
from c3.testtools.TestApiUserConfig import TestApiUserConfig
from c3.platform.InvalidationQueueStats import InvalidationQueueStats
from c3.platform.VanityUrl import VanityUrl
from c3.platform.BatchJob import BatchJob
from c3.platform.Workflow import Workflow
from c3.testtools.TestApiFetchSpy import TestApiFetchSpy
from c3.platform.MergeSpec import MergeSpec
from c3.platform.Timeseries import Timeseries
from c3.testtools.TestApiContext import TestApiContext
from c3.platform.MapReduce import MapReduce
from c3.platform.User import User
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.TimeRange import TimeRange

# Python definitions for the C3 type TestApi


class TestApi(Value):
    """
    TestApi is the main apps testing framework
    
    Functionality is broken down into a few main categories:
    
    1) API related functionality. TestApi internals.
    2) Debug support
    3) Helpers to create/modify/remove C3 entities
    4) Object creation helpers (JavaScript objects)
    5) High-level wrappers. Create sets of commonly used C3 entities
    6) Miscellaneous
    
    @remarks this represents a made instance of TestApi
    """
    def __init__(self) -> None: ...

    @classmethod
    def createContext(cls, filename: str=None, parent: TestApiContext=None, queueBlacklist: Array[Type]=None) -> Union[TestApiContext]:
    """
    API
    
    Create a TestApi context
    @param filename Can be any string, but typically the name of the test for debugability reasons
    @param parent Parent TestApiContext.
    @param queueBlacklist
              The blacklisted queues. All of these will be paused before running the tests.
    @return The newly created TestApiContext
    """
        ...
    @classmethod
    def printObjects(cls, context: TestApiContext) -> None:
    """
    Print the objects being tracked by TestApi
    @param context The TestApi context whose objects to print
    """
        ...
    @classmethod
    def setLocale(cls, context: TestApiContext, locale: str=None) -> None:
    """
    Set the locale of the TestApi context
    @param context The TestApi context for the locale change
    @param locale The desired locale (e.g., 'en-US', 'it-IT', etc.)
    """
        ...
    @classmethod
    def teardown(cls, context: TestApiContext, timeLimit: int=None, queues: Array[str]=None) -> None:
    """
    Remove the objects tracked by context and any matched by teardown filters {@see addExternalTeardownFilter}
    @param context Context to teardown
    @param timeLimit in seconds.
    @param queues
              The queues to wait until they are clear (all if null).
    """
        ...
    @classmethod
    def dumpInvalidationQueue(cls) -> Union[str]:
    """
    Prepare report with content of InvalidationQueue
    @return current content of invalidation queue in string format
    """
        ...
    @classmethod
    def dumpExecutionState(cls, timeSpan: int) -> Union[str]:
    """
    Prepare report with content of InvalidationQueue and all executing actions.
    
    @param timeSpan
              The time span to consider; comes from waitForSetup's or waitForJob's timeout.
    @return current content of invalidation queue and executing actions in string format.
    """
        ...
    @classmethod
    def waitForSetup(cls, context: TestApiContext, queues: Array[str]=None, checkInterval: int='1', timeout: int='30') -> None:
    """
    Wait for all asynchronous actions to complete for the current tenant/tag
    @param context Context to wait for
    @param queues Wait for these queues only
    @param checkInterval How often to poll queues (seconds)
    @param timeout Maximum time to wait for queues (seconds)
    """
        ...
    @classmethod
    def waitForJob(cls, context: TestApiContext, job: Union[MapReduce[Any, Any, Any, Any],BatchJob[Any, Any, Any],Workflow], checkInterval: int='1', timeout: int='30') -> None:
    """
    Wait for the job given in the argument to complete
    @param context Context to wait for
    @param job Job to wait for
    @param checkInterval How often to poll queues (seconds)
    @param timeout Maximum time to wait for queues (seconds)
    """
        ...
    @classmethod
    def waitForFunction(cls, lambda_: Callable[[], Union[Any]], errorMessage: str=None, checkInterval: int='1', timeout: int='30') -> None:
    """
    Wait for the function to return a truthy value.
    
    @param lambda
       A function that returns a truthy value on a success condition
    @param errorMessage
       An error message to throw if the timeout is exceeded
    @param checkInterval
       How often to call the function (seconds)
    @param timeout
       Maximum time to wait for the function to run successfully (seconds)
    """
        ...
    @classmethod
    def isSetupOK(cls, context: TestApiContext) -> bool:
    """
    Check to make sure setup completed properly (e.g., waitForSetup and waitForJob)
    @param context Context to check for "OK"ness
    @return Return true if setup is OK
    """
        ...
    @classmethod
    def addExternalTeardownFilter(cls, context: TestApiContext, filter: str, typeRef: Type, limit: int=None) -> None:
    """
    Add filters to be used during teardown.
    @param context
    @param filter Entities matching this filter will be removed during teardown
    @param typeRef The TypeRef of the entities that will be removed
    @param limit Increase the limit on the number of objects to remove (default: 100)
                         This is a safeguard so you don't do something stupid, like ServicePoint.removeAll() on a production system.
    """
        ...
    @classmethod
    def logInternal(cls, msg: str) -> None:
    """
    Debug Support
    
    Print a message to the server log
    @param msg The message
    """
        ...
    @classmethod
    def logCustom(cls, context: TestApiContext, msg: str) -> None:
    """
    Print a message to console.log
    @param context The context
    @param msg The message
    """
        ...
    @classmethod
    def sleep(cls, context: TestApiContext, seconds: int) -> None:
    """
    Client-side sleep. Use with caution. This spins in a loop.
    @param context
    @param seconds How long to sleep in seconds
    """
        ...
    @classmethod
    def sleepServer(cls, seconds: int) -> None:
    """
    Server-side sleep. Use with caution. This spins in a loop.
    @param seconds How long to sleep in seconds
    """
        ...
    @classmethod
    def createEntity(cls, context: TestApiContext, typeName: str, obj: Any=None, spec: UpsertSpec=None) -> Union[Any]:
    """
    Create a C3 entity
    
    @param context
              The context.
    @param typeName
               Name of the type.
    @param obj
               Specify fields of the object.
    @param spec
              An optional spec to pass to create().
    @return created object.
    """
        ...
    @classmethod
    def createBatchEntity(cls, context: TestApiContext, typeName: str, objs: Array[Any], spec: UpsertSpec=None) -> Union[Array[str]]:
    """
    Create multiple C3 entities.
    
    @param context
              The context.
    @param typeName
               Name of the type.
    @param objs
              An array of objects specifying fields for each entity.
    @param spec
              An optional spec to pass to createBatch().
    @return ids of the created objects.
    """
        ...
    @classmethod
    def upsertEntity(cls, context: TestApiContext, typeName: str, obj: Any=None, spec: UpsertSpec=None) -> Union[Any]:
    """
    Upsert a C3 entity.
    
    @param context
              The context.
    @param typeName
               Name of the type.
    @param obj
               Specify fields of the object.
    @param spec
              An optional spec to pass to upsert().
    @return upserted object.
    """
        ...
    @classmethod
    def upsertBatchEntity(cls, context: TestApiContext, typeName: str, objs: Array[Any], spec: UpsertSpec=None) -> Union[Array[str]]:
    """
    Upsert multiple C3 entities.
    
    @param context
              The context.
    @param typeName
               Name of the type.
    @param objs
              An array of objects specifying fields for each entity.
    @param spec
              An optional spec to pass to upsertBatch().
    @return ids of the upserted objects.
    """
        ...
    @classmethod
    def upsertUser(cls, context: TestApiContext, obj: TestApiUserConfig=None) -> Union[User]:
    """
    A helper function that upserts a test User with {@link TestIdp} according to the
    information given in obj.
    
    @param context
              The {@link TestApiContext} that tracks the upserted test User.
    @param obj
               Describes the user that should be upserted.
    @return upserted user object.
    """
        ...
    @classmethod
    def upsertBatchUser(cls, context: TestApiContext, objs: Array[TestApiUserConfig]) -> Union[Array[str]]:
    """
    A helper function that upserts a batch of test Users with {@link TestIdp} according to the
    information given in objs.
    
    @param context
              The {@link TestApiContext} that tracks the upserted test Users.
    @param objs
              An array describing the users that should be upserted. Each object in the array describes one user.
    @return ids of the upserted {@link User}s.
    """
        ...
    @classmethod
    def mergeEntity(cls, context: TestApiContext, id: str, obj: Any, spec: MergeSpec=None) -> Union[Any]:
    """
    Wrapper for merge on the specified obj.
    Note that merge creates the object if it doesn't exist, but this should only be used for objects
    already created using createEntity, upsertEntity, createBatchEntity, or upsertBatchEntity.
    
    @param context
              The context.
    @param id
              id used to retrieve the TestApiObj from which the Type will be extracted.
    @param obj
              Fields to populate on updated object.
    @param spec
              An optional spec to pass to merge().
    @return modified object.
    """
        ...
    @classmethod
    def mergeBatchEntity(cls, context: TestApiContext, ids: Array[str], objs: Array[Any], spec: MergeSpec=None) -> Union[Array[str]]:
    """
    Wrapper for mergeBatch on the specified objs.
    Note that mergeBatch creates objects if they don't exist, but this should only be used for objects
    already created using createEntity, upsertEntity, createBatchEntity, or upsertBatchEntity.
    
    @param context
              The context.
    @param ids
              ids used to retrieve the TestApiObj from which the Type will be extracted.
    @param objs
              List of objects with fields to populate on updated objects.
    @param spec
              An optional spec to pass to mergeBatch().
    @return ids of the modified objects.
    """
        ...
    @classmethod
    def removeEntity(cls, context: TestApiContext, id: str) -> None:
    """
    Remove an entity by id
    @param context
    @param id Id of entity to remove
    """
        ...
    @classmethod
    def removeEntities(cls, context: TestApiContext, ids: Array[str]=None) -> None:
    """
    Remove entites by id
    @param context
    @param id List of ids of entity to remove
    """
        ...
    @classmethod
    def removeEntitiesByFilter(cls, context: TestApiContext, filterStr: str, typeRef: Type, limit: int=None) -> None:
    """
    Remove entites that match a filter and a TypeRef
    @param context
    @param filter Remove entities matching this filter
    @param typeRef Only remove entities of this type
    @param limit Increase the limit on the number of objects to remove (default: 100)
                         This is a safeguard so you don't do something stupid, like ServicePoint.removeAll() on a production system.
    """
        ...
    @classmethod
    def removeAllEntitiesOfType(cls, context: TestApiContext, typeRef: Type) -> None:
    """
    Remove all entites of a given type
    @param context
    @param typeRef Remove entities of this type in 'context'
    """
        ...
    @classmethod
    def addFields(cls, context: TestApiContext, id: Any, obj: Any) -> Union[Any]:
    """
    Add fields to a C3 object
    @param context
    @param id Identifier (string) or object to add field(s) to
    @param obj Object containing the fields to add
    @return modified object
    """
        ...
    @classmethod
    def removeObjFields(cls, context: TestApiContext, id: Any, fields: Array[str]) -> Union[Any]:
    """
    Remove fields from a C3 object
    @param context
    @param id Identifier (string) or object to add field(s) to
    @param fields List of fields to remove from object
    @return modified object
    """
        ...
    @classmethod
    def addMeasurementsToSeriesFill(cls, context: TestApiContext, id: str, dates: Array[datetime], values: Array[float], interval: str, unit: str, field: str=None) -> None:
    """
    Add measurements to a measurement series (fill mode)
    @param context
    @param id Id of measurement series
    @param dates list of dates
    @param values List of measurement values
    @param interval Measurement interval
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    """
        ...
    @classmethod
    def addMeasurementsToSeries(cls, context: TestApiContext, id: str, startDates: Array[datetime], endDates: Array[datetime], values: Array[float], interval: str, unit: str, field: str=None) -> None:
    """
    Add measurements to a measurement series
    @param context
    @param id Id of measurement series
    @param startDates list of start dates
    @param endDates list of end dates
    @param values List of measurement values
    @param interval Measurement interval
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    """
        ...
    @classmethod
    def addMeasurementsToSeriesInternal(cls, context: TestApiContext, id: str, startDates: Array[datetime], endDates: Array[datetime], values: Array[float], interval: str, unit: str, field: str=None, fill: bool=None) -> None:
    """
    Add measurements to a measurement series
    @param context
    @param id Id of measurement series
    @param startDates list of start dates
    @param endDates list of end dates
    @param values List of measurement values
    @param interval Measurement interval
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    @param fill
    """
        ...
    @classmethod
    def addClusterBoundMeasurementsToSeries(cls, context: TestApiContext, id: str, dates: Array[datetime], grain: str, upperValues: Array[float], lowerValues: Array[float]) -> None:
    """
    Add cluster bound measurements to a measurement series
    @param context
    @param id Id of measurement series
    @param startDates list of start dates
    @param endDates list of end dates
    @param upperValues List of upper bound values
    @param lowerValues List of lower bound values
    @param interval Measurement interval
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    """
        ...
    @classmethod
    def removeMeasurementsFromSeries(cls, context: TestApiContext, id: str) -> None:
    """
    Remove measurements from series
    @param context
    @param id Id of measurement series
    """
        ...
    @classmethod
    def createMeasurementDataFill(cls, typeRef: Type, parentId: str, dates: Array[datetime], interval: str, values: Array[float], unit: str, field: str=None) -> Union[Array[Any]]:
    """
    Helper to create measurement data for fill mode
    @param typeRef TypeRef of measurement
    @param parentId Measurement series id
    @param dates list of start dates
    @param interval Measurement interval
    @param values List of measurement values
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    """
        ...
    @classmethod
    def createMeasurementDataExact(cls, typeRef: Type, parentId: str, startDates: Array[datetime], endDates: Array[datetime], values: Array[float], unit: str, field: str=None) -> Union[Array[Any]]:
    """
    Helper to create measurement data
    @param typeRef TypeRef of measurement
    @param parentId Measurement series id
    @param startDates list of start dates
    @param endDates list of end dates
    @param interval Measurement interval
    @param values List of measurement values
    @param unit Measurement unit
    @param field Measurement field (default: quantity)
    """
        ...
    @classmethod
    def timeseriesResultsErrors(cls, results: Timeseries[Any], expectedValues: Array[ExpectedTestValue], precision: int=None) -> Union[str]:
    """
    Check if results have errors
    @param results Timeseries results to test
    @param expectedValues Expected values
    @param precision Precision to test at
    """
        ...
    @classmethod
    def getCurrentUser(cls) -> Union[User]:
    """
    Retrieve Environment Information
    @return User
    """
        ...
    @classmethod
    def generateDateRanges(cls, booleanValues: Array[int], start: datetime, interval: str) -> Union[Array[TimeRange]]:
    """
    Generates a set of time ranges from a set of boolean values, a start date, and an interval.
    Each boolean value (0 or 1) corresponds to whether that interval is included in the time range or not.
    This function is used by the metrics designer's autogenerated tests.
    
    @param ![int] booleanValues The boolean values for the ranges
    @param !datetime start the start date to go from
    @param !string interval the interval step size from start date
    @return [TimeRange] the generated time ranges
    """
        ...
    @classmethod
    def compareTimeseriesResults(cls, resultValues: Array[float], expectedValues: Array[float], precision: int=None) -> None:
    """
    Compares the results of two timeseries. It compares the values of two arrays, which must be the same length.
    It uses the precision argument to determine what precision to use.
    
    @param ![double] resultValues The values obtained by the test
    @param ![double] expectedValues The values expected (resultValues will be compared to these)
    @param precision the precision to use in the comparison. Useful when comparing doubles
    """
        ...
    @classmethod
    def checkPermissions(cls, allowedActions: Map[str, Array[str]]=None, deniedActions: Map[str, Array[str]]=None) -> None:
    """
    Check if a set of APIs are authorized for the current user.
    
    @param allowedActions
              The actions by Type that should be allowed.
    @param deniedActions
              The actions by Type that should be denied.
    """
        ...
    @classmethod
    def expectAllowed(cls, context: TestApiContext, typeActions: Map[str, Array[str]]) -> None:
    """
    Check if a set of APIs are authorized for the current user.
    
    @param The actions to test by type
    """
        ...
    @classmethod
    def expectDenied(cls, context: TestApiContext, typeActions: Map[str, Array[str]]) -> None:
    """
    Check if a set of APIs are not authorized for the current user.
    
    @param The actions to test by type
    """
        ...
    @classmethod
    def validateMetricTestData(cls, include: Array[str]=None, startsWith: str=None, nameIncludes: str=None) -> Union[int]:
    """
    Validate metrics with associated MetricTestData against their truth data.
    The filter options are given an 'OR' treatment.
    
    @param include - Array of strings containing names of metrics to include.
    @param startsWith - String that included metrics' names should start with.
    @param nameInclude - String that should be in included metric's names.
    @return results of validation
    """
        ...
    @classmethod
    def setupVanityUrl(cls, context: TestApiContext, obj: VanityUrl=None) -> Union[str]:
    """
    Setup VanityUrl for current tenant and tag
    
    @param context
              The context
    @param obj
              The VanityUrl object
    @return The vanity url string
    """
        ...
    @classmethod
    def getVanityUrl(cls, context: TestApiContext) -> str:
    """
    Get vanity url set up with {@link setupVanityUrl}
    
    @param context
              The context
    @return   The vanity url string
    """
        ...
    @classmethod
    def sleepImpl(cls, seconds: int=None) -> None:
    """
    Sleep for seconds
    
    @param  seconds
               seconds to sleep
    """
        ...
    @overload
    @classmethod
    def hasTimedOut(cls, start: float=None, seconds: int=None) -> bool:
    """
    Given a start timestamp and a timeout, check if it has timed out
    
    @param  start
               the numeric value represents timestamp
    @param  seconds
               time out value
    @return boolean value indicates if it has timed out or not
    """
        ...
    @overload
    @classmethod
    def hasTimedOut(cls, start: int=None, seconds: int=None) -> bool:
        ...
    @classmethod
    def branchName(cls) -> Union[str]:
    """
    @return git branch where test is running
    """
        ...
    @classmethod
    def cleanFailedQueues(cls, context: TestApiContext, queues: Array[Type]=None) -> None:
    """
    Cleans errors from failed queues. Useful for when tests expect to create data that will cause
    failed invalidations.
    
    @param context
              The context.
    @param queues
              The queues from which to clear, or all if null.
    """
        ...
    @classmethod
    def spyOn(cls, context: TestApiContext, typeName: str, actionName: str) -> Union[TestApiSpy]:
    """
    Stub any function using {@link Action.Spy}
    
    Note that you cannot spy on Python stayInEngine calls -- calls between actions that claim the same
    action requirement or where there is a runtime inheritance relationship between the claims. This is
    because the Action Dispatcher will call the python function directly for stayInEngine calls
    rather than go through the usual dispatching logic. This significantly reduces the latency of such calls.
    See {@link understanding-action-engines.c3doc.md Understanding Action Engines} for details.
    """
        ...
    @classmethod
    def spyOnFetch(cls, context: TestApiContext, typeName: str, actionName: str='\'fetch\'', fetchTypeName: str='\'\'', specParameterName: str='\'spec\'', returnArray: bool=None) -> Union[TestApiFetchSpy]:
    """
    Set up a spy for fetch calls.  {@link TestApiFetchSpy} provides an {@link Action.Spy} that handles
    ordering, limits, and offsets.
    
    @param context
              the TestApi context
    @param typeName
               the name of the type whose fetch action will be mocked
    @param actionName
               the name of the action to mock; normally, it will be 'fetch', but it can be any action
               that returns a {@link FetchResult}
    @param fetchTypeName
               the name of the type of objects returned by the action, if it is different from typeName
               (which can be the case if the actionName is something other than 'fetch')
    @param specParameterName
               the name of the action parameter that contains the {@link FetchSpec}
    @param returnArray
               if true, the mocked action returns an array of mocked objects instead of a {@link FetchResult}
    @return the TestApiFetchSpy
    """
        ...
    @classmethod
    def registerMockGroup(cls, context: TestApiContext, group: str=None) -> None:
    """
    Register all action mocks in the specified group.
    
    @param context
              the TestApi context
    @param group
              the Action.Spy group to register
    """
        ...
    @classmethod
    def c3Queues(cls) -> Union[Array[Type]]:
        ...
    @classmethod
    def enableInvalidationQueue(cls, queue: Type=None, isDebugEnabled: bool=None) -> None:
        ...
    @classmethod
    def cleanInvalidationQueue(cls, queue: Type=None, isDebugEnabled: bool=None) -> None:
        ...
    @classmethod
    def removeCreated(cls, context: TestApiContext=None) -> Union[str]:
        ...
    @classmethod
    def dataTypeRefOfSeries(cls, seriesType: Type=None) -> Union[Type]:
        ...
    @classmethod
    def reenableQueues(cls, context: TestApiContext=None) -> None:
        ...
    @classmethod
    def dumpPendingAndComputingCounts(cls, queueStats: InvalidationQueueStats=None) -> Union[str]:
        ...
    @classmethod
    def dumpAllPendingAndComputingCounts(cls, msg: str=None) -> Union[str]:
        ...
    @classmethod
    def getFailedQueues(cls) -> Union[Array[InvalidationQueueStats]]:
        ...
    @classmethod
    def getErrorsFromInvalidationQueues(cls, queues: Array[InvalidationQueueStats]=None) -> Union[str]:
        ...
    @classmethod
    def upsertTestUserHelper(cls, context: TestApiContext=None, obj: TestApiUserConfig=None) -> Union[User]:
    """
    Helper function that upserts a test User according to {@link TestApiUserConfig} and track the user in {@link TestApiContext}.
    
    @param context
              The {@link TestApiContext} that tracks the upserted test User.
    @param obj
               Describes the user that should be upserted.
    @return upserted user object.
    """
        ...
    @classmethod
    def removeTestUsers(cls, context: TestApiContext=None) -> None:
    """
    Helper function to remove all {@link Users} tracked by {@link TestApiContext}.
    @param context
               The {@link TestApiContext} that tracks the upserted test User.
    """
        ...
    @classmethod
    def waitForIt(cls, context: TestApiContext, checkEvery: int, timeLimit: int, fn: Callable[[], Union[Any]]) -> Union[Any]:
        ...
    @classmethod
    def ensureObjIdName(cls, context: TestApiContext=None, typeName: str=None, obj: Any=None, uuidCounter: int=None) -> Union[Any]:
        ...
    @classmethod
    def isStoredInCassandra(cls, typeRef: Type=None) -> bool:
        ...
    @classmethod
    def upsertEntityHelper(cls, context: TestApiContext=None, typeName: str=None, obj: Any=None, spec: Any=None, actionName: str=None) -> Union[Any]:
        ...
    @classmethod
    def upsertBatchEntityHelper(cls, context: TestApiContext=None, typeName: str=None, objs: Array[Any]=None, spec: Any=None, actionName: str=None) -> Union[Array[str]]:
        ...
    @classmethod
    def modifyFields(cls, id: Any, context: TestApiContext=None, add: bool=None, addFieldObjs: Any=None, rmFields: Array[str]=None) -> Union[Any]:
        ...
    @classmethod
    def getEndDate(cls, dt: datetime=None, interval: str=None, i: int=None) -> Union[datetime]:
        ...
    @classmethod
    def createClusterBoundData(cls, typeRef: Type=None, parentId: str=None, dates: Array[datetime]=None, interval: str=None, upperValues: Array[float]=None, lowerValues: Array[float]=None) -> Union[Array[Any]]:
        ...
    @classmethod
    def waitForQueues(cls, queues: Array[Type]=None, failOnError: bool=None, sleepTimeSec: int='1', totalWaitTimeSec: int='60', recoverFailedTimes: int='0') -> None:
        ...

