export interface UiSdlSecurityConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlSecurityConfig;

  readonly inactivityLogoutPeriod?: string | null;
  withInactivityLogoutPeriod(inactivityLogoutPeriod: string | null): UiSdlSecurityConfig;

  readonly inactivityWarningPeriod?: string | null;
  withInactivityWarningPeriod(inactivityWarningPeriod: string | null): UiSdlSecurityConfig;
}

