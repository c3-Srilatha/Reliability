// TypeScript definitions for the C3 type NativeCompat

/**
 * In order to convert between native language objects and made C3 instances, it's convenient to have simple
 * methods that behave consistently across languages and are available on the corresponding `ImplLanguage` type.
 * NativeCompat methods of the form `toNativeX` convert from a C3 value to the corresponding native value (e.g.
 * `toNativeObject`); those which are simply `toX` (no `Native` infix) convert from a native value 'to' the C3 value
 * specified (e.g. `toArray`).
 *
 * ```java
 * List<Long> list = new ArrayList<>();
 * list.add(1);
 * list.add(12);
 * Array<Long> a = Java.toArrayOfInt(list);
 * ```
 *
 * ```js
 * let a = Js.toArrayOfInt([1, 12]);
 * let b = Js.toNativeObject(Echo.echoJson({n: 42}));
 * b['n'] = 123
 * ```
 *
 * ```py
 * a = c3.Py.toArrayOfInt([1, 12])
 * ```
 *
 * ** `to` C3 converter rules **
 *  * If the native value cannot be made into constructed C3 values, empty values are returned.
 *  * If the target value is a collection and individual elements cannot be made, they will be substituted with `null`.
 * Thus only valid values are returned, unless the `failIfInvalid` parameter is true in which case an error is thrown.
 *
 * @see ImplLanguage
 *
 * @remarks this represents a value passed to a method that expects an instance of NativeCompat
 */
declare interface INativeCompat {
}

/**
 * In order to convert between native language objects and made C3 instances, it's convenient to have simple
 * methods that behave consistently across languages and are available on the corresponding `ImplLanguage` type.
 * NativeCompat methods of the form `toNativeX` convert from a C3 value to the corresponding native value (e.g.
 * `toNativeObject`); those which are simply `toX` (no `Native` infix) convert from a native value 'to' the C3 value
 * specified (e.g. `toArray`).
 *
 * ```java
 * List<Long> list = new ArrayList<>();
 * list.add(1);
 * list.add(12);
 * Array<Long> a = Java.toArrayOfInt(list);
 * ```
 *
 * ```js
 * let a = Js.toArrayOfInt([1, 12]);
 * let b = Js.toNativeObject(Echo.echoJson({n: 42}));
 * b['n'] = 123
 * ```
 *
 * ```py
 * a = c3.Py.toArrayOfInt([1, 12])
 * ```
 *
 * ** `to` C3 converter rules **
 *  * If the native value cannot be made into constructed C3 values, empty values are returned.
 *  * If the target value is a collection and individual elements cannot be made, they will be substituted with `null`.
 * Thus only valid values are returned, unless the `failIfInvalid` parameter is true in which case an error is thrown.
 *
 * @see ImplLanguage
 *
 * @remarks this represents a made instance of NativeCompat
 */
declare class NativeCompat {

  /**
   * Build a made array of the specified type from the specified native array or list. The elements are made by
   * making them as the element type of the specified array type. The made array corresponds to the specified
   * array type.
   */
  static toArray(v: any, type: ArrayType, failIfInvalid?: boolean): C3.Array<E | null>;

  /**
   * Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
   */
  static toArrayOfAny(v: any, failIfInvalid?: boolean): C3.Array<any>;

  /**
   * Build a made array of `double` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofDbl
   */
  static toArrayOfDbl(v: any, failIfInvalid?: boolean): C3.Array<number | null>;

  /**
   * Build a made array of `int` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofInt
   */
  static toArrayOfInt(v: any, failIfInvalid?: boolean): C3.Array<number | null>;

  /**
   * Build a made array of `string` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofStr
   */
  static toArrayOfStr(v: any, failIfInvalid?: boolean): C3.Array<string | null>;

  /**
   * Build a made map of the specified type from the specified native map or dictionary. The keys and values are
   * made by making them as the element type of the specified map type. The made map corresponds to the specified
   * map type.
   */
  static toMap(v: any, type: MapType, failIfInvalid?: boolean): C3.Map<K | null, V | null>;

  /**
   * Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
   * guessing the types.
   */
  static toMapOfAny(v: any, failIfInvalid?: boolean): C3.Map<any, any>;

  /**
   * Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
   * guessing the types.
   */
  static toMapOfStrToAny(v: any, failIfInvalid?: boolean): C3.Map<string | null, any>;

  /**
   * Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToDbl
   */
  static toMapOfStrToDbl(v: any, failIfInvalid?: boolean): C3.Map<string | null, number | null>;

  /**
   * Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToInt
   */
  static toMapOfStrToInt(v: any, failIfInvalid?: boolean): C3.Map<string | null, number | null>;

  /**
   * Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToStr
   */
  static toMapOfStrToStr(v: any, failIfInvalid?: boolean): C3.Map<string | null, string | null>;

  /**
   * Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
   * Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
   * an unrelated type, null is returned or an error is thrown.
   *
   * If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
   *
   * If the type mixes {@link StringSerializable}, then the string representation may be specified.
   *
   * @see Obj#make
   */
  static toObj(v: any, type: Type, failIfInvalid?: boolean): O | null;

  /**
   * Build a made set of the specified type from the specified native array or list. The elements are made by
   * making them as the element type of the specified set type. The made set corresponds to the specified
   * set type.
   */
  static toSet(v: any, type: SetType, failIfInvalid?: boolean): C3.Set<E | null>;

  /**
   * Build a made set of `double` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofDbl
   */
  static toSetOfDbl(v: any, failIfInvalid?: boolean): C3.Set<number | null>;

  /**
   * Build a made set of `int` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofInt
   */
  static toSetOfInt(v: any, failIfInvalid?: boolean): C3.Set<number | null>;

  /**
   * Build a made set of `string` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofStr
   */
  static toSetOfStr(v: any, failIfInvalid?: boolean): C3.Set<string | null>;

  /**
   * Build a made stream of the specified type from the specified native collection or iterator. The elements are made
   * by making them as the element type of the specified stream type. The made stream corresponds to the specified
   * stream type.
   */
  static toStream(v: any, type: StreamType, failIfInvalid?: boolean): Stream<E | null>;

  /**
   * Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
   * the type.
   */
  static toStreamOfAny(v: any, failIfInvalid?: boolean): Stream<any>;

  /**
   * Build a made stream of `double` from the specified native collection or iterator. The elements are made as
   * necessary.
   */
  static toStreamOfDbl(v: any, failIfInvalid?: boolean): Stream<number | null>;

  /**
   * Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
   */
  static toStreamOfInt(v: any, failIfInvalid?: boolean): Stream<number | null>;

  /**
   * Build a made stream of `string` from the specified native collection or iterator. The elements are made as
   * necessary.
   */
  static toStreamOfStr(v: any, failIfInvalid?: boolean): Stream<string | null>;

  /**
   * Construct a made value for the specified value type.
   *
   * @see ValueType#makeValue
   */
  static toValue(v: any, type: ValueType, failIfInvalid?: boolean): any;

  /**
   * Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
   * The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
   * is a no-op).
   */
  static toNativeObject(o: any): any;
}

