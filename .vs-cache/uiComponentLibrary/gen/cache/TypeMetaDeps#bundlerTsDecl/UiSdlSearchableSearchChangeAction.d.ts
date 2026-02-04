export interface UiSdlSearchableSearchChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchableSearchChangeAction;

  readonly payload?: UiSdlSearchableSearchChangePayload | null;
  withPayload(payload: IUiSdlSearchableSearchChangePayload | null): UiSdlSearchableSearchChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchableSearchChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchableSearchChangeAction;
}

