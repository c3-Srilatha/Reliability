export interface SourceControlApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SourceControlApplicationState;

  readonly id?: string | null;
  withId(id: string | null): SourceControlApplicationState;

  readonly name?: string | null;
  withName(name: string | null): SourceControlApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SourceControlApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SourceControlApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SourceControlApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SourceControlApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SourceControlApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SourceControlApplicationState;

  readonly githubFormFieldValues?: any | null;
  withGithubFormFieldValues(githubFormFieldValues: any | null): SourceControlApplicationState;

  readonly pkgStoreInstance?: Pkg.Store | null;
  withPkgStoreInstance(pkgStoreInstance: IPkg.Store | null): SourceControlApplicationState;

  readonly gitInstance?: Git | null;
  withGitInstance(gitInstance: IGit | null): SourceControlApplicationState;

  readonly gitConnectionStatus?: boolean;
  withGitConnectionStatus(gitConnectionStatus: boolean): SourceControlApplicationState;

  readonly gitBranchConfig?: Pkg.Store.Git.Branch | null;
  withGitBranchConfig(gitBranchConfig: IPkg.Store.Git.Branch | null): SourceControlApplicationState;

  readonly fileChangeList?: Git.Changes | null;
  withFileChangeList(fileChangeList: IGit.Changes | null): SourceControlApplicationState;

  readonly commitList?: C3.Array<Git.CommitInfo | null>;
  withCommitList(commitList: C3.Array<Git.CommitInfo | null> | Array<IGit.CommitInfo | null>): SourceControlApplicationState;

  readonly envId?: string | null;
  withEnvId(envId: string | null): SourceControlApplicationState;

  readonly fileChangesApiCallStatus?: boolean;
  withFileChangesApiCallStatus(fileChangesApiCallStatus: boolean): SourceControlApplicationState;

  readonly conflictDetectedOn?: GitActions | null;
  withConflictDetectedOn(conflictDetectedOn: IGitActions | null): SourceControlApplicationState;

  readonly conflictsResolved?: boolean;
  withConflictsResolved(conflictsResolved: boolean): SourceControlApplicationState;

  readonly commitMessage?: string | null;
  withCommitMessage(commitMessage: string | null): SourceControlApplicationState;

  readonly reConfigureInRunningApp?: boolean;
  withReConfigureInRunningApp(reConfigureInRunningApp: boolean): SourceControlApplicationState;
}

