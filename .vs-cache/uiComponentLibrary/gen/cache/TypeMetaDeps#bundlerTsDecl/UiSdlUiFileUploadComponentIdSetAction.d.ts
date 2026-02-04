export interface UiSdlUiFileUploadComponentIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUiFileUploadComponentIdSetAction;

  readonly payload?: UiSdlUiFileUploadComponentIdSetPayload | null;
  withPayload(payload: IUiSdlUiFileUploadComponentIdSetPayload | null): UiSdlUiFileUploadComponentIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUiFileUploadComponentIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUiFileUploadComponentIdSetAction;
}

