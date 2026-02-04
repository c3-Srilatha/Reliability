// TypeScript definitions for the C3 type PerformanceTestCase

/**
 * @remarks this represents a value passed to a method that expects an instance of PerformanceTestCase
 */
declare interface IPerformanceTestCase {

  /**
   * The id of this instance.
   */
  id?: string | null;

  /**
   * Test action. This action will be executed in the target cluster as REST request.
   *
   * @see @requestSupplier
   */
  action?: λNullConsumer | null;

  /**
   * Optional test action parameters that will be applied randomly at each iteration.
   *
   * Value should be: [map<string, any>]
   */
  actionArgs?: any | null;

  /**
   * Test request supplier. I.e. action that gets executed in the test driver cluster to compute HttpRequests for target
   * cluster.
   *
   *
   * requestSupplier: MaximGunRequestSupplier schema suffix 'REQ'
   */
  requestSupplier?: λFunction<MaximGunUser | null, C3.Array<HttpRequest | null> | Array<IHttpRequest | null>> | null;

  /**
   * Total count of approximately how many test actions / requests will be executed. Actual count could be bit more then
   * this number but never less then this number.
   */
  count: number;

  /**
   * Max number of concurrent actions at any point in time. Note that if cluster that is driving the test doesn't have
   * available threads MaximGunFire.activeConcurrency could be less then this number.
   *
   * Also it's important to note that even if `#userCount > #concurrency` there could still be concurrent actions
   * running for a given user.
   */
  concurrency: number;

  /**
   * Min and max seconds to wait before executing the first test action for a given test user. This is effectively a
   * ramp up period. If not provided then there will be no delay.
   */
  initialWaitSecs?: IDoublePair | null;

  /**
   * Min and max seconds to wait before executing the next test action for a given test user.  If not provided then
   * there will be no delay.
   */
  waitSecs?: IDoublePair | null;

  /**
   * Number of test users. They will be picked randomly for executing a test action. Number of test run per user will be
   * approximately `#count / #userCount`.
   * NOTE: this option will be ignored iff {@link #uniqueUserPerThread} is true.
   */
  userCount?: number | null;

  /**
   * If true, each concurrent thread will be a unique user. This means that {@link #userCount} will be ignored and
   * presumed to be equal to {@link #concurrency}.
   */
  uniqueUserPerThread?: boolean;

  /**
   * Test user name prefix. Suffix is going to be number in the [1..#userCount] range.
   */
  userPrefix?: string | null;

  /**
   * If set then Basic Authentication header will be generated using this password.
   */
  userBasicAuthPwd?: string | null;

  /**
   * If #userBasicAuthPwd is not set then #userCount and #userPrefix will be ignored and random authentication header
   * will be picked up from this array.
   */
  authHeaders?: C3.Array<string | null> | Array<string | null>;

  /**
   * When true, the fire action will wait for its completion
   */
  synchronous?: boolean;

  /**
   * When true, record the successful responses obtained from the requests
   */
  recordResponses?: boolean;

  /**
   * Number of seconds before the request times out
   */
  timeoutSeconds?: number | null;

  /**
   * Number of seconds before the batch job times out
   */
  jobTimeoutSeconds?: number | null;

  /**
   * Any steps that should be done before the test.  These are not counted in the performance timing.
   * It can return a string or a JSON object that will be stored in {@link setupInputValue}.
   *
   * If the return value is a string, which can be a session id that is used by the test and cleaned up by {@link teardownLambda}, for example,
   * that value will be passed to {@link action} and {@link teardownLambda} as the `setupInput` parameter.
   *
   * If multiple strings or a more complex data structure is returned in the setupLambda as a JSON object,
   * the JSON object will be partially applied to the {@link action} and {@link teardownLambda}.
   *
   * Example:
   * For the following setupLambda: Lambda.fromJavaScript(function () { return { setupObj: { a: 1, b: 2, c: 'this is a string' } }; }),
   * the action lambda and teardownLambda functions can consume the returned object in the following format:
   *
   * Action: Lambda.fromJavaScript(function (setupObj) { return setupObj.a + setupObj.b; })
   * teardownLambda: Lambda.fromJavaScript(function (setupObj) { TestEntity.remove(setupObj.c); })
   */
  setupLambda?: λNullConsumer | null;

  /**
   * Any steps that should be done after the test.  These are not counted in the performance timing.
   */
  teardownLambda?: λNullConsumer | null;

