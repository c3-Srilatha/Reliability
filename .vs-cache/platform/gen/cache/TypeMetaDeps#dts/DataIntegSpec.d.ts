// TypeScript definitions for the C3 type DataIntegSpec

/**
 * Type that encapsulates all the options for processing (data-loading) Source content into the C3 type system.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataIntegSpec
 */
declare interface IDataIntegSpec {

  /**
   * This overrides the media type of the content (MIME type).
   *
   * Example showing how to override the comma delimiter in a CSV file with a pipe (`|`) delimiter:
   *
   * ```
   * var fsc = FileSourceCollection.forName('<my file source collection id>')
   * fsc.contentTypeOverride = 'text/csv; delimiter= "|"'
   * fsc.update()
   * ```
   */
  contentTypeOverride?: string | null;

  /**
   * This overrides the modifier to the media-type. When present, its value indicates what additional content codings
   * have been applied to the data, and thus what decoding mechanisms must be applied in order to obtain the
   * media-type referenced by the contentType.
   */
  contentEncodingOverride?: string | null;

  /**
   * When neither contentTypeOverride is specified in spec, nor content type information is provided from other place,
   * defaultContentType takes the place to specify the content type.
   */
  defaultContentType?: string | null;

  /**
   * When neither contentEncodingOverride is specified in spec, nor content encoding information is provided from other place,
   * defaultContentEncoding takes the place to specify the content type.
   */
  defaultContentEncoding?: string | null;

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  retrySpec?: IRetrySpec | null;

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
   * If provided, list files will return only files whose name matches the provided glob.
   */
  globPattern?: string | null;

  /**
   * If provided, list files will return only files that end with the provided suffix.
   */
  fileSuffix?: string | null;

  /**
   * When listing files, set this to true to include directories if the FileSystem supports Files referencing directories
   */
  includeDirs?: boolean;

  /**
   * When listing files, set this to true to include hidden or unnamed files.
   * Unnamed empty files are created by some file systems to represent directories.
   */
  hiddenFiles?: boolean;

  /**
   * If set to false then it will chunk content to the chunkSize specified in the annotation on #source type
   * {@see Ann.DataLoad#chunkSize}
   */
  doNotChunk?: boolean | null;

  /**
   * If set to true then it will clean existing chunks before chunking
   */
  cleanupPendingChunks?: boolean;

  /**
   * If not set then SourceStatus will be persisted in {@link SourceFile} or in {@link SourceCollection#statsUrl}
   */
  doNotArchiveStatus?: boolean;

  /**
   * If not set then source content will be persisted in {@link SourceCollection#completedContentUrl}
   * on completion.
   */
  doNotArchiveSources?: boolean;

  /**
   * If not set then sources failed during processing or parsing, they will be archived
   * in {@link SourceCollection#failedSourcesUrl}
   * Also serialized {@link FailedSource} will be written to failedSourcesUrl
   * For {@link CloudMessageSourceCollection}, message processing will continue irrespective of the value of this.
   * When this option is not set or set to `false`, message content failed to parse will be saved
   * to {@link FailedSource}.
   * Also serialized {@link FailedSource} will be written to failedSourcesUrl
   */
  doNotArchiveFailedSources?: boolean;

  /**
   * Indicates the threshold of acceptable number of errors
   */
  numErrorsToAbort?: number | null;

  /**
   * Number of times the data load logic retries to write the target type data and stats into database in case of database
   * version conflict in a multi-thread environment
   */
  numRetries?: number | null;

  /**
   * Mode to set the process for the SourceCollection
   * {@see SourceCollectionProcessMode} for more details.
   */
  processMode: string;

  /**
   * If #processMode is set to ON_SCHEDULE,
   * @see {@link CronSchedule#expression} for more details.
   * The default is "0 0 0 * * ?", which means it runs every day at midnight.
   */
  processSchedule?: string | null;

  /**
   * Setting priorities for processing Sources from this source collection.
   * to set lower priorities please consider values from 0-3000
   * to set higher priorities please set values anywhere between 97000-100000
   * Priorities between 3000 and 97000 are preserved and should not be assigned directly.
   */
  priority?: number | null;

