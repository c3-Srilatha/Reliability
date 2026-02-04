export interface StudioCopyButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCopyButtonReact;

  readonly id?: string | null;
  withId(id: string | null): StudioCopyButtonReact;

  readonly name?: string | null;
  withName(name: string | null): StudioCopyButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCopyButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCopyButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCopyButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCopyButtonReact;

  readonly text?: string | null;
  withText(text: string | null): StudioCopyButtonReact;

  readonly hideText?: boolean;
  withHideText(hideText: boolean): StudioCopyButtonReact;

  readonly showCopiedTextAsTooltip?: boolean;
  withShowCopiedTextAsTooltip(showCopiedTextAsTooltip: boolean): StudioCopyButtonReact;
}

