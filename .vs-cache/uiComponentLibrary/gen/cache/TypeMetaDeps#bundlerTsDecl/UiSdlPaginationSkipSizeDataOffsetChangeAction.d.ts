export interface UiSdlPaginationSkipSizeDataOffsetChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPaginationSkipSizeDataOffsetChangeAction;

  readonly payload?: UiSdlPaginationSkipSizeDataOffsetChangePayload | null;
  withPayload(payload: IUiSdlPaginationSkipSizeDataOffsetChangePayload | null): UiSdlPaginationSkipSizeDataOffsetChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPaginationSkipSizeDataOffsetChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPaginationSkipSizeDataOffsetChangeAction;
}

