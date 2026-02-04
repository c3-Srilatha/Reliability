export interface NodeDiagramNodeData {

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramNodeData;
}

