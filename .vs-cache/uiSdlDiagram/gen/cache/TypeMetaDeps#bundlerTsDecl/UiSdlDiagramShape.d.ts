export interface UiSdlDiagramShape {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramShape;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramShape;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramShape;
}

