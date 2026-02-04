// TypeScript definitions for the C3 type SourceCollectionReadTuplesSpec

/**
 * Options for SourceCollection#readTuples action.
 *
 * @remarks this represents a value passed to a method that expects an instance of SourceCollectionReadTuplesSpec
 */
declare interface ISourceCollectionReadTuplesSpec {

  /**
   * Filter used to decide whether a particular cloud message belongs to this CloudMessageDispatcher
   */
  filter?: string | null;

  /**
   * Number of messages to pull from CloudMessageBroker in each receiveMessages call
   */
  batchSize?: number | null;

  /**
   * subBatchSize.
   *
   * During dispatching, the #batchSize of message taken from the broker is further divided into sub-batches
   * of size #subBatchSize to be processed in parallel.
   */
  subBatchSize?: number | null;

  /**
   * Time in milliseconds receiver waits for the next event before receiver stops listening.
   */
  timeoutMillis?: number | null;

  /**
   * Name of cloud consumer or group used to read messages
   */
  cloudConsumer?: string | null;

  /**
   * The partition of the CloudMessageBroker that receiveMessages reads data from
   */
  partition?: string | null;

  /**
   * If true will silently ignore bad syntax in the content abd continue to next message.
   */
  ignoreBadContent?: boolean;

  /**
   * Optionally skip extra fields in serialized content instead of failing to serialize.
   */
  skipExtraFields?: boolean;

  /**
   * This overrides the media type of the content.
   */
  contentTypeOverride?: string | null;

  /**
   * This overrides the encoding type of the content.
   */
  contentEncodingOverride?: string | null;

  /**
   * Data serialization type. If not provided type will be inferred from source data
   */
  serValueType?: IValueType | null;

  /**
   * Content Type of the source data
   */
  contentType?: string | null;

  /**
   * Compression / Content Encoding of this data
   */
  contentEncoding?: string | null;

  /**
   * If the CSV content does not have a header. By default, its false, which means we expect header to be present.
   * Useful to set as true when we don't know the header but know that it doesn't exist.
   *
   * Only applicable when de-serializing CSV contentType.
   */
  noCsvHeader?: boolean;

  /**
   * csvHeader is a comma separated list of fields that need to be written and is required when contentType is
   * text/csv. Leave this field as null for all other content types.
   */
  csvHeader?: string | null;

