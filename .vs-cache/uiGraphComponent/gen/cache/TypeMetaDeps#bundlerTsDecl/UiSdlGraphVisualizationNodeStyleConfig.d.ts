export interface UiSdlGraphVisualizationNodeStyleConfig {

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly fillColor?: string | null;
  withFillColor(fillColor: string | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly fillColorByProperty?: UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | UiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | UiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null;
  withFillColorByProperty(fillColorByProperty: IUiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly outlineColor?: string | null;
  withOutlineColor(outlineColor: string | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly haloColorOnHover?: string | null;
  withHaloColorOnHover(haloColorOnHover: string | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly outlineStyle?: string | null;
  withOutlineStyle(outlineStyle: string | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly outlineDashedProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withOutlineDashedProperty(outlineDashedProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly labelStyle?: UiSdlGraphVisualizationNodeLabelStyleConfig | null;
  withLabelStyle(labelStyle: IUiSdlGraphVisualizationNodeLabelStyleConfig | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationNodeStyleConfig;

  readonly sizeByProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withSizeByProperty(sizeByProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodeStyleConfig;
}

