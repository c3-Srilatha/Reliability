export interface UiSdlSaveCancelButtonVisibilityUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSaveCancelButtonVisibilityUpdateAction;

  readonly payload?: UiSdlSaveCancelButtonVisibilityUpdatePayload | null;
  withPayload(payload: IUiSdlSaveCancelButtonVisibilityUpdatePayload | null): UiSdlSaveCancelButtonVisibilityUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSaveCancelButtonVisibilityUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSaveCancelButtonVisibilityUpdateAction;
}

