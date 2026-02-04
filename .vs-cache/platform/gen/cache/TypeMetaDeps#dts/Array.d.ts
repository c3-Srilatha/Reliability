// TypeScript definitions for the C3 type Array

/**
 * An array is a 1-dimensional, ordered set of values that allows duplicates. All values are kept in memory.
 *
 * Methods built in to the "array" type and available on instances of array objects. In addition to the native support
 * for arrays in each language, these higher-level methods extract info and perform statistical analysis to provide
 * easy ways to use values without writing extra code.
 *
 * For example, if you have an array of numeric values, and want to detect a trend, you might start with something
 * like this:
 * ```js
 * var data = C3.Array.ofInt(3, 4, 4, 2, 3, 4, 5, 3, 6, 4, 2, 4);
 * (data.leastSquares().slope * 100).toFixed() + '%';
 * ```
 * That produces "5%", which is what we expect. (The slope of the regression line is slightly positive.)
 *
 * But what if you have noisy data? Here's a set with a zero and an high outlier value that produces an unreasonable
 * value using linear regression:
 * ```js
 * var data = C3.Array.ofInt(3, 4, 4, 0, 2, 3, 4, 5, 3, 6, 4, 2, 1000, 4);
 * (data.leastSquares().slope * 100).toFixed() + '%';
 * ```
 * That produces "2418%", even though almost all of that is due to the high outlier.
 *
 * Let's reject the zero value and high outlier with a filter with the low end of 1 and a high end of 2 standard
 * deviations above the mean:
 * ```js
 * (data.withoutOutliers({ range: { min: 1 }, stddev: 2 })
 *      .leastSquares().slope * 100
 * ).toFixed() + '%';
 * ```
 * That produces "5%", which is what we expect, but now handling noisy data.
 *
 * Another way to detect a trend is using {@link #sumDiff}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Array
 */
declare namespace C3 {
  export interface IArray<E> {
  }
}

/**
 * An array is a 1-dimensional, ordered set of values that allows duplicates. All values are kept in memory.
 *
 * Methods built in to the "array" type and available on instances of array objects. In addition to the native support
 * for arrays in each language, these higher-level methods extract info and perform statistical analysis to provide
 * easy ways to use values without writing extra code.
 *
 * For example, if you have an array of numeric values, and want to detect a trend, you might start with something
 * like this:
 * ```js
 * var data = C3.Array.ofInt(3, 4, 4, 2, 3, 4, 5, 3, 6, 4, 2, 4);
 * (data.leastSquares().slope * 100).toFixed() + '%';
 * ```
 * That produces "5%", which is what we expect. (The slope of the regression line is slightly positive.)
 *
 * But what if you have noisy data? Here's a set with a zero and an high outlier value that produces an unreasonable
 * value using linear regression:
 * ```js
 * var data = C3.Array.ofInt(3, 4, 4, 0, 2, 3, 4, 5, 3, 6, 4, 2, 1000, 4);
 * (data.leastSquares().slope * 100).toFixed() + '%';
 * ```
 * That produces "2418%", even though almost all of that is due to the high outlier.
 *
 * Let's reject the zero value and high outlier with a filter with the low end of 1 and a high end of 2 standard
 * deviations above the mean:
 * ```js
 * (data.withoutOutliers({ range: { min: 1 }, stddev: 2 })
 *      .leastSquares().slope * 100
 * ).toFixed() + '%';
 * ```
 * That produces "5%", which is what we expect, but now handling noisy data.
 *
 * Another way to detect a trend is using {@link #sumDiff}.
 *
 * @remarks this represents a made instance of Array
 */
declare namespace C3 {
  export class Array<E> {

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
    static fromJson(json: any | null): Array<E> | null;

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
    static fromJsonString(json: string | null): Array<E> | null;

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
    static fromXmlString(xml: string | null): Array<E> | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Array<E> | null;

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
     * Converts this collection to an array.
     *
     * @param limit
     *          the maximum number of elements in the resulting array; if null or negative, the whole collection is
     *          converted.
     */
    collect(limit?: number | null): C3.Array<E | null>;

    /**
     * Converts this collection to an array of arrays. If element type is not a collection then returns an array of
     * singleton arrays.
     */
    collectArrays(limit?: number | null): C3.Array<C3.Array<T | null>>;

    abs(): Array<E> | null;

    aggImplementation(spec: AggSpec | null, op: string): R | null;

