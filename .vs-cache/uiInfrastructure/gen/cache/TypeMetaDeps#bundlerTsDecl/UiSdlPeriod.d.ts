export interface UiSdlPeriod {

  readonly count: number;
  withCount(count: number): UiSdlPeriod;

  readonly unit: string;
  withUnit(unit: string): UiSdlPeriod;
}