  /**
   * An argument passed from {@link setupLambda} to {@link action} and {@link teardownLambda}.
   * This is set by {@link MaximGun.fire}.
   */
  setupInputValue?: string | null;

  /**
   * Field names of the action return value which will be used to calculate the stats instead of the API duration
   * Note: the field value needs to be double
   */
  customMeasurementFields?: C3.Array<string | null> | Array<string | null>;

  /**
   * The Lambda function name being supplied as the action lambda function
   * If both `action` and `actionLambdaName` fields are provided, only the `action` field will be used.
   */
  actionLambdaName?: string | null;

  /**
   * The Lambda function name being supplied as the set up lambda function invoked before firing the actions
   * If both `setupLambda` and `setupLambdaName` fields are provided, only the `setupLambda` field will be used.
   */
  setupLambdaName?: string | null;

  /**
   * The Lambda function name being supplied as the tear down lambda function invoked after firing the actions
   * If both `teardownLambda` and `teardownLambdaName` fields are provided, only the `teardownLambda` field will be used.
   */
  teardownLambdaName?: string | null;

  /**
   * MaximGunStat values which triggers the test failure
   */
  failureThreshold?: IMaximGunStat | null;

  /**
   * MaximGunStat values of warning threshold
   */
  warningThreshold?: IMaximGunStat | null;

  /**
   * MaximGunStat values which triggers the test failure based on the measurementFieldsFromReturnValue field names
   */
  customFailureThreshold?: C3.Map<string | null, MaximGunStat | null> | {[key: string | null]: IMaximGunStat | null};

  /**
   * MaximGunStat values of the warning thresholds based on the customMeasurementFields field names
   */
  customWarningThreshold?: C3.Map<string | null, MaximGunStat | null> | {[key: string | null]: IMaximGunStat | null};
}


interface λFunction<T, R> {
  (t: T): R
}

interface λNullConsumer {
  (): void
}
/**
 * @remarks this represents a made instance of PerformanceTestCase
 */
declare class PerformanceTestCase extends Obj {

  /**
   * The id of this instance.
   */
  readonly id?: string | null;
  withId(id: string | null): PerformanceTestCase;

  /**
   * Test action. This action will be executed in the target cluster as REST request.
   *
   * @see @requestSupplier
   */
  readonly action?: λNullConsumer | null;
  withAction(action: λNullConsumer | null): PerformanceTestCase;

