export interface WebpackBundlerConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): WebpackBundlerConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): WebpackBundlerConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): WebpackBundlerConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly webpackMode?: string | null;
  withWebpackMode(webpackMode: string | null): WebpackBundlerConfig;

  static readonly webpackMode?: string | null;

  readonly bundlerMaxMem?: number | null;
  withBundlerMaxMem(bundlerMaxMem: number | null): WebpackBundlerConfig;

  static readonly bundlerMaxMem?: number | null;

  readonly handler?: Type | null;
  withHandler(handler: IType | null): WebpackBundlerConfig;

  static readonly handler?: Type | null;
}

