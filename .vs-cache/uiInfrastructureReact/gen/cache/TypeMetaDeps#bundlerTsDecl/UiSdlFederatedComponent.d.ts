export interface UiSdlFederatedComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFederatedComponent;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFederatedComponent;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFederatedComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFederatedComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFederatedComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFederatedComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFederatedComponent;

  readonly remoteEntryUrl: string;
  withRemoteEntryUrl(remoteEntryUrl: string): UiSdlFederatedComponent;

  readonly componentName: string;
  withComponentName(componentName: string): UiSdlFederatedComponent;

  readonly federatedModuleName: string;
  withFederatedModuleName(federatedModuleName: string): UiSdlFederatedComponent;
}

