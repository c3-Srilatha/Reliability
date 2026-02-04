export interface UiSdlTreeListIconFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTreeListIconFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlTreeListIconFieldSetting;

  readonly iconClassConfigurationStrategy?: UiSdlTreeListIconCategoricalSetting | null;
  withIconClassConfigurationStrategy(iconClassConfigurationStrategy: IUiSdlTreeListIconCategoricalSetting | null): UiSdlTreeListIconFieldSetting;
}

