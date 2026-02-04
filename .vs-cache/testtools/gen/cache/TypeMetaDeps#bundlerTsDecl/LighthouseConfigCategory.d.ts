export interface LighthouseConfigCategory {

  readonly title?: string | null;
  withTitle(title: string | null): LighthouseConfigCategory;

  readonly auditRefs?: C3.Array<LighthouseConfigCategoryAudit | null>;
  withAuditRefs(auditRefs: C3.Array<LighthouseConfigCategoryAudit | null> | Array<ILighthouseConfigCategoryAudit | null>): LighthouseConfigCategory;

  readonly description?: string | null;
  withDescription(description: string | null): LighthouseConfigCategory;

  readonly manualDescription?: string | null;
  withManualDescription(manualDescription: string | null): LighthouseConfigCategory;
}

