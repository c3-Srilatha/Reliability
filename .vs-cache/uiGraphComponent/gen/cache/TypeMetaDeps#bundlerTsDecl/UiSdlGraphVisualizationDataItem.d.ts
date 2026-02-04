export interface UiSdlGraphVisualizationDataItem {

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationDataItem;

  readonly data?: C3.Map<string | null, any>;
  withData(data: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationDataItem;
}

