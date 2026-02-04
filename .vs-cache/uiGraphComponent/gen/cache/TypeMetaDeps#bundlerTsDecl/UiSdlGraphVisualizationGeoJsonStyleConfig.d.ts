export interface UiSdlGraphVisualizationGeoJsonStyleConfig {

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineColorOnHover?: string | null;
  withOutlineColorOnHover(outlineColorOnHover: string | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineColorWhenSelected?: string | null;
  withOutlineColorWhenSelected(outlineColorWhenSelected: string | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineWeight?: number | null;
  withOutlineWeight(outlineWeight: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineWeightOnHover?: number | null;
  withOutlineWeightOnHover(outlineWeightOnHover: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineWeightWhenSelected?: number | null;
  withOutlineWeightWhenSelected(outlineWeightWhenSelected: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly outlineOpacity?: number | null;
  withOutlineOpacity(outlineOpacity: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly fillColorByProperty?: UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | UiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | UiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null;
  withFillColorByProperty(fillColorByProperty: IUiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly fillColorWhenSelected?: string | null;
  withFillColorWhenSelected(fillColorWhenSelected: string | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly fillOpacity?: number | null;
  withFillOpacity(fillOpacity: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly fillOpacityOnHover?: number | null;
  withFillOpacityOnHover(fillOpacityOnHover: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;

  readonly fillOpacityWhenSelected?: number | null;
  withFillOpacityWhenSelected(fillOpacityWhenSelected: number | null): UiSdlGraphVisualizationGeoJsonStyleConfig;
}

