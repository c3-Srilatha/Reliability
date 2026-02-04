export interface UiSdlExportDataClearAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlExportDataClearAction;

  readonly payload?: UiSdlExportDataClearPayload | null;
  withPayload(payload: IUiSdlExportDataClearPayload | null): UiSdlExportDataClearAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlExportDataClearAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlExportDataClearAction;
}

