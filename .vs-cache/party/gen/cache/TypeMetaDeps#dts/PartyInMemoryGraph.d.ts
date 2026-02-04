// TypeScript definitions for the C3 type PartyInMemoryGraph

/**
 * Type to represent relationship between {@link Party}s as an {@link InMemoryGraph}
 *
 * @remarks this represents a value passed to a method that expects an instance of PartyInMemoryGraph
 */
declare interface IPartyInMemoryGraph {

  /**
   * All vertices in this graph
   */
  m_vertices?: Array_Type<Party> | Array<IParty>;

  /**
   * All edges in this graph
   */
  m_edges?: Array_Type<PartyEdge> | Array<IPartyEdge>;

  /**
   * Set of all vertices that are not traversable
   * E.g Graph is : A - B - C, and if B is not traversable then A and C are disconnected
   */
  m_nonTraversableVertices?: Array_Type<Party> | Array<IParty>;

  /**
   * KEY: NodeId:GUID
   * This is to store the graph on the root action context
   */
  m_cacheKey?: string;
}

/**
 * Type to represent relationship between {@link Party}s as an {@link InMemoryGraph}
 *
 * @remarks this represents a made instance of PartyInMemoryGraph
 */
declare class PartyInMemoryGraph extends Obj  {

  /**
   * All vertices in this graph
   */
  readonly m_vertices?: Array_Type<Party>;
  withM_vertices(m_vertices: Array_Type<Party> | Array<IParty> | null): PartyInMemoryGraph;

  /**
   * All edges in this graph
   */
  readonly m_edges?: Array_Type<PartyEdge>;
  withM_edges(m_edges: Array_Type<PartyEdge> | Array<IPartyEdge> | null): PartyInMemoryGraph;

  /**
   * Set of all vertices that are not traversable
   * E.g Graph is : A - B - C, and if B is not traversable then A and C are disconnected
   */
  readonly m_nonTraversableVertices?: Array_Type<Party>;
  withM_nonTraversableVertices(m_nonTraversableVertices: Array_Type<Party> | Array<IParty> | null): PartyInMemoryGraph;

