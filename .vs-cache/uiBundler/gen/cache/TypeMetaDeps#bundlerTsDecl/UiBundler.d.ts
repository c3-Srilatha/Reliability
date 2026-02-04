export interface UiBundler {

  readonly run?: BatchJobRun | null;
  withRun(run: IBatchJobRun | null): UiBundler;

  readonly runs?: C3.Array<BatchJobRun | null>;
  withRuns(runs: C3.Array<BatchJobRun | null> | Array<IBatchJobRun | null>): UiBundler;

  readonly options?: Obj | null;
  withOptions(options: IObj | null): UiBundler;

  readonly onCompleteCallback?: JobBase.Callback | null;
  withOnCompleteCallback(onCompleteCallback: IJobBase.Callback | null): UiBundler;

  readonly priority?: number | null;
  withPriority(priority: number | null): UiBundler;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiBundler;

  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): UiBundler;

  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): UiBundler;

  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): UiBundler;

  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): UiBundler;

  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): UiBundler;

  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): UiBundler;

  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): UiBundler;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): UiBundler;

  readonly id: string;
  withId(id: string): UiBundler;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiBundler;

  readonly name?: string | null;
  withName(name: string | null): UiBundler;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiBundler;

  readonly version?: number | null;
  withVersion(version: number | null): UiBundler;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiBundler;

  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): UiBundler;

  readonly bundleStatuses?: C3.Array<BundleStatus | null>;
  withBundleStatuses(bundleStatuses: C3.Array<BundleStatus | null> | Array<IBundleStatus | null>): UiBundler;

  readonly performanceProfile?: UiBundlerPerformanceProfile | null;
  withPerformanceProfile(performanceProfile: IUiBundlerPerformanceProfile | null): UiBundler;
}

