#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Server.Telemetry import Server.Telemetry
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Include import Include
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Mutable import Mutable
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.WithKey import WithKey
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.AppUrl import AppUrl
from c3.platform.Env.Membership import Env.Membership
from c3.platform.ValueSpec import ValueSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data import Data
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.HardwareProfile import HardwareProfile
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.App import App
from c3.platform.Env.Summary import Env.Summary
from c3.platform.MapType import MapType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Env.Proxy import Env.Proxy
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.Env.Agent import Env.Agent
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Server.Id import Server.Id
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.App.Summary import App.Summary
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.CloudCluster.Meta import CloudCluster.Meta
from c3.platform.MapBuilder import MapBuilder
from c3.platform.TimeoutSpec import TimeoutSpec
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.StorageStats import StorageStats
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Env.Task import Env.Task
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Duration import Duration
from c3.platform.Promise import Promise
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.WaitSpec import WaitSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FieldType import FieldType
from c3.platform.App.NodePool import App.NodePool
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Env.Data import Env.Data
from c3.platform.App.NodePool.Config import App.NodePool.Config
from c3.platform.Type import Type
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ValueType import ValueType
from c3.platform.CloudProvider import CloudProvider
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Pair import Pair
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Lambda import Lambda
from c3.platform.Exclude import Exclude
from c3.platform.ActionsSpec import ActionsSpec
from c3.platform.CloudResource import CloudResource
from c3.platform.App.Membership import App.Membership
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Action import Action
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RetrySpec import RetrySpec
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.CloudClusterOpSpec import CloudClusterOpSpec
from c3.platform.User import User
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Env import Env
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ServerConnection import ServerConnection
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.Server.Jvm import Server.Jvm
from c3.platform.FieldValue import FieldValue
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Server import Server
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.BatchError import BatchError
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type Cluster


