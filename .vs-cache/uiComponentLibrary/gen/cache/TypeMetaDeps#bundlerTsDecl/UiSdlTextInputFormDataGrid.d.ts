export interface UiSdlTextInputFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextInputFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextInputFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextInputFormDataGrid;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextInputFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextInputFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextInputFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextInputFormDataGrid;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlTextInputFormDataGrid;

  readonly value?: any;
  withValue(value: any): UiSdlTextInputFormDataGrid;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlTextInputFormDataGrid;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextInputFormDataGrid;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextInputFormDataGrid;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextInputFormDataGrid;

  readonly appendedTag?: string | null;
  withAppendedTag(appendedTag: string | null): UiSdlTextInputFormDataGrid;

  readonly confirmable?: boolean;
  withConfirmable(confirmable: boolean): UiSdlTextInputFormDataGrid;
}

