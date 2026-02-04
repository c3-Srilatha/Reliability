// TypeScript definitions for the C3 type Selenium_Config

/**
 * @remarks this represents a value passed to a method that expects an instance of Selenium_Config
 */
declare interface ISelenium_Config {

  configOverride?: string | null;

  secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  issues?: C3.Array<string | null> | Array<string | null>;

  /**
   * Canonical C3 Identifier for this Cloud Resource in the format of <cluster>-<env>-<app>-<func>[-<role>]-<seq>[-<subseq>].
   */
  id: string;

  /**
   * C3 Cluster ID component (first) in {@link #id}
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  cluster?: string | null;

  /**
   * C3 Environment name (second) component in {@link #id}; e.g. srv,ui,c3.
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   * An Environment name must be unique within a Cluster.
   */
  env?: string | null;

  /**
   * C3 Application name (third) component in {@link #id}; e.g. c3,crm,lightbulb
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   * An Application name must be unique within an Environment.
   */
  app?: string | null;

  /**
   * Cloud function abbreviation; e.g. app, awsemr, awsvpc, azvm.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   *
   * @see CloudResource#cloudFunc
   * @see CloudResource#allCloudFuncs
   */
  func?: string | null;

  /**
   * C3 role; e.g. m, w; cannot be number only.
   * E.g. prod-c3-crm-app-l-0001
   * => l
   *
   * @see CloudResource#cloudRoles
   */
  role?: string | null;

  /**
   * Sequence number - should only contain numbers - it is recommended to have fixed number of digits for a
   * `<func>-<role>` with 0 left padding so that list of resources are naturally ordered; can be 2, 3, 4 or 5 digits.
   * E.g. prod-c3-crm-app-l-0001
   * => 0001
   *
   * @see CloudResource#cloudSeqLength
   */
  seq?: string | null;

  /**
   * Sub-sequence alphanumeric string (dot allowed)
   * E.g. prod-c3-crm-app-t-0001-kk03
   * => 001
   */
  subseq?: string | null;

  /**
   * Cloud service provider generated native ID, such as vpcId and securityGroupId.
   */
  resourceId?: string | null;

  /**
   * Cloud service provider generated native secondary ID, such as Amazon Resource Name (ARN).
   */
  resourceSecondaryId?: string | null;

  /**
   * User defined name attribute managed by cloud service provider.
   */
  resourceName?: string | null;

  /**
   * ResourceGroup for Azure resources and K8s namespaces
   */
  resourceGroupName?: string | null;

  /**
   * When true, CloudResource will GET from locally persisted Config framework
   * When false, CloudResource will GET from remote Cloud APIs
   */
  fullyConfigured?: boolean;

  /**
   * resourceNamespace for K8s Resources (only those which are associated with a namespace)
   */
  resourceNamespace?: string | null;

  /**
   * This flag indicates that this cloud resource managed by third party, C3 will not create or destroy this resource
   * implicitly.
   */
  external?: boolean;

  /**
   * Cloud Credentials for this resource.
   */
  credentials?: ICloudCredentials | null;

  /**
   * `true` if resourceName was set via #generateResourceName.
   */
  hasGeneratedResourceName?: boolean;

  /**
   * `true` if resourceName was set via #generateResourceSecondaryId.
   */
  hasGeneratedResourceSecondaryId?: boolean;

  /**
   * Specific version of Cloud Service to use
   */
  version?: string | null;

  /**
   * Specific resource to create when creating a cloud service that uses an operator
   */
  operatorResourceKind?: string | null;

  /**
   * Specify if this Cloud Service is managed
   */
  managed?: boolean;

  /**
   * Tls Certificate if this Cloud Service needs a secure connection to be accessed
   */
  certs?: ITlsCertificate | null;

  /**
   * Metadata of the CloudService; when started, started by who, etc
   */
  meta?: ICloudCluster.Meta | null;

  /**
   * The cloudServiceUrl of the cloudService
   */
  cloudServiceUrl?: ICloudServiceUrl | null;

  /**
   * Logical registry to fetch CloudServices' Artifacts
   */
  logicalImageRegistry?: string | null;

