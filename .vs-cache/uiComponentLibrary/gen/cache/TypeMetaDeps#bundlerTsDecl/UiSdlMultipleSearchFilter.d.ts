export interface UiSdlMultipleSearchFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultipleSearchFilter;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultipleSearchFilter;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultipleSearchFilter;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlMultipleSearchFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultipleSearchFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultipleSearchFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultipleSearchFilter;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlMultipleSearchFilter;

  readonly value?: any;
  withValue(value: any): UiSdlMultipleSearchFilter;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlMultipleSearchFilter;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlMultipleSearchFilter;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlMultipleSearchFilter;

  readonly field?: string | null;
  withField(field: string | null): UiSdlMultipleSearchFilter;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlMultipleSearchFilter;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMultipleSearchFilter;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlMultipleSearchFilter;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlMultipleSearchFilter;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlMultipleSearchFilter;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlMultipleSearchFilter;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlMultipleSearchFilter;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlMultipleSearchFilter;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlMultipleSearchFilter;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlMultipleSearchFilter;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlMultipleSearchFilter;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlMultipleSearchFilter;
}

