export interface UiSdlMapLegendConfig {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMapLegendConfig;

  readonly minValue?: number | null;
  withMinValue(minValue: number | null): UiSdlMapLegendConfig;

  readonly maxValue?: number | null;
  withMaxValue(maxValue: number | null): UiSdlMapLegendConfig;
}

