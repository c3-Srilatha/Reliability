// TypeScript definitions for the C3 type MicrobenchSpec

/**
 * Configuration options for running a performance-centric unit test, controlling how the test is executed. All have
 * defaults for ease of use. {@link Microbench} will force the test lambda to run repeatedly until the thresholds are met.
 * By doing this, if the action being tested is an extremely short one, the lambda can run long enough to avoid swamping
 * the operation being tested.
 *
 * Note that tests can fail if regressions are detected under certain circumstances:
 *  - epic branches
 *  - where there are sufficient history runs in the base branch (#safeBaseBranch, #maxHistoryBuilds)
 *  - where there are sufficient current runs in the current branch (#currentBranch, #minCurrentBuilds)
 *  - where the failures exceed specified thresholds (#failingStdDev, #failingPctChange)
 *  - where the history values show a relatively low dispersion (#failingSigmaFrac)
 *
 * @see Microbench
 *
 * @remarks this represents a value passed to a method that expects an instance of MicrobenchSpec
 */
declare interface IMicrobenchSpec {

  /**
   * If not specified directly, this name is used for the test. Note that a name is necessary to record the test
   * in the PerfMetric database and for printing results.
   */
  name?: string | null;

  /**
   * The outermost testing loop with results printed for each run. If there are more than 2 runs, the best is also
   * printed.
   */
  numRuns: number;

  /**
   * The target iteration(s) that defines the KPI together with other factors, e.g. 1000 means measuring an action
   * running 1000 times.
   *
   * Note that this many times of iteration is independent from the actual iterations when the action is being measured,
   * and the testing framework* will scale the result to this target iteration. As a special case, tuning #runTime to 0
   * can guarantee that the testing framework will only execute the action once.
   */
  numIterations: number;

  /**
   * The minimum desired time per run in seconds.
   */
  runTime?: number | null;

  /**
   * The maximum desired execution time, in seconds, per test (including the overhead of measuring performance,
   * calculating results, etc). If running the test #numRuns times is longer than this time, the test ends immediately
   * after the run that times out and skips remaining runs.
   */
  maxTime?: number | null;

  /**
   * If true, do not cap the total execution time with #maxTime. Instead, only keep the restriction of running the
   * lambda for at least #runTime time.
   */
  doNotCapMaxTime?: boolean;

  /**
   * The historical threshold measures for these tests. If the measurements taken all beat the measurements here, fewer
   * runs are executed to speed up the overall time. The key is the test name being run and the value is the summary
   * of the history for that test.
   */
  resultsToBeat?: C3.Map<string | null, MicrobenchResult | null> | {[key: string | null]: IMicrobenchResult | null};

  /**
   * If true, do not print results to standard output.
   */
  doNotPrint?: boolean;

  /**
   * If true, record only the number of objects allocated. When enabled, elapsed time is theoretically greater than
   * actual due to the overhead of recording object allocation count for every single java.lang.Object allocation.
   *
   * @see MicrobenchResult#memAllocations
   * @see MicrobenchResult#allocatedMem
   */
  measureMemAllocations?: boolean;

  /**
   * If true, measure only the intrinsic size of the value returned from the test (if any), not traversing references
   * it has to other objects.
   *
   * @see MicrobenchResult#retainedMem
   * @see #measureMemory
   */
  measureRetainedShallow?: boolean;

  /**
   * If true, measure the full size of memory used by the value returned from the test (if any). This will be the deep
   * size unless #measureRetainedShallow is true.
   *
   * @see MicrobenchResult#retainedMem
   * @see #measureRetainedShallow
   */
  measureMemory?: boolean;

  /**
   * If true, track garbage collection.
   *
   * @see MicrobenchResult#gcTime
   * @see MicrobenchResult#gcOldGen
   */
  measureGC?: boolean;

  /**
   * If true, do not log results to performance metrics DB.
   *
   * @link PerfMetric
   */
  doNotReport?: boolean;

  /**
   * If true, do not generate html report nor write the report to local file system
   */
  doNotGenerateHtmlReport?: boolean;

  /**
   * If true, fork a new process for each test run.
   */
  fork?: boolean;

  /**
   * Lambda called with the result for each test run, immediately after it completes.
   *
   * @param n 1-based index of test run
   * @param of total number of test runs
   * @param result raw results of a single run
   */
  runCallback?: λTriConsumer<number, number, MicrobenchResult> | null;

  /**
   * If provided will be passed to {@link MicrobenchResultSet#loadTestHistory}.
   *
   * @see MicrobenchResultSet.LoadHistorySpec
   */
  loadHistorySpec?: IMicrobenchResultSet.LoadHistorySpec | null;

  /**
   * Provide a list of measures to assert on.
   */
  assertOn?: C3.Array<string | null> | Array<string | null>;

