export interface SampleIntervalDataPoint {

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): SampleIntervalDataPoint;

  readonly outlierCode?: number | null;
  withOutlierCode(outlierCode: number | null): SampleIntervalDataPoint;

  readonly comments?: string | null;
  withComments(comments: string | null): SampleIntervalDataPoint;

  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): SampleIntervalDataPoint;

  readonly dataVersion?: number | null;
  withDataVersion(dataVersion: number | null): SampleIntervalDataPoint;

  readonly statusCode?: string | null;
  withStatusCode(statusCode: string | null): SampleIntervalDataPoint;

  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): SampleIntervalDataPoint;

  readonly PK_BIN_SEPARATOR?: string | null;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): SampleIntervalDataPoint;

  readonly parent: SampleCollectionTimeSeries;
  withParent(parent: ISampleCollectionTimeSeries): SampleIntervalDataPoint;

  readonly id: string;
  withId(id: string): SampleIntervalDataPoint;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleIntervalDataPoint;

  readonly name?: string | null;
  withName(name: string | null): SampleIntervalDataPoint;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleIntervalDataPoint;

  readonly version?: number | null;
  withVersion(version: number | null): SampleIntervalDataPoint;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleIntervalDataPoint;

  readonly lumens?: number | null;
  withLumens(lumens: number | null): SampleIntervalDataPoint;

  readonly power?: number | null;
  withPower(power: number | null): SampleIntervalDataPoint;

  readonly temperature?: number | null;
  withTemperature(temperature: number | null): SampleIntervalDataPoint;

  readonly voltage?: number | null;
  withVoltage(voltage: number | null): SampleIntervalDataPoint;

  readonly status?: number | null;
  withStatus(status: number | null): SampleIntervalDataPoint;
}

