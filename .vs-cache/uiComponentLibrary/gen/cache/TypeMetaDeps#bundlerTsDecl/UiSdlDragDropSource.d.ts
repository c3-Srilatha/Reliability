export interface UiSdlDragDropSource {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDragDropSource;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDragDropSource;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDragDropSource;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDragDropSource;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDragDropSource;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDragDropSource;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDragDropSource;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlDragDropSource;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDragDropSource;
}

