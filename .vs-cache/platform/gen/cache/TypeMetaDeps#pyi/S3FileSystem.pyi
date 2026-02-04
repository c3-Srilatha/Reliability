#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ArchiveFileSystem import ArchiveFileSystem
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.BoxFileSystem import BoxFileSystem
from c3.platform.Triple import Triple
from c3.platform.FileSystemConfig import FileSystemConfig
from c3.platform.HttpsFileSystem import HttpsFileSystem
from c3.platform.AzureFileSystem import AzureFileSystem
from c3.platform.FieldType import FieldType
from c3.platform.Pair import Pair
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Pair import Pair
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.DeleteFileOperationSpec import DeleteFileOperationSpec
from c3.platform.ValueType import ValueType
from c3.platform.CloudProvider import CloudProvider
from c3.platform.ValueSpec import ValueSpec
from c3.platform.ListFilesAndDirsResult import ListFilesAndDirsResult
from c3.platform.FileSystem.Changes import FileSystem.Changes
from c3.platform.MsGraphFileSystem import MsGraphFileSystem
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.Lambda import Lambda
from c3.platform.FileOperationSpec import FileOperationSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.BatchFileOperationSpec import BatchFileOperationSpec
from c3.platform.GcsFileSystem import GcsFileSystem
from c3.platform.SetType import SetType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Lambda import Lambda
from c3.platform.Lambda import Lambda
from c3.platform.FileSystemMapReduce import FileSystemMapReduce
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.ListFilesResult import ListFilesResult
from c3.platform.BlobFile import BlobFile
from c3.platform.S3File import S3File
from c3.platform.LocalFileSystem import LocalFileSystem
from c3.platform.AdlFileSystem import AdlFileSystem
from c3.platform.ListFilesOperationSpec import ListFilesOperationSpec
from c3.platform.Hdfs import Hdfs
from c3.platform.C3FileSystem import C3FileSystem
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.FileSystemConfigChild import FileSystemConfigChild
from c3.platform.TmpFileSystem import TmpFileSystem
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Pair import Pair
from c3.platform.Url import Url
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.S3FsConfig import S3FsConfig
from c3.platform.Obj import Obj
from c3.platform.MapReduceFilesOptions import MapReduceFilesOptions
from c3.platform.Pair import Pair
from c3.platform.HttpFileSystem import HttpFileSystem
from c3.platform.MapBuilder import MapBuilder
from c3.platform.BytePushStream import BytePushStream
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FileSystemNotificationConfig import FileSystemNotificationConfig
from c3.platform.FileSystem.Capabilities import FileSystem.Capabilities
from c3.platform.GoogleDriveFileSystem import GoogleDriveFileSystem
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.Lambda import Lambda
from c3.platform.FileUrl import FileUrl
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.FileSystem import FileSystem
from c3.platform.GitHubFileSystem import GitHubFileSystem
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.FileSystemNotificationSpec import FileSystemNotificationSpec
from c3.platform.FileSystemBatchJob import FileSystemBatchJob

# Python definitions for the C3 type S3FileSystem


