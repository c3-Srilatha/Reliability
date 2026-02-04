// TypeScript definitions for the C3 type KvRowBucket

/**
 * Represents a key value store row bucket. Contains information about the contents of the bucket. This contains
 * the location where the bucket lives, e.g. a column in the KvRow vs shelved in a different location represented by
 * the url. Also contains basic stats about the bucket like min, max of the sortKey column. This can be used to early
 * filtering of results without actually reading contents of the bucket
 *
 * @remarks this represents a value passed to a method that expects an instance of KvRowBucket
 */
declare interface IKvRowBucket {

  /**
   * Represents the specific bucket (indicating specific sort key range if present) for this given partition. If sort key is not present, this
   * will be the same as {@link partitionKey}. The value needs to be naturally ordered for comparison
   */
  id?: string | null;

  /**
   * A modifier to the media-type. When present, its value indicates what additional content
   * codings have been applied to the data, and thus what decoding mechanisms must be
   * applied in order to obtain the media-type referenced by the contentType.
   *
   * It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
   */
  contentEncoding?: string | null;

  /**
   * Describes the natural language(s) of the intended audience.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
   */
  contentLanguage?: string | null;

  /**
   * The size of the entity-body, in bytes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
   */
  contentLength?: number | null;

  /**
   * The resource location for the entity enclosed in the message when that entity is accessible from a location
   * separate from the requested resource's URI.
   *
   * It is recommended to use #safeUrl instead.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
   */
  contentLocation?: string | null;

  /**
   * The media type of the content (MIME type).
   * This includes contentTypeParams such as delimiters, characters as well.
   * To specify delimiters please see {@link ContentType}
   * and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
   * Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
   * It is recommended to use #safeContentType instead as it will attempt to guess content type.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
   */
  contentType?: string | null;

  /**
   * Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
   * attachment locally.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
   */
  contentDisposition?: string | null;

  /**
   * The ETag response-header field provides the current value of the entity tag for the requested variant.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
   */
  eTag?: string | null;

  /**
   * The date and time at which the variant was last modified.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
   */
  lastModified?: DateTime | Date | string | null;

  /**
   * Id of user / identity who last last modified this content.
   */
  lastModifiedBy?: string | null;

  /**
   * An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  contentMD5?: string | null;

  /**
   * An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  contentSHA1?: string | null;

  /**
   * Partition key for this partition
   */
  partitionKey: string;

  /**
   * Type of objects stored in this bucket. This is an internal field (populated while instantiation a DataPartitionBucket during {@link fromObjs})
   * and is used for deserialization during {@link readObjs}. If not provided, serType will default to the type
   * of the internal {@link KvRow}.
   */
  serType?: IType | null;

  /**
   * Min values based on the sort key in this partition. The min values is computed based on the metadata
   * provided as a part of {@link Ann.Db#persistenceOrder} in the right order.
   * If {@link Ann.Db#persistenceOrder} is not present then objs will be sorted based on id.
   * Note: persistenceOrder containing functions is currently not supported for bucketing and will result in all objects
   * in a single bucket (e.g. "start,descending(timestamp)")
   */
  minSortKey?: C3.Array<any> | Array<any>;

  /**
   * Max values based on the sort key in this partition. The max values is computed based on the metadata
   * provided as a part of {@link Ann.Db#persistenceOrder} in the right order.
   * If {@link Ann.Db#persistenceOrder} is not present then objs will be sorted based on id
   * Note: persistenceOrder containing functions is currently not supported for bucketing and will result in all objects
   * in a single bucket (e.g. "start,descending(timestamp)")
   */
  maxSortKey?: C3.Array<any> | Array<any>;

  /**
   * Count of objs in this partition
   */
  count: number;

  /**
   * column name for this bucket
   */
  column?: string | null;

  /**
   * url where contents of the bucket are stored
   */
  url?: string | null;
}

/**
 * Represents a key value store row bucket. Contains information about the contents of the bucket. This contains
 * the location where the bucket lives, e.g. a column in the KvRow vs shelved in a different location represented by
 * the url. Also contains basic stats about the bucket like min, max of the sortKey column. This can be used to early
 * filtering of results without actually reading contents of the bucket
 *
 * @remarks this represents a made instance of KvRowBucket
 */
declare class KvRowBucket extends Obj {

  /**
   * Represents the specific bucket (indicating specific sort key range if present) for this given partition. If sort key is not present, this
   * will be the same as {@link partitionKey}. The value needs to be naturally ordered for comparison
   */
  readonly id?: string | null;
  withId(id: string | null): KvRowBucket;

