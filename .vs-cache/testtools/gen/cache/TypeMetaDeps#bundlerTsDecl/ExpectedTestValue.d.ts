export interface ExpectedTestValue {

  readonly start?: number | null;
  withStart(start: number | null): ExpectedTestValue;

  readonly value?: number | null;
  withValue(value: number | null): ExpectedTestValue;

  readonly missing?: number | null;
  withMissing(missing: number | null): ExpectedTestValue;

  readonly estimates?: number | null;
  withEstimates(estimates: number | null): ExpectedTestValue;
}

