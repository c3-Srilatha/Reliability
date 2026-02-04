export interface TestApiBatchJob {

  readonly run?: BatchJobRun | null;
  withRun(run: IBatchJobRun | null): TestApiBatchJob;

  readonly runs?: C3.Array<BatchJobRun | null>;
  withRuns(runs: C3.Array<BatchJobRun | null> | Array<IBatchJobRun | null>): TestApiBatchJob;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): TestApiBatchJob;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): TestApiBatchJob;

  readonly priority?: number | null;
  withPriority(priority: number | null): TestApiBatchJob;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TestApiBatchJob;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): TestApiBatchJob;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): TestApiBatchJob;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): TestApiBatchJob;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): TestApiBatchJob;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): TestApiBatchJob;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): TestApiBatchJob;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): TestApiBatchJob;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): TestApiBatchJob;

  readonly id: string;
  withId(id: string): TestApiBatchJob;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiBatchJob;

  readonly name?: string | null;
  withName(name: string | null): TestApiBatchJob;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiBatchJob;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiBatchJob;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiBatchJob;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): TestApiBatchJob;

  readonly failJobDuringDoStart?: boolean;
  withFailJobDuringDoStart(failJobDuringDoStart: boolean): TestApiBatchJob;

  readonly failJobDuringProcessBatch?: boolean;
  withFailJobDuringProcessBatch(failJobDuringProcessBatch: boolean): TestApiBatchJob;

  readonly doStartStallTime?: number | null;
  withDoStartStallTime(doStartStallTime: number | null): TestApiBatchJob;

  readonly processBatchStallTime?: number | null;
  withProcessBatchStallTime(processBatchStallTime: number | null): TestApiBatchJob;
}

