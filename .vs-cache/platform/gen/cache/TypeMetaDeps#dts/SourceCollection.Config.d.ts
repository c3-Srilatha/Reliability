// TypeScript definitions for the C3 type SourceCollection.Config

/**
 * @remarks this represents a value passed to a method that expects an instance of SourceCollection.Config
 */
declare namespace SourceCollection {
  export interface IConfig {

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
     * The unique and required name of this instance.
     */
    name: string;

    configOverride?: string | null;

    secretOverride?: string | null;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    issues?: C3.Array<string | null> | Array<string | null>;

    /**
     * Indicates the chunk size in terms of number of records that needs to be used for chunking the content
     * and publishing to queue
     */
    chunkSize?: number | null;

    /**
     * Indicates the chunk size in MB that needs to be used for chunking the content
     * and publishing to queue
     */
    chunkSizeInMb?: number | null;

    /**
     * The prefix of the file name which has data for the canonical
     */
    filePrefix?: string | null;

    /**
     * If true, incoming sources are persisted in intermediate data storage before processing
     */
    stage?: boolean;

    /**
     * The mode of staging intermediate files. By default, this is stored as files, but it could also be persisted
     * in {@link KvStore}.
     */
    stagingMode?: string | null;

    /**
     * The name of the {@link FileSourceCollection} used to manage staged files, if stagingMode is FILE
     */
    stageFileSourceCollectionName?: string | null;

    /**
     * Returns the file name format
     * @return SourceFileNameFormat with the format
     */
    sourceFileNameFormat?: string | null;
  }
}

/**
 * @remarks this represents a made instance of SourceCollection.Config
 */
declare namespace SourceCollection {
  export class Config extends Obj {

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
    withContentTypeOverride(contentTypeOverride: string | null): SourceCollection.Config;

    /**
     * This overrides the modifier to the media-type. When present, its value indicates what additional content codings
     * have been applied to the data, and thus what decoding mechanisms must be applied in order to obtain the
     * media-type referenced by the contentType.
     */
    readonly contentEncodingOverride?: string | null;
    withContentEncodingOverride(contentEncodingOverride: string | null): SourceCollection.Config;

    /**
     * When neither contentTypeOverride is specified in spec, nor content type information is provided from other place,
     * defaultContentType takes the place to specify the content type.
     */
    readonly defaultContentType?: string | null;
    withDefaultContentType(defaultContentType: string | null): SourceCollection.Config;

    /**
     * When neither contentEncodingOverride is specified in spec, nor content encoding information is provided from other place,
     * defaultContentEncoding takes the place to specify the content type.
     */
    readonly defaultContentEncoding?: string | null;
    withDefaultContentEncoding(defaultContentEncoding: string | null): SourceCollection.Config;

    /**
     * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
     */
    readonly retrySpec?: RetrySpec | null;
    withRetrySpec(retrySpec: IRetrySpec | null): SourceCollection.Config;

    /**
     * If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
     * type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
     */
    readonly validateContentType?: boolean;
    withValidateContentType(validateContentType: boolean): SourceCollection.Config;

    /**
     * If set to `true` and content metadata is not known then will read content for better guess at metadata and target
     * type.
     */
    readonly peekForMetadata?: boolean;
    withPeekForMetadata(peekForMetadata: boolean): SourceCollection.Config;

    /**
     * Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
     * exception.
     */
    readonly failIfMissing?: boolean;
    withFailIfMissing(failIfMissing: boolean): SourceCollection.Config;

    /**
     * For some external file systems, additional authorization is required to read/open a file and its metadata.
     * If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
     */
    readonly skipIfUnauthorized?: boolean;
    withSkipIfUnauthorized(skipIfUnauthorized: boolean): SourceCollection.Config;

    /**
     * If set and if requested file or directory url is under this path then will retrieve content from cache.
     */
    readonly cacheUrlOrEncodedPath?: string | null;
    withCacheUrlOrEncodedPath(cacheUrlOrEncodedPath: string | null): SourceCollection.Config;

    /**
     * Time in seconds that the cached file should live (default 24 hours).
     */
    readonly cacheTtlSec?: number | null;
    withCacheTtlSec(cacheTtlSec: number | null): SourceCollection.Config;

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
    withForceMultiPart(forceMultiPart: boolean): SourceCollection.Config;

