export interface UiSdlSingleSearch {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSingleSearch;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSingleSearch;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSingleSearch;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSingleSearch;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSingleSearch;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSingleSearch;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSingleSearch;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSingleSearch;

  readonly value?: any;
  withValue(value: any): UiSdlSingleSearch;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSingleSearch;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSingleSearch;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSingleSearch;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSingleSearch;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSingleSearch;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSingleSearch;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSingleSearch;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSingleSearch;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSingleSearch;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSingleSearch;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSingleSearch;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSingleSearch;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSingleSearch;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSingleSearch;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSingleSearch;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSingleSearch;
}

