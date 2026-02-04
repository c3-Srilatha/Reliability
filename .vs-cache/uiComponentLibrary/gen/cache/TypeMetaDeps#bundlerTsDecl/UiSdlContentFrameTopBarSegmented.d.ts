export interface UiSdlContentFrameTopBarSegmented {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContentFrameTopBarSegmented;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContentFrameTopBarSegmented;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContentFrameTopBarSegmented;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContentFrameTopBarSegmented;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContentFrameTopBarSegmented;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContentFrameTopBarSegmented;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContentFrameTopBarSegmented;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBarSegmented;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlContentFrameTopBarSegmented;

  readonly editableTitle?: boolean;
  withEditableTitle(editableTitle: boolean): UiSdlContentFrameTopBarSegmented;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameTopBarSegmented;

  readonly segments?: C3.Array<UiSdlContentFrameTopBarSegment | null>;
  withSegments(segments: C3.Array<UiSdlContentFrameTopBarSegment | null> | Array<IUiSdlContentFrameTopBarSegment | null>): UiSdlContentFrameTopBarSegmented;
}

