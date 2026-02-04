// TypeScript definitions for the C3 type Data.Column

/**
 * Representation of a single column in {@link Data.Frame}; it is expected that instance of a Data.Colum easily fits in
 * a single C3 server node's memory.
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Column
 */
declare namespace Data {
  export interface IColumn {
  }
}

/**
 * Representation of a single column in {@link Data.Frame}; it is expected that instance of a Data.Colum easily fits in
 * a single C3 server node's memory.
 *
 * @remarks this represents a made instance of Data.Column
 */
declare namespace Data {
  export class Column {

    /**
     * C3 Type of this instance.
     */
    type(): Type;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.Column;

    /**
     * Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
     * contain no type information.
     *
     * @see #toTypedJson
     * @see serdeser.c3doc
     * @see JsonType
     */
    toJson(): any;

    /**
     * Convert the internal object representation to a _typed_ JSON object.
     * @param omitTopLevelType
     *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
     *        the outer level of the produced json.
     * @param runtime
     *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
     *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
     *
     *
     * @return JSON object representation
     *
     * @see #fromJson
     * @see #toJson
     * @see serdeser.c3doc
     * @see JsonType
     */
    toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
     * be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
     * the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJson
     */
    static fromJson(json: any | null): Data.Column | null;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
     * type and will return an instance of the correct type.
     *
     * @see #toJsonString
     */
    static fromJsonString(json: string | null): Data.Column | null;

    /**
     * Load the XML-based representation and reconstruct the corresponding object.
     *
     * fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
     * type and will return an instance of the correct type.
     *
     * @see #toXmlString
     */
    static fromXmlString(xml: string | null): Data.Column | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.Column | null;

    /**
     * Name of the column
     */
    get name(): string;

    /**
     * Value type of column
     */
    get valueType(): ValueType;

    /**
     * Size of this column i.e. number of values
     */
    get size(): number;

    /**
     * Values of the column
     */
    get values(): C3.Array<any>;

    /**
     * Value type of column represented as string
     */
    get serializedValueType(): string;

    /**
     * Value at index
     */
    valueAt(index: number): T | null;

    /**
     * Boolean value at index
     */
    boolAt(index: number): boolean;

    /**
     * Double value at index
     */
    doubleAt(index: number): number;

    /**
     * Double value at index
     */
    floatAt(index: number): number;

    /**
     * 64 bit integer value at index
     */
    intAt(index: number): number;

    /**
     * 32 bit integer value at index
     */
    int32At(index: number): number;

    /**
     * 16 bit integer value at index
     */
    int16At(index: number): number;

    /**
     * Byte value at index
     */
    byteAt(index: number): number;

    /**
     * String value at index
     */
    strAt(index: number): string | null;

    /**
     * DateTime value at index
     */
    datetimeAt(index: number): DateTime | null;

    /**
     * Construct column of size `count` from singular value
     */
    static repeatValue(name: string, count: number, valueType: ValueType, value: any): Data.Column;

    /**
     * Construct column from array of values
     */
    static fromArray(name: string, array: C3.Array<any> | null): Data.Column;

    /**
     * Construct column from a serialized binary representation optionally slicing by startIndex and size
     */
    static fromBinary(serialized: any, startIndex?: number | null, size?: number | null): Data.Column;

    /**
     * Construct column from timeseries
     */
    static fromTimeseries(name: string, timeseries: Timeseries<any>): Data.Column;

    /**
     * Construct column from a serialized binary representation of sorted values with option to slice by min and max
     * values
     *
     * @return pair of data column of a slice and startIndex of slice in provided serialized representation
     */
    static fromBinarySorted(serialized: any, minInclusive: T | null, maxExclusive: T | null): Pair<Data.Column, number | null>;

    /**
     * Serialize column into a binary representation
     */
    toBinary(): any;

    /**
     * Reads column from content such as file
     */
    static readContent(content: Content): Data.Column;

    /**
     * Writes column to content such as file
     */
    writeContent(content: Content): void;

    /**
     * Construct column slicing by min and max; assumes values are sorted in this column
     * @return data column and fromIndex in the this column of the first row
     */
    sliceSorted(minInclusive: T | null, maxExclusive?: T | null): Pair<Data.Column, number | null>;

    /**
     * Construct column slicing by index
     */
    slice(fromIndex: number | null, toIndex?: number | null, stride?: number | null): Data.Column;

