export interface StudioDraggableHandleReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioDraggableHandleReact;

  readonly id?: string | null;
  withId(id: string | null): StudioDraggableHandleReact;

  readonly name?: string | null;
  withName(name: string | null): StudioDraggableHandleReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioDraggableHandleReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioDraggableHandleReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioDraggableHandleReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioDraggableHandleReact;

  readonly dragDropSourceData: C3.Map<string | null, any>;
  withDragDropSourceData(dragDropSourceData: C3.Map<string | null, any> | {[key: string | null]: any}): StudioDraggableHandleReact;

  readonly dragDropKind: string;
  withDragDropKind(dragDropKind: string): StudioDraggableHandleReact;

  readonly children: C3.Array<UiSdlComponentRef<any> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<any> | null> | Array<IUiSdlComponentRef<any> | null>): StudioDraggableHandleReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): StudioDraggableHandleReact;
}

