export interface UiSdlBaseDataGridCheckboxSecondaryButtonAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBaseDataGridCheckboxSecondaryButtonAction;

  readonly payload?: UiSdlBaseDataGridCheckboxSecondaryButtonPayload | null;
  withPayload(payload: IUiSdlBaseDataGridCheckboxSecondaryButtonPayload | null): UiSdlBaseDataGridCheckboxSecondaryButtonAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBaseDataGridCheckboxSecondaryButtonAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBaseDataGridCheckboxSecondaryButtonAction;
}

