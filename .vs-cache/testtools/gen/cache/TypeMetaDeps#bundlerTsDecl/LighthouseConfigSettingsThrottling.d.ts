export interface LighthouseConfigSettingsThrottling {

  readonly rttMs?: number | null;
  withRttMs(rttMs: number | null): LighthouseConfigSettingsThrottling;

  readonly throughputKbps?: number | null;
  withThroughputKbps(throughputKbps: number | null): LighthouseConfigSettingsThrottling;

  readonly requestLatencyMs?: number | null;
  withRequestLatencyMs(requestLatencyMs: number | null): LighthouseConfigSettingsThrottling;

  readonly downloadThroughputKbps?: number | null;
  withDownloadThroughputKbps(downloadThroughputKbps: number | null): LighthouseConfigSettingsThrottling;

  readonly uploadThroughputKbps?: number | null;
  withUploadThroughputKbps(uploadThroughputKbps: number | null): LighthouseConfigSettingsThrottling;

  readonly cpuSlowdownMultiplier?: number | null;
  withCpuSlowdownMultiplier(cpuSlowdownMultiplier: number | null): LighthouseConfigSettingsThrottling;
}