class S3FileSystem(BlobFileSystem[S3File], FileSystemConfigurable[S3FsConfig]):
    """
    AWS S3 bases FileSystem implementation. Avoid using it directly - use {@link FileSystem} instead.
    
    Important Note:
    
    Amazon S3 achieves high availability by replicating data across multiple servers within Amazon's data centers. If a PUT request is successful, your data is safely stored. However, information about the changes must replicate across Amazon S3, which can take some time, and so you might observe the following behaviors:
    
    A process writes a new object to Amazon S3 and immediately lists keys within its bucket. Until the change is fully propagated, the object might not appear in the list.
    
    A process replaces an existing object and immediately attempts to read it. Until the change is fully propagated, Amazon S3 might return the prior data.
    
    A process deletes an existing object and immediately attempts to read it. Until the deletion is fully propagated, Amazon S3 might return the deleted data.
    
    A process deletes an existing object and immediately lists keys within its bucket. Until the deletion is fully propagated, Amazon S3 might list the deleted object.
    
    Amazon S3 provides read-after-write consistency for PUTS of new objects in your S3 bucket in all regions with one caveat. The caveat is that if you make a HEAD or GET request to the key name (to find if the object exists) before creating the object, Amazon S3 provides eventual consistency for read-after-write.
    
    Latest S3 SLAs can be found here: https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html
    
    When there is rapid increase such as greater than 5500 GET requests/second or 3500 PUT/DELETE/LIST requests/second on one single bucket, jobs might have errors such as "503 Slow Down" due to high request rate.
    In such scenarios an exponential backoff with jitter strategy will be applied and the requests rate will be slower than usual.
    
    S3 limits:
    - S3 limits are defined per "partition" [ partition can be at the bucket level or at multiple hot path prefixes ]
    - "partition" is by default for the bucket but S3 automatically creates partitions based on your path prefixes
     - e.g. if your path is bucket/a/b/c/d.txt and let's say all reads/writes are going to folder "b" - S3 will eventually create a partition for bucket/a/b and then the read/write limits will apply to that partition
    
    - In order to create automatic partitions, S3 needs a sustained rate of 5xx errors [ no fixed time but atleast 30-40 mins ] of sustained errors after which automatic re-partition is triggered
    - S3 can also create partitions for your "prefix" if you know what that is going to be apriori - this can be done by filing a support ticket with AWS
    
    Default limits:
     - Put requests: 3500 puts per second per partition
     - Get requests: 5500 gets per second per partition
    Reality: if there isn't a full partition assigned to your bucket you can get capped at a lower QPS [e.g. 1k] - in this case you will see 503 errors and need to reach out to support
    
    When multiple threads are making requests to S3 server, jobs might get errors such as "Socket Time Out"/"SdkClientException: connect time out", these will be automatically retried.
    
    @remarks this represents a made instance of S3FileSystem
    """
    def __init__(self) -> None: ...

    @classmethod
    def inst(cls) -> S3FileSystem:
    """
    If called directly on FileSystem then returns default FileSystem. If called directly on a sub-type then returns
    instance of that FileSystem. Given C3 server may have access to multiple different FileSystems so it's important to
    correctly use #fromScheme and #fromUrlOrEncodedPath in most of the cases and only in special cases #inst.
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
    def fromJson(cls, json: any) -> Union[S3FileSystem]:
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
    def fromJsonString(cls, json: str) -> Union[S3FileSystem]:
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
    def fromXmlString(cls, xml: str) -> Union[S3FileSystem]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[S3FileSystem]:
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
    def replaceType(self, old: Type, new: Type) -> S3FileSystem:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> S3FileSystem:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> S3FileSystem:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[S3FileSystem]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[S3FileSystem]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> S3FileSystem:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> S3FileSystem:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> S3FileSystem:
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
    def validateObj(self) -> S3FileSystem:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> S3FileSystem:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> S3FileSystem:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> S3FileSystem:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> S3FileSystem:
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
    def withoutFieldAtPath(self, path: str) -> S3FileSystem:
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
    def withoutField(self, field: str) -> S3FileSystem:
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
    def withoutField(self, field: FieldType) -> S3FileSystem:
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
    def withoutFields(self, fields: Array[str]) -> S3FileSystem:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> S3FileSystem:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> S3FileSystem:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> S3FileSystem:
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
    def defaultField(self, field: str) -> S3FileSystem:
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
    def defaultField(self, field: FieldType) -> S3FileSystem:
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
    def unsetField(self, field: str) -> S3FileSystem:
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
    def unsetField(self, field: FieldType) -> S3FileSystem:
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
    def removeField(self, field: str) -> S3FileSystem:
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
    def removeField(self, field: FieldType) -> S3FileSystem:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> S3FileSystem:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> S3FileSystem:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> S3FileSystem:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> S3FileSystem:
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
    def mergeJson(self, json: any) -> S3FileSystem:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> S3FileSystem:
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
    def sumObj(self, other: Obj, deep: bool=None) -> S3FileSystem:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[S3FileSystem]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[S3FileSystem]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[S3FileSystem]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[S3FileSystem]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[S3FileSystem]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, S3FileSystem]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, S3FileSystem]]:
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
    def toBuilder(self) -> ObjBuilder[S3FileSystem]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[S3FileSystem]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> S3FileSystem:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> S3FileSystem:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> S3FileSystem:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> S3FileSystem:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> S3FileSystem:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> S3FileSystem:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> S3FileSystem:
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
    def afterMake(self) -> S3FileSystem:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> S3FileSystem:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[S3FileSystem]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> S3FileSystem:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def registerNotification(cls, urlOrEncodedPathPrefix: str=None, spec: FileSystemNotificationSpec=None) -> None:
    """
    This function should be invoked by the subtype to subscribe for notifications trigger by a file system.
    """
        ...
    @classmethod
    def deregisterNotification(cls, urlOrEncodedPathPrefix: str=None) -> None:
    """
    This function should be invoked by the subtype to unsubscribe for notifications trigger by a file system.
    """
        ...
    @classmethod
    def defaultFileSystemConfig(cls, secrets: bool=None) -> FileSystemConfigChild:
    """
    @return configuration of a default file-systems.
    """
        ...
    @classmethod
    def fileSystemConfig(cls, secrets: bool=None) -> FileSystemConfig:
    """
    @return configuration of all file-systems.
    """
        ...
    def configChild(self, secrets: bool=None) -> FileSystemConfigChild:
    """
    @return specific configuration of this file-systems.
    """
        ...
    @classmethod
    def notificationConfig(cls, urlOrEncodedPathPrefix: str) -> Union[FileSystemNotificationConfig]:
    """
    @return the file system notification configuration for input urlOrEncodedPathPrefix.
    """
        ...
    def enabled(self) -> bool:
    """
    Checks if this file system type is enabled in the environment.
    """
        ...
    def enable(self) -> bool:
    """
    Enable the file system on the environment
    """
        ...
    def supportsContentType(self) -> bool:
    """
    Checks if this file system type supports content type. If filesystem does support persisting content type then
    it should also implement #replaceContentTypeAndEncodingBatch.
    """
        ...
    def scheme(self) -> str:
    """
    Scheme for this file system. E.g. 'file' for Local FS, 's3', 'hdfs' etc.
    """
        ...
    def cloudProvider(self) -> CloudProvider:
    """
    Cloud Service Provider for the FileSystem.
    """
        ...
    def cloudResourceTypeName(self) -> Union[str]:
    """
    Returns the CloudResource type name that handles credentials for this FileSystem.
    E.g. 'AwsS3Bucket' for S3FileSystem, 'BoxAccount' for BoxFileSystem.
    Returns null if this FileSystem does not support cloud credentials.
    """
        ...
    @classmethod
    def fromScheme(cls, scheme: str) -> FileSystem:
    """
    Returns file-system for a given scheme or fails if scheme is not supported.
    """
        ...
    @classmethod
    def fromUrlOrEncodedPath(cls, urlOrEncodedPath: str=None) -> FileSystem:
    """
    Returns file-system for a given url or encoded path or fails if url contains un-supported scheme.
    
    path can be a fully qualified URL or relative encoded path using '/' as a separator with or without leading '/'
    character. path is expected to be Url encoded.
    
    If encoded path starts with a leading '/' then it's expected to contain "mount", root folder or remote host
    (depending on file system).
    """
        ...
    def rootUrl(self) -> str:
    """
    @return root url for this file-system.
    """
        ...
    def parseRootUrl(self) -> Url:
    """
    @return parsed root url for this file-system.
    """
        ...
    def urlFromEncodedPath(self, encodedPath: str=None) -> str:
    """
    Returns fully qualified Url for a given relative encoded path. If path is not relative i.e. starts with '/' then
    it needs to match one of accessible file system mount urls. If path is relative then it will be relative to a
    default mount url.
    """
        ...
    def urlFromMount(self, mount: str=None) -> str:
    """
    Returns fully qualified Url for a given mount. If the mount is not provided, then `default` will be used.
    e.g for {@link FileSystem.s3} if default mount is pointing to "s3://dev-c3/foo/bar", then
    - FileSystem.s3().urlFromMount(FileSystemMount.DEFAULT)
    - FileSystem.s3().urlFromMount("DEFAULT")
    - FileSystem.s3().urlFromMount("/")
    will all return "s3://dev-c3/foo/bar".
    """
        ...
    def urlFromMountAndPath(self, *path: Array[str], mount: str=None) -> str:
    """
    Returns fully qualified Url for a given mount and path components. If the mount is not provided, then `default`
    will be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is
    ["my-dir", "my file.txt"] then will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
    
    PLAT-12089 - Inline methods in c3.typ file do not support variable arguments
    
    urlFromMountAndPath: final inline member function(mount: string, path: string ...): !string
    """
        ...
    def urlFromMountAndRelativeEncodedPath(self, mount: str=None, relativeEncodedPath: str=None) -> str:
    """
    Returns fully qualified Url for a given mount and encoded path. If the mount is not provided, then `default` will
    be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is "/my-dir/my-file.txt" then
    will return "s3://dev-c3/foo/bar/my-dir/my-file.txt".
    """
        ...
    def urlFromHostAndPath(self, host: str, path: str) -> str:
    """
    Returns fully qualified Url for a given host (part of the valid mount path) and decoded path. E.g.
    for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" is a valid mount then for
    "dev-c3" and "foo/bar/my-dir/my file.txt" will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
    Will fail if resulting URL does not have a valid mount url.
    """
        ...
    def mounts(self) -> Union[Map[str, str]]:
    """
    @return all available mounts i.e. mount to external URL mapping.
    """
        ...
    def mountUrl(self, mount: str=None) -> Union[str]:
    """
    File system mount url (a.k.a. root folder | remote host). If mount parameter is null then returns default mount
    url for current environment and app. Can be null if file system doesn't support pre-defined mount.
    """
        ...
    def validateUrl(self, url: str) -> Union[str]:
    """
    Validates and returns url if valid otherwise throws exception.
    """
        ...
    def mountUrlAndEncodedPathFromUrl(self, url: str, validate: bool=None) -> Pair[str, str]:
    """
    Extracts mount url and encoded path from url.
    """
        ...
    def mountFromUrl(self, url: str, validate: bool=None) -> Union[str]:
    """
    Extracts mount from url.
    """
        ...
    def isAclEnabled(self, mount: str) -> bool:
    """
    @return true if ACL is enabled for provided mount.
    
    @see FileMeta
    """
        ...
    def isReadOnly(self, mount: str) -> bool:
    """
    @return true if provided mount is read only.
    """
        ...
    def isValidUrl(self, url: str) -> bool:
    """
    @return true if provided url is valid; i.e. for a valid mount
    """
        ...
    def isValidMountUrl(self, mountUrl: str) -> bool:
    """
    @return true if provided mount url is valid.
    """
        ...
    def truncateMount(self, mount: str=None, confirm: bool=None, spec: FileOperationSpec=None) -> int:
    """
    Truncates given mount by deleting all the files. Requires confirm parameter to be true.
    """
        ...
    def makeFile(self, urlOrEncodedPath: str, contentType: str=None, contentEncoding: str=None) -> BlobFile[BlobFileSystem]:
    """
    @return blob file system specific instance of File.
    """
        ...
    def createFile(self, file: File, spec: FileOperationSpec=None) -> File:
    """
    Creates new file. If file exists truncates it's content.
    """
        ...
    def createDir(self, urlOrEncodedPath: str, spec: FileOperationSpec=None) -> bool:
    """
    Creates new directory. If the directory already exists, returns false.
    Returns true if the directory was created.
    """
        ...
    def zipFiles(self, zipUrlOrEncodedPath: str, files: Array[File], filesRootUrl: str=None, spec: FileOperationSpec=None) -> File:
    """
    Creates new ZIP file based on provided list of files.
    
    @param zipUrlOrEncodedPath
             url or encoded path for a resulting ZIP file
    @param files
             list of files to ZIP
    @param filesRootUrl
             root url for files; entry name in the ZIP file will be relative decoded path to this root; if not provided
             then entry name will be decoded path of the file
    """
        ...
    def openFile(self, file: File, spec: FileOperationSpec=None) -> Union[File]:
    """
    Opens file and reads it's metadata. Returns null if file doesn't exist.
    """
        ...
    def openFiles(self, files: Array[File], spec: FileOperationSpec=None) -> Union[Array[File]]:
    """
    Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
    """
        ...
    def listFiles(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesResult:
    """
    Lists files starting with given url or encoded path and marker.
    
    @param urlOrEncodedPath
             path prefix to that would be used to get all files underneath it.
    @param limit
             number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
             always check for ListFilesResult.nextMarker.
    """
        ...
    def listDirectChildren(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesAndDirsResult:
    """
    List of files and directories just one level down from given url or encoded path.
    E.g. with given object paths as following, using / as delimiter:
    - North America/countyList.csv
    - North America/Canada/Quebec/Montreal
    - North America/Canada/Quebec/Montreal/population.csv
    - North America/USA/Washington/Bellevue
    - North America/USA/Washington/Seattle
    ...
    
    With 'North America` passed as `urlOrEncodedPath`, the returned value would be a ListFilesAndDirsResult instance
    which contains:
    - files: [North America/countyList.csv] (entries are File instances)
    - dirs:  [North America/Canada/,North America/USA/,...] (entries are names of direct child)
    NOTE: all files and dirs included in result are direct children of the passed `urlOrEncodedPath`.
          And for deeper level children, like file "North America/Canada/Quebec/Montreal/population.csv", or dir
          "North America/USA/Washington/Bellevue", are excluded from the returned result.
    
    @param urlOrEncodedPath
             path prefix to that would be used to get all files underneath it.
    @param limit
             number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
             always check for ListFilesResult.nextMarker.
    """
        ...
    def doListDirectChildren(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesAndDirsResult:
        ...
    def listFilesStream(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> Union[Stream[File]]:
    """
    Lists files starting with given url or encoded path and marker.
    
    @param urlOrEncodedPath
             path prefix to that would be used to get all files underneath it.
    @param limit
             number of files to return; if -1 all files will be retrieved, defaults is -1.
    """
        ...
    def listDirsStream(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, depth: int=None, spec: ListFilesOperationSpec=None) -> Union[Stream[str]]:
    """
    Lists directories starting with given url or encoded path and marker.
    
    @param urlOrEncodedPath
             path prefix to that would be used to get all directories underneath it.
    @param limit
             number of directories to return; if -1 all directories will be retrieved, defaults is -1.
    """
        ...
    def listChanges(self, urlOrEncodedPath: str, lastSeen: Map[str, datetime], filter: Callable[[File], bool]=None) -> FileSystem.Changes:
    """
    Determine which files have changed since the last state known to the caller. The method takes a path prefix
    and finds all matching files. It compares the last modified time of the files to the values in the `lastSeen` map
    to determine if the file has changed.
    
    @param urlOrEncodedPath directory path
    @param lastSeen last state known to caller
    @param filter lambda that will be called for each file before checking
    @return summary of the changes, including a new version of the map
    """
        ...
    def eachFile(self, action: Lambda[Callable[[File]]], urlOrEncodedPath: str=None, spec: BatchFileOperationSpec=None) -> FileSystemBatchJob:
    """
    API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
    call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on one
    file at a time.
    Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
    required.
    @param urlOrEncodedPath
               urlOrEncodedPath at which files should be listed
    @param action
               The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
               E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
               If you want to pass any arguments to it they should match the underlying lambda function
    @param spec
              Spec for batch operation.
    @return the distributed batch job
    """
        ...
    def eachFileBatch(self, urlOrEncodedPath: str, action: Lambda[Callable[[Array[File]]]], spec: BatchFileOperationSpec=None) -> FileSystemBatchJob:
    """
    API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
    call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on a batch of files at a time.
    Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
    required.
    @param urlOrEncodedPath
               urlOrEncodedPath at which files should be listed
    @param action
               The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
               E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
    @param spec
              Spec for batch operation.
    @return the distributed batch job
    """
        ...
    def mapReduceFiles(self, urlOrEncodedPath: str, mapper: Lambda[Callable[[Array[File], Union[Any]], Union[Map[str, Any]]]], reducer: Lambda[Callable[[Union[str], Union[Array[Any]], Union[Any]], Union[Any]]], options: MapReduceFilesOptions=None) -> FileSystemMapReduce:
    """
    Executes map-reduce algorithm for a list of file. This api will listFiles at the given `path` and call mapped for
    each file batch based on `options.batchSize` and will persist intermediate results. Once all files are processed,
    it will call reduce for each intermediate result and persist the final result.
    
    @param urlOrEncodedPath
            urlOrEncodedPath at which files should be listed
    @param mapper
            The lambda function can be anything piece of code that needs to be applied to the files to produce
            intermediate results by logical key. See {@link Lambda} on how to create a lambda
    @param reducer
            The lambda for processing all intermediate results for a given key
    @param options
            options for this operation.
    @return the distributed map reduce job
    
    @see MapReduceFilesOptions#context
    """
        ...
    def countFiles(self, urlOrEncodedPath: str=None, spec: ListFilesOperationSpec=None) -> int:
    """
    Return the total number of files in the given urlOrEncodedPath.
    
    @param urlOrEncodedPath
             path prefix that would be used to get count of all files underneath it.
    @param spec
             file operation spec.
    @return total number of files under the given path prefix.
    """
        ...
    def touchFilesBatch(self, files: Array[File], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Updates files access and modification times.
    
    @param paths
              list of files to touch.
    @return list of updated Files in the same order as input.
    """
        ...
    def touchFiles(self, urlOrEncodedPath: str=None, confirm: bool=None, spec: ListFilesOperationSpec=None) -> int:
    """
    Updates access and modification times for files that start with provided url or encoded path.
    
    @param urlOrEncodedPath
              path prefix for files to touch.
    @return number files deleted.
    """
        ...
    def truncateFilesBatch(self, files: Array[File], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Truncates files.
    
    @param files
              list of files to truncate.
    """
        ...
    def truncateFiles(self, urlOrEncodedPath: str=None, confirm: bool=None, spec: ListFilesOperationSpec=None) -> int:
    """
    Truncates files.
    
    @param urlOrEncodedPath
              path prefix for files to truncate.
    """
        ...
    @classmethod
    def deleteFilesBatch(cls, files: Array[File], spec: DeleteFileOperationSpec=None) -> None:
    """
    Deletes files.
    
    @param files
              list of files to delete.
    """
        ...
    def deleteFiles(self, urlOrEncodedPath: str=None, confirm: bool=None, spec: DeleteFileOperationSpec=None) -> int:
    """
    Deletes multiple files; confirm parameter should be set to true otherwise action fails.
    
    @param  urlOrEncodedPath
              path prefix for files to delete.
    @return number files deleted.
    """
        ...
    @classmethod
    def copyFilesBatch(cls, srcFiles: Array[File], destUrlsOrEncodedPaths: Array[str], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Copies files from one path to another. The content type of the destination will not change from the content
    type of the source file.
    
    @param srcFiles
                files to copy.
    @param destPaths
                list of paths to a new destinations in the same order as srcFiles.
    @return list of copied Files in the same order as input.
    """
        ...
    def copyFiles(self, srcUrlOrEncodedPath: str, destUrlOrEncodedPath: str, spec: ListFilesOperationSpec=None) -> int:
    """
    Copies files from one path to another.
    
    @param srcUrlOrEncodedPath
                path prefix to source file(s).
    @param destUrlOrEncodedPath
                path prefix to destination file(s).
    @return number files copied.
    """
        ...
    @classmethod
    def moveFilesBatch(cls, srcFiles: Array[File], destUrlsOrEncodedPaths: Array[str], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Move files from one path to another.
    
    @param srcFiles
                files to move.
    @param destUrlsOrEncodedPaths
                list of paths to a new destinations in the same order as srcFiles.
    @return list of copied Files in the same order as input.
    """
        ...
    def moveFiles(self, srcUrlOrEncodedPath: str, destUrlOrEncodedPath: str, spec: ListFilesOperationSpec=None) -> int:
    """
    Moves the files from one path to another.
    
    @param srcUrlOrEncodedPath
                path prefix to source file(s).
    @param destUrlOrEncodedPath
                path prefix to destination file(s).
    @return number files copied
    """
        ...
    def replaceContentTypeAndEncodingBatch(self, files: Array[File], contentType: str, contentEncoding: str, spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Replaces the content type and encoding without modifying the content of the files.
    
    Not every file sustem supports persisting content type and content encoding.
    
    @param files
               source files for which the content type and content encoding needs to be replaced.
    @param contentType
               new content type.
    @param contentEncoding
               new content encoding.
    """
        ...
    def replaceContentTypeAndEncoding(self, urlOrEncodedPathPrefix: str, contentType: str, contentEncoding: str, spec: ListFilesOperationSpec=None) -> int:
    """
    Replaces the content type and encoding without modifying the content of the files obtained by filePrefix.
    
    @param urlOrEncodedPathPrefix
               path prefix to source file(s) for which the content type and content encoding needs to be replaced.
    @param contentType
               new content type.
    @param contentEncoding
               new content encoding.
    """
        ...
    def readObjs(self, urlOrEncodedPathPrefix: str, spec: FileObjsOperSpec=None) -> Union[Stream[Obj]]:
    """
    Deserializes content from various files led to by the path prefix into a list of C3 Type instances.
    @urlOrEncodedPathPrefix
              Path to the files to stream data from
    @see FileObjsOperSpec.targetType
    
    @return list of objects
    """
        ...
    def isPathEmpty(self, urlOrEncodedPath: str=None, spec: FileOperationSpec=None) -> bool:
    """
    Checks if the provided url or encoded path is empty or a folder/file exists.
    
    @param urlOrEncodedPath
             prefix path for file(s).
    @return whether the path is empty or not.
    """
        ...
    def isPathDirectory(self, urlOrEncodedPath: str=None) -> bool:
    """
    @return true if path is a directory; i.e. weather or not it ends with '/';
    """
        ...
    def capabilities(self) -> FileSystem.Capabilities:
    """
    @return the file system capabilities for {@link FileOperationSpec}.
    """
        ...
    @classmethod
    def s3(cls) -> S3FileSystem:
    """
    @return instance of S3 file system
    """
        ...
    @classmethod
    def azure(cls) -> AzureFileSystem:
    """
    @return instance of Azure Blob File system
    """
        ...
    @classmethod
    def adl(cls) -> AdlFileSystem:
    """
    @return instance of Azure Data Lake File system
    """
        ...
    @classmethod
    def c3(cls) -> C3FileSystem:
    """
    @return instance of C3 file system
    """
        ...
    @classmethod
    def gcs(cls) -> GcsFileSystem:
    """
    @return instance of GCS file system
    """
        ...
    @classmethod
    def github(cls) -> GitHubFileSystem:
    """
    @return instance of GitHub file system
    """
        ...
    @classmethod
    def http(cls) -> HttpFileSystem:
    """
    @return instance of Http file system
    """
        ...
    @classmethod
    def https(cls) -> HttpsFileSystem:
    """
    @return instance of Https file system
    """
        ...
    @classmethod
    def local(cls) -> LocalFileSystem:
    """
    @return instance of Local file system
    """
        ...
    @classmethod
    def tmp(cls) -> TmpFileSystem:
    """
    @return instance of tmp file system
    """
        ...
    @classmethod
    def archive(cls) -> ArchiveFileSystem:
    """
    @return instance of archive file system
    """
        ...
    @classmethod
    def hdfs(cls) -> Hdfs:
    """
    @return instance of hdfs file system
    """
        ...
    @classmethod
    def msgraph(cls) -> MsGraphFileSystem:
    """
    @return instance of MsGraph file system
    """
        ...
    @classmethod
    def gdrive(cls) -> GoogleDriveFileSystem:
    """
    @return instance of Google Drive file system
    """
        ...
    @classmethod
    def box(cls) -> BoxFileSystem:
    """
    @return instance of Box file system
    """
        ...
    def isC3(self) -> bool:
        ...
    def isS3(self) -> bool:
        ...
    def isAzure(self) -> bool:
        ...
    def isAdl(self) -> bool:
        ...
    def isHttp(self) -> bool:
        ...
    def isHttps(self) -> bool:
        ...
    def isGcs(self) -> bool:
        ...
    def isLocal(self) -> bool:
        ...
    def isTmp(self) -> bool:
        ...
    def isArchive(self) -> bool:
        ...
    def isHdfs(self) -> bool:
        ...
    def isMsGraph(self) -> bool:
        ...
    def isGDrive(self) -> bool:
        ...
    def isBox(self) -> bool:
        ...
    def asC3(self, failIfNot: bool=None) -> Union[C3FileSystem]:
        ...
    def asS3(self, failIfNot: bool=None) -> Union[S3FileSystem]:
        ...
    def asAdl(self, failIfNot: bool=None) -> Union[AdlFileSystem]:
        ...
    def asHttp(self, failIfNot: bool=None) -> Union[HttpFileSystem]:
        ...
    def asHttps(self, failIfNot: bool=None) -> Union[HttpsFileSystem]:
        ...
    def asTmp(self, failIfNot: bool=None) -> Union[TmpFileSystem]:
        ...
    def asLocal(self, failIfNot: bool=None) -> Union[LocalFileSystem]:
        ...
    def asArchive(self, failIfNot: bool=None) -> Union[ArchiveFileSystem]:
        ...
    def asHdfs(self, failIfNot: bool=None) -> Union[Hdfs]:
        ...
    def asMsGraph(self, failIfNot: bool=None) -> Union[MsGraphFileSystem]:
        ...
    def asGDrive(self, failIfNot: bool=None) -> Union[GoogleDriveFileSystem]:
        ...
    def asBox(self, failIfNot: bool=None) -> Union[BoxFileSystem]:
        ...
    def makeDefault(self, override: str=None) -> None:
    """
    Make this instance of file system as default.
    """
        ...
    def setMount(self, mount: str, url: str, override: str=None) -> None:
    """
    Set mount URL on this file system.
    
    WARNING: Please DO NOT set mounts without ACL to any directory containing sensitive info or secrets
    
    @param mount can by any of `FileSystemMount` enum values or any other identifier.
    @param url a fully qualified url with a valid file system scheme. Check {@link FileSystemScheme} for all possible file system schemes.
    
    Also, see {@link file-system.c3doc} for instructions on adding external buckets/blobs as mounts on FileSystem.
    It may only be applicable to FileSystem(s) which supports having buckets/blobs. e.g S3FileSystem, AdlFileSystem.
    """
        ...
    def removeMount(self, mount: str, override: str=None) -> None:
    """
    Remove mount from this file system.
    """
        ...
    def fileEncodedStream(self, file: File, spec: FileOperationSpec=None) -> Union[Pair[File, ByteStream]]:
    """
    Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
    content.
    
    @param file
              existing file to read content from.
    @return the content if file exists or null if it doesn't.
    """
        ...
    def fileEncodedPushStream(self, file: File, spec: FileOperationSpec=None) -> Pair[File, BytePushStream]:
    """
    Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
    use File type for writing content.
    
    @param file
              existing or new file to write to.
    @return push stream for new content.
    """
        ...
    @classmethod
    def confirm(cls, action: str, confirm: bool=None) -> None:
    """
    Internal helper function to check for confirm flag used in truncateBucket, touchFiles and deleteFiles.
    """
        ...
    def parseUrlOrEncodedPath(self, urlOrEncodedPath: str) -> Union[FileUrl]:
    """
    Extracts mount path and relative path from file path.
    """
        ...
    def hostAndPathFromMount(self, mount: str, validate: bool) -> Union[Pair[str, str]]:
    """
    Extracts authority/host and relative (decoded) path from mount.
    """
        ...
    def hostAndPathFromUrlOrEncodedPath(self, urlOrEncodedPath: str, validate: bool) -> Union[Pair[str, str]]:
    """
    Extracts authority/host (part of mount url) and relative (decoded) path from C3 file url.
    """
        ...
    def schemeHostAndPathFromUrlOrEncodedPath(self, urlOrEncodedPath: str, validate: bool) -> Union[Triple[str, str, str]]:
    """
    Extracts scheme, authority/host (part of mount url) and relative (decoded) path from url.
    """
        ...
    def hostAndPathFromExternalUrl(self, url: str) -> Union[Pair[str, str]]:
    """
    Extracts authority/host (part of mount url) and relative (decoded) path from external url (i.e. content location
    of C3 File).
    """
        ...
    def schemeHostAndPathFromExternalUrl(self, url: str) -> Union[Triple[str, str, str]]:
    """
    Extracts scheme, authority/host (part of mount url) and relative (decoded) path from external url (i.e. content
    location of C3 File).
    """
        ...
    def validateHost(self, host: str, exclusive: bool=None) -> str:
    """
    Validates authority/host; throws exception or return host that should be used. If `exclusive` check is also
    requested, then validates that corresponding mount URL doesn't have any relative path. E.g. this is helpful when
    implementing "truncate host" functionality.
    """
        ...
    def urlToExternalUrl(self, urlOrEncodedPath: str, validate: bool=None) -> Union[str]:
    """
    Validate (and translate if needed) C3 File URL or encoded path to external / mounted URL.
    """
        ...
    def urlFromExternalUrl(self, url: str, validate: bool=None) -> Union[str]:
    """
    Validate (and translate if needed) external / mounted URL to C3 File URL.
    """
        ...
    def externalScheme(self) -> str:
    """
    Scheme that should be used by external URL.
    """
        ...
    def throwFileNotFoundException(self, urlOrEncodedPath: str) -> None:
    """
    Throws ObjNotFound exception.
    """
        ...
    def cachedCopy(self, file: File, spec: FileOperationSpec=None) -> File:
    """
    @return cached copy i.e. local file with same metadata and content.
    """
        ...
    def cachedFileContent(self, url: str, cacheUrlOrEncodedPath: str) -> Union[Pair[File, any]]:
    """
    @return cached file content or null if not cached.
    """
        ...
    def cacheFileContent(self, file: File, encodedContent: any, cacheUrlOrEncodedPath: str, cacheTtlSec: int=None) -> None:
    """
    Caches file content.
    """
        ...
    def doOpenFile(self, file: File, spec: FileOperationSpec=None) -> Union[File]:
    """
    Opens file and reads it's metadata. Returns null if file doesn't exist.
    """
        ...
    def doOpenFiles(self, files: Array[File], spec: FileOperationSpec=None) -> Union[Array[File]]:
    """
    Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
    """
        ...
    def doListFiles(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesResult:
    """
    Lists files starting with given url or encoded path and marker.
    
    @param urlOrEncodedPath
           Fully qualified URL or relative encoded path.
           Note: If encoded path starts with a leading '/' then it's expected to contain "mount", root folder or
                 remote host (depending on file system).
    @param limit
           number of files to return; if -1 all files will be retrieved, default is file-system specific.
           always check for ListFilesResult.nextMarker.
    @param marker
    @param readMetadata
    @param spec
    """
        ...
    def doListFilesStream(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> Union[Stream[File]]:
        ...
    def doListDirsStream(self, urlOrEncodedPath: str=None, limit: int=None, marker: str=None, depth: int=None, spec: ListFilesOperationSpec=None) -> Union[Stream[str]]:
        ...
    def doTruncateMount(self, mount: str=None, confirm: bool=None, spec: FileOperationSpec=None) -> int:
        ...
    def doDeleteFilesBatch(self, files: Array[File], spec: DeleteFileOperationSpec=None) -> None:
    """
    Deletes batch of files.
    
    @param files
           List of files to delete.
    @param spec
           Configuration options. {@see FileOperationSpec}
    """
        ...
    def doReplaceContentTypeAndEncodingBatch(self, files: Array[File], contentType: str, contentEncoding: str, spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Replaces the content type and encoding without modifying the content of the files.
    """
        ...
    def doFileEncodedStream(self, file: File, spec: FileOperationSpec=None) -> Union[Pair[File, ByteStream]]:
    """
    Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
    content.
    
    @param file
           existing file to read content from.
    @return the content if file exists or null if it doesn't.
    """
        ...
    def doFileEncodedPushStream(self, file: File, spec: FileOperationSpec=None) -> Union[Pair[File, BytePushStream]]:
    """
    Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
    use File type for writing content.
    
    @param file
           existing or new file to write to.
    @return push stream for new content.
    """
        ...
    def doCreateFile(self, file: File, spec: FileOperationSpec=None) -> File:
    """
    Creates new file. If file exists truncates it's content.
    Default implementation uses fileEncodedPushStream and openFile pattern.
    """
        ...
    def doCreateDir(self, urlOrEncodedPath: str, spec: FileOperationSpec=None) -> bool:
    """
    Creates new folder. If the folder already exists, returns false.
    Returns true if the folder was created.
    """
        ...
    def doTouchFilesBatch(self, files: Array[File], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Touches files by updating their timestamps. Default implementation uses fileEncodedPushStream pattern.
    """
        ...
    def doTruncateFilesBatch(self, files: Array[File], spec: ListFilesOperationSpec=None) -> Union[Array[File]]:
    """
    Truncates files to zero length. Default implementation uses fileEncodedPushStream pattern.
    """
        ...
    def supportsDirs(self) -> bool:
    """
    Returns true if this FileSystem supports Files that correspond to directories.
    """
        ...
    def generatePresignedUrl(self, urlOrEncodedPath: str, method: str='\'GET\'', expiration: str='\'1h\'', spec: FileOperationSpec=None) -> str:
    """
    Generates pre-signed URL that can be used to upload/download files to/from object storage using HTTP.
    
      1. Content-Type has to be specified for PUT operation.
      2. Content-Length has to be specified for PUT operation.
      3. x-ms-blob-type has to be specified for PUT operation on AzureFile. <BlockBlob | PageBlob | AppendBlob>
    
    @param urlOrEncodedPath
             Fully qualified URL or relative encoded path.
    @param httpMethod
             Type of HTTP request, could be GET, PUT, POST, PATCH, or DELETE.
    @param duration
             Specifies how long the presignedUrl is valid. See Duration.fromString for more details.
    @param spec
             Provides options for various File actions.
    """
        ...
    @classmethod
    def shouldRetry(cls, ex: Any) -> bool:
    """
    Whether the error is retryable for a specific file system.
    """
        ...
    @classmethod
    def copyFile(cls, src: File, destUrl: str, spec: FileOperationSpec=None) -> Union[File]:
    """
    Copy a file to the destUrl
    
    @param src
       The file to be copied
    @param destUrl
       Path to a new destination
    @param spec
       The spec for the operations on the file being transferred
    """
        ...
    def doIsFileLocked(self, file: File, spec: FileOperationSpec=None) -> bool:
    """
    Checks if a file is locked/leased.
    
    @param file
       The file to check
    @param spec
       The spec for the operations on the file
    @return true if the file is locked/leased.
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    def doBreakLockOnFile(self, file: File, spec: FileOperationSpec=None) -> None:
    """
    Breaks the lock/lease on the file (or its blob), if it is locked/leased.
    
    @param file
       The file whose lock/lease needs to be broken.
    @param spec
       The spec for the operations on the file
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    def isFileLocked(self, file: File, spec: FileOperationSpec=None) -> bool:
    """
    Checks if a file is locked/leased.
    
    @param file
       The file to check
    @param spec
       The spec for the operations on the file
    @return true if the file is locked/leased.
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    def breakLockOnFile(self, file: File, spec: FileOperationSpec=None) -> None:
    """
    Breaks the lock/lease on the file (or its blob), if it is locked/leased.
    
    @param file
       The file whose lock/lease needs to be broken.
    @param spec
       The spec for the operations on the file
    
    Throws an exception if FileSystem does not provide file locking capabilities.
    """
        ...
    @classmethod
    def instanceCache(cls) -> Union[Map[str, FileSystem]]:
    """
    Cache of all FileSystem instances.
    """
        ...
    @classmethod
    def schemeCache(cls) -> Union[Map[str, FileSystem]]:
    """
    Cache of all FileSystem instances by corresponding URL scheme.
    """
        ...
    def containerName(self, mount: str=None) -> str:
    """
    Returns just blob container name for a given FileSystem Mount; Note that mount may also contain a path; So it's
    best to use FileSystem APIs.
    """
        ...
    def containerNames(self) -> Union[Array[str]]:
    """
    Returns all blob container  names that this pod and current tenant can access.
    """
        ...
    def upsertContainer(self, containerName: str=None, spec: FileOperationSpec=None) -> bool:
    """
    Creates blob container with a given name. If name is not provided creates default container. If name is provided then
    it is validated against possible container names.
    
    @return true if container didn't exist and was just created
    """
        ...
    def upsertAllContainers(self, spec: FileOperationSpec=None) -> int:
    """
    Upserts all blob containers this pod can access and current tenant can access.
    
    @return count of newly created containers
    """
        ...
    def containerExists(self, containerName: str=None, spec: FileOperationSpec=None) -> bool:
    """
    Returns whether the blob container exists.
    
    @param containerName
              if not provided uses the default blob container associated with pod
    @return true if container exists.
    """
        ...
    def truncateContainer(self, containerName: str=None, confirm: bool=None, spec: FileOperationSpec=None) -> int:
    """
    Truncates provided blob container by deleting all files.
    confirm parameter should be set to true otherwise action fails.
    
    @return number files deleted
    """
        ...
    def listContainers(self, spec: ListFilesOperationSpec=None) -> Union[Array[str]]:
    """
    Returns all existing and visible to this pod blob container names.
    """
        ...
    def doCreateContainer(self, containerName: str, spec: FileOperationSpec=None) -> bool:
        ...
    def doContainerExists(self, containerName: str, spec: FileOperationSpec=None) -> bool:
        ...
    def doTruncateContainer(self, containerName: str, spec: FileOperationSpec=None) -> int:
        ...
    def doReadBlobMeta(self, containerName: str, blobKey: str, spec: FileOperationSpec=None) -> Union[S3File]:
        ...
    def doBlobEncodedStream(self, containerName: str, blobKey: str, spec: FileOperationSpec=None) -> Union[Pair[S3File, ByteStream]]:
        ...
    def doBlobEncodedPushStream(self, containerName: str, blobKey: str, file: File=None, spec: FileOperationSpec=None) -> Union[BytePushStream]:
        ...
    def listBlobsDefaultLimit(self) -> int:
        ...
    def listBlobsPerQueryLimit(self) -> int:
        ...
    def doListBlobs(self, containerName: str, blobKeyPrefix: str=None, isDirectory: bool=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesResult:
        ...
    def doListDirectChildrenBlob(self, containerName: str, blobKeyPrefix: str=None, isDirectory: bool=None, limit: int=None, marker: str=None, readMetadata: bool=None, spec: ListFilesOperationSpec=None) -> ListFilesAndDirsResult:
        ...
    def maxDeleteBlobsCount(self) -> int:
        ...
    def doDeleteBlobs(self, containerName: str, blobKeys: Array[str], spec: FileOperationSpec=None) -> None:
        ...
    def doCopyBlob(self, srcContainerName: str, srcBlobKey: str, destContainerName: str, destBlobKey: str, spec: FileOperationSpec=None) -> Union[S3File]:
        ...
    def doCopyBlobs(self, srcContainerNames: Array[str], srcBlobKeys: Array[str], destContainerNames: Array[str], destBlobKeys: Array[str], spec: FileOperationSpec=None) -> Union[Array[S3File]]:
    """
    Copies blob files using cloud provider APIs. When the source scheme and destination schemes are the same,
    files are copied by using batch APIs. Otherwise, each file is copied individually.
    """
        ...
    def doReplaceBlobContentTypeAndEncoding(self, containerName: str, srcBlobKey: str, contentEncoding: str, contentType: str=None, spec: FileOperationSpec=None) -> Union[S3File]:
        ...
    def cloudClient(self, containerName: str) -> Any:
        ...
    def fileType(self) -> Type:
        ...
    def config(self, secrets: bool=None) -> S3FsConfig:
    """
    Returns cached configuration object for instance of this file system.
    """
        ...
    @classmethod
    def bucketName(cls, mount: str=None) -> str:
    """
    Returns just S3 bucket name for a given FileSystem Mount; Note that mount may also contain a path; So it's best to
    use FileSystem APIs.
    """
        ...
    @classmethod
    def bucketNames(cls) -> Union[Array[str]]:
    """
    Returns all S3 bucket names that this pod and current app can access.
    """
        ...
    @classmethod
    def upsertBucket(cls, bucketName: str=None, spec: FileOperationSpec=None) -> bool:
    """
    Creates bucket with a given name. If name is not provided creates default bucket. If name is provided then it is
    validated against possible bucket names.
    
    @return true if bucket didn't exist and was just created
    """
        ...
    @classmethod
    def upsertAllBuckets(cls, spec: FileOperationSpec=None) -> int:
    """
    Upserts all buckets this pod can access and current tenant can access.
    
    @return count of newly created buckets
    """
        ...
    @classmethod
    def truncateBucket(cls, bucketName: str=None, confirm: bool=None, spec: FileOperationSpec=None) -> int:
    """
    Truncates provided bucket by deleting all files.
    confirm parameter should be set to true otherwise action fails.
    
    @return number files deleted
    """
        ...
    @classmethod
    def listBuckets(cls, spec: ListFilesOperationSpec=None) -> Union[Array[str]]:
    """
    Returns all existing and visible to this pod S3 bucket names.
    """
        ...
    @classmethod
    def abbreviateAwsRegion(cls, region: str) -> str:
    """
    Converts S3 region name to a shorthand notation used by C3 S3 file-system
    """
        ...

