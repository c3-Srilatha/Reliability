export interface UiSdlContentFrameTopBarSegmentedReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameTopBarSegmentedReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameTopBarSegmentedReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameTopBarSegmentedReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly editableTitle?: boolean;
  withEditableTitle(editableTitle: boolean): UiSdlContentFrameTopBarSegmentedReact;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameTopBarSegmentedReact;

  readonly segments?: C3.Array<UiSdlContentFrameTopBarSegment | null>;
  withSegments(segments: C3.Array<UiSdlContentFrameTopBarSegment | null> | Array<IUiSdlContentFrameTopBarSegment | null>): UiSdlContentFrameTopBarSegmentedReact;
}

