export interface UiSdlDiagramLegendEdgeItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlDiagramLegendEdgeItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendEdgeItem;
}