    /**
     * Disable multipart upload and download from file system. By default file system operations intelligently decide
     * if multipart version should be used or not.
     *
     * @see forceMultiPart
     */
    readonly disableMultiPart?: boolean;
    withDisableMultiPart(disableMultiPart: boolean): SourceCollection.Config;

    /**
     * Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
     */
    readonly maximumSingleUploadsize?: number | null;
    withMaximumSingleUploadsize(maximumSingleUploadsize: number | null): SourceCollection.Config;

    /**
     * Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
     * fewer threads but it will not use more threads than this option specifies.
     *
     * Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
     * upload or download.
     */
    readonly maxThreads?: number | null;
    withMaxThreads(maxThreads: number | null): SourceCollection.Config;

    /**
     * Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
     * may use fewer or greater number of threads. By default single action will not use all available threads this
     * option overrides that behavior.
     */
    readonly minThreads?: number | null;
    withMinThreads(minThreads: number | null): SourceCollection.Config;

    /**
     * If set to true, it will retry reading file when the file is not found.
     */
    readonly retryOnNotFound?: boolean;
    withRetryOnNotFound(retryOnNotFound: boolean): SourceCollection.Config;

    /**
     * If set to `true` then concurrent writes to a file will be serialized using locks
     *
     * For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
     */
    readonly lockOnWrite?: boolean;
    withLockOnWrite(lockOnWrite: boolean): SourceCollection.Config;

    /**
     * If set will use IoExecutor service.
     */
    readonly useIoExecutor?: boolean;
    withUseIoExecutor(useIoExecutor: boolean): SourceCollection.Config;

    /**
     * If not null, retry logic will be used from CloudClient rather than File
     */
    readonly cloudClient?: any;
    withCloudClient(cloudClient: any): SourceCollection.Config;

    /**
     * If provided, list files will return only files whose name matches the provided glob.
     */
    readonly globPattern?: string | null;
    withGlobPattern(globPattern: string | null): SourceCollection.Config;

    /**
     * If provided, list files will return only files that end with the provided suffix.
     */
    readonly fileSuffix?: string | null;
    withFileSuffix(fileSuffix: string | null): SourceCollection.Config;

    /**
     * When listing files, set this to true to include directories if the FileSystem supports Files referencing directories
     */
    readonly includeDirs?: boolean;
    withIncludeDirs(includeDirs: boolean): SourceCollection.Config;

    /**
     * When listing files, set this to true to include hidden or unnamed files.
     * Unnamed empty files are created by some file systems to represent directories.
     */
    readonly hiddenFiles?: boolean;
    withHiddenFiles(hiddenFiles: boolean): SourceCollection.Config;

    /**
     * If set to false then it will chunk content to the chunkSize specified in the annotation on #source type
     * {@see Ann.DataLoad#chunkSize}
     */
    readonly doNotChunk?: boolean | null;
    withDoNotChunk(doNotChunk: boolean | null): SourceCollection.Config;

    /**
     * If set to true then it will clean existing chunks before chunking
     */
    readonly cleanupPendingChunks?: boolean;
    withCleanupPendingChunks(cleanupPendingChunks: boolean): SourceCollection.Config;

    /**
     * If not set then SourceStatus will be persisted in {@link SourceFile} or in {@link SourceCollection#statsUrl}
     */
    readonly doNotArchiveStatus?: boolean;
    withDoNotArchiveStatus(doNotArchiveStatus: boolean): SourceCollection.Config;

    /**
     * If not set then source content will be persisted in {@link SourceCollection#completedContentUrl}
     * on completion.
     */
    readonly doNotArchiveSources?: boolean;
    withDoNotArchiveSources(doNotArchiveSources: boolean): SourceCollection.Config;

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
    withDoNotArchiveFailedSources(doNotArchiveFailedSources: boolean): SourceCollection.Config;

    /**
     * Indicates the threshold of acceptable number of errors
     */
    readonly numErrorsToAbort?: number | null;
    withNumErrorsToAbort(numErrorsToAbort: number | null): SourceCollection.Config;

