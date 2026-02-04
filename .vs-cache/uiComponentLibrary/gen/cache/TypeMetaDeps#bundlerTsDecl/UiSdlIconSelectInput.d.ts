export interface UiSdlIconSelectInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlIconSelectInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlIconSelectInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlIconSelectInput;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlIconSelectInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlIconSelectInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlIconSelectInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlIconSelectInput;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlIconSelectInput;

  readonly value?: any;
  withValue(value: any): UiSdlIconSelectInput;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlIconSelectInput;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlIconSelectInput;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlIconSelectInput;

  readonly field?: string | null;
  withField(field: string | null): UiSdlIconSelectInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlIconSelectInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlIconSelectInput;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlIconSelectInput;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlIconSelectInput;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlIconSelectInput;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlIconSelectInput;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlIconSelectInput;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlIconSelectInput;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlIconSelectInput;
}

