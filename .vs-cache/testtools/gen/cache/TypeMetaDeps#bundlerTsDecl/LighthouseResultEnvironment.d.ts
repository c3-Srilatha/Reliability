export interface LighthouseResultEnvironment {

  readonly networkUserAgent?: string | null;
  withNetworkUserAgent(networkUserAgent: string | null): LighthouseResultEnvironment;

  readonly hostUserAgent?: string | null;
  withHostUserAgent(hostUserAgent: string | null): LighthouseResultEnvironment;

  readonly benchmarkIndex?: number | null;
  withBenchmarkIndex(benchmarkIndex: number | null): LighthouseResultEnvironment;
}

