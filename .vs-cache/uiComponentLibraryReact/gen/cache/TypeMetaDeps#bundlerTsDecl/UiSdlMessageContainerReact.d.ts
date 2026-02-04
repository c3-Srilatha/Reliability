export interface UiSdlMessageContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMessageContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMessageContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMessageContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlMessageContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMessageContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMessageContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMessageContainerReact;

  readonly renderPosition?: string | null;
  withRenderPosition(renderPosition: string | null): UiSdlMessageContainerReact;

  readonly maximumDisplayedMessages?: number | null;
  withMaximumDisplayedMessages(maximumDisplayedMessages: number | null): UiSdlMessageContainerReact;

  readonly messageBannerDuration?: number | null;
  withMessageBannerDuration(messageBannerDuration: number | null): UiSdlMessageContainerReact;

  readonly messageBannerConfigs?: C3.Array<UiSdlMessageBannerConfig | null>;
  withMessageBannerConfigs(messageBannerConfigs: C3.Array<UiSdlMessageBannerConfig | null> | Array<IUiSdlMessageBannerConfig | null>): UiSdlMessageContainerReact;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlMessageContainerReact;
}