  /**
   * KEY: NodeId:GUID
   * This is to store the graph on the root action context
   */
  readonly m_cacheKey?: string;
  withM_cacheKey(m_cacheKey: string | null): PartyInMemoryGraph;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any): PartyInMemoryGraph | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string): PartyInMemoryGraph | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string): PartyInMemoryGraph | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): PartyInMemoryGraph | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): PartyInMemoryGraph;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): PartyInMemoryGraph;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): PartyInMemoryGraph;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<PartyInMemoryGraph>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<PartyInMemoryGraph>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): PartyInMemoryGraph;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PartyInMemoryGraph;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PartyInMemoryGraph;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): PartyInMemoryGraph;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): PartyInMemoryGraph;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): PartyInMemoryGraph;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): PartyInMemoryGraph;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): PartyInMemoryGraph;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): PartyInMemoryGraph;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string): PartyInMemoryGraph;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType): PartyInMemoryGraph;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): PartyInMemoryGraph;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: Array_Type<FieldType>): PartyInMemoryGraph;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): PartyInMemoryGraph;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): PartyInMemoryGraph;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): PartyInMemoryGraph;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): PartyInMemoryGraph;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): PartyInMemoryGraph;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): PartyInMemoryGraph;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): PartyInMemoryGraph;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): PartyInMemoryGraph;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): PartyInMemoryGraph;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj, otherFieldsFilter: Type): PartyInMemoryGraph;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): PartyInMemoryGraph;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): PartyInMemoryGraph;

  mergeJson(json: any): PartyInMemoryGraph;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): PartyInMemoryGraph;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): PartyInMemoryGraph;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<PartyInMemoryGraph>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<PartyInMemoryGraph> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<PartyInMemoryGraph> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<PartyInMemoryGraph>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<PartyInMemoryGraph> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, PartyInMemoryGraph> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, PartyInMemoryGraph> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<PartyInMemoryGraph>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<PartyInMemoryGraph>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): PartyInMemoryGraph;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): PartyInMemoryGraph;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): PartyInMemoryGraph;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): PartyInMemoryGraph;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): PartyInMemoryGraph;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): PartyInMemoryGraph;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): PartyInMemoryGraph;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): PartyInMemoryGraph;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): PartyInMemoryGraph;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<PartyInMemoryGraph> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): PartyInMemoryGraph;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): GraphConfig;

  /**
   * @return configuration key for this instance.
   */
  configKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  configSingletonKey(): string | null;

  /**
   * @return type configuration for the given {@link Configurable} type.
   * E.g. {@see REST} & {@see RestConfig}
   */
  static typeConfig(): GraphConfig;

  /**
   * API to obtain the vertices in the graph
   *
   * @param filter
   *            Vertices with condition that evaluates to true and are connected will be included in graph.
   * @param bindings
   *            Bindings to be applied for filter evaluations.
   * @returns All the vertices for the given graph
   */
  vertices(filter?: string, bindings?: ObjMapp): Array_Type<Party> | null;

  /**
   * Returns whether a given vertex exists in the graph. Equality is measured by considering the vertex type and the vertex id
   * @param vertex
   *            vertex to be checked
   * true / false determining whether the vertex is present in the graph
   */
  containsVertex(vertex: Party): boolean;

  /**
   * API to obtain edges in the graph
   *
   * @param filter
   *            Vertices with condition that evaluates to true and are connected will be included in graph.
   * @param bindings
   *            Bindings to be applied for filter evaluations.
   * @return All the edges for the given graph
   */
  edges(filter?: string, bindings?: ObjMapp): Array_Type<PartyEdge> | null;

  /**
   * Returns whether a given edge exists in the graph. Equality is measured by considering the edge type and the edge id
   * @param edge
   *            edge to be checked
   * true / false determining whether the edge is present in the graph
   */
  containsEdge(edge: PartyEdge): boolean;

  /**
   * All the vertices connected to the given vertex
   * @param vertex
   *            The vertex for which connected vertices need to be retrieved
   * @param depth
   *            Optional depth argument denoting how many hops to travel for connected vertices
   * @return Array of vertices connected to the input vertex
   */
  connectedVertices(vertex?: Party, depth?: number): Array_Type<Party> | null;

  /**
   * All the edges connected to the given vertex
   * @param vertex
   *          Vertex for which connected edges need to be found
   * @return A set of vertices connected to the given vertex
   */
  connectedEdges(vertex?: Party): Array_Type<PartyEdge> | null;

  /**
   * API to return all vertices between fromVertex and toVertex
   * We default to returning all paths from fromVertex to toVertex unless specified using noOfPaths
   * The first
   * @param fromVertex
   *          Starting point for the path
   * @param toVertex
   *          Ending point for the path
   * @param noOfPaths (optional)
   *          This defaults to all the paths. You can optionally provide the paths that you need
   * @param allowCycles
   *          if true, will not throw errors when a cycle is found in graph.
   * @param maxDepth
   *           Maximum number of hops to reach toVertex. If not specified, it will allow any possible.
   * @return Array of paths from "fromVertex" to "toVertex"
   */
  connectedPaths(fromVertex?: Party, toVertex?: Party, noOfPaths?: number, allowCycles?: boolean, maxDepth?: number): Array_Type<Array_Type<Party>> | null;

  /**
   * @return List of all the connected sub-graphs
   */
  allSubGraphs(): Array_Type<Graph<Party, PartyEdge>> | null;

  /**
   * Obtain the connected sub-graph for the given vertex
   * @param vertex
   *            Vertex for which connected sub-graph is desired
   * @return The sub-graph connected with the given vertex
   */
  connectedSubGraph(vertex?: Party): Graph<Party, PartyEdge> | null;

  /**
   * Obtain the connected sub-graph for the given vertex with additional filters applied to vertex and edge
   * @param vertex
   *            Vertex for which connected sub-graph is desired
   * @param vertexFilter
   *            Vertices with condition that evaluates to true and are connected will be included in graph.
   * @param edgeFilter
   *            Edges with condition that evaluates to true and are connected will be included in graph.
   * @param bindings
   *            Bindings to be applied for filter evaluations.
   * @param doCache
   *            If true, the engine will return the Graph instance with just m_cacheKey value populated and use
   *              the cached graph (on the root action context) for any further computation on the graph
   *
   * @return The sub-graph connected with the given vertex
   */
  filteredSubGraph(vertex?: Party, vertexFilter?: string, edgeFilter?: string, bindings?: ObjMapp, doCache?: boolean): Graph<Party, PartyEdge> | null;

  /**
   * Obtain the connected sub-graph for the given vertex with additional filters and direction applied to vertex and edge
   * @param vertex
   *            Vertex for which connected sub-graph is desired
   * @param spec
   *            The spec for loading vertices and edges data
   *
   * @return The sub-graph connected with the given vertex
   */
  filteredDirectedSubGraph(vertex: Party, spec: TraverseGraphSpec): Graph<Party, PartyEdge>;

  /**
   * Calculates the number of times you would reach each terminal node if traversed the entire graph starting
   * from vertex and moved along an edge a number of times equal to its weight. A terminal vertex is a
   * source or sink vertex depending on whether you are traversing in direction source or sink respectively
   * (which you specify in TraverseGraphSpec).
   *
   * For example, if you had the graph with edge weights A->B = 2, B->C = 3, A->C = 4, B->D = 1 that looks like:
   *                /> D
   *         A -> B -> C
   *           \_____/
   *
   * then calling collectCounts on A in direction sink (specified in TraverseGraphSpec)
   * would return a map with {C: 10, D: 2}.
   * C is 10 because along path A -> B -> C we have edge weights 2 * 3 = 6 plus along path A -> C weight 4 equals 10.
   * If instead we started from vertex C and went in direction source, then we would get {A: 10}.
   *
   * @param vertex
   *            Vertex to start traversal from and collect all required nodes
   * @param spec
   *            The spec to for which direction to reverse and what to count.
   *
   * @return A map where the key is vertex id and the value is count of number of times you reached that vertex
   *
   * @see #collectCountsBatch
   */
  collectCounts(vertex: Party, countsSpec?: CollectCountsSpec): Map_Type<string, number>;

  /**
   * Like collectCounts, but this batch version does it for every single vertex you pass in.
   *
   * Much more efficient if graph has lots of overlap because it prevents duplicate traversals.
   *
   * @param vertices
   *            List of vertices to start traversal from and collect all required nodes.
   *            Return result will match this order.
   * @param spec
   *            The spec to for which direction to reverse and what to count.
   *
   * @return A list where each element corresponds to that result for vertex at same index in input vertices.
   *         Each element is a map where the key is vertex id and the value is count of number of
   *         times you reached that vertex.
   *
   * @see #collectCounts
   */
  collectCountsBatch(vertices?: Array_Type<Party>, countsSpec?: CollectCountsSpec): Array_Type<Map_Type<string, number>>;

  /**
   * Treating the graph as undirected, returns all paths from given vertex
   * to the graph's leaf nodes.
   *
   * Note that in traditional graph theory, sink nodes are vertices with out-degree of 0
   * so in an undirected graph only isolated vertices are sinks. Here when we say sink nodes,
   * we mean leaf nodes.
   *
   * e.g. Consider the graph
   * A <-> B,C
   * B <-> D,E
   * G <-> C
   * C <-> F
   *              A       G
   *          B       C
   *        D   E       F
   *
   * Path to leaf nodes for Vertex A would be -> [[A,B,D], [A,B,E], [A,C,F], [A,C,G]]
   * Path to leaf nodes for Vertex C would be -> [[C,G], [C,F], [C,A,B,D], [C,A,B,E]]
   *
   * @param vertex
   *          Starting vertex for the path to leaf nodes
   * @param allowCycles
   *          if true, will not throw errors when a cycle is found in graph provided.
   * @return a list of list of vertices for every path to the sink node from the vertex
   */
  pathToSinkNodes(vertex: Party, allowCycles?: boolean): Array_Type<Array_Type<Party>> | null;

  /**
   * Create an instance of InMemoryGraph
   * @param vertices
   *               Set of vertices participating in the graph
   * @param edges
   *               Set of edges in the graph
   * @param nonTraversableVertices
   *               Set of non traversable vertices
   * @param doCache
   *              If true, the engine will return the Graph instance with just m_cacheKey value populated and use
   *              the cached graph (on the root action context) for any further computation on the graph
   * @return An InMemory representation of the graph
   */
  static makeGraph(vertices?: Array_Type<Party>, edges?: Array_Type<PartyEdge>, nonTraversableVertices?: Array_Type<Party>, doCache?: boolean): Graph<Party, PartyEdge> | null;

  /**
   * Load the graph from db to memory from the given parametric vertex and edge type
   * @param batchSize
   *               Optional batchSize for number of objects for scan query batch (default 100)
   * @param threads
   *               Optional threads specifying number of parallel threads scan query should use (default 1)
   * @param vertexSpec
   *               Spec determining include and filter on vertices
   * @param edgeSpec
   *               Spec determining include and filter on edges
   * @param doCache
   *              If true, the engine will return the Graph instance with just m_cacheKey value populated and use
   *              the cached graph (on the root action context) for any further computation on the graph
   */
  static loadGraph(batchSize?: number, threads?: number, vertexSpec?: GraphDataSpec, edgeSpec?: GraphDataSpec, doCache?: boolean): Graph<Party, PartyEdge> | null;

  /**
   * WARNING: Do not call this frequently. This function will have no effect unless you then later call addEdges.
   * Calling {@link #addEdges} will then be an expensive operation that will trigger a complete rebuild of the graph.
   *
   * Add vertices to an existing graph. Currently only supported for in memory 'cached' graphs & persisted graphs.
   * For persisted graphs, only in memory copy of that graph will be updated. On another load of the persisted copy,
   * user will have to call addVertices again.
   * @param vertices
   *               Vertices to be added to the given graph
   * @return pointer to the graph object
   */
  addVertices(vertices: Stream<Party>): Graph<Party, PartyEdge>;

  /**
   * WARNING: Do not call this frequently.
   * This is an expensive operation that will trigger a complete rebuild of the graph.
   *
   * Add edges to an existing graph. Currently only supported for in memory 'cached' graphs & persisted graphs
   * For persisted graphs, only in memory copy of that graph will be updated. On another load of the persisted copy,
   * user will have to call addVertices again.
   * @param edges
   *               Edges to be added to the given graph
   * @return pointer to the graph object
   */
  addEdges(edges: Stream<PartyEdge>): Graph<Party, PartyEdge>;

  /**
   * Generate cache key for the given graph spec. Returns key for graphs stored in global cache
   */
  static cacheKey(spec: LoadGraphSpec): string;

  /**
   * Save the graph from vertices and edges stored in db to the persistent cache. The vertices & edges will be stored
   * independently for performance reasons and if the TenantConfig : 'PersistedGraphCacheEnabled' is set to true,
   * then all the graph operations should be using this stored graph
   * @spec
   *     Spec to save graph
   * @return handle to the graph object that can be used for further operations
   */
  static saveGraph(spec: LoadGraphSpec): Graph<Party, PartyEdge>;

  /**
   * API to to save vertices of a graph in the file system
   * @param spec
   *         Spec should be the whole spec for the full graph. This is required because the cache key will be generated
   *         based on the full spec of the graph which will be used in other graph operations
   * @return the pointer to the export batch job that will save the edges in a distributed manner
   */
  static saveVertices(spec: LoadGraphSpec): Export;

  /**
   * API to to save edges of a graph in the file system
   * @param spec
   *         Spec should be the whole spec for the full graph. This is required because the cache key will be generated
   *         based on the full spec of the graph which will be used in other graph operations
   * @return the pointer to the export batch job that will save the edges in a distributed manner
   */
  static saveEdges(spec: LoadGraphSpec): Export;

  /**
   * API to to save vertices of a graph to the persistent cache in stream fashion.
   * @param spec
   *         Spec should be the whole spec for the full graph. This is required because the cache key will be generated
   *         based on the full spec of the graph which will be used in other graph operations
   * @return the file in which the vertices are saved
   */
  static saveVerticesWithStream(spec: LoadGraphSpec): File;

  /**
   * API to to save edges of a graph to the persistent cache in stream fashion.
   * @param spec
   *         Spec should be the whole spec for the full graph. This is required because the cache key will be generated
   *         based on the full spec of the graph which will be used in other graph operations
   * @return the file in which the edges are saved
   */
  static saveEdgesWithStream(spec: LoadGraphSpec): File;

  /**
   * Un-cache a cached graph. This will remove In-memory instance of graph when the optional flag is false.
   *
   * @param clearPersisted
   *           When true, will clear any persisted cache entries for graph and components as well. i.e saved vertices and edges.
   */
  uncache(clearPersisted?: boolean): void;

  /**
   * return file path in which graph is saved.
   */
  persistedGraphCacheFilePath(): string | null;

  /**
   * return file path in which vertices/edges are saved.
   */
  persistedPartsCacheFilePath(): string | null;

  /**
   * API to read objs in a streaming fashion for a particular type on the graph. These can be any type of objs that the
   * vertices or edges can reach to and are included in this graph
   * @param targetType
   *               Type for which objs need to be read
   * @return a stream of objs of the target type
   */
  readObjs(targetType: Type): Stream<Obj>;

  /**
   * Fetches multiple obj instances based on a specification.
   * @param targetType
   *               Type for which objs need to be fetched
   * @param spec
   *               Specification of what data to fetch.  If not specified, all objs will be returned for the type.
   * @return requested obj stream of target type.
   */
  fetchObjStream(targetType: Type, spec?: FetchStreamSpec): Stream<Obj>;

  /**
   * Evaluates various metrics for sources
   * @param targetType
   *                Type on which metric needs to be evaluated
   * @param spec
   *                The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  evalMetrics(targetType: Type, spec: EvalMetricsSpec): EvalMetricsResult;

  /**
   * Generates a random graph with given number of vertices and edges.
   *
   * @param vertexCount
   *          Number of vertices to be generated.
   * @param edgeCount
   *          Number of edges to be generated.
   * @param vertexInclude
   *          Include spec for vertex type. Fields that should be populated on the randomly generated vertices.
   * @param edgeInclude
   *          Include spec for edge type. Fields that should be populated on the randomly generated edges.
   * @param doCache
   *          If true, the engine will return the Graph instance with just m_cacheKey value populated and
   *          will save the generated graph in Cluster node memory and persisted cache type CachedGraph.
   *          If false, will return graph object.
   * @return graph generated.
   */
  static generateRandomGraph(vertexCount?: number, edgeCount?: number, vertexInclude?: string, edgeInclude?: string, doCache?: boolean): Graph<Party, PartyEdge> | null;

  /**
   * topological sort the graph (only works for directed graph)
   * @return the id of vertex in topological sequence
   */
  topologicalSort(): Array_Type<Party> | null;

  /**
   * Empty the GlobalGraphCache for the cluster
   */
  static emptyGlobalGraphCache(): void;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
