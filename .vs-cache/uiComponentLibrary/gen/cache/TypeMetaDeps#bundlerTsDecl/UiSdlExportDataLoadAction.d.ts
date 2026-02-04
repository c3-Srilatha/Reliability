export interface UiSdlExportDataLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlExportDataLoadAction;

  readonly payload?: UiSdlExportDataLoadPayload | null;
  withPayload(payload: IUiSdlExportDataLoadPayload | null): UiSdlExportDataLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlExportDataLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlExportDataLoadAction;
}

