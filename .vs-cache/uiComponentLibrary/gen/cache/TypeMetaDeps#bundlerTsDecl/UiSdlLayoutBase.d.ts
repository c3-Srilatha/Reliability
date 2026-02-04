export interface UiSdlLayoutBase {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutBase;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutBase;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutBase;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutBase;
}

