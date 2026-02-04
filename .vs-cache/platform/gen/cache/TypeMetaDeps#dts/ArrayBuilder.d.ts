// TypeScript definitions for the C3 type ArrayBuilder

/**
 * Builder of arrays.
 *
 * @see Array#buidlerOf
 * @see Array#toBuidler
 * @see ArrayType#makeBuidler
 *
 * @remarks this represents a value passed to a method that expects an instance of ArrayBuilder
 */
declare interface IArrayBuilder<E> {
}

/**
 * Builder of arrays.
 *
 * @see Array#buidlerOf
 * @see Array#toBuidler
 * @see ArrayType#makeBuidler
 *
 * @remarks this represents a made instance of ArrayBuilder
 */
declare class ArrayBuilder<E> {

  /**
   * Construct an instance with initial state.
   */
  static make(): ArrayBuilder<E>;

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
  replaceType(old: Type, new_: Type): ArrayBuilder<E>;

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
   * Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
   * `toJson().serialize()`.
   *
   * @return JSON object as string
   */
  toJsonString(): string;

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
  static fromJson(json: any | null): ArrayBuilder<E> | null;

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
  static fromJsonString(json: string | null): ArrayBuilder<E> | null;

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
  static fromXmlString(xml: string | null): ArrayBuilder<E> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ArrayBuilder<E> | null;

  /**
   * Adds new element to this builder.
   */
  e(e: E | null): ArrayBuilder<E>;

  /**
   * Adds new generic element to this builder specifying if the given value should be converted or not
   */
  e(e: any, doNotConvert: boolean): ArrayBuilder<E>;

  /**
   * Adds new element to this builder.
   */
  add(e: E | null): ArrayBuilder<E>;

  /**
   * Adds new element to this builder converting value to element type.
   */
  addConvertValue(e: any): ArrayBuilder<E>;

  /**
   * Puts new element collection builder in this map builder. Assumes this a builder of map of collections
   */
  addCollection(elemBuilder: λConsumer<CollectionBuilder<any> | null>): ArrayBuilder<E>;

  /**
   * Puts new element reference builder in this map builder. Assumes this a builder of map of references
   */
  addRef(elemBuilder: λConsumer<ObjBuilder<Obj | null> | null>): ArrayBuilder<E>;

  /**
   * Adds new element to this builder if not already present and return true if element was added
   */
  addIfMissing(e: E | null): boolean;

  /**
   * Adds new element to this builder if not already present based on provided predicate and return true if element was
   * added
   */
  addIfMissing(e: E | null, predicate: λPredicate<E | null>): boolean;

  /**
   * Adds new elements to this builder.
   */
  addAll(...elements: E | null[]): ArrayBuilder<E>;

  /**
   * Adds all elements from provided collection to this builder.
   */
  addAll(elements: Collection<E> | null): ArrayBuilder<E>;

  /**
   * Adds all elements from provided collection of Data to this builder.
   */
  addAll(elements: Data | null): ArrayBuilder<E>;

  /**
   * Adds all elements from provided collection to this builder also converting values as needed.
   */
  addAllConvertValue(elements: Collection<any> | null): ArrayBuilder<E>;

  /**
   * Returns true if this builder contains the specified element.
   */
  contains(e: E | null): boolean;

  /**
   * Removes all occurrences of element from this builder and returns count of elements removed
   */
  remove(e: E | null): number;

  /**
   * Removes all occurrences of elements from this builder based on provided criteria and returns count of elements
   * removed
   */
  remove(predicate: λPredicate<E | null>): number;

  /**
   * Removes all occurrences of elements from this builder based on provided criteria and returns removed elements
   */
  take(predicate: λPredicate<E | null>): C3.Array<E | null>;

  /**
   * Replaces element if present based on provided predicate. If indexed, replacements should be in the same order
   * as what they replaced. If not indexed, replacement can be done in any order.
   */
  replace(e: E | null, predicate: λPredicate<E | null>): number;

  /**
   * Merges new element to existing if present based on provided predicate or adds new element and returns number of
   * elements merged
   */
  merge(e: E | null, predicate: λPredicate<E | null>): number;

  /**
   * Clears contents of this builder.
   */
  clear(): ArrayBuilder<E>;

  /**
   * Enforce uniqueness of elements in this builder.
   */
  unique(): ArrayBuilder<E>;

  /**
   * Preserve insertion order in this builder and enable #at method on built collection. Note that this enabled #at
   * method in a build collection.
   */
  index(): ArrayBuilder<E>;

  /**
   * The current number of elements in this builder.
   */
  size(): number;

  /**
   * Insert elements in a natural sorted order in this builder. If element type does not have a natural sort order then
   * preserve insertion order. Note that this enabled #at method in a build collection.
   */
  sort(): ArrayBuilder<E>;

  /**
   * Insert elements in opposite of natural sorted order in this builder.
   */
  sort(descending?: boolean): ArrayBuilder<E>;

  /**
   * Insert elements in order based on provided comparator.
   */
  sort(comparator: λBiFunction<E | null, E | null, number | null>): ArrayBuilder<E>;

  /**
   * Insert elements in order based on provided comparator.
   */
  sort(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): ArrayBuilder<E>;

  /**
   * Enforce constraints when inserting element in this builder.
   */
  constrain(): ArrayBuilder<E>;

