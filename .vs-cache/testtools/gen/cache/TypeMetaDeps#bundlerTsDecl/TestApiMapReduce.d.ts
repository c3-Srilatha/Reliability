export interface TestApiMapReduce {

  readonly run?: MapReduceRun | null;
  withRun(run: IMapReduceRun | null): TestApiMapReduce;

  readonly runs?: C3.Array<MapReduceRun | null>;
  withRuns(runs: C3.Array<MapReduceRun | null> | Array<IMapReduceRun | null>): TestApiMapReduce;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): TestApiMapReduce;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): TestApiMapReduce;

  readonly priority?: number | null;
  withPriority(priority: number | null): TestApiMapReduce;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TestApiMapReduce;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): TestApiMapReduce;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): TestApiMapReduce;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): TestApiMapReduce;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): TestApiMapReduce;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): TestApiMapReduce;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): TestApiMapReduce;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): TestApiMapReduce;

  readonly targetType?: Type | null;
  withTargetType(targetType: IType | null): TestApiMapReduce;

  readonly useFileSystemForInterVals?: boolean;
  withUseFileSystemForInterVals(useFileSystemForInterVals: boolean): TestApiMapReduce;

  readonly useBatchIdsForReadInput?: boolean;
  withUseBatchIdsForReadInput(useBatchIdsForReadInput: boolean): TestApiMapReduce;

  readonly include?: string | null;
  withInclude(include: string | null): TestApiMapReduce;

  readonly filter?: string | null;
  withFilter(filter: string | null): TestApiMapReduce;

  readonly order?: string | null;
  withOrder(order: string | null): TestApiMapReduce;

  readonly limit?: number | null;
  withLimit(limit: number | null): TestApiMapReduce;

  readonly samplePct?: number | null;
  withSamplePct(samplePct: number | null): TestApiMapReduce;

  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): TestApiMapReduce;

  readonly subBatchSize?: number | null;
  withSubBatchSize(subBatchSize: number | null): TestApiMapReduce;

  readonly numBatches?: number | null;
  withNumBatches(numBatches: number | null): TestApiMapReduce;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): TestApiMapReduce;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): TestApiMapReduce;

  readonly id: string;
  withId(id: string): TestApiMapReduce;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiMapReduce;

  readonly name?: string | null;
  withName(name: string | null): TestApiMapReduce;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiMapReduce;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiMapReduce;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiMapReduce;

  readonly targetFilter?: TestApiMapReduceEntity | null;
  withTargetFilter(targetFilter: ITestApiMapReduceEntity | null): TestApiMapReduce;

  readonly failJobDuringMap?: boolean;
  withFailJobDuringMap(failJobDuringMap: boolean): TestApiMapReduce;

  readonly failJobDuringReduce?: boolean;
  withFailJobDuringReduce(failJobDuringReduce: boolean): TestApiMapReduce;

  readonly mapStallTime?: number | null;
  withMapStallTime(mapStallTime: number | null): TestApiMapReduce;

  readonly reduceStallTime?: number | null;
  withReduceStallTime(reduceStallTime: number | null): TestApiMapReduce;
}