  /**
   * A modifier to the media-type. When present, its value indicates what additional content
   * codings have been applied to the data, and thus what decoding mechanisms must be
   * applied in order to obtain the media-type referenced by the contentType.
   *
   * It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
   */
  readonly contentEncoding?: string | null;
  withContentEncoding(contentEncoding: string | null): KvRowBucket;

  /**
   * Describes the natural language(s) of the intended audience.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
   */
  readonly contentLanguage?: string | null;
  withContentLanguage(contentLanguage: string | null): KvRowBucket;

  /**
   * The size of the entity-body, in bytes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
   */
  readonly contentLength?: number | null;
  withContentLength(contentLength: number | null): KvRowBucket;

  /**
   * The resource location for the entity enclosed in the message when that entity is accessible from a location
   * separate from the requested resource's URI.
   *
   * It is recommended to use #safeUrl instead.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
   */
  readonly contentLocation?: string | null;
  withContentLocation(contentLocation: string | null): KvRowBucket;

  /**
   * The media type of the content (MIME type).
   * This includes contentTypeParams such as delimiters, characters as well.
   * To specify delimiters please see {@link ContentType}
   * and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
   * Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
   * It is recommended to use #safeContentType instead as it will attempt to guess content type.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
   */
  readonly contentType?: string | null;
  withContentType(contentType: string | null): KvRowBucket;

  /**
   * Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
   * attachment locally.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
   */
  readonly contentDisposition?: string | null;
  withContentDisposition(contentDisposition: string | null): KvRowBucket;

  /**
   * The ETag response-header field provides the current value of the entity tag for the requested variant.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
   */
  readonly eTag?: string | null;
  withETag(eTag: string | null): KvRowBucket;

  /**
   * The date and time at which the variant was last modified.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
   */
  readonly lastModified?: DateTime | null;
  withLastModified(lastModified: DateTime | Date | string | null): KvRowBucket;

  /**
   * Id of user / identity who last last modified this content.
   */
  readonly lastModifiedBy?: string | null;
  withLastModifiedBy(lastModifiedBy: string | null): KvRowBucket;

  /**
   * An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  readonly contentMD5?: string | null;
  withContentMD5(contentMD5: string | null): KvRowBucket;

  /**
   * An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  readonly contentSHA1?: string | null;
  withContentSHA1(contentSHA1: string | null): KvRowBucket;

  /**
   * Partition key for this partition
   */
  readonly partitionKey: string;
  withPartitionKey(partitionKey: string): KvRowBucket;

  /**
   * Type of objects stored in this bucket. This is an internal field (populated while instantiation a DataPartitionBucket during {@link fromObjs})
   * and is used for deserialization during {@link readObjs}. If not provided, serType will default to the type
   * of the internal {@link KvRow}.
   */
  readonly serType?: Type | null;
  withSerType(serType: IType | null): KvRowBucket;

  /**
   * Min values based on the sort key in this partition. The min values is computed based on the metadata
   * provided as a part of {@link Ann.Db#persistenceOrder} in the right order.
   * If {@link Ann.Db#persistenceOrder} is not present then objs will be sorted based on id.
   * Note: persistenceOrder containing functions is currently not supported for bucketing and will result in all objects
   * in a single bucket (e.g. "start,descending(timestamp)")
   */
  readonly minSortKey?: C3.Array<any>;
  withMinSortKey(minSortKey: C3.Array<any> | Array<any>): KvRowBucket;

  /**
   * Max values based on the sort key in this partition. The max values is computed based on the metadata
   * provided as a part of {@link Ann.Db#persistenceOrder} in the right order.
   * If {@link Ann.Db#persistenceOrder} is not present then objs will be sorted based on id
   * Note: persistenceOrder containing functions is currently not supported for bucketing and will result in all objects
   * in a single bucket (e.g. "start,descending(timestamp)")
   */
  readonly maxSortKey?: C3.Array<any>;
  withMaxSortKey(maxSortKey: C3.Array<any> | Array<any>): KvRowBucket;

  /**
   * Count of objs in this partition
   */
  readonly count: number;
  withCount(count: number): KvRowBucket;

  /**
   * column name for this bucket
   */
  readonly column?: string | null;
  withColumn(column: string | null): KvRowBucket;