  /**
   * User can choose to change the #archiveUrl for the SourceCollection.
   */
  archiveUrlOverride?: string | null;

  /**
   * If set to true then #inboxUrl is not managed by C3 and files will not be moved.
   * The user has to manage the inboxUrl in that case to prevent it from growing large in size.
   */
  externalOverride?: boolean | null;

  /**
   * Overrides the #inboxUrl
   * If data needs to be loaded from a folder different than the default one, provide the value via this field.
   * e.g. s3://my-custom-bucket/mypath/inbox
   */
  inboxUrlOverride?: string | null;

  /**
   * Set a custom {@link TargetCollection} for specific target types.
   * The map key must be the exactly the same as name of the target type and value is the {@link TargetCollection} override.
   * When specifying the override, make sure that the name of the target collection is unique and separate from
   * the name of the target type to avoid any conflicts with the default target collection.
   *
   * By default, the {@link TargetCollection} is automatically retrieved by matching the name of the target collection
   * to the name of the target type. Only use this field if you have different source collections with the same target type
   * and you want to use different {@link TargetCollection}s for each source collection.
   */
  targetCollectionOverrides?: C3.Map<string | null, TargetCollection<any> | null> | {[key: string | null]: ITargetCollection<any> | null};

  /**
   * Overrides the csvHeader specified in the contentType.
   */
  csvHeaderOverride?: string | null;

  /**
   * Overrides the csvDelimiter specified contentType.
   */
  csvDelimiterOverride?: string | null;

  /**
   * Escape character override for CSV file.
   */
  csvEscapeCharOverride?: string | null;

  /**
   * Quote character override for CSV file.
   */
  csvQuoteCharOverride?: string | null;

  /**
   * If the CSV content does not have a header. By default, its false, which means we expect header to be present.
   * Useful to set as true when we don't know the header but know that it doesn't exist.
   *
   * Only applicable when de-serializing CSV contentType.
   */
  noCsvHeader?: boolean;

