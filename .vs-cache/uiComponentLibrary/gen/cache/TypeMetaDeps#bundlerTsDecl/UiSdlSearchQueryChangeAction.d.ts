export interface UiSdlSearchQueryChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchQueryChangeAction;

  readonly payload?: UiSdlSearchQueryChangePayload | null;
  withPayload(payload: IUiSdlSearchQueryChangePayload | null): UiSdlSearchQueryChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchQueryChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchQueryChangeAction;
}