  /**
   * Ensure this builder can be used concurrently from multiple threads.
   */
  synchronize(): ArrayBuilder<E>;

  /**
   * Builds temporary set representing current state of the builder. Unlike #build collection may not be packed / optimized.
   * It is recommended to use #current in the process of building the collection and only call #build once done.
   */
  current(): C3.Array<E | null>;

  /**
   * Builds final optimized collection for this builder. While it is allowed to call #build more then once if there is such
   * need then #current is more advisable.
   */
  build(): C3.Array<E | null>;

  /**
   * @return if the current builder is validated
   */
  validated(): boolean;

  /**
   * @return true if this builder has no elements
   */
  isEmpty(): boolean;

  /**
   * @return value type of this collection.
   */
  collectionType(): ArrayType;

  /**
   * @return value type of elements in this collection.
   */
  elementType(): ValueType;

  /**
   * Add the options specified in the JSON serialized ArrayBuilder to the specified builder.
   */
  static _withJsonOptions(builder: CollectionBuilder<any>, json: any): CollectionBuilder<any>;

  /**
   * Sets element at provided index.
   */
  set(index: number, e: E | null): ArrayBuilder<E>;

  /**
   * Sets element at provided index converting value if needed.
   */
  setConvertValue(index: number, e: any): ArrayBuilder<E>;

  /**
   * Inserts element at provided index.
   */
  insertAt(index: number, e: E | null): ArrayBuilder<E>;

  /**
   * Inserts element at provided index converting value if needed.
   */
  insertAtConvertValue(index: number, e: any): ArrayBuilder<E>;

  /**
   * Replaces element at provided index.
   */
  replaceAt(index: number, e: E | null): ArrayBuilder<E>;

  /**
   * Replaces element at provided index converting value if needed.
   */
  replaceAtConvertValue(index: number, e: any): ArrayBuilder<E>;

  /**
   * Removes element at provided index.
   */
  removeAt(index: number): ArrayBuilder<E>;

  /**
   * Removes element at provided index and returns it.
   */
  takeAt(index: number): E | null;

  /**
   * Removes all elements before #fromIndex, leaving only elements starting at #fromIndex in the builder.
   * Positive value of #fromIndex is relative to the first position in the builder.
   * Negative value of #fromIndex is relative to last position.
   */
  slice(fromIndex: number): ArrayBuilder<E>;

  /**
   * Removes elements before #fromIndex and after #toIndex (inclusive), leaving only elements starting at #fromIndex
   * and up to (exclusive) #toIndex in the builder.
   * Positive index values are relative to the first position in the builder.
   * Negative index values are relative to last position.
   * If both #fromIndex and #toIndex are 0, no elements are removed.
   */
  slice(fromIndex: number, toIndex: number): ArrayBuilder<E>;

  /**
   * Removes specified elements and return an array of them. This behaves like the JavaScript `Array.splice()` function
   * with a single argument.
   *
   * @param start index at which to start removing. If negative, treated as relative to the size.
   * @return array of elements that were remove
   *
   * @see #slice
   */
  splice(start: number): Array<E> | null;

  /**
   * Removes or replaces specified elements and return an array of them. This behaves like the JavaScript
   * `Array.splice()` function with 2 or more arguments.
   *
   * @param start index at which to start removing. If negative, treated as relative to the size.
   * @param count number of elements to remove, default the remainder of the collection
   * @param items values that replace in the removed elements
   * @return array of elements that were remove/replaced
   *
   * @see #slice
   */
  splice(start: number, count?: number | null, ...items: E | null[]): Array<E> | null;

  /**
   * Sets size of resulting array by adding empty elements or removing extra elements.
   */
  setSize(size: number): ArrayBuilder<E>;

  /**
   * Fills the builder with the specified value. This behaves like the JavaScript `Array.fill()` function.
   *
   * @param value the value to fill with
   * @param start the index to start with, default 0. If negative, treated as relative to the size.
   * @param end the index (exclusive) to end before, default end of builder. If negative, treated as relative to the size.
   * @return the same builder
   */
  fill(value: E | null, start?: number | null, end?: number | null): ArrayBuilder<E> | null;

  /**
   * Reverses the order of all elements in the builder so the old first is the new last element.
   * @return the same builder
   */
  reverse(): ArrayBuilder<E> | null;

  /**
   * Remove the last element from the builder and return it.
   *
   * @param failIfEmpty if true, throw an error if there are no elements
   * @return the last element or null if empty
   */
  pop(failIfEmpty?: boolean): E | null;

  /**
   * Add the specified elements to the end of the builder.
   *
   * @param elements new elements to add to the builder
   * @return the new length of the builder
   */
  push(...elements: E | null[]): number;

  /**
   * Remove the first element from the builder and return it.
   *
   * @param failIfEmpty if true, throw an error if there are no elements
   * @return the first element or null if empty
   * @see #pop
   */
  shift(failIfEmpty?: boolean): E | null;

  /**
   * Add the specified elements to the start of the builder.
   *
   * @param elements new elements to add to the builder
   * @return the new length of the builder
   * @see #push
   */
  unshift(...elements: E | null[]): number;

  /**
   * Gets element at provided index.
   */
  at(index: number): E | null;
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
