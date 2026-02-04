export interface GitHubConfigureFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GitHubConfigureFormReact;

  readonly id?: string | null;
  withId(id: string | null): GitHubConfigureFormReact;

  readonly name?: string | null;
  withName(name: string | null): GitHubConfigureFormReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GitHubConfigureFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GitHubConfigureFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GitHubConfigureFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GitHubConfigureFormReact;

  readonly envId?: string | null;
  withEnvId(envId: string | null): GitHubConfigureFormReact;

  readonly reConfigureInRunningApp?: boolean;
  withReConfigureInRunningApp(reConfigureInRunningApp: boolean): GitHubConfigureFormReact;
}

