export interface SelfServiceDICdcConfig {

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): SelfServiceDICdcConfig;

  readonly trackingColumn?: string | null;
  withTrackingColumn(trackingColumn: string | null): SelfServiceDICdcConfig;

  readonly schedule?: string | null;
  withSchedule(schedule: string | null): SelfServiceDICdcConfig;
}

