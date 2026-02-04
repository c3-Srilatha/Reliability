// TypeScript definitions for the C3 type Feature.Chunk.DfBldr.Block

/**
 * Type to encapsulate the query to fetch data from the {@link Feature.Store.Block}
 *
 * @remarks this represents a value passed to a method that expects an instance of Feature.Chunk.DfBldr.Block
 */
declare namespace Feature.Chunk.DfBldr {
  export interface IBlock {

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
     * Field to maintain state whether content metadata was read or not.
     */
    hasMetadata?: boolean;

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    id: string;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    versionEdits?: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>;

    /**
     * Name of the Obj instance
     */
    name?: string | null;

    /**
     * Various system fields.
     */
    meta?: IMeta | null;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    version?: number | null;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    typeWithBindings?: IType | null;

    /**
     * @return a filter string for fetching **Feature.Store.Blocks** which are marked to be deleted.
     */
    DELETE_FILTER?: string | null;

    /**
     * bin (containing the subjects) which the current block have data for.
     * PLEASE NOTE that all subjects in the current block MUST belong to the same bin and the bin association for a
     * subject MUST NOT CHANGE. Any change in association will need new bins to be created and the data to be re-materialized.
     *
     * @see FeatureEvaluatable.Bin.Strategy#bin
     * @see FeatureEvaluatable.Bin.Strategy#bins
     */
    bin: number;

    /**
     * id of the {@link FeatureEvaluatable.Bin.Strategy} associated with the current block. This will determine the possible values of {@link #bin}.
     */
    strategyId: string;

    /**
     * Foreign key reference to the strategy instance associated to the current instance.
     */
    strategy?: IFeatureEvaluatable.Bin.Strategy | null;

    /**
     * Fingerprint of either the Feature or Feature.Set which was used to create the data for the Storage block.
     */
    featureFingerprint: string;

    /**
     * start of the interval for which the data is computed.
     * Please note that this will be empty for non-timeseries data and must always be set for Timeseries data.
     */
    start?: DateTime | Date | string | null;

    /**
     * end of the interval for which the data is computed.
     * Please note that this will be empty for non-timeseries data and must always be set for Timeseries data.
     */
    end?: DateTime | Date | string | null;

    /**
     * Contains the number of "rows" present in this tile. It will be used to optimize the "evaluation"
     * of {@link Feature.Set} or {@link Feature}
     */
    rowCount: number;

    /**
     * In-memory size of the block as data may be stored compressed in the underlying store.
     */
    inMemorySize: number;

    /**
     * Binary serialized subjectId hashes array of all subjectIds present into the block. It will be used during **evalFeature*** to further filter out the blocks which doesn't need to be read. This will improve both CPU and Memory profile of the **eval** call.
     */
    subjectIdHashesBinary: any;

    /**
     * Binary serialized array of rowCount for all subjectIds present into the block. It will be used during pagination (and other features) to efficiently deliver the results.
     */
    subjectRowCountBinary: any;

    /**
     * If set to any value, either **true** or **false**, a block is "marked to be deleted". No data will be read from blocks effective immediately and will be cleaned up **eventually** by the platform.
     */
    toDelete?: boolean;

    /**
     * subjectIds to be extracted from the block
     */
    querySubjectIds: C3.Set<string | null> | Array<string | null>;

    /**
     * timeRange to query from the block
     */
    queryTimeRange?: ITimeRange | null;

    /**
     * TimeRanges to keep for each subject.
     */
    sliceMap?: C3.Map<string | null, C3.Array<TimeRange>> | {[key: string | null]: C3.Array<TimeRange> | Array<ITimeRange>} | null;
  }
}

/**
 * Type to encapsulate the query to fetch data from the {@link Feature.Store.Block}
 *
 * @remarks this represents a made instance of Feature.Chunk.DfBldr.Block
 */
