export interface UiSdlDataRequestAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataRequestAction;

  readonly payload?: UiSdlDataRequestPayload | null;
  withPayload(payload: IUiSdlDataRequestPayload | null): UiSdlDataRequestAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataRequestAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataRequestAction;
}

