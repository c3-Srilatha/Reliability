export interface UiSdlLayoutNavMenu {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutNavMenu;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutNavMenu;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutNavMenu;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutNavMenu;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutNavMenu;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutNavMenu;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutNavMenu;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutNavMenu;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutNavMenu;

  readonly navMenu?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withNavMenu(navMenu: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavMenu;
}

