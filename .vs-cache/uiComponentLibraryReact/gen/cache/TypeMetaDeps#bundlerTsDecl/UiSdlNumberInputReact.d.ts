export interface UiSdlNumberInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberInputReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberInputReact;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberInputReact;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberInputReact;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberInputReact;
}

