export interface UiSdlUpdateDataZoomEndValueAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateDataZoomEndValueAction;

  readonly payload?: UiSdlUpdateDataZoomEndValuePayload | null;
  withPayload(payload: IUiSdlUpdateDataZoomEndValuePayload | null): UiSdlUpdateDataZoomEndValueAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateDataZoomEndValueAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateDataZoomEndValueAction;
}

