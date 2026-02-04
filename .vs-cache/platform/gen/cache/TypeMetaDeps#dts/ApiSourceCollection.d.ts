// TypeScript definitions for the C3 type ApiSourceCollection

/**
 * type that represents content from an external source e.g. REST endpoint e.g. Jira, Salesforce, etc
 * @see REST
 * To perform CDC on ApiSourceCollection, the lambda from {@link SourceCollection#cdcSourcesOverride} will be used to
 * produce the data instead of {@link #lambda}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ApiSourceCollection
 */
declare interface IApiSourceCollection {

  /**
   * The description of this instance.
   */
  description?: string | null;

  /**
   * Field names from source type that is used to determine Change Data Capture (CDC). i.e. Data integration will read
   * incremental data based on checkpoint value stored in {@link SourceCollection.Cdc.Checkpoint} for these field
   * When reading data from source collection, Sources that are greater (or lesser if descending) than each of these fields will be considered as new data
   */
  cdcOrder?: string | null;

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * The unique and required name of this instance.
   */
  name: string;

  /**
   * Structure defined to serialize the content from the SourceCollection {@see Source}
   */
  source?: IType | null;

  /**
   * Source system for the source collection
   */
  sourceSystem: ISourceSystem<SourceSystem.Config | null, any>;

  /**
   * Indicates that the source collection is not managed by c3
   * e.g. in case of FileSourceCollection we do manage the inboxUrl
   *      in case of CloudMessageSourceCollection we do not create or manage the queue.
   */
  external?: boolean;

  /**
   * If true, incoming data for this canonical would be processed sequentially.
   * otherwise, the incoming data would be processed in parallel.
   */
  sequential?: boolean;

  /**
   * Indicator of whether this instance is currently being configured
   */
  state?: string | null;

  /**
   * Triggers the action in the lambda function after each individual abstract content is processed. The source collection may be used to obtain any parameters necessary for the after-processing of the content.
   *
   * @param sourceCollection
   *    The {@see SourceCollection} from which parameters are needed for after-processing.
   * @param sources
   *    The {@see Sources} object that may be used in after-processing.
   */
  afterProcess?: ILambda<λBiConsumer<SourceCollection<SourceCollection.Config | null> | null, Sources | null> | null> | null;

  /**
   * List of transforms to skip for SourceCollection.
   */
  skippedTransforms?: C3.Array<string | null> | Array<string | null>;

  /**
   * Optional Lambda function that builds the FileObjsOperSpec object for the content
   * This is optional and if defined something like below
   * ```
   * var func = function f(file){
   *  if(file.fileName === 'abc.csv')
   *    return FileObjsOperSpec.make({skipExtraFields:true, serType:'CanonicalTestUser'});
   *  else
   *    return FileObjsOperSpec.make({skipExtraFields:false, serType:'CanonicalTestUser'});
   *  };
   *  var sc = SourceCollection.get("mySourceCollection");
   *  sc = sc.putField("patchObjsOperSpec", Lambda.fromJavaScript(func));
   *  sc.upsert();
   * ```
   * Note what is defined here will only be used and user should handle cases for parsing the content.
   * otherwise FileObjsOperSpec will be generated from the SourceCollection
   * {@see #fileObjsOperSpec}
   */
  patchObjsOperSpec?: λFunction<Content | null, IFileObjsOperSpec | null> | null;

  /**
   * Override the default orderedCdcSources function to provide custom logic for reading sources based on the provided checkpoint.
   * This is useful when the default cdcSources does not meet the requirements of the specific source collection.
   * E.g. for ApiSourceCollection, the default cdcSources may not be able to handle all API-specific logic for reading for different Source Collections
   * @param checkpoint
   *        The checkpoint from which to read sources.
   * @return
   *        Sources based on the provided checkpoint.
   */
  cdcSourcesOverride?: ILambda<λFunction<SourceCollection.Cdc.Checkpoint | null, Stream<Source | null>> | null> | null;

  /**
   * lambda for producing the data from the source collection
   */
  lambda: ILambda<λBiFunction<SourceCollection<SourceCollection.Config | null>, Checkpoint<any> | null, ApiSourceCollectionResult | null> | null>;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
/**
 * type that represents content from an external source e.g. REST endpoint e.g. Jira, Salesforce, etc
 * @see REST
 * To perform CDC on ApiSourceCollection, the lambda from {@link SourceCollection#cdcSourcesOverride} will be used to
 * produce the data instead of {@link #lambda}.
 *
 * @remarks this represents a made instance of ApiSourceCollection
 */
declare class ApiSourceCollection extends Obj {

