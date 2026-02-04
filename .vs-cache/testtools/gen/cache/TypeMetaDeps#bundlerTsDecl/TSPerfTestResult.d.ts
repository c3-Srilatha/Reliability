export interface TSPerfTestResult {

  readonly id: string;
  withId(id: string): TSPerfTestResult;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TSPerfTestResult;

  readonly name?: string | null;
  withName(name: string | null): TSPerfTestResult;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TSPerfTestResult;

  readonly version?: number | null;
  withVersion(version: number | null): TSPerfTestResult;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TSPerfTestResult;

  readonly noOfHeaders?: number | null;
  withNoOfHeaders(noOfHeaders: number | null): TSPerfTestResult;

  readonly noOfDays?: number | null;
  withNoOfDays(noOfDays: number | null): TSPerfTestResult;

  readonly normMode?: string | null;
  withNormMode(normMode: string | null): TSPerfTestResult;

  readonly totalDataLoadTime?: number | null;
  withTotalDataLoadTime(totalDataLoadTime: number | null): TSPerfTestResult;

  readonly totalNormTime?: number | null;
  withTotalNormTime(totalNormTime: number | null): TSPerfTestResult;

  readonly normStartTime?: DateTime | null;
  withNormStartTime(normStartTime: DateTime | Date | string | null): TSPerfTestResult;

  readonly normEndTime?: DateTime | null;
  withNormEndTime(normEndTime: DateTime | Date | string | null): TSPerfTestResult;

  readonly splunkQuery?: string | null;
  withSplunkQuery(splunkQuery: string | null): TSPerfTestResult;

  readonly isInitialLoad?: boolean;
  withIsInitialLoad(isInitialLoad: boolean): TSPerfTestResult;
}

