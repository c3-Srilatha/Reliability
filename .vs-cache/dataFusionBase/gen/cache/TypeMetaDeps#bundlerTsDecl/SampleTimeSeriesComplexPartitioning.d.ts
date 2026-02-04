export interface SampleTimeSeriesComplexPartitioning {

  readonly id: string;
  withId(id: string): SampleTimeSeriesComplexPartitioning;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleTimeSeriesComplexPartitioning;

  readonly name?: string | null;
  withName(name: string | null): SampleTimeSeriesComplexPartitioning;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleTimeSeriesComplexPartitioning;

  readonly version?: number | null;
  withVersion(version: number | null): SampleTimeSeriesComplexPartitioning;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleTimeSeriesComplexPartitioning;

  readonly sensorType?: string | null;
  withSensorType(sensorType: string | null): SampleTimeSeriesComplexPartitioning;

  readonly tag?: string | null;
  withTag(tag: string | null): SampleTimeSeriesComplexPartitioning;

  readonly description?: string | null;
  withDescription(description: string | null): SampleTimeSeriesComplexPartitioning;

  readonly creationDate?: DateTime | null;
  withCreationDate(creationDate: DateTime | Date | string | null): SampleTimeSeriesComplexPartitioning;

  readonly samplingRate?: number | null;
  withSamplingRate(samplingRate: number | null): SampleTimeSeriesComplexPartitioning;

  readonly compressionDeviation?: number | null;
  withCompressionDeviation(compressionDeviation: number | null): SampleTimeSeriesComplexPartitioning;

  readonly compressionMax?: number | null;
  withCompressionMax(compressionMax: number | null): SampleTimeSeriesComplexPartitioning;

  readonly referenceDiagram?: string | null;
  withReferenceDiagram(referenceDiagram: string | null): SampleTimeSeriesComplexPartitioning;

  readonly instrumentName?: string | null;
  withInstrumentName(instrumentName: string | null): SampleTimeSeriesComplexPartitioning;

  readonly status?: string | null;
  withStatus(status: string | null): SampleTimeSeriesComplexPartitioning;

  readonly unitConstraint?: Unit | null;
  withUnitConstraint(unitConstraint: IUnit | null): SampleTimeSeriesComplexPartitioning;
}

