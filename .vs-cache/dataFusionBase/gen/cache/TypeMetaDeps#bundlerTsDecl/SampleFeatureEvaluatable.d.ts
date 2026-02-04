export interface SampleFeatureEvaluatable {

  readonly id?: string | null;
  withId(id: string | null): SampleFeatureEvaluatable;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleFeatureEvaluatable;

  readonly name?: string | null;
  withName(name: string | null): SampleFeatureEvaluatable;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleFeatureEvaluatable;

  readonly version?: number | null;
  withVersion(version: number | null): SampleFeatureEvaluatable;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleFeatureEvaluatable;

  readonly bulbType?: string | null;
  withBulbType(bulbType: string | null): SampleFeatureEvaluatable;

  readonly manufacturer?: string | null;
  withManufacturer(manufacturer: string | null): SampleFeatureEvaluatable;

  readonly power?: number | null;
  withPower(power: number | null): SampleFeatureEvaluatable;

  readonly lifetime?: number | null;
  withLifetime(lifetime: number | null): SampleFeatureEvaluatable;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): SampleFeatureEvaluatable;

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): SampleFeatureEvaluatable;

  readonly voltage?: number | null;
  withVoltage(voltage: number | null): SampleFeatureEvaluatable;

  readonly temperature?: number | null;
  withTemperature(temperature: number | null): SampleFeatureEvaluatable;
}

