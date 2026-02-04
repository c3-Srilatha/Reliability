export interface UiSdlLineBarChartYAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisConfig;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlLineBarChartYAxisConfig;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlLineBarChartYAxisConfig;

  readonly scale?: boolean;
  withScale(scale: boolean): UiSdlLineBarChartYAxisConfig;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlLineBarChartYAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlLineBarChartYAxisConfig;

  readonly nameLocation?: string | null;
  withNameLocation(nameLocation: string | null): UiSdlLineBarChartYAxisConfig;

  readonly nameRotate?: number | null;
  withNameRotate(nameRotate: number | null): UiSdlLineBarChartYAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlLineBarChartYAxisConfig;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlLineBarChartYAxisConfig;

  readonly logBase?: number | null;
  withLogBase(logBase: number | null): UiSdlLineBarChartYAxisConfig;

  readonly splitNumber?: number | null;
  withSplitNumber(splitNumber: number | null): UiSdlLineBarChartYAxisConfig;

  readonly minInterval?: number | null;
  withMinInterval(minInterval: number | null): UiSdlLineBarChartYAxisConfig;

  readonly maxInterval?: number | null;
  withMaxInterval(maxInterval: number | null): UiSdlLineBarChartYAxisConfig;

  readonly units?: boolean;
  withUnits(units: boolean): UiSdlLineBarChartYAxisConfig;

  readonly showSeparators?: boolean;
  withShowSeparators(showSeparators: boolean): UiSdlLineBarChartYAxisConfig;
}

