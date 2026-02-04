export interface UiSdlInputEnableDisableAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputEnableDisableAction;

  readonly payload?: UiSdlInputEnableDisablePayload | null;
  withPayload(payload: IUiSdlInputEnableDisablePayload | null): UiSdlInputEnableDisableAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputEnableDisableAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputEnableDisableAction;
}

