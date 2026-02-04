// TypeScript definitions for the C3 type TestApi

/**
 * TestApi is the main apps testing framework
 *
 * Functionality is broken down into a few main categories:
 *
 * 1) API related functionality. TestApi internals.
 * 2) Debug support
 * 3) Helpers to create/modify/remove C3 entities
 * 4) Object creation helpers (JavaScript objects)
 * 5) High-level wrappers. Create sets of commonly used C3 entities
 * 6) Miscellaneous
 *
 * @remarks this represents a value passed to a method that expects an instance of TestApi
 */
declare interface ITestApi {
}

/**
 * TestApi is the main apps testing framework
 *
 * Functionality is broken down into a few main categories:
 *
 * 1) API related functionality. TestApi internals.
 * 2) Debug support
 * 3) Helpers to create/modify/remove C3 entities
 * 4) Object creation helpers (JavaScript objects)
 * 5) High-level wrappers. Create sets of commonly used C3 entities
 * 6) Miscellaneous
 *
 * @remarks this represents a made instance of TestApi
 */
declare class TestApi {

  /**
   * API
   *
   * Create a TestApi context
   * @param filename Can be any string, but typically the name of the test for debugability reasons
   * @param parent Parent TestApiContext.
   * @param queueBlacklist
   *           The blacklisted queues. All of these will be paused before running the tests.
   * @return The newly created TestApiContext
   */
  static createContext(filename?: string | null, parent?: TestApiContext | null, queueBlacklist?: C3.Array<Type | null>): TestApiContext | null;

  /**
   * Print the objects being tracked by TestApi
   * @param context The TestApi context whose objects to print
   */
  static printObjects(context: TestApiContext): void;

  /**
   * Set the locale of the TestApi context
   * @param context The TestApi context for the locale change
   * @param locale The desired locale (e.g., 'en-US', 'it-IT', etc.)
   */
  static setLocale(context: TestApiContext, locale?: string | null): void;

  /**
   * Remove the objects tracked by context and any matched by teardown filters {@see addExternalTeardownFilter}
   * @param context Context to teardown
   * @param timeLimit in seconds.
   * @param queues
   *           The queues to wait until they are clear (all if null).
   */
  static teardown(context: TestApiContext, timeLimit?: number | null, queues?: C3.Array<string | null>): void;

  /**
   * Prepare report with content of InvalidationQueue
   * @return current content of invalidation queue in string format
   */
  static dumpInvalidationQueue(): string | null;

  /**
   * Prepare report with content of InvalidationQueue and all executing actions.
   *
   * @param timeSpan
   *           The time span to consider; comes from waitForSetup's or waitForJob's timeout.
   * @return current content of invalidation queue and executing actions in string format.
   */
  static dumpExecutionState(timeSpan: number): string | null;

  /**
   * Wait for all asynchronous actions to complete for the current tenant/tag
   * @param context Context to wait for
   * @param queues Wait for these queues only
   * @param checkInterval How often to poll queues (seconds)
   * @param timeout Maximum time to wait for queues (seconds)
   */
  static waitForSetup(context: TestApiContext, queues?: C3.Array<string | null>, checkInterval?: number | null, timeout?: number | null): void;

  /**
   * Wait for the job given in the argument to complete
   * @param context Context to wait for
   * @param job Job to wait for
   * @param checkInterval How often to poll queues (seconds)
   * @param timeout Maximum time to wait for queues (seconds)
   */
  static waitForJob(context: TestApiContext, job: MapReduce<any, any, any, any> | null | BatchJob<any, any, any> | null | Workflow | null, checkInterval?: number | null, timeout?: number | null): void;

