// TypeScript definitions for the C3 type UiSdlDiagramShapeRenderUpdateType

/**
 * Enumeration of the kinds of {@link UiSdlDiagramShape} updates that can take plcae on {@link UiSdlDiagram}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlDiagramShapeRenderUpdateType
 */
declare interface IUiSdlDiagramShapeRenderUpdateType {

  /**
   * Signifies a shape has been added to the graph
   */
  readonly ADD: "ADD";

  /**
   * Signifies a shape has been removed from the graph
   */
  readonly REMOVE: "REMOVE";

  /**
   * Signifies a shape has changed positions on the graph
   */
  readonly POSITION: "POSITION";

  /**
   * Signifies a shape's visiblility on the diagram
   */
  readonly VISIBILITY: "VISIBILITY";

  /**
   * Signifies a shape on the graph has had it's instance replaced
   */
  readonly REPLACE: "REPLACE";

  /**
   * Signifies a shape on the graph has had it's value modified
   */
  readonly UPDATE: "UPDATE";

  /**
   * Signifies a shape on the graph has been expanded (this is currently only defined for nodes)
   */
  readonly EXPAND: "EXPAND";

  /**
   * Signifies a shape on the graph has been collapsed (this is currently only defined for nodes)
   */
  readonly COLLAPSE: "COLLAPSE";

  /**
   * Whether or not the graph should recalculate the layout for all nodes
   */
  readonly EXECUTE_LAYOUT: "EXECUTE_LAYOUT";

  /**
   * Signifies a shape on the graph should be centered in the view port
   */
  readonly CENTER: "CENTER";

  /**
   * Signifies the graph should be cleared of all shapes
   */
  readonly CLEAR: "CLEAR";
}

/**
 * Enumeration of the kinds of {@link UiSdlDiagramShape} updates that can take plcae on {@link UiSdlDiagram}.
 *
 * @remarks this represents a made instance of UiSdlDiagramShapeRenderUpdateType
 */
declare class UiSdlDiagramShapeRenderUpdateType {

  /**
   * Signifies a shape has been added to the graph
   */
  static readonly ADD: "ADD";

  /**
   * Signifies a shape has been removed from the graph
   */
  static readonly REMOVE: "REMOVE";

  /**
   * Signifies a shape has changed positions on the graph
   */
  static readonly POSITION: "POSITION";

  /**
   * Signifies a shape's visiblility on the diagram
   */
  static readonly VISIBILITY: "VISIBILITY";

  /**
   * Signifies a shape on the graph has had it's instance replaced
   */
  static readonly REPLACE: "REPLACE";

  /**
   * Signifies a shape on the graph has had it's value modified
   */
  static readonly UPDATE: "UPDATE";

  /**
   * Signifies a shape on the graph has been expanded (this is currently only defined for nodes)
   */
  static readonly EXPAND: "EXPAND";

  /**
   * Signifies a shape on the graph has been collapsed (this is currently only defined for nodes)
   */
  static readonly COLLAPSE: "COLLAPSE";

  /**
   * Whether or not the graph should recalculate the layout for all nodes
   */
  static readonly EXECUTE_LAYOUT: "EXECUTE_LAYOUT";

  /**
   * Signifies a shape on the graph should be centered in the view port
   */
  static readonly CENTER: "CENTER";

  /**
   * Signifies the graph should be cleared of all shapes
   */
  static readonly CLEAR: "CLEAR";

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
