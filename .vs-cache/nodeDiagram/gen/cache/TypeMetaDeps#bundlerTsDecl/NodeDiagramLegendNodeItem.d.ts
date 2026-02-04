export interface NodeDiagramLegendNodeItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): NodeDiagramLegendNodeItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): NodeDiagramLegendNodeItem;

  readonly color?: string | null;
  withColor(color: string | null): NodeDiagramLegendNodeItem;
}