    /**
     * Number of times the data load logic retries to write the target type data and stats into database in case of database
     * version conflict in a multi-thread environment
     */
    readonly numRetries?: number | null;
    withNumRetries(numRetries: number | null): SourceCollection.Config;

    /**
     * Mode to set the process for the SourceCollection
     * {@see SourceCollectionProcessMode} for more details.
     */
    readonly processMode: string;
    withProcessMode(processMode: string): SourceCollection.Config;

    /**
     * If #processMode is set to ON_SCHEDULE,
     * @see {@link CronSchedule#expression} for more details.
     * The default is "0 0 0 * * ?", which means it runs every day at midnight.
     */
    readonly processSchedule?: string | null;
    withProcessSchedule(processSchedule: string | null): SourceCollection.Config;

    /**
     * Setting priorities for processing Sources from this source collection.
     * to set lower priorities please consider values from 0-3000
     * to set higher priorities please set values anywhere between 97000-100000
     * Priorities between 3000 and 97000 are preserved and should not be assigned directly.
     */
    readonly priority?: number | null;
    withPriority(priority: number | null): SourceCollection.Config;

    /**
     * User can choose to change the #archiveUrl for the SourceCollection.
     */
    readonly archiveUrlOverride?: string | null;
    withArchiveUrlOverride(archiveUrlOverride: string | null): SourceCollection.Config;

    /**
     * If set to true then #inboxUrl is not managed by C3 and files will not be moved.
     * The user has to manage the inboxUrl in that case to prevent it from growing large in size.
     */
    readonly externalOverride?: boolean | null;
    withExternalOverride(externalOverride: boolean | null): SourceCollection.Config;

    /**
     * Overrides the #inboxUrl
     * If data needs to be loaded from a folder different than the default one, provide the value via this field.
     * e.g. s3://my-custom-bucket/mypath/inbox
     */
    readonly inboxUrlOverride?: string | null;
    withInboxUrlOverride(inboxUrlOverride: string | null): SourceCollection.Config;

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
    withTargetCollectionOverrides(targetCollectionOverrides: C3.Map<string | null, TargetCollection<any> | null> | {[key: string | null]: ITargetCollection<any> | null}): SourceCollection.Config;

    /**
     * Overrides the csvHeader specified in the contentType.
     */
    readonly csvHeaderOverride?: string | null;
    withCsvHeaderOverride(csvHeaderOverride: string | null): SourceCollection.Config;

    /**
     * Overrides the csvDelimiter specified contentType.
     */
    readonly csvDelimiterOverride?: string | null;
    withCsvDelimiterOverride(csvDelimiterOverride: string | null): SourceCollection.Config;

    /**
     * Escape character override for CSV file.
     */
    readonly csvEscapeCharOverride?: string | null;
    withCsvEscapeCharOverride(csvEscapeCharOverride: string | null): SourceCollection.Config;

    /**
     * Quote character override for CSV file.
     */
    readonly csvQuoteCharOverride?: string | null;
    withCsvQuoteCharOverride(csvQuoteCharOverride: string | null): SourceCollection.Config;

    /**
     * If the CSV content does not have a header. By default, its false, which means we expect header to be present.
     * Useful to set as true when we don't know the header but know that it doesn't exist.
     *
     * Only applicable when de-serializing CSV contentType.
     */
    readonly noCsvHeader?: boolean;
    withNoCsvHeader(noCsvHeader: boolean): SourceCollection.Config;

    /**
     * Optional format for a csv values. Key should be field path used in a csv header.
     */
    readonly csvFormat?: C3.Map<string | null, Format | null>;
    withCsvFormat(csvFormat: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null}): SourceCollection.Config;

    /**
     * Overrides avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
     * file based avro data, and from the type in the case of in-memory avro data.
     */
    readonly avroSchemaOverride?: string | null;
    withAvroSchemaOverride(avroSchemaOverride: string | null): SourceCollection.Config;

    /**
     * Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
     * an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
     * written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
     * and "type", the type shared by all Objs in the aforementioned array.
     */
    readonly isObjList?: boolean;
    withIsObjList(isObjList: boolean): SourceCollection.Config;