  /**
   * The minimum number of builds from the base branch considered to perform regression check.
   */
  minHistoryBuilds: number;

  /**
   * The maximum number of builds from the base branch considered as "history" samples for evaluating regressions.
   * This is large, but not huge, to get a reasonable number of samples without reaching too far into the dim past.
   */
  maxHistoryBuilds: number;

  /**
   * The minimum number of runs of this test in the current branch to perform regression check.
   *
   * @see #safeBaseBranch
   */
  minCurrentBuilds: number;

  /**
   * The maximum number of builds from the current branch considered as "current" samples for evaluating regressions.
   * This is intentionally small so fixed regressions expire quickly.
   */
  maxCurrentBuilds: number;

  /**
   * Threshold standard deviations to attach warning on build report. This _and_ #warningPctChange must both be
   * exceeded (or null).
   */
  warningStdDev?: number | null;

  /**
   * Threshold percentage change from the average to attach warning on build report. This _and_ #warningStdDev
   * must both be exceeded (or null).
   */
  warningPctChange?: number | null;

  /**
   * Threshold standard deviations to perform regression check. This _and_ #failingPctChange must both be exceeded
   * (or null).
   */
  failingStdDev?: number | null;

  /**
   * Threshold percentage changes from the average to perform regression check. This _and_ #failingStdDev must both be
   * exceeded (or null).
   *
   * If any of these are exceeded, the test will fail, and the message will include a token with the highest one
   * exceeded, such as "(>66%)".
   */
  failingPctRanges?: C3.Array<number> | Array<number>;

  /**
   * The maximum ratio of one standard deviation to the average for the history values to perform regression check.
   * If null, the noisyness of the history data is ignored.
   */
  failingSigmaFrac?: number | null;

  /**
   * For KPI test comparisons, the base branch may be specified explicitly. Otherwise, it is guessed from the current
   * branch name. Other than certain well-known patterns, this guess will be "develop".
   *
   * @see #safeBaseBranch
   */
  baseBranch?: string | null;

  /**
   * Normally, regressions only cause tests to fail in epic branches. This flag can be used to enable regression
   * failures in any branch.
   */
  forceRegressionCheck?: boolean;
}


interface λTriConsumer<T, U, V> {
  (t: T, u: U, v: V): void
}
/**
 * Configuration options for running a performance-centric unit test, controlling how the test is executed. All have
 * defaults for ease of use. {@link Microbench} will force the test lambda to run repeatedly until the thresholds are met.
 * By doing this, if the action being tested is an extremely short one, the lambda can run long enough to avoid swamping
 * the operation being tested.
 *
 * Note that tests can fail if regressions are detected under certain circumstances:
 *  - epic branches
 *  - where there are sufficient history runs in the base branch (#safeBaseBranch, #maxHistoryBuilds)
 *  - where there are sufficient current runs in the current branch (#currentBranch, #minCurrentBuilds)
 *  - where the failures exceed specified thresholds (#failingStdDev, #failingPctChange)
 *  - where the history values show a relatively low dispersion (#failingSigmaFrac)
 *
 * @see Microbench
 *
 * @remarks this represents a made instance of MicrobenchSpec
 */
declare class MicrobenchSpec extends Obj {

  /**
   * If not specified directly, this name is used for the test. Note that a name is necessary to record the test
   * in the PerfMetric database and for printing results.
   */
  readonly name?: string | null;
  withName(name: string | null): MicrobenchSpec;

  /**
   * The outermost testing loop with results printed for each run. If there are more than 2 runs, the best is also
   * printed.
   */
  readonly numRuns: number;
  withNumRuns(numRuns: number): MicrobenchSpec;

  /**
   * The target iteration(s) that defines the KPI together with other factors, e.g. 1000 means measuring an action
   * running 1000 times.
   *
   * Note that this many times of iteration is independent from the actual iterations when the action is being measured,
   * and the testing framework* will scale the result to this target iteration. As a special case, tuning #runTime to 0
   * can guarantee that the testing framework will only execute the action once.
   */
  readonly numIterations: number;
  withNumIterations(numIterations: number): MicrobenchSpec;

  /**
   * The minimum desired time per run in seconds.
   */
  readonly runTime?: number | null;
  withRunTime(runTime: number | null): MicrobenchSpec;

  /**
   * The maximum desired execution time, in seconds, per test (including the overhead of measuring performance,
   * calculating results, etc). If running the test #numRuns times is longer than this time, the test ends immediately
   * after the run that times out and skips remaining runs.
   */
  readonly maxTime?: number | null;
  withMaxTime(maxTime: number | null): MicrobenchSpec;

  /**
   * If true, do not cap the total execution time with #maxTime. Instead, only keep the restriction of running the
   * lambda for at least #runTime time.
   */
  readonly doNotCapMaxTime?: boolean;
  withDoNotCapMaxTime(doNotCapMaxTime: boolean): MicrobenchSpec;

