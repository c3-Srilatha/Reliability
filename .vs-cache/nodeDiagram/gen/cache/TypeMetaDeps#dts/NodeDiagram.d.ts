// TypeScript definitions for the C3 type NodeDiagram

/**
 * A {@link UiSdlComponent} to represent a diagram of nodes and edges.
 *
 * @remarks this represents a value passed to a method that expects an instance of NodeDiagram
 */
declare interface INodeDiagram {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * The children that are wrapped by the loader
   */
  children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;

  /**
   * List of items that are putting this component in a loading state.
   */
  loadingItems?: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>;

  /**
   * Configurations options for the {@link NodeDiagram} that are not expected to change
   * over the course of the lifetime of the component.
   */
  options?: INodeDiagram.ConfigurationOptions | null;

  /**
   * Nodes of the {@link NodeDiagram}
   */
  nodes?: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null> | Array<INodeDiagramNode<NodeDiagramNodeData | null> | null>;

  /**
   * Edges of the {@link NodeDiagram}
   */
  edges?: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null> | Array<INodeDiagramEdge<NodeDiagramEdgeData | null> | null>;

  /**
   * The ids of nodes that are selected. If {@link #options#mulitSelectable} is true, there can be multiple entries.
   */
  selectedNodes?: C3.Array<string | null> | Array<string | null>;

  /**
   * The ids of edges that are selected. If {@link #options#mulitSelectable} is true, there can be multiple entries.
   */
  selectedEdges?: C3.Array<string | null> | Array<string | null>;

  /**
   * Context Menus to show on a node. Can be specified as a static list of {@link UiSdlAction} or an
   * array of {@link UiSdlDataTransform} that accepts the target node and returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported. Use the condition {@link UiSdlDataItemFieldCondition} to have conditional
   * behavior based off of the targeted node.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`.
   */
  nodeContextMenus?: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null;

  /**
   * Context Menus to show on an edge. Can be specified as a static list of {@link UiSdlAction} or an
   * array of {@link UiSdlDataTransform} that accepts the target edge and returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported. Use the condition {@link UiSdlDataItemFieldCondition} to have conditional
   * behavior based off of the targeted edge.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`.
   */
  edgeContextMenus?: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null;

  /**
   * Context Menus to show on diagram background/empty space (pane). Can be specified as a static list of
   * {@link UiSdlAction} or an array of {@link UiSdlDataTransform} that returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`. For the diagram's case, the target object will simple be `{ id: <componentId>}`.
   */
  paneContextMenus?: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null;

  /**
   * Panels on top of the {@link NodeDiagram}
   */
  panels?: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null> | Array<IUiSdlComponentRef<NodeDiagramPanel | null> | null>;

  /**
   * Internal queue to track what updates need to happen in the rendering layer.
   */
  updateQueue?: C3.Array<NodeDiagramUpdate | null> | Array<INodeDiagramUpdate | null>;
}

/**
 * A {@link UiSdlComponent} to represent a diagram of nodes and edges.
 *
 * @remarks this represents a made instance of NodeDiagram
 */
