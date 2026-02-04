export interface GitHubConfigureForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GitHubConfigureForm;

  readonly id?: string | null;
  withId(id: string | null): GitHubConfigureForm;

  readonly name?: string | null;
  withName(name: string | null): GitHubConfigureForm;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GitHubConfigureForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GitHubConfigureForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GitHubConfigureForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GitHubConfigureForm;

  readonly envId?: string | null;
  withEnvId(envId: string | null): GitHubConfigureForm;

  readonly reConfigureInRunningApp?: boolean;
  withReConfigureInRunningApp(reConfigureInRunningApp: boolean): GitHubConfigureForm;
}