  /**
   * Optional format for a csv values. Key should be field path used in a csv header.
   */
  csvFormat?: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null};

  /**
   * Default csv delimiter for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  defaultCsvDelimiter?: string | null;

  /**
   * Default escape character for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  defaultCsvEscapeChar?: string | null;

  /**
   * Default quote character for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  defaultCsvQuoteChar?: string | null;

  /**
   * Avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
   * file based avro data, and from the type in the case of in-memory avro data.
   */
  avroSchema?: string | null;

  /**
   * Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
   * an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
   * written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
   * and "type", the type shared by all Objs in the aforementioned array.
   */
  isObjList?: boolean;

  /**
   * True if desired to merge the non-adjacent lists for array type field. If false, the readObjs only
   * returns the last continuous list for the given key.
   * E.g., to readObjs for the following xml file,
   * <tests>
   *   <test>one</test>
   *   <other>two</other>
   *   <test>three</test>
   * </tests>
   * with serType,
   * Tests {
   *   test: [string]
   *   other: string
   * }
   * If mergeXmlNonAdjacentLists is set true, the returned Obj has 'test' field containing both 'one' and 'three'.
   * Otherwise, the 'test' field only has value 'three'.
   */
  mergeXmlNonAdjacentLists?: boolean;

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  retrySpec?: IRetrySpec | null;

  /**
   * If set, stream will be instantiated again on retryable errors and execution will continue from the point of failure
   */
  restartStreamOnRetry?: boolean;

  /**
   * The index of the first object from a stream that needs to be read.
   */
  offset?: number | null;

  /**
   * The maximum number of Objs to return (starting from {@link offset}). If there are fewer objects than were
   * requested, only those will be returned.
   */
  limit?: number | null;

  /**
   * If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
   * type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
   */
  validateContentType?: boolean;

  /**
   * If set to `true` and content metadata is not known then will read content for better guess at metadata and target
   * type.
   */
  peekForMetadata?: boolean;

  /**
   * Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
   * exception.
   */
  failIfMissing?: boolean;

  /**
   * For some external file systems, additional authorization is required to read/open a file and its metadata.
   * If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
   */
  skipIfUnauthorized?: boolean;

  /**
   * If set and if requested file or directory url is under this path then will retrieve content from cache.
   */
  cacheUrlOrEncodedPath?: string | null;

  /**
   * Time in seconds that the cached file should live (default 24 hours).
   */
  cacheTtlSec?: number | null;

  /**
   * Forces use of multipart upload and download from file system if available.
   *
   * By default operations intelligently decide whether or not to use multipart version. For upload action first
   * allocates multiPartChunkBytes sized buffer and fills it with content. If content fits completely in memory
   * upload will be conventional. If not then multipart upload would be initiated. For download first
   * multiPartChunkBytes+1 sized chunk will be attempted first. If content length == multiPartChunkBytes+1 then
   * total content length is retrieved and remaining content is downloaded using multipart download. If
   * forceMultiPart option is set then multipart download process is initiated from the beginning.
   */
  forceMultiPart?: boolean;

  /**
   * Disable multipart upload and download from file system. By default file system operations intelligently decide
   * if multipart version should be used or not.
   *
   * @see forceMultiPart
   */
  disableMultiPart?: boolean;

  /**
   * Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
   */
  maximumSingleUploadsize?: number | null;

  /**
   * Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
   * fewer threads but it will not use more threads than this option specifies.
   *
   * Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
   * upload or download.
   */
  maxThreads?: number | null;

  /**
   * Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
   * may use fewer or greater number of threads. By default single action will not use all available threads this
   * option overrides that behavior.
   */
  minThreads?: number | null;

  /**
   * If set to true, it will retry reading file when the file is not found.
   */
  retryOnNotFound?: boolean;

  /**
   * If set to `true` then concurrent writes to a file will be serialized using locks
   *
   * For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
   */
  lockOnWrite?: boolean;

  /**
   * If set will use IoExecutor service.
   */
  useIoExecutor?: boolean;

  /**
   * If not null, retry logic will be used from CloudClient rather than File
   */
  cloudClient?: any;

  /**
   * Optional C3 Type for serialization. If not set then will use parent folder of content as serialization type.
   * If #doNotUseParentDirForSerType is true and #peekForMetadata is true then will read content for C3 type.
   */
  serType?: IType | null;

  /**
   * If true then will not use parent folder of content for target type guess.
   */
  doNotUseParentDirForSerType?: boolean;

  /**
   * For avro operations only
   * If set, uses BinaryEncoder / BinaryDecoder for decoding avro serialization/deserialization
   */
  useBinaryEncodingDecoding?: boolean;

  /**
   * Optionally indicating if serialized form should contain C3 type.
   */
  shouldNotWriteType?: boolean;

  /**
   * Optionally indicating if serialized form should be formatted for ease of reading.
   */
  shouldWritePretty?: boolean;

  /**
   * If this property is set to true, the File System will try to guess the metadata for the file from the file
   * extensions instead of reading metadata from the stored file.
   *
   * This option should only be used if it is known that File Metadata is incorrect. Or it could be used in cases when
   * retrieving file metadata is an additional API call so skipping it could improve performance.
   *
   * CAUTION : If metadata could not be guessed from the file extensions, it could result in an error
   */
  guessMetadata?: boolean;

  /**
   * If true, checksum files will be generated when writing files
   */
  createChecksum?: boolean;

  /**
   * Whether to decrypt content during read
   */
  decrypt?: boolean;
}

/**
 * Options for SourceCollection#readTuples action.
 *
 * @remarks this represents a made instance of SourceCollectionReadTuplesSpec
 */
declare class SourceCollectionReadTuplesSpec extends Obj {

