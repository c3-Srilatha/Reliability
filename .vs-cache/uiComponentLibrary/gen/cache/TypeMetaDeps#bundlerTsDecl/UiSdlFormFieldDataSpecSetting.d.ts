export interface UiSdlFormFieldDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFormFieldDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFormFieldDataSpecSetting;

  readonly componentType: string;
  withComponentType(componentType: string): UiSdlFormFieldDataSpecSetting;

  readonly label: string | null | UiSdlDynamicValueSpec | null;
  withLabel(label: string | null | IUiSdlDynamicValueSpec | null): UiSdlFormFieldDataSpecSetting;

  readonly hintText?: string | null | UiSdlDynamicValueSpec | null | null;
  withHintText(hintText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormFieldDataSpecSetting;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlFormFieldDataSpecSetting;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlFormFieldDataSpecSetting;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormFieldDataSpecSetting;

  readonly dataSpec?: UiSdlFormFieldDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormFieldDataSpec | null): UiSdlFormFieldDataSpecSetting;

  readonly fieldCollection?: any;
  withFieldCollection(fieldCollection: any): UiSdlFormFieldDataSpecSetting;

  readonly dataPropSpecs?: C3.Array<UiSdlFormDataToPropSpec | null>;
  withDataPropSpecs(dataPropSpecs: C3.Array<UiSdlFormDataToPropSpec | null> | Array<IUiSdlFormDataToPropSpec | null>): UiSdlFormFieldDataSpecSetting;

  readonly value?: any;
  withValue(value: any): UiSdlFormFieldDataSpecSetting;

  readonly defaultValue?: any;
  withDefaultValue(defaultValue: any): UiSdlFormFieldDataSpecSetting;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlFormFieldDataSpecSetting;

  readonly componentRef?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withComponentRef(componentRef: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlFormFieldDataSpecSetting;

  readonly fieldRefComponents?: C3.Map<string | null, any>;
  withFieldRefComponents(fieldRefComponents: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormFieldDataSpecSetting;
}

