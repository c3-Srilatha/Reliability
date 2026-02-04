export interface UiSdlPathAndPageParamsConfirmAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPathAndPageParamsConfirmAction;

  readonly payload?: UiSdlCurrentPathSetPayload | null;
  withPayload(payload: IUiSdlCurrentPathSetPayload | null): UiSdlPathAndPageParamsConfirmAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPathAndPageParamsConfirmAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPathAndPageParamsConfirmAction;
}

