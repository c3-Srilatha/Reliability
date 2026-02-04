export interface TestMetricChartData {

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): TestMetricChartData;

  readonly outlierCode?: number | null;
  withOutlierCode(outlierCode: number | null): TestMetricChartData;

  readonly comments?: string | null;
  withComments(comments: string | null): TestMetricChartData;

  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): TestMetricChartData;

  readonly dataVersion?: number | null;
  withDataVersion(dataVersion: number | null): TestMetricChartData;

  readonly statusCode?: string | null;
  withStatusCode(statusCode: string | null): TestMetricChartData;

  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): TestMetricChartData;

  readonly PK_BIN_SEPARATOR?: string | null;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): TestMetricChartData;

  readonly parent: TestMetricEvaluatable;
  withParent(parent: ITestMetricEvaluatable): TestMetricChartData;

  readonly id: string;
  withId(id: string): TestMetricChartData;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestMetricChartData;

  readonly name?: string | null;
  withName(name: string | null): TestMetricChartData;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestMetricChartData;

  readonly version?: number | null;
  withVersion(version: number | null): TestMetricChartData;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestMetricChartData;

  readonly quantity?: number | null;
  withQuantity(quantity: number | null): TestMetricChartData;
}

