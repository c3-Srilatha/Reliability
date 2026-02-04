export interface SelfServiceDIJdbcStoreConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): SelfServiceDIJdbcStoreConfig;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): SelfServiceDIJdbcStoreConfig;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): SelfServiceDIJdbcStoreConfig;

  readonly name: string;
  withName(name: string): SelfServiceDIJdbcStoreConfig;

  readonly secretPassword?: any;
  withSecretPassword(secretPassword: any): SelfServiceDIJdbcStoreConfig;
}

