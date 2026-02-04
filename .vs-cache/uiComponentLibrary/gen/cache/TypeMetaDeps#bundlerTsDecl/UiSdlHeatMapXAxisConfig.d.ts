export interface UiSdlHeatMapXAxisConfig {

  readonly name?: string | null;
  withName(name: string | null): UiSdlHeatMapXAxisConfig;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlHeatMapXAxisConfig;

  readonly displayName?: boolean;
  withDisplayName(displayName: boolean): UiSdlHeatMapXAxisConfig;

  readonly period?: string | null;
  withPeriod(period: string | null): UiSdlHeatMapXAxisConfig;
}

