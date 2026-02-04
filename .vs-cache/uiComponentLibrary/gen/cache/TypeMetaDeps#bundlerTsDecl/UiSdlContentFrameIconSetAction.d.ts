export interface UiSdlContentFrameIconSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameIconSetAction;

  readonly payload?: UiSdlContentFrameIconSetPayload | null;
  withPayload(payload: IUiSdlContentFrameIconSetPayload | null): UiSdlContentFrameIconSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameIconSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameIconSetAction;
}

