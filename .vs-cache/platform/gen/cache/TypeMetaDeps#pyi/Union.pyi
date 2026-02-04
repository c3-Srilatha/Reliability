#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Union

A = TypeVar('A')

class Union(Generic[A], Value):
    """
    This is the mixin type of every declared union type, with a generic variable which is bound to the resulting AnyOf.
    A union type is a way to declare a set of possible types that is reusable.
    
    ```type
    union type FixedStrings = string | [string] | stream<string>
    union type ProducedStrings = FixedStrings | (lambda(): FixedStrings)
    ```
    The first example above shows a simple declaration of a union type as a set of simple alternates. The second shows
    another union type that uses the first declaration and also includes a lambda that returns the first type.
    
    Union types can be used in place of explicit anyof declarations:
    ```type
    type StringProducer {
      source: ProducedStrings
      produce: member function(): [string]
    }
    ```
    
    @var A will be bound to the matching anyof value type
    @see AnyOfType
    
    @remarks this represents a made instance of Union
    """
    def __init__(self) -> None: ...


