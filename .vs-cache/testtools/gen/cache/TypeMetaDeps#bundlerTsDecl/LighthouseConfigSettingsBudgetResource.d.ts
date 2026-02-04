export interface LighthouseConfigSettingsBudgetResource {

  readonly resourceType?: string | null;
  withResourceType(resourceType: string | null): LighthouseConfigSettingsBudgetResource;

  readonly budget?: number | null;
  withBudget(budget: number | null): LighthouseConfigSettingsBudgetResource;
}

