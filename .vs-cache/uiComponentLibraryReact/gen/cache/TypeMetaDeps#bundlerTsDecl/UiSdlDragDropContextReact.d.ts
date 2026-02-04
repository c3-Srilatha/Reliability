export interface UiSdlDragDropContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropContextReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlDragDropContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropContextReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropContextReact;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlDragDropContextReact;
}

