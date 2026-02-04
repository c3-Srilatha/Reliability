export interface LighthouseConfigPass {

  readonly passName?: string | null;
  withPassName(passName: string | null): LighthouseConfigPass;

  readonly recordTrace?: boolean;
  withRecordTrace(recordTrace: boolean): LighthouseConfigPass;

  readonly useThrottling?: boolean;
  withUseThrottling(useThrottling: boolean): LighthouseConfigPass;

  readonly pauseAfterLoadMs?: number | null;
  withPauseAfterLoadMs(pauseAfterLoadMs: number | null): LighthouseConfigPass;

  readonly networkQuietThresholdMs?: number | null;
  withNetworkQuietThresholdMs(networkQuietThresholdMs: number | null): LighthouseConfigPass;

  readonly cpuQuietThresholdMs?: number | null;
  withCpuQuietThresholdMs(cpuQuietThresholdMs: number | null): LighthouseConfigPass;

  readonly pauseAfterNetworkQuietMs?: number | null;
  withPauseAfterNetworkQuietMs(pauseAfterNetworkQuietMs: number | null): LighthouseConfigPass;

  readonly blockedUrlPatterns?: C3.Array<string | null>;
  withBlockedUrlPatterns(blockedUrlPatterns: C3.Array<string | null> | Array<string | null>): LighthouseConfigPass;

  readonly gatherers?: C3.Array<string | null>;
  withGatherers(gatherers: C3.Array<string | null> | Array<string | null>): LighthouseConfigPass;
}

