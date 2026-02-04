export interface ResidualAlertFilterPanelSpec {

  readonly NON_OPERATIONAL_MASK_NAME?: string | null;
  withNON_OPERATIONAL_MASK_NAME(NON_OPERATIONAL_MASK_NAME: string | null): ResidualAlertFilterPanelSpec;

  readonly start: string;
  withStart(start: string): ResidualAlertFilterPanelSpec;

  readonly end: string;
  withEnd(end: string): ResidualAlertFilterPanelSpec;

  readonly interval: string;
  withInterval(interval: string): ResidualAlertFilterPanelSpec;

  readonly showAlerts?: boolean;
  withShowAlerts(showAlerts: boolean): ResidualAlertFilterPanelSpec;

  readonly showUnplannedEvents?: boolean;
  withShowUnplannedEvents(showUnplannedEvents: boolean): ResidualAlertFilterPanelSpec;

  readonly showWorkOrders?: boolean;
  withShowWorkOrders(showWorkOrders: boolean): ResidualAlertFilterPanelSpec;

  readonly showTrainingPeriod?: boolean;
  withShowTrainingPeriod(showTrainingPeriod: boolean): ResidualAlertFilterPanelSpec;

  readonly features?: C3.Array<string | null>;
  withFeatures(features: C3.Array<string | null> | Array<string | null>): ResidualAlertFilterPanelSpec;

  readonly showFeatureContributionsToRiskScore?: boolean;
  withShowFeatureContributionsToRiskScore(showFeatureContributionsToRiskScore: boolean): ResidualAlertFilterPanelSpec;

  readonly showFeatureReconstruction?: boolean;
  withShowFeatureReconstruction(showFeatureReconstruction: boolean): ResidualAlertFilterPanelSpec;

  readonly displaySensorTrainingBounds?: boolean;
  withDisplaySensorTrainingBounds(displaySensorTrainingBounds: boolean): ResidualAlertFilterPanelSpec;

  readonly sensors?: C3.Array<string | null>;
  withSensors(sensors: C3.Array<string | null> | Array<string | null>): ResidualAlertFilterPanelSpec;

  readonly reliabilityMetricIds?: C3.Array<string | null>;
  withReliabilityMetricIds(reliabilityMetricIds: C3.Array<string | null> | Array<string | null>): ResidualAlertFilterPanelSpec;

  readonly alertId: string;
  withAlertId(alertId: string): ResidualAlertFilterPanelSpec;

  readonly showNonOperationalPeriods?: boolean;
  withShowNonOperationalPeriods(showNonOperationalPeriods: boolean): ResidualAlertFilterPanelSpec;
}

