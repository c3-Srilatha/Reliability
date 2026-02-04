export interface UiSdlMapbox {

  readonly accessTokenFieldPath?: string | null;
  withAccessTokenFieldPath(accessTokenFieldPath: string | null): UiSdlMapbox;

  static readonly accessTokenFieldPath?: string | null;

  readonly apiUrlFieldPath?: string | null;
  withApiUrlFieldPath(apiUrlFieldPath: string | null): UiSdlMapbox;

  static readonly apiUrlFieldPath?: string | null;
}

