export interface UiSdlGridLayout {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGridLayout;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGridLayout;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGridLayout;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGridLayout;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGridLayout;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGridLayout;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGridLayout;

  readonly header?: UiSdlGridLayoutHeader | null;
  withHeader(header: IUiSdlGridLayoutHeader | null): UiSdlGridLayout;

  readonly gridStyle?: string | null;
  withGridStyle(gridStyle: string | null): UiSdlGridLayout;

  readonly fixedSize?: string | null;
  withFixedSize(fixedSize: string | null): UiSdlGridLayout;

  readonly children?: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null>;
  withChildren(children: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null> | Array<IUiSdlGridContainer | null | string | null | IUiSdlComponentContainer | null | IUiSdlConditionalComponentContainer | null | IUiSdlSwitchComponentContainer | null | null>): UiSdlGridLayout;

  readonly display?: string | null;
  withDisplay(display: string | null): UiSdlGridLayout;

  readonly gutter?: number | null;
  withGutter(gutter: number | null): UiSdlGridLayout;

  readonly pagePadding?: number | null;
  withPagePadding(pagePadding: number | null): UiSdlGridLayout;

  readonly detachedFields?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withDetachedFields(detachedFields: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlGridLayout;

  readonly navMenu?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withNavMenu(navMenu: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlGridLayout;

  readonly highlightBorders?: boolean;
  withHighlightBorders(highlightBorders: boolean): UiSdlGridLayout;
}

