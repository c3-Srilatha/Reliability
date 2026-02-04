export interface UiSdlFeatureFlagCondition {

  readonly expectedValue?: boolean;
  withExpectedValue(expectedValue: boolean): UiSdlFeatureFlagCondition;

  readonly configPath?: C3.Array<string | null>;
  withConfigPath(configPath: C3.Array<string | null> | Array<string | null>): UiSdlFeatureFlagCondition;
}

