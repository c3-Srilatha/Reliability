export interface UiSdlChunkLoadingErrorAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChunkLoadingErrorAction;

  readonly payload?: UiSdlChunkLoadingErrorPayload | null;
  withPayload(payload: IUiSdlChunkLoadingErrorPayload | null): UiSdlChunkLoadingErrorAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChunkLoadingErrorAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChunkLoadingErrorAction;
}

