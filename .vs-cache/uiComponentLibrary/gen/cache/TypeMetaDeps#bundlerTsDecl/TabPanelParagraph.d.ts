export interface TabPanelParagraph {

  readonly label?: string | null;
  withLabel(label: string | null): TabPanelParagraph;

  readonly text?: string | null | UiSdlTabPanelDataSpecTextSetting | null | null;
  withText(text: string | null | IUiSdlTabPanelDataSpecTextSetting | null | null): TabPanelParagraph;
}

