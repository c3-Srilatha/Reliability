export interface UiSdlUrlPayloadSpec {

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlUrlPayloadSpec;

  readonly params?: C3.Map<string | null, UiSdlUrlParamSpec | null>;
  withParams(params: C3.Map<string | null, UiSdlUrlParamSpec | null> | {[key: string | null]: IUiSdlUrlParamSpec | null}): UiSdlUrlPayloadSpec;

  readonly back?: boolean;
  withBack(back: boolean): UiSdlUrlPayloadSpec;
}

