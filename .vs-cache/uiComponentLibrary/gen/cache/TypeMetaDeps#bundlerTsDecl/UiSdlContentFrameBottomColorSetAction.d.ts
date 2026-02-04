export interface UiSdlContentFrameBottomColorSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameBottomColorSetAction;

  readonly payload?: UiSdlContentFrameBottomColorSetPayload | null;
  withPayload(payload: IUiSdlContentFrameBottomColorSetPayload | null): UiSdlContentFrameBottomColorSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameBottomColorSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameBottomColorSetAction;
}

