// TypeScript definitions for the C3 type StdLib

/**
 * Standard function library. Contains a list of all functions available in the expression engine invokable via this type
 * Functions below can be used at any layer of the C3 stack where the expected input is `string serialized Expr`.
 *
 * @remarks this represents a value passed to a method that expects an instance of StdLib
 */
declare interface IStdLib<E> {
}

/**
 * Standard function library. Contains a list of all functions available in the expression engine invokable via this type
 * Functions below can be used at any layer of the C3 stack where the expected input is `string serialized Expr`.
 *
 * @remarks this represents a made instance of StdLib
 */
declare class StdLib<E> {

  /**
   * Use this method if you want to use a C3 iterator.
   * @return a C3 iterator of the elements of the collection
   */
  iter(): Iterator<E> | null;

  /**
   * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
   */
  _iter_(): any;

  /**
   * Implements the js `.length` property or py `len()` support.
   * @return the number of elements in this instance
   */
  _length_(): number;

  /**
   * Number of elements in this instance.
   */
  get size(): number;

  /**
   * @return true if this instance is empty.
   */
  isEmpty(): boolean;

  /**
   * Converts this StdLib to an array.
   */
  collect(limit?: number | null): C3.Array<E | null>;

  /**
   * Converts this StdLib to an array of arrays. If element type is not a collection then returns an array of
   * singleton arrays.
   */
  collectArrays(limit?: number | null): C3.Array<C3.Array<T | null>>;

  /**
   * Element-wise absolute value of collection.
   */
  abs(): StdLib<E> | null;

  /**
   * Shared Implementation for agg
   */
  aggImplementation(spec: AggSpec | null, op: string): R | null;

