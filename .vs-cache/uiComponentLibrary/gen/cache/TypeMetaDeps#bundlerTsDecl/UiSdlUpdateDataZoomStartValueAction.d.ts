export interface UiSdlUpdateDataZoomStartValueAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateDataZoomStartValueAction;

  readonly payload?: UiSdlUpdateDataZoomStartValuePayload | null;
  withPayload(payload: IUiSdlUpdateDataZoomStartValuePayload | null): UiSdlUpdateDataZoomStartValueAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateDataZoomStartValueAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateDataZoomStartValueAction;
}