  /**
   * url where contents of the bucket are stored
   */
  readonly url?: string | null;
  withUrl(url: string | null): KvRowBucket;

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
  static fromJson(json: any | null): KvRowBucket | null;

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
  static fromJsonString(json: string | null): KvRowBucket | null;

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
  static fromXmlString(xml: string | null): KvRowBucket | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): KvRowBucket | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): KvRowBucket;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvRowBucket;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvRowBucket;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvRowBucket | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvRowBucket | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): KvRowBucket;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvRowBucket;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvRowBucket;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): KvRowBucket;

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
  withField(field: string, value: any, doNotConvert?: boolean): KvRowBucket;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): KvRowBucket;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): KvRowBucket;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): KvRowBucket;

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
  withoutFieldAtPath(path: string): KvRowBucket;

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
  withoutField(field: string | null): KvRowBucket;

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
  withoutField(field: FieldType | null): KvRowBucket;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): KvRowBucket;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): KvRowBucket;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): KvRowBucket;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): KvRowBucket;

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
  defaultField(field: string): KvRowBucket;

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
  defaultField(field: FieldType): KvRowBucket;

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
  unsetField(field: string): KvRowBucket;

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
  unsetField(field: FieldType): KvRowBucket;

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
  removeField(field: string): KvRowBucket;

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
  removeField(field: FieldType): KvRowBucket;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): KvRowBucket;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): KvRowBucket;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): KvRowBucket;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): KvRowBucket;

  mergeJson(json: any | null): KvRowBucket;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): KvRowBucket;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): KvRowBucket;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<KvRowBucket | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<KvRowBucket | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<KvRowBucket | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<KvRowBucket | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<KvRowBucket | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, KvRowBucket | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, KvRowBucket | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<KvRowBucket | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<KvRowBucket | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): KvRowBucket;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): KvRowBucket;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): KvRowBucket;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): KvRowBucket;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): KvRowBucket;

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
  static make(fields: any, withDefaults?: boolean): KvRowBucket;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): KvRowBucket | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): KvRowBucket;

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
  afterMake(): KvRowBucket;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): KvRowBucket;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<KvRowBucket>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): KvRowBucket;

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
  static fromString(s: string | null): KvRowBucket | null;

  /**
   * @return true if this is a text content (not simply plain text but csv, json, xml etc).
   * I.e. readString is meaningful on a Content.
   */
  isAnyText(): boolean;

  /**
   * Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
   * ({@link ContentType}, {@link ContentMeta}).
   */
  isAnyTextImpl(mediaType: string): boolean;

  /**
   * @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
   */
  isPlainText(): boolean;

  /**
   * @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
   */
  isBinary(): boolean;

  /**
   * @return true if this is a csv content.
   */
  isCsv(): boolean;

  /**
   * @return true if this is a green button csv content.
   */
  isGreenButtonCsv(): boolean;

  /**
   * @return true if this is a green button xml content.
   */
  isGreenButtonXml(): boolean;

  /**
   * @return true if this is a json content.
   */
  isJson(): boolean;

  /**
   * @return true if this is a json content. http://jsonlines.org/.
   */
  isJsonLines(): boolean;

  /**
   * @return true if this is YAML content.
   *
   * @see https://yaml.org/
   */
  isYaml(): boolean;

  /**
   * @return true if this is a xml content.
   */
  isXml(): boolean;

  /**
   * @return true if this is a xlsx content.
   */
  isXlsx(): boolean;

  /**
   * @return true if this is a X12-EDI content.
   */
  isEdi(): boolean;

  /**
   * @return true if this is c3 binary content.
   */
  isC3Binary(): boolean;

  /**
   * @return true if this is a c3 type content.
   */
  isC3Type(): boolean;

  /**
   * @return true if this is a JavaScript content.
   */
  isJavaScript(): boolean;

  /**
   * @return true if this is a Python content.
   */
  isPython(): boolean;

  /**
   * @return true if this is a R content.
   */
  isR(): boolean;

  /**
   * @return true if this is a ruby source code content.
   */
  isRuby(): boolean;

  /**
   * @return true if this is a Java content.
   */
  isJava(): boolean;

  /**
   * @return true if this is a Java Script content.
   */
  isTypeScript(): boolean;

  /**
   * @return true if this is any source code content.
   */
  isAnyCode(): boolean;

  /**
   * @return true if this is an Apache Avro content.
   */
  isAvro(): boolean;

  /**
   * @return true if this is an Apache Parquet content.
   */
  isParquet(): boolean;

  /**
   * @return true if this is HDF5 content.
   */
  isHdf5(): boolean;

  /**
   * @return true if this is HTML content.
   */
  isHtml(): boolean;

  /**
   * @return true if this is a Zip file content.
   */
  isZip(): boolean;

  /**
   * @return true if this is a Dsl file content.
   */
  isDsl(): boolean;

  /**
   * @return true if this is a Type Dsl file content.
   */
  isTypeDsl(): boolean;

  /**
   * @return true if this is a UI Dsl file content.
   */
  isUiDsl(): boolean;

  /**
   * @return true if this is a (c3) Doc file content.
   */
  isDoc(): boolean;

  /**
   * @return true if this is a Markdown file content.
   */
  isMarkdown(): boolean;

  /**
   * @return true if this is a an image content.
   */
  isImage(): boolean;

  /**
   * @return true if this is a SVG content.
   */
  isSvg(): boolean;

  /**
   * @return true if this is a PNG content.
   */
  isPng(): boolean;

  /**
   * @return true if this is a JPEG content.
   */
  isJpeg(): boolean;

  /**
   * @return character set if this content is text.
   */
  charset(): string | null;

  /**
   * @return URL for this content. Note that it is best to use this method instead of other optional fields like
   * contentLocation or url (for other sub types). Throws error if URL is not available.
   */
  safeUrl(): string | null;

  /**
   * @return parsed content URL.
   */
  parseUrl(): Url;

  /**
   * @return Content Type if provided or best guess based on file name.
   */
  safeContentType(): string;

  /**
   * @return Content Encoding if provides or best guess based on file name.
   */
  safeContentEncoding(): string;

  /**
   * @return content type custom parameters.
   */
  contentTypeParams(): C3.Map<string | null, string | null>;

  /**
   * @return parsed content type.
   */
  parseContentType(): ContentType;

  /**
   * @return content type and encoding if known or best guess based on available info; first part of the pair is
   *         content type.
   */
  guessContentTypeAndEncoding(): Pair<string | null, string | null>;

  /**
   * Retrieves directory url if the content location points to a file.
   */
  directoryUrl(): string;

  /**
   * Retrieves name if the content location points to a file.
   */
  fileName(): string | null;

  /**
   * Retrieves extension of the file referenced by content location or `null` if file doesn't have an extension.
   * The extension includes the leading dot (e.g., ".py", ".json").
   *
   * @see #fileExtWithoutDot
   * @see #hasFileExt
   * @see FileExt
   */
  fileExt(): string | null;

  /**
   * Retrieves extension of the file referenced by content location without the leading dot or `null` if file doesn't have an extension.
   * Returns the extension without the dot (e.g., "py", "json").
   *
   * @see #fileExt
   * @see #hasFileExt
   * @see FileExt
   */
  fileExtWithoutDot(): string | null;

  /**
   * Retrieves primary extension of the file referenced by content location or `null` if file doesn't have it. Primary
   * extension is last token after last `.`; e.g. for `file.tar.gz` it will return `gz`.
   */
  filePrimaryExt(): string | null;

  /**
   * Retrieves secondary extension of the file referenced by content location or `null` if file doesn't have it.
   * Secondary extension is second to last token before last `.`; e.g. for `file.tar.gz` it will return `tar`.
   */
  fileSecondaryExt(): string | null;

  /**
   * Retrieves name without file extension if the content location points to a file.
   */
  fileNameNoExt(): string | null;

  /**
   * Changes file name in this instance.
   */
  withFileName(fileName: string | null): KvRowBucket;

  /**
   * Changes file extension in this instance.
   */
  withFileExt(fileExt: string | null): KvRowBucket;

  /**
   * Check whether this content has the specified file extension (case insensitive).
   * Handles extensions with and without '.' prefix, as well as compound extensions.
   *
   * @param ext file extension to check, with or without period (e.g., "py" or ".py")
   * @see #fileExt
   * @see FileExt
   */
  hasFileExt(ext: string): boolean;

  /**
   * Helper methods for sub-types to implement safeUrl;
   *
   * @return url passed as param if not void or this.contentLocation if set or throws exception.
   */
  safeUrlImpl(url?: string | null): string | null;

  /**
   * @return {@link eTag} if present otherwise read eTag from File located at {@link contentLocation}. Throws exception
   * if contentLocation is not present
   */
  safeETag(): string | null;

  /**
   * Adds an id and generates an in memory content location.
   * if suffix provided, will use suffix instead of random uuid.
   */
  identify(suffix?: string | null): KvRowBucket;

  /**
   * Read contents of this partition's bucket as objs
   */
  readObjs(): Stream<Obj | null>;

  /**
   * Generate bucket id from the given min sort key value. Returned value will maintain natural sort order
   * Currently supported value types are datetime, string. It is important that the result is in the natural sort order
   * to be able to push down comparison operations down to the underlying datastores
   */
  static bucketId(minSortKeyValue: C3.Array<any>): string;

  /**
   * Delete the contents of the existing bucket. If backed by a File {@see DataPartitionBucket#contentLocation},
   * then the remote file will be deleted. If backed by in memory content (@see DataPartitionBucketValue), then
   * the in memory buffer will be set to null
   */
  deleteContent(): void;

  /**
   * Create a bucket from existing objs. For internal use only to generate buckets via {@link DataPartition#fromObjs}
   * @param objs
   *         Objects that need to be written
   * @spec
   *        Indicates how objects need to be written
   * @return instance of updated bucket with contents written
   */
  static fromObjs(objs?: Stream<Obj | null>): DataPartitionBucket | null;
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
