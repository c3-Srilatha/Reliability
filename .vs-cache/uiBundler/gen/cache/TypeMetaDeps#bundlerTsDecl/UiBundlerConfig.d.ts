export interface UiBundlerConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): UiBundlerConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): UiBundlerConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): UiBundlerConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly onlyRootPackageTests?: boolean;
  withOnlyRootPackageTests(onlyRootPackageTests: boolean): UiBundlerConfig;

  static readonly onlyRootPackageTests?: boolean;

  readonly hardwareProfileInstanceType?: string | null;
  withHardwareProfileInstanceType(hardwareProfileInstanceType: string | null): UiBundlerConfig;

  static readonly hardwareProfileInstanceType?: string | null;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): UiBundlerConfig;

  static readonly maxConcurrencyPerNode?: number | null;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): UiBundlerConfig;

  static readonly maxConcurrency?: number | null;

  readonly workDirCleanupTimeout?: number | null;
  withWorkDirCleanupTimeout(workDirCleanupTimeout: number | null): UiBundlerConfig;

  static readonly workDirCleanupTimeout?: number | null;

  readonly outputDirTtl?: number | null;
  withOutputDirTtl(outputDirTtl: number | null): UiBundlerConfig;

  static readonly outputDirTtl?: number | null;

  readonly keepUiBundlerResults?: boolean;
  withKeepUiBundlerResults(keepUiBundlerResults: boolean): UiBundlerConfig;

  static readonly keepUiBundlerResults?: boolean;

  readonly developmentBatchSize?: number | null;
  withDevelopmentBatchSize(developmentBatchSize: number | null): UiBundlerConfig;

  static readonly developmentBatchSize?: number | null;

  readonly productionBatchSize?: number | null;
  withProductionBatchSize(productionBatchSize: number | null): UiBundlerConfig;

  static readonly productionBatchSize?: number | null;

  readonly enableWebpackCache?: boolean;
  withEnableWebpackCache(enableWebpackCache: boolean): UiBundlerConfig;

  static readonly enableWebpackCache?: boolean;

  readonly enableBabelCache?: boolean;
  withEnableBabelCache(enableBabelCache: boolean): UiBundlerConfig;

  static readonly enableBabelCache?: boolean;
}

