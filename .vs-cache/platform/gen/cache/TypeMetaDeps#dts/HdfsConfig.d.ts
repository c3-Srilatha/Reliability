// TypeScript definitions for the C3 type HdfsConfig

/**
 * HDFS based C3 file system configurations.
 * For additional configurations, e.g., to enable Kerberos authentication, please setup through
 * {@link HadoopSpec#additionalConfigs}.
 *
 * Some common configurations that you may need when configuring authentication:
 * * hadoop.security.authentication: simple/kerberos
 * * hadoop.security.authorization: true/false. True to enable RPC service-level authorization.
 * * hadoop.rpc.protection: authentication (default)/integrity/privacy
 * * dfs.block.access.token.enable: true/false. True to enable HDFS block access tokens for secure operations.
 * * dfs.namenode.kerberos.principal: Kerberos principal name for the NameNode.
 *
 * For a full list of Hdfs configurations, please refer to
 * [Apache Hdfs](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/hdfs-default.xml).
 *
 * @remarks this represents a value passed to a method that expects an instance of HdfsConfig
 */
declare interface IHdfsConfig {

  /**
   * Config type instance that contains this config child.
   */
  parent?: IFileSystemConfig | null;

  /**
   * Maximum number of times the operation will be retried (not including the initial try).
   */
  maxRetries: number;

  /**
   * Sleep time for first retry (plus randomization). If <= 0 the default will be used.
   */
  initialSleepMillis: number;

  /**
   * The exponent to multiply the prior wait time in generating the next. This should be > 1.0 and probably less than
   * 3.0. Note that 2.0 will double the maximum possible wait each time. If <= 1 the default will be used.
   */
  exponent: number;

  /**
   * Maximum wait time allowed for each retry. If <= 0 the default will be used.
   */
  maxSleepMillis?: number | null;

  /**
   * Maximum wait time allowed for all retry waits
   */
  maxTotalMillis?: number | null;

  /**
   * The minimum sleep time guaranteed each iteration.
   */
  minSleepMillis?: number | null;

  /**
   * If set to true, it will retry when result is empty.
   */
  retryOnEmptyResult?: boolean;

  /**
   * Determines the algorithm used to calculate jitter. See {@link ExponentialBackoff.Jitter}.
   */
  jitter?: string | null;

  /**
   * If true, all errors will be retried. If false, only retryable errors {@link Retry#shouldRetryLogic}
   * will be retried.
   */
  retryAllErrors?: boolean;

  /**
   * If true, the retry logic will report each retry attempt in root `C3.action()`'s `#customContext` with key as
   * `retry-trace`.
   */
  trace?: boolean;

  /**
   * DO NOT USE - IGNORED!
   */
  forUpsert?: boolean;

  /**
   * @return `true` if this file system is enabled.
   */
  enabled?: boolean;

  /**
   * @return a map of C3 File System mount to actual content location URLs. Key in this map can be one of
   *         {@link FileSystemMount} values or any arbitrary name that will be exposed as
   *         `<file system scheme>://<mount>/`. Value in this map can be an actual content location URL or template
   *         whose variables will be substituted at runtime. E.g.
   *         ```
   *         { "/":      "s3://c3--${cluster}-${env}/fs/${app}/" }
   *         { "public": "s3://c3--${cluster}-public/" }
   *         ```
   */
  mounts?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * List of mounts that are read only.
   */
  readOnlyMounts?: C3.Set<string | null> | Array<string | null>;

  /**
   * List of mounts that are ACL enabled. For mounts that are ACL enabled access control is performed by
   * {@link FileMeta}.
   */
  aclEnabledMounts?: C3.Set<string | null> | Array<string | null>;

  /**
   * The username used in basic credentials.
   */
  username?: string | null;

  /**
   * The password used in basic credentials.
   */
  password?: string | null;

  /**
   * For systems that have a secondary secret key that isn't the password (e.g. Salesforce/CosmosDb)
   */
  secretKey?: string | null;

  /**
   * Other properties for connection configuration. Please note that properties are application specific.
   *
   * Example: {"readOnly", false} specify the connection in read-only mode.
   *          {"sslmode", "some-mode"} specify the sssl mode of the connection
   *          {loginTimeout, 60} specify how long wait for establishment of a database connection in seconds.
   */
  properties?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Other "secret" properties for connection configuration.
   *
   * Example: {"password", <myPasswword>} specify the password
   */
  secretProperties?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Kerberos principal. Typical format is primary/instance@REALM. (ie. hive/_HOST/PRINCIPAL.COM)
   */
  principal?: string | null;