    aggImplementation(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

    aggImplementation(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

    /**
     * Sum up all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3] => 6
     * ```
     */
    sumDbl(): number;

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

    normalize(): Array<E> | null;

    at(index: number): E | null;

    pluck(fieldPath: string | null, vtOverride?: ValueType | null): Array<T> | null;

    /**
     * @return first element in this collection.
     */
    first(): E | null;

    /**
     * @return first element in this collection.
     */
    first(n: number): Array<E> | null;

    /**
     * @return first element in this collection.
     */
    first(test: λPredicate<E | null>): E | null;

    /**
     * Find first non null element in this collection. Note that element can still be #isEmpty()
     */
    firstNotNull(): E | null;

    /**
     * Find first non null element in this collection. Note that element can still be #isEmpty()
     */
    firstNotNull(mapper: λFunction<E | null, T | null>): T | null;

    /**
     * Finds first non empty element.
     */
    firstNotEmpty(): E;

    /**
     * Finds first non empty element.
     */
    firstNotEmpty(mapper: λFunction<E | null, T | null>): T;

    /**
     * @return last element of this collection.
     */
    last(): E | null;

    /**
     * @return last element of this collection.
     */
    last(n: number): Array<E> | null;

    /**
     * @return last element of this collection.
     */
    last(test: λPredicate<E | null>): E | null;

    /**
     * Find last non null element in this collection. Note that element can still be #isEmpty()
     */
    lastNotNull(): E | null;

    /**
     * Find last non null element in this collection. Note that element can still be #isEmpty()
     */
    lastNotNull(mapper: λFunction<E | null, T | null>): T | null;

    /**
     * Finds last non empty element.
     */
    lastNotEmpty(): E;

    /**
     * Finds last non empty element.
     */
    lastNotEmpty(mapper: λFunction<E | null, T | null>): T;

    minImplementation(spec?: AggSpec | null): E | null;

    minImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

    /**
     * @return element of the collection with minimum value based on provided value supplier.
     */
    minBy(value: λFunction<E | null, any>): E | null;

    /**
     * @return element of the collection with minimum value based on provided value supplier.
     */
    minBy(value: λBiFunction<E | null, number | null, any>): E | null;

    maxImplementation(spec?: AggSpec | null): E | null;

    maxImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

    /**
     * @return element of the collection with maximum value based on provided value supplier.
     */
    maxBy(value: λFunction<E | null, any>): E | null;

    /**
     * @return element of the collection with maximum value based on provided value supplier.
     */
    maxBy(value: λBiFunction<E | null, number | null, any>): E | null;

    count(spec?: AggSpec | null): R | null;

    sumImplementation(spec?: AggSpec | null): R | null;

    allImplementation(spec?: AggSpec | null): R | null;

    prod(spec?: AggSpec | null): R | null;

    /**
     * Compute the mean of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3] => 2
     * ```
     */
    avg(): R | null;

    /**
     * Compute the mean of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3] => 2.0
     * ```
     */
    avgDbl(): number;

    /**
     * Compute median of all the values in the collection
     * E.g.
     * ```js
     *    [0,1,2,3] => 1.5
     * ```
     */
    median(): R | null;

    /**
     * Compute median of all the values in the collection
     * E.g.
     * ```js
     *    [0,1,2,3] => 1.5
     * ```
     */
    medianDbl(): number;

    /**
     * Compute percentile of all the values in the collection
     * E.g.
     * ```js
     *    percentile([0,1,2,3], 0.50) => 1.5
     * ```
     */
    percentile(percentile: number): R | null;

    /**
     * Compute percentile of all the values in the collection
     * E.g.
     * ```js
     *    percentile([0,1,2,3], 0.50) => 1.5
     * ```
     */
    percentileDbl(percentile: number): number;

    /**
     * Compute standard deviation of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3,4] => 1.2909944487358
     * ```
     */
    stddev(): R | null;

    /**
     * Compute standard deviation of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3,4] => 1.2909944487358
     * ```
     */
    stddevDbl(): number;

    /**
     * Compute variance of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3,4] => 1
     * ```
     */
    variance(): R | null;

    /**
     * Compute variance of all the values in the collection
     * E.g.
     * ```js
     *    [1,2,3,4] => 1
     * ```
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

    round(decimals?: number | null): Array<E> | null;

    invert(): Array<E> | null;

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
     * @return `true` if this collection contains all elements of provided collection.
     */
    containsAll(predicate: λPredicate<E | null>): boolean;

    /**
     * @return `true` if every element in this collection satisfies provided predicate.
     */
    containsAll(predicate: λBiPredicate<E | null, number | null>): boolean;

    /**
     * @return true if this collection contains any elements satisfying provided condition.
     */
    containsAny(predicate: λPredicate<E | null>): boolean;

    /**
     * @return true if this collection contains any elements satisfying provided condition.
     */
    containsAny(predicate: λBiPredicate<E | null, number | null>): boolean;

    /**
     * Finds some element in this collection satisfying provided condition.
     */
    findAny(predicate: λPredicate<E | null>): E | null;

    /**
     * Finds some element in this collection satisfying provided condition.
     */
    findAny(fields: C3.Map<string | null, any> | null): E | null;

    /**
     * Finds some element in this collection satisfying provided condition.
     */
    findAny(predicate: λBiPredicate<E | null, number | null>): E | null;

    /**
     * Find any non null element in this collection. Note that element can still be #isEmpty()
     */
    anyNotNull(): E | null;

    /**
     * Find any non null element in this collection. Note that element can still be #isEmpty()
     */
    anyNotNull(mapper: λFunction<E | null, T | null>): T | null;

    /**
     * Finds any non empty element.
     */
    anyNotEmpty(): E;

    /**
     * Finds any non empty element.
     */
    anyNotEmpty(mapper: λFunction<E | null, T | null>): T;

    /**
     * Invokes action for each element.
     */
    each(action: λConsumer<E | null>): void;

    /**
     * Execute the specified lambda against each value of the collection. The first argument is the value and the second
     * is the collection index.
     */
    each(action: λBiConsumer<E | null, number | null>): void;

    /**
     * Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
     * interrupt iteration.
     */
    eachWhile(action: λPredicate<E | null>): boolean;

    /**
     * @return new collection for all elements of this collection transformed by applying provided lambda function.
     */
    mapToSame(mapper: λFunction<E | null, E | null>): Array<E> | null;

    /**
     * @return new collection for all elements of this collection transformed by applying provided lambda function.
     */
    mapToSame(mapper: λBiFunction<E | null, number | null, E | null>): Array<E> | null;

    /**
     * @return new collection of any with all elements of this collection transformed by applying provided lambda function.
     */
    map(mapper: λFunction<E | null, T | null>): Array<T> | null;

    /**
     * @return new collection based on all elements of this collection by applying provided mapping specification.
     */
    map(spec: FetchStreamSpec): Array<E> | null;

    /**
     * @return new array by evaluating provided expression over each element.
     */
    map(expr: string): C3.Array<T | null>;

    /**
     * @return new collection of any with all elements of this collection transformed by applying provided lambda function.
     */
    map(mapper: λBiFunction<E | null, number, T | null>): Array<T> | null;

    /**
     * @return new collection of string with all elements of this collection transformed by applying provided lambda function.
     */
    mapToStr(mapper: λFunction<E | null, string | null>): C3.Array<string | null> | null;

    /**
     * @return new collection of string with all elements of this collection transformed by applying provided lambda function.
     */
    mapToStr(mapper: λBiFunction<E | null, number, string | null>): C3.Array<string | null> | null;

    /**
     * @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
     */
    mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): Array<T> | null;

    /**
     * @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
     * It is the responsibility of the mapper to convert values to the elementType if needed. The method mapTo will not do any
     * such conversion.
     */
    mapTo(elementType: ValueType, mapper: λBiFunction<E | null, number, T | null>): Array<T> | null;

    /**
     * @return a collection of same type consisting of the results of replacing each element of this collection with
     *         mapped array elements.
     */
    flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): Array<E> | null;

