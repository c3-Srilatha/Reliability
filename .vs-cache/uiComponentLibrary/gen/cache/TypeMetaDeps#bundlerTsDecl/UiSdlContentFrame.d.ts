export interface UiSdlContentFrame {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrame;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrame;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrame;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrame;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrame;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrame;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrame;

  readonly showTop?: boolean;
  withShowTop(showTop: boolean): UiSdlContentFrame;

  readonly topBar?: UiSdlComponentRef<UiSdlContentFrameTopBarBase | null> | null;
  withTopBar(topBar: IUiSdlComponentRef<UiSdlContentFrameTopBarBase | null> | null): UiSdlContentFrame;

  readonly bottomBar?: UiSdlComponentRef<UiSdlContentFrameBottomBar | null> | null;
  withBottomBar(bottomBar: IUiSdlComponentRef<UiSdlContentFrameBottomBar | null> | null): UiSdlContentFrame;

  readonly showBottom?: boolean;
  withShowBottom(showBottom: boolean): UiSdlContentFrame;

  readonly coverage?: string | null;
  withCoverage(coverage: string | null): UiSdlContentFrame;

  readonly content?: C3.Array<UiSdlGridContainer | null | UiSdlComponentContainer | null | null>;
  withContent(content: C3.Array<UiSdlGridContainer | null | UiSdlComponentContainer | null | null> | Array<IUiSdlGridContainer | null | IUiSdlComponentContainer | null | null>): UiSdlContentFrame;
}

