export interface UiSdlDragDropTarget {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropTarget;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropTarget;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropTarget;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDragDropTarget;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropTarget;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropTarget;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropTarget;

  readonly acceptedDropKinds?: C3.Array<string | null>;
  withAcceptedDropKinds(acceptedDropKinds: C3.Array<string | null> | Array<string | null>): UiSdlDragDropTarget;

  readonly targetData?: any | null;
  withTargetData(targetData: any | null): UiSdlDragDropTarget;

  readonly addDropOffsetValues?: boolean;
  withAddDropOffsetValues(addDropOffsetValues: boolean): UiSdlDragDropTarget;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropTarget;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDragDropTarget;
}

