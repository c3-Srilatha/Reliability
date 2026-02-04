export interface UiSdlEditerrorChangesAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditerrorChangesAction;

  readonly payload?: UiSdlEditerrorChangesPayload | null;
  withPayload(payload: IUiSdlEditerrorChangesPayload | null): UiSdlEditerrorChangesAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditerrorChangesAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditerrorChangesAction;
}