    /**
     * @return returns a collection of same type consisting of the results of replacing each element of this collection
     *         with mapped array elements.
     */
    flatMapToSame(mapper: λBiFunction<E | null, number | null, Array<E> | null>): Array<E> | null;

    /**
     * @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
     */
    flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): Array<T> | null;

    /**
     * @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
     */
    flatMap(mapper: λBiFunction<E | null, number, Array<T> | null>): Array<T> | null;

    /**
     * @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
     */
    flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): Array<T> | null;

    /**
     * @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
     */
    flatMapTo(elementType: ValueType, mapper: λBiFunction<E | null, number, Array<T> | null>): Array<T> | null;

    /**
     * @return new collection of this type produces by recursively applying `toInter` + `fromInter` lambdas for every
     *         unique element of this collection and elements returned by `fromInter`.
     */
    flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): Array<E> | null;

    /**
     * @return single value that is a result of aggregation of all elements by provided lambda.
     */
    fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

    /**
     * @return single value that is a result of aggregation of all elements by provided lambda.
     */
    fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

    /**
     * @return single value that is a result of aggregation of all elements by provided lambda and initial value.
     */
    fold(initial: T | null, folder: λTriFunction<E | null, number | null, T | null, T | null>): T | null;

    /**
     * @return new collection with empty elements removed.
     */
    compact(): Array<E> | null;

    /**
     * @return new collection with duplicate elements removed.
     */
    unique(): Array<E> | null;

    /**
     * @return new collection with duplicate elements removed based on provided key supplier.
     */
    uniqueBy(key?: λFunction<E | null, any> | null): Array<E> | null;

    /**
     * @return new collection with duplicate elements removed based on provided key supplier.
     */
    uniqueBy(key: λBiFunction<E | null, number | null, any>): Array<E> | null;

    /**
     * Filters elements from this collection based on evaluation result of the provided filter predicate.
     */
    filter(predicate: λPredicate<E | null>): Array<E> | null;

    /**
     * Filters elements from this collection based on evaluation result of the provided filter predicate.
     */
    filter(filter: string | null): Array<E> | null;

    /**
     * Filters elements from this collection based on evaluation result of the provided filter predicate.
     */
    filter(fields: C3.Map<string | null, any> | null): Array<E> | null;

    /**
     * Filters elements from this collection based on evaluation result of the provided filter predicate.
     */
    filter(predicate: λBiPredicate<E | null, number | null>): Array<E> | null;

    fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): Array<E> | null;

    fillMissing(value: any, spec?: FillMissingSpec | null): Array<E> | null;

    fieldNames(): C3.Array<string | null>;

    fieldValueType(field: string): ValueType | null;

    /**
     * Rejects elements from this collection based on evaluation result of the provided filter expression.
     */
    reject(predicate: λPredicate<E | null>): Array<E> | null;

    /**
     * Rejects elements from this collection based on evaluation result of the provided filter expression.
     */
    reject(predicate: λBiPredicate<E | null, number | null>): Array<E> | null;

    /**
     * Maps this collection to another by removing fields from every element that are not part of the provided include
     * spec. If include spec is not provided then does nothing.
     */
    include(include: string | null): Array<E> | null;

    /**
     * Maps this collection to another by removing fields from every element that are not part of the provided include
     * spec. If include spec is not provided then does nothing.
     */
    include(positions: Collection<number | null>): Array<E> | null;

    /**
     * Maps this collection to another by removing fields from every element that are part of provided exclude spec.
     * If include spec is not provided then does nothing.
     */
    exclude(exclude: string | null): Array<E> | null;

    replaceByPredicate(e: E | null, predicate: λPredicate<E | null>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order.
     *
     * If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
     * stream, while in descending order, null elements were at the beginning of the returned stream.
     */
    sorted(descending?: boolean): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order.
     *
     * If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
     * stream, while in descending order, null elements were at the beginning of the returned stream.
     */
    sorted(comparator: λBiFunction<E | null, E | null, number | null>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order.
     *
     * If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
     * stream, while in descending order, null elements were at the beginning of the returned stream.
     */
    sorted(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order.
     *
     * If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
     * stream, while in descending order, null elements were at the beginning of the returned stream.
     */
    sorted(order: string | null): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
     * provided lambda.
     */
    sortedBy(key: λFunction<E | null, any>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
     * provided lambda.
     */
    sortedBy(descending: boolean, key: λFunction<E | null, any>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
     * provided lambda.
     */
    sortedBy(key: λBiFunction<E | null, number | null, any>): Array<E> | null;

    /**
     * Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
     * provided lambda.
     */
    sortedBy(descending: boolean, key: λBiFunction<E | null, number | null, any>): Array<E> | null;

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
     * Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
     * order to maintain collections sorted order.
     */
    sortedIndex(element: E, value: λBiFunction<E | null, number | null, any>): number;

    /**
     * Maps this collection to a new stream of arrays of the original element type.  The size of each batch is determined
     * by the {@link batchSize} parameter.
     */
    batch(batchSize?: number | null): Stream<Array<E> | null>;

    /**
     * Partitions the stream into two arrays based on the truth value of the provided lambda function
     */
    partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

    /**
     * Counts values returned by the output of the provided string key function
     */
    countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

    /**
     * Counts values returned by the output of the provided string key function
     */
    countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

    /**
     * Counts values of the output of the provided key function
     */
    countBy(keyType: ValueType, key: λBiFunction<E | null, number | null, T | null>): C3.Map<T | null, number | null>;

    /**
     * Checks if predicate returns true for all elements of collection
     */
    every(predicate: λPredicate<E | null>): boolean;

    /**
     * Checks if predicate returns true for all elements of collection
     */
    every(predicate: λBiPredicate<E | null, number | null>): boolean;

    elementCartesianProduct(): C3.Array<C3.Array<T | null>>;

    /**
     * @return new collection with all nested arrays flattened. The nesting can be to any depth unless `shallow`
     *         parameter is `true` in which case this collection will only be flattened a single level.
     */
    flatten(shallow?: boolean): Array<T> | null;

    /**
     * @return new collection with all nested arrays flattened. The nesting can be to any depth unless `shallow`
     *         parameter is `true` in which case this collection will only be flattened a single level.
     */
    flatten(depth: number, include?: string | null): Array<T> | null;

    /**
     * Produce a random sample from this collection with `count` number of elements.
     */
    sample(spec?: SampleSpec | null): Array<E> | null;

    /**
     * Creates a new collection from elements starting at #fromIndex. Positive value of index is relative to the first
     * position in the collection. Negative value of the index is relative to last position in the collection.
     * If #fromIndex is 0, returns same collection.
     */
    slice(fromPos: number, toPos?: number | null, stride?: number | null): Array<E> | null;

    /**
     * Creates a new collection from elements starting at #fromIndex. Positive value of index is relative to the first
     * position in the collection. Negative value of the index is relative to last position in the collection.
     * If #fromIndex is 0, returns same collection.
     */
    slice(positions: Collection<number | null> | null): Array<E> | null;

    sliceByKey(keys: Collection<any> | null): Array<E> | null;

    sliceByKey(secondaryIndex: string, keys: Collection<any> | null): Array<E> | null;

    /**
     * Create a summary from elements in this Collection.
     */
    summarize(spec?: DigestSpec | null): Digest<any, Digest | null, DigestBuilder | null>;

    /**
     * Downsample points to a coarser frequency a.k.a aggregate values at a coarser frequency
     * e.g. a 10 element collection needs to be downsampled to a 5 element collection by taking a "SUM" aggregation
     * ```js
     *    [1,2,3,4,5,6,7,8,9,10] => [3,7,11,15,19]
     * ```
     */
    downsample(spec: DownsampleSpec): Array<E> | null;

    /**
     * Generate a linear regression of the finite numeric values using Ordinary Least Squares. If there are too few
     * values, the return value is null; otherwise it is an object with the intercept (α) and slope (β) as well as other
     * meta-information. Note that the _x_ observations are the indexes into the array. Non-numeric values are ignored.
     *
     * @see https://en.wikipedia.org/wiki/Ordinary_least_squares
     */
    leastSquares(): LeastSquaresResult;

    rollingDiff(stride?: number | null): Array<E> | null;

    pctChange(stride?: number | null): Array<E> | null;

    unaryOp(op: string): Array<E> | null;

    shape(): C3.Array<number | null>;

    toObj(): Obj | null;

    fetch(spec?: FetchSpec | null): Array<E> | null;

    largest(n: number, comparator?: λBiFunction<E | null, E | null, number | null> | null, keep?: string | null): C3.Array<E | null>;

    histogram(spec?: HistogramSpec | null): Histogram<any, any, HistogramBuilder | null>;

    neg(): Array<E> | null;

    approxMostFrequent(spec?: CountMinSketchSpec | null): C3.Map<string | null, number | null>;

    timeseries(spec?: DataTimeseriesSpec | null): Array<R> | null;

    timeseries(tsFieldSpec: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpec | null): Array<R> | null;

    /**
     * @return value type of elements in this collection
     */
    elementType(): ValueType;

    /**
     * Converts this collection to a stream.
     */
    stream(): Stream<E | null>;

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
    replaceType(old: Type, new_: Type): Array<E>;

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
    collectionType(): ArrayType;

    /**
     * @return a collection with potentially more specialized element type by inferring element value types
     */
    inferType(): Array<E> | null;

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
    toMixingCollection(collectionType: CollectionType, failIfInvalid?: boolean): Array<T> | null;

    /**
     * Converts this collection to a collection of provided collection type
     */
    toCollectionOfType(collectionType: CollectionType, failIfElementIsInvalid?: boolean): Collection<T> | null;

    toInMemory(): Array<E> | null;

    /**
     * @return Boxed instance of this collection.
     */
    box(): Boxed<Collection<E> | null> | null;

    /**
     * @return copy of this collection with all elements Boxed.
     */
    boxElements(): C3.Array<Boxed<E> | null> | null;

    /**
     * Maps this collection to another by obfuscating fields.
     * @param spec
     *            A spec use for additional fields that you want to anonymize in addition to already defined pii fields
     *            in c3 type and quasi identifier fields that you want to anonymize using data anonymization algorithm,
     *            which ensure k-anonymity in the collection
     * @return A Collection that has requested pii fields obfuscated and/or requested quasi identifier fields anonymized
     * @see Anonymizer.anonymize, Anonymizer.anonymizeBatch
     */
    anonymize(spec?: AnonymizationSpec | null): Array<E> | null;

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
    withoutOutliers(spec?: OutliersSpec | null): Array<E>;

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
    extractOutliers(spec?: OutliersSpec | null): Array<E>;

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
    with(e: E | null): Array<E>;

    /**
     * @return new collection with a new elements added to it.
     */
    withSome(e: E | null, ...more: E | null[]): Array<E>;

    /**
     * @return new collection with the provided elements added to it.
     */
    withAll(elements: Collection<E> | null): Array<E> | null;

    /**
     * @return new collection without the provided element.
     */
    without(e: E | null): Array<E> | null;

    /**
     * @return new collection without the provided elements.
     */
    withoutSome(e: E | null, ...more: E | null[]): Array<E> | null;

    /**
     * @return new collection without elements satisfying provided predicate.
     */
    withoutAny(predicate: λPredicate<E | null>): Array<E> | null;

    /**
     * @return new collection with the provided elements removed.
     */
    withoutAll(elements: C3.Array<E | null> | null): Array<E> | null;

    /**
     * Returns a new collection that includes all elements that appear in one collection or the other, but not in both.
     *
     * This method performs a symmetric difference. It includes elements that are only in 'this' collection or only in the
     * provided 'other' collection. It excludes elements that exist in both collections.
     *
     * This is different from a one-sided subtraction, which would only return elements in this collection that are not
     * in the other.
     *
     * Example:
     *   [1, 2, 3].difference([2, 3, 4]) → [1, 4]
     *
     * @param other
     *         The collection to compare against.
     * @return A new collection with elements unique to either this collection or the other.
     */
    difference(other: Collection<E> | null): Array<E> | null;

    /**
     * @return new collection of unique items, in order, that are present in all of the input collections.
     */
    static intersection(...collections: Collection<E> | null[]): Array<E> | null;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Array<E>;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Array<E> | null;

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
    rolling(agg: string, offset: number, span: number, step?: number | null): Array<E> | null;

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
    replace(index: number, e: E | null): Array<E> | null;

    /**
     * Returns everything but the last N entries of the collection
     */
    initial(exceptLastN?: number): Array<E>;

    /**
     * Converts this collection into collection of pairs of neighboring elements.
     */
    pairs(): C3.Array<Pair<E, E> | null> | null;

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
    static of(elementType: ValueType, ...elements: T | null[]): Array<T> | null;

    /**
     * @return collection of any with provided elements.
     */
    static ofAny(...elements: T | null[]): Array<T> | null;

    /**
     * @return collection of provided booleans.
     */
    static ofBool(...elements: boolean[]): C3.Array<boolean> | null;

    /**
     * @return collection of provided 64 bit integers.
     */
    static ofInt(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided 32 bit integers.
     */
    static ofInt32(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided 16 bit integers.
     */
    static ofInt16(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided floats.
     */
    static ofFloat(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided doubles.
     */
    static ofDbl(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided doubles.
     */
    static ofByte(...elements: number | null[]): C3.Array<number | null> | null;

    /**
     * @return collection of provided datetime.
     */
    static ofDateTime(...elements: DateTime | null[]): C3.Array<DateTime | null> | null;

    /**
     * @return collection of provided string.
     */
    static ofStr(...strs: string | null[]): C3.Array<string | null> | null;

    /**
     * @return collection of generic obj and provided instances.
     */
    static ofObj(...objs: Obj | null[]): C3.Array<Obj | null> | null;

    /**
     * @return collection of provided C3 type and provided instances.
     */
    static ofObj(type: Type, ...objs: Obj | null[]): Array<O> | null;

    /**
     * @return collection of provided integers in a range.
     */
    static ofIntInRange(min: number, max: number, step?: number | null): C3.Array<number> | null;

    /**
     * @return collection of provided integers in a range.
     */
    static ofInt32InRange(min: number, max: number, step?: number | null): C3.Array<number> | null;

    /**
     * @return collection of provided element type and values.
     */
    static builderOf(elementType: ValueType, ...elements: T | null[]): ArrayBuilder<T>;

    /**
     * @return collection of any with provided elements.
     */
    static builderOfAny(...elements: T | null[]): ArrayBuilder<T>;

    /**
     * @return collection of provided 64 bit integers.
     */
    static builderOfInt(...elements: number | null[]): ArrayBuilder<number>;

    /**
     * @return collection of provided 32 bit integers.
     */
    static builderOfInt32(...elements: number | null[]): ArrayBuilder<number>;

    /**
     * @return collection of provided 16 bit integers.
     */
    static builderOfInt16(...elements: number | null[]): ArrayBuilder<number>;

    /**
     * @return collection of provided floats.
     */
    static builderOfFloat(...elements: number | null[]): ArrayBuilder<number>;

    /**
     * @return collection of provided doubles.
     */
    static builderOfDbl(...elements: number | null[]): ArrayBuilder<number>;

    /**
     * @return collection of provided string.
     */
    static builderOfStr(...strs: string | null[]): ArrayBuilder<string | null>;

    /**
     * @return collection of provided byte.
     */
    static builderOfByte(...bytes: number | null[]): ArrayBuilder<number | null>;

    /**
     * @return collection of provided booleans.
     */
    static builderOfBool(...bools: boolean[]): ArrayBuilder<boolean>;

    /**
     * @return collection of provided byte.
     */
    static builderOfDateTime(...datetimes: DateTime | null[]): ArrayBuilder<DateTime | null>;

    /**
     * @return collection of generic obj and provided instances.
     */
    static builderOfObj(...objs: Obj | null[]): ArrayBuilder<Obj | null>;

    /**
     * @return collection of provided C3 type and provided instances.
     */
    static builderOfObj(type: Type, ...objs: Obj | null[]): ArrayBuilder<O>;

    /**
     * Whether or not this object is compressed to optimize memory usage at the expense of access time.
     *
     * @see #compress
     * @see #uncompress
     */
    isCompressed(): boolean;

    /**
     * Return an immutable compact copy of the object or itself if already compressd.
     */
    compress(): Array<E>;

    /**
     * Return an immutable compress copy of the object or itself if is not compressed.
     */
    uncompress(): Array<E>;

    /**
     * Whether or not this object is packed to optimize memory usage at the expense of access time.
     *
     * @see #pack
     * @see #unpack
     */
    isPacked(): boolean;

    /**
     * Return an immutable compact copy of the object or itself if already packed.
     *
     * @see #isPacked
     */
    pack(): Array<E>;

    /**
     * Return an immutable unpacked copy of the object or itself if already unpacked.
     *
     * @see #isPacked
     */
    unpack(): Array<E>;

    /**
     * @return collection with elements reversed. The first element becomes the last, and the last element becomes the
     *         first.
     */
    reversed(): Array<E> | null;

    /**
     * @return new collection with new element added to it if it is not already present.
     */
    withIfMissing(e: E | null): Array<E>;

    /**
     * @return new collection with new element added to it if it is not already present based on provided predicate.
     */
    withIfMissing(e: E | null, predicate: λPredicate<E | null>): Array<E>;

    /**
     * @return element of this collection at provided 0 based index. If index is out of bounds returns `null`.
     */
    get(index: number): E | null;

    /**
     * @return a copy with new element inserted at given index.
     */
    insertAt(index: number, e: E | null): Array<E>;

    /**
     * @return a copy with element at given index removed.
     */
    removeAt(index: number): Array<E>;

    /**
     * Creates a new array with the same elements, but reordered using a version of the Fisher-Yates shuffle.
     */
    shuffle(): Array<E> | null;

    /**
     * Create a stream of arrays of this type, each one with the original set of elements in a different order.
     *
     * For example:
     * ```js
     * [1, 2, 3].permute()
     * ```
     * Produces an stream of arrays, each of which is a permutation of the original:
     * ```
     * [
     *   [1, 2, 3],
     *   [1, 3, 2],
     *   [2, 3, 1],
     *   [2, 1, 3],
     *   ...
     * ```
     *
     * Note that the number of permutations grows large quickly (as _n!_) so this should only be used on small arrays.
     */
    permute(): Stream<Array<E> | null>;

    /**
     * @return new array of unique items, in order, that are present in one or more of the input collections.
     */
    static union(...collections: Collection<T> | null[]): C3.Array<T | null>;

    /**
     * @return new instance of ArrayBuilder with current array's content as initial content.
     */
    toBuilder(): ArrayBuilder<E> | null;

    /**
     * @return new instance of array of provided element type by applying builder lambda.
     */
    static build(elementType: ValueType, builder: λConsumer<ArrayBuilder<T>>): C3.Array<T | null>;

    /**
     * @return new instance of array of any by applying builder lambda.
     */
    static buildAny(builder: λConsumer<ArrayBuilder<T>>): C3.Array<T | null>;

    /**
     * @return new instance of array of ints by applying builder lambda.
     */
    static buildInts(builder: λConsumer<ArrayBuilder<number | null>>): C3.Array<number | null>;

    /**
     * @return new instance of array of ints by applying builder lambda.
     */
    static buildInt32s(builder: λConsumer<ArrayBuilder<number | null>>): C3.Array<number | null>;

    /**
     * @return new instance of array of floats by applying builder lambda.
     */
    static buildFloats(builder: λConsumer<ArrayBuilder<number | null>>): C3.Array<number>;

    /**
     * @return new instance of array of doubles by applying builder lambda.
     */
    static buildDbls(builder: λConsumer<ArrayBuilder<number | null>>): C3.Array<number>;

    /**
     * @return new instance of array of string by applying builder lambda.
     */
    static buildStrs(builder: λConsumer<ArrayBuilder<string | null>>): C3.Array<string | null>;

    /**
     * @return new instance of array of booleans by applying builder lambda.
     */
    static buildBool(builder: λConsumer<ArrayBuilder<boolean>>): C3.Array<boolean>;

    /**
     * @return new instance of array of provided C3 type by applying builder lambda.
     */
    static buildObjs(type: Type, builder: λConsumer<ArrayBuilder<O>>): C3.Array<O | null>;

    /**
     * Optimized implementation of a repeated Array that consumes minimal memory and is fast to instantiate. Use this
     * method when building an Array with a cardinality of 1 for optimal space and build time performance. For example if
     * you are building an Array which only contains the word "hello" then you can quickly instantiate like so:
     * ```js
     * Array.repeat(PrimitiveType.ofStr(), 100000, "hello")
     * ```
     *
     * @return array of provided element type, size and the repeating single value
     */
    static repeat(elementType: ValueType, size: number, element?: T | null): Array<T> | null;

    /**
     * Optimized implementation of a repeated Array that consumes minimal memory and is fast to instantiate. Use this
     * method when building an Array with a small number of unique values occurring in the overall array. e.g
     * ```js
     * Array.repeat(PrimitiveType.ofStr(), [1, 3, 2], ["foo", "bar", "baz"])
     * // Will produce Array like below:
     * // ["foo", "bar", "bar", "bar", "baz", "baz"]
     * ```
     */
    static repeat(elementType: ValueType, counts: C3.Array<number | null>, elements: C3.Array<T | null>): Array<T> | null;

    /**
     * Optimized implementation of pattern Array that consumes minimal memory and is fast to instantiate. Use this method
     * when building an Array whose values follow an index-based pattern for optimal space and build time performance.
     * For example if you are building an Array that follows a linear pattern you can quickly instantiate it like so:
     * ```js
     * Array.pattern(PrimitiveType.ofInt(), 100000, (idx) => idx)
     * ```
     * or a step function
     * ```js
     * Array.pattern(PrimitiveType.ofDbl(), 100000, (idx) => idx < 50000 ? 0 : 1)
     * ```
     *
     * @return array of provided element type, size and value supplier based on index
     */
    static pattern(elementType: ValueType, size: number, element: λFunction<number | null, T | null>): Array<T> | null;

    /**
     * Version of #pattern that creates an array of `int` elements. This is a natural replacement for
     * Underscore/lodash `_.times()` for the common case of integer elements.
     */
    static patternOfInt(size: number, element: λFunction<number | null, number | null>): C3.Array<number | null>;

    /**
     * Version of #pattern that creates an array of `double` elements. This is a natural replacement for
     * Underscore/lodash `_.times()` for the common case of double-precision elements.
     */
    static patternOfDbl(size: number, element: λFunction<number | null, number | null>): C3.Array<number | null>;

    /**
     * @return new collection with one or more new elements inserted at the beginning
     * @see #first
     * @see #withoutFirst
     */
    withFirst(...values: E | null[]): Array<E>;

    /**
     * @return new collection with the first element removed.
     * @see #first
     * @see #withFirst
     */
    withoutFirst(): Array<E>;

    /**
     * @return new collection with the last element removed.
     * @see #last
     * @see #with
     */
    withoutLast(): Array<E>;

    /**
     * Builds a new array of the same length, but filled with the specified value. This behaves like the JavaScript
     * `Array.fill()` function, except it returns a new array.
     *
     * @param value the value to fill with
     * @param start the index to start with, default 0. If negative, treated as relative to the size.
     * @param end the index (exclusive) to end before, default end of array. If negative, treated as relative to the size.
     */
    withFill(value: E | null, start?: number | null, end?: number | null): Array<E> | null;

    /**
     * Returns a new collection with the specified elements removed. This behaves like the JavaScript `Array.splice()`
     * function with 1 argument, except it returns a new array. To get the removed elements, use #slice beforehand.
     *
     * @param start index at which to start removing. If negative, treated as relative to the size.
     *
     * @see #slice
     */
    withSplice(start: number): Array<E> | null;

    /**
     * Returns a new collection with the specified elements removed or replaced. This behaves like the JavaScript
     * `Array.splice()` function with 2 or more arguments, except it returns a new array. To get the removed elements,
     * use #slice beforehand.
     *
     * @param start index at which to start removing. If negative, treated as relative to the size.
     * @param count number of elements to remove, default the remainder of the collection
     * @param items new values to replace the removed elements
     *
     * @see #slice
     */
    withSplice(start: number, count?: number | null, ...items: E | null[]): Array<E> | null;

    /**
     * @return elements converted to boolean; empty values will be converted to `false`
     */
    get boolArray(): C3.Array<boolean>;

    /**
     * @return elements converted to double; empty values will be converted to `NaN`
     */
    get doubleArray(): C3.Array<number>;

    /**
     * @return elements converted to float; empty values will be converted to `NaN`
     */
    get floatArray(): C3.Array<number>;

    /**
     * @return elements converted to int; empty values will be converted to `0`
     */
    get intArray(): C3.Array<number>;

    /**
     * @return elements converted to int16; empty values will be converted to `0`
     */
    get int16Array(): C3.Array<number>;

    /**
     * @return elements converted to int32; empty values will be converted to `0`
     */
    get int32Array(): C3.Array<number>;

    /**
     * @return elements converted to byte; empty values will be converted to `0`
     */
    get byteArray(): C3.Array<number>;

    /**
     * @return element at index converted to boolean; empty values will be converted to `false`
     */
    boolAt(index: number): boolean;

    /**
     * @return element at index converted to double; empty values will be converted to `NaN`
     */
    doubleAt(index: number): number;

    /**
     * @return element at index converted to float; empty values will be converted to `NaN`
     */
    floatAt(index: number): number;

    /**
     * @return element at index converted to int; empty values will be converted to `0`
     */
    intAt(index: number): number;

    /**
     * @return element at index converted to int16; empty values will be converted to `0`
     */
    int16At(index: number): number;

    /**
     * @return element at index converted to int32; empty values will be converted to `0`
     */
    int32At(index: number): number;

    /**
     * @return element at index converted to byte; empty values will be converted to `0`
     */
    byteAt(index: number): number;

    /**
     * @return element at index converted to provided value type; empty values will be converted to `0`
     */
    atOf(index: number, vt: ValueType): T;
  }
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

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
