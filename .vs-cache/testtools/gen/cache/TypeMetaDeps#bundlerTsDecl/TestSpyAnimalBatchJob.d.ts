export interface TestSpyAnimalBatchJob {

  readonly run?: BatchJobRun | null;
  withRun(run: IBatchJobRun | null): TestSpyAnimalBatchJob;

  readonly runs?: C3.Array<BatchJobRun | null>;
  withRuns(runs: C3.Array<BatchJobRun | null> | Array<IBatchJobRun | null>): TestSpyAnimalBatchJob;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): TestSpyAnimalBatchJob;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): TestSpyAnimalBatchJob;

  readonly priority?: number | null;
  withPriority(priority: number | null): TestSpyAnimalBatchJob;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TestSpyAnimalBatchJob;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): TestSpyAnimalBatchJob;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): TestSpyAnimalBatchJob;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): TestSpyAnimalBatchJob;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): TestSpyAnimalBatchJob;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): TestSpyAnimalBatchJob;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): TestSpyAnimalBatchJob;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): TestSpyAnimalBatchJob;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): TestSpyAnimalBatchJob;

  readonly id: string;
  withId(id: string): TestSpyAnimalBatchJob;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestSpyAnimalBatchJob;

  readonly name?: string | null;
  withName(name: string | null): TestSpyAnimalBatchJob;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestSpyAnimalBatchJob;

  readonly version?: number | null;
  withVersion(version: number | null): TestSpyAnimalBatchJob;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestSpyAnimalBatchJob;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): TestSpyAnimalBatchJob;
}

