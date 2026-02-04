export interface UiSdlTextInputFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextInputFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextInputFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextInputFormDataGridReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextInputFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextInputFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextInputFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextInputFormDataGridReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlTextInputFormDataGridReact;

  readonly value?: any;
  withValue(value: any): UiSdlTextInputFormDataGridReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlTextInputFormDataGridReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextInputFormDataGridReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextInputFormDataGridReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextInputFormDataGridReact;

  readonly appendedTag?: string | null;
  withAppendedTag(appendedTag: string | null): UiSdlTextInputFormDataGridReact;

  readonly confirmable?: boolean;
  withConfirmable(confirmable: boolean): UiSdlTextInputFormDataGridReact;
}

