export interface UiSdlFederatedComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFederatedComponentReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFederatedComponentReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFederatedComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFederatedComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFederatedComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFederatedComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFederatedComponentReact;

  readonly remoteEntryUrl: string;
  withRemoteEntryUrl(remoteEntryUrl: string): UiSdlFederatedComponentReact;

  readonly componentName: string;
  withComponentName(componentName: string): UiSdlFederatedComponentReact;

  readonly federatedModuleName: string;
  withFederatedModuleName(federatedModuleName: string): UiSdlFederatedComponentReact;
}

