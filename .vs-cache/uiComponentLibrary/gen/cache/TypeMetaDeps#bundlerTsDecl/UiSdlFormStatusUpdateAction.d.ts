export interface UiSdlFormStatusUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormStatusUpdateAction;

  readonly payload?: UiSdlFormStatusUpdatePayload | null;
  withPayload(payload: IUiSdlFormStatusUpdatePayload | null): UiSdlFormStatusUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormStatusUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormStatusUpdateAction;
}

