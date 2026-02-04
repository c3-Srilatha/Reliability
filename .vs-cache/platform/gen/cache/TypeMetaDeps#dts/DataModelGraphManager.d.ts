// TypeScript definitions for the C3 type DataModelGraphManager

/**
 * @remarks this represents a value passed to a method that expects an instance of DataModelGraphManager
 */
declare interface IDataModelGraphManager {
}

/**
 * @remarks this represents a made instance of DataModelGraphManager
 */
declare class DataModelGraphManager {

  /**
   * Constructs a graph of {@link GlobalCanvasGraphNode}s and {@link GlobalCanvasGraphEdge}s representing the relationships between
   * {@link Persistable} {@TypeMeta}
   */
  static relationshipGraph(): GlobalCanvasGraphAndContext | null;
}

