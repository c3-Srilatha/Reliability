// TypeScript definitions for the C3 type Dataset

/**
 * Stateful and distributed representation of arbitrary data. Each Dataset contains source and data tables. Source
 * tables contain a collection of files referring to a single source. A source table is defined by the scheme described in
 * {@link #fromFiles}. Data tables contain all the deserialized data from source tables. Every source table
 * corresponds to a data table. A new Dataset can be created by any methods prefixed with "from". For example you can
 * use {@link #fromFiles} to create a Dataset from a specified string that represents a {@link FileUrl}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Dataset
 */
declare interface IDataset {

  DEFAULT_DATASET_NAME?: string | null;
}

/**
 * Stateful and distributed representation of arbitrary data. Each Dataset contains source and data tables. Source
 * tables contain a collection of files referring to a single source. A source table is defined by the scheme described in
 * {@link #fromFiles}. Data tables contain all the deserialized data from source tables. Every source table
 * corresponds to a data table. A new Dataset can be created by any methods prefixed with "from". For example you can
 * use {@link #fromFiles} to create a Dataset from a specified string that represents a {@link FileUrl}.
 *
 * @remarks this represents a made instance of Dataset
 */
declare class Dataset {

  DEFAULT_DATASET_NAME?: string | null;
  withDEFAULT_DATASET_NAME(DEFAULT_DATASET_NAME: string | null): Dataset;

  static DEFAULT_DATASET_NAME?: string | null;

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * C3 Type of this instance.
   */
  static type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Dataset;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Dataset;

  /**
   * Implements the `.` syntactic sugar in js and py.
   * Also, conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type string.
   * @param name
   *           name associated with the desired attribute value.
   *        defaultToEmpty
   *           will return default empty value if field is missing
   * @return the attribute value associated with the given attribute name
   */
  fieldValue(name: string | null, defaultToEmpty?: boolean): T | null;

  /**
   * Implements the `.` syntactic sugar in js and py.
   * Also, conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type string.
   * @param name
   *           name associated with the desired attribute value.
   *        defaultToEmpty
   *           will return default empty value if field is missing
   * @return the attribute value associated with the given attribute name
   */
  static fieldValue(name: string | null, defaultToEmpty?: boolean): T | null;

  /**
   * Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
   * @param names
   *         names associated with the desired attribute values.
   * @return the attribute values associated with the given attribute names
   */
  fieldValues(names: C3.Array<string | null>): any;

  /**
   * Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
   * @param names
   *         names associated with the desired attribute values.
   * @return the attribute values associated with the given attribute names
   */
  static fieldValues(names: C3.Array<string | null>): any;

  /**
   * Implements the `.` auto-complete syntax in js and py.
   * @return list of all attribute names
   */
  fieldNames(): C3.Array<string | null>;

  /**
   * Implements the `.` auto-complete syntax in js and py.
   * @return list of all attribute names
   */
  static fieldNames(): C3.Array<string | null>;

  /**
   * @return native object with all fields
   */
  _this(): any;

  /**
   * @return native object with all fields
   */
  static _this(): any;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  static toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Dataset | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Dataset | null;

