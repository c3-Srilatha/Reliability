export interface UiSdlIframe {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlIframe;

  readonly id?: string | null;
  withId(id: string | null): UiSdlIframe;

  readonly name?: string | null;
  withName(name: string | null): UiSdlIframe;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlIframe;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlIframe;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlIframe;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlIframe;

  readonly src?: string | null;
  withSrc(src: string | null): UiSdlIframe;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlIframe;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlIframe;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlIframe;
}