  /**
   * This is where you put the additional configurations that're not provided in the basic config.
   * Note that you can pass any key-value pair as long as it's supported by the service, e.g., to enable kerberos
   * authentication, ["hadoop.security.authentication", "kerberos"] is necessary.
   */
  additionalConfigs?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * The Kerberos configuration content for realms and hostnames or url of krb5 realm file.
   * If this is file url, the url should end with krb5.conf or krb5.ini
   * If this is krb5.conf content, you can pass as plain text string, and use "\\n" for line breakers.
   */
  krbContentOrFileUrl?: string | null;

  /**
   * The user's keytab content that contains encrypted user name and password. As the file is in binary format,
   * the content needs to be base64 encoded for this field. In Kerberos world, you can login using a principal name
   * and the password, or, a keytab file that's generated from the principal and the password.
   */
  keytabContent?: string | null;

  /**
   * The path for the keytab file. If password, keytab content and keytabFile path is given, keytab file path is used.
   * the keytab content is saved in the file at this location.
   */
  keytabFilePath?: string | null;

  /**
   * unique name of a Service Plugin, e.g. cdh5.14.2. If there's no exact match, a plugin will be looked for with
   * the highest version that matches the given value. e.g. if cdh6 is given, cdh6.3.3 will be resolved.
   */
  pluginId?: string | null;

  /**
   * The base directory for this plugin. This directory is always on the local file system.
   */
  pluginDir?: string | null;

  /**
   * During dev, this boolean property will be true.
   */
  isDevPlugin?: boolean;

  /**
   * classpaths for the plugin
   *
   * If void, jar files from the plugin directory is tested and used. If there's no such directory for the plugin,
   * the Java target classes folder and the jar Class-Paths directive are used as the classpaths.
   * If this field is not null, the list of directories or jar files in the array are used as the classpaths.
   */
  pluginPaths?: C3.Array<string | null> | Array<string | null>;

  fsDefaultName?: string | null;

  /**
   * Deprecated as mounts is used instead
   */
  pathPrefix?: string | null;

  /**
   * Recover the Apache FileSystem when GSS error occurs if not set or set to false
   */
  stetFileSystemOnError?: boolean;
}

/**
 * HDFS based C3 file system configurations.
 * For additional configurations, e.g., to enable Kerberos authentication, please setup through
 * {@link HadoopSpec#additionalConfigs}.
 *
 * Some common configurations that you may need when configuring authentication:
 * * hadoop.security.authentication: simple/kerberos
 * * hadoop.security.authorization: true/false. True to enable RPC service-level authorization.
 * * hadoop.rpc.protection: authentication (default)/integrity/privacy
 * * dfs.block.access.token.enable: true/false. True to enable HDFS block access tokens for secure operations.
 * * dfs.namenode.kerberos.principal: Kerberos principal name for the NameNode.
 *
 * For a full list of Hdfs configurations, please refer to
 * [Apache Hdfs](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/hdfs-default.xml).
 *
 * @remarks this represents a made instance of HdfsConfig
 */
declare class HdfsConfig extends Obj {

  /**
   * Config type instance that contains this config child.
   */
  readonly parent?: FileSystemConfig | null;
  withParent(parent: IFileSystemConfig | null): HdfsConfig;

  /**
   * Maximum number of times the operation will be retried (not including the initial try).
   */
  readonly maxRetries: number;
  withMaxRetries(maxRetries: number): HdfsConfig;

  /**
   * Sleep time for first retry (plus randomization). If <= 0 the default will be used.
   */
  readonly initialSleepMillis: number;
  withInitialSleepMillis(initialSleepMillis: number): HdfsConfig;

  /**
   * The exponent to multiply the prior wait time in generating the next. This should be > 1.0 and probably less than
   * 3.0. Note that 2.0 will double the maximum possible wait each time. If <= 1 the default will be used.
   */
  readonly exponent: number;
  withExponent(exponent: number): HdfsConfig;

  /**
   * Maximum wait time allowed for each retry. If <= 0 the default will be used.
   */
  readonly maxSleepMillis?: number | null;
  withMaxSleepMillis(maxSleepMillis: number | null): HdfsConfig;

