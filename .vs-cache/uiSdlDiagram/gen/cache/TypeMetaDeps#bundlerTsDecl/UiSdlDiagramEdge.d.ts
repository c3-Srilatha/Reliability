export interface UiSdlDiagramEdge {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramEdge;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramEdge;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramEdge;
}

