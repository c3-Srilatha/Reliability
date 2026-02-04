export interface DataPulseConfig {

  readonly value?: number | null;
  withValue(value: number | null): DataPulseConfig;

  readonly width?: number | null;
  withWidth(width: number | null): DataPulseConfig;

  readonly slew?: number | null;
  withSlew(slew: number | null): DataPulseConfig;
}

