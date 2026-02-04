export interface TSPerfTest {

  readonly run?: BatchJobRun | null;
  withRun(run: IBatchJobRun | null): TSPerfTest;

  readonly runs?: C3.Array<BatchJobRun | null>;
  withRuns(runs: C3.Array<BatchJobRun | null> | Array<IBatchJobRun | null>): TSPerfTest;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): TSPerfTest;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): TSPerfTest;

  readonly priority?: number | null;
  withPriority(priority: number | null): TSPerfTest;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TSPerfTest;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): TSPerfTest;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): TSPerfTest;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): TSPerfTest;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): TSPerfTest;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): TSPerfTest;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): TSPerfTest;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): TSPerfTest;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): TSPerfTest;

  readonly id: string;
  withId(id: string): TSPerfTest;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TSPerfTest;

  readonly name?: string | null;
  withName(name: string | null): TSPerfTest;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TSPerfTest;

  readonly version?: number | null;
  withVersion(version: number | null): TSPerfTest;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TSPerfTest;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): TSPerfTest;

  readonly asyncRootId?: string | null;
  withAsyncRootId(asyncRootId: string | null): TSPerfTest;
}

