export interface UiSdlFieldSettingBase {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldSettingBase;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldSettingBase;

  readonly value?: any;
  withValue(value: any): UiSdlFieldSettingBase;

  readonly defaultValue?: any;
  withDefaultValue(defaultValue: any): UiSdlFieldSettingBase;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlFieldSettingBase;

  readonly dataPropSpecs?: C3.Array<UiSdlFormDataToPropSpec | null>;
  withDataPropSpecs(dataPropSpecs: C3.Array<UiSdlFormDataToPropSpec | null> | Array<IUiSdlFormDataToPropSpec | null>): UiSdlFieldSettingBase;
}

