export interface UiSdlBannerClearAllAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBannerClearAllAction;

  readonly payload?: UiSdlBannerClearAllPayload | null;
  withPayload(payload: IUiSdlBannerClearAllPayload | null): UiSdlBannerClearAllAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBannerClearAllAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBannerClearAllAction;
}

