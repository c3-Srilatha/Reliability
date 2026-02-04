export interface UiSdlBaseDataGridSelectionChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBaseDataGridSelectionChangeAction;

  readonly payload?: UiSdlBaseDataGridSelectionChangePayload | null;
  withPayload(payload: IUiSdlBaseDataGridSelectionChangePayload | null): UiSdlBaseDataGridSelectionChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBaseDataGridSelectionChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBaseDataGridSelectionChangeAction;
}

