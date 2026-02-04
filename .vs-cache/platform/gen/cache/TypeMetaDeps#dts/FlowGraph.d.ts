// TypeScript definitions for the C3 type FlowGraph

/**
 * A {@link FlowGraph} is a directed port graph, where each vertex distinguishes between input and output ports. Input
 * ports are single-input, whereas output ports may be multi-output. Every edge is directed, connecting from the
 * output port of a vertex to the input port of another vertex. A {@link FlowGraph} is good for representing a conceptual
 * flow, or procedure, of steps. The vertices could represent C3 actions with inputs and output, or they could represent
 * a higher-level concept, like steps in an ML model.
 *
 * @see MlPipeline
 *
 * @remarks this represents a value passed to a method that expects an instance of FlowGraph
 */
declare interface IFlowGraph<V> {

  /**
   * List of all vertices in this graph.
   */
  vertices?: C3.Array<V | null> | Array<V | null>;

  /**
   * List of all edges in this graph.
   */
  edges?: C3.Array<FlowGraph.Edge<V> | null> | Array<IFlowGraph.Edge<V> | null>;

  /**
   * Optimized double-linked-list-like data structure for traversing next and previous vertices. See {@link #precomputeVertexConnections}
   * to opt-in to using this data structure. This representation is more beneficial to use when heavily using the
   * `next*` and `prev*` methods.
   *
   * Outer map:
   * Key - vertex string id
   * Value - mapping of ports to vertices, i.e. "Inner map"
   *
   * Inner map:
   * Key - port string name
   * Value - [vertex string id for vertices connected to port]
   *         OR if key is "$self", then the vertex instance corresponding to the outer map key
   *
   * Example:
   * ```
   * const1 -----\            /---- action2
   *              action1 ----
   * const2 -----/            \---- action3
   * ```
   * The `vertexConnections` map would look like:
   * ```
   * {
   *   "const1": {
   *     "$self": < Workflow.Const, id="const1" >,
   *     "output": ["action1"]
   *   },
   *   "const2": {
   *     "$self": < Workflow.Const, id="const2" >,
   *     "output": ["action1"]
   *   },
   *   "action1": {
   *     "$self": < Workflow.Action, id="action1" >,
   *     "inputA": ["const1"],
   *     "inputB": ["const2"],
   *     "output": ["action2", "action3"]
   *   },
   *   "action2": {
   *     "$self": < Workflow.Action, id="action2" >,
   *     "input": ["action1"]
   *   },
   *   "action3": {
   *     "$self": < Workflow.Action, id="action3" >,
   *     "input": ["action1"]
   *   },
   * }
   * ```
   */
  vertexConnections?: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}};
}

/**
 * A {@link FlowGraph} is a directed port graph, where each vertex distinguishes between input and output ports. Input
 * ports are single-input, whereas output ports may be multi-output. Every edge is directed, connecting from the
 * output port of a vertex to the input port of another vertex. A {@link FlowGraph} is good for representing a conceptual
 * flow, or procedure, of steps. The vertices could represent C3 actions with inputs and output, or they could represent
 * a higher-level concept, like steps in an ML model.
 *
 * @see MlPipeline
 *
 * @remarks this represents a made instance of FlowGraph
 */
declare class FlowGraph<V> extends Obj {

  /**
   * List of all vertices in this graph.
   */
  readonly vertices?: C3.Array<V | null>;
  withVertices(vertices: C3.Array<V | null> | Array<V | null>): FlowGraph;

  /**
   * List of all edges in this graph.
   */
  readonly edges?: C3.Array<FlowGraph.Edge<V> | null>;
  withEdges(edges: C3.Array<FlowGraph.Edge<V> | null> | Array<IFlowGraph.Edge<V> | null>): FlowGraph;

