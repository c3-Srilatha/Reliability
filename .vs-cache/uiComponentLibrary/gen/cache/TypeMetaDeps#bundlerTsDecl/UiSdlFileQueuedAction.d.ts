export interface UiSdlFileQueuedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFileQueuedAction;

  readonly payload?: UiSdlFileQueuedPayload | null;
  withPayload(payload: IUiSdlFileQueuedPayload | null): UiSdlFileQueuedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFileQueuedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFileQueuedAction;
}

