export interface UiSdlContentFrameTopBarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameTopBarReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameTopBarReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameTopBarReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameTopBarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameTopBarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameTopBarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameTopBarReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBarReact;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlContentFrameTopBarReact;

  readonly editableTitle?: boolean;
  withEditableTitle(editableTitle: boolean): UiSdlContentFrameTopBarReact;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameTopBarReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlContentFrameTopBarReact;

  readonly actions?: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null>;
  withActions(actions: C3.Array<UiSdlComponentRef<UiSdlAtomicButton | null> | null> | Array<IUiSdlComponentRef<UiSdlAtomicButton | null> | null>): UiSdlContentFrameTopBarReact;

  readonly actionsVisibilityMap?: C3.Map<string | null, boolean>;
  withActionsVisibilityMap(actionsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameTopBarReact;

  readonly inputs?: C3.Array<UiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null>;
  withInputs(inputs: C3.Array<UiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null> | Array<IUiSdlComponentRef<UiSdlTextField | null | UiSdlAtomicSegmentedButton | null | UiSdlSingleSearch | null | UiSdlMultipleSearch | null | null> | null>): UiSdlContentFrameTopBarReact;

  readonly inputsVisibilityMap?: C3.Map<string | null, boolean>;
  withInputsVisibilityMap(inputsVisibilityMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlContentFrameTopBarReact;
}

