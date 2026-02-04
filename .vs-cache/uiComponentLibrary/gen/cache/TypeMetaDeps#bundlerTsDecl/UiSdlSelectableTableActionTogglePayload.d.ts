export interface UiSdlSelectableTableActionTogglePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSelectableTableActionTogglePayload;

  readonly actionSuffix: string;
  withActionSuffix(actionSuffix: string): UiSdlSelectableTableActionTogglePayload;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlSelectableTableActionTogglePayload;
}

