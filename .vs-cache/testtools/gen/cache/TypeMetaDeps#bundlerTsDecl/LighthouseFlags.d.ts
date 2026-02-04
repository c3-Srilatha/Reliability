export interface LighthouseFlags {

  readonly output?: string | null;
  withOutput(output: string | null): LighthouseFlags;

  readonly locale?: string | null;
  withLocale(locale: string | null): LighthouseFlags;

  readonly maxWaitForFcp?: number | null;
  withMaxWaitForFcp(maxWaitForFcp: number | null): LighthouseFlags;

  readonly maxWaitForLoad?: number | null;
  withMaxWaitForLoad(maxWaitForLoad: number | null): LighthouseFlags;

  readonly throttlingMethod?: string | null;
  withThrottlingMethod(throttlingMethod: string | null): LighthouseFlags;

  readonly throttling?: LighthouseConfigSettingsThrottling | null;
  withThrottling(throttling: ILighthouseConfigSettingsThrottling | null): LighthouseFlags;

  readonly internalDisableDeviceScreenEmulation?: boolean;
  withInternalDisableDeviceScreenEmulation(internalDisableDeviceScreenEmulation: boolean): LighthouseFlags;

  readonly auditMode?: boolean;
  withAuditMode(auditMode: boolean): LighthouseFlags;

  readonly gatherMode?: boolean;
  withGatherMode(gatherMode: boolean): LighthouseFlags;

  readonly disableStorageReset?: boolean;
  withDisableStorageReset(disableStorageReset: boolean): LighthouseFlags;

  readonly emulatedFormFactor?: string | null;
  withEmulatedFormFactor(emulatedFormFactor: string | null): LighthouseFlags;

  readonly blockedUrlPatterns?: C3.Array<string | null>;
  withBlockedUrlPatterns(blockedUrlPatterns: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly additionalTraceCategories?: C3.Array<string | null>;
  withAdditionalTraceCategories(additionalTraceCategories: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly extraHeaders?: C3.Array<string | null>;
  withExtraHeaders(extraHeaders: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly onlyCategories?: C3.Array<string | null>;
  withOnlyCategories(onlyCategories: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly onlyAudits?: C3.Array<string | null>;
  withOnlyAudits(onlyAudits: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly skipAudits?: C3.Array<string | null>;
  withSkipAudits(skipAudits: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  readonly channel?: string | null;
  withChannel(channel: string | null): LighthouseFlags;

  readonly precomputedLanternData?: LighthouseConfigSettingsPrecomputedLanternData | null;
  withPrecomputedLanternData(precomputedLanternData: ILighthouseConfigSettingsPrecomputedLanternData | null): LighthouseFlags;

  readonly budgets?: C3.Array<LighthouseConfigSettingsBudget | null>;
  withBudgets(budgets: C3.Array<LighthouseConfigSettingsBudget | null> | Array<ILighthouseConfigSettingsBudget | null>): LighthouseFlags;

  readonly hostname?: string | null;
  withHostname(hostname: string | null): LighthouseFlags;

  readonly port?: number | null;
  withPort(port: number | null): LighthouseFlags;

  readonly logLevel?: string | null;
  withLogLevel(logLevel: string | null): LighthouseFlags;

  readonly configPath?: string | null;
  withConfigPath(configPath: string | null): LighthouseFlags;

  readonly plugins?: C3.Array<string | null>;
  withPlugins(plugins: C3.Array<string | null> | Array<string | null>): LighthouseFlags;
}

