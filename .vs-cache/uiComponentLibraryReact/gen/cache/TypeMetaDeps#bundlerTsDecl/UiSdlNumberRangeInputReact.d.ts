export interface UiSdlNumberRangeInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberRangeInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberRangeInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberRangeInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberRangeInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberRangeInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberRangeInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberRangeInputReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberRangeInputReact;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberRangeInputReact;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberRangeInputReact;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberRangeInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberRangeInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberRangeInputReact;

  readonly markStep?: number | null;
  withMarkStep(markStep: number | null): UiSdlNumberRangeInputReact;

  readonly maxLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withMaxLabel(maxLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNumberRangeInputReact;

  readonly minLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withMinLabel(minLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlNumberRangeInputReact;

  readonly hideInput?: boolean;
  withHideInput(hideInput: boolean): UiSdlNumberRangeInputReact;

  readonly hideSlider?: boolean;
  withHideSlider(hideSlider: boolean): UiSdlNumberRangeInputReact;
}