  /**
   * Optional format for a csv values. Key should be field path used in a csv header.
   */
  csvFormat?: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null};

  /**
   * Overrides avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
   * file based avro data, and from the type in the case of in-memory avro data.
   */
  avroSchemaOverride?: string | null;

  /**
   * Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
   * an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
   * written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
   * and "type", the type shared by all Objs in the aforementioned array.
   */
  isObjList?: boolean;

  /**
   * Optionally fail to serialize extra fields in serialized content instead of ignoring.
   */
  failOnExtraFields?: boolean;

  /**
   * If true will silently ignore bad syntax in the content and will return no or partial results.
   */
  ignoreBadContent?: boolean;

  /**
   * If set will ignore value conversion errors (e.g. non numeric strings will get converted to null for numeric fields)
   */
  ignoreValueConversionErrors?: boolean;

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
   * The minimum contentLength (in bytes) a Source must be for it to be chunked. The default is 5MB
   * If #doNotChunk is true, this field has no effect and sources will not be chunked.
   */
  minByteSizeToChunk?: number | null;

  /**
   * if set to true then target objs will include {@link Sources#sourcesMeta}
   */
  includeMeta?: boolean;

  /**
   * No of files in each batch job
   */
  batchSize?: number | null;

  /**
   * total number of files to process; if -1 all files will be retrieved, defaults is -1.
   */
  limit?: number | null;

  /**
   * Filter expression for which Obj instances to return.  Filter expressions must evaluate to a value type of
   * Boolean.  They support basic comparison operators (e.g. "==", "<", "<=", ">", ">=", "!="), arithmetic operators
   * (e.g. "+", "-", "*", "/"), "&&", "||" and "most" non-timeseries functions supported by the C3 expression engine.
   *
   * Expressions can include fields in the Obj itself (e.g. "name == 'foo'"), as well as fields in Objs in other
   * types referenced from the Obj (e.g. "refField.name == 'foo'").  Expressions involving arry/mapp fields will
   * automatically be interpreted as "exists" queries (e.g. "refArry.name == 'foo'" will bring back all Obj instances
   * that have at least one entry in refArry where the referenced Obj has the value 'foo' for its name field).
   */
  filter?: string | null;

  /**
   * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
   */
  vars?: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null};

  /**
   * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
   * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
   */
  fetchHiddenSeedData?: boolean;

  /**
   * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
   * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
   */
  excludeExtensions?: boolean;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
   */
  asOf?: DateTime | Date | string | null;

  /**
   * If true and the maximum number of bind variables has been reached for the query, additional values will be added
   * to the query as literal values, quoted and escaped as necessary.
   */
  allowLiteralOnBindVariableOverflow?: boolean;

  /**
   * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
   * used.
   */
  useDedicatedConnection?: boolean;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * the query itself and does not apply to total time used to read/process the entire result set or processing child
   * queries.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  stmtTimeoutMs?: number | null;

  /**
   * If an error occurs deserializing a persisted json value for a value type that accepts either string (or boxed
   * string), the error text will be returned as the value.  If the value type doesn't accept either string (or boxed
   * string) and this is true, null will be returned as the value, otherwise an exception will be thrown.
   */
  dontThrowJsonDeserErrors?: boolean;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective within that time range.  If either the start/end time is null, then
   * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  timeRange?: ITimeRange | null;

  /**
   * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
   * promotion in upsert.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  timedFetchParentField?: string | null;

  includeBaseTypes?: boolean;

  /**
   * Set to true to not have the viewInclude limit the input include.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  ignoreViewInclude?: boolean;

  /**
   * If set then metadata about the source content is read and stored in {@see SourceCollection#statsUrl}
   * no downstream processing(data-loading) takes place
   */
  synchronous?: boolean;

  /**
   * if set to true, the pipeline will not transform and persist the sources.
   * if #Sources#shouldChunk is true the chunks will be created and the status will be updated to completed
   * after chunking is successful.
   * These chunks are stored in Cassandra and could cause it to run out of disk space
   * so kindly note that they will have to be manually deleted by calling Sources#cleanUpChunks
   */
  doNotTransformAndPersist?: boolean;

  /**
   * if true then processes files that have not yet been processed.
   */
  process?: boolean;

  /**
   * Batch size determines number of source files that will be processed together in {@link SourceFile#processAll}
   */
  sourceFilesBatchSize?: number | null;

  /**
   * The specification of fields get from Database when syncing SourceFiles
   * See {@link CollectionUpdate#forArray} and {@link CollectionUpdate#persist}
   */
  include?: string | null;

  /**
   * if true then DataIntegSpec is created from SourceCollection.Config at runtime.
   */
  _isMerged?: boolean;

  /**
   * The index of the first object from a stream that needs to be read.
   */
  offset?: number | null;
}

/**
 * Type that encapsulates all the options for processing (data-loading) Source content into the C3 type system.
 *
 * @remarks this represents a made instance of DataIntegSpec
 */
declare class DataIntegSpec extends Obj {

  /**
   * This overrides the media type of the content (MIME type).
   *
   * Example showing how to override the comma delimiter in a CSV file with a pipe (`|`) delimiter:
   *
   * ```
   * var fsc = FileSourceCollection.forName('<my file source collection id>')
   * fsc.contentTypeOverride = 'text/csv; delimiter= "|"'
   * fsc.update()
   * ```
   */
  readonly contentTypeOverride?: string | null;
  withContentTypeOverride(contentTypeOverride: string | null): DataIntegSpec;

  /**
   * This overrides the modifier to the media-type. When present, its value indicates what additional content codings
   * have been applied to the data, and thus what decoding mechanisms must be applied in order to obtain the
   * media-type referenced by the contentType.
   */
  readonly contentEncodingOverride?: string | null;
  withContentEncodingOverride(contentEncodingOverride: string | null): DataIntegSpec;

  /**
   * When neither contentTypeOverride is specified in spec, nor content type information is provided from other place,
   * defaultContentType takes the place to specify the content type.
   */
  readonly defaultContentType?: string | null;
  withDefaultContentType(defaultContentType: string | null): DataIntegSpec;

  /**
   * When neither contentEncodingOverride is specified in spec, nor content encoding information is provided from other place,
   * defaultContentEncoding takes the place to specify the content type.
   */
  readonly defaultContentEncoding?: string | null;
  withDefaultContentEncoding(defaultContentEncoding: string | null): DataIntegSpec;

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  readonly retrySpec?: RetrySpec | null;
  withRetrySpec(retrySpec: IRetrySpec | null): DataIntegSpec;

