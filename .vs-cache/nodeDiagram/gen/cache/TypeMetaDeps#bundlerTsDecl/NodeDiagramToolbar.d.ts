export interface NodeDiagramToolbar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramToolbar;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramToolbar;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramToolbar;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramToolbar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramToolbar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramToolbar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramToolbar;

  readonly items?: C3.Array<any | null>;
  withItems(items: C3.Array<any | null> | Array<any | null>): NodeDiagramToolbar;
}

