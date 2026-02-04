export interface UiSdlDiagramNodeCoordinates {

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramNodeCoordinates;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramNodeCoordinates;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramNodeCoordinates;
}

