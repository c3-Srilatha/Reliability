export interface UiSdlMarkdownRenderer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMarkdownRenderer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMarkdownRenderer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMarkdownRenderer;

  readonly dataSpec?: UiSdlMarkdownRendererDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMarkdownRendererDataSpec | null): UiSdlMarkdownRenderer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMarkdownRenderer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMarkdownRenderer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMarkdownRenderer;

  readonly dangerousInnerHtml?: string | null;
  withDangerousInnerHtml(dangerousInnerHtml: string | null): UiSdlMarkdownRenderer;

  readonly fileType?: string | null;
  withFileType(fileType: string | null): UiSdlMarkdownRenderer;
}

