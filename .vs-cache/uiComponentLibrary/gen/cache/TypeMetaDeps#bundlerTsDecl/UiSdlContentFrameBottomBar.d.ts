export interface UiSdlContentFrameBottomBar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameBottomBar;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameBottomBar;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameBottomBar;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameBottomBar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameBottomBar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameBottomBar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameBottomBar;

  readonly leftButtons?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withLeftButtons(leftButtons: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameBottomBar;

  readonly leftButtonsVisibilityMap?: C3.Map<string | null, boolean>;
  withLeftButtonsVisibilityMap(leftButtonsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameBottomBar;

  readonly rightButtons?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withRightButtons(rightButtons: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameBottomBar;

  readonly rightButtonsVisibilityMap?: C3.Map<string | null, boolean>;
  withRightButtonsVisibilityMap(rightButtonsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameBottomBar;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameBottomBar;
}

