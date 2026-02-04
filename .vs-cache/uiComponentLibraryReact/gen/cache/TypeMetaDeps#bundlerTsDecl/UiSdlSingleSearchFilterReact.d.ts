export interface UiSdlSingleSearchFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSingleSearchFilterReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSingleSearchFilterReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSingleSearchFilterReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSingleSearchFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSingleSearchFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSingleSearchFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSingleSearchFilterReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSingleSearchFilterReact;

  readonly value?: any;
  withValue(value: any): UiSdlSingleSearchFilterReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSingleSearchFilterReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSingleSearchFilterReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSingleSearchFilterReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSingleSearchFilterReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSingleSearchFilterReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSingleSearchFilterReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSingleSearchFilterReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSingleSearchFilterReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSingleSearchFilterReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSingleSearchFilterReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSingleSearchFilterReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSingleSearchFilterReact;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSingleSearchFilterReact;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSingleSearchFilterReact;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSingleSearchFilterReact;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSingleSearchFilterReact;
}

