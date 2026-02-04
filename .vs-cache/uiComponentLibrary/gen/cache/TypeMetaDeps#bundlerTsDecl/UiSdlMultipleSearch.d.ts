export interface UiSdlMultipleSearch {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultipleSearch;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultipleSearch;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultipleSearch;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlMultipleSearch;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultipleSearch;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultipleSearch;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultipleSearch;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlMultipleSearch;

  readonly value?: any;
  withValue(value: any): UiSdlMultipleSearch;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlMultipleSearch;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlMultipleSearch;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlMultipleSearch;

  readonly field?: string | null;
  withField(field: string | null): UiSdlMultipleSearch;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlMultipleSearch;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMultipleSearch;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlMultipleSearch;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlMultipleSearch;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlMultipleSearch;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlMultipleSearch;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlMultipleSearch;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlMultipleSearch;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlMultipleSearch;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlMultipleSearch;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlMultipleSearch;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlMultipleSearch;
}

