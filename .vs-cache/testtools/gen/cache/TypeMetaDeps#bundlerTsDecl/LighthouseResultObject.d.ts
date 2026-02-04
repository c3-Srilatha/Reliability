export interface LighthouseResultObject {

  readonly lighthouseVersion?: string | null;
  withLighthouseVersion(lighthouseVersion: string | null): LighthouseResultObject;

  readonly fetchTime?: DateTime | null;
  withFetchTime(fetchTime: DateTime | Date | string | null): LighthouseResultObject;

  readonly userAgent?: string | null;
  withUserAgent(userAgent: string | null): LighthouseResultObject;

  readonly environment?: LighthouseResultEnvironment | null;
  withEnvironment(environment: ILighthouseResultEnvironment | null): LighthouseResultObject;

  readonly requestedUrl?: string | null;
  withRequestedUrl(requestedUrl: string | null): LighthouseResultObject;

  readonly finalUrl?: string | null;
  withFinalUrl(finalUrl: string | null): LighthouseResultObject;

  readonly score?: number | null;
  withScore(score: number | null): LighthouseResultObject;

  readonly audits?: C3.Map<string | null, LighthouseResultsAudit | null>;
  withAudits(audits: C3.Map<string | null, LighthouseResultsAudit | null> | {[key: string | null]: ILighthouseResultsAudit | null}): LighthouseResultObject;

  readonly configSettings?: LighthouseConfigSettings | null;
  withConfigSettings(configSettings: ILighthouseConfigSettings | null): LighthouseResultObject;

  readonly timing?: LighthouseResultsTiming | null;
  withTiming(timing: ILighthouseResultsTiming | null): LighthouseResultObject;

  readonly categories?: C3.Map<string | null, LighthouseResultsReportCategories | null>;
  withCategories(categories: C3.Map<string | null, LighthouseResultsReportCategories | null> | {[key: string | null]: ILighthouseResultsReportCategories | null}): LighthouseResultObject;

  readonly categoryGroups?: C3.Map<string | null, LighthouseConfigGroup | null>;
  withCategoryGroups(categoryGroups: C3.Map<string | null, LighthouseConfigGroup | null> | {[key: string | null]: ILighthouseConfigGroup | null}): LighthouseResultObject;

  readonly runWarnings?: C3.Array<string | null>;
  withRunWarnings(runWarnings: C3.Array<string | null> | Array<string | null>): LighthouseResultObject;

  readonly runtimeError?: LighthouseResultObjectRuntimeError | null;
  withRuntimeError(runtimeError: ILighthouseResultObjectRuntimeError | null): LighthouseResultObject;

  readonly i18n?: LighthouseResultObjectI18n | null;
  withI18n(i18n: ILighthouseResultObjectI18n | null): LighthouseResultObject;

  readonly stackPacks?: C3.Array<LighthouseResultObjectStackPack | null>;
  withStackPacks(stackPacks: C3.Array<LighthouseResultObjectStackPack | null> | Array<ILighthouseResultObjectStackPack | null>): LighthouseResultObject;
}

