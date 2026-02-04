export interface JobStatusTrackerSpec {

  readonly async?: boolean;
  withAsync(async: boolean): JobStatusTrackerSpec;

  readonly syncCheckInterval?: number | null;
  withSyncCheckInterval(syncCheckInterval: number | null): JobStatusTrackerSpec;

  readonly asyncCronExpression?: string | null;
  withAsyncCronExpression(asyncCronExpression: string | null): JobStatusTrackerSpec;
}

