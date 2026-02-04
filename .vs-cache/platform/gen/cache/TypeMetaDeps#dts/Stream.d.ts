// TypeScript definitions for the C3 type Stream

/**
 * A stream collection is a producer of elements. The great benefit of streams is that the elements need not all be
 * present in memory at the same time, making them suitable for processing large numbers values. Correspondingly,
 * they may only be consumed once.
 *
 * Note that every transform method on Stream (like collect, slice, map) effectively closes the original stream,
 * making it no longer usable.
 *
 * For performance and scalability reasons, it is important to use streams whenever the number of values can be large.
 * Also, when operating on a stream, be careful to avoid materializing the entire thing.
 *
 * Also see [Streams](streams.c3doc).
 *
 * @remarks this represents a value passed to a method that expects an instance of Stream
 */
declare interface IStream<E> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<Stream<E> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * A stream collection is a producer of elements. The great benefit of streams is that the elements need not all be
 * present in memory at the same time, making them suitable for processing large numbers values. Correspondingly,
 * they may only be consumed once.
 *
 * Note that every transform method on Stream (like collect, slice, map) effectively closes the original stream,
 * making it no longer usable.
 *
 * For performance and scalability reasons, it is important to use streams whenever the number of values can be large.
 * Also, when operating on a stream, be careful to avoid materializing the entire thing.
 *
 * Also see [Streams](streams.c3doc).
 *
 * @remarks this represents a made instance of Stream
 */
declare class Stream<E> {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<Stream<E> | null> | null;
  withOnClose(onClose: λConsumer<Stream<E> | null> | null): Stream;

  /**
   * Implements Python repr(this)
   */
  _repr_(): string | null;

  iter(): Iterator<E> | null;

  _iter_(): any;

  _length_(): number;

  /**
   * Returns the count of remaining elements in the stream and closes it.
   */
  get size(): number;

  isEmpty(): boolean;

  collect(limit?: number | null): C3.Array<E | null>;

  collectArrays(limit?: number | null): C3.Array<C3.Array<T | null>>;

  abs(): Stream<E> | null;

  aggImplementation(spec: AggSpec | null, op: string): R | null;

  aggImplementation(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  aggImplementation(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  sumDbl(): number;

  sumDiff(absoluteValues?: boolean): number;

  cusum(threshold?: number | null, drift?: number | null): C3.Array<number | null>;

  normalize(): Stream<E> | null;

  at(index: number): E | null;

  pluck(fieldPath: string | null, vtOverride?: ValueType | null): Stream<T> | null;

  first(): E | null;

  first(n: number): Stream<E> | null;

  first(test: λPredicate<E | null>): E | null;

  firstNotNull(): E | null;

  firstNotNull(mapper: λFunction<E | null, T | null>): T | null;

  firstNotEmpty(): E;

  firstNotEmpty(mapper: λFunction<E | null, T | null>): T;

  last(): E | null;

  last(n: number): Stream<E> | null;

  last(test: λPredicate<E | null>): E | null;

  lastNotNull(): E | null;

  lastNotNull(mapper: λFunction<E | null, T | null>): T | null;

  lastNotEmpty(): E;

  lastNotEmpty(mapper: λFunction<E | null, T | null>): T;

  minImplementation(spec?: AggSpec | null): E | null;

  minImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  minBy(value: λFunction<E | null, any>): E | null;

  /**
   * @return element of the collection with minimum value based on provided value supplier.
   */
  minBy(value: λBiFunction<E | null, number | null, any>): E | null;

  maxImplementation(spec?: AggSpec | null): E | null;

  maxImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  maxBy(value: λFunction<E | null, any>): E | null;

  /**
   * @return element of the collection with maximum value based on provided value supplier.
   */
  maxBy(value: λBiFunction<E | null, number | null, any>): E | null;

  count(spec?: AggSpec | null): R | null;

  /**
   * Counts remaining elements in the stream and closes it.
   *
   * @inheritdoc
   */
  count(): number;

  sumImplementation(spec?: AggSpec | null): R | null;

  allImplementation(spec?: AggSpec | null): R | null;

  prod(spec?: AggSpec | null): R | null;

  avg(): R | null;

  avgDbl(): number;

  median(): R | null;

  medianDbl(): number;

  percentile(percentile: number): R | null;

  percentileDbl(percentile: number): number;

  stddev(): R | null;

  stddevDbl(): number;

  variance(): R | null;

  varianceDbl(): number;

  aggDbl(aggFunc: string, percentile?: number | null): number;

  round(decimals?: number | null): Stream<E> | null;

  invert(): Stream<E> | null;

  only(failIfNotSingleton?: boolean): E | null;

  contains(element: any): boolean;

  containsAll(...elements: E | null[]): boolean;

  containsAll(c: Collection<E> | null): boolean;

  containsAll(predicate: λPredicate<E | null>): boolean;

  /**
   * @return `true` if every element in this collection satisfies provided predicate.
   */
  containsAll(predicate: λBiPredicate<E | null, number | null>): boolean;

  containsAny(predicate: λPredicate<E | null>): boolean;

  /**
   * @return true if this collection contains any elements satisfying provided condition.
   */
  containsAny(predicate: λBiPredicate<E | null, number | null>): boolean;

  findAny(predicate: λPredicate<E | null>): E | null;

  findAny(fields: C3.Map<string | null, any> | null): E | null;

  /**
   * Finds some element in this collection satisfying provided condition.
   */
  findAny(predicate: λBiPredicate<E | null, number | null>): E | null;

  anyNotNull(): E | null;

  anyNotNull(mapper: λFunction<E | null, T | null>): T | null;

  anyNotEmpty(): E;

  anyNotEmpty(mapper: λFunction<E | null, T | null>): T;

  each(action: λConsumer<E | null>): void;

  /**
   * Execute the specified lambda against each value of the collection. The first argument is the value and the second
   * is the collection index.
   */
  each(action: λBiConsumer<E | null, number | null>): void;

  eachWhile(action: λPredicate<E | null>): boolean;

  mapToSame(mapper: λFunction<E | null, E | null>): Stream<E> | null;

  /**
   * @return new collection for all elements of this collection transformed by applying provided lambda function.
   */
  mapToSame(mapper: λBiFunction<E | null, number | null, E | null>): Stream<E> | null;

  map(mapper: λFunction<E | null, T | null>): Stream<T> | null;

  /**
   * @return new collection based on all elements of this collection by applying provided mapping specification.
   */
  map(spec: FetchStreamSpec): Stream<E> | null;

  /**
   * @return new collection by evaluating provided expression over this collection elements; element type of the new
   *         collection is determined by return type of the expression
   */
  map(expr: string): Stream<T> | null;

  /**
   * @return new collection of any with all elements of this collection transformed by applying provided lambda function.
   */
  map(mapper: λBiFunction<E | null, number, T | null>): Stream<T> | null;

  mapToStr(mapper: λFunction<E | null, string | null>): Stream<string | null> | null;

  /**
   * @return new collection of string with all elements of this collection transformed by applying provided lambda function.
   */
  mapToStr(mapper: λBiFunction<E | null, number, string | null>): Stream<string | null> | null;

  mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): Stream<T> | null;

  /**
   * @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
   * It is the responsibility of the mapper to convert values to the elementType if needed. The method mapTo will not do any
   * such conversion.
   */
  mapTo(elementType: ValueType, mapper: λBiFunction<E | null, number, T | null>): Stream<T> | null;

  flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): Stream<E> | null;

