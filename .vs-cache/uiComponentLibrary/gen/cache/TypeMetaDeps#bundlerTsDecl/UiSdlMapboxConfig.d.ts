export interface UiSdlMapboxConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): UiSdlMapboxConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): UiSdlMapboxConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): UiSdlMapboxConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly accessToken?: string | null;
  withAccessToken(accessToken: string | null): UiSdlMapboxConfig;

  static readonly accessToken?: string | null;

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlMapboxConfig;

  static readonly url?: string | null;
}

