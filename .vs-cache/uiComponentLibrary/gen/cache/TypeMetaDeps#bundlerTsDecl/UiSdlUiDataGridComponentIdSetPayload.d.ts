export interface UiSdlUiDataGridComponentIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUiDataGridComponentIdSetPayload;

  readonly uiDataGridComponentId?: string | null;
  withUiDataGridComponentId(uiDataGridComponentId: string | null): UiSdlUiDataGridComponentIdSetPayload;
}

