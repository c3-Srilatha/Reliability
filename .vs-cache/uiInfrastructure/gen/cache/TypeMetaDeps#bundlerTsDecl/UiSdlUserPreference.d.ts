export interface UiSdlUserPreference {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): UiSdlUserPreference;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): UiSdlUserPreference;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): UiSdlUserPreference;

  static readonly issues?: C3.Array<string | null>;

  readonly preferredLocale?: Locale | null;
  withPreferredLocale(preferredLocale: ILocale | null): UiSdlUserPreference;

  static readonly preferredLocale?: Locale | null;
}

