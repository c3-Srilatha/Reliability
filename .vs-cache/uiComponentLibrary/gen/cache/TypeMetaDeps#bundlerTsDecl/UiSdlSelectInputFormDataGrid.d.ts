export interface UiSdlSelectInputFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInputFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInputFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInputFormDataGrid;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInputFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInputFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInputFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInputFormDataGrid;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInputFormDataGrid;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInputFormDataGrid;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInputFormDataGrid;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInputFormDataGrid;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInputFormDataGrid;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInputFormDataGrid;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInputFormDataGrid;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInputFormDataGrid;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInputFormDataGrid;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInputFormDataGrid;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInputFormDataGrid;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInputFormDataGrid;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInputFormDataGrid;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInputFormDataGrid;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInputFormDataGrid;
}

