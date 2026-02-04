export interface PowerConsumptionTarget {

  readonly id: string;
  withId(id: string): PowerConsumptionTarget;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): PowerConsumptionTarget;

  readonly name?: string | null;
  withName(name: string | null): PowerConsumptionTarget;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PowerConsumptionTarget;

  readonly version?: number | null;
  withVersion(version: number | null): PowerConsumptionTarget;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): PowerConsumptionTarget;

  readonly lastUpdated?: DateTime | null;
  withLastUpdated(lastUpdated: DateTime | Date | string | null): PowerConsumptionTarget;

  readonly dateTime?: DateTime | null;
  withDateTime(dateTime: DateTime | Date | string | null): PowerConsumptionTarget;

  readonly temperature?: number | null;
  withTemperature(temperature: number | null): PowerConsumptionTarget;

  readonly humidity?: number | null;
  withHumidity(humidity: number | null): PowerConsumptionTarget;

  readonly windSpeed?: number | null;
  withWindSpeed(windSpeed: number | null): PowerConsumptionTarget;

  readonly generalDiffuseFlows?: number | null;
  withGeneralDiffuseFlows(generalDiffuseFlows: number | null): PowerConsumptionTarget;

  readonly diffuseFlows?: string | null;
  withDiffuseFlows(diffuseFlows: string | null): PowerConsumptionTarget;

  readonly powerConsumptionZone1?: number | null;
  withPowerConsumptionZone1(powerConsumptionZone1: number | null): PowerConsumptionTarget;

  readonly powerConsumptionZone2?: number | null;
  withPowerConsumptionZone2(powerConsumptionZone2: number | null): PowerConsumptionTarget;

  readonly powerConsumptionZone3?: number | null;
  withPowerConsumptionZone3(powerConsumptionZone3: number | null): PowerConsumptionTarget;
}

