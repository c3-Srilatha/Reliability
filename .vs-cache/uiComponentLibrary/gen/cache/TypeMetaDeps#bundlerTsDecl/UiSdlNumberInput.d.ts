export interface UiSdlNumberInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberInput;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberInput;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberInput;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberInput;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberInput;
}