  /**
   * Wait for the function to return a truthy value.
   *
   * @param lambda
   *    A function that returns a truthy value on a success condition
   * @param errorMessage
   *    An error message to throw if the timeout is exceeded
   * @param checkInterval
   *    How often to call the function (seconds)
   * @param timeout
   *    Maximum time to wait for the function to run successfully (seconds)
   */
  static waitForFunction(lambda: λSupplier<any>, errorMessage?: string | null, checkInterval?: number | null, timeout?: number | null): void;

  /**
   * Check to make sure setup completed properly (e.g., waitForSetup and waitForJob)
   * @param context Context to check for "OK"ness
   * @return Return true if setup is OK
   */
  static isSetupOK(context: TestApiContext): boolean;

  /**
   * Add filters to be used during teardown.
   * @param context
   * @param filter Entities matching this filter will be removed during teardown
   * @param typeRef The TypeRef of the entities that will be removed
   * @param limit Increase the limit on the number of objects to remove (default: 100)
   *                      This is a safeguard so you don't do something stupid, like ServicePoint.removeAll() on a production system.
   */
  static addExternalTeardownFilter(context: TestApiContext, filter: string, typeRef: Type, limit?: number | null): void;

  /**
   * Debug Support
   *
   * Print a message to the server log
   * @param msg The message
   */
  static logInternal(msg: string): void;

  /**
   * Print a message to console.log
   * @param context The context
   * @param msg The message
   */
  static logCustom(context: TestApiContext, msg: string): void;

  /**
   * Client-side sleep. Use with caution. This spins in a loop.
   * @param context
   * @param seconds How long to sleep in seconds
   */
  static sleep(context: TestApiContext, seconds: number): void;

  /**
   * Server-side sleep. Use with caution. This spins in a loop.
   * @param seconds How long to sleep in seconds
   */
  static sleepServer(seconds: number): void;

  /**
   * Create a C3 entity
   *
   * @param context
   *           The context.
   * @param typeName
   *            Name of the type.
   * @param obj
   *            Specify fields of the object.
   * @param spec
   *           An optional spec to pass to create().
   * @return created object.
   */
  static createEntity(context: TestApiContext, typeName: string, obj?: any, spec?: UpsertSpec | null): any;

  /**
   * Create multiple C3 entities.
   *
   * @param context
   *           The context.
   * @param typeName
   *            Name of the type.
   * @param objs
   *           An array of objects specifying fields for each entity.
   * @param spec
   *           An optional spec to pass to createBatch().
   * @return ids of the created objects.
   */
  static createBatchEntity(context: TestApiContext, typeName: string, objs: C3.Array<any> | null, spec?: UpsertSpec | null): C3.Array<string | null>;

  /**
   * Upsert a C3 entity.
   *
   * @param context
   *           The context.
   * @param typeName
   *            Name of the type.
   * @param obj
   *            Specify fields of the object.
   * @param spec
   *           An optional spec to pass to upsert().
   * @return upserted object.
   */
  static upsertEntity(context: TestApiContext, typeName: string, obj?: any, spec?: UpsertSpec | null): any;

  /**
   * Upsert multiple C3 entities.
   *
   * @param context
   *           The context.
   * @param typeName
   *            Name of the type.
   * @param objs
   *           An array of objects specifying fields for each entity.
   * @param spec
   *           An optional spec to pass to upsertBatch().
   * @return ids of the upserted objects.
   */
  static upsertBatchEntity(context: TestApiContext, typeName: string, objs: C3.Array<any> | null, spec?: UpsertSpec | null): C3.Array<string | null>;

  /**
   * A helper function that upserts a test User with {@link TestIdp} according to the
   * information given in obj.
   *
   * @param context
   *           The {@link TestApiContext} that tracks the upserted test User.
   * @param obj
   *            Describes the user that should be upserted.
   * @return upserted user object.
   */
  static upsertUser(context: TestApiContext, obj?: TestApiUserConfig | null): User | null;

