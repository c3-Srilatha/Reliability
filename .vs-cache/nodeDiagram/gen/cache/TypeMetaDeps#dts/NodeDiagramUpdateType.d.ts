// TypeScript definitions for the C3 type NodeDiagramUpdateType

/**
 * Enumerates the types of updates that can be made to the {@link NodeDiagram} instance
 *
 * @remarks this represents a value passed to a method that expects an instance of NodeDiagramUpdateType
 */
declare interface INodeDiagramUpdateType {

  /**
   * Add a node to the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramNode} instance.
   */
  readonly ADD_NODE: "ADD_NODE";

  /**
   * Add an edge to the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramEdge} instance.
   */
  readonly ADD_EDGE: "ADD_EDGE";

  /**
   * Remove a node in the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is {@link NodeDiagramNode#id}.
   */
  readonly REMOVE_NODE: "REMOVE_NODE";

  /**
   * Remove an edge to the {@link NodeDiagram}
   * {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is the {@link NodeDiagramEdge#id}.
   */
  readonly REMOVE_EDGE: "REMOVE_EDGE";

  /**
   * Update a node to the {@link NodeDiagram}.
   * The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramNode}, including the
   * merging of {@link NodeDiagramNode#data}.
   */
  readonly UPDATE_NODE: "UPDATE_NODE";

  /**
   * Update an edge to the {@link NodeDiagram}.
   * The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramEdge}, including the
   * merging of {@link NodeDiagramEdge#data}.
   */
  readonly UPDATE_EDGE: "UPDATE_EDGE";

  /**
   * Sets the entire {@link NodeDiagram} state for `nodes` and `edges`.
   * The {@link NodeDiagramUpdate#data} is expected to be a json structured
   * ```
   * {nodes: [NodeDiagramNode], edges: [NodeDiagramEdge]}
   * ```
   */
  readonly SET_DIAGRAM: "SET_DIAGRAM";

  readonly VISIBILITY: "VISIBILITY";

  /**
   * Centers the view port on a specific node.
   * {@link NodeDiagramUpdate#data} is expected to be `{ nodeId: string, zoom: int }` where nodeId is the {@link NodeDiagramNode#id},
   * `zoom` is the factor to zoom in by (default to 2).
   */
  readonly CENTER: "CENTER";

  /**
   * Lays out the nodes in the {@link NodeDiagram} and re-renders the diagram.
   * The {@link NodeDiagramUpdate#data} is expected to be { fitView: boolean }
   * - `fitView` true if the view port should be changed to fit the entire diagram.
   */
  readonly LAYOUT: "LAYOUT";

  /**
   * Fit the diagram into view port.
   */
  readonly FITVIEW: "FITVIEW";

  /**
   * Pan the diagram to have the selected node to avoid the given area.
   * {@link NodeDiagramUpdate#data} is expected to be:
   * `{
   *    diagramSelector: string
   *    selectedNodeId: string,
   *    moveDirection: string,
   *    horizontalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}],
   *    verticalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}]
   *  }`
   * where the `diagramSelector` is the unique selector for the diagram to target. `selectedNodeId` is the id for the
   * node to target, `moveDirection` is either `upLeft` or `downRight`, to indicate the direction to have the node in
   * respect to the 2 areas to avoid.
   * `horizontalAreaToAvoid` and `verticalAreaToAvoid` are regions to avoid in the window, and the x, y values are in pixels from the upperLeft corner (with coordinate 0, 0) of the window, with positive direction to the right or down.
   * Negative values for x/y stand for (windowWidth/windowHeight - the according value), to facilitate user to define the area easily.
   */
  readonly PAN_TO_AVOID: "PAN_TO_AVOID";
}

/**
 * Enumerates the types of updates that can be made to the {@link NodeDiagram} instance
 *
 * @remarks this represents a made instance of NodeDiagramUpdateType
 */
declare class NodeDiagramUpdateType {

  /**
   * Add a node to the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramNode} instance.
   */
  static readonly ADD_NODE: "ADD_NODE";

  /**
   * Add an edge to the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramEdge} instance.
   */
  static readonly ADD_EDGE: "ADD_EDGE";

  /**
   * Remove a node in the {@link NodeDiagram}.
   * {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is {@link NodeDiagramNode#id}.
   */
  static readonly REMOVE_NODE: "REMOVE_NODE";

  /**
   * Remove an edge to the {@link NodeDiagram}
   * {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is the {@link NodeDiagramEdge#id}.
   */
  static readonly REMOVE_EDGE: "REMOVE_EDGE";

  /**
   * Update a node to the {@link NodeDiagram}.
   * The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramNode}, including the
   * merging of {@link NodeDiagramNode#data}.
   */
  static readonly UPDATE_NODE: "UPDATE_NODE";

  /**
   * Update an edge to the {@link NodeDiagram}.
   * The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramEdge}, including the
   * merging of {@link NodeDiagramEdge#data}.
   */
  static readonly UPDATE_EDGE: "UPDATE_EDGE";

  /**
   * Sets the entire {@link NodeDiagram} state for `nodes` and `edges`.
   * The {@link NodeDiagramUpdate#data} is expected to be a json structured
   * ```
   * {nodes: [NodeDiagramNode], edges: [NodeDiagramEdge]}
   * ```
   */
  static readonly SET_DIAGRAM: "SET_DIAGRAM";

  static readonly VISIBILITY: "VISIBILITY";

  /**
   * Centers the view port on a specific node.
   * {@link NodeDiagramUpdate#data} is expected to be `{ nodeId: string, zoom: int }` where nodeId is the {@link NodeDiagramNode#id},
   * `zoom` is the factor to zoom in by (default to 2).
   */
  static readonly CENTER: "CENTER";

  /**
   * Lays out the nodes in the {@link NodeDiagram} and re-renders the diagram.
   * The {@link NodeDiagramUpdate#data} is expected to be { fitView: boolean }
   * - `fitView` true if the view port should be changed to fit the entire diagram.
   */
  static readonly LAYOUT: "LAYOUT";

  /**
   * Fit the diagram into view port.
   */
  static readonly FITVIEW: "FITVIEW";

  /**
   * Pan the diagram to have the selected node to avoid the given area.
   * {@link NodeDiagramUpdate#data} is expected to be:
   * `{
   *    diagramSelector: string
   *    selectedNodeId: string,
   *    moveDirection: string,
   *    horizontalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}],
   *    verticalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}]
   *  }`
   * where the `diagramSelector` is the unique selector for the diagram to target. `selectedNodeId` is the id for the
   * node to target, `moveDirection` is either `upLeft` or `downRight`, to indicate the direction to have the node in
   * respect to the 2 areas to avoid.
   * `horizontalAreaToAvoid` and `verticalAreaToAvoid` are regions to avoid in the window, and the x, y values are in pixels from the upperLeft corner (with coordinate 0, 0) of the window, with positive direction to the right or down.
   * Negative values for x/y stand for (windowWidth/windowHeight - the according value), to facilitate user to define the area easily.
   */
  static readonly PAN_TO_AVOID: "PAN_TO_AVOID";

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
