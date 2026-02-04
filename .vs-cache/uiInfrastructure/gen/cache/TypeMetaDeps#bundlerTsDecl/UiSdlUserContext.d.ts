export interface UiSdlUserContext {

  readonly user?: User | null;
  withUser(user: IUser | null): UiSdlUserContext;

  readonly roles?: C3.Array<Role | null>;
  withRoles(roles: C3.Array<Role | null> | Array<IRole | null>): UiSdlUserContext;

  readonly securityLevel?: number | null;
  withSecurityLevel(securityLevel: number | null): UiSdlUserContext;

  readonly preferredLocale?: Locale | null;
  withPreferredLocale(preferredLocale: ILocale | null): UiSdlUserContext;

  readonly appRootPkgName?: string | null;
  withAppRootPkgName(appRootPkgName: string | null): UiSdlUserContext;
}

