export interface UiSdlMapMarkerColorFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMapMarkerColorFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlMapMarkerColorFieldSetting;

  readonly colorConfigurationStrategy?: UiSdlMapMarkerConditionalColorSetting | null | UiSdlMapMarkerCategoricalColorSetting | null | UiSdlMapMarkerGradientColorSetting | null | null;
  withColorConfigurationStrategy(colorConfigurationStrategy: IUiSdlMapMarkerConditionalColorSetting | null | IUiSdlMapMarkerCategoricalColorSetting | null | IUiSdlMapMarkerGradientColorSetting | null | null): UiSdlMapMarkerColorFieldSetting;
}

