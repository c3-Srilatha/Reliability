export interface UiSdlColumnSelectPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlColumnSelectPayload;

  readonly columnConfig?: any | null;
  withColumnConfig(columnConfig: any | null): UiSdlColumnSelectPayload;
}