  /**
   * Shared implementation for agg
   */
  aggImplementation(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  /**
   * Shared implementation for agg
   */
  aggImplementation(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  /**
   * Sum elements of a provided collection as double value.
   */
  sumDbl(): number;

  /**
   * Return the sum of differences of all numeric values in the array: Σ(v₁ - v₀). This is useful for trend detection.
   * If the array has 1 or fewer finite numeric values, the result is zero.
   *
   * @param absoluteValues if true, return the sum of the absolute value of the differences: Σ|v₁ - v₀|
   */
  sumDiff(absoluteValues?: boolean): number;

  /**
   * Analyze the finite numeric values to detect positive and negative changes using CUSUM (Cumulative Sum). This
   * method uses a single value for ω, providing a way to dampen changes. Non-numeric values are ignored.
   *
   * Sn+1 = max(0, Sn + xn - drift)
   *
   * Here _xn_ is the difference between two successive array values and drift is an argument (default 0).
   *
   * @param threshold CUSUM _threshold_ parameter (must be positive)
   * @param drift CUSUM _ω_ value, subtracted from each delta
   * @return indexes in array identified as changes
   * @see https://en.wikipedia.org/wiki/CUSUM
   */
  cusum(threshold?: number | null, drift?: number | null): C3.Array<number | null>;

  /**
   * Normalize timeseries using default normalization algorithm
   */
  normalize(): StdLib<E> | null;

  /**
   * @return element at index if this is indexed collection or null if index is out of bounds
   */
  at(index: number): E | null;

  /**
   * Extract single field value from each element of a collection of Obj. The cardinality of the result will be the
   * same as the cardinality of the collection, with nulls if the field does not exist for the collection type. If
   * vtOverride is passed in, the single value field will be extracted with the specified value type.
   *
   * @param fieldPath path to a field of the collection element (reference) type
   * @param vtOverride value type that overrides the value type of the specified field value
   *
   * @see FieldPath
   * @see ValueType
   */
  pluck(fieldPath: string | null, vtOverride?: ValueType | null): StdLib<T> | null;

  /**
   * @return first element in this collection.
   */
  first(): E | null;

  /**
   * @return first n elements from this collection.
   */
  first(n: number): StdLib<E> | null;

  /**
   * Finds first element in this collection satisfying provided condition.
   */
  first(test: λPredicate<E | null>): E | null;

  /**
   * Find first non null element in this collection. Note that element can still be empty.
   */
  firstNotNull(): E | null;

  /**
   * Maps element to a different value and return first single non null value. Note that value can still be empty.
   */
  firstNotNull(mapper: λFunction<E | null, T | null>): T | null;

  /**
   * Finds first non empty element.
   */
  firstNotEmpty(): E;

  /**
   * Maps element to a different value and return first single non empty value.
   */
  firstNotEmpty(mapper: λFunction<E | null, T | null>): T;

  /**
   * @return last element of this collection.
   */
  last(): E | null;

  /**
   * @return last n elements from this collection.
   */
  last(n: number): StdLib<E> | null;

  /**
   * Finds last element in this collection satisfying provided condition.
   */
  last(test: λPredicate<E | null>): E | null;

  /**
   * Find last non null element in this collection. Note that element can still be empty.
   */
  lastNotNull(): E | null;

  /**
   * Maps element to a different value and return last single non null value. Note that value can still be empty.
   */
  lastNotNull(mapper: λFunction<E | null, T | null>): T | null;

  /**
   * Finds last non empty element.
   */
  lastNotEmpty(): E;

  /**
   * Maps element to a different value and return last single non empty value.
   */
  lastNotEmpty(mapper: λFunction<E | null, T | null>): T;

  /**
   * Shared Implementation for min
   */
  minImplementation(spec?: AggSpec | null): E | null;

  /**
   * Shared Implementation for min
   */
  minImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * @return element of the collection with minimum value based on provided value supplier.
   */
  minBy(value: λFunction<E | null, any>): E | null;

  /**
   * Shared Implementation for max
   */
  maxImplementation(spec?: AggSpec | null): E | null;

  /**
   * Shared Implementation for max
   */
  maxImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * @return element of the collection with maximum value based on provided value supplier.
   */
  maxBy(value: λFunction<E | null, any>): E | null;

  /**
   * @return
   * 1. count of all elements of the primitive collection.
   * 2. new element with count for each field for the obj collection.
   * 3. new collection with count for each index for collection of collections.
   * Please note that bydefault missing values are ignored for count.
   *
   * e.g:
   * ```js
   * d = [{a:1,b:2,c:3,d:True,e:False}, {a:3,b:0,d:False,e:False}]
   * d.count() === {a:2,b:2,c:1,d:2,e:2}
   *
   * d = [1,2,3]
   * d.count() === 3
   * d = [1.0d, 2.0d, 3.0d, NaN]
   * d.count() === 3
   *
   * d = [[1,2,3], [1,1,4], [4,6]
   * d.count() == [3,3,2]
   *
   * d = [False, True, False]
   * d.count() === 3
   * ```
   * @see #agg
   */
  count(spec?: AggSpec | null): R | null;

  /**
   * Shared Implementation for sum
   */
  sumImplementation(spec?: AggSpec | null): R | null;

  /**
   * Shared Implementation for all
   */
  allImplementation(spec?: AggSpec | null): R | null;

  /**
   * @return
   * Product of all elements of the primitive collection.
   * Please note that for **Boolean** fields, values will be converted to **Integer** fields before multiplying.
   *
   * e.g:
   * ```js
   * d = [{a:1,b:2,c:3,d:True,e:False}, {a:3,b:0,c:2,d:False,e:False}]
   * d.prod() === {a:3,b:0,c:6,d:0,e:0}
   *
   * d = [1,2,3]
   * d.prod() === 6
   *
   * d = [[1,2,3], [1,1,4]]
   * d.prod() == [1,2,12]
   *
   * d = [False, True, False]
   * d.prod() === d.and()
   * d.prod() === 0
   * ```
   * @see #agg
   * @see #mul
   * @see #sum
   */
  prod(spec?: AggSpec | null): R | null;

  /**
   * Compute the mean of all the values in the array
   * E.g.
   * ```js
   *    [1,2,3, 1] => 1
   * ```
   */
  avg(): R | null;

  /**
   * Compute the mean of all the values in the array
   * E.g.
   * ```js
   *    [1,2,3, 1] => 1.
   * ```
   */
  avgDbl(): number;

  /**
   * Compute median of all the values in the array
   * E.g.
   * ```js
   *    [0,1,2,3] => 1.5
   * ```
   */
  median(): R | null;

  /**
   * Compute median of all the values in the array
   * E.g.
   * ```js
   *    [0,1,2,3] => 1.5
   * ```
   */
  medianDbl(): number;

  /**
   * Compute percentile of all the values in the array
   * E.g.
   * ```js
   *    percentile([0,1,2,3], 0.50) => 1.5
   * ```
   */
  percentile(percentile: number): R | null;

  /**
   * Compute percentile of all the values in the array
   * E.g.
   * ```js
   *    percentile([0,1,2,3], 0.50) => 1.5
   * ```
   */
  percentileDbl(percentile: number): number;

  /**
   * Compute standard deviation of all the values in the array
   * E.g.
   * ```js
   * d = [1,2,3,4]
   * d.stddev() === 1.2909944487358
   * d = []
   * d.stddev() === null
   * d = [1]
   * d.stddev() === NaN
   * ```
   */
  stddev(): R | null;

  /**
   * Compute standard deviation of all the values in the array
   * E.g.
   * ```js
   * d = [1,2,3,4]
   * d.stddevDbl() === 1.2909944487358
   * d = []
   * d.stddevDbl() === NaN
   * d = [1]
   * d.stddevDbl() === NaN
   * ```
   */
  stddevDbl(): number;

  /**
   * Compute **sample variance** of all the values in the array. e.g.
   * ```js
   * d = [1,2,3,4]
   * d.variance() === 1
   * d = []
   * d.variance() === null
   * d = [1]
   * d.variance() === NaN
   * ```
   * Please refer to {@link https://towardsdatascience.com/variance-sample-vs-population-3ddbd29e498a sample vs. population}
   * for more information about nuances of variance on sample vs population.
   */
  variance(): R | null;

  /**
   * Compute **sample variance** of all the values in the array. e.g.
   * ```js
   * d = [1,2,3,4]
   * d.variance() === 1
   * d = []
   * d.varianceDbl() === NaN
   * d = [1]
   * d.varianceDbl() === NaN
   * ```
   * Please refer to {@link https://towardsdatascience.com/variance-sample-vs-population-3ddbd29e498a sample vs. population}
   * for more information about nuances of variance on sample vs population.
   */
  varianceDbl(): number;

  /**
   * Aggregate values in the current collection using the given aggregation function
   * @param aggFunc
   *            Aggregation function to aggregate by
   * @param percentile
   *            If the aggregation function is {@link AggOp.PERCENTILE}
   * @return the aggregated value
   */
  aggDbl(aggFunc: string, percentile?: number | null): number;

  /**
   * Elementwise round of collections. By default, this will round to nearest whole number.
   * See {@link Timeseries.round} for other rounding options.
   */
  round(decimals?: number | null): StdLib<E> | null;

  /**
   * Elementwise invert of collections. This will invert all bits for each element in Collection.
   * Implemented invert operator and tested with expected behavior:
   * Int: flip bits
   * Double, Float: NaN
   * Boolean: flip
   * String: do nothing
   * Example:
   * ```
   * col = [{a: True, b: True, c: 1},
   *        {a: True, b: False, c: 2},
   *        {a: True, b: False, c: 3}]
   * col.invert()
   * [{a: False, b: False, c: -2}, {a: False, b: True, c: -3}, {a: False, b: True, c: -4}]
   * ```
   */
  invert(): StdLib<E> | null;

  /**
   * @return one and only element of the collection or null if collection is empty or is not a singleton i.e. has more
   *         then one elements.
   */
  only(failIfNotSingleton?: boolean): E | null;

  /**
   * @return `true` if this collection contains provided element.
   */
  contains(element: any): boolean;

  /**
   * @return `true` if this collection contains all elements of provided collection.
   */
  containsAll(...elements: E | null[]): boolean;

  /**
   * @return `true` if this collection contains all elements of provided collection.
   */
  containsAll(c: Collection<E> | null): boolean;

  /**
   * @return `true` if every element in this collection satisfies provided predicate.
   */
  containsAll(predicate: λPredicate<E | null>): boolean;

  /**
   * @return true if this collection contains any elements satisfying provided condition.
   */
  containsAny(predicate: λPredicate<E | null>): boolean;

  /**
   * Finds some element in this collection satisfying provided condition.
   */
  findAny(predicate: λPredicate<E | null>): E | null;

  /**
   * Finds some element in this collection with provided field values.
   */
  findAny(fields: C3.Map<string | null, any> | null): E | null;

  /**
   * Find any non null element in this collection. Note that element can still be empty.
   */
  anyNotNull(): E | null;

  /**
   * Maps element to a different value and return any single non null value. Note that value can still be empty.
   */
  anyNotNull(mapper: λFunction<E | null, T | null>): T | null;

  /**
   * Finds any non empty element.
   */
  anyNotEmpty(): E;

  /**
   * Maps element to a different value and return any single non empty value.
   */
  anyNotEmpty(mapper: λFunction<E | null, T | null>): T;

  /**
   * Invokes action for each element.
   */
  each(action: λConsumer<E | null>): void;

  /**
   * Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
   * interrupt iteration.
   */
  eachWhile(action: λPredicate<E | null>): boolean;

  /**
   * @return new collection for all elements of this collection transformed by applying provided lambda function.
   */
  mapToSame(mapper: λFunction<E | null, E | null>): StdLib<E> | null;

  /**
   * @return new collection of any with all elements of this collection transformed by applying provided lambda function.
   *
   * @see #pluck
   */
  map(mapper: λFunction<E | null, T | null>): StdLib<T> | null;

  /**
   * @return new collection of string with all elements of this collection transformed by applying provided lambda function.
   */
  mapToStr(mapper: λFunction<E | null, string | null>): StdLib<string | null> | null;

  /**
   * @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
   * It is the responsibility of the mapper to convert values to the elementType if needed. The method mapTo will not do any
   * such conversion.
   */
  mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): StdLib<T> | null;

  /**
   * @return a collection of same type consisting of the results of replacing each element of this collection with
   *         mapped array elements.
   */
  flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): StdLib<E> | null;

