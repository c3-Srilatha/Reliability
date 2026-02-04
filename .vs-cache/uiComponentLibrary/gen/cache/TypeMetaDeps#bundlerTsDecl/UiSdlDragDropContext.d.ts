export interface UiSdlDragDropContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropContext;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlDragDropContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropContext;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropContext;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlDragDropContext;
}

