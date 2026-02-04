export interface UiSdlDropdownBase {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDropdownBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDropdownBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDropdownBase;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlDropdownBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDropdownBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDropdownBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDropdownBase;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlDropdownBase;

  readonly value?: any;
  withValue(value: any): UiSdlDropdownBase;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlDropdownBase;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlDropdownBase;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlDropdownBase;

  readonly field?: string | null;
  withField(field: string | null): UiSdlDropdownBase;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlDropdownBase;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDropdownBase;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlDropdownBase;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlDropdownBase;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlDropdownBase;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlDropdownBase;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlDropdownBase;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlDropdownBase;
}

