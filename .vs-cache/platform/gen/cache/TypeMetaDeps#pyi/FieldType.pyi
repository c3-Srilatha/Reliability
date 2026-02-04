#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Annotatable import Annotatable
from c3.platform.DocumentationParserSpec import DocumentationParserSpec
from c3.platform.Pkg import Pkg
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Annotations import Annotations
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.Documentable import Documentable
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.Error import Error
from c3.platform.Pair import Pair
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.WithKey import WithKey
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Promise import Promise
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Ann.Vector import Ann.Vector
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldTypeDocumentation import FieldTypeDocumentation
from c3.platform.Expr import Expr
from c3.platform.MapType import MapType
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor
from c3.platform.Exclude import Exclude
from c3.platform.Typesys.Ref import Typesys.Ref

# Python definitions for the C3 type FieldType


class FieldType(FieldTypeBase, FieldTypeAndMethodBase):
    """
    A runtime representation of C3 Type field. This contains the metadata for a single field of an Obj and is the most
    important instance when inspecting the data fields of a {@link Type}.
    
    To access metadata for a field, you go through the type's {@link TypeMeta}:
    ```
    type.meta().fieldType('x')
    ```
    
    Note that fields can have different values (or often no value) in different Obj instances. All the fields in
    {@link TypeMeta#fieldTypes} are these "data fields."
    
    In addition, constants may be declared with the `const` keyword. These do not appear as fields, but instead are
    in the separate {@link TypeMeta#constants}. Since these constants do not vary by Obj instance, they are not
    stored in each instance, but instead are accessed from the type.
    
    Finally, methods are not fields either; they are in {@link TypeMeta#methods}.
    
    @see FieldTypeBase
    @see Method
    
    @remarks this represents a made instance of FieldType
    """
    
    declaredPkgPath: Optional[str]=None
    """
    Source file Pkg.Path a C3 Type declaration [.c3typ].
    """

    declaredSrcLine: Optional[int]=None
    """
    Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
    """

    declaredSrcCharInLine: Optional[int]=None
    """
    Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
    element is declared.
    """

    pkg: Optional[Pkg]
    """
    C3 application package this Type System element _belongs_ to; note that this maybe different from the package
    where this type-system element was declared.
    
    @see #package
    """

    json: Optional[Any]=None
    """
    SDK json representing instance of this type
    """

    annotationsJson: Optional[any]=None
    """
    The set of annotations defined on this element of metadata represented as json value.
    """

    doc: Optional[str]=None
    """
    The raw textual documentation associated with this piece of metadata. This will have the original comment
    characters removed, but otherwise be a simple block of text with the original formatting retained. Only
    documentation comments (starting with `/**`) will be used for this purpose and only when immediately
    preceding the structure they document.
    """

    docSingleLine: Optional[bool]=None

    name: Optional[str]=None
    """
    The name of the field is the unique key for access.
    """

    declaredDefault: Optional[str]=None
    """
    If the field is declared with a default value, the value expression is carried in this field. Use
    {@link FieldType#defaultValue defaultValue} to get the "evaluated" value.
    
    If the value type of the field is a named enum, the default should be the label (field name) from the enum type
    or an expression that evaluates to one.
    
    @see FieldType#defaultValue
    """

    storedCalc: Optional[bool]=None
    """
    Indicates that the field calculation should be persisted. This is more expensive on update, but allows calculated
    values to be used in filter expressions.
    
    @see #calcExpr
    """

    calcExpr: Optional[str]=None
    """
    Indicates that a field is calculated.  If the field is also persistable, then the field is a stored calc field
    and its value will be asynchronously updated when any of its dependencies change.  If the field is not persistable
    then it is a read only calc field and its value will be evaluated any time the obj/field is read.
    
    This should not be used directly.  Instead either defining the field as "stored calc" (implies persistable = true,
    calculated = true) or just "calc" (implies persistable = false, calculated = true) should be used.
    
    Note that the expression is normally calculated whenever the underlying data changes, but this can also be
    controlled using "periodic" and "scheduled" calculated fields.
    
    @see #calcPeriod
    @see #calcSchedule
    """

    calcPeriod: Optional[str]=None
    """
    Calculated fields can automatically be updated periodically. For example:
    ```type
    eventCount: periodic stored calc 'count(events)' period '1h'
    ```
    This means: evaluate and save the expression "count(events)" and re-evaluate every hour.
    
    @see #calculated
    """

    calcSchedule: Optional[str]=None
    """
    Calculated fields can automatically be updated on a schedule. For example:
    ```type
    eventCount: scheduled stored calc 'count(events)' period '0 1 * * *'
    ```
    This means: evaluate and save the expression "count(events)" and re-evaluate every day at 1am.
    
    @see #calculated
    @see https://en.wikipedia.org/wiki/Cron
    """

    fkey: Optional[str]=None
    """
    Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
    this field in the reference type to the {@link key} field in this obj.
    """

    key: Optional[str]=None
    """
    Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
    the {@link fkey} field in the reference type to this field in this obj.  The default is "id"
    """

    schemaName: Optional[str]=None

    schemaSuffix: Optional[str]=None

    translatedBy: Optional[str]=None

    notPersistable: Optional[bool]=None
    """
    If `true` then value of this field will _not_ be persisted in the database. This is either due to an explicit
    `not persistable` suffix on the field declaration or because it is a (non-stored) calculated field.
    
    @see #calcExpr
    @see #storedCalc
    """

    final: Optional[bool]=None
    """
    True if this field is declared final. This mans that it may not be changed by types that mix it in. Note that
    the type itself may not be final, which implies all fields are final.
    
    @see Type#final
    """

    private: Optional[bool]=None
    """
    True if this field is declared private. This means that it may not be used outside its declaring package.
    
    @see Type#private
    """

    constant: Optional[bool]=None
    """
    True if this field is declared constant. That means its value can never be changed from the value specified
    by its default.
    
    @see #default
    """
    def __init__(self, declaredPkgPath: Optional[str]=None, declaredSrcLine: Optional[int]=None, declaredSrcCharInLine: Optional[int]=None, pkg: Optional[Pkg]=None, json: Optional[Any]=None, annotationsJson: Optional[any]=None, doc: Optional[str]=None, docSingleLine: Optional[bool]=None, name: Optional[str]=None, declaredDefault: Optional[str]=None, storedCalc: Optional[bool]=None, calcExpr: Optional[str]=None, calcPeriod: Optional[str]=None, calcSchedule: Optional[str]=None, fkey: Optional[str]=None, key: Optional[str]=None, schemaName: Optional[str]=None, schemaSuffix: Optional[str]=None, translatedBy: Optional[str]=None, notPersistable: Optional[bool]=None, final: Optional[bool]=None, private: Optional[bool]=None, constant: Optional[bool]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> FieldType:
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
    def fromJson(cls, json: any) -> Union[FieldType]:
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
    def fromJsonString(cls, json: str) -> Union[FieldType]:
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
    def fromXmlString(cls, xml: str) -> Union[FieldType]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[FieldType]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> FieldType:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> FieldType:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[FieldType]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[FieldType]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> FieldType:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> FieldType:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> FieldType:
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
    def validateObj(self) -> FieldType:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> FieldType:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> FieldType:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> FieldType:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> FieldType:
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
    def withoutFieldAtPath(self, path: str) -> FieldType:
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
    def withoutField(self, field: str) -> FieldType:
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
    def withoutField(self, field: FieldType) -> FieldType:
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
    def withoutFields(self, fields: Array[str]) -> FieldType:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> FieldType:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> FieldType:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> FieldType:
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
    def defaultField(self, field: str) -> FieldType:
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
    def defaultField(self, field: FieldType) -> FieldType:
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
    def unsetField(self, field: str) -> FieldType:
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
    def unsetField(self, field: FieldType) -> FieldType:
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
    def removeField(self, field: str) -> FieldType:
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
    def removeField(self, field: FieldType) -> FieldType:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> FieldType:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> FieldType:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> FieldType:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> FieldType:
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
    def mergeJson(self, json: any) -> FieldType:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> FieldType:
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
    def sumObj(self, other: Obj, deep: bool=None) -> FieldType:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[FieldType]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[FieldType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[FieldType]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[FieldType]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[FieldType]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, FieldType]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, FieldType]]:
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
    def toBuilder(self) -> ObjBuilder[FieldType]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[FieldType]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> FieldType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> FieldType:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> FieldType:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> FieldType:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> FieldType:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> FieldType:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> FieldType:
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
    def afterMake(self) -> FieldType:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> FieldType:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[FieldType]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> FieldType:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def pkgPath(self) -> Pkg.Path:
    """
    The metadata path where the parent type's declaration file is located:
    Format: /<package>/[gen|test]/src/<pkg-sub-path>/<name>.c3typ
    E.g. for the given package folder structure:
    ```
    myRepo
     |
     -  myPkg
         |
         -  src
             |
             - folder1
                 |
                 - folder2
                     |
                     - SomeType1.c3typ
             - SomeType3.c3typ
         -  test
             |
              - src
                 |
                 - SomeType2.c3typ
         -  gen
             |
              - src
                 |
                 - SomeType4.c3typ
    ```
    For SomeType1.c3typ will return -> /myPkg/src/folder1/folder2/SomeType1.c3typ
    For SomeType3.c3typ will return -> /myPkg/src/SomeType3.c3typ
    For SomeType2.c3typ will return -> /myPkg/test/src/SomeType2.c3typ
    For SomeType4.c3typ will return -> /myPkg/gen/src/SomeType4.c3typ
    
    @see #package
    @see #pkgSubPath
    """
        ...
    def package(self) -> str:
    """
    The name of the package where this type was declared.
    
    For example, if package "app", depends on "industry", which depends on "foundation", provisioning app will bring
    in the types in the industry and foundation packages as well. This means that the `package` of the Location
    type will be foundation, even if it gets remixed by industry (or even app).
    
    @see #pkg
    @see #pkgPath
    @see #pkgSubPath
    """
        ...
    def packageVersionMajorMinor(self) -> SemanticVersion.MajorMinor:
    """
    The version of the package where this type was declared.
    """
        ...
    def pkgSubPath(self) -> str:
    """
    Dot (".") separated relative path of the folder where this type's declaration file is located in the package
    E.g. for the given structure
    ```
    myRepo
     |
     -  myPkg
         |
         -  src
             |
             - folder1
                 |
                 - folder2
                     |
                     - SomeType1.c3typ
             - SomeType3.c3typ
         -  test
             |
              - src
                 |
                 - SomeType2.c3typ
         -  gen
             |
              - src
                 |
                 - SomeType4.c3typ
    ```
    For SomeType1.c3typ will return -> folder1/folder2
    For SomeType3.c3typ will return -> "" (empty string)
    For SomeType3.c3typ will return -> "" (empty string)
    For SomeType4.c3typ will return -> "" (empty string)
    
    @see #pkgPath
    @see #package
    """
        ...
    def declaredPkg(self) -> Pkg:
    """
    Pkg where this type was declared, note could be different then #pkg.
    """
        ...
    def metadataPath(self) -> Union[str]:
        ...
    def toTypesysJson(self) -> Typesys.Json:
    """
    Convert the internal object representation of this instance to SdkJson for an efficient loading of type at
    execution time.
    """
        ...
    def typesys(self) -> Pkg:
    """
    @return package for built-in Type System; this could be different from #pkg() when package is loaded from a disk
            for code gen
    """
        ...
    def withoutDeclaredSrcPos(self, recursive: bool=None) -> FieldType:
    """
    @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
    """
        ...
    def mergedAnnotationsJson(self) -> Union[any]:
    """
    Override this method to return the merged set of annotations from itself and its hierarchy
    E.g.
    ```type
      @config(folder="x")
      type A {
      }
      @config(secret=true)
      type B mixes A
    ```
    => return config(secret=true, folder="x") for type B
    If not overridden, by default this returns #annotationJson
    """
        ...
    def declaredAnnotations(self) -> Annotations:
    """
    The declared annotations for this metadata element.
    """
        ...
    def annotations(self) -> Annotations:
    """
    The annotations for this metadata element.
    """
        ...
    def hasAnnotations(self) -> bool:
    """
    Whether this metadata element has any annotation.
    """
        ...
    def hasAnnotation(self, ann: str) -> bool:
    """
    Whether this metadata element has annotation with provided name.
    """
        ...
    def hasAnnotationValue(self, ann: str, annField: str) -> bool:
    """
    Whether this metadata element has annotation field value.
    """
        ...
    def annotation(self, ann: str, failIfMissing: bool=None) -> Union[Annotation]:
    """
    @return annotation with provided name
    """
        ...
    def annotationValue(self, ann: str, annField: str) -> Union[Any]:
    """
    @return annotation value for provided annotation name and annotation field
    """
        ...
    @overload
    def withAnnotation(self, ann: Annotation) -> FieldType:
    """
    Add an annotation to the given metadata
    """
        ...
    @overload
    def withAnnotation(self, ann: str, annField: str=None, value: Any=None) -> FieldType:
    """
    Add an annotation to the given metadata
    @param ann
            annotation to add
    @param annField
            which field on the annotation needs to be set
    @param value
            value for the field
    """
        ...
    @classmethod
    def haveSameAnnotations(cls, a1: Annotatable, a2: Annotatable) -> bool:
    """
    Whether the specified instances have same annotations.
    """
        ...
    def inheritableAnnotationsJson(self) -> Union[any]:
    """
    Return the JSON for annotations that can be inherited by children of this element of metadata. Annotations are
    normally inherited, but ones marked with {@link Annotation#noInherit} will not be.
    """
        ...
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
    null may be returned. The implementation must be available within the browser (typically `js-client`).
    """
        ...
    def docParsed(self, spec: DocumentationParserSpec=None) -> FieldTypeDocumentation:
    """
    Documentation parsing will produce a structured documentation object from the attributes of the metadata along
    with the contents of the documentation comment. This can be examined and also rendered for display to the user
    using {@link DocumentationRenderer}.
    
    If this is not one of the known metadata types, nor has any documentation associated, the method returns null.
    Otherwise, it will build an object that contains as much as is possible to assemble about the piece of
    structure, both from the metadata itself and from the text in #docText.
    
    @return parsed documentation object
    
    @see DocumentationParser
    """
        ...
    def docMarkdown(self) -> Union[str]:
    """
    Rendered markdown document for the Documentable instance.
    """
        ...
    def docText(self) -> Union[str]:
    """
    Rendered plain text for the Documentable instance.
    """
        ...
    @classmethod
    def haveSameDoc(cls, d1: Documentable, d2: Documentable) -> bool:
    """
    Whether the specified instances have same documentation.
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
    def cachedFingerprint(self) -> int:
        ...
    def identifier(self, lang: str=None) -> str:
    """
    @return identifier that can safely be used in the code for provided language
    """
        ...
    def toString(self) -> Union[str]:
    """
    String-based representation of instance of this type.
    """
        ...
    def toRef(self) -> Typesys.Ref:
    """
    Reference value of this instance.
    """
        ...
    def toRefString(self) -> str:
    """
    Reference string serialized value of the reference to this instance.
    """
        ...
    @classmethod
    def fromRef(cls, ref: Obj, failIfMissing: bool=None) -> FieldType:
    """
    Construct instance from a reference.
    """
        ...
    @classmethod
    def refType(cls) -> Union[Type]:
    """
    C3 type for the reference value.
    """
        ...
    def declared(self) -> Union[Array[DeclaredFieldType]]:
    """
    Declaration of this field or method in the parent type.
    """
        ...
    def isInherited(self) -> bool:
    """
    @return true if this field or method is inherited form one of mixin types. Note that it will be `true` even for
            overrides.
    
    @see isOverridden
    """
        ...
    def isOverridden(self) -> bool:
    """
    @return true if this field or method is inherited form one of mixin types and also this type is overriding it by
            some means e.g. implementing abstract method or specializing value type of the data field.
    
    @see isOverridden
    """
        ...
    def isMultiBase(self) -> bool:
    """
    @return true if this field or method is inherited form more then one of different mixin types.
    
    @see isInherited
    @see isOverridden
    """
        ...
    def parentType(self) -> Type:
    """
    Parent type this field type or method belongs to.
    """
        ...
    def parentTypeMeta(self) -> TypeMeta:
    """
    Parent type this field type or method belongs to.
    """
        ...
    def serName(self) -> str:
    """
    @return serialization name of this field type.
    
    @see Amm.Ser#name
    """
        ...
    def callStackKey(self) -> str:
    """
    @return a string key in the format of '<type proto name>#<field or method name>'
    """
        ...
    def build(self) -> Union[FieldType]:
    """
    @return sufficiently built field or method or `null`
    """
        ...
    def valueType(self) -> ValueType:
    """
    @return value type of this field.
    """
        ...
    def ordinal(self) -> int:
    """
    O based index of the effective order of this field in the parent type.
    """
        ...
    def mixins(self) -> Union[Array[FieldType]]:
    """
    Corresponding mixin type fields if this is an override.
    """
        ...
    def fieldPath(self) -> FieldPath:
        ...
    def firstDeclaredOn(self) -> Type:
    """
    Get the type on which this field is first declared.
    """
        ...
    def firstDeclaredOnMeta(self) -> TypeMeta:
        ...
    def firstDeclaredFieldType(self) -> FieldType:
    """
    Original declaration of this field from first declaring type.
    """
        ...
    def hasConstraints(self) -> bool:
    """
    Whether this field has an any constraints.
    """
        ...
    def hasDefault(self) -> bool:
    """
    Whether this field has a default value defined.
    """
        ...
    def hasDefaultValueConst(self) -> bool:
    """
    Whether this field has a constant default value defined.
    """
        ...
    def defaultValueConst(self) -> Union[Any]:
    """
    If this field has a constant default value defined, the parsed/constructed value of that initializer.
    """
        ...
    def defaultValue(self, inst: Obj) -> Union[Any]:
    """
    If this field has a default value defined, the parsed/constructed value of that initializer. This method is called
    by {@link Obj#make} to set default values on the `Obj` being made.
    
    @param inst
           Instance whose field is being accessed
    @return evaluated default value
    """
        ...
    def isConstant(self) -> bool:
    """
    Whether this field is a constant, i.e., fixed to its default value.
    """
        ...
    def isMutable(self) -> bool:
    """
    Whether this field is mutable, i.e. if this field is a reference to Mutable sub-type.
    """
        ...
    def calculatedExpr(self) -> Union[str]:
    """
    Calculated expression for a calculated field.  This may either be the expression explicitly defined (e.g. via
    "calc" dsl, or implicit (e.g. for "translate by" fields).
    """
        ...
    def parsedCalculatedExpr(self) -> Union[Expr]:
    """
    Parsed calculated expression for a calculated field.  This may either be the expression explicitly defined (e.g.
    via "calc" dsl, or implicit (e.g. for "translate by" fields).
    """
        ...
    def isCalculated(self) -> bool:
    """
    Whether this field is based on a calculated value, either stored- or read-calculated.
    """
        ...
    def isReadCalculated(self) -> bool:
    """
    Whether this field is based on a calculated value and is not persistable.
    """
        ...
    def isStoredCalculated(self) -> bool:
    """
    Whether this field is based on a calculated value and is persistable.
    """
        ...
    def isPeriodicCalculated(self) -> bool:
    """
    Whether this field is stored calculated and specifies a fixed period for calculation.
    """
        ...
    def isScheduledCalculated(self) -> bool:
    """
    Whether this field is stored calculated and specifies a fixed schedule for calculation.
    """
        ...
    def hasEnum(self) -> bool:
    """
    Whether this field has an enumeration of possible values.
    """
        ...
    def enumValues(self) -> Union[Set[Any]]:
    """
    If this field has an enumeration of possible values, those possible values.
    """
        ...
    def isNonEmpty(self) -> bool:
    """
    Whether this field is non empty and must have a value that is not logically empty.
    """
        ...
    def isReadOnly(self) -> bool:
    """
    Whether this field is read only - i.e. can not be updated in case of mutable or entity types.
    """
        ...
    def isWriteOnce(self) -> bool:
    """
    Whether this field can only be set on create.
    """
        ...
    def isSystemUpdateOnly(self) -> bool:
    """
    Whether this field can only be set internally by the system.
    """
        ...
    def isCreateOnly(self) -> bool:
    """
    Whether this field can only be set during create operation.
    """
        ...
    def isPersistable(self) -> bool:
    """
    Whether this field should be persisted; normally true unless declared non-persistable or a (non stored)
    calculated field
    
    @see #notPersistable
    @see #isReadCalculated
    """
        ...
    def isSystemJoin(self) -> bool:
    """
    Whether this field is using special system join (e.g. meta.tenant, meta.tag).
    """
        ...
    def isSystemField(self) -> bool:
    """
    Whether this field is managed by the database engine
    """
        ...
    def isPrivate(self) -> bool:
    """
    Whether this field is marked as private (not to be used outside its type).
    """
        ...
    def isNumber(self) -> bool:
    """
    Whether the field is a has number value type
    """
        ...
    def isBoolean(self) -> bool:
    """
    Whether the field has boolean value type
    """
        ...
    def isPgJsonPersisted(self) -> bool:
    """
    Whether the field is persisted as json when the db is Postgres
    
    @see Ann.Db#pgPersistAsJson
    """
        ...
    def isVector(self) -> bool:
    """
    //TODO PLAT-82421: Natively support vector as a value type. Once done, update this implementation.
    True if this field has an annotation `vector` set.
    """
        ...
    def isSparseVector(self) -> bool:
    """
    True if this field has an annotation `vector` set and Ann.Vector#sparse is set to true.
    """
        ...
    def vectorHasSourceField(self) -> bool:
    """
    True if this field has an annotation `vector` set and is calculated using {@link Ann.Vector#sourceField} and
    {@link Ann.Vector#embedder}.
    """
        ...
    def vectorAnnotation(self) -> Union[Ann.Vector]:
    """
    //TODO PLAT-82421: Natively support vector as a value type. Once done, remove this and update usages.
    Returns the value of the `vector` annotation.
    """
        ...
    def isTimedValueWithHistory(self) -> bool:
    """
    Whether this field mixes {@link TimedValue} or {@link TimedIntervalValue} AND has an associated history field in the
    type.
    
    @see Ann.Db#timedHistoryField
    """
        ...
    def isTimedHistory(self) -> bool:
    """
    @return True if this field is the history field for a timed value field that has a linked history field.
    """
        ...
    def timedValueHistoryField(self) -> Union[str]:
    """
    @return the associated timed value history field for a timed value field
    """
        ...
    def isTimedCharacteristicWithHistory(self) -> bool:
    """
    Whether this field mixes {@link TimedCharacteristic} or {@link TimedIntervalCharacteristic} AND has an associated
    history field in the type.
    
    @see Ann.Db#timedHistoryField
    """
        ...
    def isTimedCharacteristicHistory(self) -> bool:
    """
    @return True if this field is the history field for a timed characteristic field that has a linked history field.
    """
        ...
    def isLatestCharacteristics(self) -> bool:
        ...
    def timedCharacteristicHistoryField(self) -> Union[str]:
    """
    @return the associated timed value history field for a timed value field
    """
        ...
    def isHeterogeneousRef(self) -> bool:
    """
    @return true if the field is a heterogeneous reference.
    """
        ...
    def hasSerRefCol(self) -> bool:
    """
    @return true if the field has a serialized ref column for persistence.  This is true if the field is either a
            heterogeneous ref or if it is an included ref with the value type that preserves empty values.
    """
        ...
    def isCompositeKey(self) -> bool:
    """
    @return true if the field's value type is a CompositeKey reference type.
    """
        ...
    def isKey(self) -> bool:
    """
    @return true if the parent type is sub-type of {@link WithKey} and this field it's WithKey#keyFieldType.
    """
        ...
    def isDuration(self) -> bool:
    """
    @return true if the field type's value type (or it's collection's value type if it is a collection field) is
    {@link Duration}
    """
        ...
    def isGeometry(self) -> bool:
    """
    @return true if the field type's value type is a reference type that mixes in Geom
    """
        ...
    def isGeography(self) -> bool:
    """
    @return true if the field type's value type is a reference type that mixes in Geo
    """
        ...
    def isGeo(self) -> bool:
    """
    @return true if the field type's value type is a reference type that mixes in either Geom or Geo
    """
        ...
    def geoSrid(self) -> int:
    """
    @return the srid (Spatial Reference Id) for a geometry/geography field
    """
        ...
    def isPersistSerialized(self, checkCollection: bool=None) -> bool:
    """
    Checks if a field's value type stores references as serialized values (e.g. generic objs or fields marked as
    `persistAllFields`).
    
    @param checkCollection
           If true, and the value type for the field is a collection value type, then the collections element type
           will be checked, otherwise only the value type of the field itself will be checked.
    @return true if the relevant value type is a reference and complete obj values will be stored in a single column.
    """
        ...
    def serializedValueType(self, checkCollection: bool) -> Union[ValueType]:
    """
    @return The serialized value type for this value type if {@link persistSerialized} returns true.
    """
        ...
    def isPii(self) -> bool:
    """
    @return true if the Ann.Pii annotation is set for this field.
    """
        ...
    def convertValue(self, value: Any, failIfInvalid: bool=None) -> Union[Any]:
    """
    @return converted value for the value type of this field
    """
        ...
    def validateValue(self, value: Any) -> Union[Error]:
    """
    @return instance of Error if provided value is invalid for this field or `null`
    """
        ...
    def valueConstraintValidator(self) -> Union[Callable[[Union[Any]], Union[Error]]]:
    """
    @return compiled validation lambda that returns `null` or constraint validation error for a given field value
    """
        ...
    def isIncludedRef(self) -> bool:
    """
    Whether or not the associated reference type is a non-persistable type.
    
    @see ReferenceType#isIncluded
    """
        ...
    def isTimeseries(self) -> bool:
    """
    @return true if field is a timeseries field
    """
        ...
    def dereference(self, failIfMissing: bool=None) -> Union[Type]:
    """
    Look up the referenced C3 type and return it. For unbound variables or invalid type references, null is returned.
    
    @return loaded type
    """
        ...
    def conditionalConstraint(self) -> Union[Pair[Expr.Compiled[Obj, bool], str]]:
    """
    @returns the conditional constraint, if any, for the type.
    """
        ...
    def colName(self, failIfMissing: bool=None) -> Union[str]:
    """
    @returns physical column name to use for querying the datastore.
    """
        ...
    def referenceType(self) -> Union[ReferenceType]:
    """
    @return the associated reference type of the field if it is a reference field or an array or map of references.
    """
        ...
    def isFkeyRef(self) -> bool:
    """
    @return True if the field is an fkey ref field or fkey ref array field.
    """
        ...
    def isFkeyRefArray(self) -> bool:
    """
    @return True if the field is an fkey ref array
    """
        ...
    def fkeyRefKey(self) -> Union[str]:
    """
    @return the 'key' field to use in an fkey relationship.  If the field is an fkey field then this will be
    either the value of the 'key' field or 'id' if the 'key' field is null.
    """
        ...
    def hasSchemaName(self) -> bool:
    """
    @return True if the field has a schema name defined
    """
        ...
    def hasSchemaSuffix(self) -> bool:
    """
    @return True if the field has a schema suffix defined.
    """
        ...
    def isUserWritable(self) -> bool:
    """
    If the field is a persistable data type.
    """
        ...
    def authz(self) -> Union[str]:
        ...
    def authzChildActions(self) -> bool:
    """
    @return value of `@action(authzChildActions=` annotation
    """
        ...
    def accessControlGroups(self) -> Union[Array[str]]:
    """
    @return value of `@action(accessControlGroups=` annotation
    """
        ...
    def configSecretAnnotation(self) -> bool:
    """
    @return value of `@config(secret=` or false if not set
    """
        ...
    def isEncrypted(self) -> bool:
    """
    Returns true if encrypted
    """
        ...

