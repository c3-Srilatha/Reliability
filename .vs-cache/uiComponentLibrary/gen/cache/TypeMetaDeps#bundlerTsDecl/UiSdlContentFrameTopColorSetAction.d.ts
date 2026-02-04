export interface UiSdlContentFrameTopColorSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameTopColorSetAction;

  readonly payload?: UiSdlContentFrameTopColorSetPayload | null;
  withPayload(payload: IUiSdlContentFrameTopColorSetPayload | null): UiSdlContentFrameTopColorSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameTopColorSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameTopColorSetAction;
}

