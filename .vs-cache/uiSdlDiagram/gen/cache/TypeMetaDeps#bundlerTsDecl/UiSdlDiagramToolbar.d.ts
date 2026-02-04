export interface UiSdlDiagramToolbar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramToolbar;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramToolbar;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramToolbar;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramToolbar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramToolbar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramToolbar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramToolbar;

  readonly items?: C3.Array<any | null>;
  withItems(items: C3.Array<any | null> | Array<any | null>): UiSdlDiagramToolbar;

  readonly hiddenItems?: C3.Array<string | null>;
  withHiddenItems(hiddenItems: C3.Array<string | null> | Array<string | null>): UiSdlDiagramToolbar;
}