  /**
   * If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
   * type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
   */
  readonly validateContentType?: boolean;
  withValidateContentType(validateContentType: boolean): DataIntegSpec;

  /**
   * If set to `true` and content metadata is not known then will read content for better guess at metadata and target
   * type.
   */
  readonly peekForMetadata?: boolean;
  withPeekForMetadata(peekForMetadata: boolean): DataIntegSpec;

  /**
   * Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
   * exception.
   */
  readonly failIfMissing?: boolean;
  withFailIfMissing(failIfMissing: boolean): DataIntegSpec;

  /**
   * For some external file systems, additional authorization is required to read/open a file and its metadata.
   * If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
   */
  readonly skipIfUnauthorized?: boolean;
  withSkipIfUnauthorized(skipIfUnauthorized: boolean): DataIntegSpec;

  /**
   * If set and if requested file or directory url is under this path then will retrieve content from cache.
   */
  readonly cacheUrlOrEncodedPath?: string | null;
  withCacheUrlOrEncodedPath(cacheUrlOrEncodedPath: string | null): DataIntegSpec;

  /**
   * Time in seconds that the cached file should live (default 24 hours).
   */
  readonly cacheTtlSec?: number | null;
  withCacheTtlSec(cacheTtlSec: number | null): DataIntegSpec;

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
  withForceMultiPart(forceMultiPart: boolean): DataIntegSpec;

  /**
   * Disable multipart upload and download from file system. By default file system operations intelligently decide
   * if multipart version should be used or not.
   *
   * @see forceMultiPart
   */
  readonly disableMultiPart?: boolean;
  withDisableMultiPart(disableMultiPart: boolean): DataIntegSpec;

  /**
   * Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
   */
  readonly maximumSingleUploadsize?: number | null;
  withMaximumSingleUploadsize(maximumSingleUploadsize: number | null): DataIntegSpec;

  /**
   * Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
   * fewer threads but it will not use more threads than this option specifies.
   *
   * Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
   * upload or download.
   */
  readonly maxThreads?: number | null;
  withMaxThreads(maxThreads: number | null): DataIntegSpec;

  /**
   * Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
   * may use fewer or greater number of threads. By default single action will not use all available threads this
   * option overrides that behavior.
   */
  readonly minThreads?: number | null;
  withMinThreads(minThreads: number | null): DataIntegSpec;

  /**
   * If set to true, it will retry reading file when the file is not found.
   */
  readonly retryOnNotFound?: boolean;
  withRetryOnNotFound(retryOnNotFound: boolean): DataIntegSpec;

  /**
   * If set to `true` then concurrent writes to a file will be serialized using locks
   *
   * For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
   */
  readonly lockOnWrite?: boolean;
  withLockOnWrite(lockOnWrite: boolean): DataIntegSpec;

  /**
   * If set will use IoExecutor service.
   */
  readonly useIoExecutor?: boolean;
  withUseIoExecutor(useIoExecutor: boolean): DataIntegSpec;

  /**
   * If not null, retry logic will be used from CloudClient rather than File
   */
  readonly cloudClient?: any;
  withCloudClient(cloudClient: any): DataIntegSpec;

  /**
   * If provided, list files will return only files whose name matches the provided glob.
   */
  readonly globPattern?: string | null;
  withGlobPattern(globPattern: string | null): DataIntegSpec;

  /**
   * If provided, list files will return only files that end with the provided suffix.
   */
  readonly fileSuffix?: string | null;
  withFileSuffix(fileSuffix: string | null): DataIntegSpec;

  /**
   * When listing files, set this to true to include directories if the FileSystem supports Files referencing directories
   */
  readonly includeDirs?: boolean;
  withIncludeDirs(includeDirs: boolean): DataIntegSpec;

  /**
   * When listing files, set this to true to include hidden or unnamed files.
   * Unnamed empty files are created by some file systems to represent directories.
   */
  readonly hiddenFiles?: boolean;
  withHiddenFiles(hiddenFiles: boolean): DataIntegSpec;

