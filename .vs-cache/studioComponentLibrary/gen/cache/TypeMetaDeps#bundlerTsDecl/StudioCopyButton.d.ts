export interface StudioCopyButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCopyButton;

  readonly id?: string | null;
  withId(id: string | null): StudioCopyButton;

  readonly name?: string | null;
  withName(name: string | null): StudioCopyButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCopyButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCopyButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCopyButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCopyButton;

  readonly text?: string | null;
  withText(text: string | null): StudioCopyButton;

  readonly hideText?: boolean;
  withHideText(hideText: boolean): StudioCopyButton;

  readonly showCopiedTextAsTooltip?: boolean;
  withShowCopiedTextAsTooltip(showCopiedTextAsTooltip: boolean): StudioCopyButton;
}

