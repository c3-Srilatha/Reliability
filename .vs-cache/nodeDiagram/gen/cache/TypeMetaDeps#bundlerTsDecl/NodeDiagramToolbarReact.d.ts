export interface NodeDiagramToolbarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramToolbarReact;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramToolbarReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramToolbarReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramToolbarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramToolbarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramToolbarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramToolbarReact;

  readonly items?: C3.Array<any | null>;
  withItems(items: C3.Array<any | null> | Array<any | null>): NodeDiagramToolbarReact;
}

