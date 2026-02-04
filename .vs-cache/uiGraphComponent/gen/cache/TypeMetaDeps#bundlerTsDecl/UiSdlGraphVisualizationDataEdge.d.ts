export interface UiSdlGraphVisualizationDataEdge {

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationDataEdge;

  readonly data?: C3.Map<string | null, any>;
  withData(data: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationDataEdge;

  readonly id1?: string | null;
  withId1(id1: string | null): UiSdlGraphVisualizationDataEdge;

  readonly id2?: string | null;
  withId2(id2: string | null): UiSdlGraphVisualizationDataEdge;
}

