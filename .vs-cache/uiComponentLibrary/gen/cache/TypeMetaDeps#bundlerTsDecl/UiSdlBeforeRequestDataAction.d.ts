export interface UiSdlBeforeRequestDataAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBeforeRequestDataAction;

  readonly payload?: UiSdlBeforeRequestDataPayload | null;
  withPayload(payload: IUiSdlBeforeRequestDataPayload | null): UiSdlBeforeRequestDataAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBeforeRequestDataAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBeforeRequestDataAction;
}

