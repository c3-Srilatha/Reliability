export interface NodeDiagramPanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramPanel;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramPanel;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramPanel;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramPanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramPanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramPanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramPanel;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): NodeDiagramPanel;

  readonly position?: string | null;
  withPosition(position: string | null): NodeDiagramPanel;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramPanel;
}

