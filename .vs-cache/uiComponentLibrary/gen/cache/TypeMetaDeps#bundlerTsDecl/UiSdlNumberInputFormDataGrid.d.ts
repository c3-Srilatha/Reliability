export interface UiSdlNumberInputFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberInputFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberInputFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberInputFormDataGrid;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberInputFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberInputFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberInputFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberInputFormDataGrid;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberInputFormDataGrid;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberInputFormDataGrid;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberInputFormDataGrid;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberInputFormDataGrid;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberInputFormDataGrid;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberInputFormDataGrid;
}

