export interface UiSdlSlider {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSlider;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSlider;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSlider;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSlider;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSlider;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSlider;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSlider;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSlider;

  readonly hideInput?: boolean;
  withHideInput(hideInput: boolean): UiSdlSlider;

  readonly hideMarkers?: boolean;
  withHideMarkers(hideMarkers: boolean): UiSdlSlider;

  readonly hint?: string | null | UiSdlDynamicValueSpec | null | null;
  withHint(hint: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSlider;

  readonly labelSize?: string | null;
  withLabelSize(labelSize: string | null): UiSdlSlider;

  readonly markStep?: number | null;
  withMarkStep(markStep: number | null): UiSdlSlider;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlSlider;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlSlider;

  readonly maxMarkers?: number | null;
  withMaxMarkers(maxMarkers: number | null): UiSdlSlider;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlSlider;

  readonly value?: number | null;
  withValue(value: number | null): UiSdlSlider;
}

