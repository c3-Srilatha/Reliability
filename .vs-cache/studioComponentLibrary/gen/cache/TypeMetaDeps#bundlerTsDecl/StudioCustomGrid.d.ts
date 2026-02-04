export interface StudioCustomGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCustomGrid;

  readonly id?: string | null;
  withId(id: string | null): StudioCustomGrid;

  readonly name?: string | null;
  withName(name: string | null): StudioCustomGrid;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCustomGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCustomGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCustomGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCustomGrid;

  readonly content?: C3.Array<any | null>;
  withContent(content: C3.Array<any | null> | Array<any | null>): StudioCustomGrid;
}

