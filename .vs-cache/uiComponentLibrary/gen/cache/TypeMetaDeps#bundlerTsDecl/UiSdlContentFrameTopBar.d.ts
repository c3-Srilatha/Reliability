export interface UiSdlContentFrameTopBar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameTopBar;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameTopBar;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameTopBar;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameTopBar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameTopBar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameTopBar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameTopBar;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBar;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlContentFrameTopBar;

  readonly editableTitle?: boolean;
  withEditableTitle(editableTitle: boolean): UiSdlContentFrameTopBar;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameTopBar;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlContentFrameTopBar;

  readonly actions?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withActions(actions: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameTopBar;

  readonly actionsVisibilityMap?: C3.Map<string | null, boolean>;
  withActionsVisibilityMap(actionsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameTopBar;

  readonly inputs?: C3.Array<UiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null>;
  withInputs(inputs: C3.Array<UiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null> | Array<IUiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null>): UiSdlContentFrameTopBar;

  readonly inputsVisibilityMap?: C3.Map<string | null, boolean>;
  withInputsVisibilityMap(inputsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameTopBar;
}