declare class NodeDiagram extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagram;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): NodeDiagram;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): NodeDiagram;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagram;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagram;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagram;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagram;

  /**
   * The children that are wrapped by the loader
   */
  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): NodeDiagram;

  /**
   * List of items that are putting this component in a loading state.
   */
  readonly loadingItems?: C3.Array<LoadingListItem | null>;
  withLoadingItems(loadingItems: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>): NodeDiagram;

  /**
   * Configurations options for the {@link NodeDiagram} that are not expected to change
   * over the course of the lifetime of the component.
   */
  readonly options?: NodeDiagram.ConfigurationOptions | null;
  withOptions(options: INodeDiagram.ConfigurationOptions | null): NodeDiagram;

  /**
   * Nodes of the {@link NodeDiagram}
   */
  readonly nodes?: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null>;
  withNodes(nodes: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null> | Array<INodeDiagramNode<NodeDiagramNodeData | null> | null>): NodeDiagram;

  /**
   * Edges of the {@link NodeDiagram}
   */
  readonly edges?: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null>;
  withEdges(edges: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null> | Array<INodeDiagramEdge<NodeDiagramEdgeData | null> | null>): NodeDiagram;

  /**
   * The ids of nodes that are selected. If {@link #options#mulitSelectable} is true, there can be multiple entries.
   */
  readonly selectedNodes?: C3.Array<string | null>;
  withSelectedNodes(selectedNodes: C3.Array<string | null> | Array<string | null>): NodeDiagram;

  /**
   * The ids of edges that are selected. If {@link #options#mulitSelectable} is true, there can be multiple entries.
   */
  readonly selectedEdges?: C3.Array<string | null>;
  withSelectedEdges(selectedEdges: C3.Array<string | null> | Array<string | null>): NodeDiagram;

  /**
   * Context Menus to show on a node. Can be specified as a static list of {@link UiSdlAction} or an
   * array of {@link UiSdlDataTransform} that accepts the target node and returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported. Use the condition {@link UiSdlDataItemFieldCondition} to have conditional
   * behavior based off of the targeted node.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`.
   */
  readonly nodeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withNodeContextMenus(nodeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  /**
   * Context Menus to show on an edge. Can be specified as a static list of {@link UiSdlAction} or an
   * array of {@link UiSdlDataTransform} that accepts the target edge and returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported. Use the condition {@link UiSdlDataItemFieldCondition} to have conditional
   * behavior based off of the targeted edge.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`.
   */
  readonly edgeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withEdgeContextMenus(edgeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  /**
   * Context Menus to show on diagram background/empty space (pane). Can be specified as a static list of
   * {@link UiSdlAction} or an array of {@link UiSdlDataTransform} that returns a list of
   * {@link UiSdlAction}s.
   * Note that {@link UiSdlAction#hiddenCondition} and {@link UiSdlAction#disabledCondition}
   * are both supported.
   * If using {@link UiSdlDataTransform}, the input will be an object of
   * { target: <targetObject>, targetType: string enum('node', 'edge', 'diagram')} and is expected
   * to return `[UiSdlAction]`. For the diagram's case, the target object will simple be `{ id: <componentId>}`.
   */
  readonly paneContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withPaneContextMenus(paneContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  /**
   * Panels on top of the {@link NodeDiagram}
   */
  readonly panels?: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null>;
  withPanels(panels: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null> | Array<IUiSdlComponentRef<NodeDiagramPanel | null> | null>): NodeDiagram;

  /**
   * Internal queue to track what updates need to happen in the rendering layer.
   */
  readonly updateQueue?: C3.Array<NodeDiagramUpdate | null>;
  withUpdateQueue(updateQueue: C3.Array<NodeDiagramUpdate | null> | Array<INodeDiagramUpdate | null>): NodeDiagram;

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
  static fromJson(json: any | null): NodeDiagram | null;

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
  static fromJsonString(json: string | null): NodeDiagram | null;

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
  static fromXmlString(xml: string | null): NodeDiagram | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): NodeDiagram | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): NodeDiagram;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): NodeDiagram;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): NodeDiagram;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<NodeDiagram | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<NodeDiagram | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): NodeDiagram;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): NodeDiagram;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): NodeDiagram;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): NodeDiagram;

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
  withField(field: string, value: any, doNotConvert?: boolean): NodeDiagram;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): NodeDiagram;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): NodeDiagram;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): NodeDiagram;

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
  withoutFieldAtPath(path: string): NodeDiagram;

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
  withoutField(field: string | null): NodeDiagram;

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
  withoutField(field: FieldType | null): NodeDiagram;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): NodeDiagram;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): NodeDiagram;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): NodeDiagram;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): NodeDiagram;

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
  defaultField(field: string): NodeDiagram;

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
  defaultField(field: FieldType): NodeDiagram;

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
  unsetField(field: string): NodeDiagram;

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
  unsetField(field: FieldType): NodeDiagram;

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
  removeField(field: string): NodeDiagram;

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
  removeField(field: FieldType): NodeDiagram;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): NodeDiagram;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): NodeDiagram;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): NodeDiagram;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): NodeDiagram;

  mergeJson(json: any | null): NodeDiagram;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): NodeDiagram;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): NodeDiagram;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<NodeDiagram | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<NodeDiagram | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<NodeDiagram | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<NodeDiagram | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<NodeDiagram | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, NodeDiagram | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, NodeDiagram | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<NodeDiagram | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<NodeDiagram | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): NodeDiagram;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): NodeDiagram;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): NodeDiagram;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): NodeDiagram;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): NodeDiagram;

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
  static make(fields: any, withDefaults?: boolean): NodeDiagram;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): NodeDiagram | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): NodeDiagram;

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
  afterMake(): NodeDiagram;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): NodeDiagram;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<NodeDiagram>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): NodeDiagram;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<NodeDiagram | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<NodeDiagram | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<NodeDiagram | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<NodeDiagram | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<NodeDiagram | null>;

  save(subPath?: string | null, contentType?: string | null): NodeDiagram;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: NodeDiagram | null, spec?: UpsertSpec | null): NodeDiagram | null;

  upsert(srcObj?: NodeDiagram | null, spec?: UpsertSpec | null): NodeDiagram | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): NodeDiagram | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): NodeDiagram | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: NodeDiagram, state: UiSdlReduxState): NodeDiagram | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Triggered when the component should update the {@link LoaderList#loadingItems}.
   *
   * @param id
   *    The id of the component
   * @param loadingItems
   *    The loading items to add. the items will be placed at the front of the list.
   * @return
   *    A {@link UiSdlReduxAction} action for this event
   */
  static addLoadingItemsAction(id: string, loadingItems?: C3.Array<LoadingListItem | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `LOADING_ITEMS_ADD` and updates the redux store
   *
   * @param state
   *    The current Redux state
   * @param action
   *    The Redux action
   * @return
   *    The new Redux state with an updated {@link #isLoading}
   */
  static loadingItemsAddReducer(state?: UiSdlReduxState | null, action?: UiSdlReduxAction<any> | null): UiSdlReduxState | null;

  /**
   * Triggered when the component should update the {@link LoaderList#loadingItems}.
   *
   * @param id
   *    The id of the component
   * @param itemKeys
   *    The items to remove.
   * @return
   *    A {@link UiSdlReduxAction} action for this event
   */
  static removeLoadingItemsAction(id: string, itemKeys?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `LOADING_ITEMS_REMOVE` and updates the redux store
   *
   * @param state
   *    The current Redux state
   * @param action
   *    The Redux action
   * @return
   *    The new Redux state with an updated {@link #isLoading}
   */
  static loadingItemsRemoveReducer(state?: UiSdlReduxState | null, action?: UiSdlReduxAction<any> | null): UiSdlReduxState | null;

  /**
   * All the current nodes represented in {@link NodeDiagram}.
   */
  static getNodes(componentId: string, state: UiSdlReduxState): C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null>;

  /**
   * All the current edges represented in {@link NodeDiagram}.
   */
  static getEdges(componentId: string, state: UiSdlReduxState): C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null>;

  /**
   * Returns the current node stored in Redux state
   */
  static getNode(componentId: string, state: UiSdlReduxState, nodeId: string): NodeDiagramNode<NodeDiagramNodeData | null> | null;

  /**
   * Returns the current edge stored in Redux state
   */
  static getEdge(componentId: string, state: UiSdlReduxState, edgeId: string): NodeDiagramEdge<NodeDiagramEdgeData | null> | null;

  /**
   * Returns the selected shapes.
   * @param componentId
   *          ComponentId of the {@link NodeDiagram}
   * @param kind
   *          Isolate which selections to return. If not specified, both nodes and edges will be returned
   * @return If `kind` is specified, an array of selected ids. If `kind` is not specified, an object with `nodes` and `edges`
   *         and their respective selections.
   */
  static getSelected(componentId: string, state: UiSdlReduxState, kind?: string | null): C3.Array<string | null> | [nodes: C3.Array<string | null>, edges: C3.Array<string | null>] | null | null;

  /**
   * Get the {@link #options} for the {@link NodeDiagram} with given componentId.
   */
  static getOptions(componentId: string, state: UiSdlReduxState): NodeDiagram.ConfigurationOptions | null;

  /**
   * Creates a {@link NodeDiagramUpdate} of type `LAYOUT` to trigger a layout update based on the desired orientation, adjusting the viewport to the desired orientation.
   * The default orientation is {@link NodeDiagramOrientation#CENTER}, which will leave the viewport as the fitted view.
   * @param orientation
   *          The desired orientation for the layout.
   * @return A {@link NodeDiagramUpdate} of type `LAYOUT` with the desired orientation.
   */
  static createLayoutUpdate(orientation: string): NodeDiagramUpdate | null;

  /**
   * Triggered when a node's action is dispatched.
   * System supported actions include:
   * 1. `{ actionSuffix: 'SELECT', actionData: { id: string, multiSelect: boolean, source: string } }`
   *     - Where 'source' can give information about the source of the selection (e.g., 'click', 'contextMenu').
   *     - If {@link multiSelect} is true, it is possible that the target item is being unselected (via clicking an already selected item).
   *
   * @param componentId
   *            Id of the component.
   * @param nodeId
   *            The node that was acted on
   * @param actionSuffix
   *           The action that was clicked.
   * @param actionData
   *           The data associated with the action.
   */
  static triggerNodeAction(componentId: string, nodeId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Triggered when a node's context menu is clicked.
   */
  static nodeContextMenuClickAction(componentId: string, nodeId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Event triggered when the SVG gets generated {@see takeSnapshotEpic} for the NodeDiagram with given componentId.
   * Download process is initiated but not necessarily completed (probably several seconds).
   */
  static nodeDiagramDownloadResultAction(componentId: string, result: string): UiSdlReduxAction<any>;

  /**
   * Triggered when an edge's action is dispatched, i.e. via an action button click.
   * System supported actions include:
   * 1. `{ actionSuffix: 'SELECT', actionData: { id: string, multiSelect: boolean, source: string } }`
   *     - Where 'source' can give information about the source of the selection (e.g., 'click', 'contextMenu').
   *     - If {@link multiSelect} is true, it is possible that the target item is being unselected (via clicking an already selected item).
   *
   * @param componentId
   *            id of the component.
   * @param edgeId
   *            Edge id
   * @param actionSuffix
   *           The action that was clicked.
   * @param actionData
   *           The data associated with the action
   */
  static triggerEdgeAction(componentId: string, edgeId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Triggered when a edge's context menu is clicked.
   */
  static edgeContextMenuClickAction(componentId: string, edgeId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Triggered when an action from the pane (empty space on canvas) is dispatched.
   * System supported actions include:
   * 1. { actionSuffix: 'MULTI_SELECT', actionData: { selected: { nodes: [string], edges: [string] }, source: string } }
   *      - This action allows selection of multiple nodes and edges. Where 'source' can give information about the source of the multiselection.
   * 2. { actionSuffix: 'CLEAR_SELECTION', actionData: { source: string }}
   *      - This action unselects any selected items. Where 'source' can give information about the source of the multiselection.
   * 3. { actionSuffix: 'SELECTION_CHANGED', actionData: { source: string }}
   *      - This is triggered when any selection has changed. `source` can give indication of origin of the selection change (ex: 'click').
   *
   * @param componentId
   *            Id of the component.
   * @param actionSuffix
   *           The key identifier for the action
   * @param actionData
   *           The data associated with the action
   */
  static triggerPaneAction(componentId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Triggered when the background of the pane's context menu is clicked.
   */
  static paneContextMenuClickAction(id: string, diagramId: string, actionSuffix: string, actionData: any): UiSdlReduxAction<any>;

  /**
   * Dispatches an action of type `TAKE_SNAPSHOT`
   */
  static takeSnapshotAction(componentId: string): UiSdlReduxAction<any>;

  /**
   * Updates redux state when selection changes (in multiple ways).
   */
  static updateSelectionReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Dispatches an action of type `PANE_ACTION_SELECTION_CHANGED` when selection state of nodes and edges have been updated.
   */
  static selectionChangedEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Downloads an svg of the current diagram view
   */
  static takeSnapshotEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggered when an update to the diagram is desired. Updates through this action will
   * result in re-renders. To simply make changes to the state, utilize {@link #internalUpdateDiagramAction}.
   *
   * @param componentId
   *    The id of the {@link NodeDiagram}
   * @param {@link UiSdlDiagramShape}s
   *    Array of {@link NodeDiagramUpdate}s with updated data
   * @return
   *    A {@link UiSdlReduxAction} action for updates
   */
  static updateDiagramAction(componentId: string, updates?: C3.Array<NodeDiagramUpdate | null>): UiSdlReduxState;

  /**
   * Listens for actions of type `DIAGRAM_UPDATE` and updates diagram.
   *
   * @param state
   *    The current Redux state
   * @param action
   *    The Redux action
   * @return
   *    The new Redux state with an updated {@link #shapeMap}
   */
  static updateDiagramReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens to INITIAL_RENDER and includes a `LAYOUT` update if {@link #options#layout#autoLayout} is true
   * and there are nodes already present.
   */
  static autoLayoutReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when an internal update to the diagram is desired. Updates through this action will NOT trigger
   * re-renders.
   *
   * @param componentId
   *    The id of the {@link NodeDiagram}
   * @param {@link UiSdlDiagramShape}s
   *    Array of {@link NodeDiagramUpdate}s with updated data
   * @return
   *    A {@link UiSdlReduxAction} action for updates
   */
  static internalUpdateDiagramAction(componentId: string, updates?: C3.Array<NodeDiagramUpdate | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `INTERNAL_DIAGRAM_UPDATE` and updates diagram..
   *
   * @param state
   *    The current Redux state
   * @param action
   *    The Redux action
   * @return
   *    The new Redux state with an updated {@link #shapeMap}
   */
  static internalUpdateDiagramReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;
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
