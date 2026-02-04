export interface NodeElkLayoutContext {

  readonly getNodePartitionIndex?: λFunction<NodeDiagramNode<NodeDiagramNodeData | null>, number | null> | null;
  withGetNodePartitionIndex(getNodePartitionIndex: λFunction<NodeDiagramNode<NodeDiagramNodeData | null>, number | null> | null): NodeElkLayoutContext;
}


interface λFunction<T, R> {
  (t: T): R
}