declare namespace Feature.Chunk.DfBldr {
  export class Block extends Obj {

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
    withContentEncoding(contentEncoding: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Describes the natural language(s) of the intended audience.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
     */
    readonly contentLanguage?: string | null;
    withContentLanguage(contentLanguage: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * The size of the entity-body, in bytes.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
     */
    readonly contentLength?: number | null;
    withContentLength(contentLength: number | null): Feature.Chunk.DfBldr.Block;

    /**
     * The resource location for the entity enclosed in the message when that entity is accessible from a location
     * separate from the requested resource's URI.
     *
     * It is recommended to use #safeUrl instead.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
     */
    readonly contentLocation?: string | null;
    withContentLocation(contentLocation: string | null): Feature.Chunk.DfBldr.Block;

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
    withContentType(contentType: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
     * attachment locally.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
     */
    readonly contentDisposition?: string | null;
    withContentDisposition(contentDisposition: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * The ETag response-header field provides the current value of the entity tag for the requested variant.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
     */
    readonly eTag?: string | null;
    withETag(eTag: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * The date and time at which the variant was last modified.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
     */
    readonly lastModified?: DateTime | null;
    withLastModified(lastModified: DateTime | Date | string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Id of user / identity who last last modified this content.
     */
    readonly lastModifiedBy?: string | null;
    withLastModifiedBy(lastModifiedBy: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
     * as well as supporting content-based caching (ETag).
     */
    readonly contentMD5?: string | null;
    withContentMD5(contentMD5: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
     * as well as supporting content-based caching (ETag).
     */
    readonly contentSHA1?: string | null;
    withContentSHA1(contentSHA1: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Field to maintain state whether content metadata was read or not.
     */
    readonly hasMetadata?: boolean;
    withHasMetadata(hasMetadata: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    readonly id: string;
    withId(id: string): Feature.Chunk.DfBldr.Block;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: C3.Array<VersionEdit | null>;
    withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Feature.Chunk.DfBldr.Block;

    /**
     * Name of the Obj instance
     */
    readonly name?: string | null;
    withName(name: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Various system fields.
     */
    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): Feature.Chunk.DfBldr.Block;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number | null;
    withVersion(version: number | null): Feature.Chunk.DfBldr.Block;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type | null;
    withTypeWithBindings(typeWithBindings: IType | null): Feature.Chunk.DfBldr.Block;

    /**
     * @return a filter string for fetching **Feature.Store.Blocks** which are marked to be deleted.
     */
    readonly DELETE_FILTER?: string | null;
    withDELETE_FILTER(DELETE_FILTER: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * bin (containing the subjects) which the current block have data for.
     * PLEASE NOTE that all subjects in the current block MUST belong to the same bin and the bin association for a
     * subject MUST NOT CHANGE. Any change in association will need new bins to be created and the data to be re-materialized.
     *
     * @see FeatureEvaluatable.Bin.Strategy#bin
     * @see FeatureEvaluatable.Bin.Strategy#bins
     */
    readonly bin: number;
    withBin(bin: number): Feature.Chunk.DfBldr.Block;

    /**
     * id of the {@link FeatureEvaluatable.Bin.Strategy} associated with the current block. This will determine the possible values of {@link #bin}.
     */
    readonly strategyId: string;
    withStrategyId(strategyId: string): Feature.Chunk.DfBldr.Block;

    /**
     * Foreign key reference to the strategy instance associated to the current instance.
     */
    readonly strategy?: FeatureEvaluatable.Bin.Strategy | null;
    withStrategy(strategy: IFeatureEvaluatable.Bin.Strategy | null): Feature.Chunk.DfBldr.Block;

    /**
     * Fingerprint of either the Feature or Feature.Set which was used to create the data for the Storage block.
     */
    readonly featureFingerprint: string;
    withFeatureFingerprint(featureFingerprint: string): Feature.Chunk.DfBldr.Block;

    /**
     * start of the interval for which the data is computed.
     * Please note that this will be empty for non-timeseries data and must always be set for Timeseries data.
     */
    readonly start?: DateTime | null;
    withStart(start: DateTime | Date | string | null): Feature.Chunk.DfBldr.Block;

    /**
     * end of the interval for which the data is computed.
     * Please note that this will be empty for non-timeseries data and must always be set for Timeseries data.
     */
    readonly end?: DateTime | null;
    withEnd(end: DateTime | Date | string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Contains the number of "rows" present in this tile. It will be used to optimize the "evaluation"
     * of {@link Feature.Set} or {@link Feature}
     */
    readonly rowCount: number;
    withRowCount(rowCount: number): Feature.Chunk.DfBldr.Block;

    /**
     * In-memory size of the block as data may be stored compressed in the underlying store.
     */
    readonly inMemorySize: number;
    withInMemorySize(inMemorySize: number): Feature.Chunk.DfBldr.Block;

    /**
     * Binary serialized subjectId hashes array of all subjectIds present into the block. It will be used during **evalFeature*** to further filter out the blocks which doesn't need to be read. This will improve both CPU and Memory profile of the **eval** call.
     */
    readonly subjectIdHashesBinary: any;
    withSubjectIdHashesBinary(subjectIdHashesBinary: any): Feature.Chunk.DfBldr.Block;

    /**
     * Binary serialized array of rowCount for all subjectIds present into the block. It will be used during pagination (and other features) to efficiently deliver the results.
     */
    readonly subjectRowCountBinary: any;
    withSubjectRowCountBinary(subjectRowCountBinary: any): Feature.Chunk.DfBldr.Block;

    /**
     * If set to any value, either **true** or **false**, a block is "marked to be deleted". No data will be read from blocks effective immediately and will be cleaned up **eventually** by the platform.
     */
    readonly toDelete?: boolean;
    withToDelete(toDelete: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * subjectIds to be extracted from the block
     */
    readonly querySubjectIds: C3.Set<string | null>;
    withQuerySubjectIds(querySubjectIds: C3.Set<string | null> | Array<string | null>): Feature.Chunk.DfBldr.Block;

    /**
     * timeRange to query from the block
     */
    readonly queryTimeRange?: TimeRange | null;
    withQueryTimeRange(queryTimeRange: ITimeRange | null): Feature.Chunk.DfBldr.Block;

    /**
     * TimeRanges to keep for each subject.
     */
    readonly sliceMap?: C3.Map<string | null, C3.Array<TimeRange>> | null;
    withSliceMap(sliceMap: C3.Map<string | null, C3.Array<TimeRange>> | {[key: string | null]: C3.Array<TimeRange> | Array<ITimeRange>} | null): Feature.Chunk.DfBldr.Block;

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
    static fromJson(json: any | null): Feature.Chunk.DfBldr.Block | null;

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
    static fromJsonString(json: string | null): Feature.Chunk.DfBldr.Block | null;

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
    static fromXmlString(xml: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Feature.Chunk.DfBldr.Block | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Feature.Chunk.DfBldr.Block;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Block;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Chunk.DfBldr.Block | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Chunk.DfBldr.Block | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Chunk.DfBldr.Block;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Chunk.DfBldr.Block;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Feature.Chunk.DfBldr.Block;

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
    withField(field: string, value: any, doNotConvert?: boolean): Feature.Chunk.DfBldr.Block;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Chunk.DfBldr.Block;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Chunk.DfBldr.Block;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Chunk.DfBldr.Block;

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
    withoutFieldAtPath(path: string): Feature.Chunk.DfBldr.Block;

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
    withoutField(field: string | null): Feature.Chunk.DfBldr.Block;

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
    withoutField(field: FieldType | null): Feature.Chunk.DfBldr.Block;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Feature.Chunk.DfBldr.Block;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Chunk.DfBldr.Block;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Feature.Chunk.DfBldr.Block;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Chunk.DfBldr.Block;

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
    defaultField(field: string): Feature.Chunk.DfBldr.Block;

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
    defaultField(field: FieldType): Feature.Chunk.DfBldr.Block;

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
    unsetField(field: string): Feature.Chunk.DfBldr.Block;

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
    unsetField(field: FieldType): Feature.Chunk.DfBldr.Block;

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
    removeField(field: string): Feature.Chunk.DfBldr.Block;

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
    removeField(field: FieldType): Feature.Chunk.DfBldr.Block;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Chunk.DfBldr.Block;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Chunk.DfBldr.Block;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Chunk.DfBldr.Block;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Chunk.DfBldr.Block;

    mergeJson(json: any | null): Feature.Chunk.DfBldr.Block;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Chunk.DfBldr.Block;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Feature.Chunk.DfBldr.Block | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Feature.Chunk.DfBldr.Block;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Feature.Chunk.DfBldr.Block;

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
    static make(fields: any, withDefaults?: boolean): Feature.Chunk.DfBldr.Block;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Feature.Chunk.DfBldr.Block;

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
    afterMake(): Feature.Chunk.DfBldr.Block;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Feature.Chunk.DfBldr.Block;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Feature.Chunk.DfBldr.Block>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Feature.Chunk.DfBldr.Block;

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
    withFileName(fileName: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Changes file extension in this instance.
     */
    withFileExt(fileExt: string | null): Feature.Chunk.DfBldr.Block;

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
    identify(suffix?: string | null): Feature.Chunk.DfBldr.Block;

    /**
     * Render content as HTML if possible.
     */
    renderer(): HtmlRenderer | null;

    /**
     * @return true if this content can't be modified.
     */
    isReadOnly(): boolean;

    /**
     * @return true if this content can't be read.
     */
    isWriteOnly(): boolean;

    /**
     * @return true if this content is empty; i.e. contentLength <= 0.
     */
    isEmpty(spec?: FileOperationSpec | null): boolean;

    /**
     * Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
     * or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
     * content location. Also sets hasMetadata flag so that consecutive calls are fast.
     *
     * If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @return abstract content with metadata.
     */
    readMetadata(spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
     * hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
     * needs to be refreshed.
     */
    refreshMetadata(spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
     * encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
     * extra IO.
     *
     * Also sets {@link Content#hasMetadata} to true.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @return abstract content with metadata.
     */
    guessMetadata(spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Clears the content metadata; e.g. if it's known to be invalid.
     */
    clearMetadata(): Feature.Chunk.DfBldr.Block;

    /**
     * @return clone of this content with metadata from provided input.
     */
    withMetadata(meta?: ContentMeta | null): Feature.Chunk.DfBldr.Block;

    /**
     * Supported fields from {@link ContentMeta} for thus content kind; e.g. contentLength, lastModified, etc
     */
    static metadataFields(): C3.Array<string | null>;

    /**
     * @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
     * contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
     * higher level apis instead.
     */
    encodedPushStream(spec?: FileOperationSpec | null): Pair<Feature.Chunk.DfBldr.Block | null, BytePushStream | null>;

    /**
     * @return byte push stream to be used for writing un-encoded data into this content object.
     */
    pushStream(spec?: FileOperationSpec | null): Pair<Feature.Chunk.DfBldr.Block | null, BytePushStream | null>;

    /**
     * @return character push stream to be used for writing un-encoded data into this content object.
     */
    charPushStream(spec?: FileOperationSpec | null): Pair<Feature.Chunk.DfBldr.Block | null, CharPushStream | null>;

    /**
     * Reads the raw (possibly compressed) content as byte stream. E.g. if contentEncoding is set then data is going
     * to be encoded (compressed). It is highly recommended to use higher level apis instead.
     *
     * @return the content as byte stream.
     */
    encodedStream(spec?: FileOperationSpec | null): Pair<Feature.Chunk.DfBldr.Block | null, ByteStream | null> | null;

    /**
     * Reads the de-coded (uncompressed) content as byte stream.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @return the content as byte stream.
     */
    stream(spec?: FileOperationSpec | null): ByteStream | null;

    /**
     * Reads the de-coded (uncompressed) content as character stream.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @return the content as character stream.
     */
    charStream(spec?: FileOperationSpec | null): CharStream | null;

    /**
     * Reads the content. IMPORTANT to avoid using read with increasing offset to read content in blocks. It is strongly
     * recommended to use stream based methods in such cases.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @param offset
     *           offset in bytes; defaults to 0.
     * @param len
     *           number of bytes to read; defaults to entire file size.
     * @return the content.
     */
    read(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): any | null;

    /**
     * Reads the encoded content.
     *
     * @return the encoded content.
     */
    readEncoded(spec?: FileOperationSpec | null): any | null;

    /**
     * Reads the content as ContentValue.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @param offset
     *           offset in bytes defaults to 0
     * @param len
     *           number of bytes to read; defaults to entire file size.
     * @return the content.
     */
    readContentValue(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): ContentValue;

    /**
     * Reads the content as string. IMPORTANT to avoid using readString with increasing offset to read full content in
     * blocks. It is strongly recommended to use stream based methods in such cases.
     *
     * @see FileOperationSpec.peekForMetadata
     *
     * @param offset
     *           offset in bytes defaults to 0
     * @param len
     *           maximum length of the string; defaults to entire file size.
     * @return the content.
     */
    readString(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): string | null;

    /**
     * Deserializes content from file into a single C3 Type instance. Throws exception if file contains more then one
     * instance.
     *
     * @see FileObjsOperSpec.targetType
     *
     * @return single object or null if file is empty
     */
    readObj(spec?: FileObjsOperSpec | null): Obj | null;

    /**
     * Deserializes content from file into a list of C3 Type instances.
     *
     * @see FileObjsOperSpec.targetType
     *
     * @return stream of objects
     */
    readObjs(spec?: FileObjsOperSpec | null): Stream<Obj | null>;

    /**
     * Deserializes content from file into a json objects.
     *
     * @return a json object
     */
    readJson(spec?: FileObjsOperSpec | null): any | null;

    /**
     * Deserializes content from file into a list of json objects.
     *
     * @return stream of json objects
     */
    readJsonLines(spec?: FileObjsOperSpec | null): Stream<any | null>;

    /**
     * Reads CSV file header if content contains it or retrieves header from file metadata or spec#csvHeader.
     *
     * @return CSV header
     */
    readCsvHeader(spec?: FileObjsOperSpec | null): C3.Array<string | null>;

    /**
     * Deserializes content from CSV content into a stream of row i.e. column values. Note that first element in the
     * stream will be CSV header read either from content or from it's metadata or from spec#csvHeader.
     *
     * @return stream of parsed CSV rows
     */
    readCsvRows(spec?: FileObjsOperSpec | null): Stream<C3.Array<string | null>>;

    /**
     * @return the first line of the text content.
     */
    readFirstLine(): string | null;

    /**
     * @returns text content lines.
     */
    readLines(): Stream<string | null>;

    /**
     * Match regex patterns against content lines.
     *
     * @param patterns Array of compiled regex patterns to match
     * @param spec Controls matching behavior (mode, limits, etc)
     * @return Match results
     */
    grep(patterns: C3.Array<RegexPattern | null>, spec?: Content.GrepSpec | null): Content.GrepResult;

    /**
     * Match a single regex pattern against content lines.
     * Returns the first match found with captured groups.
     *
     * @param pattern Regex pattern string to match
     * @return First match result (or no-match result with score=0 if not found)
     */
    grep(pattern: string): StringPatternMatch;

    /**
     * Match a single regex pattern against content lines.
     * Returns the first match found with captured groups.
     *
     * @param pattern Compiled regex pattern to match
     * @return First match result (or no-match result with score=0 if not found)
     */
    grep(pattern: RegexPattern): StringPatternMatch;

    /**
     * Truncates file and replaces it's content with provided binary content.
     *
     * @param content
     *           content that needs to be written
     */
    writeStream(content: ByteStream | null, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Writes data from "subject" stream, i.e each entry will have all Data.Column(s) of a subject, into the Storage
     * block and return an instance with updated "meta" field like
     * **rowSize** and **inMemorySize**. Please note that its on the caller to {@link Persistable#create} this instance
     * into the DB. This is useful when we want to stream the computed result directly into the storage block.
     */
    writeStream(subjectStream: Stream<Pair<string | null, C3.Array<Data.Column | null>> | null> | null): Feature.Store.Block;

    /**
     * Truncates file and replaces it's content with provided binary content.
     */
    writeInputStream(inputStream: any, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces its content with provided binary content from zipInputStream
     */
    writeZipInputStream(zipInputStream: any, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces it's encoded content with provided binary content.
     *
     * @param content
     *           encoded content that needs to be written
     */
    writeEncodedStream(encodedContent: ByteStream | null, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces it's encoded content with provided binary content.
     */
    writeEncodedInputStream(inputStream: any, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces it's content with provided binary content.
     *
     * @param content
     *           content that needs to be written
     */
    write(content: any | null, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces it's encoded content with provided binary content.
     *
     * @param content
     *           encoded content that needs to be written
     */
    writeEncoded(encodedContent: any | null, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Truncates file and replaces it's content with provided string.
     *
     * @param content
     *           content that needs to be written
     */
    writeString(content: string | null, spec?: FileOperationSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Serializes content from a single c3 objects into a file.
     *
     * @param obj
     *          obj that needs to be written
     * @param spec
     *          file operation spec giving more information about how obj should be written
     */
    writeObj(obj: Obj | null, spec?: FileObjsOperSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Serializes content from a list of c3 objects into a file.
     *
     * @param objs
     *          objs that need to be written
     * @param spec
     *          file operation spec giving more information about how objs should be written
     * @return pair of update instance of this content and number of objs written
     */
    writeObjs(objs: Stream<Obj | null> | null, spec?: FileObjsOperSpec | null): Pair<Content | null, number | null>;

    /**
     * Serializes content from a list of c3 objects into a file.
     *
     * @param objs
     *          objs that need to be written
     * @param spec
     *          file operation spec giving more information about how objs should be written
     * @return pair of update instance of this content and number of objs written
     */
    startWriteObjs(spec?: FileObjsOperSpec | null): Pair<Feature.Chunk.DfBldr.Block | null, PushStream<Obj | null> | null>;

    /**
     * Serialization target type if this content is instance(s) of C3 type.
     *
     * @see FileObjsOperSpec.targetType
     */
    serType(spec?: FileObjsOperSpec | null): Type | null;

    /**
     * If this content target type is Source type then transform content into corresponding C3 Type instances.
     * Source Type is determined from content itself (via #serType).
     */
    transformSource(transformSpec?: SourceTransformSpec | null, spec?: FileObjsOperSpec | null): SourceTransformResult | null;

    /**
     * Checks if content type and encoding is matching the given values.
     */
    contentTypeAndEncodingMatch(contentType?: string | null, contentEncoding?: string | null, spec?: FileOperationSpec | null): boolean;

    /**
     * Compresses the given content.
     *
     * @param contentEncoding
     *            compression content encoding; default is gzip.
     */
    compress(contentEncoding?: string | null, spec?: FileCompressSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Uncompresses content.
     */
    uncompress(spec?: FileCompressSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
     *
     * @param contentType
     *            new content type.
     * @param contentEncoding
     *            new content encoding.
     */
    transcode(contentType: string, contentEncoding: string, spec?: FileCompressSpec | null): Feature.Chunk.DfBldr.Block;

    /**
     * Copies content to a given target.
     */
    copyContentTo(target: Feature.Chunk.DfBldr.Block, spec?: FileOperationSpec | null): void;

    /**
     * Copies content to a given target.
     */
    copyContentToStream(target: BytePushStream, doNotCloseTarget?: boolean, spec?: FileOperationSpec | null): void;

    /**
     * Computes the cksum of the file (same as unix utility cksum)
     * @param userEncodedContent
     *           If true, the cksum will skill the decoding of the file
     * @return the checksum of the file
     */
    cksum(useEncodedContent?: boolean, spec?: FileOperationSpec | null): number;

    /**
     * @return md5 from metadata if it exists otherwise compute from content and return.
     */
    safeMd5(spec?: FileOperationSpec | null): string;

    /**
     * @return result of OS `grep` utility over this content.
     */
    osGrep(pattern: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `sed` utility over this content.
     */
    osSed(script: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `awk` utility over this content.
     */
    osAwk(program: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `sort` utility over this content.
     */
    osSort(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `tsort` utility over this content.
     */
    osTSort(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `uniq` utility over this content.
     */
    osUniq(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `expand` utility over this content.
     */
    osExpand(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `unexpand` utility over this content.
     */
    osUnexpand(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `head` utility over this content.
     */
    osHead(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `tail` utility over this content.
     */
    osTail(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `wc` utility over this content.
     */
    osWc(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS `fold` utility over this content.
     */
    osFold(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

    /**
     * @return result of OS command pipeline over this content.
     */
    osCommands(commands: C3.Array<string | null> | null, spec?: FileOperationSpec | null): ByteStream;

    /**
     * Reads this content as ContentValue.
     */
    toContentValue(spec?: FileOperationSpec | null): ContentValue;

    /**
     * @return content that is always empty even if data is written to it.
     */
    static nullContent(): Content;

    /**
     * Encodes given string into a binary based on contentType and contentEncoding.
     */
    static encode(content: string, contentType?: string | null, contentEncoding?: string | null): any;

    /**
     * Decodes given binary into a string based on contentType and contentEncoding.
     */
    static decode(content: any, contentType?: string | null, contentEncoding?: string | null): string;

    /**
     * Applied lambda action to filter content and return stream of lines
     */
    filterContentLines(action?: λFunction<string | null, string | null> | null): CharStream | null;

    /**
     * Infer serialization type from this content.
     */
    inferType(spec?: InferTypeSpec | null): InferValueTypeResult;

    /**
     * returns Avro and parquet in stringified json.
     */
    avroParquetSchema(failIfMissing?: boolean): string | null;

    /**
     * Creates a new Content by merging the two contents
     */
    concat(other: Content | null): Feature.Chunk.DfBldr.Block;

    /**
     * Creates a new Content by merging the incoming binary data with current content
     */
    concat(other: any | null): Feature.Chunk.DfBldr.Block;

    hyperLogLogForCsv(): C3.Map<number | null, HyperLogLog | null>;

    /**
     * Creates the read once content from provided C3 stream
     */
    static fromStream(stream: Stream<any> | null, contentType?: string | null, contentEncoding?: string | null): Content;

    /**
     * Creates the read once content from provided C3 byte-stream
     */
    static fromByteStream(encodedStream: ByteStream | null, contentType?: string | null, contentEncoding?: string | null): Content;

    /**
     * Creates the read once content from provided C3 byte-stream
     */
    static fromCharStream(charStream: CharStream | null, contentType?: string | null, contentEncoding?: string | null): Content;

    /**
     * Creates the content value from a binary value.
     */
    static fromBinary(encodedBinary: any, contentType?: string | null, contentEncoding?: string | null): Content;

    /**
     * Creates the content value from a string value.
     */
    static fromText(text: string | null, contentType?: string | null, contentEncoding?: string | null): Content;

    /**
     * Creates the content from lambda
     */
    static fromLambda(contentProducer?: λSupplier<any | null> | null): Content | null;

    /**
     * Creates write once content from a Java OutputStream.
     */
    static fromJavaOutputStream(outputStream?: any): Content;

    /**
     * Creates the content value from a Java resource.
     */
    static fromJavaResource(javaResourcePath: string | null, failIfMissing?: boolean): Content;

    /**
     * Creates a list of content values from files.
     */
    static readLocalFiles(url: string): C3.Array<Content | null>;

    /**
     * Retry logic for failed content operations
     *
     * @param supplier
     *          The supplier to retry when an exception is thrown
     * @param desc
     *          The description of the function being retried
     * @param spec
     *          The file operation spec with retryable parameters
     */
    callWithRetry(supplier: λSupplier<T | null>, desc: string, spec?: FileOperationSpec | null): T | null;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec | null): FetchResult<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec | null): Stream<Feature.Chunk.DfBldr.Block | null>;

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
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<Feature.Chunk.DfBldr.Block | null> | null>;

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
     * Used internally to fetch as a stream (e.g. FetchResultOvi)
     */
    static fetchOvi(spec?: FetchSpec | null): any;

    /**
     * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    get(include?: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
     * to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.  Note that the include spec should reference only fields that are
     *           valid in the returned obj's type.  Otherwise an error may be thrown.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getSpecific(include?: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Function to check if an obj was already fetched with an include that contains at least the fields of a specified
     * include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
     * if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
     * specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
     * the behavior.
     *
     * @param spec
     *           Spec that controls various aspects of the function's behavior.
     * @return instance of the obj with all requested fields.
     */
    getMissing(spec: GetMissingSpec): Feature.Chunk.DfBldr.Block;

    /**
     * Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
     * that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getDirect(include?: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): Feature.Chunk.DfBldr.Block;

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
    static fromString(s: string | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
     *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static createBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
     *          `spec.includeObjsInResults`.
     */
    static createBatchObjStream(objs: Stream<Feature.Chunk.DfBldr.Block | null> | null, spec?: CreateBatchObjStreamSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance does not already exist.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
     *         obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    update(srcObj?: Feature.Chunk.DfBldr.Block | null, spec?: UpsertSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
     * exception will be thrown.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
     *        doesn't already exist.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
     *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    upsert(srcObj?: Feature.Chunk.DfBldr.Block | null, spec?: UpsertSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
     * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
     * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
     * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
     * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
     *
     * For collections, the merge operation is applied to every element in the source and updated collection rather than
     * merging the collections themselves.  This means that every element will be merged with the element with the same
     * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
     * add/append elements to a collection.
     *
     * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
     *
     * If the operation fails an exception will be thrown.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     *
     * @see Mergespec#csvInclude
     */
    merge(spec?: MergeSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     */
    merge(mergeInclude: string, spec?: MergeSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec | null): Feature.Chunk.DfBldr.Block | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
     *
     * @param objs
     *        Updated objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
     *        replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, srcObjs?: C3.Array<Feature.Chunk.DfBldr.Block | null>, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
     * called again to provide updated instances to be updated. If the operation fails for other reasons and
     * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateObjs(objs: λSupplier<C3.Array<Feature.Chunk.DfBldr.Block | null>>, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Updated or new objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
     *        existing one if it doesn't already exist.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, srcObjs?: C3.Array<Feature.Chunk.DfBldr.Block | null>, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
     * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
     * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
     * {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertObjs(objs: λSupplier<C3.Array<Feature.Chunk.DfBldr.Block | null>>, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
     * objs will be considered an error.
     *
     * @param objs
     *        Objs to touch.
     *
     * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
     *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static touchBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, spec?: TouchSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#mergeInclude
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, spec?: MergeSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, mergeInclude: string, spec?: MergeSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
     * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
     * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
     * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
     * operation is described in the {@link merge} function.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     *
     * @param objs
     *        Lambda providing objs to be merged
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeObjs(objs: λSupplier<C3.Array<Feature.Chunk.DfBldr.Block | null>>, mergeInclude: string, spec?: MergeSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
     * functions, the set of fields to be merged can be controlled by specifying an include spec in either
     * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
     * can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
     * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Feature.Chunk.DfBldr.Block | null, spec?: MergeAllSpec | null): number | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
     * controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
     * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Feature.Chunk.DfBldr.Block | null, mergeInclude: string, spec?: MergeAllSpec | null): number | null;

    /**
     * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
     *
     * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param spec
     *         Various parameters that control the operation of function.
     * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
     *
     * @see Ann.Db#archive
     */
    remove(spec?: UpsertSpec | null): boolean;

    /**
     * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
     * reported in the returned {@link ObjList}.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param objs
     *         Objs to remove.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
     *
     * @see Ann.Db#archive
     */
    static removeBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Removes multiple instances of a C3 type based.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * For kv types, data that is currently being compacted will not be removed and thus will not guarantee
     * that all data will be removed. If you need a strong guarantee, use {@link clearCollection} instead.
     *
     * @param spec
     *         Spec controlling the operation
     * @param confirm
     *         Must be specified as true.  Otherwise request will be rejected.
     * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
     *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
     *         connection can't return the value).  In those cases, this will return -1.
     */
    static removeAll(spec?: RemoveAllSpec | null, confirm: boolean): number;

    /**
     * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
     *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static replace(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Chunk.DfBldr.Block | null> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): Feature.Chunk.DfBldr.Block | null;

    /**
     * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
     * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
     * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
     * generate the id based on other field values present in the input.  Note that if an instance already exists with the
     * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
     * existing instances for performing updates.
     */
    generateUniqueId(): string;

    /**
     * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be created.  The objs will be the entire input objs being created.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeCreate(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): ObjList<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be updated.  By default the objs will be the complete original source
     *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
     *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
     *           will have at least those requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeUpdate(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): ObjList<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be removed.  By default the objs will be the complete original source
     *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
     *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
     *           requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeRemove(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): ObjList<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Callback that is called synchronously during a request that creates objs after those objs are created.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were created.  The objs will already have been created.  By default, only the id
     *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterCreate(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterUpdate(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
     * @return List of any errors that were encountered.
     */
    static afterRemove(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): C3.Array<ObjError | null>;

    /**
     * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
     * valid for C3 types that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param clearNullValues
     *           If true then map keys with null values will be cleared.
     * @return The created or updated obj with only the id populated if it exists and null otherwise.
     */
    upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

    /**
     * Begin an upsert operation to the secondary data store.
     *
     * IMPORTANT:
     *
     * 1. This is only valid for types that specify a secondary datastore.
     * 2. Currently only types that are not extendable are supported.
     *
     * @param type
     *           Type that the upsert operation is for.
     *
     * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
     */
    static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

    /**
     * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
     * defaulting to using multi-row sql for the deletes.
     *
     * @param spec
     *        Spec controlling the operation
     * @param confirm
     *        Must be specified as true.  Otherwise request will be rejected.
     */
    static clearCollection(spec?: ClearCollectionSpec | null, confirm: boolean): void;

    /**
     * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were created.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static created(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static updated(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
     * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
     * archive operation or it is physically removed.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static removed(txn: Transaction): void;

    /**
     * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
     * Support column alias for evaluate & evalMetrics by passing an ObjNode
     * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
     * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
     */
    static eval(spec?: EvalSpec | null): Data | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluate(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
     * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
     * conditions are met.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates a single projection expression for timeseries data.
     *
     * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
     * or {@link MetricEvaluatable.evalMetrics} should be used instead.
     *
     * @param spec
     *           Specification of the projection expression and which timeseries to evaluate.
     * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
     *
     * @see MetricEvaluatable
     */
    static tsEval(spec: TSEvalSpec): Obj | null;

    /**
     * Used internally to evaluate as a stream
     */
    static evaluateOvi(spec?: EvaluateSpec | null): any;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
     * as stream of Arrow batches.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow | null>;

    /**
     * Refreshes calc fields for objs for a type based on a spec.
     *
     * @param spec
     *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshCalcFields(spec?: RefreshCalcFieldsSpec | null): RefreshCalcFieldsBatchJob | null;

    /**
     * Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
     * specified fields will be refreshed.
     *
     * @param spec
     *        Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec | null): RefreshDefaultFieldsBatchJob | null;

    /**
     * Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
     * and no types that extend them have unique indexes, this does nothing.
     *
     * @param spec
     *        Spec that indicates which objs to refresh unique indexes for along with other options that control
     *        the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec | null): RefreshUniqueIndexesBatchJob | null;

    /**
     * Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
     *
     * @param spec
     *        Indicates which objs to refresh analytics for and what time range to use, along with other options that
     *        control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see AnalyticsContainer
     * @see SimpleMetric
     */
    static refreshAnalytics(spec?: RefreshAnalyticsSpec | null): RefreshAnalyticsBatchJob | null;

    /**
     * Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
     * {@link SimpleMetric.cacheInterval} are considered.
     *
     * @param spec
     *        Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
     *        that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see SimpleMetric
     */
    static refreshMetrics(spec?: RefreshMetricsSpec | null): RefreshMetricsBatchJob | null;

    /**
     * Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
     * function will be called.  For those that have both, only the updated will be called.  If only created should be
     * called in all cases, set the 'spec.createdOnly' field to true.
     *
     * @param spec
     *           Indicates which objs to call the functions for, along with other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec | null): RunCreatedOrUpdatedBatchJob | null;

    /**
     * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
     *
     * @param spec
     *        Indicates which types of dependencies should be refreshed along with other parameters that control the
     *        operation of the function.
     */
    static refreshDeps(spec?: RefreshDepsSpec | null): void;

    /**
     * Performs the refresh operation.
     *
     * @param type
     *        Type being refreshed.
     * @param jobType
     *        Batch job type to for refresh.
     * @param spec
     *        Parameters for the refresh operation.
     *
     * @return The batch job that was started.
     */
    static processRefresh(type: Type, jobType: Type, spec: ObjBatch): RefreshBatchJob<any, any, any> | null;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportData(spec?: StartImportDataSpec | null): PushStream<Feature.Chunk.DfBldr.Block | null>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Imports instances into a C3 type from a file stored in Cassandra.
     *
     * @param spec
     *        Various parameters that control the operation of function.
     * @param async
     *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
     *        synchronous)
     * @return various statistics and errors for the import operation.
     */
    static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;

    /**
     * Exports instances of a C3 type to Cassandra.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A reference to the Content obj created that contains the exported data and various statistics about the
     *         export.
     */
    static exportData(spec: ExportDataSpec): ExportDataResult | null;

    /**
     * Exports instances of a C3 type to S3 for importing into Redshift.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Number of objs exported.
     */
    static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string | null, failIfMissing?: boolean): Feature.Chunk.DfBldr.Block | null;

    /**
     * Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
     * returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
     * {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
     * the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
     * separate query) to return the requested data from the reference.
     *
     * Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
     * way other than what is described above will ALWAYS return false.
     *
     * @return the current value of the {@link meta#referenceInvalid} field for the instance.
     *
     * @see Meta#referenceInvalid
     */
    referenceInvalid(): boolean;

    /**
     * Generates new unique ids for C3 Obj instances
     *
     * @param count
     *           Number of ids to generate.  Default is 1.
     * @return The requested number of new unique ids.
     */
    static generateNewIds(count?: number | null): C3.Array<string | null>;

    /**
     * Generates synthetic data for a C3 type.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Various statistics for the operation.
     */
    static generateData(spec?: GenerateDataSpec | null): ActionStats | null;

    /**
     * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
     */
    static profileData(spec?: FetchSpec | null): GenerateDataSpec | null;

    /**
     * Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
     * such that a subsequent upsert will create a new instance.
     *
     * @return The requested obj without any of its identifying fields.
     */
    withoutIdentity(): Feature.Chunk.DfBldr.Block | null;

    /**
     * Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
     * type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
     * that type's base type chain.
     *
     * @return The type hierarchy for the requested obj.
     */
    typeOf(): EntityType | null;

    /**
     * Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
     * C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
     * as that type's base type chain.
     *
     * @param objs
     *           Obj instances to get the type hierarchy for.
     * @return The type hierarchies for the requested objs.
     */
    static typeOfBatch(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null): C3.Array<EntityType | null>;

    /**
     * @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
     *         The type itself is returned in all other cases.
     */
    static getRootType(): Type | null;

    /**
     * Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
     * internally during provisioning and should not need to be called manually.
     *
     * @param throwOnNonUniqueIndexError
     *        true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
     *        false, that will be considered benign as it means some other thread process is creating the necessary
     *        indexes.
     *
     * @return True if the operation caused any DLL changes and false if did not.
     */
    static upsertCollection(throwOnNonUniqueIndexError?: boolean): boolean;

    /**
     * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
     *
     * @type
     *         The Type to validate the schema of.
     * @return true if the schema was updated in this JVM/app
     */
    static validateSchema(type: Type): boolean;

    /**
     * Callback that is called synchronously in response to a call to {@link upsertCollection}.
     */
    static collectionUpserted(): void;

    /**
     * Callback that is called synchronously in response to a call to {@link clearCollection}.
     */
    static collectionCleared(): void;

    /**
     * Used only by DatabaseTestEngine
     */
    static dbEcho(template?: Feature.Chunk.DfBldr.Block | null, count?: number | null, sendBack?: boolean): number | null;

    /**
     * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
     * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
     * condition is considered to be when there is no entry in the reference type for the obj being validated.
     *
     * @param spec
     *           Indicates which references in which types/fields to check.
     * @return List of references that were found to be invalid along with details of why they are invalid.
     */
    static checkReferences(spec?: CheckReferencesSpec | null): CheckReferencesResult | null;

    /**
     * Determines is a path is valid as a filter expression in a fetch call.
     *
     * @param path
     *           Path to validate.
     * @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
     *         itself is invalid, an exception is thrown
     */
    static validatePath(path: string): ValidatePathResult | null;

    /**
     * @return The db table name for relational types and the column family name for Cassandra types
     */
    static schema(): SchemaInfo | null;

    /**
     * Gets all of the dependencies that could invalidate a stored calc field.
     *
     * @param fieldName
     *         The name of the field to find all dependencies of.
     * @return A list of dependencies that can invalidate the stored calc field.
     */
    static calcFieldDeps(fieldName: string): C3.Array<string | null>;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
     * IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
     *
     * @param range
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param fields
     *        Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
     *        not used as we don't keep dependency info at the field level.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    invalidateTsHeader(range?: TimeRange | null, fields?: C3.Array<string | null>, autoCommit?: boolean): void;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
     * {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
     *
     * @param tsInvalidations
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation | null>, autoCommit?: boolean): void;

    /**
     * API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
     * call action for each batch of `spec.batchSize`.
     *
     * @param spec
     *         A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
     * @param action
     *         The lambda to apply to each batch of objs.
     *
     * @return the ID of the started ObjBatchMapReduceJob
     */
    static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<C3.Array<Obj | null>, any>): string;

    /**
     * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
     * calling a transform for it.
     *
     *
     * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
     */
    static callbackLogic(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, callback?: λFunction<Feature.Chunk.DfBldr.Block | null, Feature.Chunk.DfBldr.Block | null> | null): ObjList<Feature.Chunk.DfBldr.Block | null>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: C3.Array<Feature.Chunk.DfBldr.Block | null> | null, callback?: λFunction<Feature.Chunk.DfBldr.Block | null, Feature.Chunk.DfBldr.Block | null> | null): C3.Array<ObjError | null>;

    /**
     * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
     *         be only 1.  If it does, then there will be multiple.
     */
    static idColNames(): C3.Array<string | null>;

    /**
     * True if this field is unique
     */
    static isUnique(fieldPath: string): boolean;

    /**
     * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
     * themselves, or there is a unique index that is a subset of the specified fields.
     */
    static isUnique(fieldPaths: C3.Array<string | null>): boolean;

    /**
     * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
     * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
     * @param name
     *          The name of field to check
     * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
     */
    static isSystemField(name: string): boolean;

    /**
     * id of the bin of the block. This will match the {@link FeatureEvaluatable.Bin#binId}
     */
    get binId(): string;

    /**
     * Array of subjectId hashes which are serialized in this block.
     */
    get subjectIdHashes(): C3.Array<number | null>;

    /**
     * Array of rowCounts for subjectIds which are serialized in this block.
     */
    get subjectRowCounts(): C3.Array<number | null>;

    /**
     * Read data from this block as a map of Data.Columns. Please note that doing so will effectively create a "copy" of
     * the requested data and also "slice" the Data.Column to be in a TimeRange denoted by the input start and end datetime.
     */
    readCols(subjects?: C3.Set<string | null>, start?: DateTime | null, end?: DateTime | null): C3.Map<string | null, C3.Array<Data.Column | null>>;

    /**
     * Reads data from the block by subjects such that all Data.Column(s) of the subject will be returned together.
     * This is useful when we know that the complete data maybe large enough that we should not loaded into memory in one shot.
     * Please note that the subject will be returned along with the Data.Column, so the calling code should take care of any grouping by subject if needed.
     */
    readStream(subjects?: C3.Set<string | null>, start?: DateTime | null, end?: DateTime | null): Stream<Pair<string | null, C3.Array<Data.Column | null>> | null>;

    /**
     * Writes data from Data.Column(s) into the Storage block and return an instance with updated "meta" field like
     * **rowSize** and **inMemorySize**. Please note that its on the caller to {@link Persistable#create} this instance
     * into the DB.
     */
    writeCols(cols: C3.Map<string | null, C3.Array<Data.Column | null>> | null): Feature.Store.Block;

    /**
     * @return a partial (with **strategyId** and **bin**) Filter for fetching/evaluating all relevant **Feature.Store.Blocks** for the provided input. Please note
     * that this is is incomplete on its own and needs **strategyId** and **bin** also to be valid. This handles the nuances providing filter for Timeseries and non-Timeseries
     * {@link Feature} / {@link Feature.Set}.
     */
    static nonStrategyNonBinFilter(feature: FeatureBase, start?: DateTime | null, end?: DateTime | null): Filter;

    /**
     * @return a Filter for fetching **Feature.Store.Blocks** which share same contentLocation and not marked to be deleted.
     * This is used to not delete the content of the block, as some other block with same contentLocation is marked to be deleted.
     */
    static nonDeletedLocationsFilter(contentLocations: C3.Array<string | null>): Filter;

    /**
     * Copy data from the current block to another block and return the **to** block with updated {@link #rowCount} and {@link #inMemorySize}. **subjectIds**, **start** and **end** may be specified if you want to filter the data from the current block before writing to the **to** block.
     * Please note that:
     * * No validation will be done on the existing fields of the **to** block to ensure that it matches with the data being written to it.
     * * Like other **write** APIs, the block will NOT be "created" in the DB post writing. It is the responsibility of the caller to "create" the block.
     */
    copyData(to: Feature.Store.Block, subjectIds?: C3.Set<string | null>, start?: DateTime | null, end?: DateTime | null): Feature.Store.Block;

    /**
     * An alternative **copyData** API which reads data for **srcSubjectId** from the current block, duplicates it for the **dstSubjectIds** before writing to the **to** block. Optionally, **start** and **end** may be specified if the data for **srcSubjectId** needs to be filtered out.
     * Please note that:
     * * No validation will be done on the existing fields of the **to** block to ensure that it matches with the data being written to it.
     * * Like other **write** APIs, the block will NOT be "created" in the DB post writing. It is the responsibility of the caller to "create" the block.
     */
    copyData(to: Feature.Store.Block, srcSubjectId: string, dstSubjectIds: Collection<string | null>, start?: DateTime | null, end?: DateTime | null): Feature.Store.Block;

    /**
     * Will copy data from the input files into the current block. Please note that:
     * * No validation will be done whether the files contains data for only those subjects which should belong to this block.
     * * Files are assumed to contain data in the "old format" where only the cols are serialized into the files and the subject is stored elsewhere. (i.e in the fileName itself)
     * * subjectLambda may be used to provide the "subjectId" from each file. By default, the file's parentDirectory will assumed to be of the form "subjectId#featureFingerprint" and based on that subjectId will be extracted from it.
     */
    copyFromFiles(files: Collection<File | null>, subjectIdLambda?: λFunction<File, string> | null): Feature.Store.Block;

    /**
     * Creates a `MapReduce` job to clean up all deleted blocks from the Feature.Store.
     * If any non-deleted block share the {@link #contentLocation} with a deleted block, then the underlying data will not be deleted but the Block will be removed.
     */
    static gc(options?: MapReduceOptions | null): ObjBatchMapReduceJob;

    /**
     * Delete the blocks and erases the data associated with it.
     * If the data is KvContent, it will be deleted by {@link KvStore#deleteContents} else Files will be deleted from the fileSystem
     * @param blocksToBeDeleted
     *        A collection of blocks which are marked to be deleted.
     */
    static deleteContentAndBlocks(blocksToBeDeleted: C3.Array<Feature.Store.Block | null>): void;

    static orderedStream(blocks: C3.Array<Feature.Chunk.DfBldr.Block | null>, subjects?: C3.Set<string>): Stream<Pair<string | null, C3.Array<Data.Column | null>> | null>;

    /**
     * Pack the Feature.Store.Block(s) of the provided `Feature.Set` or `Feature` to make it faster to query data for the TimeRange as specified by the spec.
     * Optionally, you may be able to query subjects for selective subjects using `subjectFilter`.
     *
     * Please note that any subjects which have any "missing time range(s)" where the data is not materialized, their data will not be packed.
     * No error will be thrown if packer doesn't end up packing anything at all.
     *
     * For example, in the following diagram, we see there is materialized data for 5 subjects, where "XXX" denotes a time range where the data is not materialized
     * and "[---]" denotes materialized data. "TURBINE-1", "TURBINE-2" and "TURBINE-5" have the materialized data between 2019-01-01 and 2019-09-23 so they will be packed,
     * but "TURBINE-3" and "TURBINE-4" will be ignored because of "missing materialized data" in some timeRange(s).
     * In that spirit, please specify the **start** and **end** (don't keep them empty) to ensure that appropriate data gets packed.
     * This may change in the future as we improve the packing algorithm or decide to make it implicit.
     *
     *              TURBINE-1            [----------------------][---------------------------][-------------------------]
     *                                2019-01-01             2019-03-21                  2019-06-21                   2019-09-23
     *
     *              TURBINE-2            [----------------------][---------------------------][-------------------------]
     *                                2019-01-01             2019-03-21                  2019-06-21                   2019-09-23
     *
     *              TURBINE-3            [----------------------]XXXXXXXXXXXXXXXXXXXXXXXXXXXXX[-------------------------]
     *                                2019-01-01             2019-03-21                  2019-06-21                   2019-09-23
     *
     *              TURBINE-4            XXXXXXXX[--------------][---------------------------][-------------------------]
     *                                       2019-01-15      2019-03-21                  2019-06-21                   2019-09-23
     *
     *              TURBINE-5            [----------------------][---------------------------][-------------------------]
     *                                2019-01-01             2019-03-21                  2019-06-21                   2019-09-23
     *
     *
     * @param spec
     *        the {@link Feature.Store.Block.PackSpec} specifies the `Feature` or `Feature.Set`, the `subjectFilter` or `subjects`,
     *        and the timeRange.
     */
    static pack(spec: Feature.Store.Block.PackSpec): Feature.Store.Block.PackJob;

    /**
     * Calculate the approximate in-memory size for a given subject in this block. In the {@link Feature.Store.Block.PackJob}, this function
     * is used to estimate the in-memory size of a subject in the final packed block. Note that when this function is used in {@link Feature.Store.Block.PackJob},
     * this function is not accurate for timeseries blocks, i.e. the result of this function may not be the final in-memory size of one subject in the final packed block.
     * @param subject
     *        the subject in this block to calculate the in-memory size for.
     * @return approximate in-memory size (i.e after reading from blocks) a given subject.
     *
     * @see #inMemorySize
     */
    approxInMemorySizePerSubject(subject: string): number;

    /**
     * A helper function to calculate the approximate in-memory sizes for a set of subjects for a list of blocks.
     */
    static approxInMemorySizesBySubject(subjects: C3.Set<string | null>, blocks: C3.Array<Feature.Store.Block | null>): C3.Map<string | null, number | null>;

    numRowsByTimerange(tr: TimeRange, fb: FeatureBase): number | null;
  }
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

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
