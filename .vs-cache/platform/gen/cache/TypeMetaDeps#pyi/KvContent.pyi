#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.FieldType import FieldType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.Pair import Pair
from c3.platform.Pair import Pair
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Content import Content
from c3.platform.KvStore import KvStore
from c3.platform.Pair import Pair
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.HyperLogLog import HyperLogLog
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.FileOperationSpec import FileOperationSpec
from c3.platform.Pair import Pair
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SourceTransformSpec import SourceTransformSpec
from c3.platform.FileCompressSpec import FileCompressSpec
from c3.platform.Pair import Pair
from c3.platform.SetType import SetType
from c3.platform.Pair import Pair
from c3.platform.ByteStream import ByteStream
from c3.platform.MapType import MapType
from c3.platform.Content.GrepResult import Content.GrepResult
from c3.platform.Content.GrepSpec import Content.GrepSpec
from c3.platform.Exclude import Exclude
from c3.platform.CharStream import CharStream
from c3.platform.RegexPattern import RegexPattern
from c3.platform.SetBuilder import SetBuilder
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.KvRow import KvRow
from c3.platform.InferTypeSpec import InferTypeSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ContentType import ContentType
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ContentMeta import ContentMeta
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Url import Url
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.ContentValue import ContentValue
from c3.platform.Pair import Pair
from c3.platform.Pair import Pair
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.Promise import Promise
from c3.platform.Stream import Stream
from c3.platform.BytePushStream import BytePushStream
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.InferValueTypeResult import InferValueTypeResult
from c3.platform.Pair import Pair
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.StringPatternMatch import StringPatternMatch
from c3.platform.SourceTransformResult import SourceTransformResult

# Python definitions for the C3 type KvContent


