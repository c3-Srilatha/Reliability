export interface UiSdlSelectInputFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInputFilter;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInputFilter;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInputFilter;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInputFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInputFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInputFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInputFilter;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInputFilter;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInputFilter;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInputFilter;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInputFilter;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInputFilter;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInputFilter;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInputFilter;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInputFilter;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInputFilter;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInputFilter;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInputFilter;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInputFilter;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInputFilter;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInputFilter;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInputFilter;
}

