export interface UiSdlDiagramViewerTooltip {

  readonly header?: UiSdlDiagramViewerTooltipHeader | null;
  withHeader(header: IUiSdlDiagramViewerTooltipHeader | null): UiSdlDiagramViewerTooltip;

  readonly fields?: C3.Array<UiSdlDiagramViewerTooltipField | null>;
  withFields(fields: C3.Array<UiSdlDiagramViewerTooltipField | null> | Array<IUiSdlDiagramViewerTooltipField | null>): UiSdlDiagramViewerTooltip;
}

