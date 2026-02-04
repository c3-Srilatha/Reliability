export interface UiSdlNumberInputFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberInputFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberInputFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberInputFormDataGridReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberInputFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberInputFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberInputFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberInputFormDataGridReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlNumberInputFormDataGridReact;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberInputFormDataGridReact;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberInputFormDataGridReact;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberInputFormDataGridReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlNumberInputFormDataGridReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlNumberInputFormDataGridReact;
}

