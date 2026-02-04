export interface UiSdlLineBarChartDataSpec {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlLineBarChartDataSpec;
}

