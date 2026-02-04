#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LukeAsyncQueueNode import LukeAsyncQueueNode
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.LukeDynamicValue import LukeDynamicValue
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Promise import Promise
from c3.platform.Mutable import Mutable
from c3.platform.Promise import Promise
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FieldType import FieldType
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.LukeAsyncQueueCollection import LukeAsyncQueueCollection
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type LukeBrowserWebElement


class LukeBrowserWebElement(LukeWebElement[LukeBrowserWebElement]):
    """
    {@link LukeWebElement} implemented by {@link BrowserEngine}
    
    @remarks this represents a made instance of LukeBrowserWebElement
    """
    
    timeout: Optional[int]=None
    """
    Timeout in seconds for the chain that contains the current node.
    Typically this field is only populated by the head of the chain.
    """

    next: Optional[LukeAsyncQueueNode]=None
    """
    The next node in the chain
    """

    head: Optional[LukeAsyncQueueNode]=None
    """
    The head of the chain that contains the current node
    """

    catchChain: Optional[LukeAsyncQueueNode]=None
    """
    If the current node is a head, it can have a catch chain that runs when the normal
    chain fails.
    """

    startedAt: Optional[int]=None
    """
    When the node started running
    """

    endedAt: Optional[int]=None
    """
    When the node ended running
    """

    asyncQueue: Optional[Array[LukeAsyncQueueNode]]=None
    """
    If the node spawns a nested async queue, its chains (heads) will be stored here.
    """

    skipQueueFlag: Optional[bool]=None
    """
    Whether to skip the remaining chains in the queue
    """

    func: Optional[Any]
    """
    The function that yields a promise
    """

    args: Optional[Array[Any]]=None
    """
    Additional arguments to be passed to the function ({@link #func}). A Luke instance and the result resolved from
    the previous node will be passed, followed by the additional arguments.
    """

    label: Optional[str]=None
    """
    Metadata about what type of node this is.
    """

    uuid: Optional[str]=None
    """
    "Unique" id assigned to each LukeAsyncQueueNode for UI. Uses C3 unique ID generator, but not backed by database
    """

    resolveOnFound: Optional[bool]=None
    """
    Whether the node should be resolved only when a web element is found
    """

    hasTriedSmartLocator: Optional[bool]=None
    """
    Whether smart locators have been used to identify the element
    """

    webElementSelector: Optional[str]=None
    def __init__(self, timeout: Optional[int]=None, next: Optional[LukeAsyncQueueNode]=None, head: Optional[LukeAsyncQueueNode]=None, catchChain: Optional[LukeAsyncQueueNode]=None, startedAt: Optional[int]=None, endedAt: Optional[int]=None, asyncQueue: Optional[Array[LukeAsyncQueueNode]]=None, skipQueueFlag: Optional[bool]=None, func: Optional[Any]=None, args: Optional[Array[Any]]=None, label: Optional[str]=None, uuid: Optional[str]=None, resolveOnFound: Optional[bool]=None, hasTriedSmartLocator: Optional[bool]=None, webElementSelector: Optional[str]=None) -> None: ...

    @overload
    @classmethod
    def make(cls) -> LukeBrowserWebElement:
    """
    Construct an instance with initial state.
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> LukeBrowserWebElement:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> LukeBrowserWebElement:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> LukeBrowserWebElement:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> LukeBrowserWebElement:
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
    def fromJson(cls, json: any) -> Union[LukeBrowserWebElement]:
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
    def fromJsonString(cls, json: str) -> Union[LukeBrowserWebElement]:
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
    def fromXmlString(cls, xml: str) -> Union[LukeBrowserWebElement]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[LukeBrowserWebElement]:
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
    def replaceType(self, old: Type, new: Type) -> LukeBrowserWebElement:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> LukeBrowserWebElement:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> LukeBrowserWebElement:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[LukeBrowserWebElement]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[LukeBrowserWebElement]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> LukeBrowserWebElement:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> LukeBrowserWebElement:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> LukeBrowserWebElement:
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
    def validateObj(self) -> LukeBrowserWebElement:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> LukeBrowserWebElement:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> LukeBrowserWebElement:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> LukeBrowserWebElement:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> LukeBrowserWebElement:
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
    def withoutFieldAtPath(self, path: str) -> LukeBrowserWebElement:
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
    def withoutField(self, field: str) -> LukeBrowserWebElement:
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
    def withoutField(self, field: FieldType) -> LukeBrowserWebElement:
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
    def withoutFields(self, fields: Array[str]) -> LukeBrowserWebElement:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> LukeBrowserWebElement:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> LukeBrowserWebElement:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> LukeBrowserWebElement:
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
    def defaultField(self, field: str) -> LukeBrowserWebElement:
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
    def defaultField(self, field: FieldType) -> LukeBrowserWebElement:
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
    def unsetField(self, field: str) -> LukeBrowserWebElement:
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
    def unsetField(self, field: FieldType) -> LukeBrowserWebElement:
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
    def removeField(self, field: str) -> LukeBrowserWebElement:
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
    def removeField(self, field: FieldType) -> LukeBrowserWebElement:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> LukeBrowserWebElement:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> LukeBrowserWebElement:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> LukeBrowserWebElement:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> LukeBrowserWebElement:
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
    def mergeJson(self, json: any) -> LukeBrowserWebElement:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> LukeBrowserWebElement:
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
    def sumObj(self, other: Obj, deep: bool=None) -> LukeBrowserWebElement:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[LukeBrowserWebElement]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[LukeBrowserWebElement]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[LukeBrowserWebElement]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[LukeBrowserWebElement]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[LukeBrowserWebElement]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, LukeBrowserWebElement]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, LukeBrowserWebElement]]:
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
    def toBuilder(self) -> ObjBuilder[LukeBrowserWebElement]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[LukeBrowserWebElement]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> LukeBrowserWebElement:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> LukeBrowserWebElement:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> LukeBrowserWebElement:
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
    def afterMake(self) -> LukeBrowserWebElement:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> LukeBrowserWebElement:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[LukeBrowserWebElement]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> LukeBrowserWebElement:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    def setField(self, field: str, value: Any, doNotConvert: bool=None) -> LukeBrowserWebElement:
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
    def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> LukeBrowserWebElement:
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
    def then(self, callback: Any, args: Array[Any]=None, nodeType: Type=None, label: str=None, selectorToAppend: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches a next async node to the current node
    @param callback
             The function that either (1) yields a promise or (2) adds async chains to a nested async queue
             under the current active node.
    @example Callback functions returning promises
    ```js
    client.search('.alert').then(function (client, element) {
      return new Promise(function (resolve) {
        resolve(element.enabled());
      });
    });
    ```
    @example Callback functions scheduling async tasks
    ```js
    client.search('.hint').text().then(function (client, text) {
      if (text === 'click me') {
        client.click('button.action');
        client.search('label.message').text().assert('equal', 'Clicked!');
      }
    });
    ```
    @param args
             The additional arguments to be passed to the promise function in the next node
    @param nodeType
             The type of the next async node
    @param label
             The label of the node, if not provided, the caller name of then will be used as the label
    @param selectorToAppend
             The selector of the to-be-appended node, if not provided, the selector of the current node will be used
    @return An async node attached to the current node
    """
        ...
    def catchThen(self, callback: Any, args: Array[Any]=None, timeout: int=None) -> Union[LukeAsyncQueueNode]:
    """
    Adds a catch chain to the current chain. The catch logic runs when the normal chain fails.
    It is useful for conditional logic.
    @example
    ```js
    // Click the "start" button if the status is not "up".
    this.client.search('.status', true, 5).text().assert('toEqual', 'up').catchThen(function () {
      this.client.search('button.start', true).click();
    }.bind(this));
    ```
    
    @param callback
             The function that schedules Luke tasks
    @param args
             The additional arguments to be passed to the promise function in the next node
    @param timeout
             The timeout in seconds for the catch chain
    @return A {@link LukeAsyncQueueNode} that is the head of the catch chain
    """
        ...
    def attr(self, name: str) -> Union[LukeAsyncQueueNode]:
    """
    Attaches an async node that extracts an attribute from the current node's result. It is useful for transforming result
    and pass it down to an assertion node
    @example
    ```js
    luke.searchAll('.my-selector').attr('length').assert('toBeGreaterThan', 4);
    ```
    
    @param name
             The name of the attribute
    @return An async node attached to the current node
    """
        ...
    def measurePerformance(self, name: str) -> Union[LukeAsyncQueueNode]:
    """
    Measures the performance of the node
    @example
    ```js
    luke.searchAll('.my-selector').measurePerformance().assert('toBeLessThan', 0.01);
    ```
    
    @return An async node that will resolve with the time (in seconds) it takes to run the current node
    """
        ...
    def transform(self, transformFunction: Any, scope: Any=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches an async node that uses a custom function to generate result from the current node's result. It is useful for transforming result
    and pass it down to an assertion node
    @example
    ```js
    luke.search('.my-selector').text().transform(function (text) {
      return text.trim();
    }).assert('toEqual', 'name1');
    ```
    
    @param transformFunction
             The transform function
    @param scope
             The scope ("this" argument) on which to call the transformFunction
    @return An async node attached to the current node
    """
        ...
    def transformAll(self, transformFunction: Any, scope: Any=None) -> Union[LukeAsyncQueueNode]:
    """
    Same as transform, but expects the previous result to be an array and applies the transformation to each element of the array.
    This simplifies usage for transforming the result of something like a searchAll().
    
    @example
    ```js
    luke.searchAll('.my-selector').mapToAny(function (_client, element) {
      return element.text();
    }).transformAll(function (text) {
      return text.trim();
    }).assert('toContain', 'name1');
    ```
    
    @param transformFunction
             The transform function
    @param scope
             The scope ("this" argument) on which to call the transformFunction
    @return An async node attached to the current node
    """
        ...
    def assert(self, comparator: str, expected: Union[str,float,any]=None, customMessage: str=None, extraArgs: Array[Any]=None, selector: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches an assertion async node to the current node.
    When the value from the current node is resolved, it will be used to make an assertion against the expected value.
    @param comparator
             The comparator
    @param expected
             The expected value; this is usually set, but not for all comparators (ex. 'empty')
    @param customMessage
             Custom message that gets appended to the standard error message
    @param extraArgs
             Extra arguments passed to the underlying matcher function
    @param selector
             The selector of the current node if it exists
    @return An async node that resolves when its assertion becomes true.
    """
        ...
    def assertAccessibility(self, expected: float=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches an assertion async node to the current node, which should be an accessibility score node.
    Asserts that the score should be above some given threshold.
    @param expected
             The expected accessibility score threshold.
    @return An async node that resolves when its assertion becomes true.
    """
        ...
    def assertPerformance(self, comparator: str, expected: any=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches an assertion async node to the current node, which should be a pageLoadTime node.
    When the value from the performance node is resolved, it will be used to make an assertion against the expected value.
    @param comparator
             The comparator.
    @param expected
             The expected performance cutoff as a JSON.
    @return An async node that resolves when its assertion becomes true.
    """
        ...
    def assertNot(self, comparator: str, expected: Union[str,float,any]=None, customMessage: str=None, extraArgs: Array[Any]=None, selector: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Attaches a negative assertion async node to the current node.
    When the value from the current node is resolved, it will be used to make an assertion that value does not match the expected value.
    @param comparator
             The comparator
    @param expected
             The expected value; this is usually set, but not for all comparators (ex. 'empty')
    @param customMessage
             Custom message that gets appended to the standard error message
    @param extraArgs
             Extra arguments passed to the underlying matcher function
    @param selector
             The selector of the current node if it exists
    @return An async node that resolves when its assertion becomes true
    """
        ...
    def makeAssertion(self, comparator: str, expected: Union[str,float,any]=None, customMessage: str=None, extraArgs: Array[Any]=None, negate: bool='false', selector: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Makes an assertion after running an expression through the negate argument.
    @param comparator
             The comparator
    @param expected
             The expected value; this is usually set, but not for all comparators (ex. 'empty')
    @param customMessage
             Custom message that gets appended to the standard error message
    @param extraArgs
             Extra arguments passed to the underlying matcher function
    @param negate
             If want the results of evaluation to not be negated before making the assertion
    @param selector
             The selector of the current node if it exists
    @return An async node that resolves when its assertion becomes true
    """
        ...
    def assertionMatcher(self, comparator: str, ignoreExpected: bool=None) -> Union[Any]:
    """
    Gets the comparator function for an assertion
    @param comparator
             The comparator
    @param ignoreExpected
             If we want to ignore the expected value
    @return An object with the comparator function and name
    """
        ...
    def assertErrorMessage(self, comparator: str, actual: Any=None, expected: Any=None, customMessage: str=None, negate: bool=None, selector: str=None) -> Union[str]:
    """
    Internal helper for generating assertion message
    @param actual
             The actual value
    @param expected
             The expected value
    @param comparator
             The comparator
    @param customMessage
             Optional custom message
    @param negate
             Whether to negate the assertion
    @param selector
             The selector to use in the error message if actual is null
    @return The assertion message
    """
        ...
    def spyOn(self) -> Union[LukeAsyncQueueNode]:
    """
    Adds a breakpoint to the async function that runs in the current node for debugging the node implementation.
    Note that it only works when the test runs in the "console" browser environment.
    ```js
    luke.searchAll('.my-selector').visible().spyOn().assert('equal', true)
    ```
    can step into the async function that runs in the "visible" node when the "searchAll" node resolves the search
    result.
    @return the original node with a debuggable version of its async function.
    """
        ...
    def inspectResult(self) -> Union[LukeAsyncQueueNode]:
    """
    Attaches a debugger node that will pause when the current node resolves its promise. It can be used to inspect the
    result resolved from the current node. Note that it only works when the test runs in the "console" browser environment
    and if DevTools is already open.
    The node is "transparent", meaning that it won't alter the return node type or the resolved value of the current node,
    and therefore won't impact the async chain.
    ```js
    luke.searchAll('.my-selector').visible().inspectResult().assert('equal', true)
    ```
    will pause when the "visible" node resolves with a result, the developer can check whether the visibility is true
    or false.
    @return a debugger node that can be used to inspect the result resolved from the current node.
    """
        ...
    def saveAsDynamicValue(self, name: str) -> Union[LukeAsyncQueueNode]:
    """
    Saves the value that will be resolved from the current node as a {@link LukeDynamicValue} so that other async tasks
    can use it later
    @param name
             The name for the dynamic value
    @return An async node that resolves when the value is saved
    """
        ...
    def chainInfo(self) -> Union[any]:
    """
    Returns uuid, label, args, and next of the chain with this node as the chain head, during planning phase.
    Note that chains at planning phase should not have spawned nested async queues yet.
    """
        ...
    def transformToInt(self) -> Union[LukeAsyncQueueNode]:
    """
    Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to an integer
    @example
    ```js
    luke.search('.my-selector').text().transformToInt().assert('toEqual', 23);
    ```
    
    @return A {@link LukeAsyncQueueNode} that will resolve an integer
    """
        ...
    def transformToNumber(self, decimals: int='0') -> Union[LukeAsyncQueueNode]:
    """
    Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a number
    @example
    ```js
    luke.search('.my-selector').text().transformToNumber().assert('toEqual', 23);
    luke.search('.my-selector').text().transformToNumber(2).assert('toEqual', 23.28);
    ```
    @param decimals
              Number of decimals, note that the trailing 0 decimals will be omitted. For example, if "23.1200" is transformed
              to a number with 3 decimals, the resolved value will be 23.12 because JavaScript Number object will drop
              the trailing 0 decimals. {@see #transformToNumberString}
    @return A {@link LukeAsyncQueueNode} that will resolve a number
    """
        ...
    def transformToNumberString(self, decimals: int='0') -> Union[LukeAsyncQueueNode]:
    """
    Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a string representing a number
    @example
    ```js
    luke.search('.my-selector').text().transformToNumberString().assert('toEqual', '23');
    luke.search('.my-selector').text().transformToNumberString(2).assert('toEqual', '23.28');
    ```
    @param decimals
              Number of decimals
    @return A {@link LukeAsyncQueueNode} that will resolve a string representing a number
    """
        ...
    def transformToString(self) -> Union[LukeAsyncQueueNode]:
    """
    Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a string
    @example
    ```js
    luke.searchAll('.item').size().transformToString().assert('toEqual', '5');
    ```
    
    @return A {@link LukeAsyncQueueNode} that will resolve a string representing the value
    """
        ...
    def logToServer(self, msg: str, source: str) -> None:
    """
    Logs the message passed in to the server logs.
    @param msg
             The message in string form.
    @param source
             The context of where the log call is triggered.
    @return A {@link LukeAsyncQueueNode} that will resolve a string representing the message
    """
        ...
    def click(self) -> Union[LukeBrowserWebElement]:
    """
    Clicks the underlying Selenium Web Element
    @return a {@link LukeWebElement} that will be resolved when the click succeeds
    """
        ...
    def rightClick(self) -> Union[LukeBrowserWebElement]:
    """
    Right-clicks the underlying Luke Web Element
    @return a {@link LukeWebElement} that will be resolved when the click succeeds
    """
        ...
    def doubleClick(self) -> Union[LukeBrowserWebElement]:
    """
    Double-clicks the underlying Luke Web Element
    @return a {@link LukeWebElement} that will be resolved when the click succeeds
    """
        ...
    def scrollTo(self, xOffset: int='0', yOffset: int='0') -> Union[LukeBrowserWebElement]:
    """
    Scrolls to the underlying Luke Web Element
    By default, the scroll position will be the target element's top left, offset in x and y directions can also be specified.
    @param xOffset
             offset in x direction
    @param yOffset
             offset in y direction
    @return a {@link LukeWebElement} that will be resolved when the scrollTo succeeds
    """
        ...
    def scrollIntoView(self) -> Union[LukeBrowserWebElement]:
    """
    Scrolls an element's parent recursively to make the element into the viewport.
    Note that {@link #scrollTo} only scrolls the window to the position of an element, which
    does not guarantee that the element will be in the viewport. For example, if an element is in
    a scrollable container div, {@link #scrollTo} will not scroll the parent div and make the
    element visible in the viewport. In contrast, {@link #scrollIntoView} will scroll parent
    containers recursively as needed to make sure the target element is in the viewport.
    
    @return a {@link LukeWebElement} that will be resolved when the element is scrolled into the viewport
    """
        ...
    def moveTo(self, xOffset: int='0', yOffset: int='0') -> Union[LukeBrowserWebElement]:
    """
    Moves the mouse to the underlying Luke Web Element
    By default, the scroll position will be the target element's top left, offset in x and y directions can also be specified.
    @param xOffset
             offset in x direction
    @param yOffset
             offset in y direction
    @return a {@link LukeWebElement} that will be resolved when the scrollTo succeeds
    """
        ...
    def search(self, selector: str, resolveOnFound: bool=None) -> Union[LukeBrowserWebElement]:
    """
    Searches for an element within the current element that matches the css selector
    @param selector
             The css selector or xPath selector. Note that if xPath is used, please add a prefix 'xp:', e.g. 'xp: ./button' to differentiate it from a CSS selector.
    @param resolveOnFound
             If true, only resolve the node when a dom element is found
    @return a {@link LukeWebElement} that will be resolved with the search result
    """
        ...
    def searchAll(self, selector: str, resolveOnFound: bool=None) -> Union[LukeAsyncQueueCollection[LukeBrowserWebElement]]:
    """
    Searches for all elements within the current element that match the css selector
    @param selector
             The css selector or xPath selector. Note that if xPath is used, please add a prefix 'xp:', e.g. 'xp: ./button' to differentiate it from a CSS selector.
    @param resolveOnFound
             If true, only resolve the node when at least a dom element is found
    @return a {@link LukeAsyncQueueNode} that will be resolved with the search result (an array of {@link LukeWebElement})
    """
        ...
    def searchForElementWithText(self, selector: str, text: Union[str,LukeDynamicValue], resolveOnFound: bool=None) -> Union[LukeBrowserWebElement]:
    """
    Searches for all elements within the current element that match the css selector and returns the first element that has the given text.
    @param selector
             The css selector
    @param text
             The text to match
    @param resolveOnFound
             If true, only resolve the node when a dom element is found
    @return a {@link LukeWebElement} that will be resolved with the search result
    """
        ...
    def setValue(self, value: Union[str,int,bool,LukeDynamicValue]=None) -> Union[LukeBrowserWebElement]:
    """
    Sets value on the underlying Luke Web Element
    @param value
             The value to be set
    @return a {@link LukeWebElement} that will be resolved when the value is set
    """
        ...
    def getValue(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets value from the underlying Luke Web Element
    @return a {@link LukeAsyncQueueNode} that will be resolved with the value
    """
        ...
    def text(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets the text of the underlying Luke Web Element
    @return a {@link LukeAsyncQueueNode} that will be resolved with the text
    """
        ...
    def visible(self, isInViewPort: bool=None) -> Union[LukeAsyncQueueNode]:
    """
    Gets the visibility of the underlying Luke Web Element
    @param isInViewPort
              Whether to check if the element is within the viewport regarding the scroll position
    @return a {@link LukeAsyncQueueNode} that will be resolved with the visibility
    """
        ...
    def enabled(self) -> Union[LukeAsyncQueueNode]:
    """
    Checks whether the underlying Luke Web Element is enabled
    @return a {@link LukeAsyncQueueNode} that will be resolved with the result
    """
        ...
    def selected(self) -> Union[LukeAsyncQueueNode]:
    """
    Checks whether the underlying Luke Web Element (an option element,
    an input element of type checkbox, or a radio button) is selected
    @return a {@link LukeAsyncQueueNode} that will be resolved with the result
    """
        ...
    def classNames(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets the classNames of the underlying Luke Web Element
    @return a {@link LukeAsyncQueueNode} that will be resolved with the classNames
    """
        ...
    def innerHTML(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets a string representation of the HTML nested under the corresponding Luke Web Element
    @return a {@link LukeAsyncQueueNode} that will be resolved with the stringified HTML
    """
        ...
    def innerText(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets the inner text of the  corresponding Luke Web Element
    @return a {@link LukeAsyncQueueNode} that will be resolved with the stringified HTML
    """
        ...
    def cssProperty(self, name: str) -> Union[LukeAsyncQueueNode]:
    """
    Gets a css property from the element
    @param name
             The name of css property
    @return a {@link LukeAsyncQueueNode} that will be resolved with css property
    """
        ...
    def uploadFile(self, path: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Uploads a file to an input
    @parm path
            The path to the file to be uploaded in the {@link Pkg}
    @return a {@link LukeAsyncQueueNode} that will be resolved
    """
        ...
    def uploadFiles(self, paths: Array[str]) -> Union[Promise[any]]:
    """
    Uploads multiple files to an input
    @parm paths
            The paths to the files to be uploaded in the {@link Pkg}
    """
        ...
    def selectByIndex(self, index: int=None) -> Union[LukeBrowserWebElement]:
    """
    Selects an option by given index.
    @param index
           The index of option to select. The index starts from 1.
    @return a {@link LukeWebElement} that will be resolved.
    """
        ...
    def selectByValue(self, value: str=None) -> Union[LukeBrowserWebElement]:
    """
    Selects an option by given value.
    @param value
           The value of option to select.
    @return a {@link LukeWebElement} that will be resolved.
    """
        ...
    def getElementAttribute(self, attribute: str=None) -> Union[LukeAsyncQueueNode]:
    """
    Gets the given element attribute from the element.
    @param attribute
            Name of attribute to extract.
    @return a {@link LukeAsyncQueueNode} that will be resolved with attribute.
    """
        ...
    def trigger(self, eventType: str, extraArguments: Obj=None, eventCategory: str=None) -> LukeBrowserWebElement:
    """
    Triggers an event on current element.
    @param eventType
            The type of the event
    @param extraArguments
            Arguments to be passed to any event listeners
    @param eventCategory
            The category of the event, e.g. MouseEvent. By default, CustomEvent will be used
    @return The {@link LukeWebElement} that will resolve the same dom element
    """
        ...
    def parentElement(self) -> Union[LukeBrowserWebElement]:
    """
    Returns a LukeWebElement resolving to the parent element of the current one.
    @return a {@link LukeWebElement} that will be resolved with the parent element.
    """
        ...
    def runLambda(self, funk: Callable[[], Union[any]], args: Array[Any]=None) -> Union[LukeAsyncQueueNode]:
    """
    Inject a snippet of JavaScript into the page for execution in the context of the current frame, with
    the current element reference passed in and available.
    If returning an object with circular references, this will throw a `Maximum call stack size exceeded`
    and additional treatment/manipulation will need to be done within the client-side script.
    Examples:
    ```js
    this.client.search('span.some-class').runLambda(function (element) { element.remove(); });
    
    this.client.search('span.some-class').runLambda(function (element, textValue) {
       $(element).html(textValue); // Sets html of the element
    }, ['some text']);
    ```
    
    @param  funk
               The function to execute, with the element passed in as the first argument to it.
    @param  args
               Additional arguments, accessible within the function as `arguments[i]`,
               where `i` corresponds to the index of the argument, and `i >= 1`.
    @return The result of running the script.  If the script returns null this will return true
    """
        ...
    def runAsyncLambda(self, funk: Callable[[], Union[any]], args: Array[Any]=None, timeout: int=None) -> Union[LukeAsyncQueueNode]:
    """
    Runs an asynchronous function with the passed arguments in the contact of the current frame, with the current
    element reference passed in as a parameter.
    The function is expected to return a promise that will be resolved when the async logic completes.
    
    Example:
    ```js
    this.client.search('span.some-class').runAsyncLambda(function (element) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve($(element).html()); // Will return the element's text content after 2 seconds
        }, 2000);
      });
    })
    ```
    
    @param  funk
               The lambda function to execute.
    @param  args
               Lambda arguments, accessible within the function as `arguments[i]`,
               where `i` corresponds to the index of the argument
    @param  timeout
               Timeout in seconds for the async script execution
    @return An async node that is resolved with the result of successfully running the lambda.
    """
        ...
    def pressEnterKey(self) -> Union[LukeBrowserWebElement]:
    """
    Triggers the event of pressing the enter key on the element.
    @return The {@link LukeWebElement} that will resolve the same dom element
    """
        ...
    def toggle(self, checked: bool=None) -> Union[LukeBrowserWebElement]:
    """
    Toggles (select/unselect) the element.
    @param checked
             Whether the element should be selected.
    @return The {@link LukeWebElement} that will resolve the same dom element
    """
        ...
    def selector(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets the selector of this element. Luke currently accepts CSS and XPath selectors.
    @return A {@link LukeAsyncQueueNode} that will resolve upon returning this element's selector.
    """
        ...
    def rootElement(self) -> Union[LukeBrowserWebElement]:
    """
    Gets the root element of this element, which is the body element.
    @return A {@link LukeBrowserWebElement} that will be resolved upon finding the root element.
    """
        ...
    def tagName(self) -> Union[LukeAsyncQueueNode]:
    """
    Gets the element tag name in CAPS.
    @return A {@link LukeAsyncQueueNode} that will be resolved upon finding the tag name.
    """
        ...
    def pressKey(self, key: str, withShift: bool=None, withCtrl: bool=None, withAlt: bool=None, withMeta: bool=None) -> Union[LukeBrowserWebElement]:
    """
    Triggers the event of pressing a key on the element.
    @param key
              The key value for the key being pressed
              The list of key values: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
    @param withCtrl
              If true, press the (left) Ctrl key first
    @param withAlt
              If true, press the (left) Alt key first
    @param withShift
              If true, press the (left) shift key first
    @param withMeta
              If true, press the (left) meta key first
    @return A {@link LukeBrowserWebElement} that will be resolved when a key is pressed.
    """
        ...
    def inputValue(self, value: str=None, delay: int=None) -> Union[LukeBrowserWebElement]:
    """
    Simulates user typing when inputting a value. There should be a delay between each character.
    @param value
              The value to input
    @param delay
              Delay time in milliseconds between each character of value
    @return A {@link LukeBrowserWebElement}.
    """
        ...
    def inspectElement(self) -> Union[LukeBrowserWebElement]:
    """
    Adds a breakpoint to pause on the current node (must be a LukeBrowserWebElement) for inspecting the DOM element.
    @return A {@link LukeBrowserWebElement}.
    """
        ...
    def internalScrollTo(self, xOffset: int='0', yOffset: int='0') -> Union[LukeBrowserWebElement]:
    """
    Changes the scroll position inside the web element.
    Note that {@link #scrollTo} changes the scroll position of the window to the position of the target element.
    
    @param xOffset
             offset in x direction
    @param yOffset
             offset in y direction
    @return A {@link LukeWebElement} that will be resolved when the internal scroll position is updated.
    """
        ...
    def pointerClick(self) -> Union[Promise[any]]:
    """
    Clicks the element with additional Pointer Events dispatched.
    """
        ...
    def getBoundingClientRect(self) -> Union[LukeBrowserWebElement]:
    """
    Gets the bounding client rectangle of this element.
    @return A {@link LukeBrowserWebElement} that will be resolved with the bounding client rectangle of this element.
    """
        ...
    def realHover(self) -> Union[LukeBrowserWebElement]:
    """
    This uses the Chrome DevTools Protocol to move the mouse to the specified element, which is treated as a trusted event.
    @return A {@link LukeBrowserWebElement} that will be resolved with the element.
    """
        ...
    def realClick(self) -> Union[LukeBrowserWebElement]:
    """
    This uses the Chrome DevTools Protocol to click the specified element, which is treated as a trusted event.
    @return A {@link LukeBrowserWebElement} that will be resolved with the element.
    """
        ...
    def realDrag(self, endClientX: int, endClientY: int) -> Union[LukeBrowserWebElement]:
    """
    This uses the Chrome DevTools Protocol to move the mouse from this element to the specified coordinates, which is treated as a trusted event.
    @return A {@link LukeBrowserWebElement} that will be resolved with the element.
    """
        ...