  /**
   * Filter used to decide whether a particular cloud message belongs to this CloudMessageDispatcher
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Number of messages to pull from CloudMessageBroker in each receiveMessages call
   */
  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): SourceCollectionReadTuplesSpec;

  /**
   * subBatchSize.
   *
   * During dispatching, the #batchSize of message taken from the broker is further divided into sub-batches
   * of size #subBatchSize to be processed in parallel.
   */
  readonly subBatchSize?: number | null;
  withSubBatchSize(subBatchSize: number | null): SourceCollectionReadTuplesSpec;

  /**
   * Time in milliseconds receiver waits for the next event before receiver stops listening.
   */
  readonly timeoutMillis?: number | null;
  withTimeoutMillis(timeoutMillis: number | null): SourceCollectionReadTuplesSpec;

  /**
   * Name of cloud consumer or group used to read messages
   */
  readonly cloudConsumer?: string | null;
  withCloudConsumer(cloudConsumer: string | null): SourceCollectionReadTuplesSpec;

  /**
   * The partition of the CloudMessageBroker that receiveMessages reads data from
   */
  readonly partition?: string | null;
  withPartition(partition: string | null): SourceCollectionReadTuplesSpec;

  /**
   * If true will silently ignore bad syntax in the content abd continue to next message.
   */
  readonly ignoreBadContent?: boolean;
  withIgnoreBadContent(ignoreBadContent: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Optionally skip extra fields in serialized content instead of failing to serialize.
   */
  readonly skipExtraFields?: boolean;
  withSkipExtraFields(skipExtraFields: boolean): SourceCollectionReadTuplesSpec;

  /**
   * This overrides the media type of the content.
   */
  readonly contentTypeOverride?: string | null;
  withContentTypeOverride(contentTypeOverride: string | null): SourceCollectionReadTuplesSpec;

  /**
   * This overrides the encoding type of the content.
   */
  readonly contentEncodingOverride?: string | null;
  withContentEncodingOverride(contentEncodingOverride: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Data serialization type. If not provided type will be inferred from source data
   */
  readonly serValueType?: ValueType | null;
  withSerValueType(serValueType: IValueType | null): SourceCollectionReadTuplesSpec;

  /**
   * Content Type of the source data
   */
  readonly contentType?: string | null;
  withContentType(contentType: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Compression / Content Encoding of this data
   */
  readonly contentEncoding?: string | null;
  withContentEncoding(contentEncoding: string | null): SourceCollectionReadTuplesSpec;

  /**
   * If the CSV content does not have a header. By default, its false, which means we expect header to be present.
   * Useful to set as true when we don't know the header but know that it doesn't exist.
   *
   * Only applicable when de-serializing CSV contentType.
   */
  readonly noCsvHeader?: boolean;
  withNoCsvHeader(noCsvHeader: boolean): SourceCollectionReadTuplesSpec;

  /**
   * csvHeader is a comma separated list of fields that need to be written and is required when contentType is
   * text/csv. Leave this field as null for all other content types.
   */
  readonly csvHeader?: string | null;
  withCsvHeader(csvHeader: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Optional format for a csv values. Key should be field path used in a csv header.
   */
  readonly csvFormat?: C3.Map<string | null, Format | null>;
  withCsvFormat(csvFormat: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null}): SourceCollectionReadTuplesSpec;

  /**
   * Default csv delimiter for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  readonly defaultCsvDelimiter?: string | null;
  withDefaultCsvDelimiter(defaultCsvDelimiter: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Default escape character for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  readonly defaultCsvEscapeChar?: string | null;
  withDefaultCsvEscapeChar(defaultCsvEscapeChar: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Default quote character for target type. Used for text/csv files. Leave this field as null for all other content types.
   */
  readonly defaultCsvQuoteChar?: string | null;
  withDefaultCsvQuoteChar(defaultCsvQuoteChar: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
   * file based avro data, and from the type in the case of in-memory avro data.
   */
  readonly avroSchema?: string | null;
  withAvroSchema(avroSchema: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
   * an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
   * written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
   * and "type", the type shared by all Objs in the aforementioned array.
   */
  readonly isObjList?: boolean;
  withIsObjList(isObjList: boolean): SourceCollectionReadTuplesSpec;

  /**
   * True if desired to merge the non-adjacent lists for array type field. If false, the readObjs only
   * returns the last continuous list for the given key.
   * E.g., to readObjs for the following xml file,
   * <tests>
   *   <test>one</test>
   *   <other>two</other>
   *   <test>three</test>
   * </tests>
   * with serType,
   * Tests {
   *   test: [string]
   *   other: string
   * }
   * If mergeXmlNonAdjacentLists is set true, the returned Obj has 'test' field containing both 'one' and 'three'.
   * Otherwise, the 'test' field only has value 'three'.
   */
  readonly mergeXmlNonAdjacentLists?: boolean;
  withMergeXmlNonAdjacentLists(mergeXmlNonAdjacentLists: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  readonly retrySpec?: RetrySpec | null;
  withRetrySpec(retrySpec: IRetrySpec | null): SourceCollectionReadTuplesSpec;

  /**
   * If set, stream will be instantiated again on retryable errors and execution will continue from the point of failure
   */
  readonly restartStreamOnRetry?: boolean;
  withRestartStreamOnRetry(restartStreamOnRetry: boolean): SourceCollectionReadTuplesSpec;

  /**
   * The index of the first object from a stream that needs to be read.
   */
  readonly offset?: number | null;
  withOffset(offset: number | null): SourceCollectionReadTuplesSpec;

  /**
   * The maximum number of Objs to return (starting from {@link offset}). If there are fewer objects than were
   * requested, only those will be returned.
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): SourceCollectionReadTuplesSpec;

  /**
   * If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
   * type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
   */
  readonly validateContentType?: boolean;
  withValidateContentType(validateContentType: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If set to `true` and content metadata is not known then will read content for better guess at metadata and target
   * type.
   */
  readonly peekForMetadata?: boolean;
  withPeekForMetadata(peekForMetadata: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
   * exception.
   */
  readonly failIfMissing?: boolean;
  withFailIfMissing(failIfMissing: boolean): SourceCollectionReadTuplesSpec;

  /**
   * For some external file systems, additional authorization is required to read/open a file and its metadata.
   * If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
   */
  readonly skipIfUnauthorized?: boolean;
  withSkipIfUnauthorized(skipIfUnauthorized: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If set and if requested file or directory url is under this path then will retrieve content from cache.
   */
  readonly cacheUrlOrEncodedPath?: string | null;
  withCacheUrlOrEncodedPath(cacheUrlOrEncodedPath: string | null): SourceCollectionReadTuplesSpec;

  /**
   * Time in seconds that the cached file should live (default 24 hours).
   */
  readonly cacheTtlSec?: number | null;
  withCacheTtlSec(cacheTtlSec: number | null): SourceCollectionReadTuplesSpec;

  /**
   * Forces use of multipart upload and download from file system if available.
   *
   * By default operations intelligently decide whether or not to use multipart version. For upload action first
   * allocates multiPartChunkBytes sized buffer and fills it with content. If content fits completely in memory
   * upload will be conventional. If not then multipart upload would be initiated. For download first
   * multiPartChunkBytes+1 sized chunk will be attempted first. If content length == multiPartChunkBytes+1 then
   * total content length is retrieved and remaining content is downloaded using multipart download. If
   * forceMultiPart option is set then multipart download process is initiated from the beginning.
   */
  readonly forceMultiPart?: boolean;
  withForceMultiPart(forceMultiPart: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Disable multipart upload and download from file system. By default file system operations intelligently decide
   * if multipart version should be used or not.
   *
   * @see forceMultiPart
   */
  readonly disableMultiPart?: boolean;
  withDisableMultiPart(disableMultiPart: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
   */
  readonly maximumSingleUploadsize?: number | null;
  withMaximumSingleUploadsize(maximumSingleUploadsize: number | null): SourceCollectionReadTuplesSpec;

  /**
   * Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
   * fewer threads but it will not use more threads than this option specifies.
   *
   * Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
   * upload or download.
   */
  readonly maxThreads?: number | null;
  withMaxThreads(maxThreads: number | null): SourceCollectionReadTuplesSpec;

  /**
   * Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
   * may use fewer or greater number of threads. By default single action will not use all available threads this
   * option overrides that behavior.
   */
  readonly minThreads?: number | null;
  withMinThreads(minThreads: number | null): SourceCollectionReadTuplesSpec;

  /**
   * If set to true, it will retry reading file when the file is not found.
   */
  readonly retryOnNotFound?: boolean;
  withRetryOnNotFound(retryOnNotFound: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If set to `true` then concurrent writes to a file will be serialized using locks
   *
   * For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
   */
  readonly lockOnWrite?: boolean;
  withLockOnWrite(lockOnWrite: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If set will use IoExecutor service.
   */
  readonly useIoExecutor?: boolean;
  withUseIoExecutor(useIoExecutor: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If not null, retry logic will be used from CloudClient rather than File
   */
  readonly cloudClient?: any;
  withCloudClient(cloudClient: any): SourceCollectionReadTuplesSpec;

  /**
   * Optional C3 Type for serialization. If not set then will use parent folder of content as serialization type.
   * If #doNotUseParentDirForSerType is true and #peekForMetadata is true then will read content for C3 type.
   */
  readonly serType?: Type | null;
  withSerType(serType: IType | null): SourceCollectionReadTuplesSpec;

  /**
   * If true then will not use parent folder of content for target type guess.
   */
  readonly doNotUseParentDirForSerType?: boolean;
  withDoNotUseParentDirForSerType(doNotUseParentDirForSerType: boolean): SourceCollectionReadTuplesSpec;

  /**
   * For avro operations only
   * If set, uses BinaryEncoder / BinaryDecoder for decoding avro serialization/deserialization
   */
  readonly useBinaryEncodingDecoding?: boolean;
  withUseBinaryEncodingDecoding(useBinaryEncodingDecoding: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Optionally indicating if serialized form should contain C3 type.
   */
  readonly shouldNotWriteType?: boolean;
  withShouldNotWriteType(shouldNotWriteType: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Optionally indicating if serialized form should be formatted for ease of reading.
   */
  readonly shouldWritePretty?: boolean;
  withShouldWritePretty(shouldWritePretty: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If this property is set to true, the File System will try to guess the metadata for the file from the file
   * extensions instead of reading metadata from the stored file.
   *
   * This option should only be used if it is known that File Metadata is incorrect. Or it could be used in cases when
   * retrieving file metadata is an additional API call so skipping it could improve performance.
   *
   * CAUTION : If metadata could not be guessed from the file extensions, it could result in an error
   */
  readonly guessMetadata?: boolean;
  withGuessMetadata(guessMetadata: boolean): SourceCollectionReadTuplesSpec;

  /**
   * If true, checksum files will be generated when writing files
   */
  readonly createChecksum?: boolean;
  withCreateChecksum(createChecksum: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Whether to decrypt content during read
   */
  readonly decrypt?: boolean;
  withDecrypt(decrypt: boolean): SourceCollectionReadTuplesSpec;

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
  static fromJson(json: any | null): SourceCollectionReadTuplesSpec | null;

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
  static fromJsonString(json: string | null): SourceCollectionReadTuplesSpec | null;

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
  static fromXmlString(xml: string | null): SourceCollectionReadTuplesSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SourceCollectionReadTuplesSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): SourceCollectionReadTuplesSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SourceCollectionReadTuplesSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SourceCollectionReadTuplesSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SourceCollectionReadTuplesSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SourceCollectionReadTuplesSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SourceCollectionReadTuplesSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): SourceCollectionReadTuplesSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): SourceCollectionReadTuplesSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): SourceCollectionReadTuplesSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SourceCollectionReadTuplesSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SourceCollectionReadTuplesSpec;

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
  withoutFieldAtPath(path: string): SourceCollectionReadTuplesSpec;

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
  withoutField(field: string | null): SourceCollectionReadTuplesSpec;

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
  withoutField(field: FieldType | null): SourceCollectionReadTuplesSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): SourceCollectionReadTuplesSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SourceCollectionReadTuplesSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): SourceCollectionReadTuplesSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SourceCollectionReadTuplesSpec;

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
  defaultField(field: string): SourceCollectionReadTuplesSpec;

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
  defaultField(field: FieldType): SourceCollectionReadTuplesSpec;

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
  unsetField(field: string): SourceCollectionReadTuplesSpec;

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
  unsetField(field: FieldType): SourceCollectionReadTuplesSpec;

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
  removeField(field: string): SourceCollectionReadTuplesSpec;

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
  removeField(field: FieldType): SourceCollectionReadTuplesSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SourceCollectionReadTuplesSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): SourceCollectionReadTuplesSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SourceCollectionReadTuplesSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SourceCollectionReadTuplesSpec;

  mergeJson(json: any | null): SourceCollectionReadTuplesSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SourceCollectionReadTuplesSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<SourceCollectionReadTuplesSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<SourceCollectionReadTuplesSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<SourceCollectionReadTuplesSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<SourceCollectionReadTuplesSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<SourceCollectionReadTuplesSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, SourceCollectionReadTuplesSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, SourceCollectionReadTuplesSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<SourceCollectionReadTuplesSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<SourceCollectionReadTuplesSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SourceCollectionReadTuplesSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SourceCollectionReadTuplesSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): SourceCollectionReadTuplesSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SourceCollectionReadTuplesSpec;

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
  static make(fields: any, withDefaults?: boolean): SourceCollectionReadTuplesSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SourceCollectionReadTuplesSpec;

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
  afterMake(): SourceCollectionReadTuplesSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): SourceCollectionReadTuplesSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SourceCollectionReadTuplesSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): SourceCollectionReadTuplesSpec;

  /**
   * @return new instance of this spec with `retrySpec` set
   */
  withRetry(maxRetries?: number | null, initialSleepMillis?: number | null, exponent?: number | null): SourceCollectionReadTuplesSpec | null;

  /**
   * @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
   */
  static timeoutSeconds(secs: number | null): SourceCollectionReadTuplesSpec;

  /**
   * @return FileObjsOperSpec with #serType set to provided value.
   */
  static fromType(serType: Type | null): SourceCollectionReadTuplesSpec;

  /**
   * @return typeMeta for #serType or Obj if not set.
   */
  safeSerTypeMeta(): TypeMeta;

  /**
   * @return #serType or Obj if not set.
   */
  safeSerType(): Type;

  /**
   * Cached to reduce GC pressure. This is a convenient way to get a spec with decrypt=true
   */
  static toDecrypt(): SourceCollectionReadTuplesSpec | null;
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
