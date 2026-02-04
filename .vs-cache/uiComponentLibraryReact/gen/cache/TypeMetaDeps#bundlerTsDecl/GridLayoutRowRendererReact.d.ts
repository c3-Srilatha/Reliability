export interface GridLayoutRowRendererReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GridLayoutRowRendererReact;

  readonly id?: string | null;
  withId(id: string | null): GridLayoutRowRendererReact;

  readonly name?: string | null;
  withName(name: string | null): GridLayoutRowRendererReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GridLayoutRowRendererReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GridLayoutRowRendererReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GridLayoutRowRendererReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GridLayoutRowRendererReact;

  readonly header?: UiSdlGridLayoutHeader | null;
  withHeader(header: IUiSdlGridLayoutHeader | null): GridLayoutRowRendererReact;

  readonly gridStyle?: string | null;
  withGridStyle(gridStyle: string | null): GridLayoutRowRendererReact;

  readonly fixedSize?: string | null;
  withFixedSize(fixedSize: string | null): GridLayoutRowRendererReact;

  readonly children?: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null>;
  withChildren(children: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null> | Array<IUiSdlGridContainer | null | string | null | IUiSdlComponentContainer | null | IUiSdlConditionalComponentContainer | null | IUiSdlSwitchComponentContainer | null | null>): GridLayoutRowRendererReact;

  readonly display?: string | null;
  withDisplay(display: string | null): GridLayoutRowRendererReact;

  readonly gutter?: number | null;
  withGutter(gutter: number | null): GridLayoutRowRendererReact;

  readonly pagePadding?: number | null;
  withPagePadding(pagePadding: number | null): GridLayoutRowRendererReact;

  readonly detachedFields?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withDetachedFields(detachedFields: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): GridLayoutRowRendererReact;

  readonly navMenu?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withNavMenu(navMenu: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): GridLayoutRowRendererReact;

  readonly highlightBorders?: boolean;
  withHighlightBorders(highlightBorders: boolean): GridLayoutRowRendererReact;
}

