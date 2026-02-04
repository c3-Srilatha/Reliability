export interface UiSdlSelectInputFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSelectInputFilterReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSelectInputFilterReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSelectInputFilterReact;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): UiSdlSelectInputFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSelectInputFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSelectInputFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSelectInputFilterReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlSelectInputFilterReact;

  readonly value?: any;
  withValue(value: any): UiSdlSelectInputFilterReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSelectInputFilterReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlSelectInputFilterReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlSelectInputFilterReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSelectInputFilterReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSelectInputFilterReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSelectInputFilterReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlSelectInputFilterReact;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectInputFilterReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSelectInputFilterReact;

  readonly search?: boolean;
  withSearch(search: boolean): UiSdlSelectInputFilterReact;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): UiSdlSelectInputFilterReact;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): UiSdlSelectInputFilterReact;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlSelectInputFilterReact;
}