  /**
   * The description of this instance.
   */
  readonly description?: string | null;
  withDescription(description: string | null): ApiSourceCollection;

  /**
   * Field names from source type that is used to determine Change Data Capture (CDC). i.e. Data integration will read
   * incremental data based on checkpoint value stored in {@link SourceCollection.Cdc.Checkpoint} for these field
   * When reading data from source collection, Sources that are greater (or lesser if descending) than each of these fields will be considered as new data
   */
  readonly cdcOrder?: string | null;
  withCdcOrder(cdcOrder: string | null): ApiSourceCollection;

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ApiSourceCollection;

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): ApiSourceCollection;

  /**
   * Structure defined to serialize the content from the SourceCollection {@see Source}
   */
  readonly source?: Type | null;
  withSource(source: IType | null): ApiSourceCollection;

  /**
   * Source system for the source collection
   */
  readonly sourceSystem: SourceSystem<SourceSystem.Config | null, any>;
  withSourceSystem(sourceSystem: ISourceSystem<SourceSystem.Config | null, any>): ApiSourceCollection;

  /**
   * Indicates that the source collection is not managed by c3
   * e.g. in case of FileSourceCollection we do manage the inboxUrl
   *      in case of CloudMessageSourceCollection we do not create or manage the queue.
   */
  readonly external?: boolean;
  withExternal(external: boolean): ApiSourceCollection;

  /**
   * If true, incoming data for this canonical would be processed sequentially.
   * otherwise, the incoming data would be processed in parallel.
   */
  readonly sequential?: boolean;
  withSequential(sequential: boolean): ApiSourceCollection;

  /**
   * Indicator of whether this instance is currently being configured
   */
  readonly state?: string | null;
  withState(state: string | null): ApiSourceCollection;

  /**
   * Triggers the action in the lambda function after each individual abstract content is processed. The source collection may be used to obtain any parameters necessary for the after-processing of the content.
   *
   * @param sourceCollection
   *    The {@see SourceCollection} from which parameters are needed for after-processing.
   * @param sources
   *    The {@see Sources} object that may be used in after-processing.
   */
  readonly afterProcess?: Lambda<λBiConsumer<SourceCollection<SourceCollection.Config | null> | null, Sources | null> | null> | null;
  withAfterProcess(afterProcess: ILambda<λBiConsumer<SourceCollection<SourceCollection.Config | null> | null, Sources | null> | null> | null): ApiSourceCollection;

  /**
   * List of transforms to skip for SourceCollection.
   */
  readonly skippedTransforms?: C3.Array<string | null>;
  withSkippedTransforms(skippedTransforms: C3.Array<string | null> | Array<string | null>): ApiSourceCollection;

  /**
   * Optional Lambda function that builds the FileObjsOperSpec object for the content
   * This is optional and if defined something like below
   * ```
   * var func = function f(file){
   *  if(file.fileName === 'abc.csv')
   *    return FileObjsOperSpec.make({skipExtraFields:true, serType:'CanonicalTestUser'});
   *  else
   *    return FileObjsOperSpec.make({skipExtraFields:false, serType:'CanonicalTestUser'});
   *  };
   *  var sc = SourceCollection.get("mySourceCollection");
   *  sc = sc.putField("patchObjsOperSpec", Lambda.fromJavaScript(func));
   *  sc.upsert();
   * ```
   * Note what is defined here will only be used and user should handle cases for parsing the content.
   * otherwise FileObjsOperSpec will be generated from the SourceCollection
   * {@see #fileObjsOperSpec}
   */
  readonly patchObjsOperSpec?: λFunction<Content | null, FileObjsOperSpec | null> | null;
  withPatchObjsOperSpec(patchObjsOperSpec: λFunction<Content | null, IFileObjsOperSpec | null> | null): ApiSourceCollection;

  /**
   * Override the default orderedCdcSources function to provide custom logic for reading sources based on the provided checkpoint.
   * This is useful when the default cdcSources does not meet the requirements of the specific source collection.
   * E.g. for ApiSourceCollection, the default cdcSources may not be able to handle all API-specific logic for reading for different Source Collections
   * @param checkpoint
   *        The checkpoint from which to read sources.
   * @return
   *        Sources based on the provided checkpoint.
   */
  readonly cdcSourcesOverride?: Lambda<λFunction<SourceCollection.Cdc.Checkpoint | null, Stream<Source | null>> | null> | null;
  withCdcSourcesOverride(cdcSourcesOverride: ILambda<λFunction<SourceCollection.Cdc.Checkpoint | null, Stream<Source | null>> | null> | null): ApiSourceCollection;

