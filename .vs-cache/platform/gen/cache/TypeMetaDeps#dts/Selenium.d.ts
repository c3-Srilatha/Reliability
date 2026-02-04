// TypeScript definitions for the C3 type Selenium

/**
 * @remarks this represents a value passed to a method that expects an instance of Selenium
 */
declare interface ISelenium {

  /**
   * Cloud Identifier for this service
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
}

/**
 * @remarks this represents a made instance of Selenium
 */
declare class Selenium extends Obj {

  /**
   * Cloud Identifier for this service
   */
  readonly id: string;
  withId(id: string): Selenium;

  /**
   * Cloud Identifier for this service
   */
  static readonly id: string;

  /**
   * C3 Cluster ID component (first) in {@link #id}
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  readonly cluster?: string | null;
  withCluster(cluster: string | null): Selenium;

  /**
   * C3 Cluster ID component (first) in {@link #id}
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  static readonly cluster?: string | null;

  /**
   * C3 Environment name (second) component in {@link #id}; e.g. srv,ui,c3.
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   * An Environment name must be unique within a Cluster.
   */
  readonly env?: string | null;
  withEnv(env: string | null): Selenium;

  /**
   * C3 Environment name (second) component in {@link #id}; e.g. srv,ui,c3.
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   * An Environment name must be unique within a Cluster.
   */
  static readonly env?: string | null;

  /**
   * C3 Application name (third) component in {@link #id}; e.g. c3,crm,lightbulb
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   * An Application name must be unique within an Environment.
   */
  readonly app?: string | null;
  withApp(app: string | null): Selenium;

  /**
   * C3 Application name (third) component in {@link #id}; e.g. c3,crm,lightbulb
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   * An Application name must be unique within an Environment.
   */
  static readonly app?: string | null;

  /**
   * Cloud function abbreviation; e.g. app, awsemr, awsvpc, azvm.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   *
   * @see CloudResource#cloudFunc
   * @see CloudResource#allCloudFuncs
   */
  readonly func?: string | null;
  withFunc(func: string | null): Selenium;

  /**
   * Cloud function abbreviation; e.g. app, awsemr, awsvpc, azvm.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   *
   * @see CloudResource#cloudFunc
   * @see CloudResource#allCloudFuncs
   */
  static readonly func?: string | null;

  /**
   * C3 role; e.g. m, w; cannot be number only.
   * E.g. prod-c3-crm-app-l-0001
   * => l
   *
   * @see CloudResource#cloudRoles
   */
  readonly role?: string | null;
  withRole(role: string | null): Selenium;

  /**
   * C3 role; e.g. m, w; cannot be number only.
   * E.g. prod-c3-crm-app-l-0001
   * => l
   *
   * @see CloudResource#cloudRoles
   */
  static readonly role?: string | null;

  /**
   * Sequence number - should only contain numbers - it is recommended to have fixed number of digits for a
   * `<func>-<role>` with 0 left padding so that list of resources are naturally ordered; can be 2, 3, 4 or 5 digits.
   * E.g. prod-c3-crm-app-l-0001
   * => 0001
   *
   * @see CloudResource#cloudSeqLength
   */
  readonly seq?: string | null;
  withSeq(seq: string | null): Selenium;

  /**
   * Sequence number - should only contain numbers - it is recommended to have fixed number of digits for a
   * `<func>-<role>` with 0 left padding so that list of resources are naturally ordered; can be 2, 3, 4 or 5 digits.
   * E.g. prod-c3-crm-app-l-0001
   * => 0001
   *
   * @see CloudResource#cloudSeqLength
   */
  static readonly seq?: string | null;

  /**
   * Sub-sequence alphanumeric string (dot allowed)
   * E.g. prod-c3-crm-app-t-0001-kk03
   * => 001
   */
  readonly subseq?: string | null;
  withSubseq(subseq: string | null): Selenium;

  /**
   * Sub-sequence alphanumeric string (dot allowed)
   * E.g. prod-c3-crm-app-t-0001-kk03
   * => 001
   */
  static readonly subseq?: string | null;

  /**
   * Cloud service provider generated native ID, such as vpcId and securityGroupId.
   */
  readonly resourceId?: string | null;
  withResourceId(resourceId: string | null): Selenium;