  /**
   * Maximum wait time allowed for all retry waits
   */
  readonly maxTotalMillis?: number | null;
  withMaxTotalMillis(maxTotalMillis: number | null): HdfsConfig;

  /**
   * The minimum sleep time guaranteed each iteration.
   */
  readonly minSleepMillis?: number | null;
  withMinSleepMillis(minSleepMillis: number | null): HdfsConfig;

  /**
   * If set to true, it will retry when result is empty.
   */
  readonly retryOnEmptyResult?: boolean;
  withRetryOnEmptyResult(retryOnEmptyResult: boolean): HdfsConfig;

  /**
   * Determines the algorithm used to calculate jitter. See {@link ExponentialBackoff.Jitter}.
   */
  readonly jitter?: string | null;
  withJitter(jitter: string | null): HdfsConfig;

  /**
   * If true, all errors will be retried. If false, only retryable errors {@link Retry#shouldRetryLogic}
   * will be retried.
   */
  readonly retryAllErrors?: boolean;
  withRetryAllErrors(retryAllErrors: boolean): HdfsConfig;

  /**
   * If true, the retry logic will report each retry attempt in root `C3.action()`'s `#customContext` with key as
   * `retry-trace`.
   */
  readonly trace?: boolean;
  withTrace(trace: boolean): HdfsConfig;

  /**
   * DO NOT USE - IGNORED!
   */
  readonly forUpsert?: boolean;
  withForUpsert(forUpsert: boolean): HdfsConfig;

  /**
   * @return `true` if this file system is enabled.
   */
  readonly enabled?: boolean;
  withEnabled(enabled: boolean): HdfsConfig;

  /**
   * @return a map of C3 File System mount to actual content location URLs. Key in this map can be one of
   *         {@link FileSystemMount} values or any arbitrary name that will be exposed as
   *         `<file system scheme>://<mount>/`. Value in this map can be an actual content location URL or template
   *         whose variables will be substituted at runtime. E.g.
   *         ```
   *         { "/":      "s3://c3--${cluster}-${env}/fs/${app}/" }
   *         { "public": "s3://c3--${cluster}-public/" }
   *         ```
   */
  readonly mounts?: C3.Map<string | null, string | null>;
  withMounts(mounts: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): HdfsConfig;

  /**
   * List of mounts that are read only.
   */
  readonly readOnlyMounts?: C3.Set<string | null>;
  withReadOnlyMounts(readOnlyMounts: C3.Set<string | null> | Array<string | null>): HdfsConfig;

  /**
   * List of mounts that are ACL enabled. For mounts that are ACL enabled access control is performed by
   * {@link FileMeta}.
   */
  readonly aclEnabledMounts?: C3.Set<string | null>;
  withAclEnabledMounts(aclEnabledMounts: C3.Set<string | null> | Array<string | null>): HdfsConfig;

  /**
   * The username used in basic credentials.
   */
  readonly username?: string | null;
  withUsername(username: string | null): HdfsConfig;

  /**
   * The password used in basic credentials.
   */
  readonly password?: string | null;
  withPassword(password: string | null): HdfsConfig;

  /**
   * For systems that have a secondary secret key that isn't the password (e.g. Salesforce/CosmosDb)
   */
  readonly secretKey?: string | null;
  withSecretKey(secretKey: string | null): HdfsConfig;

  /**
   * Other properties for connection configuration. Please note that properties are application specific.
   *
   * Example: {"readOnly", false} specify the connection in read-only mode.
   *          {"sslmode", "some-mode"} specify the sssl mode of the connection
   *          {loginTimeout, 60} specify how long wait for establishment of a database connection in seconds.
   */
  readonly properties?: C3.Map<string | null, any>;
  withProperties(properties: C3.Map<string | null, any> | {[key: string | null]: any}): HdfsConfig;

  /**
   * Other "secret" properties for connection configuration.
   *
   * Example: {"password", <myPasswword>} specify the password
   */
  readonly secretProperties?: C3.Map<string | null, any>;
  withSecretProperties(secretProperties: C3.Map<string | null, any> | {[key: string | null]: any}): HdfsConfig;

  /**
   * Kerberos principal. Typical format is primary/instance@REALM. (ie. hive/_HOST/PRINCIPAL.COM)
   */
  readonly principal?: string | null;
  withPrincipal(principal: string | null): HdfsConfig;

