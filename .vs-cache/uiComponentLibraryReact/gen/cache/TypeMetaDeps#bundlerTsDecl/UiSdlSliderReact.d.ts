export interface UiSdlSliderReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSliderReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSliderReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSliderReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSliderReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSliderReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSliderReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSliderReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSliderReact;

  readonly hideInput?: boolean;
  withHideInput(hideInput: boolean): UiSdlSliderReact;

  readonly hideMarkers?: boolean;
  withHideMarkers(hideMarkers: boolean): UiSdlSliderReact;

  readonly hint?: string | null | UiSdlDynamicValueSpec | null | null;
  withHint(hint: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSliderReact;

  readonly labelSize?: string | null;
  withLabelSize(labelSize: string | null): UiSdlSliderReact;

  readonly markStep?: number | null;
  withMarkStep(markStep: number | null): UiSdlSliderReact;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlSliderReact;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlSliderReact;

  readonly maxMarkers?: number | null;
  withMaxMarkers(maxMarkers: number | null): UiSdlSliderReact;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlSliderReact;

  readonly value?: number | null;
  withValue(value: number | null): UiSdlSliderReact;
}

