export interface UiSdlSegmentedButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSegmentedButton;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSegmentedButton;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSegmentedButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSegmentedButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSegmentedButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSegmentedButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSegmentedButton;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSegmentedButton;

  readonly buttons?: C3.Array<UiSdlSegmentedButtonConfig | null>;
  withButtons(buttons: C3.Array<UiSdlSegmentedButtonConfig | null> | Array<IUiSdlSegmentedButtonConfig | null>): UiSdlSegmentedButton;

  readonly noDeselect?: boolean;
  withNoDeselect(noDeselect: boolean): UiSdlSegmentedButton;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlSegmentedButton;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSegmentedButton;

  readonly layout?: string | null;
  withLayout(layout: string | null): UiSdlSegmentedButton;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSegmentedButton;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlSegmentedButton;
}