  /**
   * @return returns a collection of same type consisting of the results of replacing each element of this collection
   *         with mapped array elements.
   */
  flatMapToSame(mapper: λBiFunction<E | null, number | null, Stream<E> | null>): Stream<E> | null;

  flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): Stream<T> | null;

  /**
   * @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
   */
  flatMap(mapper: λBiFunction<E | null, number, Stream<T> | null>): Stream<T> | null;

  flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): Stream<T> | null;

  /**
   * @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
   */
  flatMapTo(elementType: ValueType, mapper: λBiFunction<E | null, number, Stream<T> | null>): Stream<T> | null;

  flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): Stream<E> | null;

  fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

  fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

  /**
   * @return single value that is a result of aggregation of all elements by provided lambda and initial value.
   */
  fold(initial: T | null, folder: λTriFunction<E | null, number | null, T | null, T | null>): T | null;

  compact(): Stream<E> | null;

  unique(): Stream<E> | null;

  uniqueBy(key?: λFunction<E | null, any> | null): Stream<E> | null;

  /**
   * @return new collection with duplicate elements removed based on provided key supplier.
   */
  uniqueBy(key: λBiFunction<E | null, number | null, any>): Stream<E> | null;

  filter(predicate: λPredicate<E | null>): Stream<E> | null;

  filter(filter: string | null): Stream<E> | null;

  filter(fields: C3.Map<string | null, any> | null): Stream<E> | null;

  /**
   * Filters elements from this collection based on evaluation result of the provided filter predicate.
   */
  filter(predicate: λBiPredicate<E | null, number | null>): Stream<E> | null;

  fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): Stream<E> | null;

  fillMissing(value: any, spec?: FillMissingSpec | null): Stream<E> | null;

  fieldNames(): C3.Array<string | null>;

  fieldValueType(field: string): ValueType | null;

  reject(predicate: λPredicate<E | null>): Stream<E> | null;

  /**
   * Rejects elements from this collection based on evaluation result of the provided filter expression.
   */
  reject(predicate: λBiPredicate<E | null, number | null>): Stream<E> | null;

  include(include: string | null): Stream<E> | null;

  include(positions: Collection<number | null>): Stream<E> | null;

  exclude(exclude: string | null): Stream<E> | null;

  replaceByPredicate(e: E | null, predicate: λPredicate<E | null>): Stream<E> | null;

  sorted(descending?: boolean): Stream<E> | null;

  sorted(comparator: λBiFunction<E | null, E | null, number | null>): Stream<E> | null;

  sorted(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): Stream<E> | null;

  sorted(order: string | null): Stream<E> | null;

  sortedBy(key: λFunction<E | null, any>): Stream<E> | null;

  sortedBy(descending: boolean, key: λFunction<E | null, any>): Stream<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
   * provided lambda.
   */
  sortedBy(key: λBiFunction<E | null, number | null, any>): Stream<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
   * provided lambda.
   */
  sortedBy(descending: boolean, key: λBiFunction<E | null, number | null, any>): Stream<E> | null;

  sortedIndex(element: E, value: λFunction<E | null, any>): number;

  sortedIndex(element: E, fieldName: string): number;

  /**
   * Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
   * order to maintain collections sorted order.
   */
  sortedIndex(element: E, value: λBiFunction<E | null, number | null, any>): number;

  batch(batchSize?: number | null): Stream<Stream<E> | null>;

  partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

  countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

  countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

  /**
   * Counts values of the output of the provided key function
   */
  countBy(keyType: ValueType, key: λBiFunction<E | null, number | null, T | null>): C3.Map<T | null, number | null>;

  every(predicate: λPredicate<E | null>): boolean;

  /**
   * Checks if predicate returns true for all elements of collection
   */
  every(predicate: λBiPredicate<E | null, number | null>): boolean;

  elementCartesianProduct(): C3.Array<C3.Array<T | null>>;

  flatten(shallow?: boolean): Stream<T> | null;

  flatten(depth: number, include?: string | null): Stream<T> | null;

  sample(spec?: SampleSpec | null): Stream<E> | null;

  slice(fromPos: number, toPos?: number | null, stride?: number | null): Stream<E> | null;

  slice(positions: Collection<number | null> | null): Stream<E> | null;

  sliceByKey(keys: Collection<any> | null): Stream<E> | null;

  sliceByKey(secondaryIndex: string, keys: Collection<any> | null): Stream<E> | null;

  summarize(spec?: DigestSpec | null): Digest<any, Digest | null, DigestBuilder | null>;

  downsample(spec: DownsampleSpec): Stream<E> | null;

  leastSquares(): LeastSquaresResult;

  rollingDiff(stride?: number | null): Stream<E> | null;

  pctChange(stride?: number | null): Stream<E> | null;

  unaryOp(op: string): Stream<E> | null;

  shape(): C3.Array<number | null>;

  toObj(): Obj | null;

  fetch(spec?: FetchSpec | null): Stream<E> | null;

  largest(n: number, comparator?: λBiFunction<E | null, E | null, number | null> | null, keep?: string | null): C3.Array<E | null>;

  histogram(spec?: HistogramSpec | null): Histogram<any, any, HistogramBuilder | null>;

  neg(): Stream<E> | null;

  approxMostFrequent(spec?: CountMinSketchSpec | null): C3.Map<string | null, number | null>;

  timeseries(spec?: DataTimeseriesSpec | null): Stream<R> | null;

  timeseries(tsFieldSpec: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpec | null): Stream<R> | null;

  elementType(): ValueType;

  stream(): Stream<E | null>;

  /**
   * An estimate for the number of unique elements backed by {@link HyperLogLog}
   */
  approxUniqueCount(): number | null;

  /**
   * An estimate for the median backed by {@link TDigest}
   */
  approxMedian(spec?: TDigestSpec | null): number | null;

  /**
   * An approximate histogram backed by {@link TDigest}
   */
  approxHistogram(spec?: TDigestSpec | null): Histogram<any, any, HistogramBuilder | null> | null;

  /**
   * (# of true booleans) / (size of collection)
   */
  truePercent(): number | null;

  /**
   * The number of null values
   */
  nullCount(): number | null;

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
  static fromJson(json: any | null): Stream<E> | null;

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
  static fromJsonString(json: string | null): Stream<E> | null;

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
  static fromXmlString(xml: string | null): Stream<E> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Stream<E> | null;

  /**
   * Serializes contents of this collection as elements separated by `", "` and surrounded by brackets or braces
   * (JSON array style for simple collections and object style for maps).
   *
   * Note that if collection is empty, it returns "[]" or "{}".
   */
  toString(): string;

  /**
   * Serializes contents of this collection as "`prefix` + elements separated by `separator` + `suffix`".
   *
   * Note that if collection is empty then if `emptyString` is true returns "" otherwise returns "`prefix` + `suffix`"
   */
  toString(prefix: string | null, separator: string | null, suffix?: string | null, emptyString?: boolean): string | null;

  /**
   * Serializes contents of this collection as elements separated by `separator`, with no prefix or suffix.
   *
   * Note that if collection is empty returns ""
   */
  toString(separator: string | null): string | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Measures retained memory by this instance.
   *
   * @param deep
   *        if true and this instance contains references to other objects also measures memory retained by those
   * @param allMeasured
   *        if set then will skip instances that are in the set and will add instances that where measured by this call
   * @return retained memory in bytes for this instances
   */
  retainedMemory(deep?: boolean, allMeasured?: SetBuilder<any> | null): number;

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
  replaceType(old: Type, new_: Type): Stream<E>;

  /**
   * Generates a Iterable from the result of applying a binary operator against elements of Iterable.
   * The return type of the binary operator must match rt.
   * @elementType
   *        The return value type of the operator/ the element type of the returned Iterable
   * @spec
   *        Configures behavior of this method based on {@link OpSpec#repeatLast}
   * @other
   *        Other Iterable to apply operator on
   * @merge
   *        Binary operator to apply to elements of this and other Iterable at matching positions
   * @return the generated Iterable with return type rt.
   */
  zip(elementType?: ValueType | null, spec: OpSpec | null, other: Iterable<T> | null, merge: λQuadFunction<E | null, number | null, any, number | null, R | null>): Iterable<R>;

  /**
   * Merges together the values of each of the collection with the values at the corresponding position.
   */
  static zip(...collections: Collection<any> | null[]): C3.Array<C3.Array<any>>;

  /**
   * C3 ValueType of this instance.
   */
  valueType(): ValueType;

  /**
   * Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
   * considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
   *
   * @see ValueType#instanceType
   */
  static valueTypeOf(type: Type, failIfNot?: boolean): ValueType | null;

  /**
   * For collections, the natural language collection will be returned. Normally, `toNative` will be called on each
   * element in the returned collection (and it will be a copy). If `doNotCopy` is true, the native collection _may_
   * be the same one used internally and will not have called `toNative` on the elements.
   *
   * ## Array
   * - Python: `list`
   * - JavaScript: `Array`
   * - Java: `java.util.List`
   *
   * ## Set
   * - Python: `set`
   * - JavaScript: `Set`
   * - Java: `java.util.Set`
   *
   * ## Map
   * - Python: `dict`
   * - JavaScript: `Map`
   * - Java: `java.util.Map`
   *
   * ## Stream
   * - Python: generator
   * - JavaScript: generator
   * - Java: `java.util.stream.Stream`
   */
  toNative(doNotCopy?: boolean): any;

  /**
   * @returns true if the collection has been validated
   */
  validated(): boolean;

  /**
   * @return value type of this collection
   */
  collectionType(): StreamType;

  /**
   * @return a collection with potentially more specialized element type by inferring element value types
   */
  inferType(): Stream<E> | null;

  /**
   * @return true if this collection can have null elements
   */
  hasNullElements(): boolean;

  /**
   * @return true if this instance has same size and type as other collection and contains same elements. Return false
   *         otherwise including when other is not a collection
   */
  isSame(other: any): boolean;

  /**
   * @return true if this instance has same size and elements as other collection but is potentially of different type
   */
  hasSameElements(other: Collection<any> | null, ignoreElementOrder?: boolean): boolean;

  /**
   * @return true if this collection discards duplicate elements
   */
  isUnique(): boolean;

  /**
   * @return true if this collection is sorted
   */
  isSorted(): boolean;

  /**
   * @return true if this collection is indexed, i.e. has a meaningful order of elements and has #at(int) method
   *         enabled
   */
  isIndexed(): boolean;

  /**
   * @return a stream of index values for all elements in this collection
   */
  indices(): Stream<number | null>;

  /**
   * @return index of first occurrence of provided element or -1 if element is not in this collection
   */
  indexOf(element: E | null): number;

  /**
   * Finds first index of element in this collection satisfying provided condition.
   */
  indexOfAny(test: λPredicate<E | null>): number;

  /**
   * @return index of last occurrence of provided element or -1 if element is not in this collection
   */
  lastIndexOf(element: E | null): number;

  /**
   * Finds last index of element in this collection satisfying provided condition.
   */
  lastIndexOfAny(test: λPredicate<E | null>): number;

  /**
   * @return
   * 1. element with minimum value of the primitive collection.
   * 2. new element with minimum value for each field for the obj collection.
   * 3. new collection with minimum value for each index for collection of collections.
   *
   * e.g:
   * ```
   * d = [{a:1,b:2,c:3}, {a:3,b:0,c:2}]
   * d.min() === {a:1,b:0,c:2}
   *
   * d = [1,2,3]
   * d.min() === 1
   *
   * d = [[1,2,3], [1,1,4,7]]
   * d.min() === [1,1,3,7]
   * ```
   */
  min(spec?: AggSpec | null): E | null;

  /**
   * @return element of the collection with minimum value based on provided comparator.
   */
  min(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * @return
   * 1. element with maximum value of the primitive collection.
   * 2. new element with maximum value for each field for the obj collection.
   * 3. new collection with maximum value for each index for collection of collections.
   *
   * e.g:
   * ```js
   * d = [{a:1,b:2,c:3}, {a:3,b:0,c:2}]
   * d.max() === {a:3,b:2,c:3}
   *
   * d = [1,2,3]
   * d.max() === 3
   *
   * d = [[1,2,3], [1,1,4]]
   * d.max() == [1,2,4]
   * ```
   */
  max(spec?: AggSpec | null): E | null;

  /**
   * @return element of the collection with maximum value based on provided comparator.
   */
  max(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * @return
   * 1. sum of all elements of the primitive collection.
   * 2. new element with summed value for each field for the obj collection.
   * 3. new collection with summed value for each index for collection of collections.
   * Please note that for **Boolean** fields, values will be converted to **Integer** fields before summing.
   *
   * e.g:
   * ```js
   * d = [{a:1,b:2,c:3,d:True,e:False}, {a:3,b:0,c:2,d:False,e:False}]
   * d.sum() === {a:4,b:2,c:5,d:1,e:0}
   *
   * d = [1,2,3]
   * d.sum() === 6
   *
   * d = [[1,2,3], [1,1,4]]
   * d.sum() == [2,3,7]
   *
   * d = [False, True, False]
   * d.sum() === d.or()
   * d.sum() === True
   * ```
   * @see #agg
   * @see #add
   * @see #min
   * @see #or
   */
  sum(spec?: AggSpec | null): R | null;

  /**
   * Sums up evaluation result of a provided expression for each element in this collection.
   */
  sum(projection: string, spec?: AggSpec | null): R | null;

  /**
   * @return
   * 1. AND (`&&`) of all elements of the primitive collection.
   * 2. new element with AND (`&&`) value for each field for the obj collection.
   * 3. new collection with AND (`&&`) value for each index for collection of collections.
   * e.g:
   * ```js
   * d = [{a:False,b:True,c:True}, {a:True,b:True,c:True}]
   * d.all() === {a:False,b:True,c:True}
   *
   * d = [True,True,False]
   * d.all() === False
   *
   * d = [[True,True,False], [True,False,False]]
   * d.all() == [True, False, False]
   * ```
   */
  all(spec?: AggSpec | null): R | null;

  /**
   * Aggregates the Collection into a single element based on the aggregator provided.
   * Used in operators like min, max to get min and max value of the Collection respectively.
   *
   * @see #agg
   * @see #min
   * @see #max
   */
  agg(spec: AggSpec | null, op: string): R | null;

  /**
   * Aggregates the Collection into a single value based on the aggregator provided.
   * Used in operators like min, max to get min and max value of the Collection respectively.
   * @param aggregator
   *        Defines the aggregation operation over the collection
   * @param spec
   *        Specialize/influence the Aggregation operation.
   *
   * @see AggSpec
   * @see #min
   * @see #max
   * @see #agg
   */
  agg(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  /**
   * @return an aggregated value by applying a folder lambda over a chunk/partition of data and aggregator over
   * the stream of intermediate results. Unlike {@link #agg} which has the same folder lambda aggregating data
   * **within and across chunk/partition**, this method allows for different lambdas to be applied in each case.
   * {@link #avg} and {@link #variance} uses this internally in the implementation, whereas {@link #sum} uses
   * {@link #agg} underneath.
   *
   * @see #agg
   */
  agg(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  /**
   * Aggregate values in the current collection using the given aggregation function
   * @param aggFunc
   *            Aggregation function to aggregate by
   * @param percentile
   *            If the aggregation function is {@link AggOp.PERCENTILE}
   * @return the aggregated value
   */
  agg(aggFunc: string, percentile?: number | null): E | null;

  /**
   * Converts this collection to an array of provided type
   */
  toArray(arrayType: ArrayType, failIfElementIsInvalid?: boolean): C3.Array<T | null>;

  /**
   * Converts this collection to a set of its elements without annotations. The set does not preserve order of the elements.
   */
  toSet(): C3.Set<E | null>;

  /**
   * Converts this collection to a set of its elements with provided setType (including annotations e.g. indexed, sorted, unique)
   */
  toSet(setType: SetType, failIfElementIsInvalid?: boolean): C3.Set<T | null>;

  /**
   * Converts this collection to an stream of provided type
   */
  toStream(streamType: StreamType, failIfElementIsInvalid?: boolean): Stream<T | null>;

  /**
   * Converts this collection of instances of WithKey type to a map using natural key of it's elements. If collection
   * contains duplicate elements for the same key then only last element will be preserved if collection is with index
   * or arbitrary one will survive otherwise. In such cases it's better to use group
   *
   * @see group
   * @see WithKey
   */
  toMap(): C3.Map<string | null, E | null>;

  /**
   * Converts this collection to a map using provided key lambda function. If collection contains duplicate elements for
   * the same key then only last element will be preserved if collection is with index or arbitrary one will survive
   * otherwise. In such cases it's better to use group.
   *
   * @see group
   */
  toMap(key: λFunction<E | null, string | null>): C3.Map<string | null, E | null>;

  /**
   * Converts this collection to a map using provided key lambda function. If collection contains duplicate elements for
   * the same key then only last element will be preserved if collection is with index or arbitrary one will survive
   * otherwise. In such cases it's better to use group.
   *
   * @see group
   */
  toMapOf(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, E | null>;

  /**
   * Converts this collection to a map of any to any using provided lambda function producing map entry
   */
  toMapOfAny(entry: λFunction<E | null, Pair<T1, T2> | null>): C3.Map<T1 | null, T2 | null>;

  /**
   * Converts this collection to a map of provided type
   */
  toMapOfType(mapType: MapType, failIfElementIsInvalid?: boolean): C3.Map<T1 | null, T2 | null>;

  /**
   * Converts this collection to a collection of provided collection type but same element type
   */
  toCollection(collectionType: CollectionType): Collection<E> | null;

  /**
   * Converts this collection to a collection of same kind but potentially different element type. If provided
   * collection type is same as type of this collection does nothing. If provided collection type is assignable from
   * this collection type then simply changes collection type but keeps elements as is. Otherwise also converts
   * elements.
   */
  toMixingCollection(collectionType: CollectionType, failIfInvalid?: boolean): Stream<T> | null;

  /**
   * Converts this collection to a collection of provided collection type
   */
  toCollectionOfType(collectionType: CollectionType, failIfElementIsInvalid?: boolean): Collection<T> | null;

  /**
   * Converts this collection to appropriate collection that is stored in memory
   */
  toInMemory(): C3.Array<E | null>;

  /**
   * @return Boxed instance of this collection.
   */
  box(): Boxed<Collection<E> | null> | null;

  /**
   * @return copy of this collection with all elements Boxed.
   */
  boxElements(): Stream<Boxed<E> | null> | null;

  /**
   * Maps this collection to another by obfuscating fields.
   * @param spec
   *            A spec use for additional fields that you want to anonymize in addition to already defined pii fields
   *            in c3 type and quasi identifier fields that you want to anonymize using data anonymization algorithm,
   *            which ensure k-anonymity in the collection
   * @return A Collection that has requested pii fields obfuscated and/or requested quasi identifier fields anonymized
   * @see Anonymizer.anonymize, Anonymizer.anonymizeBatch
   */
  anonymize(spec?: AnonymizationSpec | null): Stream<E> | null;

  /**
   * Descriptive statistics based on a normal distribution. Values which cannot be calculated are null.
   * Empty populations will have only sum and count. Non-numeric values are ignored.
   */
  descriptiveStatistics(): DescriptiveStatisticsResult;

  /**
   * Examine all the numeric values in an array and produce a new array with the numbers that fall within the specified
   * bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
   * and non-finite values are removed as well.
   *
   * By default, this removes points beyond 2σ from the mean, but many other options are possible by specifying
   * different combinations of options in the {@link OutliersSpec spec}.
   *
   * @param spec configuration of the high and low filter criteria
   */
  withoutOutliers(spec?: OutliersSpec | null): Stream<E>;

  /**
   * Examine all the numeric values in an array and produce a new array with the numbers that fall outside the specified
   * bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
   * and non-finite values are not included.
   *
   * By default, this extracts points beyond 2σ from the mean, but many other options are possible by specifying
   * different combinations of options in the {@link OutliersSpec spec}.
   *
   * @param spec configuration of the high and low filter criteria
   */
  extractOutliers(spec?: OutliersSpec | null): Stream<E>;

  /**
   * Examine all the numeric values in an array and determine whether the specified value falls outside the specified
   * bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
   * and non-finite values are not considered (and never outliers).
   *
   * By default, this identifies values beyond 2σ from the mean, but many other options are possible by specifying
   * different combinations of options in the {@link OutliersSpec spec}.
   *
   * @param value sample value to check as outlier
   * @param spec configuration of the high and low filter criteria
   */
  isOutlier(value: E, spec?: OutliersSpec | null): boolean;

  /**
   * @return new collection with a new element added to it.
   */
  with(e: E | null): Stream<E>;

  /**
   * @return new collection with a new elements added to it.
   */
  withSome(e: E | null, ...more: E | null[]): Stream<E>;

  /**
   * @return new collection with the provided elements added to it.
   */
  withAll(elements: Collection<E> | null): Stream<E> | null;

  /**
   * @return new collection without the provided element.
   */
  without(e: E | null): Stream<E> | null;

  /**
   * @return new collection without the provided elements.
   */
  withoutSome(e: E | null, ...more: E | null[]): Stream<E> | null;

  /**
   * @return new collection without elements satisfying provided predicate.
   */
  withoutAny(predicate: λPredicate<E | null>): Stream<E> | null;

  /**
   * @return new collection with the provided elements removed.
   */
  withoutAll(elements: C3.Array<E | null> | null): Stream<E> | null;

  /**
   * @return new collection with elements that are not present in provided collection.
   */
  difference(other: Collection<E> | null): Stream<E> | null;

  /**
   * @return new collection of unique items, in order, that are present in all of the input collections.
   */
  static intersection(...collections: Collection<E> | null[]): Stream<E> | null;

  /**
   * The opposite of zip. Converts a collection of collections into a series of arrays with each source
   * element placed in the returning nested array of the same index.
   */
  unzip(): C3.Array<C3.Array<any>>;

  /**
   * Merge multiple strings into a smaller number using JaroWrinkler text similarity to match up strings. The complexity
   * is O(n * m) where n is the size of the collection and m is the number of merged clusters.
   * @return list of pairs where fst() is the merged result and snd() is the size of merged cluster
   */
  mergeSimilar(spec?: MergeSimilarSpec | null): Stream<MergeSimilarCluster | null>;

  /**
   * Merge the obj references that are same within the current collection. Element order may not be preserved after merge
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Stream<E>;

  /**
   * Calls specific method on collection visitor based on type of this collection. Skips empty collections.
   */
  visit(visitor: any): T | null;

  /**
   * Calls specific method on collection visitor based on type of this collection. If includeEmpty is true will call
   * visitor even if collection is empty.
   */
  visit(includeEmpty: boolean, visitor: any): T | null;

  /**
   * Maps this collection to new one by invoking Obj#withDefaults on every element
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Stream<E> | null;

  /**
   * Generate a Timeseries from the fields in the given reference collection. If you have [number] {@see Timeseries.fromValues}
   * @tsSpec
   *        Spec indicating fields to use to generate a Timeseries
   * @timeInfo
   *        TimeInfo specifying the range/interval of the result Timeseries
   * @return resultant Timeseries as per the given spec
   */
  evalTimeseries(spec: EvalTimeseriesSpec): Timeseries<any> | null;

  /**
   * Groups the collection by the output of the provided key function, resulting in an intermediate structure
   * that can perform an operation on each group.
   *
   * @param data
   *           the collection to perform the groupby operation on.
   * @param keyType
   *           Type of the key by which to group by.
   * @param key
   *           function to compute the key from the element in the collection.
   * @return an intermediate structure that records the groupby operation, for performing subsequent actions.
   */
  groupBy(keyType: ValueType, key: λFunction<E | null, T | null>): CollectionGroupBy<E> | null;

  /**
   * Groups the collection by the output of the provided key function, resulting in an intermediate structure
   * that can perform an operation on each group.
   *
   * @param data
   *           the collection to perform the groupby operation on.
   * @param key
   *           function to compute the key from the element in the collection.
   * @return an intermediate structure that records the groupby operation, for performing subsequent actions.
   */
  groupBy(key: λFunction<E | null, string | null>): CollectionGroupBy<E> | null;

  /**
   * Groups the collection by the element field or element fields, resulting in an intermediate structure
   * that can perform an operation on each group.
   *
   * @param data
   *           the collection to perform the groupby operation on.
   * @param fields
   *           Represents a single element field (or integer position) or a list of element fields (or integer
   *           positions), which allows us to group by the fields of the elements (equivalent to grouping by columns in
   *           a 2D table).
   * @return an intermediate structure that records the groupby operation, for performing subsequent actions.
   */
  groupBy(fields: string | null): CollectionGroupBy<E> | null;

  /**
   * Resamples (normalizes the timeseries) on the Collection. If element type is a reference then resampling happens on
   * only the numeric fields. Rules of normalization can be reviewed {@link normalization}
   *
   * Note: if element type is {@link Partitionable}, this will create a Timeseries per partition key -> see {@link Partitionable} & {@link Collection#groupBy}
   * unless TimeseriesSpec.doNotPartition is set
   *
   * E.g.
   * ```js
   * col = [{ "a" : 0.9, "b" : 1, "c": "foo", "d": "2010-01-01", "e": true  },
   *        { "a" : 1.1, "b" : 2, "c": "bar", "d": "2010-01-02", "e": false  },
   *        { "a" : 2.1, "b" : 3, "c": "foo", "d": "2010-01-03", "e": false  }]
   *
   * // resample by 1 month frequency on field "d"
   * r = col.resample(ResampleSpec.forFields('d', '1m')).sum()
   * [{ "d": "2010-01-01", "a" : 4.1, "b" : 6, "e": true  }]
   *
   * // resample by 8h frequency on field "d"
   * r = col.resample(ResampleSpec.forFields('d', '8h')).sum()
   * [{ "d": "2010-01-01T00:00:00", "a" : 0.9, "b" : 1, "e": true  },
   * [{ "d": "2010-01-01T08:00:00", "a" : 0.0, "b" : 0, "e": false  },
   * [{ "d": "2010-01-01T16:00:00", "a" : 0.0, "b" : 0, "e": false  },
   * [{ "d": "2010-01-02T00:00:00", "a" : 1.1, "b" : 2, "e": false  },
   * [{ "d": "2010-01-02T08:00:00", "a" : 0.0, "b" : 0, "e": false  },
   * [{ "d": "2010-01-02T16:00:00", "a" : 0.0, "b" : 0, "e": false  },
   * [{ "d": "2010-01-03T00:00:00", "a" : 2.1, "b" : 3, "e": false  },
   * ```
   * @param spec
   *           Fields indicating how the Collection should be resampled. {@link ResampleSpec#forFields}
   * @return an intermediate structure that records the resample operation, for performing subsequent actions
   */
  resample(spec?: ResampleSpec | null): CollectionResample<E>;

  /**
   * Records the first step of selecting the window of a rolling (a.k.a. moving) window operation in an intermediate
   * structure that can perform further operations on the values in the window.  Each element field is operated on
   * independently of the other fields, rather than operating on each element as a whole (equivalent to calculating
   * on each column in a 2D table independently when there are multiple columns).
   *
   * For a general description and examples of what are rolling window operations, see
   * [pandas.DataFrame.rolling](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rolling.html)
   * which is very similar to this method.
   *
   * @param data
   *           Input data.
   * @param window
   *           Size of the moving window.  An integer represents a fixed number of non-missing values in the window,
   *           while a {@link Period} represents the time period of each window, and is only valid for datetime-like
   *           indices.
   * @param minValues
   *           Minimum number of non-missing values in a window required for the final result of an
   *           operation on the returned {@link CollectionRolling} to have a value for the window.
   *           Otherwise, the final result for the window is null or NaN.  "Non-missing value" here refer to an
   *           individual element field, not the entire element.
   *           When `window` is a {@link Period}, the default value of this parameter is 1.  Otherwise, this parameter
   *           defaults to the size of the window.
   * @param on
   *           The name of a datetime-like element field (equivalent to datetime-like column on a 2D table) on which to
   *           calculate the rolling window, rather than the index.  If this is not the name of a datetime-like element
   *           field (e.g. an integer element field), this method argument will be ignored.
   * @return an intermediate structure that records the rolling operation, for performing subsequent actions.
   */
  rolling(window: number | null | Period | null | WindowSpec | null, minValues?: number | null, spec?: DataTimeseriesSpec | null): CollectionRolling<E> | null;

  /**
   * Returns a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
   * point in the window starting at "offset" and spanning "span" data points.
   *
   * Example: `rolling(AVG, sum(normalized.data.quantity), -20, 21, 3)`
   *
   * @param agg
   *           Name of the aggregation function.
   * @param data
   *           Input data.
   * @param offset
   *           Start point in the window.
   * @param span
   *           Number of points to span from the offset.
   * @param step
   *           Step of the window.
   * @return a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
   *         point in the window starting at "offset" and spanning "span" data points.
   */
  rolling(agg: string, offset: number, span: number, step?: number | null): Stream<E> | null;

  /**
   * Find the union element value type for some number of collections. This will fall back to `any` if no collections
   * are passed.
   */
  static mergedElementType(...collections: Collection<any> | null[]): ValueType;

  _item_(key: any): any;

  /**
   * Convert the given Collection into {@link Data}. If Type & include are not specified, all fields will be converted
   * to Data
   */
  toData(include?: string | null): Data | null;

  /**
   * @return copy of this collection with new element at provided index.
   */
  replace(index: number, e: E | null): Stream<E> | null;

  /**
   * Returns everything but the last N entries of the collection
   */
  initial(exceptLastN?: number): Stream<E>;

  /**
   * Converts this collection into collection of pairs of neighboring elements.
   */
  pairs(): Stream<Pair<E, E> | null> | null;

  /**
   * Search for an element within this array. If the element is not found then closest lowest element is returned
   * @param search
   *            Element to search for
   * @param spec
   *            Determines properties for binary search
   * @return result of the binary search determining the index & whether the actual element was found
   */
  binarySearch(search: E, spec?: BinarySearchSpec | null): BinarySearchResult<E>;

  /**
   * @return collection of provided element type and values.
   */
  static of(elementType: ValueType, ...elements: T | null[]): Stream<T> | null;

  /**
   * @return collection of any with provided elements.
   */
  static ofAny(...elements: T | null[]): Stream<T> | null;

  /**
   * @return collection of provided booleans.
   */
  static ofBool(...elements: boolean[]): Stream<boolean> | null;

  /**
   * @return collection of provided 64 bit integers.
   */
  static ofInt(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return collection of provided 32 bit integers.
   */
  static ofInt32(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return collection of provided 16 bit integers.
   */
  static ofInt16(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return collection of provided floats.
   */
  static ofFloat(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return collection of provided doubles.
   */
  static ofDbl(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return collection of provided doubles.
   */
  static ofByte(...elements: number | null[]): Stream<number | null> | null;

  /**
   * @return stream of bytes from a binary value
   */
  static ofByte(elements?: any | null): Stream<number | null> | null;

  /**
   * @return collection of provided datetime.
   */
  static ofDateTime(...elements: DateTime | null[]): Stream<DateTime | null> | null;

  /**
   * @return collection of provided string.
   */
  static ofStr(...strs: string | null[]): Stream<string | null> | null;

  /**
   * @return collection of generic obj and provided instances.
   */
  static ofObj(...objs: Obj | null[]): Stream<Obj | null> | null;

  /**
   * @return collection of provided C3 type and provided instances.
   */
  static ofObj(type: Type, ...objs: Obj | null[]): Stream<O> | null;

  /**
   * @return collection of provided integers in a range.
   */
  static ofIntInRange(min: number, max: number, step?: number | null): Stream<number> | null;

  /**
   * @return collection of provided integers in a range.
   */
  static ofInt32InRange(min: number, max: number, step?: number | null): Stream<number> | null;

  /**
   * Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
   * content will eventually be read in a streaming manner by the instance.
   */
  static fromHttpRequest(req: HttpRequest): Stream<E>;

  /**
   * Constructs instance of HTTP response from this instances. Expectation is that the response in not immediately
   * produced in memory, and HTTP response body will eventually be written in a streaming manner by the instance.
   */
  toHttpResponse(req: HttpRequest): HttpResponse;

  /**
   * Deallocates any potential resource and calls onClose if provided.
   */
  close(): void;

  /**
   * Discard any unconsumed items and release underlying resources.
   */
  doClose(): void;

  /**
   * @returns true if this Closable resource has been closed
   */
  closed(): boolean;

  /**
   * Whether or not there is at least one more value to be consumed.
   */
  hasNext(): boolean;

  /**
   * Consume the next single value. Throws exception if all elements of the stream have been consumed.
   *
   * Typical usage is to call `next` after #hasNext returns true:
   * after #hasNext returns true:
   * ```py
   * while s.hasNext():
   *    process(s.next())
   * ```
   */
  next(): E | null;

  /**
   * Consumes stream and returns `true` if stream _was_ empty beforehand.
   *
   * @see #isEmpty
   * @see #size
   */
  wasEmpty(): boolean;

  /**
   * Skip over the specified number of items.  If the the stream ends before the specified number of items have been
   * skipped, the return value will be smaller than the argument.
   *
   * @return number of items skipped
   */
  skip(n: number): number;

  /**
   * Creates a new collection from limited number of elements of this collection. Limit is relative to the first
   * element in collection. If limit is not provided or is negative returns same collection.
   */
  limit(limit: number | null): Stream<E>;

  /**
   * Creates a new collection from limited number of elements of this collection. Limit is relative to the first
   * element in collection. If limit is not provided or is negative returns same collection.
   */
  limit(limit: number): Stream<E>;

  /**
   * @return a new collection with the specified number of elements removed from the beginning of the stream.
   */
  offset(offset: number | null): Stream<E>;

  /**
   * @return a new collection with the specified number of elements removed from the beginning of the stream.
   */
  offset(offset: number): Stream<E>;

  /**
   * Appends elements of other stream to to this one
   */
  concat(other: Stream<E> | null): Stream<E | null>;

  /**
   * Concatenates multiple streams into a single stream
   *
   * @param streams
   *            Streams that need to be concatenated
   */
  static concatStreams(...others: Stream<T> | null[]): Stream<T | null>;

  /**
   * Concatenates multiple streams into a single stream
   *
   * @param streams
   *            Streams that need to be concatenated
   * @return a single stream
   */
  static concatStreams(streams: C3.Array<Stream<T> | null> | null): Stream<T | null>;

  /**
   * Split the current stream into 2 based on the index. The first stream has to be consumed before the second
   *
   * @param index
   *        Index at which you want to split
   * @return Pair<first_stream,second_stream>
   */
  split(index: number | null): Pair<Stream<E | null>, Stream<E | null>>;

  /**
   * Create a new stream with the same elements, but reordered using a version of the Fisher-Yates shuffle. Because
   * streams have unknown length, this is done in "windows".
   *
   * @param windowSize the number of values to materialize and shuffle at a time.
   */
  shuffle(windowSize?: number): Stream<E>;

  /**
   * Create a new merged stream from the current stream and the provided stream. This operation merges the two sorted
   * streams into a single sorted stream in O(n) time complexity without materializing either stream
   * see: https://en.wikipedia.org/wiki/Merge_sort
   * @param stream
   *            Stream that need to be merged
   * @param sortStreams
   *            If true, sort the input streams before merging
   * @param comparator
   *            Comparator to sort the elements. If not provided, natural ordering is used
   * @return a single sorted stream
   */
  sortMerge(stream: Stream<E> | null, sortStreams?: boolean, comparator?: λBiFunction<E | null, E | null, number | null> | null): Stream<E | null>;

  /**
   * @return new stream from a batch supplier lambda
   */
  static fromBatchApi(elementType: ValueType, limit: number, batch: λFunction<number | null, C3.Array<T | null>>): Stream<T | null>;

  /**
   * @return new stream from a batch supplier lambda
   */
  static fromBatchApi(elementType: ValueType, limit: number, batch: λBiFunction<number | null, number | null, C3.Array<T | null>>): Stream<T | null>;

  /**
   * @return new stream from a batch supplier lambda
   */
  static fromBatchApi(elementType: ValueType, limit: number, context?: C | null, batch: λTriFunction<number | null, number | null, C | null, Pair<C, [T]> | null>): Stream<T | null>;

  /**
   * Creates a new BufferedStream wrapping the original stream.  The buffered stream can be used for peeking ahead
   * at unread stream contents, or looking back at already read stream contents in a rolling window.
   *
   * @see{BufferedStream.window}
   * @see{BufferedStream.currentIndexInWindow}
   *
   * @param readAhead
   *           Number of elements to read ahead.  If null or <= 0, no read ahead will be performed.
   * @param retain
   *           Number of already read elements to retain.  If null or <= 0, no elements will be retained.
   * @param onlyOnce
   *           If true, the read ahead will only be performed once initially.  As the stream is consumed, the
   *           BufferedStream's window will shrink until empty.  This is useful for making initial decisions for
   *           optimization based on the stream's size or initial contents.
   *
   * @return a new BufferedStream wrapping the original stream.
   */
  buffer(readAhead?: number | null, retain?: number | null, onlyOnce?: boolean, silent?: boolean): BufferedStream<E>;

  /**
   * Creates a new Buffered stream wrapping the original stream that can be used for peeking ahead t unread stream
   * contents.
   *
   * @see{BufferedStream.window}
   * @see{BufferedStream.currentIndexInWindow}
   *
   * @param readAhead
   *           Number of elements to read ahead.  If null or <= 0, no read ahead will be performed.
   * @param onlyOnce
   *           If true, the read ahead will only be performed once initially.  As the stream is consumed, the
   *           BufferedStream's window will shrink until empty.  This is useful for making initial decisions for
   *           optimization based on the stream's size or initial contents.
   *
   * @return a new BufferedStream wrapping the original stream.
   */
  peek(readAhead?: number | null, onlyOnce?: boolean): BufferedStream<E>;

  /**
   * Build a stream on top of an iterator instance.
   */
  static make(elementType: ValueType, iter: Iterator<T>): Stream<T> | null;

  /**
   * Build a stream on top of a lambda that produces the next value or null on end. Note that this model does not
   * work for streams that may contain null values.
   */
  static make(elementType: ValueType, next: λSupplier<T | null>, close?: λNullConsumer | null): Stream<T> | null;

  /**
   * Build a stream on top of a lambda that produces the next value or null on end. Note that this model does not
   * work for streams that may contain null values.
   *
   * @param elementType
   *        elementType of the resulting stream
   * @param initial
   *        initial value passed to next lambda; note that this is not necessarily a first element as next can decide
   *        to return a different value when `index == 0`
   * @param next
   *        lambda that takes last element and next index and returns next value or null on end
   * @param close
   *        optional callback that will be called on stream close
   */
  static make(elementType: ValueType, initial: T | null, next: λBiFunction<T | null, number, T | null>, close?: λNullConsumer | null): Stream<T> | null;

  /**
   * Build a stream on top of a lambda that produces the next value or null on end. Because this provides an explicit
   * `hasNext` lambda, this model works for streams that may contain null values.
   *
   * @param elementType
   *        elementType of the resulting stream
   * @param hasNext
   *        predicate that determines whether there is another element to be gotten
   * @param next
   *        lambda that takes last element and next index and returns next value
   * @param close
   *        callback that will be called on stream close (may be null)
   */
  static make(elementType: ValueType, hasNext: λNullPredicate, next: λBiFunction<T | null, number, T | null>, close: λNullConsumer | null): Stream<T> | null;

  /**
   * Generates a retryable stream from the given stream instance i.e. if getting an element from the steam fails due to
   * a retryable error as specified by the {@link ConditionalRetryableSpec} then the stream will resume from the same
   * offset before the error occurred. This is helpful when reading stream of data from third party sources where the
   * connection can be dropped in between and stream needs to be retried
   * @param streamType
   *            Type of stream being returned
   * @param supplier
   *            Lambda to re-create the stream on retry
   * @param spec
   *            Spec defining parameters of retry
   * @return wrapped stream which will retry to read the values from the position after the last successful position
   */
  static retryable(streamType: StreamType, supplier: λSupplier<Stream<E | null>>, spec?: ConditionalRetryableSpec | null): Stream<E | null>;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λNullPredicate {
  (): boolean
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λNullConsumer {
  (): void
}

interface λPredicate<T> {
  (t: T): boolean
}
