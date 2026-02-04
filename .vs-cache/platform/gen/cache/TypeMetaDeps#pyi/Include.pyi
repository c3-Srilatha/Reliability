#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.MethodType import MethodType
from c3.platform.ValueType import ValueType
from c3.platform.FieldType import FieldType

# Python definitions for the C3 type Include


class Include(Value, StringSerializable):
    """
    Represents an include specification that controls which fields and nested data are fetched when loading entities
    from the C3 AI Agentic Platform data store. Include specifications define a tree structure of field paths that
    determine the scope of data retrieval operations, enabling precise control over data loading patterns and
    performance optimization.
    
    The Include Type provides programmatic access to parse, manipulate, and validate include specifications used in
    fetch operations. Include specifications are expressed as string-based field path lists that support nested
    references, allowing applications to load related data in a single fetch operation rather than requiring multiple
    round trips to the data store.
    
    ## Quick Reference Examples
    
    ### Parsing Include Specifications
    
    ```js
    // Parse an include specification for a type
    var include = Include.parse(Building, "[address, owner.name, units.tenant.email]");
    
    // Check if a field is included
    if (include.has("address")) {
      // Address field is included
    }
    
    // Navigate to a nested include
    var ownerInclude = include.get("owner", false);
    if (ownerInclude) {
      var ownerFields = ownerInclude.children();
    }
    ```
    
    ### Merging Include Specifications
    
    ```js
    // Merge two include specifications
    var merged = Include.mergeExprs(Building,
      "[address, city]",
      "[owner.name, owner.email]");
    // Result: "[address, city, owner.name, owner.email]"
    
    // Add type fields for polymorphic references
    var withTypeFields = Include.addRefTypeFields(Building, merged);
    ```
    
    ### Validating Include Specifications
    
    ```js
    // Check if one include is a subset of another
    var isSubset = Include.isSubsetOf(Building,
      "[address, city]",
      "[address, city, state]");
    // Returns true
    
    // Verify include contains only fields
    var onlyFields = Include.includesOnlyFields(Building, "[address, city]");
    // Returns true
    ```
    
    ### Expanding Dependencies
    
    ```js
    // Expand include to include stored calculation dependencies
    var expanded = Include.includeDependencies("Building", "totalArea");
    // Returns include specification with dependent fields added
    
    // Extract field paths from include specification
    var paths = Include.fieldPaths(Building, "[address, owner.name, units.tenant.email]");
    // Returns: ["address", "owner.name", "units.tenant.email"]
    ```
    
    @see FetchSpec
    @see FieldPath
    @see Type
    @see FieldType
    @see MethodType
    
    @remarks this represents a made instance of Include
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
    def fromString(cls, s: str) -> Union[Include]:
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
    def make(cls, s: str) -> Union[Include]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    def name(self) -> Union[str]:
    """
    Returns the name of the field or method at this node in the Include tree.
    For a nested path like `a.b.c`, this returns only the final component (`"c"`), not the full path.
    
    @return
       the field or method name, or null for the root node
    @see #get
    @see #children
    """
        ...
    def isField(self) -> bool:
    """
    Checks if this Include node represents a field reference. Include nodes can represent fields, methods, or "this"
    (all fields). Use this to distinguish field references when processing include trees or validating include
    specifications.
    
    @return
       true if this node represents a field, false if it represents a method or "this"
    
    @see #isMethod
    @see #isThis
    @see #fieldType
    """
        ...
    def isMethod(self) -> bool:
    """
    Checks if this Include node represents a method invocation. Include specifications can reference methods in
    addition to fields. Use this to identify method nodes when validating that includes contain only fields or when
    processing method-based includes differently.
    
    @return
       true if this node represents a method, false if it represents a field or "this"
    
    @see #isField
    @see #isThis
    @see #methodType
    """
        ...
    def isThis(self) -> bool:
    """
    Checks if this Include node represents "this", which is a wildcard that includes all fields of a type. The "this"
    keyword in include specifications provides a shorthand for including all fields without enumerating them
    individually.
    
    @return
       true if this node represents "this", false if it represents a specific field or method
    
    @see #isField
    @see #isMethod
    @see #withThis
    """
        ...
    @classmethod
    def isSubsetOf(cls, typ: Type, expr: str, otherExpr: str) -> bool:
    """
    Determines if one include is a subset of another include for a given type. An include is a subset if all fields
    present in the first include are also present in the second include.
    
    @param typ
       type for the include
    @param expr
       include expression to test as subset
    @param otherExpr
       include expression to test as superset
    
    @return
       true if expr is a subset of otherExpr
    
    @see #includesOnlyFields
    @see #mergeExprs
    """
        ...
    @classmethod
    def includesOnlyFields(cls, typ: Type, expr: str) -> bool:
    """
    Determines if an include expression, applied to a type, only has children for fields in that type. This method
    validates that the include specification references only field members and does not include method invocations.
    
    @param typ
       type for the include
    @param expr
       include expression to validate
    
    @return
       true if expr, applied to typ, only has children for fields in that type
    
    @see #isSubsetOf
    @see #fieldPaths
    """
        ...
    @classmethod
    def mergeExprs(cls, typ: Type, expr: str, otherExpr: str) -> Union[str]:
    """
    Logically merges two include expressions into a single include expression containing all fields from both
    expressions. The merge operation combines field paths and nested includes, eliminating duplicates.
    
    @param typ
       type for the include
    @param expr
       first include expression to merge
    @param otherExpr
       second include expression to merge
    
    @return
       logical merged include expression containing all fields from expr and otherExpr
    
    @see #isSubsetOf
    @see #with
    """
        ...
    @classmethod
    def addRefTypeFields(cls, typ: Type, include: str) -> Union[str]:
    """
    Adds typeIdent and typeWithBindings fields to an include for any entity reference that does not include other
    fields from the referenced type. This operation allows returned references to be of the proper polymorphic type
    by including the necessary type identification fields.
    
    @param typ
       type for the include
    @param include
       include to add reference type fields to
    
    @return
       new include string with requested reference type fields added
    
    @see #parse
    @see #mergeExprs
    """
        ...
    def fieldType(self) -> Union[FieldType]:
    """
    Returns the {@link FieldType} metadata for the field represented by this Include node. Use this to access field
    properties such as type information, persistence settings, or validation rules when processing field-based
    includes. Only valid when isField returns true; returns null for method or "this" nodes.
    
    @return
       the FieldType of this field, or null if this is not a field node
    
    @see #isField
    @see #methodType
    @see #valueType
    """
        ...
    def methodType(self) -> Union[MethodType]:
    """
    Returns the {@link MethodType} metadata for the method represented by this Include node. Use this to access
    method properties such as return type, parameters, or annotations when processing method-based includes. Only
    valid when isMethod returns true; returns null for field or "this" nodes.
    
    @return
       the MethodType of this method, or null if this is not a method node
    
    @see #isMethod
    @see #fieldType
    @see #valueType
    """
        ...
    def keys(self) -> Union[Array[Any]]:
    """
    Returns the keys for map or array subsetting operations. This method is used when the include specification
    contains key-based filtering for collection fields.
    
    @return
       array of keys for subsetting operations
    """
        ...
    def valueType(self) -> Union[ValueType]:
    """
    Returns the {@link ValueType} of the field or method represented by this Include node. Use this to obtain type
    information regardless of whether the node represents a field or method, providing a unified way to access value
    types when processing include specifications.
    
    @return
       the ValueType of this field or method
    
    @see #fieldType
    @see #methodType
    """
        ...
    def dereference(self, failIfMissing: bool=None) -> Union[Type]:
    """
    Dereferences a reference type to get the underlying {@link Type}. If the field is not a reference type, returns
    the field's type directly.
    
    @param failIfMissing
       if true, throws an exception if the type cannot be dereferenced; if false, returns null
    
    @return
       the dereferenced Type, or null if failIfMissing is false and dereferencing fails
    
    @see #fieldType
    @see #valueType
    """
        ...
    def has(self, field: str) -> bool:
    """
    Checks if a child field is included in this Include node. Use this to verify child existence before navigating
    the include tree with get, avoiding exceptions when conditionally processing nested includes.
    
    @param field
       the name of the child field to check
    
    @return
       true if the child field is included, false otherwise
    
    @see #get
    @see #children
    """
        ...
    def get(self, field: str, failIfMissing: bool=None) -> Union[Include]:
    """
    Navigates to a child Include node for the specified field in the include tree hierarchy. Use this to traverse
    nested include specifications and access deeper levels of the include structure when processing complex field
    paths.
    
    @param field
       the name of the child field to retrieve
    @param failIfMissing
       if true, throws an exception if the field is not found; if false, returns null
    
    @return
       the child Include for the specified field, or null if not found and failIfMissing is false
    
    @see #has
    @see #children
    """
        ...
    def children(self) -> Union[Array[Include]]:
    """
    Returns all child Include nodes contained within this Include. Use this to iterate over all direct children when
    processing include trees, validating include specifications, or building field path lists from include
    structures.
    
    @return
       array of all child Include objects
    
    @see #get
    @see #has
    """
        ...
    def with(self, other: Include) -> Include:
    """
    Merges this Include with another Include, combining their field specifications. The result includes all fields
    from both includes.
    
    @param other
       the other Include to merge with this one
    
    @return
       a new Include containing the merged field specifications
    
    @see #mergeExprs
    @see #withThis
    """
        ...
    def withThis(self) -> Include:
    """
    Adds "this" to the Include, which represents all fields of the type. This method is useful when including all
    fields in addition to specific nested includes.
    
    @return
       a new Include with "this" added
    
    @see #with
    @see #isThis
    """
        ...
    @classmethod
    def parse(cls, typ: Type, include: str) -> Union[Include]:
    """
    Parses an include string specification into an Include object for the given {@link Type}. The include string
    follows the syntax: `[field1, field2.nestedField, field3]`
    
    @param typ
       the Type to parse the include specification against
    @param include
       the include string specification to parse
    
    @return
       the parsed Include object, or null if the include string is null or empty
    
    @see #concat
    @see #fieldPaths
    """
        ...
    def root(self) -> Include:
    """
    Returns the root Include in the include hierarchy. This method is useful for navigating back to the top-level
    include from a nested child include.
    
    @return
       the root Include object
    
    @see #children
    @see #get
    """
        ...
    @classmethod
    def concat(cls, *parts: Array[str]) -> Union[str]:
    """
    Concatenates multiple include specification strings into a single include string. This method is useful for
    programmatically building complex include specifications.
    
    @param parts
       variable number of serialized Include strings to concatenate
    
    @return
       a single concatenated include specification string
    
    @see #parse
    @see #mergeExprs
    """
        ...
    @classmethod
    def includeDependencies(cls, typeName: str, includeSpec: str) -> Union[str]:
    """
    Returns the include specification with existing fields plus dependent fields based on stored calculation
    dependencies. This method expands the include specification to include all fields required by stored
    calculations referenced in the original specification.
    
    For example, if the include specification is `a.b.c, x.y.z` and field `a` is a stored calculation that depends
    on `a1.a2`, and field `y` is a stored calculation that depends on `y1.y2`, this method returns
    `a.b.c, a1.a2.b.c, x.y.z, x.y1.y2.z`.
    
    @param typeName
       starting type for the include string
    @param includeSpec
       include specification from the starting type
    
    @return
       the expanded form of the include specification based on stored calculation dependencies
    
    @see #parse
    @see #fieldPaths
    """
        ...
    @classmethod
    def fieldPaths(cls, type: Type, include: str) -> Union[Array[str]]:
    """
    Parses an include specification and produces a list of matching field paths. This method supports the syntax
    used by the {@link Persistable#fetch} {@link FetchSpec#include} specification.
    
    @param type
       the Type to parse the include specification against
    @param include
       the include specification to parse
    
    @return
       array of field path strings extracted from the include specification
    
    @see #parse
    @see #includesOnlyFields
    """
        ...

