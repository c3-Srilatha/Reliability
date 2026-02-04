export interface UiSdlAtomicSegmentedButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicSegmentedButton;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicSegmentedButton;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicSegmentedButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAtomicSegmentedButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicSegmentedButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicSegmentedButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicSegmentedButton;

  readonly buttons: C3.Array<UiSdlSegmentedButtonConfig | null>;
  withButtons(buttons: C3.Array<UiSdlSegmentedButtonConfig | null> | Array<IUiSdlSegmentedButtonConfig | null>): UiSdlAtomicSegmentedButton;

  readonly mode?: string | null;
  withMode(mode: string | null): UiSdlAtomicSegmentedButton;

  readonly minOneSelected?: boolean;
  withMinOneSelected(minOneSelected: boolean): UiSdlAtomicSegmentedButton;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlAtomicSegmentedButton;

  readonly layout?: string | null;
  withLayout(layout: string | null): UiSdlAtomicSegmentedButton;

  readonly value?: C3.Array<string | null>;
  withValue(value: C3.Array<string | null> | Array<string | null>): UiSdlAtomicSegmentedButton;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlAtomicSegmentedButton;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlAtomicSegmentedButton;
}