  /**
   * Cloud service provider generated native ID, such as vpcId and securityGroupId.
   */
  static readonly resourceId?: string | null;

  /**
   * Cloud service provider generated native secondary ID, such as Amazon Resource Name (ARN).
   */
  readonly resourceSecondaryId?: string | null;
  withResourceSecondaryId(resourceSecondaryId: string | null): Selenium;

  /**
   * Cloud service provider generated native secondary ID, such as Amazon Resource Name (ARN).
   */
  static readonly resourceSecondaryId?: string | null;

  /**
   * User defined name attribute managed by cloud service provider.
   */
  readonly resourceName?: string | null;
  withResourceName(resourceName: string | null): Selenium;

  /**
   * User defined name attribute managed by cloud service provider.
   */
  static readonly resourceName?: string | null;

  /**
   * ResourceGroup for Azure resources and K8s namespaces
   */
  readonly resourceGroupName?: string | null;
  withResourceGroupName(resourceGroupName: string | null): Selenium;

  /**
   * ResourceGroup for Azure resources and K8s namespaces
   */
  static readonly resourceGroupName?: string | null;

  /**
   * When true, CloudResource will GET from locally persisted Config framework
   * When false, CloudResource will GET from remote Cloud APIs
   */
  readonly fullyConfigured?: boolean;
  withFullyConfigured(fullyConfigured: boolean): Selenium;

  /**
   * When true, CloudResource will GET from locally persisted Config framework
   * When false, CloudResource will GET from remote Cloud APIs
   */
  static readonly fullyConfigured?: boolean;

  /**
   * resourceNamespace for K8s Resources (only those which are associated with a namespace)
   */
  readonly resourceNamespace?: string | null;
  withResourceNamespace(resourceNamespace: string | null): Selenium;

  /**
   * resourceNamespace for K8s Resources (only those which are associated with a namespace)
   */
  static readonly resourceNamespace?: string | null;

  /**
   * This flag indicates that this cloud resource managed by third party, C3 will not create or destroy this resource
   * implicitly.
   */
  readonly external?: boolean;
  withExternal(external: boolean): Selenium;

  /**
   * This flag indicates that this cloud resource managed by third party, C3 will not create or destroy this resource
   * implicitly.
   */
  static readonly external?: boolean;

  /**
   * Cloud Credentials for this resource.
   */
  readonly credentials?: CloudCredentials | null;
  withCredentials(credentials: ICloudCredentials | null): Selenium;

  /**
   * Cloud Credentials for this resource.
   */
  static readonly credentials?: CloudCredentials | null;

  /**
   * `true` if resourceName was set via #generateResourceName.
   */
  readonly hasGeneratedResourceName?: boolean;
  withHasGeneratedResourceName(hasGeneratedResourceName: boolean): Selenium;

  /**
   * `true` if resourceName was set via #generateResourceName.
   */
  static readonly hasGeneratedResourceName?: boolean;

  /**
   * `true` if resourceName was set via #generateResourceSecondaryId.
   */
  readonly hasGeneratedResourceSecondaryId?: boolean;
  withHasGeneratedResourceSecondaryId(hasGeneratedResourceSecondaryId: boolean): Selenium;

