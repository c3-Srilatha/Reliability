#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Include import Include
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.GenerateDataSpec import GenerateDataSpec
from c3.platform.Pair import Pair
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RefreshMetricsBatchJob import RefreshMetricsBatchJob
from c3.platform.WithKey import WithKey
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ActionStats import ActionStats
from c3.platform.EvalSpec import EvalSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Pair import Pair
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DeleteFileOperationSpec import DeleteFileOperationSpec
from c3.platform.Promise import Promise
from c3.platform.Content import Content
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjError import ObjError
from c3.platform.ValueSpec import ValueSpec
from c3.platform.HyperLogLog import HyperLogLog
from c3.platform.Data import Data
from c3.platform.SchemaInfo import SchemaInfo
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.RefreshMetricsSpec import RefreshMetricsSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.CheckReferencesResult import CheckReferencesResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.GetMissingSpec import GetMissingSpec
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.Promise import Promise
from c3.platform.Content.GrepResult import Content.GrepResult
from c3.platform.PushStream import PushStream
from c3.platform.RefreshDefaultFieldsSpec import RefreshDefaultFieldsSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.ScanStats import ScanStats
from c3.platform.S3File import S3File
from c3.platform.Promise import Promise
from c3.platform.RefreshAnalyticsSpec import RefreshAnalyticsSpec
from c3.platform.ValidatePathResult import ValidatePathResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.InferTypeSpec import InferTypeSpec
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Pair import Pair
from c3.platform.FetchResult import FetchResult
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.MergeSpec import MergeSpec
from c3.platform.MergeAllSpec import MergeAllSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Stream import Stream
from c3.platform.Url import Url
from c3.platform.ContentValue import ContentValue
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.RunCreatedOrUpdatedBatchJob import RunCreatedOrUpdatedBatchJob
from c3.platform.RemoveAllSpec import RemoveAllSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Pair import Pair
from c3.platform.Stream import Stream
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Transaction import Transaction
from c3.platform.Promise import Promise
from c3.platform.RefreshBatchJob import RefreshBatchJob
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Pair import Pair
from c3.platform.BatchFetchSpec import BatchFetchSpec
from c3.platform.EvaluateArrowStreamSpec import EvaluateArrowStreamSpec
from c3.platform.File import File
from c3.platform.SourceTransformResult import SourceTransformResult
from c3.platform.TimeRange import TimeRange
from c3.platform.ExportDataResult import ExportDataResult
from c3.platform.Pkg import Pkg
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Promise import Promise
from c3.platform.Meta import Meta
from c3.platform.RefreshCalcFieldsBatchJob import RefreshCalcFieldsBatchJob
from c3.platform.RunCreatedOrUpdatedSpec import RunCreatedOrUpdatedSpec
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.CreateBatchObjStreamSpec import CreateBatchObjStreamSpec
from c3.platform.SerDeser import SerDeser
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec
from c3.platform.TouchSpec import TouchSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FieldType import FieldType
from c3.platform.EntityType import EntityType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.Filter import Filter
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Type import Type
from c3.platform.CheckReferencesSpec import CheckReferencesSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.CellTuple import CellTuple
from c3.platform.Pair import Pair
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.FileOperationSpec import FileOperationSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.EvaluateResult import EvaluateResult
from c3.platform.SourceTransformSpec import SourceTransformSpec
from c3.platform.RefreshDepsSpec import RefreshDepsSpec
from c3.platform.FileCompressSpec import FileCompressSpec
from c3.platform.Pair import Pair
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.ByteStream import ByteStream
from c3.platform.Content.GrepSpec import Content.GrepSpec
from c3.platform.RefreshAnalyticsBatchJob import RefreshAnalyticsBatchJob
from c3.platform.Exclude import Exclude
from c3.platform.CharStream import CharStream
from c3.platform.ClearCollectionSpec import ClearCollectionSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjList import ObjList
from c3.platform.RegexPattern import RegexPattern
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.ObjBatch import ObjBatch
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RetrySpec import RetrySpec
from c3.platform.ZipFile import ZipFile
from c3.platform.RefreshUniqueIndexesBatchJob import RefreshUniqueIndexesBatchJob
from c3.platform.ArrayType import ArrayType
from c3.platform.Pair import Pair
from c3.platform.TsInvalidation import TsInvalidation
from c3.platform.ContentType import ContentType
from c3.platform.ContentMeta import ContentMeta
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.PkgFileDeps import PkgFileDeps
from c3.platform.Obj import Obj
from c3.platform.RefreshCalcFieldsSpec import RefreshCalcFieldsSpec
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.EvaluateSpec import EvaluateSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.BytePushStream import BytePushStream
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SecondaryDsUpsert import SecondaryDsUpsert
from c3.platform.FileUrl import FileUrl
from c3.platform.InferValueTypeResult import InferValueTypeResult
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ScanSpec import ScanSpec
from c3.platform.FileSystem import FileSystem
from c3.platform.RefreshDefaultFieldsBatchJob import RefreshDefaultFieldsBatchJob
from c3.platform.RefreshUniqueIndexesSpec import RefreshUniqueIndexesSpec
from c3.platform.StringPatternMatch import StringPatternMatch
from c3.platform.VersionEdit import VersionEdit
from c3.platform.AzureFile import AzureFile
from c3.platform.FileMeta import FileMeta
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type Pkg.File


