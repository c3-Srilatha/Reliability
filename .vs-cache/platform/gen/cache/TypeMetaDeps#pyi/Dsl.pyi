#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DslPrintSpec import DslPrintSpec
from c3.platform.FunctionType import FunctionType
from c3.platform.Annotation import Annotation
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Pkg import Pkg
from c3.platform.TypeDefaultUi import TypeDefaultUi
from c3.platform.ValueType import ValueType
from c3.platform.Expr import Expr
from c3.platform.FieldType import FieldType

# Python definitions for the C3 type Dsl


class Dsl(StringSerializable, Value):
    """
    Parsing and printing type and default UI declarations in "Domain Specific Language" files. Types are declared in
    text `.c3typ` files. Typically one per type, although it is possible to declare nested types within a
    type.
    
    Default UIs allow user interface metadata to be added to a type. Note that this is generic presentation information
    for the type and its fields, not a particular custom UI representation. Default UIs are declared in text
    `.c3ui` files.
    
    Note that "parsing" doesn't produce fully final types. In particular, parsing only validates syntax and structure,
    but not the validity of references. In order to turn parsed types into a fully "built" types, they must be
    validated and bound to a type scope (typically a package).
    
    
    Also, this type may be used with `string serialized Dsl` to indicate a complete type or default ui DSL.
    
    @remarks this represents a made instance of Dsl
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
    def fromString(cls, s: str) -> Union[Dsl]:
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
    def make(cls, s: str) -> Union[Dsl]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def isIdentifier(cls, s: str) -> bool:
    """
    Whether the specified string is a valid identifier in DSL files. Identifiers are used for:
    
     - type names
     - field names
     - method names
     - method parameter names
    
    Identifiers must begin with a letter (in any language) or an underscore. It may contain more letters and digits
    and underscores. By "letter" here we mean Unicode categories `Ll`, `Lu`, `Lm` and `Lo`, so "万里长城" is a valid
    identifier.
    
    Other than underscore (`_`), punctuation is _not_ allowed in identifiers. In particular periods in type names
    used for a path of inner (nested) types: `Parent.Child` is used to reference the inner type "Child" within the
    type "Parent".
    
    Note that generally DSL keywords are allowed as identifiers as well so this type is valid:
    
    ```
    type type {
      string:   string
      function: function(int: int)
    }
    ```
    """
        ...
    @overload
    @classmethod
    def parseType(cls, dsl: str, pkg: Pkg) -> TypeMeta:
    """
    Parse a single type file (`.c3typ`) and return the built type. If any errors are encountered, an exception is
    thrown. Warnings are ignored.
    
    @param dsl
           the contents of the type declaration file
    @param pkg
           the containing package
    @return built type instance
    """
        ...
    @overload
    @classmethod
    def parseType(cls, dsl: str, rootPkg: Pkg, pkgPath: str) -> TypeMeta:
    """
    Parse a single type file (`.c3typ`) and return the built type. If any errors are encountered, an exception is
    thrown. Warnings are ignored.
    
    @param dsl
           the contents of the type declaration file
    @param rootPkg
           the root package where this type is getting loaded
    @param pkgPath
           full package path starting `/`
    @return built type instance
    """
        ...
    @overload
    @classmethod
    def parseUi(cls, dsl: str, pkg: Pkg) -> TypeDefaultUi:
    """
    Parse a single default UI file (`.c3ui`) and return the built default UI. If any errors are encountered, an
    exception is thrown. Warnings are ignored.
    
    @param dsl
           the contents of the type declaration file
    @param pkg
           the containing package
    @return built type instance
    """
        ...
    @overload
    @classmethod
    def parseUi(cls, dsl: str, pkg: Pkg, pkgPath: str) -> TypeDefaultUi:
    """
    Parse a single default UI file (`.c3ui`) and return the built default UI. If any errors are encountered, an
    exception is thrown. Warnings are ignored.
    
    @param dsl
           the contents of the UI declaration file
    @param pkg
           the containing package
    @param pkgPath
           the directory hierarchy under the package src directory
    @return built default UI instance
    """
        ...
    @classmethod
    def parseValueType(cls, field: bool, dsl: str, pkg: Pkg) -> Any:
    """
    Parse a value type declaration from the DSL fragment. If any errors are encountered, an exception is thrown.
    Warnings are ignored.
    
    @param dsl
           the fragment of DSL declaring the value type
    @param pkg
           the containing package
    @return built value type instance
    """
        ...
    @classmethod
    def buildValueType(cls, field: bool, dsl: str, pkg: Pkg, context: Callable[[], Union[str]]) -> ValueType:
    """
    Parse and build a value type declaration from the DSL fragment. If any errors are encountered, an exception is
    thrown. Warnings are ignored.
    
    @param dsl
           the fragment of DSL declaring the value type
    @param pkg
           the containing package
    @param context
           lambda producing the "context" for build errors
    @return built value type instance
    """
        ...
    @classmethod
    def parseFieldType(cls, dsl: str, pkg: Pkg) -> FieldType:
        ...
    @classmethod
    def parseAnnotation(cls, dsl: str, pkg: Pkg) -> Annotation:
        ...
    @classmethod
    def parseAnnotations(cls, dsl: str, pkg: Pkg) -> Union[any]:
    """
    Parse one or more annotation declarations and return the structure in its raw form (unvalidated). If any errors
    are encountered, an exception is thrown. Warnings are ignored.
    
    @param dsl
           the fragment of DSL declaring annotations
    @param pkg
           the containing package
    @return JSON array instance or null (see AnnotationsJson.c3typ for structure)
    """
        ...
    @classmethod
    def parseExpression(cls, dsl: str, pkg: Pkg) -> Expr:
    """
    Parse a C3 expression into an AST (abstract syntax tree).
    
    @param dsl
           the fragment of DSL that is an expression
    @param pkg
           the containing package
    @return the validated expression
    """
        ...
    @classmethod
    def parseParamTypes(cls, dsl: str, pkg: Pkg) -> FunctionType:
    """
    Parse a minimal function parameter list into a FunctionType. Note that this includes only the parameter
    value types, not the names, and not the return type.
    
    @param dsl
           the fragment of DSL that is an parameter list
    @param pkg
           the containing package
    @return the function instance
    """
        ...
    @overload
    @classmethod
    def print(cls, type: TypeMeta) -> Union[str]:
    """
    Format a type as a complete `.c3typ` DSL file and return the declaration as a string. Default formatting options
    are used.
    """
        ...
    @overload
    @classmethod
    def print(cls, type: TypeMeta, spec: DslPrintSpec) -> Union[str]:
    """
    Format a type as a complete `.c3typ` DSL file and return the declaration as a string. The specified formatting
    options are used.
    """
        ...
    @overload
    @classmethod
    def print(cls, vt: ValueType) -> Union[str]:
    """
    Format a value type as a fragment of a `.c3typ` DSL file and return the declaration as a string. Default
    formatting options are used.
    """
        ...
    @overload
    @classmethod
    def print(cls, ui: TypeDefaultUi) -> Union[str]:
    """
    Format a default UI as a complete `.c3ui` DSL file and return the declaration as a string. Default formatting
    options are used.
    """
        ...
    @overload
    @classmethod
    def print(cls, ui: TypeDefaultUi, spec: DslPrintSpec) -> Union[str]:
    """
    Format a default UI as a complete `.c3ui` DSL file and return the declaration as a string. The specified
    formatting options are used.
    """
        ...
    @classmethod
    def typeName(cls, dsl: str) -> Union[str]:
    """
    This attempts to get the type name, without parsing the type. This means it won't be perfect in every case, but
    also that it should work for mostly correct types that may have syntax errors (important for testing).
    
    @return type name extracted from DSL
    """
        ...

