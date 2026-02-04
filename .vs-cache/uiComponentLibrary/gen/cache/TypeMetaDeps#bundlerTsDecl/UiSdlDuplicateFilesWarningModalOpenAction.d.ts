export interface UiSdlDuplicateFilesWarningModalOpenAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDuplicateFilesWarningModalOpenAction;

  readonly payload?: UiSdlDuplicateFilesWarningModalOpenPayload | null;
  withPayload(payload: IUiSdlDuplicateFilesWarningModalOpenPayload | null): UiSdlDuplicateFilesWarningModalOpenAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDuplicateFilesWarningModalOpenAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDuplicateFilesWarningModalOpenAction;
}