  /**
   * If set to false then it will chunk content to the chunkSize specified in the annotation on #source type
   * {@see Ann.DataLoad#chunkSize}
   */
  readonly doNotChunk?: boolean | null;
  withDoNotChunk(doNotChunk: boolean | null): DataIntegSpec;

  /**
   * If set to true then it will clean existing chunks before chunking
   */
  readonly cleanupPendingChunks?: boolean;
  withCleanupPendingChunks(cleanupPendingChunks: boolean): DataIntegSpec;

  /**
   * If not set then SourceStatus will be persisted in {@link SourceFile} or in {@link SourceCollection#statsUrl}
   */
  readonly doNotArchiveStatus?: boolean;
  withDoNotArchiveStatus(doNotArchiveStatus: boolean): DataIntegSpec;

  /**
   * If not set then source content will be persisted in {@link SourceCollection#completedContentUrl}
   * on completion.
   */
  readonly doNotArchiveSources?: boolean;
  withDoNotArchiveSources(doNotArchiveSources: boolean): DataIntegSpec;

  /**
   * If not set then sources failed during processing or parsing, they will be archived
   * in {@link SourceCollection#failedSourcesUrl}
   * Also serialized {@link FailedSource} will be written to failedSourcesUrl
   * For {@link CloudMessageSourceCollection}, message processing will continue irrespective of the value of this.
   * When this option is not set or set to `false`, message content failed to parse will be saved
   * to {@link FailedSource}.
   * Also serialized {@link FailedSource} will be written to failedSourcesUrl
   */
  readonly doNotArchiveFailedSources?: boolean;
  withDoNotArchiveFailedSources(doNotArchiveFailedSources: boolean): DataIntegSpec;

  /**
   * Indicates the threshold of acceptable number of errors
   */
  readonly numErrorsToAbort?: number | null;
  withNumErrorsToAbort(numErrorsToAbort: number | null): DataIntegSpec;

  /**
   * Number of times the data load logic retries to write the target type data and stats into database in case of database
   * version conflict in a multi-thread environment
   */
  readonly numRetries?: number | null;
  withNumRetries(numRetries: number | null): DataIntegSpec;

  /**
   * Mode to set the process for the SourceCollection
   * {@see SourceCollectionProcessMode} for more details.
   */
  readonly processMode: string;
  withProcessMode(processMode: string): DataIntegSpec;

  /**
   * If #processMode is set to ON_SCHEDULE,
   * @see {@link CronSchedule#expression} for more details.
   * The default is "0 0 0 * * ?", which means it runs every day at midnight.
   */
  readonly processSchedule?: string | null;
  withProcessSchedule(processSchedule: string | null): DataIntegSpec;

  /**
   * Setting priorities for processing Sources from this source collection.
   * to set lower priorities please consider values from 0-3000
   * to set higher priorities please set values anywhere between 97000-100000
   * Priorities between 3000 and 97000 are preserved and should not be assigned directly.
   */
  readonly priority?: number | null;
  withPriority(priority: number | null): DataIntegSpec;

  /**
   * User can choose to change the #archiveUrl for the SourceCollection.
   */
  readonly archiveUrlOverride?: string | null;
  withArchiveUrlOverride(archiveUrlOverride: string | null): DataIntegSpec;

  /**
   * If set to true then #inboxUrl is not managed by C3 and files will not be moved.
   * The user has to manage the inboxUrl in that case to prevent it from growing large in size.
   */
  readonly externalOverride?: boolean | null;
  withExternalOverride(externalOverride: boolean | null): DataIntegSpec;

  /**
   * Overrides the #inboxUrl
   * If data needs to be loaded from a folder different than the default one, provide the value via this field.
   * e.g. s3://my-custom-bucket/mypath/inbox
   */
  readonly inboxUrlOverride?: string | null;
  withInboxUrlOverride(inboxUrlOverride: string | null): DataIntegSpec;