  /**
   * This is where you put the additional configurations that're not provided in the basic config.
   * Note that you can pass any key-value pair as long as it's supported by the service, e.g., to enable kerberos
   * authentication, ["hadoop.security.authentication", "kerberos"] is necessary.
   */
  readonly additionalConfigs?: C3.Map<string | null, any>;
  withAdditionalConfigs(additionalConfigs: C3.Map<string | null, any> | {[key: string | null]: any}): HdfsConfig;

  /**
   * The Kerberos configuration content for realms and hostnames or url of krb5 realm file.
   * If this is file url, the url should end with krb5.conf or krb5.ini
   * If this is krb5.conf content, you can pass as plain text string, and use "\\n" for line breakers.
   */
  readonly krbContentOrFileUrl?: string | null;
  withKrbContentOrFileUrl(krbContentOrFileUrl: string | null): HdfsConfig;

  /**
   * The user's keytab content that contains encrypted user name and password. As the file is in binary format,
   * the content needs to be base64 encoded for this field. In Kerberos world, you can login using a principal name
   * and the password, or, a keytab file that's generated from the principal and the password.
   */
  readonly keytabContent?: string | null;
  withKeytabContent(keytabContent: string | null): HdfsConfig;

  /**
   * The path for the keytab file. If password, keytab content and keytabFile path is given, keytab file path is used.
   * the keytab content is saved in the file at this location.
   */
  readonly keytabFilePath?: string | null;
  withKeytabFilePath(keytabFilePath: string | null): HdfsConfig;

  /**
   * unique name of a Service Plugin, e.g. cdh5.14.2. If there's no exact match, a plugin will be looked for with
   * the highest version that matches the given value. e.g. if cdh6 is given, cdh6.3.3 will be resolved.
   */
  readonly pluginId?: string | null;
  withPluginId(pluginId: string | null): HdfsConfig;

  /**
   * The base directory for this plugin. This directory is always on the local file system.
   */
  readonly pluginDir?: string | null;
  withPluginDir(pluginDir: string | null): HdfsConfig;

  /**
   * During dev, this boolean property will be true.
   */
  readonly isDevPlugin?: boolean;
  withIsDevPlugin(isDevPlugin: boolean): HdfsConfig;

  /**
   * classpaths for the plugin
   *
   * If void, jar files from the plugin directory is tested and used. If there's no such directory for the plugin,
   * the Java target classes folder and the jar Class-Paths directive are used as the classpaths.
   * If this field is not null, the list of directories or jar files in the array are used as the classpaths.
   */
  readonly pluginPaths?: C3.Array<string | null>;
  withPluginPaths(pluginPaths: C3.Array<string | null> | Array<string | null>): HdfsConfig;

  readonly fsDefaultName?: string | null;
  withFsDefaultName(fsDefaultName: string | null): HdfsConfig;

  /**
   * Deprecated as mounts is used instead
   */
  readonly pathPrefix?: string | null;
  withPathPrefix(pathPrefix: string | null): HdfsConfig;

