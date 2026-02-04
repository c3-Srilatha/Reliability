export interface UiSdlGraphVisualizationFillColorByPropertyStrategyGradient {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fillColorSteps?: number | null;
  withFillColorSteps(fillColorSteps: number | null): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fillColorGradientMin?: number | null;
  withFillColorGradientMin(fillColorGradientMin: number | null): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fillColorGradientMax?: number | null;
  withFillColorGradientMax(fillColorGradientMax: number | null): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fillColorGradientMinColor: string;
  withFillColorGradientMinColor(fillColorGradientMinColor: string): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;

  readonly fillColorGradientMaxColor: string;
  withFillColorGradientMaxColor(fillColorGradientMaxColor: string): UiSdlGraphVisualizationFillColorByPropertyStrategyGradient;
}

