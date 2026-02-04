export interface UiSdlDataSourceFieldMapSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSourceFieldMapSetAction;

  readonly payload?: UiSdlDataSourceFieldMapSetPayload | null;
  withPayload(payload: IUiSdlDataSourceFieldMapSetPayload | null): UiSdlDataSourceFieldMapSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSourceFieldMapSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSourceFieldMapSetAction;
}

