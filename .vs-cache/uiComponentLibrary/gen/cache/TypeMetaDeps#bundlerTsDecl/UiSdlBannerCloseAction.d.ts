export interface UiSdlBannerCloseAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBannerCloseAction;

  readonly payload?: UiSdlMessageBannerConfig | null;
  withPayload(payload: IUiSdlMessageBannerConfig | null): UiSdlBannerCloseAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBannerCloseAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBannerCloseAction;
}

