export interface UiSdlDragDropTargetReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropTargetReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropTargetReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropTargetReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDragDropTargetReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropTargetReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropTargetReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropTargetReact;

  readonly acceptedDropKinds?: C3.Array<string | null>;
  withAcceptedDropKinds(acceptedDropKinds: C3.Array<string | null> | Array<string | null>): UiSdlDragDropTargetReact;

  readonly targetData?: any | null;
  withTargetData(targetData: any | null): UiSdlDragDropTargetReact;

  readonly addDropOffsetValues?: boolean;
  withAddDropOffsetValues(addDropOffsetValues: boolean): UiSdlDragDropTargetReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropTargetReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDragDropTargetReact;
}

