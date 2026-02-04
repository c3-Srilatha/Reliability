export interface UiSdlSearchInputFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchInputFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchInputFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchInputFormDataGrid;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSearchInputFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchInputFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchInputFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchInputFormDataGrid;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSearchInputFormDataGrid;

  readonly value?: any;
  withValue(value: any): UiSdlSearchInputFormDataGrid;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSearchInputFormDataGrid;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSearchInputFormDataGrid;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSearchInputFormDataGrid;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearchInputFormDataGrid;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSearchInputFormDataGrid;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSearchInputFormDataGrid;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSearchInputFormDataGrid;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSearchInputFormDataGrid;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSearchInputFormDataGrid;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSearchInputFormDataGrid;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSearchInputFormDataGrid;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSearchInputFormDataGrid;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSearchInputFormDataGrid;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSearchInputFormDataGrid;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSearchInputFormDataGrid;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSearchInputFormDataGrid;
}

