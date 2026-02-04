#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType
from c3.platform.MapType import MapType
from c3.platform.SetType import SetType
from c3.platform.Type import Type
from c3.platform.ArrayType import ArrayType
from c3.platform.StreamType import StreamType

# Python definitions for the C3 type NativeCompat


class NativeCompat(Value):
    """
    In order to convert between native language objects and made C3 instances, it's convenient to have simple
    methods that behave consistently across languages and are available on the corresponding `ImplLanguage` type.
    NativeCompat methods of the form `toNativeX` convert from a C3 value to the corresponding native value (e.g.
    `toNativeObject`); those which are simply `toX` (no `Native` infix) convert from a native value 'to' the C3 value
    specified (e.g. `toArray`).
    
    ```java
    List<Long> list = new ArrayList<>();
    list.add(1);
    list.add(12);
    Array<Long> a = Java.toArrayOfInt(list);
    ```
    
    ```js
    let a = Js.toArrayOfInt([1, 12]);
    let b = Js.toNativeObject(Echo.echoJson({n: 42}));
    b['n'] = 123
    ```
    
    ```py
    a = c3.Py.toArrayOfInt([1, 12])
    ```
    
    ** `to` C3 converter rules **
     * If the native value cannot be made into constructed C3 values, empty values are returned.
     * If the target value is a collection and individual elements cannot be made, they will be substituted with `null`.
    Thus only valid values are returned, unless the `failIfInvalid` parameter is true in which case an error is thrown.
    
    @see ImplLanguage
    
    @remarks this represents a made instance of NativeCompat
    """
    def __init__(self) -> None: ...

    @classmethod
    def toArray(cls, v: Any, type: ArrayType, failIfInvalid: bool=None) -> Union[Array[E]]:
    """
    Build a made array of the specified type from the specified native array or list. The elements are made by
    making them as the element type of the specified array type. The made array corresponds to the specified
    array type.
    """
        ...
    @classmethod
    def toArrayOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[Any]]:
    """
    Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
    """
        ...
    @classmethod
    def toArrayOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[float]]:
    """
    Build a made array of `double` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofDbl
    """
        ...
    @classmethod
    def toArrayOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[int]]:
    """
    Build a made array of `int` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofInt
    """
        ...
    @classmethod
    def toArrayOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[str]]:
    """
    Build a made array of `string` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofStr
    """
        ...
    @classmethod
    def toMap(cls, v: Any, type: MapType, failIfInvalid: bool=None) -> Union[Map[K, V]]:
    """
    Build a made map of the specified type from the specified native map or dictionary. The keys and values are
    made by making them as the element type of the specified map type. The made map corresponds to the specified
    map type.
    """
        ...
    @classmethod
    def toMapOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[Any, Any]]:
    """
    Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
    guessing the types.
    """
        ...
    @classmethod
    def toMapOfStrToAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, Any]]:
    """
    Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
    guessing the types.
    """
        ...
    @classmethod
    def toMapOfStrToDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, float]]:
    """
    Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToDbl
    """
        ...
    @classmethod
    def toMapOfStrToInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, int]]:
    """
    Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToInt
    """
        ...
    @classmethod
    def toMapOfStrToStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, str]]:
    """
    Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToStr
    """
        ...
    @classmethod
    def toObj(cls, v: Any, type: Type, failIfInvalid: bool=None) -> Union[O]:
    """
    Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
    Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
    an unrelated type, null is returned or an error is thrown.
    
    If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
    
    If the type mixes {@link StringSerializable}, then the string representation may be specified.
    
    @see Obj#make
    """
        ...
    @classmethod
    def toSet(cls, v: Any, type: SetType, failIfInvalid: bool=None) -> Union[Set[E]]:
    """
    Build a made set of the specified type from the specified native array or list. The elements are made by
    making them as the element type of the specified set type. The made set corresponds to the specified
    set type.
    """
        ...
    @classmethod
    def toSetOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[float]]:
    """
    Build a made set of `double` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofDbl
    """
        ...
    @classmethod
    def toSetOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[int]]:
    """
    Build a made set of `int` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofInt
    """
        ...
    @classmethod
    def toSetOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[str]]:
    """
    Build a made set of `string` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofStr
    """
        ...
    @classmethod
    def toStream(cls, v: Any, type: StreamType, failIfInvalid: bool=None) -> Union[Stream[E]]:
    """
    Build a made stream of the specified type from the specified native collection or iterator. The elements are made
    by making them as the element type of the specified stream type. The made stream corresponds to the specified
    stream type.
    """
        ...
    @classmethod
    def toStreamOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[Any]]:
    """
    Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
    the type.
    """
        ...
    @classmethod
    def toStreamOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[float]]:
    """
    Build a made stream of `double` from the specified native collection or iterator. The elements are made as
    necessary.
    """
        ...
    @classmethod
    def toStreamOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[int]]:
    """
    Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
    """
        ...
    @classmethod
    def toStreamOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[str]]:
    """
    Build a made stream of `string` from the specified native collection or iterator. The elements are made as
    necessary.
    """
        ...
    @classmethod
    def toValue(cls, v: Any, type: ValueType, failIfInvalid: bool=None) -> Union[Any]:
    """
    Construct a made value for the specified value type.
    
    @see ValueType#makeValue
    """
        ...
    @classmethod
    def toNativeObject(cls, o: Any) -> Union[Any]:
    """
    Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
    The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
    is a no-op).
    """
        ...

