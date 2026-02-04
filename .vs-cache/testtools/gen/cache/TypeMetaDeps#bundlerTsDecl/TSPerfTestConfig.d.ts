export interface TSPerfTestConfig {

  readonly numberOfThreads?: number | null;
  withNumberOfThreads(numberOfThreads: number | null): TSPerfTestConfig;

  readonly startId?: number | null;
  withStartId(startId: number | null): TSPerfTestConfig;

  readonly endId?: number | null;
  withEndId(endId: number | null): TSPerfTestConfig;

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): TSPerfTestConfig;

  readonly timeseriesType?: Type | null;
  withTimeseriesType(timeseriesType: IType | null): TSPerfTestConfig;

  readonly timeseriesField?: string | null;
  withTimeseriesField(timeseriesField: string | null): TSPerfTestConfig;

  readonly isExactDim?: boolean;
  withIsExactDim(isExactDim: boolean): TSPerfTestConfig;

  readonly iterations?: number | null;
  withIterations(iterations: number | null): TSPerfTestConfig;

  readonly testAggregation?: boolean;
  withTestAggregation(testAggregation: boolean): TSPerfTestConfig;

  readonly isInitialLoad?: boolean;
  withIsInitialLoad(isInitialLoad: boolean): TSPerfTestConfig;

  readonly startTime?: DateTime | null;
  withStartTime(startTime: DateTime | Date | string | null): TSPerfTestConfig;

  readonly noOfIncrementalDays?: number | null;
  withNoOfIncrementalDays(noOfIncrementalDays: number | null): TSPerfTestConfig;

  readonly targetObjId?: string | null;
  withTargetObjId(targetObjId: string | null): TSPerfTestConfig;

  readonly isConcurrencyTest?: boolean;
  withIsConcurrencyTest(isConcurrencyTest: boolean): TSPerfTestConfig;

  readonly validateAfterCreate?: boolean;
  withValidateAfterCreate(validateAfterCreate: boolean): TSPerfTestConfig;

  readonly grain?: string | null;
  withGrain(grain: string | null): TSPerfTestConfig;

  readonly batchNumber?: number | null;
  withBatchNumber(batchNumber: number | null): TSPerfTestConfig;
}

