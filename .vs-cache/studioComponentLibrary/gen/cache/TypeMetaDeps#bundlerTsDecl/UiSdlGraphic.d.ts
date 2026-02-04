export interface UiSdlGraphic {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphic;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphic;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphic;

  readonly dataSpec?: UiSdlGraphicDataSpec | null;
  withDataSpec(dataSpec: IUiSdlGraphicDataSpec | null): UiSdlGraphic;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphic;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphic;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphic;
}

