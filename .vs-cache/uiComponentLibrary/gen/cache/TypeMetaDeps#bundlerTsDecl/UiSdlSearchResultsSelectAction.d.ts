export interface UiSdlSearchResultsSelectAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchResultsSelectAction;

  readonly payload?: UiSdlSearchResultsSelectPayload | null;
  withPayload(payload: IUiSdlSearchResultsSelectPayload | null): UiSdlSearchResultsSelectAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchResultsSelectAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchResultsSelectAction;
}

