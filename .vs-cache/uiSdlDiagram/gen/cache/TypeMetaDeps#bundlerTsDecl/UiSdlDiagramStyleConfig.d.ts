export interface UiSdlDiagramStyleConfig {

  readonly edgeShowEndArrow?: boolean;
  withEdgeShowEndArrow(edgeShowEndArrow: boolean): UiSdlDiagramStyleConfig;

  readonly edgeStrokeWidth?: number | null;
  withEdgeStrokeWidth(edgeStrokeWidth: number | null): UiSdlDiagramStyleConfig;

  readonly edgeConnectorConfigRequired?: boolean;
  withEdgeConnectorConfigRequired(edgeConnectorConfigRequired: boolean): UiSdlDiagramStyleConfig;

  readonly showTooltipForPorts?: boolean;
  withShowTooltipForPorts(showTooltipForPorts: boolean): UiSdlDiagramStyleConfig;

  readonly showTooltipForEdges?: boolean;
  withShowTooltipForEdges(showTooltipForEdges: boolean): UiSdlDiagramStyleConfig;
}

