export interface GithubButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GithubButtonReact;

  readonly id?: string | null;
  withId(id: string | null): GithubButtonReact;

  readonly name?: string | null;
  withName(name: string | null): GithubButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GithubButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GithubButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GithubButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GithubButtonReact;

  readonly gitConnectionStatus?: boolean;
  withGitConnectionStatus(gitConnectionStatus: boolean): GithubButtonReact;

  readonly gitBranch?: Pkg.Store.Git.Branch | null;
  withGitBranch(gitBranch: IPkg.Store.Git.Branch | null): GithubButtonReact;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): GithubButtonReact;

  readonly commitList?: C3.Array<Git.CommitInfo | null>;
  withCommitList(commitList: C3.Array<Git.CommitInfo | null> | Array<IGit.CommitInfo | null>): GithubButtonReact;

  readonly fileChangesApiCallStatus?: boolean;
  withFileChangesApiCallStatus(fileChangesApiCallStatus: boolean): GithubButtonReact;
}

