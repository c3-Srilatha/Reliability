#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MergedDocumentation import MergedDocumentation
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.FunctionParam import FunctionParam
from c3.platform.StreamType import StreamType
from c3.platform.TypesysScope import TypesysScope
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Triple import Triple
from c3.platform.SetBuilder import SetBuilder
from c3.platform.WithKey import WithKey
from c3.platform.FieldType import FieldType
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.MethodTypeDocumentation import MethodTypeDocumentation
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SetType import SetType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapType import MapType
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor
from c3.platform.Exclude import Exclude
from c3.platform.Typesys.Ref import Typesys.Ref
from c3.platform.FunctionType import FunctionType
from c3.platform.Annotatable import Annotatable
from c3.platform.DocumentationParserSpec import DocumentationParserSpec
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MethodType import MethodType
from c3.platform.Annotations import Annotations
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.Documentable import Documentable
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Triple import Triple

# Python definitions for the C3 type Method


class Method(FieldTypeAndMethodBase):
    """
    A method is a function that is associated with a type and has a name and implementation as an "action".  Type
    actions can be called directly within any supported language and through the REST API.
    
    Method can be overloaded - in which case dispatcher will lookup implementation based on input parameter value types.
    
    Methods are declared on a type in the same way as {@link FieldType fields}, except that the value to the right of
    the colon is a {@link MethodType function}.
    ```
    type Cat {
      purr:  member function()
      meow:  member function(loudness: int)
      stray: function(): Cat
    }
    ```
    
    The first two methods above are members, which means they are called on an instance of the Cat type. The last one is
    static, which means it is called on the Cat type itself.
    ```
    Cat.stray().meow(5)
    ```
    
    See {@link MethodType} for more information about function value types. See {@link methods.c3doc Method Declaration}
    for more information on method declaration and the rules around overriding and overloading methods.
    
    The implementation may be transportable to the client, in which case its (scripting language) implementation is
    carried along with the type, merging mixins and remixes.
    
    Methods may be marked with options:
     - `abstract` assumed to be implemented by any sub-type (unless re-declared abstract)
     - `optional` not implemented unless re-declared in a sub-type
     - `final` may not be re-declared in sub-types
     - `cached` result is expensive to compute and a pure function and the value may be cached
     - `stateful` cannot be cached; for example cannot be invoked over HTTP via the GET method
     - `private` method should not be used outside its declaring package
     - `member` method is called on an instance, rather than the type itself ("static")
    
    @see MethodType
    @see Type
    
    @remarks this represents a made instance of Method
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
    This field is not supported on **Method**, but is available on the individual {@link MethodType} instances
    accessible through #overloads. Merged documentation (all overloads) is available through the #docParsed and
    #docText methods.
    
    @see #overloadsWithDoc
    """

    docSingleLine: Optional[bool]=None

    name: Optional[str]
    """
    Name of the method.
    """
    def __init__(self, declaredPkgPath: Optional[str]=None, declaredSrcLine: Optional[int]=None, declaredSrcCharInLine: Optional[int]=None, pkg: Optional[Pkg]=None, json: Optional[Any]=None, annotationsJson: Optional[any]=None, doc: Optional[str]=None, docSingleLine: Optional[bool]=None, name: Optional[str]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> Method:
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
    def fromJson(cls, json: any) -> Union[Method]:
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
    def fromJsonString(cls, json: str) -> Union[Method]:
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
    def fromXmlString(cls, xml: str) -> Union[Method]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Method]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Method:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Method:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Method]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Method]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Method:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Method:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Method:
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
    def validateObj(self) -> Method:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Method:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Method:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Method:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Method:
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
    def withoutFieldAtPath(self, path: str) -> Method:
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
    def withoutField(self, field: str) -> Method:
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
    def withoutField(self, field: FieldType) -> Method:
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
    def withoutFields(self, fields: Array[str]) -> Method:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Method:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Method:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Method:
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
    def defaultField(self, field: str) -> Method:
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
    def defaultField(self, field: FieldType) -> Method:
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
    def unsetField(self, field: str) -> Method:
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
    def unsetField(self, field: FieldType) -> Method:
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
    def removeField(self, field: str) -> Method:
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
    def removeField(self, field: FieldType) -> Method:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Method:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Method:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Method:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Method:
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
    def mergeJson(self, json: any) -> Method:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Method:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Method:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Method]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Method]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Method]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Method]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Method]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Method]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Method]]:
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
    def toBuilder(self) -> ObjBuilder[Method]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Method]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Method:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Method:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Method:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Method:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Method:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Method:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Method:
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
    def afterMake(self) -> Method:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Method:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Method]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Method:
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
    def withoutDeclaredSrcPos(self, recursive: bool=None) -> Method:
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
    def withAnnotation(self, ann: Annotation) -> Method:
    """
    Add an annotation to the given metadata
    """
        ...
    @overload
    def withAnnotation(self, ann: str, annField: str=None, value: Any=None) -> Method:
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
    def docParsed(self, spec: DocumentationParserSpec=None) -> Union[MergedDocumentation,MethodTypeDocumentation]:
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
    def fromRef(cls, ref: Obj, failIfMissing: bool=None) -> Method:
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
    def build(self) -> Union[Method]:
    """
    @return sufficiently built field or method or `null`
    """
        ...
    def mixins(self) -> Union[Array[Method]]:
    """
    Corresponding mixin type methods if this is an override.
    """
        ...
    def overloads(self) -> Array[MethodType]:
    """
    The list of overload function signatures individually declared. These may come from the same or a mixin type.
    This list should be used for documentation and argument validation if the method `isOverloaded()`.
    
    ```type
    type Math {
      min: function(values: int ...): int
      min: function(values: double ...): double
    }
    ```
    
    The primary signature ({@link FunctionType#arguments} and {@link FunctionType#returnValueType}) will be a
    "net" signature that can accommodate all forms of the overload. For example, Math.min above would have a
    net signature of `(values: any ...): any`.
    
    However, when calling the function, the overload is picked based on the actual arguments passed, which means that
    validation will be performed and if there is no matching overload for the actuals, an error will be raised.
    """
        ...
    def overloadsWithAnn(self, ann: str) -> Union[Array[MethodType]]:
    """
    The list of overload function signatures individually declared with specified annotation. These may come from the
    same or a mixin type.
    This list should be used for documentation and argument validation if the method `isOverloaded()`.
    
    @see #overloads
    """
        ...
    def prototype(self) -> Method:
    """
    If parent type is narrowed generic type then corresponding method from it - otherwise this.
    """
        ...
    def isOverloaded(self) -> bool:
    """
    Whether this is an overloaded method, which has multiple calling signatures.
    """
        ...
    def isImplemented(self) -> bool:
    """
    Whether this method has implementations for every overload.
    """
        ...
    def isMember(self) -> bool:
    """
    Whether this method must be called on an instance.
    """
        ...
    def isStatic(self) -> bool:
    """
    Whether this method should be called on a type instead of an instance.
    """
        ...
    def isProperty(self) -> bool:
    """
    Whether this is a "property method," declared using the `property()` syntax.
    
    @see MethodType#property
    """
        ...
    def isHttpHandler(self) -> bool:
    """
    Whether this is a "HTTP handler method," i.e. has a single parameter of type {@link HttpRequest} and any return
    """
        ...
    def hasAllCached(self) -> bool:
    """
    Whether all overloads are marked `cached`.
    """
        ...
    def hasAnyAbstract(self) -> bool:
    """
    Whether any overloads are declared, but not implemented, on its type.
    """
        ...
    def hasAnyOptional(self) -> bool:
    """
    Whether any overloads in this method does not have to be implemented by non abstract sub-type.
    """
        ...
    def hasAnyFinal(self) -> bool:
    """
    Whether some of the overloads can be re-declared on a type that mixes its type.
    """
        ...
    def isInline(self) -> bool:
    """
    Whether this method should execute inline when {@link #shouldStayInEngine staying in engine}.
    See {@link MethodType#inline} for documentation describing the semantics of inline.
    A `Method` is inline if any of its {@link #overloads} are {@link MethodType#inline inline} or its
    {@link #parentType} is {@link TypeMeta#isInline inline}.
    """
        ...
    def hasAnyMember(self) -> bool:
    """
    Whether some overloads must be called on an instance.
    """
        ...
    def hasAnyStatic(self) -> bool:
    """
    Whether some overload should be called on a type instead of instance.
    """
        ...
    def hasAnyImplementation(self) -> bool:
    """
    Whether this method has any implementation for any of the overloads.
    """
        ...
    def hasAnyJavaImplementation(self) -> bool:
    """
    Whether this method has any Java implementation for any of the overloads.
    """
        ...
    def hasKwargs(self) -> bool:
    """
    Whether this method can be invoked with keyword arguments.
    """
        ...
    def kwargsParam(self) -> Union[FunctionParam]:
    """
    If this method can be invoked with keyword arguments then parameter declaration for those args.
    """
        ...
    def kwargsParamIndex(self) -> Union[int]:
    """
    If this method can be invoked with keyword arguments then parameter declaration for those args.
    @return index of the only kwargs parameter, typically a Spec.
    """
        ...
    def implementedOn(self, actionEngine: str=None) -> Union[Array[Type]]:
    """
    Get the type(s) on which this method (any overload) is declared and is not abstract nor optional. If only an
    unimplemented method is declared, return empty array.
    
    Note that if the method is overloaded then the return [Type] could have more then one element; otherwise it will only have
    one element.
    
    @see MethodType#implementedOn
    """
        ...
    def implementedOnMeta(self, actionEngine: str=None) -> Union[Array[TypeMeta]]:
    """
    Get the type meta(s) on which this method (any overload) is declared and is not abstract nor optional. If only an
    unimplemented method is declared, return empty array.
    
    Note that if the method is overloaded then the return [Type] could have more then one element; otherwise it will only have
    one element.
    
    @see #implementedOn
    """
        ...
    def nearestImplementedOn(self, engine: str=None) -> Union[Type]:
    """
    Get the nearest type on which this method (any overload) is declared and is not abstract nor optional. If only an
    unimplemented method is declared, return null. "Nearest" is this type itself then mixins in canonical order.
    
    @see #implementedOn
    """
        ...
    def shouldStayInEngine(self, actionEngine: str) -> bool:
    """
    Get whether or not the method can be executed in the given engine based on the action claims. If only
    an unimplemented method is declared, return false.
    
    Note that this returns true only if all overloads are runnable in the specified engine.
    
    @see #implementedOn
    @see MethodType#shouldStayInEngine
    @see Ann.Call#stayInEngine
    """
        ...
    def canCacheReturn(self) -> bool:
    """
    Get whether or not the caller can safely cache the return value of this method. This is true if all overloads are
    explicitly marked with `cached` or none are marked `stateful`, and the method is not on a {@link Mutable} Obj.
    
    Note that if the method takes arguments, caching it requires comparing the argument values, including understanding
    multiple overloads.
    
    @see MethodType#cached
    @see MethodType#stateful
    @see MethodType#cachedKey
    @see MethodType#cachedFailIfMissing
    @see MethodType#cachedReturnNullIfNotCached
    """
        ...
    def isCached(self) -> bool:
    """
    Whether this is a cached Method. Cached methods are only called once per instance and results cached on an
    instance. A Method is cached if it {@link canCacheReturn can cache} and all of its {@link overloads} are
    {@link MethodType#cached cached}.
    """
        ...
    def cachedKey(self) -> Union[str]:
    """
    If this is a cached method, on what is the value keyed. If this method returns null, this means the value is
    cached once per instance, otherwise it is cached on the specified value:
     - `arg` the cache key is the first argument
    
    For the cache key, primitive values and Objs that mixin StringSerializable are converted to strings. Other Obj
    values must be identifiably keyed by strings (mixing in {@link WithCacheKey} or {@link WithKey}).
    
    @see #cached
    """
        ...
    def cachedFailIfMissing(self) -> bool:
    """
    Determine if this cached method has a "failIfMissing" parameter which needs local support when generating code
    for a cached method.
    
    @see #cached
    """
        ...
    def cachedReturnNullIfNotCached(self) -> bool:
    """
    Determine if this cached method has a "returnNullIfNotCached" parameter which needs local support when generating
    code for a cached method.
    
    @see #cached
    """
        ...
    def findOverloadForArgTypes(self, member: bool, types: Array[ValueType]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[MethodType]:
    """
    Find the overload that most closely matches the specified argument value types. If the argument types are not
    compatible with any overload, an error is thrown if failIfNoMatch is true or null otherwise.
    
    If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
    matches based on closeness of match as defined by this order:
    * ValueType#isSame
    * ValueType#isAssignableFrom
    * ValueType#isConvertibleFrom
    
    @param member if true, only match member methods; if false, only match static methods
    @param types actual argument value types to be passed; should not include implicit `this` argument type
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return overload signature or null
    """
        ...
    def findOverloadForJavaClasses(self, member: bool, classes: Array[Any]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[MethodType]:
    """
    Find the overload that most closely matches the specified argument Java classes. If the argument types are not
    compatible with any overload, an error is thrown if failIfNoMatch is true or null otherwise.
    
    If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
    matches based on closeness of match as defined by this order:
    * ValueType#isSame
    * ValueType#isAssignableFrom
    * ValueType#isConvertibleFrom
    
    Uses ValueType#guessTypeFromJavaClass to convert Java classes to ValueTypes.
    
    @param member if true, only match member methods; if false, only match static methods
    @param classes actual argument Java classes; should not include implicit `this` argument type
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return overload signature or null
    """
        ...
    @classmethod
    def argsJavaClassesHash(cls, member: bool, *args: Array[Any]) -> int:
    """
    Returns a hash for the Java **classes** of the supplied args (i.e. not the args themselves).
    This can be used to cache a MethodType (and/or MethodThunk) overload so that one of the `findOverloadForArg*`
    methods does not have to be called before every invocation of a given Method if the args hash is the same.
    
    @param member whether this hash is for a member or static method
    @param args actual argument values whose classes will be hashed
    
    @return hash for the args
    """
        ...
    def findOverloadForArgs(self, thsArg: Any=None, args: Array[Any]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[Triple[MethodType, Any, Array[Any]]]:
    """
    Find the overload that most closely matches the specified argument values. If the argument values are not
    compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
    
    Unlike #findOverloadForArgsMap, this method requires the values to be in order as declared by at least one
    of the overloads.
    
    If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
    matches based on closeness of match as defined by this order:
    * ValueType#isAssignableValue
    * ValueType#isConvertibleValue
    
    If an argument is null, then match score for it is less then ValueType#isConvertibleValue.
    
    @param thsArg the `this` argument
    @param args actual argument values to be passed; should not include implicit `this` argument
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
            the matched overload; i.e. method can be invoked without additional value conversion
    
    @see findOverloadForArgsMap
    """
        ...
    def findOverloadForArgsMap(self, kwargs: Map[str, Any]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[Triple[MethodType, Any, Array[Any]]]:
    """
    Find the overload that most closely matches the specified argument names/values. If the arguments are not
    compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
    
    Unlike #findOverloadForArgs, this method allows the arguments to be specified in any order and null values are
    generally not specified at all.
    
    @param kwargs actual argument name-to-value map to be passed including possible implicit `this` argument.
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
            the matched overload; i.e. method can be invoked without additional value conversion
    
    @see findOverloadForArgs
    """
        ...
    def findOverloadForArgsMix(self, thisArg: Any=None, args: Array[Any]=None, kwargs: Map[str, Any]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[Triple[MethodType, Any, Array[Any]]]:
    """
    Find the overload that most closely matches the specified argument names/values. If the arguments are not
    compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
    
    @param thisArg explicit `this` argument
    @param args positional arguments to be passed; should not include implicit `this` argument
    @param kwargs keyword arguments to be passed; should not include implicit `this` argument.
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
            the matched overload; i.e. method can be invoked without additional value conversion
    
    @see findOverloadForArgs
    @see findOverloadForArgsMap
    """
        ...
    def findOverloadForArgsJson(self, args: any=None, missingArgs: Array[bool]=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[Triple[MethodType, Any, Array[Any]]]:
    """
    Find the overload that most closely matches the specified argument names/values. If the arguments are not
    compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
    
    @param args can be only one of: null, json array or json object. If #args is an array then first element is `this`
           for member methods or `null` for statics. If #args is json map, then it should contain name-values of args
           including possible implicit `this` argument.
    @param missingArgs array of booleans to indicate if the corresponding argument is missing in the args.
    @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
    @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
            the matched overload; i.e. method can be invoked without additional value conversion
    
    @see findOverloadForArgs
    @see findOverloadForArgsMap
    """
        ...
    def findOverloadForArgsJsonMix(self, thisArg: any=None, args: any=None, kwargs: any=None, failIfNoMatch: bool=None, context: Callable[[], Union[str]]=None) -> Union[Triple[MethodType, Any, Array[Any]]]:
        ...
    def findOverloadForOverride(self, override: MethodType, failIfNotOverridden: bool=None) -> Union[MethodType]:
    """
    Find the overload for overridden method type from a sub type.
    """
        ...
    def findOverloadForSignature(self, func: str, failIfNotOverridden: bool=None) -> Union[MethodType]:
    """
    Find the index of provided overload. Note that it needs to be match one of the overloads exactly not i.e. may not
    find any overloads of method type is coming from a sub-type i.e. is override.
    
    @see #findOverloadForOverride
    """
        ...
    def mergeOverloads(self) -> FunctionType:
    """
    Merges overloads into a single "union signature", note this also handles translating {@link Spec} parameters to
    keyword only arguments
    """
        ...
    def mergedReturnType(self) -> Union[ValueType]:
    """
    Produces a merged type for the return value across all overloads. This will accommodate any of the overload
    return value types.
    """
        ...
    def returnIsStreamable(self) -> bool:
    """
    @return true if the method returns a stream of values
    """
        ...
    def hasStreamableParam(self) -> bool:
    """
    @return true if the function has a streaming parameter; this is typically a last parameter that can stream values
    """
        ...
    def scope(self) -> TypesysScope:
    """
    @return type system scope for building / binding declared fields and value types.
    """
        ...
    def hasAnyTargetFunc(self) -> bool:
    """
    @return true if this has at least one overload that has {@link MethodType#hasAnyTargetFunc}.
    """
        ...
    def shouldStayInThread(self, thisArg: Any, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> bool:
    """
    @return true if this method should be stay in the thread it was invoked in (i.e. not be dispatched to a different thread). It will return
            false if the current thread does not satisfy the node pool and thread pool requirements.
    """
        ...

