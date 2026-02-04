export interface StudioDraggableHandle {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioDraggableHandle;

  readonly id?: string | null;
  withId(id: string | null): StudioDraggableHandle;

  readonly name?: string | null;
  withName(name: string | null): StudioDraggableHandle;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioDraggableHandle;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioDraggableHandle;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioDraggableHandle;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioDraggableHandle;

  readonly dragDropSourceData: C3.Map<string | null, any>;
  withDragDropSourceData(dragDropSourceData: C3.Map<string | null, any> | {[key: string | null]: any}): StudioDraggableHandle;

  readonly dragDropKind: string;
  withDragDropKind(dragDropKind: string): StudioDraggableHandle;

  readonly children: C3.Array<UiSdlComponentRef<any> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<any> | null> | Array<IUiSdlComponentRef<any> | null>): StudioDraggableHandle;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): StudioDraggableHandle;
}

