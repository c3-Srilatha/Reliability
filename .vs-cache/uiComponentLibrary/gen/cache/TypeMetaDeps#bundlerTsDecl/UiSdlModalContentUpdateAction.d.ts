export interface UiSdlModalContentUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlModalContentUpdateAction;

  readonly payload?: UiSdlModalContentUpdatePayload | null;
  withPayload(payload: IUiSdlModalContentUpdatePayload | null): UiSdlModalContentUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlModalContentUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlModalContentUpdateAction;
}

