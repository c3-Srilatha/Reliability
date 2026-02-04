export interface UiSdlDiagramLegendNodeItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlDiagramLegendNodeItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendNodeItem;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlDiagramLegendNodeItem;
}

