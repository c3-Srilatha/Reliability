export interface NodeDiagramLegendEdgeItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): NodeDiagramLegendEdgeItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): NodeDiagramLegendEdgeItem;
}

