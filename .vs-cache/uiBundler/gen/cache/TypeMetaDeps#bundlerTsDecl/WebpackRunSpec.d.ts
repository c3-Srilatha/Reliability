export interface WebpackRunSpec {

  readonly jobId: string;
  withJobId(jobId: string): WebpackRunSpec;

  readonly workDir: string;
  withWorkDir(workDir: string): WebpackRunSpec;

  readonly configPath: string;
  withConfigPath(configPath: string): WebpackRunSpec;

  readonly configNames: C3.Array<string | null>;
  withConfigNames(configNames: C3.Array<string | null> | Array<string | null>): WebpackRunSpec;

  readonly codeCoverage?: boolean;
  withCodeCoverage(codeCoverage: boolean): WebpackRunSpec;
}

