export interface UiSdlLayoutNavMenuReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutNavMenuReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutNavMenuReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutNavMenuReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutNavMenuReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutNavMenuReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutNavMenuReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutNavMenuReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutNavMenuReact;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutNavMenuReact;

  readonly navMenu?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withNavMenu(navMenu: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavMenuReact;
}