  /**
   * lambda for producing the data from the source collection
   */
  readonly lambda: Lambda<λBiFunction<SourceCollection<SourceCollection.Config | null>, Checkpoint<any> | null, ApiSourceCollectionResult | null> | null>;
  withLambda(lambda: ILambda<λBiFunction<SourceCollection<SourceCollection.Config | null>, Checkpoint<any> | null, ApiSourceCollectionResult | null> | null>): ApiSourceCollection;

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
  static fromJson(json: any | null): ApiSourceCollection | null;

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
  static fromJsonString(json: string | null): ApiSourceCollection | null;

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
  static fromXmlString(xml: string | null): ApiSourceCollection | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ApiSourceCollection | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ApiSourceCollection;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ApiSourceCollection;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ApiSourceCollection;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ApiSourceCollection | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ApiSourceCollection | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ApiSourceCollection;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ApiSourceCollection;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ApiSourceCollection;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ApiSourceCollection;

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
  withField(field: string, value: any, doNotConvert?: boolean): ApiSourceCollection;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ApiSourceCollection;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ApiSourceCollection;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ApiSourceCollection;

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
  withoutFieldAtPath(path: string): ApiSourceCollection;

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
  withoutField(field: string | null): ApiSourceCollection;

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
  withoutField(field: FieldType | null): ApiSourceCollection;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ApiSourceCollection;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ApiSourceCollection;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ApiSourceCollection;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ApiSourceCollection;

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
  defaultField(field: string): ApiSourceCollection;

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
  defaultField(field: FieldType): ApiSourceCollection;

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
  unsetField(field: string): ApiSourceCollection;

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
  unsetField(field: FieldType): ApiSourceCollection;

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
  removeField(field: string): ApiSourceCollection;

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
  removeField(field: FieldType): ApiSourceCollection;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ApiSourceCollection;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ApiSourceCollection;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ApiSourceCollection;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ApiSourceCollection;

