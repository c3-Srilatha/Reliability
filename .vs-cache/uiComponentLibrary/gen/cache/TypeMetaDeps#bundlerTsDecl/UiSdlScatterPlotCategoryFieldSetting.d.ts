export interface UiSdlScatterPlotCategoryFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlScatterPlotCategoryFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlScatterPlotCategoryFieldSetting;

  readonly colorConfigurationStrategy?: C3.Array<UiSdlScatterPlotConditionalColorSetting | null> | C3.Array<UiSdlScatterPlotCategoryColorSetting | null> | null;
  withColorConfigurationStrategy(colorConfigurationStrategy: C3.Array<UiSdlScatterPlotConditionalColorSetting | null> | Array<IUiSdlScatterPlotConditionalColorSetting | null> | C3.Array<UiSdlScatterPlotCategoryColorSetting | null> | Array<IUiSdlScatterPlotCategoryColorSetting | null> | null): UiSdlScatterPlotCategoryFieldSetting;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlScatterPlotCategoryFieldSetting;
}

