export interface UiSdlCustomExportDataLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCustomExportDataLoadAction;

  readonly payload?: UiSdlExportDataLoadPayload | null;
  withPayload(payload: IUiSdlExportDataLoadPayload | null): UiSdlCustomExportDataLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCustomExportDataLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCustomExportDataLoadAction;
}

