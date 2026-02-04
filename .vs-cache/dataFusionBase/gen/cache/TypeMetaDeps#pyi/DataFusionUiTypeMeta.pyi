#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.PgPartitionDef import PgPartitionDef
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.DslComment import DslComment
from c3.platform.Promise import Promise
from c3.platform.TypeMetaDeps import TypeMetaDeps
from c3.dataFusionBase.DataFusionUiDeclaredFieldTypeUiSettings import DataFusionUiDeclaredFieldTypeUiSettings
from c3.platform.MapBuilder import MapBuilder
from c3.platform.TypesysScope import TypesysScope
from c3.platform.BitSet import BitSet
from c3.platform.SetBuilder import SetBuilder
from c3.platform.WithKey import WithKey
from c3.platform.Expr.Compiled import Expr.Compiled
from c3.platform.TypeDocumentation import TypeDocumentation
from c3.platform.FieldType import FieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.TypeMeta.Db import TypeMeta.Db
from c3.platform.ValueType import ValueType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.PrimitiveType import PrimitiveType
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DslPrintSpec import DslPrintSpec
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SetType import SetType
from c3.platform.Db.Index import Db.Index
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.TypeDefaultUi import TypeDefaultUi
from c3.platform.VarReferenceType import VarReferenceType
from c3.platform.DeclaredReferenceType import DeclaredReferenceType
from c3.platform.MapType import MapType
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor
from c3.platform.Exclude import Exclude
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Annotatable import Annotatable
from c3.platform.DocumentationParserSpec import DocumentationParserSpec
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MethodType import MethodType
from c3.platform.InferTypeSpec import InferTypeSpec
from c3.platform.Annotations import Annotations
from c3.platform.Pkg.Path import Pkg.Path
from c3.platform.Documentable import Documentable
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.Pair import Pair
from c3.platform.Typesys import Typesys
from c3.platform.Method import Method
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.Pkg.Issue import Pkg.Issue
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Db.Domain import Db.Domain
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.TupleType import TupleType
from c3.platform.Collection import Collection
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.dataFusionBase.DataFusionUiDeclaredFieldType import DataFusionUiDeclaredFieldType
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.AnyOfType import AnyOfType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.HierDenormTarget import HierDenormTarget
from c3.platform.Expr import Expr
from c3.platform.TypeBackwardDep import TypeBackwardDep

# Python definitions for the C3 type DataFusionUiTypeMeta


