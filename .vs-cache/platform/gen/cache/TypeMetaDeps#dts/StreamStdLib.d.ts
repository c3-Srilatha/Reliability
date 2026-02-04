// TypeScript definitions for the C3 type StreamStdLib

/**
 * @remarks this represents a value passed to a method that expects an instance of StreamStdLib
 */
declare interface IStreamStdLib<E> {
}

/**
 * @remarks this represents a made instance of StreamStdLib
 */
declare class StreamStdLib<E> {

  iter(): Iterator<E> | null;

  _iter_(): any;

  _length_(): number;

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

  maxImplementation(spec?: AggSpec | null): E | null;

  maxImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  maxBy(value: λFunction<E | null, any>): E | null;

  count(spec?: AggSpec | null): R | null;

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

  containsAny(predicate: λPredicate<E | null>): boolean;

  findAny(predicate: λPredicate<E | null>): E | null;

  findAny(fields: C3.Map<string | null, any> | null): E | null;

  anyNotNull(): E | null;

  anyNotNull(mapper: λFunction<E | null, T | null>): T | null;

  anyNotEmpty(): E;

  anyNotEmpty(mapper: λFunction<E | null, T | null>): T;

  each(action: λConsumer<E | null>): void;

  eachWhile(action: λPredicate<E | null>): boolean;

  mapToSame(mapper: λFunction<E | null, E | null>): Stream<E> | null;

  map(mapper: λFunction<E | null, T | null>): Stream<T> | null;

  mapToStr(mapper: λFunction<E | null, string | null>): Stream<string | null> | null;

  mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): Stream<T> | null;

  flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): Stream<E> | null;

  flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): Stream<T> | null;

  flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): Stream<T> | null;

  flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): Stream<E> | null;

  fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

  fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

  compact(): Stream<E> | null;

  unique(): Stream<E> | null;

  uniqueBy(key?: λFunction<E | null, any> | null): Stream<E> | null;

  filter(predicate: λPredicate<E | null>): Stream<E> | null;

  filter(filter: string | null): Stream<E> | null;

  filter(fields: C3.Map<string | null, any> | null): Stream<E> | null;

  fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): Stream<E> | null;

  fillMissing(value: any, spec?: FillMissingSpec | null): Stream<E> | null;

  fieldNames(): C3.Array<string | null>;

  fieldValueType(field: string): ValueType | null;

  reject(predicate: λPredicate<E | null>): Stream<E> | null;

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

  sortedIndex(element: E, value: λFunction<E | null, any>): number;

  sortedIndex(element: E, fieldName: string): number;

  batch(batchSize?: number | null): Stream<Stream<E> | null>;

  partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

  countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

  countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

  every(predicate: λPredicate<E | null>): boolean;

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

interface λPredicate<T> {
  (t: T): boolean
}
