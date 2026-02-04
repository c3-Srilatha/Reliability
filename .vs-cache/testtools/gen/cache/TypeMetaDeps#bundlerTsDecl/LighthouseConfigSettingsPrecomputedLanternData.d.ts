export interface LighthouseConfigSettingsPrecomputedLanternData {

  readonly additionalRttByOrigin?: C3.Map<string | null, number | null>;
  withAdditionalRttByOrigin(additionalRttByOrigin: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): LighthouseConfigSettingsPrecomputedLanternData;

  readonly serverResponseTimeByOrigin?: C3.Map<string | null, number | null>;
  withServerResponseTimeByOrigin(serverResponseTimeByOrigin: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): LighthouseConfigSettingsPrecomputedLanternData;
}

