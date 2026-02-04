export interface UiSdlDataSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSetAction;

  readonly payload?: UiSdlDataSetPayload | null;
  withPayload(payload: IUiSdlDataSetPayload | null): UiSdlDataSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSetAction;
}

