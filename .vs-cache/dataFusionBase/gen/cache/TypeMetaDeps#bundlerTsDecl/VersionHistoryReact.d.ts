export interface VersionHistoryReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VersionHistoryReact;

  readonly id?: string | null;
  withId(id: string | null): VersionHistoryReact;

  readonly name?: string | null;
  withName(name: string | null): VersionHistoryReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VersionHistoryReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VersionHistoryReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VersionHistoryReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VersionHistoryReact;

  readonly gitBranch?: Pkg.Store.Git.Branch | null;
  withGitBranch(gitBranch: IPkg.Store.Git.Branch | null): VersionHistoryReact;

  readonly commitList?: C3.Array<Git.CommitInfo | null>;
  withCommitList(commitList: C3.Array<Git.CommitInfo | null> | Array<IGit.CommitInfo | null>): VersionHistoryReact;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): VersionHistoryReact;

  readonly fileChangesApiCallStatus?: boolean;
  withFileChangesApiCallStatus(fileChangesApiCallStatus: boolean): VersionHistoryReact;
}

