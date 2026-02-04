export interface UiSdlExportArgumentsSyncAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlExportArgumentsSyncAction;

  readonly payload?: UiSdlExportArgumentsSyncPayload | null;
  withPayload(payload: IUiSdlExportArgumentsSyncPayload | null): UiSdlExportArgumentsSyncAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlExportArgumentsSyncAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlExportArgumentsSyncAction;
}