class KvContent(KvRowMeta, Content):
    """
    The content associated to a row in a {@link KvStore}.
    
    @remarks this represents a made instance of KvContent
    """
    
    tableName: Optional[str]
    """
    table associated with the content
    """

    rowId: Optional[str]
    """
    rowId associated with the content
    """

    store: Optional[KvStore[KvStoreConfig]]
    """
    store associated with the content
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

    colName: Optional[str]
    """
    The column name of the {@link KvRow} that this KvContent is associated to.
    """
    def __init__(self, tableName: Optional[str]=None, rowId: Optional[str]=None, store: Optional[KvStore[KvStoreConfig]]=None, contentEncoding: Optional[str]=None, contentLanguage: Optional[str]=None, contentLength: Optional[int]=None, contentLocation: Optional[str]=None, contentType: Optional[str]=None, contentDisposition: Optional[str]=None, eTag: Optional[str]=None, lastModified: Optional[datetime]=None, lastModifiedBy: Optional[str]=None, contentMD5: Optional[str]=None, contentSHA1: Optional[str]=None, hasMetadata: Optional[bool]=None, colName: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[KvContent]:
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
    def fromJsonString(cls, json: str) -> Union[KvContent]:
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
    def fromXmlString(cls, xml: str) -> Union[KvContent]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[KvContent]:
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
    def replaceType(self, old: Type, new: Type) -> KvContent:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> KvContent:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> KvContent:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[KvContent]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[KvContent]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> KvContent:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> KvContent:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> KvContent:
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
    def validateObj(self) -> KvContent:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> KvContent:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> KvContent:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> KvContent:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> KvContent:
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
    def withoutFieldAtPath(self, path: str) -> KvContent:
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
    def withoutField(self, field: str) -> KvContent:
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
    def withoutField(self, field: FieldType) -> KvContent:
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
    def withoutFields(self, fields: Array[str]) -> KvContent:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> KvContent:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> KvContent:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> KvContent:
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
    def defaultField(self, field: str) -> KvContent:
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
    def defaultField(self, field: FieldType) -> KvContent:
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
    def unsetField(self, field: str) -> KvContent:
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
    def unsetField(self, field: FieldType) -> KvContent:
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
    def removeField(self, field: str) -> KvContent:
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
    def removeField(self, field: FieldType) -> KvContent:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> KvContent:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> KvContent:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> KvContent:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> KvContent:
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
    def mergeJson(self, json: any) -> KvContent:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> KvContent:
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
    def sumObj(self, other: Obj, deep: bool=None) -> KvContent:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[KvContent]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[KvContent]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[KvContent]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[KvContent]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[KvContent]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, KvContent]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, KvContent]]:
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
    def toBuilder(self) -> ObjBuilder[KvContent]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[KvContent]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> KvContent:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> KvContent:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> KvContent:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> KvContent:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> KvContent:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> KvContent:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> KvContent:
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
    def afterMake(self) -> KvContent:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> KvContent:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[KvContent]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> KvContent:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
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
    def safeUrl(self) -> Union[str]:
    """
    @return URL for this content. Note that it is best to use this method instead of other optional fields like
    contentLocation or url (for other sub types). Throws error if URL is not available.
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
    def fileName(self) -> Union[str]:
    """
    Retrieves name if the content location points to a file.
    """
        ...
    def fileExt(self) -> Union[str]:
    """
    Retrieves extension of the file referenced by content location or `null` if file doesn't have an extension.
    The extension includes the leading dot (e.g., ".py", ".json").
    
    @see #fileExtWithoutDot
    @see #hasFileExt
    @see FileExt
    """
        ...
    def fileExtWithoutDot(self) -> Union[str]:
    """
    Retrieves extension of the file referenced by content location without the leading dot or `null` if file doesn't have an extension.
    Returns the extension without the dot (e.g., "py", "json").
    
    @see #fileExt
    @see #hasFileExt
    @see FileExt
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
    def fileNameNoExt(self) -> Union[str]:
    """
    Retrieves name without file extension if the content location points to a file.
    """
        ...
    def withFileName(self, fileName: str) -> KvContent:
    """
    Changes file name in this instance.
    """
        ...
    def withFileExt(self, fileExt: str) -> KvContent:
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
    def identify(self, suffix: str=None) -> KvContent:
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
    def readMetadata(self, spec: FileOperationSpec=None) -> KvContent:
    """
    Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
    or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
    content location. Also sets hasMetadata flag so that consecutive calls are fast.
    
    If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
    
    @see FileOperationSpec.peekForMetadata
    
    @return abstract content with metadata.
    """
        ...
    def refreshMetadata(self, spec: FileOperationSpec=None) -> KvContent:
    """
    Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
    hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
    needs to be refreshed.
    """
        ...
    def guessMetadata(self, spec: FileOperationSpec=None) -> KvContent:
    """
    Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
    encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
    extra IO.
    
    Also sets {@link Content#hasMetadata} to true.
    
    @see FileOperationSpec.peekForMetadata
    
    @return abstract content with metadata.
    """
        ...
    def clearMetadata(self) -> KvContent:
    """
    Clears the content metadata; e.g. if it's known to be invalid.
    """
        ...
    def withMetadata(self, meta: ContentMeta=None) -> KvContent:
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
    def encodedPushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent, BytePushStream]:
    """
    @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
    contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
    higher level apis instead.
    """
        ...
    def pushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent, BytePushStream]:
    """
    @return byte push stream to be used for writing un-encoded data into this content object.
    """
        ...
    def charPushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent, CharPushStream]:
    """
    @return character push stream to be used for writing un-encoded data into this content object.
    """
        ...
    def encodedStream(self, spec: FileOperationSpec=None) -> Union[Pair[KvContent, ByteStream]]:
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
    def writeStream(self, content: ByteStream, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's content with provided binary content.
    
    @param content
              content that needs to be written
    """
        ...
    def writeInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's content with provided binary content.
    """
        ...
    def writeZipInputStream(self, zipInputStream: Any, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces its content with provided binary content from zipInputStream
    """
        ...
    def writeEncodedStream(self, encodedContent: ByteStream, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    
    @param content
              encoded content that needs to be written
    """
        ...
    def writeEncodedInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    """
        ...
    def write(self, content: any, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's content with provided binary content.
    
    @param content
              content that needs to be written
    """
        ...
    def writeEncoded(self, encodedContent: any, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's encoded content with provided binary content.
    
    @param content
              encoded content that needs to be written
    """
        ...
    def writeString(self, content: str, spec: FileOperationSpec=None) -> KvContent:
    """
    Truncates file and replaces it's content with provided string.
    
    @param content
              content that needs to be written
    """
        ...
    def writeObj(self, obj: Obj, spec: FileObjsOperSpec=None) -> KvContent:
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
    def startWriteObjs(self, spec: FileObjsOperSpec=None) -> Pair[KvContent, PushStream[Obj]]:
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
    def compress(self, contentEncoding: str=None, spec: FileCompressSpec=None) -> KvContent:
    """
    Compresses the given content.
    
    @param contentEncoding
               compression content encoding; default is gzip.
    """
        ...
    def uncompress(self, spec: FileCompressSpec=None) -> KvContent:
    """
    Uncompresses content.
    """
        ...
    def transcode(self, contentType: str, contentEncoding: str, spec: FileCompressSpec=None) -> KvContent:
    """
    Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
    
    @param contentType
               new content type.
    @param contentEncoding
               new content encoding.
    """
        ...
    def copyContentTo(self, target: KvContent, spec: FileOperationSpec=None) -> None:
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
    def concat(self, other: Content) -> KvContent:
    """
    Creates a new Content by merging the two contents
    """
        ...
    @overload
    def concat(self, other: any) -> KvContent:
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
    Retry logic for failed content operations
    
    @param supplier
             The supplier to retry when an exception is thrown
    @param desc
             The description of the function being retried
    @param spec
             The file operation spec with retryable parameters
    """
        ...
    @classmethod
    def fromRow(cls, kvRow: KvRow) -> KvContent:
    """
    Create a KvContent subType instance from the provided KvRow.
    @param kvRow
           the KvRow to create the KvContent from. Note that the kvRow does not have to exist in the KvStore, as long as the
           {@link KvRowMeta meta-fields} are populated in it, and writing the to this KvContent will create the KvRow in the KvStore.
    @return the KvContent subType instance.
    
    @see KvFile
    """
        ...
    def toRow(self) -> KvRow:
    """
    Returns a **KvRow** from this KvContent. Note that, this API does not generate the KvRow in the KvStore.
    """
        ...
    @classmethod
    def fromKvContentUrl(cls, kvContentUrl: str, failIfInvalid: bool=None) -> Union[KvContent]:
    """
    This is a convenient API to get the KvContent by parsing the provided {@link KvStore#kvContentUrl}.
    @param kvContentUrl
           This url is used to build the corresponding KvContent. To successfully return the correct KvContent,
           the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
    @param failIfInvalid
           If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
    @return KvContent instance based on the given kvContentUrl
    """
        ...
    @classmethod
    def isKvContentUrl(cls, url: str) -> bool:
    """
    @return true if the given url is a kvContentUrl of the format: **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
    """
        ...
    
    class Impl(KvContent):
        """
        This is the default KvContent that contains the the default implementations of APIs inherited from {@link Content}.
        This type is used when the KvContent is created from {@link KvStore}s that are not {@link KvStore.FileSystem}.
        
        @see KvFile
        
        @remarks this represents a made instance of KvContent.Impl
        """
        
        tableName: Optional[str]
        """
        table associated with the content
        """

        rowId: Optional[str]
        """
        rowId associated with the content
        """

        store: Optional[KvStore[KvStoreConfig]]
        """
        store associated with the content
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

        colName: Optional[str]
        """
        The column name of the {@link KvRow} that this KvContent is associated to.
        """
        def __init__(self, tableName: Optional[str]=None, rowId: Optional[str]=None, store: Optional[KvStore[KvStoreConfig]]=None, contentEncoding: Optional[str]=None, contentLanguage: Optional[str]=None, contentLength: Optional[int]=None, contentLocation: Optional[str]=None, contentType: Optional[str]=None, contentDisposition: Optional[str]=None, eTag: Optional[str]=None, lastModified: Optional[datetime]=None, lastModifiedBy: Optional[str]=None, contentMD5: Optional[str]=None, contentSHA1: Optional[str]=None, hasMetadata: Optional[bool]=None, colName: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[KvContent.Impl]:
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
        def fromJsonString(cls, json: str) -> Union[KvContent.Impl]:
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
        def fromXmlString(cls, xml: str) -> Union[KvContent.Impl]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[KvContent.Impl]:
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
        def replaceType(self, old: Type, new: Type) -> KvContent.Impl:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> KvContent.Impl:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> KvContent.Impl:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[KvContent.Impl]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[KvContent.Impl]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> KvContent.Impl:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> KvContent.Impl:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> KvContent.Impl:
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
        def validateObj(self) -> KvContent.Impl:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> KvContent.Impl:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> KvContent.Impl:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> KvContent.Impl:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> KvContent.Impl:
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
        def withoutFieldAtPath(self, path: str) -> KvContent.Impl:
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
        def withoutField(self, field: str) -> KvContent.Impl:
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
        def withoutField(self, field: FieldType) -> KvContent.Impl:
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
        def withoutFields(self, fields: Array[str]) -> KvContent.Impl:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> KvContent.Impl:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> KvContent.Impl:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> KvContent.Impl:
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
        def defaultField(self, field: str) -> KvContent.Impl:
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
        def defaultField(self, field: FieldType) -> KvContent.Impl:
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
        def unsetField(self, field: str) -> KvContent.Impl:
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
        def unsetField(self, field: FieldType) -> KvContent.Impl:
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
        def removeField(self, field: str) -> KvContent.Impl:
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
        def removeField(self, field: FieldType) -> KvContent.Impl:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> KvContent.Impl:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> KvContent.Impl:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> KvContent.Impl:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> KvContent.Impl:
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
        def mergeJson(self, json: any) -> KvContent.Impl:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> KvContent.Impl:
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
        def sumObj(self, other: Obj, deep: bool=None) -> KvContent.Impl:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[KvContent.Impl]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[KvContent.Impl]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[KvContent.Impl]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[KvContent.Impl]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[KvContent.Impl]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, KvContent.Impl]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, KvContent.Impl]]:
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
        def toBuilder(self) -> ObjBuilder[KvContent.Impl]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[KvContent.Impl]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> KvContent.Impl:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> KvContent.Impl:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> KvContent.Impl:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> KvContent.Impl:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> KvContent.Impl:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> KvContent.Impl:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> KvContent.Impl:
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
        def afterMake(self) -> KvContent.Impl:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> KvContent.Impl:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[KvContent.Impl]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> KvContent.Impl:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
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
        def safeUrl(self) -> Union[str]:
        """
        @return URL for this content. Note that it is best to use this method instead of other optional fields like
        contentLocation or url (for other sub types). Throws error if URL is not available.
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
        def fileName(self) -> Union[str]:
        """
        Retrieves name if the content location points to a file.
        """
            ...
        def fileExt(self) -> Union[str]:
        """
        Retrieves extension of the file referenced by content location or `null` if file doesn't have an extension.
        The extension includes the leading dot (e.g., ".py", ".json").
        
        @see #fileExtWithoutDot
        @see #hasFileExt
        @see FileExt
        """
            ...
        def fileExtWithoutDot(self) -> Union[str]:
        """
        Retrieves extension of the file referenced by content location without the leading dot or `null` if file doesn't have an extension.
        Returns the extension without the dot (e.g., "py", "json").
        
        @see #fileExt
        @see #hasFileExt
        @see FileExt
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
        def fileNameNoExt(self) -> Union[str]:
        """
        Retrieves name without file extension if the content location points to a file.
        """
            ...
        def withFileName(self, fileName: str) -> KvContent.Impl:
        """
        Changes file name in this instance.
        """
            ...
        def withFileExt(self, fileExt: str) -> KvContent.Impl:
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
        def identify(self, suffix: str=None) -> KvContent.Impl:
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
        def readMetadata(self, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
        or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
        content location. Also sets hasMetadata flag so that consecutive calls are fast.
        
        If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
        
        @see FileOperationSpec.peekForMetadata
        
        @return abstract content with metadata.
        """
            ...
        def refreshMetadata(self, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
        hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
        needs to be refreshed.
        """
            ...
        def guessMetadata(self, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
        encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
        extra IO.
        
        Also sets {@link Content#hasMetadata} to true.
        
        @see FileOperationSpec.peekForMetadata
        
        @return abstract content with metadata.
        """
            ...
        def clearMetadata(self) -> KvContent.Impl:
        """
        Clears the content metadata; e.g. if it's known to be invalid.
        """
            ...
        def withMetadata(self, meta: ContentMeta=None) -> KvContent.Impl:
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
        def encodedPushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent.Impl, BytePushStream]:
        """
        @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
        contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
        higher level apis instead.
        """
            ...
        def pushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent.Impl, BytePushStream]:
        """
        @return byte push stream to be used for writing un-encoded data into this content object.
        """
            ...
        def charPushStream(self, spec: FileOperationSpec=None) -> Pair[KvContent.Impl, CharPushStream]:
        """
        @return character push stream to be used for writing un-encoded data into this content object.
        """
            ...
        def encodedStream(self, spec: FileOperationSpec=None) -> Union[Pair[KvContent.Impl, ByteStream]]:
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
        def writeStream(self, content: ByteStream, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's content with provided binary content.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's content with provided binary content.
        """
            ...
        def writeZipInputStream(self, zipInputStream: Any, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces its content with provided binary content from zipInputStream
        """
            ...
        def writeEncodedStream(self, encodedContent: ByteStream, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        
        @param content
                  encoded content that needs to be written
        """
            ...
        def writeEncodedInputStream(self, inputStream: Any, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        """
            ...
        def write(self, content: any, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's content with provided binary content.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeEncoded(self, encodedContent: any, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's encoded content with provided binary content.
        
        @param content
                  encoded content that needs to be written
        """
            ...
        def writeString(self, content: str, spec: FileOperationSpec=None) -> KvContent.Impl:
        """
        Truncates file and replaces it's content with provided string.
        
        @param content
                  content that needs to be written
        """
            ...
        def writeObj(self, obj: Obj, spec: FileObjsOperSpec=None) -> KvContent.Impl:
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
        def startWriteObjs(self, spec: FileObjsOperSpec=None) -> Pair[KvContent.Impl, PushStream[Obj]]:
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
        def compress(self, contentEncoding: str=None, spec: FileCompressSpec=None) -> KvContent.Impl:
        """
        Compresses the given content.
        
        @param contentEncoding
                   compression content encoding; default is gzip.
        """
            ...
        def uncompress(self, spec: FileCompressSpec=None) -> KvContent.Impl:
        """
        Uncompresses content.
        """
            ...
        def transcode(self, contentType: str, contentEncoding: str, spec: FileCompressSpec=None) -> KvContent.Impl:
        """
        Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
        
        @param contentType
                   new content type.
        @param contentEncoding
                   new content encoding.
        """
            ...
        def copyContentTo(self, target: KvContent.Impl, spec: FileOperationSpec=None) -> None:
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
        def concat(self, other: Content) -> KvContent.Impl:
        """
        Creates a new Content by merging the two contents
        """
            ...
        @overload
        def concat(self, other: any) -> KvContent.Impl:
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
        Retry logic for failed content operations
        
        @param supplier
                 The supplier to retry when an exception is thrown
        @param desc
                 The description of the function being retried
        @param spec
                 The file operation spec with retryable parameters
        """
            ...
        @classmethod
        def fromRow(cls, kvRow: KvRow) -> KvContent:
        """
        Create a KvContent subType instance from the provided KvRow.
        @param kvRow
               the KvRow to create the KvContent from. Note that the kvRow does not have to exist in the KvStore, as long as the
               {@link KvRowMeta meta-fields} are populated in it, and writing the to this KvContent will create the KvRow in the KvStore.
        @return the KvContent subType instance.
        
        @see KvFile
        """
            ...
        def toRow(self) -> KvRow:
        """
        Returns a **KvRow** from this KvContent. Note that, this API does not generate the KvRow in the KvStore.
        """
            ...
        @classmethod
        def fromKvContentUrl(cls, kvContentUrl: str, failIfInvalid: bool=None) -> Union[KvContent]:
        """
        This is a convenient API to get the KvContent by parsing the provided {@link KvStore#kvContentUrl}.
        @param kvContentUrl
               This url is used to build the corresponding KvContent. To successfully return the correct KvContent,
               the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
        @param failIfInvalid
               If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
        @return KvContent instance based on the given kvContentUrl
        """
            ...
        @classmethod
        def isKvContentUrl(cls, url: str) -> bool:
        """
        @return true if the given url is a kvContentUrl of the format: **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
        """
            ...