  /**
   * If true, storage resources (such as PVCs) will not be cleaned up when the cloud service is terminated.
   * Default is false, meaning storage resources ARE cleaned up by default. Subtypes can override this.
   *
   * NOTE: Preserved storage is currently not protected against orphan resource cleanup that is enabled on development clusters.
   */
  doNotCleanupStorageOnTerminate?: boolean;

  /**
   * Cloud service timeout in minute.
   */
  waitForReadyTimeoutInMin?: number | null;

  /**
   * Image Repository to use for chrome selenium
   */
  seleniumImageRepository?: string | null;

  seleniumImageTag?: string | null;

  /**
   * Image to use for chrome selenium - concatenation of {@link CloudServiceConfig#logicalImageRegistry} and {@link Selenium_Config#seleniumImageRepository}.
   *
   * NOTE: seleniumImageName will be set by concatenating registry and repository. Setting this field directly will have no effect.
   */
  seleniumImageName?: string | null;

  chromeImage?: string | null;

  /**
   * Port that chrome selenium service will run on
   */
  chromeSeleniumPort?: number | null;

  /**
   * imagePullSecrets used to authenticate for pulling the image
   */
  imagePullSecrets?: string | null;

  /**
   * Port that chrome selenium vnc will run on
   */
  chromeVncPort?: number | null;

  /**
   * Port that chrome selenium service debugging will run on
   */
  chromeDebuggingPort?: number | null;

  /**
   * The local filesystem directory that will be mounted by the selenium pod and projected as shared directory.
   */
  localfs?: string | null;

  /**
   * The main path of the mounted local filesystem directory.
   */
  mountPathfs?: string | null;

  /**
   * The sub path of the mounted local filesystem directory.
   */
  subPathfs?: string | null;

  /**
   * CPU requests for the chrome selenium pod
   */
  cpu?: string | null;

  /**
   * CPU limits for the chrome selenium pod
   */
  cpuLimit?: string | null;

  /**
   * Memory requests for the chrome selenium pod
   */
  memory?: string | null;

  /**
   * Memory limits for the chrome selenium pod
   */
  memoryLimit?: string | null;
}

/**
 * @remarks this represents a made instance of Selenium_Config
 */
