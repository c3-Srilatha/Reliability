export interface UiSdlMultipleSearchFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultipleSearchFilterReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultipleSearchFilterReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultipleSearchFilterReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlMultipleSearchFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultipleSearchFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultipleSearchFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultipleSearchFilterReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlMultipleSearchFilterReact;

  readonly value?: any;
  withValue(value: any): UiSdlMultipleSearchFilterReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlMultipleSearchFilterReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlMultipleSearchFilterReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlMultipleSearchFilterReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlMultipleSearchFilterReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlMultipleSearchFilterReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMultipleSearchFilterReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlMultipleSearchFilterReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlMultipleSearchFilterReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlMultipleSearchFilterReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlMultipleSearchFilterReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlMultipleSearchFilterReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlMultipleSearchFilterReact;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlMultipleSearchFilterReact;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlMultipleSearchFilterReact;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlMultipleSearchFilterReact;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlMultipleSearchFilterReact;
}

