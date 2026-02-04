// TypeScript definitions for the C3 type Val

/**
 * @remarks this represents a value passed to a method that expects an instance of Val
 */
declare interface IVal {
}

/**
 * @remarks this represents a made instance of Val
 */
declare class Val {

  static invalidAggMsg(aggOp: string | null, vt: ValueType | null): string | null;

  static invalidBinaryOpMsg(binaryOp: string | null, left: ValueType | null, right: ValueType | null): string | null;

  static myType(): Type | null;

  static myType(pkg: Pkg | null): Type | null;

  /**
   * @return if the field could be null.
   */
  static allowsNull(ft: FieldType): boolean;

  static approximateDistinctCount(hlls?: C3.Array<C3.Map<number | null, HyperLogLog | null>>): C3.Map<number | null, number | null>;

  static at(bindings: C3.Map<string | null, any> | null, path: string | null): any;

  /**
   * Runtime simulation of numeric binary operator logic. This handles string concatenation for the plus operator
   * or a NaN value if either side is not a numeric value for other operators as would JavaScript.
   *
   * If both operands are integers, the return value is an integer, except for division and exponentiation which
   * always return a double. The same goes for BigDecimal values. Otherwise, if both operands are numbers double
   * values are returned. Note that `null` values are treated as `0` for this purpose.
   *
   * If either operand is not a number the return value is `NaN`, except for addition where the return value is the
   * string concatenation and the inequalities where the return value is boolean.
   *
   *
   * The standard JavaScript arithmetic operators are supported: `+`, `-`, `*`, `/`, `%` and `**` as well as the
   * bitwise operators `|`, `&`, `<<`, `>>` and `>>>` and logical operators `==`, `===`, `!=`, `!==`, `<`, `<=',
   * '>' and '>='.
   */
  static binop(op: string | null, lhs: any, rhs: any): any;

  static collect(elements: Iterator<any> | null): C3.Array<any>;

  static batch(any: any, batchSize: number | null): any;

  /**
   * @return most generic common mixin between provided types
   */
  static commonMixin(types?: C3.Array<TypeMeta | null>): TypeMeta | null;

  static compare(v1: number | null, v2: number | null): number;

  static compare(v1?: boolean, v2?: boolean): number;

  static compare(v1: number, v2: number): number;

  static compare(v1: any | null, v2: any | null): number;

  static compare(v1: DateTime | null, v2: DateTime | null): number;

  static compare(v1: number, v2: number): number;

  static compare(v1: number, v2: number): number;

  static compare(v1: number, v2: number): number;

  static compare(v1: any | null, v2: any | null): number;

  static compare(v1: number, v2: number): number;

  static compare(v1: number | null, v2: number | null): number;

  static compare(v1: string | null, v2: string | null): number;

  static compareIterables(v1: Iterable<any> | null, v2: Iterable<any> | null): number;

  /**
   * Compare any two values for sorting purposes. If these values are of the same type, and that type is comparable,
   * this produces a natural sorting order. If the values are not comparable, an arbitrary but consistent ordering is
   * returned. Nulls sort less than non-null values.
   *
   * @return 1 if one is greater, -1 if two is greater, and 0 if equal
   */
  static compareValues(one: any, two: any): number;

  /**
   * Compare any two values for sorting purposes. If these values are of the same type, and that type is comparable,
   * this produces a natural sorting order. If the values are not comparable, an arbitrary but consistent ordering is
   * returned. Nulls sort less than non-null values, unless the third argument is true.
   *
   * @param nullIsGreater
   *        treat null values as greater
   * @return 1 if one is greater, -1 if two is greater, and 0 if equal
   */
  static compareValues(one: any, two: any, nullIsGreater?: boolean): number;

  static compareValues(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null, comparator: any): any;

  /**
   * @return result of the given comparator with null values being < then non null values
   */
  static compareWithNullLogic(v1: any, v2: any, comparator: any): number;

  /**
   * @return a new binary value that is the concatentation of the two specified values
   */
  static concatBinary(b1: any | null, b2: any | null): any | null;

  static consumeFieldValue(obj: Obj | null, ft: FieldType, v: any, action?: λBiConsumer<FieldType, any> | null): void;

  static consumeFieldValue(obj: Obj | null, ft: FieldType | null, v: any, spec: ValueSpec | null, action?: λBiConsumer<FieldType, any> | null): void;