declare class Selenium_Config extends Obj {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): Selenium_Config;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): Selenium_Config;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): Selenium_Config;

  /**
   * Canonical C3 Identifier for this Cloud Resource in the format of <cluster>-<env>-<app>-<func>[-<role>]-<seq>[-<subseq>].
   */
  readonly id: string;
  withId(id: string): Selenium_Config;

  /**
   * C3 Cluster ID component (first) in {@link #id}
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  readonly cluster?: string | null;
  withCluster(cluster: string | null): Selenium_Config;

  /**
   * C3 Environment name (second) component in {@link #id}; e.g. srv,ui,c3.
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   * An Environment name must be unique within a Cluster.
   */
  readonly env?: string | null;
  withEnv(env: string | null): Selenium_Config;

  /**
   * C3 Application name (third) component in {@link #id}; e.g. c3,crm,lightbulb
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   * An Application name must be unique within an Environment.
   */
  readonly app?: string | null;
  withApp(app: string | null): Selenium_Config;

  /**
   * Cloud function abbreviation; e.g. app, awsemr, awsvpc, azvm.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   *
   * @see CloudResource#cloudFunc
   * @see CloudResource#allCloudFuncs
   */
  readonly func?: string | null;
  withFunc(func: string | null): Selenium_Config;

  /**
   * C3 role; e.g. m, w; cannot be number only.
   * E.g. prod-c3-crm-app-l-0001
   * => l
   *
   * @see CloudResource#cloudRoles
   */
  readonly role?: string | null;
  withRole(role: string | null): Selenium_Config;

  /**
   * Sequence number - should only contain numbers - it is recommended to have fixed number of digits for a
   * `<func>-<role>` with 0 left padding so that list of resources are naturally ordered; can be 2, 3, 4 or 5 digits.
   * E.g. prod-c3-crm-app-l-0001
   * => 0001
   *
   * @see CloudResource#cloudSeqLength
   */
  readonly seq?: string | null;
  withSeq(seq: string | null): Selenium_Config;

  /**
   * Sub-sequence alphanumeric string (dot allowed)
   * E.g. prod-c3-crm-app-t-0001-kk03
   * => 001
   */
  readonly subseq?: string | null;
  withSubseq(subseq: string | null): Selenium_Config;

  /**
   * Cloud service provider generated native ID, such as vpcId and securityGroupId.
   */
  readonly resourceId?: string | null;
  withResourceId(resourceId: string | null): Selenium_Config;

  /**
   * Cloud service provider generated native secondary ID, such as Amazon Resource Name (ARN).
   */
  readonly resourceSecondaryId?: string | null;
  withResourceSecondaryId(resourceSecondaryId: string | null): Selenium_Config;

  /**
   * User defined name attribute managed by cloud service provider.
   */
  readonly resourceName?: string | null;
  withResourceName(resourceName: string | null): Selenium_Config;

  /**
   * ResourceGroup for Azure resources and K8s namespaces
   */
  readonly resourceGroupName?: string | null;
  withResourceGroupName(resourceGroupName: string | null): Selenium_Config;

  /**
   * When true, CloudResource will GET from locally persisted Config framework
   * When false, CloudResource will GET from remote Cloud APIs
   */
  readonly fullyConfigured?: boolean;
  withFullyConfigured(fullyConfigured: boolean): Selenium_Config;

  /**
   * resourceNamespace for K8s Resources (only those which are associated with a namespace)
   */
  readonly resourceNamespace?: string | null;
  withResourceNamespace(resourceNamespace: string | null): Selenium_Config;

  /**
   * This flag indicates that this cloud resource managed by third party, C3 will not create or destroy this resource
   * implicitly.
   */
  readonly external?: boolean;
  withExternal(external: boolean): Selenium_Config;

  /**
   * Cloud Credentials for this resource.
   */
  readonly credentials?: CloudCredentials | null;
  withCredentials(credentials: ICloudCredentials | null): Selenium_Config;

  /**
   * `true` if resourceName was set via #generateResourceName.
   */
  readonly hasGeneratedResourceName?: boolean;
  withHasGeneratedResourceName(hasGeneratedResourceName: boolean): Selenium_Config;

  /**
   * `true` if resourceName was set via #generateResourceSecondaryId.
   */
  readonly hasGeneratedResourceSecondaryId?: boolean;
  withHasGeneratedResourceSecondaryId(hasGeneratedResourceSecondaryId: boolean): Selenium_Config;

  /**
   * Specific version of Cloud Service to use
   */
  readonly version?: string | null;
  withVersion(version: string | null): Selenium_Config;

  /**
   * Specific resource to create when creating a cloud service that uses an operator
   */
  readonly operatorResourceKind?: string | null;
  withOperatorResourceKind(operatorResourceKind: string | null): Selenium_Config;

  /**
   * Specify if this Cloud Service is managed
   */
  readonly managed?: boolean;
  withManaged(managed: boolean): Selenium_Config;

  /**
   * Tls Certificate if this Cloud Service needs a secure connection to be accessed
   */
  readonly certs?: TlsCertificate | null;
  withCerts(certs: ITlsCertificate | null): Selenium_Config;

  /**
   * Metadata of the CloudService; when started, started by who, etc
   */
  readonly meta?: CloudCluster.Meta | null;
  withMeta(meta: ICloudCluster.Meta | null): Selenium_Config;

  /**
   * The cloudServiceUrl of the cloudService
   */
  readonly cloudServiceUrl?: CloudServiceUrl | null;
  withCloudServiceUrl(cloudServiceUrl: ICloudServiceUrl | null): Selenium_Config;

  /**
   * Logical registry to fetch CloudServices' Artifacts
   */
  readonly logicalImageRegistry?: string | null;
  withLogicalImageRegistry(logicalImageRegistry: string | null): Selenium_Config;

  /**
   * If true, storage resources (such as PVCs) will not be cleaned up when the cloud service is terminated.
   * Default is false, meaning storage resources ARE cleaned up by default. Subtypes can override this.
   *
   * NOTE: Preserved storage is currently not protected against orphan resource cleanup that is enabled on development clusters.
   */
  readonly doNotCleanupStorageOnTerminate?: boolean;
  withDoNotCleanupStorageOnTerminate(doNotCleanupStorageOnTerminate: boolean): Selenium_Config;

  /**
   * Cloud service timeout in minute.
   */
  readonly waitForReadyTimeoutInMin?: number | null;
  withWaitForReadyTimeoutInMin(waitForReadyTimeoutInMin: number | null): Selenium_Config;

  /**
   * Image Repository to use for chrome selenium
   */
  readonly seleniumImageRepository?: string | null;
  withSeleniumImageRepository(seleniumImageRepository: string | null): Selenium_Config;

  readonly seleniumImageTag?: string | null;
  withSeleniumImageTag(seleniumImageTag: string | null): Selenium_Config;

  /**
   * Image to use for chrome selenium - concatenation of {@link CloudServiceConfig#logicalImageRegistry} and {@link Selenium_Config#seleniumImageRepository}.
   *
   * NOTE: seleniumImageName will be set by concatenating registry and repository. Setting this field directly will have no effect.
   */
  readonly seleniumImageName?: string | null;
  withSeleniumImageName(seleniumImageName: string | null): Selenium_Config;

  readonly chromeImage?: string | null;
  withChromeImage(chromeImage: string | null): Selenium_Config;

  /**
   * Port that chrome selenium service will run on
   */
  readonly chromeSeleniumPort?: number | null;
  withChromeSeleniumPort(chromeSeleniumPort: number | null): Selenium_Config;

  /**
   * imagePullSecrets used to authenticate for pulling the image
   */
  readonly imagePullSecrets?: string | null;
  withImagePullSecrets(imagePullSecrets: string | null): Selenium_Config;

  /**
   * Port that chrome selenium vnc will run on
   */
  readonly chromeVncPort?: number | null;
  withChromeVncPort(chromeVncPort: number | null): Selenium_Config;

  /**
   * Port that chrome selenium service debugging will run on
   */
  readonly chromeDebuggingPort?: number | null;
  withChromeDebuggingPort(chromeDebuggingPort: number | null): Selenium_Config;

  /**
   * The local filesystem directory that will be mounted by the selenium pod and projected as shared directory.
   */
  readonly localfs?: string | null;
  withLocalfs(localfs: string | null): Selenium_Config;

  /**
   * The main path of the mounted local filesystem directory.
   */
  readonly mountPathfs?: string | null;
  withMountPathfs(mountPathfs: string | null): Selenium_Config;

  /**
   * The sub path of the mounted local filesystem directory.
   */
  readonly subPathfs?: string | null;
  withSubPathfs(subPathfs: string | null): Selenium_Config;

  /**
   * CPU requests for the chrome selenium pod
   */
  readonly cpu?: string | null;
  withCpu(cpu: string | null): Selenium_Config;

  /**
   * CPU limits for the chrome selenium pod
   */
  readonly cpuLimit?: string | null;
  withCpuLimit(cpuLimit: string | null): Selenium_Config;

  /**
   * Memory requests for the chrome selenium pod
   */
  readonly memory?: string | null;
  withMemory(memory: string | null): Selenium_Config;

  /**
   * Memory limits for the chrome selenium pod
   */
  readonly memoryLimit?: string | null;
  withMemoryLimit(memoryLimit: string | null): Selenium_Config;

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
  static fromJson(json: any | null): Selenium_Config | null;

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
  static fromJsonString(json: string | null): Selenium_Config | null;

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
  static fromXmlString(xml: string | null): Selenium_Config | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Selenium_Config | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Selenium_Config;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium_Config;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium_Config;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium_Config | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium_Config | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Selenium_Config;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium_Config;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium_Config;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Selenium_Config;

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
  withField(field: string, value: any, doNotConvert?: boolean): Selenium_Config;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Selenium_Config;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Selenium_Config;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Selenium_Config;

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
  withoutFieldAtPath(path: string): Selenium_Config;

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
  withoutField(field: string | null): Selenium_Config;

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
  withoutField(field: FieldType | null): Selenium_Config;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Selenium_Config;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Selenium_Config;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Selenium_Config;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Selenium_Config;

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
  defaultField(field: string): Selenium_Config;

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
  defaultField(field: FieldType): Selenium_Config;

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
  unsetField(field: string): Selenium_Config;

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
  unsetField(field: FieldType): Selenium_Config;

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
  removeField(field: string): Selenium_Config;

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
  removeField(field: FieldType): Selenium_Config;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Selenium_Config;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Selenium_Config;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Selenium_Config;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Selenium_Config;

  mergeJson(json: any | null): Selenium_Config;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Selenium_Config;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Selenium_Config;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Selenium_Config | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Selenium_Config | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Selenium_Config | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Selenium_Config | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Selenium_Config | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Selenium_Config | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Selenium_Config | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Selenium_Config | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Selenium_Config | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Selenium_Config;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Selenium_Config;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Selenium_Config;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Selenium_Config;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Selenium_Config;

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
  static make(fields: any, withDefaults?: boolean): Selenium_Config;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Selenium_Config | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Selenium_Config;

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
  afterMake(): Selenium_Config;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Selenium_Config;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Selenium_Config>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Selenium_Config;

  /**
   * @return whether the cache already contains this instance
   */
  isCached(): boolean;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return stream of all available Cached instances.
   */
  static allCached(doNotProduceAll?: boolean): Stream<Selenium_Config | null>;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string | null, doNotProduceAll?: boolean): Stream<Selenium_Config | null>;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<Selenium_Config | null>;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): Selenium_Config | null;

  /**
   * Returns cached instance by key, with secrets removed.
   */
  static forCacheKey(key: string | null): Selenium_Config | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): Selenium_Config | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): Selenium_Config | null;

  /**
   * @return cache key for this instance.
   */
  cacheKey(): string;

  /**
   * Should produce an entry for the cache key. This method should not be called directly.
   */
  static produce(key: string): Selenium_Config | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): C3.Map<string | null, Selenium_Config | null>;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): C3.Map<string | null, Selenium_Config | null>;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  evictFromCache(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Clears the data cache for this type on all nodes of this application.
   */
  static clearCache(): void;

  /**
   * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
   */
  static clearCacheLocalOnly(): void;

  /**
   * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#clearLocalAppsCaches}
   */
  static clearCacheLocalOnlyAllApps(): void;

  /**
   * Returns count of cached instances.
   */
  static cacheSize(): number | null;

  /**
   * Returns instance of the cache for this type.
   */
  static nativeCache(): any;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  getConfig(): Selenium_Config;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  configValue(path: string, failIfMissing?: boolean): any;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  getSecret(): Selenium_Config;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  isRootOverride(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  isSeed(): boolean;

  /**
   * @return `true` if provided path is a secret.
   */
  static isSecret(path: string): boolean;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  configKey(): string | null;

  /**
   * @return return cached config instance for provided config key.
   */
  static forConfigKey(configKey: string | null): Selenium_Config | null;

  /**
   * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
   */
  static listConfigKeys(): Stream<string | null>;

  /**
   * @param
   *
   * @return stream of all available Config instances for this type.
   */
  static listConfigs(parallel?: boolean, filter?: λPredicate<string> | null): Stream<Selenium_Config | null>;

  /**
   * @return all config template values by override.
   */
  allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  setConfigValues(from: Selenium_Config, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  setSecretValues(from: Selenium_Config, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  clearSecretValueAllOverrides(path: string): void;

  /**
   * @return config or secret value for the provided config key, field path, and override if set
   */
  static rawConfigOrSecretValue(configKey: string, path: string, override?: string | null, failIfMissing?: boolean): any | null;

  /**
   * Sets config or secret value for the provided config key, field path and override.
   */
  static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
   * setConfigValue and setSecretValue
   */
  static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config or secret value template for the provided config key, field path and override.
   */
  static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string | null, override?: string | null): void;

  /**
   * @return `true` if this Config type has other sub types.
   */
  static hasSubTypes(): boolean;

  /**
   * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
   */
  static hasSecretField(): boolean;

  /**
   * @return `true` if this Config type has only one instance.
   */
  static isSingleInstance(): boolean;

  /**
   * @returns `true` if this Config is user override-able.
   */
  static isUserOverridable(): boolean;

  /**
   * @return default configuration override level
   */
  static dfltOverride(override?: string | null): string;

  /**
   *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
   * true and config does not exist.
   *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
   */
  static loadConfigAndSecret(configKey: string): Selenium_Config | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  loadConfigOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  loadSecretOverride(override: string): any | null;

  /**
   * @return file for an embedded config value.
   */
  embeddedFile(embeddedFileName: string, override?: string | null): File;

  /**
   * @return config folder name
   */
  static configFolder(): string;

  /**
   * @return config sub folder name for this type
   */
  static configSubFolder(): string;

  /**
   * @return config file encoded path for a given key and potentially user under the config dir for this type.
   */
  static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  configAndSecretFiles(override: string): Pair<File | null, File | null> | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  configFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  secretFilePath(override: string): string | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret template directories for override
   */
  static configAndSecretDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret template directories by override; note that will always return instance of
   *         File even if physical folder doesn't exist.
   */
  static allConfigAndSecretDirs(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret Base directories for the given override
   */
  static configAndSecretOverrideBaseDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return config key for a given config or secret file. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFile(file: File | null, failIfInvalid?: boolean): string | null;

  /**
   * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFileUrl(fileUrl: string | null): string | null;

  /**
   * @return Config sub-type for a config directory name.
   */
  static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  setConfig(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  setSecret(override?: string | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  eachOverride(action?: λBiConsumer<Config, string> | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
   */
  static eachOverrideOnType(action?: λConsumer<string> | null): void;

  /**
   * Minimum configuration override level. Default is {@link ConfigOverride#APP}.
   */
  static minOverride(): string;

  /**
   * Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
   */
  static maxOverride(): string;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
   * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
   * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
   *        will also be cleared.
   * @param confirm
   *        Confirmation from user that they understand and confirm deletion of this configuration.
   */
  static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

  /**
   * returns a list of all field paths that are secret
   */
  static secretFieldPaths(): C3.Array<FieldPath | null>;

  /**
   * @return this config without any secret values.
   */
  removeSecrets(): Selenium_Config | null;

  /**
   * @return this config with only secret values.
   */
  removeNonSecrets(): Selenium_Config | null;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  validate(): Selenium_Config;

  /**
   * @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
   */
  static rawJson(configKey: string | null): any | null;

  /**
   * @return sets Json template for a specified override.
   */
  static setJson(configKey: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonValue(configKey: string, field: string, json: any | null, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonField(configKey: string, field: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
   * own list of template bindings
   */
  static templateBindings(configKey: string | null): any | null;

  /**
   * Evaluate a given template by applying the default config bindings.
   * Default config bindings are:
   * 1. owner - owner of the config
   * 2. region - abbreviated region in which the cluster is
   * 3. cluster - current cluster id
   * 4. env - current env id
   * 5. app - current app id
   * 7. user - current user
   * 8. type - type on which this api is called
   * For example, "${owner}--${cluster}-${env}-${app}"
   *
   * @param template
   *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
   * @param extraBindings
   *            Any additional binding params not included in the default config bindings
   * @return evaluated template
   */
  static evalTemplate(template: string, extraBindings?: C3.Map<string | null, string | null>): string;

  /**
   * Returns count of cached raw Json.
   */
  static rawJsonCacheSize(): number | null;

  /**
   * Returns instance of the cache for this type for raw Json.
   */
  static rawJsonNativeCache(): any;

  /**
   * @return canonical C3 identifier of this Cloud Resource in the format of <cluster>-<env>-<app>-<func>-<role>-<seq>[-<subseq>].
   */
  toString(): string | null;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference string.
   *
   * @see CloudRef
   * @see #toString
   */
  static fromString(s: string | null): Selenium_Config | null;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference string.
   *
   * @see CloudRef
   * @see #toString
   */
  static fromString(s: string | null, failIfInvalid?: boolean): Selenium_Config | null;

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
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): Selenium_Config | null;

  /**
   * Construct a cloud ID from a cluster ID
   */
  static fromClusterId(clusterId: string, env: string, app: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium_Config;

  /**
   * Construct a cloud ID from an environment ID
   * envId should be a combination of <cluster>-<env> to uniquely identify an Environment across all C3 clusters
   */
  static fromEnvId(envId: string, app: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium_Config;

  /**
   * Construct a cloud ID from an application ID
   * appId should be a combination of <cluster>-<env>-<app> to uniquely identify an Application across all C3 clusters
   */
  static fromAppId(appId: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium_Config;

  /**
   * Verify if the CloudId has all the necessary components.
   * Individual components are not validated.
   *
   * @return true if this resource has all required components of Canonical C3 Identifier.
   */
  hasId(): boolean;

  /**
   * Verify if the CloudId instance requires a cloudRole.
   *
   * @return whether this CloudId instance requires a cloudRole.
   */
  isRoleRequired(): boolean;

  /**
   * Verify if the CloudId instance requires a subsequence number.
   *
   * @return whether this CloudId instance requires a subsequence number.
   */
  isSubseqRequired(): boolean;

  /**
   * Fields in CloudId should not contain special characters and must abide to certain regex rules.
   * If a field requires a value but one is not provided, validation will fail.
   * If seq and subseq digits do not match the length specified by {@link Ann.Cloud#hasRole}, validation will fail.
   * If the individual fields (e.g. cluster, env, app) do not add up to the resulting ID string, validation will fail.
   *
   * @return true if every component for this resource has valid values.
   */
  isValidId(): boolean;

  /**
   * Validates if the {@link Cluster} ID for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Cluster ID.
   */
  validateCluster(): boolean;

  /**
   * Validates if the {@link Env} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Env name.
   */
  validateEnv(): boolean;

  /**
   * Validates if the {@link App} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted App name.
   */
  validateApp(): boolean;

  /**
   * Validates if the cloudFunc for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudFunc.
   */
  validateFunc(): boolean;

  /**
   * Validates if the cloudRole for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudRole.
   */
  validateRole(): boolean;

  /**
   * Validates if the sequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted sequence number.
   */
  validateSeq(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for sequence number.
   */
  validateSeqLength(): boolean;

  /**
   * Validates if the subsequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted subsequence number.
   */
  validateSubseq(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for subsequence number.
   */
  validateSubseqLength(): boolean;

  /**
   * C3 Cluster ID that manages this resource. Will return #cluster (sequence of characters before the first "-")
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  clusterId(): string | null;

  /**
   * C3 Environment ID that manages this resource. Will return unique ID of the environment <cluster>-<env>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  envId(): string | null;

  /**
   * C3 Application ID that manages this resource. Will return unique ID of the application <cluster>-<env>-<app>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  appId(): string | null;

  /**
   * @return C3 ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm-app-l-0001
   */
  safeId(): string;

  /**
   * @return C3 cluster ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  safeCluster(): string;

  /**
   * @return C3 environment name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster component
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   */
  safeEnv(): string;

  /**
   * @return C3 environment ID for this instance based on available fields.
   * Note: It will always contain #cluster component and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  safeEnvId(): string;

  /**
   * @return C3 application name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster or #env components
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   */
  safeApp(): string;

  /**
   * @return C3 application ID for this instance based on available fields.
   * Note: It will always contain #cluster and #env components and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  safeAppId(): string;

  /**
   * @return C3 function value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   */
  safeFunc(): string;

  /**
   * Cloud Credentials that should be used to access this resource.
   */
  safeCredentials(): CloudCredentials;

  /**
   * Cloud Provider for this Cloud Resource or Service.
   */
  cloudProvider(): CloudProvider;

  /**
   * Populate default values for all uninitialized Cloud Identifier fields in this Cloud Resource.
   */
  withDefaultId(): Selenium_Config;

  /**
   * Converts this CloudId to be a valid id satisfying all naming conventions and constraints.
   */
  sanitize(): Selenium_Config;

  /**
   * Sanitizes the given Cloud ID component by converting it to a lower case and removing non alphanumeric characters.
   *
   * @return sanitized Cloud ID component.
   */
  static sanitizeComponent(cloudIdComponent: string | null): string | null;

  /**
   * @return all config template jsons by cloud template key and override.
   *        e.g. {'instance': {'TAG': ... , 'POD': ...}
   *              'instance-jupyter': {'TAG': ... , 'POD': ...}}
   */
  allCloudConfigOverrides(): C3.Map<string | null, C3.Map<string | null, any | null>>;

  /**
   * @return map of pair of config and secret files by override and by cloud template key;
   *         note that will always return instance of File even if physical file doesn't exist.
   */
  allCloudConfigAndSecretFiles(): C3.Map<string | null, C3.Map<string | null, Pair<File | null, File | null> | null>>;

  /**
   * @return @resourceName if set or result of #generateResourceName method call
   */
  safeResourceName(): string;

  /**
   * @return @resourceSecondaryId if set or result of #generateResourceSecondaryId method call
   */
  safeResourceSecondaryId(): string;

  /**
   * @return instance of CloudRef for this resource; will fail if `failIfInvalid` is `true` and missing all ref fields.
   */
  toCloudRef(failIfInvalid?: boolean): CloudRef | null;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided C3 identifier string.
   *
   * Note that if `id.func` is not for this Cloud Resource type then construct instance of this type that is a
   * dependency or a parent of provided Cloud Resource.
   */
  static fromId(id: string, failIfInvalid?: boolean): Selenium_Config;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Identifier.
   *
   * Note that if `id.func` is not for this Cloud Resource type then construct instance of this type that is a
   * dependency or a parent of provided Cloud Resource.
   */
  static fromCloudId(id: CloudId, failIfInvalid?: boolean): Selenium_Config;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference.
   */
  static fromCloudRef(ref: CloudRef, failIfInvalid?: boolean): Selenium_Config;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Func component and optional role.
   */
  static fromCloudFunc(func: string, role?: string | null, seq?: string | null): Selenium_Config;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Id.
   */
  static fromResourceId(resourceId: string | null): Selenium_Config;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Secondary Id and available Cloud Configuration.
   */
  static fromResourceSecondaryId(resourceSecondaryId: string | null): Selenium_Config;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Name and available Cloud Configuration.
   */
  static fromResourceName(name: string | null): Selenium_Config;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Reference field value and available Cloud Configuration.
   *
   * @see CloudRef
   */
  static fromReferenceField(fieldName: string, value: string | null, failIfInvalid?: boolean): Selenium_Config;

  /**
   * Constructs config based defaults and artifacts for all configurable fields
   *
   * @see CloudRef
   */
  fromConfigTemplate(spec?: CloudResourceOperationSpec | null): Selenium_Config;

  /**
   * Populate default values for all uninitialized configurable fields in this Cloud Resource.
   */
  withDefaultConfig(spec?: CloudResourceOperationSpec | null): Selenium_Config;

  /**
   * @return default #resourceName. Uses C3 #id by default.
   */
  generateResourceName(): string | null;

  /**
   * Optional override to generate #resourceSecondaryId from available fields. e.g AwsS3Bucket does it based on
   * #resourceName (bucket name)
   */
  generateResourceSecondaryId(): string | null;

  /**
   * @returns #resourceNamespace. Checks CloudDeploymentConfig to determine if cluster or env name
   */
  generateResourceNamespace(): string | null;

  /**
   * Creates a json from a Config
   *
   * @returns config in the form of a json based on @ser(path="")
   */
  jsonCfg(): any | null;

  /**
   * Computed name of helm release from CloudService#id
   */
  get releaseName(): string | null;

  /**
   * Retrieve all known cloud services in this cluster for the appId; if called on a subtype, limit results to instances of that.
   * The source of truth for this list is the CloudServiceConfig type.
   * @param appId - AppId to filter by
   */
  static listForApp(appId: string): C3.Array<CloudServiceConfig | null>;

  /**
   * Retrieve all known cloud services in this cluster for the envId; if called on a subtype, limit results to instances of that.
   * The source of truth for this list is the CloudServiceConfig type.
   * @param envId - EnvId to filter by
   */
  static listForEnv(envId: string): C3.Array<CloudServiceConfig | null>;

  /**
   * Clear the config of the cloud services for the appId for all overrides.
   */
  static clearConfigsForApp(appId: string): BatchError | null;

  /**
   * Clear the config of the cloud services for the envId for all overrides.
   */
  static clearConfigsForEnv(envId: string): BatchError | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
