export interface UiSdlDataSourceTypesLoadPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataSourceTypesLoadPayload;

  readonly searchDataSourceId?: string | null;
  withSearchDataSourceId(searchDataSourceId: string | null): UiSdlDataSourceTypesLoadPayload;
}

