export interface NodeDiagramLegendItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): NodeDiagramLegendItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): NodeDiagramLegendItem;
}