  /**
   * Construct an instance with initial state.
   */
  static make(): Dataset;

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): Dataset;

  /**
   * Hack to be able to call `D.java:files()` from remote. Should not be necessary once metadata access to
   * seed data is implemented
   */
  static filesFromUrls(urls: C3.Array<string | null>): C3.Array<File | null>;

  /**
   * Upsert new DataImpl.Ref pointing to provided ref to this Dataset with the given id. If id not provided, will generate
   * random id.
   */
  upsertRef(ref: DataImpl | null | string | null, typ: Type, name?: string | null): DataImpl.Ref;

  /**
   * Upsert new DataImpl.Ref pointing to provided ref to this Dataset with the given id. If id not provided, will generate
   * random id.
   */
  static upsertRef(ref: DataImpl | null | string | null, typ: Type, name?: string | null): DataImpl.Ref;

  /**
   * Lookup a DataImpl in the dataset with an unknown concrete subtype (Pandas)
   */
  dataConcrete(name: string): DataImpl;

  /**
   * Lookup a DataImpl in the dataset with an unknown concrete subtype (Pandas)
   */
  static dataConcrete(name: string): DataImpl;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a pickled pandas binary
   */
  upsertPandas(name: string, typ: Type, binary: any): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a pickled pandas binary
   */
  static upsertPandas(name: string, typ: Type, binary: any): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name if exists or creates new one with a provided pySrc and list of referenced
   * DataImpl.Pandas
   */
  upsertPandas(name: string, typ: Type, pySrc: string, datas?: C3.Set<DataImpl.Pandas | null>, vars?: C3.Map<string | null, any>): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name if exists or creates new one with a provided pySrc and list of referenced
   * DataImpl.Pandas
   */
  static upsertPandas(name: string, typ: Type, pySrc: string, datas?: C3.Set<DataImpl.Pandas | null>, vars?: C3.Map<string | null, any>): DataImpl.Pandas;

  upsertPandas(name: string, typ: Type, binaries: C3.Array<any | null>): DataImpl.Pandas;

  static upsertPandas(name: string, typ: Type, binaries: C3.Array<any | null>): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} reconstructed from binary segments stored in InProgressBinaries
   */
  upsertPandas(name: string, typ: Type): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} reconstructed from binary segments stored in InProgressBinaries
   */
  static upsertPandas(name: string, typ: Type): DataImpl.Pandas;

  upsertPandas(name: string, fileName: string, typ: Type): DataImpl.Pandas;

  static upsertPandas(name: string, fileName: string, typ: Type): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a Tuple of values
   */
  upsertPandas(name: string, typ: Type, tuple: Tuple): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a Tuple of values
   */
  static upsertPandas(name: string, typ: Type, tuple: Tuple): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a {@link Feature.Store#readData} table reference.
   */
  upsertPandas(name: string, typ: Type, tableName: string, tableEntryId: string, persistedFormat?: string | null): DataImpl.Pandas;

  /**
   * @return {@link DataImpl.Pandas} by name or constructs one with a {@link Feature.Store#readData} table reference.
   */
  static upsertPandas(name: string, typ: Type, tableName: string, tableEntryId: string, persistedFormat?: string | null): DataImpl.Pandas;

  /**
   * Lookup a stateful dataset by GUID. Dataset can be in memory, in file system or in the db.
   */
  static forId(id: string | null, failIfMissing?: boolean): Dataset | null;

  /**
   * All instances of active datasets i.e. in memory or saved.
   */
  static all(): C3.Array<Dataset | null>;

  /**
   * @return true if this dataset is empty (contains no Data)
   */
  isEmpty(): boolean;

  /**
   * @return true if this dataset is empty (contains no Data)
   */
  static isEmpty(): boolean;

  /**
   * @return globally unique id of this dataset
   */
  id(): string;

  /**
   * @return globally unique id of this dataset
   */
  static id(): string;

  /**
   * @return {@link DataImpl.Pandas} by name or `null` or fail
   */
  pandas(name: string, failIfMissing?: boolean): DataImpl.Pandas | null;

  /**
   * @return {@link DataImpl.Pandas} by name or `null` or fail
   */
  static pandas(name: string, failIfMissing?: boolean): DataImpl.Pandas | null;

  /**
   * @return all {@link DataImpl.Pandas} in this dataset
   */
  allPandas(): C3.Array<DataImpl.Pandas | null>;

  /**
   * @return all {@link DataImpl.Pandas} in this dataset
   */
  static allPandas(): C3.Array<DataImpl.Pandas | null>;

  /**
   * @return true if there are no in progress binaries in the dataset
   */
  allInProgressBinariesEmpty(): boolean;

  /**
   * @return true if there are no in progress binaries in the dataset
   */
  static allInProgressBinariesEmpty(): boolean;

  /**
   * @return {@link DataImpl.Ref} by name or `null` or fail
   */
  ref(name: string, failIfMissing?: boolean): DataImpl.Ref | null;

  /**
   * @return {@link DataImpl.Ref} by name or `null` or fail
   */
  static ref(name: string, failIfMissing?: boolean): DataImpl.Ref | null;

  /**
   * @return all {@link DataImpl.Ref} in this dataset
   */
  allRef(): C3.Array<DataImpl.Ref | null>;

  /**
   * @return all {@link DataImpl.Ref} in this dataset
   */
  static allRef(): C3.Array<DataImpl.Ref | null>;

  /**
   * @return data given by name.
   */
  data(name: string, failIfMissing?: boolean): DataImpl | null;

  /**
   * @return data given by name.
   */
  static data(name: string, failIfMissing?: boolean): DataImpl | null;

  /**
   * @return all {@link DataImpl} in this dataset
   */
  allData(): C3.Array<DataImpl | null>;

  /**
   * @return all {@link DataImpl} in this dataset
   */
  static allData(): C3.Array<DataImpl | null>;

  /**
   * Caches data of this dataset. Unless spec#deserialize is set only caches source raw data / bytes.
   */
  cache(spec?: DataOpSpec | null): Dataset;

  /**
   * Caches data of this dataset. Unless spec#deserialize is set only caches source raw data / bytes.
   */
  static cache(spec?: DataOpSpec | null): Dataset;

  /**
   * Discards all cached data. Datasets can be cached in memory or in the local file system. This call will get rid of
   * the cached copy. #cache or #read can be called again as needed.
   */
  uncache(): Dataset;

  /**
   * Discards all cached data. Datasets can be cached in memory or in the local file system. This call will get rid of
   * the cached copy. #cache or #read can be called again as needed.
   */
  static uncache(): Dataset;

  /**
   * Saves deserialized dataset in the persisted store
   * All DataTables and their partitions are stored relative to the url like so:
   *   ${url}/${dataTableName}/part-${partitionIndex}
   *
   * Usually `part-${partitionIndex}` contains the data itself but in cases where data of a partition cannot be
   * serialized in one file, then "data" files will be stored under `part-${partitionIndex}` folder. e.g
   * ${url}/${dataTableName}/part-${partitionIndex}/$file
   * Image files (.png) are a good example of such case.
   *
   * @see #fromFiles
   * @see DataTable#save
   */
  save(url: string, spec?: DataOpSpec | null): Dataset;

  /**
   * Saves deserialized dataset in the persisted store
   * All DataTables and their partitions are stored relative to the url like so:
   *   ${url}/${dataTableName}/part-${partitionIndex}
   *
   * Usually `part-${partitionIndex}` contains the data itself but in cases where data of a partition cannot be
   * serialized in one file, then "data" files will be stored under `part-${partitionIndex}` folder. e.g
   * ${url}/${dataTableName}/part-${partitionIndex}/$file
   * Image files (.png) are a good example of such case.
   *
   * @see #fromFiles
   * @see DataTable#save
   */
  static save(url: string, spec?: DataOpSpec | null): Dataset;

  /**
   * Compresses this dataset.
   */
  compress(contentEncoding?: string | null): Dataset;

  /**
   * Compresses this dataset.
   */
  static compress(contentEncoding?: string | null): Dataset;

  /**
   * Uncompresses this dataset.
   */
  uncompress(): Dataset;

  /**
   * Uncompresses this dataset.
   */
  static uncompress(): Dataset;

  /**
   * Clones this dataset. Useful if you want to keep source data before deserializing or decompressing.
   *
   * @see #read
   * @see #compress
   * @see #decompress
   */
  clone(spec?: DataOpSpec | null): Dataset;

  /**
   * Clones this dataset. Useful if you want to keep source data before deserializing or decompressing.
   *
   * @see #read
   * @see #compress
   * @see #decompress
   */
  static clone(spec?: DataOpSpec | null): Dataset;

  /**
   * Uncaches and discards this dataset effectively making this instance of the dataset unusable after this call.
   */
  close(): Dataset;

  /**
   * Uncaches and discards this dataset effectively making this instance of the dataset unusable after this call.
   */
  static close(): Dataset;

  /**
   * Removes a {@link Data} from this Dataset, either an a {@link DataTable} or a {@link Data.Pandas}.
   * A DataTable is only discarded (flushed from memory) if all references to the DataTable are discarded,
   * otherwise the DataTable will remain in memory. Remaining references are common in case of inferred foreign
   * keys from {@link Dataset#createPkg}. See {@link #close()} if you wish to force free memory on the C3 cluster.
   * To see a list of data tables that can removed from this Dataset use {@link #tables}.
   * If the provided DataTable is a source table then subsequent {@link #read} and {@link #reread} calls will not
   * read the removed source table. This method **does not delete** files from the removed source table,
   * it only discards the source table from this Dataset. To see a list of source tables that can be removed from
   * this Dataset use {@link #sources}. If the provided DataTable does not exist in this Dataset then an error will be
   * thrown.
   *
   * @see DataTable#close
   * @see DataImpl.Pandas#close
   */
  close(data: DataImpl): Dataset;

  /**
   * Removes a {@link Data} from this Dataset, either an a {@link DataTable} or a {@link Data.Pandas}.
   * A DataTable is only discarded (flushed from memory) if all references to the DataTable are discarded,
   * otherwise the DataTable will remain in memory. Remaining references are common in case of inferred foreign
   * keys from {@link Dataset#createPkg}. See {@link #close()} if you wish to force free memory on the C3 cluster.
   * To see a list of data tables that can removed from this Dataset use {@link #tables}.
   * If the provided DataTable is a source table then subsequent {@link #read} and {@link #reread} calls will not
   * read the removed source table. This method **does not delete** files from the removed source table,
   * it only discards the source table from this Dataset. To see a list of source tables that can be removed from
   * this Dataset use {@link #sources}. If the provided DataTable does not exist in this Dataset then an error will be
   * thrown.
   *
   * @see DataTable#close
   * @see DataImpl.Pandas#close
   */
  static close(data: DataImpl): Dataset;

  /**
   * Builds deployable package out of this Dataset's data. Infers DI metadata (Source types, Target types, and
   * Transforms) from {@link Data.Lazy}s referenced in this dataset, and writes it directly to the filesystem if
   * {@link Pkg#isUpdatable}.
   *
   * @return list of {@link PkgInference.Metadata} that was inferred
   */
  createPkg(): C3.Array<PkgInference.Metadata>;

  /**
   * Builds deployable package out of this Dataset's data. Infers DI metadata (Source types, Target types, and
   * Transforms) from {@link Data.Lazy}s referenced in this dataset, and writes it directly to the filesystem if
   * {@link Pkg#isUpdatable}.
   *
   * @return list of {@link PkgInference.Metadata} that was inferred
   */
  static createPkg(): C3.Array<PkgInference.Metadata>;

  /**
   * Returns the sink {@link DataImpl.Lazy}s within this dataset. A sink Data is not an argument of any other Data (i.e.
   * has no children).
   */
  sinks(): C3.Array<DataImpl.Lazy | null>;

  /**
   * Returns the sink {@link DataImpl.Lazy}s within this dataset. A sink Data is not an argument of any other Data (i.e.
   * has no children).
   */
  static sinks(): C3.Array<DataImpl.Lazy | null>;

  /**
   * Information of the tables in the dataset
   */
  info(): DatasetInfo | null;

  /**
   * Information of the tables in the dataset
   */
  static info(): DatasetInfo | null;

  /**
   * @return a new instance of Dataset
   */
  static create(): Dataset;

  /**
   * Add a map to store the binary segments of a Data with the given name that maps i to the ith segment of its
   * binary representation
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   */
  addSegmentMap(name: string): void;

  /**
   * Add a map to store the binary segments of a Data with the given name that maps i to the ith segment of its
   * binary representation
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   */
  static addSegmentMap(name: string): void;

  /**
   * Clear the map of the binary segments of the Data with the given name, or all maps of Datas if no name is given
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   */
  clearInProgressBinaries(name?: string | null): void;

  /**
   * Clear the map of the binary segments of the Data with the given name, or all maps of Datas if no name is given
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   */
  static clearInProgressBinaries(name?: string | null): void;

  /**
   *  Add the ith binary of a segment of a dataframe's binary representation to the dataset
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   *
   * @param i
   *        the index the segment being queried has in sorted order
   *
   * @param segment
   *        a segment of a dataframe's binary representation
   */
  addBinarySegment(name: string, i: number, segment: any): void;

  /**
   *  Add the ith binary of a segment of a dataframe's binary representation to the dataset
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   *
   * @param i
   *        the index the segment being queried has in sorted order
   *
   * @param segment
   *        a segment of a dataframe's binary representation
   */
  static addBinarySegment(name: string, i: number, segment: any): void;

  /**
   * Helper function to check whether the Dataset contains binary segments for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the
   *              concreteId of a Data
   * @return true if the object with the given name has binary segments in the dataset, false otherwise
   */
  containsInProgress(name: string): boolean;

  /**
   * Helper function to check whether the Dataset contains binary segments for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the
   *              concreteId of a Data
   * @return true if the object with the given name has binary segments in the dataset, false otherwise
   */
  static containsInProgress(name: string): boolean;

  /**
   * Helper function to get the number of binary segments stored by the Dataset for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   * @return number of binary segments corresponding to the given name are in the Dataset
   */
  numBinarySegments(name: string): number;

  /**
   * Helper function to get the number of binary segments stored by the Dataset for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the concreteId of a Data
   * @return number of binary segments corresponding to the given name are in the Dataset
   */
  static numBinarySegments(name: string): number;

  /**
   * Helper function to get the ith binary segment stored by the Dataset for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the
   *              concreteId of a Data
   * @param idx
   *        the index the segment being queried has in sorted order
   * @return the idx-th segment of the object with the given name's binary representation
   */
  getBinarySegment(name: string, idx: number): any;

  /**
   * Helper function to get the ith binary segment stored by the Dataset for object with the given name
   *
   * @param name
   *        the name of the object whose binary segments are stored in the dataset, generally the
   *              concreteId of a Data
   * @param idx
   *        the index the segment being queried has in sorted order
   * @return the idx-th segment of the object with the given name's binary representation
   */
  static getBinarySegment(name: string, idx: number): any;

  /**
   * @return the number of all data instances in this dataset
   */
  countAll(): number;

  /**
   * @return the number of all data instances in this dataset
   */
  static countAll(): number;

  /**
   * @return the number of DataRef instances in this dataset
   */
  countRefs(): number;

  /**
   * @return the number of DataRef instances in this dataset
   */
  static countRefs(): number;

  /**
   * @return the number of Pandas instances in this dataset
   */
  countPandas(): number;

  /**
   * @return the number of Pandas instances in this dataset
   */
  static countPandas(): number;
}

