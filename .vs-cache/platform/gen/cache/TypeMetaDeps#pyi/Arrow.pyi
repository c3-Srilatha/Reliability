#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TupleType import TupleType
from c3.platform.Type import Type
from c3.platform.Content import Content
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.Stream import Stream
from c3.platform.Stream import Stream
from c3.platform.Iterator import Iterator
from c3.platform.Iterator import Iterator
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ByteStream import ByteStream
from c3.platform.Iterator import Iterator
from c3.platform.Tuple import Tuple
from c3.platform.Stream import Stream

# Python definitions for the C3 type Arrow


class Arrow(Value):
    """
    Type representing https://arrow.apache.org/docs/index.html
    
    @remarks this represents a made instance of Arrow
    """
    def __init__(self) -> None: ...

    def type(self) -> Union[Type,TupleType]:
    """
    Type of this buffer
    """
        ...
    def arrowSchema(self) -> str:
    """
    String representation of Arrow schema for this buffer
    """
        ...
    def javaSchema(self) -> Any:
    """
    Java native schema of this Arrow buffer
    """
        ...
    def vector(self, field: str) -> Arrow.Vector:
    """
    Vector for field values in this Arrow value
    """
        ...
    def rowCount(self) -> int:
    """
    Returns the number of rows in this Arrow batch
    """
        ...
    def serialize(self) -> Union[any]:
    """
    Binary representation of this Arrow buffer
    """
        ...
    def toArray(self) -> Union[Array[Any]]:
    """
    Converts this Arrow value to an array
    """
        ...
    def toTuple(self) -> Union[]:
    """
    Converts this Arrow value to tuple
    """
        ...
    def toObjs(self) -> Union[Array[O]]:
    """
    Converts this Arrow value to array of instances of #type
    """
        ...
    def toRows(self) -> Union[Iterator[O]]:
    """
    Converts this Arrow value to iterator of instances of #type
    """
        ...
    def batchObjs(self, batchSize: int, action: Callable[[Array[O]]]) -> int:
    """
    Converts this Arrow value to batches of instances of #type
    """
        ...
    @overload
    def write(self, content: C) -> C:
    """
    Writes binary representation of this Arrow buffer into provided content
    """
        ...
    @overload
    def write(self, stream: Any) -> None:
    """
    Writes binary representation of this Arrow buffer into provided byte push stream
    """
        ...
    def close(self) -> None:
    """
    Releases all memory used by Arrow
    """
        ...
    @overload
    @classmethod
    def read(cls, type: Union[Type,TupleType], arrow: Content, failIfInvalid: bool=None) -> Union[Arrow]:
    """
    Reads instance of of Arrow from content such as file
    """
        ...
    @overload
    @classmethod
    def read(cls, type: Union[Type,TupleType], arrow: any, failIfInvalid: bool=None) -> Union[Arrow]:
    """
    Reads instance of of Arrow from binary value
    """
        ...
    @overload
    @classmethod
    def read(cls, type: Union[Type,TupleType], arrow: ByteStream, failIfInvalid: bool=None) -> Union[Arrow]:
    """
    Reads instance of Arrow from binary stream
    """
        ...
    @overload
    @classmethod
    def read(cls, type: Union[Type,TupleType], arrow: Stream[int], failIfInvalid: bool=None) -> Union[Arrow]:
    """
    Reads instance of Arrow from binary stream
    """
        ...
    @classmethod
    def readLocalBatches(cls, type: Union[Type,TupleType], localFile: str, action: Callable[[Union[Arrow]]]) -> int:
    """
    Reads local file arrow file and processes it in batches
    """
        ...
    @classmethod
    def from(cls, value: Array[Any]) -> Union[Arrow]:
    """
    Makes an instance of Arrow from an array
    """
        ...
    @classmethod
    def fromColumns(cls, value: ) -> Union[Arrow]:
    """
    Makes instance of Arrow from a sequence of columns represented as tuple of arrays.
    """
        ...
    @classmethod
    def fromDataColumns(cls, data: Stream[Pair[str, Array[Data.Column]]], batchSize: int, schema: TupleType=None) -> Stream[Arrow]:
    """
    Converts feature set columns into stream of Arrow column batches with given batch size.
    """
        ...
    @classmethod
    def fromTuples(cls, rows: Stream[Tuple], schema: TupleType, batchSize: int) -> Stream[Arrow]:
    """
    Converts stream of tuples into stream of Arrow column batches with given batch size.
    """
        ...
    @classmethod
    def streamFromObjs(cls, rows: Stream[Obj], batchSize: int, include: str=None) -> Stream[Arrow]:
    """
    Converts stream of objects into stream of Arrow column batches with given batch size.
    Column batches contain columns specified by include in standard fetch include format.
    """
        ...
    @classmethod
    def streamFromTuples(cls, batchSize: int, source: Iterator[Obj]=None, schema: TupleType=None) -> Stream[Arrow]:
    """
    Converts iterator of cell tuples into stream of Arrow column batches with given batch size.
    Column batches contain columns specified by schema.
    """
        ...
    @classmethod
    def arrowIteratorFromRecords(cls, batchSize: int, records: Any=None, schema: Any=None) -> Union[ArrowIterator]:
    """
    Converts iceberg generic records into arrow iterator with given batch size.
    """
        ...
    @classmethod
    def arrowIteratorFromColumns(cls, tuple: Tuple) -> Union[ArrowIterator]:
    """
    Converts a Tuple with each field representing a column (i.e an {@link Array}) into ArrowIterator.
    @see ArrowIterator
    """
        ...
    @classmethod
    def arrowIteratorFromStrArray(cls, array: Array[str]=None) -> Union[ArrowIterator]:
    """
    Converts array of strings into arrow iterator with given batch size.
    """
        ...
    @classmethod
    def makeBuffer(cls, type: Union[Type,TupleType], initialRowCount: int='0') -> Arrow.Buffer:
    """
    @return new Arrow buffer for a given C3 type
    """
        ...
    @classmethod
    def schemaFromC3Type(cls, type: Union[Type,TupleType]) -> str:
    """
    @return string representation of Arrow schema for a given C3 type
    """
        ...
    @classmethod
    def javaSchemaFromC3Type(cls, type: Union[Type,TupleType], include: str=None, notStrict: bool=None) -> Any:
    """
    @return java native representation of Arrow schema for a given C3 type
    @param strict
               If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
    """
        ...
    @classmethod
    def typeFromC3ValueType(cls, valueType: ValueType) -> str:
    """
    @return string representation of Arrow type for a given C3 value type
    """
        ...
    @classmethod
    def javaTypeFromC3ValueType(cls, valueType: ValueType, notStrict: bool=None) -> Any:
    """
    @return java native representation of Arrow type for a given C3 value type
    @param notStrict
               If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
    """
        ...
    @classmethod
    def c3ValueTypeFromArrowField(cls, field: Any) -> Union[ValueType]:
    """
     @return a C3 **ValueType** from a given Arrow.Field. Please note that since C3 may not support all ArrowType(s)
    or vice versa, so we may get an empty value if the conversion is not possible.
    """
        ...
    @classmethod
    def arrowFieldFromC3ValueType(cls, name: str, valueType: ValueType, notStrict: bool=None) -> Any:
    """
    @return a Arrow.Field from a given  C3 **ValueType** and field name.
    @param notStrict
               If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
    """
        ...
    
    class Buffer(Arrow, Value):
        """
        Type representing https://arrow.apache.org/docs/index.html buffer
        
        @remarks this represents a made instance of Arrow.Buffer
        """
        def __init__(self) -> None: ...

        def type(self) -> Union[Type,TupleType]:
        """
        Type of this buffer
        """
            ...
        def arrowSchema(self) -> str:
        """
        String representation of Arrow schema for this buffer
        """
            ...
        def javaSchema(self) -> Any:
        """
        Java native schema of this Arrow buffer
        """
            ...
        def vector(self, field: str) -> Arrow.Buffer.Vector:
        """
        Vector Buffer for reading and writing field values in this Arrow Buffer
        """
            ...
        def rowCount(self) -> int:
        """
        Returns the number of rows in this Arrow batch
        """
            ...
        def serialize(self) -> Union[any]:
        """
        Binary representation of this Arrow buffer
        """
            ...
        def toArray(self) -> Union[Array[Any]]:
        """
        Converts this Arrow value to an array
        """
            ...
        def toTuple(self) -> Union[]:
        """
        Converts this Arrow value to tuple
        """
            ...
        def toObjs(self) -> Union[Array[O]]:
        """
        Converts this Arrow value to array of instances of #type
        """
            ...
        def toRows(self) -> Union[Iterator[O]]:
        """
        Converts this Arrow value to iterator of instances of #type
        """
            ...
        def batchObjs(self, batchSize: int, action: Callable[[Array[O]]]) -> int:
        """
        Converts this Arrow value to batches of instances of #type
        """
            ...
        @overload
        def write(self, content: C) -> C:
        """
        Writes binary representation of this Arrow buffer into provided content
        """
            ...
        @overload
        def write(self, stream: Any) -> None:
        """
        Writes binary representation of this Arrow buffer into provided byte push stream
        """
            ...
        def close(self) -> None:
        """
        Releases all memory used by Arrow
        """
            ...
        @overload
        @classmethod
        def read(cls, type: Union[Type,TupleType], arrow: Content, failIfInvalid: bool=None) -> Union[Arrow.Buffer]:
        """
        Reads instance of of Arrow from content such as file
        """
            ...
        @overload
        @classmethod
        def read(cls, type: Union[Type,TupleType], arrow: any, failIfInvalid: bool=None) -> Union[Arrow.Buffer]:
        """
        Reads instance of of Arrow from binary value
        """
            ...
        @overload
        @classmethod
        def read(cls, type: Union[Type,TupleType], arrow: ByteStream, failIfInvalid: bool=None) -> Union[Arrow.Buffer]:
        """
        Reads instance of Arrow from binary stream
        """
            ...
        @overload
        @classmethod
        def read(cls, type: Union[Type,TupleType], arrow: Stream[int], failIfInvalid: bool=None) -> Union[Arrow.Buffer]:
        """
        Reads instance of Arrow from binary stream
        """
            ...
        @classmethod
        def readLocalBatches(cls, type: Union[Type,TupleType], localFile: str, action: Callable[[Union[Arrow]]]) -> int:
        """
        Reads local file arrow file and processes it in batches
        """
            ...
        @classmethod
        def from(cls, value: Array[Any]) -> Union[Arrow.Buffer]:
        """
        Makes an instance of Arrow from an array
        """
            ...
        @classmethod
        def fromColumns(cls, value: ) -> Union[Arrow.Buffer]:
        """
        Makes instance of Arrow from a sequence of columns represented as tuple of arrays.
        """
            ...
        @classmethod
        def fromDataColumns(cls, data: Stream[Pair[str, Array[Data.Column]]], batchSize: int, schema: TupleType=None) -> Stream[Arrow]:
        """
        Converts feature set columns into stream of Arrow column batches with given batch size.
        """
            ...
        @classmethod
        def fromTuples(cls, rows: Stream[Tuple], schema: TupleType, batchSize: int) -> Stream[Arrow]:
        """
        Converts stream of tuples into stream of Arrow column batches with given batch size.
        """
            ...
        @classmethod
        def streamFromObjs(cls, rows: Stream[Obj], batchSize: int, include: str=None) -> Stream[Arrow]:
        """
        Converts stream of objects into stream of Arrow column batches with given batch size.
        Column batches contain columns specified by include in standard fetch include format.
        """
            ...
        @classmethod
        def streamFromTuples(cls, batchSize: int, source: Iterator[Obj]=None, schema: TupleType=None) -> Stream[Arrow]:
        """
        Converts iterator of cell tuples into stream of Arrow column batches with given batch size.
        Column batches contain columns specified by schema.
        """
            ...
        @classmethod
        def arrowIteratorFromRecords(cls, batchSize: int, records: Any=None, schema: Any=None) -> Union[ArrowIterator]:
        """
        Converts iceberg generic records into arrow iterator with given batch size.
        """
            ...
        @classmethod
        def arrowIteratorFromColumns(cls, tuple: Tuple) -> Union[ArrowIterator]:
        """
        Converts a Tuple with each field representing a column (i.e an {@link Array}) into ArrowIterator.
        @see ArrowIterator
        """
            ...
        @classmethod
        def arrowIteratorFromStrArray(cls, array: Array[str]=None) -> Union[ArrowIterator]:
        """
        Converts array of strings into arrow iterator with given batch size.
        """
            ...
        @classmethod
        def makeBuffer(cls, type: Union[Type,TupleType], initialRowCount: int='0') -> Arrow.Buffer:
        """
        @return new Arrow buffer for a given C3 type
        """
            ...
        @classmethod
        def schemaFromC3Type(cls, type: Union[Type,TupleType]) -> str:
        """
        @return string representation of Arrow schema for a given C3 type
        """
            ...
        @classmethod
        def javaSchemaFromC3Type(cls, type: Union[Type,TupleType], include: str=None, notStrict: bool=None) -> Any:
        """
        @return java native representation of Arrow schema for a given C3 type
        @param strict
                   If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
        """
            ...
        @classmethod
        def typeFromC3ValueType(cls, valueType: ValueType) -> str:
        """
        @return string representation of Arrow type for a given C3 value type
        """
            ...
        @classmethod
        def javaTypeFromC3ValueType(cls, valueType: ValueType, notStrict: bool=None) -> Any:
        """
        @return java native representation of Arrow type for a given C3 value type
        @param notStrict
                   If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
        """
            ...
        @classmethod
        def c3ValueTypeFromArrowField(cls, field: Any) -> Union[ValueType]:
        """
         @return a C3 **ValueType** from a given Arrow.Field. Please note that since C3 may not support all ArrowType(s)
        or vice versa, so we may get an empty value if the conversion is not possible.
        """
            ...
        @classmethod
        def arrowFieldFromC3ValueType(cls, name: str, valueType: ValueType, notStrict: bool=None) -> Any:
        """
        @return a Arrow.Field from a given  C3 **ValueType** and field name.
        @param notStrict
                   If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
        """
            ...
        def setRowCount(self, rowCount: int) -> None:
        """
        Sets the row count of this Arrow buffer
        """
            ...
        
        class Vector(Arrow.Vector, Value):
            """
            Type representing https://arrow.apache.org/docs/index.html value vector
            
            @remarks this represents a made instance of Arrow.Buffer.Vector
            """
            def __init__(self) -> None: ...

            def at(self, index: int) -> Union[T]:
            """
            Retrieve value at index
            """
                ...
            def doubleAt(self, index: int) -> float:
            """
            Retrieve double value at index; or error if this is not a double vector
            """
                ...
            def strAt(self, index: int) -> Union[str]:
            """
            Retrieve string value at index; or error if this is not a string vector
            """
                ...
            def datetimeAt(self, index: int) -> Union[datetime]:
            """
            Retrieve datetime value at index; or error if this is not a string vector
            """
                ...
            def utf8At(self, index: int) -> Union[any]:
            """
            Retrieve UTF-8 string value at index; or error if this is not a string vector
            """
                ...
            def isNull(self, index: int) -> bool:
            """
            Check if value at index in null
            """
                ...
            def name(self) -> str:
            """
            Name of the field for this vector
            """
                ...
            def valueType(self) -> ValueType:
            """
            C3 Value Type of elements in this vector
            """
                ...
            def arrowType(self) -> str:
            """
            String representation of Arrow schema of field for this vector
            """
                ...
            def javaField(self) -> Any:
            """
            Java native schema of this Arrow buffer
            """
                ...
            @classmethod
            def toCol(cls, fieldVector: Any, valueTypeOverrides: Map[str, ValueType]=None) -> Union[Array[Any]]:
            """
            @param valueTypeOverrides
                 We always override the `ValueType` as provided in the `valueTypeOverrides` but do attempt to validate the
                 `ValueType` from the data and throw an exception when neither the "overridden ValueType"
                 would be serialized as the given FieldVector nor the ValueTypes are bi-directionally assignable to each other: {@link ValueType#isAssignableTo}
                 When its not provided, then we go with "inferred ValueType", if it can be inferred and go for `any` if it can't.
            Convert an Arrow.FieldVector to a C3.Collection.
            Please note that this function does not copy the contents from the fieldVector during creation but on first access,
            therefore, please consume / materialize the array before moving to the next Arrow Record Batch
            C3 ValueType is inferred from the Arrow Field using {@link Arrow#c3ValueTypeFromArrowField}
            """
                ...
            def iter(self) -> Union[Iterator[Any]]:
                ...
            def add(self, value: Any) -> None:
            """
            Adds value to this vector; will fail if value is of not an expected type
            """
                ...
            def set(self, index: int, value: Any) -> None:
            """
            Set value at index; will fail if value is of not an expected type
            """
                ...
            def setDouble(self, index: int, value: float) -> None:
            """
            Set double value at index; will fail if this is not a double vector
            """
                ...
            def setInt(self, index: int, value: int) -> None:
            """
            Set 64 bit integer value at index; will fail if this is not an integer vector
            """
                ...
            def setStr(self, index: int, value: str=None) -> None:
            """
            Set string value at index; will fail if this is not a string vector
            """
                ...
            def setUtf8(self, index: int, value: any=None) -> None:
            """
            Set string value at index; will fail if this is not a string vector
            """
                ...
            def setNull(self, index: int) -> None:
            """
            Set null value at index
            """
                ...
            def setArray(self, array: Array[Any]) -> None:
            """
            Sets array values; will fail if there is a value type mismatch
            """
                ...
    
    class Vector(Value):
        """
        Type representing https://arrow.apache.org/docs/index.html value vector
        
        @remarks this represents a made instance of Arrow.Vector
        """
        def __init__(self) -> None: ...

        def at(self, index: int) -> Union[T]:
        """
        Retrieve value at index
        """
            ...
        def doubleAt(self, index: int) -> float:
        """
        Retrieve double value at index; or error if this is not a double vector
        """
            ...
        def strAt(self, index: int) -> Union[str]:
        """
        Retrieve string value at index; or error if this is not a string vector
        """
            ...
        def datetimeAt(self, index: int) -> Union[datetime]:
        """
        Retrieve datetime value at index; or error if this is not a string vector
        """
            ...
        def utf8At(self, index: int) -> Union[any]:
        """
        Retrieve UTF-8 string value at index; or error if this is not a string vector
        """
            ...
        def isNull(self, index: int) -> bool:
        """
        Check if value at index in null
        """
            ...
        def name(self) -> str:
        """
        Name of the field for this vector
        """
            ...
        def valueType(self) -> ValueType:
        """
        C3 Value Type of elements in this vector
        """
            ...
        def arrowType(self) -> str:
        """
        String representation of Arrow schema of field for this vector
        """
            ...
        def javaField(self) -> Any:
        """
        Java native schema of this Arrow buffer
        """
            ...
        @classmethod
        def toCol(cls, fieldVector: Any, valueTypeOverrides: Map[str, ValueType]=None) -> Union[Array[Any]]:
        """
        @param valueTypeOverrides
             We always override the `ValueType` as provided in the `valueTypeOverrides` but do attempt to validate the
             `ValueType` from the data and throw an exception when neither the "overridden ValueType"
             would be serialized as the given FieldVector nor the ValueTypes are bi-directionally assignable to each other: {@link ValueType#isAssignableTo}
             When its not provided, then we go with "inferred ValueType", if it can be inferred and go for `any` if it can't.
        Convert an Arrow.FieldVector to a C3.Collection.
        Please note that this function does not copy the contents from the fieldVector during creation but on first access,
        therefore, please consume / materialize the array before moving to the next Arrow Record Batch
        C3 ValueType is inferred from the Arrow Field using {@link Arrow#c3ValueTypeFromArrowField}
        """
            ...
        def iter(self) -> Union[Iterator[Any]]:
            ...

