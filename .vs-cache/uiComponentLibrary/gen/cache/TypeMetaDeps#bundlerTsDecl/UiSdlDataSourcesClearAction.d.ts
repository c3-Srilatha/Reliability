export interface UiSdlDataSourcesClearAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSourcesClearAction;

  readonly payload?: UiSdlDataSourcesClearPayload | null;
  withPayload(payload: IUiSdlDataSourcesClearPayload | null): UiSdlDataSourcesClearAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSourcesClearAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSourcesClearAction;
}