  /**
   * Optimized double-linked-list-like data structure for traversing next and previous vertices. See {@link #precomputeVertexConnections}
   * to opt-in to using this data structure. This representation is more beneficial to use when heavily using the
   * `next*` and `prev*` methods.
   *
   * Outer map:
   * Key - vertex string id
   * Value - mapping of ports to vertices, i.e. "Inner map"
   *
   * Inner map:
   * Key - port string name
   * Value - [vertex string id for vertices connected to port]
   *         OR if key is "$self", then the vertex instance corresponding to the outer map key
   *
   * Example:
   * ```
   * const1 -----\            /---- action2
   *              action1 ----
   * const2 -----/            \---- action3
   * ```
   * The `vertexConnections` map would look like:
   * ```
   * {
   *   "const1": {
   *     "$self": < Workflow.Const, id="const1" >,
   *     "output": ["action1"]
   *   },
   *   "const2": {
   *     "$self": < Workflow.Const, id="const2" >,
   *     "output": ["action1"]
   *   },
   *   "action1": {
   *     "$self": < Workflow.Action, id="action1" >,
   *     "inputA": ["const1"],
   *     "inputB": ["const2"],
   *     "output": ["action2", "action3"]
   *   },
   *   "action2": {
   *     "$self": < Workflow.Action, id="action2" >,
   *     "input": ["action1"]
   *   },
   *   "action3": {
   *     "$self": < Workflow.Action, id="action3" >,
   *     "input": ["action1"]
   *   },
   * }
   * ```
   */
  readonly vertexConnections?: C3.Map<string | null, C3.Map<string | null, any>>;
  withVertexConnections(vertexConnections: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): FlowGraph;

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
  static fromJson(json: any | null): FlowGraph<V> | null;

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
  static fromJsonString(json: string | null): FlowGraph<V> | null;

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
  static fromXmlString(xml: string | null): FlowGraph<V> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): FlowGraph<V> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): FlowGraph<V>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): FlowGraph<V>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): FlowGraph<V>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<FlowGraph<V> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<FlowGraph<V> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): FlowGraph<V>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): FlowGraph<V>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): FlowGraph<V>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): FlowGraph<V>;

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
  withField(field: string, value: any, doNotConvert?: boolean): FlowGraph<V>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): FlowGraph<V>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): FlowGraph<V>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): FlowGraph<V>;

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
  withoutFieldAtPath(path: string): FlowGraph<V>;

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
  withoutField(field: string | null): FlowGraph<V>;

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
  withoutField(field: FieldType | null): FlowGraph<V>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): FlowGraph<V>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): FlowGraph<V>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): FlowGraph<V>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): FlowGraph<V>;

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
  defaultField(field: string): FlowGraph<V>;

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
  defaultField(field: FieldType): FlowGraph<V>;

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
  unsetField(field: string): FlowGraph<V>;

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
  unsetField(field: FieldType): FlowGraph<V>;

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
  removeField(field: string): FlowGraph<V>;

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
  removeField(field: FieldType): FlowGraph<V>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): FlowGraph<V>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): FlowGraph<V>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): FlowGraph<V>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): FlowGraph<V>;

  mergeJson(json: any | null): FlowGraph<V>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): FlowGraph<V>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): FlowGraph<V>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<FlowGraph<V> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<FlowGraph<V> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<FlowGraph<V> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<FlowGraph<V> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<FlowGraph<V> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, FlowGraph<V> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, FlowGraph<V> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<FlowGraph<V> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<FlowGraph<V> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): FlowGraph<V>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): FlowGraph<V>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): FlowGraph<V>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): FlowGraph<V>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): FlowGraph<V>;

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
  static make(fields: any, withDefaults?: boolean): FlowGraph<V>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): FlowGraph<V>;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): FlowGraph<V>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): FlowGraph<V>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<FlowGraph<V>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): FlowGraph<V>;

  /**
   * Used as an optimization for heavy graph traversal usage. See {@link #vertexConnections} for more details.
   * NOTE: it is *strongly* advised to remove the {@link #vertexConnections} field from the graph after running
   * the graph operations.
   *
   * @return this {@link FlowGraph} instance with the {@link #vertexConnections} field computed and set.
   */
  precomputeVertexConnections(): FlowGraph<V>;

  /**
   * @return all "source" vertices for the graph. A source vertex is a vertex that has no input edges.
   */
  sources(): C3.Array<V | null>;

  /**
   * @return all "sink" vertices for the graph. A sink vertex is a vertex that has no output edges.
   */
  sinks(): C3.Array<V | null>;

  /**
   * @return all "input" ports on sources in the graph. These represent expected named inputs to be provided when
   *         executing the graph. The key is the name of the input, which is taken from the port name, and is expected
   *         to be unique.
   */
  inputs(): C3.Map<string | null, FlowGraph.Port | null>;

  /**
   * @return all "output" ports on sinks in the graph. These represent expected named outputs resulting from the
   *         graph execution. The key is the name of the output, which is taken from the port name, and is expected
   *         to be unique.
   */
  outputs(): C3.Map<string | null, FlowGraph.Port | null>;

  /**
   * @return keyed collection of vertices.
   * Key - vertex id
   * Value - vertex instance
   */
  verticesById(): C3.Map<string | null, FlowGraph.Vertex | null>;

  /**
   * @param port
   *           output port for which to find the next edge(s).
   * @return edge(s) that the given output port is a part of, as a `from` port.
   */
  nextEdgesFor(port: FlowGraph.Port): C3.Array<FlowGraph.Edge<V> | null>;

  /**
   * Overload for {@link #nextEdgesFor}, except with a vertex arg.
   */
  nextEdgesFor(vertex: V): C3.Array<FlowGraph.Edge<V> | null>;

  nextEdgesForPort(port: FlowGraph.Port): C3.Array<FlowGraph.Edge<V> | null>;

  nextEdgesForVertex(vertex: V): C3.Array<FlowGraph.Edge<V> | null>;

  /**
   * @param port
   *           input port for which to find the previous edge.
   * @return edge that the given input port is a part of, as a `to` port.
   */
  prevEdgeFor(port: FlowGraph.Port): FlowGraph.Edge<V> | null;

  /**
   * Same as {@link #prevEdgeFor}, except with a vertex arg.
   */
  prevEdgesFor(vertex: V): C3.Array<FlowGraph.Edge<V> | null>;

  /**
   * @param port
   *           output port for which to find the next port(s).
   * @return input port(s) that the given output port connects to.
   */
  nextPortsFor(port: FlowGraph.Port): C3.Array<FlowGraph.Port | null>;

  /**
   * Overload for {@link #nextPortsFor}, except with a vertex arg.
   */
  nextPortsFor(vertex: V): C3.Array<FlowGraph.Port | null>;

  nextPortsForPort(port: FlowGraph.Port): C3.Array<FlowGraph.Port | null>;

  nextPortsForVertex(vertex: V): C3.Array<FlowGraph.Port | null>;

  /**
   * @param port
   *           input port for which to find the previous port.
   * @return output port that the given input port is connected to.
   */
  prevPortFor(port: FlowGraph.Port): FlowGraph.Port | null;

  /**
   * Same as {@link #prevPortFor}, except with a vertex arg.
   */
  prevPortsFor(vertex: V): C3.Array<FlowGraph.Port | null>;

  /**
   * @param port
   *           output port for which to find the next vertex(s).
   * @return vertex(s) that the given output port connects to.
   */
  nextVerticesFor(port: FlowGraph.Port): C3.Array<V | null>;

  /**
   * Override for {@link #nextVerticesFor}, except with a vertex arg.
   */
  nextVerticesFor(vertex: V): C3.Array<V | null>;

  nextVerticesForPort(port: FlowGraph.Port): C3.Array<V | null>;

  nextVerticesForVertex(vertex: V): C3.Array<V | null>;

  /**
   * @param port
   *           input port for which to find the previous vertex.
   * @return vertex that the given input port is connected to.
   */
  prevVertexFor(port: FlowGraph.Port): V | null;

  /**
   * Same as {@link #prevVertexFor}, except with a vertex arg.
   */
  prevVerticesFor(vertex: V): C3.Array<V | null>;

  /**
   * @return type for edge in this graph.
   */
  static edgeType(): Type;

  /**
   * @return type for vertex in this graph.
   */
  static vertexType(): Type;

  /**
   * @return type for port in this graph.
   */
  static portType(): Type;

  /**
   * Helper constructor for an edge.
   * @param fromPort
   *           source port for new edge.
   * @param toPort
   *           destination port for new edge.
   * @return new edge connecting the two ports.
   */
  static makeEdge(fromPort: FlowGraph.Port, toPort: FlowGraph.Port): FlowGraph.Edge<V>;

  /**
   * @param id
   *           id for the vertex.
   * @return the vertex corresponding to the id, or null if not found.
   */
  vertexForId(id: string): V | null;

  /**
   * @param name
   *           name for the vertex.
   * @return the vertex corresponding to the name, or null if not found.
   */
  vertexForName(name: string): V | null;

  /**
   * Print visualization of graph structure
   * @param static
   *           State if the visualization should be static or interactive. The default is an interactive visualization which
   *           allows clicking on different node and highlighting all nodes that are between the clicked node and the source
   *           nodes
   * @return a string containing the visualization of graph in SVG or interactive HTML format.
   */
  visualize(spec?: FlowGraphVisualizeSpec | null): any;

  /**
   * Post-construction validation of the graph structure (including cycles, vertex ports without edges).
   * Results in an error, if validation fails.
   *
   * @return list of detected warnings.
   */
  validateGraph(): C3.Array<string | null>;

  /**
   * Invokes action for each vertex in this FlowGraph.
   */
  eachVertex(action: λConsumer<V | null>): void;

  /**
   * Transforms each vertex in this FlowGraph by applying provided lambda function.
   */
  mapVertices(mapper: λFunction<V | null, T | null>): FlowGraph;

  /**
   * @return value that is a result of aggregation of all vertices by provided lambda and initial value.
   */
  foldVertices(initial: T | null, folder: λBiFunction<V | null, T | null, T | null>): T | null;

  /**
   * Visits each vertex in this FlowGraph by applying methods from provided visitor type. Throws an error upon
   * encountering a vertex of unknown type (ie, vertex type is not handled in visitor).
   *
   * @param type
   *        FlowGraph.Visitor subtype declaring static methods to apply to strongly typed FlowGraph.Vertex subtypes
   * @param ctx
   *        Context passed between each vertex visit
   */
  visit(type: Type, ctx: C): C | null;

  /**
   * Visits each vertex in this FlowGraph by applying methods from provided visitor type. Applies provided lambda upon
   * encountering a vertex of unknown type.
   */
  _visit(type: Type, ctx: C, unknownVertexAction?: λBiFunction<V | null, C | null, C | null> | null): C | null;

  /**
   * Topologically sort this graph (only works for directed acyclic graph).
   * @return a new FlowGraph with vertices ordered in topological ordering
   */
  topologicalSort(reverse?: boolean): FlowGraph;

  /**
   * Creates a new FlowGraph where `vertex` sink is now the only sink vertex
   * @return a new FlowGraph with vertices and edges that come before sink
   */
  ancestorGraph(sink: FlowGraph.Vertex): FlowGraph;

  /**
   * Returns a copy of this FlowGraph where the provided old vertex has been replaced with the provided new vertex.
   * The new vertex will always take on the id of the vertex it is replacing; furthermore, it will also take on the
   * ports of the replaced vertex, plus any additional ports it already has. As a result, the new vertex will naturally
   * be connected by all of the old vertex's edges.
   * If `doNotMerge` is set, then the vertex and edges will be updated to have the new id, and ports will not be merged.
   * If `removeDisconnectedEdges` is set, then edges that are no longer connected (due to the replacement) will be removed
   * from the resulting graph. Note this is only relevant when `doNotMerge` is set.
   */
  replaceVertex(oldVertex: FlowGraph.Vertex, newVertex: FlowGraph.Vertex, doNotMerge?: boolean, removeDisconnectedEdges?: boolean): FlowGraph<V>;

  /**
   * Returns a copy of this FlowGraph where the provided vertices has been replaced with the provided new vertex. The
   * new Vertex can retain edges to the rest of the FlowGraph (as though the old vertices were monolithic).
   * {@link FlowGraphReplaceVerticesSpec} specifies whether these edges are retained.
   */
  replaceVertices(oldVertices: C3.Array<FlowGraph.Vertex | null>, newVertex: FlowGraph.Vertex, spec?: FlowGraphReplaceSpec | null): FlowGraph<V>;

  /**
   * Generically replaces a subgraph within a {@link Workflow} with another subgraph, expressed as a collection of
   * new vertices and edges.
   * @param old
   *           subgraph of original {@link Workflow}, represented as a list of vertices.
   * @param newVertices
   *           new vertices in the replacement subgraph (could also be a single vertex if list is size 1).
   * @param newEdges
   *           new edges in the replacement subgraph (do not need to provide if single vertex)
   * @param spec
   *           specify the connections from
   * @return
   */
  replaceVertices(oldVertices: C3.Array<FlowGraph.Vertex | null>, newVertices: C3.Array<FlowGraph.Vertex | null>, newEdges?: C3.Array<FlowGraph.Edge<FlowGraph.Vertex | null> | null>, spec?: FlowGraphReplaceSpec | null): FlowGraph<V>;

  /**
   * Returns a copy of this FlowGraph where the provided vertex and all of its edges have been removed. Vertex can be
   * provided via instance or vertex id. If used on a middle vertex, this will result in a FlowGraph that is not fully
   * connected.
   */
  removeVertex(toRemove: FlowGraph.Vertex): FlowGraph<V>;

  removeVertex(idToRemove: string): FlowGraph<V>;

  /**
   * Returns a copy of this FlowGraph where all provided vertices and all of their edges have been removed. Depending on
   * which vertices are removed, this could result in a FlowGraph that is not fully connected.
   */
  removeVertices(toRemove?: C3.Array<FlowGraph.Vertex | null>): FlowGraph<V>;

  /**
   * Merges this {@link FlowGraph} with another {@link FlowGraph}. Duplicate vertices with the same
   * {@link FlowGraph.Vertex#id} will be merged. This method will throw an exception if two vertices have the same id
   * but different ports to ensure that we do not accidentally disconnect any edges.
   */
  mergeWith(other: FlowGraph<V>): FlowGraph<V>;

  /**
   * Returns dot Digraph representation of this tree
   */
  dotDigraph(): string | null;

  /**
   * Returns a list of vertices for which at least one edge exists.
   */
  static pruneUnusedVertices(vertices?: C3.Array<V | null>, edges?: C3.Array<FlowGraph.Edge<FlowGraph.Vertex | null> | null>): C3.Array<V | null>;
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

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
