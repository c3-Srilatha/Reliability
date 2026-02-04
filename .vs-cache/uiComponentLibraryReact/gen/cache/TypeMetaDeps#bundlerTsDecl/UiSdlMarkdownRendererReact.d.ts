export interface UiSdlMarkdownRendererReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMarkdownRendererReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMarkdownRendererReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMarkdownRendererReact;

  readonly dataSpec?: UiSdlMarkdownRendererDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMarkdownRendererDataSpec | null): UiSdlMarkdownRendererReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMarkdownRendererReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMarkdownRendererReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMarkdownRendererReact;

  readonly dangerousInnerHtml?: string | null;
  withDangerousInnerHtml(dangerousInnerHtml: string | null): UiSdlMarkdownRendererReact;

  readonly fileType?: string | null;
  withFileType(fileType: string | null): UiSdlMarkdownRendererReact;
}

