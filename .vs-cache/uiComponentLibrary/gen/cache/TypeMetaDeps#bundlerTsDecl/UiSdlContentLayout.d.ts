export interface UiSdlContentLayout {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentLayout;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentLayout;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentLayout;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlContentLayout;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentLayout;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentLayout;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentLayout;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlContentLayout;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlContentLayout;
}