  /**
   * A helper function that upserts a batch of test Users with {@link TestIdp} according to the
   * information given in objs.
   *
   * @param context
   *           The {@link TestApiContext} that tracks the upserted test Users.
   * @param objs
   *           An array describing the users that should be upserted. Each object in the array describes one user.
   * @return ids of the upserted {@link User}s.
   */
  static upsertBatchUser(context: TestApiContext, objs: C3.Array<TestApiUserConfig | null> | null): C3.Array<string | null>;

  /**
   * Wrapper for merge on the specified obj.
   * Note that merge creates the object if it doesn't exist, but this should only be used for objects
   * already created using createEntity, upsertEntity, createBatchEntity, or upsertBatchEntity.
   *
   * @param context
   *           The context.
   * @param id
   *           id used to retrieve the TestApiObj from which the Type will be extracted.
   * @param obj
   *           Fields to populate on updated object.
   * @param spec
   *           An optional spec to pass to merge().
   * @return modified object.
   */
  static mergeEntity(context: TestApiContext, id: string, obj: any, spec?: MergeSpec | null): any;

  /**
   * Wrapper for mergeBatch on the specified objs.
   * Note that mergeBatch creates objects if they don't exist, but this should only be used for objects
   * already created using createEntity, upsertEntity, createBatchEntity, or upsertBatchEntity.
   *
   * @param context
   *           The context.
   * @param ids
   *           ids used to retrieve the TestApiObj from which the Type will be extracted.
   * @param objs
   *           List of objects with fields to populate on updated objects.
   * @param spec
   *           An optional spec to pass to mergeBatch().
   * @return ids of the modified objects.
   */
  static mergeBatchEntity(context: TestApiContext, ids: C3.Array<string | null> | null, objs: C3.Array<any> | null, spec?: MergeSpec | null): C3.Array<string | null>;

  /**
   * Remove an entity by id
   * @param context
   * @param id Id of entity to remove
   */
  static removeEntity(context: TestApiContext, id: string): void;

  /**
   * Remove entites by id
   * @param context
   * @param id List of ids of entity to remove
   */
  static removeEntities(context: TestApiContext, ids?: C3.Array<string | null>): void;

  /**
   * Remove entites that match a filter and a TypeRef
   * @param context
   * @param filter Remove entities matching this filter
   * @param typeRef Only remove entities of this type
   * @param limit Increase the limit on the number of objects to remove (default: 100)
   *                      This is a safeguard so you don't do something stupid, like ServicePoint.removeAll() on a production system.
   */
  static removeEntitiesByFilter(context: TestApiContext, filterStr: string, typeRef: Type, limit?: number | null): void;

  /**
   * Remove all entites of a given type
   * @param context
   * @param typeRef Remove entities of this type in 'context'
   */
  static removeAllEntitiesOfType(context: TestApiContext, typeRef: Type): void;

  /**
   * Add fields to a C3 object
   * @param context
   * @param id Identifier (string) or object to add field(s) to
   * @param obj Object containing the fields to add
   * @return modified object
   */
  static addFields(context: TestApiContext, id: any, obj: any): any;

  /**
   * Remove fields from a C3 object
   * @param context
   * @param id Identifier (string) or object to add field(s) to
   * @param fields List of fields to remove from object
   * @return modified object
   */
  static removeObjFields(context: TestApiContext, id: any, fields: C3.Array<string | null> | null): any;

  /**
   * Add measurements to a measurement series (fill mode)
   * @param context
   * @param id Id of measurement series
   * @param dates list of dates
   * @param values List of measurement values
   * @param interval Measurement interval
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   */
  static addMeasurementsToSeriesFill(context: TestApiContext, id: string, dates: C3.Array<DateTime | null> | null, values: C3.Array<number | null> | null, interval: string, unit: string, field?: string | null): void;

