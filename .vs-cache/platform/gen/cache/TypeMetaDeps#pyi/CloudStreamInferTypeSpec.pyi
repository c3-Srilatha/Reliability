#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.InferTypeSpec import InferTypeSpec
from c3.platform.Promise import Promise
from c3.platform.RetrySpec import RetrySpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Format import Format
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.CountMinSketchSpec import CountMinSketchSpec
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.TypeMeta import TypeMeta
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type CloudStreamInferTypeSpec


class CloudStreamInferTypeSpec(InferTypeSpec, CloudStreamPeekMessagesSpecFields):
    """
    Spec type for cloud message Inferrer. Used to specify what rules to apply to type inference.
    
    @remarks this represents a made instance of CloudStreamInferTypeSpec
    """
    
    serValueType: Optional[ValueType]=None
    """
    Data serialization type. If not provided type will be inferred from source data
    """

    contentType: Optional[str]=None
    """
    Content Type of the source data
    """

    contentEncoding: Optional[str]=None
    """
    Compression / Content Encoding of this data
    """

    batchSize: Optional[int]=None
    """
    Batch size to use during serialization if batch writing is used (Arrow format uses batching).
    """

    noCsvHeader: Optional[bool]=None
    """
    If the CSV content does not have a header. By default, its false, which means we expect header to be present.
    Useful to set as true when we don't know the header but know that it doesn't exist.
    
    Only applicable when de-serializing CSV contentType.
    """

    csvHeader: Optional[str]=None
    """
    csvHeader is a comma separated list of fields that need to be written and is required when contentType is
    text/csv. Leave this field as null for all other content types.
    """

    csvFormat: Optional[Map[str, Format]]=None
    """
    Optional format for a csv values. Key should be field path used in a csv header.
    """

    defaultCsvDelimiter: Optional[str]=None
    """
    Default csv delimiter for target type. Used for text/csv files. Leave this field as null for all other content types.
    """

    defaultCsvEscapeChar: Optional[str]=None
    """
    Default escape character for target type. Used for text/csv files. Leave this field as null for all other content types.
    """

    defaultCsvQuoteChar: Optional[str]=None
    """
    Default quote character for target type. Used for text/csv files. Leave this field as null for all other content types.
    """

    avroSchema: Optional[str]=None
    """
    Avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
    file based avro data, and from the type in the case of in-memory avro data.
    """

    isObjList: Optional[bool]=None
    """
    Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
    an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
    written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
    and "type", the type shared by all Objs in the aforementioned array.
    """

    skipExtraFields: Optional[bool]=None
    """
    Optionally skip extra fields in serialized content instead of failing to serialize.
    """

    ignoreBadContent: Optional[bool]=None
    """
    If true will silently ignore bad syntax in the content and will return no or partial results.
    """

    mergeXmlNonAdjacentLists: Optional[bool]=None
    """
    True if desired to merge the non-adjacent lists for array type field. If false, the readObjs only
    returns the last continuous list for the given key.
    E.g., to readObjs for the following xml file,
    <tests>
      <test>one</test>
      <other>two</other>
      <test>three</test>
    </tests>
    with serType,
    Tests {
      test: [string]
      other: string
    }
    If mergeXmlNonAdjacentLists is set true, the returned Obj has 'test' field containing both 'one' and 'three'.
    Otherwise, the 'test' field only has value 'three'.
    """

    retrySpec: Optional[RetrySpec]=None
    """
    Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
    """

    restartStreamOnRetry: Optional[bool]=None
    """
    If set, stream will be instantiated again on retryable errors and execution will continue from the point of failure
    """

    offset: Optional[int]=None
    """
    The index of the first object from a stream that needs to be read.
    """

    limit: Optional[int]=None
    """
    The maximum number of Objs to return (starting from {@link offset}). If there are fewer objects than were
    requested, only those will be returned.
    """

    validateContentType: Optional[bool]=None
    """
    If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
    type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
    """

    peekForMetadata: Optional[bool]=None
    """
    If set to `true` and content metadata is not known then will read content for better guess at metadata and target
    type.
    """

    failIfMissing: Optional[bool]=None
    """
    Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
    exception.
    """

    skipIfUnauthorized: Optional[bool]=None
    """
    For some external file systems, additional authorization is required to read/open a file and its metadata.
    If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
    """

    cacheUrlOrEncodedPath: Optional[str]=None
    """
    If set and if requested file or directory url is under this path then will retrieve content from cache.
    """

    cacheTtlSec: Optional[int]=None
    """
    Time in seconds that the cached file should live (default 24 hours).
    """

    forceMultiPart: Optional[bool]=None
    """
    Forces use of multipart upload and download from file system if available.
    
    By default operations intelligently decide whether or not to use multipart version. For upload action first
    allocates multiPartChunkBytes sized buffer and fills it with content. If content fits completely in memory
    upload will be conventional. If not then multipart upload would be initiated. For download first
    multiPartChunkBytes+1 sized chunk will be attempted first. If content length == multiPartChunkBytes+1 then
    total content length is retrieved and remaining content is downloaded using multipart download. If
    forceMultiPart option is set then multipart download process is initiated from the beginning.
    """

    disableMultiPart: Optional[bool]=None
    """
    Disable multipart upload and download from file system. By default file system operations intelligently decide
    if multipart version should be used or not.
    
    @see forceMultiPart
    """

    maximumSingleUploadsize: Optional[int]=None
    """
    Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
    """

    maxThreads: Optional[int]=None
    """
    Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
    fewer threads but it will not use more threads than this option specifies.
    
    Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
    upload or download.
    """

    minThreads: Optional[int]=None
    """
    Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
    may use fewer or greater number of threads. By default single action will not use all available threads this
    option overrides that behavior.
    """

    retryOnNotFound: Optional[bool]=None
    """
    If set to true, it will retry reading file when the file is not found.
    """

    lockOnWrite: Optional[bool]=None
    """
    If set to `true` then concurrent writes to a file will be serialized using locks
    
    For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
    """

    useIoExecutor: Optional[bool]=None
    """
    If set will use IoExecutor service.
    """

    cloudClient: Optional[Any]=None
    """
    If not null, retry logic will be used from CloudClient rather than File
    """

    serType: Optional[Type]=None
    """
    Optional C3 Type for serialization. If not set then will use parent folder of content as serialization type.
    If #doNotUseParentDirForSerType is true and #peekForMetadata is true then will read content for C3 type.
    """

    doNotUseParentDirForSerType: Optional[bool]=None
    """
    If true then will not use parent folder of content for target type guess.
    """

    useBinaryEncodingDecoding: Optional[bool]=None
    """
    For avro operations only
    If set, uses BinaryEncoder / BinaryDecoder for decoding avro serialization/deserialization
    """

    shouldNotWriteType: Optional[bool]=None
    """
    Optionally indicating if serialized form should contain C3 type.
    """

    shouldWritePretty: Optional[bool]=None
    """
    Optionally indicating if serialized form should be formatted for ease of reading.
    """

    guessMetadata: Optional[bool]=None
    """
    If this property is set to true, the File System will try to guess the metadata for the file from the file
    extensions instead of reading metadata from the stored file.
    
    This option should only be used if it is known that File Metadata is incorrect. Or it could be used in cases when
    retrieving file metadata is an additional API call so skipping it could improve performance.
    
    CAUTION : If metadata could not be guessed from the file extensions, it could result in an error
    """

    createChecksum: Optional[bool]=None
    """
    If true, checksum files will be generated when writing files
    """

    decrypt: Optional[bool]=None
    """
    Whether to decrypt content during read
    """

    disableApproxMostFrequent: Optional[bool]=None
    """
    disable the creation of a {@link CountMinSketch} data structure for computing the most frequent elements
    """

    disableApproxUniqueCount: Optional[bool]=None
    """
    disable the creation of a {@link HyperLogLog} data structure for computing the approximate unique count
    """

    disableHistogram: Optional[bool]=None
    """
    disable the creation of a Histogram data structure. An approximate histogram is computed for Numeric and String
    types when concatenating Digests to conserve memory.
    """

    enableMinHash: Optional[bool]=None
    """
    enable the creation of a MinHash structure. A MinHash is required to perform approximate inclusion tests or
    estimate the Jaccard index (a similarity measurement) with another digest. Both digests must have MinHash enabled
    to perform these operations. A MinHash stores the minimum values for multiple hash functions and performs its
    operations by comparing these values between digests. Enabling this may be expensive.
    @see MinHash
    """

    buildAny: Optional[bool]=None
    """
    If enabled, fields of this Digest will be built as AnyDigests.
    @see DigestBuilder
    @see AnyDigest
    """

    parseFields: Optional[bool]=None
    """
    If enabled, fields of this Digest will be created using a ParsingDigestBuilder. Otherwise, they will be created
    using a standard DigestBuilder.
    @see DigestBuilder
    @see ParsingDigestBuilder
    """

    include: Optional[str]=None
    """
    Specifies which fields of the Obj instances to run digests on
    """

    percentiles: Optional[Array[float]]=None
    """
    Array of percentiles to compute.
    If no percentiles are specified, default percentiles computed will be 25.0, 50.0, and 75.0
    """

    quantiles: Optional[Array[float]]=None
    """
    Array of quantiles (in decimal point notation) to compute.
    If no quantiles are specified, default quantiles computed will be 0.25, 0.50, and 0.75
    """

    filter: Optional[str]=None
    """
    Filter expression for which Obj instances to collect digests on.
    """

    guessValueTypeLimit: Optional[int]=None
    """
    If set to value greater than 0, will stop guessing ValueType after the limit has surpassed and all the elements are of the same ValueType
    The guessed value type will be used for the remainder of the elements for Digest computation.
    Note: this may affect the accuracy of the digest since the remainder elements will be assumed to be of the guessed ValueType
    This is useful for performance reasons. Only applicable for {@link ParsingDigestBuilder}
    
    @see ParsingDigestBuilder
    """

    valueSpec: Optional[ValueSpec]=None
    """
    When an {@link Obj} is digested we pass this spec into {@link Obj#eachFieldValue}
    
    @see ValueSpec
    """

    countMinSketchSpec: Optional[CountMinSketchSpec]=None
    """
    @see CountMinSketchSpec
    """

    baseTypes: Optional[Array[Type]]=None
    """
    Base Types that provide foundational structure for inferred Types.
    
    Defines the inheritance hierarchy and mixins that newly inferred Types should extend.
    Used to ensure inferred Types follow established patterns and include required capabilities.
    """

    fieldPath: Optional[str]=None
    """
    Dot-separated path from the root entity to the current inference target.
    
    Tracks the hierarchical relationship during nested Type inference. For example,
    "customer.address.location" indicates inferring a location Type nested within
    a customer's address. Used for generating appropriate Type names and maintaining
    relationship context during inference operations.
    """

    typeNamePrefix: Optional[str]=None
    """
    Prefix applied to all generated Type names for namespace organization.
    
    Ensures consistent naming conventions across related inferred Types. For example,
    setting "Import" as prefix would generate Types like "ImportCustomer", "ImportOrder".
    Helps organize inferred Types by data source or inference batch.
    """

    typeNameMapping: Optional[Map[str, str]]=None
    """
    Maps field paths to custom Type names for precise naming control.
    
    Allows override of default naming conventions for specific elements. The key
    represents the qualified field path, and the value specifies the desired Type name.
    An empty string ("") key denotes the root Type name. Enables fine-grained control
    over Type naming when automatic generation is insufficient.
    """

    usePathForTypeName: Optional[bool]=None
    """
    Controls Type naming strategy based on element hierarchy depth.
    
    When true, uses the complete field path for Type name generation, creating names
    like "CustomerAddressLocation". When false, uses only the immediate parent element
    name, creating names like "Location". Affects namespace organization and Type
    name uniqueness.
    """

    doNotMergePartialTypes: Optional[bool]=None
    """
    Forces creation of new Types instead of merging with existing similar Types.
    
    When true, bypasses the similarity analysis defined by {@link #minCommonFieldsForMerge}
    and always creates new Types with unique names. Useful when strict type isolation
    is required or when inference sources have different data quality characteristics.
    
    @see minCommonFieldsForMerge
    """

    minCommonFieldsForMerge: Optional[float]=None
    """
    Threshold for merging Types based on field name similarity.
    
    Defines the minimum proportion of common field names required to merge two Types
    during inference. A value of 0.5 means Types must share at least 50% of their
    field names to be merged. Only applies when {@link #doNotMergePartialTypes} is false.
    Higher values create more distinct Types; lower values encourage consolidation.
    
    Valid range: 0.0 (always merge) to 1.0 (exact match required).
    
    Default: 0.5 (50% field overlap required).
    """

    package: Optional[str]=None
    """
    Target package name for organizing inferred Types.
    
    Specifies the C3 AI package where inferred Types will be created. If not provided
    or invalid, the default package will be used. Enables logical organization of
    inferred Types by data source, business domain, or inference project.
    """

    minimumUniqueRatio: Optional[float]=None
    """
    Quality threshold for primary key candidate selection during foreign key inference.
    
    Used by {@link ForeignKeyInferrer} to filter potential primary key columns based on
    data uniqueness. Columns with (uniqueCount / totalCount) below this threshold are
    excluded from primary key consideration. Lower values accommodate datasets with
    data quality issues or corrupted primary keys.
    
    Valid range: 0.0 to 1.0.
    
    Default: 0.9 (90% uniqueness required).
    
    @see ForeignKeyInferrer
    """

    minimumFkCoverage: Optional[float]=None
    """
    Coverage threshold for numeric foreign key relationship validation.
    
    Used by {@link ForeignKeyInferrer} to validate numeric primary key-foreign key pairs.
    Foreign key columns must cover at least this percentage of the primary key's data
    range to be considered valid relationships. Helps eliminate false positive
    relationships in numeric data with different distributions.
    
    Valid range: 0.0 to 1.0.
    
    Default: 0.5 (50% coverage required).
    
    @see ForeignKeyInferrer
    """

    minimumJaccardIndex: Optional[float]=None
    """
    Jaccard similarity threshold for foreign key relationship detection.
    
    Minimum Jaccard index (intersection / union) required between two columns to
    establish a foreign key relationship. Ensures meaningful data overlap between
    potential key pairs. Higher values require stronger relationships but reduce
    false positives.
    
    Valid range: 0.0 to 1.0.
    
    Default: 0.001 (minimal overlap required).
    
    @see https://en.wikipedia.org/wiki/Jaccard_index
    """

    parseFieldValues: Optional[bool]=None
    """
    Enables field Type inference from data values.
    
    When true, analyzes actual data values to determine appropriate field Types
    (numeric, date, boolean, etc.) based on content patterns. When false, defaults
    all inferred fields to string Type for safety. Enabling this provides better
    Type accuracy but requires more processing time and memory.
    
    Default: false (string Types for all fields).
    """

    useWidest: Optional[bool]=None
    """
    Fall back to string type if conflicts happen in data
    {@link SourceCollection#inferSourceType2} will set the value to true by default
    """

    fromEnd: Optional[bool]=None
    """
    If true, indicates that the peek operation should be starting from the end of the visible messages list
    and return the last a few messages in the list.
    """
    def __init__(self, serValueType: Optional[ValueType]=None, contentType: Optional[str]=None, contentEncoding: Optional[str]=None, batchSize: Optional[int]=None, noCsvHeader: Optional[bool]=None, csvHeader: Optional[str]=None, csvFormat: Optional[Map[str, Format]]=None, defaultCsvDelimiter: Optional[str]=None, defaultCsvEscapeChar: Optional[str]=None, defaultCsvQuoteChar: Optional[str]=None, avroSchema: Optional[str]=None, isObjList: Optional[bool]=None, skipExtraFields: Optional[bool]=None, ignoreBadContent: Optional[bool]=None, mergeXmlNonAdjacentLists: Optional[bool]=None, retrySpec: Optional[RetrySpec]=None, restartStreamOnRetry: Optional[bool]=None, offset: Optional[int]=None, limit: Optional[int]=None, validateContentType: Optional[bool]=None, peekForMetadata: Optional[bool]=None, failIfMissing: Optional[bool]=None, skipIfUnauthorized: Optional[bool]=None, cacheUrlOrEncodedPath: Optional[str]=None, cacheTtlSec: Optional[int]=None, forceMultiPart: Optional[bool]=None, disableMultiPart: Optional[bool]=None, maximumSingleUploadsize: Optional[int]=None, maxThreads: Optional[int]=None, minThreads: Optional[int]=None, retryOnNotFound: Optional[bool]=None, lockOnWrite: Optional[bool]=None, useIoExecutor: Optional[bool]=None, cloudClient: Optional[Any]=None, serType: Optional[Type]=None, doNotUseParentDirForSerType: Optional[bool]=None, useBinaryEncodingDecoding: Optional[bool]=None, shouldNotWriteType: Optional[bool]=None, shouldWritePretty: Optional[bool]=None, guessMetadata: Optional[bool]=None, createChecksum: Optional[bool]=None, decrypt: Optional[bool]=None, disableApproxMostFrequent: Optional[bool]=None, disableApproxUniqueCount: Optional[bool]=None, disableHistogram: Optional[bool]=None, enableMinHash: Optional[bool]=None, buildAny: Optional[bool]=None, parseFields: Optional[bool]=None, include: Optional[str]=None, percentiles: Optional[Array[float]]=None, quantiles: Optional[Array[float]]=None, filter: Optional[str]=None, guessValueTypeLimit: Optional[int]=None, valueSpec: Optional[ValueSpec]=None, countMinSketchSpec: Optional[CountMinSketchSpec]=None, baseTypes: Optional[Array[Type]]=None, fieldPath: Optional[str]=None, typeNamePrefix: Optional[str]=None, typeNameMapping: Optional[Map[str, str]]=None, usePathForTypeName: Optional[bool]=None, doNotMergePartialTypes: Optional[bool]=None, minCommonFieldsForMerge: Optional[float]=None, package: Optional[str]=None, minimumUniqueRatio: Optional[float]=None, minimumFkCoverage: Optional[float]=None, minimumJaccardIndex: Optional[float]=None, parseFieldValues: Optional[bool]=None, useWidest: Optional[bool]=None, fromEnd: Optional[bool]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[CloudStreamInferTypeSpec]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[CloudStreamInferTypeSpec]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[CloudStreamInferTypeSpec]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[CloudStreamInferTypeSpec]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> CloudStreamInferTypeSpec:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> CloudStreamInferTypeSpec:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> CloudStreamInferTypeSpec:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[CloudStreamInferTypeSpec]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[CloudStreamInferTypeSpec]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> CloudStreamInferTypeSpec:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> CloudStreamInferTypeSpec:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> CloudStreamInferTypeSpec:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> CloudStreamInferTypeSpec:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> CloudStreamInferTypeSpec:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> CloudStreamInferTypeSpec:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> CloudStreamInferTypeSpec:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> CloudStreamInferTypeSpec:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> CloudStreamInferTypeSpec:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> CloudStreamInferTypeSpec:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> CloudStreamInferTypeSpec:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> CloudStreamInferTypeSpec:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> CloudStreamInferTypeSpec:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> CloudStreamInferTypeSpec:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> CloudStreamInferTypeSpec:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> CloudStreamInferTypeSpec:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> CloudStreamInferTypeSpec:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[CloudStreamInferTypeSpec]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[CloudStreamInferTypeSpec]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[CloudStreamInferTypeSpec]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[CloudStreamInferTypeSpec]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[CloudStreamInferTypeSpec]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, CloudStreamInferTypeSpec]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, CloudStreamInferTypeSpec]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[CloudStreamInferTypeSpec]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[CloudStreamInferTypeSpec]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> CloudStreamInferTypeSpec:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> CloudStreamInferTypeSpec:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> CloudStreamInferTypeSpec:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> CloudStreamInferTypeSpec:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> CloudStreamInferTypeSpec:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> CloudStreamInferTypeSpec:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> CloudStreamInferTypeSpec:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> CloudStreamInferTypeSpec:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> CloudStreamInferTypeSpec:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[CloudStreamInferTypeSpec]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> CloudStreamInferTypeSpec:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def withRetry(self, maxRetries: int=None, initialSleepMillis: int=None, exponent: float=None) -> Union[CloudStreamInferTypeSpec]:
    """
    @return new instance of this spec with `retrySpec` set
    """
        ...
    @classmethod
    def timeoutSeconds(cls, secs: float) -> CloudStreamInferTypeSpec:
    """
    @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
    """
        ...
    @classmethod
    def fromType(cls, serType: Type) -> CloudStreamInferTypeSpec:
    """
    @return FileObjsOperSpec with #serType set to provided value.
    """
        ...
    def safeSerTypeMeta(self) -> TypeMeta:
    """
    @return typeMeta for #serType or Obj if not set.
    """
        ...
    def safeSerType(self) -> Type:
    """
    @return #serType or Obj if not set.
    """
        ...
    @classmethod
    def toDecrypt(cls) -> Union[CloudStreamInferTypeSpec]:
    """
    Cached to reduce GC pressure. This is a convenient way to get a spec with decrypt=true
    """
        ...
    def typeName(self, meta: TypeMeta) -> str:
    """
    Generates appropriate Type name using field path and naming mappings.
    
    Resolves Type names by first checking {@link #typeNameMapping} for explicit overrides,
    then applying {@link #typeNamePrefix} and path-based naming rules. If no suitable
    name is found, generates a unique name based on the provided TypeMeta characteristics.
    
    @param meta
       Type metadata containing characteristics for unique name generation. Required.
    @return
       Generated Type name following naming conventions and uniqueness requirements.
    """
        ...
    def pkg(self) -> Pkg:
    """
    Retrieves the target package instance for Type creation.
    
    Resolves the {@link #package} field to an actual Pkg instance where inferred Types
    will be created. Validates package existence and accessibility. Falls back to
    default package if specified package is invalid or inaccessible.
    
    @return
       Package instance for Type creation. Never null.
    """
        ...
    def withChildPath(self, childPath: str) -> Union[InferTypeSpec]:
    """
    Creates child specification for nested Type inference.
    
    Extends the current {@link #fieldPath} with the provided child path using dot notation
    to delimit. Used when inferring nested structures to maintain hierarchical context
    and enable proper Type name generation for complex data relationships.
    
    @param childPath
       Path segment to append to current field path. Required.
    @return
       New InferTypeSpec with extended field path for nested inference operations.
    """
        ...
    def pkgPath(self) -> str:
    """
    Computed package path for the target inference package.
    
    Provides the full package path where inferred Types will be created. Derived from
    the {@link #package} field and used for package resolution and validation. Cached
    to avoid repeated package lookup operations during inference processing.
    
    @return
       Full package path for Type creation. Never null.
    """
        ...