    /**
     * Optionally fail to serialize extra fields in serialized content instead of ignoring.
     */
    readonly failOnExtraFields?: boolean;
    withFailOnExtraFields(failOnExtraFields: boolean): SourceCollection.Config;

    /**
     * If true will silently ignore bad syntax in the content and will return no or partial results.
     */
    readonly ignoreBadContent?: boolean;
    withIgnoreBadContent(ignoreBadContent: boolean): SourceCollection.Config;

    /**
     * If set will ignore value conversion errors (e.g. non numeric strings will get converted to null for numeric fields)
     */
    readonly ignoreValueConversionErrors?: boolean;
    withIgnoreValueConversionErrors(ignoreValueConversionErrors: boolean): SourceCollection.Config;

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
    withMergeXmlNonAdjacentLists(mergeXmlNonAdjacentLists: boolean): SourceCollection.Config;

    /**
     * The minimum contentLength (in bytes) a Source must be for it to be chunked. The default is 5MB
     * If #doNotChunk is true, this field has no effect and sources will not be chunked.
     */
    readonly minByteSizeToChunk?: number | null;
    withMinByteSizeToChunk(minByteSizeToChunk: number | null): SourceCollection.Config;

    /**
     * if set to true then target objs will include {@link Sources#sourcesMeta}
     */
    readonly includeMeta?: boolean;
    withIncludeMeta(includeMeta: boolean): SourceCollection.Config;

    /**
     * The unique and required name of this instance.
     */
    readonly name: string;
    withName(name: string): SourceCollection.Config;

    readonly configOverride?: string | null;
    withConfigOverride(configOverride: string | null): SourceCollection.Config;

    readonly secretOverride?: string | null;
    withSecretOverride(secretOverride: string | null): SourceCollection.Config;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    readonly issues?: C3.Array<string | null>;
    withIssues(issues: C3.Array<string | null> | Array<string | null>): SourceCollection.Config;

    /**
     * Indicates the chunk size in terms of number of records that needs to be used for chunking the content
     * and publishing to queue
     */
    readonly chunkSize?: number | null;
    withChunkSize(chunkSize: number | null): SourceCollection.Config;

    /**
     * Indicates the chunk size in MB that needs to be used for chunking the content
     * and publishing to queue
     */
    readonly chunkSizeInMb?: number | null;
    withChunkSizeInMb(chunkSizeInMb: number | null): SourceCollection.Config;

    /**
     * The prefix of the file name which has data for the canonical
     */
    readonly filePrefix?: string | null;
    withFilePrefix(filePrefix: string | null): SourceCollection.Config;

    /**
     * If true, incoming sources are persisted in intermediate data storage before processing
     */
    readonly stage?: boolean;
    withStage(stage: boolean): SourceCollection.Config;

    /**
     * The mode of staging intermediate files. By default, this is stored as files, but it could also be persisted
     * in {@link KvStore}.
     */
    readonly stagingMode?: string | null;
    withStagingMode(stagingMode: string | null): SourceCollection.Config;

    /**
     * The name of the {@link FileSourceCollection} used to manage staged files, if stagingMode is FILE
     */
    readonly stageFileSourceCollectionName?: string | null;
    withStageFileSourceCollectionName(stageFileSourceCollectionName: string | null): SourceCollection.Config;

