export interface UiSdlSelectAllTogglePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSelectAllTogglePayload;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlSelectAllTogglePayload;
}

