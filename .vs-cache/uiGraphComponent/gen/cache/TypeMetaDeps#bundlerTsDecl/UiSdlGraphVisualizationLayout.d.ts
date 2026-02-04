export interface UiSdlGraphVisualizationLayout {

  readonly level?: UiSdlFieldBasedDataSpecSetting | null;
  withLevel(level: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationLayout;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationLayout;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlGraphVisualizationLayout;

  readonly packing?: string | null;
  withPacking(packing: string | null): UiSdlGraphVisualizationLayout;

  readonly stretch?: number | null;
  withStretch(stretch: number | null): UiSdlGraphVisualizationLayout;

  readonly tightness?: number | null;
  withTightness(tightness: number | null): UiSdlGraphVisualizationLayout;

  readonly curvedLinks?: boolean;
  withCurvedLinks(curvedLinks: boolean): UiSdlGraphVisualizationLayout;

  readonly stacking?: UiSdlGraphVisualizationLayoutStackingConfig | null;
  withStacking(stacking: IUiSdlGraphVisualizationLayoutStackingConfig | null): UiSdlGraphVisualizationLayout;
}

