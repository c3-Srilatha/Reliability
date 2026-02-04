export interface GithubButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GithubButton;

  readonly id?: string | null;
  withId(id: string | null): GithubButton;

  readonly name?: string | null;
  withName(name: string | null): GithubButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GithubButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GithubButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GithubButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GithubButton;

  readonly gitConnectionStatus?: boolean;
  withGitConnectionStatus(gitConnectionStatus: boolean): GithubButton;

  readonly gitBranch?: Pkg.Store.Git.Branch | null;
  withGitBranch(gitBranch: IPkg.Store.Git.Branch | null): GithubButton;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): GithubButton;

  readonly commitList?: C3.Array<Git.CommitInfo | null>;
  withCommitList(commitList: C3.Array<Git.CommitInfo | null> | Array<IGit.CommitInfo | null>): GithubButton;

  readonly fileChangesApiCallStatus?: boolean;
  withFileChangesApiCallStatus(fileChangesApiCallStatus: boolean): GithubButton;
}

