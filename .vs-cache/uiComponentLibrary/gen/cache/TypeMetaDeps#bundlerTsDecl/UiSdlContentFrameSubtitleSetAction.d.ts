export interface UiSdlContentFrameSubtitleSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameSubtitleSetAction;

  readonly payload?: UiSdlContentFrameSubtitleSetPayload | null;
  withPayload(payload: IUiSdlContentFrameSubtitleSetPayload | null): UiSdlContentFrameSubtitleSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameSubtitleSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameSubtitleSetAction;
}

