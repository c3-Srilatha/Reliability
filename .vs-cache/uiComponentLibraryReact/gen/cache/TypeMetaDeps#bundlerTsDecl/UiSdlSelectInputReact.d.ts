export interface UiSdlSelectInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInputReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInputReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInputReact;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInputReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInputReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInputReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInputReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInputReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInputReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInputReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInputReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInputReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInputReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInputReact;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInputReact;
}

