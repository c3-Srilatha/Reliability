#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DataImpl.Ref import DataImpl.Ref
from c3.platform.DataImpl.Lazy import DataImpl.Lazy
from c3.platform.Type import Type
from c3.platform.DatasetInfo import DatasetInfo
from c3.platform.DataImpl.Pandas import DataImpl.Pandas
from c3.platform.PkgInference.Metadata import PkgInference.Metadata
from c3.platform.DataImpl import DataImpl
from c3.platform.Tuple import Tuple
from c3.platform.DataOpSpec import DataOpSpec
from c3.platform.File import File

# Python definitions for the C3 type Dataset


class Dataset(ObjProtocol, StringSerializable, Mutable, DefaultInstance, Value):
    """
    Stateful and distributed representation of arbitrary data. Each Dataset contains source and data tables. Source
    tables contain a collection of files referring to a single source. A source table is defined by the scheme described in
    {@link #fromFiles}. Data tables contain all the deserialized data from source tables. Every source table
    corresponds to a data table. A new Dataset can be created by any methods prefixed with "from". For example you can
    use {@link #fromFiles} to create a Dataset from a specified string that represents a {@link FileUrl}.
    
    @remarks this represents a made instance of Dataset
    """
    
    DEFAULT_DATASET_NAME: Optional[str]=None
    def __init__(self, DEFAULT_DATASET_NAME: Optional[str]=None) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> Dataset:
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
    def fieldValue(self, name: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Implements the `.` syntactic sugar in js and py.
    Also, conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type string.
    @param name
              name associated with the desired attribute value.
           defaultToEmpty
              will return default empty value if field is missing
    @return the attribute value associated with the given attribute name
    """
        ...
    def fieldValues(self, names: Array[str]) -> Union[Any]:
    """
    Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
    @param names
            names associated with the desired attribute values.
    @return the attribute values associated with the given attribute names
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Implements the `.` auto-complete syntax in js and py.
    @return list of all attribute names
    """
        ...
    def _this(self) -> Any:
    """
    @return native object with all fields
    """
        ...
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[Dataset]:
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
    @overload
    @classmethod
    def make(cls, s: str) -> Union[Dataset]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @overload
    @classmethod
    def make(cls) -> Dataset:
    """
    Construct an instance with initial state.
    """
        ...
    @classmethod
    def inst(cls) -> Dataset:
    """
    @return the default instance to be used when member functions are called on this type. E.g.
            FileSystem.inst() should return a default file system. It is up to implementation to decide if default
            instance is a singleton or not.
    """
        ...
    @classmethod
    def filesFromUrls(cls, urls: Array[str]) -> Array[File]:
    """
    Hack to be able to call `D.java:files()` from remote. Should not be necessary once metadata access to
    seed data is implemented
    """
        ...
    def upsertRef(self, ref: Union[DataImpl,str], typ: Type, name: str=None) -> DataImpl.Ref:
    """
    Upsert new DataImpl.Ref pointing to provided ref to this Dataset with the given id. If id not provided, will generate
    random id.
    """
        ...
    def dataConcrete(self, name: str) -> DataImpl:
    """
    Lookup a DataImpl in the dataset with an unknown concrete subtype (Pandas)
    """
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type, binary: any) -> DataImpl.Pandas:
    """
    @return {@link DataImpl.Pandas} by name or constructs one with a pickled pandas binary
    """
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type, pySrc: str, datas: Set[DataImpl.Pandas]=None, vars: Map[str, Any]=None) -> DataImpl.Pandas:
    """
    @return {@link DataImpl.Pandas} by name if exists or creates new one with a provided pySrc and list of referenced
    DataImpl.Pandas
    """
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type, binaries: Array[any]) -> DataImpl.Pandas:
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type) -> DataImpl.Pandas:
    """
    @return {@link DataImpl.Pandas} reconstructed from binary segments stored in InProgressBinaries
    """
        ...
    @overload
    def upsertPandas(self, name: str, fileName: str, typ: Type) -> DataImpl.Pandas:
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type, tuple: Tuple) -> DataImpl.Pandas:
    """
    @return {@link DataImpl.Pandas} by name or constructs one with a Tuple of values
    """
        ...
    @overload
    def upsertPandas(self, name: str, typ: Type, tableName: str, tableEntryId: str, persistedFormat: str=None) -> DataImpl.Pandas:
    """
    @return {@link DataImpl.Pandas} by name or constructs one with a {@link Feature.Store#readData} table reference.
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Dataset]:
    """
    Lookup a stateful dataset by GUID. Dataset can be in memory, in file system or in the db.
    """
        ...
    @classmethod
    def all(cls) -> Union[Array[Dataset]]:
    """
    All instances of active datasets i.e. in memory or saved.
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return true if this dataset is empty (contains no Data)
    """
        ...
    def id(self) -> str:
    """
    @return globally unique id of this dataset
    """
        ...
    def pandas(self, name: str, failIfMissing: bool=None) -> Union[DataImpl.Pandas]:
    """
    @return {@link DataImpl.Pandas} by name or `null` or fail
    """
        ...
    def allPandas(self) -> Union[Array[DataImpl.Pandas]]:
    """
    @return all {@link DataImpl.Pandas} in this dataset
    """
        ...
    def allInProgressBinariesEmpty(self) -> bool:
    """
    @return true if there are no in progress binaries in the dataset
    """
        ...
    def ref(self, name: str, failIfMissing: bool=None) -> Union[DataImpl.Ref]:
    """
    @return {@link DataImpl.Ref} by name or `null` or fail
    """
        ...
    def allRef(self) -> Union[Array[DataImpl.Ref]]:
    """
    @return all {@link DataImpl.Ref} in this dataset
    """
        ...
    def data(self, name: str, failIfMissing: bool=None) -> Union[DataImpl]:
    """
    @return data given by name.
    """
        ...
    def allData(self) -> Union[Array[DataImpl]]:
    """
    @return all {@link DataImpl} in this dataset
    """
        ...
    def cache(self, spec: DataOpSpec=None) -> Dataset:
    """
    Caches data of this dataset. Unless spec#deserialize is set only caches source raw data / bytes.
    """
        ...
    def uncache(self) -> Dataset:
    """
    Discards all cached data. Datasets can be cached in memory or in the local file system. This call will get rid of
    the cached copy. #cache or #read can be called again as needed.
    """
        ...
    def save(self, url: str, spec: DataOpSpec=None) -> Dataset:
    """
    Saves deserialized dataset in the persisted store
    All DataTables and their partitions are stored relative to the url like so:
      ${url}/${dataTableName}/part-${partitionIndex}
    
    Usually `part-${partitionIndex}` contains the data itself but in cases where data of a partition cannot be
    serialized in one file, then "data" files will be stored under `part-${partitionIndex}` folder. e.g
    ${url}/${dataTableName}/part-${partitionIndex}/$file
    Image files (.png) are a good example of such case.
    
    @see #fromFiles
    @see DataTable#save
    """
        ...
    def compress(self, contentEncoding: str='SNAPPY') -> Dataset:
    """
    Compresses this dataset.
    """
        ...
    def uncompress(self) -> Dataset:
    """
    Uncompresses this dataset.
    """
        ...
    def clone(self, spec: DataOpSpec=None) -> Dataset:
    """
    Clones this dataset. Useful if you want to keep source data before deserializing or decompressing.
    
    @see #read
    @see #compress
    @see #decompress
    """
        ...
    @overload
    def close(self) -> Dataset:
    """
    Uncaches and discards this dataset effectively making this instance of the dataset unusable after this call.
    """
        ...
    @overload
    def close(self, data: DataImpl) -> Dataset:
    """
    Removes a {@link Data} from this Dataset, either an a {@link DataTable} or a {@link Data.Pandas}.
    A DataTable is only discarded (flushed from memory) if all references to the DataTable are discarded,
    otherwise the DataTable will remain in memory. Remaining references are common in case of inferred foreign
    keys from {@link Dataset#createPkg}. See {@link #close()} if you wish to force free memory on the C3 cluster.
    To see a list of data tables that can removed from this Dataset use {@link #tables}.
    If the provided DataTable is a source table then subsequent {@link #read} and {@link #reread} calls will not
    read the removed source table. This method **does not delete** files from the removed source table,
    it only discards the source table from this Dataset. To see a list of source tables that can be removed from
    this Dataset use {@link #sources}. If the provided DataTable does not exist in this Dataset then an error will be
    thrown.
    
    @see DataTable#close
    @see DataImpl.Pandas#close
    """
        ...
    def createPkg(self) -> Union[Array[PkgInference.Metadata]]:
    """
    Builds deployable package out of this Dataset's data. Infers DI metadata (Source types, Target types, and
    Transforms) from {@link Data.Lazy}s referenced in this dataset, and writes it directly to the filesystem if
    {@link Pkg#isUpdatable}.
    
    @return list of {@link PkgInference.Metadata} that was inferred
    """
        ...
    def sinks(self) -> Union[Array[DataImpl.Lazy]]:
    """
    Returns the sink {@link DataImpl.Lazy}s within this dataset. A sink Data is not an argument of any other Data (i.e.
    has no children).
    """
        ...
    def info(self) -> Union[DatasetInfo]:
    """
    Information of the tables in the dataset
    """
        ...
    @classmethod
    def create(cls) -> Dataset:
    """
    @return a new instance of Dataset
    """
        ...
    def addSegmentMap(self, name: str) -> None:
    """
    Add a map to store the binary segments of a Data with the given name that maps i to the ith segment of its
    binary representation
    
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
    """
        ...
    def clearInProgressBinaries(self, name: str=None) -> None:
    """
    Clear the map of the binary segments of the Data with the given name, or all maps of Datas if no name is given
    
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
    """
        ...
    def addBinarySegment(self, name: str, i: int, segment: any) -> None:
    """
     Add the ith binary of a segment of a dataframe's binary representation to the dataset
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
    
    @param i
           the index the segment being queried has in sorted order
    
    @param segment
           a segment of a dataframe's binary representation
    """
        ...
    def containsInProgress(self, name: str) -> bool:
    """
    Helper function to check whether the Dataset contains binary segments for object with the given name
    
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the
                 concreteId of a Data
    @return true if the object with the given name has binary segments in the dataset, false otherwise
    """
        ...
    def numBinarySegments(self, name: str) -> int:
    """
    Helper function to get the number of binary segments stored by the Dataset for object with the given name
    
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
    @return number of binary segments corresponding to the given name are in the Dataset
    """
        ...
    def getBinarySegment(self, name: str, idx: int) -> any:
    """
    Helper function to get the ith binary segment stored by the Dataset for object with the given name
    
    @param name
           the name of the object whose binary segments are stored in the dataset, generally the
                 concreteId of a Data
    @param idx
           the index the segment being queried has in sorted order
    @return the idx-th segment of the object with the given name's binary representation
    """
        ...
    def countAll(self) -> int:
    """
    @return the number of all data instances in this dataset
    """
        ...
    def countRefs(self) -> int:
    """
    @return the number of DataRef instances in this dataset
    """
        ...
    def countPandas(self) -> int:
    """
    @return the number of Pandas instances in this dataset
    """
        ...

