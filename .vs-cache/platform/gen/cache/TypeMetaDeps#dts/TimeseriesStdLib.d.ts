// TypeScript definitions for the C3 type TimeseriesStdLib

/**
 * @remarks this represents a value passed to a method that expects an instance of TimeseriesStdLib
 */
declare interface ITimeseriesStdLib<E> {
}

/**
 * @remarks this represents a made instance of TimeseriesStdLib
 */
declare class TimeseriesStdLib<E> {

  iter(): Iterator<E> | null;

  _iter_(): any;

  _length_(): number;

  get size(): number;

  isEmpty(): boolean;

  collect(limit?: number | null): C3.Array<E | null>;

  collectArrays(limit?: number | null): C3.Array<C3.Array<T | null>>;

  abs(): Timeseries<E> | null;

  aggImplementation(spec: AggSpec | null, op: string): R | null;

  aggImplementation(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  aggImplementation(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  sumDbl(): number;

  sumDiff(absoluteValues?: boolean): number;

  cusum(threshold?: number | null, drift?: number | null): C3.Array<number | null>;

  normalize(): Timeseries<E> | null;

  at(index: number): E | null;

  pluck(fieldPath: string | null, vtOverride?: ValueType | null): Timeseries<T> | null;

  first(): E | null;

  first(n: number): Timeseries<E> | null;

  first(test: λPredicate<E | null>): E | null;

  firstNotNull(): E | null;

  firstNotNull(mapper: λFunction<E | null, T | null>): T | null;

  firstNotEmpty(): E;

  firstNotEmpty(mapper: λFunction<E | null, T | null>): T;

  last(): E | null;

  last(n: number): Timeseries<E> | null;

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

  round(decimals?: number | null): Timeseries<E> | null;

  invert(): Timeseries<E> | null;

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

  mapToSame(mapper: λFunction<E | null, E | null>): Timeseries<E> | null;

  map(mapper: λFunction<E | null, T | null>): Timeseries<T> | null;

  mapToStr(mapper: λFunction<E | null, string | null>): Timeseries<string | null> | null;

  mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): Timeseries<T> | null;

  flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): Timeseries<E> | null;

  flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): Timeseries<T> | null;

  flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): Timeseries<T> | null;

  flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): Timeseries<E> | null;

  fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

  fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

  compact(): Timeseries<E> | null;

  unique(): Timeseries<E> | null;

  uniqueBy(key?: λFunction<E | null, any> | null): Timeseries<E> | null;

  filter(predicate: λPredicate<E | null>): Timeseries<E> | null;

  filter(filter: string | null): Timeseries<E> | null;

  filter(fields: C3.Map<string | null, any> | null): Timeseries<E> | null;

  fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): Timeseries<E> | null;

  fillMissing(value: any, spec?: FillMissingSpec | null): Timeseries<E> | null;

  fieldNames(): C3.Array<string | null>;

  fieldValueType(field: string): ValueType | null;

  reject(predicate: λPredicate<E | null>): Timeseries<E> | null;

  include(include: string | null): Timeseries<E> | null;

  include(positions: Collection<number | null>): Timeseries<E> | null;

  exclude(exclude: string | null): Timeseries<E> | null;

  replaceByPredicate(e: E | null, predicate: λPredicate<E | null>): Timeseries<E> | null;

  sorted(descending?: boolean): Timeseries<E> | null;

  sorted(comparator: λBiFunction<E | null, E | null, number | null>): Timeseries<E> | null;

  sorted(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): Timeseries<E> | null;

  sorted(order: string | null): Timeseries<E> | null;

  sortedBy(key: λFunction<E | null, any>): Timeseries<E> | null;

  sortedBy(descending: boolean, key: λFunction<E | null, any>): Timeseries<E> | null;

  sortedIndex(element: E, value: λFunction<E | null, any>): number;

  sortedIndex(element: E, fieldName: string): number;

  batch(batchSize?: number | null): Stream<Timeseries<E> | null>;

  partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

  countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

  countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

  every(predicate: λPredicate<E | null>): boolean;

  elementCartesianProduct(): C3.Array<C3.Array<T | null>>;

  flatten(shallow?: boolean): Timeseries<T> | null;

  flatten(depth: number, include?: string | null): Timeseries<T> | null;

  sample(spec?: SampleSpec | null): Timeseries<E> | null;

  slice(fromPos: number, toPos?: number | null, stride?: number | null): Timeseries<E> | null;

  slice(positions: Collection<number | null> | null): Timeseries<E> | null;

  sliceByKey(keys: Collection<any> | null): Timeseries<E> | null;

  sliceByKey(secondaryIndex: string, keys: Collection<any> | null): Timeseries<E> | null;

  summarize(spec?: DigestSpec | null): Digest<any, Digest | null, DigestBuilder | null>;

  downsample(spec: DownsampleSpec): Timeseries<E> | null;

  leastSquares(): LeastSquaresResult;

  rollingDiff(stride?: number | null): Timeseries<E> | null;

  pctChange(stride?: number | null): Timeseries<E> | null;

  unaryOp(op: string): Timeseries<E> | null;

  shape(): C3.Array<number | null>;

  toObj(): Obj | null;

  fetch(spec?: FetchSpec | null): Timeseries<E> | null;

  largest(n: number, comparator?: λBiFunction<E | null, E | null, number | null> | null, keep?: string | null): C3.Array<E | null>;

  histogram(spec?: HistogramSpec | null): Histogram<any, any, HistogramBuilder | null>;

  neg(): Timeseries<E> | null;

  approxMostFrequent(spec?: CountMinSketchSpec | null): C3.Map<string | null, number | null>;

  timeseries(spec?: DataTimeseriesSpec | null): Timeseries<R> | null;

  timeseries(tsFieldSpec: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpec | null): Timeseries<R> | null;

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