  /**
   * Set a custom {@link TargetCollection} for specific target types.
   * The map key must be the exactly the same as name of the target type and value is the {@link TargetCollection} override.
   * When specifying the override, make sure that the name of the target collection is unique and separate from
   * the name of the target type to avoid any conflicts with the default target collection.
   *
   * By default, the {@link TargetCollection} is automatically retrieved by matching the name of the target collection
   * to the name of the target type. Only use this field if you have different source collections with the same target type
   * and you want to use different {@link TargetCollection}s for each source collection.
   */
  readonly targetCollectionOverrides?: C3.Map<string | null, TargetCollection<any> | null>;
  withTargetCollectionOverrides(targetCollectionOverrides: C3.Map<string | null, TargetCollection<any> | null> | {[key: string | null]: ITargetCollection<any> | null}): DataIntegSpec;

  /**
   * Overrides the csvHeader specified in the contentType.
   */
  readonly csvHeaderOverride?: string | null;
  withCsvHeaderOverride(csvHeaderOverride: string | null): DataIntegSpec;

  /**
   * Overrides the csvDelimiter specified contentType.
   */
  readonly csvDelimiterOverride?: string | null;
  withCsvDelimiterOverride(csvDelimiterOverride: string | null): DataIntegSpec;

  /**
   * Escape character override for CSV file.
   */
  readonly csvEscapeCharOverride?: string | null;
  withCsvEscapeCharOverride(csvEscapeCharOverride: string | null): DataIntegSpec;

  /**
   * Quote character override for CSV file.
   */
  readonly csvQuoteCharOverride?: string | null;
  withCsvQuoteCharOverride(csvQuoteCharOverride: string | null): DataIntegSpec;

  /**
   * If the CSV content does not have a header. By default, its false, which means we expect header to be present.
   * Useful to set as true when we don't know the header but know that it doesn't exist.
   *
   * Only applicable when de-serializing CSV contentType.
   */
  readonly noCsvHeader?: boolean;
  withNoCsvHeader(noCsvHeader: boolean): DataIntegSpec;

