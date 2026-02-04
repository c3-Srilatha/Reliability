export interface LighthouseResultsReportCategories {

  readonly title?: string | null;
  withTitle(title: string | null): LighthouseResultsReportCategories;

  readonly auditRefs?: C3.Array<LighthouseConfigCategoryAudit | null>;
  withAuditRefs(auditRefs: C3.Array<LighthouseConfigCategoryAudit | null> | Array<ILighthouseConfigCategoryAudit | null>): LighthouseResultsReportCategories;

  readonly description?: string | null;
  withDescription(description: string | null): LighthouseResultsReportCategories;

  readonly manualDescription?: string | null;
  withManualDescription(manualDescription: string | null): LighthouseResultsReportCategories;

  readonly id?: string | null;
  withId(id: string | null): LighthouseResultsReportCategories;

  readonly score?: string | null;
  withScore(score: string | null): LighthouseResultsReportCategories;
}

