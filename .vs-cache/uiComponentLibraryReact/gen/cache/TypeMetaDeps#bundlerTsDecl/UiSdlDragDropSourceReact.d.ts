export interface UiSdlDragDropSourceReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropSourceReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropSourceReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropSourceReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDragDropSourceReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropSourceReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropSourceReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropSourceReact;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlDragDropSourceReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropSourceReact;
}