  /**
   * `true` if resourceName was set via #generateResourceSecondaryId.
   */
  static readonly hasGeneratedResourceSecondaryId?: boolean;

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
  static fromJson(json: any | null): Selenium | null;

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
  static fromJsonString(json: string | null): Selenium | null;

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
  static fromXmlString(xml: string | null): Selenium | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Selenium | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Selenium;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Selenium;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Selenium;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Selenium | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Selenium;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Selenium;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Selenium;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Selenium;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): Selenium;

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
  withField(field: string, value: any, doNotConvert?: boolean): Selenium;

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
  static withField(field: string, value: any, doNotConvert?: boolean): Selenium;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Selenium;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): Selenium;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Selenium;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Selenium;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Selenium;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Selenium;

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
  withoutFieldAtPath(path: string): Selenium;

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
  static withoutFieldAtPath(path: string): Selenium;

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
  withoutField(field: string | null): Selenium;

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
  static withoutField(field: string | null): Selenium;

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
  withoutField(field: FieldType | null): Selenium;

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
  static withoutField(field: FieldType | null): Selenium;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Selenium;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): Selenium;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Selenium;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Selenium;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Selenium;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): Selenium;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Selenium;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Selenium;

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
  defaultField(field: string): Selenium;

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
  static defaultField(field: string): Selenium;

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
  defaultField(field: FieldType): Selenium;

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
  static defaultField(field: FieldType): Selenium;

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
  unsetField(field: string): Selenium;

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
  static unsetField(field: string): Selenium;

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
  unsetField(field: FieldType): Selenium;

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
  static unsetField(field: FieldType): Selenium;

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
  removeField(field: string): Selenium;

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
  static removeField(field: string): Selenium;

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
  removeField(field: FieldType): Selenium;

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
  static removeField(field: FieldType): Selenium;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Selenium;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Selenium;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Selenium;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): Selenium;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Selenium;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Selenium;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Selenium;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Selenium;

  mergeJson(json: any | null): Selenium;

  static mergeJson(json: any | null): Selenium;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Selenium;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Selenium;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Selenium;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): Selenium;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Selenium | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<Selenium | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Selenium | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Selenium | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Selenium | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<Selenium | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Selenium | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Selenium | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Selenium | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Selenium | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<Selenium | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Selenium | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Selenium;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Selenium;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Selenium;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Selenium;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Selenium;

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
  static make(fields: any, withDefaults?: boolean): Selenium;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Selenium | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Selenium;

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
  afterMake(): Selenium;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): Selenium;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Selenium;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Selenium>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Selenium;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   */
  config(secrets?: boolean): Selenium_Config;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   */
  static config(secrets?: boolean): Selenium_Config;

  /**
   * @return configuration key for this instance.
   */
  configKey(): string | null;

  /**
   * @return configuration key for this instance.
   */
  static configKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  configSingletonKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  static configSingletonKey(): string | null;

  /**
   * @return type configuration for the given {@link Configurable} type.
   * E.g. {@see REST} & {@see RestConfig}
   */
  static typeConfig(): Selenium_Config;

  /**
   * @return canonical C3 identifier of this Cloud Resource in the format of <cluster>-<env>-<app>-<func>-<role>-<seq>[-<subseq>].
   */
  toString(): string | null;

  /**
   * @return canonical C3 identifier of this Cloud Resource in the format of <cluster>-<env>-<app>-<func>-<role>-<seq>[-<subseq>].
   */
  static toString(): string | null;

  /**
   * Constructs Cloud Service instance based on provided C3 identifier string and configuration.
   *
   * @see #toString
   */
  static fromString(s: string | null): Selenium | null;

  /**
   * Constructs Cloud Service instance based on provided C3 identifier string and configuration.
   *
   * @see #toString
   */
  static fromString(s: string | null, failIfInvalid?: boolean): Selenium | null;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * @return key field value.
   */
  static keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  static singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Find Cloud Service in Cloud Provider based on provided C3 canonical cloud identifier
   */
  static forId(id: string | null, failIfMissing?: boolean): Selenium | null;

  /**
   * Construct a cloud ID from a cluster ID
   */
  static fromClusterId(clusterId: string, env: string, app: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium;

  /**
   * Construct a cloud ID from an environment ID
   * envId should be a combination of <cluster>-<env> to uniquely identify an Environment across all C3 clusters
   */
  static fromEnvId(envId: string, app: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium;

  /**
   * Construct a cloud ID from an application ID
   * appId should be a combination of <cluster>-<env>-<app> to uniquely identify an Application across all C3 clusters
   */
  static fromAppId(appId: string, func: string, role?: string | null, seq?: string | null, subseq?: string | null): Selenium;

  /**
   * Verify if the CloudId has all the necessary components.
   * Individual components are not validated.
   *
   * @return true if this resource has all required components of Canonical C3 Identifier.
   */
  hasId(): boolean;

  /**
   * Verify if the CloudId has all the necessary components.
   * Individual components are not validated.
   *
   * @return true if this resource has all required components of Canonical C3 Identifier.
   */
  static hasId(): boolean;

  /**
   * Verify if the CloudId instance requires a cloudRole.
   *
   * @return whether this CloudId instance requires a cloudRole.
   */
  isRoleRequired(): boolean;

  /**
   * Verify if the CloudId instance requires a cloudRole.
   *
   * @return whether this CloudId instance requires a cloudRole.
   */
  static isRoleRequired(): boolean;

  /**
   * Verify if the CloudId instance requires a subsequence number.
   *
   * @return whether this CloudId instance requires a subsequence number.
   */
  isSubseqRequired(): boolean;

  /**
   * Verify if the CloudId instance requires a subsequence number.
   *
   * @return whether this CloudId instance requires a subsequence number.
   */
  static isSubseqRequired(): boolean;

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
   * Fields in CloudId should not contain special characters and must abide to certain regex rules.
   * If a field requires a value but one is not provided, validation will fail.
   * If seq and subseq digits do not match the length specified by {@link Ann.Cloud#hasRole}, validation will fail.
   * If the individual fields (e.g. cluster, env, app) do not add up to the resulting ID string, validation will fail.
   *
   * @return true if every component for this resource has valid values.
   */
  static isValidId(): boolean;

  /**
   * Validates if the {@link Cluster} ID for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Cluster ID.
   */
  validateCluster(): boolean;

  /**
   * Validates if the {@link Cluster} ID for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Cluster ID.
   */
  static validateCluster(): boolean;

  /**
   * Validates if the {@link Env} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Env name.
   */
  validateEnv(): boolean;

  /**
   * Validates if the {@link Env} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted Env name.
   */
  static validateEnv(): boolean;

  /**
   * Validates if the {@link App} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted App name.
   */
  validateApp(): boolean;

  /**
   * Validates if the {@link App} name for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted App name.
   */
  static validateApp(): boolean;

  /**
   * Validates if the cloudFunc for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudFunc.
   */
  validateFunc(): boolean;

  /**
   * Validates if the cloudFunc for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudFunc.
   */
  static validateFunc(): boolean;

  /**
   * Validates if the cloudRole for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudRole.
   */
  validateRole(): boolean;

  /**
   * Validates if the cloudRole for this CloudId is correctly formatted.
   *
   * @return true if this resource has a correctly formatted cloudRole.
   */
  static validateRole(): boolean;

  /**
   * Validates if the sequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted sequence number.
   */
  validateSeq(): boolean;

  /**
   * Validates if the sequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted sequence number.
   */
  static validateSeq(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for sequence number.
   */
  validateSeqLength(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for sequence number.
   */
  static validateSeqLength(): boolean;

  /**
   * Validates if the subsequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted subsequence number.
   */
  validateSubseq(): boolean;

  /**
   * Validates if the subsequence number for this CloudId is correctly formatted.
   * If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has a correctly formatted subsequence number.
   */
  static validateSubseq(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for subsequence number.
   */
  validateSubseqLength(): boolean;

  /**
   * Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
   *
   * @return true if this resource has the correct number of digits for subsequence number.
   */
  static validateSubseqLength(): boolean;

  /**
   * C3 Cluster ID that manages this resource. Will return #cluster (sequence of characters before the first "-")
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  clusterId(): string | null;

  /**
   * C3 Cluster ID that manages this resource. Will return #cluster (sequence of characters before the first "-")
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  static clusterId(): string | null;

  /**
   * C3 Environment ID that manages this resource. Will return unique ID of the environment <cluster>-<env>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  envId(): string | null;

  /**
   * C3 Environment ID that manages this resource. Will return unique ID of the environment <cluster>-<env>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  static envId(): string | null;

  /**
   * C3 Application ID that manages this resource. Will return unique ID of the application <cluster>-<env>-<app>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  appId(): string | null;

  /**
   * C3 Application ID that manages this resource. Will return unique ID of the application <cluster>-<env>-<app>
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  static appId(): string | null;

  /**
   * @return C3 ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm-app-l-0001
   */
  safeId(): string;

  /**
   * @return C3 ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm-app-l-0001
   */
  static safeId(): string;

  /**
   * @return C3 cluster ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  safeCluster(): string;

  /**
   * @return C3 cluster ID value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => prod
   */
  static safeCluster(): string;

  /**
   * @return C3 environment name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster component
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   */
  safeEnv(): string;

  /**
   * @return C3 environment name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster component
   * E.g. prod-c3-crm-app-l-0001
   * => c3
   */
  static safeEnv(): string;

  /**
   * @return C3 environment ID for this instance based on available fields.
   * Note: It will always contain #cluster component and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  safeEnvId(): string;

  /**
   * @return C3 environment ID for this instance based on available fields.
   * Note: It will always contain #cluster component and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3
   */
  static safeEnvId(): string;

  /**
   * @return C3 application name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster or #env components
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   */
  safeApp(): string;

  /**
   * @return C3 application name for this instance based on available fields.
   * Note: It will not contain any "-" nor any #cluster or #env components
   * E.g. prod-c3-crm-app-l-0001
   * => crm
   */
  static safeApp(): string;

  /**
   * @return C3 application ID for this instance based on available fields.
   * Note: It will always contain #cluster and #env components and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  safeAppId(): string;

  /**
   * @return C3 application ID for this instance based on available fields.
   * Note: It will always contain #cluster and #env components and "-"
   * @see #safeEnv
   * E.g. prod-c3-crm-app-l-0001
   * => prod-c3-crm
   */
  static safeAppId(): string;

  /**
   * @return C3 function value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   */
  safeFunc(): string;

  /**
   * @return C3 function value for this instance based on available fields.
   * E.g. prod-c3-crm-app-l-0001
   * => app
   */
  static safeFunc(): string;

  /**
   * Cloud Credentials that should be used to access this resource.
   */
  safeCredentials(): CloudCredentials;

  /**
   * Cloud Credentials that should be used to access this resource.
   */
  static safeCredentials(): CloudCredentials;

  /**
   * Cloud Provider for this Cloud Resource or Service.
   */
  cloudProvider(): CloudProvider;

  /**
   * Cloud Provider for this Cloud Resource or Service.
   */
  static cloudProvider(): CloudProvider;

  /**
   * Populate default values for all uninitialized Cloud Identifier fields in this Cloud Resource.
   */
  withDefaultId(): Selenium;

  /**
   * Populate default values for all uninitialized Cloud Identifier fields in this Cloud Resource.
   */
  static withDefaultId(): Selenium;

  /**
   * Converts this CloudId to be a valid id satisfying all naming conventions and constraints.
   */
  sanitize(): Selenium;

  /**
   * Converts this CloudId to be a valid id satisfying all naming conventions and constraints.
   */
  static sanitize(): Selenium;

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
   * @return all config template jsons by cloud template key and override.
   *        e.g. {'instance': {'TAG': ... , 'POD': ...}
   *              'instance-jupyter': {'TAG': ... , 'POD': ...}}
   */
  static allCloudConfigOverrides(): C3.Map<string | null, C3.Map<string | null, any | null>>;

  /**
   * @return map of pair of config and secret files by override and by cloud template key;
   *         note that will always return instance of File even if physical file doesn't exist.
   */
  allCloudConfigAndSecretFiles(): C3.Map<string | null, C3.Map<string | null, Pair<File | null, File | null> | null>>;

  /**
   * @return map of pair of config and secret files by override and by cloud template key;
   *         note that will always return instance of File even if physical file doesn't exist.
   */
  static allCloudConfigAndSecretFiles(): C3.Map<string | null, C3.Map<string | null, Pair<File | null, File | null> | null>>;

  /**
   * @return @resourceName if set or result of #generateResourceName method call
   */
  safeResourceName(): string;

  /**
   * @return @resourceName if set or result of #generateResourceName method call
   */
  static safeResourceName(): string;

  /**
   * @return @resourceSecondaryId if set or result of #generateResourceSecondaryId method call
   */
  safeResourceSecondaryId(): string;

  /**
   * @return @resourceSecondaryId if set or result of #generateResourceSecondaryId method call
   */
  static safeResourceSecondaryId(): string;

  /**
   * @return instance of CloudRef for this resource; will fail if `failIfInvalid` is `true` and missing all ref fields.
   */
  toCloudRef(failIfInvalid?: boolean): CloudRef | null;

  /**
   * @return instance of CloudRef for this resource; will fail if `failIfInvalid` is `true` and missing all ref fields.
   */
  static toCloudRef(failIfInvalid?: boolean): CloudRef | null;

  /**
   * Constructs Cloud Service instance based on provided C3 identifier string and configuration.
   */
  static fromId(id: string, failIfInvalid?: boolean): Selenium | null;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Identifier.
   *
   * Note that if `id.func` is not for this Cloud Resource type then construct instance of this type that is a
   * dependency or a parent of provided Cloud Resource.
   */
  static fromCloudId(id: CloudId, failIfInvalid?: boolean): Selenium;

  /**
   * Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference.
   */
  static fromCloudRef(ref: CloudRef, failIfInvalid?: boolean): Selenium;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Func component and optional role.
   */
  static fromCloudFunc(func: string, role?: string | null, seq?: string | null): Selenium;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Id.
   */
  static fromResourceId(resourceId: string | null): Selenium;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Secondary Id and available Cloud Configuration.
   */
  static fromResourceSecondaryId(resourceSecondaryId: string | null): Selenium;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Resource Name and available Cloud Configuration.
   */
  static fromResourceName(name: string | null): Selenium;

  /**
   * Constructs Cloud Resource instance based on provided Cloud Reference field value and available Cloud Configuration.
   *
   * @see CloudRef
   */
  static fromReferenceField(fieldName: string, value: string | null, failIfInvalid?: boolean): Selenium;

  /**
   * Constructs config based defaults and artifacts for all configurable fields
   *
   * @see CloudRef
   */
  fromConfigTemplate(spec?: CloudResourceOperationSpec | null): Selenium;

  /**
   * Constructs config based defaults and artifacts for all configurable fields
   *
   * @see CloudRef
   */
  static fromConfigTemplate(spec?: CloudResourceOperationSpec | null): Selenium;

  /**
   * Populate default values for all uninitialized configurable fields in this Cloud Resource.
   */
  withDefaultConfig(spec?: CloudResourceOperationSpec | null): Selenium;

  /**
   * Populate default values for all uninitialized configurable fields in this Cloud Resource.
   */
  static withDefaultConfig(spec?: CloudResourceOperationSpec | null): Selenium;

  /**
   * @return default #resourceName. Uses C3 #id by default.
   */
  generateResourceName(): string | null;

  /**
   * @return default #resourceName. Uses C3 #id by default.
   */
  static generateResourceName(): string | null;

  /**
   * Optional override to generate #resourceSecondaryId from available fields. e.g AwsS3Bucket does it based on
   * #resourceName (bucket name)
   */
  generateResourceSecondaryId(): string | null;

  /**
   * Optional override to generate #resourceSecondaryId from available fields. e.g AwsS3Bucket does it based on
   * #resourceName (bucket name)
   */
  static generateResourceSecondaryId(): string | null;

  /**
   * @returns #resourceNamespace. Checks CloudDeploymentConfig to determine if cluster or env name
   */
  generateResourceNamespace(): string | null;

  /**
   * @returns #resourceNamespace. Checks CloudDeploymentConfig to determine if cluster or env name
   */
  static generateResourceNamespace(): string | null;

  /**
   * Status of this service
   */
  get status(): string | null;

  /**
   * Status of this service
   */
  static get status(): string | null;

  /**
   * App for of this service
   */
  get parentApp(): App | null;

  /**
   * App for of this service
   */
  static get parentApp(): App | null;

  /**
   * Optional endpoint for connecting to the service
   */
  get endpoints(): CloudServiceUrl | null;

  /**
   * Optional endpoint for connecting to the service
   */
  static get endpoints(): CloudServiceUrl | null;

  /**
   * @return `true` if this is CloudService for a specific application
   */
  isSingleApp(): boolean;

  /**
   * @return `true` if this is CloudService for a specific application
   */
  static isSingleApp(): boolean;

  /**
   * @return `true` if the CloudService is configured and has the right config
   */
  isConfigured(): boolean;

  /**
   * @return `true` if the CloudService is configured and has the right config
   */
  static isConfigured(): boolean;

  /**
   * @return `true` if this is CloudService is shared across multiple applications
   */
  isSharedAcrossApps(): boolean;

  /**
   * @return `true` if this is CloudService is shared across multiple applications
   */
  static isSharedAcrossApps(): boolean;

  /**
   * Adds correct role and next sequence for the Cloud Service instance
   *      based on provided C3 identifier string and configuration.
   */
  withRoleAndSeq(): Selenium | null;

  /**
   * Adds correct role and next sequence for the Cloud Service instance
   *      based on provided C3 identifier string and configuration.
   */
  static withRoleAndSeq(): Selenium | null;

  /**
   * @return C3 Canonical abbreviation for CloudId.func component;
   *   e.g. Cassandra => `k8scass` when running under Kubernetes and `awscass` when running in https://aws.amazon.com/keyspaces/
   */
  cloudFunc(): string | null;

  /**
   * @return C3 Canonical abbreviation for CloudId.func component;
   *   e.g. Cassandra => `k8scass` when running under Kubernetes and `awscass` when running in https://aws.amazon.com/keyspaces/
   */
  static cloudFunc(): string | null;

  /**
   * @return computed cached map of cloudFunc -> Type
   */
  static typeMetasByCloudFunc(): C3.Map<string | null, TypeMeta | null>;

  /**
   * @return C3 resource type from the given func component; e.g. k8scass => Cassandra
   */
  static typeFromCloudFunc(cloudFunc: string, failIfInvalid?: boolean): Type | null;

  /**
   * returns corresponding CloudService Impl based on this instance's cloud provider
   */
  impl(): CloudService.Impl<CloudService | null>;

  /**
   * returns corresponding CloudService Impl based on this instance's cloud provider
   */
  static impl(): CloudService.Impl<CloudService | null>;

  /**
   * returns corresponding CloudService Impl instance based on this instance's cloud provider
   */
  implType(): Type;

  /**
   * returns corresponding CloudService Impl instance based on this instance's cloud provider
   */
  static implType(): Type;

  /**
   * @return Impl instance type from the given func component; e.g. k8scass => Cassandra
   */
  static implTypeFromCloudFunc(cloudFunc: string, failIfInvalid?: boolean): Type | null;

  /**
   * @return Impl instance type from the given env; e.g. Env_Membership_Type
   */
  static implTypeFromEnv(env?: Env | null, failIfInvalid?: boolean): Type | null;

  /**
   * Retrieve all known cloud services in this cluster; if called on a subtype, limit results to instances of that
   * subtype.
   *
   * @param tag
   *         Optional {@link CloudTag}s used to filter results.
   * @return known cloud services in this cluster that matches {@link CloudTag} specifications.
   */
  static list(tags?: C3.Array<CloudTag | null>): C3.Array<Selenium | null>;

  /**
   * Retrieve all known CloudService IDs (as strings) in this cluster; if called on a subtype, limit results to
   * instances of that subtype.
   *
   * @param tags
   *         Optional {@link CloudTag}s used to filter results.
   * @return list of CloudService ID strings that match {@link CloudTag} filters.
   */
  static listKeys(tags?: C3.Array<CloudTag | null>): C3.Array<string | null>;

  /**
   * @param envId
   *          The envId to list the cloud services for
   *          If not given, will list for the current env
   * @return list of all known cloud services for provided Env
   */
  static listForEnv(envId?: string | null): C3.Array<Selenium | null>;

  /**
   * @param appId
   *          The appId to list the cloud services for
   *          If not given, will list for the current app
   * @return list of all known cloud services for provided App
   */
  static listForApp(appId?: string | null): C3.Array<Selenium | null>;

  /**
   * Ensure the existence of a Cloud Service if it does not already exist.
   *
   * @param spec
   *         Specifications to start a Cloud Service.
   * @return created CloudService instance
   */
  ensureService(spec?: CloudServiceStartSpec | null): Selenium | null;

  /**
   * Ensure the existence of a Cloud Service if it does not already exist.
   *
   * @param spec
   *         Specifications to start a Cloud Service.
   * @return created CloudService instance
   */
  static ensureService(spec?: CloudServiceStartSpec | null): Selenium | null;

  /**
   * Await for Service to be ready to serve requests.
   * Throws an error if Service does not become ready in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  waitForReady(spec?: WaitSpec | null): void;

  /**
   * Await for Service to be ready to serve requests.
   * Throws an error if Service does not become ready in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  static waitForReady(spec?: WaitSpec | null): void;

  /**
   * Updates config with actual values according to current context.
   */
  ensureConfig(): void;

  /**
   * Updates config with actual values according to current context.
   */
  static ensureConfig(): void;

  /**
   * Called before actual code of {@link #stop}.
   */
  beforeStop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called before actual code of {@link #stop}.
   */
  static beforeStop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called after actual code of {@link #stop}.
   */
  afterStop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called after actual code of {@link #stop}.
   */
  static afterStop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Upsert custom resource to start a Cloud Service
   */
  upsertResource(cloudTag: CloudTag): void;

  /**
   * Upsert custom resource to start a Cloud Service
   */
  static upsertResource(cloudTag: CloudTag): void;

  /**
   * Hibernate Cloud Service by releasing ephemeral resources but maintaining state as needed so it can be woken up at later time.
   *
   * @param spec
   *         Specifications to stop a Cloud Service.
   */
  stop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Hibernate Cloud Service by releasing ephemeral resources but maintaining state as needed so it can be woken up at later time.
   *
   * @param spec
   *         Specifications to stop a Cloud Service.
   */
  static stop(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called before actual code of {@link #terminate}.
   */
  beforeTerminate(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called before actual code of {@link #terminate}.
   */
  static beforeTerminate(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called after actual code of {@link #terminate}.
   */
  afterTerminate(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called after actual code of {@link #terminate}.
   */
  static afterTerminate(spec?: CloudServiceStopSpec | null): void;

  /**
   * Called after actual code of {@link #ensureService}.
   */
  afterEnsureService(spec?: CloudServiceStartSpec | null): void;

  /**
   * Called after actual code of {@link #ensureService}.
   */
  static afterEnsureService(spec?: CloudServiceStartSpec | null): void;

  /**
   * Abort and terminate Cloud Service and by default discard all state.
   *
   * @param spec
   *         Specifications to stop a Cloud Service.
   */
  terminate(confirm?: boolean, spec?: CloudServiceStopSpec | null): void;

  /**
   * Abort and terminate Cloud Service and by default discard all state.
   *
   * @param spec
   *         Specifications to stop a Cloud Service.
   */
  static terminate(confirm?: boolean, spec?: CloudServiceStopSpec | null): void;

  /**
   * Override of the this CloudService
   */
  static overrideLevelFromAppId(appId: string): string;

  /**
   * @return `true` if this CloudService is currently deployed
   */
  isDeployed(): boolean;

  /**
   * @return `true` if this CloudService is currently deployed
   */
  static isDeployed(): boolean;

  /**
   * Get HttpResponse from CloudService
   *
   * @param encodedSubPathAndQuery
   *         HTTP encoded subPath and query
   */
  httpGet(encodedSubPathAndQuery?: string | null): HttpResponse;

  /**
   * Get HttpResponse from CloudService
   *
   * @param encodedSubPathAndQuery
   *         HTTP encoded subPath and query
   */
  static httpGet(encodedSubPathAndQuery?: string | null): HttpResponse;

  /**
   * telemetry labels for the cloud service
   */
  static telemetryLabels(): string | null;

  /**
   * @return `true` if istio is enabled in the cluster
   */
  static istioEnabled(): boolean;

  /**
   * @return `true` if this CloudService is currently terminating
   */
  isTerminating(): boolean;

  /**
   * @return `true` if this CloudService is currently terminating
   */
  static isTerminating(): boolean;

  /**
   * restarts the JVM for the parent app of the cloud service
   * @param restartAllServers
   *            Set to true to restart all servers that belong
   *            to the cluster/env/app that start/terminate this CloudService
   *            Example: PG and Cassandra respect this to restart all servers
   *            in order to use the new DataStore config when switching to new DB
   */
  restartServers(restartAllServers?: boolean): void;

  /**
   * restarts the JVM for the parent app of the cloud service
   * @param restartAllServers
   *            Set to true to restart all servers that belong
   *            to the cluster/env/app that start/terminate this CloudService
   *            Example: PG and Cassandra respect this to restart all servers
   *            in order to use the new DataStore config when switching to new DB
   */
  static restartServers(restartAllServers?: boolean): void;

  /**
   * Indicates the IP mode of the cluster (IPv4, IPv6, or DualStack).
   */
  static ipMode(): string | null;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): Selenium;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): Selenium | null;
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
