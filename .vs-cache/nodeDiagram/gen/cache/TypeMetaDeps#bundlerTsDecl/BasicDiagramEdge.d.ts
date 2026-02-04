export interface BasicDiagramEdge {

  readonly pathType?: string | null;
  withPathType(pathType: string | null): BasicDiagramEdge;
}

