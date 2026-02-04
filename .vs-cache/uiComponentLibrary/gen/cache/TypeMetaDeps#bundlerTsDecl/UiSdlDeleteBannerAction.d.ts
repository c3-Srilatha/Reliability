export interface UiSdlDeleteBannerAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDeleteBannerAction;

  readonly payload?: UiSdlMessageBannerConfig | null;
  withPayload(payload: IUiSdlMessageBannerConfig | null): UiSdlDeleteBannerAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDeleteBannerAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDeleteBannerAction;
}

