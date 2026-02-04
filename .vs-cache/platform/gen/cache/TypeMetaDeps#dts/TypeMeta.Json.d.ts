// TypeScript definitions for the C3 type TypeMeta.Json

/**
 * Structure holding all the specific details of a built C3 Type for an efficient loading at execution time.
 *
 * This structure is persisted as `<#parentTypeMeta name>.json` file in the `gen/cache/` folder of a C3 Pkg artifact.
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeMeta.Json
 */
declare namespace TypeMeta {
  export interface IJson {
  }
}

/**
 * Structure holding all the specific details of a built C3 Type for an efficient loading at execution time.
 *
 * This structure is persisted as `<#parentTypeMeta name>.json` file in the `gen/cache/` folder of a C3 Pkg artifact.
 *
 * @remarks this represents a made instance of TypeMeta.Json
 */
declare namespace TypeMeta {
  export class Json {

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
     * Construct instance from json.
     */
    static fromJson(json: any | null): TypeMeta.Json | null;

    /**
     * Construct instance from json.
     */
    static fromJson(json: any, parentTypeMeta: TypeMeta): Typesys.Json;

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
    static fromJsonString(json: string | null): TypeMeta.Json | null;

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
    static fromXmlString(xml: string | null): TypeMeta.Json | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): TypeMeta.Json | null;

    /**
     * Name of the {@TypeMeta type} of instance this json represents.
     */
    get typesysTypeName(): string;

    /**
     * json representation of all fields of the instance of #typesysTypeMeta.
     */
    get fieldsJson(): C3.Map<string | null, any | null>;

    /**
     * All precomputed methods serialized as map with value being string serialized representation of a single
     * method result(s).
     *
     * String serialized json is used to avoid deep json deser overhead and to parse individual method results lazily.
     */
    get precomputedMethodsJson(): C3.Map<string | null, string | null>;

    /**
     * {@TypeMeta type} of instance this json represents.
     */
    typesysTypeMeta(): TypeMeta;

    /**
     * Parent {@TypeMeta type} of this json. When #typesysTypeMeta is TypeMeta C3 type then #parentTypeMeta is same.
     */
    parentTypeMeta(): TypeMeta | null;

    /**
     * All precomputed methods serialized as map with value being string serialized representation of a single
     * method result(s).
     *
     * String serialized json is used to avoid deep json deser overhead and to parse individual method results lazily.
     */
    get precomputedMethods(): Typesys.Json.PrecomputedMethods;

    /**
     * Field value if exists in this json.
     */
    fieldValue(field: string): any;

    /**
     * Retrieve instance of a C3 Type that mixes {@link WithRef} and {@link Typesys} by reference. Note that this method
     * handles references to every {@link TypeMeta} elements such as {@link FieldType}, {@link Method} or
     * {@link MethodType} regardless of #parentTypeMeta. If invalid reference, throw an error.
     */
    ref(ref: string): T;

    /**
     * Perform an action for each set field of this object.
     */
    eachFieldJson(action: λBiConsumer<string | null, any | null>): void;

    /**
     * Retrieve json serialized value of a field. If field is not set, return null.
     */
    fieldJson(name: string): any | null;

    /**
     * Converts this json to a {@link Typesys} instance.
     */
    toTypesys(): T;

    /**
     * Construct instance from a typesys.
     */
    static fromTypesys(typesys: Typesys, parentTypeMeta: TypeMeta): Typesys.Json;

    /**
     * json representation of all {@link FieldType}s in this TypeMeta.
     */
    get childrenJson(): C3.Map<string | null, any | null>;

    /**
     * Lookup json representation of a child Typesys instance of this TypeMeta by it's reference string.
     */
    childTypesysJson(ref: string): Typesys.Json;

    /**
     * Construct instance from a C3 Type.
     */
    static fromTypeMeta(typeMeta: TypeMeta): TypeMeta.Json;
  }
}


interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
