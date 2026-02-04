export interface UiSdlContentFrameBottomBarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameBottomBarReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameBottomBarReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameBottomBarReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameBottomBarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameBottomBarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameBottomBarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameBottomBarReact;

  readonly leftButtons?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withLeftButtons(leftButtons: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameBottomBarReact;

  readonly leftButtonsVisibilityMap?: C3.Map<string | null, boolean>;
  withLeftButtonsVisibilityMap(leftButtonsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameBottomBarReact;

  readonly rightButtons?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withRightButtons(rightButtons: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameBottomBarReact;

  readonly rightButtonsVisibilityMap?: C3.Map<string | null, boolean>;
  withRightButtonsVisibilityMap(rightButtonsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameBottomBarReact;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameBottomBarReact;
}

