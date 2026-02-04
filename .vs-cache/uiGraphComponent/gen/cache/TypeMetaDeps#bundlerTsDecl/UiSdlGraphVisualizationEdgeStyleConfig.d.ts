export interface UiSdlGraphVisualizationEdgeStyleConfig {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly fillColor?: string | null;
  withFillColor(fillColor: string | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly directionConfig?: UiSdlGraphVisualizationEdgeDirectionConfig | null;
  withDirectionConfig(directionConfig: IUiSdlGraphVisualizationEdgeDirectionConfig | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly sizeByProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withSizeByProperty(sizeByProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly isDotted?: UiSdlFieldBasedDataSpecSetting | null;
  withIsDotted(isDotted: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly labelText?: UiSdlFieldBasedDataSpecSetting | null;
  withLabelText(labelText: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly fromNodeEndLabelText?: UiSdlFieldBasedDataSpecSetting | null;
  withFromNodeEndLabelText(fromNodeEndLabelText: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly toNodeEndLabelText?: UiSdlFieldBasedDataSpecSetting | null;
  withToNodeEndLabelText(toNodeEndLabelText: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly fillColorByProperty?: UiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | UiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | UiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null;
  withFillColorByProperty(fillColorByProperty: IUiSdlGraphVisualizationFillColorByPropertyStrategyCategorical | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyStepped | null | IUiSdlGraphVisualizationFillColorByPropertyStrategyGradient | null | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly fillColorOnHover?: string | null;
  withFillColorOnHover(fillColorOnHover: string | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly widthOnHover?: string | null;
  withWidthOnHover(widthOnHover: string | null): UiSdlGraphVisualizationEdgeStyleConfig;

  readonly flowConfig?: UiSdlGraphVisualizationEdgeFlowConfig | null;
  withFlowConfig(flowConfig: IUiSdlGraphVisualizationEdgeFlowConfig | null): UiSdlGraphVisualizationEdgeStyleConfig;
}

