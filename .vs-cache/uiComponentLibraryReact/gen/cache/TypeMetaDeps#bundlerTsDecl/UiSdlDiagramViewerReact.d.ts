export interface UiSdlDiagramViewerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramViewerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramViewerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramViewerReact;

  readonly dataSpec?: UiSdlDiagramViewerDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDiagramViewerDataSpec | null): UiSdlDiagramViewerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramViewerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramViewerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramViewerReact;

  readonly data?: Obj | null;
  withData(data: IObj | null): UiSdlDiagramViewerReact;

  readonly addOnDataSpec?: UiSdlDiagramViewerAddOnDataSpec | null;
  withAddOnDataSpec(addOnDataSpec: IUiSdlDiagramViewerAddOnDataSpec | null): UiSdlDiagramViewerReact;

  readonly startX?: number | null;
  withStartX(startX: number | null): UiSdlDiagramViewerReact;

  readonly extraErrorMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withExtraErrorMessage(extraErrorMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramViewerReact;

  readonly startY?: number | null;
  withStartY(startY: number | null): UiSdlDiagramViewerReact;

  readonly emphasizedAddonId?: string | null;
  withEmphasizedAddonId(emphasizedAddonId: string | null): UiSdlDiagramViewerReact;

  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlDiagramViewerReact;

  readonly width?: number | null | number | null | null;
  withWidth(width: number | null | number | null | null): UiSdlDiagramViewerReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramViewerReact;

  readonly tooltipInteraction?: string | null;
  withTooltipInteraction(tooltipInteraction: string | null): UiSdlDiagramViewerReact;

  readonly focusedAddOnId?: string | null | UiSdlDynamicValueSpec | null | null;
  withFocusedAddOnId(focusedAddOnId: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramViewerReact;

  readonly zoom: UiSdlDiagramViewerZoomConfig;
  withZoom(zoom: IUiSdlDiagramViewerZoomConfig): UiSdlDiagramViewerReact;

  readonly controllerPosition?: string | null;
  withControllerPosition(controllerPosition: string | null): UiSdlDiagramViewerReact;

  readonly legend?: boolean;
  withLegend(legend: boolean): UiSdlDiagramViewerReact;

  readonly legendStrategy?: string | null;
  withLegendStrategy(legendStrategy: string | null): UiSdlDiagramViewerReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlDiagramViewerReact;
}

