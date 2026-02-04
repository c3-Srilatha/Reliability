export interface UiSdlSearchableDropdownBase {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchableDropdownBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchableDropdownBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchableDropdownBase;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSearchableDropdownBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchableDropdownBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchableDropdownBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchableDropdownBase;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSearchableDropdownBase;

  readonly value?: any;
  withValue(value: any): UiSdlSearchableDropdownBase;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSearchableDropdownBase;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSearchableDropdownBase;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSearchableDropdownBase;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearchableDropdownBase;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSearchableDropdownBase;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSearchableDropdownBase;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSearchableDropdownBase;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSearchableDropdownBase;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSearchableDropdownBase;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSearchableDropdownBase;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSearchableDropdownBase;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSearchableDropdownBase;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSearchableDropdownBase;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSearchableDropdownBase;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSearchableDropdownBase;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSearchableDropdownBase;
}

