export interface BundlerOptionsUserOverrideConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): BundlerOptionsUserOverrideConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): BundlerOptionsUserOverrideConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): BundlerOptionsUserOverrideConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly options?: BundlerOptions | null;
  withOptions(options: IBundlerOptions | null): BundlerOptionsUserOverrideConfig;

  static readonly options?: BundlerOptions | null;
}