  /**
   * The historical threshold measures for these tests. If the measurements taken all beat the measurements here, fewer
   * runs are executed to speed up the overall time. The key is the test name being run and the value is the summary
   * of the history for that test.
   */
  readonly resultsToBeat?: C3.Map<string | null, MicrobenchResult | null>;
  withResultsToBeat(resultsToBeat: C3.Map<string | null, MicrobenchResult | null> | {[key: string | null]: IMicrobenchResult | null}): MicrobenchSpec;

  /**
   * If true, do not print results to standard output.
   */
  readonly doNotPrint?: boolean;
  withDoNotPrint(doNotPrint: boolean): MicrobenchSpec;

  /**
   * If true, record only the number of objects allocated. When enabled, elapsed time is theoretically greater than
   * actual due to the overhead of recording object allocation count for every single java.lang.Object allocation.
   *
   * @see MicrobenchResult#memAllocations
   * @see MicrobenchResult#allocatedMem
   */
  readonly measureMemAllocations?: boolean;
  withMeasureMemAllocations(measureMemAllocations: boolean): MicrobenchSpec;

  /**
   * If true, measure only the intrinsic size of the value returned from the test (if any), not traversing references
   * it has to other objects.
   *
   * @see MicrobenchResult#retainedMem
   * @see #measureMemory
   */
  readonly measureRetainedShallow?: boolean;
  withMeasureRetainedShallow(measureRetainedShallow: boolean): MicrobenchSpec;

  /**
   * If true, measure the full size of memory used by the value returned from the test (if any). This will be the deep
   * size unless #measureRetainedShallow is true.
   *
   * @see MicrobenchResult#retainedMem
   * @see #measureRetainedShallow
   */
  readonly measureMemory?: boolean;
  withMeasureMemory(measureMemory: boolean): MicrobenchSpec;

  /**
   * If true, track garbage collection.
   *
   * @see MicrobenchResult#gcTime
   * @see MicrobenchResult#gcOldGen
   */
  readonly measureGC?: boolean;
  withMeasureGC(measureGC: boolean): MicrobenchSpec;

  /**
   * If true, do not log results to performance metrics DB.
   *
   * @link PerfMetric
   */
  readonly doNotReport?: boolean;
  withDoNotReport(doNotReport: boolean): MicrobenchSpec;

  /**
   * If true, do not generate html report nor write the report to local file system
   */
  readonly doNotGenerateHtmlReport?: boolean;
  withDoNotGenerateHtmlReport(doNotGenerateHtmlReport: boolean): MicrobenchSpec;

  /**
   * If true, fork a new process for each test run.
   */
  readonly fork?: boolean;
  withFork(fork: boolean): MicrobenchSpec;

  /**
   * Lambda called with the result for each test run, immediately after it completes.
   *
   * @param n 1-based index of test run
   * @param of total number of test runs
   * @param result raw results of a single run
   */
  readonly runCallback?: λTriConsumer<number, number, MicrobenchResult> | null;
  withRunCallback(runCallback: λTriConsumer<number, number, MicrobenchResult> | null): MicrobenchSpec;

  /**
   * If provided will be passed to {@link MicrobenchResultSet#loadTestHistory}.
   *
   * @see MicrobenchResultSet.LoadHistorySpec
   */
  readonly loadHistorySpec?: MicrobenchResultSet.LoadHistorySpec | null;
  withLoadHistorySpec(loadHistorySpec: IMicrobenchResultSet.LoadHistorySpec | null): MicrobenchSpec;

  /**
   * Provide a list of measures to assert on.
   */
  readonly assertOn?: C3.Array<string | null>;
  withAssertOn(assertOn: C3.Array<string | null> | Array<string | null>): MicrobenchSpec;

  /**
   * The minimum number of builds from the base branch considered to perform regression check.
   */
  readonly minHistoryBuilds: number;
  withMinHistoryBuilds(minHistoryBuilds: number): MicrobenchSpec;

  /**
   * The maximum number of builds from the base branch considered as "history" samples for evaluating regressions.
   * This is large, but not huge, to get a reasonable number of samples without reaching too far into the dim past.
   */
  readonly maxHistoryBuilds: number;
  withMaxHistoryBuilds(maxHistoryBuilds: number): MicrobenchSpec;

  /**
   * The minimum number of runs of this test in the current branch to perform regression check.
   *
   * @see #safeBaseBranch
   */
  readonly minCurrentBuilds: number;
  withMinCurrentBuilds(minCurrentBuilds: number): MicrobenchSpec;

  /**
   * The maximum number of builds from the current branch considered as "current" samples for evaluating regressions.
   * This is intentionally small so fixed regressions expire quickly.
   */
  readonly maxCurrentBuilds: number;
  withMaxCurrentBuilds(maxCurrentBuilds: number): MicrobenchSpec;

