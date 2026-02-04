// TypeScript definitions for the C3 type Tuple

/**
 * Set of named or positional values.
 *
 * To get the {@link TupleType} from a tuple instance, use TupleType#ofTuple. In JavaScript and Python, the `$type`
 * property can also be used.
 *
 * @see TupleType
 *
 * @remarks this represents a value passed to a method that expects an instance of Tuple
 */
declare interface ITuple {
}

/**
 * Set of named or positional values.
 *
 * To get the {@link TupleType} from a tuple instance, use TupleType#ofTuple. In JavaScript and Python, the `$type`
 * property can also be used.
 *
 * @see TupleType
 *
 * @remarks this represents a made instance of Tuple
 */
declare class Tuple {

  /**
   * Use this method if you want to use a C3 iterator.
   * @return a C3 iterator of the elements of the collection
   */
  iter(): Iterator<any> | null;

  /**
   * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
   */
  _iter_(): any;

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
  static fromJson(json: any | null): Tuple | null;

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
  static fromJsonString(json: string | null): Tuple | null;

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
  static fromXmlString(xml: string | null): Tuple | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Tuple | null;

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
   * The closest native representation of the value.
   *
   * In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
   * access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
   * exposed, copying if necessary.
   *
   * @param doNotCopy return internal state without copying (unsafe access)
   */
  toNative(doNotCopy?: boolean): any;

  /**
   * Implements the `.` syntactic sugar in js and py.
   * @param name
   *           name associated with the desired attribute value.
   * @return the attribute value associated with the given attribute name
   */
  _field_(name: string): T | null;

  /**
   * Implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
   * @param names
   *         names associated with the desired attribute values.
   * @return the attribute values associated with the given attribute names
   */
  _fields_(names: C3.Array<string | null>): C3.Array<any>;

  /**
   * Implements the `.` auto-complete syntax in js and py.
   * @return list of all attribute names
   */
  _fieldNames_(): C3.Array<string | null>;

  /**
   * Implements the square bracket getter `obj[item]`.
   *
   * @param key
   *         item associated with the desired element.
   * @return the element associated with the given item
   */
  _item_(key: any): any;

  /**
   * Return true if the requested value is equal to one of the values in the tuple.
   */
  _contains_(key: any): boolean;

  /**
   * Implements the js `.length` property or py `len()` support.
   * @return the number of elements in this instance
   */
  _length_(): number;

  /**
   * Tuple field value by name. If field doesn't exit, returns null.
   */
  field(name: string | null): T | null;

  /**
   * Tuple field value by index. If not in range, returns null.
   */
  field(index: number): T | null;

  /**
   * Tuple field values by index.
   */
  fields(): C3.Array<any>;

  /**
   * Tuple field values by name.
   */
  fieldsByName(): C3.Map<string | null, any>;

  /**
   * New tuple with provided field set by name
   */
  withField(name: string | null, value: any, doNotConvert?: boolean): Tuple;

  /**
   * New tuple with provided field set by index
   */
  withField(index: number, value: any, doNotConvert?: boolean): Tuple;

  /**
   * Constructor for obtaining array of Tuple
   */
  static fromDataColumns(cols?: C3.Array<Data.Column | null>): C3.Array<Tuple | null>;

  /**
   * Constructs named tuple from fields provided as sequence of triples of field name, value type and value. E.g.
   * `Tuple.of("a", "string", "foo", "b", "int", 17)` produces tuple `{a: "foo", b: 17}` of type `{a: string, b: int}`
   */
  static of(...fields: any[]): Tuple | null;

  /**
   * Returns an array containing all the fields of a named tuple
   */
  fieldNames(): C3.Array<string | null>;

  /**
   * Type of this tuple
   */
  get type(): TupleType;
}

