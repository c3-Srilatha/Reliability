export interface DummyUiSdlConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): DummyUiSdlConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): DummyUiSdlConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): DummyUiSdlConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly infrastructure?: DummyUiSdlInfrastructureConfig | null;
  withInfrastructure(infrastructure: IDummyUiSdlInfrastructureConfig | null): DummyUiSdlConfig;

  static readonly infrastructure?: DummyUiSdlInfrastructureConfig | null;
}

