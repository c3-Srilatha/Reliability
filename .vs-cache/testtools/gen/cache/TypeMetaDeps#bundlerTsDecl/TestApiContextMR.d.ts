export interface TestApiContextMR {

  readonly run?: MapReduceRun | null;
  withRun(run: IMapReduceRun | null): TestApiContextMR;

  readonly runs?: C3.Array<MapReduceRun | null>;
  withRuns(runs: C3.Array<MapReduceRun | null> | Array<IMapReduceRun | null>): TestApiContextMR;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): TestApiContextMR;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): TestApiContextMR;

  readonly priority?: number | null;
  withPriority(priority: number | null): TestApiContextMR;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TestApiContextMR;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): TestApiContextMR;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): TestApiContextMR;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): TestApiContextMR;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): TestApiContextMR;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): TestApiContextMR;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): TestApiContextMR;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): TestApiContextMR;

  readonly targetType?: Type | null;
  withTargetType(targetType: IType | null): TestApiContextMR;

  readonly useFileSystemForInterVals?: boolean;
  withUseFileSystemForInterVals(useFileSystemForInterVals: boolean): TestApiContextMR;

  readonly useBatchIdsForReadInput?: boolean;
  withUseBatchIdsForReadInput(useBatchIdsForReadInput: boolean): TestApiContextMR;

  readonly include?: string | null;
  withInclude(include: string | null): TestApiContextMR;

  readonly filter?: string | null;
  withFilter(filter: string | null): TestApiContextMR;

  readonly order?: string | null;
  withOrder(order: string | null): TestApiContextMR;

  readonly limit?: number | null;
  withLimit(limit: number | null): TestApiContextMR;

  readonly samplePct?: number | null;
  withSamplePct(samplePct: number | null): TestApiContextMR;

  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): TestApiContextMR;

  readonly subBatchSize?: number | null;
  withSubBatchSize(subBatchSize: number | null): TestApiContextMR;

  readonly numBatches?: number | null;
  withNumBatches(numBatches: number | null): TestApiContextMR;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): TestApiContextMR;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): TestApiContextMR;

  readonly id: string;
  withId(id: string): TestApiContextMR;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiContextMR;

  readonly name?: string | null;
  withName(name: string | null): TestApiContextMR;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiContextMR;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiContextMR;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiContextMR;

  readonly targetFilter?: TestApiContext | null;
  withTargetFilter(targetFilter: ITestApiContext | null): TestApiContextMR;
}

