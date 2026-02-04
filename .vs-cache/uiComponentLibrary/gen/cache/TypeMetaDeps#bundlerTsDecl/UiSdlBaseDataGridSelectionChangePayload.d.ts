export interface UiSdlBaseDataGridSelectionChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBaseDataGridSelectionChangePayload;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlBaseDataGridSelectionChangePayload;

  readonly id: string;
  withId(id: string): UiSdlBaseDataGridSelectionChangePayload;
}