class Cluster(CloudCluster[Server], DefaultInstance):
    """
    Represents C3 Cluster.
    
    C3 Cluster consistent of Environments that can be running same or a different [ but compatible ] server software.
    
    @see Env
    @see App
    @see Server
    
    @remarks this represents a made instance of Cluster
    """
    
    id: Optional[str]
    """
    id of this cluster
    """

    meta: Optional[CloudCluster.Meta]=None
    """
    Metadata of the CloudCluster; when started, started by who, etc
    """

    C3_ENV_NAME: Optional[str]=None
    """
    Name of the very special Env for this cluster
    
    @see #c3Env
    """

    LOCAL_CLUSTER_ID: Optional[str]=None
    """
    Reserved name for a special Cluster for local C3 deployment
    """

    CLI_CLUSTER_ID: Optional[str]=None
    """
    Reserved name for a special Cluster for C3 CLI
    """

    TEST_CLUSTER_ID: Optional[str]=None
    """
    Reserved name for a special Cluster for testing
    """

    singleNode: Optional[bool]=None
    """
    If true then this cluster will only have a single node that will serve requests and execute jobs for every Env and
    App in this Cluster
    """
    def __init__(self, id: Optional[str]=None, meta: Optional[CloudCluster.Meta]=None, C3_ENV_NAME: Optional[str]=None, LOCAL_CLUSTER_ID: Optional[str]=None, CLI_CLUSTER_ID: Optional[str]=None, TEST_CLUSTER_ID: Optional[str]=None, singleNode: Optional[bool]=None) -> None: ...

    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Cluster]:
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
    def make(cls, s: str) -> Union[Cluster]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Cluster:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Cluster:
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
    def fromJson(cls, json: any) -> Union[Cluster]:
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
    def fromJsonString(cls, json: str) -> Union[Cluster]:
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
    def fromXmlString(cls, xml: str) -> Union[Cluster]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster]:
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
    def replaceType(self, old: Type, new: Type) -> Cluster:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster:
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
    def validateObj(self) -> Cluster:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster:
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
    def withoutFieldAtPath(self, path: str) -> Cluster:
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
    def withoutField(self, field: str) -> Cluster:
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
    def withoutField(self, field: FieldType) -> Cluster:
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
    def withoutFields(self, fields: Array[str]) -> Cluster:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Cluster:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster:
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
    def defaultField(self, field: str) -> Cluster:
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
    def defaultField(self, field: FieldType) -> Cluster:
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
    def unsetField(self, field: str) -> Cluster:
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
    def unsetField(self, field: FieldType) -> Cluster:
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
    def removeField(self, field: str) -> Cluster:
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
    def removeField(self, field: FieldType) -> Cluster:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster:
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
    def mergeJson(self, json: any) -> Cluster:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Cluster:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Cluster]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Cluster]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Cluster]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Cluster]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Cluster]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster]]:
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
    def toBuilder(self) -> ObjBuilder[Cluster]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Cluster]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster:
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
    def afterMake(self) -> Cluster:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Cluster:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
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
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Cluster]:
    """
    @return cluster for a given id
    """
        ...
    def state(self) -> str:
    """
    @return current state of this cluster
    """
        ...
    def nodes(self, refresh: bool=None, spec: CloudClusterOpSpec=None) -> Union[Array[Server]]:
    """
    @return nodes comprising this cluster; if `refresh` parameter is set then ensures that cluster membership is
            up to date.
    """
        ...
    def node(self, nodeId: str, failIfMissing: bool=None) -> Server:
    """
    @return specified node belonging to this cluster. If `failIfMissing` is true and node does not exist, throw an error.
    """
        ...
    def nodeStates(self, refresh: bool=None, spec: CloudClusterOpSpec=None) -> Union[Map[str, ]]:
    """
    Represents the state of all individual nodes in this cloud cluster and the last known message reported by those
    nodes for why the nodes have reached that state.
    
    @param refresh
            If `refresh` parameter is true, ensure the state of all nodes are up to date.
    @return mapping of all nodes to their corresponding state
    """
        ...
    def mapNodeToAny(self, action: Callable[[Union[Server]], Union[T]]) -> Map[str, T]:
    """
    Function to execute logic on all nodes in this cluster.
    
    @param action
            Lambda expression used to execute logic on each {@link CloudCluster.Node}
    @return map of node id to action result for that node
    """
        ...
    @classmethod
    def inst(cls) -> Cluster:
    """
    @return the default instance to be used when member functions are called on this type. E.g.
            FileSystem.inst() should return a default file system. It is up to implementation to decide if default
            instance is a singleton or not.
    """
        ...
    def envs(self, refresh: bool=None) -> Array[Env]:
    """
    @return all C3 envs that this cluster consists of; if `refresh` parameter is set then ensures that cluster
            membership is up to date, otherwise last known state is returned.
    """
        ...
    def callInAllEnvs(self, type: str, action: str, thisArg: any, args: any=None, retrySpec: RetrySpec=None, timeoutSpec: TimeoutSpec=None) -> Union[BatchError]:
    """
    Broadcasts the given action (from the current App context) to all nodes in the given Cluster.
    """
        ...
    def env(self, envNameOrId: str, failIfMissing: bool=None) -> Union[Env]:
    """
    @return C3 env for a given name or id; on cache-miss refreshes membership and tries again
    """
        ...
    def apps(self, refresh: bool=None) -> Union[Array[App]]:
    """
    @return all apps in all environments that this cluster is serving
    """
        ...
    def c3Env(self) -> Env:
    """
    A very special env in this cluster that is providing management APIs and load balancing requests to other envs etc.
    """
        ...
    def c3App(self) -> App:
    """
    A very special app in this cluster that is providing management APIs and load balancing requests to other envs etc.
    """
        ...
    def url(self) -> AppUrl:
    """
    @return default / first cluster aka canonical AppUrl for this cluster; any environment and app in this cluster is
            accessible via this url
    """
        ...
    def urls(self) -> Array[AppUrl]:
    """
    @return all {@link AppUrl}s under this Cluster
    """
        ...
    def clusterUrls(self) -> Array[AppUrl]:
    """
    @return all cluster urls in this Cluster;
            any {@link Env} and {@link App} in the cluster is accessible via this url
    """
        ...
    def envUrls(self) -> Array[AppUrl]:
    """
    @return all environment urls in this Cluster;
            any {@link App} belonging to the respective {@link Env} this url is for is accessible via this url;
            the single Env this url is for is accessible via this url;
    """
        ...
    def vanityUrls(self) -> Array[AppUrl]:
    """
    @return all vanity urls in this Cluster;
            the single {@link App} this url is for is accessible via this url
    """
        ...
    def summary(self, spec: Cluster.SummarySpec=None) -> Union[Cluster.Summary]:
    """
    Summary of this {@link Cluster}
    """
        ...
    def isLocal(self) -> bool:
    """
    @return true if this Cluster is a local C3 deployment
    """
        ...
    def isCli(self) -> bool:
    """
    @return true if this Cluster is for C3 CLIs
    """
        ...
    def isTest(self) -> bool:
    """
    @return true if this Cluster is for testing
    """
        ...
    def isLocalK8s(self) -> bool:
    """
    @return true if it is a local cluster configured with access to a K8s control plane that
    can be used for a {@link CloudService}
    """
        ...
    def startEnv(self, spec: Cluster.StartEnvSpec) -> Env:
    """
    Create the Env instance if it does not exist
    
    @param spec
              Specifications for an Env.
    @return created or restarted Env instance
    
    @see Cluster.StartEnvSpec#minimalInfra
    @see Cluster.StartEnvSpec#singleNode
    """
        ...
    def stopEnv(self, env: Env) -> Env:
    """
    Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
    #startEnv Environment can be brought back to fully operation state.
    
    @param env
            Env to be stopped.
    @return updated Env state
    """
        ...
    def stopEnvById(self, envId: str) -> Env:
    """
    Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
    #startEnv Environment can be brought back to fully operation state.
    
    @param envId
            Id of the Env to be stopped.
    @return updated Env state
    """
        ...
    def resumeEnv(self, env: Env) -> Env:
    """
    Restarts the environment if it exists and brings it into an operational state as defined by spec.
    
    @param env
            Env to be restarted.
    @return updated Env state
    """
        ...
    def resumeEnvById(self, envId: str) -> Env:
    """
    Restarts the environment if it exists and brings it into an operational state as defined by spec.
    
    @param envId
            Id of the Env to be restarted.
    @return updated Env state
    """
        ...
    def stop(self) -> BatchError:
    """
    Hibernates the whole cluster except the {@link env}s and {@link app}s present in the exclusion list.
    The call can only be made from the c3 {@link env}'s c3 {@link app}
    
    @return {@link BatchError} object with any errors that may have occurred
    """
        ...
    def resume(self) -> BatchError:
    """
    Wakes up all the hibernated {@link env}s and {@link app}s except those present in the exclusion list.
    The call can only be made from the c3 {@link env}'s c3 {@link app}
    
    @return {@link BatchError} object with any errors that may have occurred
    """
        ...
    def terminateEnv(self, env: Env, confirm: bool=None) -> Env:
    """
    Abort and terminate Environment.
    
    @param env
            Env to be terminated.
    @param confirm
            Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
    @return updated Env state
    """
        ...
    def terminateEnvById(self, envId: str, confirm: bool=None) -> Env:
    """
    Abort and terminate Environment.
    
    @param envId
            Id of the Env to be terminated.
    @param confirm
            Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
    @return updated Env state
    """
        ...
    def forceTerminateEnv(self, env: Env, confirm: bool=None) -> Union[BatchError]:
    """
    Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
    
    @param env
            Env to be force terminated.
    @param confirm
            Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
    @return {@link BatchError} object with any errors that may have occurred
    """
        ...
    def forceTerminateEnvById(self, envId: str, confirm: bool=None) -> Union[BatchError]:
    """
    Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
    
    @param envId
            Id of the Env to be force terminated.
    @param confirm
            Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
    @return {@link BatchError} object with any errors that may have occurred
    """
        ...
    @classmethod
    def clearAllEnvAppAndUserConfig(cls, envId: str, confirm: bool=None) -> bool:
    """
    Resets all configs & secrets for the specified env at the {@link ConfigOverride#ENV} level or lower.
    
    @param envId
            The env ID for which to reset configs
    @param confirm
            Confirmation from user that they understand and confirm deletion of configs and secrets.
    @return 'true' if deletion was successful
    """
        ...
    @classmethod
    def clearEnvConfigKey(cls, envId: str) -> None:
    """
    Clears config keys for an env.
    """
        ...
    def restartEnvs(self, skipSelf: bool=None) -> Union[BatchError]:
    """
    Restart all envs in this Cluster
    
    @param skipSelf
           A boolean flag. Set to true to skip restarting self: the node the command runs on.
    @return {@link BatchError} object with any errors occurred during the restart
    """
        ...
    def cloudProvider(self) -> CloudProvider:
    """
    @return cloud provider this cluster is running in
    """
        ...
    def membership(self) -> Cluster.Membership:
    """
    @return Cluster.Membership service for this Cluster
    """
        ...
    def orphanResources(self, parentCloudResourceType: Type=None, externalResources: bool=None) -> Map[str, Array[CloudResource]]:
    """
    Fetches and returns {@link CloudResource}s belonging to this {@link Cluster}, but not belonging to any currently running {@link App} within it.
    @param parentCloudResourceType
            Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
            If none is provided, then {@link K8sResource}s are returned.
    @param externalResources
            If true, then {@link CloudResource}s that do not have the base {@link CloudTagKey.CLUSTER},
            {@link CloudTagKey.ENV_ID} and {@link CloudTagKey.APP_ID} tags are also taken into consideration.
    @return orphaned {@link CloudResource}s
    """
        ...
    
    class Summary(CloudCluster.Summary.C3):
        """
        Returns the summary of the C3 cluster
        
        @remarks this represents a made instance of Cluster.Summary
        """
        
        id: Optional[str]=None
        """
        The id of this instance.
        """

        state: Optional[str]=None
        """
        Represents state of a CloudCluster.
        """

        meta: Optional[CloudCluster.Meta]=None
        """
        Meta information related to the {@link CloudCluster}
        """

        nodeCount: Optional[int]
        """
        Count of total {@link CloudCluster.Node}s within a {@link CloudCluster}
        """

        serverVersion: Optional[str]=None
        """
        Semantic version of the server for this C3 Environment
        """

        label: Optional[str]=None
        """
        Label for the cloud cluster
        """

        nodePoolCount: Optional[Map[str, int]]
        """
        Count of {@link CloudCluster.Node}s broken by category within a {@link CloudCluster}
        """

        apps: Optional[Array[App.Summary]]=None
        """
        Summary of all {@link App}s belonging to this C3 cluster.
        """

        envs: Optional[Array[Env.Summary]]=None
        """
        Summary of all {@link Env}s belonging to this C3 cluster.
        """
        def __init__(self, id: Optional[str]=None, state: Optional[str]=None, meta: Optional[CloudCluster.Meta]=None, nodeCount: Optional[int]=None, serverVersion: Optional[str]=None, label: Optional[str]=None, nodePoolCount: Optional[Map[str, int]]=None, apps: Optional[Array[App.Summary]]=None, envs: Optional[Array[Env.Summary]]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.Summary]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Summary]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Summary]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Summary]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Summary:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Summary:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Summary:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Summary]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Summary]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Summary:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Summary:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Summary:
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
        def validateObj(self) -> Cluster.Summary:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Summary:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Summary:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Summary:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Summary:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Summary:
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
        def withoutField(self, field: str) -> Cluster.Summary:
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
        def withoutField(self, field: FieldType) -> Cluster.Summary:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Summary:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Summary:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Summary:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Summary:
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
        def defaultField(self, field: str) -> Cluster.Summary:
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
        def defaultField(self, field: FieldType) -> Cluster.Summary:
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
        def unsetField(self, field: str) -> Cluster.Summary:
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
        def unsetField(self, field: FieldType) -> Cluster.Summary:
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
        def removeField(self, field: str) -> Cluster.Summary:
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
        def removeField(self, field: FieldType) -> Cluster.Summary:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Summary:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Summary:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Summary:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Summary:
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
        def mergeJson(self, json: any) -> Cluster.Summary:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Summary:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Summary:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Summary]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Summary]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Summary]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Summary]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Summary]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Summary]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Summary]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Summary]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Summary]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Summary:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Summary:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Summary:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Summary:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Summary:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Summary:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Summary:
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
        def afterMake(self) -> Cluster.Summary:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Summary:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Summary]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Summary:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class Telemetry(CloudCluster.Telemetry):
        """
        C3 Cluster Telemetry
        
        @remarks this represents a made instance of Cluster.Telemetry
        """
        
        coreCount: Optional[float]=None
        """
        Number of CPU cores
        """

        cpu: Optional[float]=None
        """
        CPU usage of in range of `[0..1]` as percentage of usage to allocation / capacity
        """

        memory: Optional[float]=None
        """
        Memory usage in range of `[0..1]` as percentage of usage to allocation / capacity
        """

        memoryGb: Optional[float]=None
        """
        Memory in Gigabytes
        """

        network: Optional[float]=None
        """
        Network usage snapshot in range of `[0..1]` as percentage of usage to allocation / capacity
        """

        networkGbSec: Optional[float]=None
        """
        Network throughput snapshot as measured by Gigabytes r per second
        """

        io: Optional[float]=None
        """
        Local storage usage in range of `[0..1]` as percentage of usage to allocation / capacity
        """

        ioGb: Optional[float]=None
        """
        Local storage usage in Gigabytes
        """

        ioGbSec: Optional[float]=None
        """
        Local storage throughput snapshot as measured by Gigabytes read / stored per second
        """
        def __init__(self, coreCount: Optional[float]=None, cpu: Optional[float]=None, memory: Optional[float]=None, memoryGb: Optional[float]=None, network: Optional[float]=None, networkGbSec: Optional[float]=None, io: Optional[float]=None, ioGb: Optional[float]=None, ioGbSec: Optional[float]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.Telemetry]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Telemetry]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Telemetry]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Telemetry]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Telemetry:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Telemetry:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Telemetry:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Telemetry]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Telemetry]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Telemetry:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Telemetry:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Telemetry:
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
        def validateObj(self) -> Cluster.Telemetry:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Telemetry:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Telemetry:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Telemetry:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Telemetry:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Telemetry:
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
        def withoutField(self, field: str) -> Cluster.Telemetry:
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
        def withoutField(self, field: FieldType) -> Cluster.Telemetry:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Telemetry:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Telemetry:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Telemetry:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Telemetry:
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
        def defaultField(self, field: str) -> Cluster.Telemetry:
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
        def defaultField(self, field: FieldType) -> Cluster.Telemetry:
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
        def unsetField(self, field: str) -> Cluster.Telemetry:
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
        def unsetField(self, field: FieldType) -> Cluster.Telemetry:
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
        def removeField(self, field: str) -> Cluster.Telemetry:
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
        def removeField(self, field: FieldType) -> Cluster.Telemetry:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Telemetry:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Telemetry:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Telemetry:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Telemetry:
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
        def mergeJson(self, json: any) -> Cluster.Telemetry:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Telemetry:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Telemetry:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Telemetry]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Telemetry]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Telemetry]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Telemetry]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Telemetry]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Telemetry]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Telemetry]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Telemetry]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Telemetry]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Telemetry:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Telemetry:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Telemetry:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Telemetry:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Telemetry:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Telemetry:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Telemetry:
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
        def afterMake(self) -> Cluster.Telemetry:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Telemetry:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Telemetry]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Telemetry:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class Autoscaler(Mutable):
        """
        Represents abstract C3 Cluster Autoscaler Service.
        
        @remarks this represents a made instance of Cluster.Autoscaler
        """
        def __init__(self) -> None: ...

        @overload
        @classmethod
        def make(cls) -> Cluster.Autoscaler:
        """
        Construct an instance with initial state.
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Autoscaler:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Autoscaler:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Autoscaler:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Autoscaler:
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
        def fromJson(cls, json: any) -> Union[Cluster.Autoscaler]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Autoscaler]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Autoscaler]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Autoscaler]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Autoscaler:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Autoscaler:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Autoscaler:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Autoscaler]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Autoscaler]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Autoscaler:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Autoscaler:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Autoscaler:
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
        def validateObj(self) -> Cluster.Autoscaler:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Autoscaler:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Autoscaler:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Autoscaler:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Autoscaler:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Autoscaler:
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
        def withoutField(self, field: str) -> Cluster.Autoscaler:
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
        def withoutField(self, field: FieldType) -> Cluster.Autoscaler:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Autoscaler:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Autoscaler:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Autoscaler:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Autoscaler:
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
        def defaultField(self, field: str) -> Cluster.Autoscaler:
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
        def defaultField(self, field: FieldType) -> Cluster.Autoscaler:
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
        def unsetField(self, field: str) -> Cluster.Autoscaler:
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
        def unsetField(self, field: FieldType) -> Cluster.Autoscaler:
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
        def removeField(self, field: str) -> Cluster.Autoscaler:
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
        def removeField(self, field: FieldType) -> Cluster.Autoscaler:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Autoscaler:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Autoscaler:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Autoscaler:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Autoscaler:
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
        def mergeJson(self, json: any) -> Cluster.Autoscaler:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Autoscaler:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Autoscaler:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Autoscaler]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Autoscaler]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Autoscaler]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Autoscaler]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Autoscaler]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Autoscaler]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Autoscaler]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Autoscaler]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Autoscaler]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Autoscaler:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Autoscaler:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Autoscaler:
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
        def afterMake(self) -> Cluster.Autoscaler:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Autoscaler:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Autoscaler]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Autoscaler:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @overload
        def setField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Autoscaler:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param name
                  of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        @overload
        def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Autoscaler:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        def onChange(self, changed: Array[str]) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
        field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
        properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
        collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
        key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
        collection field. This has the same appearance as if the collection field were assigned from a previously
        unassigned value.
        
        Example:
        ```type
        type A mixes MutableObj {
          onChange: ~
          b: [string]
          c: map<string, int>
          d: D
        }
        type D mixes MutableObj {
          onChange: ~
          e: string
        }
        ```
        ```js
        var a = A.make({b: ['hello', 'goodbye'], d: {}});
        a.b[1] = 'World'; // 1
        a.c['hello'] = 'world'; // 2
        a.d.e = 'hello' // 3
        a.b.pop(); // 4
        ```
        `A.onChange` should be called four times:
          1. when the field `b` changed - the FieldPath will be "b[1]".
          2. when the field `c` changed - the FieldPath will be "c.hello".
          3. when `d` changed - the FieldPath will be "d.e".
          4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
        
        `D.onChange` should be called once - the FieldPath will be `e`.
        
        Note that if multiple elements of a child collection are changed, you will get multiple field paths.
        
        @param changed paths to fields that changed
        
        @see #onEdit
        """
            ...
        def onEdit(self, edits: Obj) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
        contains more information about the values which changed, including their prior values. This allows a full
        difference to be calculated if desired. Note that maintaining this state is much more costly than simple
        notification via #onChange and should only be used if truly required.
        
        @param edits a list of what changed and the prior values
        
        @see #onChange
        """
            ...
        def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
        """
        Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
        
        @param action the lambda to invoke that makes changes without notification
        """
            ...
        def capabilities(self) -> Union[Cluster.AutoscalerCaps]:
        """
        @return capabilities of this Cluster Autoscaler Service
        """
            ...
        def setNodeCountTarget(self, role: str, count: int) -> None:
        """
        Sets target number of Cluster Leader or Worker nodes
        """
            ...
    
    class MembershipCaps_Wip():
        """
        Capabilities of C3 Cluster Membership and Discovery Service
        
        @remarks this represents a made instance of Cluster.MembershipCaps_Wip
        """
        
        startNodes: Optional[bool]=None
        """
        Supports start and shutdown of nodes
        """

        restartNode: Optional[bool]=None
        """
        Supports restart of a node
        """
        def __init__(self, startNodes: Optional[bool]=None, restartNode: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.MembershipCaps_Wip]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.MembershipCaps_Wip]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.MembershipCaps_Wip]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.MembershipCaps_Wip]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.MembershipCaps_Wip:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.MembershipCaps_Wip]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.MembershipCaps_Wip]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def validateObj(self) -> Cluster.MembershipCaps_Wip:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.MembershipCaps_Wip:
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
        def withoutField(self, field: str) -> Cluster.MembershipCaps_Wip:
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
        def withoutField(self, field: FieldType) -> Cluster.MembershipCaps_Wip:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.MembershipCaps_Wip:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.MembershipCaps_Wip:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.MembershipCaps_Wip:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.MembershipCaps_Wip:
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
        def defaultField(self, field: str) -> Cluster.MembershipCaps_Wip:
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
        def defaultField(self, field: FieldType) -> Cluster.MembershipCaps_Wip:
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
        def unsetField(self, field: str) -> Cluster.MembershipCaps_Wip:
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
        def unsetField(self, field: FieldType) -> Cluster.MembershipCaps_Wip:
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
        def removeField(self, field: str) -> Cluster.MembershipCaps_Wip:
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
        def removeField(self, field: FieldType) -> Cluster.MembershipCaps_Wip:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.MembershipCaps_Wip:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.MembershipCaps_Wip:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.MembershipCaps_Wip:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.MembershipCaps_Wip:
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
        def mergeJson(self, json: any) -> Cluster.MembershipCaps_Wip:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.MembershipCaps_Wip:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.MembershipCaps_Wip:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.MembershipCaps_Wip]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.MembershipCaps_Wip]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.MembershipCaps_Wip]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.MembershipCaps_Wip]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.MembershipCaps_Wip]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.MembershipCaps_Wip]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.MembershipCaps_Wip]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.MembershipCaps_Wip]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.MembershipCaps_Wip]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.MembershipCaps_Wip:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.MembershipCaps_Wip:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.MembershipCaps_Wip:
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
        def afterMake(self) -> Cluster.MembershipCaps_Wip:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.MembershipCaps_Wip:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.MembershipCaps_Wip]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.MembershipCaps_Wip:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def none(cls) -> Cluster.MembershipCaps_Wip:
            ...
        @classmethod
        def all(cls) -> Cluster.MembershipCaps_Wip:
            ...
    
    class Leader(Server):
        """
        Represents a leader node. I.e. one responsible for accepting API requests and managing workers.
        
        @see Cluster.Worker
        
        @remarks this represents a made instance of Cluster.Leader
        """
        
        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        state: Optional[str]
        """
        State of this server
        """

        EPHEMERAL_POD_ROOT_DIRECTORY: Optional[str]=None

        serverId: Optional[Server.Id]
        """
        ID of this server
        """

        lastMessage: Optional[str]=None
        """
        Last known message reported by the server regarding its status. As an example, in Kubernetes, this could output
        the last known message from a pod's status for why it previously crashed.
        """

        ipAddress: Optional[str]=None
        """
        IP Address of this node
        """

        httpPort: Optional[int]=None
        """
        HTTP port for this node
        """

        debugPort: Optional[int]=None
        """
        Debug port if this JVM is in debug mode
        """

        profilerPort: Optional[int]=None
        """
        Profiler port if this JVM is running profiler agent
        """

        pid: Optional[int]
        """
        POSIX process id of this server
        """

        latency: Optional[str]
        """
        Latency of state update / heartbeat requests formatted as duration
        """

        startTime: Optional[datetime]
        """
        Start time of JVM of this server
        """

        publicIpAddress: Optional[str]=None
        """
        Public ip address if any associated
        """

        instanceType: Optional[str]=None
        """
        Compute instance type if available
        """

        instanceId: Optional[str]=None
        """
        Compute instance id if available
        """

        instanceStartTime: Optional[datetime]
        """
        Start time of cloud compute instance of this server
        """

        imageId: Optional[str]=None
        """
        Machine image id
        """

        lastHeartbeatTime: Optional[datetime]=None
        """
        Time of the last state update / heartbeat request sent to this server by Leader
        """

        telemetry: Optional[Server.Telemetry]=None
        """
        Current telemetry of this node
        """

        leader: Optional[Cluster.Leader]=None
        """
        Leader for this Server (aka C3 Cluster Node) if it is not a leader itself
        """
        def __init__(self, id: Optional[str]=None, state: Optional[str]=None, EPHEMERAL_POD_ROOT_DIRECTORY: Optional[str]=None, serverId: Optional[Server.Id]=None, lastMessage: Optional[str]=None, ipAddress: Optional[str]=None, httpPort: Optional[int]=None, debugPort: Optional[int]=None, profilerPort: Optional[int]=None, pid: Optional[int]=None, latency: Optional[str]=None, startTime: Optional[datetime]=None, publicIpAddress: Optional[str]=None, instanceType: Optional[str]=None, instanceId: Optional[str]=None, instanceStartTime: Optional[datetime]=None, imageId: Optional[str]=None, lastHeartbeatTime: Optional[datetime]=None, telemetry: Optional[Server.Telemetry]=None, leader: Optional[Cluster.Leader]=None) -> None: ...

        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Cluster.Leader]:
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
        def make(cls, s: str) -> Union[Cluster.Leader]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Leader:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Leader:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Leader:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Leader:
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
        def fromJson(cls, json: any) -> Union[Cluster.Leader]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Leader]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Leader]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Leader]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Leader:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Leader:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Leader:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Leader]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Leader]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Leader:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Leader:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Leader:
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
        def validateObj(self) -> Cluster.Leader:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Leader:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Leader:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Leader:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Leader:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Leader:
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
        def withoutField(self, field: str) -> Cluster.Leader:
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
        def withoutField(self, field: FieldType) -> Cluster.Leader:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Leader:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Leader:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Leader:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Leader:
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
        def defaultField(self, field: str) -> Cluster.Leader:
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
        def defaultField(self, field: FieldType) -> Cluster.Leader:
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
        def unsetField(self, field: str) -> Cluster.Leader:
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
        def unsetField(self, field: FieldType) -> Cluster.Leader:
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
        def removeField(self, field: str) -> Cluster.Leader:
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
        def removeField(self, field: FieldType) -> Cluster.Leader:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Leader:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Leader:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Leader:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Leader:
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
        def mergeJson(self, json: any) -> Cluster.Leader:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Leader:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Leader:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Leader]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Leader]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Leader]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Leader]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Leader]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Leader]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Leader]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Leader]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Leader]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Leader:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Leader:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Leader:
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
        def afterMake(self) -> Cluster.Leader:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Leader:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Leader]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Leader:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
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
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Cluster.Leader]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def cluster(self) -> Cluster:
        """
        Parent cluster that this Server belongs to.
        """
            ...
        @classmethod
        def inst(cls) -> Cluster.Leader:
        """
        @return the default instance to be used when member functions are called on this type. E.g.
                FileSystem.inst() should return a default file system. It is up to implementation to decide if default
                instance is a singleton or not.
        """
            ...
        def cloudResource(self) -> Union[CloudResource]:
        """
        Returns the {@link CloudResource} object for this node.
        """
            ...
        @classmethod
        def fromId(cls, id: Server.Id) -> Cluster.Leader:
        """
        Creates and returns Server instance from {@link Server.Id}
        
        @return a created Server instance based on {@link Server.Id} parameter
        """
            ...
        def heartbeatErrorPct(self) -> float:
        """
        Rate of errors for state update / heartbeat requests for this server
        """
            ...
        def roles(self) -> Array[str]:
        """
        {@link Server.Role}s that this server can function as.
        
        @return all {@link Server.Role}s for this server
        """
            ...
        def age(self) -> str:
        """
        Age of this server formatted as duration
        
        @return age of this server
        """
            ...
        def uptime(self) -> str:
        """
        Uptime of this server as % value [0,100]
        """
            ...
        def env(self) -> Env:
        """
        Parent env that this Server belongs to.
        """
            ...
        def app(self) -> App:
        """
        Parent app that this Server belongs to.
        """
            ...
        @classmethod
        def me(cls) -> Server:
        """
        @return Server (aka C3 Cluster Node) for the current JVM process.
        """
            ...
        @classmethod
        def meId(cls) -> str:
            ...
        def isMe(self) -> bool:
        """
        @return true if this Server is running in current JVM process.
        """
            ...
        def isRunning(self) -> bool:
        """
        @return `true` if this server is a RUNNING
        """
            ...
        def isLeader(self) -> bool:
        """
        @return `true` if this server is a leader i.e. member of a cluster responsible for managing that env and
                accepting API requests
        """
            ...
        def isWorker(self) -> bool:
        """
        @return `true` if this server is a worker i.e. member of a cluster responsible for managing task, data and db
                nodes
        """
            ...
        def isAgent(self) -> bool:
        """
        @return `true` if this server is an agent i.e. member of a env responsible for managing 3rd party software
        """
            ...
        def isTask(self) -> bool:
        """
        @return `true` if this server is a task node i.e. member executing actions
        """
            ...
        def isData(self) -> bool:
        """
        @return `true` if this server is a data node i.e. member holding data
        """
            ...
        def isProxy(self) -> bool:
        """
        @return `true` if this server is a proxy node i.e. member responsible for db & external service connection
                pooling
        """
            ...
        def isReady(self) -> bool:
        """
        @return `true` if this server is ready to serve network requests
        """
            ...
        def asLeader(self, failIfNot: bool=None) -> Union[Cluster.Leader]:
        """
        @return downcast to Cluster.Leader if this is a leader node or `null` or error
        """
            ...
        def asWorker(self, failIfNot: bool=None) -> Union[Cluster.Worker]:
        """
        @return downcast to Cluster.Worker if this is a worker node or `null` or error
        """
            ...
        def asAgent(self, failIfNot: bool=None) -> Union[Env.Agent]:
        """
        @return downcast to Env.Agent if this is an agent node or `null` or error
        """
            ...
        def asTask(self, failIfNot: bool=None) -> Union[Env.Task]:
        """
        @return downcast to Env.Agent if this is an task node or `null` or error
        """
            ...
        def asData(self, failIfNot: bool=None) -> Union[Env.Data]:
        """
        @return downcast to Env.Agent if this is an data node or `null` or error
        """
            ...
        def asProxy(self, failIfNot: bool=None) -> Union[Env.Proxy]:
        """
        @return downcast to Env.Proxy if this is an proxy node or `null` or error
        """
            ...
        def metricTags(self) -> Array[Map[str, str]]:
        """
        @return map of the server metric tags. Basically two tags, metric type and metric to be calculated on.
                For example {"type": "DiskSize", "field": "/user/local/share/c3/server"}
        """
            ...
        def metric(self, appMeterTags: Map[str, str]) -> float:
        """
        @return double
                metric value for given tags.
        """
            ...
        def jvm(self) -> Server.Jvm:
        """
        @return JVM executing this server
        """
            ...
        def connection(self) -> ServerConnection:
        """
        @return connection to this server
        """
            ...
        def callJson(self, type: str, action: str, thisArg: any=None, args: any=None, kwargs: any=None) -> Union[any]:
        """
        JSON RPC to this server.
        
        @param type
                target type
        @param action
                target action
        @param thisArg
                json representing `this` argument to call
        @param args
                json array representing positional arguments
        @param kwargs
                json array representing kwarg arguments, typically a Spec
        @return json
        """
            ...
        @overload
        def call(self, type: str, action: str, thisArg: any=None, args: Array[any]=None, spec: TimeoutSpec=None) -> Union[any]:
        """
        @return result of the call of provided action on this node
        """
            ...
        @overload
        def call(self, action: Lambda[FunctionType], spec: TimeoutSpec=None) -> Union[Any]:
        """
        @return result of the call of provided lambda on this node
        """
            ...
        @overload
        def callAsync(self, type: str, action: str, thisArg: any=None, args: Array[any]=None, spec: TimeoutSpec=None) -> Union[Promise[any]]:
        """
        @return promise of result of the call of provided action on this node
        """
            ...
        @overload
        def callAsync(self, action: Lambda[FunctionType], spec: TimeoutSpec=None) -> Union[Promise[T]]:
        """
        @return promise of result of the call of provided lambda on this node
        """
            ...
        def clearLocalAppsCaches(self, type: str, cache: str) -> None:
        """
        Clears cache for the provided type in all local apps on the server.
        @param type
                target type
        @param cache
                target cache to clear. rawJsonNativeCache or nativeCache
        """
            ...
        def evictFromLocalAppsCaches(self, type: str, key: str, cache: str) -> None:
        """
        Evicts from cache for the provided type and key in all local apps on the server.
        @param type
                target type
        @param key
                key representing specific instance of the object to evict
        @param cache
                target cache to evict cached value. rawJsonNativeCache or nativeCache
        """
            ...
        def ssh(self, script: str, spec: TimeoutSpec=None) -> Union[str]:
        """
        @return result of shell script execution on this node
        """
            ...
        def sshAsync(self, script: str, spec: TimeoutSpec=None) -> Union[Promise[str]]:
        """
        @return promise of result of shell script execution on this node
        """
            ...
        def restart(self, shutdownTimeout: Duration='{"microseconds": 120000000}') -> None:
        """
        Restarts this node. Issues Jvm process graceful shutdown request (SIGTERM) and waits up to shutdownTimeout
        (defaults to 120 seconds) for all pending tasks to complete, then issues SIGKILL.
        @param shutdownTimeout
           specifies the duration for which an initial SIGTERM will wait for the jvm to quit, otherwise will initiate a SIGKILL.
           if set to 0, initiates a SIGKILL immediately.
        """
            ...
        def shutdown(self) -> None:
        """
        Issues graceful shutdown request to this node
        """
            ...
        def terminate(self, confirm: bool=None) -> None:
        """
        Abort and terminate this server
        """
            ...
        def upgrade(self) -> None:
        """
        Upgrade all server nodes in the env to latest stable version
        """
            ...
        def endpointUrl(self, public_: bool=None) -> str:
        """
        Returns endpoint url to connect to for this server.
        """
            ...
        @classmethod
        def hardwareProfile(cls) -> Union[HardwareProfile]:
        """
        Return the hardware profile of this server
        """
            ...
        @classmethod
        def hardwareProfileName(cls) -> Union[str]:
        """
        Return the name of hardware profile for this server
        """
            ...
        def nodePool(self) -> App.NodePool:
        """
        Return the nodePool this server belongs to
        """
            ...
        def nodePoolName(self) -> Union[str]:
        """
        Return the name of nodePool this server belongs to
        """
            ...
        def membership(self) -> Union[App.Membership]:
        """
        Membership service that is managing this server node
        """
            ...
        def actionDump(self, spec: ActionsSpec=None) -> Union[Array[Action]]:
        """
        Dumps all the active (running or pending) actions for this server in the cluster by thread. (C3 actions)
        By default, {#actionDump} will return root actions sorted by elapsed and id in descending order.
        """
            ...
        def actions(self, spec: ActionsSpec=None) -> Union[Array[Action]]:
        """
        Dumps all the active (running or pending) actions for this server in the cluster by thread. (C3 actions)
        By default, {#actions} will return root actions sorted by elapsed and id in descending order.
        """
            ...
        def emptyAllCaches(self) -> None:
        """
        Empties all of the caches for this Server.
        """
            ...
        def listLoggers(self) -> Union[Map[str, str]]:
        """
        List loggers for this Server
        @return a map of logger name to log level
        """
            ...
        def setLogLevel(self, level: str, logger: str=None, timeout: str='"15m"') -> None:
        """
        Set logLevel for the given logger for this Server
        @param logger
               logger name. If not specified the log level for all the registered loggers will be changed
        @param level
               Logger.Level to set
        @param timeout
               the amount of time to wait before reverting back to the original log level
        """
            ...
        def logLevel(self, logger: str) -> str:
        """
        Get log level for this logger in this server
        """
            ...
        def restfulEndpoint(self, app: App, restfulEncodedPath: str) -> str:
        """
        @param restfulEncodedPath
               path to restful endpoint
        @return url to restful endpoint
        """
            ...
        @classmethod
        def isConnectionClosedErr(cls, err: str) -> bool:
        """
        Checks if the given error string indicates that the connection is closed.
        
        @param err - The error string to check.
        @return `true` if the error indicates a closed connection, `false` otherwise.
        """
            ...
        def computeDirUsages(self, localDirs: Array[str], timeoutSecs: float='10.0') -> Union[Map[str, int]]:
        """
        User can only check the dirs which the java process has access to.
        localDir can be a local OS path, either absolute or relative.
        If relative, it is interpreted relative to the current working directory, which is typically /home/c3.
        @param localDirs
                 Directories for which usage need to be computed.
        @param timeoutSecs
                 After timeoutSecs, if the computation of directory usages is not completed, the du operation for that specific directory will timeout.
                 This timeout is applied on a per-directory basis, meaning each directory has its own independent timeoutSecs limit for the computation.
                 The default value is 10 seconds.
        @return the map between the dir path and the dir size in bytes.
        """
            ...
        def calculateStorageStatsForMountForDir(self, path: str, timeoutSecs: float='10.0', failIfMissing: bool=None) -> Union[StorageStats]:
        """
        Retrieves the used size and available size for the mounted storage device which is backing the dir in bytes.
        User can only check the dirs which the java process has access to.
        @param path
                  a dir path on which a volume is mounted.
        @param timeoutSecs
               after timeoutSecs, if dir usages computation is not finished yet, the underlying `df` operation will timeout.
        @param failIfMissing
                  defines whether the function will throw out an error if path does not exist.
        @return the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
        """
            ...
        def readiness(self) -> Union[Pair[bool, str]]:
        """
        @returns the readiness of the server as a key-value pair.
        The key indicates whether server is ready to serve network requests and the value provides additional details.
        """
            ...
        def overrideReadiness(self, value: bool=None) -> None:
        """
        Overrides the readiness probe for the Server.
        By default the value is true
        
        @param value
               the value to be set for the Server's readiness override flag.
        """
            ...
        def registerTaskNode(self, endpoint: str=None) -> str:
            ...
    
    class Worker(Server):
        """
        Represents a worker node. I.e. one responsible for managing compute instance and other C3 nodes running on it.
        
        @see Cluster.Master
        @see Cluster.Agent
        
        @remarks this represents a made instance of Cluster.Worker
        """
        
        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        state: Optional[str]
        """
        State of this server
        """

        EPHEMERAL_POD_ROOT_DIRECTORY: Optional[str]=None

        serverId: Optional[Server.Id]
        """
        ID of this server
        """

        lastMessage: Optional[str]=None
        """
        Last known message reported by the server regarding its status. As an example, in Kubernetes, this could output
        the last known message from a pod's status for why it previously crashed.
        """

        ipAddress: Optional[str]=None
        """
        IP Address of this node
        """

        httpPort: Optional[int]=None
        """
        HTTP port for this node
        """

        debugPort: Optional[int]=None
        """
        Debug port if this JVM is in debug mode
        """

        profilerPort: Optional[int]=None
        """
        Profiler port if this JVM is running profiler agent
        """

        pid: Optional[int]
        """
        POSIX process id of this server
        """

        latency: Optional[str]
        """
        Latency of state update / heartbeat requests formatted as duration
        """

        startTime: Optional[datetime]
        """
        Start time of JVM of this server
        """

        publicIpAddress: Optional[str]=None
        """
        Public ip address if any associated
        """

        instanceType: Optional[str]=None
        """
        Compute instance type if available
        """

        instanceId: Optional[str]=None
        """
        Compute instance id if available
        """

        instanceStartTime: Optional[datetime]
        """
        Start time of cloud compute instance of this server
        """

        imageId: Optional[str]=None
        """
        Machine image id
        """

        lastHeartbeatTime: Optional[datetime]=None
        """
        Time of the last state update / heartbeat request sent to this server by Leader
        """

        telemetry: Optional[Server.Telemetry]=None
        """
        Current telemetry of this node
        """

        leader: Optional[Cluster.Leader]=None
        """
        Leader for this Server (aka C3 Cluster Node) if it is not a leader itself
        """
        def __init__(self, id: Optional[str]=None, state: Optional[str]=None, EPHEMERAL_POD_ROOT_DIRECTORY: Optional[str]=None, serverId: Optional[Server.Id]=None, lastMessage: Optional[str]=None, ipAddress: Optional[str]=None, httpPort: Optional[int]=None, debugPort: Optional[int]=None, profilerPort: Optional[int]=None, pid: Optional[int]=None, latency: Optional[str]=None, startTime: Optional[datetime]=None, publicIpAddress: Optional[str]=None, instanceType: Optional[str]=None, instanceId: Optional[str]=None, instanceStartTime: Optional[datetime]=None, imageId: Optional[str]=None, lastHeartbeatTime: Optional[datetime]=None, telemetry: Optional[Server.Telemetry]=None, leader: Optional[Cluster.Leader]=None) -> None: ...

        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Cluster.Worker]:
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
        def make(cls, s: str) -> Union[Cluster.Worker]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Worker:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Worker:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Worker:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Worker:
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
        def fromJson(cls, json: any) -> Union[Cluster.Worker]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Worker]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Worker]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Worker]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Worker:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Worker:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Worker:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Worker]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Worker]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Worker:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Worker:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Worker:
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
        def validateObj(self) -> Cluster.Worker:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Worker:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Worker:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Worker:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Worker:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Worker:
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
        def withoutField(self, field: str) -> Cluster.Worker:
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
        def withoutField(self, field: FieldType) -> Cluster.Worker:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Worker:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Worker:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Worker:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Worker:
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
        def defaultField(self, field: str) -> Cluster.Worker:
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
        def defaultField(self, field: FieldType) -> Cluster.Worker:
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
        def unsetField(self, field: str) -> Cluster.Worker:
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
        def unsetField(self, field: FieldType) -> Cluster.Worker:
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
        def removeField(self, field: str) -> Cluster.Worker:
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
        def removeField(self, field: FieldType) -> Cluster.Worker:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Worker:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Worker:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Worker:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Worker:
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
        def mergeJson(self, json: any) -> Cluster.Worker:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Worker:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Worker:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Worker]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Worker]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Worker]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Worker]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Worker]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Worker]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Worker]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Worker]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Worker]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Worker:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Worker:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Worker:
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
        def afterMake(self) -> Cluster.Worker:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Worker:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Worker]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Worker:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
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
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Cluster.Worker]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def cluster(self) -> Cluster:
        """
        Parent cluster that this Server belongs to.
        """
            ...
        @classmethod
        def inst(cls) -> Cluster.Worker:
        """
        @return the default instance to be used when member functions are called on this type. E.g.
                FileSystem.inst() should return a default file system. It is up to implementation to decide if default
                instance is a singleton or not.
        """
            ...
        def cloudResource(self) -> Union[CloudResource]:
        """
        Returns the {@link CloudResource} object for this node.
        """
            ...
        @classmethod
        def fromId(cls, id: Server.Id) -> Cluster.Worker:
        """
        Creates and returns Server instance from {@link Server.Id}
        
        @return a created Server instance based on {@link Server.Id} parameter
        """
            ...
        def heartbeatErrorPct(self) -> float:
        """
        Rate of errors for state update / heartbeat requests for this server
        """
            ...
        def roles(self) -> Array[str]:
        """
        {@link Server.Role}s that this server can function as.
        
        @return all {@link Server.Role}s for this server
        """
            ...
        def age(self) -> str:
        """
        Age of this server formatted as duration
        
        @return age of this server
        """
            ...
        def uptime(self) -> str:
        """
        Uptime of this server as % value [0,100]
        """
            ...
        def env(self) -> Env:
        """
        Parent env that this Server belongs to.
        """
            ...
        def app(self) -> App:
        """
        Parent app that this Server belongs to.
        """
            ...
        @classmethod
        def me(cls) -> Server:
        """
        @return Server (aka C3 Cluster Node) for the current JVM process.
        """
            ...
        @classmethod
        def meId(cls) -> str:
            ...
        def isMe(self) -> bool:
        """
        @return true if this Server is running in current JVM process.
        """
            ...
        def isRunning(self) -> bool:
        """
        @return `true` if this server is a RUNNING
        """
            ...
        def isLeader(self) -> bool:
        """
        @return `true` if this server is a leader i.e. member of a cluster responsible for managing that env and
                accepting API requests
        """
            ...
        def isWorker(self) -> bool:
        """
        @return `true` if this server is a worker i.e. member of a cluster responsible for managing task, data and db
                nodes
        """
            ...
        def isAgent(self) -> bool:
        """
        @return `true` if this server is an agent i.e. member of a env responsible for managing 3rd party software
        """
            ...
        def isTask(self) -> bool:
        """
        @return `true` if this server is a task node i.e. member executing actions
        """
            ...
        def isData(self) -> bool:
        """
        @return `true` if this server is a data node i.e. member holding data
        """
            ...
        def isProxy(self) -> bool:
        """
        @return `true` if this server is a proxy node i.e. member responsible for db & external service connection
                pooling
        """
            ...
        def isReady(self) -> bool:
        """
        @return `true` if this server is ready to serve network requests
        """
            ...
        def asLeader(self, failIfNot: bool=None) -> Union[Cluster.Leader]:
        """
        @return downcast to Cluster.Leader if this is a leader node or `null` or error
        """
            ...
        def asWorker(self, failIfNot: bool=None) -> Union[Cluster.Worker]:
        """
        @return downcast to Cluster.Worker if this is a worker node or `null` or error
        """
            ...
        def asAgent(self, failIfNot: bool=None) -> Union[Env.Agent]:
        """
        @return downcast to Env.Agent if this is an agent node or `null` or error
        """
            ...
        def asTask(self, failIfNot: bool=None) -> Union[Env.Task]:
        """
        @return downcast to Env.Agent if this is an task node or `null` or error
        """
            ...
        def asData(self, failIfNot: bool=None) -> Union[Env.Data]:
        """
        @return downcast to Env.Agent if this is an data node or `null` or error
        """
            ...
        def asProxy(self, failIfNot: bool=None) -> Union[Env.Proxy]:
        """
        @return downcast to Env.Proxy if this is an proxy node or `null` or error
        """
            ...
        def metricTags(self) -> Array[Map[str, str]]:
        """
        @return map of the server metric tags. Basically two tags, metric type and metric to be calculated on.
                For example {"type": "DiskSize", "field": "/user/local/share/c3/server"}
        """
            ...
        def metric(self, appMeterTags: Map[str, str]) -> float:
        """
        @return double
                metric value for given tags.
        """
            ...
        def jvm(self) -> Server.Jvm:
        """
        @return JVM executing this server
        """
            ...
        def connection(self) -> ServerConnection:
        """
        @return connection to this server
        """
            ...
        def callJson(self, type: str, action: str, thisArg: any=None, args: any=None, kwargs: any=None) -> Union[any]:
        """
        JSON RPC to this server.
        
        @param type
                target type
        @param action
                target action
        @param thisArg
                json representing `this` argument to call
        @param args
                json array representing positional arguments
        @param kwargs
                json array representing kwarg arguments, typically a Spec
        @return json
        """
            ...
        @overload
        def call(self, type: str, action: str, thisArg: any=None, args: Array[any]=None, spec: TimeoutSpec=None) -> Union[any]:
        """
        @return result of the call of provided action on this node
        """
            ...
        @overload
        def call(self, action: Lambda[FunctionType], spec: TimeoutSpec=None) -> Union[Any]:
        """
        @return result of the call of provided lambda on this node
        """
            ...
        @overload
        def callAsync(self, type: str, action: str, thisArg: any=None, args: Array[any]=None, spec: TimeoutSpec=None) -> Union[Promise[any]]:
        """
        @return promise of result of the call of provided action on this node
        """
            ...
        @overload
        def callAsync(self, action: Lambda[FunctionType], spec: TimeoutSpec=None) -> Union[Promise[T]]:
        """
        @return promise of result of the call of provided lambda on this node
        """
            ...
        def clearLocalAppsCaches(self, type: str, cache: str) -> None:
        """
        Clears cache for the provided type in all local apps on the server.
        @param type
                target type
        @param cache
                target cache to clear. rawJsonNativeCache or nativeCache
        """
            ...
        def evictFromLocalAppsCaches(self, type: str, key: str, cache: str) -> None:
        """
        Evicts from cache for the provided type and key in all local apps on the server.
        @param type
                target type
        @param key
                key representing specific instance of the object to evict
        @param cache
                target cache to evict cached value. rawJsonNativeCache or nativeCache
        """
            ...
        def ssh(self, script: str, spec: TimeoutSpec=None) -> Union[str]:
        """
        @return result of shell script execution on this node
        """
            ...
        def sshAsync(self, script: str, spec: TimeoutSpec=None) -> Union[Promise[str]]:
        """
        @return promise of result of shell script execution on this node
        """
            ...
        def restart(self, shutdownTimeout: Duration='{"microseconds": 120000000}') -> None:
        """
        Restarts this node. Issues Jvm process graceful shutdown request (SIGTERM) and waits up to shutdownTimeout
        (defaults to 120 seconds) for all pending tasks to complete, then issues SIGKILL.
        @param shutdownTimeout
           specifies the duration for which an initial SIGTERM will wait for the jvm to quit, otherwise will initiate a SIGKILL.
           if set to 0, initiates a SIGKILL immediately.
        """
            ...
        def shutdown(self) -> None:
        """
        Issues graceful shutdown request to this node
        """
            ...
        def terminate(self, confirm: bool=None) -> None:
        """
        Abort and terminate this server
        """
            ...
        def upgrade(self) -> None:
        """
        Upgrade all server nodes in the env to latest stable version
        """
            ...
        def endpointUrl(self, public_: bool=None) -> str:
        """
        Returns endpoint url to connect to for this server.
        """
            ...
        @classmethod
        def hardwareProfile(cls) -> Union[HardwareProfile]:
        """
        Return the hardware profile of this server
        """
            ...
        @classmethod
        def hardwareProfileName(cls) -> Union[str]:
        """
        Return the name of hardware profile for this server
        """
            ...
        def nodePool(self) -> App.NodePool:
        """
        Return the nodePool this server belongs to
        """
            ...
        def nodePoolName(self) -> Union[str]:
        """
        Return the name of nodePool this server belongs to
        """
            ...
        def membership(self) -> Union[App.Membership]:
        """
        Membership service that is managing this server node
        """
            ...
        def actionDump(self, spec: ActionsSpec=None) -> Union[Array[Action]]:
        """
        Dumps all the active (running or pending) actions for this server in the cluster by thread. (C3 actions)
        By default, {#actionDump} will return root actions sorted by elapsed and id in descending order.
        """
            ...
        def actions(self, spec: ActionsSpec=None) -> Union[Array[Action]]:
        """
        Dumps all the active (running or pending) actions for this server in the cluster by thread. (C3 actions)
        By default, {#actions} will return root actions sorted by elapsed and id in descending order.
        """
            ...
        def emptyAllCaches(self) -> None:
        """
        Empties all of the caches for this Server.
        """
            ...
        def listLoggers(self) -> Union[Map[str, str]]:
        """
        List loggers for this Server
        @return a map of logger name to log level
        """
            ...
        def setLogLevel(self, level: str, logger: str=None, timeout: str='"15m"') -> None:
        """
        Set logLevel for the given logger for this Server
        @param logger
               logger name. If not specified the log level for all the registered loggers will be changed
        @param level
               Logger.Level to set
        @param timeout
               the amount of time to wait before reverting back to the original log level
        """
            ...
        def logLevel(self, logger: str) -> str:
        """
        Get log level for this logger in this server
        """
            ...
        def restfulEndpoint(self, app: App, restfulEncodedPath: str) -> str:
        """
        @param restfulEncodedPath
               path to restful endpoint
        @return url to restful endpoint
        """
            ...
        @classmethod
        def isConnectionClosedErr(cls, err: str) -> bool:
        """
        Checks if the given error string indicates that the connection is closed.
        
        @param err - The error string to check.
        @return `true` if the error indicates a closed connection, `false` otherwise.
        """
            ...
        def computeDirUsages(self, localDirs: Array[str], timeoutSecs: float='10.0') -> Union[Map[str, int]]:
        """
        User can only check the dirs which the java process has access to.
        localDir can be a local OS path, either absolute or relative.
        If relative, it is interpreted relative to the current working directory, which is typically /home/c3.
        @param localDirs
                 Directories for which usage need to be computed.
        @param timeoutSecs
                 After timeoutSecs, if the computation of directory usages is not completed, the du operation for that specific directory will timeout.
                 This timeout is applied on a per-directory basis, meaning each directory has its own independent timeoutSecs limit for the computation.
                 The default value is 10 seconds.
        @return the map between the dir path and the dir size in bytes.
        """
            ...
        def calculateStorageStatsForMountForDir(self, path: str, timeoutSecs: float='10.0', failIfMissing: bool=None) -> Union[StorageStats]:
        """
        Retrieves the used size and available size for the mounted storage device which is backing the dir in bytes.
        User can only check the dirs which the java process has access to.
        @param path
                  a dir path on which a volume is mounted.
        @param timeoutSecs
               after timeoutSecs, if dir usages computation is not finished yet, the underlying `df` operation will timeout.
        @param failIfMissing
                  defines whether the function will throw out an error if path does not exist.
        @return the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
        """
            ...
        def readiness(self) -> Union[Pair[bool, str]]:
        """
        @returns the readiness of the server as a key-value pair.
        The key indicates whether server is ready to serve network requests and the value provides additional details.
        """
            ...
        def overrideReadiness(self, value: bool=None) -> None:
        """
        Overrides the readiness probe for the Server.
        By default the value is true
        
        @param value
               the value to be set for the Server's readiness override flag.
        """
            ...
        def agents(self) -> Union[Array[Env.Agent]]:
        """
        @return agent nodes running on this worker
        """
            ...
        def tasks(self) -> Union[Array[Env.Task]]:
        """
        @return list of task nodes this worker is running
        """
            ...
        def data(self) -> Union[Array[Env.Data]]:
        """
        @return list of data nodes this worker is running
        """
            ...
        def proxies(self) -> Union[Array[Env.Proxy]]:
        """
        @return list of proxy nodes this worker is running
        """
            ...
        def startNodes(self, role: str, count: int) -> Array[Server]:
        """
        Starts task or data or db node in the cloud compute instance this worker is managing.
        
        @see Env#startNodes
        """
            ...
    
    class Membership(Mutable):
        """
        Represents abstract C3 Cluster Membership and Discovery Service.
        
        @remarks this represents a made instance of Cluster.Membership
        """
        
        cluster: Optional[Cluster]
        """
        Cluster this is membership is for.
        """
        def __init__(self, cluster: Optional[Cluster]=None) -> None: ...

        @overload
        @classmethod
        def make(cls) -> Cluster.Membership:
        """
        Construct an instance with initial state.
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Membership:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Membership:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Membership:
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
        def fromJson(cls, json: any) -> Union[Cluster.Membership]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Membership]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Membership]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Membership]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Membership:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Membership:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership:
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
        def validateObj(self) -> Cluster.Membership:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Membership:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Membership:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Membership:
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
        def withoutField(self, field: str) -> Cluster.Membership:
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
        def withoutField(self, field: FieldType) -> Cluster.Membership:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Membership:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Membership:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Membership:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Membership:
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
        def defaultField(self, field: str) -> Cluster.Membership:
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
        def defaultField(self, field: FieldType) -> Cluster.Membership:
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
        def unsetField(self, field: str) -> Cluster.Membership:
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
        def unsetField(self, field: FieldType) -> Cluster.Membership:
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
        def removeField(self, field: str) -> Cluster.Membership:
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
        def removeField(self, field: FieldType) -> Cluster.Membership:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Membership:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Membership:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Membership:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Membership:
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
        def mergeJson(self, json: any) -> Cluster.Membership:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Membership:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Membership:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Membership]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Membership]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Membership]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Membership]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Membership]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Membership]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Membership]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Membership]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Membership]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Membership:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Membership:
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
        def afterMake(self) -> Cluster.Membership:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Membership:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Membership]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Membership:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @overload
        def setField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param name
                  of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        @overload
        def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership:
        """
        Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
        The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, attempt to convert the value to match the field's type
        @return this Obj
        """
            ...
        def onChange(self, changed: Array[str]) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
        field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
        properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
        collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
        key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
        collection field. This has the same appearance as if the collection field were assigned from a previously
        unassigned value.
        
        Example:
        ```type
        type A mixes MutableObj {
          onChange: ~
          b: [string]
          c: map<string, int>
          d: D
        }
        type D mixes MutableObj {
          onChange: ~
          e: string
        }
        ```
        ```js
        var a = A.make({b: ['hello', 'goodbye'], d: {}});
        a.b[1] = 'World'; // 1
        a.c['hello'] = 'world'; // 2
        a.d.e = 'hello' // 3
        a.b.pop(); // 4
        ```
        `A.onChange` should be called four times:
          1. when the field `b` changed - the FieldPath will be "b[1]".
          2. when the field `c` changed - the FieldPath will be "c.hello".
          3. when `d` changed - the FieldPath will be "d.e".
          4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
        
        `D.onChange` should be called once - the FieldPath will be `e`.
        
        Note that if multiple elements of a child collection are changed, you will get multiple field paths.
        
        @param changed paths to fields that changed
        
        @see #onEdit
        """
            ...
        def onEdit(self, edits: Obj) -> None:
        """
        Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
        contains more information about the values which changed, including their prior values. This allows a full
        difference to be calculated if desired. Note that maintaining this state is much more costly than simple
        notification via #onChange and should only be used if truly required.
        
        @param edits a list of what changed and the prior values
        
        @see #onChange
        """
            ...
        def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
        """
        Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
        
        @param action the lambda to invoke that makes changes without notification
        """
            ...
        def envs(self, refresh: bool) -> Union[Array[Env]]:
        """
        @return all discovered {@link Env}s in this {@link Cluster}
        """
            ...
        def env(self, envNameOrId: str) -> Union[Env]:
        """
        @return Env by name or id; on cache-miss refreshes membership and tries again
        """
            ...
        @classmethod
        def isK8s(cls) -> bool:
        """
        @return true if cloud is K8S, otherwise return False
        """
            ...
        @classmethod
        def isLocal(cls) -> bool:
        """
        @return True if cloud is local, otherwise return False
        """
            ...
        @classmethod
        def isAws(cls) -> bool:
        """
        @return True if cloud is aws, otherwise return False
        """
            ...
        @classmethod
        def isGcp(cls) -> bool:
        """
        @return True if cloud is gcp, otherwise return False
        """
            ...
        def startEnv(self, spec: Cluster.StartEnvSpec) -> Env:
        """
        Create the Env instance if it does not exist or restarts if it is not running and brings it into an operational
        state as defined by spec.
        
        @param spec
                  Specifications for an Env.
        @return created or restarted Env instance
        
        @see Cluster.StartEnvSpec#minimalInfra
        @see Cluster.StartEnvSpec#singleNode
        """
            ...
        def stopEnv(self, env: Env) -> Env:
        """
        Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
        #startEnv Environment can be brought back to fully operation state.
        
        @param env
                Env to be stopped.
        @return updated Env state
        """
            ...
        def resumeEnv(self, env: Env) -> Env:
        """
        Restarts the environment if it exists and brings it into an operational state as defined by spec.
        
        @param env
                Env to be restarted.
        @return updated Env state
        """
            ...
        def terminateEnv(self, env: Env) -> BatchError:
        """
        Abort and terminate environment.
        
        @param env
                Env to be terminated.
        @return updated Env state
        """
            ...
        @classmethod
        def makeMembership(cls, cluster: Cluster) -> Cluster.Membership:
        """
        @return new instance for this Cluster Membership type
        """
            ...
        def makeEnvMembership(self, env: Env) -> Env.Membership:
        """
        @return new instance of membership for a given environment
        """
            ...
        def nextAppCode(self) -> int:
        """
        @return next unique app code that will be assigned to the Application
        """
            ...
        def doDiscoverEnvIds(self) -> Union[Set[str]]:
        """
        [re-]discover all Environments by querying underlying cloud state, e.g. compute instances or other cloud services
        that have cloud tags matching this Environment; note that Environment maybe terminated and record of it removed
        from C3 Cluster and expectation is that this method will rediscover those cloud resources as Environment in INVALID
        state.
        """
            ...
        @classmethod
        def doStartEnv(cls, env: Env) -> Env:
        """
        Create the Env instance if it does not exist or restarts if it is not running and brings it into an operational
        state as defined by spec.
        
        @param env
                Env to start or restart.
        @return created or restarted Env instance
        
        @see Cluster.StartEnvSpec#minimalInfra
        @see Cluster.StartEnvSpec#singleNode
        """
            ...
        @classmethod
        def doStopEnv(cls, env: Env) -> Env:
        """
        Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
        #startEnv Environment can be brought back to fully operation state.
        
        @param env
                Env to be stopped.
        @return updated Env state
        """
            ...
        @classmethod
        def doResumeEnv(cls, env: Env) -> Env:
        """
        Restarts the environment if it exists and brings it into an operational state as defined by spec.
        
        @param env
                Env to be restarted.
        @return updated Env state
        """
            ...
        def doTerminateEnv(self, env: Env) -> Env:
        """
        Abort and terminate environment.
        
        @param env
                Env to be terminated.
        @return updated Env state
        """
            ...
        def doInfraShutdownEnv(self, env: Env) -> BatchError:
        """
        Forcefully bring down an env's compute resources on a best effort basis
        
        @param env
                Env whose compute resources are to be shut down.
        @return {@link BatchError}
                object with any errors that may have occurred
        """
            ...
        def doInfraCleanupEnv(self, env: Env) -> BatchError:
        """
        Forcefully cleanup an env's infrastructure resources on a best effort basis
        
        @param env
                Env whose infrastructure resources are to be cleaned up.
        @return {@link BatchError}
                object with any errors that may have occurred
        """
            ...
        def orphanResources(self, parentCloudResourceType: Type, externalResources: bool=None) -> Map[str, Array[CloudResource]]:
        """
        Fetches and returns {@link CloudResource}s belonging to this {@link Cluster}, but not belonging to any currently running {@link App} within it.
        @param parentCloudResourceType
                Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
        @param externalResources
                If true, then {@link CloudResource}s that do not have the base {@link CloudTagKey.CLUSTER},
                {@link CloudTagKey.ENV_ID} and {@link CloudTagKey.APP_ID} tags are also taken into consideration.
        @return orphaned {@link CloudResource}s
        """
            ...
        
        class Wip():
            """
            Some WIP ideas regarding future enhancements / changes in Cluster.Membership
            
            @remarks this represents a made instance of Cluster.Membership.Wip
            """
            def __init__(self) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Cluster.Membership.Wip]:
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
            def fromJsonString(cls, json: str) -> Union[Cluster.Membership.Wip]:
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
            def fromXmlString(cls, xml: str) -> Union[Cluster.Membership.Wip]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Membership.Wip]:
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
            def replaceType(self, old: Type, new: Type) -> Cluster.Membership.Wip:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.Wip:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.Wip:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.Wip]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.Wip]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Membership.Wip:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.Wip:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.Wip:
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
            def validateObj(self) -> Cluster.Membership.Wip:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership.Wip:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership.Wip:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Membership.Wip:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Membership.Wip:
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
            def withoutFieldAtPath(self, path: str) -> Cluster.Membership.Wip:
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
            def withoutField(self, field: str) -> Cluster.Membership.Wip:
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
            def withoutField(self, field: FieldType) -> Cluster.Membership.Wip:
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
            def withoutFields(self, fields: Array[str]) -> Cluster.Membership.Wip:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Membership.Wip:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Cluster.Membership.Wip:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Membership.Wip:
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
            def defaultField(self, field: str) -> Cluster.Membership.Wip:
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
            def defaultField(self, field: FieldType) -> Cluster.Membership.Wip:
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
            def unsetField(self, field: str) -> Cluster.Membership.Wip:
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
            def unsetField(self, field: FieldType) -> Cluster.Membership.Wip:
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
            def removeField(self, field: str) -> Cluster.Membership.Wip:
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
            def removeField(self, field: FieldType) -> Cluster.Membership.Wip:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Membership.Wip:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Membership.Wip:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Membership.Wip:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Membership.Wip:
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
            def mergeJson(self, json: any) -> Cluster.Membership.Wip:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Membership.Wip:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Membership.Wip:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Cluster.Membership.Wip]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Membership.Wip]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Membership.Wip]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Cluster.Membership.Wip]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Cluster.Membership.Wip]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Membership.Wip]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Membership.Wip]]:
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
            def toBuilder(self) -> ObjBuilder[Cluster.Membership.Wip]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Cluster.Membership.Wip]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Membership.Wip:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.Wip:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Membership.Wip:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Cluster.Membership.Wip:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.Wip:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Membership.Wip:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Membership.Wip:
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
            def afterMake(self) -> Cluster.Membership.Wip:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Cluster.Membership.Wip:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Membership.Wip]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Membership.Wip:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            def capabilities(self) -> Union[Cluster.MembershipCaps_Wip]:
            """
            @return capabilities of this Cluster Membership and Discovery Service
            """
                ...
            def startNodes(self, spec: Cluster.Membership.StartNodesSpec) -> Array[Server]:
            """
            Start Leader or Worker node(s) / server(s)
            """
                ...
            def restartNode(self, node: Server) -> None:
            """
            Restart node
            """
                ...
            def shutdownNode(self, node: Server) -> None:
            """
            Issue graceful shutdown request to node
            """
                ...
            def terminateNode(self, node: Server) -> None:
            """
            Abort and terminate node
            """
                ...
            def autoscaler(self) -> Cluster.Autoscaler:
            """
            @return autoscaler for this cluster
            """
                ...
        
        class StartNodesSpec(Spec):
            """
            Specification for starting a C3 Node / Server
            
            @see Cluster.Membership#startNodes
            
            @remarks this represents a made instance of Cluster.Membership.StartNodesSpec
            """
            
            role: Optional[str]
            """
            Server role of nodes
            """

            count: Optional[int]=None
            """
            Number of nodes to start
            """

            httpPorts: Optional[Array[int]]=None
            """
            Optional list of HTTP ports to use for new nodes if relevant.
            """

            instanceType: Optional[str]=None
            """
            Desired Compute Instance Type of nodes if relevant.
            """

            imageId: Optional[str]=None
            """
            Machine Image Id if relevant.
            """

            c3PubKey: Optional[str]=None
            def __init__(self, role: Optional[str]=None, count: Optional[int]=None, httpPorts: Optional[Array[int]]=None, instanceType: Optional[str]=None, imageId: Optional[str]=None, c3PubKey: Optional[str]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Cluster.Membership.StartNodesSpec]:
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
            def fromJsonString(cls, json: str) -> Union[Cluster.Membership.StartNodesSpec]:
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
            def fromXmlString(cls, xml: str) -> Union[Cluster.Membership.StartNodesSpec]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Membership.StartNodesSpec]:
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
            def replaceType(self, old: Type, new: Type) -> Cluster.Membership.StartNodesSpec:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.StartNodesSpec]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.StartNodesSpec]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def validateObj(self) -> Cluster.Membership.StartNodesSpec:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def withoutFieldAtPath(self, path: str) -> Cluster.Membership.StartNodesSpec:
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
            def withoutField(self, field: str) -> Cluster.Membership.StartNodesSpec:
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
            def withoutField(self, field: FieldType) -> Cluster.Membership.StartNodesSpec:
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
            def withoutFields(self, fields: Array[str]) -> Cluster.Membership.StartNodesSpec:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Membership.StartNodesSpec:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Cluster.Membership.StartNodesSpec:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Membership.StartNodesSpec:
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
            def defaultField(self, field: str) -> Cluster.Membership.StartNodesSpec:
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
            def defaultField(self, field: FieldType) -> Cluster.Membership.StartNodesSpec:
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
            def unsetField(self, field: str) -> Cluster.Membership.StartNodesSpec:
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
            def unsetField(self, field: FieldType) -> Cluster.Membership.StartNodesSpec:
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
            def removeField(self, field: str) -> Cluster.Membership.StartNodesSpec:
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
            def removeField(self, field: FieldType) -> Cluster.Membership.StartNodesSpec:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Membership.StartNodesSpec:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Membership.StartNodesSpec:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Membership.StartNodesSpec:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Membership.StartNodesSpec:
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
            def mergeJson(self, json: any) -> Cluster.Membership.StartNodesSpec:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Membership.StartNodesSpec:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Membership.StartNodesSpec:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Cluster.Membership.StartNodesSpec]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Membership.StartNodesSpec]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Membership.StartNodesSpec]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Cluster.Membership.StartNodesSpec]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Cluster.Membership.StartNodesSpec]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Membership.StartNodesSpec]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Membership.StartNodesSpec]]:
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
            def toBuilder(self) -> ObjBuilder[Cluster.Membership.StartNodesSpec]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Cluster.Membership.StartNodesSpec]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Membership.StartNodesSpec:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Membership.StartNodesSpec:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Membership.StartNodesSpec:
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
            def afterMake(self) -> Cluster.Membership.StartNodesSpec:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Cluster.Membership.StartNodesSpec:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Membership.StartNodesSpec]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Membership.StartNodesSpec:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
        
        class Event():
            """
            Represents Cluster Membership and Discovery Service Event such as new node start or change of state of node or
            environment or cluster
            
            @remarks this represents a made instance of Cluster.Membership.Event
            """
            
            kind: Optional[str]=None
            """
            Kind of event
            """

            cluster: Optional[Cluster]=None
            """
            Source Cluster of this event
            """

            env: Optional[Env]=None
            """
            Source Env of this event
            """

            node: Optional[Server]=None
            """
            Source Node of this event
            """
            def __init__(self, kind: Optional[str]=None, cluster: Optional[Cluster]=None, env: Optional[Env]=None, node: Optional[Server]=None) -> None: ...

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
            def fromJson(cls, json: any) -> Union[Cluster.Membership.Event]:
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
            def fromJsonString(cls, json: str) -> Union[Cluster.Membership.Event]:
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
            def fromXmlString(cls, xml: str) -> Union[Cluster.Membership.Event]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Membership.Event]:
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
            def replaceType(self, old: Type, new: Type) -> Cluster.Membership.Event:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.Event:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.Event:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.Event]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.Event]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Membership.Event:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.Event:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.Event:
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
            def validateObj(self) -> Cluster.Membership.Event:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership.Event:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership.Event:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Membership.Event:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Membership.Event:
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
            def withoutFieldAtPath(self, path: str) -> Cluster.Membership.Event:
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
            def withoutField(self, field: str) -> Cluster.Membership.Event:
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
            def withoutField(self, field: FieldType) -> Cluster.Membership.Event:
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
            def withoutFields(self, fields: Array[str]) -> Cluster.Membership.Event:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Membership.Event:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Cluster.Membership.Event:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Membership.Event:
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
            def defaultField(self, field: str) -> Cluster.Membership.Event:
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
            def defaultField(self, field: FieldType) -> Cluster.Membership.Event:
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
            def unsetField(self, field: str) -> Cluster.Membership.Event:
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
            def unsetField(self, field: FieldType) -> Cluster.Membership.Event:
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
            def removeField(self, field: str) -> Cluster.Membership.Event:
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
            def removeField(self, field: FieldType) -> Cluster.Membership.Event:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Membership.Event:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Membership.Event:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Membership.Event:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Membership.Event:
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
            def mergeJson(self, json: any) -> Cluster.Membership.Event:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Membership.Event:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Membership.Event:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Cluster.Membership.Event]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Membership.Event]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Membership.Event]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Cluster.Membership.Event]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Cluster.Membership.Event]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Membership.Event]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Membership.Event]]:
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
            def toBuilder(self) -> ObjBuilder[Cluster.Membership.Event]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Cluster.Membership.Event]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Membership.Event:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.Event:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Membership.Event:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Cluster.Membership.Event:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.Event:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Membership.Event:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Membership.Event:
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
            def afterMake(self) -> Cluster.Membership.Event:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Cluster.Membership.Event:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Membership.Event]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Membership.Event:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            
            class Kind():
                """
                Represents Listener of Cluster Membership and Discovery Service Events such as new node start or change of state of
                node or environment or cluster
                
                @remarks this represents a made instance of Cluster.Membership.Event.Kind
                """
                
                NODE_STARTED: Optional[str]=None
                """
                New node has started
                """

                NODE_UNREACHABLE: Optional[str]=None
                """
                Node has become unreachable
                """

                NODE_REACHABLE: Optional[str]=None
                """
                Node has become reachable after network partition
                """

                NODE_SHUTTINGDOWN: Optional[str]=None
                """
                Node is shutting down
                """
                def __init__(self, NODE_STARTED: Optional[str]=None, NODE_UNREACHABLE: Optional[str]=None, NODE_REACHABLE: Optional[str]=None, NODE_SHUTTINGDOWN: Optional[str]=None) -> None: ...

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
        
        class EventListener(EventListener[Cluster.Membership.Event]):
            """
            Represents Listener of Cluster Membership and Discovery Service Events such as new node start or change of state of
            node or environment or cluster
            
            @remarks this represents a made instance of Cluster.Membership.EventListener
            """
            def __init__(self) -> None: ...

            @classmethod
            def notify(cls, e: Cluster.Membership.Event) -> None:
            """
            Notification of an event
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
            def fromJson(cls, json: any) -> Union[Cluster.Membership.EventListener]:
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
            def fromJsonString(cls, json: str) -> Union[Cluster.Membership.EventListener]:
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
            def fromXmlString(cls, xml: str) -> Union[Cluster.Membership.EventListener]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Membership.EventListener]:
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
            def replaceType(self, old: Type, new: Type) -> Cluster.Membership.EventListener:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.EventListener:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Membership.EventListener:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.EventListener]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Membership.EventListener]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Membership.EventListener:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.EventListener:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Membership.EventListener:
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
            def validateObj(self) -> Cluster.Membership.EventListener:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Membership.EventListener:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Membership.EventListener:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Membership.EventListener:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Membership.EventListener:
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
            def withoutFieldAtPath(self, path: str) -> Cluster.Membership.EventListener:
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
            def withoutField(self, field: str) -> Cluster.Membership.EventListener:
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
            def withoutField(self, field: FieldType) -> Cluster.Membership.EventListener:
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
            def withoutFields(self, fields: Array[str]) -> Cluster.Membership.EventListener:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Membership.EventListener:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Cluster.Membership.EventListener:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Membership.EventListener:
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
            def defaultField(self, field: str) -> Cluster.Membership.EventListener:
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
            def defaultField(self, field: FieldType) -> Cluster.Membership.EventListener:
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
            def unsetField(self, field: str) -> Cluster.Membership.EventListener:
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
            def unsetField(self, field: FieldType) -> Cluster.Membership.EventListener:
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
            def removeField(self, field: str) -> Cluster.Membership.EventListener:
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
            def removeField(self, field: FieldType) -> Cluster.Membership.EventListener:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Membership.EventListener:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Membership.EventListener:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Membership.EventListener:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Membership.EventListener:
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
            def mergeJson(self, json: any) -> Cluster.Membership.EventListener:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Membership.EventListener:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Membership.EventListener:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Cluster.Membership.EventListener]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Membership.EventListener]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Membership.EventListener]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Cluster.Membership.EventListener]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Cluster.Membership.EventListener]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Membership.EventListener]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Membership.EventListener]]:
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
            def toBuilder(self) -> ObjBuilder[Cluster.Membership.EventListener]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Cluster.Membership.EventListener]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Membership.EventListener:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.EventListener:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Membership.EventListener:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Cluster.Membership.EventListener:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Membership.EventListener:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Membership.EventListener:
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
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Membership.EventListener:
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
            def afterMake(self) -> Cluster.Membership.EventListener:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Cluster.Membership.EventListener:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Membership.EventListener]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Membership.EventListener:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
    
    class SummarySpec(Spec):
        """
        Spec to filter the {@link Cluster.Summary}
        
        @remarks this represents a made instance of Cluster.SummarySpec
        """
        
        include: Optional[str]=None
        """
        Returns all if not passed
        """

        refresh: Optional[bool]=None
        """
        Refresh the data
        """
        def __init__(self, include: Optional[str]=None, refresh: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.SummarySpec]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.SummarySpec]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.SummarySpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.SummarySpec]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.SummarySpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.SummarySpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.SummarySpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.SummarySpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.SummarySpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.SummarySpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.SummarySpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.SummarySpec:
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
        def validateObj(self) -> Cluster.SummarySpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.SummarySpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.SummarySpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.SummarySpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.SummarySpec:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.SummarySpec:
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
        def withoutField(self, field: str) -> Cluster.SummarySpec:
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
        def withoutField(self, field: FieldType) -> Cluster.SummarySpec:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.SummarySpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.SummarySpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.SummarySpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.SummarySpec:
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
        def defaultField(self, field: str) -> Cluster.SummarySpec:
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
        def defaultField(self, field: FieldType) -> Cluster.SummarySpec:
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
        def unsetField(self, field: str) -> Cluster.SummarySpec:
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
        def unsetField(self, field: FieldType) -> Cluster.SummarySpec:
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
        def removeField(self, field: str) -> Cluster.SummarySpec:
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
        def removeField(self, field: FieldType) -> Cluster.SummarySpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.SummarySpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.SummarySpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.SummarySpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.SummarySpec:
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
        def mergeJson(self, json: any) -> Cluster.SummarySpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.SummarySpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.SummarySpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.SummarySpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.SummarySpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.SummarySpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.SummarySpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.SummarySpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.SummarySpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.SummarySpec]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.SummarySpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.SummarySpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.SummarySpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.SummarySpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.SummarySpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.SummarySpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.SummarySpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.SummarySpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.SummarySpec:
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
        def afterMake(self) -> Cluster.SummarySpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.SummarySpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.SummarySpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.SummarySpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class StartEnvSpec(EnvFields, WaitableSpec):
        """
        Specification for starting a C3 Environment
        
        @remarks this represents a made instance of Cluster.StartEnvSpec
        """
        
        name: Optional[str]
        """
        Name of C3 Environment unique in the parent Cluster
        """

        tags: Optional[Map[str, Any]]=None
        """
        Tags that serve as arbitrary metadata attached to the object of a type
        """

        label: Optional[str]=None

        singleNode: Optional[bool]=None
        """
        If true then this environment will only have a single node that will serve requests and execute jobs for every
        App in this Env
        """

        minimalInfra: Optional[bool]=None
        """
        Start Env with a minimal infrastructure
        """

        internalOnly: Optional[bool]=None
        """
        Environment is only accessible from internal endpoint (no ingress) if set to true.
        Therefore, when starting an internalOnly Env or Apps in an internalOnly singleNode Env,
        use {@link Cluster.StartEnvSpec#waitForReadyInternal} and {@link Env.StartAppSpec#waitForReadyInternal}
        """

        defaultAppMode: Optional[str]=None
        """
        Default app mode to optionally define {@link App#mode}.
        """

        allowTestToProd: Optional[bool]=None
        """
        Allow Apps in this env to change mode from Test to Prod, as an exception.
        """

        sharedDb: Optional[bool]=None
        """
        Only applicable for cases where Env is a singleNode Env. This flag controls whether the env will use shared instances for {@link JdbcStore} and {@link KvStore} or use a H2 disk-backed datastore for both.
        """

        waitSpec: Optional[WaitSpec]=None
        """
        Specifies various parameters for waitFor* actions.
        """

        waitForReadyInternal: Optional[bool]=None
        """
        Decision to wait for C3 App to be ready to serve background tasks or internal calls
        """

        waitForReady: Optional[bool]=None
        """
        Decision to wait for C3 App to be ready to accept external API calls
        """

        serverVersion: Optional[str]=None
        """
        Semantic version of the server for this C3 Environment
        """

        cloudNamespace: Optional[str]=None
        """
        Cloud Namespace for this C3 Env; if not set then C3 Env will inherit it from C3 Cluster Leader
        
        @see Env#configuredCloudNamespace
        """

        nodePoolConfig: Optional[Array[App.NodePool.Config]]=None
        """
        List of {@link App.NodePool.Config} for an environment. These {@link App.NodePool} config will get overridden
        at env level upon env start. This allows configuration of {@link App.NodePool} before creation of environment.
        """

        startedBy: Optional[User]=None
        """
        Who started the env
        """
        def __init__(self, name: Optional[str]=None, tags: Optional[Map[str, Any]]=None, label: Optional[str]=None, singleNode: Optional[bool]=None, minimalInfra: Optional[bool]=None, internalOnly: Optional[bool]=None, defaultAppMode: Optional[str]=None, allowTestToProd: Optional[bool]=None, sharedDb: Optional[bool]=None, waitSpec: Optional[WaitSpec]=None, waitForReadyInternal: Optional[bool]=None, waitForReady: Optional[bool]=None, serverVersion: Optional[str]=None, cloudNamespace: Optional[str]=None, nodePoolConfig: Optional[Array[App.NodePool.Config]]=None, startedBy: Optional[User]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.StartEnvSpec]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.StartEnvSpec]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.StartEnvSpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.StartEnvSpec]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.StartEnvSpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.StartEnvSpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.StartEnvSpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.StartEnvSpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.StartEnvSpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.StartEnvSpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.StartEnvSpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.StartEnvSpec:
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
        def validateObj(self) -> Cluster.StartEnvSpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.StartEnvSpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.StartEnvSpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.StartEnvSpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.StartEnvSpec:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.StartEnvSpec:
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
        def withoutField(self, field: str) -> Cluster.StartEnvSpec:
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
        def withoutField(self, field: FieldType) -> Cluster.StartEnvSpec:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.StartEnvSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.StartEnvSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.StartEnvSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.StartEnvSpec:
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
        def defaultField(self, field: str) -> Cluster.StartEnvSpec:
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
        def defaultField(self, field: FieldType) -> Cluster.StartEnvSpec:
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
        def unsetField(self, field: str) -> Cluster.StartEnvSpec:
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
        def unsetField(self, field: FieldType) -> Cluster.StartEnvSpec:
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
        def removeField(self, field: str) -> Cluster.StartEnvSpec:
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
        def removeField(self, field: FieldType) -> Cluster.StartEnvSpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.StartEnvSpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.StartEnvSpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.StartEnvSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.StartEnvSpec:
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
        def mergeJson(self, json: any) -> Cluster.StartEnvSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.StartEnvSpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.StartEnvSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.StartEnvSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.StartEnvSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.StartEnvSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.StartEnvSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.StartEnvSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.StartEnvSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.StartEnvSpec]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.StartEnvSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.StartEnvSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.StartEnvSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.StartEnvSpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.StartEnvSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.StartEnvSpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.StartEnvSpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.StartEnvSpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.StartEnvSpec:
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
        def afterMake(self) -> Cluster.StartEnvSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.StartEnvSpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.StartEnvSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.StartEnvSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
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
        def addTag(self, key: str=None, value: Any=None) -> Union[Cluster.StartEnvSpec]:
        """
        Adds a tag to this object
        @param key
                key of the tag to add
        @param value
                value of the tag to add
        @return object with the tag added
        """
            ...
        def removeTag(self, key: str=None) -> Union[Cluster.StartEnvSpec]:
        """
        Removes a tag from this object
        @param key
                key of the tag to remove
        @return object with the tag removed
        """
            ...
    
    class AutoscalerCaps():
        """
        Capabilities of this Cluster Autoscaler Service
        
        @remarks this represents a made instance of Cluster.AutoscalerCaps
        """
        
        setNodeCountTarget: Optional[bool]=None
        """
        Supports setting of target number of nodes
        """
        def __init__(self, setNodeCountTarget: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.AutoscalerCaps]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.AutoscalerCaps]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.AutoscalerCaps]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.AutoscalerCaps]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.AutoscalerCaps:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.AutoscalerCaps:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.AutoscalerCaps:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.AutoscalerCaps]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.AutoscalerCaps]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.AutoscalerCaps:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.AutoscalerCaps:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.AutoscalerCaps:
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
        def validateObj(self) -> Cluster.AutoscalerCaps:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.AutoscalerCaps:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.AutoscalerCaps:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.AutoscalerCaps:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.AutoscalerCaps:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.AutoscalerCaps:
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
        def withoutField(self, field: str) -> Cluster.AutoscalerCaps:
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
        def withoutField(self, field: FieldType) -> Cluster.AutoscalerCaps:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.AutoscalerCaps:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.AutoscalerCaps:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.AutoscalerCaps:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.AutoscalerCaps:
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
        def defaultField(self, field: str) -> Cluster.AutoscalerCaps:
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
        def defaultField(self, field: FieldType) -> Cluster.AutoscalerCaps:
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
        def unsetField(self, field: str) -> Cluster.AutoscalerCaps:
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
        def unsetField(self, field: FieldType) -> Cluster.AutoscalerCaps:
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
        def removeField(self, field: str) -> Cluster.AutoscalerCaps:
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
        def removeField(self, field: FieldType) -> Cluster.AutoscalerCaps:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.AutoscalerCaps:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.AutoscalerCaps:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.AutoscalerCaps:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.AutoscalerCaps:
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
        def mergeJson(self, json: any) -> Cluster.AutoscalerCaps:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.AutoscalerCaps:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.AutoscalerCaps:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.AutoscalerCaps]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.AutoscalerCaps]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.AutoscalerCaps]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.AutoscalerCaps]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.AutoscalerCaps]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.AutoscalerCaps]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.AutoscalerCaps]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.AutoscalerCaps]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.AutoscalerCaps]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.AutoscalerCaps:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.AutoscalerCaps:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.AutoscalerCaps:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.AutoscalerCaps:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.AutoscalerCaps:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.AutoscalerCaps:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.AutoscalerCaps:
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
        def afterMake(self) -> Cluster.AutoscalerCaps:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.AutoscalerCaps:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.AutoscalerCaps]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.AutoscalerCaps:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def none(cls) -> Cluster.AutoscalerCaps:
            ...
        @classmethod
        def all(cls) -> Cluster.AutoscalerCaps:
            ...
    
    class Wip():
        """
        Wip progress ideas / enhancements
        
        @remarks this represents a made instance of Cluster.Wip
        """
        def __init__(self) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Cluster.Wip]:
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
        def fromJsonString(cls, json: str) -> Union[Cluster.Wip]:
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
        def fromXmlString(cls, xml: str) -> Union[Cluster.Wip]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Cluster.Wip]:
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
        def replaceType(self, old: Type, new: Type) -> Cluster.Wip:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Wip:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Cluster.Wip:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Wip]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Cluster.Wip]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Cluster.Wip:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Wip:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Cluster.Wip:
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
        def validateObj(self) -> Cluster.Wip:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Cluster.Wip:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Cluster.Wip:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Cluster.Wip:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Cluster.Wip:
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
        def withoutFieldAtPath(self, path: str) -> Cluster.Wip:
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
        def withoutField(self, field: str) -> Cluster.Wip:
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
        def withoutField(self, field: FieldType) -> Cluster.Wip:
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
        def withoutFields(self, fields: Array[str]) -> Cluster.Wip:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Cluster.Wip:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Cluster.Wip:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Cluster.Wip:
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
        def defaultField(self, field: str) -> Cluster.Wip:
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
        def defaultField(self, field: FieldType) -> Cluster.Wip:
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
        def unsetField(self, field: str) -> Cluster.Wip:
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
        def unsetField(self, field: FieldType) -> Cluster.Wip:
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
        def removeField(self, field: str) -> Cluster.Wip:
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
        def removeField(self, field: FieldType) -> Cluster.Wip:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Cluster.Wip:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Cluster.Wip:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Cluster.Wip:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Cluster.Wip:
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
        def mergeJson(self, json: any) -> Cluster.Wip:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Cluster.Wip:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Cluster.Wip:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Cluster.Wip]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Cluster.Wip]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Cluster.Wip]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Cluster.Wip]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Cluster.Wip]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Cluster.Wip]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Cluster.Wip]]:
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
        def toBuilder(self) -> ObjBuilder[Cluster.Wip]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Cluster.Wip]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Cluster.Wip:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Wip:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Cluster.Wip:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Cluster.Wip:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Cluster.Wip:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Cluster.Wip:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Cluster.Wip:
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
        def afterMake(self) -> Cluster.Wip:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Cluster.Wip:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Cluster.Wip]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Cluster.Wip:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def leaders(self, refresh: bool=None) -> Union[Array[Cluster.Leader]]:
        """
        @return all leader server nodes in this cluster; if `refresh` parameter is set then ensures that cluster membership
                is up to date, otherwise last known state is returned.
        """
            ...
        def workers(self, refresh: bool=None) -> Union[Array[Cluster.Worker]]:
        """
        @return all worker nodes in this cluster; if `refresh` parameter is set then ensures that cluster membership is
                up to date, otherwise last known state is returned.
        """
            ...
        def autoscaler(self) -> Cluster.Autoscaler:
        """
        @return Cluster.Autoscaler service for this Cluster
        """
            ...
        def telemetry(self) -> Cluster.Telemetry:
        """
        @return current telemetry of this cluster
        """
            ...

