export interface UiSdlRowAddedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlRowAddedAction;

  readonly payload?: UiSdlRowAddedPayload | null;
  withPayload(payload: IUiSdlRowAddedPayload | null): UiSdlRowAddedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlRowAddedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlRowAddedAction;
}