  /**
   * Optional format for a csv values. Key should be field path used in a csv header.
   */
  readonly csvFormat?: C3.Map<string | null, Format | null>;
  withCsvFormat(csvFormat: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null}): DataIntegSpec;

  /**
   * Overrides avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
   * file based avro data, and from the type in the case of in-memory avro data.
   */
  readonly avroSchemaOverride?: string | null;
  withAvroSchemaOverride(avroSchemaOverride: string | null): DataIntegSpec;

  /**
   * Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
   * an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
   * written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
   * and "type", the type shared by all Objs in the aforementioned array.
   */
  readonly isObjList?: boolean;
  withIsObjList(isObjList: boolean): DataIntegSpec;

  /**
   * Optionally fail to serialize extra fields in serialized content instead of ignoring.
   */
  readonly failOnExtraFields?: boolean;
  withFailOnExtraFields(failOnExtraFields: boolean): DataIntegSpec;

  /**
   * If true will silently ignore bad syntax in the content and will return no or partial results.
   */
  readonly ignoreBadContent?: boolean;
  withIgnoreBadContent(ignoreBadContent: boolean): DataIntegSpec;

  /**
   * If set will ignore value conversion errors (e.g. non numeric strings will get converted to null for numeric fields)
   */
  readonly ignoreValueConversionErrors?: boolean;
  withIgnoreValueConversionErrors(ignoreValueConversionErrors: boolean): DataIntegSpec;

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
  withMergeXmlNonAdjacentLists(mergeXmlNonAdjacentLists: boolean): DataIntegSpec;

  /**
   * The minimum contentLength (in bytes) a Source must be for it to be chunked. The default is 5MB
   * If #doNotChunk is true, this field has no effect and sources will not be chunked.
   */
  readonly minByteSizeToChunk?: number | null;
  withMinByteSizeToChunk(minByteSizeToChunk: number | null): DataIntegSpec;

  /**
   * if set to true then target objs will include {@link Sources#sourcesMeta}
   */
  readonly includeMeta?: boolean;
  withIncludeMeta(includeMeta: boolean): DataIntegSpec;

  /**
   * No of files in each batch job
   */
  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): DataIntegSpec;

  /**
   * total number of files to process; if -1 all files will be retrieved, defaults is -1.
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): DataIntegSpec;

  /**
   * Filter expression for which Obj instances to return.  Filter expressions must evaluate to a value type of
   * Boolean.  They support basic comparison operators (e.g. "==", "<", "<=", ">", ">=", "!="), arithmetic operators
   * (e.g. "+", "-", "*", "/"), "&&", "||" and "most" non-timeseries functions supported by the C3 expression engine.
   *
   * Expressions can include fields in the Obj itself (e.g. "name == 'foo'"), as well as fields in Objs in other
   * types referenced from the Obj (e.g. "refField.name == 'foo'").  Expressions involving arry/mapp fields will
   * automatically be interpreted as "exists" queries (e.g. "refArry.name == 'foo'" will bring back all Obj instances
   * that have at least one entry in refArry where the referenced Obj has the value 'foo' for its name field).
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): DataIntegSpec;

  /**
   * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
   */
  readonly vars?: C3.Map<string | null, Obj | null>;
  withVars(vars: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): DataIntegSpec;

  /**
   * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
   * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
   */
  readonly fetchHiddenSeedData?: boolean;
  withFetchHiddenSeedData(fetchHiddenSeedData: boolean): DataIntegSpec;

  /**
   * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
   * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
   */
  readonly excludeExtensions?: boolean;
  withExcludeExtensions(excludeExtensions: boolean): DataIntegSpec;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
   */
  readonly asOf?: DateTime | null;
  withAsOf(asOf: DateTime | Date | string | null): DataIntegSpec;

  /**
   * If true and the maximum number of bind variables has been reached for the query, additional values will be added
   * to the query as literal values, quoted and escaped as necessary.
   */
  readonly allowLiteralOnBindVariableOverflow?: boolean;
  withAllowLiteralOnBindVariableOverflow(allowLiteralOnBindVariableOverflow: boolean): DataIntegSpec;

  /**
   * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
   * used.
   */
  readonly useDedicatedConnection?: boolean;
  withUseDedicatedConnection(useDedicatedConnection: boolean): DataIntegSpec;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * the query itself and does not apply to total time used to read/process the entire result set or processing child
   * queries.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  readonly stmtTimeoutMs?: number | null;
  withStmtTimeoutMs(stmtTimeoutMs: number | null): DataIntegSpec;

  /**
   * If an error occurs deserializing a persisted json value for a value type that accepts either string (or boxed
   * string), the error text will be returned as the value.  If the value type doesn't accept either string (or boxed
   * string) and this is true, null will be returned as the value, otherwise an exception will be thrown.
   */
  readonly dontThrowJsonDeserErrors?: boolean;
  withDontThrowJsonDeserErrors(dontThrowJsonDeserErrors: boolean): DataIntegSpec;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective within that time range.  If either the start/end time is null, then
   * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly timeRange?: TimeRange | null;
  withTimeRange(timeRange: ITimeRange | null): DataIntegSpec;

  /**
   * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
   * promotion in upsert.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly timedFetchParentField?: string | null;
  withTimedFetchParentField(timedFetchParentField: string | null): DataIntegSpec;

  readonly includeBaseTypes?: boolean;
  withIncludeBaseTypes(includeBaseTypes: boolean): DataIntegSpec;

  /**
   * Set to true to not have the viewInclude limit the input include.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly ignoreViewInclude?: boolean;
  withIgnoreViewInclude(ignoreViewInclude: boolean): DataIntegSpec;

  /**
   * If set then metadata about the source content is read and stored in {@see SourceCollection#statsUrl}
   * no downstream processing(data-loading) takes place
   */
  readonly synchronous?: boolean;
  withSynchronous(synchronous: boolean): DataIntegSpec;

  /**
   * if set to true, the pipeline will not transform and persist the sources.
   * if #Sources#shouldChunk is true the chunks will be created and the status will be updated to completed
   * after chunking is successful.
   * These chunks are stored in Cassandra and could cause it to run out of disk space
   * so kindly note that they will have to be manually deleted by calling Sources#cleanUpChunks
   */
  readonly doNotTransformAndPersist?: boolean;
  withDoNotTransformAndPersist(doNotTransformAndPersist: boolean): DataIntegSpec;

  /**
   * if true then processes files that have not yet been processed.
   */
  readonly process?: boolean;
  withProcess(process: boolean): DataIntegSpec;

  /**
   * Batch size determines number of source files that will be processed together in {@link SourceFile#processAll}
   */
  readonly sourceFilesBatchSize?: number | null;
  withSourceFilesBatchSize(sourceFilesBatchSize: number | null): DataIntegSpec;

  /**
   * The specification of fields get from Database when syncing SourceFiles
   * See {@link CollectionUpdate#forArray} and {@link CollectionUpdate#persist}
   */
  readonly include?: string | null;
  withInclude(include: string | null): DataIntegSpec;

  /**
   * if true then DataIntegSpec is created from SourceCollection.Config at runtime.
   */
  readonly _isMerged?: boolean;
  with_isMerged(_isMerged: boolean): DataIntegSpec;

  /**
   * The index of the first object from a stream that needs to be read.
   */
  readonly offset?: number | null;
  withOffset(offset: number | null): DataIntegSpec;

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
  static fromJson(json: any | null): DataIntegSpec | null;

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
  static fromJsonString(json: string | null): DataIntegSpec | null;

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
  static fromXmlString(xml: string | null): DataIntegSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): DataIntegSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DataIntegSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataIntegSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataIntegSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataIntegSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataIntegSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataIntegSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataIntegSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataIntegSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): DataIntegSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): DataIntegSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): DataIntegSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataIntegSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataIntegSpec;

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
  withoutFieldAtPath(path: string): DataIntegSpec;

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
  withoutField(field: string | null): DataIntegSpec;

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
  withoutField(field: FieldType | null): DataIntegSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): DataIntegSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataIntegSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): DataIntegSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataIntegSpec;

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
  defaultField(field: string): DataIntegSpec;

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
  defaultField(field: FieldType): DataIntegSpec;

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
  unsetField(field: string): DataIntegSpec;

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
  unsetField(field: FieldType): DataIntegSpec;

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
  removeField(field: string): DataIntegSpec;

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
  removeField(field: FieldType): DataIntegSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataIntegSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): DataIntegSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataIntegSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataIntegSpec;

  mergeJson(json: any | null): DataIntegSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataIntegSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): DataIntegSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<DataIntegSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<DataIntegSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<DataIntegSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<DataIntegSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<DataIntegSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, DataIntegSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataIntegSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<DataIntegSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<DataIntegSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataIntegSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataIntegSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataIntegSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): DataIntegSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataIntegSpec;

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
  static make(fields: any, withDefaults?: boolean): DataIntegSpec;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): DataIntegSpec | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataIntegSpec;

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
  afterMake(): DataIntegSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): DataIntegSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataIntegSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): DataIntegSpec;

  /**
   * @return new instance of this spec with `retrySpec` set
   */
  withRetry(maxRetries?: number | null, initialSleepMillis?: number | null, exponent?: number | null): DataIntegSpec | null;

  /**
   * @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
   */
  static timeoutSeconds(secs: number | null): DataIntegSpec;

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
  static fromString(s: string | null): DataIntegSpec | null;

  /**
   * Creates timed fetch filter based on the type fetch will be invoked on
   */
  timedFetchFilter(type: Type): string | null;

  /**
   * Determines if the given spec has {@link #timeRange} or {@link #asOf} field set
   */
  hasTimeRange(): boolean;

  /**
   * Uses Config to create DataIntegSpec to be used at runtime if {@link DataIntegSpec#_isMerged} is false.
   * Fields in spec argument will override SourceCollection.Config values
   * @param config
   *        SourceCollection Config to be merged to current DataIntegSpec.
   * @return
   *        The merged DataIntegSpec
   */
  mergeConfig(config?: SourceCollection.Config | null): DataIntegSpec | null;

  /**
   * Uses Config to create DataIntegSpec to be used at runtime if {@link DataIntegSpec#_isMerged} is false.
   * Fields in spec argument will override SourceCollection.Config values
   * @param supplier
   *        Lambda for the SourceCollection Config to be merged to current DataIntegSpec.
   * @return
   *        The merged DataIntegSpec
   */
  mergeConfig(supplier?: λSupplier<SourceCollection.Config | null> | null): DataIntegSpec | null;
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

interface λPredicate<T> {
  (t: T): boolean
}
