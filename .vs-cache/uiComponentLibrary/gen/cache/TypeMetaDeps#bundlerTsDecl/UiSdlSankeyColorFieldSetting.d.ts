export interface UiSdlSankeyColorFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlSankeyColorFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlSankeyColorFieldSetting;

  readonly colorConfigurationStrategy?: UiSdlSankeyCustomColorSetting | null;
  withColorConfigurationStrategy(colorConfigurationStrategy: IUiSdlSankeyCustomColorSetting | null): UiSdlSankeyColorFieldSetting;
}

