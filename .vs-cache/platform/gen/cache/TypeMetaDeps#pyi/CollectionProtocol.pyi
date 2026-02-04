#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator

# Python definitions for the C3 type CollectionProtocol

E = TypeVar('E')

class CollectionProtocol(Generic[E], Iterable[E], ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language collection semantics e.g. indexed access via [].
    Also see {@link MutableCollectionProtocol}.
    
    @remarks this represents a made instance of CollectionProtocol
    """
    def __init__(self) -> None: ...

    def iter(self) -> Union[Iterator[E]]:
    """
    Use this method if you want to use a C3 iterator.
    @return a C3 iterator of the elements of the collection
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def at(self, criteria: Any) -> Union[Any]:
    """
    NOTE: "item" is not to be confused with an element (parametrized with type `E`) of the collection. Most commonly,
    an "item" is a single element or a collection of elements (for example, slice) from the collection. The type of the
    return value for this method can also vary dynamically with the type of the provided key.
    @param criteria
            criteria associated with the desired item.
    @return the item associated with the given criteria
    """
        ...
    def size(self) -> int:
    """
    @return count of elements in the collection
    """
        ...
    def contains(self, e: Any) -> bool:
    """
    @param e
            element to test membership for.
    @return true iff collection contains element
    """
        ...

