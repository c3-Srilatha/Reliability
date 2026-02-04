export interface UiSdlGlobalRedirectPayload {

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlGlobalRedirectPayload;

  readonly params?: C3.Map<string | null, string | null>;
  withParams(params: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGlobalRedirectPayload;

  readonly back?: boolean;
  withBack(back: boolean): UiSdlGlobalRedirectPayload;

  readonly replace?: boolean;
  withReplace(replace: boolean): UiSdlGlobalRedirectPayload;
}