  /**
   * Add measurements to a measurement series
   * @param context
   * @param id Id of measurement series
   * @param startDates list of start dates
   * @param endDates list of end dates
   * @param values List of measurement values
   * @param interval Measurement interval
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   */
  static addMeasurementsToSeries(context: TestApiContext, id: string, startDates: C3.Array<DateTime | null> | null, endDates: C3.Array<DateTime | null> | null, values: C3.Array<number | null> | null, interval: string, unit: string, field?: string | null): void;

  /**
   * Add measurements to a measurement series
   * @param context
   * @param id Id of measurement series
   * @param startDates list of start dates
   * @param endDates list of end dates
   * @param values List of measurement values
   * @param interval Measurement interval
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   * @param fill
   */
  static addMeasurementsToSeriesInternal(context: TestApiContext, id: string, startDates: C3.Array<DateTime | null> | null, endDates: C3.Array<DateTime | null> | null, values: C3.Array<number | null> | null, interval: string, unit: string, field?: string | null, fill?: boolean): void;

  /**
   * Add cluster bound measurements to a measurement series
   * @param context
   * @param id Id of measurement series
   * @param startDates list of start dates
   * @param endDates list of end dates
   * @param upperValues List of upper bound values
   * @param lowerValues List of lower bound values
   * @param interval Measurement interval
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   */
  static addClusterBoundMeasurementsToSeries(context: TestApiContext, id: string, dates: C3.Array<DateTime | null> | null, grain: string, upperValues: C3.Array<number | null> | null, lowerValues: C3.Array<number | null> | null): void;

  /**
   * Remove measurements from series
   * @param context
   * @param id Id of measurement series
   */
  static removeMeasurementsFromSeries(context: TestApiContext, id: string): void;

  /**
   * Helper to create measurement data for fill mode
   * @param typeRef TypeRef of measurement
   * @param parentId Measurement series id
   * @param dates list of start dates
   * @param interval Measurement interval
   * @param values List of measurement values
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   */
  static createMeasurementDataFill(typeRef: Type, parentId: string, dates: C3.Array<DateTime | null> | null, interval: string, values: C3.Array<number | null> | null, unit: string, field?: string | null): C3.Array<any>;

  /**
   * Helper to create measurement data
   * @param typeRef TypeRef of measurement
   * @param parentId Measurement series id
   * @param startDates list of start dates
   * @param endDates list of end dates
   * @param interval Measurement interval
   * @param values List of measurement values
   * @param unit Measurement unit
   * @param field Measurement field (default: quantity)
   */
  static createMeasurementDataExact(typeRef: Type, parentId: string, startDates: C3.Array<DateTime | null> | null, endDates: C3.Array<DateTime | null> | null, values: C3.Array<number | null> | null, unit: string, field?: string | null): C3.Array<any>;

  /**
   * Check if results have errors
   * @param results Timeseries results to test
   * @param expectedValues Expected values
   * @param precision Precision to test at
   */
  static timeseriesResultsErrors(results: Timeseries<any>, expectedValues: C3.Array<ExpectedTestValue | null> | null, precision?: number | null): string | null;

  /**
   * Retrieve Environment Information
   * @return User
   */
  static getCurrentUser(): User | null;

  /**
   * Generates a set of time ranges from a set of boolean values, a start date, and an interval.
   * Each boolean value (0 or 1) corresponds to whether that interval is included in the time range or not.
   * This function is used by the metrics designer's autogenerated tests.
   *
   * @param ![int] booleanValues The boolean values for the ranges
   * @param !datetime start the start date to go from
   * @param !string interval the interval step size from start date
   * @return [TimeRange] the generated time ranges
   */
  static generateDateRanges(booleanValues: C3.Array<number | null> | null, start: DateTime, interval: string): C3.Array<TimeRange | null>;

  /**
   * Compares the results of two timeseries. It compares the values of two arrays, which must be the same length.
   * It uses the precision argument to determine what precision to use.
   *
   * @param ![double] resultValues The values obtained by the test
   * @param ![double] expectedValues The values expected (resultValues will be compared to these)
   * @param precision the precision to use in the comparison. Useful when comparing doubles
   */
  static compareTimeseriesResults(resultValues: C3.Array<number | null> | null, expectedValues: C3.Array<number | null> | null, precision?: number | null): void;

