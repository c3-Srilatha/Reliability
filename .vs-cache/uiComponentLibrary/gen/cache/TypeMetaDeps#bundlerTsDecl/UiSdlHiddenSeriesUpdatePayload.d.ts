export interface UiSdlHiddenSeriesUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHiddenSeriesUpdatePayload;

  readonly data?: C3.Array<string | null>;
  withData(data: C3.Array<string | null> | Array<string | null>): UiSdlHiddenSeriesUpdatePayload;
}

