export interface UiSdlGraphVisualizationSetMergedEdgeMappingActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetMergedEdgeMappingActionPayload;

  readonly mergedEdgeMapping?: C3.Map<string | null, string | null>;
  withMergedEdgeMapping(mergedEdgeMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphVisualizationSetMergedEdgeMappingActionPayload;
}