class File(Pkg.Path, File):
    """
    @remarks this represents a made instance of Pkg.File
    """
    
    TEST_FILE_PATTERN: Optional[str]=None
    """
    Glob pattern to determine if a file is a test file.
    """

    url: Optional[str]
    """
    Pkg URL for this path.
    
    @see Pkg.Url
    """

    scheme: Optional[str]=None
    """
    scheme of this pkg path url.
    """

    package: Optional[str]=None
    """
    The name of package Pkg file belongs to.
    """

    category: Optional[str]=None
    """
    Category for Pkg file.
    """

    encodedSubPath: Optional[str]=None
    """
    URL encoded sub path of the Pkg file excluding repository, package and category information. This path is
    always relative.
    ```
       test%20types/TestType.c3typ
       other/OtherType.c3typ
    ```
    """

    overlay: Optional[str]=None
    """
    overlay of the path, if the path is part of one. There can only be one overlay.
    """

    depPkgName: Optional[str]=None
    """
    returns the dependency package name in the path, if this has `dep` overlay.
    ```
      /pkgA/dep/pkgB/src/TestType.c3typ -> pkgB
      /pkgA/src/TestA.c3typ -> null
    ```
    """

    depPkgOverlay: Optional[str]=None
    """
    If the overlay is DEP, and the dependency package has it's own overlay, it is the dependency package's overlay.
    This can't be another Overlay.Dep.
    ```
      fromString('/pkgA/dep/pkgB/test/src/TestType.c3typ').depPkgOverlay() -> test
      fromString('/pkgA/dep/pkgB/gen/cache/TypeMetaDeps%23dts/TestType.c3typ.d.ts').depPkgOverlay() -> gen
    ```
    """

    targetType: Optional[str]=None
    """
    Local cache of the #safeTargetType method call.
    """

    contentEncoding: Optional[str]=None
    """
    A modifier to the media-type. When present, its value indicates what additional content
    codings have been applied to the data, and thus what decoding mechanisms must be
    applied in order to obtain the media-type referenced by the contentType.
    
    It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
    """

    contentLanguage: Optional[str]=None
    """
    Describes the natural language(s) of the intended audience.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
    """

    contentLength: Optional[int]=None
    """
    The size of the entity-body, in bytes.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
    """

    contentLocation: Optional[str]=None
    """
    The resource location for the entity enclosed in the message when that entity is accessible from a location
    separate from the requested resource's URI.
    
    It is recommended to use #safeUrl instead.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
    """

    contentType: Optional[str]=None
    """
    The media type of the content (MIME type).
    This includes contentTypeParams such as delimiters, characters as well.
    To specify delimiters please see {@link ContentType}
    and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
    Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
    It is recommended to use #safeContentType instead as it will attempt to guess content type.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
    """

    contentDisposition: Optional[str]=None
    """
    Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
    attachment locally.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
    """

    eTag: Optional[str]=None
    """
    The ETag response-header field provides the current value of the entity tag for the requested variant.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
    """

    lastModified: Optional[datetime]=None
    """
    The date and time at which the variant was last modified.
    
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
    """

    lastModifiedBy: Optional[str]=None
    """
    Id of user / identity who last last modified this content.
    """

    contentMD5: Optional[str]=None
    """
    An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
    as well as supporting content-based caching (ETag).
    """

    contentSHA1: Optional[str]=None
    """
    An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
    as well as supporting content-based caching (ETag).
    """

    hasMetadata: Optional[bool]=None
    """
    Field to maintain state whether content metadata was read or not.
    """
    def __init__(self, TEST_FILE_PATTERN: Optional[str]=None, url: Optional[str]=None, scheme: Optional[str]=None, package: Optional[str]=None, category: Optional[str]=None, encodedSubPath: Optional[str]=None, overlay: Optional[str]=None, depPkgName: Optional[str]=None, depPkgOverlay: Optional[str]=None, targetType: Optional[str]=None, contentEncoding: Optional[str]=None, contentLanguage: Optional[str]=None, contentLength: Optional[int]=None, contentLocation: Optional[str]=None, contentType: Optional[str]=None, contentDisposition: Optional[str]=None, eTag: Optional[str]=None, lastModified: Optional[datetime]=None, lastModifiedBy: Optional[str]=None, contentMD5: Optional[str]=None, contentSHA1: Optional[str]=None, hasMetadata: Optional[bool]=None) -> None: ...

    def toString(self) -> str:
    """
    @return a string representation of Pkg.Path; same as #encodedFullPath.
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Pkg.File]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[Pkg.File]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Pkg.File:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File:
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
    def fromJson(cls, json: any) -> Union[Pkg.File]:
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
    def fromJsonString(cls, json: str) -> Union[Pkg.File]:
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
    def fromXmlString(cls, xml: str) -> Union[Pkg.File]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File]:
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
    def replaceType(self, old: Type, new: Type) -> Pkg.File:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File:
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
    def validateObj(self) -> Pkg.File:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File:
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
    def withoutFieldAtPath(self, path: str) -> Pkg.File:
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
    def withoutField(self, field: str) -> Pkg.File:
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
    def withoutField(self, field: FieldType) -> Pkg.File:
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
    def withoutFields(self, fields: Array[str]) -> Pkg.File:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Pkg.File:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File:
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
    def defaultField(self, field: str) -> Pkg.File:
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
    def defaultField(self, field: FieldType) -> Pkg.File:
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
    def unsetField(self, field: str) -> Pkg.File:
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
    def unsetField(self, field: FieldType) -> Pkg.File:
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
    def removeField(self, field: str) -> Pkg.File:
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
    def removeField(self, field: FieldType) -> Pkg.File:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File:
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
    def mergeJson(self, json: any) -> Pkg.File:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Pkg.File]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Pkg.File]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Pkg.File]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File]]:
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
    def toBuilder(self) -> ObjBuilder[Pkg.File]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Pkg.File]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File:
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
    def afterMake(self) -> Pkg.File:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Pkg.File:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def isTest(self) -> bool:
    """
    True if this is a test file i.e. overlay or depOverlay  is test. 'test' overlay should contain only things used
    for testing that package.
    ```
      fromString('/pkgA/dep/pkgB/test/src/SrcType.c3typ').isTest() -> true
      fromString('/pkgA/test/src/TestType.c3typ').isTest() -> true
    ```
    """
        ...
    def isGen(self) -> bool:
    """
    True if this is a generated file i.e. overlay or depOverlay  is gen. . It will be created when running code-gen.
    """
        ...
    def isDep(self) -> bool:
    """
    True, if this is a dependency package path.
    ` /pkgA/dep/pkgB/src/TestType.c3typ ->  true`
    """
        ...
    def isSrc(self) -> bool:
    """
    @return true if this is a source file.
    """
        ...
    def isSeed(self) -> bool:
    """
    @return true if this is a SEED data file.
    """
        ...
    def isPackage(self) -> bool:
    """
    @return true if this is a c3Pkg.
    """
        ...
    def isPackageLock(self) -> bool:
    """
    @return true if this is a c3pkg.lock
    """
        ...
    def isOther(self) -> bool:
    """
    @return true if this is a Pkg.Category.OTHER.
    """
        ...
    def isCache(self) -> bool:
    """
    @return true if this is a {@link Pkg.Category#CACHE}
    """
        ...
    def isUi(self) -> bool:
    """
    @return true if this is a Pkg.Category.UI
    """
        ...
    def isUiMeta(self) -> bool:
    """
    @return true if this is a Pkg.Category.UI and conforms to application/kind/filename.ext.
    """
        ...
    def isData(self) -> bool:
    """
    @return true if this is a Pkg.Category.DATA
    """
        ...
    def uiApplicationId(self) -> Union[str]:
    """
    @return Ui Application id, for a Ui file.
    """
        ...
    def uiMetaKind(self) -> Union[str]:
    """
    @return kind of Ui Pkg file.
    """
        ...
    def subPath(self) -> str:
    """
    @return sub path of this file under the package including file name. Sub path is always relative.
    ```
       test types/TestType.c3typ
       other/OtherType.c3typ
    ```
    """
        ...
    def encodedFileName(self) -> str:
    """
    @return URL encoded file name including the extension.
    """
        ...
    def fileName(self) -> str:
    """
    @return file name of this file.
    """
        ...
    def fileExt(self) -> Union[str]:
    """
    @return file extension of this file, including the leading dot (e.g., ".c3typ", ".json").
    """
        ...
    def fileExtWithoutDot(self) -> Union[str]:
    """
    @return file extension of this file without the leading dot (e.g., "c3typ", "json"), or null if no extension.
    """
        ...
    def fileNameNoExt(self) -> str:
    """
    @return fine name of this file without file extension.
    """
        ...
    def encodedFullPath(self) -> str:
    """
    @return encoded full path of this file. It includes package but doesn't include scheme. Full path always starts
    with '/'.
    ```
       /foundation/src/test%20types/TestType.c3typ
       /foundation/test/src/other/OtherType.c3typ
    ```
    """
        ...
    def fullPath(self) -> str:
    """
    @return full path of this file. It includes package but doesn't include scheme. This path always starts with '/'.
    ```
       /foundation/src/test types/TestType.c3typ
       /foundation/test/src/other/OtherType.c3typ
    ```
    """
        ...
    def fullDir(self) -> str:
    """
    @return full directory path of this file. This is like #fullPath, but without the file name.
    ```
       /foundation/src/test types/
       /foundation/test/src/other/
    ```
    """
        ...
    def encodedSubPathWithCategory(self) -> str:
    """
    URL encoded sub path of the pkg path along with category. This path is
    always relative.
    ```
       src/test%20types/TestType.c3typ
       test/src/other/OtherType.c3typ
    ```
    """
        ...
    def subPathWithCategory(self) -> str:
    """
    sub path of the pkg path along with category. This path is
    always relative. It is not encoded.
    
    ```
       src/test types/TestType.c3typ
       test/src/other/OtherType.c3typ
    ```
    """
        ...
    def encodedDepPath(self) -> Union[str]:
    """
    return encoded dependency pkg path, if this is a dep overlay, i.e.isDep true.
    """
        ...
    def depPath(self) -> Union[str]:
    """
    return dependency pkg path, if this is a dep overlay, i.e.isDep true.
    """
        ...
    def isIssue(self) -> bool:
    """
    return true, if this is a path/file representing Pkg.Issue. Read content to get issues.
    """
        ...
    @classmethod
    def fromUrlOrEncodedPath(cls, urlOrEncodedPath: str) -> Pkg.Path:
    """
    @return pkg path parsed from pkg URL or encoded full path
    """
        ...
    @overload
    @classmethod
    def fromSubPath(cls, pkg: str, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
    """
    @return pkg path constructed from package name, category, and subpath
    """
        ...
    @overload
    @classmethod
    def fromSubPath(cls, pkg: Pkg, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
    """
    @return pkg path constructed from Pkg instance, category, and subpath
    """
        ...
    @classmethod
    def fromUrlOrPath(cls, urlOrPath: str) -> Pkg.File:
    """
    @return new instance of Pkg.File for meta URL or encoded full path.
    """
        ...
    def safeUrl(self) -> str:
    """
    @return Pkg URL for this path
    """
        ...
    def safeTargetType(self) -> Union[str]:
    """
    If this metadata file is for a C3 type (e.g, JavaScript code, JSON content, type DSL etc) then name of that type.
    """
        ...
    def safeTargetTypePart(self) -> Union[str]:
    """
    If this Pkg path is for a C3 type (e.g, JavaScript code, type DSL etc) then type of the part.
    """
        ...
    def isValid(self, includeTest: bool=None) -> bool:
    """
    return true, if this Pkg path is valid. not Pkg.Category.OTHER and excludeTest if not asked tobe included.
    """
        ...
    def isHidden(self) -> bool:
    """
    return true, if the file or  parent folder in the path is hidden.
    """
        ...
    def testRequirement(self) -> Union[str]:
    """
    return test {@link Action.Requirement} for a given Pkg path.
    """
        ...
    def serDeser(self) -> Union[SerDeser]:
    """
    @return serializer / deserializer for file extension of this URL or `null` if none available
    """
        ...
    def serTypeName(self, failIfMissing: bool=None) -> Union[str]:
    """
    @return the prototype name for this path. If the Pkg path does not have a type, we will attempt to read to content
     to see if it has a 'type' field. If it does, we will return the serType associated with that type. Else, we will
     return null
    """
        ...
    def isAnyText(self) -> bool:
    """
    @return true if this is a text content (not simply plain text but csv, json, xml etc).
    I.e. readString is meaningful on a Content.
    """
        ...
    def isAnyTextImpl(self, mediaType: str) -> bool:
    """
    Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
    ({@link ContentType}, {@link ContentMeta}).
    """
        ...
    def isPlainText(self) -> bool:
    """
    @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
    """
        ...
    def isBinary(self) -> bool:
    """
    @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
    """
        ...
    def isCsv(self) -> bool:
    """
    @return true if this is a csv content.
    """
        ...
    def isGreenButtonCsv(self) -> bool:
    """
    @return true if this is a green button csv content.
    """
        ...
    def isGreenButtonXml(self) -> bool:
    """
    @return true if this is a green button xml content.
    """
        ...
    def isJson(self) -> bool:
    """
    @return true if this is a json content.
    """
        ...
    def isJsonLines(self) -> bool:
    """
    @return true if this is a json content. http://jsonlines.org/.
    """
        ...
    def isYaml(self) -> bool:
    """
    @return true if this is YAML content.
    
    @see https://yaml.org/
    """
        ...
    def isXml(self) -> bool:
    """
    @return true if this is a xml content.
    """
        ...
    def isXlsx(self) -> bool:
    """
    @return true if this is a xlsx content.
    """
        ...
    def isEdi(self) -> bool:
    """
    @return true if this is a X12-EDI content.
    """
        ...
    def isC3Binary(self) -> bool:
    """
    @return true if this is c3 binary content.
    """
        ...
    def isC3Type(self) -> bool:
    """
    @return true if this is a c3 type content.
    """
        ...
    def isJavaScript(self) -> bool:
    """
    @return true if this is a JavaScript content.
    """
        ...
    def isPython(self) -> bool:
    """
    @return true if this is a Python content.
    """
        ...
    def isR(self) -> bool:
    """
    @return true if this is a R content.
    """
        ...
    def isRuby(self) -> bool:
    """
    @return true if this is a ruby source code content.
    """
        ...
    def isJava(self) -> bool:
    """
    @return true if this is a Java content.
    """
        ...
    def isTypeScript(self) -> bool:
    """
    @return true if this is a Java Script content.
    """
        ...
    def isAnyCode(self) -> bool:
    """
    @return true if this is any source code content.
    """
        ...
    def isAvro(self) -> bool:
    """
    @return true if this is an Apache Avro content.
    """
        ...
    def isParquet(self) -> bool:
    """
    @return true if this is an Apache Parquet content.
    """
        ...
    def isHdf5(self) -> bool:
    """
    @return true if this is HDF5 content.
    """
        ...
    def isHtml(self) -> bool:
    """
    @return true if this is HTML content.
    """
        ...
    def isZip(self) -> bool:
    """
    @return true if this is a Zip file content.
    """
        ...
    def isDsl(self) -> bool:
    """
    @return true if this is a Dsl file content.
    """
        ...
    def isTypeDsl(self) -> bool:
    """
    @return true if this is a Type Dsl file content.
    """
        ...
    def isUiDsl(self) -> bool:
    """
    @return true if this is a UI Dsl file content.
    """
        ...
    def isDoc(self) -> bool:
    """
    @return true if this is a (c3) Doc file content.
    """
        ...
    def isMarkdown(self) -> bool:
    """
    @return true if this is a Markdown file content.
    """
        ...
    def isImage(self) -> bool:
    """
    @return true if this is a an image content.
    """
        ...
    def isSvg(self) -> bool:
    """
    @return true if this is a SVG content.
    """
        ...
    def isPng(self) -> bool:
    """
    @return true if this is a PNG content.
    """
        ...
    def isJpeg(self) -> bool:
    """
    @return true if this is a JPEG content.
    """
        ...
    def charset(self) -> Union[str]:
    """
    @return character set if this content is text.
    """
        ...
    def parseUrl(self) -> Union[FileUrl]:
    """
    @return parsed content URL.
    """
        ...
    def safeContentType(self) -> str:
    """
    @return Content Type if provided or best guess based on file name.
    """
        ...
    def safeContentEncoding(self) -> str:
    """
    @return Content Encoding if provides or best guess based on file name.
    """
        ...
    def contentTypeParams(self) -> Union[Map[str, str]]:
    """
    @return content type custom parameters.
    """
        ...
    def parseContentType(self) -> ContentType:
    """
    @return parsed content type.
    """
        ...
    def guessContentTypeAndEncoding(self) -> Pair[str, str]:
    """
    @return content type and encoding if known or best guess based on available info; first part of the pair is
            content type.
    """
        ...
    def directoryUrl(self) -> str:
    """
    Retrieves directory url if the content location points to a file.
    """
        ...
    def filePrimaryExt(self) -> Union[str]:
    """
    Retrieves primary extension of the file referenced by content location or `null` if file doesn't have it. Primary
    extension is last token after last `.`; e.g. for `file.tar.gz` it will return `gz`.
    """
        ...
    def fileSecondaryExt(self) -> Union[str]:
    """
    Retrieves secondary extension of the file referenced by content location or `null` if file doesn't have it.
    Secondary extension is second to last token before last `.`; e.g. for `file.tar.gz` it will return `tar`.
    """
        ...
    def withFileName(self, fileName: str) -> Pkg.File:
    """
    Changes file name in this instance.
    """
        ...
    def withFileExt(self, fileExt: str) -> Pkg.File:
    """
    Changes file extension in this instance.
    """
        ...
    def hasFileExt(self, ext: str) -> bool:
    """
    Check whether this content has the specified file extension (case insensitive).
    Handles extensions with and without '.' prefix, as well as compound extensions.
    
    @param ext file extension to check, with or without period (e.g., "py" or ".py")
    @see #fileExt
    @see FileExt
    """
        ...
    def safeUrlImpl(self, url: str=None) -> Union[str]:
    """
    Helper methods for sub-types to implement safeUrl;
    
    @return url passed as param if not void or this.contentLocation if set or throws exception.
    """
        ...
    def safeETag(self) -> Union[str]:
    """
    @return {@link eTag} if present otherwise read eTag from File located at {@link contentLocation}. Throws exception
    if contentLocation is not present
    """
        ...
    def identify(self, suffix: str=None) -> Pkg.File:
    """
    Adds an id and generates an in memory content location.
    if suffix provided, will use suffix instead of random uuid.
    """
        ...
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Render content as HTML if possible.
    """
        ...
    def isReadOnly(self) -> bool:
    """
    @return true if this content can't be modified.
    """
        ...
    def isWriteOnly(self) -> bool:
    """
    @return true if this content can't be read.
    """
        ...
    def isEmpty(self, spec: FileOperationSpec=None) -> bool:
    """
    @return true if this content is empty; i.e. contentLength <= 0.
    """
        ...
    def readMetadata(self, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
    or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
    content location. Also sets hasMetadata flag so that consecutive calls are fast.
    
    If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
    
    @see FileOperationSpec.peekForMetadata
    
    @return abstract content with metadata.
    """
        ...
    def refreshMetadata(self, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
    hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
    needs to be refreshed.
    """
        ...
    def guessMetadata(self, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
    encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
    extra IO.
    
    Also sets {@link Content#hasMetadata} to true.
    
    @see FileOperationSpec.peekForMetadata
    
    @return abstract content with metadata.
    """
        ...
    def clearMetadata(self) -> Pkg.File:
    """
    Clears the content metadata; e.g. if it's known to be invalid.
    """
        ...
    def withMetadata(self, meta: ContentMeta=None) -> Pkg.File:
    """
    @return clone of this content with metadata from provided input.
    """
        ...
    @classmethod
    def metadataFields(cls) -> Array[str]:
    """
    Supported fields from {@link ContentMeta} for thus content kind; e.g. contentLength, lastModified, etc
    """
        ...
    def encodedPushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File, BytePushStream]:
    """
    @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
    contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
    higher level apis instead.
    """
        ...
    def pushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File, BytePushStream]:
    """
    @return byte push stream to be used for writing un-encoded data into this content object.
    """
        ...
    def charPushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File, CharPushStream]:
    """
    @return character push stream to be used for writing un-encoded data into this content object.
    """
        ...
    def encodedStream(self, spec: FileOperationSpec=None) -> Union[Pair[Pkg.File, ByteStream]]:
    """
    Reads the raw (possibly compressed) content as byte stream. E.g. if contentEncoding is set then data is going
    to be encoded (compressed). It is highly recommended to use higher level apis instead.
    
    @return the content as byte stream.
    """
        ...
    def stream(self, spec: FileOperationSpec=None) -> Union[ByteStream]:
    """
    Reads the de-coded (uncompressed) content as byte stream.
    
    @see FileOperationSpec.peekForMetadata
    
    @return the content as byte stream.
    """
        ...
    def charStream(self, spec: FileOperationSpec=None) -> Union[CharStream]:
    """
    Reads the de-coded (uncompressed) content as character stream.
    
    @see FileOperationSpec.peekForMetadata
    
    @return the content as character stream.
    """
        ...
    def read(self, offset: int=None, len: int=None, spec: FileOperationSpec=None) -> Union[any]:
    """
    Reads the content. IMPORTANT to avoid using read with increasing offset to read content in blocks. It is strongly
    recommended to use stream based methods in such cases.
    
    @see FileOperationSpec.peekForMetadata
    
    @param offset
              offset in bytes; defaults to 0.
    @param len
              number of bytes to read; defaults to entire file size.
    @return the content.
    """
        ...
    def readEncoded(self, spec: FileOperationSpec=None) -> Union[any]:
    """
    Reads the encoded content.
    
    @return the encoded content.
    """
        ...
    def readContentValue(self, offset: int='0', len: int=None, spec: FileOperationSpec=None) -> ContentValue:
    """
    Reads the content as ContentValue.
    
    @see FileOperationSpec.peekForMetadata
    
    @param offset
              offset in bytes defaults to 0
    @param len
              number of bytes to read; defaults to entire file size.
    @return the content.
    """
        ...
    def readString(self, offset: int=None, len: int=None, spec: FileOperationSpec=None) -> Union[str]:
    """
    Reads the content as string. IMPORTANT to avoid using readString with increasing offset to read full content in
    blocks. It is strongly recommended to use stream based methods in such cases.
    
    @see FileOperationSpec.peekForMetadata
    
    @param offset
              offset in bytes defaults to 0
    @param len
              maximum length of the string; defaults to entire file size.
    @return the content.
    """
        ...
    def readObj(self, spec: FileObjsOperSpec=None) -> Union[Obj]:
    """
    Deserializes content from file into a single C3 Type instance. Throws exception if file contains more then one
    instance.
    
    @see FileObjsOperSpec.targetType
    
    @return single object or null if file is empty
    """
        ...
    def readObjs(self, spec: FileObjsOperSpec=None) -> Union[Stream[Obj]]:
    """
    Deserializes content from file into a list of C3 Type instances.
    
    @see FileObjsOperSpec.targetType
    
    @return stream of objects
    """
        ...
    def readJson(self, spec: FileObjsOperSpec=None) -> Union[any]:
    """
    Deserializes content from file into a json objects.
    
    @return a json object
    """
        ...
    def readJsonLines(self, spec: FileObjsOperSpec=None) -> Union[Stream[any]]:
    """
    Deserializes content from file into a list of json objects.
    
    @return stream of json objects
    """
        ...
    def readCsvHeader(self, spec: FileObjsOperSpec=None) -> Union[Array[str]]:
    """
    Reads CSV file header if content contains it or retrieves header from file metadata or spec#csvHeader.
    
    @return CSV header
    """
        ...
    def readCsvRows(self, spec: FileObjsOperSpec=None) -> Union[Stream[Array[str]]]:
    """
    Deserializes content from CSV content into a stream of row i.e. column values. Note that first element in the
    stream will be CSV header read either from content or from it's metadata or from spec#csvHeader.
    
    @return stream of parsed CSV rows
    """
        ...
    def readFirstLine(self) -> Union[str]:
    """
    @return the first line of the text content.
    """
        ...
    def readLines(self) -> Union[Stream[str]]:
    """
    @returns text content lines.
    """
        ...
    @overload
    def grep(self, patterns: Array[RegexPattern], spec: Content.GrepSpec=None) -> Content.GrepResult:
    """
    Match regex patterns against content lines.
    
    @param patterns Array of compiled regex patterns to match
    @param spec Controls matching behavior (mode, limits, etc)
    @return Match results
    """
        ...
    @overload
    def grep(self, pattern: str) -> StringPatternMatch:
    """
    Match a single regex pattern against content lines.
    Returns the first match found with captured groups.
    
    @param pattern Regex pattern string to match
    @return First match result (or no-match result with score=0 if not found)
    """
        ...
    @overload
    def grep(self, pattern: RegexPattern) -> StringPatternMatch:
    """
    Match a single regex pattern against content lines.
    Returns the first match found with captured groups.
    
    @param pattern Compiled regex pattern to match
    @return First match result (or no-match result with score=0 if not found)
    """
        ...
    def writeStream(self, content: ByteStream, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's content with provided binary content.
    
    @param content
              content that needs to be written
    """
        ...
    def writeInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's content with provided binary content.
    """
        ...
    def writeZipInputStream(self, zipInputStream: Any, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces its content with provided binary content from zipInputStream
    """
        ...
    def writeEncodedStream(self, encodedContent: ByteStream, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    
    @param content
              encoded content that needs to be written
    """
        ...
    def writeEncodedInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    """
        ...
    def write(self, content: any, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's content with provided binary content.
    
    @param content
              content that needs to be written
    """
        ...
    def writeEncoded(self, encodedContent: any, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    
    @param content
              encoded content that needs to be written
    """
        ...
    def writeString(self, content: str, spec: FileOperationSpec=None) -> Pkg.File:
    """
    Truncates file and replaces it's content with provided string.
    
    @param content
              content that needs to be written
    """
        ...
    def writeObj(self, obj: Obj, spec: FileObjsOperSpec=None) -> Pkg.File:
    """
    Serializes content from a single c3 objects into a file.
    
    @param obj
             obj that needs to be written
    @param spec
             file operation spec giving more information about how obj should be written
    """
        ...
    def writeObjs(self, objs: Stream[Obj], spec: FileObjsOperSpec=None) -> Pair[Content, int]:
    """
    Serializes content from a list of c3 objects into a file.
    
    @param objs
             objs that need to be written
    @param spec
             file operation spec giving more information about how objs should be written
    @return pair of update instance of this content and number of objs written
    """
        ...
    def startWriteObjs(self, spec: FileObjsOperSpec=None) -> Pair[Pkg.File, PushStream[Obj]]:
    """
    Serializes content from a list of c3 objects into a file.
    
    @param objs
             objs that need to be written
    @param spec
             file operation spec giving more information about how objs should be written
    @return pair of update instance of this content and number of objs written
    """
        ...
    def serType(self, spec: FileObjsOperSpec=None) -> Union[Type]:
    """
    Serialization target type if this content is instance(s) of C3 type.
    
    @see FileObjsOperSpec.targetType
    """
        ...
    def transformSource(self, transformSpec: SourceTransformSpec=None, spec: FileObjsOperSpec=None) -> Union[SourceTransformResult]:
    """
    If this content target type is Source type then transform content into corresponding C3 Type instances.
    Source Type is determined from content itself (via #serType).
    """
        ...
    def contentTypeAndEncodingMatch(self, contentType: str=None, contentEncoding: str=None, spec: FileOperationSpec=None) -> bool:
    """
    Checks if content type and encoding is matching the given values.
    """
        ...
    def compress(self, contentEncoding: str=None, spec: FileCompressSpec=None) -> Pkg.File:
    """
    Compresses the given file content. Compressed file will have a different extension.
    
    @param contentEncoding
               compression content encoding; default is gzip.
    """
        ...
    def uncompress(self, spec: FileCompressSpec=None) -> Pkg.File:
    """
    Uncompresses file. Removes compression specific extension.
    """
        ...
    def transcode(self, contentType: str, contentEncoding: str, spec: FileCompressSpec=None) -> Pkg.File:
    """
    Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
    
    @param contentType
               new content type.
    @param contentEncoding
               new content encoding.
    """
        ...
    def copyContentTo(self, target: Pkg.File, spec: FileOperationSpec=None) -> None:
    """
    Copies content to a given target.
    """
        ...
    def copyContentToStream(self, target: BytePushStream, doNotCloseTarget: bool=None, spec: FileOperationSpec=None) -> None:
    """
    Copies content to a given target.
    """
        ...
    def cksum(self, useEncodedContent: bool=None, spec: FileOperationSpec=None) -> int:
    """
    Computes the cksum of the file (same as unix utility cksum)
    @param userEncodedContent
              If true, the cksum will skill the decoding of the file
    @return the checksum of the file
    """
        ...
    def safeMd5(self, spec: FileOperationSpec=None) -> str:
    """
    @return md5 from metadata if it exists otherwise compute from content and return.
    """
        ...
    def osGrep(self, pattern: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `grep` utility over this content.
    """
        ...
    def osSed(self, script: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `sed` utility over this content.
    """
        ...
    def osAwk(self, program: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `awk` utility over this content.
    """
        ...
    def osSort(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `sort` utility over this content.
    """
        ...
    def osTSort(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `tsort` utility over this content.
    """
        ...
    def osUniq(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `uniq` utility over this content.
    """
        ...
    def osExpand(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `expand` utility over this content.
    """
        ...
    def osUnexpand(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `unexpand` utility over this content.
    """
        ...
    def osHead(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `head` utility over this content.
    """
        ...
    def osTail(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `tail` utility over this content.
    """
        ...
    def osWc(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `wc` utility over this content.
    """
        ...
    def osFold(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
    """
    @return result of OS `fold` utility over this content.
    """
        ...
    def osCommands(self, commands: Array[str], spec: FileOperationSpec=None) -> ByteStream:
    """
    @return result of OS command pipeline over this content.
    """
        ...
    def toContentValue(self, spec: FileOperationSpec=None) -> ContentValue:
    """
    Reads this content as ContentValue.
    """
        ...
    @classmethod
    def nullContent(cls) -> Content:
    """
    @return content that is always empty even if data is written to it.
    """
        ...
    @classmethod
    def encode(cls, content: str, contentType: str=None, contentEncoding: str=None) -> any:
    """
    Encodes given string into a binary based on contentType and contentEncoding.
    """
        ...
    @classmethod
    def decode(cls, content: any, contentType: str=None, contentEncoding: str=None) -> str:
    """
    Decodes given binary into a string based on contentType and contentEncoding.
    """
        ...
    def filterContentLines(self, action: Callable[[Union[str]], Union[str]]=None) -> Union[CharStream]:
    """
    Applied lambda action to filter content and return stream of lines
    """
        ...
    def inferType(self, spec: InferTypeSpec=None) -> InferValueTypeResult:
    """
    Infer serialization type from this content.
    """
        ...
    def avroParquetSchema(self, failIfMissing: bool=None) -> Union[str]:
    """
    returns Avro and parquet in stringified json.
    """
        ...
    @overload
    def concat(self, other: Content) -> Pkg.File:
    """
    Creates a new Content by merging the two contents
    """
        ...
    @overload
    def concat(self, other: any) -> Pkg.File:
    """
    Creates a new Content by merging the incoming binary data with current content
    """
        ...
    def hyperLogLogForCsv(self) -> Map[int, HyperLogLog]:
        ...
    @classmethod
    def fromStream(cls, stream: Stream[Any], contentType: str=None, contentEncoding: str=None) -> Content:
    """
    Creates the read once content from provided C3 stream
    """
        ...
    @classmethod
    def fromByteStream(cls, encodedStream: ByteStream, contentType: str=None, contentEncoding: str=None) -> Content:
    """
    Creates the read once content from provided C3 byte-stream
    """
        ...
    @classmethod
    def fromCharStream(cls, charStream: CharStream, contentType: str=None, contentEncoding: str=None) -> Content:
    """
    Creates the read once content from provided C3 byte-stream
    """
        ...
    @classmethod
    def fromBinary(cls, encodedBinary: any, contentType: str=None, contentEncoding: str=None) -> Content:
    """
    Creates the content value from a binary value.
    """
        ...
    @classmethod
    def fromText(cls, text: str, contentType: str=None, contentEncoding: str=None) -> Content:
    """
    Creates the content value from a string value.
    """
        ...
    @classmethod
    def fromLambda(cls, contentProducer: Callable[[], Union[any]]=None) -> Union[Content]:
    """
    Creates the content from lambda
    """
        ...
    @classmethod
    def fromJavaOutputStream(cls, outputStream: Any=None) -> Content:
    """
    Creates write once content from a Java OutputStream.
    """
        ...
    @classmethod
    def fromJavaResource(cls, javaResourcePath: str, failIfMissing: bool=None) -> Content:
    """
    Creates the content value from a Java resource.
    """
        ...
    @classmethod
    def readLocalFiles(cls, url: str) -> Array[Content]:
    """
    Creates a list of content values from files.
    """
        ...
    def callWithRetry(self, supplier: Callable[[], Union[T]], desc: str, spec: FileOperationSpec=None) -> Union[T]:
    """
    Retry logic is dictated by {@link FileSystemConfig}
    """
        ...
    def fs(self) -> FileSystem:
    """
    Retrieves file-system for this file.
    """
        ...
    def fileMeta(self, refresh: bool=None) -> FileMeta:
    """
    Retrieves corresponding cached {@link FileMeta}.
    
    If `refresh` parameter is set then will use current metadata of the file to refresh cached state. If this instance
    does not have metadata will read it from file-system.
    
    Note that this method will always return {@link FileMeta} even if file metadata is not cached in which case
    {@link FileMeta#isCached} method will return `false`.
    """
        ...
    def externalUrl(self) -> Union[str]:
    """
    Retrieves external URL for this file.
    """
        ...
    @classmethod
    def createFile(cls, urlOrEncodedPath: str, content: any=None, contentType: str=None, contentEncoding: str=None, spec: FileOperationSpec=None) -> File:
    """
    Creates a new file with given content and meta.
    """
        ...
    def exists(self, spec: FileOperationSpec=None) -> bool:
    """
    Check if file exists.
    """
        ...
    def touch(self, spec: FileOperationSpec=None) -> File:
    """
    Updates file access and modification times.
    """
        ...
    def delete(self, spec: DeleteFileOperationSpec=None) -> None:
    """
    Deletes this file.
    """
        ...
    def copy(self, destUrlOrEncodedPath: str, spec: FileOperationSpec=None) -> File:
    """
    Copies file to another destination.
    
    @param destUrlOrEncodedPath
                complete path to destination file. Cannot be a directory path or same path as src file.
    """
        ...
    def move(self, destUrlOrEncodedPath: str, spec: FileOperationSpec=None) -> File:
    """
    Moves/renames file.
    
    @param destUrlOrEncodedPath
                complete path to destination file. Cannot be a directory path or same path as src file.
    """
        ...
    def truncate(self) -> File:
    """
    Truncates the given file and makes it empty.
    """
        ...
    def replaceContentType(self, contentType: str, spec: FileOperationSpec=None) -> File:
    """
    Replaces the content type without modifying the content.
    
    @param contentType
               new content type.
    """
        ...
    def replaceContentEncoding(self, contentEncoding: str, spec: FileOperationSpec=None) -> File:
    """
    Replaces the content encoding without modifying the content.
    
    @param contentEncoding
               new content encoding.
    """
        ...
    def replaceContentTypeAndEncoding(self, contentType: str, contentEncoding: str, spec: FileOperationSpec=None) -> File:
    """
    Replaces the content type and encoding without modifying the content.
    
    @param contentType
               new content type.
    @param contentEncoding
               new content encoding.
    """
        ...
    def zip(self, spec: FileCompressSpec=None) -> File:
    """
    Creates a ZIP file from the given file content. Compressed file will have a .zip extension.
    """
        ...
    def unzipFirst(self, rootUrlOrEncodedPath: str=None, spec: FileCompressSpec=None) -> Union[File]:
    """
    Uncompresses first entry in a ZIP file.
    """
        ...
    def unzip(self, rootUrlOrEncodedPath: str=None, spec: FileCompressSpec=None) -> Union[Array[File]]:
    """
    Uncompresses all entries in a ZIP file.
    """
        ...
    def cachedFile(self, spec: FileOperationSpec=None) -> File:
    """
    @return cached copy i.e. local file with same metadata and content.
    """
        ...
    @classmethod
    def getRetrySpec(cls, spec: FileOperationSpec=None, scheme: str=None) -> RetrySpec:
    """
    @return the retry spec for a file operation. If a retry spec is present with the FileOperationSpec, that
    will take priority, otherwise it will default to using the FileSystemConfigChild corresponding to the scheme
    """
        ...
    def parentDirectories(self) -> Union[Array[str]]:
    """
    @return list of parent directory names starting from root. If file doesn't have any parent directory i.e. located
            immediately under file-system mount then returns empty.
    """
        ...
    def parentDirectoryUrls(self) -> Array[str]:
    """
    @return list of parent directory urls starting from mount URL.
    """
        ...
    def eachParentDirectory(self, action: Callable[[Union[str]]]) -> int:
    """
    Calls provided action by passing URL of each parent directory of this file starting from root.
    
    E.g. for `s3://data-load/mount/dir1/dir2/file` located under `s3://data-load/mount/` mount URL this method will
    call `action` 3 times with:
    - `s3://data-load/mount/`
    - `s3://data-load/mount/dir1/`
    - `s3://data-load/mount/dir1/dir2/`
    """
        ...
    def apiEndpoint(self, httpMethod: str=None, fullyQualified: bool=None) -> str:
    """
    @return /file/ API endpoint for this file. It can be used to download (or upload) File content. By default it will
           return the relative endpoint (to the running cluster) for GET operations. This is helpful for placing
           download link in the UI.
    """
        ...
    def isZipFile(self) -> bool:
    """
    @return true if this is an ZIP file.
    """
        ...
    def asZipFile(self) -> Union[ZipFile]:
    """
    @return instance of ZipFile or null if this is not ZipFile.
    """
        ...
    def isS3File(self) -> bool:
    """
    @return true if this is an S3File.
    """
        ...
    def asS3File(self) -> Union[S3File]:
    """
    @return instance of S3File or null if this is not S3File.
    """
        ...
    def isAzureFile(self) -> bool:
    """
    @return true if this is an AzureFile.
    """
        ...
    def asAzureFile(self) -> Union[AzureFile]:
    """
    @return instance of AzureFile or null if this is not AzureFile.
    """
        ...
    def isLocked(self, spec: FileOperationSpec=None) -> bool:
    """
    @return true if the file is locked/leased.
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    def breakLock(self, spec: FileOperationSpec=None) -> None:
    """
    Breaks the lock/lease on the file (or its blob), if it is locked/leased.
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    def generatePresignedUrl(self, httpMethod: str='\'GET\'', duration: str='\'1h\'', spec: FileOperationSpec=None) -> str:
    """
    Generates pre-signed URL that can be used to upload/download files to/from object storage using HTTP.
    
      1. Content-Type has to be specified for PUT operation.
      2. Content-Length has to be specified for PUT operation.
      3. x-ms-blob-type has to be specified for PUT operation on AzureFile. <BlockBlob | PageBlob | AppendBlob>
    
    @param httpMethod
             Type of HTTP request, could be GET, PUT, POST, PATCH, or DELETE.
    @param duration
             Specifies how long the presignedUrl is valid. See Duration.fromString for more details.
    @param spec
             Provides options for various File actions.
    """
        ...
    def isChildOf(self, url: str=None) -> bool:
    """
    @return True if the current file is a child of the provided url.
    """
        ...
    @classmethod
    def fromMetaPath(cls, path: Pkg.Path) -> Pkg.File:
    """
    New Pkg.File from a given Pkg.Path.
    """
        ...
    def withMetaPath(self, path: Pkg.Path) -> Pkg.File:
    """
    New Pkg.File with a given Pkg.Path.
    """
        ...
    def inMemoryCopy(self) -> Pkg.File.Value:
    """
    @return in memory copy of this Pkg.File with embedded content. This means read* methods don't need to perform
    any IO.
    """
        ...
    @classmethod
    def fromFile(cls, file: File) -> Pkg.File:
        ...
    @classmethod
    def fromDb(cls, dbMetaFile: Pkg.File.Db) -> Pkg.File:
        ...
    def deps(self) -> Union[PkgFileDeps]:
        ...
    
    class Db(Pkg.Path, ContentMeta):
        """
        Copy of all Pkg files in the database. Should not be used directly use {@link Pkg.Store.Db} instead.
        
        @remarks this represents a made instance of Pkg.File.Db
        """
        
        TEST_FILE_PATTERN: Optional[str]=None
        """
        Glob pattern to determine if a file is a test file.
        """

        url: Optional[str]
        """
        Pkg URL for this path.
        
        @see Pkg.Url
        """

        scheme: Optional[str]=None
        """
        scheme of this pkg path url.
        """

        package: Optional[str]=None
        """
        The name of package Pkg file belongs to.
        """

        category: Optional[str]=None
        """
        Category for Pkg file.
        """

        encodedSubPath: Optional[str]=None
        """
        URL encoded sub path of the Pkg file excluding repository, package and category information. This path is
        always relative.
        ```
           test%20types/TestType.c3typ
           other/OtherType.c3typ
        ```
        """

        overlay: Optional[str]=None
        """
        overlay of the path, if the path is part of one. There can only be one overlay.
        """

        depPkgName: Optional[str]=None
        """
        returns the dependency package name in the path, if this has `dep` overlay.
        ```
          /pkgA/dep/pkgB/src/TestType.c3typ -> pkgB
          /pkgA/src/TestA.c3typ -> null
        ```
        """

        depPkgOverlay: Optional[str]=None
        """
        If the overlay is DEP, and the dependency package has it's own overlay, it is the dependency package's overlay.
        This can't be another Overlay.Dep.
        ```
          fromString('/pkgA/dep/pkgB/test/src/TestType.c3typ').depPkgOverlay() -> test
          fromString('/pkgA/dep/pkgB/gen/cache/TypeMetaDeps%23dts/TestType.c3typ.d.ts').depPkgOverlay() -> gen
        ```
        """

        targetType: Optional[str]=None
        """
        Local cache of the corresponding Pkg.File.targetType method call.
        """

        contentEncoding: Optional[str]=None
        """
        A modifier to the media-type. When present, its value indicates what additional content
        codings have been applied to the data, and thus what decoding mechanisms must be
        applied in order to obtain the media-type referenced by the contentType.
        
        It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
        """

        contentLanguage: Optional[str]=None
        """
        Describes the natural language(s) of the intended audience.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
        """

        contentLength: Optional[int]=None
        """
        The size of the entity-body, in bytes.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
        """

        contentLocation: Optional[str]=None
        """
        The resource location for the entity enclosed in the message when that entity is accessible from a location
        separate from the requested resource's URI.
        
        It is recommended to use #safeUrl instead.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
        """

        contentType: Optional[str]=None
        """
        The media type of the content (MIME type).
        This includes contentTypeParams such as delimiters, characters as well.
        To specify delimiters please see {@link ContentType}
        and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
        Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
        It is recommended to use #safeContentType instead as it will attempt to guess content type.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
        """

        contentDisposition: Optional[str]=None
        """
        Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
        attachment locally.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
        """

        eTag: Optional[str]=None
        """
        The ETag response-header field provides the current value of the entity tag for the requested variant.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
        """

        lastModified: Optional[datetime]=None
        """
        The date and time at which the variant was last modified.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
        """

        lastModifiedBy: Optional[str]=None
        """
        Id of user / identity who last last modified this content.
        """

        contentMD5: Optional[str]=None
        """
        An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
        as well as supporting content-based caching (ETag).
        """

        contentSHA1: Optional[str]=None
        """
        An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
        as well as supporting content-based caching (ETag).
        """

        id: Optional[str]
        """
        A unique identifier that can be manually assigned or generated automatically during object creation. This
        identifier cannot be altered after the object has been persisted.
        """

        versionEdits: Optional[Array[VersionEdit]]=None
        """
        Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
        crucial for accessing previous versions of an object and is entirely managed by the system.
        
        @see Ann.Db#versionHistory
        """

        name: Optional[str]=None
        """
        Name of the Obj instance
        """

        meta: Optional[Meta]=None
        """
        Various system fields.
        """

        version: Optional[int]=None
        """
        Version number used for optimistic concurrency.  Automatically managed by the system.
        
        Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
        be done with great caution.
        """

        typeWithBindings: Optional[Type]=None
        """
        Persists concrete type with bindings for generic types where instance has parameter bindings
        """

        storeName: Optional[str]
        """
        Name of Pkg.Store.Db, that can access this file. pkgName with version or DEFAULT.
        """

        encodedContent: Optional[any]=None
        """
        The actual binary content of the file.
        """

        packageSequence: Optional[int]=None
        """
        Sequence number for the package of this metadata file.
        """

        contentHash: Optional[str]=None
        """
        Fingerprint of content.
        
        @see Pkg#fileFingerprint
        """
        def __init__(self, TEST_FILE_PATTERN: Optional[str]=None, url: Optional[str]=None, scheme: Optional[str]=None, package: Optional[str]=None, category: Optional[str]=None, encodedSubPath: Optional[str]=None, overlay: Optional[str]=None, depPkgName: Optional[str]=None, depPkgOverlay: Optional[str]=None, targetType: Optional[str]=None, contentEncoding: Optional[str]=None, contentLanguage: Optional[str]=None, contentLength: Optional[int]=None, contentLocation: Optional[str]=None, contentType: Optional[str]=None, contentDisposition: Optional[str]=None, eTag: Optional[str]=None, lastModified: Optional[datetime]=None, lastModifiedBy: Optional[str]=None, contentMD5: Optional[str]=None, contentSHA1: Optional[str]=None, id: Optional[str]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, storeName: Optional[str]=None, encodedContent: Optional[any]=None, packageSequence: Optional[int]=None, contentHash: Optional[str]=None) -> None: ...

        def toString(self) -> str:
        """
        @return a string representation of Pkg.Path; same as #encodedFullPath.
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Pkg.File.Db]:
        """
        Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
        provide deserialization.
        
        fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
        of called-on type, but perhaps not the same type.
        
        E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
        
        @see #toString
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Pkg.File.Db]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File.Db:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Pkg.File.Db:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Db:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File.Db:
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
        def fromJson(cls, json: any) -> Union[Pkg.File.Db]:
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
        def fromJsonString(cls, json: str) -> Union[Pkg.File.Db]:
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
        def fromXmlString(cls, xml: str) -> Union[Pkg.File.Db]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File.Db]:
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
        def replaceType(self, old: Type, new: Type) -> Pkg.File.Db:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Db:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Db:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Db]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Db]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File.Db:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Db:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Db:
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
        def validateObj(self) -> Pkg.File.Db:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File.Db:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File.Db:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File.Db:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File.Db:
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
        def withoutFieldAtPath(self, path: str) -> Pkg.File.Db:
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
        def withoutField(self, field: str) -> Pkg.File.Db:
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
        def withoutField(self, field: FieldType) -> Pkg.File.Db:
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
        def withoutFields(self, fields: Array[str]) -> Pkg.File.Db:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File.Db:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Pkg.File.Db:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File.Db:
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
        def defaultField(self, field: str) -> Pkg.File.Db:
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
        def defaultField(self, field: FieldType) -> Pkg.File.Db:
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
        def unsetField(self, field: str) -> Pkg.File.Db:
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
        def unsetField(self, field: FieldType) -> Pkg.File.Db:
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
        def removeField(self, field: str) -> Pkg.File.Db:
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
        def removeField(self, field: FieldType) -> Pkg.File.Db:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File.Db:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File.Db:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File.Db:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File.Db:
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
        def mergeJson(self, json: any) -> Pkg.File.Db:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File.Db:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File.Db:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Pkg.File.Db]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File.Db]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File.Db]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Pkg.File.Db]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Pkg.File.Db]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File.Db]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File.Db]]:
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
        def toBuilder(self) -> ObjBuilder[Pkg.File.Db]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Pkg.File.Db]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File.Db:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Db:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File.Db:
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
        def afterMake(self) -> Pkg.File.Db:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Pkg.File.Db:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File.Db]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File.Db:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def isTest(self) -> bool:
        """
        True if this is a test file i.e. overlay or depOverlay  is test. 'test' overlay should contain only things used
        for testing that package.
        ```
          fromString('/pkgA/dep/pkgB/test/src/SrcType.c3typ').isTest() -> true
          fromString('/pkgA/test/src/TestType.c3typ').isTest() -> true
        ```
        """
            ...
        def isGen(self) -> bool:
        """
        True if this is a generated file i.e. overlay or depOverlay  is gen. . It will be created when running code-gen.
        """
            ...
        def isDep(self) -> bool:
        """
        True, if this is a dependency package path.
        ` /pkgA/dep/pkgB/src/TestType.c3typ ->  true`
        """
            ...
        def isSrc(self) -> bool:
        """
        @return true if this is a source file.
        """
            ...
        def isSeed(self) -> bool:
        """
        @return true if this is a SEED data file.
        """
            ...
        def isPackage(self) -> bool:
        """
        @return true if this is a c3Pkg.
        """
            ...
        def isPackageLock(self) -> bool:
        """
        @return true if this is a c3pkg.lock
        """
            ...
        def isOther(self) -> bool:
        """
        @return true if this is a Pkg.Category.OTHER.
        """
            ...
        def isCache(self) -> bool:
        """
        @return true if this is a {@link Pkg.Category#CACHE}
        """
            ...
        def isUi(self) -> bool:
        """
        @return true if this is a Pkg.Category.UI
        """
            ...
        def isUiMeta(self) -> bool:
        """
        @return true if this is a Pkg.Category.UI and conforms to application/kind/filename.ext.
        """
            ...
        def isData(self) -> bool:
        """
        @return true if this is a Pkg.Category.DATA
        """
            ...
        def uiApplicationId(self) -> Union[str]:
        """
        @return Ui Application id, for a Ui file.
        """
            ...
        def uiMetaKind(self) -> Union[str]:
        """
        @return kind of Ui Pkg file.
        """
            ...
        def subPath(self) -> str:
        """
        @return sub path of this file under the package including file name. Sub path is always relative.
        ```
           test types/TestType.c3typ
           other/OtherType.c3typ
        ```
        """
            ...
        def encodedFileName(self) -> str:
        """
        @return URL encoded file name including the extension.
        """
            ...
        def fileName(self) -> str:
        """
        @return file name of this file.
        """
            ...
        def fileExt(self) -> Union[str]:
        """
        @return file extension of this file, including the leading dot (e.g., ".c3typ", ".json").
        """
            ...
        def fileExtWithoutDot(self) -> Union[str]:
        """
        @return file extension of this file without the leading dot (e.g., "c3typ", "json"), or null if no extension.
        """
            ...
        def fileNameNoExt(self) -> str:
        """
        @return fine name of this file without file extension.
        """
            ...
        def encodedFullPath(self) -> str:
        """
        @return encoded full path of this file. It includes package but doesn't include scheme. Full path always starts
        with '/'.
        ```
           /foundation/src/test%20types/TestType.c3typ
           /foundation/test/src/other/OtherType.c3typ
        ```
        """
            ...
        def fullPath(self) -> str:
        """
        @return full path of this file. It includes package but doesn't include scheme. This path always starts with '/'.
        ```
           /foundation/src/test types/TestType.c3typ
           /foundation/test/src/other/OtherType.c3typ
        ```
        """
            ...
        def fullDir(self) -> str:
        """
        @return full directory path of this file. This is like #fullPath, but without the file name.
        ```
           /foundation/src/test types/
           /foundation/test/src/other/
        ```
        """
            ...
        def encodedSubPathWithCategory(self) -> str:
        """
        URL encoded sub path of the pkg path along with category. This path is
        always relative.
        ```
           src/test%20types/TestType.c3typ
           test/src/other/OtherType.c3typ
        ```
        """
            ...
        def subPathWithCategory(self) -> str:
        """
        sub path of the pkg path along with category. This path is
        always relative. It is not encoded.
        
        ```
           src/test types/TestType.c3typ
           test/src/other/OtherType.c3typ
        ```
        """
            ...
        def encodedDepPath(self) -> Union[str]:
        """
        return encoded dependency pkg path, if this is a dep overlay, i.e.isDep true.
        """
            ...
        def depPath(self) -> Union[str]:
        """
        return dependency pkg path, if this is a dep overlay, i.e.isDep true.
        """
            ...
        def isIssue(self) -> bool:
        """
        return true, if this is a path/file representing Pkg.Issue. Read content to get issues.
        """
            ...
        @classmethod
        def fromUrlOrEncodedPath(cls, urlOrEncodedPath: str) -> Pkg.Path:
        """
        @return pkg path parsed from pkg URL or encoded full path
        """
            ...
        @overload
        @classmethod
        def fromSubPath(cls, pkg: str, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
        """
        @return pkg path constructed from package name, category, and subpath
        """
            ...
        @overload
        @classmethod
        def fromSubPath(cls, pkg: Pkg, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
        """
        @return pkg path constructed from Pkg instance, category, and subpath
        """
            ...
        @classmethod
        def fromUrlOrPath(cls, urlOrPath: str) -> Pkg.Path:
            ...
        def safeUrl(self) -> str:
        """
        @return Pkg URL for this path
        """
            ...
        def safeTargetType(self) -> Union[str]:
        """
        If this Pkg path is for a C3 type (e.g, JavaScript code, JSON content, type DSL etc) then name of that type.
        """
            ...
        def safeTargetTypePart(self) -> Union[str]:
        """
        If this Pkg path is for a C3 type (e.g, JavaScript code, type DSL etc) then type of the part.
        """
            ...
        def isValid(self, includeTest: bool=None) -> bool:
        """
        return true, if this Pkg path is valid. not Pkg.Category.OTHER and excludeTest if not asked tobe included.
        """
            ...
        def isHidden(self) -> bool:
        """
        return true, if the file or  parent folder in the path is hidden.
        """
            ...
        def testRequirement(self) -> Union[str]:
        """
        return test {@link Action.Requirement} for a given Pkg path.
        """
            ...
        def serDeser(self) -> Union[SerDeser]:
        """
        @return serializer / deserializer for file extension of this URL or `null` if none available
        """
            ...
        def serTypeName(self, failIfMissing: bool=None) -> Union[str]:
        """
        @return the prototype name for this path. If the Pkg path does not have a type, we will attempt to read to content
         to see if it has a 'type' field. If it does, we will return the serType associated with that type. Else, we will
         return null
        """
            ...
        def isAnyText(self) -> bool:
        """
        @return true if this is a text content (not simply plain text but csv, json, xml etc).
        I.e. readString is meaningful on a Content.
        """
            ...
        def isAnyTextImpl(self, mediaType: str) -> bool:
        """
        Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
        ({@link ContentType}, {@link ContentMeta}).
        """
            ...
        def isPlainText(self) -> bool:
        """
        @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
        """
            ...
        def isBinary(self) -> bool:
        """
        @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
        """
            ...
        def isCsv(self) -> bool:
        """
        @return true if this is a csv content.
        """
            ...
        def isGreenButtonCsv(self) -> bool:
        """
        @return true if this is a green button csv content.
        """
            ...
        def isGreenButtonXml(self) -> bool:
        """
        @return true if this is a green button xml content.
        """
            ...
        def isJson(self) -> bool:
        """
        @return true if this is a json content.
        """
            ...
        def isJsonLines(self) -> bool:
        """
        @return true if this is a json content. http://jsonlines.org/.
        """
            ...
        def isYaml(self) -> bool:
        """
        @return true if this is YAML content.
        
        @see https://yaml.org/
        """
            ...
        def isXml(self) -> bool:
        """
        @return true if this is a xml content.
        """
            ...
        def isXlsx(self) -> bool:
        """
        @return true if this is a xlsx content.
        """
            ...
        def isEdi(self) -> bool:
        """
        @return true if this is a X12-EDI content.
        """
            ...
        def isC3Binary(self) -> bool:
        """
        @return true if this is c3 binary content.
        """
            ...
        def isC3Type(self) -> bool:
        """
        @return true if this is a c3 type content.
        """
            ...
        def isJavaScript(self) -> bool:
        """
        @return true if this is a JavaScript content.
        """
            ...
        def isPython(self) -> bool:
        """
        @return true if this is a Python content.
        """
            ...
        def isR(self) -> bool:
        """
        @return true if this is a R content.
        """
            ...
        def isRuby(self) -> bool:
        """
        @return true if this is a ruby source code content.
        """
            ...
        def isJava(self) -> bool:
        """
        @return true if this is a Java content.
        """
            ...
        def isTypeScript(self) -> bool:
        """
        @return true if this is a Java Script content.
        """
            ...
        def isAnyCode(self) -> bool:
        """
        @return true if this is any source code content.
        """
            ...
        def isAvro(self) -> bool:
        """
        @return true if this is an Apache Avro content.
        """
            ...
        def isParquet(self) -> bool:
        """
        @return true if this is an Apache Parquet content.
        """
            ...
        def isHdf5(self) -> bool:
        """
        @return true if this is HDF5 content.
        """
            ...
        def isHtml(self) -> bool:
        """
        @return true if this is HTML content.
        """
            ...
        def isZip(self) -> bool:
        """
        @return true if this is a Zip file content.
        """
            ...
        def isDsl(self) -> bool:
        """
        @return true if this is a Dsl file content.
        """
            ...
        def isTypeDsl(self) -> bool:
        """
        @return true if this is a Type Dsl file content.
        """
            ...
        def isUiDsl(self) -> bool:
        """
        @return true if this is a UI Dsl file content.
        """
            ...
        def isDoc(self) -> bool:
        """
        @return true if this is a (c3) Doc file content.
        """
            ...
        def isMarkdown(self) -> bool:
        """
        @return true if this is a Markdown file content.
        """
            ...
        def isImage(self) -> bool:
        """
        @return true if this is a an image content.
        """
            ...
        def isSvg(self) -> bool:
        """
        @return true if this is a SVG content.
        """
            ...
        def isPng(self) -> bool:
        """
        @return true if this is a PNG content.
        """
            ...
        def isJpeg(self) -> bool:
        """
        @return true if this is a JPEG content.
        """
            ...
        def charset(self) -> Union[str]:
        """
        @return character set if this content is text.
        """
            ...
        def parseUrl(self) -> Url:
        """
        @return parsed content URL.
        """
            ...
        def safeContentType(self) -> str:
        """
        @return Content Type if provided or best guess based on file name.
        """
            ...
        def safeContentEncoding(self) -> str:
        """
        @return Content Encoding if provides or best guess based on file name.
        """
            ...
        def contentTypeParams(self) -> Union[Map[str, str]]:
        """
        @return content type custom parameters.
        """
            ...
        def parseContentType(self) -> ContentType:
        """
        @return parsed content type.
        """
            ...
        def guessContentTypeAndEncoding(self) -> Pair[str, str]:
        """
        @return content type and encoding if known or best guess based on available info; first part of the pair is
                content type.
        """
            ...
        def directoryUrl(self) -> str:
        """
        Retrieves directory url if the content location points to a file.
        """
            ...
        def filePrimaryExt(self) -> Union[str]:
        """
        Retrieves primary extension of the file referenced by content location or `null` if file doesn't have it. Primary
        extension is last token after last `.`; e.g. for `file.tar.gz` it will return `gz`.
        """
            ...
        def fileSecondaryExt(self) -> Union[str]:
        """
        Retrieves secondary extension of the file referenced by content location or `null` if file doesn't have it.
        Secondary extension is second to last token before last `.`; e.g. for `file.tar.gz` it will return `tar`.
        """
            ...
        def withFileName(self, fileName: str) -> Pkg.File.Db:
        """
        Changes file name in this instance.
        """
            ...
        def withFileExt(self, fileExt: str) -> Pkg.File.Db:
        """
        Changes file extension in this instance.
        """
            ...
        def hasFileExt(self, ext: str) -> bool:
        """
        Check whether this content has the specified file extension (case insensitive).
        Handles extensions with and without '.' prefix, as well as compound extensions.
        
        @param ext file extension to check, with or without period (e.g., "py" or ".py")
        @see #fileExt
        @see FileExt
        """
            ...
        def safeUrlImpl(self, url: str=None) -> Union[str]:
        """
        Helper methods for sub-types to implement safeUrl;
        
        @return url passed as param if not void or this.contentLocation if set or throws exception.
        """
            ...
        def safeETag(self) -> Union[str]:
        """
        @return {@link eTag} if present otherwise read eTag from File located at {@link contentLocation}. Throws exception
        if contentLocation is not present
        """
            ...
        def identify(self, suffix: str=None) -> Pkg.File.Db:
        """
        Adds an id and generates an in memory content location.
        if suffix provided, will use suffix instead of random uuid.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, spec: FetchSpec=None) -> FetchResult[Pkg.File.Db]:
        """
        Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param spec
                  Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
                  of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, filter: Filter) -> FetchResult[Pkg.File.Db]:
        """
        Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param filter
                  Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @classmethod
        def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Pkg.File.Db]]:
        """
        Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param spec
                  Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
        @return Requested obj stream.
        """
            ...
        @classmethod
        def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
        """
        Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
        specified maximum batch size.
        
        @param spec
                  Specification of what data to fetch.
        @return Stream of Arrow batches.
        """
            ...
        @classmethod
        def scanArrow(cls, spec: ScanArrowSpec) -> Union[ArrowIterator]:
        """
        Finds rows matching specification and returns them as iterator of Arrow batches.
        
        @param spec
                  Specification of what rows to return.
        @return Iterator of Arrow batches.
        """
            ...
        @classmethod
        def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Pkg.File.Db]]]:
        """
        Fetched multiple obj instances in multiple locales based on specification.
        
        @param spec
               Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
               type.
        @return Requested objs where key of map is locale id
        """
            ...
        @classmethod
        def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
        """
        @return The number of entries that match the specification.
        """
            ...
        @classmethod
        def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
        """
        Gets the estimated count of objs that a fetch on the type with the optional filter will return.
        For non-kv types, The count is obtained from the query explain plan for the fetch.
        For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
        other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
        upper bound for the partition. For more accurate results, perform fillBuckets first.
        
        @param spec
               Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
               explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
               fields.
        @param updateStatistics
               If true, the database statistics for all tables involved in the query will be updated prior to obtaining
               the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
        
        @return The requested estimated count.
        """
            ...
        @classmethod
        def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
        """
        Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
        a callback function for the given batch.
        
        @param spec
                  Specification of the scan action.
        @return Statistics of the scan action.
        """
            ...
        @classmethod
        def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
        """
        Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
        
        @param spec
               Spec indicating how the operation should work.
        
        IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                    rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                    cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                    would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                    other would be specified, depending on whether you are interested in controlling the number of batches
                    or batch size.
        
        @return A stream of batch ids based on the input parameters.
        """
            ...
        @overload
        @classmethod
        def exists(cls, spec: ExistsSpec=None) -> bool:
        """
        @return True if there are at least the number of entries matching the filter/count specified in the spec.
        """
            ...
        @overload
        @classmethod
        def exists(cls, filter: Filter) -> bool:
        """
        @return True if there are at least the number of entries matching the filter/count specified in the spec.
        """
            ...
        @classmethod
        def fetchOvi(cls, spec: FetchSpec=None) -> Union[Any]:
        """
        Used internally to fetch as a stream (e.g. FetchResultOvi)
        """
            ...
        def get(self, include: str=None) -> Union[Pkg.File.Db]:
        """
        Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
        
        @param include
                  Optional include spec to retrieve.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def getSpecific(self, include: str=None) -> Union[Pkg.File.Db]:
        """
        Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
        to fetch the obj, it will not be returned.
        
        @param include
                  Optional include spec to retrieve.  Note that the include spec should reference only fields that are
                  valid in the returned obj's type.  Otherwise an error may be thrown.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def getMissing(self, spec: GetMissingSpec) -> Pkg.File.Db:
        """
        Function to check if an obj was already fetched with an include that contains at least the fields of a specified
        include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
        if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
        specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
        the behavior.
        
        @param spec
                  Spec that controls various aspects of the function's behavior.
        @return instance of the obj with all requested fields.
        """
            ...
        def getDirect(self, include: str=None) -> Union[Pkg.File.Db]:
        """
        Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
        that are stored in Cassandra.
        
        IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
        apis as fast as direct IO apis.
        Use with caution!!!
        
        @param include
                  Optional include spec to retrieve.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def applyReverseEdit(self, versionEdit: VersionEdit) -> Pkg.File.Db:
        """
        Applies a reverse edit (e.g. VersionEdit) to an instance.
        
        @param versionEdit
               Reverse edit to apply
        
        @return The instance after applying the reverse edit.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
        """
            ...
        def create(self, spec: UpsertSpec=None) -> Union[Pkg.File.Db]:
        """
        Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
        instance already exist.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
                will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def createBatch(cls, objs: Array[Pkg.File.Db], spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances already exist.
        
        @param objs
                  New objs to create.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
                include spec is specified in the 'spec.include' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def createBatchObjStream(cls, objs: Stream[Pkg.File.Db], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances already exist.
        
        @param objs
                  New objs to create.
        @param spec
                  Various parameters that control the operation of function.
        @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
                 `spec.includeObjsInResults`.
        """
            ...
        def update(self, srcObj: Pkg.File.Db=None, spec: UpsertSpec=None) -> Union[Pkg.File.Db]:
        """
        Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
        instance does not already exist.
        
        @param srcObj
               If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
               diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
        @param spec
               Various parameters that control the operation of function.
        @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
                obj will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        def upsert(self, srcObj: Pkg.File.Db=None, spec: UpsertSpec=None) -> Union[Pkg.File.Db]:
        """
        Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
        exception will be thrown.
        
        @param srcObj
               If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
               diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
               doesn't already exist.
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
                returned obj will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        @overload
        def merge(self, spec: MergeSpec=None) -> Union[Pkg.File.Db]:
        """
        Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
        updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
        is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
        explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
        {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
        
        For collections, the merge operation is applied to every element in the source and updated collection rather than
        merging the collections themselves.  This means that every element will be merged with the element with the same
        key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
        add/append elements to a collection.
        
        Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
        
        If the operation fails an exception will be thrown.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.
        
        @see Mergespec#csvInclude
        """
            ...
        @overload
        def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[Pkg.File.Db]:
        """
        Merges an instance of a C3 type if it exists and creates it if it doesn't.
        
        @param mergeInclude
                  Used to control which fields from the type are are to be merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        
                  IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
                  merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
                  even if they are null in the input.  Any existing data for included null input fields will be removed.
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.
        """
            ...
        def touch(self, spec: TouchSpec=None) -> Union[Pkg.File.Db]:
        """
        Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
        
        @param spec
                  Various parameters that control the operation of function.
        
        @return The created or updated obj.
        """
            ...
        @classmethod
        def updateBatch(cls, objs: Array[Pkg.File.Db], srcObjs: Array[Pkg.File.Db]=None, spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances don't already exist.
        
        @param objs
               Updated objs.
        @param srcObjs
               If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
               diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
               replace the existing one.
        @param spec
               Various parameters that control the operation of function.
        @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
                spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def updateObjs(cls, objs: Callable[[], Union[Array[Pkg.File.Db]]], spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
        called again to provide updated instances to be updated. If the operation fails for other reasons and
        {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.
        
        @param objs
               Lambda providing objs to be upserted
        @param spec
               Various parameters that control the operation of the operation
        @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
                spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def upsertBatch(cls, objs: Array[Pkg.File.Db], srcObjs: Array[Pkg.File.Db]=None, spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
        fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
               Updated or new objs.
        @param srcObjs
               If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
               diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
               existing one if it doesn't already exist.
        @param spec
               Various parameters that control the operation of function.
        @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
                an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def upsertObjs(cls, objs: Callable[[], Union[Array[Pkg.File.Db]]], spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
        fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
        If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
        default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
        {@link ObjList}.
        
        @param objs
               Lambda providing objs to be upserted
        @param spec
               Various parameters that control the operation of the operation
        @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
                an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def touchBatch(cls, objs: Array[Pkg.File.Db], spec: TouchSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
        objs will be considered an error.
        
        @param objs
               Objs to touch.
        
        @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
                include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @overload
        @classmethod
        def mergeBatch(cls, objs: Array[Pkg.File.Db], spec: MergeSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
        UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
        merge} function.
        
        If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                  Objs to merge.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#mergeInclude
        @see Mergespec#csvInclude
        """
            ...
        @overload
        @classmethod
        def mergeBatch(cls, objs: Array[Pkg.File.Db], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
        UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
        merge} function.
        
        If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                  Objs to merge.
        @param mergeInclude
                  Used to control which fields from the type are are to be merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        
                  IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
                  merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
                  even if they are null in the input.  Any existing data for included null input fields will be removed.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#csvInclude
        """
            ...
        @classmethod
        def mergeObjs(cls, objs: Callable[[], Union[Array[Pkg.File.Db]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
        conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
        fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
        C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
        operation is described in the {@link merge} function.
        
        @param objs
               Lambda providing objs to be upserted
        
        @param objs
               Lambda providing objs to be merged
        @param mergeInclude
                  Used to control which fields from the type are are to be merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        
                  IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
                  merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
                  even if they are null in the input.  Any existing data for included null input fields will be removed.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#csvInclude
        """
            ...
        @overload
        @classmethod
        def mergeAll(cls, mergeObj: Pkg.File.Db, spec: MergeAllSpec=None) -> Union[int]:
        """
        Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
        functions, the set of fields to be merged can be controlled by specifying an include spec in either
        {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
        can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
        in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The number of objs that were merged.
        """
            ...
        @overload
        @classmethod
        def mergeAll(cls, mergeObj: Pkg.File.Db, mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
        """
        Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
        controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
        {@link FetchSpec#filter}.  If not specified, all instances will be merged.
        
        @param mergeInclude
                  Used to control which fields from the type are are to be merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        
                  IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
                  merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
                  even if they are null in the input.  Any existing data for included null input fields will be removed.
        @param spec
                  Various parameters that control the operation of function.
        @return The number of objs that were merged.
        """
            ...
        def remove(self, spec: UpsertSpec=None) -> bool:
        """
        Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
        
        If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        @param spec
                Various parameters that control the operation of function.
        @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
        
        @see Ann.Db#archive
        """
            ...
        @classmethod
        def removeBatch(cls, objs: Array[Pkg.File.Db], spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
        reported in the returned {@link ObjList}.
        
        If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        @param objs
                Objs to remove.
        @param spec
                Various parameters that control the operation of function.
        @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
        
        @see Ann.Db#archive
        """
            ...
        @classmethod
        def removeAll(cls, confirm: bool, spec: RemoveAllSpec=None) -> int:
        """
        Removes multiple instances of a C3 type based.
        
        If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        For kv types, data that is currently being compacted will not be removed and thus will not guarantee
        that all data will be removed. If you need a strong guarantee, use {@link clearCollection} instead.
        
        @param spec
                Spec controlling the operation
        @param confirm
                Must be specified as true.  Otherwise request will be rejected.
        @return The number of objs removed.  Note that under some circumstances the total number removed may not be
                known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
                connection can't return the value).  In those cases, this will return -1.
        """
            ...
        @classmethod
        def replace(cls, objs: Array[Pkg.File.Db], spec: UpsertSpec=None) -> Union[ObjList[Pkg.File.Db]]:
        """
        Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                Updated or new objs.  Any existing objs that aren't included in objs will be removed.
        @param spec
                Various parameters that control the operation of function.
        @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
                specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        def unremove(self) -> Union[Pkg.File.Db]:
        """
        Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
        {@link removeBatch} functions). If the operation fails an exception will be thrown.
        
        @return The recovered obj instance with all of its fields populated.
        
        @see Ann.Db#archive
        """
            ...
        def generateUniqueId(self) -> str:
        """
        Optional function to call during upsert/create/merge operations when an instance is being created and no value for
        the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
        short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
        generate the id based on other field values present in the input.  Note that if an instance already exists with the
        produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
        existing instances for performing updates.
        """
            ...
        @classmethod
        def beforeCreate(cls, objs: Array[Pkg.File.Db]) -> ObjList[Pkg.File.Db]:
        """
        Callback that is called synchronously during an operation that creates objs before those objs are created.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be created.  The objs will be the entire input objs being created.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def beforeUpdate(cls, objs: Array[Pkg.File.Db]) -> ObjList[Pkg.File.Db]:
        """
        Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be updated.  By default the objs will be the complete original source
                  obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
                  a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
                  will have at least those requested fields.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def beforeRemove(cls, objs: Array[Pkg.File.Db]) -> ObjList[Pkg.File.Db]:
        """
        Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be removed.  By default the objs will be the complete original source
                  obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
                  be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
                  requested fields.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def afterCreate(cls, objs: Array[Pkg.File.Db]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that creates objs after those objs are created.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were created.  The objs will already have been created.  By default, only the id
                  is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
        @return List of any errors that were encountered.
        """
            ...
        @classmethod
        def afterUpdate(cls, objs: Array[Pkg.File.Db]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that updates objs after those objs are updated.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were updated.  The objs will already have been updated.  By default, only the id
                  is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
        @return List of any errors that were encountered.
        """
            ...
        @classmethod
        def afterRemove(cls, objs: Array[Pkg.File.Db]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that removes objs after those objs are removed.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were removed.  The objs will already have been removed.  By default, only the id
                  is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
                  Since the objs will already have been removed, they will be in the state they were in prior to removal.
        @return List of any errors that were encountered.
        """
            ...
        def upsertDirect(self, merge: bool=None, clearNullValues: bool=None) -> Union[Obj]:
        """
        Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
        valid for C3 types that are stored in Cassandra.
        
        IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
        apis as fast as direct IO apis.
        Use with caution!!!
        
        @param clearNullValues
                  If true then map keys with null values will be cleared.
        @return The created or updated obj with only the id populated if it exists and null otherwise.
        """
            ...
        @classmethod
        def beginUpsertToSecondaryDs(cls, type: Type) -> SecondaryDsUpsert:
        """
        Begin an upsert operation to the secondary data store.
        
        IMPORTANT:
        
        1. This is only valid for types that specify a secondary datastore.
        2. Currently only types that are not extendable are supported.
        
        @param type
                  Type that the upsert operation is for.
        
        @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
        """
            ...
        @classmethod
        def clearCollection(cls, confirm: bool, spec: ClearCollectionSpec=None) -> None:
        """
        Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
        defaulting to using multi-row sql for the deletes.
        
        @param spec
               Spec controlling the operation
        @param confirm
               Must be specified as true.  Otherwise request will be rejected.
        """
            ...
        @classmethod
        def created(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
        {@link merge} or their batch equivalents.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were created.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def updated(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
        {@link merge} or their batch equivalents.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were updated.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def removed(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
        {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
        archive operation or it is physically removed.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were removed.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def eval(cls, spec: EvalSpec=None) -> Union[Data]:
        """
        This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
        Support column alias for evaluate & evalMetrics by passing an ObjNode
        e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
        e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
        """
            ...
        @classmethod
        def evaluate(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def evaluateTupleStream(cls, spec: EvaluateSpec) -> Union[Stream[CellTuple]]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def evaluatePii(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
        {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
        conditions are met.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def tsEval(cls, spec: TSEvalSpec) -> Union[Obj]:
        """
        Evaluates a single projection expression for timeseries data.
        
        Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
        or {@link MetricEvaluatable.evalMetrics} should be used instead.
        
        @param spec
                  Specification of the projection expression and which timeseries to evaluate.
        @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
        
        @see MetricEvaluatable
        """
            ...
        @classmethod
        def evaluateOvi(cls, spec: EvaluateSpec=None) -> Union[Any]:
        """
        Used internally to evaluate as a stream
        """
            ...
        @classmethod
        def evaluateArrowStream(cls, spec: EvaluateArrowStreamSpec) -> Stream[Arrow]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
        as stream of Arrow batches.
        
        @param spec
                  Specification of what data to fetch.
        @return Stream of Arrow batches.
        """
            ...
        @classmethod
        def refreshCalcFields(cls, spec: RefreshCalcFieldsSpec=None) -> Union[RefreshCalcFieldsBatchJob]:
        """
        Refreshes calc fields for objs for a type based on a spec.
        
        @param spec
               Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
               other options that control the operation.
        @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshDefaultFields(cls, spec: RefreshDefaultFieldsSpec=None) -> Union[RefreshDefaultFieldsBatchJob]:
        """
        Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
        specified fields will be refreshed.
        
        @param spec
               Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
               other options that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshUniqueIndexes(cls, spec: RefreshUniqueIndexesSpec=None) -> Union[RefreshUniqueIndexesBatchJob]:
        """
        Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
        and no types that extend them have unique indexes, this does nothing.
        
        @param spec
               Spec that indicates which objs to refresh unique indexes for along with other options that control
               the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshAnalytics(cls, spec: RefreshAnalyticsSpec=None) -> Union[RefreshAnalyticsBatchJob]:
        """
        Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
        called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
        
        @param spec
               Indicates which objs to refresh analytics for and what time range to use, along with other options that
               control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        
        @see AnalyticsContainer
        @see SimpleMetric
        """
            ...
        @classmethod
        def refreshMetrics(cls, spec: RefreshMetricsSpec=None) -> Union[RefreshMetricsBatchJob]:
        """
        Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
        called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
        {@link SimpleMetric.cacheInterval} are considered.
        
        @param spec
               Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
               that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        
        @see SimpleMetric
        """
            ...
        @classmethod
        def runCreatedOrUpdated(cls, spec: RunCreatedOrUpdatedSpec=None) -> Union[RunCreatedOrUpdatedBatchJob]:
        """
        Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
        function will be called.  For those that have both, only the updated will be called.  If only created should be
        called in all cases, set the 'spec.createdOnly' field to true.
        
        @param spec
                  Indicates which objs to call the functions for, along with other options that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshDeps(cls, spec: RefreshDepsSpec=None) -> None:
        """
        Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
        
        @param spec
               Indicates which types of dependencies should be refreshed along with other parameters that control the
               operation of the function.
        """
            ...
        @classmethod
        def processRefresh(cls, type: Type, jobType: Type, spec: ObjBatch) -> Union[RefreshBatchJob[Any, Any, Any]]:
        """
        Performs the refresh operation.
        
        @param type
               Type being refreshed.
        @param jobType
               Batch job type to for refresh.
        @param spec
               Parameters for the refresh operation.
        
        @return The batch job that was started.
        """
            ...
        @classmethod
        def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[Pkg.File.Db]:
        """
        @return a push stream to import instances of this type.
        """
            ...
        @classmethod
        def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[Pkg.File.Db]:
        """
        @return a push stream to import instances of this type.
        """
            ...
        @classmethod
        def importData(cls, spec: ImportDataSpec, async_: bool=None) -> Union[ImportDataResult]:
        """
        Imports instances into a C3 type from a file stored in Cassandra.
        
        @param spec
               Various parameters that control the operation of function.
        @param async
               Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
               synchronous)
        @return various statistics and errors for the import operation.
        """
            ...
        @classmethod
        def exportData(cls, spec: ExportDataSpec) -> Union[ExportDataResult]:
        """
        Exports instances of a C3 type to Cassandra.
        
        @param spec
                  Various parameters that control the operation of function.
        @return A reference to the Content obj created that contains the exported data and various statistics about the
                export.
        """
            ...
        @classmethod
        def exportDataForRedShift(cls, spec: RedShiftExportDataSpec) -> Union[int]:
        """
        Exports instances of a C3 type to S3 for importing into Redshift.
        
        @param spec
                  Various parameters that control the operation of function.
        @return Number of objs exported.
        """
            ...
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Pkg.File.Db]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def referenceInvalid(self) -> bool:
        """
        Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
        returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
        {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
        the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
        separate query) to return the requested data from the reference.
        
        Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
        way other than what is described above will ALWAYS return false.
        
        @return the current value of the {@link meta#referenceInvalid} field for the instance.
        
        @see Meta#referenceInvalid
        """
            ...
        @classmethod
        def generateNewIds(cls, count: int=None) -> Union[Array[str]]:
        """
        Generates new unique ids for C3 Obj instances
        
        @param count
                  Number of ids to generate.  Default is 1.
        @return The requested number of new unique ids.
        """
            ...
        @classmethod
        def generateData(cls, spec: GenerateDataSpec=None) -> Union[ActionStats]:
        """
        Generates synthetic data for a C3 type.
        
        @param spec
                  Various parameters that control the operation of function.
        @return Various statistics for the operation.
        """
            ...
        @classmethod
        def profileData(cls, spec: FetchSpec=None) -> Union[GenerateDataSpec]:
        """
        Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
        
        @param spec
                  Various parameters that control the operation of function.
        @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
        """
            ...
        def withoutIdentity(self) -> Union[Pkg.File.Db]:
        """
        Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
        such that a subsequent upsert will create a new instance.
        
        @return The requested obj without any of its identifying fields.
        """
            ...
        def typeOf(self) -> Union[EntityType]:
        """
        Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
        type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
        that type's base type chain.
        
        @return The type hierarchy for the requested obj.
        """
            ...
        @classmethod
        def typeOfBatch(cls, objs: Array[Pkg.File.Db]) -> Union[Array[EntityType]]:
        """
        Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
        C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
        as that type's base type chain.
        
        @param objs
                  Obj instances to get the type hierarchy for.
        @return The type hierarchies for the requested objs.
        """
            ...
        @classmethod
        def getRootType(cls) -> Union[Type]:
        """
        @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
                The type itself is returned in all other cases.
        """
            ...
        @classmethod
        def upsertCollection(cls, throwOnNonUniqueIndexError: bool=None) -> bool:
        """
        Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
        internally during provisioning and should not need to be called manually.
        
        @param throwOnNonUniqueIndexError
               true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
               false, that will be considered benign as it means some other thread process is creating the necessary
               indexes.
        
        @return True if the operation caused any DLL changes and false if did not.
        """
            ...
        @classmethod
        def validateSchema(cls, type: Type) -> bool:
        """
        Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
        
        @type
                The Type to validate the schema of.
        @return true if the schema was updated in this JVM/app
        """
            ...
        @classmethod
        def collectionUpserted(cls) -> None:
        """
        Callback that is called synchronously in response to a call to {@link upsertCollection}.
        """
            ...
        @classmethod
        def collectionCleared(cls) -> None:
        """
        Callback that is called synchronously in response to a call to {@link clearCollection}.
        """
            ...
        @classmethod
        def dbEcho(cls, template: Pkg.File.Db=None, count: int=None, sendBack: bool=None) -> Union[int]:
        """
        Used only by DatabaseTestEngine
        """
            ...
        @classmethod
        def checkReferences(cls, spec: CheckReferencesSpec=None) -> Union[CheckReferencesResult]:
        """
        Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
        invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
        condition is considered to be when there is no entry in the reference type for the obj being validated.
        
        @param spec
                  Indicates which references in which types/fields to check.
        @return List of references that were found to be invalid along with details of why they are invalid.
        """
            ...
        @classmethod
        def validatePath(cls, path: str) -> Union[ValidatePathResult]:
        """
        Determines is a path is valid as a filter expression in a fetch call.
        
        @param path
                  Path to validate.
        @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
                itself is invalid, an exception is thrown
        """
            ...
        @classmethod
        def schema(cls) -> Union[SchemaInfo]:
        """
        @return The db table name for relational types and the column family name for Cassandra types
        """
            ...
        @classmethod
        def calcFieldDeps(cls, fieldName: str) -> Union[Array[str]]:
        """
        Gets all of the dependencies that could invalidate a stored calc field.
        
        @param fieldName
                The name of the field to find all dependencies of.
        @return A list of dependencies that can invalidate the stored calc field.
        """
            ...
        def invalidateTsHeader(self, range: TimeRange=None, fields: Array[str]=None, autoCommit: bool=None) -> None:
        """
        Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
        IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
        
        @param range
               Time range to invalidate for.  If null, invalidation will be across all time.
        @param fields
               Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
               not used as we don't keep dependency info at the field level.
        @param autoCommit
               If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
               immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
               that state until they are either committed or aborted.
        """
            ...
        @classmethod
        def invalidateTsDataPoints(cls, tsInvalidations: Stream[TsInvalidation], autoCommit: bool=None) -> None:
        """
        Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
        {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
        
        @param tsInvalidations
               Time range to invalidate for.  If null, invalidation will be across all time.
        @param autoCommit
               If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
               immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
               that state until they are either committed or aborted.
        """
            ...
        @classmethod
        def eachObjBatch(cls, spec: BatchFetchSpec, action: Callable[[Array[Obj], Union[Any]]]) -> str:
        """
        API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
        call action for each batch of `spec.batchSize`.
        
        @param spec
                A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
        @param action
                The lambda to apply to each batch of objs.
        
        @return the ID of the started ObjBatchMapReduceJob
        """
            ...
        @classmethod
        def callbackLogic(cls, objs: Array[Pkg.File.Db], callback: Callable[[Union[Pkg.File.Db]], Union[Pkg.File.Db]]=None) -> ObjList[Pkg.File.Db]:
        """
        Implements a simple logic for Persistable call-backs like before create by looping each input obj and
        calling a transform for it.
        
        
        callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
        """
            ...
        @classmethod
        def afterCallbackLogic(cls, objs: Array[Pkg.File.Db], callback: Callable[[Union[Pkg.File.Db]], Union[Pkg.File.Db]]=None) -> Union[Array[ObjError]]:
        """
        Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
        calling a transform for it.
        """
            ...
        @classmethod
        def idColNames(cls) -> Union[Array[str]]:
        """
        @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
                be only 1.  If it does, then there will be multiple.
        """
            ...
        @overload
        @classmethod
        def isUnique(cls, fieldPath: str) -> bool:
        """
        True if this field is unique
        """
            ...
        @overload
        @classmethod
        def isUnique(cls, fieldPaths: Array[str]) -> bool:
        """
        True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
        themselves, or there is a unique index that is a subset of the specified fields.
        """
            ...
        @classmethod
        def isSystemField(cls, name: str) -> bool:
        """
        Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
        #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
        @param name
                 The name of field to check
        @returns Whether or not the specific field name is one of the ones declared by the DB engine.
        """
            ...
        def pkgFile(self) -> Pkg.File:
        """
        @return instance of Pkg.File.
        """
            ...
        @classmethod
        def fromPkgFile(cls, storeName: str, file: Pkg.File) -> Pkg.File.Db:
        """
        @return new or down-casted instance of Pkg.File.Db for a given Pkg.File and storeName.
        """
            ...
        @classmethod
        def fromPkgPathAndEncodedContent(cls, storeName: str, path: Pkg.Path, encodedContent: any=None) -> Pkg.File.Db:
        """
        @return new Pkg.File.Db for a store, given Pkg.Path and encoded content.
        """
            ...
        @classmethod
        def idFromUrl(cls, url: str) -> str:
        """
        Stable id for a given file url.
        """
            ...
        def readEncoded(self) -> Union[any]:
            ...
    
    class Info():
        """
        Info needed for {@link Pkg.File} as part of {@link Pkg.File.Event}.
        
        @remarks this represents a made instance of Pkg.File.Info
        """
        
        pkgPath: Optional[str]=None

        fileFingerprint: Optional[str]=None
        """
        Fingerprint of the file. {@link Pkg#fileFingerprint}
        """

        contentLength: Optional[int]=None
        """
        the size of the associated content {@link ContentMeta#contentLength}.
        """
        def __init__(self, pkgPath: Optional[str]=None, fileFingerprint: Optional[str]=None, contentLength: Optional[int]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Pkg.File.Info]:
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
        def fromJsonString(cls, json: str) -> Union[Pkg.File.Info]:
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
        def fromXmlString(cls, xml: str) -> Union[Pkg.File.Info]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File.Info]:
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
        def replaceType(self, old: Type, new: Type) -> Pkg.File.Info:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Info:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Info:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Info]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Info]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File.Info:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Info:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Info:
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
        def validateObj(self) -> Pkg.File.Info:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File.Info:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File.Info:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File.Info:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File.Info:
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
        def withoutFieldAtPath(self, path: str) -> Pkg.File.Info:
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
        def withoutField(self, field: str) -> Pkg.File.Info:
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
        def withoutField(self, field: FieldType) -> Pkg.File.Info:
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
        def withoutFields(self, fields: Array[str]) -> Pkg.File.Info:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File.Info:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Pkg.File.Info:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File.Info:
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
        def defaultField(self, field: str) -> Pkg.File.Info:
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
        def defaultField(self, field: FieldType) -> Pkg.File.Info:
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
        def unsetField(self, field: str) -> Pkg.File.Info:
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
        def unsetField(self, field: FieldType) -> Pkg.File.Info:
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
        def removeField(self, field: str) -> Pkg.File.Info:
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
        def removeField(self, field: FieldType) -> Pkg.File.Info:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File.Info:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File.Info:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File.Info:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File.Info:
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
        def mergeJson(self, json: any) -> Pkg.File.Info:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File.Info:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File.Info:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Pkg.File.Info]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File.Info]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File.Info]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Pkg.File.Info]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Pkg.File.Info]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File.Info]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File.Info]]:
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
        def toBuilder(self) -> ObjBuilder[Pkg.File.Info]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Pkg.File.Info]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File.Info:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Info:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File.Info:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Pkg.File.Info:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Info:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File.Info:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File.Info:
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
        def afterMake(self) -> Pkg.File.Info:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Pkg.File.Info:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File.Info]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File.Info:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class Event():
        """
        Event generated as part of Pkg metadata change with details about the change.
        
        @remarks this represents a made instance of Pkg.File.Event
        """
        
        sequenceNum: Optional[int]
        """
        Sequence number for the event generated.
        """

        targetFiles: Optional[Array[str]]
        """
        Pkg.Files that affected
        """

        targetFilesInfo: Optional[Map[str, Pkg.File.Info]]=None
        """
        {@link Pkg.File.Info} for targetFiles.
        """

        kind: Optional[str]
        """
        Kind of event generated for the target file.
        """
        def __init__(self, sequenceNum: Optional[int]=None, targetFiles: Optional[Array[str]]=None, targetFilesInfo: Optional[Map[str, Pkg.File.Info]]=None, kind: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Pkg.File.Event]:
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
        def fromJsonString(cls, json: str) -> Union[Pkg.File.Event]:
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
        def fromXmlString(cls, xml: str) -> Union[Pkg.File.Event]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File.Event]:
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
        def replaceType(self, old: Type, new: Type) -> Pkg.File.Event:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Event:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Event:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Event]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Event]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File.Event:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Event:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Event:
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
        def validateObj(self) -> Pkg.File.Event:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File.Event:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File.Event:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File.Event:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File.Event:
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
        def withoutFieldAtPath(self, path: str) -> Pkg.File.Event:
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
        def withoutField(self, field: str) -> Pkg.File.Event:
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
        def withoutField(self, field: FieldType) -> Pkg.File.Event:
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
        def withoutFields(self, fields: Array[str]) -> Pkg.File.Event:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File.Event:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Pkg.File.Event:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File.Event:
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
        def defaultField(self, field: str) -> Pkg.File.Event:
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
        def defaultField(self, field: FieldType) -> Pkg.File.Event:
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
        def unsetField(self, field: str) -> Pkg.File.Event:
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
        def unsetField(self, field: FieldType) -> Pkg.File.Event:
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
        def removeField(self, field: str) -> Pkg.File.Event:
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
        def removeField(self, field: FieldType) -> Pkg.File.Event:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File.Event:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File.Event:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File.Event:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File.Event:
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
        def mergeJson(self, json: any) -> Pkg.File.Event:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File.Event:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File.Event:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Pkg.File.Event]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File.Event]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File.Event]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Pkg.File.Event]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Pkg.File.Event]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File.Event]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File.Event]]:
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
        def toBuilder(self) -> ObjBuilder[Pkg.File.Event]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Pkg.File.Event]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File.Event:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Event:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File.Event:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Pkg.File.Event:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Event:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File.Event:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File.Event:
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
        def afterMake(self) -> Pkg.File.Event:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Pkg.File.Event:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File.Event]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File.Event:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        
        class Kind():
            """
            type of change done to a Pkg.File
            
            @remarks this represents a made instance of Pkg.File.Event.Kind
            """
            
            ADD: Optional[str]=None
            """
            For adding new Pkg.File
            """

            REMOVE: Optional[str]=None
            """
            For removing a Pkg.File
            """

            UPDATE: Optional[str]=None
            """
            For updating a Pkg.File
            """

            VALIDATE: Optional[str]=None
            """
            For validating a Pkg.File
            """

            END: Optional[str]=None
            """
            For completion of validation
            """

            INFO: Optional[str]=None
            """
            Additional info from server about steps in processing a Pkg.File
            """
            def __init__(self, ADD: Optional[str]=None, REMOVE: Optional[str]=None, UPDATE: Optional[str]=None, VALIDATE: Optional[str]=None, END: Optional[str]=None, INFO: Optional[str]=None) -> None: ...

            @classmethod
            def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
            """
            Translate the enum label (field name) to the value.
            For simple enums (that don't define explicit values), the value is a string
            that matches the label.
            @param label the enum label
            @return the associated value
            """
                ...
            @classmethod
            def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
            """
            Translate the enum value to the label (field name).
            @param value the enum value
            @return the enum label
            """
                ...
            @classmethod
            def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
            """
            Get the index of the label in the enum.
            @param label the enum label (field name)
            @return index or -1 if not found
            """
                ...
            @classmethod
            def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
            """
            Get the index of the value in the enum.
            @param value the enum value
            @return index or -1 if not found
            """
                ...
            @classmethod
            def valueType(cls) -> ValueType:
            """
            @return value type of values in this enum
            """
                ...
            @classmethod
            def values(cls) -> Union[Array[str]]:
            """
            Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
            the field name (same as the labels).
            """
                ...
            @classmethod
            def labels(cls) -> Union[Array[str]]:
            """
            Return an array of all enumeration labels. These are the same as the field names of the enum type.
            """
                ...
            @classmethod
            def valueToLabels(cls) -> Union[Map[str, str]]:
            """
            Return a map of all enumeration values to their labels.
            """
                ...
            @classmethod
            def labelToValues(cls) -> Union[Map[str, str]]:
            """
            Return a map of all enumeration labels to their values.
            """
                ...
            @classmethod
            def containsValue(cls, value: str) -> bool:
            """
            Is value a valid value for this enum type?
            @param value the enum value
            """
                ...
            @classmethod
            def eachLabel(cls, action: Callable[[str]]=None) -> None:
            """
            Calls provided action for each enum label.
            """
                ...
            @classmethod
            def eachValue(cls, action: Callable[[str]]=None) -> None:
            """
            Calls provided action for each enum value.
            """
                ...
        
        class Verbose():
            """
            Additional info on top of {@link Pkg.File.Event} that are not sent as part of regular SSE.
            
            @remarks this represents a made instance of Pkg.File.Event.Verbose
            """
            
            jvmId: Optional[int]
            """
            Unique identifier for the current JVM process. Should the JVM go down and come up again, a different id will be
            generated where the id at the later time is greater than the id at the earlier time. The id is unique across JVM
            processes running on the same machine, BUT NOT JVM processes running on different machine. E.g. two servers may
            have the same jvmId.
            """

            rootActionId: Optional[str]=None

            rootActionType: Optional[str]=None

            rootActionMethod: Optional[str]=None

            clientIds: Optional[Array[str]]=None
            """
            Pairwise array of identifiers alongside {@link #eventStreamIds} of where events are sent to. This array records the
            client ids that initialized the {@link EventStream}.
            """

            eventStreamIds: Optional[Array[str]]=None
            """
            Pairwise array of identifier alongside {@link #clientIds} of where events are sent to. This array records the
            {@link EventStream#id}.
            """

            event: Optional[Pkg.File.Event]=None

            timestamp: Optional[datetime]
            """
            Datetime of when this verbose event was generated on the server.
            """
            def __init__(self, jvmId: Optional[int]=None, rootActionId: Optional[str]=None, rootActionType: Optional[str]=None, rootActionMethod: Optional[str]=None, clientIds: Optional[Array[str]]=None, eventStreamIds: Optional[Array[str]]=None, event: Optional[Pkg.File.Event]=None, timestamp: Optional[datetime]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Pkg.File.Event.Verbose]:
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
            def fromJsonString(cls, json: str) -> Union[Pkg.File.Event.Verbose]:
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
            def fromXmlString(cls, xml: str) -> Union[Pkg.File.Event.Verbose]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File.Event.Verbose]:
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
            def replaceType(self, old: Type, new: Type) -> Pkg.File.Event.Verbose:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Event.Verbose:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Event.Verbose:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Event.Verbose]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Event.Verbose]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File.Event.Verbose:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Event.Verbose:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Event.Verbose:
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
            def validateObj(self) -> Pkg.File.Event.Verbose:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File.Event.Verbose:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File.Event.Verbose:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File.Event.Verbose:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File.Event.Verbose:
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
            def withoutFieldAtPath(self, path: str) -> Pkg.File.Event.Verbose:
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
            def withoutField(self, field: str) -> Pkg.File.Event.Verbose:
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
            def withoutField(self, field: FieldType) -> Pkg.File.Event.Verbose:
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
            def withoutFields(self, fields: Array[str]) -> Pkg.File.Event.Verbose:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File.Event.Verbose:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Pkg.File.Event.Verbose:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File.Event.Verbose:
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
            def defaultField(self, field: str) -> Pkg.File.Event.Verbose:
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
            def defaultField(self, field: FieldType) -> Pkg.File.Event.Verbose:
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
            def unsetField(self, field: str) -> Pkg.File.Event.Verbose:
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
            def unsetField(self, field: FieldType) -> Pkg.File.Event.Verbose:
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
            def removeField(self, field: str) -> Pkg.File.Event.Verbose:
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
            def removeField(self, field: FieldType) -> Pkg.File.Event.Verbose:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File.Event.Verbose:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File.Event.Verbose:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File.Event.Verbose:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File.Event.Verbose:
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
            def mergeJson(self, json: any) -> Pkg.File.Event.Verbose:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File.Event.Verbose:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File.Event.Verbose:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Pkg.File.Event.Verbose]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File.Event.Verbose]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File.Event.Verbose]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Pkg.File.Event.Verbose]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Pkg.File.Event.Verbose]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File.Event.Verbose]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File.Event.Verbose]]:
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
            def toBuilder(self) -> ObjBuilder[Pkg.File.Event.Verbose]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Pkg.File.Event.Verbose]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File.Event.Verbose:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Event.Verbose:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File.Event.Verbose:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Pkg.File.Event.Verbose:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Event.Verbose:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File.Event.Verbose:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File.Event.Verbose:
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
            def afterMake(self) -> Pkg.File.Event.Verbose:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Pkg.File.Event.Verbose:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File.Event.Verbose]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File.Event.Verbose:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
    
    class TypePart():
        """
        Changes to the files that make up a type can be to its definition (`.c3typ` file) or its implementation source code
        (such as `.py` for Python or `.js` for JavaScript).
        
        @remarks this represents a made instance of Pkg.File.TypePart
        """
        
        DEFINITION: Optional[str]=None
        """
        The definition (`.c3typ`) file.
        """

        SOURCE: Optional[str]=None
        """
        An implementation source code (`.js`, `.py`, etc.) file.
        """
        def __init__(self, DEFINITION: Optional[str]=None, SOURCE: Optional[str]=None) -> None: ...

        @classmethod
        def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Translate the enum label (field name) to the value.
        For simple enums (that don't define explicit values), the value is a string
        that matches the label.
        @param label the enum label
        @return the associated value
        """
            ...
        @classmethod
        def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Translate the enum value to the label (field name).
        @param value the enum value
        @return the enum label
        """
            ...
        @classmethod
        def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
        """
        Get the index of the label in the enum.
        @param label the enum label (field name)
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
        """
        Get the index of the value in the enum.
        @param value the enum value
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueType(cls) -> ValueType:
        """
        @return value type of values in this enum
        """
            ...
        @classmethod
        def values(cls) -> Union[Array[str]]:
        """
        Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
        the field name (same as the labels).
        """
            ...
        @classmethod
        def labels(cls) -> Union[Array[str]]:
        """
        Return an array of all enumeration labels. These are the same as the field names of the enum type.
        """
            ...
        @classmethod
        def valueToLabels(cls) -> Union[Map[str, str]]:
        """
        Return a map of all enumeration values to their labels.
        """
            ...
        @classmethod
        def labelToValues(cls) -> Union[Map[str, str]]:
        """
        Return a map of all enumeration labels to their values.
        """
            ...
        @classmethod
        def containsValue(cls, value: str) -> bool:
        """
        Is value a valid value for this enum type?
        @param value the enum value
        """
            ...
        @classmethod
        def eachLabel(cls, action: Callable[[str]]=None) -> None:
        """
        Calls provided action for each enum label.
        """
            ...
        @classmethod
        def eachValue(cls, action: Callable[[str]]=None) -> None:
        """
        Calls provided action for each enum value.
        """
            ...
        @classmethod
        def forFileExt(cls, extension: str) -> Union[str]:
        """
        Determine the "type part" (if any) for a file extension. Note that this does not imply an file with that extension
        is part of a type; that is only true if the type name forms the base of the file.
        """
            ...
    
    class Value(Pkg.File):
        """
        In-memory instance of Pkg.File that cannot be persisted. This is useful for passing content internally.
        
        Note that this class only allows reading from the file since there is no underlying file system; however it is
        possible to clone it by replacing a content and then saving it
        
        @remarks this represents a made instance of Pkg.File.Value
        """
        
        TEST_FILE_PATTERN: Optional[str]=None
        """
        Glob pattern to determine if a file is a test file.
        """

        url: Optional[str]
        """
        Pkg URL for this path.
        
        @see Pkg.Url
        """

        scheme: Optional[str]=None
        """
        scheme of this pkg path url.
        """

        package: Optional[str]=None
        """
        The name of package Pkg file belongs to.
        """

        category: Optional[str]=None
        """
        Category for Pkg file.
        """

        encodedSubPath: Optional[str]=None
        """
        URL encoded sub path of the Pkg file excluding repository, package and category information. This path is
        always relative.
        ```
           test%20types/TestType.c3typ
           other/OtherType.c3typ
        ```
        """

        overlay: Optional[str]=None
        """
        overlay of the path, if the path is part of one. There can only be one overlay.
        """

        depPkgName: Optional[str]=None
        """
        returns the dependency package name in the path, if this has `dep` overlay.
        ```
          /pkgA/dep/pkgB/src/TestType.c3typ -> pkgB
          /pkgA/src/TestA.c3typ -> null
        ```
        """

        depPkgOverlay: Optional[str]=None
        """
        If the overlay is DEP, and the dependency package has it's own overlay, it is the dependency package's overlay.
        This can't be another Overlay.Dep.
        ```
          fromString('/pkgA/dep/pkgB/test/src/TestType.c3typ').depPkgOverlay() -> test
          fromString('/pkgA/dep/pkgB/gen/cache/TypeMetaDeps%23dts/TestType.c3typ.d.ts').depPkgOverlay() -> gen
        ```
        """

        targetType: Optional[str]=None
        """
        Local cache of the #safeTargetType method call.
        """

        contentEncoding: Optional[str]=None
        """
        A modifier to the media-type. When present, its value indicates what additional content
        codings have been applied to the data, and thus what decoding mechanisms must be
        applied in order to obtain the media-type referenced by the contentType.
        
        It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
        """

        contentLanguage: Optional[str]=None
        """
        Describes the natural language(s) of the intended audience.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
        """

        contentLength: Optional[int]=None
        """
        The size of the entity-body, in bytes.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
        """

        contentLocation: Optional[str]=None
        """
        The resource location for the entity enclosed in the message when that entity is accessible from a location
        separate from the requested resource's URI.
        
        It is recommended to use #safeUrl instead.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Location
        """

        contentType: Optional[str]=None
        """
        The media type of the content (MIME type).
        This includes contentTypeParams such as delimiters, characters as well.
        To specify delimiters please see {@link ContentType}
        and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
        Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
        It is recommended to use #safeContentType instead as it will attempt to guess content type.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
        """

        contentDisposition: Optional[str]=None
        """
        Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
        attachment locally.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
        """

        eTag: Optional[str]=None
        """
        The ETag response-header field provides the current value of the entity tag for the requested variant.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
        """

        lastModified: Optional[datetime]=None
        """
        The date and time at which the variant was last modified.
        
        @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
        """

        lastModifiedBy: Optional[str]=None
        """
        Id of user / identity who last last modified this content.
        """

        contentMD5: Optional[str]=None
        """
        An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
        as well as supporting content-based caching (ETag).
        """

        contentSHA1: Optional[str]=None
        """
        An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
        as well as supporting content-based caching (ETag).
        """

        hasMetadata: Optional[bool]=None
        """
        Field to maintain state whether content metadata was read or not.
        """

        encodedContent: Optional[any]=None
        def __init__(self, TEST_FILE_PATTERN: Optional[str]=None, url: Optional[str]=None, scheme: Optional[str]=None, package: Optional[str]=None, category: Optional[str]=None, encodedSubPath: Optional[str]=None, overlay: Optional[str]=None, depPkgName: Optional[str]=None, depPkgOverlay: Optional[str]=None, targetType: Optional[str]=None, contentEncoding: Optional[str]=None, contentLanguage: Optional[str]=None, contentLength: Optional[int]=None, contentLocation: Optional[str]=None, contentType: Optional[str]=None, contentDisposition: Optional[str]=None, eTag: Optional[str]=None, lastModified: Optional[datetime]=None, lastModifiedBy: Optional[str]=None, contentMD5: Optional[str]=None, contentSHA1: Optional[str]=None, hasMetadata: Optional[bool]=None, encodedContent: Optional[any]=None) -> None: ...

        def toString(self) -> str:
        """
        @return a string representation of Pkg.Path; same as #encodedFullPath.
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Pkg.File.Value]:
        """
        Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
        provide deserialization.
        
        fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
        of called-on type, but perhaps not the same type.
        
        E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
        
        @see #toString
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Pkg.File.Value]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Pkg.File.Value:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Pkg.File.Value:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Value:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Pkg.File.Value:
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
        def fromJson(cls, json: any) -> Union[Pkg.File.Value]:
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
        def fromJsonString(cls, json: str) -> Union[Pkg.File.Value]:
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
        def fromXmlString(cls, xml: str) -> Union[Pkg.File.Value]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Pkg.File.Value]:
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
        def replaceType(self, old: Type, new: Type) -> Pkg.File.Value:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Value:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Pkg.File.Value:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Value]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Pkg.File.Value]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Pkg.File.Value:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Value:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Pkg.File.Value:
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
        def validateObj(self) -> Pkg.File.Value:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Pkg.File.Value:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Pkg.File.Value:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Pkg.File.Value:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Pkg.File.Value:
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
        def withoutFieldAtPath(self, path: str) -> Pkg.File.Value:
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
        def withoutField(self, field: str) -> Pkg.File.Value:
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
        def withoutField(self, field: FieldType) -> Pkg.File.Value:
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
        def withoutFields(self, fields: Array[str]) -> Pkg.File.Value:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Pkg.File.Value:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Pkg.File.Value:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Pkg.File.Value:
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
        def defaultField(self, field: str) -> Pkg.File.Value:
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
        def defaultField(self, field: FieldType) -> Pkg.File.Value:
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
        def unsetField(self, field: str) -> Pkg.File.Value:
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
        def unsetField(self, field: FieldType) -> Pkg.File.Value:
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
        def removeField(self, field: str) -> Pkg.File.Value:
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
        def removeField(self, field: FieldType) -> Pkg.File.Value:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Pkg.File.Value:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Pkg.File.Value:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Pkg.File.Value:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Pkg.File.Value:
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
        def mergeJson(self, json: any) -> Pkg.File.Value:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Pkg.File.Value:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Pkg.File.Value:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Pkg.File.Value]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Pkg.File.Value]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Pkg.File.Value]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Pkg.File.Value]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Pkg.File.Value]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Pkg.File.Value]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Pkg.File.Value]]:
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
        def toBuilder(self) -> ObjBuilder[Pkg.File.Value]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Pkg.File.Value]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Pkg.File.Value:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Pkg.File.Value:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Pkg.File.Value:
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
        def afterMake(self) -> Pkg.File.Value:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Pkg.File.Value:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Pkg.File.Value]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Pkg.File.Value:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def isTest(self) -> bool:
        """
        True if this is a test file i.e. overlay or depOverlay  is test. 'test' overlay should contain only things used
        for testing that package.
        ```
          fromString('/pkgA/dep/pkgB/test/src/SrcType.c3typ').isTest() -> true
          fromString('/pkgA/test/src/TestType.c3typ').isTest() -> true
        ```
        """
            ...
        def isGen(self) -> bool:
        """
        True if this is a generated file i.e. overlay or depOverlay  is gen. . It will be created when running code-gen.
        """
            ...
        def isDep(self) -> bool:
        """
        True, if this is a dependency package path.
        ` /pkgA/dep/pkgB/src/TestType.c3typ ->  true`
        """
            ...
        def isSrc(self) -> bool:
        """
        @return true if this is a source file.
        """
            ...
        def isSeed(self) -> bool:
        """
        @return true if this is a SEED data file.
        """
            ...
        def isPackage(self) -> bool:
        """
        @return true if this is a c3Pkg.
        """
            ...
        def isPackageLock(self) -> bool:
        """
        @return true if this is a c3pkg.lock
        """
            ...
        def isOther(self) -> bool:
        """
        @return true if this is a Pkg.Category.OTHER.
        """
            ...
        def isCache(self) -> bool:
        """
        @return true if this is a {@link Pkg.Category#CACHE}
        """
            ...
        def isUi(self) -> bool:
        """
        @return true if this is a Pkg.Category.UI
        """
            ...
        def isUiMeta(self) -> bool:
        """
        @return true if this is a Pkg.Category.UI and conforms to application/kind/filename.ext.
        """
            ...
        def isData(self) -> bool:
        """
        @return true if this is a Pkg.Category.DATA
        """
            ...
        def uiApplicationId(self) -> Union[str]:
        """
        @return Ui Application id, for a Ui file.
        """
            ...
        def uiMetaKind(self) -> Union[str]:
        """
        @return kind of Ui Pkg file.
        """
            ...
        def subPath(self) -> str:
        """
        @return sub path of this file under the package including file name. Sub path is always relative.
        ```
           test types/TestType.c3typ
           other/OtherType.c3typ
        ```
        """
            ...
        def encodedFileName(self) -> str:
        """
        @return URL encoded file name including the extension.
        """
            ...
        def fileName(self) -> str:
        """
        @return file name of this file.
        """
            ...
        def fileExt(self) -> Union[str]:
        """
        @return file extension of this file, including the leading dot (e.g., ".c3typ", ".json").
        """
            ...
        def fileExtWithoutDot(self) -> Union[str]:
        """
        @return file extension of this file without the leading dot (e.g., "c3typ", "json"), or null if no extension.
        """
            ...
        def fileNameNoExt(self) -> str:
        """
        @return fine name of this file without file extension.
        """
            ...
        def encodedFullPath(self) -> str:
        """
        @return encoded full path of this file. It includes package but doesn't include scheme. Full path always starts
        with '/'.
        ```
           /foundation/src/test%20types/TestType.c3typ
           /foundation/test/src/other/OtherType.c3typ
        ```
        """
            ...
        def fullPath(self) -> str:
        """
        @return full path of this file. It includes package but doesn't include scheme. This path always starts with '/'.
        ```
           /foundation/src/test types/TestType.c3typ
           /foundation/test/src/other/OtherType.c3typ
        ```
        """
            ...
        def fullDir(self) -> str:
        """
        @return full directory path of this file. This is like #fullPath, but without the file name.
        ```
           /foundation/src/test types/
           /foundation/test/src/other/
        ```
        """
            ...
        def encodedSubPathWithCategory(self) -> str:
        """
        URL encoded sub path of the pkg path along with category. This path is
        always relative.
        ```
           src/test%20types/TestType.c3typ
           test/src/other/OtherType.c3typ
        ```
        """
            ...
        def subPathWithCategory(self) -> str:
        """
        sub path of the pkg path along with category. This path is
        always relative. It is not encoded.
        
        ```
           src/test types/TestType.c3typ
           test/src/other/OtherType.c3typ
        ```
        """
            ...
        def encodedDepPath(self) -> Union[str]:
        """
        return encoded dependency pkg path, if this is a dep overlay, i.e.isDep true.
        """
            ...
        def depPath(self) -> Union[str]:
        """
        return dependency pkg path, if this is a dep overlay, i.e.isDep true.
        """
            ...
        def isIssue(self) -> bool:
        """
        return true, if this is a path/file representing Pkg.Issue. Read content to get issues.
        """
            ...
        @classmethod
        def fromUrlOrEncodedPath(cls, urlOrEncodedPath: str) -> Pkg.Path:
        """
        @return pkg path parsed from pkg URL or encoded full path
        """
            ...
        @overload
        @classmethod
        def fromSubPath(cls, pkg: str, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
        """
        @return pkg path constructed from package name, category, and subpath
        """
            ...
        @overload
        @classmethod
        def fromSubPath(cls, pkg: Pkg, category: str, subPath: str, overlay: str=None) -> Pkg.Path:
        """
        @return pkg path constructed from Pkg instance, category, and subpath
        """
            ...
        @classmethod
        def fromUrlOrPath(cls, urlOrPath: str) -> Pkg.File:
        """
        @return new instance of Pkg.File for meta URL or encoded full path.
        """
            ...
        def safeUrl(self) -> str:
        """
        @return Pkg URL for this path
        """
            ...
        def safeTargetType(self) -> Union[str]:
        """
        If this metadata file is for a C3 type (e.g, JavaScript code, JSON content, type DSL etc) then name of that type.
        """
            ...
        def safeTargetTypePart(self) -> Union[str]:
        """
        If this Pkg path is for a C3 type (e.g, JavaScript code, type DSL etc) then type of the part.
        """
            ...
        def isValid(self, includeTest: bool=None) -> bool:
        """
        return true, if this Pkg path is valid. not Pkg.Category.OTHER and excludeTest if not asked tobe included.
        """
            ...
        def isHidden(self) -> bool:
        """
        return true, if the file or  parent folder in the path is hidden.
        """
            ...
        def testRequirement(self) -> Union[str]:
        """
        return test {@link Action.Requirement} for a given Pkg path.
        """
            ...
        def serDeser(self) -> Union[SerDeser]:
        """
        @return serializer / deserializer for file extension of this URL or `null` if none available
        """
            ...
        def serTypeName(self, failIfMissing: bool=None) -> Union[str]:
        """
        @return the prototype name for this path. If the Pkg path does not have a type, we will attempt to read to content
         to see if it has a 'type' field. If it does, we will return the serType associated with that type. Else, we will
         return null
        """
            ...
        def isAnyText(self) -> bool:
        """
        @return true if this is a text content (not simply plain text but csv, json, xml etc).
        I.e. readString is meaningful on a Content.
        """
            ...
        def isAnyTextImpl(self, mediaType: str) -> bool:
        """
        Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
        ({@link ContentType}, {@link ContentMeta}).
        """
            ...
        def isPlainText(self) -> bool:
        """
        @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
        """
            ...
        def isBinary(self) -> bool:
        """
        @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
        """
            ...
        def isCsv(self) -> bool:
        """
        @return true if this is a csv content.
        """
            ...
        def isGreenButtonCsv(self) -> bool:
        """
        @return true if this is a green button csv content.
        """
            ...
        def isGreenButtonXml(self) -> bool:
        """
        @return true if this is a green button xml content.
        """
            ...
        def isJson(self) -> bool:
        """
        @return true if this is a json content.
        """
            ...
        def isJsonLines(self) -> bool:
        """
        @return true if this is a json content. http://jsonlines.org/.
        """
            ...
        def isYaml(self) -> bool:
        """
        @return true if this is YAML content.
        
        @see https://yaml.org/
        """
            ...
        def isXml(self) -> bool:
        """
        @return true if this is a xml content.
        """
            ...
        def isXlsx(self) -> bool:
        """
        @return true if this is a xlsx content.
        """
            ...
        def isEdi(self) -> bool:
        """
        @return true if this is a X12-EDI content.
        """
            ...
        def isC3Binary(self) -> bool:
        """
        @return true if this is c3 binary content.
        """
            ...
        def isC3Type(self) -> bool:
        """
        @return true if this is a c3 type content.
        """
            ...
        def isJavaScript(self) -> bool:
        """
        @return true if this is a JavaScript content.
        """
            ...
        def isPython(self) -> bool:
        """
        @return true if this is a Python content.
        """
            ...
        def isR(self) -> bool:
        """
        @return true if this is a R content.
        """
            ...
        def isRuby(self) -> bool:
        """
        @return true if this is a ruby source code content.
        """
            ...
        def isJava(self) -> bool:
        """
        @return true if this is a Java content.
        """
            ...
        def isTypeScript(self) -> bool:
        """
        @return true if this is a Java Script content.
        """
            ...
        def isAnyCode(self) -> bool:
        """
        @return true if this is any source code content.
        """
            ...
        def isAvro(self) -> bool:
        """
        @return true if this is an Apache Avro content.
        """
            ...
        def isParquet(self) -> bool:
        """
        @return true if this is an Apache Parquet content.
        """
            ...
        def isHdf5(self) -> bool:
        """
        @return true if this is HDF5 content.
        """
            ...
        def isHtml(self) -> bool:
        """
        @return true if this is HTML content.
        """
            ...
        def isZip(self) -> bool:
        """
        @return true if this is a Zip file content.
        """
            ...
        def isDsl(self) -> bool:
        """
        @return true if this is a Dsl file content.
        """
            ...
        def isTypeDsl(self) -> bool:
        """
        @return true if this is a Type Dsl file content.
        """
            ...
        def isUiDsl(self) -> bool:
        """
        @return true if this is a UI Dsl file content.
        """
            ...
        def isDoc(self) -> bool:
        """
        @return true if this is a (c3) Doc file content.
        """
            ...
        def isMarkdown(self) -> bool:
        """
        @return true if this is a Markdown file content.
        """
            ...
        def isImage(self) -> bool:
        """
        @return true if this is a an image content.
        """
            ...
        def isSvg(self) -> bool:
        """
        @return true if this is a SVG content.
        """
            ...
        def isPng(self) -> bool:
        """
        @return true if this is a PNG content.
        """
            ...
        def isJpeg(self) -> bool:
        """
        @return true if this is a JPEG content.
        """
            ...
        def charset(self) -> Union[str]:
        """
        @return character set if this content is text.
        """
            ...
        def parseUrl(self) -> Union[FileUrl]:
        """
        @return parsed content URL.
        """
            ...
        def safeContentType(self) -> str:
        """
        @return Content Type if provided or best guess based on file name.
        """
            ...
        def safeContentEncoding(self) -> str:
        """
        @return Content Encoding if provides or best guess based on file name.
        """
            ...
        def contentTypeParams(self) -> Union[Map[str, str]]:
        """
        @return content type custom parameters.
        """
            ...
        def parseContentType(self) -> ContentType:
        """
        @return parsed content type.
        """
            ...
        def guessContentTypeAndEncoding(self) -> Pair[str, str]:
        """
        @return content type and encoding if known or best guess based on available info; first part of the pair is
                content type.
        """
            ...
        def directoryUrl(self) -> str:
        """
        Retrieves directory url if the content location points to a file.
        """
            ...
        def filePrimaryExt(self) -> Union[str]:
        """
        Retrieves primary extension of the file referenced by content location or `null` if file doesn't have it. Primary
        extension is last token after last `.`; e.g. for `file.tar.gz` it will return `gz`.
        """
            ...
        def fileSecondaryExt(self) -> Union[str]:
        """
        Retrieves secondary extension of the file referenced by content location or `null` if file doesn't have it.
        Secondary extension is second to last token before last `.`; e.g. for `file.tar.gz` it will return `tar`.
        """
            ...
        def withFileName(self, fileName: str) -> Pkg.File.Value:
        """
        Changes file name in this instance.
        """
            ...
        def withFileExt(self, fileExt: str) -> Pkg.File.Value:
        """
        Changes file extension in this instance.
        """
            ...
        def hasFileExt(self, ext: str) -> bool:
        """
        Check whether this content has the specified file extension (case insensitive).
        Handles extensions with and without '.' prefix, as well as compound extensions.
        
        @param ext file extension to check, with or without period (e.g., "py" or ".py")
        @see #fileExt
        @see FileExt
        """
            ...
        def safeUrlImpl(self, url: str=None) -> Union[str]:
        """
        Helper methods for sub-types to implement safeUrl;
        
        @return url passed as param if not void or this.contentLocation if set or throws exception.
        """
            ...
        def safeETag(self) -> Union[str]:
        """
        @return {@link eTag} if present otherwise read eTag from File located at {@link contentLocation}. Throws exception
        if contentLocation is not present
        """
            ...
        def identify(self, suffix: str=None) -> Pkg.File.Value:
        """
        Adds an id and generates an in memory content location.
        if suffix provided, will use suffix instead of random uuid.
        """
            ...
        def renderer(self) -> Union[HtmlRenderer]:
        """
        Render content as HTML if possible.
        """
            ...
        def isReadOnly(self) -> bool:
        """
        @return true if this content can't be modified.
        """
            ...
        def isWriteOnly(self) -> bool:
        """
        @return true if this content can't be read.
        """
            ...
        def isEmpty(self, spec: FileOperationSpec=None) -> bool:
        """
        @return true if this content is empty; i.e. contentLength <= 0.
        """
            ...
        def readMetadata(self, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
        or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
        content location. Also sets hasMetadata flag so that consecutive calls are fast.
        
        If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
        
        @see FileOperationSpec.peekForMetadata
        
        @return abstract content with metadata.
        """
            ...
        def refreshMetadata(self, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
        hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
        needs to be refreshed.
        """
            ...
        def guessMetadata(self, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
        encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
        extra IO.
        
        Also sets {@link Content#hasMetadata} to true.
        
        @see FileOperationSpec.peekForMetadata
        
        @return abstract content with metadata.
        """
            ...
        def clearMetadata(self) -> Pkg.File.Value:
        """
        Clears the content metadata; e.g. if it's known to be invalid.
        """
            ...
        def withMetadata(self, meta: ContentMeta=None) -> Pkg.File.Value:
        """
        @return clone of this content with metadata from provided input.
        """
            ...
        @classmethod
        def metadataFields(cls) -> Array[str]:
        """
        Supported fields from {@link ContentMeta} for thus content kind; e.g. contentLength, lastModified, etc
        """
            ...
        def encodedPushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File.Value, BytePushStream]:
        """
        @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
        contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
        higher level apis instead.
        """
            ...
        def pushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File.Value, BytePushStream]:
        """
        @return byte push stream to be used for writing un-encoded data into this content object.
        """
            ...
        def charPushStream(self, spec: FileOperationSpec=None) -> Pair[Pkg.File.Value, CharPushStream]:
        """
        @return character push stream to be used for writing un-encoded data into this content object.
        """
            ...
        def encodedStream(self, spec: FileOperationSpec=None) -> Union[Pair[Pkg.File.Value, ByteStream]]:
        """
        Reads the raw (possibly compressed) content as byte stream. E.g. if contentEncoding is set then data is going
        to be encoded (compressed). It is highly recommended to use higher level apis instead.
        
        @return the content as byte stream.
        """
            ...
        def stream(self, spec: FileOperationSpec=None) -> Union[ByteStream]:
        """
        Reads the de-coded (uncompressed) content as byte stream.
        
        @see FileOperationSpec.peekForMetadata
        
        @return the content as byte stream.
        """
            ...
        def charStream(self, spec: FileOperationSpec=None) -> Union[CharStream]:
        """
        Reads the de-coded (uncompressed) content as character stream.
        
        @see FileOperationSpec.peekForMetadata
        
        @return the content as character stream.
        """
            ...
        def read(self, offset: int=None, len: int=None, spec: FileOperationSpec=None) -> Union[any]:
        """
        Reads the content. IMPORTANT to avoid using read with increasing offset to read content in blocks. It is strongly
        recommended to use stream based methods in such cases.
        
        @see FileOperationSpec.peekForMetadata
        
        @param offset
                  offset in bytes; defaults to 0.
        @param len
                  number of bytes to read; defaults to entire file size.
        @return the content.
        """
            ...
        def readEncoded(self, spec: FileOperationSpec=None) -> Union[any]:
        """
        Reads the encoded content.
        
        @return the encoded content.
        """
            ...
        def readContentValue(self, offset: int='0', len: int=None, spec: FileOperationSpec=None) -> ContentValue:
        """
        Reads the content as ContentValue.
        
        @see FileOperationSpec.peekForMetadata
        
        @param offset
                  offset in bytes defaults to 0
        @param len
                  number of bytes to read; defaults to entire file size.
        @return the content.
        """
            ...
        def readString(self, offset: int=None, len: int=None, spec: FileOperationSpec=None) -> Union[str]:
        """
        Reads the content as string. IMPORTANT to avoid using readString with increasing offset to read full content in
        blocks. It is strongly recommended to use stream based methods in such cases.
        
        @see FileOperationSpec.peekForMetadata
        
        @param offset
                  offset in bytes defaults to 0
        @param len
                  maximum length of the string; defaults to entire file size.
        @return the content.
        """
            ...
        def readObj(self, spec: FileObjsOperSpec=None) -> Union[Obj]:
        """
        Deserializes content from file into a single C3 Type instance. Throws exception if file contains more then one
        instance.
        
        @see FileObjsOperSpec.targetType
        
        @return single object or null if file is empty
        """
            ...
        def readObjs(self, spec: FileObjsOperSpec=None) -> Union[Stream[Obj]]:
        """
        Deserializes content from file into a list of C3 Type instances.
        
        @see FileObjsOperSpec.targetType
        
        @return stream of objects
        """
            ...
        def readJson(self, spec: FileObjsOperSpec=None) -> Union[any]:
        """
        Deserializes content from file into a json objects.
        
        @return a json object
        """
            ...
        def readJsonLines(self, spec: FileObjsOperSpec=None) -> Union[Stream[any]]:
        """
        Deserializes content from file into a list of json objects.
        
        @return stream of json objects
        """
            ...
        def readCsvHeader(self, spec: FileObjsOperSpec=None) -> Union[Array[str]]:
        """
        Reads CSV file header if content contains it or retrieves header from file metadata or spec#csvHeader.
        
        @return CSV header
        """
            ...
        def readCsvRows(self, spec: FileObjsOperSpec=None) -> Union[Stream[Array[str]]]:
        """
        Deserializes content from CSV content into a stream of row i.e. column values. Note that first element in the
        stream will be CSV header read either from content or from it's metadata or from spec#csvHeader.
        
        @return stream of parsed CSV rows
        """
            ...
        def readFirstLine(self) -> Union[str]:
        """
        @return the first line of the text content.
        """
            ...
        def readLines(self) -> Union[Stream[str]]:
        """
        @returns text content lines.
        """
            ...
        @overload
        def grep(self, patterns: Array[RegexPattern], spec: Content.GrepSpec=None) -> Content.GrepResult:
        """
        Match regex patterns against content lines.
        
        @param patterns Array of compiled regex patterns to match
        @param spec Controls matching behavior (mode, limits, etc)
        @return Match results
        """
            ...
        @overload
        def grep(self, pattern: str) -> StringPatternMatch:
        """
        Match a single regex pattern against content lines.
        Returns the first match found with captured groups.
        
        @param pattern Regex pattern string to match
        @return First match result (or no-match result with score=0 if not found)
        """
            ...
        @overload
        def grep(self, pattern: RegexPattern) -> StringPatternMatch:
        """
        Match a single regex pattern against content lines.
        Returns the first match found with captured groups.
        
        @param pattern Compiled regex pattern to match
        @return First match result (or no-match result with score=0 if not found)
        """
            ...
        def writeStream(self, content: ByteStream, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's content with provided binary content.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's content with provided binary content.
        """
            ...
        def writeZipInputStream(self, zipInputStream: Any, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces its content with provided binary content from zipInputStream
        """
            ...
        def writeEncodedStream(self, encodedContent: ByteStream, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        
        @param content
                  encoded content that needs to be written
        """
            ...
        def writeEncodedInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        """
            ...
        def write(self, content: any, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's content with provided binary content.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeEncoded(self, encodedContent: any, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        
        @param content
                  encoded content that needs to be written
        """
            ...
        def writeString(self, content: str, spec: FileOperationSpec=None) -> Pkg.File.Value:
        """
        Truncates file and replaces it's content with provided string.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeObj(self, obj: Obj, spec: FileObjsOperSpec=None) -> Pkg.File.Value:
        """
        Serializes content from a single c3 objects into a file.
        
        @param obj
                 obj that needs to be written
        @param spec
                 file operation spec giving more information about how obj should be written
        """
            ...
        def writeObjs(self, objs: Stream[Obj], spec: FileObjsOperSpec=None) -> Pair[Content, int]:
        """
        Serializes content from a list of c3 objects into a file.
        
        @param objs
                 objs that need to be written
        @param spec
                 file operation spec giving more information about how objs should be written
        @return pair of update instance of this content and number of objs written
        """
            ...
        def startWriteObjs(self, spec: FileObjsOperSpec=None) -> Pair[Pkg.File.Value, PushStream[Obj]]:
        """
        Serializes content from a list of c3 objects into a file.
        
        @param objs
                 objs that need to be written
        @param spec
                 file operation spec giving more information about how objs should be written
        @return pair of update instance of this content and number of objs written
        """
            ...
        def serType(self, spec: FileObjsOperSpec=None) -> Union[Type]:
        """
        Serialization target type if this content is instance(s) of C3 type.
        
        @see FileObjsOperSpec.targetType
        """
            ...
        def transformSource(self, transformSpec: SourceTransformSpec=None, spec: FileObjsOperSpec=None) -> Union[SourceTransformResult]:
        """
        If this content target type is Source type then transform content into corresponding C3 Type instances.
        Source Type is determined from content itself (via #serType).
        """
            ...
        def contentTypeAndEncodingMatch(self, contentType: str=None, contentEncoding: str=None, spec: FileOperationSpec=None) -> bool:
        """
        Checks if content type and encoding is matching the given values.
        """
            ...
        def compress(self, contentEncoding: str=None, spec: FileCompressSpec=None) -> Pkg.File.Value:
        """
        Compresses the given file content. Compressed file will have a different extension.
        
        @param contentEncoding
                   compression content encoding; default is gzip.
        """
            ...
        def uncompress(self, spec: FileCompressSpec=None) -> Pkg.File.Value:
        """
        Uncompresses file. Removes compression specific extension.
        """
            ...
        def transcode(self, contentType: str, contentEncoding: str, spec: FileCompressSpec=None) -> Pkg.File.Value:
        """
        Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
        
        @param contentType
                   new content type.
        @param contentEncoding
                   new content encoding.
        """
            ...
        def copyContentTo(self, target: Pkg.File.Value, spec: FileOperationSpec=None) -> None:
        """
        Copies content to a given target.
        """
            ...
        def copyContentToStream(self, target: BytePushStream, doNotCloseTarget: bool=None, spec: FileOperationSpec=None) -> None:
        """
        Copies content to a given target.
        """
            ...
        def cksum(self, useEncodedContent: bool=None, spec: FileOperationSpec=None) -> int:
        """
        Computes the cksum of the file (same as unix utility cksum)
        @param userEncodedContent
                  If true, the cksum will skill the decoding of the file
        @return the checksum of the file
        """
            ...
        def safeMd5(self, spec: FileOperationSpec=None) -> str:
        """
        @return md5 from metadata if it exists otherwise compute from content and return.
        """
            ...
        def osGrep(self, pattern: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `grep` utility over this content.
        """
            ...
        def osSed(self, script: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `sed` utility over this content.
        """
            ...
        def osAwk(self, program: str, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `awk` utility over this content.
        """
            ...
        def osSort(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `sort` utility over this content.
        """
            ...
        def osTSort(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `tsort` utility over this content.
        """
            ...
        def osUniq(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `uniq` utility over this content.
        """
            ...
        def osExpand(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `expand` utility over this content.
        """
            ...
        def osUnexpand(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `unexpand` utility over this content.
        """
            ...
        def osHead(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `head` utility over this content.
        """
            ...
        def osTail(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `tail` utility over this content.
        """
            ...
        def osWc(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `wc` utility over this content.
        """
            ...
        def osFold(self, args: Array[str]=None, spec: FileOperationSpec=None) -> CharStream:
        """
        @return result of OS `fold` utility over this content.
        """
            ...
        def osCommands(self, commands: Array[str], spec: FileOperationSpec=None) -> ByteStream:
        """
        @return result of OS command pipeline over this content.
        """
            ...
        def toContentValue(self, spec: FileOperationSpec=None) -> ContentValue:
        """
        Reads this content as ContentValue.
        """
            ...
        @classmethod
        def nullContent(cls) -> Content:
        """
        @return content that is always empty even if data is written to it.
        """
            ...
        @classmethod
        def encode(cls, content: str, contentType: str=None, contentEncoding: str=None) -> any:
        """
        Encodes given string into a binary based on contentType and contentEncoding.
        """
            ...
        @classmethod
        def decode(cls, content: any, contentType: str=None, contentEncoding: str=None) -> str:
        """
        Decodes given binary into a string based on contentType and contentEncoding.
        """
            ...
        def filterContentLines(self, action: Callable[[Union[str]], Union[str]]=None) -> Union[CharStream]:
        """
        Applied lambda action to filter content and return stream of lines
        """
            ...
        def inferType(self, spec: InferTypeSpec=None) -> InferValueTypeResult:
        """
        Infer serialization type from this content.
        """
            ...
        def avroParquetSchema(self, failIfMissing: bool=None) -> Union[str]:
        """
        returns Avro and parquet in stringified json.
        """
            ...
        @overload
        def concat(self, other: Content) -> Pkg.File.Value:
        """
        Creates a new Content by merging the two contents
        """
            ...
        @overload
        def concat(self, other: any) -> Pkg.File.Value:
        """
        Creates a new Content by merging the incoming binary data with current content
        """
            ...
        def hyperLogLogForCsv(self) -> Map[int, HyperLogLog]:
            ...
        @classmethod
        def fromStream(cls, stream: Stream[Any], contentType: str=None, contentEncoding: str=None) -> Content:
        """
        Creates the read once content from provided C3 stream
        """
            ...
        @classmethod
        def fromByteStream(cls, encodedStream: ByteStream, contentType: str=None, contentEncoding: str=None) -> Content:
        """
        Creates the read once content from provided C3 byte-stream
        """
            ...
        @classmethod
        def fromCharStream(cls, charStream: CharStream, contentType: str=None, contentEncoding: str=None) -> Content:
        """
        Creates the read once content from provided C3 byte-stream
        """
            ...
        @overload
        @classmethod
        def fromBinary(cls, encodedBinary: any, contentType: str=None, contentEncoding: str=None) -> Content:
        """
        Creates the content value from a binary value.
        """
            ...
        @overload
        @classmethod
        def fromBinary(cls, encodedBinary: any, contentType: str, contentEncoding: str, pathOrUrl: str) -> Union[Pkg.File.Value]:
            ...
        @overload
        @classmethod
        def fromText(cls, text: str, contentType: str=None, contentEncoding: str=None) -> Content:
        """
        Creates the content value from a string value.
        """
            ...
        @overload
        @classmethod
        def fromText(cls, pathOrUrl: str, contentType: str, text: str) -> Union[Pkg.File.Value]:
            ...
        @overload
        @classmethod
        def fromText(cls, text: str, contentType: str, contentEncoding: str, pathOrUrl: str) -> Union[Pkg.File.Value]:
            ...
        @classmethod
        def fromLambda(cls, contentProducer: Callable[[], Union[any]]=None) -> Union[Content]:
        """
        Creates the content from lambda
        """
            ...
        @classmethod
        def fromJavaOutputStream(cls, outputStream: Any=None) -> Content:
        """
        Creates write once content from a Java OutputStream.
        """
            ...
        @classmethod
        def fromJavaResource(cls, javaResourcePath: str, failIfMissing: bool=None) -> Content:
        """
        Creates the content value from a Java resource.
        """
            ...
        @classmethod
        def readLocalFiles(cls, url: str) -> Array[Content]:
        """
        Creates a list of content values from files.
        """
            ...
        def callWithRetry(self, supplier: Callable[[], Union[T]], desc: str, spec: FileOperationSpec=None) -> Union[T]:
        """
        Retry logic is dictated by {@link FileSystemConfig}
        """
            ...
        def fs(self) -> FileSystem:
        """
        Retrieves file-system for this file.
        """
            ...
        def fileMeta(self, refresh: bool=None) -> FileMeta:
        """
        Retrieves corresponding cached {@link FileMeta}.
        
        If `refresh` parameter is set then will use current metadata of the file to refresh cached state. If this instance
        does not have metadata will read it from file-system.
        
        Note that this method will always return {@link FileMeta} even if file metadata is not cached in which case
        {@link FileMeta#isCached} method will return `false`.
        """
            ...
        def externalUrl(self) -> Union[str]:
        """
        Retrieves external URL for this file.
        """
            ...
        @classmethod
        def createFile(cls, urlOrEncodedPath: str, content: any=None, contentType: str=None, contentEncoding: str=None, spec: FileOperationSpec=None) -> File:
        """
        Creates a new file with given content and meta.
        """
            ...
        def exists(self, spec: FileOperationSpec=None) -> bool:
        """
        Check if file exists.
        """
            ...
        def touch(self, spec: FileOperationSpec=None) -> File:
        """
        Updates file access and modification times.
        """
            ...
        def delete(self, spec: DeleteFileOperationSpec=None) -> None:
        """
        Deletes this file.
        """
            ...
        def copy(self, destUrlOrEncodedPath: str, spec: FileOperationSpec=None) -> File:
        """
        Copies file to another destination.
        
        @param destUrlOrEncodedPath
                    complete path to destination file. Cannot be a directory path or same path as src file.
        """
            ...
        def move(self, destUrlOrEncodedPath: str, spec: FileOperationSpec=None) -> File:
        """
        Moves/renames file.
        
        @param destUrlOrEncodedPath
                    complete path to destination file. Cannot be a directory path or same path as src file.
        """
            ...
        def truncate(self) -> File:
        """
        Truncates the given file and makes it empty.
        """
            ...
        def replaceContentType(self, contentType: str, spec: FileOperationSpec=None) -> File:
        """
        Replaces the content type without modifying the content.
        
        @param contentType
                   new content type.
        """
            ...
        def replaceContentEncoding(self, contentEncoding: str, spec: FileOperationSpec=None) -> File:
        """
        Replaces the content encoding without modifying the content.
        
        @param contentEncoding
                   new content encoding.
        """
            ...
        def replaceContentTypeAndEncoding(self, contentType: str, contentEncoding: str, spec: FileOperationSpec=None) -> File:
        """
        Replaces the content type and encoding without modifying the content.
        
        @param contentType
                   new content type.
        @param contentEncoding
                   new content encoding.
        """
            ...
        def zip(self, spec: FileCompressSpec=None) -> File:
        """
        Creates a ZIP file from the given file content. Compressed file will have a .zip extension.
        """
            ...
        def unzipFirst(self, rootUrlOrEncodedPath: str=None, spec: FileCompressSpec=None) -> Union[File]:
        """
        Uncompresses first entry in a ZIP file.
        """
            ...
        def unzip(self, rootUrlOrEncodedPath: str=None, spec: FileCompressSpec=None) -> Union[Array[File]]:
        """
        Uncompresses all entries in a ZIP file.
        """
            ...
        def cachedFile(self, spec: FileOperationSpec=None) -> File:
        """
        @return cached copy i.e. local file with same metadata and content.
        """
            ...
        @classmethod
        def getRetrySpec(cls, spec: FileOperationSpec=None, scheme: str=None) -> RetrySpec:
        """
        @return the retry spec for a file operation. If a retry spec is present with the FileOperationSpec, that
        will take priority, otherwise it will default to using the FileSystemConfigChild corresponding to the scheme
        """
            ...
        def parentDirectories(self) -> Union[Array[str]]:
        """
        @return list of parent directory names starting from root. If file doesn't have any parent directory i.e. located
                immediately under file-system mount then returns empty.
        """
            ...
        def parentDirectoryUrls(self) -> Array[str]:
        """
        @return list of parent directory urls starting from mount URL.
        """
            ...
        def eachParentDirectory(self, action: Callable[[Union[str]]]) -> int:
        """
        Calls provided action by passing URL of each parent directory of this file starting from root.
        
        E.g. for `s3://data-load/mount/dir1/dir2/file` located under `s3://data-load/mount/` mount URL this method will
        call `action` 3 times with:
        - `s3://data-load/mount/`
        - `s3://data-load/mount/dir1/`
        - `s3://data-load/mount/dir1/dir2/`
        """
            ...
        def apiEndpoint(self, httpMethod: str=None, fullyQualified: bool=None) -> str:
        """
        @return /file/ API endpoint for this file. It can be used to download (or upload) File content. By default it will
               return the relative endpoint (to the running cluster) for GET operations. This is helpful for placing
               download link in the UI.
        """
            ...
        def isZipFile(self) -> bool:
        """
        @return true if this is an ZIP file.
        """
            ...
        def asZipFile(self) -> Union[ZipFile]:
        """
        @return instance of ZipFile or null if this is not ZipFile.
        """
            ...
        def isS3File(self) -> bool:
        """
        @return true if this is an S3File.
        """
            ...
        def asS3File(self) -> Union[S3File]:
        """
        @return instance of S3File or null if this is not S3File.
        """
            ...
        def isAzureFile(self) -> bool:
        """
        @return true if this is an AzureFile.
        """
            ...
        def asAzureFile(self) -> Union[AzureFile]:
        """
        @return instance of AzureFile or null if this is not AzureFile.
        """
            ...
        def isLocked(self, spec: FileOperationSpec=None) -> bool:
        """
        @return true if the file is locked/leased.
        
        Throws an exception if FileSystem does not provide file locking capabilities.
        """
            ...
        def breakLock(self, spec: FileOperationSpec=None) -> None:
        """
        Breaks the lock/lease on the file (or its blob), if it is locked/leased.
        
        Throws an exception if FileSystem does not provide file locking capabilities.
        """
            ...
        def generatePresignedUrl(self, httpMethod: str='\'GET\'', duration: str='\'1h\'', spec: FileOperationSpec=None) -> str:
        """
        Generates pre-signed URL that can be used to upload/download files to/from object storage using HTTP.
        
          1. Content-Type has to be specified for PUT operation.
          2. Content-Length has to be specified for PUT operation.
          3. x-ms-blob-type has to be specified for PUT operation on AzureFile. <BlockBlob | PageBlob | AppendBlob>
        
        @param httpMethod
                 Type of HTTP request, could be GET, PUT, POST, PATCH, or DELETE.
        @param duration
                 Specifies how long the presignedUrl is valid. See Duration.fromString for more details.
        @param spec
                 Provides options for various File actions.
        """
            ...
        def isChildOf(self, url: str=None) -> bool:
        """
        @return True if the current file is a child of the provided url.
        """
            ...
        @classmethod
        def fromMetaPath(cls, path: Pkg.Path) -> Pkg.File:
        """
        New Pkg.File from a given Pkg.Path.
        """
            ...
        def withMetaPath(self, path: Pkg.Path) -> Pkg.File:
        """
        New Pkg.File with a given Pkg.Path.
        """
            ...
        def inMemoryCopy(self) -> Pkg.File.Value:
        """
        @return in memory copy of this Pkg.File with embedded content. This means read* methods don't need to perform
        any IO.
        """
            ...
        @classmethod
        def fromFile(cls, file: File) -> Pkg.File:
            ...
        @classmethod
        def fromDb(cls, dbMetaFile: Pkg.File.Db) -> Pkg.File:
            ...
        def deps(self) -> Union[PkgFileDeps]:
            ...
        def save(self) -> Pkg.File:
        """
        Saves this in memory metadata file into current metadata store.
        """
            ...
        @classmethod
        def fromData(cls, pathOrUrl: str, contentType: str, data: any) -> Union[Pkg.File.Value]:
            ...

