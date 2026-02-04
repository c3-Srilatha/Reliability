export interface UiSdlPageUrl {

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlPageUrl;

  readonly params?: C3.Map<string | null, string | null>;
  withParams(params: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlPageUrl;
}