  /**
   * Check if a set of APIs are authorized for the current user.
   *
   * @param allowedActions
   *           The actions by Type that should be allowed.
   * @param deniedActions
   *           The actions by Type that should be denied.
   */
  static checkPermissions(allowedActions?: C3.Map<string | null, C3.Array<string | null>>, deniedActions?: C3.Map<string | null, C3.Array<string | null>>): void;

  /**
   * Check if a set of APIs are authorized for the current user.
   *
   * @param The actions to test by type
   */
  static expectAllowed(context: TestApiContext, typeActions: C3.Map<string | null, C3.Array<string | null>> | null): void;

  /**
   * Check if a set of APIs are not authorized for the current user.
   *
   * @param The actions to test by type
   */
  static expectDenied(context: TestApiContext, typeActions: C3.Map<string | null, C3.Array<string | null>> | null): void;

  /**
   * Validate metrics with associated MetricTestData against their truth data.
   * The filter options are given an 'OR' treatment.
   *
   * @param include - Array of strings containing names of metrics to include.
   * @param startsWith - String that included metrics' names should start with.
   * @param nameInclude - String that should be in included metric's names.
   * @return results of validation
   */
  static validateMetricTestData(include?: C3.Array<string | null>, startsWith?: string | null, nameIncludes?: string | null): number | null;

  /**
   * Setup VanityUrl for current tenant and tag
   *
   * @param context
   *           The context
   * @param obj
   *           The VanityUrl object
   * @return The vanity url string
   */
  static setupVanityUrl(context: TestApiContext, obj?: VanityUrl | null): string | null;

  /**
   * Get vanity url set up with {@link setupVanityUrl}
   *
   * @param context
   *           The context
   * @return   The vanity url string
   */
  static getVanityUrl(context: TestApiContext): string;

  /**
   * Sleep for seconds
   *
   * @param  seconds
   *            seconds to sleep
   */
  static sleepImpl(seconds?: number | null): void;

  /**
   * Given a start timestamp and a timeout, check if it has timed out
   *
   * @param  start
   *            the numeric value represents timestamp
   * @param  seconds
   *            time out value
   * @return boolean value indicates if it has timed out or not
   */
  static hasTimedOut(start?: number | null, seconds?: number | null): boolean;

  static hasTimedOut(start?: number | null, seconds?: number | null): boolean;

  /**
   * @return git branch where test is running
   */
  static branchName(): string | null;

  /**
   * Cleans errors from failed queues. Useful for when tests expect to create data that will cause
   * failed invalidations.
   *
   * @param context
   *           The context.
   * @param queues
   *           The queues from which to clear, or all if null.
   */
  static cleanFailedQueues(context: TestApiContext, queues?: C3.Array<Type | null>): void;

  /**
   * Stub any function using {@link Action.Spy}
   *
   * Note that you cannot spy on Python stayInEngine calls -- calls between actions that claim the same
   * action requirement or where there is a runtime inheritance relationship between the claims. This is
   * because the Action Dispatcher will call the python function directly for stayInEngine calls
   * rather than go through the usual dispatching logic. This significantly reduces the latency of such calls.
   * See {@link understanding-action-engines.c3doc.md Understanding Action Engines} for details.
   */
  static spyOn(context: TestApiContext, typeName: string, actionName: string): TestApiSpy | null;

