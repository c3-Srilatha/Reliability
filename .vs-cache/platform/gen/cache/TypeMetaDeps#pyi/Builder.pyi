#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Builder import Builder

# Python definitions for the C3 type Builder

T = TypeVar('T')

class Builder(Generic[T], Mutable, Value):
    """
    A "builder" is a mutable instance that is used to collect information for a complex instance. Since most instances
    are immutable (cannot be changed after creation), using a mutable builder is more efficient than calling
    `.withX().withY().withZ()` and creating new instances each time.
    
    Concrete subtypes of this type are generally one-to-one with instances of {@link Buildable}. The latter has methods
    for creating the corresponding builder and builders have methods for mutating the state and then {@link #build} is
    called to produce an instance of the corresponding buildable type.
    
    Note that builders are usually not {@link Obj Objs}, and may take advantage of protocols to generate mutation methods
    that match the corresponding type. The most frequently encountered builder is {@link ObjBuilder} which has methods
    corresponding to the Obj's fields:
    
    ```js
    let address = Address.builder()
                         .street('123 Mean Streets')
                         .city('New York')
                         .region('NY')
                         .postalCode('11212')
                         .build();
    ```
    
    This also illustrates how methods on builders should generally return the builder so they can be easily chained,
    providing a "fluent interface".
    
    @var T the type that gets built
    @see Buildable
    @see ObjBuilder
    
    @remarks this represents a made instance of Builder
    """
    def __init__(self) -> None: ...

    @classmethod
    def make(cls) -> Builder[T]:
    """
    Construct an instance with initial state.
    """
        ...
    def clear(self) -> Builder[T]:
    """
    Clear all state of the builder.
    """
        ...
    def build(self) -> T:
    """
    Produce an instance of the target type with the state set in the builder so far.
    """
        ...

