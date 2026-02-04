// TypeScript definitions for the C3 type ArrowIterator

/**
 * @remarks this represents a value passed to a method that expects an instance of ArrowIterator
 */
declare interface IArrowIterator {
}

/**
 * @remarks this represents a made instance of ArrowIterator
 */
declare class ArrowIterator {

  /**
   * @return true if there is an element in the sequence
   */
  hasNext(): boolean;

  /**
   * @return next element in the sequence
   */
  next(): Arrow | null;

  /**
   * "Close" iterator so any associated resources can be released. Exhausting iterator with hasNext / next should always
   * close it but it should be ok to close it early.
   */
  close(): void;

  /**
   * Construct a new ArrowIterator by reading Arrow column batches from given channel.
   */
  static read(type: Type, stream: ByteStream | null): ArrowIterator;

  /**
   * Construct a new ArrowIterator by reading Arrow column batches from connection. This method is called is used in py-client
   * run-times to de-serialize data in Arrow format.
   */
  static makeValue(connection?: any, response?: any): ArrowIterator | null;

  /**
   * Construct a new ArrowIterator by turning rows given by C3 objects into columnar batches with size given by batchSize.
   */
  static fromObjs(rows: Stream<Obj | null> | null, include?: string | null, batchSize: number, flatten?: boolean): ArrowIterator;

  /**
   * Construct a new ArrowIterator from given sequence of Arrow batches.
   */
  static fromElements(batches: C3.Array<Arrow | null>, schema: TupleType): ArrowIterator;

  /**
   * Construct empty ArrowIterator with given schema.
   */
  static empty(schema: TupleType): ArrowIterator;

  /**
   * Serialize content of this iterator into given output stream using Arrow File IPC format.
   */
  write(stream: any): number | null;

  /**
   * Convert content of this arrow iterator back to rows represented as C3 objects.
   */
  toRows(): Iterator<O>;

  /**
   * Return TupleType representation of schema for this iterator in C3 ValueType format. See {@link Arrow #type}
   */
  get schema(): TupleType;

  /**
   * Return native Arrow schema for this iterator.
   */
  get arrowSchema(): any;

  /**
   * Return native Arrow allocator used by this iterator.
   */
  get allocator(): any;

  /**
   * Return number of rows.
   */
  count(): number | null;
}

