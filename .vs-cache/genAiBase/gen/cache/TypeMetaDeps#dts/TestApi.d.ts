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
  static createContext(filename?: string, parent?: TestApiContext, queueBlacklist?: Array_Type<Type>): TestApiContext | null;

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
  static setLocale(context: TestApiContext, locale?: string): void;

  /**
   * Remove the objects tracked by context and any matched by teardown filters {@see addExternalTeardownFilter}
   * @param context Context to teardown
   * @param timeLimit in seconds.
   * @param queues
   *           The queues to wait until they are clear (all if null).
   */
  static teardown(context: TestApiContext, timeLimit?: number, queues?: Array_Type<string>): void;

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
  static waitForSetup(context: TestApiContext, queues?: Array_Type<string>, checkInterval?: number = '1', timeout?: number = '30'): void;

  /**
   * Wait for the job given in the argument to complete
   * @param context Context to wait for
   * @param job Job to wait for
   * @param checkInterval How often to poll queues (seconds)
   * @param timeout Maximum time to wait for queues (seconds)
   */
  static waitForJob(context: TestApiContext, job: MapReduce<any, any, any, any> | BatchJob<any, any, any> | Workflow, checkInterval?: number = '1', timeout?: number = '30'): void;

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
  static waitForFunction(lambda: λSupplier<any | null>, errorMessage?: string, checkInterval?: number = '1', timeout?: number = '30'): void;

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
  static addExternalTeardownFilter(context: TestApiContext, filter: string, typeRef: Type, limit?: number): void;

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
  static createEntity(context: TestApiContext, typeName: string, obj?: any, spec?: UpsertSpec): any | null;

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
  static createBatchEntity(context: TestApiContext, typeName: string, objs: Array_Type<any>, spec?: UpsertSpec): Array_Type<string> | null;

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
  static upsertEntity(context: TestApiContext, typeName: string, obj?: any, spec?: UpsertSpec): any | null;

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
  static upsertBatchEntity(context: TestApiContext, typeName: string, objs: Array_Type<any>, spec?: UpsertSpec): Array_Type<string> | null;

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
  static upsertUser(context: TestApiContext, obj?: TestApiUserConfig): User | null;

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
  static upsertBatchUser(context: TestApiContext, objs: Array_Type<TestApiUserConfig>): Array_Type<string> | null;

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
  static mergeEntity(context: TestApiContext, id: string, obj: any, spec?: MergeSpec): any | null;

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
  static mergeBatchEntity(context: TestApiContext, ids: Array_Type<string>, objs: Array_Type<any>, spec?: MergeSpec): Array_Type<string> | null;

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
  static removeEntities(context: TestApiContext, ids?: Array_Type<string>): void;

  /**
   * Remove entites that match a filter and a TypeRef
   * @param context
   * @param filter Remove entities matching this filter
   * @param typeRef Only remove entities of this type
   * @param limit Increase the limit on the number of objects to remove (default: 100)
   *                      This is a safeguard so you don't do something stupid, like ServicePoint.removeAll() on a production system.
   */
  static removeEntitiesByFilter(context: TestApiContext, filterStr: string, typeRef: Type, limit?: number): void;

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
  static addFields(context: TestApiContext, id: any, obj: any): any | null;

  /**
   * Remove fields from a C3 object
   * @param context
   * @param id Identifier (string) or object to add field(s) to
   * @param fields List of fields to remove from object
   * @return modified object
   */
  static removeObjFields(context: TestApiContext, id: any, fields: Array_Type<string>): any | null;

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
  static addMeasurementsToSeriesFill(context: TestApiContext, id: string, dates: Array_Type<DateTime>, values: Array_Type<number>, interval: string, unit: string, field?: string): void;

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
  static addMeasurementsToSeries(context: TestApiContext, id: string, startDates: Array_Type<DateTime>, endDates: Array_Type<DateTime>, values: Array_Type<number>, interval: string, unit: string, field?: string): void;

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
  static addMeasurementsToSeriesInternal(context: TestApiContext, id: string, startDates: Array_Type<DateTime>, endDates: Array_Type<DateTime>, values: Array_Type<number>, interval: string, unit: string, field?: string, fill?: boolean): void;

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
  static addClusterBoundMeasurementsToSeries(context: TestApiContext, id: string, dates: Array_Type<DateTime>, grain: string, upperValues: Array_Type<number>, lowerValues: Array_Type<number>): void;

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
  static createMeasurementDataFill(typeRef: Type, parentId: string, dates: Array_Type<DateTime>, interval: string, values: Array_Type<number>, unit: string, field?: string): Array_Type<any> | null;

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
  static createMeasurementDataExact(typeRef: Type, parentId: string, startDates: Array_Type<DateTime>, endDates: Array_Type<DateTime>, values: Array_Type<number>, unit: string, field?: string): Array_Type<any> | null;

  /**
   * Check if results have errors
   * @param results Timeseries results to test
   * @param expectedValues Expected values
   * @param precision Precision to test at
   */
  static timeseriesResultsErrors(results: Timeseries<any>, expectedValues: Array_Type<ExpectedTestValue>, precision?: number): string | null;

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
  static generateDateRanges(booleanValues: Array_Type<number>, start: DateTime, interval: string): Array_Type<TimeRange> | null;

  /**
   * Compares the results of two timeseries. It compares the values of two arrays, which must be the same length.
   * It uses the precision argument to determine what precision to use.
   *
   * @param ![double] resultValues The values obtained by the test
   * @param ![double] expectedValues The values expected (resultValues will be compared to these)
   * @param precision the precision to use in the comparison. Useful when comparing doubles
   */
  static compareTimeseriesResults(resultValues: Array_Type<number>, expectedValues: Array_Type<number>, precision?: number): void;

  /**
   * Check if a set of APIs are authorized for the current user.
   *
   * @param allowedActions
   *           The actions by Type that should be allowed.
   * @param deniedActions
   *           The actions by Type that should be denied.
   */
  static checkPermissions(allowedActions?: Map_Type<string, Array_Type<string>>, deniedActions?: Map_Type<string, Array_Type<string>>): void;

  /**
   * Check if a set of APIs are authorized for the current user.
   *
   * @param The actions to test by type
   */
  static expectAllowed(context: TestApiContext, typeActions: Map_Type<string, Array_Type<string>>): void;

  /**
   * Check if a set of APIs are not authorized for the current user.
   *
   * @param The actions to test by type
   */
  static expectDenied(context: TestApiContext, typeActions: Map_Type<string, Array_Type<string>>): void;

  /**
   * Validate metrics with associated MetricTestData against their truth data.
   * The filter options are given an 'OR' treatment.
   *
   * @param include - Array of strings containing names of metrics to include.
   * @param startsWith - String that included metrics' names should start with.
   * @param nameInclude - String that should be in included metric's names.
   * @return results of validation
   */
  static validateMetricTestData(include?: Array_Type<string>, startsWith?: string, nameIncludes?: string): number | null;

  /**
   * Setup VanityUrl for current tenant and tag
   *
   * @param context
   *           The context
   * @param obj
   *           The VanityUrl object
   * @return The vanity url string
   */
  static setupVanityUrl(context: TestApiContext, obj?: VanityUrl): string | null;

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
  static sleepImpl(seconds?: number): void;

  /**
   * Given a start timestamp and a timeout, check if it has timed out
   *
   * @param  start
   *            the numeric value represents timestamp
   * @param  seconds
   *            time out value
   * @return boolean value indicates if it has timed out or not
   */
  static hasTimedOut(start?: number, seconds?: number): boolean;

  static hasTimedOut(start?: number, seconds?: number): boolean;

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
  static cleanFailedQueues(context: TestApiContext, queues?: Array_Type<Type>): void;

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
  static spyOnFetch(context: TestApiContext, typeName: string, actionName?: string = '\'fetch\'', fetchTypeName?: string = '\'\'', specParameterName?: string = '\'spec\'', returnArray?: boolean): TestApiFetchSpy | null;

  /**
   * Register all action mocks in the specified group.
   *
   * @param context
   *           the TestApi context
   * @param group
   *           the Action.Spy group to register
   */
  static registerMockGroup(context: TestApiContext, group?: string): void;

  static c3Queues(): Array_Type<Type> | null;

  static enableInvalidationQueue(queue?: Type, isDebugEnabled?: boolean): void;

  static cleanInvalidationQueue(queue?: Type, isDebugEnabled?: boolean): void;

  static removeCreated(context?: TestApiContext): string | null;

  static dataTypeRefOfSeries(seriesType?: Type): Type | null;

  static reenableQueues(context?: TestApiContext): void;

  static dumpPendingAndComputingCounts(queueStats?: InvalidationQueueStats): string | null;

  static dumpAllPendingAndComputingCounts(msg?: string): string | null;

  static getFailedQueues(): Array_Type<InvalidationQueueStats> | null;

  static getErrorsFromInvalidationQueues(queues?: Array_Type<InvalidationQueueStats>): string | null;

  /**
   * Helper function that upserts a test User according to {@link TestApiUserConfig} and track the user in {@link TestApiContext}.
   *
   * @param context
   *           The {@link TestApiContext} that tracks the upserted test User.
   * @param obj
   *            Describes the user that should be upserted.
   * @return upserted user object.
   */
  static upsertTestUserHelper(context?: TestApiContext, obj?: TestApiUserConfig): User | null;

  /**
   * Helper function to remove all {@link Users} tracked by {@link TestApiContext}.
   * @param context
   *            The {@link TestApiContext} that tracks the upserted test User.
   */
  static removeTestUsers(context?: TestApiContext): void;

  static waitForIt(context: TestApiContext, checkEvery: number, timeLimit: number, fn: λSupplier<any | null>): any | null;

  static ensureObjIdName(context?: TestApiContext, typeName?: string, obj?: any, uuidCounter?: number): any | null;

  static isStoredInCassandra(typeRef?: Type): boolean;

  static upsertEntityHelper(context?: TestApiContext, typeName?: string, obj?: any, spec?: any, actionName?: string): any | null;

  static upsertBatchEntityHelper(context?: TestApiContext, typeName?: string, objs?: Array_Type<any>, spec?: any, actionName?: string): Array_Type<string> | null;

  static modifyFields(context?: TestApiContext, id: any, add?: boolean, addFieldObjs?: any, rmFields?: Array_Type<string>): any | null;

  static getEndDate(dt?: DateTime, interval?: string, i?: number): DateTime | null;

  static createClusterBoundData(typeRef?: Type, parentId?: string, dates?: Array_Type<DateTime>, interval?: string, upperValues?: Array_Type<number>, lowerValues?: Array_Type<number>): Array_Type<any> | null;

  static waitForQueues(queues?: Array_Type<Type>, failOnError?: boolean, sleepTimeSec?: number = '1', totalWaitTimeSec?: number = '60', recoverFailedTimes?: number = '0'): void;

  /**
   * Executes Jasmine test cases which check that the given component type can
   * be used in UI Designer.
   *
   * For resolving missing translation test case failures, see the documentation
   * for {@link validateTranslations}.
   *
   * For resolving other metadata issues, check the test failure message for
   * instructions.
   *
   * @param testDescription
   *           A description for the test. This will be passed to Jasmine's
   *           `describe` function.
   * @param componentType
   *           The component type to validate.
   * @param locales
   *           The list of locales that you intend to support in UI Designer.
   */
  static validateUiComponentDesignability(testDescription: string, componentType: Type, locales?: Array_Type<Locale>): void;

  /**
   * Executes a Jasmine test case which checks that all of the given component
   * type's designable fields and the given annotation fields
   * have the required {@link Translation} metadata.
   *
   * Rather than calling this function directly, component developers should
   * use {@link validateUiComponentDesignability}, which wraps this function and
   * also performs other important designability checks.
   *
   * In case of failing test cases, component developers should do the following:
   *
   * 1. Check the test failure message for the list of missing translations,
   *    which includes the field path that requires the translation.
   * 2. For each field path, verify whether the field *should* be designable,
   *    i.e. check the written component specification and ask the appropriate
   *    stakeholder.
   *     - If the field *should* be designable, add a new {@link Translation}
   *       to your package's metadata, using the id that is mentioned in test
   *       failure message. The {@link Translation#locale} and
   *       {@link Translation#key} must be derived from this
   *       {@link Translation#id}.
   *     - If the field *should not* be designable, then mark the field as
   *       private.
   *
   * @param componentType
   *           The component type to validate.
   * @param locales
   *           The list of locales that you intend to support in UI Designer.
   */
  static validateTranslations(componentType: Type, locales?: Array_Type<Locale>): void;

  /**
   * Returns all the missing translations
   *
   * @param missingTranslations
   *           the TestApi context
   * @return the ids of the missing translations
   */
  static getMissingTranslationIds(missingTranslations?: Array_Type<any>): void;

  /**
   * Sets up the VanityUrl defaultContent to point to the application's namespace index.html
   * @param context
   *           the TestApi context
   * @param namespace
   *            the namepace of the uiInfrastructure based application
   * @param obj
   *           The VanityUrl object
   * @return The vanity url string
   */
  static setupUiInfrastructureBasedVanityUrl(context: TestApiContext, obj?: VanityUrl, namespace?: string = '\'c3\''): VanityUrl | null;

  /**
   * Checks that the provided array of {@link Genai.SourceFile.Metadata.Tag} contains IDs that match those in the provided array of tag IDs.
   */
  static checkTags(tags: Array_Type<Genai.SourceFile.Metadata.Tag>, expectedTagLabels: Array_Type<string>): void;

  /**
   * Common setup for tests with MSS
   */
  static testQueryOrchestratorWithMss(filename: string, mssTestObj: any): void;

  /**
   * Sets setAwsS3BucketCreds when used in Jarvis.
   * @param buckets
   *           The name of the buckets for which to set the credentials.
   */
  static setAwsS3BucketCreds(buckets: Array_Type<string>): void;

  /**
   * Sets the {@link Genai.Llm.MockLlmConfig#mode} to 'playback' when called in Jarvis. No-op otherwise.
   * Returns the previous value of the config mode.
   */
  static enableMockLlmPlaybackIfInJarvis(): string;

  /**
   * Sets translator config, creates source files from test cases, and chunks them.
   * @param ctx
   *   The context to use for upserting source files
   * @param translatorTypeName
   *   The translator to use during chunking
   * @param testCases
   *   Creates source files from file paths on test cases
   */
  static setupChunkingTranslationTest(ctx: TestApiContext, translatorTypeName: string, testCases: any): Array_Type<string> | null;

  /**
   * Checks that the provided {@link Genai.SourceFile}s each have a history that is equal to the
   * statuses in the order they are provided
   */
  static checkSrcFileHistory(srcFiles: Array_Type<Genai.SourceFile>, expectedHistoryValues: Array_Type<string>): void;

  /**
   * Checks whether two {@link Genai.StructuredQuery.Spec}s are logically the same.
   * @param expectedStructuredQuerySpec
   *           The expected structured query spec.
   * @param actualStructuredQuerySpec
   *           The actual structured query spec.
   * @return whether the two structured query specs are logically the same
   */
  static structuredQuerySpecsAreSame(expectedStructuredQuerySpec: Genai.StructuredQuery.Spec, actualStructuredQuerySpec: Genai.StructuredQuery.Spec): boolean;

  /**
   * Check the Genai.Query.Result.rationale, passages, and rationaleSources fields
   * @param result
   *           The result to check.
   * @param allowedRationaleContent
   *           If provided, will check that the result's first rationale source contains at least one of the strings
   * @param expectedRationaleSourceFileNames
   *           If provided, will check that at least one of the expected source files was used for the rationale
   */
  static checkRationale(result: Genai.Query.Result, allowedRationaleContent?: Array_Type<string>, expectedRationaleSourceFileNames?: Array_Type<string>): void;

  /**
   * Check the results of an index* call
   * If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
   */
  static checkIndexResult(retriever: Genai.Retriever, expectedPassageCount: number, objList: ObjList<any>, expectedObjCount: number, expectedErrorCount: number, expectedSourceFileCount?: number, doNotUseExpect?: boolean): Array_Type<string> | null;

  /**
   * Utility function used by test_GenaiPrivilegedAction.
   */
  static testCallToSetupOpenAiCredentials(): void;

  /**
   * Sets OpenAiApiKey when used in Jarvis. Will throw exception if key not set through static console for other apps.
   */
  static setOpenAiApiKey(): void;

  /**
   * Checks the similaritySearch results.
   * If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
   */
  static checkSearchability(retriever: Genai.Retriever, searchableQueries: Array_Type<any>, unsearchableQueries?: Array_Type<any>, doNotUseExpect?: boolean): Array_Type<string> | null;

  /**
   * Get the `retrieved_docs` from a similarity search using MMR
   * @param relevanceToRedundancyRatio
   *   The ratio
   */
  static getRetrievedDocsFromMMRTest(relevanceToRedundancyRatio: number): Array_Type<Genai.Retriever.SimilaritySearchResult> | null;

  /**
   * Validates the chunked passages for a {@link Genai.SourceFile}.
   * @param sourceFile
   *        The source file that was chunked
   * @param passages
   *        The passages produced by chunking
   * @param expected
   *        The expected results
   */
  static checkChunking(sourceFile: Genai.SourceFile, passages: Array_Type<Genai.SourcePassage>, expected: Genai.ExpectedChunkingResult): void;

  /**
   * Sets the Bing Search key when used in Jarvis. Will throw exception if the key is not set through static console for other apps.
   */
  static setBingSearchKey(): void;

  /**
   * Creates {@link Genai.Query.Result}s and {@link Genai.Query.ChatMessage}s for testing the summary buffer feature.
   */
  static createSeedDataForSummaryBufferTest(ctx?: TestApiContext): void;

  /**
   * Creates {@link Genai.Query.Result}s and {@link Genai.Query.ChatMessage}s for testing the summary feature.
   */
  static createSeedDataForSummaryTest(ctx?: TestApiContext): void;

  /**
   * Sets up the QO toolkit with structured db agent initialized with readiness data model
   */
  static setupStructuredDbAgentTest(): void;

  /**
   * Returns whether the given test should only run in nightly builds.
   * This is true only if all of the following are true:
   *    1. This is being run in Jarvis
   *    2. The branchGroup 'allowSkippingTests' config is set to true
   *    3. The testName is in genai/genAiBase/resource/jarvisTestsToRunInNightly.txt
   */
  static runTestInNightly(testName: string): boolean;

  /**
   * Creates files and populates them.
   * @param urlPath
   *           Directory to store files.
   * @param numFiles
   *           Num of files to create.
   * @param numLines
   *           Num of lines to populate in the file.
   */
  static createFilesAndPopulate(urlPath: string, numFiles: number, numLines?: number): Array_Type<File> | null;

  /**
   * Checks {@link Genai.UnstructuredQuery.Engine.ModelConfig#generateText} returns a valid output for a given llm config.
   *
   * @param configName
   *           The name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig} to use.
   */
  static checkGuidance(configName: string): void;

  /**
   * Sets GCP credentials when used in Jarvis. Will throw exception if key not set through static console for other apps.
   */
  static setGcpKey(): void;

  /**
   * Teardown the query result pairs linked to the `mergedQueryResultPairs` field of the test setup object
   * generated by `setUpQueryOrchestratorTest`.
   *
   * @param queryResultPairs
   *    Object containing the ids of the {@link Genai.Query.Result}s created for the query result pairs and the
   *    {@link Genai.FewShotExample.QueryResultPair} to remove
   */
  static tearDownQueryResultPairs(queryResultPairs?: any): void;

  /**
   * Install the Python runtimes.
   *
   * Each CondaLibraryManager#installRuntime call is dispatched in a Jasmine `it` block,
   * so we can see in the Jarvis UI how long each takes.
   *
   * This will install the `-server-py4j` Py.Runtime of each.
   *
   * @param runtimes
   *    The runtimes to install, if overriding the default list.
   */
  static installRuntimes(runtimes?: Array_Type<ImplLanguage.Runtime>): void;

  /**
   * Check Genai.Query.Result.engineLog for ReaEngine queries
   * @param result
   *           The result to check.
   */
  static checkReaEngineLog(result: Genai.Query.Result): void;

  /**
   * Tears down SourceFiles and SourceCollections needed for Retriever tests.
   */
  static teardownRetrieverTestSources(ctx: TestApiContext, testConfig: Genai.Retriever.TestConfig): void;

  /**
   * Upserts the wind turbine data
   */
  static upsertWindTurbineData(): void;

  /**
   * Resets config and removes test artifacts created by TestApi#setupStructuredDbAgentTest
   */
  static teardownStructuredDbAgentTest(): void;

  /**
   * Sets the values for the {@link Genai.Retriever.Elser.Config}
   */
  static setElasticKey(): void;

  /**
   * Chunks the source file.
   * @param sourceFile
   *   The source file to chunk.
   * @param multimodalChunkerTypeName
   *    If testing a multimodal chunker other than Genai.SourceFile.Chunker.MultimodalPdf,
   *    the name of the chunker type.
   */
  static getChunkedPassages(sourceFile: Genai.SourceFile, multimodalChunkerTypeName?: string): Genai.SourceFileChunkerResult | null;

  /**
   * Configures specified tool as default tool in UI.
   *
   * @param toolId
   *           The id of the {@link Genai.Agent.Tool} to configure as default.
   */
  static configureDefaultTool(toolId: string): void;

  /**
   * If {@link Genai.Llm.MockLlmConfig#mode} is not off, sets {@link Genai.Llm.MockLlmConfig#callLogFilePath} to the path
   * given by {@link Genai.Llm.MockLlmConfig#filePathForTest}.
   * By default, when mode is set to 'record', this call will truncate the file in
   * {@link Genai.Llm.MockLlmConfig#filePathForTest}
   *
   * @param doNotTruncateCallLog
   *            For when we want to preserve text already written to the call log, do not truncate any existing file.
   */
  static setMockLlmConfigPath(filename: string, doNotTruncateCallLog?: boolean): void;

  /**
   * Used to check if test is running in jarvis
   */
  static isRunningInJarvis(): boolean;

  /**
   * Teardown for tools and configs for QO tests.
   * The input `setUpTestObj` is the object returned from `setUpQueryOrchestratorTest`.
   */
  static tearDownQueryOrchestratorTest(setUpTestObj: any): void;

  /**
   * Adds a {@link Genai.SourceFile.Metadata.Tag} with the specified tagLabel to the {@link Genai.SourceFile},
   * then returns a list of all tags associated with the {@link Genai.SourceFile sourceFile}.
   * Additonally, checks that the added tag is persisted.
   * @param sourceFile
   *        The {@link Genai.SourceFile source} to add the specified tag to.
   * @param tagLabel
   *        The text of the {@link Genai.SourceFile.Metadata.Tag} to be added.
   */
  static addTagAndReturnTagList(sourceFile: Genai.SourceFile, tagLabel: string): Array_Type<Genai.SourceFile.Metadata.Tag>;

  /**
   * Checks the parts of a QueryOrchestrator vizualizations
   * @param viz
   *       {@link GenAiVisualizationBase}
   * @param checkForToolId
   *       If true does not check if the {@link GenAiVisualizationBase#toolId} exists
   */
  static checkVisualization(viz?: GenAiVisualizationBase, checkForToolId?: boolean): void;

  /**
   * Ensures that the default project and agent are created. These entities are seeded by default in the
   * app.
   */
  static ensureDefaultProjectExists(): void;

  /**
   * Removes the provided collection and all downstream entities: {@link Genai.SourceFile}s,
   * {@link Genai.SourcePassage}s, {@link Genai.Query.Result}s, {@link Genai.Query.ResultToPassageRelation}s,
   * {@link Genai.Query.ResultToSourceFileRelation}s, and {@link Genai.Query.ChatMessage}s. Also deletes all associated
   * {@link File}s (though the original source files can be preserved if indicated).
   *
   * NOTE: Any associated {@link Genai.Retriever}s will not be cleaned up since they are not directly tied to a specific
   *       collection.
   *
   * @param collection
   *           The source collection to clean up
   * @param preserveCollectionRoot
   *           Whether to preserve or delete files in root url of source collection
   * @param preserveCollectionEntity
   *           Whether to preserve or remove source collection record in db
   */
  static cleanUpCollection(collection: Genai.SourceCollection, preserveCollectionRoot?: boolean, preserveCollectionEntity?: boolean): void;

  /**
   * Check the Genai.Retriever.SimilaritySearchResult.
   * @param actualResult
   *   The result to check.
   * @param expectedPassage
   *   The expected passage.
   * @param expectedPassageIdInfix
   *   The expected passage id infix.
   * @param expectedRank
   *   The expected rank.
   */
  static checkSimilaritySearchResult(actualResult: Genai.Retriever.SimilaritySearchResult, expectedPassage: Genai.SourcePassage, expectedPassageIdInfix: string, expectedRank?: number): void;

  /**
   * Sets Azure content moderation key when used in Jarvis. Will throw exception if key not set through static console for other apps.
   */
  static setAzureContentModerationKey(): void;

  /**
   * Helper function to test if the result is stale
   */
  static checkStaleResult(result: Genai.Query.Result, testObj: any): void;

  /**
   * Check the retrieved documents in the result. This function is only compatible with unstructured data
   * as it checks the chain results in engine log, a field present when retrieving unstructured data.
   * @param result
   *           The result to check.
   * @param expectedAnswers
   *           The expected answers to check against the retrieved documents.
   */
  static checkRetrievedDocs(result: Genai.Query.Result, expectedAnswers: Array_Type<string>, context?: string = '\'-- No Context --\''): void;

  /**
   * Ensure the index zip file exists for the specified retriever
   *
   * @param retrieverName
   *           The name of the retriever
   */
  static checkIndexZip(retrieverName: string): void;

  /**
   * Sets Vllm endpoint when used in Jarvis. Will throw exception if key not set through static console for other apps.
   */
  static setVllmEndpoint(): void;

  /**
   * Sets the AWS Bedrock keys when used in Jarvis. Will throw exception if the keys are not set through static console for other apps.
   */
  static setAwsBedrockKeys(): void;

  /**
   * Checks if the current App is configured to have a GPU available.
   *
   * @param runtime
   *           The runtime to initialize if GPUs are available.
   * @return the CUDA current device number, or '-1' if none is available
   */
  static gpuDevice(runtime: Py.Runtime): string;

  /**
   * Checks whether chunked content matches expected by looking at content of first/last passage and length of passages.
   * @param sourceFileId
   *   The ID of the source file to validate
   * @param testCase
   *   Test case containing expected min num passages, first passage content., and last passage content
   */
  static runChunkingTranslationTest(sourceFileId: string, testCase: any): void;

  /**
   * Chunks the source file.
   * @param filename
   *    The filename for which the test is being run.
   * @param testConfig
   *    If testing a multimodal chunker other than {@link Genai.SourceFile.Chunker.MultimodalPdf},
   *    the details of the chunker and expectations.
   */
  static testMultimodalChunking(filename: string, testConfig?: any): void;

  /**
   * Removes the wind turbine data
   */
  static removeWindTurbineData(): void;

  /**
   * Upserts and returns a readonly {@link Genai.Project}.
   */
  static upsertReadOnlyProject(ctx: TestApiContext): Genai.Project | null;

  /**
   * Sets up SourceFiles and SourceCollections needed for Retriever tests.
   */
  static setupRetrieverTestSources(ctx: TestApiContext, filename: string, leavePy4jProcessesRunning?: boolean): Genai.Retriever.TestConfig | null;

  /**
   * Check the Genai.Query.Result.rationaleSources field
   * @param result
   *           The result to check.
   * @param allowedRationaleContent
   *           If provided, will check that the result's first rationale source contains at least one of the strings
   * @param expectedRationaleSourceFileNames
   *           If provided, will check that at least one of the expected source files was used for the rationale
   */
  static checkRationaleSources(result: Genai.Query.Result, allowedRationaleContent?: Array_Type<string>, expectedRationaleSourceFileNames?: Array_Type<string>): void;

  /**
   * Upserts the readiness test data model graph
   */
  static upsertReadinessDataModelGraph(): Genai.StructuredData.DataModelGraph;

  /**
   * Calls `queryFunc` on the provided engine and then logs and returns the result. This is simply a convenience
   * function to avoid having the same logging in every test.
   *
   * @param queryFunc
   *           The function to call on the engine. Must be one of 'query' or 'chatQuery'.
   * @param message
   *           The message to pass as a query.
   * @param queryEngine
   *           The engine to call the query on.
   * @param originalAiResult
   *           The original AI result to pass to the query.
   * @param chatHistory
   *           The chat history to pass to the query.
   * @param filtersToAdd
   *           The filters to add to the query.
   * @param streamResponse
   *           Whether to stream the response.
   * @param detectedLanguage
   *         The detected language of the message.
   */
  static makeAndLogQuery(queryFunc: string, message: string, queryEngine?: Genai.UnstructuredQuery.Engine, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, filtersToAdd?: Map_Type<string, Array_Type<Genai.Query.SourceFilter>>, streamResponse?: boolean, detectedLanguage?: string): Genai.Query.Result;

  /**
   * Download the specified Huggingface models to the local directory used by
   * Huggingface. This avoids Huggingface downloading directly from the public repository,
   * which can be slow and unreliable.
   *
   * @param modelNames
   *    The modelNames to install in addition to the defaults.
   * @param skipDefaultModels
   *    If true, will only install the models in `modelNames` and not the default models.
   * @return the directories created for the models
   */
  static installHuggingfaceModels(modelNames?: Array_Type<string>, skipDefaultModels?: boolean): Array_Type<string> | null;

  /**
   * Used to simulate situations where not all Python libraries have been correctly installed
   */
  static generateImportError(): void;

  /**
   * Upserts the default eval spec correction prompt
   */
  static upsertDefaultEvalSpecCorrectionPrompt(): Genai.Prompt;

  /**
   * Default {@link Genai.Retriever#indexPassages} spy.
   * @param ctx
   *           The context to use for the spy.
   * @param retrieverTypeName
   *           The name of the retriever type to use.
   */
  static indexPassagesSpy(ctx: TestApiContext, retrieverTypeName?: string = '\'Genai.Retriever.Dense\''): TestApiSpy;

  /**
   * Configures 'WebSearchTool_default'  web search tool with Bing search engine to search against C3.ai and microsoft websites
   */
  static setupBingWebSearchTool(): Genai.Agent.Tool.WebSearch;

  /**
   * Test util for inline translation related data constructions,
   * so that long values are not spread out into multi-lines of code.
   *
   * @param englishValue
   *           The English version string value.
   * @param userLanguageValue
   *           The original user language string value.
   *
   * Returns the {@link Genai.Translation.Values}
   */
  static templateTranslateVals(englishValue?: string, userLanguageValue?: string): Genai.Translation.Values | null;

  /**
   * Cleans up the data of {@link Genai.Retriever.PgVector} for the specified dataset.
   * @param dataset
   *           The dataset to clean up.
   */
  static cleanPgVectorRetrieverForTestDataset(dataset: string): void;

  /**
   * Finds the differences between two dictionaries.
   * @return The differences between the dictionaries.
   */
  static findDictionaryDifferences(obj1?: any, obj1?: any, path?: string): Array_Type<string> | null;

  /**
   * Upserts the default eval metrics spec generation prompt
   */
  static upsertDefaultTableAnsweringPrompt(): Genai.Prompt;

  /**
   * Upserts a default and a tutorial {@link Genai.Project} and returns them in an array.
   */
  static upsertDefaultAndTutorialProjects(ctx: TestApiContext): Array_Type<Genai.Project> | null;

  /**
   * Checks that the citations/references in the provided string are 'correct'.
   * 1. It should have at least one reference
   * 2. The references should be in the format [<hashSymbol>1], [<hashSymbol>2], etc. and should appear in order
   * 3. There are no 'unreplaced' references like '[UUID<hashSymbol>52]
   * 4. There are no missing references, e.g. "(from [<hashSymbol>1], )" with the missing ref after the comma
   * <hashsymbol> instead of the actual symbol is used in the example to avoid being flagged as a field type by code analysis.
   * @param stringToCheck
   *           The string to check for references
   * @return the number of references found in the string
   */
  static checkStringReferences(stringToCheck: string): number | null;

  /**
   * Create the content of a single text file
   */
  static makeTxtFileContent(fileName: string, collectionName: string, numLines: number): string;

  /**
   * Upserts the default eval spec generation prompt
   */
  static upsertDefaultEvalSpecGenerationPrompt(): Genai.Prompt;

  /**
   * Sets up few shot examples for suggested queries for a query orchestrator test.  These examples are attached
   * to the setup test object for easier teardown in #tearDownQueryOrchestratorTest.
   * @param queryResultPairs
   *    The query result pairs to set up.  Each pair is a list containing two lists: the first element represents the
   *    query and the second element represents the result. Example: [["query", "result"], ["followUp", "resultFollowUp"]]
   * @param project
   *    The project the few shot examples should be linked to
   * @return Object containing the ids of the {@link Genai.Query.Result}s created for the query result pairs and
   * the {@link Genai.FewShotExample.QueryResultPair} created
   */
  static setUpQueryResultPairs(queryResultPairs?: Array_Type<Array_Type<Array_Type<string>>>, project?: Genai.Project): any | null;

  /**
   * Tears down a {@link Genai.Retriever.Dense}, {@link Genai.SourceFile}s, and {@link Genai.SourceCollection}s
   * set up by #setupTestRetriever.
   */
  static teardownTestRetriever(ctx: TestApiContext, testConfig: Genai.Retriever.TestConfig): void;

  /**
   * Clears any tool configs set by #configureDefaultTool or #configureDefaultToolInMSS
   */
  static clearToolCfgs(): void;

  /**
   * Sets up a {@link Genai.Retriever.Dense}, {@link Genai.SourceFile}s, and {@link Genai.SourceCollection}s
   * needed for tests that use a retriever.
   */
  static setupTestRetriever(ctx: TestApiContext, filename: string): Genai.Retriever.TestConfig | null;

  /**
   * Sets the API key for you.com search when used in Jarvis. Will throw exception if the key is not set through static console for other apps.
   * @param configKey
   *       The id of the {@link Genai.Agent.Tool.WebSearch.Config} to set the API key on.
   */
  static setYouSearchKey(configKey: string): void;

  /**
   * Sets the config for {@link ModelInference} service
   *  @param appId
   *       If appId is passed the service app will be set to that. Otherwise it would be set to the default "gkev8genai-centralmodelinference-service"
   *  @param serviceAppUrl
   *       Sets serviceAppUrl in model inference config. If no value is passed, defaults to {@link https://gkev8genai.c3-e.com/centralmis/service}
   */
  static setMisConfig(appId?: string, serviceAppUrl?: string): void;

  /**
   * Upserts the wind turbine data model graph
   */
  static upsertWindTurbineDataModelGraph(): Genai.StructuredData.DataModelGraph;

  /**
   * Returns (creating if necessary) the {@link Genai.Retriever.PgVector} for the specified dataset.
   */
  static pgVectorRetrieverForTestDataset(dataset: string): Genai.Retriever.PgVector;

  /**
   * Removes a specified {@link Genai.SourceFile.Metadata.Tag}, then returns the updated list of tags on that file.
   * Additionally, checks that the removed tag is still persisted.
   * @param sourceFile
   *        The {@link Genai.SourceFile} to remove the specified tag from.
   * @param tagLabel
   *        The ID of the {@link Genai.SourceFile.Metadata.Tag} to be removed.
   * @param expectedBool
   *        If the tag was expected to be successfully removed from the source file.
   */
  static removeTagAndReturnTagList(sourceFile: Genai.SourceFile, tagLabel: string, expectedBool?: boolean): Array_Type<Genai.SourceFile.Metadata.Tag>;

  /**
   * Configures MSS as default tool in UI with only the specified tool in the MSS toolkit.
   *
   * @param toolId
   *           The id of the {@link Genai.Agent.Tool} to configure as default in MSS toolkit.
   */
  static configureDefaultToolInMSS(toolId: string): void;

  /**
   * Asserts that the result's `failed` field is not `true` and adds the result's engineLog to the
   * failure message if `failed` is `true`.
   */
  static checkResultSucceeded(result: Genai.Query.Result): void;

  /**
   * Checks whether the provided spec matches one linked to the given result and `expect`s to find a match.
   * @param result
   *           The result whose sources will be checked.
   * @param expectedStructuredQuerySpec
   *           The expected structured query spec.
   * @param isParentResult
   *           Whether the result is a parent result. If true, {@link Genai.Query.Result#allSources} will be used instead of
   *           {@link Genai.Query.Result#sourceRelations}.
   */
  static checkStructuredResultSource(result: Genai.Query.Result, expectedStructuredQuerySpec: Genai.StructuredQuery.Spec, isParentResult?: boolean): void;

  /**
   * Creates {@link Genai.Agent.Tool.EvalQuery.Config}
   * with name `EvalQuery_default_test`.
   *
   * NOTE: This does actually call the apis to upsert the entities
   */
  static setTestToolConfigs(): void;

  /**
   * Asserts that at least one of `expectedPossibleStrings` is in `actualString`. Useful to help account for
   * non-determinism in model results.
   */
  static checkStringMatches(actualString: string, expectedPossibleStrings: Array_Type<string>, caseSensitive?: boolean, context?: string): void;

  /**
   * Populates the collection with the number of text files specified. Calls #makeTxtFileContent
   * to get the content for each file.
   * @param collection
   *        The collection to populate with {@link Genai.SourceFile}s
   * @param numFiles
   *        The number of files to create
   * @param numLines
   *        The number of lines in each text file. Defaults to 10.
   */
  static populateTxtSrcCollectionRoot(collection: Genai.SourceCollection, numFiles: number, numLines?: number): Array_Type<File>;

  /**
   * Sets Azure credentials when used in Jarvis. Will throw exception if key not set through static console for other apps.
   */
  static setAzureTranslationKey(): void;

  /**
   * Checks the similaritySearch results.
   * @param retriever
   *           The retriever to query
   * @param testQueries
   *           The queries to run
   * @param resultCounts
   *           The expect number of results from each query from the source file specifed
   *           in the 'testQuery' at the same index
   * If doNotUseExpect is true, the function will return a list of failed assertions instead of using `expect`.
   */
  static testSearch(retriever: Genai.Retriever, testQueries: Array_Type<any>, resultCounts: Array_Type<number>, doNotUseExpect?: boolean): Array_Type<string> | null;

  /**
   * Sets the endpoint in vllmKwargs for {@link Genai.UnstructuredQuery.Engine.ModelConfig} for the sawshark model in VLLM.
   */
  static setSawsharkVllmEndpoint(): void;

  /**
   * Common setup for tools and configs for QO tests
   */
  static setUpQueryOrchestratorTest(filename: string, testObjs?: any): any;

  /**
   * Check interim statuses of a result
   * @param statusHistory
   *          The status history of the result
   * @param expectedStatuses
   *          The expected interim statuses
   */
  static checkInterimStatuses(statusHistory?: Array_Type<Genai.Query.Result.InterimStatusHistory>, expectedStatuses?: Array_Type<string>): void;

  /**
   * Split the output into types of passages
   */
  static filterOutput(output: Genai.SourceFileChunkerResult): Array_Type<Array_Type<Genai.SourcePassage>> | null;
}


interface λSupplier<R> {
  (): R
}
