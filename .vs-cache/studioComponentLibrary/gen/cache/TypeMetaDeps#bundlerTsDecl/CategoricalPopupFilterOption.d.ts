export interface CategoricalPopupFilterOption {

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): CategoricalPopupFilterOption;

  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): CategoricalPopupFilterOption;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): CategoricalPopupFilterOption;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CategoricalPopupFilterOption;

  readonly id?: string | null;
  withId(id: string | null): CategoricalPopupFilterOption;

  readonly name?: string | null;
  withName(name: string | null): CategoricalPopupFilterOption;

  readonly dataSpec?: UiSdlDropdownBaseDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDropdownBaseDataSpec | null): CategoricalPopupFilterOption;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CategoricalPopupFilterOption;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CategoricalPopupFilterOption;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CategoricalPopupFilterOption;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): CategoricalPopupFilterOption;

  readonly value?: any;
  withValue(value: any): CategoricalPopupFilterOption;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): CategoricalPopupFilterOption;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): CategoricalPopupFilterOption;

  readonly clear?: boolean;
  withClear(clear: boolean): CategoricalPopupFilterOption;

  readonly field?: string | null;
  withField(field: string | null): CategoricalPopupFilterOption;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): CategoricalPopupFilterOption;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): CategoricalPopupFilterOption;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): CategoricalPopupFilterOption;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): CategoricalPopupFilterOption;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): CategoricalPopupFilterOption;

  readonly search?: boolean;
  withSearch(search: boolean): CategoricalPopupFilterOption;

  readonly multiple?: boolean;
  withMultiple(multiple: boolean): CategoricalPopupFilterOption;

  readonly showMultipleSearchIcon?: boolean;
  withShowMultipleSearchIcon(showMultipleSearchIcon: boolean): CategoricalPopupFilterOption;

  readonly required?: boolean;
  withRequired(required: boolean): CategoricalPopupFilterOption;
}

