// TypeScript definitions for the C3 type Jsn

/**
 * Helper functions for manipulating JSON nodes and converting to/from C3 values. JSON values are implemented on
 * dedicated `JsonNode` for Java and various native objects for JavaScript and Python.
 *
 * @remarks this represents a value passed to a method that expects an instance of Jsn
 */
declare interface IJsn {
}

/**
 * Helper functions for manipulating JSON nodes and converting to/from C3 values. JSON values are implemented on
 * dedicated `JsonNode` for Java and various native objects for JavaScript and Python.
 *
 * @remarks this represents a made instance of Jsn
 */
declare class Jsn {

  static serialize(java: any): string | null;

  /**
   * Create a JSON array from objects, which can be JSON nodes or anything convertible.
   */
  static array(...elements: any[]): any | null;

  static binaryToValue(json: any | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Create a JSON boolean node from the value.
   */
  static bool(v?: boolean): any | null;

  static booleanToValue(json: any | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Builds JsonArray by creating new builder and passing that to provided lambda.
   */
  static buildArray(builder: λConsumer<Builder<Buildable | null> | null> | null): any | null;

  /**
   * Builds JsonObject by creating new builder and passing that to provided lambda.
   */
  static buildObject(builder: λConsumer<Builder<Buildable | null> | null> | null): any | null;

  /**
   * @return json array containing all json lines
   */
  static collect(jsonLines?: Stream<any | null>): any | null;

  static unboxJson(jsn: any | null, returnNullIfNot: boolean | null, expectedType: ValueType | null): any | null;

  /**
   * Return a JSON array made from the array/set or an object from a map.
   */
  static fromCollection(c: Collection<any> | null): any | null;

  /**
   * Return a JSON array made from the array/set or an object from a map.
   */
  static fromCollection(c: Collection<any> | null, include: Include | null, exclude: Exclude | null): any | null;

  /**
   * Return a JSON array made from the array/set or an object from a map.
   */
  static fromCollection(c: Collection<any> | null, typed?: boolean): any | null;

  static fromCollection(c: Collection<any> | null, actionRequirement: string | null): any | null;

  static fromCollection(c: Collection<any> | null, actionRequirement: string | null, typed?: boolean): any | null;

  /**
   * Check whether to omit the "type" field when serializing object v using value type `vt`.
   * Returns true if v has value type of `vt` and is not a subtype
   */
  static omitTypeField(v: any, vt: ValueType): boolean;

  static fromThisArgKwargs(type: string | null, action: string | null, thisArg: any | null, args: any | null, kwargs: any | null): any | null;

  /**
   * @return a JSON node from value and expected ValueType
   */
  static fromValue(value: any, valueType: ValueType | null): any | null;

  /**
   * @return a JSON node from the value, including and excluding certain Obj fields.
   */
  static fromValue(value: any, valueType: ValueType | null, include: Include | null, exclude: Exclude | null): any | null;

  /**
   * @return a JSON node from the value for the specified actionRequirement.
   */
  static fromValue(value: any, valueType: ValueType, actionRequirement: string | null): any | null;

  static fromValueUntyped(value: any): any | null;

  /**
   * Guess the most likely value type from a JSON node.
   */
  static guessValueType(json: any | null, pkg: Pkg | null): ValueType | null;

  /**
   * Determine if the JSON node represents null.
   */
  static isNull(json: any | null): boolean;

  /**
   * Determine if the JSON node represents and empty value. this includes `null`, empty arrays and objects and
   * empty text nodes.
   */
  static isEmpty(json: any | null): boolean;

  /**
   * Build JSON structure from the specified value. These may be native values that are already the natural
   * representation of JSON structure (JavaScript and Python) or may be C3 values that are naturally convertable
   * (Java). In either case, the intention is to produce simple JSON, not necessarily the format for serialization.
   */
  static make(from: any): any | null;

  /**
   * Apply the mapper lambda recursively to elements of JSON arrays and objects.
   */
  static map(json: any | null, mapper: λFunction<any | null, any | null>): any | null;

  static merge(initial: any | null, changes: any | null, deep?: boolean): any | null;

  /**
   * Merge the two object or array nodes, applying the changes in the second on top of the first and returning a
   * new object with the result. The passed-in objects are unchanged.
   *
   * @param initial
   *        source object
   * @param changes
   *        object with changes to apply
   * @param deep
   *        if true, merge rather than replace deep structure
   * @param doNotMergeArrays
   *        if true, instead of merging both arrays, just use 'changes'
   * @return new object with merge result
   */
  static merge(initial: any | null, changes: any | null, deep?: boolean, doNotMergeArrays?: boolean): any | null;

  static merge(a: any | null, b: any | null, pathMergeSpecs: C3.Map<string | null, string | null>, parentPath: string | null): any | null;

  /**
   * @return merged json based on collection of jsons
   */
  static merge(elements: Collection<any | null> | null): any | null;

  /**
   * Return the JSON `null` node.
   */
  static null_(): any | null;

  /**
   * Return a JSON number node for the corresponding numeric value.
   */
  static number(v: number): any | null;

  /**
   * Return a JSON object node for the pairs of string keys and values.
   */
  static object(...nameValuePairs: any[]): any;

  /**
   * Pick out the type from a {@link Serializable#toJson} object, if any.
   *
   * @param json
   *        serialized object instance
   * @param baseType
   *        the expected base type (if known)
   * @param pkg
   *        package to resolve within
   * @return type referenced in the JSON or the baseType
   */
  static deserType(json: any | null, baseType: Type | null, pkg: Pkg | null): TypeMeta | null;

  static objectWithTypeToValueOrObj(json: any | null, pkg: Pkg | null): any;

  static objectToMap(json: any | null, mapType: MapType | null, failIfInvalid?: boolean, for_?: string | null): C3.Map<any, any>;

  static objectToSerializable(json: any | null, type: Type | null, pkg: Pkg | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * @return deserialized Value from Json using either type defined in either $type or type field
   */
  static objectToValue(json: any | null, pkg: Pkg | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Reads string serialized content into a stream of Objs. If spec.isObjList is false, this method expects content in
   * array format, where each element is a serialized Obj; alternatively, a single instance of an Obj is also
   * acceptable. If spec.isObjList is true, then this method expects content in ObjList format, meaning a json object
   * with two fields: "data", an array where each element is a serialized Obj, and "type", the type shared by all Objs
   * in the aforementioned array.
   */
  static readObjs(content: string | null, spec: FileObjsOperSpec | null): Stream<Obj | null>;

  /**
   * @return type in json serialized instance of WithType
   */
  static readType(withTypeJson: any | null, pkg: Pkg | null, failIfMissing?: boolean): Type | null;

  /**
   * @return json for "type" field in json serialized instance
   */
  static typeJson(withTypeJson: any | null): any | null;

  /**
   * Parse the serialized JSON from a string into a node tree.
   */
  static parse(json: string | null, failIfInvalid?: boolean): any | null;

  /**
   * Parse a JSON value as JavaScript syntax.
   *
   * @param json
   *        string of JSON data
   * @return JsonNode assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
   */
  static parseJS(json: string | null): any | null;

  /**
   * Parse a JSON array (`[…]`).
   *
   * @param json
   *        string of JSON array data
   * @return JsonObject assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
   */
  static parseJsArray(json: string | null): any | null;

  /**
   * Parse a JSON object (`{…}`).
   *
   * @param json
   *        string of JSON object data
   * @return JsonObject assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
   */
  static parseJsObject(json: string | null): any | null;

  /**
   * @param json
   * @return JsonNode assuming strict JSON like none of unquoted fields, comments, single quotes or trailing commas
   */
  static parseStrict(json: string | null): any | null;

  static printObj(obj: Obj | null, withType?: boolean, pretty?: boolean, js?: boolean): string | null;

  /**
   * Quotes every text node in the json using a single quote.
   * I.e. { "a" : "b" } -> { "'a'" : "'b'" }
   */
  static quote(json: any | null): any | null;

  /**
   * Quotes every text node in the json, specifying the quote character.
   * I.e. { "a" : "b" } -> { "'a'" : "'b'" }
   */
  static quote(json: any | null, quote: number): any | null;

  /**
   * Remove structure in the second object or array node from the first, returning a new object with the result.
   * The passed-in objects are unchanged.
   *
   * @param initial
   *        source object
   * @param changes
   *        object with elements to remove
   * @return new object with result
   */
  static remove(initial: any | null, changes: any | null): any | null;

  /**
   * Create a text JSON node from the string value.
   */
  static text(text: string | null): any | null;

  /**
   * Create a text JSON node from the binary data.
   */
  static binary(data: any | null): any | null;

  /**
   * Convert the JSON node into an array of the specified type. If the node is an JSON array node, convert each
   * element, otherwise convert the value and return an array of one element.
   */
  static toArray(json: any | null, arrayType: ArrayType, failIfInvalid?: boolean): C3.Array<any>;

  /**
   * Convert the JSON node to a binary value. If the node is text, decode as Base64.
   */
  static toBinary(json: any | null, binType: BinaryType | null, failIfInvalid?: boolean): any | null;

  static toBool(json: any | null): boolean;

  static toBool(json: any | null, boolType: BooleanType, failIfInvalid?: boolean): boolean;

  /**
   * Convert the JSON number node to a 8-bit integer value.
   */
  static toByte(json: any | null, byteType: ByteType | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON node into a collection of the specified type. For array/set, if the node is an JSON array node,
   * convert each element. For maps, if the node is a JSON object, convert the keys/properties. Otherwise convert the
   * value and return a collection of one element.
   */
  static toCollection(json: any | null, collType: CollectionType, failIfInvalid?: boolean, for_?: string | null): Collection<any> | null;

  /**
   * Print the JSON object and return the result as a string with the minimal amount of whitespace.
   *
   * @param node
   *        JSON node
   * @return string
   */
  static toCompactString(node: any | null): string | null;

  /**
   * Produce a YAML string from the JSON tree.
   */
  static toYamlString(node: any | null): string | null;

  /**
   * Print the JSON object and return the result as a string with the minimal amount of whitespace.
   * **NOTE** for JavaScript and Python, Jsn.stringify produces _typed_ JSON. For untyped, use the
   * native JSON.stringify.
   *
   * @param node
   *        JSON node
   * @return string
   */
  static stringify(node: any | null): string | null;

  /**
   * Convert the JSON number node to a parsed exact numeric value.
   */
  static toBigInt(json: any | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON text node to a parsed `datetime` value.
   */
  static toDateTime(json: any | null, dtType: DateTimeType, failIfInvalid?: boolean): DateTime | null;

  /**
   * Convert the JSON number node to a parsed exact numeric value.
   */
  static toDecimal(json: any | null, ths: DecimalType | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON number node to a double-precision value.
   */
  static toDouble(json: any | null, ths: DoubleType | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON node for the specified field type.
   */
  static toFieldValue(json: any | null, ft: FieldType, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Convert the JSON number node to a single-precision value.
   */
  static toFloat(json: any | null, ths: FloatType | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON number node to 64-bit integer value.
   */
  static toInt(json: any | null): number | null;

  /**
   * Convert the JSON number node to 64-bit integer value.
   */
  static toInt(json: any | null, intType: IntType | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON number node to 16-bit integer value.
   */
  static toInt16(json: any | null): number | null;

  /**
   * Convert the JSON number node to 16-bit integer value.
   */
  static toInt16(json: any | null, int16Type: Int16Type | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON number node to 32-bit integer value.
   */
  static toInt32(json: any | null): number | null;

  /**
   * Convert the JSON number node to 32-bit integer value.
   */
  static toInt32(json: any | null, int32Type: Int32Type | null, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON object node to a `map`.
   */
  static toMap(json: any | null): C3.Map<any, any>;

  /**
   * Convert the JSON object node to a `map`.
   *
   * @param json
   *        JSON object node
   * @param indexed
   *        if true, the returned map keys will be in the same order as the JSON object
   */
  static toMap(json: any | null, indexed?: boolean): C3.Map<any, any>;

  /**
   * Convert the JSON object node to a map of the specified type.
   */
  static toMap(mapType: MapType, json: any | null, failIfInvalid?: boolean): C3.Map<string | null, any>;

  /**
   * Convert the JSON object node to a number of the specified type.
   */
  static toNumber(json: any | null, numberType: NumberType, failIfInvalid?: boolean): number | null;

  /**
   * Convert the JSON node into an Obj instance of the specified type.
   */
  static toObj(json: any | null, type: Type, convertValue?: boolean, failIfInvalid?: boolean, for_?: string | null, invalidFieldHandler?: λBiConsumer<any, ObjBuilder<Obj | null> | null> | null): any;

  /**
   * Convert the JSON node into a `set`.
   */
  static toSet(setType: SetType | null, value: any | null, convertValue?: boolean, failIfInvalid?: boolean): C3.Set<any>;

  /**
   * Convert the JSON node to a string value. If this is a text node, return the text value otherwise return the
   * JSON representation.
   */
  static toStr(json: any | null): string | null;

  static toStrUnbox(json: any | null): string | null;

  /**
   * Process the JSON node as a `stream`.
   */
  static toStream(json: any | null): Stream<any>;

  /**
   * Process the JSON node as a stream of the specified type.
   */
  static toStream(ths: StreamType, value: any | null, failIfInvalid?: boolean): Stream<any>;

  /**
   * Build a TypeMeta instance from the JSON representation.
   */
  static toTypeMeta(pkg: Pkg | null, typeJson: any | null, failIfInvalid?: boolean): TypeMeta | null;

  /**
   * Deserialize a Type from the JSON representation.
   */
  static toType(pkg: Pkg | null, typeJson: any | null, failIfInvalid?: boolean): Type | null;

  /**
   * Deserialize a ValueType from the JSON representation.
   */
  static toValueType(pkg: Pkg | null, valueTypeJson: any | null, failIfInvalid?: boolean): ValueType | null;

  /**
   * Convert the JSON node into its natural C3 value.
   */
  static toValue(json: any | null): any;

  static toValue(json: any | null, pkg: Pkg | null): any;

  static toValue(json: any | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Convert the JSON node into the specified type.
   * WARNING: DO NOT ADD ANY CODE HERE BUT SEE ValueType.valueFromJson WHERE YOU SHOULD BE ADDING CODE
   */
  static toValue(json: any | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null, allowUnbox?: boolean): any;

  /**
   * Traverse one or more levels into the specified object and return the named value. If any of the intermediate
   * values are null or non-objects, null is returned. Paths are dot-separated and may contain array indexes as well.
   * They may even contain CSS-style selectors for field values within objects such as
   * `fields[name=toString].valueType`.
   */
  static traverse(top: any | null, path: string): any | null;

  /**
   * Traverse one or more levels into the specified object and return the named value if it is of the expected node
   * type.
   */
  static traverse(top: any | null, path: string, expected: any): any;

  /**
   * Parse the boxed JSON object with `type` and `value` keys and convert the value according to the type.
   */
  static unbox(json: any | null, pkg: Pkg | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Removes ' and " quotes at the beginning and end of all quoted text nodes in the json.
   * I.e. [ "a" : "'b'" ] => [ "a" : "b" ]
   *
   * @see #quote
   */
  static unquote(annotations: any | null): any | null;

  static onlyJsonObject(ths: any | null): any | null;

  static typeSerName(json: any | null): string | null;

  static with(json: any | null, nameOrIndex: any, value: any | null): any | null;

  static without(json: any | null, nameOrIndex: any | null): any | null;

  static insertAt(json: any | null, nameOrIndex: any, value: any | null): any | null;

  static removeAt(json: any | null, nameOrIndex: any | null): any | null;

  static numOrStr(numOrStr: any | null, failIfNot?: boolean): any;

  /**
   * Removes secret fields from a JSON node.
   * This method traverses the given JSON node and removes any fields that are marked as secret.
   *
   * @param json
   *        The JSON node to sanitize.
   * @param type
   *        the type of the JsonNode which we are operating on.
   * @param onErrorReturnNull
   *        If true, return null if an error occurs while sanitizing the JSON node. If false, return the original JSON
   * @return A new JSON node with secret fields removed, or null if the input JSON node is null.
   */
  static removeSecrets(json: any | null, type: string | null, onErrorReturnNull?: boolean): any | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