    /**
     * Execute the lambda for each element of the Data.Column
     */
    each(action: λConsumer<any>): void;

    /**
     * Stitches multiple Data.Column instances into one; expects all to have same name and value type.
     */
    static stitch(cols: C3.Array<Data.Column | null> | null): Data.Column;

    /**
     * Stitch multiple Data.Column collections into one Data.Column collection, which requires the input Data.Column collections
     * to be aligned vertically.
     *  [T1, S1, F1] + [T2, S2, F2] + ... = [[T1, T2, ...], [S1, S2, ...], [F1, F2, ...]]
     * If the inside Data.Column arrays are empty, then it will return an empty Data.Column array
     */
    static stitchCols(cols: Collection<C3.Array<Data.Column>>): C3.Array<Data.Column | null>;

    /**
     * Produces the binary content by serializing data columns array into a binary.
     */
    static serCols(cols: C3.Array<Data.Column | null>): any | null;

    /**
     * Produces the binary content with the provided subject and serialized bytes for the data columns. The input bytes
     * are assumed to be produced via {@link #deserCols} i.e the bytes can be serialized as is.
     * @return the serialized data columns as bytes.
     */
    static serSubjectAndCols(subject: string, cols: any): any | null;

    /**
     * Produces the binary content with the provided subject and serializing data columns. The count of rows for the given subject is
     * retrieved from the input data columns.
     * @return a {@link Data.Column.SerResult}s containing the total row count of the subject and the serialized data columns as bytes.
     */
    static serSubjectAndCols(subject: string, cols: C3.Array<Data.Column | null>): Data.Column.SerResult;

    /**
     * Deserialize Data.Columns from the bytes and optionally slice by the start and the end if applicable.
     */
    static deserCols(bytes: any, start?: DateTime | null, end?: DateTime | null): C3.Array<Data.Column | null>;

    /**
     * Deserialize Data.Columns from the bytes and slice the data columns by the start and the end if provided or applicable.
     * Please note that it will only consume the buffer, it needs to read from the buffer and the {@link Pair#fst fst} of Pair is subject while the {@Link Pair#snd snd} is the array of columns.
     */
    static deserSubjectAndCols(bytes: any, start?: DateTime | null, end?: DateTime | null): Pair<string | null, C3.Array<Data.Column | null>> | null;

    /**
     * Produces a stream of binary chunks by serializing pairs of subjectId and data columns, which can be drained, and the count of rows for each subject is computed.
     * Please note that the {@link Pair#fst fst} of Pairs in the input stream is subjectId and the {@Link Pair#snd snd} is the array of data columns.
     *
     * @return the stream of {@link Data.Column.SerResult}s containing the row count and the bytes of the serialized data columns for each subject.
     */
    static ser(stream: Stream<Pair<string | null, C3.Array<Data.Column | null>> | null> | null): Stream<Data.Column.SerResult | null>;

    /**
     * Serialize the stream into bytes and write to provided BytePushStream
     * Please note that the {@link Pair#fst fst} of Pair is subjectId while the {@Link Pair#snd snd} is the array of data columns.
     * The total count of rows for all the data columns and the total inMemory size of the serialized data columns will be accumulated given the fact that
     * each subject may have multiple rows and multiple data columns.
     * @return a {@link Data.Column.DrainResult} containing the aggregated information of serialized data columns and corresponding input subjects.
     */
    static drain(stream: Stream<Pair<string | null, C3.Array<Data.Column | null>> | null> | null, pushStream: BytePushStream): Data.Column.DrainResult;

    /**
     * Deserialize into a stream of subject and Data.Columns pairs from the byteStream and slice the data columns by the start
     * and the end if provided or applicable.
     * Please note that the byteStream will be completely consumed and the {@link Pair#fst fst} of Pair is subjectId, while the {@Link Pair#snd snd} is the array of columns. You may provide start, end and subjectIds to filter only a subset of the data. An empty in either of the optional inputs means "no filtering".
     */
    static deser(stream: ByteStream, start?: DateTime | null, end?: DateTime | null, subjectIds?: C3.Set<string | null>): Stream<Pair<string | null, C3.Array<Data.Column | null>> | null>;
  }
}


interface λConsumer<T> {
  (t: T): void
}
