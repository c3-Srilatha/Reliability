export interface UiSdlFilterInputEnableDisableAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFilterInputEnableDisableAction;

  readonly payload?: UiSdlFilterInputEnableDisablePayload | null;
  withPayload(payload: IUiSdlFilterInputEnableDisablePayload | null): UiSdlFilterInputEnableDisableAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFilterInputEnableDisableAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFilterInputEnableDisableAction;
}