class DataFusionUiTypeMeta(TypeMeta):
    """
    A UI wrapper to represent {@link TypeMeta}
    
    @remarks this represents a made instance of DataFusionUiTypeMeta
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

    name: Optional[str]=None
    """
    The name of this type, which will be unique within its package. For most types, there will be simply the declared
    name (`User`). For nested inner types, this will include the parent type name (`Parent.Child`). For bound types,
    the bindings will be incorporated into the name (`NormTimeseries<float>`).
    
    Note that #name could be null for dynamic types that are not part of any package.
    
    @see #prototypeName
    @see #innerTypeName
    @see #qname
    """

    varBindings: Optional[Map[str, ValueType]]=None
    """
    The map of variable bindings applied.
    
    It is possible to have bind variable re-named. I.e. to have varBinding that itself is a variable of different name.
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

    comments: Optional[Array[DslComment]]=None
    """
    All comments associated with this type system element.
    """

    declaredNative: Optional[bool]=None
    """
    True if this type is declared `native`. This means that its implementation is particular to a certain language
    and perhaps even {@Link Action.Requirement}, and is not available in others.
    
    ```type
    native type BrowserUtil
    native py remix type DataFrame
    ```
    
    @see #isNativeRemix
    """

    declaredEntity: Optional[bool]=None
    """
    True if this type is declared as entity type. This means it may not be persisted in the database. Entity types
    implicitly mixin {@link Persistable}.
    
    @see Persistable
    """

    declaredEnum: Optional[bool]=None
    """
    If true, this type is a declared as enum type:
    ```type
    enum type Colors { RED YELLOW GREEN BLUE }
    ```
    
    @see Enum
    """

    declaredUnionAlts: Optional[AnyOfType]=None
    """
    If set, this type is declared as a union type:
    ```type
    union type Stringish = string | [string]
    ```
    
    @see Union
    """

    declaredDuck: Optional[bool]=None
    """
    If true, this type is a "duck type". I.e. mixin pattern in any other type that is matching to this duck type will
    be replaced by this type.
    
    E.g. type-system among others defines following duck types:
    * `abstract entity duck type CachedPersistable mixes Cached`
    * `duck type StrStream mixes Stream<string>`
    
    This means any entity type that is also `Cached` will actually mixin `CachedPersistable` and any method that is
    returning `stream<string>` will actually return instance of `StrStream`
    
    @see #isDuckType
    """

    declaredAbstract: Optional[bool]=None
    """
    True if this type is declared abstract. This means it may not be instantiated separately, but can be a mixin of
    another type.
    
    Abstract methods declared in mixin types of an abstract type continue to be abstract. Normally abstract methods are
    claimed by a sup-type unless those methods are explicitly re-declared as abstract using `<myMethod>: abstract ~`
    syntax.
    
    Note that mixin of abstract type does not make sub-type automatically be abstract.  If such a type is also
    abstract, it must be explicitly marked.
    
    @see FieldType#abstract
    """

    declaredInline: Optional[bool]=None
    """
    True if this type's methods are automatically inline. This is a **shortcut** for marking every "declared" method
    as *inline* and these methods will be inline in all of the subtypes of the current type even if the subtype may
    not be inline. This should only be used for performance critical types whose methods never need authorization and
    don't expect any support for argument or return value processing.
    
    Please note that **overridden methods in an inline type DO NOT automatically become inline.** e.g
    ```c3typ
    type Boo {
      bar: function()
      baz: member function()
    }
    
    inline type Foo mixes Boo {
       bar: inline ~
       baz: ~
    }
    ```
    In the above code, Foo.bar is inline while Foo.baz is not. Boo.bar and Boo.baz both are not inline.
    
    @see #isInline
    @see MethodType#inline
    @see MethodType#isInline
    """

    declaredFinal: Optional[bool]=None
    """
    True if this type is declared final. This means that none of its data fields or methods may be changed by types
    that mix it in. Note that a type itself may not be final, but may also declare certain fields final.
    
    @see FieldType#isFinal
    @see Method#isFinal
    @see #notMixable
    """

    declaredPrivate: Optional[bool]=None
    """
    True if this type is a private type. This means that it may not be used outside of its declaring package.
    
    @see FieldType#private
    """

    declaredExtendable: Optional[bool]=None
    """
    Indicates that a type is extendable.  Extendable types allow the creation of a type hierarchy where more specific
    types extend less specific type (e.g. Hospital extends Facility extends FixedAsset).
    
    Extendable types are typically entity types and shares the same database table / storage and base type can be
    queried to retrieve all instances of all sub-types.
    
    Setting this type modifier implicitly mixes {@link Extendable}.
    
    @see #declaredNotExtendable
    """

    declaredNotExtendable: Optional[bool]=None
    """
    True if this type may not be further extended. Note that this only makes sense for types which themselves extend
    a type (marked as `extendable`), but don't allow further extension.
    
    ```type
    extendable entity type Fruit
    type StoneFruit extends Fruit
    not extendable type Cherry extends StoneFruit
    ```
    In the example, above Cherry may not further be extended.
    
    @see #declaredExtendable
    """

    declaredExtendsRefType: Optional[DeclaredReferenceType]=None
    """
    Reference to a base type this type extends.
    
    @see #baseType
    @see #isExtendable
    @see #isNotExtendable
    """

    declaredNotMixable: Optional[bool]=None
    """
    True if this type may not be mixed into any other types outside the declaring package. This is used by certain
    types that the system needs to know cannot have new sub-types declared.
    """

    declaredMixinRefTypes: Optional[Array[DeclaredReferenceType]]=None
    """
    References to other types that this type directly mixes in.
    
    @see #mixins
    @see #inNotMixable
    """

    declaredRemix: Optional[bool]=None
    """
    If true, this type is a remix of one with the same name in one of the packages this package depends on.
    
    A remix means the definitions augment the base definitions when provisioned. Otherwise, it is an error to have the
    same type defined multiple times within the same tag (aka deployment unit). I.e. given package can not simply
    declare an new type with the same name as in one of it's depending packages.
    
    @see #isNotRemixable
    """

    declaredNotRemixable: Optional[bool]=None
    """
    True if this type may not be remixed. This is used by certain types that the system needs to know cannot be
    changed from outside the package.
    """

    declaredRemixAlias: Optional[str]=None
    """
    If this type was remixed by one or more remixes and type is specifying an alias, then all the aliases.
    ```type
    remix type Foo as OtherFoo
    ```
    In the above example, the remixed type is "Foo" with an alias "OtherFoo".
    """

    declaredTypeKey: Optional[str]=None
    """
    For extendable types, the key used to identify the type's position in the hierarchy.  The value contributes to
    the {@link Extendable.typeIdent} field so that an instance's leaf type can be determined without having
    {@link Obj.type} field value.
    """

    declaredFieldTypes: Optional[Array[DataFusionUiDeclaredFieldType]]=None
    """
    A wrapper around {@link DeclaredFieldType}
    """

    declaredInnerTypes: Optional[Array[Any]]=None
    """
    Types defined directly within this type. For example {@link Ann} has inner types for all possible annotations.
    """

    declaredNativeRemixes: Optional[Map[str, Any]]=None
    """
    Types that are implementation language native remixes of this type.
    """

    declaredRemixes: Optional[Map[str, Any]]=None
    """
    Types that are remixes of this type along with pkg they were declared in.
    For example, if package "app", depends on "industry", which depends on "foundation", and `Facility` was defined in
    "foundation" and remixed in "app", then
    ```js
    C3.type("Facility").declaredRemixes.size() == 1
    C3.type("Facility").declaredRemix == false
    C3.type("Facility").package == 'foundation'
    C3.type("Facility").declaredRemixes.keys().collect() == ['app']
    C3.type("Facility").declaredRemixes.get("app").declaredRemix == true
    C3.type("Facility").declaredRemixes.get("app").package == 'app'
    ```
    
    @see #declaredRemix
    """

    declaredSourceCode: Optional[Map[str, str]]=None
    """
    Method(s) implementation source code. The key is the language name and the value is the source code for all
    functions implemented in that language on this type.
    """

    declaredVars: Optional[Array[VarReferenceType]]=None
    """
    The list of unbound variable declarations and any restrictions on them.
    """

    declaredMetaRestriction: Optional[str]=None
    """
    _meta_ restriction for this type.
    """

    declaredNativeRequirement: Optional[str]=None
    """
    If this is a native remix type, the {@Link Action.Requirement} for which the native implementation is defined.
    
    ```type
    py native remix type DataFrame
    ```
    
    The native remix type PyDataFrame is native to the "py" {@Link Action.Requirement}
    """

    declaredSchemaName: Optional[str]=None
    """
    Name of the underlying schema (e.g. database table name)
    """

    defaultActionRequirement: Optional[str]=None
    """
    A type may globally specify a default implementation language and {@Link Action.Requirement}:
    
    ```type
    js-browser type ConsoleGrid
    ```
    
    This means that all methods without explicit claims, both declared and inherited abstract, are claimed for
    the type's default {@Link Action.Requirement}, "js-browser" in this case. This is very convenient for types with lots of methods
    all of which are implemented in the same language.
    
    @see MethodType#actionRequirementNames
    """

    _staticsCache: Optional[Any]=None

    _sourceCodeCache: Optional[Any]=None
    def __init__(self, declaredPkgPath: Optional[str]=None, declaredSrcLine: Optional[int]=None, declaredSrcCharInLine: Optional[int]=None, pkg: Optional[Pkg]=None, json: Optional[Any]=None, name: Optional[str]=None, varBindings: Optional[Map[str, ValueType]]=None, annotationsJson: Optional[any]=None, doc: Optional[str]=None, docSingleLine: Optional[bool]=None, comments: Optional[Array[DslComment]]=None, declaredNative: Optional[bool]=None, declaredEntity: Optional[bool]=None, declaredEnum: Optional[bool]=None, declaredUnionAlts: Optional[AnyOfType]=None, declaredDuck: Optional[bool]=None, declaredAbstract: Optional[bool]=None, declaredInline: Optional[bool]=None, declaredFinal: Optional[bool]=None, declaredPrivate: Optional[bool]=None, declaredExtendable: Optional[bool]=None, declaredNotExtendable: Optional[bool]=None, declaredExtendsRefType: Optional[DeclaredReferenceType]=None, declaredNotMixable: Optional[bool]=None, declaredMixinRefTypes: Optional[Array[DeclaredReferenceType]]=None, declaredRemix: Optional[bool]=None, declaredNotRemixable: Optional[bool]=None, declaredRemixAlias: Optional[str]=None, declaredTypeKey: Optional[str]=None, declaredFieldTypes: Optional[Array[DataFusionUiDeclaredFieldType]]=None, declaredInnerTypes: Optional[Array[Any]]=None, declaredNativeRemixes: Optional[Map[str, Any]]=None, declaredRemixes: Optional[Map[str, Any]]=None, declaredSourceCode: Optional[Map[str, str]]=None, declaredVars: Optional[Array[VarReferenceType]]=None, declaredMetaRestriction: Optional[str]=None, declaredNativeRequirement: Optional[str]=None, declaredSchemaName: Optional[str]=None, defaultActionRequirement: Optional[str]=None, _staticsCache: Optional[Any]=None, _sourceCodeCache: Optional[Any]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> DataFusionUiTypeMeta:
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
    @overload
    @classmethod
    def fromJson(cls, json: any) -> Union[DataFusionUiTypeMeta]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @overload
    @classmethod
    def fromJson(cls, json: any, pkg: Pkg) -> Union[DataFusionUiTypeMeta]:
    """
    Load the JSON-based representation of TypeMeta.
    """
        ...
    @overload
    @classmethod
    def fromJsonString(cls, json: str) -> Union[DataFusionUiTypeMeta]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @overload
    @classmethod
    def fromJsonString(cls, json: str, pkg: Pkg) -> Union[DataFusionUiTypeMeta]:
    """
    Load the JSON-based representation of TypeMeta.
    """
        ...
    @overload
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[DataFusionUiTypeMeta]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @overload
    @classmethod
    def fromXmlString(cls, xml: str, pkg: Pkg) -> Union[DataFusionUiTypeMeta]:
    """
    Load the XML-based representation of TypeMeta.
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[DataFusionUiTypeMeta]:
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
    @overload
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isSame(self, other: Type) -> bool:
    """
    Whether the specified type represents exactly the same instance as this type. This is the strictest form of
    compatibility, representing identical declaration.
    
    @see #isCoercible
    """
        ...
    @overload
    def isSame(self, other: str) -> bool:
    """
    Whether the specified type represents exactly the same instance as this type. This is the strictest form of
    compatibility, representing identical declaration.
    
    @see #isCoercible
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataFusionUiTypeMeta:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataFusionUiTypeMeta:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataFusionUiTypeMeta]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataFusionUiTypeMeta]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> DataFusionUiTypeMeta:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataFusionUiTypeMeta:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataFusionUiTypeMeta:
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
    def validateObj(self) -> DataFusionUiTypeMeta:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> DataFusionUiTypeMeta:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> DataFusionUiTypeMeta:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> DataFusionUiTypeMeta:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> DataFusionUiTypeMeta:
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
    def withoutFieldAtPath(self, path: str) -> DataFusionUiTypeMeta:
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
    def withoutField(self, field: str) -> DataFusionUiTypeMeta:
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
    def withoutField(self, field: FieldType) -> DataFusionUiTypeMeta:
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
    def withoutFields(self, fields: Array[str]) -> DataFusionUiTypeMeta:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> DataFusionUiTypeMeta:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> DataFusionUiTypeMeta:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> DataFusionUiTypeMeta:
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
    def defaultField(self, field: str) -> DataFusionUiTypeMeta:
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
    def defaultField(self, field: FieldType) -> DataFusionUiTypeMeta:
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
    def unsetField(self, field: str) -> DataFusionUiTypeMeta:
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
    def unsetField(self, field: FieldType) -> DataFusionUiTypeMeta:
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
    def removeField(self, field: str) -> DataFusionUiTypeMeta:
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
    def removeField(self, field: FieldType) -> DataFusionUiTypeMeta:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> DataFusionUiTypeMeta:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> DataFusionUiTypeMeta:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> DataFusionUiTypeMeta:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> DataFusionUiTypeMeta:
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
    def mergeJson(self, json: any) -> DataFusionUiTypeMeta:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> DataFusionUiTypeMeta:
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
    def sumObj(self, other: Obj, deep: bool=None) -> DataFusionUiTypeMeta:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[DataFusionUiTypeMeta]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[DataFusionUiTypeMeta]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[DataFusionUiTypeMeta]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[DataFusionUiTypeMeta]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[DataFusionUiTypeMeta]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, DataFusionUiTypeMeta]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, DataFusionUiTypeMeta]]:
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
    def toBuilder(self) -> ObjBuilder[DataFusionUiTypeMeta]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[DataFusionUiTypeMeta]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> DataFusionUiTypeMeta:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> DataFusionUiTypeMeta:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> DataFusionUiTypeMeta:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> DataFusionUiTypeMeta:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> DataFusionUiTypeMeta:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> DataFusionUiTypeMeta:
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
    @classmethod
    def make(cls, s: str) -> Union[DataFusionUiTypeMeta]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @overload
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> DataFusionUiTypeMeta:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    @overload
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool, pkg: Pkg) -> DataFusionUiTypeMeta:
    """
    Construct an instance of TypeMeta from provided instance of a subtype or a "duck type".
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
    def afterMake(self) -> DataFusionUiTypeMeta:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> DataFusionUiTypeMeta:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[DataFusionUiTypeMeta]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> DataFusionUiTypeMeta:
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
    def withoutDeclaredSrcPos(self, recursive: bool=None) -> DataFusionUiTypeMeta:
    """
    @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
    """
        ...
    def isGeneric(self) -> bool:
    """
    @return whether this type is parametric
    """
        ...
    def isNarrowed(self) -> bool:
    """
    Whether or not this type has a generic prototype from which it was narrowed i.e. if all its generic variables are
    bound. Note that when it has neither unbound nor bound variables it is neither generic nor narrowed.
    """
        ...
    def isNarrowedToAny(self) -> bool:
    """
    Whether or not all variables are bound to `any` or to the variable's restriction.
    
    @see #bindAll
    """
        ...
    def prototype(self) -> DataFusionUiTypeMeta:
    """
    Generic Type from which this type was bound / narrowed.
    
    For example, `NormTimeseries<double>` type #prototype set to unbound `NormTimeseries`.
    
    @see #name
    @see #prototypeName
    """
        ...
    def vars(self) -> Union[Array[VarReferenceType]]:
    """
    The list of unbound variables and any restrictions on them.
    """
        ...
    def varsByName(self) -> Union[Map[str, VarReferenceType]]:
    """
    The map of unbound variables by name.
    """
        ...
    def var(self, var: str, failIfMissing: bool=None) -> Union[VarReferenceType]:
    """
    Get a single unbound variable reference by name.
    """
        ...
    def varAt(self, var: int, failIfMissing: bool=None) -> Union[VarReferenceType]:
    """
    Get a single unbound variable reference at index.
    """
        ...
    @overload
    def varIndex(self, var: str, failIfMissing: bool=None) -> int:
    """
    Get a single unbound variable index in the #vars array.
    """
        ...
    @overload
    def varIndex(self, mixin: Type, var: str, failIfMissing: bool=None) -> int:
    """
    Get a single unbound variable index in the #vars array based on a var name for a given mixin.
    """
        ...
    @overload
    def varIndex(self, mixin: str, var: str, failIfMissing: bool=None) -> int:
        ...
    def isVar(self, var: str) -> bool:
    """
    Whether or not the provided variable name is an unbound generic variable.
    """
        ...
    def hasVarBinding(self, var: str) -> bool:
    """
    Return whether or not given generic variable has a binding.
    
    @see #bindVar
    """
        ...
    def hasVarBindings(self) -> bool:
    """
    Return whether or not any generic variables have bindings.
    
    @see #bindVar
    """
        ...
    @overload
    def varBinding(self, var: str, failIfUnbound: bool=None) -> Union[ValueType]:
    """
    Get a single variable binding value. Note that the value may be null if unbound or may not be fully bound if
    given variable was bound to another generic variable.
    
    @param var name of the generic variable
    """
        ...
    @overload
    def varBinding(self, indx: int, failIfUnbound: bool=None) -> Union[ValueType]:
    """
    Get a single variable binding value at provided index in declared variables array. Note that the value may be null
    if unbound or if variable at index was bound to another generic variable.
    
    @param index of a generic variable
    """
        ...
    @overload
    def varBinding(self, mixin: Type, var: str, failIfUnbound: bool=None) -> Union[ValueType]:
    """
    Get a single variable binding value for the specified type. The specified type may be the same type or a mixin.
    Note that the specified type is the one that declares the generic variable. The type on which the method is called
    may be one that mixes in that type or a bound version of that type.
    
    For example, on `Range<datetime>` both forms will return `datetime`:
     - `type.meta().varBinding(Range, "V")`
     - `type.meta().varBinding("V")`
    
    However, {@link IntRange} has no generic binding itself, but binds its mixin {@link Range}:
     - `IntRange.meta().varBinding("V")` returns null
     - `IntRange.meta().varBinding(Range, "V")` returns `int`
    
    The combination of type and variable name is unique, even for a type that mixes in multiple generic types that
    use the same variable name.
    
    Type adds this overload to the base method in {@link Generic}.
    
    @param mixin the type to get the binding for
    @param var name of the variable on the specified type
    @param failIfUnbound if true, throw an error if the variable is not found or not fully bound
    """
        ...
    @overload
    def varBinding(self, mixin: str, var: str, failIfUnbound: bool=None) -> Union[ValueType]:
        ...
    @overload
    def bindVar(self, var: str, binding: ValueType) -> DataFusionUiTypeMeta:
    """
    Bind a single variable to the specified value type and return a new instance. The result may still be generic if
    there are remaining unbound variables.
    """
        ...
    @overload
    def bindVar(self, binding: ValueType, *bindings: Array[ValueType]) -> DataFusionUiTypeMeta:
    """
    Bind a first variable to the specified value type and return a new instance. The result may still be generic if
    there are remaining unbound variables.
    """
        ...
    @overload
    def bindVar(self, serializedBinding: str) -> DataFusionUiTypeMeta:
        ...
    def bindVars(self, bindings: Array[ValueType]) -> DataFusionUiTypeMeta:
    """
    Bind all variables to the specified value types and return a new instance. Bindings are applied in the declaration
    / mixin order
    """
        ...
    def bindAll(self) -> DataFusionUiTypeMeta:
    """
    Bind all variables to `any` or to variable restriction
    """
        ...
    def buildName(self) -> str:
    """
    @return name if this generic based on structure of it
    """
        ...
    def prototypeNameWithBindings(self) -> str:
    """
    @return prototype name with bindings
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
    def withAnnotation(self, ann: Annotation) -> DataFusionUiTypeMeta:
    """
    Add an annotation to the given metadata
    """
        ...
    @overload
    def withAnnotation(self, ann: str, annField: str=None, value: Any=None) -> DataFusionUiTypeMeta:
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
    def docParsed(self, spec: DocumentationParserSpec=None) -> TypeDocumentation:
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
    @overload
    def toString(self) -> str:
    """
    TypeMeta.toString will build the DSL type declaration string.
    @see #fromString
    """
        ...
    @overload
    def toString(self, spec: DslPrintSpec) -> str:
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[DataFusionUiTypeMeta]:
    """
    TypeMeta.fromString will build a type instance from a valid DSL declaration string.
    @see #toString
    """
        ...
    def cacheKey(self) -> Union[str]:
    """
    The name of this instance.
    """
        ...
    def db(self, failIfNotEntityType: bool=None) -> Union[TypeMeta.Db]:
    """
    Additional metadata specific to entity types.
    """
        ...
    def isNoSystemCols(self) -> bool:
    """
    @return True if type mixes NoSystemCols
    """
        ...
    def isPersistableUpsertHelper(self) -> bool:
        ...
    def isInvalidationDisabled(self) -> bool:
        ...
    def isNoMetaOverrideType(self) -> bool:
        ...
    def isSearchable(self) -> bool:
    """
    Returns true if the type mixes {@link Searchable}
    """
        ...
    def isHierDenormTarget(self) -> bool:
    """
    @return true if this type has a hierarchy denorm target.
    Beneficial since Type system cache does not cache null values
    """
        ...
    def canPersistKvRaw(self) -> bool:
    """
    @return true if the type is in the KV datastore and persistence can be optimized persisting the input raw values
            (e.g no boxing of primitive values for fields with the "any" value type.
    """
        ...
    def hasPersistableId(self) -> bool:
    """
    @return True if the type has the field `id` and it's persistable.
    """
        ...
    def hasPersistableName(self) -> bool:
    """
    @return True if the type has the field `name` and it's persistable.
    """
        ...
    def hasPersistableMeta(self) -> bool:
    """
    @return True if the type has the field `meta` and it's persistable.
    """
        ...
    def hasPersistableTypeWithBindings(self) -> bool:
    """
    @return True if the type (or one of its base types) has generic bindings
    """
        ...
    def hasViewIncludeOrFilter(self) -> bool:
    """
    @return true if the type has a viewFilter or viewInclude specified
    """
        ...
    def hasShortId(self) -> bool:
        ...
    def persistTypeWithBindings(self) -> bool:
    """
    @return True if instances of this type should persist the specific type bindings.  Note that for types that extend
    this type and specify the bindings in the type definition will return false.
    """
        ...
    def persistDuplicates(self) -> bool:
    """
    @return false if duplicates should be removed when persisting instances of this type
    """
        ...
    def keepVersionHistory(self) -> bool:
    """
    @return True if the type is configured to retain a history of edits to each obj.
    """
        ...
    def rootC3TableName(self) -> Union[str]:
    """
    @return Table name for non-external entity types (e.g. includes "C3_2_" prefix).
    """
        ...
    def collectionTables(self) -> Union[Map[str, str]]:
    """
    @return a map of all tables used for persisted collections, keyed by the field path for the collection field.
    """
        ...
    def indexes(self, unique: bool=None) -> Union[Array[Db.Index]]:
    """
    @param unique
           If true, return unique indexes else non-unique indexes.
    
    @return list of indexes defined for this type in the @db(index) extension.
    """
        ...
    def datastore(self) -> Union[str]:
    """
    @return the value specified in {@link Ann.Db#datastore} (if any) or overridden in the Db.Domain.  This will
            currently be "kv" for data persisted in the KV store, null by default for data persisted in the c3 managed
            relational datastore, or the name of a specific datastore.
    """
        ...
    def secondaryDatastore(self) -> Union[str]:
    """
    The datastore to maintain a parallel synchronized copy of the data for the type, typically to a system like
    Redshift for advanced analytic querying capabilities.
    """
        ...
    def pgPartition(self) -> Union[PgPartitionDef]:
    """
    @return the {@link PgPartitionDef} for the type if it is defined and valid.
    """
        ...
    def uniqueConstraints(self) -> Union[Array[Array[FieldPath]]]:
    """
    @return list of unique indexes defined for this type in the db extension. Each entry will be an array of fields in
    the unique index.  Index fields can optionally refer to a field of an included reference and that's why FieldPath
    is used
    """
        ...
    def shortIdPrefix(self) -> Union[str]:
        ...
    def shortIdSuffixType(self) -> Union[str]:
        ...
    def shortIdReservationRange(self) -> Union[int]:
        ...
    def allUniqueConstraintFields(self) -> Union[Set[FieldPath]]:
    """
    @return set of all fields used in any of the unique field sequences
    """
        ...
    def persistableCollectionFields(self) -> Union[Array[FieldPath]]:
    """
    @return List of all collection fields (including nested) that are persisted in this type.
    """
        ...
    def textSearchFields(self) -> Union[Array[FieldPath]]:
    """
    @return list of all fields that have the textSearchField db annotation. For Postgres, a full text search index
            will be created
    """
        ...
    def primaryKeyFields(self) -> Union[Array[FieldPath]]:
    """
    @return the list of fields comprising the primary key. If the type has a composite key, it will be the fields
            defined in the key type. Otherwise the id field will be returned for persistable types. For
            non-persistable fields, an empty array is returned.
    """
        ...
    def readCalcFields(self) -> Union[Array[FieldPath]]:
    """
    @return The set of all read calc fields in this type
    """
        ...
    def storedCalcFields(self, inclExtBaseFields: bool=None) -> Union[Array[FieldPath]]:
    """
    Gets the set of all stored calc fields in this type and, optionally, any of its extension base types
    """
        ...
    def periodicCalcFields(self, inclExtBaseFields: bool=None) -> Union[Array[FieldPath]]:
    """
    Gets the set of all stored calc fields that specify a fixed period for recalc in this type and, optionally, any of
    its extension base types
    """
        ...
    def scheduledCalcFields(self, inclExtBaseFields: bool=None) -> Union[Array[FieldPath]]:
    """
    Gets the set of all stored calc fields that specify a fixed schedule for recalc in this type and, optionally, any
    of its extension base types
    """
        ...
    def timedValueFields(self, inclExtBaseFields: bool=None) -> Union[Array[str]]:
    """
    Gets the set of all fields in this type and, optionally, any of it's extension base types that have
    the @db(timedValueHistoryField) annotation
    
    @param inclExtBaseFields
           true indicates that fields defined in extension base types for the type should be included. False
           means that only fields defined in the type itself should be returned.
    @return the set of all fields in this type and, optionally, any of it's extension base types that have the
    @db(timedValueHistoryField) annotation
    """
        ...
    def timedValueHistoryFields(self, inclExtBaseFields: bool=None) -> Union[Map[str, str]]:
    """
    Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
    referenced in a @db(timedValueHistoryField) annotation for a timed value field
    
    @param inclExtBaseFields
           true indicates that fields defined in extension base types for the type should be included. False
           means that only fields defined in the type itself should be returned.
    @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
            referenced in a @db(timedValueHistoryField) annotation for a timed value field
    """
        ...
    def timedValueFieldForHistoryField(self, field: str) -> Union[str]:
    """
    Get the timed value history field for the specified timed value field.
    
    @param field
           The timed value field.
    
    @return The timed value history field for the specified timed value field.  If the specified field is not a timed
            value field, or is not associated with a history field, null is returned.
    """
        ...
    def timedCharacteristicFields(self, inclExtBaseFields: bool=None) -> Union[Array[str]]:
    """
    Gets the set of all fields in this type and, optionally, any of it's extension base types that have
    the @db(timedCharacteristicHistoryField) annotation
    
    @param inclExtBaseFields
           true indicates that fields defined in extension base types for the type should be included. False
           means that only fields defined in the type itself should be returned.
    @return the set of all fields in this type and, optionally, any of it's extension base types that have the
    @db(timedCharacteristicHistoryField) annotation
    """
        ...
    def timedCharacteristicHistoryFields(self, inclExtBaseFields: bool=None) -> Union[Map[str, str]]:
    """
    Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
    referenced in a @db(timedCharacteristicHistory) annotation for a timed characteristic field
    
    @param inclExtBaseFields
           true indicates that fields defined in extension base types for the type should be included. False
           means that only fields defined in the type itself should be returned.
    @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
            referenced in a @db(timedCharacteristicHistoryField) annotation for a timed characteristic field
    """
        ...
    def timedCharacteristicFieldForHistoryField(self, field: str) -> Union[str]:
    """
    Get the timed characteristic history field for the specified timed characteristic field.
    
    @param field
           The timed characteristic field.
    
    @return The timed characteristic history field for the specified timed characteristic field.  If the specified
            field is not a timed characteristic field, or is not associated with a history field, null is returned.
    """
        ...
    def timedValuesParent(self) -> Union[Map[str, Array[str]]]:
    """
    @return a map of timed value parent types/fields grouped by source type.
    """
        ...
    def timedCharacteristicsParent(self) -> Union[Map[str, Array[str]]]:
    """
    Returns a map of timed characteristic parent types/fields grouped by source type.
    """
        ...
    def fieldsWithInclude(self) -> Union[Array[FieldPath]]:
    """
    @return List of all fields that specify the {@link Ann.Db#include} annotation.
    """
        ...
    def fkeyParents(self) -> Union[Map[Type, Array[str]]]:
    """
    Map, keyed by types that have fkey fields with this type as a reference type, where each element is the list of
    the fkey field names.
    """
        ...
    def calcBwdDeps(self) -> Union[Array[TypeBackwardDep]]:
    """
    @return calc field backward dependencies for a type
    """
        ...
    def calcBwdDepsByPathKey(self) -> Union[Map[str, TypeBackwardDep]]:
    """
    @return calc field backward dependencies for all calc fields of a type
    """
        ...
    def calcBwdDepsForType(self, type: TypeMeta) -> Union[Array[TypeBackwardDep]]:
    """
    @return calc field backward dependencies for only calc fields that depend on a specific type
    """
        ...
    def rewrittenCalcFieldExpr(self, origExpr: str) -> Union[Any]:
    """
    @return a calc field expression rewritten to replace type casting with typeIdent checks.  Note this only returns
            a rewritten expression if there were replaced type casts.
    
    FOR INTERNAL USE ONLY
    """
        ...
    def triggeringFields(self, queueType: Type, includeBaseTypes: bool=None, includeExtensionTypes: bool=None, ignoreSelfDeps: bool=None, forBeforeUpdate: bool=None) -> Union[Set[str]]:
    """
    Determines the set of fields that trigger invalidation for the specified queue.
    
    @param queueType
           Queue type to check invalidation for.
    @param includeBaseTypes
           If true, base type fields will also be included.
    @param includeExtensionTypes
           If true, extension types will also be included.
    @param ignoreSelfDeps
           If true, self deps (e.g. deps that have no parent) will be ignored.
    @param forBeforeUpdate
           If true, only looking for deps that should be triggered during the beforeUpdate phase.
    
    @return the set of fields that trigger invalidation for the specified queue
    """
        ...
    def _triggeringFields(self, scenario: str) -> Union[Set[str]]:
    """
    Determines the set of fields that trigger invalidation for the specified key.
    
    @param key
           key describing trigger scenario
    
    @return the set of fields that trigger invalidation for the specified key.
    """
        ...
    def hierDenormTarget(self) -> Union[HierDenormTarget]:
    """
    @return the hierarchy denorm type for this type's hierarchy
    """
        ...
    def aclBwdDeps(self) -> Union[Array[TypeBackwardDep]]:
    """
    @return acl backward dependencies for a type
    """
        ...
    def validateSchema(self) -> bool:
    """
    Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
    
    @return true if the schema was updated in this JVM/app
    """
        ...
    def validateKvSchema(self) -> bool:
    """
    Called by platform when a Kv type is accessed to ensure that its schema is up to date.
    
    @return true if the schema was updated in this JVM/app (result of first call is cached return value).
    """
        ...
    def doValidateSchema(self) -> bool:
    """
    Called by {@link validateSchema} to validate the schema for a type and all its extension types.
    
    @return true if the schema was updated in this JVM for the type and current app code (result of first call is
            cached return value).
    """
        ...
    def dbEngineConstraintFields(self, newRecord: bool=None) -> Union[Array[FieldType]]:
    """
    @return List of all fields that the db engine enforces constraints on.
    """
        ...
    def useSimpleDbEngineConstraintCheck(self, newRecord: bool=None) -> bool:
    """
    @return true if all of the db engine constraint fields are "simple" (e.g. don't involve included references).
    """
        ...
    def compositeKeyType(self) -> Union[Type]:
    """
    @return The composite key type for the type, if any. The composite key type is the type in the mixin chain that
            directly mixes CompositeKey. For CompositeKey types themselves, this will return itself.
    """
        ...
    def compositeKeyFields(self) -> Union[Array[FieldPath]]:
    """
    @return the list of fields comprising the composite key, For any type that isA composite key and an empty
            array otherwise.
    """
        ...
    def fkeyFields(self) -> Union[Array[FieldPath]]:
    """
    @return a list of all fields that are fkey fields (both array and single ref)
    """
        ...
    def fkeyRefFilter(self, field: str) -> Union[str]:
    """
    Db Extension: @return filter spec to be used for a read only fkey relationship.
    """
        ...
    def fkeyRefLimit(self, field: str) -> int:
    """
    Db Extension: @return limit to be used for a read only fkey relationship.
    """
        ...
    def fkeyRefFkey(self, field: str) -> Union[str]:
    """
    Db Extension: @return field path that is a foreign key in the reference type for a read only one to many
    relationship.
    """
        ...
    def fkeyRefKey(self, field: str) -> Union[str]:
    """
    Db Extension: @return field path that is a key in the source type for a read only one to many relationship.
    """
        ...
    def fkeyRefOrder(self, field: str) -> Union[str]:
    """
    Db Extension: @return order spec to be used for a read only one to many relationship.
    """
        ...
    @overload
    def isFkeyRefArray(self, field: str) -> bool:
    """
    @return whether this value type is an fkey reference array field.
    """
        ...
    @overload
    def isFkeyRefArray(self, ft: FieldType) -> bool:
    """
    @return whether this value type is an fkey reference array field.
    """
        ...
    def isFkeyRef(self, field: str) -> bool:
        ...
    def latestCharacteristicsFields(self) -> Union[Array[FieldPath]]:
    """
    @return the list of field that are the "latest characteristic" fields linked to `TimedCharacteristicHistory`
            fields.
    """
        ...
    def isAclEnabled(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link AclEnabled}
    """
        ...
    def isAclEnabledTypes(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link AclEnabledTypes}
    """
        ...
    def isJdbcStore(self) -> bool:
    """
    @return true if this C3 type is a subtype of {@link JdbcStore}
    """
        ...
    def isTimedDataHeader(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link TimedDataHeader}
    """
        ...
    def isIntervalDataHeader(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link IntervalDataHeader}
    """
        ...
    def isTimedValueType(self) -> bool:
    """
    @return true if the type supports timed fetch
    """
        ...
    def isTimedIntervalType(self) -> bool:
    """
    @return true if the type is a timed interval type
    """
        ...
    def isTimedRelationType(self) -> bool:
    """
    @return true if the type is a {@link TimedRelation} or {@link TimedRelationRef} or {@link TimedIntervalRelation}
    or {@link TimedIntervalRelationRef}
    """
        ...
    def isTimedValueHistory(self) -> bool:
    """
    @return true if the type is a timed value history type
    """
        ...
    def isTimedRelation(self) -> bool:
    """
    @return true if the type is a {@link TimedRelation} type
    """
        ...
    def isTimedCharacteristicType(self) -> bool:
    """
    @return true if the type is a timed characteristic type
    """
        ...
    def isTimedIntervalCharacteristicHistory(self) -> bool:
    """
    @return true if the type is a timed interval characteristic history type
    """
        ...
    def isTimedFetchType(self) -> bool:
    """
    @return true if the type supports timed fetch
    """
        ...
    def isIntervalDataPoint(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link IntervalDataPoint}
    """
        ...
    def isTimedDataPoint(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link TimedDataPoint}
    """
        ...
    def isTimeseriesDataPoints(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link TimeseriesDataPoints}
    """
        ...
    def isAnyTimeseriesDataPoint(self) -> bool:
    """
    @return true if this C3 Type is sub type of either {@link IntervalDataPoint}, {@link TimedDataPoint} or
    {@link TimeseriesDataPoints}
    """
        ...
    def isVersionable(self) -> bool:
    """
    @return True if the type is versionable (e.g. mixes Versionable).
    """
        ...
    def isGeography(self) -> bool:
    """
    @return True if the type is a Geography (e.g. mixes Geo).
    """
        ...
    def isGeometry(self) -> bool:
    """
    @return True if the type is a Geometry (e.g. mixes Geom).
    """
        ...
    def isRawTimedData(self) -> bool:
    """
    @return True if this type mixes in the TimedDataHeader type but not the NormalizedTimeseries type
    """
        ...
    def isRawTimedDataPoint(self) -> bool:
        ...
    def partitionKeyField(self) -> Union[str]:
    """
    @return name of the field for partitioning instances of this type for storage.
    """
        ...
    def partitionKeyFieldType(self) -> Union[FieldType]:
    """
    @return FieldType of the field for partitioning instances of this type for storage.
    """
        ...
    def compiledPartitionKeyFieldExpr(self) -> Expr.Compiled[Any, Any]:
    """
    @return compiled partition key field expression (or id) on the given type
    """
        ...
    def isRawTimeseries(self) -> bool:
    """
    @return True if this type mixes in the IntervalDataHeader type but not the NormalizedTimeseries type
    """
        ...
    def isFacade(self, app: str) -> bool:
    """
    Checks if type is facaded for a given app. Facaded types live in a different app.
    
    @return true if type is facaded in an app other than the one specified. I.e. call to this type from app that is
            different then provided app will resolve into a remote call
    """
        ...
    def canBePersisted(self) -> bool:
    """
    @return True if entity and not generic
    """
        ...
    def hasChildCollection(self) -> bool:
    """
    @return True if the type has any non-fkey child collections. Includes recursive included type fields.
    """
        ...
    def isPersistKey(self, dontIncludePersistable: bool=None) -> bool:
    """
    Whether this type is only persists its key (e.g. Persistable, Identified, Named).
    
    @param includePersistable
           if true, then types mixing {@link Persistable} will return false.  Otherwise they will return true.
    
    @return true if this type only persists its key.
    """
        ...
    def persistKeyField(self) -> Union[str]:
    """
    @return if {@link isPersistKey} returns true, the key field to be persisted (e.g. "name" or "id").
    """
        ...
    def isNoOverlapTimedIntervalValueHistoryType(self, parentType: TypeMeta) -> bool:
        ...
    def isRawTimeseriesDataPoint(self) -> bool:
        ...
    def isAnyNormalized(self) -> bool:
        ...
    def isNormalizedTimedDataPoint(self) -> bool:
        ...
    def isNormalizedTimeseriesDataPoint(self) -> bool:
        ...
    def isArchiveable(self) -> bool:
        ...
    def isCompositeKeyType(self) -> bool:
        ...
    def isCompactType(self) -> bool:
        ...
    def isSystemType(self) -> bool:
        ...
    def isVersioned(self) -> bool:
        ...
    def isRemix(self) -> bool:
    """
    @return whether this TypeMeta has any #declaredRemixes
    """
        ...
    @classmethod
    def forName(cls, name: str, failIfMissing: bool=None) -> Union[TypeMeta]:
    """
    Get the type metadata for an instantiated type by name.
    """
        ...
    def qname(self) -> Union[str]:
    """
    Return the name of this type, qualified by its package. For example, the Facility type will have a name of
    `Facility` and a qname of `foundation.Facility`, which is the package that defines it.
    
    @see #name
    """
        ...
    def innerTypeName(self) -> Union[str]:
    """
    @return the inner type name of this type, if it is indeed inner type otherwise `null`
    
    @see #name
    """
        ...
    def isInnerType(self) -> bool:
    """
    @return true if this is an inner type
    """
        ...
    def nativeRemixName(self) -> Union[str]:
    """
    @return name of the native remix type declaration; includes declared action requirement
    """
        ...
    def isNativeRemix(self) -> bool:
    """
    Whether or not this is a native remix type. This means that its implementation is particular to a certain language,
    or even {@Link Action.Requirement}.
    
    ```type
    native py remix type DataFrame
    ```
    
    The native remix type native to the "py" {@Link Action.Requirement} and a remix of the "DateFrame" type.
    
    @see nativeActionRequirement
    """
        ...
    def hasNativeRemix(self, actionEngine: str) -> bool:
    """
    @return true if this type or any of it's mixins has a native remix for a given {@Link Action.Requirement}
    
    @see isNativeRemix
    """
        ...
    def nativeActionRequirement(self) -> Union[str]:
    """
    If this is a native remix type then {@Link Action.Requirement} that this type has specific implementation for.
    """
        ...
    def nativeActionRequirements(self) -> Union[Array[str]]:
    """
    If this type has native remixes then list of {@Link Action.Requirement}s for them.
    """
        ...
    def isAbstract(self) -> bool:
    """
    Whether this is an abstract type that cannot be directly instantiated.
    """
        ...
    def isInline(self) -> bool:
    """
    Whether this is an inline type i.e. one who's "declared" methods are implicitly inline.
    
    @see #declaredInline
    @see MethodType#isInline
    """
        ...
    def isInstance(self) -> bool:
    """
    @return True if the type is an Instance.c3typ sub-type.
    """
        ...
    def isDocumentable(self) -> bool:
    """
    @return True if the type is a Documentable (e.g. mixes Documentable).
    """
        ...
    def isDslCommented(self) -> bool:
    """
    @return True if the type is a DslCommented (e.g. mixes DslCommented).
    """
        ...
    def isEntity(self) -> bool:
    """
    Whether this type is an entity (aka persistable or stored) type by virtue of mixing {@link Persistable}).
    Note that will return `false` for {@link Persistable} type itself.
    """
        ...
    def isDynamic(self) -> bool:
    """
    Whether this is an unnamed dynamic type created at runtime using #withFieldType or Pkg#dynamicType.
    """
        ...
    def isExternal(self) -> bool:
    """
    @return True if the type is external (e.g. Mixes External).
    """
        ...
    def isPersistable(self) -> bool:
    """
    Whether this type is potentially an entity, or is the {@link Persistable} type itself. This is an alias for
    `isA(Persistable)`.
    
    Note that Persistable itself isPersistable, so often #isEntity is more useful.
    
    @see isEntity
    """
        ...
    def isNotPersistable(self) -> bool:
    """
    Whether this type can *not* be persisted. I.e. it is not an entity type or is abstract.
    
    @see #isEntity
    @see #isPersistable
    """
        ...
    def isDatastoreKv(self) -> bool:
    """
    @return true if type has {@link Ann.Db} with any key value datastore (i.e. mixes KvStore or default "kv" store)
    """
        ...
    def isAnnotation(self) -> bool:
    """
    Whether this type is an annotation type, marked with the `@annotation` annotation.
    """
        ...
    def isError(self) -> bool:
    """
    Whether this type is an Error type or subtype.
    """
        ...
    def isEnum(self) -> bool:
    """
    Whether this type is a declared enum.
    
    @see Enum
    """
        ...
    def isUnion(self) -> bool:
    """
    Whether this type is a declared anyof (union).
    
    @see Union
    """
        ...
    def isObj(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Obj}
    """
        ...
    def isPartitionable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Partitionable}
    """
        ...
    def isDimensionBase(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link DimensionBase}
    """
        ...
    def hasTsFields(self) -> bool:
    """
    @return true if this C3 type contains fields that have ValueType of {@link Timeseries}
    """
        ...
    def isValue(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Value} but not {@link Obj}
    """
        ...
    def isTypesys(self) -> bool:
    """
    @return true if this C3 Type is a used to declare C3 Type Systems
    """
        ...
    def isMutable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Mutable}
    """
        ...
    def isStateful(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Stateful}
    """
        ...
    def isStringSerializable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link StringSerializable}
    """
        ...
    def isSerializable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Serializable}
    """
        ...
    def isJsSerializable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link JsSerializable}
    """
        ...
    def isWithType(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithType}
    """
        ...
    def isWithKey(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithKey}
    """
        ...
    def isWithId(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithId}
    """
        ...
    def isWithName(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithName}
    """
        ...
    def isWithUniqueId(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithUniqueId}
    """
        ...
    def isWithUniqueName(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithUniqueName}
    """
        ...
    def isWithRef(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link WithRef}
    """
        ...
    def isIdentifiable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Identifiable}
    """
        ...
    def isIdentified(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Identified}
    """
        ...
    def isNameable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Nameable}
    """
        ...
    def isNamed(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Named}
    """
        ...
    def isWithGlobalKey(self) -> bool:
    """
    @return true if this C3 type is a subtype of{@link WithGlobalKey}
    """
        ...
    def isAnonymous(self) -> bool:
    """
    @return true if this C3 Type is anonymous i.e it doesn't have a name
    """
        ...
    def isDataPoint(self) -> bool:
    """
    Whether this type represents "fast data".
    
    @see DataPoint
    """
        ...
    def isSpec(self) -> bool:
    """
    Whether this type is a parameter specification for a function. Note that spec parameters get auto initialized when
    passed as arguments to a function / API call.
    
    @see Spec
    """
        ...
    def isResult(self) -> bool:
    """
    Whether this type represents result of the function call. Note that result types get automatically validated after
    return from a method or API call.
    
    @see Result
    """
        ...
    def isSingleton(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Singleton}
    """
        ...
    def isStreamable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Streamable}
    """
        ...
    def isStreamableArg(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Streamable.Arg}
    """
        ...
    def isStreamableResult(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Streamable.Result}
    """
        ...
    def isReClaim(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link ReClaim}
    """
        ...
    def isDefaultInstance(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link DefaultInstance}
    """
        ...
    def isDefaultClaim(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link DefaultClaim}
    """
        ...
    def isIface(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Iface}
    """
        ...
    def isCached(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Cached}
    """
        ...
    def isConfig(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Config}
    """
        ...
    def isConfigurable(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Configurable}
    """
        ...
    def isConfigChild(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link ConfigChild}
    """
        ...
    def isUserSingleton(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link UserSingleton}
    """
        ...
    def isContent(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Content}
    """
        ...
    def isPrivate(self) -> bool:
    """
    Whether this type is marked as a private type (not to be used outside its package).
    Please note that "private" of the type is not inherited and a type will be `private` only
    if its marked so explicitly.
    """
        ...
    def isMetadata(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Metadata}
    """
        ...
    def isSeedData(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link SeedData}
    """
        ...
    def isByteStream(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link ByteStream}
    """
        ...
    def isMetadataTransformer(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link MetadataTransformer}
    """
        ...
    def isSource(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Source}
    """
        ...
    def isTimeseries(self) -> bool:
    """
    @return true if the type is a Timeseries type
    """
        ...
    def isDataImpl(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link DataImpl}
    """
        ...
    def isArray(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Array}
    """
        ...
    def isMap(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Map}
    """
        ...
    def isLambda(self) -> bool:
    """
    @return true if this C3 Type is a subtype of {@link Lambda}
    """
        ...
    def isColumnar(self) -> bool:
    """
    @return true if this C3 type is a subtype of {@link Columnar}
    """
        ...
    @overload
    def isA(self, other: Type) -> bool:
    """
    Determine whether this type mixes in (directly or indirectly) another type
    or is that type itself.
    
    @param other instance of other type
    
    @see #isSame
    @see #isCoercible
    """
        ...
    @overload
    def isA(self, other: TypeMeta) -> bool:
    """
    Determine whether this type mixes in (directly or indirectly) another type
    or is that type itself.
    
    @param other instance of other type
    
    @see #isSame
    @see #isCoercible
    """
        ...
    @overload
    def isA(self, other: str) -> bool:
    """
    Determine whether this type mixes in (directly or indirectly) another type or is that type itself.
    
    @param other name of the other type
    
    @see #isSame
    @see #isCoercible
    """
        ...
    def isBoxedType(self) -> bool:
    """
    Whether this type is a boxed type.
    """
        ...
    def isBoxedPrimitiveType(self) -> bool:
    """
    Whether this type is a boxed primitive type (Integer, String, ...).
    """
        ...
    def isBoxedArrayType(self) -> bool:
    """
    Whether this type is a boxed array type.
    """
        ...
    def isBoxedMapType(self) -> bool:
    """
    Whether this type is a boxed map type.
    """
        ...
    def isBoxedSetType(self) -> bool:
    """
    Whether this type is a boxed set type.
    """
        ...
    def isBoxedCollectionType(self) -> bool:
    """
    Whether this type is a boxed collection type.
    """
        ...
    def unboxType(self, failIfNot: bool=None) -> Union[ValueType]:
    """
    Unboxes this boxed primitive type, returning the underlying value type.
    """
        ...
    def unboxPrimitiveType(self, failIfNot: bool=None) -> Union[PrimitiveType]:
    """
    Unboxes this boxed primitive type, returning the underlying primitive type.
    """
        ...
    def unboxArrayType(self) -> Union[ArrayType]:
    """
    Unboxes this boxed array type.
    """
        ...
    def unboxMapType(self) -> Union[MapType]:
    """
    Unboxes this boxed map type.
    """
        ...
    def commonFieldNames(self, other: TypeMeta) -> int:
    """
    Returns the number of field names shared between ths and other.
    """
        ...
    def merge(self, other: TypeMeta) -> TypeMeta:
    """
    Returns a new TypeMeta with all declaredFieldTypes from ths plus any declaredFieldTypes from other that were not
    already on ths. If both TypeMetas have a field with the same name and different type, the type from ths will be
    preserved.
    """
        ...
    def prototypeName(self) -> Union[str]:
    """
    Return the name of the type from which this type was bound. This is generally the same as the name, but in the case
    of bound types #prototypeName does not including the bindings.
    
    For example, `NormTimeseries<double>` would have a prototypeName of `NormTimeseries`.
    
    @see #name
    @see #prototype
    """
        ...
    def metaRestriction(self) -> Union[ValueType]:
    """
    _meta restriction on this type. Actual semantic is specific to the type and depends on the specific implementation.
    E.g. `Type` uses it for constraining value to subtypes of a _meta_ restriction, enum types use it as bind var for
    implicit `Enum` mixin.
    """
        ...
    def innerTypeNames(self, deep: bool=None) -> Union[Set[str]]:
    """
    @return names of all inner types defined by this type or on all of its inner types if `deep` arg is true
    """
        ...
    def innerTypes(self, deep: bool=None) -> Union[Array[TypeMeta]]:
    """
    @return all inner types defined by this type
    """
        ...
    def innerType(self, innerType: str, failIfMissing: bool=None) -> Union[TypeMeta]:
    """
    @return inner type meta defined by this type by name
    """
        ...
    def innerTypeToType(self, innerType: str, failIfMissing: bool=None) -> Union[Type]:
    """
    @return inner type (not meta) defined by this type by name
    """
        ...
    def outerTypeName(self) -> Union[str]:
    """
    @return name of the immediate outer type if this is an inner type
    """
        ...
    def outerType(self) -> Union[Type]:
    """
    @return immediate outer type if this is an inner type
    """
        ...
    def outerRootTypeName(self) -> Union[str]:
    """
    @return name of the root outer type if this is an inner type
    """
        ...
    def outerRootTypePkgSubPath(self) -> Union[str]:
    """
    @return metadata sub path of the root outer type if this is an inner type
    """
        ...
    def outerRootType(self) -> Union[Type]:
    """
    @return root outer type if this is an inner type
    """
        ...
    def isExtendable(self) -> bool:
    """
    Whether this type can be extended by another type.
    """
        ...
    def isNotExtendable(self) -> bool:
    """
    Whether this type can no longer be extended by another type.
    """
        ...
    def isExtension(self) -> bool:
    """
    Whether this type is extending another type.
    """
        ...
    def baseType(self, failIfMissing: bool=None) -> Union[Type]:
    """
    Get the base type if this type is an extended type (e.g. it `extends` another type) or null if it isn't an
    extension type.
    
    @param failIfMissing
              if true, throw an exception if the type is not an extension type
    
    @see #isExtension
    @see #rootType
    """
        ...
    def baseTypeMeta(self, failIfMissing: bool=None) -> Union[TypeMeta]:
        ...
    def rootType(self) -> Type:
    """
    Get the root type if this type is an extended type (e.g. it `extends` another type) or the type itself if it isn't
    an extension type.
    
    @see #isExtension
    @see #baseType
    """
        ...
    def typeIdent(self) -> Union[str]:
    """
    Gets the value of the typeKey appended to the type's base type's extensionIdent + ":". This value is used to
    mark/identify object instances into one specific type.
    """
        ...
    def isNotMixable(self) -> bool:
    """
    Whether this type can no longer be mixed in by another package.
    """
        ...
    def mixins(self, order: str='MIXIN') -> Union[Array[Type]]:
    """
    Get the mixins of this type and types they mixin in turn.
    
    @see #declaredMixinReferenceTypes
    @see #declaredMixinReferenceType
    @see #declaredMixinTypes
    @see #declaredMixinType
    @see #implicitAndDeclaredMixinTypes
    @see #implicitAndDeclaredMixinType
    """
        ...
    def mixinMetas(self) -> Union[Array[TypeMeta]]:
        ...
    def javaMixinMetas(self) -> Union[Array[TypeMeta]]:
    """
    Get all unique mixins that have specialized / strongly typed Java interface and implementation class. Note if
    this type itself has strongly typed Java interface and implementation class then return will be empty.
    
    Return is ordered by type prototype name.
    
    @see #isJava
    """
        ...
    def javaMixinMeta(self) -> Union[TypeMeta]:
    """
    Get one only mixin if available that has a specialized / strongly typed Java interface and implementation class.
    Note if this type itself has strongly typed Java interface and implementation class return will be 'null'.
    
    @see #javaMixinMetas
    """
        ...
    def javaMixinDuckTypeName(self) -> Union[str]:
    """
    If this type has a multiple java mixins, return the name of the synthetic duck type for it. This is primarily used
    to lookup and if needed generate at runtime appropriate java classes for this type.
    
    @see #javaMixinMetas
    """
        ...
    def isJava(self) -> bool:
    """
    True if this type has a specialized / strongly typed Java interface and implementation class.
    """
        ...
    def protoFilteredMixinMetas(self, prototypeNames: SetBuilder[str]) -> Union[Array[TypeMeta]]:
    """
    Returns the {@link #mixinMetas} based on the provided prototypeNames. If multiple metas with the same
    prototypeName are found, then the first encountered meta is selected. e.g For types defined below:
    ```c3typ
    Foo<T> mixes Value
    ```
    ```c3typ
    Bar mixes Foo<Bar>, Value
    ```
    ```c3typ
    Baz mixes Foo<Baz>, Bar, Value
    ```
    Following would be the expected behavior:
    ```js
    var prototypeNames = SetType.ofStr().makeBuilder().addAll('Foo', 'Value');
    // Note that only the first encountered `Foo` mixin was returned.
    Baz.meta().protoFilteredMixinMetas(prototypeNames).mapToStr(a => a.name) == ['Foo<Baz>`, `Value`]
    
    prototypeNames = SetType.ofStr().makeBuilder().addAll('Bar');
     Baz.meta().protoFilteredMixinMetas(prototypeNames).mapToStr(a => a.name) == ['Bar`]
    ```
    @see #uniqueProtoMixinMetas
    @see #mixinMetas
    """
        ...
    def uniqueProtoMixinMetas(self) -> Union[Array[TypeMeta]]:
    """
    Returns the {@link #mixinMetas} based on the unique prototypeNames of the provided type.
    If multiple metas with the same protoTypeName are found, then the first encountered meta is selected.
    e.g For types defined below:
    ```c3typ
    Foo<T> mixes Value
    ```
    ```c3typ
    Bar mixes Foo<Bar>, Value
    ```
    ```c3typ
    Baz mixes Foo<Baz>, Bar, Value
    ```
    Following would be the expected behavior:
    ```js
    Baz.meta().uniqueProtoMixinMetas().mapToStr(a => a.name) == ['Foo<Baz>`, `Bar`, `Value`]
    ```
    @see #protoFilteredMixinMetas
    @see #mixinMetas
    """
        ...
    def mixin(self, name: str, failIfMissing: bool=None) -> Union[Type]:
    """
    Get a single mixin by name.
    
    @param name type name to search for
    """
        ...
    def mixinMeta(self, name: str, failIfMissing: bool=None) -> Union[TypeMeta]:
        ...
    def mixinReferenceTypes(self, order: str='MIXIN') -> Union[Array[ReferenceType]]:
    """
    Get the mixin reference types of this type and types they mixin in turn.
    
    @see #declaredMixinRefTypes
    @see #declaredMixinRefType
    @see #declaredMixinTypes
    @see #declaredMixinType
    @see #mixins
    @see #mixin
    """
        ...
    def mixinReferenceType(self, name: str, failIfMissing: bool=None) -> Union[ReferenceType]:
    """
    Get a single declared mixin reference type by name.
    
    @param name type name to search for
    """
        ...
    def mixinsWithSourceCode(self, actionRequirement: str) -> Union[Array[Type]]:
    """
    Get the mixins that have source code implemented for the specified {@Link Action.Requirement} and
    all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement.
    
    @param actionRequirement to check
    
    @see #hasSourceCode
    """
        ...
    def declaredMixins(self, order: str='MIXIN') -> Union[Array[Type]]:
    """
    Get the declared mixins of this type.
    
    @see #mixins
    """
        ...
    def declaredMixinMetas(self) -> Union[Array[TypeMeta]]:
        ...
    def declaredMixin(self, name: str) -> Union[Type]:
    """
    Get a single declared mixin by name.
    
    @param name type name to search for
    """
        ...
    def declaredMixinMeta(self, name: str) -> Union[TypeMeta]:
        ...
    def implicitAndDeclaredMixinRefTypes(self) -> Union[Array[ReferenceType]]:
    """
    Get the declared and implicit mixins reference types for this type. Implicit mixin examples are `Persistable`
    for entity types or `Enum` for enum types.
    
    @see #mixins
    """
        ...
    def implicitAndDeclaredMixins(self) -> Union[Array[Type]]:
    """
    Get the declared and implicit mixins of this type. Implicit mixin examples are `Persistable` for entity types or
    `Enum` for enum types.
    
    @see #mixins
    """
        ...
    def implicitAndDeclaredMixinMetas(self) -> Union[Array[TypeMeta]]:
        ...
    def subTypes(self, includeSelf: bool=None) -> Union[Array[Type]]:
    """
    @return all types in the current package mixing this type
    """
        ...
    def subTypeMetas(self, includeSelf: bool=None) -> Union[Array[TypeMeta]]:
    """
    @return all types in the current package mixing this type
    """
        ...
    def subTypeNames(self, includeSelf: bool=None) -> Union[Array[str]]:
    """
    @return all type names in the current package mixing this type
    """
        ...
    def extensionTypes(self, includeSelf: bool=None) -> Union[Array[Type]]:
    """
    @return all types in the current package extending this type
    """
        ...
    def hasExtensionTypes(self, includeSelf: bool=None) -> bool:
    """
    @return true if any types in the current package extend this type
    """
        ...
    def extensionTypeMetas(self, includeSelf: bool=None) -> Union[Array[TypeMeta]]:
    """
    @return all types in the current package extending this type
    """
        ...
    def extensionTypeNames(self, includeSelf: bool=None) -> Union[Array[str]]:
    """
    @return all type names in the current package extending this type
    """
        ...
    def hierarchyFingerprint(self) -> int:
    """
    Fingerprint detecting when field value types gain first subtype (0→1 transition).
    Triggers schema update to add "_J" column for heterogeneous references.
    Subsequent subtypes (1→2+) don't change fingerprint since column is already heterogeneous.
    
    Example: Field `spec: ThreadPool.Spec` requires schema change when `UpdateSpec mixes ThreadPool.Spec`
    is added (heterogeneous reference needs "_J" column for type discriminator).
    
    NOT cached - must reflect current type system state as new subtypes are loaded.
    Only called during schema validation at startup, not in runtime hot paths.
    
    @return fingerprint of this type + boolean flags for field type subtype existence
    @see fingerprint
    @see Db.TypeSchema#validateSchema
    """
        ...
    def unionAlts(self) -> Union[AnyOfType]:
    """
    Alternatives for a Union type.
    
    @see Union
    """
        ...
    def isRemixed(self) -> bool:
    """
    @return `true` if this type is remixed
    """
        ...
    def isNotRemixable(self) -> bool:
    """
    Whether this type can no longer be remixed in by another package.
    """
        ...
    def remixAliases(self) -> Union[Set[str]]:
    """
    @return all remix aliases for this type.
    """
        ...
    def declaredNativeRemix(self, actionRequirement: str) -> Union[TypeMeta]:
    """
    @return native remix declaration of this type for a provided {@Link Action.Requirement actionRequirement} and
    all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement
    or null if this type does not have native remix
    """
        ...
    def nativeRemix(self, actionRequirement: str) -> Union[TypeMeta]:
    """
    @return native remix of this type for a provided {@Link Action.Requirement actionRequirement} or null if this type does not have native remix nor does
            any of its mixins
    """
        ...
    def allRemixPackages(self) -> Union[Set[str]]:
    """
    @return names of all depending packages that contain remix of this type.
    """
        ...
    def isFinal(self) -> bool:
    """
    Whether this type can no longer be mixed in or remixed by another package.
    """
        ...
    def declaredFieldTypesByName(self) -> Union[Map[str, Array[DeclaredFieldType]]]:
    """
    Get a map of declared or overridden field or method types by field / method name for this type. Note since there
    could be more then one field declaration for a name resulting map element type is actually array of FieldTypes.
    
    @see declaredFieldTypes
    @see overriddenFieldTypes
    """
        ...
    def declaredFieldType(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[DeclaredFieldType]]:
    """
    Get a single declared or overridden field or method by name for this type. Note since there could be more then one
    field declaration for the same name returns array of FieldTypes.
    """
        ...
    def declaredOrOverriddenFieldType(self) -> Union[Array[FieldType]]:
    """
    Get all fields that are declared or overridden in this type.
    """
        ...
    def declaredOrOverriddenMethods(self) -> Union[Array[Method]]:
    """
    Get all methods that are declared or overridden in this type.
    """
        ...
    def declaresOrOverridesField(self, fieldOrMethod: str) -> bool:
    """
    @return `true` if this type declares or overrides provided field.
    
    @see declaresField
    @see overridesField
    """
        ...
    def declaresField(self, fieldOrMethod: str) -> bool:
    """
    @return `true` if this type declares not just overrides provided field.
    
    @see overridesField
    """
        ...
    def overridesField(self, fieldOrMethod: str) -> bool:
    """
    @return `true` if this types overrides provided field or method. I.e. one of the mixins declare field or method
            with the same name.
    
    @see declaresField
    """
        ...
    def overriddenFieldTypes(self) -> Union[Array[DeclaredFieldType]]:
    """
    Get all overridden field or method types by field / method name for this type.
    """
        ...
    def overriddenFieldTypesByName(self) -> Union[Map[str, Array[DeclaredFieldType]]]:
    """
    Get a map of overridden field or method types by field / method name for this type.
    """
        ...
    def overriddenFieldType(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[DeclaredFieldType]]:
    """
    Get a single overridden field or method by name for this type.
    """
        ...
    def fieldTypeFirstDeclaredOn(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[Type]]:
    """
    Get the type (this one or the mixin) on which the specified field was originally declared. If no such field is
    declared in the hierarchy, return null.
    
    ```type
    type X {
      doit: optional member function()
    }
    
    type Y mixes X {
      doit: ~ js server
    }
    ```
    
    In the example above, calling from type *Y*, `fieldTypeDeclaredOn("doit")` returns Y (since it is re-declared
    there), but fieldTypeFirstDeclaredOn returns *X* (since that is the original declaration).
    
    @see fieldTypeDeclaredOn
    @see declaresField
    @see overridesField
    @see Method#overloadImplementedOn
    """
        ...
    def fieldTypeFirstDeclaredOnMeta(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[TypeMeta]]:
        ...
    def fieldTypeDeclaredOn(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[Type]]:
    """
    Get the type (this one or the closest mixin) on which the specified field is declared. If no such field is
    declared in the hierarchy, return null. Note that this might be the original declaration of the field as a type
    may override a field with additional information, such as providing a method implementation.
    
    @see fieldTypeFirstDeclaredOn
    @see Method#overloadImplementedOn
    """
        ...
    def fieldTypeDeclaredOnMeta(self, fieldOrMethod: str, failIfMissing: bool=None) -> Union[Array[TypeMeta]]:
        ...
    def fieldTypeNames(self, order: str='MIXIN') -> Union[Set[str]]:
    """
    Get all field type names for this type. This includes fields defined on mixins as well as defined (or redefined
    / overridden) on the type itself.
    """
        ...
    def fieldTypeAndMethodNames(self, order: str='MIXIN') -> Union[Set[str]]:
    """
    Get all method and field type names for this type. This includes methods and fields defined on mixins as well as
    defined (or redefined / overridden) on the type itself.
    """
        ...
    def fieldTypes(self, order: str='MIXIN') -> Union[Array[FieldType]]:
    """
    Get all field types for this type. This includes fields defined on mixins as well as defined (or redefined) on the
    type itself.
    """
        ...
    def fieldTypesWithAnn(self, ann: str, order: str='MIXIN') -> Union[Array[FieldType]]:
    """
    Get all field types for this type with specified {@link Annotation}. This includes fields defined on mixins as
    well as defined (or redefined) on the type itself.
    """
        ...
    def fieldPaths(self) -> Union[Array[FieldPath]]:
    """
    @return list of all field paths on this type, including fields coming from mixins
    """
        ...
    def fieldPathMergeSpecs(self) -> Union[Map[str, str]]:
    """
    Generate merge specs for each data field paths on this type
    """
        ...
    def xmlTxtContentFieldType(self) -> Union[FieldType]:
    """
    Get field type with XmlField-txtContent annotation
    """
        ...
    def fieldTypesByName(self) -> Union[Map[str, FieldType]]:
    """
    Get a map of field types by field name for this type. This includes fields defined on mixins as well as defined
    (or redefined) on the type itself.
    """
        ...
    def fieldType(self, field: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Get a single field type by name.
    
    @param field field name to find
    @param failIfMissing throw an error if the field doesn't exist
    """
        ...
    def fieldTypeAtOrdinal(self, ordinal: int, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Looks up a field type by it's ordinal
    @param ordinal
           of the field type
    @param failIfMissing
           throw an error if the field doesn't exist
    """
        ...
    def fieldTypeBySerName(self, serName: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Get a single field type by serialization name. If a field has an `@ser(name)` annotation (as many do on this type
    for example), look up the field by that name before looking it up by the formal field name.
    
    @param serName serialized field name to find
    @param failIfMissing throw an error if the field doesn't exist
    """
        ...
    def fieldTypesBySerName(self) -> Union[Map[str, FieldType]]:
    """
    Get a map of all field types by serialization name. If a field has an `@ser(name)` annotation (as many do on this type
    for example), look up the field by that name before looking it up by the formal field name.
    """
        ...
    def typeSerName(self) -> Union[str]:
    """
    Name to be used in serialization for a `WithType#type`.
    By default it is "type" but can be overridden via `@ser(name="...")` on a `type` property
    Returns "$type" if another field overrides to the serialized name of `type`.
    """
        ...
    @overload
    def fieldPath(self, fieldPath: str, failIfInvalid: bool=None) -> Union[FieldPath]:
    """
    Traverses the field or field path
    """
        ...
    @overload
    def fieldPath(self, fieldType: FieldType) -> FieldPath:
    """
    Traverses the field by provided field type, returning the corresponding FieldPath
    """
        ...
    def dataFieldTypes(self) -> Union[Array[FieldType]]:
    """
    A list of data field types for this type; i.e. ones that are not methods, constants or inner types. Note that
    resulting array is ordered based on field type ordinal.
    """
        ...
    def dataFieldTypeOrdinals(self) -> Union[Map[str, int]]:
    """
    Get all data field type ordinals.
    
    @see dataFieldTypes
    """
        ...
    def eachDataFieldPath(self, action: Callable[[FieldPath]], recurse: bool=None) -> None:
    """
    Traverses all data fields including in references.
    """
        ...
    def dataFieldTypesByName(self) -> Union[Map[str, FieldType]]:
    """
    Get a map of data field types by field name for this type.
    """
        ...
    def dataFieldTypeNames(self) -> Union[Array[str]]:
    """
    Get all of data field names for this type.
    """
        ...
    def dataFieldTypesWithDefault(self) -> Union[Array[FieldType]]:
    """
    A list of data field types for this type that have default values. It also contains a list of field types that are
    required primitives
    """
        ...
    def dataFieldTypesWithValidation(self) -> Union[Array[FieldType]]:
    """
    A list of data field types for this type that require validation
    @see ValueType#hasValidation
    """
        ...
    def dataFieldTypesWithSecretAnn(self) -> Union[Array[FieldType]]:
    """
    Get all field types for this type with specified {@link Ann.Config#secret}. This includes fields defined on mixins as
    well as defined (or redefined) on the type itself.
    """
        ...
    def dataFieldTypesWithVectorAnn(self) -> Union[Array[FieldType]]:
    """
    Get all field types for this type with specified {@link Ann.Vector}. This includes fields defined on mixins as
    well as defined (or redefined) on the type itself.
    """
        ...
    def dataFieldType(self, field: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Get a single data field type by name.
    """
        ...
    def dataFieldTypesFingerprint(self) -> int:
    """
    Produce a checksum that can easily be compared to determine if two fieldTypes are similar. We are excluding methods
    and constants
    """
        ...
    def embeddingsFieldType(self, textField: str) -> Union[FieldType]:
    """
    Get FieldType of embedding field for the specified text field.
    """
        ...
    def constant(self, field: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Get a single constant by name.
    """
        ...
    def constants(self) -> Union[Array[FieldType]]:
    """
    Get all constants.
    """
        ...
    def constantOrdinals(self) -> Union[Map[str, int]]:
    """
    Get all constant ordinals.
    """
        ...
    def innerTypeConstant(self, innerTypeName: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    Get a {@link FieldType} describing an {@link #innerType}. This field {@link #isConstant is constant}, with its
    {@link #defaultValue} being the inner type.
    """
        ...
    def calcFields(self) -> Union[Array[FieldPath]]:
    """
    @return The set of all calc fields, (stored and read) in this type
    """
        ...
    def valueType(self, field: str, failIfMissing: bool=None) -> Union[ValueType]:
    """
    Get the value type of a field by name.
    
    @param field field name to find
    @param failIfMissing throw an error if the field doesn't exist
    """
        ...
    def traverseType(self, field: str, failIfMissing: bool=None) -> Union[Type]:
    """
    Traverses a reference type field or method return type, returning the Type on the other side of that ReferenceType.
    Convenient equivalent to:
    ```fieldType(name).valueType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asMethodType().returnType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asCollectionType().elementType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asMethodType().returnType().asCollectionType().elementType().asReferenceType().dereference()```
    """
        ...
    def traverseTypeMeta(self, field: str, failIfMissing: bool=None) -> Union[TypeMeta]:
    """
    Traverses a reference type field or method return type, returning the Type on the other side of that ReferenceType.
    Convenient equivalent to:
    ```fieldType(name).valueType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asMethodType().returnType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asCollectionType().elementType().asReferenceType().dereference()```
    or
    ```fieldType(name).valueType().asMethodType().returnType().asCollectionType().elementType().asReferenceType().dereference()```
    """
        ...
    def traverseFieldPath(self, fieldPath: str) -> Union[FieldPath]:
    """
    Traverse the given field path.
    """
        ...
    def traverseSerField(self, serName: str, failIfMissing: bool=None) -> Union[FieldPath]:
    """
    Traverses the ser field name as provided on the type, returning the corresponding FieldPath
    
    @see Ann.Ser
    @param serName
           serialization name of the field
    @return the field path
    """
        ...
    def serFieldTypes(self) -> Union[Map[str, FieldType]]:
        ...
    def serFieldType(self, serName: str, failIfMissing: bool=None) -> Union[FieldType]:
    """
    @return fieldType with the matching serialized name.
    
    @see #serFieldTypes
    @see Ann.Ser
    """
        ...
    def hasSerNameFields(self) -> bool:
    """
    Whether or not there are any fields in this type whose serialization name differs from the normal field name.
    
    @see FieldType#serName
    """
        ...
    def hasFields(self) -> bool:
    """
    Whether this type has any data fields. Note it skips constants.
    """
        ...
    def hasFieldDefaults(self) -> bool:
    """
    Whether this type has any data field with defaults. Note it skips constants.
    """
        ...
    def hasRequiredFields(self) -> bool:
    """
    Whether this type has any required fields.
    """
        ...
    def hasConstraints(self) -> bool:
    """
    Whether this type has any constraints such as required fields or @constraint annotation.
    """
        ...
    def hasConfigOverrideUser(self) -> bool:
    """
    @return True if the type has annotation @config(minOverride="USER")
    """
        ...
    def hasSecretField(self) -> bool:
    """
    @return True if this type has Ann.Config#secret annotation or contains any object that do.
    """
        ...
    def hasMethods(self) -> bool:
    """
    Whether this type has any methods declared.
    """
        ...
    def hasBeforeMakeOverride(self) -> bool:
    """
    @return True if this type has beforeMake or afterMake overrides
    """
        ...
    def methods(self, order: str='MIXIN') -> Union[Array[Method]]:
    """
    A list of methods for this type.
    """
        ...
    def methodsByName(self) -> Union[Map[str, Method]]:
    """
    Get a map of methods by name for this type.
    """
        ...
    def methodNames(self) -> Union[Set[str]]:
    """
    Get the names of all methods for this type.
    """
        ...
    def method(self, method: str, failIfMissing: bool=None) -> Union[Method]:
    """
    Get a single method by name.
    """
        ...
    def methodOverloadsWithAnn(self, ann: str, order: str='MIXIN') -> Union[Array[MethodType]]:
    """
    A list of method for this type with specified {@link Annotation}.
    """
        ...
    def hasImplicitMethods(self) -> bool:
    """
    Whether this type has any implicit methods (i.e. methods that are valid but not declared for the type) such as
    `with<field-name>`, `set<field-name>`, etc.
    
    @see #implicitMethods
    """
        ...
    def implicitMethods(self) -> Union[Array[Method]]:
    """
    Get the implicit methods for this type such as `with<field-name>`, `set<field-name>` etc.
    
    @see #methods
    @see #implicitMethodsByName
    """
        ...
    def implicitMethodsByName(self) -> Union[Map[str, Method]]:
    """
    Get the implicit methods map by name for this type.
    
    @see #methods
    @see #implicitMethods
    """
        ...
    def declaredOrImplicitMethod(self, method: str) -> Union[Method]:
    """
    Get a single method by name, whether that method is declared or implicit.
    
    @see #methods
    @see #implicitMethods
    """
        ...
    def memberMethodNames(self) -> Union[Set[str]]:
    """
    Get the names of all member methods for this type.
    """
        ...
    def hasMemberMethod(self, name: str) -> bool:
    """
    Whether this type has a member method of the given name
    """
        ...
    def hasSourceCode(self, actionRequirement: str) -> bool:
    """
    Whether this type has source code for function implementations, not including types it mixes in. If an {@Link Action.Requirement} is
    specified, source code for that {@Link Action.Requirement action requirement}  and all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement.
    is checked. This does not include script files that are specific to an {@Link Action.Requirement}, only ones that provide the base implementation.
    
    @param actionRequirement The {@Link Action.Requirement} to check.
    """
        ...
    def sourceCode(self, actionRequirement: str) -> Union[str]:
    """
    The combined source code for this type in the specified language. Use {@link #sourceCodeAndFilePaths} for the
    individual code files.
    
    @param type
            The Type whose source code will be returned
    @param actionRequirement
            The {@Link Action.Requirement}  which we want to get source code for. If this action requirement
            {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
            for the given Type is also included. This method only returns source code for script-based action requirement.
    
    @return Source code for a Type and its remixes. This includes source code from dependent packages. The resulting
            code is ordered in proper execution order, which is ordered from lowest -> highest precedence. `Pkg`
            ordering takes highest precedence when determining the order of source code in the resulting string; all
            source code for the remix of a Type will come after all source code from the package which originally
            declared the Type. {@link declaredRemixes} enumerates all packages for which the given Type was remixed,
            in the order of highest -> lowest precedence. {@link package} is the package which originally declared
            this Type; source code from this package will have the lowest precedence. See
            {@link Pkg#typeSourceCodePaths} for documentation describing the order of source code files in the scenario
            that more than one file in a `Pkg` implements methods for the given Type and action requirement.
    """
        ...
    def sourceCodeAndFilePaths(self, actionRequirement: str) -> Union[Map[str, str]]:
    """
    The individual source code files for this type in the specified language. Use {@link #sourceCode} for the merged
    source code.
    
    @param type
            The Type whose source code will be returned
    @param actionRequirement
            The {@Link Action.Requirement} which we want to get source code for. If this action requirement
            {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, the  source code for that action requirement
            for the given Type is also included. This method only returns source code for script-based action requirement.
    
    @return A map from source code {@link Pkg.Path} (key) to source code (value) for all source code files for a
            Type and its remixes. This includes source code from dependent packages. The resulting map is ordered in
            proper execution order, which is ordered from lowest -> highest precedence. `Pkg` ordering takes highest
            precedence when determining the order of source code in the resulting map; all source code for the remix of
            a Type will come after all source code from the package which originally declared the Type.
            {@link declaredRemixes} enumerates all packages for which the given Type was remixed, in the order of
            highest -> lowest precedence. {@link package} is the package which originally declared this Type; source
            code from this package will have the lowest precedence. See {@link Pkg#typeSourceCodePaths} for
            documentation describing the order of source code files in the scenario that more than one file in a
            `Pkg` implements methods for the given Type and actionEngine.
    """
        ...
    @classmethod
    def prototypeNameFromFileName(cls, fileName: str) -> str:
    """
    @return prototype name parsed from file name. E.g. "Array.py-client.py" -> "Array"
    """
        ...
    def actionRequirements(self, language: str=None) -> Union[Array[str]]:
    """
    Whether this type has source code for function implementations, not including types it mixes in. If a language is
    specified, only source code for that language is checked. This does not include script files that are specific to
    an {@Link Action.Requirement}, only ones that provide the base implementation.
    
    @param language The language to check.
    """
        ...
    def referenceType(self) -> ReferenceType:
    """
    Produce a reference type to this type.
    """
        ...
    def arrayType(self) -> ArrayType:
    """
    Produce an array type of elements of this type.
    """
        ...
    def streamType(self) -> StreamType:
    """
    Produce a stream type of elements of this type.
    """
        ...
    def setType(self) -> SetType:
    """
    Produce a set type of elements of this type.
    """
        ...
    def mapType(self) -> MapType:
    """
    Produce a map type with `string` as key type and this as element type.
    """
        ...
    def mapTypeOf(self, keyType: ValueType) -> MapType:
    """
    Produce a map type of elements of this type and provided with key type.
    """
        ...
    def columnarType(self) -> TypeMeta:
    """
    Produce a columnar type for this type
    """
        ...
    def runtimeJavaClassName(self) -> Union[str]:
    """
    Runtime java class of the type.
    
    @see Ann.Java#runtimeClassName
    """
        ...
    def schemaName(self) -> Union[str]:
    """
    Schema / table name for this type typically used by entity types.
    """
        ...
    def defaultUi(self) -> TypeDefaultUi:
    """
    Produce a default UI configuration that incorporates the information present in the type itself,
    when a default presentation of this type is desired.
    """
        ...
    def toType(self) -> Type:
    """
    @return corresponding and only Type for this TypeMeta
    """
        ...
    def toSdkJson(self, actionEngine: str) -> any:
    """
    Convert the internal object representation of this TypeMeta to a JSON object specific to a {@Link Action.Engine}.
    """
        ...
    def withFieldType(self, field: str, valueType: ValueType) -> TypeMeta:
    """
    Creates a new dynamic type with the additional field definition as specified and returns it.
    This type will be an anonymous type that mixes in the current type, adding the extra field.
    
    This is a shortcut method for adding a single new field.  See #putFieldTypes
    for the more general function.
    
    @param field of the new field
    @param valueType type of the new field
    @return new dynamic type
    """
        ...
    def withFieldTypes(self, fields: Map[str, ValueType]) -> TypeMeta:
    """
    Creates a new dynamic type with the additional field definitions as specified and returns it.
    This type will be an anonymous type that mixes in the current type, adding the extra fields.
    
    @param field map of field specifications
    @return new dynamic type
    """
        ...
    def withFieldTypesAnns(self, fields: Array[Any]) -> TypeMeta:
    """
    Creates a new dynamic type with the additional field definitions as specified and returns it.
    This type will be an anonymous type that mixes in the current type, adding the extra fields.
    
    @param field iterable of field specifications
    @return new dynamic type
    """
        ...
    def withSelectedFieldTypes(self, names: Collection[str]) -> Union[TypeMeta]:
    """
    Creates a new dynamic type with only the selected fields.
    
    @param names
           list of field names to select from this TypeMeta
    """
        ...
    @overload
    def objBuilder(self) -> ObjBuilder[O]:
    """
    @return new builder of instance of this type
    """
        ...
    @overload
    def objBuilder(self, initial: O) -> ObjBuilder[O]:
    """
    @return new builder of instance of this type with fields populated based on provided Obj
    """
        ...
    @overload
    def objBuilder(self, pkg: Pkg=None) -> ObjBuilder[O]:
    """
    @return builder of instance of this sub type of Typesys
    """
        ...
    def buildObj(self, builder: Callable[[ObjBuilder[O]]]=None) -> O:
    """
    @return object built by provided builder lambda
    """
        ...
    def emptyObj(self, pkg: Pkg=None) -> Union[Obj]:
    """
    @return empty instance of this type
    """
        ...
    def dereference(self, typeName: str, failIfMissing: bool=None) -> Union[Type]:
    """
    @return resolved C3 type from a string serialized reference to it. Type resolution happens in the scope if this
            type e.g. if provided string is a bound generic variable reference then this method will return type that
            is bound to that generic variable. It will also bind / resolve generic variable in the provided input
            string. E.g. assuming `K` is a generic variable in this type bound to `string` and `E` is bound to a
            `Duration` C3 type then `dereference("Pair<K,E>")` will return `Pair<string, Duration>`
    """
        ...
    def hasObjPool(self) -> bool:
    """
    True if instances of this type are pooled by fingerprint
    """
        ...
    @overload
    def call(self, methodType: MethodType, thisArg: Any, *args: Array[Any]) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For static methods #thisArg should be `null`.
    
    Note that args are expected to be of correct value type and no additional conversion will be performed.
    
    @see #callByName
    @see #callJson
    """
        ...
    @overload
    def call(self, method: Method, overloadIndex: int, thisArg: Any, *args: Array[Any]) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
    on argument value types.
    
    Note that args are expected to be of correct value type and no additional conversion will be performed.
    
    @see #callByName
    @see #callJson
    """
        ...
    @overload
    def call(self, action: str, thisArg: Any, *args: Array[Any]) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
    on argument value types.
    
    Note that while implementation will perform argument conversion it's most efficient to call with correct argument
    value types.
    
    @see #callByName
    @see #callJson
    """
        ...
    def callByName(self, action: str, args: Map[str, Any]=None) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For member methods args should contain `this` key. If target method is overloaded will match overload
    based on argument value types.
    
    Note that while implementation will perform argument conversion it's most efficient to call with correct argument
    value types.
    
    @see #call
    @see #callJson
    """
        ...
    def callByArgsAndKwargs(self, action: str, thisArg: Any, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. If target method is overloaded will match overload based on argument value types.
    
    Note that while implementation will perform argument conversion it's most efficient to call with correct argument
    value types.
    
    @see #call
    @see #callJson
    """
        ...
    @overload
    def callJson(self, action: str, input: any) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. Expectation is that input is a valid serialization of C3 Action named arguments including `this` in case
    of member actions. Return is a C3 value.
    
    @see #call
    @see #callByName
    """
        ...
    @overload
    def callJson(self, action: str, thisArg: any, args: any, kwargs: any) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. Expectation is that args is a valid serialization of C3 Action positional arguments and kwargs
    are a valid serialization of C3 Action named arguments.
    Return is a C3 value.
    
    @see #call
    @see #callByName
    """
        ...
    def callFromCodeGen(self, method: Method, overloadIndex: int, thisArg: Any, *args: Array[Any]) -> Union[T]:
    """
    Dispatch of the C3 Action from a Java Code Generated C3 type instances and implementations
    
    @see #call
    @see #callByName
    @see #callJson
    """
        ...
    def precompute(self, method: MethodType, thisArg: Any, keys: Array[K]=None, include: Include=None, exclude: Exclude=None) -> Union[Union[R,Map[K, R]]]:
    """
    @return result(s) of call(s) to this method [ aka precomputation ]; this is different then #call as potentially
            multiple calls are made for each key in a provided #keys argument or array from #precomputationKeys method.
            If method only has single precomputed result, e.g. method has no parameters, then a single result is
            returned, otherwise a map of results is returned.
    
    @see MethodType#hasSinglePrecomputedResult
    """
        ...
    @overload
    def instantiate(self) -> Union[O]:
    """
    @return empty instance of this type
    """
        ...
    @overload
    def instantiate(self, s: str) -> Union[O]:
    """
    @return new instance of this type based on provided string representation
    
    @see StringSerializable#fromString
    """
        ...
    @overload
    def instantiate(self, fields: Map[FieldType, Any], pkg: Pkg=None, state: BitSet=None) -> Union[O]:
    """
    @return new instance of this type with the specified fields
    """
        ...
    @overload
    def instantiate(self, fields: Any, pkg: Pkg=None, state: BitSet=None) -> Union[O]:
    """
    @return new instance of this type using the language-specific construction mechanism
    
    @see Obj#make
    """
        ...
    def scope(self) -> TypesysScope:
    """
    @return type system scope for building / binding declared fields and value types.
    """
        ...
    def javaInterface(self) -> Union[Any]:
    """
    @return Java class for interface for instances of this type or null
    """
        ...
    def constraintDepFields(self) -> Union[Array[FieldPath]]:
    """
    @return The set of all fields that constraints depend on in this type.
    """
        ...
    def dbDomain(self) -> Union[Db.Domain]:
    """
    @return {@link Db.Domain} if this entity type belongs to a specific Db.Domain
    
    @see Ann.Db#domain
    """
        ...
    def targetAppExpr(self) -> Union[Expr]:
    """
    @return {@link Expr} for calculating target app id to call for type
    
    @see Ann.Call#app
    """
        ...
    def targetNodeRoleExpr(self) -> Union[Expr]:
    """
    @return {@link Expr} for calculating target server role for this type
    
    @see Ann.Call#serverRole
    """
        ...
    def targetNodePoolExpr(self) -> Union[Expr]:
    """
    @return {@link Expr} for calculating target server node pool for this type
    
    @see Ann.Call#nodePool
    """
        ...
    def targetNodeExpr(self) -> Union[Expr]:
    """
    @return {@link Expr} for calculating target server node for this type
    
    @see Ann.Call#node
    """
        ...
    def targetThreadPoolExpr(self) -> Union[Expr]:
    """
    @return {@link Expr} for calculating target thread-pool for this type
    
    @see Ann.Call#threadPool
    """
        ...
    def hasConstraintDepFields(self) -> bool:
    """
    @return True if any constraints have any fields they depend on.
    """
        ...
    def fieldTypesWithInitialValue(self) -> Union[Array[FieldType]]:
    """
    @return A list of field types that will have non-null values on Obj instantiation (e.g. fields with default values
    on types that aren't entity types as well as boolean fields)
    """
        ...
    def conditionalConstraint(self) -> Union[Pair[Expr.Compiled[Obj, bool], str]]:
    """
    @returns the conditional constraint, if any, for the type.
    """
        ...
    def actionEngineScope(self, actionEngine: str) -> Union[Any]:
    """
    @return cached and shared scope / compiled unit of given Action.Engine for this type.
    """
        ...
    def hasEventStream(self) -> bool:
    """
    @return `true`, if this is an EventStream or has fields of type EventStream.
    """
        ...
    def subTypeForTypeIdent(self, typeIdent: str, failIfInvalid: bool=None) -> Union[Type]:
    """
    @return extension type at any level with provided typeIdent.
    """
        ...
    def isValidTypeIdent(self, typeIdent: str) -> bool:
    """
    @return True if the typeIdent is valid for any subtype of this type.
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
    def remix(self, remixType: TypeMeta) -> TypeMeta:
    """
    @return remixed type by merging annotations, fields and methods from a provided #remixType into this one
    """
        ...
    def repository(self) -> Union[str]:
    """
    Get repository type belongs to.
    """
        ...
    def ensureValidFieldNames(self) -> TypeMeta:
    """
    Ensures that this TypeMeta contains field names that can be parsed by Type System DSL. For example,
    "hello:world" is an invalid field name because it contains the ":" character which is used as a delimiter between
    field name and ValueType.
    
    @return new TypeMeta with invalid field names replaced with valid field names
    """
        ...
    def isAnyExpr(self) -> bool:
        ...
    def compiledExpr(self, expr: str) -> Expr.Compiled[Any, Any]:
    """
    @return cached compiled expr for the given expression for given type.
    Only use this method if you are going to invoke the same expression multiple times
    """
        ...
    def keyField(self) -> str:
    """
    @return key field if this C3 Type is a subtype of {@link WithKey}
    """
        ...
    def parentDirPathInRepo(self) -> Union[str]:
    """
    Get the path in repository to directory containing type.
    """
        ...
    def setPrototype(self, prototype: TypeMeta) -> None:
        ...
    def retainedObjs(self, filter: str=None, offset: int=None, limit: int=None) -> Union[Stream[Obj]]:
        ...
    def allocated(self) -> Union[int]:
        ...
    def hasConfiguredAnnotations(self) -> bool:
        ...
    def isAnnotationType(self) -> bool:
        ...
    def isPlatformType(self) -> bool:
        ...
    def isEvaluatable(self) -> bool:
        ...
    def isConstant(self, fieldName: str) -> bool:
    """
    @return True if the given field is a constant, i.e., fixed to its default value.
    """
        ...
    def fieldReferenceType(self, name: str) -> Union[ReferenceType]:
    """
    Reference type for the provided reference field type name.
    
    @param name
           of the reference typed field
    @return a reference type for the field
    """
        ...
    def dependencies(self) -> TypeMetaDeps:
    """
    Calculates all "forward" dependencies of this type to other types or metadata elements
    """
        ...
    def fingerprintWithDeps(self) -> int:
    """
    @return fingerprint / checksum of this type including it's dependencies
    
    @see Fingerprintable#fingerprint
    """
        ...
    def metaElementAt(self, line: int, charInLine: int) -> Union[Typesys]:
    """
    Retrieves child metadata element at character position in the declaration of this C3 type
    
    @param line
           line number starting with 1 in the source file
    @param charInLine
           character position in a line starting with 1 in the source file
    @return child metadata element at character position in the declaration of this C3 type
    """
        ...
    def declaredMetaElements(self) -> Union[Map[int, Array[Typesys]]]:
    """
    @return map of declared child metadata elements where key is source line number starting with 1 in a c3typ and
            values are elements declared on that line ordered by declaration character position
    """
        ...
    def toTupleType(self) -> Union[TupleType]:
    """
    @return named TupleType for the given TypeMeta
    """
        ...
    def toSubtype(self) -> Any:
        ...
    def _javaSubtype(self, mixin: str) -> Union[Any]:
        ...
    def _myJavaMethods(self) -> Union[Any]:
        ...
    def _javaMethods(self, mixin: str) -> Union[Any]:
        ...
    def avroSchema(self) -> Union[Any]:
        ...
    def searchableFields(self) -> Union[Array[str]]:
    """
    Returns the field names of all of the fields on a {@link Searchable} type with the {@link Ann.Search} annotation
    """
        ...
    def doNotCacheNulls(self) -> bool:
    """
    @return True then 'null' values will not be cached.
    """
        ...
    @classmethod
    def all(cls, names: Array[str]=None, includeInnerTypes: bool=None) -> Union[Map[str, TypeMeta]]:
    """
    Returns the {@link TypeMeta} of the types.
    
    @param names
           Names of the types to filter on. Action will throw an exception if a passed type name is null or invalid.
           If empty, it returns {@link TypeMeta} for all the types.
           If not empty, only returns the {@link TypeMeta} for the passed type names.
    @param includeInnerTypes
           Includes inner {@link TypeMeta}s if set to true
    """
        ...
    @classmethod
    def inferTypeMetaFromJson(cls, jsons: Stream[any], spec: InferTypeSpec=None) -> TypeMeta:
    """
    Generates an {@link TypeMeta} based on the json provided
    
    e.g TypeMeta.inferTypeMetaFromJson
                ([{location: 'USA', power: 300}, { location: 'Canada', power: 100}])
    will yield a type with fields: location: string and power: double
    
    @param jsons
            The json objects to use for inference
    @param spec
            Settings to apply to the type inference
    @return a TypeMeta for the provided jsons
    """
        ...
    @classmethod
    def inferTypeMetaFromJsonBatch(cls, jsonStreams: Stream[Stream[any]], spec: InferTypeSpec=None) -> Array[TypeMeta]:
    """
    Generates a list of {@link TypeMeta} corresponding to each stream of json provided
    @param jsonStreams
            The individual json streams to use for each inference
    @param spec
            Settings to apply to each type inference
    @return an inferred {@link TypeMeta} for each jsonStream
    """
        ...
    def validateSourceCode(self) -> Union[Map[str, Array[Pkg.Issue]]]:
    """
    Validates the source code of this type for various action requirements.
    
    @return a map of action requirement to list of issues found in the source code for that action requirement
    """
        ...
    @classmethod
    def rawTypeMeta(cls, typeMeta: DataFusionUiTypeMeta=None) -> Union[TypeMeta]:
    """
    Converts the {@link DataFusionUiTypeMeta} to {@link TypeMeta}
    
    @param typeMeta
            The `DataFusionUiTypeMeta` object.
    @returns A `TypeMeta` instance that is compatible with the type system.
    """
        ...
    @classmethod
    def sanitizeFieldNames(cls, typeMeta: DataFusionUiTypeMeta=None, reservedFieldNames: Set[str]=None) -> Union[DataFusionUiTypeMeta]:
    """
    Sanitizes the field names within a DataFusionUiTypeMeta object.
    
    @param typeMeta
          The DataFusionUiTypeMeta object.
    @param reservedFieldNames
           A set of reserved field names that should not be used.
    @returns A new DataFusionUiTypeMeta object with sanitized field names.
    """
        ...
    @classmethod
    def addAnnotations(cls, typeMeta: DataFusionUiTypeMeta=None, annotations: Array[any]=None) -> Union[DataFusionUiTypeMeta]:
    """
    Adds annotations to the provided DataFusionUiTypeMeta object and merges the duplicate annotations.
    
    @param typeMeta
          The DataFusionUiTypeMeta object.
    @param annotations
           .
    @returns A new DataFusionUiTypeMeta object with the added annotations.
    """
        ...
    @classmethod
    def addMixins(cls, typeMeta: DataFusionUiTypeMeta=None, mixins: Array[str]=None) -> Union[DataFusionUiTypeMeta]:
    """
    Adds mixins to the provided DataFusionUiTypeMeta object and merges the duplicate mixins.
    
    @param typeMeta
         The DataFusionUiTypeMeta object.
    @param mixins
         An array of strings, where each string represents the name of a mixin to add.
    @returns A new DataFusionUiTypeMeta object with the added mixins.
    """
        ...
    @classmethod
    def setMixins(cls, typeMeta: DataFusionUiTypeMeta=None, mixins: Array[str]=None) -> Union[DataFusionUiTypeMeta]:
    """
    Sets the mixins for the provided DataFusionUiTypeMeta object. Replaces the existing mixins.
    
    @param typeMeta
           The DataFusionUiTypeMeta object whose mixins will be set.
    @param mixins
            An array of strings, where each string represents a mixin name to be set.
            The existing mixins will be completely replaced by this array.
    @returns A new DataFusionUiTypeMeta object with the specified mixins.
    """
        ...
    @classmethod
    def initializeUiSettings(cls, typeMeta: DataFusionUiTypeMeta=None, uiSettings: DataFusionUiDeclaredFieldTypeUiSettings=None) -> Union[DataFusionUiTypeMeta]:
    """
    Initializes the `uiSettings` property of the provided DataFusionUiTypeMeta object.
    
    @param typeMeta
           The DataFusionUiTypeMeta object.
    @param uiSettings
           The DataFusionUiDeclaredFieldTypeUiSettings object to set as the `uiSettings` property.
    @returns A new DataFusionUiTypeMeta object with the initialized `uiSettings`.
    """
        ...
    @classmethod
    def getPersistableMappedToIdentityCanonical(cls, typeMetasCache: Map[str, TypeMeta], type: TypeMeta) -> Union[str]:
    """
    Returns mixin name of Type Persistable if it is Identity Canonical and undefined otherwise
    
    @param typeMetasCache
    @param type
           Canonical TypeMeta
    """
        ...
    @classmethod
    def getIdentityCanonicalNameForPersistable(cls, persistableName: str) -> str:
        ...
    @classmethod
    def getTargetDeclaredFieldTypesForIdentityCanonical(cls, typeMetasCache: Map[str, TypeMeta]=None, target: TypeMeta=None) -> Union[Array[any]]:
        ...

