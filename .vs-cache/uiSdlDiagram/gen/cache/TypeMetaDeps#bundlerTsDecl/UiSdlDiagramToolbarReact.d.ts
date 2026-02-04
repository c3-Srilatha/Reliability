export interface UiSdlDiagramToolbarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramToolbarReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramToolbarReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramToolbarReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramToolbarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramToolbarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramToolbarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramToolbarReact;

  readonly items?: C3.Array<any | null>;
  withItems(items: C3.Array<any | null> | Array<any | null>): UiSdlDiagramToolbarReact;

  readonly hiddenItems?: C3.Array<string | null>;
  withHiddenItems(hiddenItems: C3.Array<string | null> | Array<string | null>): UiSdlDiagramToolbarReact;
}

