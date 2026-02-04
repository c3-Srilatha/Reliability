export interface LighthouseConfigCategoryAudit {

  readonly id?: string | null;
  withId(id: string | null): LighthouseConfigCategoryAudit;

  readonly weight?: number | null;
  withWeight(weight: number | null): LighthouseConfigCategoryAudit;

  readonly group?: string | null;
  withGroup(group: string | null): LighthouseConfigCategoryAudit;
}

