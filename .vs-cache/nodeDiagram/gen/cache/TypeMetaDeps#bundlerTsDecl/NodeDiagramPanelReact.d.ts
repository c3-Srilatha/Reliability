export interface NodeDiagramPanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramPanelReact;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramPanelReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramPanelReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramPanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramPanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramPanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramPanelReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): NodeDiagramPanelReact;

  readonly position?: string | null;
  withPosition(position: string | null): NodeDiagramPanelReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramPanelReact;
}

