export interface UiSdlContentFrameReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameReact;

  readonly showTop?: boolean;
  withShowTop(showTop: boolean): UiSdlContentFrameReact;

  readonly topBar?: UiSdlComponentRef<UiSdlContentFrameTopBarBase | null> | null;
  withTopBar(topBar: IUiSdlComponentRef<UiSdlContentFrameTopBarBase | null> | null): UiSdlContentFrameReact;

  readonly bottomBar?: UiSdlComponentRef<UiSdlContentFrameBottomBar | null> | null;
  withBottomBar(bottomBar: IUiSdlComponentRef<UiSdlContentFrameBottomBar | null> | null): UiSdlContentFrameReact;

  readonly showBottom?: boolean;
  withShowBottom(showBottom: boolean): UiSdlContentFrameReact;

  readonly coverage?: string | null;
  withCoverage(coverage: string | null): UiSdlContentFrameReact;

  readonly content?: C3.Array<UiSdlGridContainer | null | UiSdlComponentContainer | null | null>;
  withContent(content: C3.Array<UiSdlGridContainer | null | UiSdlComponentContainer | null | null> | Array<IUiSdlGridContainer | null | IUiSdlComponentContainer | null | null>): UiSdlContentFrameReact;
}

