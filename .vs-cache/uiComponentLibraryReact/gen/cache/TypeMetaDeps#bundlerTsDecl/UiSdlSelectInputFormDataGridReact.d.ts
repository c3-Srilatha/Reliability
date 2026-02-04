export interface UiSdlSelectInputFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInputFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInputFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInputFormDataGridReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInputFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInputFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInputFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInputFormDataGridReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInputFormDataGridReact;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInputFormDataGridReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInputFormDataGridReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInputFormDataGridReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInputFormDataGridReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInputFormDataGridReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInputFormDataGridReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInputFormDataGridReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInputFormDataGridReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInputFormDataGridReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInputFormDataGridReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInputFormDataGridReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInputFormDataGridReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInputFormDataGridReact;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInputFormDataGridReact;
}

