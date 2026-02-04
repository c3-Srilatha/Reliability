#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CloudResourceOperationSpec import CloudResourceOperationSpec
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.CloudResourceDestroySpec import CloudResourceDestroySpec
from c3.platform.WaitSpec import WaitSpec
from c3.platform.WithKey import WithKey
from c3.platform.FieldType import FieldType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.CloudProvider import CloudProvider
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.CloudUpsertable import CloudUpsertable
from c3.platform.SetBuilder import SetBuilder
from c3.platform.TypeMeta import TypeMeta
from c3.platform.CloudListResourcesResult import CloudListResourcesResult
from c3.platform.SetType import SetType
from c3.platform.App import App
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Config import Config
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.CloudResourceKeyFields import CloudResourceKeyFields
from c3.platform.Promise import Promise
from c3.platform.Error import Error
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.CloudTag import CloudTag
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.CloudCredentials import CloudCredentials
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.CloudRef import CloudRef
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.CloudListResourcesSpec import CloudListResourcesSpec
from c3.platform.FieldValue import FieldValue
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.CloudResourceChildrenSpec import CloudResourceChildrenSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.CloudId import CloudId
from c3.platform.File import File

# Python definitions for the C3 type CloudResource


class CloudResource(CloudResourceFields, CloudUpsertable, Config):
    """
    Common base type for every Cloud Resource.
    
    Implements consistent way to "configure" the resource as well as provides common CRUD operations.
    
    Configuration of a Cloud Resource involves defining credentials to be used to access the resource as well as to
    provide default values and relationships / dependencies when user needs to create new instance of the resource.
    
    @see #withDefaultConfig
    
    @remarks this represents a made instance of CloudResource
    """
    
    id: Optional[str]
    """
    Canonical C3 Identifier for this Cloud Resource in the format of <cluster>-<env>-<app>-<func>[-<role>]-<seq>[-<subseq>].
    """

    cluster: Optional[str]=None
    """
    C3 Cluster ID component (first) in {@link #id}
    E.g. prod-c3-crm-app-l-0001
    => prod
    """

    env: Optional[str]=None
    """
    C3 Environment name (second) component in {@link #id}; e.g. srv,ui,c3.
    E.g. prod-c3-crm-app-l-0001
    => c3
    An Environment name must be unique within a Cluster.
    """

    app: Optional[str]=None
    """
    C3 Application name (third) component in {@link #id}; e.g. c3,crm,lightbulb
    E.g. prod-c3-crm-app-l-0001
    => crm
    An Application name must be unique within an Environment.
    """

    func: Optional[str]=None
    """
    Cloud function abbreviation; e.g. app, awsemr, awsvpc, azvm.
    E.g. prod-c3-crm-app-l-0001
    => app
    
    @see CloudResource#cloudFunc
    @see CloudResource#allCloudFuncs
    """

    role: Optional[str]=None
    """
    C3 role; e.g. m, w; cannot be number only.
    E.g. prod-c3-crm-app-l-0001
    => l
    
    @see CloudResource#cloudRoles
    """

    seq: Optional[str]=None
    """
    Sequence number - should only contain numbers - it is recommended to have fixed number of digits for a
    `<func>-<role>` with 0 left padding so that list of resources are naturally ordered; can be 2, 3, 4 or 5 digits.
    E.g. prod-c3-crm-app-l-0001
    => 0001
    
    @see CloudResource#cloudSeqLength
    """

    subseq: Optional[str]=None
    """
    Sub-sequence alphanumeric string (dot allowed)
    E.g. prod-c3-crm-app-t-0001-kk03
    => 001
    """

    resourceId: Optional[str]=None
    """
    Cloud service provider generated native ID, such as vpcId and securityGroupId.
    """

    resourceSecondaryId: Optional[str]=None
    """
    Cloud service provider generated native secondary ID, such as Amazon Resource Name (ARN).
    """

    resourceName: Optional[str]=None
    """
    User defined name attribute managed by cloud service provider.
    """

    resourceGroupName: Optional[str]=None
    """
    ResourceGroup for Azure resources and K8s namespaces
    """

    fullyConfigured: Optional[bool]=None
    """
    When true, CloudResource will GET from locally persisted Config framework
    When false, CloudResource will GET from remote Cloud APIs
    """

    resourceNamespace: Optional[str]=None
    """
    resourceNamespace for K8s Resources (only those which are associated with a namespace)
    """

    external: Optional[bool]=None
    """
    This flag indicates that this cloud resource managed by third party, C3 will not create or destroy this resource
    implicitly.
    """

    credentials: Optional[CloudCredentials]=None
    """
    Cloud Credentials for this resource.
    """

    hasGeneratedResourceName: Optional[bool]=None
    """
    `true` if resourceName was set via #generateResourceName.
    """

    hasGeneratedResourceSecondaryId: Optional[bool]=None
    """
    `true` if resourceName was set via #generateResourceSecondaryId.
    """

    configOverride: Optional[str]=None

    secretOverride: Optional[str]=None

    issues: Optional[Array[str]]=None
    """
    Captures any issues that occurred while deserializing from filesystem
    """

    nativeMetricByName: Optional[Map[str, str]]=None
    """
    This table has logical metrics as keys and native metrics as values.
    For example, 'cpu' could map to native metric 'CPUUTILIZATION' for {@link AwsEc2Instance}
    """

    tags: Optional[Array[CloudTag]]=None
    """
    Cloud tags assigned to this resource.
    """

    description: Optional[str]=None
    """
    Customized description for the cloud resource.
    """

    parentResource: Optional[CloudResource]=None
    """
    Parent Cloud Resource that this children cloud resource belongs to
    """
    def __init__(self, id: Optional[str]=None, cluster: Optional[str]=None, env: Optional[str]=None, app: Optional[str]=None, func: Optional[str]=None, role: Optional[str]=None, seq: Optional[str]=None, subseq: Optional[str]=None, resourceId: Optional[str]=None, resourceSecondaryId: Optional[str]=None, resourceName: Optional[str]=None, resourceGroupName: Optional[str]=None, fullyConfigured: Optional[bool]=None, resourceNamespace: Optional[str]=None, external: Optional[bool]=None, credentials: Optional[CloudCredentials]=None, hasGeneratedResourceName: Optional[bool]=None, hasGeneratedResourceSecondaryId: Optional[bool]=None, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, nativeMetricByName: Optional[Map[str, str]]=None, tags: Optional[Array[CloudTag]]=None, description: Optional[str]=None, parentResource: Optional[CloudResource]=None) -> None: ...

    def toString(self) -> Union[str]:
    """
    @return canonical C3 identifier of this Cloud Resource in the format of <cluster>-<env>-<app>-<func>-<role>-<seq>[-<subseq>].
    """
        ...
    @overload
    @classmethod
    def fromString(cls, s: str) -> Union[CloudResource]:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference string.
    
    @see CloudRef
    @see #toString
    """
        ...
    @overload
    @classmethod
    def fromString(cls, s: str, failIfInvalid: bool=None) -> Union[CloudResource]:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference string.
    
    @see CloudRef
    @see #toString
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[CloudResource]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> CloudResource:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> CloudResource:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> CloudResource:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> CloudResource:
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
    def fromJson(cls, json: any) -> Union[CloudResource]:
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
    def fromJsonString(cls, json: str) -> Union[CloudResource]:
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
    def fromXmlString(cls, xml: str) -> Union[CloudResource]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[CloudResource]:
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
    def replaceType(self, old: Type, new: Type) -> CloudResource:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> CloudResource:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> CloudResource:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[CloudResource]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[CloudResource]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> CloudResource:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> CloudResource:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> CloudResource:
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
    def validateObj(self) -> CloudResource:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> CloudResource:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> CloudResource:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> CloudResource:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> CloudResource:
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
    def withoutFieldAtPath(self, path: str) -> CloudResource:
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
    def withoutField(self, field: str) -> CloudResource:
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
    def withoutField(self, field: FieldType) -> CloudResource:
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
    def withoutFields(self, fields: Array[str]) -> CloudResource:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> CloudResource:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> CloudResource:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> CloudResource:
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
    def defaultField(self, field: str) -> CloudResource:
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
    def defaultField(self, field: FieldType) -> CloudResource:
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
    def unsetField(self, field: str) -> CloudResource:
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
    def unsetField(self, field: FieldType) -> CloudResource:
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
    def removeField(self, field: str) -> CloudResource:
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
    def removeField(self, field: FieldType) -> CloudResource:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> CloudResource:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> CloudResource:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> CloudResource:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> CloudResource:
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
    def mergeJson(self, json: any) -> CloudResource:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> CloudResource:
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
    def sumObj(self, other: Obj, deep: bool=None) -> CloudResource:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[CloudResource]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[CloudResource]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[CloudResource]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[CloudResource]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[CloudResource]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, CloudResource]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, CloudResource]]:
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
    def toBuilder(self) -> ObjBuilder[CloudResource]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[CloudResource]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> CloudResource:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> CloudResource:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> CloudResource:
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
    def afterMake(self) -> CloudResource:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> CloudResource:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[CloudResource]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> CloudResource:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in Cloud Provider based on provided C3 canonical identifier.
    """
        ...
    @classmethod
    def fromClusterId(cls, clusterId: str, env: str, app: str, func: str, role: str=None, seq: str=None, subseq: str=None) -> CloudResource:
    """
    Construct a cloud ID from a cluster ID
    """
        ...
    @classmethod
    def fromEnvId(cls, envId: str, app: str, func: str, role: str=None, seq: str=None, subseq: str=None) -> CloudResource:
    """
    Construct a cloud ID from an environment ID
    envId should be a combination of <cluster>-<env> to uniquely identify an Environment across all C3 clusters
    """
        ...
    @classmethod
    def fromAppId(cls, appId: str, func: str, role: str=None, seq: str=None, subseq: str=None) -> CloudResource:
    """
    Construct a cloud ID from an application ID
    appId should be a combination of <cluster>-<env>-<app> to uniquely identify an Application across all C3 clusters
    """
        ...
    def hasId(self) -> bool:
    """
    Verify if the CloudId has all the necessary components.
    Individual components are not validated.
    
    @return true if this resource has all required components of Canonical C3 Identifier.
    """
        ...
    def isRoleRequired(self) -> bool:
    """
    Verify if the CloudId instance requires a cloudRole.
    
    @return whether this CloudId instance requires a cloudRole.
    """
        ...
    def isSubseqRequired(self) -> bool:
    """
    Verify if the CloudId instance requires a subsequence number.
    
    @return whether this CloudId instance requires a subsequence number.
    """
        ...
    def isValidId(self) -> bool:
    """
    Fields in CloudId should not contain special characters and must abide to certain regex rules.
    If a field requires a value but one is not provided, validation will fail.
    If seq and subseq digits do not match the length specified by {@link Ann.Cloud#hasRole}, validation will fail.
    If the individual fields (e.g. cluster, env, app) do not add up to the resulting ID string, validation will fail.
    
    @return true if every component for this resource has valid values.
    """
        ...
    def validateCluster(self) -> bool:
    """
    Validates if the {@link Cluster} ID for this CloudId is correctly formatted.
    
    @return true if this resource has a correctly formatted Cluster ID.
    """
        ...
    def validateEnv(self) -> bool:
    """
    Validates if the {@link Env} name for this CloudId is correctly formatted.
    
    @return true if this resource has a correctly formatted Env name.
    """
        ...
    def validateApp(self) -> bool:
    """
    Validates if the {@link App} name for this CloudId is correctly formatted.
    
    @return true if this resource has a correctly formatted App name.
    """
        ...
    def validateFunc(self) -> bool:
    """
    Validates if the cloudFunc for this CloudId is correctly formatted.
    
    @return true if this resource has a correctly formatted cloudFunc.
    """
        ...
    def validateRole(self) -> bool:
    """
    Validates if the cloudRole for this CloudId is correctly formatted.
    
    @return true if this resource has a correctly formatted cloudRole.
    """
        ...
    def validateSeq(self) -> bool:
    """
    Validates if the sequence number for this CloudId is correctly formatted.
    If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
    
    @return true if this resource has a correctly formatted sequence number.
    """
        ...
    def validateSeqLength(self) -> bool:
    """
    Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
    
    @return true if this resource has the correct number of digits for sequence number.
    """
        ...
    def validateSubseq(self) -> bool:
    """
    Validates if the subsequence number for this CloudId is correctly formatted.
    If applicable, also matches if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
    
    @return true if this resource has a correctly formatted subsequence number.
    """
        ...
    def validateSubseqLength(self) -> bool:
    """
    Validates if this resource has the correct number of digits as specified by {@link Ann.Cloud}.
    
    @return true if this resource has the correct number of digits for subsequence number.
    """
        ...
    def clusterId(self) -> Union[str]:
    """
    C3 Cluster ID that manages this resource. Will return #cluster (sequence of characters before the first "-")
    E.g. prod-c3-crm-app-l-0001
    => prod
    """
        ...
    def envId(self) -> Union[str]:
    """
    C3 Environment ID that manages this resource. Will return unique ID of the environment <cluster>-<env>
    E.g. prod-c3-crm-app-l-0001
    => prod-c3
    """
        ...
    def appId(self) -> Union[str]:
    """
    C3 Application ID that manages this resource. Will return unique ID of the application <cluster>-<env>-<app>
    E.g. prod-c3-crm-app-l-0001
    => prod-c3-crm
    """
        ...
    def safeId(self) -> str:
    """
    @return C3 ID value for this instance based on available fields.
    E.g. prod-c3-crm-app-l-0001
    => prod-c3-crm-app-l-0001
    """
        ...
    def safeCluster(self) -> str:
    """
    @return C3 cluster ID value for this instance based on available fields.
    E.g. prod-c3-crm-app-l-0001
    => prod
    """
        ...
    def safeEnv(self) -> str:
    """
    @return C3 environment name for this instance based on available fields.
    Note: It will not contain any "-" nor any #cluster component
    E.g. prod-c3-crm-app-l-0001
    => c3
    """
        ...
    def safeEnvId(self) -> str:
    """
    @return C3 environment ID for this instance based on available fields.
    Note: It will always contain #cluster component and "-"
    @see #safeEnv
    E.g. prod-c3-crm-app-l-0001
    => prod-c3
    """
        ...
    def safeApp(self) -> str:
    """
    @return C3 application name for this instance based on available fields.
    Note: It will not contain any "-" nor any #cluster or #env components
    E.g. prod-c3-crm-app-l-0001
    => crm
    """
        ...
    def safeAppId(self) -> str:
    """
    @return C3 application ID for this instance based on available fields.
    Note: It will always contain #cluster and #env components and "-"
    @see #safeEnv
    E.g. prod-c3-crm-app-l-0001
    => prod-c3-crm
    """
        ...
    def safeFunc(self) -> str:
    """
    @return C3 function value for this instance based on available fields.
    E.g. prod-c3-crm-app-l-0001
    => app
    """
        ...
    def safeCredentials(self) -> CloudCredentials:
    """
    Cloud Credentials that should be used to access this resource.
    """
        ...
    def cloudProvider(self) -> CloudProvider:
    """
    Cloud Provider for this Cloud Resource or Service.
    """
        ...
    def withDefaultId(self) -> CloudResource:
    """
    Populate default values for all uninitialized Cloud Identifier fields in this Cloud Resource.
    """
        ...
    def sanitize(self) -> CloudResource:
    """
    Converts this CloudId to be a valid id satisfying all naming conventions and constraints.
    """
        ...
    @classmethod
    def sanitizeComponent(cls, cloudIdComponent: str) -> Union[str]:
    """
    Sanitizes the given Cloud ID component by converting it to a lower case and removing non alphanumeric characters.
    
    @return sanitized Cloud ID component.
    """
        ...
    def allCloudConfigOverrides(self) -> Union[Map[str, Map[str, any]]]:
    """
    @return all config template jsons by cloud template key and override.
           e.g. {'instance': {'TAG': ... , 'POD': ...}
                 'instance-jupyter': {'TAG': ... , 'POD': ...}}
    """
        ...
    def allCloudConfigAndSecretFiles(self) -> Union[Map[str, Map[str, Pair[File, File]]]]:
    """
    @return map of pair of config and secret files by override and by cloud template key;
            note that will always return instance of File even if physical file doesn't exist.
    """
        ...
    def safeResourceName(self) -> str:
    """
    @return @resourceName if set or result of #generateResourceName method call
    """
        ...
    def safeResourceSecondaryId(self) -> str:
    """
    @return @resourceSecondaryId if set or result of #generateResourceSecondaryId method call
    """
        ...
    def toCloudRef(self, failIfInvalid: bool=None) -> Union[CloudRef]:
    """
    @return instance of CloudRef for this resource; will fail if `failIfInvalid` is `true` and missing all ref fields.
    """
        ...
    @classmethod
    def fromId(cls, id: str, failIfInvalid: bool=None) -> CloudResource:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided C3 identifier string.
    
    Note that if `id.func` is not for this Cloud Resource type then construct instance of this type that is a
    dependency or a parent of provided Cloud Resource.
    """
        ...
    @classmethod
    def fromCloudId(cls, id: CloudId, failIfInvalid: bool=None) -> CloudResource:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Identifier.
    
    Note that if `id.func` is not for this Cloud Resource type then construct instance of this type that is a
    dependency or a parent of provided Cloud Resource.
    """
        ...
    @classmethod
    def fromCloudRef(cls, ref: CloudRef, failIfInvalid: bool=None) -> CloudResource:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Reference.
    """
        ...
    @classmethod
    def fromCloudFunc(cls, func: str, role: str=None, seq: str=None) -> CloudResource:
    """
    Constructs Cloud Resource instance based on provided Cloud Func component and optional role.
    """
        ...
    @classmethod
    def fromResourceId(cls, resourceId: str) -> CloudResource:
    """
    Constructs Cloud Resource instance based on provided Cloud Resource Id.
    """
        ...
    @classmethod
    def fromResourceSecondaryId(cls, resourceSecondaryId: str) -> CloudResource:
    """
    Constructs Cloud Resource instance based on provided Cloud Resource Secondary Id and available Cloud Configuration.
    """
        ...
    @classmethod
    def fromResourceName(cls, name: str) -> CloudResource:
    """
    Constructs Cloud Resource instance based on provided Cloud Resource Name and available Cloud Configuration.
    """
        ...
    @classmethod
    def fromReferenceField(cls, fieldName: str, value: str, failIfInvalid: bool=None) -> CloudResource:
    """
    Constructs Cloud Resource instance based on provided Cloud Reference field value and available Cloud Configuration.
    
    @see CloudRef
    """
        ...
    def fromConfigTemplate(self, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Constructs config based defaults and artifacts for all configurable fields
    
    @see CloudRef
    """
        ...
    def withDefaultConfig(self, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Populate default values for all uninitialized configurable fields in this Cloud Resource.
    """
        ...
    def generateResourceName(self) -> Union[str]:
    """
    @return default #resourceName. Uses C3 #id by default.
    """
        ...
    def generateResourceSecondaryId(self) -> Union[str]:
    """
    Optional override to generate #resourceSecondaryId from available fields. e.g AwsS3Bucket does it based on
    #resourceName (bucket name)
    """
        ...
    def generateResourceNamespace(self) -> Union[str]:
    """
    @returns #resourceNamespace. Checks CloudDeploymentConfig to determine if cluster or env name
    """
        ...
    def upsertResource(self, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Create or update Cloud Resource.
    """
        ...
    def upsertWithDependencies(self, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Create or update Cloud Resource with all of its configured dependencies.
    """
        ...
    def destroyResource(self, spec: CloudResourceDestroySpec=None) -> None:
    """
    Destroy existing Cloud Resource.
    """
        ...
    def waitForDestroy(self, spec: WaitSpec=None) -> bool:
    """
    Wait until the resource is destroyed. Returns `false` on timeout by default - {@link WaitSpec#failOnTimeout}
    """
        ...
    def isCached(self) -> bool:
    """
    @return whether the cache already contains this instance
    """
        ...
    @classmethod
    def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[CloudResource]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return stream of all available Cached instances.
    """
        ...
    @classmethod
    def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[CloudResource]]:
    """
    @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[CloudResource]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findByCacheKey(cls, key: str) -> Union[CloudResource]:
    """
    @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
    
    @see forCacheKey
    @see getCached
    """
        ...
    @classmethod
    def forCacheKey(cls, key: str) -> Union[CloudResource]:
    """
    Returns cached instance by key, with secrets removed.
    """
        ...
    def getCached(self) -> Union[CloudResource]:
    """
    This method on any CloudResource is not supported! Use CloudResource.for* or other methods instead.
    """
        ...
    def refreshCache(self) -> Union[CloudResource]:
    """
    @return newly produced cached instance.
    """
        ...
    def cacheKey(self) -> str:
    """
    @return cache key for this instance.
    """
        ...
    @classmethod
    def produce(cls, key: str) -> Union[CloudResource]:
    """
    Should produce an entry for the cache key. This method should not be called directly.
    """
        ...
    @classmethod
    def produceAll(cls) -> Union[Map[str, CloudResource]]:
    """
    Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
    """
        ...
    @classmethod
    def doProduceAll(cls) -> Union[Map[str, CloudResource]]:
    """
    Override for sub-types to produce all values.
    """
        ...
    def evictFromCache(self) -> None:
    """
    Evicts this instance from cache on all nodes of this application.
    """
        ...
    def evictFromCacheLocalOnly(self) -> None:
    """
    Evicts this instance from cache of the current node.
    """
        ...
    def evictFromCacheLocalOnlyAllApps(self) -> None:
    """
    Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
    Will not trigger any cache invalidation broadcast.
    see {@link Server#evictFromLocalAppsCaches}
    """
        ...
    @classmethod
    def clearCache(cls) -> None:
    """
    Clears the data cache for this type on all nodes of this application.
    """
        ...
    @classmethod
    def clearCacheLocalOnly(cls) -> None:
    """
    Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
    """
        ...
    @classmethod
    def clearCacheLocalOnlyAllApps(cls) -> None:
    """
    Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
    Will not trigger any cache invalidation broadcast.
    see {@link Server#clearLocalAppsCaches}
    """
        ...
    @classmethod
    def cacheSize(cls) -> Union[int]:
    """
    Returns count of cached instances.
    """
        ...
    @classmethod
    def nativeCache(cls) -> Union[Any]:
    """
    Returns instance of the cache for this type.
    """
        ...
    def getConfig(self) -> CloudResource:
    """
    This method on any CloudResource is not supported! Use CloudResource.for* or other methods instead.
    """
        ...
    def configValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
    """
    @return cached config value for the provided field path if set or `null` or error otherwise depending on
            `failIfMissing`; note that will not return secret value.
    """
        ...
    def getSecret(self) -> CloudResource:
    """
    Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
    is required. For Nameable configurations `name` field is required.
    
    Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
    """
        ...
    def secretValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
    """
    @return cached secret value for the provided field path in this Config object or `null` if not set or error
            depending on `failIfMissing`.
    """
        ...
    def decodedValue(self, path: str, failIfMissing: bool=None) -> Union[str]:
    """
    Reads and url decodes the content at the path.
    Path must represent a string value.
    """
        ...
    def isUserOverride(self) -> bool:
    """
    @return `true` if this configuration instance was set at ConfigOverride.USER level.
    """
        ...
    def isAppOverride(self) -> bool:
    """
    @return `true` if this configuration instance was set at ConfigOverride.APP level.
    """
        ...
    def isClusterOverride(self) -> bool:
    """
    @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
    """
        ...
    def isEnvOverride(self) -> bool:
    """
    @return `true` if this configuration instance was set at ConfigOverride.ENV level.
    """
        ...
    def isRootOverride(self) -> bool:
    """
    @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
    """
        ...
    def isSeed(self) -> bool:
    """
    @return `true` if this configuration has not been set and comes from seed / defaults.
    """
        ...
    @classmethod
    def isSecret(cls, path: str) -> bool:
    """
    @return `true` if provided path is a secret.
    """
        ...
    def configKey(self) -> Union[str]:
    """
     @return config key for this instance. The config key is a unique identifier for an instance of a config type.
     The config key varies based on whether the config is defined with:
        1. {@link Ann.Config#subfolder}
            In this case, the name of the subfolder will be included.
        2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
            In this case, the ID of the {@link User} will be included.
        3. mixes in {@link Named} or {@link Identified}
    In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
    the name of the config subtype will be used.
    
     The config key includes the above three fields delimited by '/':
        {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
     ```
     | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
     |-------------------|---------------------|-------------------|-----------------------------|
     |       no          |         no          |        no         |           MyConfType        |
     |       yes         |         no          |        no         |       myUserId/MyConfType   |
     |       no          |         yes         |        no         |             abc             |
     |       no          |         no          |        yes        |      folder1/MyConfType     |
     |       no          |         yes         |        yes        |          folder1/abc        |
     |       yes         |         yes         |        no         |          myUserId/abc       |
     |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
     |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
     ```
     Note that the config key is a computed value and is not set-able.
     For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
    """
        ...
    @classmethod
    def forConfigKey(cls, configKey: str) -> Union[CloudResource]:
    """
    @return return cached config instance for provided config key.
    """
        ...
    @classmethod
    def listConfigKeys(cls) -> Union[Stream[str]]:
    """
    @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
    """
        ...
    @classmethod
    def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[CloudResource]]:
    """
    @param
    
    @return stream of all available Config instances for this type.
    """
        ...
    def allConfigValueOverrides(self, path: str) -> Union[Map[str, any]]:
    """
    @return all config template values by override.
    """
        ...
    def allConfigOverrides(self) -> Union[Map[str, any]]:
    """
    @return all config template jsons by override.
    """
        ...
    def allSecretValueOverrides(self, path: str) -> Union[Map[str, any]]:
    """
    @return all secret template values by override.
    """
        ...
    def allSecretOverrides(self) -> Union[Map[str, any]]:
    """
    @return all secret templates by override.
    """
        ...
    def setConfigValue(self, path: str, value: Any, override: str=None, embeddedFileName: str=None) -> None:
    """
    Sets configuration field value at provided path in this Config object. Note will not set secret value.
    If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
    @see clearConfigValue
    """
        ...
    @overload
    def setConfigValues(self, from_: Map[str, Any], override: str=None) -> None:
    """
    Sets multiple field values to those specified in the map. The map keys are the paths.
    @see setConfigValue
    """
        ...
    @overload
    def setConfigValues(self, from_: CloudResource, override: str=None) -> None:
    """
    Sets multiple field values to be the same as the passed instance.
    @see setConfigValue
    """
        ...
    def setConfigValueTemplate(self, path: str, valueTemplate: str, override: str=None) -> None:
    """
    Sets configuration field value template at provided path in this Config object. Note will not set secret value.
    If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
    @see clearConfigValue
    """
        ...
    def insertConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
    """
    Adds a single value at the specified index in a collection at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def setConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
    """
    Sets a single value at the specified index in a collection at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def addConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
    """
    Adds a single value to a collection at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def setConfigMapValue(self, pathToMapField: str, key: Any, value: Any, override: str=None) -> None:
    """
    Sets a key-value pair in specified map at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def removeConfigElementAt(self, pathToCollectionField: str, index: int, override: str=None) -> None:
    """
    Removes a single value at the specified index in a collection at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def removeConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
    """
    Removes a single value in a collection at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def removeConfigMapKey(self, pathToMapField: str, key: Any, override: str=None) -> None:
    """
    Removes a single key in a map at provided path in this Config object.
    Note this will merge based on the {@link Ann.Merge} collection value for the field.
    """
        ...
    def setEncodedValue(self, path: str, value: str, override: str) -> None:
    """
    Url encodes the content at the path and returns new config object with the encoded value.
    Path must represent a string value.
    """
        ...
    def setSecretValue(self, path: str, value: Any, override: str=None) -> None:
    """
    Sets secret field value or secrets within value at provided path in this Config object.
    @see clearSecretValue
    """
        ...
    @overload
    def setSecretValues(self, from_: Map[str, Any], override: str=None) -> None:
    """
    Sets multiple secret field values to those specified in the map. The map keys are the paths.
    @see setSecretValue
    """
        ...
    @overload
    def setSecretValues(self, from_: CloudResource, override: str=None) -> None:
    """
    Sets multiple secret field values to be the same as the passed instance.
    @see setSecretValue
    """
        ...
    def setSecretValueTemplate(self, path: str, value: str, override: str=None) -> None:
    """
    Sets secret field value template at provided path in this Config object.
    @see clearSecretValue
    """
        ...
    def clearConfigValue(self, path: str, override: str=None) -> None:
    """
    Clears configuration field value at provided path in this Config object at provided override level. Note will not
    clear secret value.
    """
        ...
    def clearSecretValue(self, path: str, override: str=None) -> None:
    """
    Clears secret field value at provided path in this Config object at provided override level.
    """
        ...
    def clearConfigValueAllOverrides(self, path: str) -> None:
    """
    Clears configuration field value at provided path in this Config object at all override levels. Note will not
    clear secret value.
    """
        ...
    def clearSecretValueAllOverrides(self, path: str) -> None:
    """
    Clears secret field value at provided path in this Config object at all override levels.
    """
        ...
    @classmethod
    def rawConfigOrSecretValue(cls, configKey: str, path: str, override: str=None, failIfMissing: bool=None) -> Union[any]:
    """
    @return config or secret value for the provided config key, field path, and override if set
    """
        ...
    @classmethod
    def setConfigOrSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
    """
    Sets config or secret value for the provided config key, field path and override.
    """
        ...
    @classmethod
    def setConfigAndSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
    """
    Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
    setConfigValue and setSecretValue
    """
        ...
    @classmethod
    def setConfigOrSecretValueTemplate(cls, configKey: str, path: str, valueTemplate: str=None, override: str=None) -> None:
    """
    Sets config or secret value template for the provided config key, field path and override.
    """
        ...
    @classmethod
    def hasSubTypes(cls) -> bool:
    """
    @return `true` if this Config type has other sub types.
    """
        ...
    @classmethod
    def hasSecretField(cls) -> bool:
    """
    @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
    """
        ...
    @classmethod
    def isSingleInstance(cls) -> bool:
    """
    @return `true` if this Config type has only one instance.
    """
        ...
    @classmethod
    def isUserOverridable(cls) -> bool:
    """
    @returns `true` if this Config is user override-able.
    """
        ...
    @classmethod
    def dfltOverride(cls, override: str=None) -> str:
    """
    @return default configuration override level
    """
        ...
    @classmethod
    def loadConfigAndSecret(cls, configKey: str) -> Union[CloudResource]:
    """
     Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
    true and config does not exist.
     Note that this skips caching and directly fetches config from the config store, and secret from vault.
    """
        ...
    def loadConfigOverride(self, override: str) -> Union[any]:
    """
    Loads config override template json if exists or `null`. Will not include secrets.
    Note that this skips caching and directly fetches config from the config store.
    """
        ...
    def loadSecretOverride(self, override: str) -> Union[any]:
    """
    Loads secret override template json if exists or `null`. Will not include non secrets.
    Note that this skips caching and directly fetches secret from the vault.
    """
        ...
    def embeddedFile(self, embeddedFileName: str, override: str=None) -> File:
    """
    @return file for an embedded config value.
    """
        ...
    @classmethod
    def configFolder(cls) -> str:
    """
    @return config folder name
    """
        ...
    @classmethod
    def configSubFolder(cls) -> str:
    """
    @return config sub folder name for this type
    """
        ...
    @classmethod
    def configFileEncodedPath(cls, configKey: str, userOverride: bool=None) -> str:
    """
    @return config file encoded path for a given key and potentially user under the config dir for this type.
    """
        ...
    def configAndSecretFiles(self, override: str) -> Union[Pair[File, File]]:
    """
    @return pair of config and secret files for a given override; note that will always return instance of
            File even if physical file doesn't exist.
    """
        ...
    def configFilePath(self, override: str) -> Union[str]:
    """
    @return the config file path for a config instance at a given override;
    """
        ...
    def secretFilePath(self, override: str) -> Union[str]:
    """
    @return the secret file path for a config instance at a given override;
    """
        ...
    def configAndSecretFilePair(self, override: str, appId: str) -> Union[Pair[File, File]]:
    """
    @return pair of config and secret files for provided override / appId; note that will always return pair
            of Files even if physical file doesn't exist.
    """
        ...
    def allConfigAndSecretFiles(self) -> Union[Map[str, Pair[File, File]]]:
    """
    @return map of pair of config and secret files by override; note that will always return instance of
            File even if physical file doesn't exist.
    """
        ...
    @classmethod
    def configAndSecretDirs(cls, override: str=None) -> Union[Pair[File, File]]:
    """
    @return pair of config and secret template directories for override
    """
        ...
    @classmethod
    def allConfigAndSecretDirs(cls) -> Union[Map[str, Pair[File, File]]]:
    """
    @return map of pair of config and secret template directories by override; note that will always return instance of
            File even if physical folder doesn't exist.
    """
        ...
    @classmethod
    def configAndSecretOverrideBaseDirs(cls, override: str=None) -> Union[Pair[File, File]]:
    """
    @return pair of config and secret Base directories for the given override
    """
        ...
    @classmethod
    def configKeyForFile(cls, file: File, failIfInvalid: bool=None) -> Union[str]:
    """
    @return config key for a given config or secret file. If file is not a valid config or secret then will return
            `null` or fail based on `failIfInvalid`
    """
        ...
    @classmethod
    def configKeyForFileUrl(cls, fileUrl: str) -> Union[str]:
    """
    @return config key for a given config or secret file url. If file is not a valid config or secret then will return
            `null` or fail based on `failIfInvalid`
    """
        ...
    @classmethod
    def configTypeForDir(cls, dir: str, failIdInvalid: bool=None) -> Union[Type]:
    """
    @return Config sub-type for a config directory name.
    """
        ...
    def setConfig(self, override: str=None) -> None:
    """
    This method on any CloudResource is not supported! Use CloudResource.setConfigValue or helper methods instead.
    """
        ...
    def setSecret(self, override: str=None) -> None:
    """
    Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
    #setConfigValue or #setConfig for that.
    """
        ...
    def eachOverride(self, action: Callable[[Config, str]]=None) -> None:
    """
    Executes actions on all config override levels (within a valid range) for a particular instance of config.
    """
        ...
    @classmethod
    def eachOverrideOnType(cls, action: Callable[[str]]=None) -> None:
    """
    Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
    """
        ...
    @classmethod
    def minOverride(cls) -> str:
    """
    Minimum configuration override level. Default is {@link ConfigOverride#APP}.
    """
        ...
    @classmethod
    def maxOverride(cls) -> str:
    """
    Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
    """
        ...
    def clearConfigAndSecretOverride(self, override: str) -> None:
    """
    Clears specified configuration override including secrets for this instance.
    
    @param override
           Specifies the {@link ConfigOverride} level, of this config to clear.
    """
        ...
    def clearConfigAndSecretAllOverrides(self) -> None:
    """
    Clears specified configuration including secrets for this instance on all override levels.
    """
        ...
    @classmethod
    def clearAllConfigAndSecretOverrides(cls, override: str, confirm: bool=None) -> None:
    """
    Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
    override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
    {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
    
    @param override
           Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
           will also be cleared.
    @param confirm
           Confirmation from user that they understand and confirm deletion of this configuration.
    """
        ...
    @classmethod
    def secretFieldPaths(cls) -> Union[Array[FieldPath]]:
    """
    returns a list of all field paths that are secret
    """
        ...
    def removeSecrets(self) -> Union[CloudResource]:
    """
    @return this config without any secret values.
    """
        ...
    def removeNonSecrets(self) -> Union[CloudResource]:
    """
    @return this config with only secret values.
    """
        ...
    def validate(self) -> CloudResource:
    """
    Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
    validation and setup.
    """
        ...
    @classmethod
    def rawJson(cls, configKey: str) -> Union[any]:
    """
    @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
    """
        ...
    @classmethod
    def setJson(cls, configKey: str, json: any, secret: bool=None, override: str=None) -> File:
    """
    @return sets Json template for a specified override.
    """
        ...
    @classmethod
    def setJsonValue(cls, configKey: str, field: str, json: any, override: str=None) -> File:
    """
    @return sets Json template field for a specified override.
    """
        ...
    @classmethod
    def setJsonField(cls, configKey: str, field: str, json: any, secret: bool=None, override: str=None) -> File:
    """
    @return sets Json template field for a specified override.
    """
        ...
    @classmethod
    def templateBindings(cls, configKey: str) -> Union[any]:
    """
    Returns json containing configuration template bindings for a provided config key. Override this method to provide your
    own list of template bindings
    """
        ...
    @classmethod
    def evalTemplate(cls, template: str, extraBindings: Map[str, str]=None) -> str:
    """
    Evaluate a given template by applying the default config bindings.
    Default config bindings are:
    1. owner - owner of the config
    2. region - abbreviated region in which the cluster is
    3. cluster - current cluster id
    4. env - current env id
    5. app - current app id
    7. user - current user
    8. type - type on which this api is called
    For example, "${owner}--${cluster}-${env}-${app}"
    
    @param template
               Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
    @param extraBindings
               Any additional binding params not included in the default config bindings
    @return evaluated template
    """
        ...
    @classmethod
    def rawJsonCacheSize(cls) -> Union[int]:
    """
    Returns count of cached raw Json.
    """
        ...
    @classmethod
    def rawJsonNativeCache(cls) -> Union[Any]:
    """
    Returns instance of the cache for this type for raw Json.
    """
        ...
    def withIdentity(self, resource: CloudResource=None, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Get the CloudResource with CloudResource related field resolved. If CloudResource is not provided, then infer identity
    from #tags first, then from #resourceName. If validateIdentity is true the make sure all required components of
    identity are present and valid. This includes id, name and arn as required.
    """
        ...
    @classmethod
    def isEnabled(cls) -> bool:
    """
    @return false if cloud resource is not available
    """
        ...
    @classmethod
    def identityRoleOptions(cls) -> Union[str]:
    """
    @return option of identity role.
    """
        ...
    def mergeId(self, other: CloudResource=None) -> CloudResource:
    """
    Populates with provided ID string
    """
        ...
    def parentApp(self) -> Union[App]:
    """
    App for of this resource
    """
        ...
    def qName(self) -> Union[str]:
    """
    C3 Fully Qualified Name; e.g. dev-srv-vpc-01.test-01-usw2.internal
    """
        ...
    def domain(self) -> Union[str]:
    """
    C3 domain. Derived from a region and cloud account.
    """
        ...
    def region(self) -> Union[str]:
    """
    Cloud Region of this resource.
    """
        ...
    def tag(self, key: str) -> Union[str]:
    """
    @return value of the tag.
    """
        ...
    @classmethod
    def hasResourceArn(cls) -> bool:
    """
    @return true if this resource can be retrieved ({@link CloudResource#getResource}) using a cloud resource ARN.
    """
        ...
    @classmethod
    def hasResourceId(cls) -> bool:
    """
    @return true if this resource can be retrieved ({@link CloudResource#getResource}) using a cloud resource ID.
    """
        ...
    @classmethod
    def hasResourceName(cls) -> bool:
    """
    @return true if this resource can be retrieved ({@link CloudResource#getResource}) using a cloud resource name.
    """
        ...
    @classmethod
    def hasResourceGroupName(cls) -> bool:
    """
    @return true if this resource has cloud group resource name.
    """
        ...
    @classmethod
    def hasRole(cls) -> bool:
    """
    @return true if this resource has a {@link CloudId#role}.
    """
        ...
    @classmethod
    def hasSubseq(cls, role: str=None) -> bool:
    """
    @param role
            Specify if there is a {@link CloudId#subseq} for the corresponding {@link CloudId#role}.
    @return true if this resource has the given subsequence.
    """
        ...
    @classmethod
    def hasRegion(cls) -> bool:
    """
    @return false if this resource is region agnostic.
    """
        ...
    @classmethod
    def hasTags(cls) -> bool:
    """
    @return true if this resource has cloud Tags.
    """
        ...
    @classmethod
    def hasLocalDryRun(cls) -> bool:
    """
    @return true if this resource has local dry run implemented for upsert operations.
    """
        ...
    @classmethod
    def hasNamespace(cls) -> bool:
    """
    @return true if cloud resource has a namespace
    """
        ...
    def isOk(self) -> bool:
    """
    Check if status and state of this resource instance is OK.
    """
        ...
    def isInState(self, state: str) -> bool:
    """
    Compares current instance state to provided value.
    """
        ...
    def hasStatus(self, state: str) -> bool:
    """
    Compares current instance status to provided value.
    """
        ...
    def isGone(self) -> bool:
    """
    Check if this resource is destroyed.
    """
        ...
    @classmethod
    def isValidCloudFunc(cls, func: str) -> bool:
    """
    Check if provided string is a valid cloud function for this resource.
    """
        ...
    @classmethod
    def cloudFunc(cls) -> Union[str]:
    """
    @return C3 Canonical abbreviation for CloudResource.func component; e.g. AwsEMR => emr, AwsSubnet => sn.
    """
        ...
    @classmethod
    def cloudSeqLength(cls) -> int:
    """
    Checks the number of digits for {@link CloudId#seq}. Sequence numbers are always required.
    
    @return number of digits for {@link CloudId#seq}
    """
        ...
    @classmethod
    def cloudSubseqLength(cls) -> Union[int]:
    """
    Checks the number of digits for {@link CloudId#subseq}. Subsequence numbers are not always required.
    
    @return number of digits for {@link CloudId#subseq}
    """
        ...
    @classmethod
    def cloudProviderType(cls) -> Type:
    """
    Cloud Provider for this Cloud Resource.
    """
        ...
    @classmethod
    def cloudProviderConfigKey(cls) -> str:
    """
    Cloud Provider configuration key for this Cloud Resource.
    """
        ...
    @classmethod
    def fromCloudRole(cls, role: str, seq: str=None) -> CloudResource:
    """
    Constructs Cloud Resource instance of this type with reference fields and credentials based on provided cloud role.
    """
        ...
    @classmethod
    def fromCloudSeq(cls, seq: str) -> CloudResource:
    """
    Constructs Cloud Resource instance of this type with reference fields and credentials based on provided cloud seq.
    """
        ...
    @classmethod
    def fromTags(cls, tags: Array[CloudTag]) -> Union[CloudResource]:
    """
    Constructs Cloud Resource instance with reference fields and credentials based on provided Cloud Tags.
    """
        ...
    @classmethod
    def typeMetasByCloudFunc(cls) -> Union[Map[str, TypeMeta]]:
    """
    @return computed cached map of cloudFunc -> Type
    """
        ...
    @classmethod
    def typeFromCloudFunc(cls, cloudFunc: str, failIfInvalid: bool=None) -> Union[Type]:
    """
    @return C3 resource type from the given func component; e.g. emr => AwsEmr, sn => AwsSubnet.
    """
        ...
    @classmethod
    def forCloudId(cls, id: CloudId, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider based on provided Cloud Identifier.
    
    Note that if `id.func` is not for this Cloud Resource type then it will locate instance of this type that is a
    dependency or a parent of provided Cloud Resource.
    """
        ...
    @classmethod
    def forCloudFunc(cls, func: str, role: str=None, failIfMissing: bool=None) -> CloudResource:
    """
    Find Cloud Resource based on provided cloud func component and optional role.
    """
        ...
    @classmethod
    def forCloudRole(cls, role: str, failIfMissing: bool=None) -> CloudResource:
    """
    Find Cloud Resource of this type based on provided cloud role component.
    """
        ...
    @classmethod
    def forResourceId(cls, resourceId: str, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider by provided resource name.
    """
        ...
    @classmethod
    def forResourceSecondaryId(cls, resourceId: str, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider by provided resource name.
    """
        ...
    @classmethod
    def typeForResourceSecondaryId(cls, resourceId: str) -> Union[Type]:
    """
    Find underlying Cloud Resource type from secondary resource ID.
    """
        ...
    @classmethod
    def forResourceName(cls, resourceName: str, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider by provided resource name.
    """
        ...
    @classmethod
    def findResource(cls, reference: str, failIfMissing: bool=None) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider by provided {@link CloudRef} string.
    """
        ...
    def getResource(self) -> Union[CloudResource]:
    """
    Find Cloud Resource in the Cloud Provider by provided #resourceId, #resourceSecondaryId, #resourceName or #tags
    (in that order).
    """
        ...
    def ensureResource(self) -> CloudResource:
    """
    Checks that the resource is persisted. If not, upserts the resource, to ensure that the resource exists.
    """
        ...
    @classmethod
    def listResourcesBySubtype(cls, spec: CloudListResourcesSpec=None) -> Map[str, CloudListResourcesResult[CloudResource]]:
    """
    List all CloudResource subtypes that satisfies the given spec.
    
    @param spec
              Specifications for the match criteria.
    @return map of CloudResource name to CloudListResourcesResult satisfying the spec.
    """
        ...
    @classmethod
    def listResources(cls, spec: CloudListResourcesSpec=None) -> CloudListResourcesResult[CloudResource]:
    """
    List all Cloud Resources that satisfies the given spec.
    
    @param spec
              Specifications for the match criteria.
    @return all CloudResources satisfying the spec.
    """
        ...
    @classmethod
    def listResourcesForTags(cls, *keyValuePairs: Array[str]) -> CloudListResourcesResult[CloudResource]:
    """
    List all Cloud Resources that satisfies the given spec.
    Limits the scope based on the specified {@link CloudTag}s.
    
    @param keyValuePairs
              Limits the scope based on CloudTags.
    @return all CloudResources satisfying the spec.
    """
        ...
    @classmethod
    def listResourcesForClusterId(cls, clusterId: str, cloudIdRole: str=None, spec: CloudListResourcesSpec=None) -> CloudListResourcesResult[CloudResource]:
    """
    List all Cloud Resources that satisfies the given spec.
    Limits the scope based on the name of the specified {@link Cluster}.
    
    @param clusterId
            Limits the scope based on the id of the Cluster.
    @param cloudIdRole
            Limits the scope based on the cloudId role.
    @param spec
            Specifications for the match criteria.
    @return all CloudResources satisfying the spec.
    """
        ...
    @classmethod
    def listResourcesForEnvId(cls, envId: str, cloudIdRole: str=None, spec: CloudListResourcesSpec=None) -> CloudListResourcesResult[CloudResource]:
    """
    List all Cloud Resources that satisfies the given spec.
    Limits the scope based on {@link Env#id}.
    
    @param envId
            Limits the scope based on the ID of the Env.
    @param cloudIdRole
            Limits the scope based on the cloudId role.
    @param spec
            Specifications for the match criteria.
    @return all CloudResources satisfying the spec.
    """
        ...
    @classmethod
    def listResourcesForAppId(cls, appId: str, cloudIdRole: str=None, spec: CloudListResourcesSpec=None) -> CloudListResourcesResult[CloudResource]:
    """
    List all Cloud Resources that satisfies the given spec.
    Limits the scope based on {@link App#id}.
    
    @param appId
            Limits the scope based on the ID of the App.
    @param cloudIdRole
            Limits the scope based on the cloudId role.
    @param spec
            Specifications for the match criteria.
    @return all CloudResources satisfying the spec.
    """
        ...
    def upsertDependencies(self, spec: CloudResourceOperationSpec=None) -> CloudResource:
    """
    Create or update all of the configured dependencies of this Cloud Resource.
    """
        ...
    def children(self, spec: CloudResourceChildrenSpec=None) -> Union[Map[str, Array[CloudUpsertable]]]:
    """
    Resources that depend on this resource
    @return results CloudResources grouped by typename. E.g. <type_name, [CloudUpsertable]>
    """
        ...
    def destroyChildren(self, confirm: bool=None) -> None:
    """
    Destroy children resources.
    """
        ...
    @classmethod
    def destroyResourceBatch(cls, resources: Array[CloudResource]=None, spec: CloudResourceDestroySpec=None, precedence: Array[Type]=None) -> None:
    """
    Destroy all Cloud Resources in a batch.
    @param resources
              list of resources that are to be destroyed
    @param spec
              CloudResourceDestroySpec
    @param precedence
              if any specific type of resources need to be destroyed before all other resources
    """
        ...
    def waitForCreate(self, spec: WaitSpec=None) -> Union[CloudResource]:
    """
    Wait until the resource is created. Returns `null` on timeout by default - {@link WaitSpec#failOnTimeout}
    """
        ...
    def configuredTags(self, spec: CloudResourceOperationSpec=None) -> Union[Array[CloudTag]]:
    """
    Generates list of tags that should be persisted for this Cloud Resource.
    """
        ...
    @classmethod
    def setConfiguredTags(cls, prefix: str, tags: Array[CloudTag]=None, override: str=None) -> None:
    """
    Sets custom tags for a given {@link CloudResource} in the configuration framework.
    
    @param prefix
              the cloud key used to retrieve the configured tag; e.g. emr, vpc, app-w.
    @param tags
              the list of {@link CloudTag} to be stored.
    @param override
              specifies the {@link ConfigOverride} level, of this config to be set.
    """
        ...
    @classmethod
    def tagResourcesBatch(cls, resources: Array[CloudResource], tags: Array[CloudTag]) -> Union[Map[str, Error]]:
    """
    Applies one or more tags to the specified resources.
    
    @param resources
             a list of resources that you want to tag.
    
    @param tags
             a list of tags that you want to add to the specified resources.
    
    @return A map of resources ids that could not be tagged and the failure info.
    """
        ...
    @classmethod
    def untagResourcesBatch(cls, resources: Array[CloudResource], tagKeys: Array[str]) -> Union[Map[str, Error]]:
    """
    Removes the specified tags from the specified resources.
    
    @param ids
              a list of ids that you want to untag.
    
    @param tagKeys
              a list of tag keys that you want to remove from the resources.
    
    @return A map of resources ids that could not be untagged and the failure info.
    """
        ...
    @classmethod
    def relationshipFieldName(cls) -> str:
    """
    The name of this resource as a field in the other related resources. For example, AwsVpc.relationshipFieldName()
    returns "vpcId", and AwsSubnet.relationshipFieldName() returns "subnetId".
    """
        ...
    def dependencies(self, recursively: bool=None) -> Union[Array[CloudUpsertable]]:
    """
    @param: deep
            if deep is true, recursively return all dependencies
            if deep is false, only return the immediate dependencies
    @return dependencies of the resource
    """
        ...
    def configuredDependencies(self, spec: CloudResourceOperationSpec=None) -> Union[Map[str, Union[CloudUpsertable,Array[CloudUpsertable]]]]:
    """
    @return resource configured dependencies
    """
        ...
    def dependencyFields(self) -> Union[Array[str]]:
    """
    @return fields of missing dependent resources
    """
        ...
    def waitForOk(self, spec: WaitSpec=None) -> Union[CloudResource]:
    """
    Wait until the resource is completely ready for use, i.e. the resource State becomes available and the resource
    Status becomes Ok. Returns `null` on timeout by default - {@link WaitSpec#failOnTimeout}
    """
        ...
    def waitForState(self, state: str='AVAILABLE', spec: WaitSpec=None) -> Union[CloudResource]:
    """
    Wait until a specific state is reached. Returns `null` on timeout by default - {@link WaitSpec#failOnTimeout}
    """
        ...
    @classmethod
    def rawCredentials(cls, prefix: str, override: str=None) -> Union[any]:
    """
    @return credentials template for a given `string serialized CloudRef` or prefix of C3 ID.
    
    @see #setCredentials
    """
        ...
    @classmethod
    def setCredentials(cls, prefix: str, credentials: CloudCredentials=None, override: str=None) -> None:
    """
    Sets credentials for a given `string serialized CloudRef` or prefix of C3 ID. E.g. prefix `_` will set default
    credentials for every Cloud Resource; `ecs` - for every `AwsEcsCluster` and `ecs-jupyter` - for `AwsEcsCluster`
    used by Jupyter Notebooks.
    """
        ...
    @classmethod
    def setCredentialRegion(cls, prefix: str, region: str=None, override: str=None) -> None:
    """
    Sets credential's region for a given `string serialized CloudRef` or prefix of C3 ID.
    
    @see #setCredentials
    """
        ...
    @classmethod
    def setCredentialCloudIdentity(cls, prefix: str, cloudIdentity: str=None, override: str=None) -> None:
    """
    Sets credential's cloud identity for a given `string serialized CloudRef` or prefix of C3 ID.
    
    @see #setCredentials
    """
        ...
    @classmethod
    def setCredentialsForResourceName(cls, resourceName: str, credentials: CloudCredentials=None, override: str=None) -> None:
    """
    Sets credentials for a given Cloud Resource Name.
    """
        ...
    def setFullyConfigured(self, fullyConfigured: bool=None, override: str=None) -> CloudResource:
    """
    Sets {@link CloudResource#fullyConfigured} to true and persists current state as configuration.
    Doing so will instruct Cloud Framework to not to use Cloud Provider API when retrieving instance
    of this resource via #getResource and #for* methods.
    """
        ...
    def nextAvailableSeq(self, spec: CloudResourceOperationSpec=None) -> str:
    """
    @return next available sequence number for this resource.
    """
        ...
    def afterCreate(self, input: CloudResource=None) -> CloudResource:
    """
    Optional callback after creating resource.
    
    @param input The input specification initially provided (as opposed to `this', which is the latest version from the cloud after creation).
    """
        ...
    def beforeCreate(self) -> CloudResource:
    """
    Optional callback to alter resource before creating it.
    """
        ...
    def beforeUpdate(self) -> CloudResource:
    """
    Optional callback to alter resource before updating it.
    """
        ...
    def beforeDestroy(self) -> CloudResource:
    """
    Optional callback to alter resource before destroying it.
    """
        ...
    def cloudWatchMetricName(self, metricName: str=None) -> Union[str]:
    """
    Return the native cloud watch metric name for a given metric
    """
        ...
    def withoutNonModifiableFields(self) -> CloudResource:
    """
    Strips out the {@link Ann.Cloud.nonModifiableFields} on the given cloud resource
    """
        ...
    def configKeys(self) -> Union[Array[str]]:
    """
    Return a list of all config keys in the merging order for this Cloud Resource.
    """
        ...
    @classmethod
    def doClearCache(cls) -> None:
    """
    Optional hook for subtype to clear their internal caches.
    This method is intended to be overridden by subtypes that maintain custom caching logic
    """
        ...
    def resourceKeyFields(self) -> Union[CloudResourceKeyFields]:
    """
    Returns only resource key fields for the resource
    """
        ...
    @classmethod
    def extraTemplateBindings(cls, cid: CloudId=None) -> Union[any]:
        ...
    
    class OrphanReason():
        """
        Denotes reasons for a cloud resource to be considered an Orphan resource
        
        @remarks this represents a made instance of CloudResource.OrphanReason
        """
        
        UNKNOWN_RESOURCE: Optional[str]=None

        INVALID_C3_CLUSTER_ID: Optional[str]=None

        INVALID_C3_ENV_ID: Optional[str]=None

        INVALID_C3_APP_ID: Optional[str]=None

        INVALID_C3_CS_ID: Optional[str]=None

        UNACCOUNTED_C3_RESOURCE: Optional[str]=None
        def __init__(self, UNKNOWN_RESOURCE: Optional[str]=None, INVALID_C3_CLUSTER_ID: Optional[str]=None, INVALID_C3_ENV_ID: Optional[str]=None, INVALID_C3_APP_ID: Optional[str]=None, INVALID_C3_CS_ID: Optional[str]=None, UNACCOUNTED_C3_RESOURCE: Optional[str]=None) -> None: ...

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

