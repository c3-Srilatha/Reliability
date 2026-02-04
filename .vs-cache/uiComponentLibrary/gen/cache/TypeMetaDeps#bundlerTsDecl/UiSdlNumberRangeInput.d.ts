export interface UiSdlNumberRangeInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberRangeInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberRangeInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberRangeInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberRangeInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberRangeInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberRangeInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberRangeInput;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberRangeInput;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberRangeInput;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberRangeInput;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberRangeInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberRangeInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberRangeInput;

  readonly markStep?: number | null;
  withMarkStep(markStep: number | null): UiSdlNumberRangeInput;

  readonly maxLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withMaxLabel(maxLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNumberRangeInput;

  readonly minLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withMinLabel(minLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNumberRangeInput;

  readonly hideInput?: boolean;
  withHideInput(hideInput: boolean): UiSdlNumberRangeInput;

  readonly hideSlider?: boolean;
  withHideSlider(hideSlider: boolean): UiSdlNumberRangeInput;
}

