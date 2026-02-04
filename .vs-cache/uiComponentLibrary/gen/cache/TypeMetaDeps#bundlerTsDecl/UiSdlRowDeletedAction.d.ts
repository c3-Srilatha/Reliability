export interface UiSdlRowDeletedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlRowDeletedAction;

  readonly payload?: UiSdlRowDeletedPayload | null;
  withPayload(payload: IUiSdlRowDeletedPayload | null): UiSdlRowDeletedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlRowDeletedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlRowDeletedAction;
}

