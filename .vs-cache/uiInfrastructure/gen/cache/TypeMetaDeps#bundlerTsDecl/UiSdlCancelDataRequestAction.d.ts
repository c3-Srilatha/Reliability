export interface UiSdlCancelDataRequestAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCancelDataRequestAction;

  readonly payload?: UiSdlReduxActionPayload | null;
  withPayload(payload: IUiSdlReduxActionPayload | null): UiSdlCancelDataRequestAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCancelDataRequestAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCancelDataRequestAction;
}

