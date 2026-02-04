// TypeScript definitions for the C3 type Arrow

/**
 * Type representing https://arrow.apache.org/docs/index.html
 *
 * @remarks this represents a value passed to a method that expects an instance of Arrow
 */
declare interface IArrow {
}

/**
 * Type representing https://arrow.apache.org/docs/index.html
 *
 * @remarks this represents a made instance of Arrow
 */
declare class Arrow {

  /**
   * Type of this buffer
   */
  get type(): Type | null | TupleType | null;

  /**
   * String representation of Arrow schema for this buffer
   */
  get arrowSchema(): string;

  /**
   * Java native schema of this Arrow buffer
   */
  get javaSchema(): any;

  /**
   * Vector for field values in this Arrow value
   */
  vector(field: string): Arrow.Vector;

  /**
   * Returns the number of rows in this Arrow batch
   */
  rowCount(): number;

  /**
   * Binary representation of this Arrow buffer
   */
  serialize(): any | null;

  /**
   * Converts this Arrow value to an array
   */
  toArray(): C3.Array<any>;

  /**
   * Converts this Arrow value to tuple
   */
  toTuple(): Tuple | null;

  /**
   * Converts this Arrow value to array of instances of #type
   */
  toObjs(): C3.Array<O | null>;

  /**
   * Converts this Arrow value to iterator of instances of #type
   */
  toRows(): Iterator<O> | null;

  /**
   * Converts this Arrow value to batches of instances of #type
   */
  batchObjs(batchSize: number, action: λConsumer<C3.Array<O | null>>): number;

  /**
   * Writes binary representation of this Arrow buffer into provided content
   */
  write(content: C): C;

  /**
   * Writes binary representation of this Arrow buffer into provided byte push stream
   */
  write(stream: any): void;

  /**
   * Releases all memory used by Arrow
   */
  close(): void;

  /**
   * Reads instance of of Arrow from content such as file
   */
  static read(type: Type | null | TupleType | null, arrow: Content | null, failIfInvalid?: boolean): Arrow | null;

  /**
   * Reads instance of of Arrow from binary value
   */
  static read(type: Type | null | TupleType | null, arrow: any | null, failIfInvalid?: boolean): Arrow | null;

  /**
   * Reads instance of Arrow from binary stream
   */
  static read(type: Type | null | TupleType | null, arrow: ByteStream | null, failIfInvalid?: boolean): Arrow | null;

  /**
   * Reads instance of Arrow from binary stream
   */
  static read(type: Type | null | TupleType | null, arrow: Stream<number | null> | null, failIfInvalid?: boolean): Arrow | null;

  /**
   * Reads local file arrow file and processes it in batches
   */
  static readLocalBatches(type: Type | null | TupleType | null, localFile: string, action: λConsumer<Arrow | null>): number;

  /**
   * Makes an instance of Arrow from an array
   */
  static from(value: C3.Array<any> | null): Arrow | null;

  /**
   * Makes instance of Arrow from a sequence of columns represented as tuple of arrays.
   */
  static fromColumns(value: Tuple | null): Arrow | null;

  /**
   * Converts feature set columns into stream of Arrow column batches with given batch size.
   */
  static fromDataColumns(data: Stream<Pair<string | null, C3.Array<Data.Column | null> | null> | null>, schema?: TupleType | null, batchSize: number): Stream<Arrow | null>;

  /**
   * Converts stream of tuples into stream of Arrow column batches with given batch size.
   */
  static fromTuples(rows: Stream<Tuple | null>, schema: TupleType, batchSize: number): Stream<Arrow | null>;

  /**
   * Converts stream of objects into stream of Arrow column batches with given batch size.
   * Column batches contain columns specified by include in standard fetch include format.
   */
  static streamFromObjs(rows: Stream<Obj | null> | null, include?: string | null, batchSize: number): Stream<Arrow | null>;

  /**
   * Converts iterator of cell tuples into stream of Arrow column batches with given batch size.
   * Column batches contain columns specified by schema.
   */
  static streamFromTuples(source?: Iterator<Obj | null> | null, schema?: TupleType | null, batchSize: number): Stream<Arrow | null>;

  /**
   * Converts iceberg generic records into arrow iterator with given batch size.
   */
  static arrowIteratorFromRecords(records?: any, schema?: any, batchSize: number): ArrowIterator | null;

  /**
   * Converts a Tuple with each field representing a column (i.e an {@link Array}) into ArrowIterator.
   * @see ArrowIterator
   */
  static arrowIteratorFromColumns(tuple: Tuple): ArrowIterator | null;

  /**
   * Converts array of strings into arrow iterator with given batch size.
   */
  static arrowIteratorFromStrArray(array?: C3.Array<string | null>): ArrowIterator | null;

  /**
   * @return new Arrow buffer for a given C3 type
   */
  static makeBuffer(type: Type | null | TupleType | null, initialRowCount?: number | null): Arrow.Buffer;

  /**
   * @return string representation of Arrow schema for a given C3 type
   */
  static schemaFromC3Type(type: Type | null | TupleType | null): string;

  /**
   * @return java native representation of Arrow schema for a given C3 type
   * @param strict
   *            If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
   */
  static javaSchemaFromC3Type(type: Type | null | TupleType | null, include?: string | null, notStrict?: boolean): any;

  /**
   * @return string representation of Arrow type for a given C3 value type
   */
  static typeFromC3ValueType(valueType: ValueType): string;

  /**
   * @return java native representation of Arrow type for a given C3 value type
   * @param notStrict
   *            If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
   */
  static javaTypeFromC3ValueType(valueType: ValueType, notStrict?: boolean): any;

  /**
   *  @return a C3 **ValueType** from a given Arrow.Field. Please note that since C3 may not support all ArrowType(s)
   * or vice versa, so we may get an empty value if the conversion is not possible.
   */
  static c3ValueTypeFromArrowField(field: any): ValueType | null;

  /**
   * @return a Arrow.Field from a given  C3 **ValueType** and field name.
   * @param notStrict
   *            If true, except for {@link PrimitiveType#ofDateTimeNanos}, all other precisions map to ArrowType.Timestamp(TimeUnit.MICROSECOND, null).
   */
  static arrowFieldFromC3ValueType(name: string, valueType: ValueType, notStrict?: boolean): any;
}


interface λConsumer<T> {
  (t: T): void
}
