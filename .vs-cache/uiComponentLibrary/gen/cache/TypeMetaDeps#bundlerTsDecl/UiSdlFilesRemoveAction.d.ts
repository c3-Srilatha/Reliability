export interface UiSdlFilesRemoveAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFilesRemoveAction;

  readonly payload?: UiSdlFilesRemovePayload | null;
  withPayload(payload: IUiSdlFilesRemovePayload | null): UiSdlFilesRemoveAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFilesRemoveAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFilesRemoveAction;
}

