export interface UiSdlPersistChangeErrorUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPersistChangeErrorUpdateAction;

  readonly payload?: UiSdlPersistChangeErrorUpdatePayload | null;
  withPayload(payload: IUiSdlPersistChangeErrorUpdatePayload | null): UiSdlPersistChangeErrorUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPersistChangeErrorUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPersistChangeErrorUpdateAction;
}

