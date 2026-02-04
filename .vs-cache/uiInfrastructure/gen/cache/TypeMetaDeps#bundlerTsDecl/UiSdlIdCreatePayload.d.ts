export interface UiSdlIdCreatePayload {

  readonly dataSourceId?: string | null;
  withDataSourceId(dataSourceId: string | null): UiSdlIdCreatePayload;
}

