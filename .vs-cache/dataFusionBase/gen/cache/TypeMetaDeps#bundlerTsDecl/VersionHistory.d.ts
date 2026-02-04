export interface VersionHistory {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VersionHistory;

  readonly id?: string | null;
  withId(id: string | null): VersionHistory;

  readonly name?: string | null;
  withName(name: string | null): VersionHistory;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VersionHistory;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VersionHistory;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VersionHistory;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VersionHistory;

  readonly gitBranch?: Pkg.Store.Git.Branch | null;
  withGitBranch(gitBranch: IPkg.Store.Git.Branch | null): VersionHistory;

  readonly commitList?: C3.Array<Git.CommitInfo | null>;
  withCommitList(commitList: C3.Array<Git.CommitInfo | null> | Array<IGit.CommitInfo | null>): VersionHistory;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): VersionHistory;

  readonly fileChangesApiCallStatus?: boolean;
  withFileChangesApiCallStatus(fileChangesApiCallStatus: boolean): VersionHistory;
}

