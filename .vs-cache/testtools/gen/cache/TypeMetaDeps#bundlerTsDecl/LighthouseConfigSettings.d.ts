export interface LighthouseConfigSettings {

  readonly output?: string | null;
  withOutput(output: string | null): LighthouseConfigSettings;

  readonly locale?: string | null;
  withLocale(locale: string | null): LighthouseConfigSettings;

  readonly maxWaitForFcp?: number | null;
  withMaxWaitForFcp(maxWaitForFcp: number | null): LighthouseConfigSettings;

  readonly maxWaitForLoad?: number | null;
  withMaxWaitForLoad(maxWaitForLoad: number | null): LighthouseConfigSettings;

  readonly throttlingMethod?: string | null;
  withThrottlingMethod(throttlingMethod: string | null): LighthouseConfigSettings;

  readonly throttling?: LighthouseConfigSettingsThrottling | null;
  withThrottling(throttling: ILighthouseConfigSettingsThrottling | null): LighthouseConfigSettings;

  readonly internalDisableDeviceScreenEmulation?: boolean;
  withInternalDisableDeviceScreenEmulation(internalDisableDeviceScreenEmulation: boolean): LighthouseConfigSettings;

  readonly auditMode?: boolean;
  withAuditMode(auditMode: boolean): LighthouseConfigSettings;

  readonly gatherMode?: boolean;
  withGatherMode(gatherMode: boolean): LighthouseConfigSettings;

  readonly disableStorageReset?: boolean;
  withDisableStorageReset(disableStorageReset: boolean): LighthouseConfigSettings;

  readonly emulatedFormFactor?: string | null;
  withEmulatedFormFactor(emulatedFormFactor: string | null): LighthouseConfigSettings;

  readonly blockedUrlPatterns?: C3.Array<string | null>;
  withBlockedUrlPatterns(blockedUrlPatterns: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly additionalTraceCategories?: C3.Array<string | null>;
  withAdditionalTraceCategories(additionalTraceCategories: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly extraHeaders?: C3.Array<string | null>;
  withExtraHeaders(extraHeaders: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly onlyCategories?: C3.Array<string | null>;
  withOnlyCategories(onlyCategories: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly onlyAudits?: C3.Array<string | null>;
  withOnlyAudits(onlyAudits: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly skipAudits?: C3.Array<string | null>;
  withSkipAudits(skipAudits: C3.Array<string | null> | Array<string | null>): LighthouseConfigSettings;

  readonly channel?: string | null;
  withChannel(channel: string | null): LighthouseConfigSettings;

  readonly precomputedLanternData?: LighthouseConfigSettingsPrecomputedLanternData | null;
  withPrecomputedLanternData(precomputedLanternData: ILighthouseConfigSettingsPrecomputedLanternData | null): LighthouseConfigSettings;

  readonly budgets?: C3.Array<LighthouseConfigSettingsBudget | null>;
  withBudgets(budgets: C3.Array<LighthouseConfigSettingsBudget | null> | Array<ILighthouseConfigSettingsBudget | null>): LighthouseConfigSettings;
}

