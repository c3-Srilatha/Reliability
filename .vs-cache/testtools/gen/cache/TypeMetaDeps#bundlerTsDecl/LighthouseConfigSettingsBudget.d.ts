export interface LighthouseConfigSettingsBudget {

  readonly resourceCounts?: C3.Array<LighthouseConfigSettingsBudgetResource | null>;
  withResourceCounts(resourceCounts: C3.Array<LighthouseConfigSettingsBudgetResource | null> | Array<ILighthouseConfigSettingsBudgetResource | null>): LighthouseConfigSettingsBudget;

  readonly resourceSizes?: C3.Array<LighthouseConfigSettingsBudgetResource | null>;
  withResourceSizes(resourceSizes: C3.Array<LighthouseConfigSettingsBudgetResource | null> | Array<ILighthouseConfigSettingsBudgetResource | null>): LighthouseConfigSettingsBudget;

  readonly timings?: C3.Array<LighthouseConfigSettingsBudgetTiming | null>;
  withTimings(timings: C3.Array<LighthouseConfigSettingsBudgetTiming | null> | Array<ILighthouseConfigSettingsBudgetTiming | null>): LighthouseConfigSettingsBudget;
}

