export interface UiSdlModalOpenCloseAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlModalOpenCloseAction;

  readonly payload?: UiSdlModalOpenClosePayload | null;
  withPayload(payload: IUiSdlModalOpenClosePayload | null): UiSdlModalOpenCloseAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlModalOpenCloseAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlModalOpenCloseAction;
}

