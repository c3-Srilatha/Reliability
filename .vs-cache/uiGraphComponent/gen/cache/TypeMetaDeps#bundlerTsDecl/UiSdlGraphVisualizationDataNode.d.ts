export interface UiSdlGraphVisualizationDataNode {

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationDataNode;

  readonly data?: C3.Map<string | null, any>;
  withData(data: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationDataNode;
}

