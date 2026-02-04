// TypeScript definitions for the C3 type NodeDiagramEdge

/**
 * Represents the edge in {@link NodeDiagram}.
 * Any customization/extension to what is stored on a {@link NodeDiagramEdge} should happen by extending
 * {@link NodeDiagramNodeEdge} and updating the {@link #data} field.
 * If that data is to be used in the rendering layer, a corresponding `${nodeDiagramEdgeDataTypeName}React.c3typ`
 * and `${nodeDiagramNodeEdgeTypeName}React.tsx` must be created to render the node.
 * The component defined in NodeDiagramEdgeReact is exposed as a helper component and should be used as a base for all
 * custom edges.
 *
 * @remarks this represents a value passed to a method that expects an instance of NodeDiagramEdge
 */
declare interface INodeDiagramEdge<D> {

  /**
   * Classname applied to all edges
   */
  EDGE_CLASSNAME?: string | null;

  /**
   * The default edge to fall back to when consumer has not properly specified a type for {@link NodeDiagramEdge#data}
   */
  DEFAULT_EDGE_DATA_TYPE?: string | null;

  /**
   * Unique identifier for this edge
   */
  id: string;

  /**
   * The origin node of this edge
   */
  source: string;

  /**
   * In the case where a {@link #source} node has multiple connection ports, this field references a specific port handle in
   * {@link #source} node. Each custom {@link NodeDiagramNode#data} will handle ports differently.
   * In the end, each rendering of the node which has multiple ports will utilize
   * https://reactflow.dev/api-reference/components/handle and assign `id` prop accordingly. The `sourceHandle` field
   * must reference one of those Handles by `id` on the source node.
   */
  sourceHandle?: string | null;

  /**
   * The destination node of this edge
   */
  target: string;

  /**
   * In the case where a {@link #target} node has multiple connection ports, this field references a specific port handle in
   * {@link #source} node. Each custom {@link NodeDiagramNode} will handle ports differently.
   * In the end, each {@link NodeDiagramNodeData} which is expected to have multiple ports will utilize
   * https://reactflow.dev/api-reference/components/handle and assign `id` field accordingly. The `targetHandle` field
   * must reference one of those Handles by `id` on the target node.
   */
  targetHandle?: string | null;

  /**
   * The style to render the end points of an edge.
   * If specified as `string`, the value references a custom <svg> <marker> `id`.
   * This <marker> must be included in the HTML DOM, which can be achieved via custom React component.
   * Note that the svg color will not be dynamic with edge selection or color changes. Consumers must handle this
   * themselves.
   */
  markerEnd?: INodeDiagramEdge.Marker | null | string | null | null;

  /**
   * The way to render the end points of an edge.
   * If specified as `string`, the value references a custom <svg> <marker> `id`.
   * This <marker> must be included in the HTML DOM, which can be achieved via custom React component.
   * Note that the svg color will not be dynamic with edge selection or color changes. Consumers must handle this
   * themselves.
   */
  markerStart?: INodeDiagramEdge.Marker | null | string | null | null;

  /**
   * css classes to apply to the SVG `g` tag when rendered. The application of this class
   * will be handled by the framework and should not be handled in the corresponding `NodeDiagramEdgeReact` layer.
   *
   * Note that there will already be 2 classnames applied to all rendered nodes:
   * 1. `c3-nodediagram-edge`
   * 2. All individual `NodeDiagramNodeData` subtypes will also have their unique className applied
   * to the div, ex: `.c3-nodediagram-edge__BasicDiagramEdge`. For css that should apply to all nodes of this type regardless
   * of content, use the inbuilt `.c3-nodediagram-edge__<NodeDiagramEdgeData>` selector.
   *
   * Leverage this `classNames` field when within the same `NodeDiagramEdgeData` there needs to be a differentiation
   * amongst nodes.
   */
  classNames?: C3.Array<string | null> | Array<string | null>;

  /**
   * True if the node is to be hidden on the diagram.
   */
  hidden?: boolean;

  /**
   * Data specific to this edge. Note that if `data` does not have a `type` field or if the `type` is `NodeDiagramEdgeData`,
   * the `data` will be treated as an instance of {@link BasicDiagramEdge}.
   */
  data?: D | null;
}

/**
 * Represents the edge in {@link NodeDiagram}.
 * Any customization/extension to what is stored on a {@link NodeDiagramEdge} should happen by extending
 * {@link NodeDiagramNodeEdge} and updating the {@link #data} field.
 * If that data is to be used in the rendering layer, a corresponding `${nodeDiagramEdgeDataTypeName}React.c3typ`
 * and `${nodeDiagramNodeEdgeTypeName}React.tsx` must be created to render the node.
 * The component defined in NodeDiagramEdgeReact is exposed as a helper component and should be used as a base for all
 * custom edges.
 *
 * @remarks this represents a made instance of NodeDiagramEdge
 */
declare class NodeDiagramEdge<D> extends Obj {