  mergeJson(json: any | null): ApiSourceCollection;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ApiSourceCollection;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ApiSourceCollection;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ApiSourceCollection | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ApiSourceCollection | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ApiSourceCollection | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ApiSourceCollection | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ApiSourceCollection | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ApiSourceCollection | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ApiSourceCollection | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ApiSourceCollection | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ApiSourceCollection | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ApiSourceCollection;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ApiSourceCollection;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ApiSourceCollection;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ApiSourceCollection;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ApiSourceCollection;

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
  static make(fields: any, withDefaults?: boolean): ApiSourceCollection;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): ApiSourceCollection | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ApiSourceCollection;

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
  afterMake(): ApiSourceCollection;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ApiSourceCollection;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ApiSourceCollection>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ApiSourceCollection;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): SourceCollection.Config;

  /**
   * @return configuration key for this instance.
   */
  configKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  configSingletonKey(): string | null;

  /**
   * @return type configuration for the given {@link Configurable} type.
   * E.g. {@see REST} & {@see RestConfig}
   */
  static typeConfig(): SourceCollection.Config;

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

  /**
   * API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
   * @return a list of metrics
   */
  static listMetrics(): C3.Array<Metric | null>;

  /**
   * List of simple and compound metrics for this type
   * @return ListMetricsResult
   */
  static listMetricsByKind(): ListMetricsResult | null;

  /**
   * Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
   * @return the SimpleMetric for the source type or parent type based on whats present
   */
  static getSimpleMetric(metricName: string): SimpleMetric | null;

  /**
   * API to be used for evaluating single source with single metric
   * @param spec
   *          The spec which specifies the sourceId / start / end / metricName / grain
   * @return a Timeseries for the given spec
   */
  static evalMetric(spec?: EvalMetricSpec | null): Timeseries<any> | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  static evalMetrics(spec?: EvalMetricsSpec | null): EvalMetricsResult | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return stream of evaluation containing multiple source and multiple metrics one source at a time
   */
  static evalMetricsStream(spec?: EvalMetricsSpec | null): EvalMetricsResultStream | null;

  /**
   * This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
   * Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
   * this api will be handy for just accessing the scalar value easily
   * @param spec
   *          EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
   *          The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
   *          and stick it in as the scalar value with the appropriate unit
   * @return The map of srcId -> expression -> Aggregated value with unit
   */
  static evalAggregateMetrics(spec?: EvalMetricsSpec | null): C3.Map<string | null, C3.Map<string | null, Dimension | null>>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information
   * @return 1 timeseries which is an aggregation of all the sources' timeseries
   */
  static rollupMetric(spec?: RollupMetricSpec | null): Timeseries<any> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetrics(spec?: RollupMetricSpec | null): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetricsWithMetadata(spec?: RollupMetricSpec | null, overrideMetrics?: C3.Array<Metric | null>): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * Returns all the variables in the given expression
   * @param expression
   *                The expression for which you need to find variables
   * @return a list of all the variables in the metric expression
   */
  static metricVariables(expression: string): C3.Array<MetricVariable | null>;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return the result which contains the result of metric evaluations for various sources
   */
  static evalMetricsWithMetadata(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResult | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return stream of result which contains the result of metric evaluations for various sources one source at a time
   */
  static evalMetricsWithMetadataStream(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResultStream | null;

  /**
   * The api should be used to export all the source data to s3
   * This includes extracting the relational data, timeseries data and tsDecl data
   * It internally creates a map reduce job to write data to s3
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @param numObjPerFile (optional)
   *          Number of objects per file to be created in S3
   * @param typeForSrcIds (optional)
   *          If this type is specified then ids for exporting src type objects will be picked from this type and not
   *          from the spec object
   * @return the export job object for tracking status
   */
  static exportMetricsDataJob(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null, numObjPerFile?: number | null, typeForSrcIds?: Type | null): Export | null;

  /**
   * API used to import all the exported data in s3
   * @param filePrefix (optional)
   *          Optional filePrefix to used to get files from S3
   * @return the import job object for tracking status
   */
  static importMetricsDataJob(filePrefix?: string | null): Import | null;

  /**
   * The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
   * This includes extracting the relational data, timeseries data and tsDecl data
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static extractMetricsData(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null): ExportedObj | null;

  /**
   * API is supposed to import the data that was exported using the extractMetricsData api
   * @param input
   *          Input is a map of typeName to array of array of objects grouped by a batch size
   *          ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static importMetricsData(input?: ExportedObj | null): void;

  /**
   * This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
   * via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
   * There is no invalidation of this cache and should be refreshed manually
   * @param ids
   *          The src ids that need to be cached.
   * @param metricNames (optional)
   *          The list of metrics that need to be cached. This could be simple and/or compound or a mix.
   *                                          This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param startDate (optional)
   *          Optional evaluation start date for caching metrics
   * @param endDate (optional)
   *          Optional evaluation end date for caching metrics
   */
  static refreshMetricsCache(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null): void;

  /**
   * This api should be used to kick of the metrics cache refresh map reduce job
   * @param metricNames (optional)
   *                The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
   *                This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param filter (optional)
   *                Filter out certain source ids
   * @param startDate (optional)
   *                Optional start date for caching metrics
   * @param endDate (optional)
   *                Optional end date for caching metrics
   */
  static startMetricsCacheRefreshJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null): MetricsCacheRefreshJob | null;

  /**
   * This provides the status for the metrics cache refresh job
   */
  static metricsCacheRefreshJobStatus(): MapReduceStatus | null;

  /**
   * API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
   * for a metric source combination in a given time range
   * @param ids
   *         list of ids that stats need to be computed for
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static generateMetricsStats(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): void;

  /**
   * Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param batchSize
   *         No of sources to be included in 1 map reduce job: Default: 100
   * @param filter
   *         Filter criteria on the source type
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static startMetricsStatsJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): MetricsStatsJob | null;

  /**
   * API to report the status of currently running metrics stats job
   */
  static metricsStatsJobStatus(): MapReduceStatus | null;

  /**
   * Provides histogram data for a given set of ids and metrics.
   *
   * The period of histogram data can be specified through either period parameter or start and end parameters,
   * and period parameter has higher priority than start and end parameters which means the internal API will choose
   * period other than start and end if period parameter is available.
   *
   * @param ids
   *          Array of source ids
   * @param metricName
   *          CompoundMetricId
   * @param period
   *          Time period (e.g., last12m, 2012, 2013, 2014)
   * @param start
   *          Start of benchmarking period
   * @param end
   *          End of benchmarking period
   * @param ignoreZeroValues
   *          Flag indicates whether to ignore zero values.
   *          If true, any points with a zero value will not be factored into the histogram
   * @param binningType
   *          Whether to bin by 'value' or 'quantile'
   * @param numberBins
   *          How many bins to split the data into
   * @return Histogram data contains buckets info and data info
   */
  static getDistribution(ids: C3.Array<string | null> | null, metricName: string, period?: string | null, start?: DateTime | null, end?: DateTime | null, ignoreZeroValues?: boolean, binningType?: string | null, numberBins?: number | null): HistogramEvaluationResult | null;

  /**
   * Compute stats for every timeseries obtained by the metric / source combination
   * @param spec
   *          Provide the spec for which stats need to be computed
   * @return stats for every timeseries obtained for every source metric combination
   */
  static evalMetricsStats(spec: EvalMetricsSpec): C3.Map<string | null, C3.Map<string | null, TimeseriesStats | null>>;

  /**
   * The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
   * bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
   * This ends up re-using the fnd cache/ asTimeseries cache too
   * Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
   * @param spec
   *          EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
   *          going to be called with
   * @return a cache key that eval metrics produces for this spec (this cache is on the current action)
   */
  static startEvalMetricsBatch(spec: EvalMetricsSpec): string | null;

  /**
   * Cleans up and closes the eval metrics batch
   * @param keys
   *              Cleans up the eval metrics batch objects for the given cache keys
   * @return the current number of the cached evaluator instances
   */
  static endEvalMetricsBatch(key: string): number | null;

  /**
   * Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
   * @param key
   *              Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
   * @param start
   *              start date for metrics evaluation
   * @param end
   *              end date for metrics evaluation
   * @return EvalMetricsResult for the given start and end and the spec from the cached key
   */
  static evalMetricsBatch(key: string, start: DateTime, end: DateTime): EvalMetricsResult | null;

  /**
   * API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
   * @param spec
   *          Eval metrics spec to be used to figure out the eval metrics batch key
   * return the eval metrics batch key for the spec or null if one does not exist
   */
  static evalMetricsBatchKey(spec: EvalMetricsSpec): string | null;

  /**
   * Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
   * This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
   * filter/ limit / include do not match as is it will return false.
   * @param this
   *          Parent EvalMetricsSpec which acts as the superset
   * @param child
   *          Child EvalMetricsSpec which acts as the subset
   * @return whether child is a subset of this EvalMetricsSpec
   */
  static isSubset(parent: EvalMetricsSpec, child: EvalMetricsSpec): boolean;

  /**
   * API to estimate the size of objects in eval metrics batch cache.
   * This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
   * info to be used during evaluation), normalized data cache, and tsDecl cache
   * @param key
   *        Eval Metrics Batch cache key for which size needs to be estimated
   * @return object that gives the size of evaluator, normalized data cache and tsDecl cache
   */
  static estimateEvalMetricsBatchCacheSize(key: string): EvalMetricsBatchCacheSize | null;

  /**
   * Lists all the cached keys in the eval metrics batch
   * @return list of keys
   */
  static listEvalMetricsBatchKeys(): C3.Array<string | null>;

  /**
   * Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
   * src type fetch spec
   * @param Eval metrics spec that would be used for evalMetrics
   * @return EvalPlan with hierarchies and srcTypeFetchSpec populated
   */
  static getExportEvalPlan(spec?: EvalMetricsSpec | null): EvalPlan | null;

  /**
   * For internal use only:
   * Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
   * with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
   */
  static generateEvalMetricsSpec(spec: EvalMetricsSpec, overrideMetrics?: C3.Array<Metric | null>): Pair<EvalMetricsSpec | null, C3.Array<Metric | null>>;

  /**
   * Move unprocessed sources into intermediate data storage before processing
   * @param source
   *        The source objects that needs to be staged
   *
   * @return
   *        The Staging object based on StagingKind; If StagingKind is FILE, this is a File
   */
  stage(source?: Stream<any>): any;

  /**
   * @return the {@link FileSourceCollection} used to manage staging files, if staging mode is FILE
   */
  stageFileSourceCollection(): FileSourceCollection | null;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<ApiSourceCollection | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<ApiSourceCollection | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<ApiSourceCollection | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<ApiSourceCollection | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

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
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): SourceCollectionDeps;

  save(subPath?: string | null, contentType?: string | null): ApiSourceCollection;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: ApiSourceCollection | null, spec?: UpsertSpec | null): ApiSourceCollection | null;

  upsert(srcObj?: ApiSourceCollection | null, spec?: UpsertSpec | null): ApiSourceCollection | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

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
  static fromString(s: string | null): ApiSourceCollection | null;

  /**
   * Get the single instance of this Named Type by name.
   * @param name
   *         The unique name of the instance to retrieve.
   * @param failIfMissing
   *         If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
   *         returned.
   * @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
   *         retrieve instance from cache.
   */
  static forName(name: string | null, failIfMissing?: boolean): ApiSourceCollection | null;

  /**
   * Deserializes content from file into a stream of C3 Type instances.
   *
   * @param spec
   *    The {@see ObjsOperSpec} to provide various options for reading objs.
   * @return stream of objects
   */
  readObjs(spec?: ObjsOperSpec | null): Stream<Obj | null>;

  /**
   * Reads the raw content from source and converts it into an array of tuples.
   *
   * @param spec
   *    The {@see SourceCollectionReadTuplesSpec} to provide various options for reading tuples.
   * @return array of {@link Tuple}
   */
  readTuples(spec?: SourceCollectionReadTuplesSpec | null): C3.Array<Tuple | null>;

  /**
   * Infer data type from the source
   *
   * @return the type with name, fields with suggested value types, annotations, etc. based on the source.  Returns
   *         null if there's no source in this SourceCollection
   */
  inferSourceType(): any | null;

  /**
   * @return null if there's no source in this SourceCollection
   * Will not be upserted to the App. The user is responsible to upsert it but please note that any application
   * metadata (seed/metadata/type) can only be upserted when the app is in {@link AppMode.DEV} mode.
   *  @see AppMode
   */
  inferSourceType2(spec?: InferTypeSpec | null): TypeMeta | null;

  /**
   * Start action trigger for source collection on event arrival
   */
  startOnArrivalMode(): void;

  /**
   * Stop action trigger for source collection on event arrival
   */
  stopOnArrivalMode(): void;

  /**
   * Start action trigger for source collection on periodic schedule
   */
  startOnScheduleMode(): void;

  /**
   * Stop action trigger for source collection on periodic schedule
   */
  stopOnScheduleMode(): void;

  /**
   * Returns SourceCollections for the source type
   * @param sourceName
   *        source type name
   * @param include
   *        specifies which fields to bring back values for in the returned SourceCollection.
   */
  static collectionsForSourceType(sourceType: Type, include?: string | null): Stream<ApiSourceCollection | null>;

  /**
   * checks if processSchedule is set if not then it will return
   * the default cron job e.g. daily_sync_sourceFiles
   * {@see SourceCollectionProcessMode#ON_SCHEDULE} for more details
   *
   * @return cron job for the SourceCollection
   */
  processCron(): CronJob | null;

  /**
   * Always use this method to get the schedule for the SourceCollection
   * @return CronSchedule for the SourceCollection
   */
  safeProcessSchedule(): CronSchedule | null;

  /**
   * Function to be implemented in specific SourceCollection
   */
  process(spec?: DataIntegSpec | null): void;

  /**
   * Location at which {@link SourceContentMeta} serialized object is stored for each source content
   *
   * @return the stats url for all the processed content
   */
  statsUrl(): string;

  /**
   * Location at which source content is stored after the processing
   * e.g input file for a {@link FileSourceCollection} or input message for a {@link CloudMessageSourceCollection}
   *
   * @return the url for all the archived content
   */
  archivedContentUrl(): string;

  /**
   * @return archived file in SourceCollection with matching name
   */
  archivedSourcesFileForId(id: string): File | null;

  /**
   * Location at which serialized {@link FailedSource} is stored if processing failed
   *
   * @return the url for all the files failed for a file source collection
   */
  failedSourcesUrl(): string;

  /**
   * Always use this method to get the file source system for the FileSourceCollection
   */
  safeSourceSystem(): SourceSystem<SourceSystem.Config | null, any> | null;

  /**
   * @return SourceCollection after setting the priority
   */
  setPriority(priority: number): ApiSourceCollection;

  /**
   * @return SourceCollection after clearing the priority
   */
  clearPriority(): ApiSourceCollection;

  /**
   * This is c3 managed location to store stats, content and source
   *
   * @return the archive root url for the source collection
   */
  archiveUrl(): string;

  /**
   * @return {@link Url} instance from the rootUrl for the source collection
   */
  parseRootUrl(): Url;

  /**
   * @return {@link Url} instance from the archiveUrl for the source collection
   */
  parseArchiveUrl(): Url;

  /**
   * Builds the FileObjsOperSpec object for the source content
   */
  fileObjsOperSpec(content?: Content | null, spec?: DataIntegSpec | null): FileObjsOperSpec | null;

  /**
   * returns {@link FileSourceCollection}
   */
  file(): FileSourceCollection | null;

  /**
   * returns {@link CloudMessageSourceCollection}
   */
  cloudMessage(): CloudMessageSourceCollection | null;

  /**
   * returns {@link ContentSourceCollection}
   */
  content(): ContentSourceCollection | null;

  /**
   * returns {@link ApiSourceCollection}
   */
  api(): ApiSourceCollection | null;

  /**
   * returns {@link SqlSourceCollection}
   */
  sql(): SqlSourceCollection | null;

  /**
   * @return true if the SourceCollection is a {@link FileSourceCollection}
   */
  isFile(): boolean;

  /**
   * @return string identifier for the source
   */
  sourceIdentifier(): C3.Map<string | null, string | null>;

  /**
   * @return datastore type for this source collection (e.g., "s3", "ApacheKafkaTopic", "postgres")
   */
  sourceSystemDataStoreKind(): string | null;

  /**
   * @return true if the SourceCollection is a {@link ContentSourceCollection}
   */
  isContent(): boolean;

  /**
   * @return true if the SourceCollection is a {@link CloudMessageSourceCollection}
   */
  isCloudMessage(): boolean;

  /**
   * @return true if the SourceCollection is a {@link ApiSourceCollection}
   */
  isApi(): boolean;

  /**
   * @return true if the SourceCollection is a {@link SqlSourceCollection}
   */
  isSql(): boolean;

  /**
   * @return true if the SourceCollection is external based on this order of priority:
   *    {@link DataIntegSpec#externalOverride}
   *    {@link SourceCollection.Config#externalOverride}
   *    {@link SourceCollection#external}
   */
  isExternal(spec?: DataIntegSpec | null): boolean;

  /**
   * @return file source collection for the source collection if it exists
   */
  asFileSourceCollection(refresh?: boolean, failIfMissing?: boolean): FileSourceCollection | null;

  /**
   * @return default source collection from source
   */
  static dfltFromSource(source?: Type | null): ContentSourceCollection;

  /**
   * prevents these sources for this source collection to be transformed and persisted.
   */
  pause(): ApiSourceCollection;

  /**
   * resumes the sources for this source collection to be processed.
   */
  resume(): ApiSourceCollection;

  /**
   * reads the source and returns a stream of Sources
   */
  sources(): Stream<Sources | null>;

  /**
   * returns an inferType spec for the Source Collection
   */
  inferTypeSpec(spec?: InferTypeSpec | null): InferTypeSpec | null;

  /**
   * returns the chunkSize for the Sources
   */
  safeChunkSize(): number | null;

  /**
   * skip #transform for the source collection.
   */
  skipTransform(transformId?: string | null): ApiSourceCollection;

  /**
   * skip #transform for the source collection.
   */
  skipTransformBatch(transformIds: C3.Array<string | null> | null): ApiSourceCollection;

  /**
   * skip #transform for the source collection.
   */
  clearSkippedTransforms(transformsId: C3.Array<string | null> | null): ApiSourceCollection;

  /**
   * skip #transform for the source collection.
   */
  clearAllSkippedTransforms(): ApiSourceCollection;

  /**
   * reads from failedSourcesUrl and returns a stream of FailedSource
   */
  failedSources(): Stream<FailedSource | null>;

  /**
   * delete all FailedSources from failedSourcesUrl and return count of deleted FailedSources.
   */
  deleteAllFailedSources(confirm?: boolean): number;

  /**
   * Evaluate actionDecl metrics on SourceCollection.
   */
  static evalStatusMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Helper function for {@link evalStatusMetric} that handles metrics based on {@link SourceFile}
   * or {@link SourceStatus}.
   */
  static sourceStatusMetricData(id: string, tsEvalSpec: TSEvalSpec, metricName: string): Timeseries<any> | null;

  /**
   * Helper function for {@link evalStatusMetric} that handles metrics based on {@link SourceChunkStatus}.
   */
  static sourceChunkStatusMetricData(id: string, tsEvalSpec: TSEvalSpec, metricName: string): Timeseries<any> | null;

  /**
   * Helper function for {@link evalStatusMetric} that handles metrics based on {@link TargetStatus}.
   */
  static targetStatusMetricData(id: string, tsEvalSpec: TSEvalSpec, metricName: string): Timeseries<any> | null;

  /**
   * Helper function for {@link evalStatusMetric} that handles metrics base on {@link SourceFileStatNotification}
   */
  static sourceFileStatNotificationData(id: string, tsEvalSpec: TSEvalSpec, metricName: string): Timeseries<any> | null;

  /**
   * Evaluate actionDecl metric on SourceCollection for calculating data loading ETA.
   * The metric will return all missing if there is no DataMonitoringUtil type defined
   * (it is in the dataMonitoring package).
   */
  static evalEtaMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Evaluate the ProcessRate metric on SourceCollection for calculating the process rate.
   * The metric will return the rolled up rate as the only value in the timeseries.
   */
  static evalProcessRateMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Evaluate the DataAwaiting metric on SourceCollection for calculating the data that has not been processed.
   * The metric will return the rolled up rate as the only value in the timeseries.
   */
  static evalDataAwaitingMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Evaluate the DataProcessed metric on SourceCollection for calculating the amount of data processed.
   * The metric will return the rolled up rate as the only value in the timeseries.
   */
  static evalDataProcessedMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Evaluate the DataLastReceived metric on SourceCollection for determining when the last SourceFile was updated.
   */
  static evalDataLastReceivedMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Evaluate the ItemErrors metric on SourceCollection for calculating the number of errors generated.
   * The metric will return the rolled up rate as the only value in the timeseries.
   */
  static evalItemErrorsMetric(obj?: Obj | null, spec: TSEvalSpec, metric: Metric): Timeseries<any> | null;

  /**
   * Reads the objs from the source collection and applies the specified transforms on the loaded objs.
   * @param transforms
   *           list of Transforms.
   * @param spec
   *           various parameters that control the operation of function.
   * @return a {@link TransformObjsResult} instance containing the objs.
   */
  transformObjs(transforms: C3.Array<Transform | null>, spec?: TransformObjsSpec | null): TransformObjsResult | null;

  /**
   * Surface any issues related to this source collection being out of sync with the source of truth. This can be
   * casued by data degradation over time, such as missing fields, extra fields, or other changes in schema to the
   * incoming data.
   */
  validateSourceData(spec?: ValidateSourceDataSpec | null): C3.Array<DataIssue.SourceCollection | null>;

  /**
   * Hold common logic of ValidateSourceData for SourceCollection subtype
   */
  doValidateSourceData(issues?: C3.Array<DataIssue.SourceCollection | null>, spec?: ValidateSourceDataSpec | null): C3.Array<DataIssue.SourceCollection | null>;

  /**
   * @return sources based on the last checkpoint for the source collection
   * This function should be implemented per instance of SourceCollection.
   */
  cdcSources(checkpoint?: SourceCollection.Cdc.Checkpoint | null): Stream<Source | null>;

  /**
   * Capture data changes from the last timestamp based checkpoint for a source collection and stores them in
   * source files
   * @return
   *       If SourceCollection.Config#stage is true, then the Staged object based on StagingKind otherwise null.
   */
  doStageCdc(): File | null | any | null;

  /**
   * Gets the stored checkpoint for this source collection.
   */
  cdcCheckpoint(): SourceCollection.Cdc.Checkpoint | null;

  /**
   * Generates a checkpoint based on CDC order {@see SourceCollection.Cdc#cdcOrder} and values of its
   * corresponding fields by comparing it to the last checkpoint for this source collection.
   * @param values
   *           map of cdc order fields to value to be used to generate the checkpoint.
   * @return
   *        {@link SourceCollection.Cdc.Checkpoint} based on the CDC order and values.
   */
  generateCdcCheckpoint(values?: C3.Map<string | null, any>): SourceCollection.Cdc.Checkpoint;

  /**
   * Function to be called in the cronJob created in onSchedule mode
   */
  doOnSchedule(spec?: DataIntegSpec | null): void;

  /**
   * Returns the dataLake catalog associated with the default dataLake pipeline of this source collection.
   * The default catalog is used when no specific catalog is provided.
   *
   * @return The default DataLake.Catalog instance.
   */
  get defaultDataLakeCatalog(): DataLake.Catalog<DataLake.Table | null, DataLake.Catalog.Config | null> | null;

  /**
   * Returns the dataLake table associated with the default dataLake pipeline of this source collection.
   *
   * @return The default DataLake.Table instance.
   */
  get defaultDataLakeTable(): DataLake.Table | null;

  /**
   * Returns default dataLake pipeline id of this source collection.
   *
   * @return The string representation of the default pipeline ID.
   */
  get defaultDataLakePipelineId(): string | null;
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

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
