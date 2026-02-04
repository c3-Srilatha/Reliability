export interface UiSdlGraphVisualizationNodeSegmentDonutConfig {

  readonly donutType?: string | null;
  withDonutType(donutType: string | null): UiSdlGraphVisualizationNodeSegmentDonutConfig;

  readonly segments?: C3.Array<UiSdlColorableFieldBasedDataSpecSetting | null>;
  withSegments(segments: C3.Array<UiSdlColorableFieldBasedDataSpecSetting | null> | Array<IUiSdlColorableFieldBasedDataSpecSetting | null>): UiSdlGraphVisualizationNodeSegmentDonutConfig;

  readonly width: string;
  withWidth(width: string): UiSdlGraphVisualizationNodeSegmentDonutConfig;
}

