export interface UiSdlDefinitionListSubInfoFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlDefinitionListSubInfoFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlDefinitionListSubInfoFieldSetting;

  readonly formatSpec?: UiSdlDynamicValueSpec | null;
  withFormatSpec(formatSpec: IUiSdlDynamicValueSpec | null): UiSdlDefinitionListSubInfoFieldSetting;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDefinitionListSubInfoFieldSetting;
}

