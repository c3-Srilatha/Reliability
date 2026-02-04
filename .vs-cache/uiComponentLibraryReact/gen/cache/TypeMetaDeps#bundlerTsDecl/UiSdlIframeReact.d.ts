export interface UiSdlIframeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlIframeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlIframeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlIframeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlIframeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlIframeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlIframeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlIframeReact;

  readonly src?: string | null;
  withSrc(src: string | null): UiSdlIframeReact;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlIframeReact;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlIframeReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlIframeReact;
}

