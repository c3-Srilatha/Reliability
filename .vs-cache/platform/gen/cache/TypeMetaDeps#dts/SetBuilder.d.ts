// TypeScript definitions for the C3 type SetBuilder

/**
 * Builder of sets.
 *
 * @see Set#buidlerOf
 * @see Set#toBuidler
 * @see SetType#makeBuidler
 *
 * @remarks this represents a value passed to a method that expects an instance of SetBuilder
 */
declare interface ISetBuilder<E> {
}

/**
 * Builder of sets.
 *
 * @see Set#buidlerOf
 * @see Set#toBuidler
 * @see SetType#makeBuidler
 *
 * @remarks this represents a made instance of SetBuilder
 */
declare class SetBuilder<E> {

  /**
   * Construct an instance with initial state.
   */
  static make(): SetBuilder<E>;

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
  replaceType(old: Type, new_: Type): SetBuilder<E>;

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
  static fromJson(json: any | null): SetBuilder<E> | null;

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
  static fromJsonString(json: string | null): SetBuilder<E> | null;

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
  static fromXmlString(xml: string | null): SetBuilder<E> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SetBuilder<E> | null;

  /**
   * Adds new element to this builder.
   */
  e(e: E | null): SetBuilder<E>;

  /**
   * Adds new generic element to this builder specifying if the given value should be converted or not
   */
  e(e: any, doNotConvert: boolean): SetBuilder<E>;

  /**
   * Adds new element to this builder.
   */
  add(e: E | null): SetBuilder<E>;

  /**
   * Adds new element to this builder converting value to element type.
   */
  addConvertValue(e: any): SetBuilder<E>;

  /**
   * Puts new element collection builder in this map builder. Assumes this a builder of map of collections
   */
  addCollection(elemBuilder: λConsumer<CollectionBuilder<any> | null>): SetBuilder<E>;

  /**
   * Puts new element reference builder in this map builder. Assumes this a builder of map of references
   */
  addRef(elemBuilder: λConsumer<ObjBuilder<Obj | null> | null>): SetBuilder<E>;

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
  addAll(...elements: E | null[]): SetBuilder<E>;

  /**
   * Adds all elements from provided collection to this builder.
   */
  addAll(elements: Collection<E> | null): SetBuilder<E>;

  /**
   * Adds all elements from provided collection of Data to this builder.
   */
  addAll(elements: Data | null): SetBuilder<E>;

  /**
   * Adds all elements from provided collection to this builder also converting values as needed.
   */
  addAllConvertValue(elements: Collection<any> | null): SetBuilder<E>;

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
  clear(): SetBuilder<E>;

  /**
   * Enforce uniqueness of elements in this builder.
   */
  unique(): SetBuilder<E>;

  /**
   * Preserve insertion order in this builder and enable #at method on built collection. Note that this enabled #at
   * method in a build collection.
   */
  index(): SetBuilder<E>;

  /**
   * The current number of elements in this builder.
   */
  size(): number;

  /**
   * Insert elements in a natural sorted order in this builder. If element type does not have a natural sort order then
   * preserve insertion order. Note that this enabled #at method in a build collection.
   */
  sort(): SetBuilder<E>;

  /**
   * Insert elements in opposite of natural sorted order in this builder.
   */
  sort(descending?: boolean): SetBuilder<E>;

  /**
   * Insert elements in order based on provided comparator.
   */
  sort(comparator: λBiFunction<E | null, E | null, number | null>): SetBuilder<E>;

  /**
   * Insert elements in order based on provided comparator.
   */
  sort(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): SetBuilder<E>;

  /**
   * Enforce constraints when inserting element in this builder.
   */
  constrain(): SetBuilder<E>;

  /**
   * Ensure this builder can be used concurrently from multiple threads.
   */
  synchronize(): SetBuilder<E>;

  /**
   * Builds temporary set representing current state of the builder. Unlike #build collection may not be packed / optimized.
   * It is recommended to use #current in the process of building the collection and only call #build once done.
   */
  current(): C3.Set<E | null>;

  /**
   * Builds final optimized collection for this builder. While it is allowed to call #build more then once if there is such
   * need then #current is more advisable.
   */
  build(): C3.Set<E | null>;

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
  collectionType(): SetType;

  /**
   * @return value type of elements in this collection.
   */
  elementType(): ValueType;

  /**
   * Add the options specified in the JSON serialized ArrayBuilder to the specified builder.
   */
  static _withJsonOptions(builder: CollectionBuilder<any>, json: any): CollectionBuilder<any>;
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