  /**
   * @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
   */
  flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): StdLib<T> | null;

  /**
   * @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
   */
  flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): StdLib<T> | null;

  /**
   * @return new collection of this type produces by recursively applying `toInter` + `fromInter` lambdas for every
   *         unique element of this collection and elements returned by `fromInter`.
   */
  flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): StdLib<E> | null;

  /**
   * @return single value that is a result of aggregation of all elements by provided lambda.
   */
  fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

  /**
   * @return single value that is a result of aggregation of all elements by provided lambda and initial value.
   */
  fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

  /**
   * @return new collection with empty elements removed.
   */
  compact(): StdLib<E> | null;

  /**
   * @return new collection with duplicate elements removed.
   */
  unique(): StdLib<E> | null;

  /**
   * @return new collection with duplicate elements removed based on provided key supplier.
   */
  uniqueBy(key?: λFunction<E | null, any> | null): StdLib<E> | null;

  /**
   * Filters elements from this collection based on evaluation result of the provided filter predicate.
   */
  filter(predicate: λPredicate<E | null>): StdLib<E> | null;

  /**
   * Filters elements from this collection based on evaluation result of the provided filter expression.
   */
  filter(filter: string | null): StdLib<E> | null;

  /**
   * All the values that matches provided name-value pairs
   */
  filter(fields: C3.Map<string | null, any> | null): StdLib<E> | null;

  /**
   * Fill null and NaN values using the specified method.
   * @param method
   *           Method to use for filling holes.
   *           `PREVIOUS`: propagate last valid observation forward to next valid.
   *           `NEXT`: use next valid observation to fill gap.
   * @param limit
   *           The maximum number of consecutive null values to forward/backward fill along each field of `E`.
   *           In other words, if there is a gap with more than this number of consecutive null, it will only be partially
   *           filled.
   * @return a new collection with filled values
   *
   * @see fillMissing
   */
  fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): StdLib<E> | null;

  /**
   * Fill null and NaN values using the `value` parameter.
   * @param value
   *           This field will be used to fill the holes. It can be
   *           (1) a primitive (e.g. `0`).
   *           (2) a map (e.g. {'A': 0, 'B': 1, 'C': 2, 'D': 3}) where each key in the map corresponds to a field of
   *           the element Type `E`, in this case the value is an element, and each field of the element will be used to replace
   *           the corresponding field that is null or NaN in each element of the collection.
   * @param limit
   *           The maximum number of entries along each field of `E` where null
   *           will be filled. Must be greater than 0 if not null.
   * @return a new collection with filled values
   *
   * @see fillMissingBy
   */
  fillMissing(value: any, spec?: FillMissingSpec | null): StdLib<E> | null;

  /**
   * Returns string Array containing all field names of this Collection. If Collection element type is a ReferenceType
   * then the field names of the referenced TypeMeta are returned in order of {@link FieldType#ordinal}. If there are
   * nested Collections then fieldNames is recursively called and results are aggregated in order of field position.
   * If element type is not available and {@link #dimensionality} is > 1 then we return string Array of the format "cP"
   * where "P" is the field position of the element. If element type is not available and dimensionality == 1 then we
   * return ["c0"].
   *
   * Examples assuming element type is set (e.g. is element type ObjRef):
   * ```
   * [[{a: 0, b: 1}, {a: 0, b: 1, c: 3}], [{d: 4}] ].fieldNames() = ["a", "b", "c", "d"]
   * [{a: 1, b: null}, {a: null, b: 1}].fieldNames() = ["a", "b"]
   * [{a: 1, b: null}, {a: 1, b: null}].fieldNames(true) = ["a"]
   * [[1, 2, 3, 4], [1, 2]].fieldNames() = ["c0"]
   * ```
   * Examples assuming element type is not set (e.g. element type is any):
   * ```
   * [[1, 2, 3, 4], [1, 2]].fieldNames() = ["c0", "c1", "c3", "c4"]
   * [{a: 1, b: null}, {a: null, b: 1}].fieldNames() = ["c0", "c1"]
   * [1, 2, 3, 4].fieldNames() = ["c0"]
   * ```
   *
   * NOTE: For {@link DataTable}, fieldNames will not return names that are part of {@link DataTable.index}.
   */
  fieldNames(): C3.Array<string | null>;

  /**
   * @return value type of a named field if this Collection contains C3 Type instances or Tuples
   *         or `null`
   */
  fieldValueType(field: string): ValueType | null;

  /**
   * Rejects elements from this collection based on evaluation result of the provided filter expression. This is the
   * opposite of {@link #filter}.
   *
   * @see #filter
   */
  reject(predicate: λPredicate<E | null>): StdLib<E> | null;

  /**
   * Maps this collection to another by applying the include spec. If include spec is not provided then does nothing.
   */
  include(include: string | null): StdLib<E> | null;

  /**
   * Creates a new collection containing fields at provided "positions".
   * ```
   * col = [{a: 5, b: 1, c: True},
   *        {a: 4, b: 1, c: False},
   *        {a: 3, b: 2, c: False},
   * col.include([0,2]) -> [{a: 5, c: True}, {a: 5, c: True}, {a: 5, c: True}]
   * ```
   */
  include(positions: Collection<number | null>): StdLib<E> | null;

  /**
   * Maps this collection to another by removing fields from every element that are part of provided exclude spec.
   * If include spec is not provided then does nothing.
   */
  exclude(exclude: string | null): StdLib<E> | null;

  /**
   * @return new collection with elements satisfying provided predicate replaced by provided new element.
   */
  replaceByPredicate(e: E | null, predicate: λPredicate<E | null>): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on natural sorting order.
   *
   * If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
   * stream, while in descending order, null elements were at the beginning of the returned stream.
   */
  sorted(descending?: boolean): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on provided comparator.
   */
  sorted(comparator: λBiFunction<E | null, E | null, number | null>): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on provided comparator.
   */
  sorted(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on the provided order spec.  If no order spec
   * is provided, the calling this is a no-op.
   *
   * CAUTION: ordering very large streams may fail with Out Of Memory error. It is strongly recommended to always
   * use this with a reasonable limit.
   *
   * Given the possible memory ramifications of this and the semantic expectations, the order function should always
   * be called after a filter operation and before any offset or limit call.
   *
   * @param order
   *           Order spec.  For ordering objs, this must be valid syntax for a {@link FetchSpec#order}.  If this is
   *           a stream of primitives, this should be set to the value "val()".
   * @return a new stream with the order applied.
   */
  sorted(order: string | null): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
   * provided lambda.
   */
  sortedBy(key: λFunction<E | null, any>): StdLib<E> | null;

  /**
   * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
   * provided lambda.
   */
  sortedBy(descending: boolean, key: λFunction<E | null, any>): StdLib<E> | null;

  /**
   * Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
   * order to maintain collections sorted order.
   */
  sortedIndex(element: E, value: λFunction<E | null, any>): number;

  /**
   * Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
   * order to maintain collections sorted order.
   */
  sortedIndex(element: E, fieldName: string): number;

  /**
   * Maps this StdLib to a new StdLib of this StdLib type of the original element type.
   * E.g. Stream<E> -> Stream<Stream<E>>
   *        Data    -> Data
   * The size of each batch is determined by the {@link batchSize} parameter.
   */
  batch(batchSize?: number | null): Stream<StdLib<E> | null>;

  /**
   * Partitions the stream into two arrays based on the truth value of the provided lambda function
   */
  partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

  /**
   * Counts values returned by the output of the provided string key function
   */
  countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

  /**
   * Counts values returned by the output of the provided key function
   */
  countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

  /**
   * Checks if predicate returns true for all elements of collection
   */
  every(predicate: λPredicate<E | null>): boolean;

  /**
   * @return new collection of cartesian product of elements of input collection. I.e.
   * ```
   * [ [ A, B ], [ 1, 2, 3 ] ] => [ [ A, 1 ], [ A, 2 ], [ A, 3 ], [ B, 1 ], [ B, 2 ], [ B, 3 ] ]
   * ```
   */
  elementCartesianProduct(): C3.Array<C3.Array<T | null>>;

  /**
   * Return a new collection with all nested arrays flattened. The nesting can be to any depth unless `shallow`
   * parameter is `true` in which case this collection will only be flattened a single level.
   *
   * ```js
   * //Assume we have a collection of values with value type: [[int32]] - results will be similar flattening for any value type
   * col = [[1,2]]
   *
   * // Flatten
   * f = col.flatten()
   * [1,2]
   *
   * // recursive by default
   * col = [[[1,2],[3,4]], [[5,6],[7,8]]]
   * f = col.flatten()
   * [1,2,3,4,5,6,7,8]
   *
   * // shallow
   * f = col.flatten(true)
   * [[1,2],[3,4],[5,6],[7,8]]
   *
   * // Timeseries - Assume type has a field "d" for datetime
   * col = [{ "a": {"_data":[0.9,1.1,2.1], "tsInfo": { start:"2010-01-01", end:"2010-01-04", interval:"DAY"} },
   *       "b": {"_data":[1,2,3], "tsInfo": { start:"2010-01-03", end:"2010-01-06", interval:"DAY"} }]
   * f = col.flatten()
   *     start            a      b
   * "2010-01-01"        0.9     0
   * "2010-01-02"        1.1     0
   * "2010-01-03"        2.1     1
   * "2010-01-04"        0       2
   * "2010-01-05"        0       3
   * ```
   */
  flatten(shallow?: boolean): StdLib<T> | null;

  /**
   * Return a new collection with all nested Collections flattened. Uses an {@link Include} spec.
   * and a depth field to control how far in depth to flatten, and what fields to include in the output.
   * Collection of Reference objects will only be traversed if they are included in the Spec.
   * A depth of -1 will result in a full traversal of the data.
   *
   * For a collection of Primitives Type, depth will explode elements starting at level 0.
   *
   * ```python
   * col = [[1,2]]
   * col.flatten(0)
   * [1,2]
   *
   * col = [[[1,2],[3,4]], [[5,6],[7,8]]]
   * f = col.flatten(0)
   * [[1,2],[3,4],[5,6],[7,8]]
   *
   * f = col.flatten(-1)
   * [1,2,3,4,5,6,7,8]
   * ```
   *
   * When traversing a collection of Objects, there will be two steps, first exploding the collection into
   * several rows, and then flattening all the fields (depending on the `Include` argument) by creating new columns
   * at the top most level. Flatten will traverse the object's fields recursively up to `depth` value.
   *
   * ```python
   * col = [
   *          {
   *             'state': {
   *                        'name': 'California',
   *                        'cities': [
   *                                    {'name': 'Redwood City'},
   *                                    {'name': 'San Francisco'}
   *                                  ]
   *                        'zipcodes': [ {'code': 94061} , {'code':94016} ]
   *                      }
   *          },
   *          {
   *             'state': {
   *                        'name': 'Oregon',
   *                        'cities': [
   *                                    {'name': 'Portland'},
   *                                    {'name': 'Salem'}
   *                                  ]
   *                         'zipcodes': [{'code': 97035}]
   *
   *                      }
   *          }
   *       ]
   * col.flatten(0, state.cities)
   * state
   * {'state': {'name': 'California', cities:[{'name': 'Redwood City'},{'name': 'San Francisco'}}
   * {'state': {'name': 'Oregon', cities:[{'name': 'Portland'},{'name': 'Salem'}}
   *
   * col.flatten(1, state.cities)
   * state.name  state.cities
   * California  [{'name': 'Redwood City'}, {'name': 'San Francisco'}]
   * Oregon      [{'name': 'Portland'}, {'name': 'Salem'}]
   *
   * col.flatten(2, state.cities)
   * state.name  state.cities
   * California  {'name': 'Redwood City'}
   * California  {'name': 'San Francisco'}
   * Oregon      {'name': 'Portland'}
   * Oregon      {'name': 'Salem'}
   *
   * col.flatten(3, state.cities)
   * state.name  state.cities.name
   * California  Redwood City
   * California  San Francisco
   * Oregon      Portland
   * Oregon      Salem
   *
   * col.flatten(3, "state.cities.name")
   * state.cities.name
   * Redwood City
   * San Francisco
   * Portland
   * Salem
   *
   * Cartesian product will be applied when flattening involved a collection of unerlying data points
   * col.flatten(3, "state")
   * state.cities.name  state.zipcodes.code
   * Redwood City       94061
   * Redwood City       94016
   * San Francisco      94061
   * San Francisco      94016
   * Portland           97035
   * Salem              97035
   *
   * Timeseries -
   * col = [{ "a": {"_data":[0.9,1.1,2.1], "tsInfo": { start:"2010-01-01", end:"2010-01-04", interval:"DAY"} },
   *       "b": {"_data":[1,2,3], "tsInfo": { start:"2010-01-03", end:"2010-01-06", interval:"DAY"} }]
   * f = col.flatten()
   *     start            a      b
   * "2010-01-01"        0.9     0
   * "2010-01-02"        1.1     0
   * "2010-01-03"        2.1     1
   * "2010-01-04"        0       2
   * "2010-01-05"        0       3
   * ```
   *
   * Invalid path in `include` will be omitted from the final output, and if all include path are
   * invalid an empty DataTable with the original field names will be returned.
   */
  flatten(depth: number, include?: string | null): StdLib<T> | null;

  /**
   * Produce a random sample from this collection as a new collection.
   *
   * @param spec
   *           Arguments to control sampling behavior, such as how many samples to return, whether to sample with
   *           replacement, etc.
   */
  sample(spec?: SampleSpec | null): StdLib<E> | null;

  /**
   * Creates a new collection from elements starting at #fromPos to #toPos. Positive position values are relative to
   * the first position in the collection. Negative values are relative to last position. If both #fromPos and
   * #toPos is 0 returns empty collection. If #fromPos is 0, #toPos is empty, and #stride is empty then same collection
   * is returned. #toPos has a default value of size of Collection. If #stride is empty then it is set to 1.
   *
   * Note: Negative arguments are not supported for {@link Stream} because computing the size will consume the Stream.
   */
  slice(fromPos: number, toPos?: number | null, stride?: number | null): StdLib<E> | null;

  /**
   * Creates a new collection containing elements at provided positions.
   */
  slice(positions: Collection<number | null> | null): StdLib<E> | null;

  /**
   * Creates a new collection containing elements with provided primary keys. Note that it is valid to provide partial
   * key in case of composite primary keys.
   */
  sliceByKey(keys: Collection<any> | null): StdLib<E> | null;

  /**
   * Creates a new collection containing elements that match secondary keys. Note that it is valid to provide partial
   * secondary key in case of multi-part secondary keys.
   */
  sliceByKey(secondaryIndex: string, keys: Collection<any> | null): StdLib<E> | null;

  /**
   * Create a summary from elements in this Collection.
   * @param spec
   *           do configure the DigestBuilder operation
   *
   * Based on the input Collection, an appropriate Digest will be returned with the appropriate summary
   * for each **field** of the Collection. There are other useful APIs on the Digest like {@link Digest#hist},
   * {@link Digest#hyperLogLog} and {@link Digest#countMinSketch} which can be leveraged to access additional
   * metrics like {@link Histogram#percentiles}, {@link Histogram#quantiles}, {@link HyperLogLog#estimate cardinality},
   * {@link CountMinSketch#topK}, {@link CountMinSketch#frequency}, etc. Foreign key fields will not be digested by
   * default unless otherwise specified by {@link DigestSpec#valueSpec}.
   *
   * Note that the passed spec is only a starting point. Each implementation changes it in a slightly different way, so
   * the value of `Digest.spec` is the _original_ value passed, or a default spec if null.
   *
   * @see Digest
   * @see Histogram
   * @see HyperLogLog
   * @see CountMinSketch
   * @see DigestSpec
   */
  summarize(spec?: DigestSpec | null): Digest<any, Digest | null, DigestBuilder | null>;

  /**
   * Downsample points to a coarser frequency a.k.a aggregate values at a coarser frequency
   * e.g. a 10 element collection needs to be downsampled to a 5 element collection by taking a "SUM" aggregation
   * ```js
   *    [1,2,3,4,5,6,7,8,9,10] => [3,7,11,15,19]
   * ```
   */
  downsample(spec: DownsampleSpec): StdLib<E> | null;

  /**
   * Generate a linear regression of the finite numeric values using Ordinary Least Squares. If there are too few
   * values, the return value is null; otherwise it is an object with the intercept (α) and slope (β) as well as other
   * meta-information. Note that the _x_ observations are the indexes into the array. Non-numeric values are ignored.
   *
   * @see https://en.wikipedia.org/wiki/Ordinary_least_squares
   */
  leastSquares(): LeastSquaresResult;

  /**
   * Rolling difference between the current and a prior element. Computes the difference between the current and the
   * immediately previous element by default.
   * ```
   * col = [{a: 1, b: 2, c: 3}
   *        {a: 4, b: 3, c: 6}
   *        {a: 8, b: 5, c: 8}
   *        {a: 1, b: 2, c: 3}]
   * col.rollingDiff() == [{a: null, b: null, c: null}
   *                       {a: 3, b: 1, c: 3}
   *                       {a: 4, b: 2, c: 2}
   *                       {a: -7, b: -3, c: -5}]
   *
   * col.rollingDiff(stride=-1) == [{a: -3, b: -1, c: -3}
   *                                {a: -4, b: -2, c: -2}
   *                                {a: 7, b: 3, c: 5}
   *                                {a: null, b: null, c: null}]
   * ```
   *
   * @param stride
   *           The relative position from the current element. Positive stride values indicate previous positions, while
   *           negative values indicate subsequent positions.
   * @return the rolling difference
   */
  rollingDiff(stride?: number | null): StdLib<E> | null;

  /**
   * Percentage change between the current and a prior element.
   * Computes the percentage change from the immediately previous element by default.
   */
  pctChange(stride?: number | null): StdLib<E> | null;

  /**
   * Performs elementwise unary operation.
   */
  unaryOp(op: string): StdLib<E> | null;

  /**
   * Recursively calculates the shape of this collection. For example,
   * ```
   * [[1,2,3]] = [1,3]
   * [[1,[5,6],3]] = [1,3,2]
   * [[1,[5,6],[7,8,9]] = [1,3,3]
   * [[1,[5,6],[7,8,9], []] = [2,3,3]
   * [{hello: 1, world: 2}, {hello: 3, world: 4}] = [2,2]
   * ```
   *
   * If the element type of the inputted collection is any, Obj, or a collection type, shape will iterate through
   * all elements in the collection as metadata is not available. It is suggested to define the elementType of the
   * inputted collection to a specific reference type for best performance.
   *
   * @see Collection#elementType
   */
  shape(): C3.Array<number | null>;

  /**
   * Convert this Collection to an Obj. Field names are defined using c<position> convention. Maps are converted based
   * on its keys. Field ValueType is determined by {@link ValueType#guessType}.
   * ex. ["a", "b"] -> {c0: "a", c1: "b"} / type { c0: string \n c1: string }
   *     [0, 1, 2, 3] -> {c0: 0, c1: 1, c2: 2, c3: 3} / type { c0: int \n c1: int \n c2: int \n c3: int }
   *     [] -> {}
   *     {f0: 0, f1: 1} -> {f0: 0, f1: 1} / type {f0: int \n f1: int }
   *
   * @see ValueType#guessType
   */
  toObj(): Obj | null;

  /**
   * Fetches multiple obj instances based on a specification. This api retrieves the objects from the in memory collection
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           will be applied.
   * @return Requested objs
   */
  fetch(spec?: FetchSpec | null): StdLib<E> | null;

  /**
   * Returns the first n elements with the largest value based on value provider, in descending order.
   * Examples
   * ___
   * ```
   * col = [{a: 5, b: 1},
   *        {a: 4, b: 1},
   *        {a: 3, b: 2},
   *        {a: 3, b: 1}]
   * col.largest(3, (a,b) -> a.a - b.a)               -> [{a: 5, b: 1}, {a:4, b: 1}, {a: 3, b: 2}]
   * col.largest(3, (a,b) -> a.a - b.a, KeepOp.FIRST) -> [{a: 5, b: 1}, {a:4, b: 1}, {a: 3, b: 2}]
   * col.largest(3, (a,b) -> a.a - b.a, KeepOp.LAST)  -> [{a: 5, b: 1}, {a:4, b: 1}, {a: 3, b: 1}]
   * col.largest(3, (a,b) -> a.a - b.a, KeepOp.ALL)   -> [{a: 5, b: 1}, {a:4, b: 1}, {a:3, b: 2}, {a: 3, b: 1}]
   *
   * col = [{a: 5, b: 2},
   *        {a: 5, b: 1},
   *        {a: 3, b: 2},
   *        {a: 3, b: 1}]
   * col.largest(2, (a,b) -> a.a - b.a, KeepOp.ALL) -> [{a: 5, b: 2}, {a:5, b: 1}]
   * ```
   * @param comparator
   *        defaults to {@link Val#compareValues} if not provided
   * @param keep
   *        defaults to {@link KeepOp#FIRST} if not specified
   */
  largest(n: number, comparator?: λBiFunction<E | null, E | null, number | null> | null, keep?: string | null): C3.Array<E | null>;

  /**
   * Compute histogram of all values in this Collection.
   */
  histogram(spec?: HistogramSpec | null): Histogram<any, any, HistogramBuilder | null>;

  /**
   * Negates (convert to negative) all elements of the Collections.
   * a) If element is a collection as well, then negate that Collection. e.g
   * ```js
   * d = [[1,2,3], [-1,2,3]]
   * d.neg() == [[-1,-2,-3], [-1,-2,-3]]
   * ```
   * b) If element is an Obj, then all fieldVales of the Obj are negated. e.g
   * ```js
   * d = [{a:1,b:2,c:3}, {a:-1,b:2,c:3}]
   * d.neg() == [{a:-1,b:-2,c:-3}, {a:-1,b:-2,c:-3}]
   *
   * d = [{a:False, b: "myVal", c: 2.349, d: 8}, {a:True, b: "myVal2", c: -12.3, d: 10}]
   * d.neg() == [{a:False, b: "myVal", c: -2.349, d: -8}, {a:True, b: "myVal2", c: -12.3, d: -10}]
   * ```
   * c) If element is Primitive, then only numeric values are negated and all other remain unchanged. e.g
   * ```js
   * d = [1.34,2.0,-3.0]
   * d.neg() == [-1.34,-2.0,-3.0]
   *
   * d = [False, False, True]
   * d.neg() = [False, False, True]
   *
   * d = ["myVal", "myVal2"]
   * d.neg() = ["myVal", "myVal2"]
   *
   * d = [{a:False, b: "myVal", c: 2.349, d: 8}, {a:True, b: "myVal2", c: -12.3, d: 10}]
   * d.neg() == [{a:False, b: "myVal", c: -2.349, d: -8}, {a:True, b: "myVal2", c: -12.3, d: -10}]
   * ```
   *
   * @see #invert
   * @see #abs
   */
  neg(): StdLib<E> | null;

  /**
   * An estimate for the most frequently occurring elements backed by {@link CountMinSketch}
   */
  approxMostFrequent(spec?: CountMinSketchSpec | null): C3.Map<string | null, number | null>;

  /**
   * Convenience wrapper to converting numeric columns on the given Collection To Timeseries. All numeric fields will have the
   * same aggregation function & same datetime field on which Timeseries is constructed
   *
   * Note: if element type is {@link Partitionable}, this will create a Timeseries per partition key -> see
   * @see Partitionable
   * &
   * @see Collection#groupBy
   * unless DataTimeseriesSpec.doNotPartition is set
   *
   * {@link DataTimeseriesSpec.doNotPartition},
   * {@link Partitionable}
   * {@link Collection#groupBy}
   *
   * @param spec
   *        Spec indicating how to create Timeseries for the numeric columns. @see DataTimeseriesSpec#forFields
   * @return structure where only numeric columns are converted to Timeseries fields
   */
  timeseries(spec?: DataTimeseriesSpec | null): StdLib<R> | null;

  /**
   * Converts the `numeric` columns on the given Collection into Timeseries columns. Currently non-numeric columns will be dropped from the
   * result
   *
   * Note: if element type is {@link Partitionable}, this will create a Timeseries per partition key -> see
   * @see Partitionable
   * &
   * @see Collection#groupBy
   * unless TimeseriesSpec.doNotPartition is set
   *
   * E.g.
   * ```js
   * col = [{ "a" : 0.9, "b" : 1, "c": "foo", "d": "2010-01-01", "e": true  },
   *        { "a" : 1.1, "b" : 2, "c": "bar", "d": "2010-01-02", "e": false  },
   *        { "a" : 2.1, "b" : 3, "c": "foo", "d": "2010-01-03", "e": false  }]
   *
   * // toTimeseries using a period of 1 month on field "d" as the date index of the resulting Timeseries
   * r = col.toTimeseries({"a" : {"aggFunc": "SUM" } }, { startExpr:"d", interval:"DAY" })
   * => [{ "a": {"_data":[0.9,1.1,2.1], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} },
   *       "b": {"_data":[1,2,3], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }]
   * ```
   *
   * @param tsFieldSpec
   *            Timeseries field level specification indicating how each Timeseries needs to be aggregated / created
   *            E.g. {"a": { aggFunc: "SUM" }}
   * @param spec
   *            Common time info & date fields indicating the bounds of the Timeseries
   * @return structure where only numeric columns are converted to Timeseries fields
   */
  timeseries(tsFieldSpec: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpec | null): StdLib<R> | null;

  /**
   * @return value type of elements in this collection
   */
  elementType(): ValueType;

  /**
   * @return stream of elements
   */
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
