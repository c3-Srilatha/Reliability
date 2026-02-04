export interface TestSpyAnimalBatchJobOptions {

  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): TestSpyAnimalBatchJobOptions;
}

