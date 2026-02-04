export interface UiSdlMultipleSearchReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultipleSearchReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultipleSearchReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultipleSearchReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlMultipleSearchReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultipleSearchReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultipleSearchReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultipleSearchReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlMultipleSearchReact;

  readonly value?: any;
  withValue(value: any): UiSdlMultipleSearchReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlMultipleSearchReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlMultipleSearchReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlMultipleSearchReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlMultipleSearchReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlMultipleSearchReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMultipleSearchReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlMultipleSearchReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlMultipleSearchReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlMultipleSearchReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlMultipleSearchReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlMultipleSearchReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlMultipleSearchReact;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlMultipleSearchReact;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlMultipleSearchReact;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlMultipleSearchReact;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlMultipleSearchReact;
}