  /**
   * Optional test action parameters that will be applied randomly at each iteration.
   *
   * Value should be: [map<string, any>]
   */
  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): PerformanceTestCase;

  /**
   * Test request supplier. I.e. action that gets executed in the test driver cluster to compute HttpRequests for target
   * cluster.
   *
   *
   * requestSupplier: MaximGunRequestSupplier schema suffix 'REQ'
   */
  readonly requestSupplier?: λFunction<MaximGunUser | null, C3.Array<HttpRequest | null>> | null;
  withRequestSupplier(requestSupplier: λFunction<MaximGunUser | null, C3.Array<HttpRequest | null> | Array<IHttpRequest | null>> | null): PerformanceTestCase;

  /**
   * Total count of approximately how many test actions / requests will be executed. Actual count could be bit more then
   * this number but never less then this number.
   */
  readonly count: number;
  withCount(count: number): PerformanceTestCase;

  /**
   * Max number of concurrent actions at any point in time. Note that if cluster that is driving the test doesn't have
   * available threads MaximGunFire.activeConcurrency could be less then this number.
   *
   * Also it's important to note that even if `#userCount > #concurrency` there could still be concurrent actions
   * running for a given user.
   */
  readonly concurrency: number;
  withConcurrency(concurrency: number): PerformanceTestCase;

  /**
   * Min and max seconds to wait before executing the first test action for a given test user. This is effectively a
   * ramp up period. If not provided then there will be no delay.
   */
  readonly initialWaitSecs?: DoublePair | null;
  withInitialWaitSecs(initialWaitSecs: IDoublePair | null): PerformanceTestCase;

  /**
   * Min and max seconds to wait before executing the next test action for a given test user.  If not provided then
   * there will be no delay.
   */
  readonly waitSecs?: DoublePair | null;
  withWaitSecs(waitSecs: IDoublePair | null): PerformanceTestCase;

  /**
   * Number of test users. They will be picked randomly for executing a test action. Number of test run per user will be
   * approximately `#count / #userCount`.
   * NOTE: this option will be ignored iff {@link #uniqueUserPerThread} is true.
   */
  readonly userCount?: number | null;
  withUserCount(userCount: number | null): PerformanceTestCase;

  /**
   * If true, each concurrent thread will be a unique user. This means that {@link #userCount} will be ignored and
   * presumed to be equal to {@link #concurrency}.
   */
  readonly uniqueUserPerThread?: boolean;
  withUniqueUserPerThread(uniqueUserPerThread: boolean): PerformanceTestCase;

  /**
   * Test user name prefix. Suffix is going to be number in the [1..#userCount] range.
   */
  readonly userPrefix?: string | null;
  withUserPrefix(userPrefix: string | null): PerformanceTestCase;

  /**
   * If set then Basic Authentication header will be generated using this password.
   */
  readonly userBasicAuthPwd?: string | null;
  withUserBasicAuthPwd(userBasicAuthPwd: string | null): PerformanceTestCase;

  /**
   * If #userBasicAuthPwd is not set then #userCount and #userPrefix will be ignored and random authentication header
   * will be picked up from this array.
   */
  readonly authHeaders?: C3.Array<string | null>;
  withAuthHeaders(authHeaders: C3.Array<string | null> | Array<string | null>): PerformanceTestCase;

  /**
   * When true, the fire action will wait for its completion
   */
  readonly synchronous?: boolean;
  withSynchronous(synchronous: boolean): PerformanceTestCase;

  /**
   * When true, record the successful responses obtained from the requests
   */
  readonly recordResponses?: boolean;
  withRecordResponses(recordResponses: boolean): PerformanceTestCase;

  /**
   * Number of seconds before the request times out
   */
  readonly timeoutSeconds?: number | null;
  withTimeoutSeconds(timeoutSeconds: number | null): PerformanceTestCase;

  /**
   * Number of seconds before the batch job times out
   */
  readonly jobTimeoutSeconds?: number | null;
  withJobTimeoutSeconds(jobTimeoutSeconds: number | null): PerformanceTestCase;

  /**
   * Any steps that should be done before the test.  These are not counted in the performance timing.
   * It can return a string or a JSON object that will be stored in {@link setupInputValue}.
   *
   * If the return value is a string, which can be a session id that is used by the test and cleaned up by {@link teardownLambda}, for example,
   * that value will be passed to {@link action} and {@link teardownLambda} as the `setupInput` parameter.
   *
   * If multiple strings or a more complex data structure is returned in the setupLambda as a JSON object,
   * the JSON object will be partially applied to the {@link action} and {@link teardownLambda}.
   *
   * Example:
   * For the following setupLambda: Lambda.fromJavaScript(function () { return { setupObj: { a: 1, b: 2, c: 'this is a string' } }; }),
   * the action lambda and teardownLambda functions can consume the returned object in the following format:
   *
   * Action: Lambda.fromJavaScript(function (setupObj) { return setupObj.a + setupObj.b; })
   * teardownLambda: Lambda.fromJavaScript(function (setupObj) { TestEntity.remove(setupObj.c); })
   */
  readonly setupLambda?: λNullConsumer | null;
  withSetupLambda(setupLambda: λNullConsumer | null): PerformanceTestCase;

  /**
   * Any steps that should be done after the test.  These are not counted in the performance timing.
   */
  readonly teardownLambda?: λNullConsumer | null;
  withTeardownLambda(teardownLambda: λNullConsumer | null): PerformanceTestCase;

  /**
   * An argument passed from {@link setupLambda} to {@link action} and {@link teardownLambda}.
   * This is set by {@link MaximGun.fire}.
   */
  readonly setupInputValue?: string | null;
  withSetupInputValue(setupInputValue: string | null): PerformanceTestCase;

  /**
   * Field names of the action return value which will be used to calculate the stats instead of the API duration
   * Note: the field value needs to be double
   */
  readonly customMeasurementFields?: C3.Array<string | null>;
  withCustomMeasurementFields(customMeasurementFields: C3.Array<string | null> | Array<string | null>): PerformanceTestCase;

  /**
   * The Lambda function name being supplied as the action lambda function
   * If both `action` and `actionLambdaName` fields are provided, only the `action` field will be used.
   */
  readonly actionLambdaName?: string | null;
  withActionLambdaName(actionLambdaName: string | null): PerformanceTestCase;

  /**
   * The Lambda function name being supplied as the set up lambda function invoked before firing the actions
   * If both `setupLambda` and `setupLambdaName` fields are provided, only the `setupLambda` field will be used.
   */
  readonly setupLambdaName?: string | null;
  withSetupLambdaName(setupLambdaName: string | null): PerformanceTestCase;

  /**
   * The Lambda function name being supplied as the tear down lambda function invoked after firing the actions
   * If both `teardownLambda` and `teardownLambdaName` fields are provided, only the `teardownLambda` field will be used.
   */
  readonly teardownLambdaName?: string | null;
  withTeardownLambdaName(teardownLambdaName: string | null): PerformanceTestCase;

  /**
   * MaximGunStat values which triggers the test failure
   */
  readonly failureThreshold?: MaximGunStat | null;
  withFailureThreshold(failureThreshold: IMaximGunStat | null): PerformanceTestCase;

  /**
   * MaximGunStat values of warning threshold
   */
  readonly warningThreshold?: MaximGunStat | null;
  withWarningThreshold(warningThreshold: IMaximGunStat | null): PerformanceTestCase;

  /**
   * MaximGunStat values which triggers the test failure based on the measurementFieldsFromReturnValue field names
   */
  readonly customFailureThreshold?: C3.Map<string | null, MaximGunStat | null>;
  withCustomFailureThreshold(customFailureThreshold: C3.Map<string | null, MaximGunStat | null> | {[key: string | null]: IMaximGunStat | null}): PerformanceTestCase;

  /**
   * MaximGunStat values of the warning thresholds based on the customMeasurementFields field names
   */
  readonly customWarningThreshold?: C3.Map<string | null, MaximGunStat | null>;
  withCustomWarningThreshold(customWarningThreshold: C3.Map<string | null, MaximGunStat | null> | {[key: string | null]: IMaximGunStat | null}): PerformanceTestCase;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): PerformanceTestCase;

  /**
   * Apply provided lambda in the context of this instance.
   */
  apply(action: λSupplier<any>, authToken?: string | null): any;

  /**
   * @return execution target cluster root URL; i.e. `ClusterAware#cluster` if provided or `null` otherwise.
   */
  targetCluster(): string | null;

  /**
   * @return execution target server node id; i.e. `ServerNodeAware#serverNodeId` if provided or `null` otherwise.
   */
  targetServerNodeId(): string | null;

  /**
   * @return execution target server node ip address; i.e. `ServerNodeAware#serverIpAddress` if provided or `null`
   *         otherwise.
   */
  targetServerIpAddress(): string | null;

  /**
   * @return execution target server node http port; i.e. `ServerNodeAware#httpPort` if provided or `null` otherwise.
   */
  targetServerHttpPort(): number | null;

  /**
   * @return execution target tenant id; i.e. `TenantAware#tenant` if provided otherwise if `ClusterAware#cluster` is
   *         not set then current tenant. However if `ClusterAware#cluster` is set and `TenantAware#tenant` is not then
   *         target cluster assumed to be single tenant and this method will return `null`.
   */
  targetTenant(): string | null;

  /**
   * @return execution target tag id; i.e. `TagAware#tag` if provided otherwise `c3` if sub type is also `TenantAware`
   *         and it's `TenantAware#tenant` is set. In all other cases will return `null`.
   */
  targetTag(): string | null;

  /**
   * @return `true` if target as cluster i.e. any node in that cluster.
   */
  isClusterAware(): boolean;

  /**
   * @return `true` if target as a specific server node.
   */
  isServerNodeAware(): boolean;

  /**
   * @return `true` if this execution environment has a specific target tenant.
   */
  isTenantAware(): boolean;

  /**
   * @return `true` if this execution environment has a specific target tag.
   */
  isTagAware(): boolean;

  /**
   * @return end-point URL for this execution environment for given kind. Defaults to API.
   */
  endpoint(kind?: string | null): string;

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
  static fromJson(json: any | null): PerformanceTestCase | null;

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
  static fromJsonString(json: string | null): PerformanceTestCase | null;

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
  static fromXmlString(xml: string | null): PerformanceTestCase | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): PerformanceTestCase | null;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): PerformanceTestCase;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): PerformanceTestCase;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<PerformanceTestCase | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<PerformanceTestCase | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): PerformanceTestCase;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PerformanceTestCase;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PerformanceTestCase;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): PerformanceTestCase;

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
  withField(field: string, value: any, doNotConvert?: boolean): PerformanceTestCase;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): PerformanceTestCase;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): PerformanceTestCase;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): PerformanceTestCase;

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
  withoutFieldAtPath(path: string): PerformanceTestCase;

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
  withoutField(field: string | null): PerformanceTestCase;

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
  withoutField(field: FieldType | null): PerformanceTestCase;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): PerformanceTestCase;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): PerformanceTestCase;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): PerformanceTestCase;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): PerformanceTestCase;

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
  defaultField(field: string): PerformanceTestCase;

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
  defaultField(field: FieldType): PerformanceTestCase;

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
  unsetField(field: string): PerformanceTestCase;

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
  unsetField(field: FieldType): PerformanceTestCase;

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
  removeField(field: string): PerformanceTestCase;

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
  removeField(field: FieldType): PerformanceTestCase;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): PerformanceTestCase;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): PerformanceTestCase;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): PerformanceTestCase;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): PerformanceTestCase;

  mergeJson(json: any | null): PerformanceTestCase;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): PerformanceTestCase;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): PerformanceTestCase;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<PerformanceTestCase | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<PerformanceTestCase | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<PerformanceTestCase | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<PerformanceTestCase | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<PerformanceTestCase | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, PerformanceTestCase | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, PerformanceTestCase | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<PerformanceTestCase | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<PerformanceTestCase | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): PerformanceTestCase;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): PerformanceTestCase;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): PerformanceTestCase;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): PerformanceTestCase;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): PerformanceTestCase;

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
  static make(fields: any, withDefaults?: boolean): PerformanceTestCase;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): PerformanceTestCase | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): PerformanceTestCase;

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
  afterMake(): PerformanceTestCase;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): PerformanceTestCase;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<PerformanceTestCase>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): PerformanceTestCase;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): PerformanceTestCase | null;

  /**
   * Creates or changes passwords for test users and places them in the provided group. Only valid if #userBasicAuthPwd
   * is provided.
   */
  upsertTestUsers(group: UserGroup | null): C3.Array<User | null>;

  initialMillis(): number;

  nextMillis(): number;

  /**
   * Accumulate results from the {@link MaximGunUser}s and return a {@link TestCase} with the overall results.
   * This should be run after the test is completed.
   *
   * @param fire
   *           the {@link MaximGunFire} that runs this test case
   * @param testCaseClassname
   *           the value for the classname field of the {@link TestCase}
   * @param testCaseName
   *           the value for the name field of the {@link TestCase}
   * @return the generated {@link TestCase}
   */
  toTestCase(fire: MaximGunFire, testCaseClassname: string, testCaseName: string): TestCaseResult | null;

  /**
   * Helper function to check whether failure/warning thresholds have been exceeded and construct a failure/warning
   * message that gets appended to the `message` passed in.
   *
   * @param message
   *           The current message, which will be appended to with warning or failure messages
   * @param threshold
   *           Failure or warning threshold
   * @param performanceTestResult
   *           The performance test result stats to compare against the threshold. The message will be appended only if
   *           this result exceeds the threshold.
   * @param isFailureThreshold
   *           True if it is checking failure thresholds, false if it is checking warning thresholds. This determines
   *           the language of the messaging (i.e., "Failed ..." vs. "Warning ...").
   * @return The constructed failure or warning message
   */
  static checkThreshold(message?: string | null, threshold?: MaximGunStat | null, performanceTestResult?: MaximGunStat | null, isFailureThreshold?: boolean): string | null;

  /**
   * Helper function to check whether custom failure/warning thresholds have been exceeded and construct a
   * failure/warning message that gets appended to the `message` passed in.
   *
   * @param message
   *           The current message, which will be appended to with warning or failure messages
   * @param customThreshold
   *           Custom failure or warning threshold for each custom measurement metric
   * @param customStats
   *           Custom measurement stats to compare against the threshold. Messages for each custom measurement metric
   *           will be appended only if the result exceeds the threshold.
   * @param isFailureThreshold
   *           True if it is checking failure thresholds, false if it is checking warning thresholds. This determines
   *           the language of the messaging (i.e., "Failed ..." vs. "Warning ...").
   * @return The constructed failure or warning message
   */
  static checkCustomThreshold(message?: string | null, customThreshold?: C3.Map<string | null, MaximGunStat | null>, customStats?: C3.Map<string | null, MaximGunStat | null>, isFailureThreshold?: boolean): string | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λNullConsumer {
  (): void
}

interface λPredicate<T> {
  (t: T): boolean
}
