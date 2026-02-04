export interface UiSdlDataSourceTypesLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSourceTypesLoadAction;

  readonly payload?: UiSdlDataSourceTypesLoadPayload | null;
  withPayload(payload: IUiSdlDataSourceTypesLoadPayload | null): UiSdlDataSourceTypesLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSourceTypesLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSourceTypesLoadAction;
}

