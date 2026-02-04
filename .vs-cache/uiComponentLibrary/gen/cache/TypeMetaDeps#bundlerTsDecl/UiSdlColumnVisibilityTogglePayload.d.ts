export interface UiSdlColumnVisibilityTogglePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlColumnVisibilityTogglePayload;

  readonly columnId: string;
  withColumnId(columnId: string): UiSdlColumnVisibilityTogglePayload;
}