  /**
   * Set up a spy for fetch calls.  {@link TestApiFetchSpy} provides an {@link Action.Spy} that handles
   * ordering, limits, and offsets.
   *
   * @param context
   *           the TestApi context
   * @param typeName
   *            the name of the type whose fetch action will be mocked
   * @param actionName
   *            the name of the action to mock; normally, it will be 'fetch', but it can be any action
   *            that returns a {@link FetchResult}
   * @param fetchTypeName
   *            the name of the type of objects returned by the action, if it is different from typeName
   *            (which can be the case if the actionName is something other than 'fetch')
   * @param specParameterName
   *            the name of the action parameter that contains the {@link FetchSpec}
   * @param returnArray
   *            if true, the mocked action returns an array of mocked objects instead of a {@link FetchResult}
   * @return the TestApiFetchSpy
   */
  static spyOnFetch(context: TestApiContext, typeName: string, actionName?: string | null, fetchTypeName?: string | null, specParameterName?: string | null, returnArray?: boolean): TestApiFetchSpy | null;

  /**
   * Register all action mocks in the specified group.
   *
   * @param context
   *           the TestApi context
   * @param group
   *           the Action.Spy group to register
   */
  static registerMockGroup(context: TestApiContext, group?: string | null): void;

  static c3Queues(): C3.Array<Type | null>;

  static enableInvalidationQueue(queue?: Type | null, isDebugEnabled?: boolean): void;

  static cleanInvalidationQueue(queue?: Type | null, isDebugEnabled?: boolean): void;

  static removeCreated(context?: TestApiContext | null): string | null;

  static dataTypeRefOfSeries(seriesType?: Type | null): Type | null;

  static reenableQueues(context?: TestApiContext | null): void;

  static dumpPendingAndComputingCounts(queueStats?: InvalidationQueueStats | null): string | null;

  static dumpAllPendingAndComputingCounts(msg?: string | null): string | null;

  static getFailedQueues(): C3.Array<InvalidationQueueStats | null>;

  static getErrorsFromInvalidationQueues(queues?: C3.Array<InvalidationQueueStats | null>): string | null;

  /**
   * Helper function that upserts a test User according to {@link TestApiUserConfig} and track the user in {@link TestApiContext}.
   *
   * @param context
   *           The {@link TestApiContext} that tracks the upserted test User.
   * @param obj
   *            Describes the user that should be upserted.
   * @return upserted user object.
   */
  static upsertTestUserHelper(context?: TestApiContext | null, obj?: TestApiUserConfig | null): User | null;

  /**
   * Helper function to remove all {@link Users} tracked by {@link TestApiContext}.
   * @param context
   *            The {@link TestApiContext} that tracks the upserted test User.
   */
  static removeTestUsers(context?: TestApiContext | null): void;

  static waitForIt(context: TestApiContext, checkEvery: number, timeLimit: number, fn: λSupplier<any>): any;

  static ensureObjIdName(context?: TestApiContext | null, typeName?: string | null, obj?: any, uuidCounter?: number | null): any;

  static isStoredInCassandra(typeRef?: Type | null): boolean;

  static upsertEntityHelper(context?: TestApiContext | null, typeName?: string | null, obj?: any, spec?: any, actionName?: string | null): any;

  static upsertBatchEntityHelper(context?: TestApiContext | null, typeName?: string | null, objs?: C3.Array<any>, spec?: any, actionName?: string | null): C3.Array<string | null>;

  static modifyFields(context?: TestApiContext | null, id: any, add?: boolean, addFieldObjs?: any, rmFields?: C3.Array<string | null>): any;

  static getEndDate(dt?: DateTime | null, interval?: string | null, i?: number | null): DateTime | null;

  static createClusterBoundData(typeRef?: Type | null, parentId?: string | null, dates?: C3.Array<DateTime | null>, interval?: string | null, upperValues?: C3.Array<number | null>, lowerValues?: C3.Array<number | null>): C3.Array<any>;

  static waitForQueues(queues?: C3.Array<Type | null>, failOnError?: boolean, sleepTimeSec?: number | null, totalWaitTimeSec?: number | null, recoverFailedTimes?: number | null): void;
}


interface λSupplier<R> {
  (): R
}
