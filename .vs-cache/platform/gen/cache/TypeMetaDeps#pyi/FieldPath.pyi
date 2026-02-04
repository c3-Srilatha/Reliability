#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.ReferenceType import ReferenceType
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.CollectionType import CollectionType
from c3.platform.FieldType import FieldType

# Python definitions for the C3 type FieldPath


class FieldPath(StringSerializable, Value):
    """
    A "field path" is a simple expression for referencing a field from an Obj. The field can either be on the Obj
    itself, in which case the path is just the name, or it can be a field on a child Obj or within a collection field.
    A child field is represented by separating the names with periods (`address.city`).
    
    The "root" is the Obj from which the field path is valid. The "referenced" field is the last component of the path.
    
    The field path need not be valid in the sense that not all fields need to exist. If the #parse method is called
    without failIfInvalid, it will be structurally complete, but the parts which don't exist will not have a
    #fieldPath and children down the path will not have a #parentType.
    
    Path components may include collections and individual elements of the collection may be specified. In addition,
    for collections whose elements are Objs the path may continue through them into fields of those Objs. An element
    in a collection is specified using traditional array notation: `[` _elt_ `]`. For
    {@link CollectionType#isIndexed indexable collections}, notably {@link Array} and {@link Set}, the _elt_ may be a
    zero-based integer index (`[0]`). For {@link Map} and Set, and it may be the string serialized version of the key
    plain (`[x]`) or quoted as a string (`["x"]`). If the key looks like an integer or contains a bracket, it must be
    a quoted string. Quotes within the string must be escaped as usual, and either single- (`'`) or double-quotes (`"`)
    may be used.
    
    For example, from the *Animal* type, the path "friends[0].name" will reference through the `friends` array field and
    will have the value type `string` (since Animal.name is a string). When used with {@link Obj#fieldValueAtPath}, this
    will get the name of the first friend. From *Octopus*, "hearts[systemic].active" will determine if the systemic
    heart is active.
    
    @remarks this represents a made instance of FieldPath
    """
    def __init__(self) -> None: ...

    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[FieldPath]:
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
    @classmethod
    def make(cls, s: str) -> Union[FieldPath]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    def rootType(self, failIfInvalid: bool=None) -> Union[Type]:
    """
    Get the actual type information for the root type referenced by name.
    """
        ...
    def rootTypeMeta(self, failIfInvalid: bool=None) -> Union[TypeMeta]:
    """
    Get the actual type information for the root type referenced by name.
    """
        ...
    def root(self) -> FieldPath:
    """
    The root of the field path
    """
        ...
    def parentType(self, failIfInvalid: bool=None) -> Union[Type]:
    """
    Get the actual type information for the immediate type of the referenced field.
    """
        ...
    def parentTypeMeta(self, failIfInvalid: bool=None) -> Union[TypeMeta]:
    """
    Get the actual type information for the immediate type of the referenced field.
    """
        ...
    def dereference(self, failIfInvalid: bool=None) -> Union[Type]:
    """
    If the path ends with a reference field or a collection of references, return the type of the reference.
    """
        ...
    def dereferenceMeta(self, failIfInvalid: bool=None) -> Union[TypeMeta]:
    """
    If the path ends with a reference field or a collection of references, return the type of the reference.
    """
        ...
    def leafName(self, failIfInvalid: bool=None) -> Union[str]:
    """
    Get the name of the referenced field (last component of the path).
    """
        ...
    def leafFieldType(self, failIfInvalid: bool=None) -> Union[FieldType]:
    """
    Get the declaration of the referenced field (last component of the path).
    """
        ...
    @classmethod
    def parse(cls, type: Type, path: str, failIfInvalid: bool=None) -> Union[FieldPath]:
    """
    Parse the path on the given type
    """
        ...
    @classmethod
    def parseChild(cls, parent: FieldPath, type: Type, ft: FieldType) -> Union[FieldPath]:
    """
    Parse the path with the parent FieldPath on the given type for the given field type
    """
        ...
    def parent(self) -> Union[FieldPath]:
    """
    Immediate parent field in the path.
    """
        ...
    def index(self) -> Union[Union[int,str]]:
    """
    If this element of the path is a collection index, the index value. An `int` index is used for indexable
    collections, such as arrays and sets (and maps if indexed). A `string` index is used for unique collections
    such as sets (elements) and maps (keys).
    """
        ...
    def isIndexed(self) -> bool:
    """
    Whether this element of the path includes a collection index.
    
    @see #index
    """
        ...
    def pathToIncludingStoredType(self) -> Union[FieldPath]:
    """
    Dot separated path of this field from the root to the first deepest ancestor type.
    Null if root type is including stored type.
    """
        ...
    def includingMapField(self) -> Union[FieldPath]:
    """
    First ancestor field path that is a map.
    """
        ...
    def includingMapType(self) -> Union[CollectionType]:
    """
    Collection type of first ancestor field path that is a collection.
    """
        ...
    def qualifiedPath(self) -> Union[str]:
    """
    Fully qualified dot separated path of this field including root type name.
    """
        ...
    def referenceType(self) -> Union[ReferenceType]:
    """
    Reference type of this field if it's a reference or collection of reference.
    """
        ...
    def pathInRootType(self) -> Union[str]:
    """
    Dot separated path of this field in the root type.
    """
        ...
    def isPersistable(self) -> bool:
    """
    @return if field is persistable
    """
        ...
    def isCollection(self) -> bool:
    """
    @return true if field is a collection
    """
        ...
    def pathInIncludingStoredType(self) -> Union[str]:
    """
    Dot separated path of this field in the first persistable ancestor type.
    """
        ...
    def pathInIncludingType(self, type: Type) -> Union[str]:
    """
    Dot separated path of this field in the specified type. This type should be in the parent chain of this field otherwise
    path in the root type will be returned.
    """
        ...
    def pathInIncludingStoredTypeOrCollection(self) -> Union[str]:
    """
    Dot separated path of this field in the first persistable ancestor type or first ancestor collection.
    """
        ...
    def includingStoredType(self) -> Union[Type]:
    """
    First ancestor type that is persistable.
    """
        ...
    def fieldType(self) -> Union[FieldType]:
    """
    Field type of this field.
    """
        ...
    def fieldTypeFromObj(self, inst: Obj) -> Union[FieldType]:
    """
    Leaf field type by traversing from given Obj instance.
    """
        ...
    def name(self) -> Union[str]:
    """
    Name of this field.
    """
        ...
    def nameAndIndex(self, serialized: bool=None) -> Union[str]:
    """
    Name of this field, including the collection index if any.
    """
        ...
    def valueType(self) -> Union[ValueType]:
    """
    Value type of this field.
    """
        ...
    def columnType(self) -> Union[ValueType]:
    """
    For paths which go through collection fields column type is array of valueType otherwise valueType.
    """
        ...
    def includingCollection(self) -> Union[FieldPath]:
    """
    First collection field from the parent chain where this field is persisted. Generally speaking field is persisted
    either in the parent persistable type, or in the first ancestor persistable type or in a first ancestor collection.
    """
        ...
    def includingStoredField(self) -> Union[FieldPath]:
    """
    First non-included reference field from the parent chain where this field is persisted.
    """
        ...
    @overload
    def each(self, action: Callable[[FieldPath]]) -> None:
    """
    Walk the path by calling action for each field starting from root
    """
        ...
    @overload
    def each(self, action: Callable[[FieldPath, int, bool]]) -> None:
    """
    Walk the path by calling action for each field starting from root
    """
        ...
    @overload
    def fold(self, folder: Callable[[FieldPath, Union[T]], Union[T]]) -> Union[T]:
    """
    Walk the path by calling action and accumulating result into a single value
    """
        ...
    @overload
    def fold(self, folder: Callable[[FieldPath, int, bool, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Walk the path by calling action and accumulating result into a single value
    """
        ...
    def withFieldType(self, fieldType: FieldType) -> FieldPath:
    """
    Creates a new field path as a copy of this one, replacing the field type
    with the requested field type
    
    @param fieldType
           requested new field type
    @return new field type based on this one with the new requested field type
    """
        ...
    def isUnique(self) -> bool:
    """
    True if this field has an annotation `hasUnique` set
    """
        ...
    @overload
    def traverse(self, fieldName: str, failIfInvalid: bool=None) -> Union[FieldPath]:
    """
    Traverses this reference or reference collection by adding a new child
    field based on fieldName and returns new FieldPath.
    <p>
    If verify argument is set to true then will throw an exception if fieldName is invalid
    """
        ...
    @overload
    def traverse(self, fieldParentType: Type, fieldName: str, failIfInvalid: bool=None) -> Union[FieldPath]:
    """
    Traverses this reference or reference collection by adding a new child
    field based on fieldName and returns new FieldPath.
    <p>
    If verify argument is set to true then will throw an exception if fieldName is invalid
    """
        ...
    @overload
    def append(self, refType: Type, ft: FieldType) -> FieldPath:
    """
    Adds a field path to the end of this field path for a ref type and field type. The ref type may be different than
    the ref type for this field path as this is used to create field paths for calc expressions that reference
    extension fields not defined in the base reference type
    """
        ...
    @overload
    def append(self, refType: TypeMeta, ft: FieldType) -> FieldPath:
    """
    Adds a field path to the end of this field path for a ref type and field type. The ref type may be different than
    the ref type for this field path as this is used to create field paths for calc expressions that reference
    extension fields not defined in the base reference type
    """
        ...
    def first(self) -> FieldPath:
    """
    First field in the original path.
    """
        ...
    def isFkeyRef(self) -> bool:
    """
    @return true if this field is any kind of fkey ref (one-2-one or one-2-many or many-2-many)
    """
        ...
    def isFkeyRefArray(self) -> bool:
    """
    @return whether this value type is an fkey reference arry field.
    """
        ...
    def fkeyRefKey(self) -> Union[str]:
    """
    @return field path that is a key in the source type for a read only one to many relationship.
    """
        ...
    def fkeyRefKeyField(self) -> Union[FieldPath]:
    """
    @return field path that is a key in the source type for a read only one to many relationship.
    """
        ...
    def fkeyRefFkey(self) -> Union[str]:
    """
    @return field path that is a foreign key in the reference type for a read only one to many
            relationship.
    """
        ...
    def fkeyRefFkeyField(self) -> Union[FieldPath]:
    """
    @return field path that is a foreign key in the reference type for a read only one to many
            relationship.
    """
        ...
    def fkeyRefOrder(self) -> Union[str]:
    """
    @return order spec to be used for a read only one to many relationship.
    """
        ...
    def traverseFieldPath(self, fieldPath: str) -> Union[FieldPath]:
    """
    @return A new field path constructed by appending the input field path to this field path from this field path's root
             type.
    """
        ...
    def traverseSer(self, fieldName: str, failIfMissing: bool=None) -> Union[FieldPath]:
    """
    @return A new field path constructed by traversing this field or serialized field from this field path's root type
    """
        ...
    def children(self) -> Union[Array[FieldPath]]:
    """
    @return Array of field paths of the reference type of this field. If this field is not a ref or ref array
            or map returns empty array.
    """
        ...
    def collectionTableName(self, doNotFailOnError: bool=None) -> Union[str]:
    """
    @return The physical table name to use in relational queries for the collection.
    """
        ...
    def collectionType(self) -> Union[CollectionType]:
    """
    @return The CollectionType for the field if the field is a collection field and null otherwise.
    """
        ...
    def calcExprDepFields(self) -> Union[Array[FieldPath]]:
    """
    @return the list of all fields that the calc expression that this field depends on if it is calculated.
    """
        ...
    def serName(self) -> Union[str]:
    """
    Serialization name of this field.
    """
        ...
    def fullSerPath(self) -> Union[str]:
    """
    Fully serialized path of this field.
    """
        ...