  static consumeFieldValue(obj: Obj | null, ft: FieldType | null, v: any, vt: ValueType | null, isEmptyValue: boolean | null, spec: ValueSpec | null, action?: λBiConsumer<FieldType, any> | null): void;

  static consumeFieldValue(ft: TupleFieldType | null, v: any, spec: ValueSpec | null, action?: λBiConsumer<TupleFieldType, any> | null): void;

  static consumeFieldValue(obj: Obj | null, field: string | null, action: λBiConsumer<FieldType | null, any> | null): void;

  static count(hlls?: C3.Array<C3.Map<number | null, HyperLogLog | null>>): C3.Map<number | null, number | null>;

  static count(a: any, b: any, rt: ValueType | null): any;

  /**
   * @return count of two values;
   *         It is different from add such that the two arguments are of the same type
   */
  static count(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * @return enum field value type based on declared default value
   */
  static enumFieldType(enumDeclaredDefault: string | null, pkg: Pkg | null): ValueType | null;

  /**
   * @return default value from default expression
   */
  static defaultValue(expr: any, valueType: ValueType | null, obj: Obj | null, context: λSupplier<string | null> | null): any;

  /**
   * @return given value or application of `dflt` lambda if value is null. e.g. dflt(user, () -> C3.user())
   */
  static dflt(v?: any, dflt?: λSupplier<any> | null): any;

  /**
   * @return given value or application of `dflt` lambda if value is null; and optionally checks that final value is
   *         not missing. e.g. dflt(user, () -> C3.user(), true)
   */
  static dflt(v?: any, dflt?: λSupplier<any> | null, failIfMissing?: boolean): any;

  /**
   * @return given value or application of `dflt` lambda if value is null; and optionally checks that final value is
   *         not missing. e.g. dflt(user, () -> C3.user(), "User", C3.userId())
   */
  static dflt(v?: any, dflt?: λSupplier<any> | null, failIfMissing?: boolean, what?: string | null, val?: string | null): any;

  /**
   * @return boxed C3 value i.e. subtype of Obj or Boxed
   */
  static ensureBoxed(v: any): WithType | null;

  /**
   * @return boxed C3 value i.e. subtype of Obj or Boxed
   */
  static ensureBoxed(v: any, vt: ValueType | null): WithType | null;

  static shouldBoxReturnValue(rt: ValueType | null): boolean;

  /**
   * Determine if two objects are "exactly the same value", handling `null`. Null is equal to itself
   * and not equal to anything else. Different Objs are _not_ equal, even if of the same type and with the same
   * fields, and the same goes for collections.
   *
   * @return true if the two values are exactly the same
   * @see #logicallyEquals
   */
  static equals(v1: any, v2: any): boolean;

  /**
   * Determine if two objects are "logically the same value":
   *
   *  - `null` is equal to itself and not equal to anything else,
   *  - strings with the same content are equal,
   *  - numbers with the same numeric value (ignoring type) are equal,
   *  - datetime values with the same instant and time zone are equal,
   *  - JSON values that serialize exactly the same are equal,
   *  - binary values that have the same bytes are equal.
   *
   * Different Objs are _not_ equal, even if of the same type and with the same fields, and the same goes for
   * collections. There is one special case for {@link Identified}: two instances of the same type that have the same
   * `id` value are the same (since they are stored using the same key in the database).
   *
   * Roughly speaking: for primitive types, the same logical value and for complex objects the same pointer.
   *
   * Note in general we use language-specific comparisons for faster behavior, such as {@link Collection#contains};
   * this method should only be called when the extra logical equality logic is needed.
   * Here's how the behavior of this method compares to the language-native equality:
   *
   *
   * | language | number | datetime | binary | json |
   * |----------|--------|----------|--------|------|
   * | Python | same | instant | same | same |
   * | JavaScript | same | instant | content | stringify |
   * | Java | ignore type | same | same | same |
   *
   * @return true if the two values are logically the same
   * @see #equals
   */
  static logicallyEquals(v1: any, v2: any): boolean;

  /**
   * Determine whether two objects are "loosely equal". This implements the double equal (==) logic in poly tests.
   *
   * The left-hand side (actual) must have the same contents as the right, but not exactly the same type. The
   * comparison depends on the right-hand side (expected) value and the left-hand side may be converted for comparison.
   * This allows language native objects in expectations.
   *
   *
   * For made objects on the right-hand side, the actual value must be isA that type. For non-made objects, the actual
   * value must just have the same contents.
   */
  static isPolyLooseEqual(actual: any, expected: any): boolean;

  /**
   * Determine whether two objects are "strictly equal". This implements the triple equal (===) logic in poly tests.
   *
   *
   * Both sides must have the same type _and_ value. This only works with made objects on both sides and is
   * commutative as there is no coercion for comparison purposes.
   */
  static isPolyStrictEqual(actual: any, expected: any): boolean;

  static extractFieldValue(type: TypeMeta | null, fieldType: FieldType | null, fields?: C3.Map<FieldType | null, any>): any;

  static extractFieldValue(type: Type | null, fieldType: FieldType | null, fields?: C3.Map<FieldType | null, any>): any;

  static extractFieldValue(type: TypeMeta | null, fieldType: FieldType | null, fields?: any): any;

  static extractFieldValue(type: Type | null, fieldType: FieldType | null, fields?: any): any;

  static extractAnyFieldValue(type: TypeMeta | null, fieldType: FieldType | null, fields: any): any;

  static extractAnyFieldValue(type: Type | null, fieldType: FieldType | null, fields: any): any;

  /**
   * Converts the input fields (which should be positioned by FieldType's ordinal) into a Map
   */
  static objFieldsByFieldType(type: Type | null, fields?: any): C3.Map<FieldType | null, any>;

  /**
   * Converts the input fields (which should be positioned by FieldType's ordinal) into a Map
   */
  static objFieldsByFieldType(type: TypeMeta | null, fields?: any): C3.Map<FieldType | null, any>;

  /**
   * @return value of the field for the given name; safe to pass nulls.
   */
  static field(obj: Obj | null, field: string | null): any;

  static fieldValue(json: any | null, field: string | null, pkg: Pkg | null): any;

  static fieldValue(map: C3.Map<any, any> | null, field: string | null): any;

  static fieldValue(obj: Obj | null, field: string | null): any;

  static fieldValue(val: any, field: string | null, pkg: Pkg | null): any;

  static firstNotNull(...actions: λSupplier<any> | null[]): any;

  static firstNotNull(...values: any[]): any;

  static ge(v1: any, v2: any): boolean;

  static ge(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static gt(v1: any, v2: any): boolean;

  static gt(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static lt(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static lt(v1: any, v2: any): boolean;

  static le(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static le(v1: any, v2: any): boolean;

  static eq(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static neq(v1: any, v2: any, rt: ValueType | null, spec: OpSpec | null, primCompare: λBiPredicate<any, any> | null): any;

  static neq(v1: any, v2: any): boolean;

  /**
   * @return true of given map contains same elements as input
   */
  static hasElements(map?: C3.Map<string | null, any>, elements?: C3.Map<string | null, any>): boolean;

  /**
   * @return true of given json contains same fields as input
   */
  static hasFields(json: any | null, fields?: C3.Map<string | null, any>): boolean;

  /**
   * @return true of given Obj contains same fields as input
   */
  static hasFields(o: Obj | null, fields?: C3.Map<string | null, any>): boolean;

  /**
   * @return true of given value contains same fields or elements if its it a map as input
   */
  static hasFields(value: any, fields?: C3.Map<string | null, any>): boolean;

  static hyperLogLogForCsv(iter: any): C3.Map<number | null, HyperLogLog | null>;

  static isA(vt1: ValueType | null, vt2: ValueType | null): boolean;

  /**
   * Return whether or not this value is a made Array.
   */
  static isArray(v: any): boolean;

  /**
   * Return whether or not this value is a made Collection.
   */
  static isCollection(value: any): boolean;

  /**
   * Return whether or not this value is a Data
   */
  static isData(value: any): boolean;

  /**
   * Return whether or not this value is a made Map.
   */
  static isMap(value: any): boolean;

  /**
   * Return whether or not this value is a made named Tuple
   */
  static isNamedTuple(value: any): boolean;

  /**
   * Return whether or not this value is a made unnamed Tuple
   */
  static isUnnamedTuple(value: any): boolean;

  /**
   * Return whether or not this value is a made Tuple
   */
  static isTuple(value: any): boolean;

  /**
   * Return whether or not this value is a made Set.
   */
  static isSet(value: any): boolean;

  /**
   * Return whether or not this value is a made Stream.
   */
  static isStream(value: any): boolean;

  /**
   * Return whether or not this value is an instance of a declared Type, including ones that don't mixin
   * Obj (or even WithType). Note that this includes collections and many other non-Obj values.
   */
  static isInstance(value: any): boolean;

  /**
   * Return whether or not this value is an instance of the specified Type, including ones that don't mixin
   * Obj (or even WithType).
   */
  static isInstanceOf(value: any, type: Type): boolean;

  /**
   * Return whether or not this value is a made Obj (instance of a type that mixes in Obj).
   */
  static isObj(value: any): boolean;

  /**
   * Return whether or not this value is a Type instance.
   */
  static isType(value: any): boolean;

  /**
   * Return whether or not this value is a WithType instance (instance of a type that mixes in WithType).
   * Note that this includes collections and many other non-Obj values.
   */
  static isWithType(value: any): boolean;

  /**
   * @param value
   * @return true if value is null or NaN.
   */
  static isMissing(value: any): boolean;

  /**
   * @param value
   * @return true if value is null or NaN.
   */
  static isValueMissing(value: any, rt: ValueType | null): any;

  /**
   * @return is the value effectively empty i.e. null, empty string, empty collection etc.
   */
  static isEmpty(value: any): boolean;

  /**
   * @return if empty values should be allowed through
   */
  static allowsEmpty(value: any): boolean;

  /**
   * @return opposite of isEmpty
   */
  static isNotEmpty(value: any): boolean;

  /**
   * @return true if provided arrays are same based on element comparison
   */
  static isSame(c1: Iterable<any> | null, c2: Iterable<any> | null): boolean;

  /**
   * @return true if provided sets have the same elements (order independent)
   */
  static isSame(s1: C3.Set<any> | null, s2: C3.Set<any> | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided map collections are same based on key/value comparison, identical keys
   */
  static isSame(m1: C3.Map<any, any> | null, m2: C3.Map<any, any> | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided map collections are same based on key/value comparison, with key comparator
   */
  static isSame(m1: C3.Map<any, any> | null, m2: C3.Map<any, any> | null, keyComparator: λBiPredicate<any, any> | null, valueComparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided collections are same based element comparison
   */
  static isSame(c1: Collection<any> | null, c2: Collection<any> | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided arrays are same based on element comparison
   */
  static isSame(c1: Iterable<any> | null, c2: Iterable<any> | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided Objs are same based on field equality
   */
  static isSame(o1: Obj | null, o2: Obj | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided tuples are the same based on field equality
   */
  static isSame(t1: Tuple | null, t2: Tuple | null): boolean;

  /**
   * @return true if provided tuples are the same based on field equality
   */
  static isSame(t1: Tuple | null, t2: Tuple | null, comparator: λBiPredicate<any, any> | null): boolean;

  /**
   * @return true if provided values are the same
   */
  static isSame(v1: any, v2: any): boolean;

  static isSame(e: any, eType: ValueType | null, other: any): boolean;

  /**
   * This method is used in poly tests to check that the values are the exact same instance (pointer). It corresponds
   * the Java `==` operator, the JavaScript `===` operator and the Python `is` operator.
   *
   *
   * Note that this is mostly meant for objects, not primitives, but can be used in poly tests for the most strict
   * form of equality of primitive values. For example, in languages other than JavaScript, different numeric types
   * will compare logical values, but for this method they will take into account the numeric type. For example,
   * integer `0` and float `0.0` in Python will _not_ be isSameObject.
   */
  static isSameObject(a: any, b: any): boolean;

  static iterator(...elements: any[]): Iterator<any> | null;

  /**
   * Extract string key from a provided C3 type instance.
   */
  static key(value: Value | null): string | null;

  /**
   * @param value
   *        any C3 value.
   * @return all EventStreams from C3 value, recursively looking up fields.
   */
  static eventStreams(value: any): C3.Array<EventStream<any> | null>;

  /**
   * Extract string representation of provided C3 type instance useful for logging / debugging.
   */
  static logKey(value: Value | null): string | null;

  static max(v1: any, v2: any): any;

  /**
   * @return return max of 2 values
   */
  static max(v1: any, v2: any, spec: OpSpec | null): any;

  static merge(v1: any, v2: any): any;

  static merge(v1: any, v2: any, merge: λBiFunction<any, any, any> | null): any;

  static merge(v1: any, v2: any, ft: FieldType | null): any;

  /**
   * @return merged Obj instance.
   */
  static mergeObjs(o1: any, o2: any): any;

  /**
   * @return merged Obj instance with ValueMergeSpec
   */
  static mergeObjs(o1: any, o2: any, spec: ValueMergeSpec | null): any;

  /**
   * @return class of object
   * @param o1
   */
  static toClass(o1: Type | null): any;

  /**
   * @return return min of 2 values
   */
  static min(v1: any, v2: any): any;

  /**
   * @return return min of 2 values
   */
  static min(v1: any, v2: any, spec: OpSpec | null): any;

  static pick(target: any, other: any): any;

  /**
   * @return quoted value - i.e. if value is not a `null`, boolean or number then converts to string and wraps in
   *         double quotes and escapes special characters.
   */
  static quote(v: any): string | null;

  /**
   * @return quoted value - i.e. if value is not a `null`, boolean or number then converts to string and wraps in
   *         the specified quotes and escapes special characters.
   */
  static quote(v: any, quoteChar: number): string | null;

  static require(obj: Obj | null, whatRequiresValue: string | null, fieldThatIsRequired: string | null): void;

  static safeSpec(spec: any, type: Type | null): any;

  static setFieldValue(elem: any, fieldName: string | null, value: any): any;

  static setFieldValue(elem: any, fieldNames?: C3.Array<string | null>, values?: C3.Array<any>): any;

  /**
   * @param
   *        source Java class
   * @param descending
   *        if true use opposite of natural order
   * @param srcValueType
   *        value type of the source that is passed to sortKey lambda
   * @param sortKey
   *        lambda to extract sort key value
   * @return comparator of source keys.
   */
  static sortKeyComparatror(descending: boolean | null, srcValueType: ValueType | null, sortKey: λFunction<any, any> | null): λBiFunction<any, any, number | null> | null;

  static sum(a: any, b: any, rt: ValueType | null): any;

  /**
   * @return sum of two values;
   *         It is different from add such that the two arguments are of the same type
   */
  static sum(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * Optimized avg implementation when return type is a reference and only contains primitive fields
   */
  static avgPrimitiveFields(a: Stream<any> | null, sumRt: ValueType | null, countRt: ValueType | null): Pair<any, any> | null;

  /**
   * Optimized sum implementation when return type is a reference and only contains primitive fields
   */
  static sumPrimitiveFields(a: Stream<any> | null, sumRt: ValueType | null): any;

  /**
   * Produce a cumulative hash fingerprint by adding the specified prior fingerprint to the 64-bit hash fingerprint
   * of the specified value.
   */
  static sumFingerprint(f1: number, f2: number): number;

  /**
   * Produce a cumulative hash fingerprint by adding the specified prior fingerprint to the 64-bit hash fingerprint
   * of the specified value.
   *
   * @param f
   *        prior fingerprint
   * @param allIdentifiedRefFields
   *        whether to include reference field values present in memory
   * @param trackRecursiveRefs
   *        whether to track references to avoid infinite recursion on cyclic structures
   * @param traversedRefs
   *        previously traversed references
   * @return cumulative fingerprint
   */
  static sumFingerprint(f: number, v: any, allIdentifiedRefFields: boolean | null, trackRecursiveRefs: boolean | null, traversedRefs: SetBuilder<Obj | null> | null): number;

  static sumFingerprint(f: number, hcf: any, v: any, allIdentifiedRefFields: boolean | null, trackRecursiveRefs: boolean | null, traversedRefs: SetBuilder<Obj | null> | null): number;

  static toAnyFunc(value: any, type: LambdaType | null): any;

  static toBinary(bytes?: C3.Array<number>): any | null;

  static toBinary(value: string | null): any | null;

  static toBool(value: any): boolean;

  static toDbl(elementType: ValueType | null, n: any, failIfInvalid?: boolean): number | null;

  /**
   * Convert a c3 object to java runtime class
   *
   * @param vt
   *        value type of object.
   * @param v
   *        c3 object to convert.
   * @param failIfInvalid
   *        whether to throw error if the conversion fails.
   * @see {@link Ann.Java#runtimeClassName}
   */
  static toJavaRuntime(vt: ValueType | null, v: any, failIfInvalid?: boolean): any;

  static toJavaRuntime(vt: ValueType | null, v: any, converter: any, failIfInvalid?: boolean): any;

  static toJson(value: any): any | null;

  /**
   * Return the JSON that provides the canonical serialization of the specified C3 value.
   */
  static toTypedJson(value: any, actionRequirement: string | null): any | null;

  /**
   * @return value converted to a single line json string
   */
  static toJsonString(value: any): string | null;

  /**
   * Convert a c3 value to Rhino Java Script runtime class
   */
  static toJsRuntime(vt: ValueType | null, v: any): any;

  /**
   * Convert a primitive value to JavaScript literal syntax.
   */
  static toJsString(vt: ValueType | null, v: any): string | null;

  /**
   * Convert a primitive value to Python literal syntax.
   */
  static toPyString(vt: ValueType | null, v: any): string | null;

  /**
   * Convert any value into its native equivalent. If this is an instance that mixes **WithToNative**, that
   * method is called, otherwise the existing value is returned.
   */
  static toNative(value: any): any;

  /**
   * Convert any value into its native equivalent. If this is an instance that mixes **WithToNative**, that
   * method is called, otherwise the existing value is returned.
   *
   * In addition, instances of Obj are converted to plain JavaScript objects and Python dicts, containing only the
   * set field values.
   *
   *
   * In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
   * access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
   * exposed, copying if necessary.
   */
  static toNative(value: any, doNotCopy?: boolean): any;

  /**
   * Convert any value into a number. If the conversion is not possible, return `NaN` (double).
   */
  static toNumber(value: any): number | null;

  /**
   * Convert any value into a number. If the conversion is not possible, throw an exception if failIfInvalid is true
   * or return `NaN` (double) otherwise.
   */
  static toNumber(value: any, failIfInvalid?: boolean): number | null;

  static toObj(value: any, ths: ReferenceType | null, convertValue?: boolean, failIfInvalid?: boolean, for_?: string | null): Obj | null;

  static toObj(value: any, ths: ReferenceType | null, convertValue?: boolean, failIfInvalid?: boolean, for_?: string | null, invalidFieldHandler?: λBiConsumer<any, ObjBuilder<Obj | null> | null> | null): Obj | null;

  /**
   * @return value converted to a potentially multi-line json string with "pretty" indentation
   */
  static toPrettyJsonSTring(v: any): string | null;

  static toPrimitive(v: any, ths: PrimitiveType | null, failIfInvalid?: boolean, for_?: string | null): any;

  static valueToString(other: ValueType | null): string | null;

  /**
   * Converts a value to its string representation. Returns "null" for null values.
   *
   * @see #formatValue(Object) for display-friendly formatting with number formatting
   */
  static valueToString(value: any): string | null;

  /**
   * Formats a value for display. Returns empty string for null values.
   * Numbers are formatted with locale-specific grouping (e.g., "1,234,567").
   *
   * @see #valueToString(Object) for raw string conversion (returns "null" for null)
   */
  static formatValue(value: any): string | null;

  static unboxValue(value: any, failIfNone?: boolean): any;

  static unboxValue(value: Obj | null, failIfNone?: boolean): any;

  static unquote(v: any): any;

  static validateThisArg(thisArg: any, method: Method | null, overload: number): any;

  static validateThisArg(thisArg: any, mt: MethodType | null): any;

  static validateArg(arg: any, paramIndex: number): any;

  static validateSpec(spec: any, dflt: λSupplier<any> | null): any;

  /**
   * Prints provided values by prepending string with `prefix` and appending with `suffix` and by using `separator`
   * string to split the value text.
   */
  static valuesToString(prefix: string | null, separator: string | null, suffix: string | null, ...values: any[]): string | null;

  static visitPrimitive(value: any, visitor: Primitive | null): any;

  static visitValue(value: any, visitor: any): any;

  static comparator(): any;

  static abs(a: any): any;

  static neg(a: any): any;

  static invert(a: any): any;

  /**
   * @return sum of values while incrementing the count of values encountered
   */
  static sumCount(a: any, b: any, spec: OpSpec | null): any;

  static all(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  static and(a: any, b: any): any;

  static and(a: any, b: any, rt: ValueType | null): any;

  static and(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static or(a: any, b: any): any;

  static or(a: any, b: any, rt: ValueType | null): any;

  static or(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static add(a: any, b: any): any;

  static add(a: any, b: any, spec: OpSpec | null): any;

  static add(a: any, b: any, rt: ValueType | null): any;

  static add(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  static add(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static sub(a: any, b: any): any;

  static sub(a: any, b: any, spec: OpSpec | null): any;

  static sub(a: any, b: any, rt: ValueType | null): any;

  static sub(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  static sub(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static floorDiv(a: any, b: any): any;

  static floorDiv(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * @return generic floor division between numeric, Collection, and Obj types.
   */
  static floorDiv(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static mod(a: any, b: any): any;

  static mod(a: any, b: any, spec: OpSpec | null): any;

  static mod(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * @return generic modulo for numeric, Collection, and Obj types.
   */
  static mod(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static round(a: any): any;

  static div(a: any, b: any): any;

  static div(a: any, b: any, rt: ValueType | null): any;

  static div(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  static div(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  /**
   * This is different from the default implementation of `div` such that `null` is returned when `a` is null/empty.
   * It is kept like that to correctly implement the higher order functions which uses div() internally.
   * The default implementation, although fast, gives incorrect results for `null / b`.
   */
  static div(a: any, b: number): any;

  /**
   * @return "field count" of a provided value: primitives have 1 field, Obj has data fields and collection elements
   *         are considered fields.
   */
  static fieldCount(v: any): number;

  /**
   * @return "field count" of a provided collection: primitives have 1 field, Obj has data fields and collection
   *         elements
   *         are considered fields. Returns number of unique fields in the entire collection.
   */
  static collectionFieldCount(c: Iterable<any> | null): number;

  /**
   * @return field count at index in the provided value: primitives have only 1 field, Obj has data fields and
   *         collection elements are considered fields.
   */
  static fieldAt(v: any, fieldIndex: number): any;

  static mul(a: any, b: any): any;

  static mul(a: any, b: any, spec: OpSpec | null): any;

  static mul(a: any, b: any, rt: ValueType | null): any;

  static mul(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  static mul(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static pow(a: any, b: any): any;

  static pow(a: any, b: any, rt: ValueType | null): any;

  static pow(a: any, b: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * @return generic power(x, y) for numeric, Collection, and Obj types.
   */
  static pow(a: any, b: any, rt: ValueType | null, spec: OpSpec | null, primFunc: λTriFunction<any, any, ValueType | null, any> | null): any;

  static isNum(value: any): boolean;

  static isBinary(value: any): boolean;

  static isString(value: any): boolean;

  static isBool(value: any): boolean;

  static isDateTime(value: any): boolean;

  static isInt(value: any): boolean;

  /**
   * @return function for computing given UnaryOp
   */
  static opUnaryFunction(unaryOp: string | null, spec: OpSpec | null): λFunction<any, any> | null;

  /**
   * @return function for computing given AggOp
   */
  static opAggFunction(aggOp: string | null, spec: OpSpec | null, rt: ValueType | null): λBiFunction<any, any, any> | null;

  /**
   * @return return type of given aggregation operator to given operand types
   */
  static opAggReturnType(avt: ValueType | null, aggOp: string | null, spec: AggSpec | null): ValueType | null;

  /**
   * @return true if the value type is a reference type and all fields are primitives or fkey refs for optimizations
   *         for flat tables
   */
  static refTypeHasOnlyPrimitiveFields(rt: ValueType | null): boolean;

  /**
   * @return function for computing given BinaryOp
   */
  static opBinaryFunction(binaryOp: string | null, rt: ValueType | null, spec: OpSpec | null): λBiFunction<any, any, any> | null;

  /**
   * Recursively construct a map of column names to Value Type that represents the flatten
   * view of the provided Include Path and depth arguments.
   *
   * @param include
   *        The Include child currently being processed.
   * @param vt
   *        valueType of the current Field being traversed,
   * @param columnNamePrefix
   *        The current column name prefix at this level of traversal
   * @param depth
   *        The current depth value of the traversal
   * @param fieldnamesToValueType
   *        A mapping of column names to value type that will represent the final object flattened view
   */
  static opFlattenReturnTypeRecursive(include: Include | null, vt: ValueType | null, columnNamePrefix: string | null, depth: number, fieldnamesToValueType: MapBuilder<string | null, ValueType | null> | null): void;

  static opFlattenReturnType(avt: ValueType | null, includeFields: string | null, depth: number): ValueType | null;

  /**
   * Apply cartesian product to the input Array and merge the inner map Objects.
   * ex: child 1 is a collection, stores all returned value in a single row
   * child1 : [ [ map ] , [ map1 ] , [ map1 ] ]
   * child2 : [ [ map ] ]
   * do cartesian product
   * [ [ map , map ] ],
   * [ map , map ] ],
   * [ map , map ] ]
   * ]
   * merge each row as one map
   * [ map, ,
   * map, ,
   * mapm
   * ]
   *
   * @param arr
   *        An Array of Array each containing a map of fieldNames to field Content
   * @return an Array of Map each being a merger of all maps grouped together after the
   *         cartesian product
   */
  static mergeFlattenResults(arr?: C3.Array<any>): C3.Array<C3.Map<string | null, any>>;

  /**
   * The main data traversal function that will extract the data from each element recursively
   * and do the explode/flatten at every level. At each recursive step it returns an Array of
   * Map of field Name to Field Object value that contains new rows generated by the lower levels,
   * each flattened to match the object type created in opFlattenReturnType.
   *
   * @param include:
   *        The Include object currently being processed
   * @param vt:
   *        valueType of the current Field being traversed
   * @param fieldName:
   *        Field Name Being Traversed
   * @param e:
   *        Value of the FieldName with value type vt
   * @param columnNamePrefix:
   *        The current column name prefix at this level of traversal
   * @param depth
   *        The current depth value of the traversal
   * @return
   */
  static opFlattenTraverseValues(include: Include | null, vt: ValueType | null, fieldName: string | null, e: Obj | null, columnNamePrefix: string | null, depth: number): C3.Array<C3.Map<string | null, any>>;

  static opFlattenReturnValue(et: ValueType | null, rt: ValueType | null, e: Obj | null, includeFields: string | null, depth: number): C3.Array<Obj | null>;

  /**
   * @return return type of given binary operator application to given operand types
   */
  static opBinaryReturnType(avt: ValueType | null, bvt: ValueType | null, spec: OpSpec | null, binaryOp: string | null): ValueType | null;

  /**
   * @return new object that has value(s) replaced based on mask
   */
  static replace(element: any, mask: any, other: any): any;

  static fillMissing(element: any, value: any, rt: ValueType | null): any;

  /**
   * @return new object that has value(s) replaced based on mask
   */
  static fillMissing(element: any, value: any, rt: ValueType | null, spec: OpSpec | null): any;

  /**
   * @return primary key of a given value
   */
  static primaryKey(v: any): any;

  /**
   * @return true if provided value is "truthy"
   */
  static isTrue(v: any): boolean;

  /**
   * Return new instance of value with all references to old type replaced by new
   */
  static replaceType(v: any, old: Type | null, new_: Type | null): any;

  /**
   * Helper function for resolving final arguments of {@link Collection#slice(long, Long, Long)}.
   *
   * @param size
   *        a lambda that retrieves the size of the Collection to be operated on
   */
  static sliceArgs(pkg: Pkg | null, fromPos: number, toPos: number | null, stride: number | null, size: λSupplier<number | null> | null): Triple<number | null, number | null, number | null> | null;

  /**
   * @return `true` if value is Boxed
   */
  static isBoxed(v: any): boolean;

  /**
   * @return unboxed return type
   */
  static unboxReturn(v: any, returnType: ValueType | null): any;

  /**
   * @return TypeMeta for a provided java value
   */
  static toTypeMeta(t: any, pkg: Pkg | null, restriction: TypeMeta | null): TypeMeta | null;

  static toDouble(v: any): number;

  static toDouble(v: any, dflt: number): number;

  static toFloat(v: any): number;

  static toFloat(v: any, dflt: number): number;

  static toInt(v: any): number;

  static toInt(v: any, dflt: number): number;

  static toInt32(v: any): number;

  static toInt32(v: any, dflt: number): number;

  static toInt16(v: any): number;

  static toInt16(v: any, dflt: number): number;

  static toByte(v: any): number;

  static toByte(v: any, dflt: number): number;

  static toDateTime(v: any): DateTime | null;

  static inRange(value: any, minInclusive: any, maxExclusive: any): boolean;

  static versionIncMinor(versionStr: string | null, inc: number): string | null;

  /**
   * Return a native object in the current runtime that cannot be remoted. It should always have a different pointer
   * and not be natively equal to any other object. It must not be a valid value for any value type (other than
   * `native`). Its string representation should be the seed value.
   */
  static makeNative(seed: number): any;

  static eachValueRecursive(obj: Obj | null, action: λBiConsumer<ValueType | null, any> | null): void;
}


interface λFunction<T, R> {
  (t: T): R
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

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
