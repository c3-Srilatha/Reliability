export interface UiSdlDiagramLegendItem {

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlDiagramLegendItem;

  readonly text?: string | null | UiSdlDynamicValueSpec | null | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendItem;
}

