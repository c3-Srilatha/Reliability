export interface UiSdlSelectInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInput;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInput;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInput;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInput;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInput;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInput;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInput;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInput;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInput;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInput;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInput;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInput;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInput;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInput;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInput;
}

