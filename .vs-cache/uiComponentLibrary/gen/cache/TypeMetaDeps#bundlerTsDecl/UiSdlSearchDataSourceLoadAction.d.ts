export interface UiSdlSearchDataSourceLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchDataSourceLoadAction;

  readonly payload?: UiSdlSearchDataSourceLoadPayload | null;
  withPayload(payload: IUiSdlSearchDataSourceLoadPayload | null): UiSdlSearchDataSourceLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchDataSourceLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchDataSourceLoadAction;
}

