export interface UiSdlFieldValidityUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldValidityUpdateAction;

  readonly payload?: UiSdlFieldValidityUpdatePayload | null;
  withPayload(payload: IUiSdlFieldValidityUpdatePayload | null): UiSdlFieldValidityUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldValidityUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldValidityUpdateAction;
}

