export interface UiSdlIconSelectInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlIconSelectInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlIconSelectInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlIconSelectInputReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlIconSelectInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlIconSelectInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlIconSelectInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlIconSelectInputReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlIconSelectInputReact;

  readonly value?: any;
  withValue(value: any): UiSdlIconSelectInputReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlIconSelectInputReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlIconSelectInputReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlIconSelectInputReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlIconSelectInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlIconSelectInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlIconSelectInputReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlIconSelectInputReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlIconSelectInputReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlIconSelectInputReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlIconSelectInputReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlIconSelectInputReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlIconSelectInputReact;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlIconSelectInputReact;
}

