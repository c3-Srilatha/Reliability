export interface UiSdlDiagramViewerTooltipField {

  readonly label?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withLabel(label: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerTooltipField;

  readonly value?: string | null | UiSdlDynamicValueSpec | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withValue(value: string | null | IUiSdlDynamicValueSpec | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDiagramViewerTooltipField;
}

