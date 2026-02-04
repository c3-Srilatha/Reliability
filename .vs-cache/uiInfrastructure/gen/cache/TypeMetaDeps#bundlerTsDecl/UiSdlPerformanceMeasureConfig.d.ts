export interface UiSdlPerformanceMeasureConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlPerformanceMeasureConfig;

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): UiSdlPerformanceMeasureConfig;
}

