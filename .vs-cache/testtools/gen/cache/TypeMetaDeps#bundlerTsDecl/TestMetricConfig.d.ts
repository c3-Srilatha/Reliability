export interface TestMetricConfig {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): TestMetricConfig;

  readonly resource?: string | null;
  withResource(resource: string | null): TestMetricConfig;

  readonly measure?: string | null;
  withMeasure(measure: string | null): TestMetricConfig;

  readonly unit?: string | null;
  withUnit(unit: string | null): TestMetricConfig;

  readonly treatment?: string | null;
  withTreatment(treatment: string | null): TestMetricConfig;
}

