export interface UiSdlGridLayoutReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGridLayoutReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGridLayoutReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGridLayoutReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGridLayoutReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGridLayoutReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGridLayoutReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGridLayoutReact;

  readonly header?: UiSdlGridLayoutHeader | null;
  withHeader(header: IUiSdlGridLayoutHeader | null): UiSdlGridLayoutReact;

  readonly gridStyle?: string | null;
  withGridStyle(gridStyle: string | null): UiSdlGridLayoutReact;

  readonly fixedSize?: string | null;
  withFixedSize(fixedSize: string | null): UiSdlGridLayoutReact;

  readonly children?: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null>;
  withChildren(children: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null> | Array<IUiSdlGridContainer | null | string | null | IUiSdlComponentContainer | null | IUiSdlConditionalComponentContainer | null | IUiSdlSwitchComponentContainer | null | null>): UiSdlGridLayoutReact;

  readonly display?: string | null;
  withDisplay(display: string | null): UiSdlGridLayoutReact;

  readonly gutter?: number | null;
  withGutter(gutter: number | null): UiSdlGridLayoutReact;

  readonly pagePadding?: number | null;
  withPagePadding(pagePadding: number | null): UiSdlGridLayoutReact;

  readonly detachedFields?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withDetachedFields(detachedFields: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlGridLayoutReact;

  readonly navMenu?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withNavMenu(navMenu: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlGridLayoutReact;

  readonly highlightBorders?: boolean;
  withHighlightBorders(highlightBorders: boolean): UiSdlGridLayoutReact;
}

