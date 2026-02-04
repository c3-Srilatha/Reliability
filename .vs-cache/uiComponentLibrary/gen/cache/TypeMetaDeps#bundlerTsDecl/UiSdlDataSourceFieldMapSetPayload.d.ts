export interface UiSdlDataSourceFieldMapSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataSourceFieldMapSetPayload;

  readonly searchDataSourceId?: string | null;
  withSearchDataSourceId(searchDataSourceId: string | null): UiSdlDataSourceFieldMapSetPayload;

  readonly fieldMap?: any | null;
  withFieldMap(fieldMap: any | null): UiSdlDataSourceFieldMapSetPayload;
}

