export interface LighthouseConfigSettingsBudgetTiming {

  readonly metric?: string | null;
  withMetric(metric: string | null): LighthouseConfigSettingsBudgetTiming;

  readonly budget?: number | null;
  withBudget(budget: number | null): LighthouseConfigSettingsBudgetTiming;

  readonly tolerance?: number | null;
  withTolerance(tolerance: number | null): LighthouseConfigSettingsBudgetTiming;
}

