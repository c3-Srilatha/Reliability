export interface UiSdlMessageContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMessageContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMessageContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMessageContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlMessageContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMessageContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMessageContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMessageContainer;

  readonly renderPosition?: string | null;
  withRenderPosition(renderPosition: string | null): UiSdlMessageContainer;

  readonly maximumDisplayedMessages?: number | null;
  withMaximumDisplayedMessages(maximumDisplayedMessages: number | null): UiSdlMessageContainer;

  readonly messageBannerDuration?: number | null;
  withMessageBannerDuration(messageBannerDuration: number | null): UiSdlMessageContainer;

  readonly messageBannerConfigs?: C3.Array<UiSdlMessageBannerConfig | null>;
  withMessageBannerConfigs(messageBannerConfigs: C3.Array<UiSdlMessageBannerConfig | null> | Array<IUiSdlMessageBannerConfig | null>): UiSdlMessageContainer;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlMessageContainer;
}

