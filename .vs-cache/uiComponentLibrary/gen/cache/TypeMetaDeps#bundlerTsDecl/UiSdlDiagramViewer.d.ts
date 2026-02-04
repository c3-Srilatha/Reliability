export interface UiSdlDiagramViewer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramViewer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramViewer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramViewer;

  readonly dataSpec?: UiSdlDiagramViewerDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDiagramViewerDataSpec | null): UiSdlDiagramViewer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramViewer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramViewer;

  readonly data?: Obj | null;
  withData(data: IObj | null): UiSdlDiagramViewer;

  readonly addOnDataSpec?: UiSdlDiagramViewerAddOnDataSpec | null;
  withAddOnDataSpec(addOnDataSpec: IUiSdlDiagramViewerAddOnDataSpec | null): UiSdlDiagramViewer;

  readonly startX?: number | null;
  withStartX(startX: number | null): UiSdlDiagramViewer;

  readonly extraErrorMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withExtraErrorMessage(extraErrorMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramViewer;

  readonly startY?: number | null;
  withStartY(startY: number | null): UiSdlDiagramViewer;

  readonly emphasizedAddonId?: string | null;
  withEmphasizedAddonId(emphasizedAddonId: string | null): UiSdlDiagramViewer;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewer;

  readonly width?: number | null | number | null | null;
  withWidth(width: number | null | number | null | null): UiSdlDiagramViewer;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramViewer;

  readonly tooltipInteraction?: string | null;
  withTooltipInteraction(tooltipInteraction: string | null): UiSdlDiagramViewer;

  readonly focusedAddOnId?: string | null | UiSdlDynamicValueSpec | null | null;
  withFocusedAddOnId(focusedAddOnId: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramViewer;

  readonly zoom: UiSdlDiagramViewerZoomConfig;
  withZoom(zoom: IUiSdlDiagramViewerZoomConfig): UiSdlDiagramViewer;

  readonly controllerPosition?: string | null;
  withControllerPosition(controllerPosition: string | null): UiSdlDiagramViewer;

  readonly legend?: boolean;
  withLegend(legend: boolean): UiSdlDiagramViewer;

  readonly legendStrategy?: string | null;
  withLegendStrategy(legendStrategy: string | null): UiSdlDiagramViewer;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlDiagramViewer;
}

