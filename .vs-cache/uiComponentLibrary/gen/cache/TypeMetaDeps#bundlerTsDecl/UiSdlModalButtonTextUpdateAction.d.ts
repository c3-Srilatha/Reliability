export interface UiSdlModalButtonTextUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlModalButtonTextUpdateAction;

  readonly payload?: UiSdlModalButtonTextUpdatePayload | null;
  withPayload(payload: IUiSdlModalButtonTextUpdatePayload | null): UiSdlModalButtonTextUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlModalButtonTextUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlModalButtonTextUpdateAction;
}

