export interface AnalysisPageFilterPanelSpec {

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): AnalysisPageFilterPanelSpec;

  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): AnalysisPageFilterPanelSpec;

  readonly interval: string;
  withInterval(interval: string): AnalysisPageFilterPanelSpec;

  readonly project?: string | null;
  withProject(project: string | null): AnalysisPageFilterPanelSpec;

  readonly assets?: C3.Array<string | null>;
  withAssets(assets: C3.Array<string | null> | Array<string | null>): AnalysisPageFilterPanelSpec;

  readonly modelOutputs?: C3.Array<string | null>;
  withModelOutputs(modelOutputs: C3.Array<string | null> | Array<string | null>): AnalysisPageFilterPanelSpec;

  readonly showAlerts?: boolean;
  withShowAlerts(showAlerts: boolean): AnalysisPageFilterPanelSpec;

  readonly showUnplannedEvents?: boolean;
  withShowUnplannedEvents(showUnplannedEvents: boolean): AnalysisPageFilterPanelSpec;

  readonly showWorkOrders?: boolean;
  withShowWorkOrders(showWorkOrders: boolean): AnalysisPageFilterPanelSpec;

  readonly showFeatureContributions?: boolean;
  withShowFeatureContributions(showFeatureContributions: boolean): AnalysisPageFilterPanelSpec;

  readonly assetToFeatures?: C3.Map<string | null, C3.Array<string | null>>;
  withAssetToFeatures(assetToFeatures: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): AnalysisPageFilterPanelSpec;

  readonly featureSpecificOutputs?: C3.Array<string | null>;
  withFeatureSpecificOutputs(featureSpecificOutputs: C3.Array<string | null> | Array<string | null>): AnalysisPageFilterPanelSpec;

  readonly sensors?: C3.Array<string | null>;
  withSensors(sensors: C3.Array<string | null> | Array<string | null>): AnalysisPageFilterPanelSpec;

  readonly metrics?: C3.Array<string | null>;
  withMetrics(metrics: C3.Array<string | null> | Array<string | null>): AnalysisPageFilterPanelSpec;
}

