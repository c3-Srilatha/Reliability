export interface UiSdlSearchableSearchLoadingSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchableSearchLoadingSetAction;

  readonly payload?: UiSdlSearchableSearchLoadingSetPayload | null;
  withPayload(payload: IUiSdlSearchableSearchLoadingSetPayload | null): UiSdlSearchableSearchLoadingSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchableSearchLoadingSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchableSearchLoadingSetAction;
}

