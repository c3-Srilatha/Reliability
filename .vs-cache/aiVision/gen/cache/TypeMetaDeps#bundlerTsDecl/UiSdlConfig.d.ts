export interface UiSdlConfig {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): UiSdlConfig;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): UiSdlConfig;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): UiSdlConfig;

  static readonly issues?: C3.Array<string | null>;

  readonly i18n?: UiSdlI18nConfig | null;
  withI18n(i18n: IUiSdlI18nConfig | null): UiSdlConfig;

  static readonly i18n?: UiSdlI18nConfig | null;

  readonly infrastructure?: UiSdlInfrastructureConfig | null;
  withInfrastructure(infrastructure: IUiSdlInfrastructureConfig | null): UiSdlConfig;

  static readonly infrastructure?: UiSdlInfrastructureConfig | null;

  readonly security?: UiSdlSecurityConfig | null;
  withSecurity(security: IUiSdlSecurityConfig | null): UiSdlConfig;

  static readonly security?: UiSdlSecurityConfig | null;

  readonly style?: UiSdlStyleConfig | null;
  withStyle(style: IUiSdlStyleConfig | null): UiSdlConfig;

  static readonly style?: UiSdlStyleConfig | null;

  readonly performanceMeasurement?: UiSdlPerformanceMeasureConfig | null;
  withPerformanceMeasurement(performanceMeasurement: IUiSdlPerformanceMeasureConfig | null): UiSdlConfig;

  static readonly performanceMeasurement?: UiSdlPerformanceMeasureConfig | null;

  readonly ignoreRequestsWithFalsyContextVars?: C3.Map<string | null, boolean>;
  withIgnoreRequestsWithFalsyContextVars(ignoreRequestsWithFalsyContextVars: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlConfig;

  static readonly ignoreRequestsWithFalsyContextVars?: C3.Map<string | null, boolean>;

  readonly app?: UiSdlApplicationConfig | null;
  withApp(app: IUiSdlApplicationConfig | null): UiSdlConfig;

  static readonly app?: UiSdlApplicationConfig | null;

  readonly cesium?: CesiumConfig | null;
  withCesium(cesium: ICesiumConfig | null): UiSdlConfig;

  static readonly cesium?: CesiumConfig | null;
}

