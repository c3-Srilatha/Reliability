export interface LighthouseConfig {

  readonly extends?: string | null;
  withExtends(extends_: string | null): LighthouseConfig;

  readonly settings?: LighthouseConfigSettings | null;
  withSettings(settings: ILighthouseConfigSettings | null): LighthouseConfig;

  readonly passes?: C3.Array<LighthouseConfigPass | null>;
  withPasses(passes: C3.Array<LighthouseConfigPass | null> | Array<ILighthouseConfigPass | null>): LighthouseConfig;

  readonly audits?: C3.Array<string | null>;
  withAudits(audits: C3.Array<string | null> | Array<string | null>): LighthouseConfig;

  readonly categories?: C3.Map<string | null, LighthouseConfigCategory | null>;
  withCategories(categories: C3.Map<string | null, LighthouseConfigCategory | null> | {[key: string | null]: ILighthouseConfigCategory | null}): LighthouseConfig;

  readonly groups?: C3.Map<string | null, LighthouseConfigGroup | null>;
  withGroups(groups: C3.Map<string | null, LighthouseConfigGroup | null> | {[key: string | null]: ILighthouseConfigGroup | null}): LighthouseConfig;
}