  /**
   * Threshold standard deviations to attach warning on build report. This _and_ #warningPctChange must both be
   * exceeded (or null).
   */
  readonly warningStdDev?: number | null;
  withWarningStdDev(warningStdDev: number | null): MicrobenchSpec;

  /**
   * Threshold percentage change from the average to attach warning on build report. This _and_ #warningStdDev
   * must both be exceeded (or null).
   */
  readonly warningPctChange?: number | null;
  withWarningPctChange(warningPctChange: number | null): MicrobenchSpec;

  /**
   * Threshold standard deviations to perform regression check. This _and_ #failingPctChange must both be exceeded
   * (or null).
   */
  readonly failingStdDev?: number | null;
  withFailingStdDev(failingStdDev: number | null): MicrobenchSpec;

  /**
   * Threshold percentage changes from the average to perform regression check. This _and_ #failingStdDev must both be
   * exceeded (or null).
   *
   * If any of these are exceeded, the test will fail, and the message will include a token with the highest one
   * exceeded, such as "(>66%)".
   */
  readonly failingPctRanges?: C3.Array<number>;
  withFailingPctRanges(failingPctRanges: C3.Array<number> | Array<number>): MicrobenchSpec;

  /**
   * The maximum ratio of one standard deviation to the average for the history values to perform regression check.
   * If null, the noisyness of the history data is ignored.
   */
  readonly failingSigmaFrac?: number | null;
  withFailingSigmaFrac(failingSigmaFrac: number | null): MicrobenchSpec;

  /**
   * For KPI test comparisons, the base branch may be specified explicitly. Otherwise, it is guessed from the current
   * branch name. Other than certain well-known patterns, this guess will be "develop".
   *
   * @see #safeBaseBranch
   */
  readonly baseBranch?: string | null;
  withBaseBranch(baseBranch: string | null): MicrobenchSpec;

  /**
   * Normally, regressions only cause tests to fail in epic branches. This flag can be used to enable regression
   * failures in any branch.
   */
  readonly forceRegressionCheck?: boolean;
  withForceRegressionCheck(forceRegressionCheck: boolean): MicrobenchSpec;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): MicrobenchSpec | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): MicrobenchSpec | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): MicrobenchSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MicrobenchSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MicrobenchSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchSpec;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchSpec | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchSpec | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MicrobenchSpec;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchSpec;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MicrobenchSpec;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): MicrobenchSpec;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): MicrobenchSpec;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MicrobenchSpec;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MicrobenchSpec;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): MicrobenchSpec;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): MicrobenchSpec;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): MicrobenchSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MicrobenchSpec;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MicrobenchSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MicrobenchSpec;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MicrobenchSpec;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): MicrobenchSpec;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): MicrobenchSpec;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): MicrobenchSpec;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): MicrobenchSpec;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): MicrobenchSpec;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): MicrobenchSpec;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MicrobenchSpec;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MicrobenchSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MicrobenchSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MicrobenchSpec;

  mergeJson(json: any | null): MicrobenchSpec;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MicrobenchSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MicrobenchSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MicrobenchSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MicrobenchSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MicrobenchSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MicrobenchSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MicrobenchSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MicrobenchSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MicrobenchSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MicrobenchSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MicrobenchSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MicrobenchSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MicrobenchSpec;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MicrobenchSpec;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): MicrobenchSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MicrobenchSpec;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): MicrobenchSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MicrobenchSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MicrobenchSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MicrobenchSpec;

  /**
   * Threshold percentage change from the average to perform regression check. This _and_ #failingStdDev must both be
   * exceeded (or null).
   *
   * Note that this returns the minimum value in #failingPctRanges, or null.
   */
  get failingPctChange(): number | null;

  /**
   * Get the current Git branch name. This should never return null in a development environment nor in a normal
   * CI environment, but will return null in production environments.
   */
  static currentBranch(failIfNone?: boolean): string | null;

  /**
   * Guess the base branch for the current branch. If specified in #baseBranch that is used, otherwise it is guessed
   * based on the current branch:
   *  - _base_: same branch
   *  - epic/…/base: _base_
   *  - release-hotfix/…: `release`
   *  - hotfix/…: `master`
   *  - otherwise `develop`
   *
   * "Base" branches are: `develop`, `release`, `master`.
   *
   * @see #currentBranch
   * @see #isBaseBranch
   */
  safeBaseBranch(): string;

  /**
   * Whether or not this KPI test should fail on regressions (if other criteria are met as well). This is normally true
   * only for epic branches, but may also be forced by setting #forceRegressionCheck.
   */
  shouldRegressionCheck(): boolean;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λTriConsumer<T, U, V> {
  (t: T, u: U, v: V): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
