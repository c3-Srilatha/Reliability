export interface UiSdlDiagramHierarchicalLayout {

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramHierarchicalLayout;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlDiagramHierarchicalLayout;

  readonly intraShapeSpacing?: number | null;
  withIntraShapeSpacing(intraShapeSpacing: number | null): UiSdlDiagramHierarchicalLayout;

  readonly interRankShapeSpacing?: number | null;
  withInterRankShapeSpacing(interRankShapeSpacing: number | null): UiSdlDiagramHierarchicalLayout;

  readonly interHierarchySpacing?: number | null;
  withInterHierarchySpacing(interHierarchySpacing: number | null): UiSdlDiagramHierarchicalLayout;

  readonly parallelEdgeSpacing?: number | null;
  withParallelEdgeSpacing(parallelEdgeSpacing: number | null): UiSdlDiagramHierarchicalLayout;

  readonly maintainHiddenShapesLocation?: boolean;
  withMaintainHiddenShapesLocation(maintainHiddenShapesLocation: boolean): UiSdlDiagramHierarchicalLayout;
}

