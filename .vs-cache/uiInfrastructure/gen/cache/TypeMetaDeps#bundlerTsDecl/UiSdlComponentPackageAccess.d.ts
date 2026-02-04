export interface UiSdlComponentPackageAccess {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): UiSdlComponentPackageAccess;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): UiSdlComponentPackageAccess;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): UiSdlComponentPackageAccess;

  readonly id: string;
  withId(id: string): UiSdlComponentPackageAccess;

  readonly accessToken?: string | null;
  withAccessToken(accessToken: string | null): UiSdlComponentPackageAccess;

  readonly ownerEmail?: string | null;
  withOwnerEmail(ownerEmail: string | null): UiSdlComponentPackageAccess;
}

