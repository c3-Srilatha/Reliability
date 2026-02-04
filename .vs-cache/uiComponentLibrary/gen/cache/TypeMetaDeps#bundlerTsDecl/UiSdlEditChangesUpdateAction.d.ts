export interface UiSdlEditChangesUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditChangesUpdateAction;

  readonly payload?: UiSdlEditChangesUpdatePayload | null;
  withPayload(payload: IUiSdlEditChangesUpdatePayload | null): UiSdlEditChangesUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditChangesUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditChangesUpdateAction;
}

