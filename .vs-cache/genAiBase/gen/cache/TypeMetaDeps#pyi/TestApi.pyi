#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.genAiBase.Genai.SourcePassage import Genai.SourcePassage
from c3.genAiBase.Genai.Retriever.PgVector import Genai.Retriever.PgVector
from c3.genAiBase.Genai.SourceFile import Genai.SourceFile
from c3.genAiBase.Genai.Query.Result.InterimStatusHistory import Genai.Query.Result.InterimStatusHistory
from c3.genAiBase.Genai.StructuredQuery.Spec import Genai.StructuredQuery.Spec
from c3.testtools.TestApiUserConfig import TestApiUserConfig
from c3.genAiBase.Genai.Agent.Tool.WebSearch import Genai.Agent.Tool.WebSearch
from c3.platform.BatchJob import BatchJob
from c3.platform.Locale import Locale
from c3.testtools.TestApiFetchSpy import TestApiFetchSpy
from c3.platform.MergeSpec import MergeSpec
from c3.platform.Timeseries import Timeseries
from c3.testtools.TestApiContext import TestApiContext
from c3.platform.MapReduce import MapReduce
from c3.genAiBase.Genai.Project import Genai.Project
from c3.genAiBase.Genai.StructuredData.DataModelGraph import Genai.StructuredData.DataModelGraph
from c3.platform.User import User
from c3.platform.UpsertSpec import UpsertSpec
from c3.genAiBase.Genai.Query.SourceFilter import Genai.Query.SourceFilter
from c3.genAiBase.Genai.Query.Result import Genai.Query.Result
from c3.testtools.ExpectedTestValue import ExpectedTestValue
from c3.genAiBase.Genai.Translation.Values import Genai.Translation.Values
from c3.testtools.TestApiSpy import TestApiSpy
from c3.platform.Type import Type
from c3.platform.InvalidationQueueStats import InvalidationQueueStats
from c3.platform.VanityUrl import VanityUrl
from c3.genAiBase.Genai.SourceFile.Metadata.Tag import Genai.SourceFile.Metadata.Tag
from c3.platform.Py.Runtime import Py.Runtime
from c3.platform.Workflow import Workflow
from c3.platform.ObjList import ObjList
from c3.genAiBase.Genai.ExpectedChunkingResult import Genai.ExpectedChunkingResult
from c3.genAiBase.Genai.Retriever.TestConfig import Genai.Retriever.TestConfig
from c3.genAiBase.Genai.Prompt import Genai.Prompt
from c3.genAiBase.Genai.SourceFileChunkerResult import Genai.SourceFileChunkerResult
from c3.genAiBase.Genai.UnstructuredQuery.Engine import Genai.UnstructuredQuery.Engine
from c3.platform.ImplLanguage.Runtime import ImplLanguage.Runtime
from c3.genAiBase.GenAiVisualizationBase import GenAiVisualizationBase
from c3.genAiBase.Genai.Retriever.SimilaritySearchResult import Genai.Retriever.SimilaritySearchResult
from c3.genAiBase.Genai.SourceCollection import Genai.SourceCollection
from c3.genAiBase.Genai.Query.ChatMessage import Genai.Query.ChatMessage
from c3.platform.File import File
from c3.platform.TimeRange import TimeRange
from c3.genAiBase.Genai.Retriever import Genai.Retriever

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
    @classmethod
    def validateUiComponentDesignability(cls, testDescription: str, componentType: Type, locales: Array[Locale]=None) -> None:
    """
    Executes Jasmine test cases which check that the given component type can
    be used in UI Designer.
    
    For resolving missing translation test case failures, see the documentation
    for {@link validateTranslations}.
    
    For resolving other metadata issues, check the test failure message for
    instructions.
    
    @param testDescription
              A description for the test. This will be passed to Jasmine's
              `describe` function.
    @param componentType
              The component type to validate.
    @param locales
              The list of locales that you intend to support in UI Designer.
    """
        ...
    @classmethod
    def validateTranslations(cls, componentType: Type, locales: Array[Locale]=None) -> None:
    """
    Executes a Jasmine test case which checks that all of the given component
    type's designable fields and the given annotation fields
    have the required {@link Translation} metadata.
    
    Rather than calling this function directly, component developers should
    use {@link validateUiComponentDesignability}, which wraps this function and
    also performs other important designability checks.
    
    In case of failing test cases, component developers should do the following:
    
    1. Check the test failure message for the list of missing translations,
       which includes the field path that requires the translation.
    2. For each field path, verify whether the field *should* be designable,
       i.e. check the written component specification and ask the appropriate
       stakeholder.
        - If the field *should* be designable, add a new {@link Translation}
          to your package's metadata, using the id that is mentioned in test
          failure message. The {@link Translation#locale} and
          {@link Translation#key} must be derived from this
          {@link Translation#id}.
        - If the field *should not* be designable, then mark the field as
          private.
    
    @param componentType
              The component type to validate.
    @param locales
              The list of locales that you intend to support in UI Designer.
    """
        ...
    @classmethod
    def getMissingTranslationIds(cls, missingTranslations: Array[any]=None) -> None:
    """
    Returns all the missing translations
    
    @param missingTranslations
              the TestApi context
    @return the ids of the missing translations
    """
        ...
    @classmethod
    def setupUiInfrastructureBasedVanityUrl(cls, context: TestApiContext, obj: VanityUrl=None, namespace: str='\'c3\'') -> Union[VanityUrl]:
    """
    Sets up the VanityUrl defaultContent to point to the application's namespace index.html
    @param context
              the TestApi context
    @param namespace
               the namepace of the uiInfrastructure based application
    @param obj
              The VanityUrl object
    @return The vanity url string
    """
        ...
    @classmethod
    def checkTags(cls, tags: Array[Genai.SourceFile.Metadata.Tag], expectedTagLabels: Array[str]) -> None:
    """
    Checks that the provided array of {@link Genai.SourceFile.Metadata.Tag} contains IDs that match those in the provided array of tag IDs.
    """
        ...
    @classmethod
    def testQueryOrchestratorWithMss(cls, filename: str, mssTestObj: any) -> None:
    """
    Common setup for tests with MSS
    """
        ...
    @classmethod
    def setAwsS3BucketCreds(cls, buckets: Array[str]) -> None:
    """
    Sets setAwsS3BucketCreds when used in Jarvis.
    @param buckets
              The name of the buckets for which to set the credentials.
    """
        ...
    @classmethod
    def enableMockLlmPlaybackIfInJarvis(cls) -> str:
    """
    Sets the {@link Genai.Llm.MockLlmConfig#mode} to 'playback' when called in Jarvis. No-op otherwise.
    Returns the previous value of the config mode.
    """
        ...
    @classmethod
    def setupChunkingTranslationTest(cls, ctx: TestApiContext, translatorTypeName: str, testCases: any) -> Union[Array[str]]:
    """
    Sets translator config, creates source files from test cases, and chunks them.
    @param ctx
      The context to use for upserting source files
    @param translatorTypeName
      The translator to use during chunking
    @param testCases
      Creates source files from file paths on test cases
    """
        ...
    @classmethod
    def checkSrcFileHistory(cls, srcFiles: Array[Genai.SourceFile], expectedHistoryValues: Array[str]) -> None:
    """
    Checks that the provided {@link Genai.SourceFile}s each have a history that is equal to the
    statuses in the order they are provided
    """
        ...
    @classmethod
    def structuredQuerySpecsAreSame(cls, expectedStructuredQuerySpec: Genai.StructuredQuery.Spec, actualStructuredQuerySpec: Genai.StructuredQuery.Spec) -> bool:
    """
    Checks whether two {@link Genai.StructuredQuery.Spec}s are logically the same.
    @param expectedStructuredQuerySpec
              The expected structured query spec.
    @param actualStructuredQuerySpec
              The actual structured query spec.
    @return whether the two structured query specs are logically the same
    """
        ...
    @classmethod
    def checkRationale(cls, result: Genai.Query.Result, allowedRationaleContent: Array[str]=None, expectedRationaleSourceFileNames: Array[str]=None) -> None:
    """
    Check the Genai.Query.Result.rationale, passages, and rationaleSources fields
    @param result
              The result to check.
    @param allowedRationaleContent
              If provided, will check that the result's first rationale source contains at least one of the strings
    @param expectedRationaleSourceFileNames
              If provided, will check that at least one of the expected source files was used for the rationale
    """
        ...
    @classmethod
    def checkIndexResult(cls, retriever: Genai.Retriever, expectedPassageCount: int, objList: ObjList[Any], expectedObjCount: int, expectedErrorCount: int, expectedSourceFileCount: int=None, doNotUseExpect: bool=None) -> Union[Array[str]]:
    """
    Check the results of an index* call
    If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
    """
        ...
    @classmethod
    def testCallToSetupOpenAiCredentials(cls) -> None:
    """
    Utility function used by test_GenaiPrivilegedAction.
    """
        ...
    @classmethod
    def setOpenAiApiKey(cls) -> None:
    """
    Sets OpenAiApiKey when used in Jarvis. Will throw exception if key not set through static console for other apps.
    """
        ...
    @classmethod
    def checkSearchability(cls, retriever: Genai.Retriever, searchableQueries: Array[any], unsearchableQueries: Array[any]=None, doNotUseExpect: bool=None) -> Union[Array[str]]:
    """
    Checks the similaritySearch results.
    If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
    """
        ...
    @classmethod
    def getRetrievedDocsFromMMRTest(cls, relevanceToRedundancyRatio: float) -> Union[Array[Genai.Retriever.SimilaritySearchResult]]:
    """
    Get the `retrieved_docs` from a similarity search using MMR
    @param relevanceToRedundancyRatio
      The ratio
    """
        ...
    @classmethod
    def checkChunking(cls, sourceFile: Genai.SourceFile, passages: Array[Genai.SourcePassage], expected: Genai.ExpectedChunkingResult) -> None:
    """
    Validates the chunked passages for a {@link Genai.SourceFile}.
    @param sourceFile
           The source file that was chunked
    @param passages
           The passages produced by chunking
    @param expected
           The expected results
    """
        ...
    @classmethod
    def setBingSearchKey(cls) -> None:
    """
    Sets the Bing Search key when used in Jarvis. Will throw exception if the key is not set through static console for other apps.
    """
        ...
    @classmethod
    def createSeedDataForSummaryBufferTest(cls, ctx: TestApiContext=None) -> None:
    """
    Creates {@link Genai.Query.Result}s and {@link Genai.Query.ChatMessage}s for testing the summary buffer feature.
    """
        ...
    @classmethod
    def createSeedDataForSummaryTest(cls, ctx: TestApiContext=None) -> None:
    """
    Creates {@link Genai.Query.Result}s and {@link Genai.Query.ChatMessage}s for testing the summary feature.
    """
        ...
    @classmethod
    def setupStructuredDbAgentTest(cls) -> None:
    """
    Sets up the QO toolkit with structured db agent initialized with readiness data model
    """
        ...
    @classmethod
    def runTestInNightly(cls, testName: str) -> bool:
    """
    Returns whether the given test should only run in nightly builds.
    This is true only if all of the following are true:
       1. This is being run in Jarvis
       2. The branchGroup 'allowSkippingTests' config is set to true
       3. The testName is in genai/genAiBase/resource/jarvisTestsToRunInNightly.txt
    """
        ...
    @classmethod
    def createFilesAndPopulate(cls, urlPath: str, numFiles: int, numLines: int=None) -> Union[Array[File]]:
    """
    Creates files and populates them.
    @param urlPath
              Directory to store files.
    @param numFiles
              Num of files to create.
    @param numLines
              Num of lines to populate in the file.
    """
        ...
    @classmethod
    def checkGuidance(cls, configName: str) -> None:
    """
    Checks {@link Genai.UnstructuredQuery.Engine.ModelConfig#generateText} returns a valid output for a given llm config.
    
    @param configName
              The name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig} to use.
    """
        ...
    @classmethod
    def setGcpKey(cls) -> None:
    """
    Sets GCP credentials when used in Jarvis. Will throw exception if key not set through static console for other apps.
    """
        ...
    @classmethod
    def tearDownQueryResultPairs(cls, queryResultPairs: any=None) -> None:
    """
    Teardown the query result pairs linked to the `mergedQueryResultPairs` field of the test setup object
    generated by `setUpQueryOrchestratorTest`.
    
    @param queryResultPairs
       Object containing the ids of the {@link Genai.Query.Result}s created for the query result pairs and the
       {@link Genai.FewShotExample.QueryResultPair} to remove
    """
        ...
    @classmethod
    def installRuntimes(cls, runtimes: Array[ImplLanguage.Runtime]=None) -> None:
    """
    Install the Python runtimes.
    
    Each CondaLibraryManager#installRuntime call is dispatched in a Jasmine `it` block,
    so we can see in the Jarvis UI how long each takes.
    
    This will install the `-server-py4j` Py.Runtime of each.
    
    @param runtimes
       The runtimes to install, if overriding the default list.
    """
        ...
    @classmethod
    def checkReaEngineLog(cls, result: Genai.Query.Result) -> None:
    """
    Check Genai.Query.Result.engineLog for ReaEngine queries
    @param result
              The result to check.
    """
        ...
    @classmethod
    def teardownRetrieverTestSources(cls, ctx: TestApiContext, testConfig: Genai.Retriever.TestConfig) -> None:
    """
    Tears down SourceFiles and SourceCollections needed for Retriever tests.
    """
        ...
    @classmethod
    def upsertWindTurbineData(cls) -> None:
    """
    Upserts the wind turbine data
    """
        ...
    @classmethod
    def teardownStructuredDbAgentTest(cls) -> None:
    """
    Resets config and removes test artifacts created by TestApi#setupStructuredDbAgentTest
    """
        ...
    @classmethod
    def setElasticKey(cls) -> None:
    """
    Sets the values for the {@link Genai.Retriever.Elser.Config}
    """
        ...
    @classmethod
    def getChunkedPassages(cls, sourceFile: Genai.SourceFile, multimodalChunkerTypeName: str=None) -> Union[Genai.SourceFileChunkerResult]:
    """
    Chunks the source file.
    @param sourceFile
      The source file to chunk.
    @param multimodalChunkerTypeName
       If testing a multimodal chunker other than Genai.SourceFile.Chunker.MultimodalPdf,
       the name of the chunker type.
    """
        ...
    @classmethod
    def configureDefaultTool(cls, toolId: str) -> None:
    """
    Configures specified tool as default tool in UI.
    
    @param toolId
              The id of the {@link Genai.Agent.Tool} to configure as default.
    """
        ...
    @classmethod
    def setMockLlmConfigPath(cls, filename: str, doNotTruncateCallLog: bool=None) -> None:
    """
    If {@link Genai.Llm.MockLlmConfig#mode} is not off, sets {@link Genai.Llm.MockLlmConfig#callLogFilePath} to the path
    given by {@link Genai.Llm.MockLlmConfig#filePathForTest}.
    By default, when mode is set to 'record', this call will truncate the file in
    {@link Genai.Llm.MockLlmConfig#filePathForTest}
    
    @param doNotTruncateCallLog
               For when we want to preserve text already written to the call log, do not truncate any existing file.
    """
        ...
    @classmethod
    def isRunningInJarvis(cls) -> bool:
    """
    Used to check if test is running in jarvis
    """
        ...
    @classmethod
    def tearDownQueryOrchestratorTest(cls, setUpTestObj: Any) -> None:
    """
    Teardown for tools and configs for QO tests.
    The input `setUpTestObj` is the object returned from `setUpQueryOrchestratorTest`.
    """
        ...
    @classmethod
    def addTagAndReturnTagList(cls, sourceFile: Genai.SourceFile, tagLabel: str) -> Array[Genai.SourceFile.Metadata.Tag]:
    """
    Adds a {@link Genai.SourceFile.Metadata.Tag} with the specified tagLabel to the {@link Genai.SourceFile},
    then returns a list of all tags associated with the {@link Genai.SourceFile sourceFile}.
    Additonally, checks that the added tag is persisted.
    @param sourceFile
           The {@link Genai.SourceFile source} to add the specified tag to.
    @param tagLabel
           The text of the {@link Genai.SourceFile.Metadata.Tag} to be added.
    """
        ...
    @classmethod
    def checkVisualization(cls, viz: GenAiVisualizationBase=None, checkForToolId: bool=None) -> None:
    """
    Checks the parts of a QueryOrchestrator vizualizations
    @param viz
          {@link GenAiVisualizationBase}
    @param checkForToolId
          If true does not check if the {@link GenAiVisualizationBase#toolId} exists
    """
        ...
    @classmethod
    def ensureDefaultProjectExists(cls) -> None:
    """
    Ensures that the default project and agent are created. These entities are seeded by default in the
    app.
    """
        ...
    @classmethod
    def cleanUpCollection(cls, collection: Genai.SourceCollection, preserveCollectionRoot: bool=None, preserveCollectionEntity: bool=None) -> None:
    """
    Removes the provided collection and all downstream entities: {@link Genai.SourceFile}s,
    {@link Genai.SourcePassage}s, {@link Genai.Query.Result}s, {@link Genai.Query.ResultToPassageRelation}s,
    {@link Genai.Query.ResultToSourceFileRelation}s, and {@link Genai.Query.ChatMessage}s. Also deletes all associated
    {@link File}s (though the original source files can be preserved if indicated).
    
    NOTE: Any associated {@link Genai.Retriever}s will not be cleaned up since they are not directly tied to a specific
          collection.
    
    @param collection
              The source collection to clean up
    @param preserveCollectionRoot
              Whether to preserve or delete files in root url of source collection
    @param preserveCollectionEntity
              Whether to preserve or remove source collection record in db
    """
        ...
    @classmethod
    def checkSimilaritySearchResult(cls, actualResult: Genai.Retriever.SimilaritySearchResult, expectedPassage: Genai.SourcePassage, expectedPassageIdInfix: str, expectedRank: int=None) -> None:
    """
    Check the Genai.Retriever.SimilaritySearchResult.
    @param actualResult
      The result to check.
    @param expectedPassage
      The expected passage.
    @param expectedPassageIdInfix
      The expected passage id infix.
    @param expectedRank
      The expected rank.
    """
        ...
    @classmethod
    def setAzureContentModerationKey(cls) -> None:
    """
    Sets Azure content moderation key when used in Jarvis. Will throw exception if key not set through static console for other apps.
    """
        ...
    @classmethod
    def checkStaleResult(cls, result: Genai.Query.Result, testObj: any) -> None:
    """
    Helper function to test if the result is stale
    """
        ...
    @classmethod
    def checkRetrievedDocs(cls, result: Genai.Query.Result, expectedAnswers: Array[str], context: str='\'-- No Context --\'') -> None:
    """
    Check the retrieved documents in the result. This function is only compatible with unstructured data
    as it checks the chain results in engine log, a field present when retrieving unstructured data.
    @param result
              The result to check.
    @param expectedAnswers
              The expected answers to check against the retrieved documents.
    """
        ...
    @classmethod
    def checkIndexZip(cls, retrieverName: str) -> None:
    """
    Ensure the index zip file exists for the specified retriever
    
    @param retrieverName
              The name of the retriever
    """
        ...
    @classmethod
    def setVllmEndpoint(cls) -> None:
    """
    Sets Vllm endpoint when used in Jarvis. Will throw exception if key not set through static console for other apps.
    """
        ...
    @classmethod
    def setAwsBedrockKeys(cls) -> None:
    """
    Sets the AWS Bedrock keys when used in Jarvis. Will throw exception if the keys are not set through static console for other apps.
    """
        ...
    @classmethod
    def gpuDevice(cls, runtime: Py.Runtime) -> str:
    """
    Checks if the current App is configured to have a GPU available.
    
    @param runtime
              The runtime to initialize if GPUs are available.
    @return the CUDA current device number, or '-1' if none is available
    """
        ...
    @classmethod
    def runChunkingTranslationTest(cls, sourceFileId: str, testCase: any) -> None:
    """
    Checks whether chunked content matches expected by looking at content of first/last passage and length of passages.
    @param sourceFileId
      The ID of the source file to validate
    @param testCase
      Test case containing expected min num passages, first passage content., and last passage content
    """
        ...
    @classmethod
    def testMultimodalChunking(cls, filename: str, testConfig: any=None) -> None:
    """
    Chunks the source file.
    @param filename
       The filename for which the test is being run.
    @param testConfig
       If testing a multimodal chunker other than {@link Genai.SourceFile.Chunker.MultimodalPdf},
       the details of the chunker and expectations.
    """
        ...
    @classmethod
    def removeWindTurbineData(cls) -> None:
    """
    Removes the wind turbine data
    """
        ...
    @classmethod
    def upsertReadOnlyProject(cls, ctx: TestApiContext) -> Union[Genai.Project]:
    """
    Upserts and returns a readonly {@link Genai.Project}.
    """
        ...
    @classmethod
    def setupRetrieverTestSources(cls, ctx: TestApiContext, filename: str, leavePy4jProcessesRunning: bool=None) -> Union[Genai.Retriever.TestConfig]:
    """
    Sets up SourceFiles and SourceCollections needed for Retriever tests.
    """
        ...
    @classmethod
    def checkRationaleSources(cls, result: Genai.Query.Result, allowedRationaleContent: Array[str]=None, expectedRationaleSourceFileNames: Array[str]=None) -> None:
    """
    Check the Genai.Query.Result.rationaleSources field
    @param result
              The result to check.
    @param allowedRationaleContent
              If provided, will check that the result's first rationale source contains at least one of the strings
    @param expectedRationaleSourceFileNames
              If provided, will check that at least one of the expected source files was used for the rationale
    """
        ...
    @classmethod
    def upsertReadinessDataModelGraph(cls) -> Genai.StructuredData.DataModelGraph:
    """
    Upserts the readiness test data model graph
    """
        ...
    @classmethod
    def makeAndLogQuery(cls, queryFunc: str, message: str, queryEngine: Genai.UnstructuredQuery.Engine=None, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None, filtersToAdd: Map[str, Array[Genai.Query.SourceFilter]]=None, streamResponse: bool=None, detectedLanguage: str=None) -> Genai.Query.Result:
    """
    Calls `queryFunc` on the provided engine and then logs and returns the result. This is simply a convenience
    function to avoid having the same logging in every test.
    
    @param queryFunc
              The function to call on the engine. Must be one of 'query' or 'chatQuery'.
    @param message
              The message to pass as a query.
    @param queryEngine
              The engine to call the query on.
    @param originalAiResult
              The original AI result to pass to the query.
    @param chatHistory
              The chat history to pass to the query.
    @param filtersToAdd
              The filters to add to the query.
    @param streamResponse
              Whether to stream the response.
    @param detectedLanguage
            The detected language of the message.
    """
        ...
    @classmethod
    def installHuggingfaceModels(cls, modelNames: Array[str]=None, skipDefaultModels: bool=None) -> Union[Array[str]]:
    """
    Download the specified Huggingface models to the local directory used by
    Huggingface. This avoids Huggingface downloading directly from the public repository,
    which can be slow and unreliable.
    
    @param modelNames
       The modelNames to install in addition to the defaults.
    @param skipDefaultModels
       If true, will only install the models in `modelNames` and not the default models.
    @return the directories created for the models
    """
        ...
    @classmethod
    def generateImportError(cls) -> None:
    """
    Used to simulate situations where not all Python libraries have been correctly installed
    """
        ...
    @classmethod
    def upsertDefaultEvalSpecCorrectionPrompt(cls) -> Genai.Prompt:
    """
    Upserts the default eval spec correction prompt
    """
        ...
    @classmethod
    def indexPassagesSpy(cls, ctx: TestApiContext, retrieverTypeName: str='\'Genai.Retriever.Dense\'') -> TestApiSpy:
    """
    Default {@link Genai.Retriever#indexPassages} spy.
    @param ctx
              The context to use for the spy.
    @param retrieverTypeName
              The name of the retriever type to use.
    """
        ...
    @classmethod
    def setupBingWebSearchTool(cls) -> Genai.Agent.Tool.WebSearch:
    """
    Configures 'WebSearchTool_default'  web search tool with Bing search engine to search against C3.ai and microsoft websites
    """
        ...
    @classmethod
    def templateTranslateVals(cls, englishValue: str=None, userLanguageValue: str=None) -> Union[Genai.Translation.Values]:
    """
    Test util for inline translation related data constructions,
    so that long values are not spread out into multi-lines of code.
    
    @param englishValue
              The English version string value.
    @param userLanguageValue
              The original user language string value.
    
    Returns the {@link Genai.Translation.Values}
    """
        ...
    @classmethod
    def cleanPgVectorRetrieverForTestDataset(cls, dataset: str) -> None:
    """
    Cleans up the data of {@link Genai.Retriever.PgVector} for the specified dataset.
    @param dataset
              The dataset to clean up.
    """
        ...
    @classmethod
    def findDictionaryDifferences(cls, obj1: Any=None, obj1: Any=None, path: str=None) -> Union[Array[str]]:
    """
    Finds the differences between two dictionaries.
    @return The differences between the dictionaries.
    """
        ...
    @classmethod
    def upsertDefaultTableAnsweringPrompt(cls) -> Genai.Prompt:
    """
    Upserts the default eval metrics spec generation prompt
    """
        ...
    @classmethod
    def upsertDefaultAndTutorialProjects(cls, ctx: TestApiContext) -> Union[Array[Genai.Project]]:
    """
    Upserts a default and a tutorial {@link Genai.Project} and returns them in an array.
    """
        ...
    @classmethod
    def checkStringReferences(cls, stringToCheck: str) -> Union[int]:
    """
    Checks that the citations/references in the provided string are 'correct'.
    1. It should have at least one reference
    2. The references should be in the format [<hashSymbol>1], [<hashSymbol>2], etc. and should appear in order
    3. There are no 'unreplaced' references like '[UUID<hashSymbol>52]
    4. There are no missing references, e.g. "(from [<hashSymbol>1], )" with the missing ref after the comma
    <hashsymbol> instead of the actual symbol is used in the example to avoid being flagged as a field type by code analysis.
    @param stringToCheck
              The string to check for references
    @return the number of references found in the string
    """
        ...
    @classmethod
    def makeTxtFileContent(cls, fileName: str, collectionName: str, numLines: int) -> str:
    """
    Create the content of a single text file
    """
        ...
    @classmethod
    def upsertDefaultEvalSpecGenerationPrompt(cls) -> Genai.Prompt:
    """
    Upserts the default eval spec generation prompt
    """
        ...
    @classmethod
    def setUpQueryResultPairs(cls, queryResultPairs: Array[Array[Array[str]]]=None, project: Genai.Project=None) -> Union[any]:
    """
    Sets up few shot examples for suggested queries for a query orchestrator test.  These examples are attached
    to the setup test object for easier teardown in #tearDownQueryOrchestratorTest.
    @param queryResultPairs
       The query result pairs to set up.  Each pair is a list containing two lists: the first element represents the
       query and the second element represents the result. Example: [["query", "result"], ["followUp", "resultFollowUp"]]
    @param project
       The project the few shot examples should be linked to
    @return Object containing the ids of the {@link Genai.Query.Result}s created for the query result pairs and
    the {@link Genai.FewShotExample.QueryResultPair} created
    """
        ...
    @classmethod
    def teardownTestRetriever(cls, ctx: TestApiContext, testConfig: Genai.Retriever.TestConfig) -> None:
    """
    Tears down a {@link Genai.Retriever.Dense}, {@link Genai.SourceFile}s, and {@link Genai.SourceCollection}s
    set up by #setupTestRetriever.
    """
        ...
    @classmethod
    def clearToolCfgs(cls) -> None:
    """
    Clears any tool configs set by #configureDefaultTool or #configureDefaultToolInMSS
    """
        ...
    @classmethod
    def setupTestRetriever(cls, ctx: TestApiContext, filename: str) -> Union[Genai.Retriever.TestConfig]:
    """
    Sets up a {@link Genai.Retriever.Dense}, {@link Genai.SourceFile}s, and {@link Genai.SourceCollection}s
    needed for tests that use a retriever.
    """
        ...
    @classmethod
    def setYouSearchKey(cls, configKey: str) -> None:
    """
    Sets the API key for you.com search when used in Jarvis. Will throw exception if the key is not set through static console for other apps.
    @param configKey
          The id of the {@link Genai.Agent.Tool.WebSearch.Config} to set the API key on.
    """
        ...
    @classmethod
    def setMisConfig(cls, appId: str=None, serviceAppUrl: str=None) -> None:
    """
    Sets the config for {@link ModelInference} service
     @param appId
          If appId is passed the service app will be set to that. Otherwise it would be set to the default "gkev8genai-centralmodelinference-service"
     @param serviceAppUrl
          Sets serviceAppUrl in model inference config. If no value is passed, defaults to {@link https://gkev8genai.c3-e.com/centralmis/service}
    """
        ...
    @classmethod
    def upsertWindTurbineDataModelGraph(cls) -> Genai.StructuredData.DataModelGraph:
    """
    Upserts the wind turbine data model graph
    """
        ...
    @classmethod
    def pgVectorRetrieverForTestDataset(cls, dataset: str) -> Genai.Retriever.PgVector:
    """
    Returns (creating if necessary) the {@link Genai.Retriever.PgVector} for the specified dataset.
    """
        ...
    @classmethod
    def removeTagAndReturnTagList(cls, sourceFile: Genai.SourceFile, tagLabel: str, expectedBool: bool=None) -> Array[Genai.SourceFile.Metadata.Tag]:
    """
    Removes a specified {@link Genai.SourceFile.Metadata.Tag}, then returns the updated list of tags on that file.
    Additionally, checks that the removed tag is still persisted.
    @param sourceFile
           The {@link Genai.SourceFile} to remove the specified tag from.
    @param tagLabel
           The ID of the {@link Genai.SourceFile.Metadata.Tag} to be removed.
    @param expectedBool
           If the tag was expected to be successfully removed from the source file.
    """
        ...
    @classmethod
    def configureDefaultToolInMSS(cls, toolId: str) -> None:
    """
    Configures MSS as default tool in UI with only the specified tool in the MSS toolkit.
    
    @param toolId
              The id of the {@link Genai.Agent.Tool} to configure as default in MSS toolkit.
    """
        ...
    @classmethod
    def checkResultSucceeded(cls, result: Genai.Query.Result) -> None:
    """
    Asserts that the result's `failed` field is not `true` and adds the result's engineLog to the
    failure message if `failed` is `true`.
    """
        ...
    @classmethod
    def checkStructuredResultSource(cls, result: Genai.Query.Result, expectedStructuredQuerySpec: Genai.StructuredQuery.Spec, isParentResult: bool=None) -> None:
    """
    Checks whether the provided spec matches one linked to the given result and `expect`s to find a match.
    @param result
              The result whose sources will be checked.
    @param expectedStructuredQuerySpec
              The expected structured query spec.
    @param isParentResult
              Whether the result is a parent result. If true, {@link Genai.Query.Result#allSources} will be used instead of
              {@link Genai.Query.Result#sourceRelations}.
    """
        ...
    @classmethod
    def setTestToolConfigs(cls) -> None:
    """
    Creates {@link Genai.Agent.Tool.EvalQuery.Config}
    with name `EvalQuery_default_test`.
    
    NOTE: This does actually call the apis to upsert the entities
    """
        ...
    @classmethod
    def checkStringMatches(cls, actualString: str, expectedPossibleStrings: Array[str], caseSensitive: bool=None, context: str=None) -> None:
    """
    Asserts that at least one of `expectedPossibleStrings` is in `actualString`. Useful to help account for
    non-determinism in model results.
    """
        ...
    @classmethod
    def populateTxtSrcCollectionRoot(cls, collection: Genai.SourceCollection, numFiles: int, numLines: int=None) -> Array[File]:
    """
    Populates the collection with the number of text files specified. Calls #makeTxtFileContent
    to get the content for each file.
    @param collection
           The collection to populate with {@link Genai.SourceFile}s
    @param numFiles
           The number of files to create
    @param numLines
           The number of lines in each text file. Defaults to 10.
    """
        ...
    @classmethod
    def setAzureTranslationKey(cls) -> None:
    """
    Sets Azure credentials when used in Jarvis. Will throw exception if key not set through static console for other apps.
    """
        ...
    @classmethod
    def testSearch(cls, retriever: Genai.Retriever, testQueries: Array[any], resultCounts: Array[int], doNotUseExpect: bool=None) -> Union[Array[str]]:
    """
    Checks the similaritySearch results.
    @param retriever
              The retriever to query
    @param testQueries
              The queries to run
    @param resultCounts
              The expect number of results from each query from the source file specifed
              in the 'testQuery' at the same index
    If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
    """
        ...
    @classmethod
    def setSawsharkVllmEndpoint(cls) -> None:
    """
    Sets the endpoint in vllmKwargs for {@link Genai.UnstructuredQuery.Engine.ModelConfig} for the sawshark model in VLLM.
    """
        ...
    @classmethod
    def setUpQueryOrchestratorTest(cls, filename: str, testObjs: any=None) -> Any:
    """
    Common setup for tools and configs for QO tests
    """
        ...
    @classmethod
    def checkInterimStatuses(cls, statusHistory: Array[Genai.Query.Result.InterimStatusHistory]=None, expectedStatuses: Array[str]=None) -> None:
    """
    Check interim statuses of a result
    @param statusHistory
             The status history of the result
    @param expectedStatuses
             The expected interim statuses
    """
        ...
    @classmethod
    def filterOutput(cls, output: Genai.SourceFileChunkerResult) -> Union[Array[Array[Genai.SourcePassage]]]:
    """
    Split the output into types of passages
    """
        ...

