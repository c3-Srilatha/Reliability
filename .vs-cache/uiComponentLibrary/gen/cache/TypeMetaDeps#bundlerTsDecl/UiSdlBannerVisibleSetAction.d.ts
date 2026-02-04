export interface UiSdlBannerVisibleSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBannerVisibleSetAction;

  readonly payload?: any;
  withPayload(payload: any): UiSdlBannerVisibleSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBannerVisibleSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBannerVisibleSetAction;
}

