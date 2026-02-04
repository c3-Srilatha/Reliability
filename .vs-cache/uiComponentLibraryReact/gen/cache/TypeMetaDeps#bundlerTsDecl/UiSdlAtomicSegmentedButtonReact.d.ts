export interface UiSdlAtomicSegmentedButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicSegmentedButtonReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAtomicSegmentedButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicSegmentedButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicSegmentedButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicSegmentedButtonReact;

  readonly buttons: C3.Array<UiSdlSegmentedButtonConfig | null>;
  withButtons(buttons: C3.Array<UiSdlSegmentedButtonConfig | null> | Array<IUiSdlSegmentedButtonConfig | null>): UiSdlAtomicSegmentedButtonReact;

  readonly mode?: string | null;
  withMode(mode: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly minOneSelected?: boolean;
  withMinOneSelected(minOneSelected: boolean): UiSdlAtomicSegmentedButtonReact;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly layout?: string | null;
  withLayout(layout: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly value?: C3.Array<string | null>;
  withValue(value: C3.Array<string | null> | Array<string | null>): UiSdlAtomicSegmentedButtonReact;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlAtomicSegmentedButtonReact;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlAtomicSegmentedButtonReact;
}

