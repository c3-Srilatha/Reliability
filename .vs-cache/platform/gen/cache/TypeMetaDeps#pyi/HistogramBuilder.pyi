#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection
from c3.platform.HistogramSpec import HistogramSpec
from c3.platform.Type import Type
from c3.platform.BooleanHistogram import BooleanHistogram
from c3.platform.Obj import Obj
from c3.platform.CharHistogram import CharHistogram
from c3.platform.HistogramBuilder import HistogramBuilder
from c3.platform.NumericHistogram import NumericHistogram

# Python definitions for the C3 type HistogramBuilder

H = TypeVar('H')

class HistogramBuilder(Generic[H], StatsBuilder[H, HistogramBuilder[H]], Value):
    """
    Builder of Histogram
    @var VT type of examined values
    
    @remarks this represents a made instance of HistogramBuilder
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def make(cls) -> HistogramBuilder[H]:
    """
    Construct an instance with initial state.
    """
        ...
    @overload
    @classmethod
    def make(cls, initial: Any) -> Union[HistogramBuilder[H]]:
    """
    Instantiates new builder with initial stats
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> HistogramBuilder[H]:
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
    def add(self, value: Any) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given value
    """
        ...
    @overload
    def add(self, str: str) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given string value
    """
        ...
    @overload
    def add(self, dt: datetime) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given datetime value
    """
        ...
    @overload
    def add(self, num: float) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given numeric value
    """
        ...
    @overload
    def add(self, bool: bool) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given boolean value
    """
        ...
    @overload
    def add(self, jsn: any) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given json value
    """
        ...
    @overload
    def add(self, obj: Obj) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given Obj value
    """
        ...
    @overload
    def add(self, obj: Collection[Any]) -> HistogramBuilder[H]:
    """
    Updates statistics based on a given Collection value
    """
        ...
    def addAll(self, e: Collection[Any]) -> HistogramBuilder[H]:
    """
    Update statistics based on all elements from a given collection
    """
        ...
    def addNull(self) -> HistogramBuilder[H]:
    """
    Updates statistics based on a null value
    """
        ...
    def build(self) -> H:
    """
    Intelligently builds a Histogram depending on the type of values evaluated
    """
        ...
    def statsType(self) -> Type:
    """
    Type of stats this builder is constructing
    """
        ...
    def buildCharHistogram(self) -> Union[CharHistogram]:
    """
    Builds a Histogram with a bin for all unique character evaluated
    """
        ...
    def buildNumHistogram(self) -> Union[NumericHistogram]:
    """
    Builds a Numeric Histogram with bins depending on {@see HistogramSpec}
    """
        ...
    def buildBoolHistogram(self) -> Union[BooleanHistogram]:
    """
    Builds a 2 bins histogram that shows the ratio of true to false booleans
    """
        ...
    def spec(self, spec: HistogramSpec=None) -> Union[HistogramBuilder[H]]:
    """
    @return this HistogramBuilder with the provided HistogramSpec
    """
        ...