  /**
   * Recover the Apache FileSystem when GSS error occurs if not set or set to false
   */
  readonly stetFileSystemOnError?: boolean;
  withStetFileSystemOnError(stetFileSystemOnError: boolean): HdfsConfig;

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
  static fromJson(json: any | null): HdfsConfig | null;

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
  static fromJsonString(json: string | null): HdfsConfig | null;

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
  static fromXmlString(xml: string | null): HdfsConfig | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): HdfsConfig | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): HdfsConfig;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): HdfsConfig;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): HdfsConfig;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<HdfsConfig | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<HdfsConfig | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): HdfsConfig;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): HdfsConfig;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): HdfsConfig;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): HdfsConfig;

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
  withField(field: string, value: any, doNotConvert?: boolean): HdfsConfig;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): HdfsConfig;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): HdfsConfig;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): HdfsConfig;

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
  withoutFieldAtPath(path: string): HdfsConfig;

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
  withoutField(field: string | null): HdfsConfig;

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
  withoutField(field: FieldType | null): HdfsConfig;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): HdfsConfig;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): HdfsConfig;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): HdfsConfig;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): HdfsConfig;

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
  defaultField(field: string): HdfsConfig;

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
  defaultField(field: FieldType): HdfsConfig;

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
  unsetField(field: string): HdfsConfig;

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
  unsetField(field: FieldType): HdfsConfig;

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
  removeField(field: string): HdfsConfig;

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
  removeField(field: FieldType): HdfsConfig;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): HdfsConfig;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): HdfsConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): HdfsConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): HdfsConfig;

  mergeJson(json: any | null): HdfsConfig;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): HdfsConfig;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): HdfsConfig;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<HdfsConfig | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<HdfsConfig | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<HdfsConfig | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<HdfsConfig | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<HdfsConfig | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, HdfsConfig | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, HdfsConfig | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<HdfsConfig | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<HdfsConfig | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): HdfsConfig;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): HdfsConfig;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): HdfsConfig;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): HdfsConfig;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): HdfsConfig;

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
  static make(fields: any, withDefaults?: boolean): HdfsConfig;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): HdfsConfig;

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
  afterMake(): HdfsConfig;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): HdfsConfig;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<HdfsConfig>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): HdfsConfig;

  /**
   * @return this child config without any secret values.
   */
  removeSecrets(): HdfsConfig | null;

  /**
   * @return this child config with only secret values.
   */
  removeNonSecrets(): HdfsConfig | null;

  /**
   * @return true if this ConfigChild type has Ann.Config#secret annotation
   */
  static hasSecretField(): boolean;

  /**
   * @return parent file system scheme
   */
  get scheme(): string | null;

  /**
   * Sets mount. Function argument can be one of {@link FileSystemMount} values.
   */
  setMount(mount: string, mountUrl: string, override?: string | null): C3.Map<string | null, string | null>;

  /**
   * Removes specified mount. Function argument can be one of {@link FileSystemMount} values.
   */
  removeMount(mount: string, override?: string | null): C3.Map<string | null, string | null>;

  /**
   * Enable ACL on a mount. Function argument can be one of {@link FileSystemMount} values.
   * Example usage:
   * ```
   * FileSystem.fileSystemConfig()
   *           .childConfig(FileSystem.inst().scheme())
   *           .enableAcl(FileSystemMount.DEFAULT)
   * ```
   */
  enableAcl(mount: string, override?: string | null): C3.Array<string | null>;

  /**
   * Disable ACL on a mount. Function argument can be one of {@link FileSystemMount} values.
   * Usage is similar as for #enableAcl
   */
  disableAcl(mount: string, override?: string | null): C3.Array<string | null>;

  /**
   * Sets read-only for provided mount and returns all read-only mounts in this file-system.
   */
  setReadOnly(mount: string, override?: string | null): C3.Set<string | null>;

  /**
   * Removes read-only mode for provided mount and returns all read-only mounts in this file-system.
   */
  unsetReadOnly(mount: string, override?: string | null): C3.Set<string | null>;

  /**
   * @return a boolean on whether the specified mountUrl is valid or not.
   */
  isValidMountUrl(mountUrl: string): boolean;

  /**
   * @return true/false that indicates if Kerberos is enabled within configuration.
   */
  isKerberosEnabled(): boolean;

  /**
   * Refresh and reload krb5.conf.
   */
  refreshKrbRealm(): void;

  /**
   * list of service plugins that have been discovered and used
   */
  static listPlugins(): C3.Map<string | null, ServicePlugin | null>;

  /**
   * find a service plugin from a plugin prefix
   */
  static findPlugin(pluginIdPrefix: string): ServicePlugin | null;

  /**
   * Unload plugin. This will trigger detecting a new plugin zip.
   */
  static unloadPlugin(pluginIdPrefix: string): void;

  /**
   * Unload plugins. This will trigger detecting new plugin zips.
   */
  static unloadPlugins(): void;

  /**
   * Find the implementation class of the given base class and return the name of the class.
   */
  implClassName(baseClass?: any): string | null;

  /**
   * List all implementation classes.
   */
  classes(): C3.Array<string | null>;

  /**
   * Returns number of function invocations since last reset.
   */
  invocations(): number | null;

  /**
   * Returns total elapsed time in seconds, that was spent in the plugin.
   */
  elapsedTime(): number | null;

  /**
   * Returns a map of signatures(usually method names) to invocation counters.
   */
  classInvocations(class_: string): C3.Map<string | null, number | null>;

  /**
   * Returns a map of signatures(usually method names) to elapsed times in seconds.
   */
  classElapsedTimes(class_: string): C3.Map<string | null, number | null>;

  /**
   * Resets all statistics including invocation counters.
   */
  static resetStats(): void;

  /**
   * Returns the plugin manifest that details the distribution.
   */
  manifest(): PluginManifest | null;
}


interface λFunction<T, R> {
  (t: T): R
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
