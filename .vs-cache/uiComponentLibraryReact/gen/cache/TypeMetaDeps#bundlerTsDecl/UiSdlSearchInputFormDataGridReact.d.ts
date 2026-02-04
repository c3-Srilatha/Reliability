export interface UiSdlSearchInputFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchInputFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchInputFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchInputFormDataGridReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSearchInputFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchInputFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchInputFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchInputFormDataGridReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSearchInputFormDataGridReact;

  readonly value?: any;
  withValue(value: any): UiSdlSearchInputFormDataGridReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSearchInputFormDataGridReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSearchInputFormDataGridReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSearchInputFormDataGridReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearchInputFormDataGridReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSearchInputFormDataGridReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSearchInputFormDataGridReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSearchInputFormDataGridReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSearchInputFormDataGridReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSearchInputFormDataGridReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSearchInputFormDataGridReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSearchInputFormDataGridReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSearchInputFormDataGridReact;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSearchInputFormDataGridReact;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSearchInputFormDataGridReact;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSearchInputFormDataGridReact;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSearchInputFormDataGridReact;
}

