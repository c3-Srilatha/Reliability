export interface UiSdlSingleSearchReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSingleSearchReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSingleSearchReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSingleSearchReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSingleSearchReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSingleSearchReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSingleSearchReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSingleSearchReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSingleSearchReact;

  readonly value?: any;
  withValue(value: any): UiSdlSingleSearchReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSingleSearchReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSingleSearchReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSingleSearchReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSingleSearchReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSingleSearchReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSingleSearchReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSingleSearchReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSingleSearchReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSingleSearchReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSingleSearchReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSingleSearchReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSingleSearchReact;

  readonly optionsLimit?: number | null;
  withOptionsLimit(optionsLimit: number | null): UiSdlSingleSearchReact;

  readonly searchOperator: string;
  withSearchOperator(searchOperator: string): UiSdlSingleSearchReact;

  readonly actionableOptionsConfig?: UiSdlSearchActionableOptionsConfig | null;
  withActionableOptionsConfig(actionableOptionsConfig: IUiSdlSearchActionableOptionsConfig | null): UiSdlSingleSearchReact;

  readonly serverSearch?: boolean;
  withServerSearch(serverSearch: boolean): UiSdlSingleSearchReact;
}