  /**
   * Classname applied to all edges
   */
  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): NodeDiagramEdge;

  /**
   * The default edge to fall back to when consumer has not properly specified a type for {@link NodeDiagramEdge#data}
   */
  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): NodeDiagramEdge;

  /**
   * Unique identifier for this edge
   */
  readonly id: string;
  withId(id: string): NodeDiagramEdge;

  /**
   * The origin node of this edge
   */
  readonly source: string;
  withSource(source: string): NodeDiagramEdge;

  /**
   * In the case where a {@link #source} node has multiple connection ports, this field references a specific port handle in
   * {@link #source} node. Each custom {@link NodeDiagramNode#data} will handle ports differently.
   * In the end, each rendering of the node which has multiple ports will utilize
   * https://reactflow.dev/api-reference/components/handle and assign `id` prop accordingly. The `sourceHandle` field
   * must reference one of those Handles by `id` on the source node.
   */
  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): NodeDiagramEdge;

  /**
   * The destination node of this edge
   */
  readonly target: string;
  withTarget(target: string): NodeDiagramEdge;

  /**
   * In the case where a {@link #target} node has multiple connection ports, this field references a specific port handle in
   * {@link #source} node. Each custom {@link NodeDiagramNode} will handle ports differently.
   * In the end, each {@link NodeDiagramNodeData} which is expected to have multiple ports will utilize
   * https://reactflow.dev/api-reference/components/handle and assign `id` field accordingly. The `targetHandle` field
   * must reference one of those Handles by `id` on the target node.
   */
  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): NodeDiagramEdge;

  /**
   * The style to render the end points of an edge.
   * If specified as `string`, the value references a custom <svg> <marker> `id`.
   * This <marker> must be included in the HTML DOM, which can be achieved via custom React component.
   * Note that the svg color will not be dynamic with edge selection or color changes. Consumers must handle this
   * themselves.
   */
  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdge;

  /**
   * The way to render the end points of an edge.
   * If specified as `string`, the value references a custom <svg> <marker> `id`.
   * This <marker> must be included in the HTML DOM, which can be achieved via custom React component.
   * Note that the svg color will not be dynamic with edge selection or color changes. Consumers must handle this
   * themselves.
   */
  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdge;

  /**
   * css classes to apply to the SVG `g` tag when rendered. The application of this class
   * will be handled by the framework and should not be handled in the corresponding `NodeDiagramEdgeReact` layer.
   *
   * Note that there will already be 2 classnames applied to all rendered nodes:
   * 1. `c3-nodediagram-edge`
   * 2. All individual `NodeDiagramNodeData` subtypes will also have their unique className applied
   * to the div, ex: `.c3-nodediagram-edge__BasicDiagramEdge`. For css that should apply to all nodes of this type regardless
   * of content, use the inbuilt `.c3-nodediagram-edge__<NodeDiagramEdgeData>` selector.
   *
   * Leverage this `classNames` field when within the same `NodeDiagramEdgeData` there needs to be a differentiation
   * amongst nodes.
   */
  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramEdge;

  /**
   * True if the node is to be hidden on the diagram.
   */
  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramEdge;

  /**
   * Data specific to this edge. Note that if `data` does not have a `type` field or if the `type` is `NodeDiagramEdgeData`,
   * the `data` will be treated as an instance of {@link BasicDiagramEdge}.
   */
  readonly data?: D | null;
  withData(data: D | null): NodeDiagramEdge;

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
  static fromJson(json: any | null): NodeDiagramEdge<D> | null;

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
  static fromJsonString(json: string | null): NodeDiagramEdge<D> | null;

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
  static fromXmlString(xml: string | null): NodeDiagramEdge<D> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): NodeDiagramEdge<D> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): NodeDiagramEdge<D>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): NodeDiagramEdge<D>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): NodeDiagramEdge<D>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<NodeDiagramEdge<D> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<NodeDiagramEdge<D> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): NodeDiagramEdge<D>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): NodeDiagramEdge<D>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): NodeDiagramEdge<D>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): NodeDiagramEdge<D>;

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
  withField(field: string, value: any, doNotConvert?: boolean): NodeDiagramEdge<D>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): NodeDiagramEdge<D>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): NodeDiagramEdge<D>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): NodeDiagramEdge<D>;

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
  withoutFieldAtPath(path: string): NodeDiagramEdge<D>;

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
  withoutField(field: string | null): NodeDiagramEdge<D>;

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
  withoutField(field: FieldType | null): NodeDiagramEdge<D>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): NodeDiagramEdge<D>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): NodeDiagramEdge<D>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): NodeDiagramEdge<D>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): NodeDiagramEdge<D>;

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
  defaultField(field: string): NodeDiagramEdge<D>;

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
  defaultField(field: FieldType): NodeDiagramEdge<D>;

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
  unsetField(field: string): NodeDiagramEdge<D>;

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
  unsetField(field: FieldType): NodeDiagramEdge<D>;

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
  removeField(field: string): NodeDiagramEdge<D>;

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
  removeField(field: FieldType): NodeDiagramEdge<D>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): NodeDiagramEdge<D>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): NodeDiagramEdge<D>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): NodeDiagramEdge<D>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): NodeDiagramEdge<D>;

  mergeJson(json: any | null): NodeDiagramEdge<D>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): NodeDiagramEdge<D>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): NodeDiagramEdge<D>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<NodeDiagramEdge<D> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<NodeDiagramEdge<D> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<NodeDiagramEdge<D> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<NodeDiagramEdge<D> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<NodeDiagramEdge<D> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, NodeDiagramEdge<D> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, NodeDiagramEdge<D> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<NodeDiagramEdge<D> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<NodeDiagramEdge<D> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): NodeDiagramEdge<D>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): NodeDiagramEdge<D>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): NodeDiagramEdge<D>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): NodeDiagramEdge<D>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): NodeDiagramEdge<D>;

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
  static make(fields: any, withDefaults?: boolean): NodeDiagramEdge<D>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): NodeDiagramEdge<D>;

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
  afterMake(): NodeDiagramEdge<D>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): NodeDiagramEdge<D>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<NodeDiagramEdge<D>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): NodeDiagramEdge<D>;
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
