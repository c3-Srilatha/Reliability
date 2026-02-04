#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator
from c3.platform.OpSpec import OpSpec
from c3.platform.ValueType import ValueType
from c3.platform.Iterable import Iterable
from c3.platform.Iterable import Iterable

# Python definitions for the C3 type Zippable

E = TypeVar('E')

class Zippable(Generic[E], Iterable[E], Value):
    """
    Zippable interface that can produce an {@link Iterable} from another Iterable and a merge function.
    
    @remarks this represents a made instance of Zippable
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
    def zip(self, spec: OpSpec, other: Iterable[T], merge: Callable[[Union[E], Union[int], Union[Any], Union[int]], Union[R]], elementType: ValueType=None) -> Iterable[R]:
    """
    Generates a Iterable from the result of applying a binary operator against elements of Iterable.
    The return type of the binary operator must match rt.
    @elementType
           The return value type of the operator/ the element type of the returned Iterable
    @spec
           Configures behavior of this method based on {@link OpSpec#repeatLast}
    @other
           Other Iterable to apply operator on
    @merge
           Binary operator to apply to elements of this and other Iterable at matching positions
    @return the generated Iterable with return type rt.
    """
        ...

