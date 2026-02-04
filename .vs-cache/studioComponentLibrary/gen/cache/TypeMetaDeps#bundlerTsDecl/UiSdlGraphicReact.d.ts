export interface UiSdlGraphicReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphicReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphicReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphicReact;

  readonly dataSpec?: UiSdlGraphicDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGraphicDataSpec | null): UiSdlGraphicReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphicReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphicReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphicReact;
}