    /**
     * Returns the file name format
     * @return SourceFileNameFormat with the format
     */
    readonly sourceFileNameFormat?: string | null;
    withSourceFileNameFormat(sourceFileNameFormat: string | null): SourceCollection.Config;

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
    static fromJson(json: any | null): SourceCollection.Config | null;

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
    static fromJsonString(json: string | null): SourceCollection.Config | null;

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
    static fromXmlString(xml: string | null): SourceCollection.Config | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): SourceCollection.Config | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): SourceCollection.Config;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SourceCollection.Config;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SourceCollection.Config;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SourceCollection.Config | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SourceCollection.Config | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SourceCollection.Config;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SourceCollection.Config;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SourceCollection.Config;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): SourceCollection.Config;

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
    withField(field: string, value: any, doNotConvert?: boolean): SourceCollection.Config;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): SourceCollection.Config;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SourceCollection.Config;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SourceCollection.Config;

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
    withoutFieldAtPath(path: string): SourceCollection.Config;

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
    withoutField(field: string | null): SourceCollection.Config;

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
    withoutField(field: FieldType | null): SourceCollection.Config;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): SourceCollection.Config;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SourceCollection.Config;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): SourceCollection.Config;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SourceCollection.Config;

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
    defaultField(field: string): SourceCollection.Config;

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
    defaultField(field: FieldType): SourceCollection.Config;

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
    unsetField(field: string): SourceCollection.Config;

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
    unsetField(field: FieldType): SourceCollection.Config;

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
    removeField(field: string): SourceCollection.Config;

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
    removeField(field: FieldType): SourceCollection.Config;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SourceCollection.Config;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): SourceCollection.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SourceCollection.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SourceCollection.Config;

    mergeJson(json: any | null): SourceCollection.Config;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SourceCollection.Config;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): SourceCollection.Config;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<SourceCollection.Config | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<SourceCollection.Config | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<SourceCollection.Config | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<SourceCollection.Config | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<SourceCollection.Config | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, SourceCollection.Config | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, SourceCollection.Config | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<SourceCollection.Config | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<SourceCollection.Config | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SourceCollection.Config;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SourceCollection.Config;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SourceCollection.Config;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): SourceCollection.Config;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SourceCollection.Config;

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
    static make(fields: any, withDefaults?: boolean): SourceCollection.Config;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): SourceCollection.Config | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SourceCollection.Config;

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
    afterMake(): SourceCollection.Config;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): SourceCollection.Config;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SourceCollection.Config>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): SourceCollection.Config;

    /**
     * @return new instance of this spec with `retrySpec` set
     */
    withRetry(maxRetries?: number | null, initialSleepMillis?: number | null, exponent?: number | null): SourceCollection.Config | null;

    /**
     * @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
     */
    static timeoutSeconds(secs: number | null): SourceCollection.Config;

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
    static fromString(s: string | null): SourceCollection.Config | null;

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
    static forName(name: string | null, failIfMissing?: boolean): SourceCollection.Config | null;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return stream of all available Cached instances.
     */
    static allCached(doNotProduceAll?: boolean): Stream<SourceCollection.Config | null>;

    /**
     * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static find(filter?: string | null, doNotProduceAll?: boolean): Stream<SourceCollection.Config | null>;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<SourceCollection.Config | null>;

    /**
     * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
     *
     * @see forCacheKey
     * @see getCached
     */
    static findByCacheKey(key: string): SourceCollection.Config | null;

    /**
     * Returns cached instance by key, with secrets removed.
     */
    static forCacheKey(key: string | null): SourceCollection.Config | null;

    /**
     * @return cached instance.
     *
     * @see forCacheKey
     * @see findByCacheKey
     */
    getCached(): SourceCollection.Config | null;

    /**
     * @return newly produced cached instance.
     */
    refreshCache(): SourceCollection.Config | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): SourceCollection.Config | null;

    /**
     * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
     */
    static produceAll(): C3.Map<string | null, SourceCollection.Config | null>;

    /**
     * Override for sub-types to produce all values.
     */
    static doProduceAll(): C3.Map<string | null, SourceCollection.Config | null>;

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
    getConfig(): SourceCollection.Config;

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
    getSecret(): SourceCollection.Config;

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
    static forConfigKey(configKey: string | null): SourceCollection.Config | null;

    /**
     * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
     */
    static listConfigKeys(): Stream<string | null>;

    /**
     * @param
     *
     * @return stream of all available Config instances for this type.
     */
    static listConfigs(parallel?: boolean, filter?: λPredicate<string> | null): Stream<SourceCollection.Config | null>;

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
    setConfigValues(from: SourceCollection.Config, override?: string | null): void;

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
    setSecretValues(from: SourceCollection.Config, override?: string | null): void;

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
    static loadConfigAndSecret(configKey: string): SourceCollection.Config | null;

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
    removeSecrets(): SourceCollection.Config | null;

    /**
     * @return this config with only secret values.
     */
    removeNonSecrets(): SourceCollection.Config | null;

    /**
     * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
     * validation and setup.
     */
    validate(): SourceCollection.Config;

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
  }
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
