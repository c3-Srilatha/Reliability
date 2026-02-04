export interface UiSdlSingleSearchFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSingleSearchFilter;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSingleSearchFilter;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSingleSearchFilter;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSingleSearchFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSingleSearchFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSingleSearchFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSingleSearchFilter;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSingleSearchFilter;

  readonly value?: any;
  withValue(value: any): UiSdlSingleSearchFilter;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSingleSearchFilter;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSingleSearchFilter;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSingleSearchFilter;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSingleSearchFilter;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSingleSearchFilter;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSingleSearchFilter;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSingleSearchFilter;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSingleSearchFilter;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSingleSearchFilter;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSingleSearchFilter;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSingleSearchFilter;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSingleSearchFilter;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSingleSearchFilter;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSingleSearchFilter;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSingleSearchFilter;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSingleSearchFilter;
}

