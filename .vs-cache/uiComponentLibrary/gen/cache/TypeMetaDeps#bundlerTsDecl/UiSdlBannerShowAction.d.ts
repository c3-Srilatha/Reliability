export interface UiSdlBannerShowAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBannerShowAction;

  readonly payload?: UiSdlMessageBannerConfig | null;
  withPayload(payload: IUiSdlMessageBannerConfig | null): UiSdlBannerShowAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBannerShowAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBannerShowAction;
}

