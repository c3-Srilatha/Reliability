export interface UiSdlSegmentedButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSegmentedButtonReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSegmentedButtonReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSegmentedButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSegmentedButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSegmentedButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSegmentedButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSegmentedButtonReact;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSegmentedButtonReact;

  readonly buttons?: C3.Array<UiSdlSegmentedButtonConfig | null>;
  withButtons(buttons: C3.Array<UiSdlSegmentedButtonConfig | null> | Array<IUiSdlSegmentedButtonConfig | null>): UiSdlSegmentedButtonReact;

  readonly noDeselect?: boolean;
  withNoDeselect(noDeselect: boolean): UiSdlSegmentedButtonReact;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlSegmentedButtonReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSegmentedButtonReact;

  readonly layout?: string | null;
  withLayout(layout: string | null): UiSdlSegmentedButtonReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSegmentedButtonReact;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlSegmentedButtonReact;
}

