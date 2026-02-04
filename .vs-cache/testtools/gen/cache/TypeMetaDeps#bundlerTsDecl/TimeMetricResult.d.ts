export interface TimeMetricResult {

  readonly time?: number | null;
  withTime(time: number | null): TimeMetricResult;

  readonly actionId?: string | null;
  withActionId(actionId: string | null): TimeMetricResult;
}

