export interface UiSdlBaseDataGridCheckboxPrimaryButtonAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBaseDataGridCheckboxPrimaryButtonAction;

  readonly payload?: UiSdlBaseDataGridCheckboxPrimaryButtonPayload | null;
  withPayload(payload: IUiSdlBaseDataGridCheckboxPrimaryButtonPayload | null): UiSdlBaseDataGridCheckboxPrimaryButtonAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBaseDataGridCheckboxPrimaryButtonAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBaseDataGridCheckboxPrimaryButtonAction;
}

