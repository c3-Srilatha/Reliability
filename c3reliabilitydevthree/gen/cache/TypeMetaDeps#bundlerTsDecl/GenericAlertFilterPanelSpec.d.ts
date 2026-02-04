export interface GenericAlertFilterPanelSpec {

  readonly start: string;
  withStart(start: string): GenericAlertFilterPanelSpec;

  readonly end: string;
  withEnd(end: string): GenericAlertFilterPanelSpec;

  readonly interval: string;
  withInterval(interval: string): GenericAlertFilterPanelSpec;

  readonly showAlerts?: boolean;
  withShowAlerts(showAlerts: boolean): GenericAlertFilterPanelSpec;

  readonly showUnplannedEvents?: boolean;
  withShowUnplannedEvents(showUnplannedEvents: boolean): GenericAlertFilterPanelSpec;

  readonly showWorkOrders?: boolean;
  withShowWorkOrders(showWorkOrders: boolean): GenericAlertFilterPanelSpec;

  readonly showTrainingValidationPeriods?: boolean;
  withShowTrainingValidationPeriods(showTrainingValidationPeriods: boolean): GenericAlertFilterPanelSpec;

  readonly showTrainingBounds?: boolean;
  withShowTrainingBounds(showTrainingBounds: boolean): GenericAlertFilterPanelSpec;

  readonly modelOutputs?: C3.Array<string | null>;
  withModelOutputs(modelOutputs: C3.Array<string | null> | Array<string | null>): GenericAlertFilterPanelSpec;

  readonly features?: C3.Array<string | null>;
  withFeatures(features: C3.Array<string | null> | Array<string | null>): GenericAlertFilterPanelSpec;

  readonly showFeatureContributions?: boolean;
  withShowFeatureContributions(showFeatureContributions: boolean): GenericAlertFilterPanelSpec;

  readonly sensors?: C3.Array<string | null>;
  withSensors(sensors: C3.Array<string | null> | Array<string | null>): GenericAlertFilterPanelSpec;

  readonly project?: string | null;
  withProject(project: string | null): GenericAlertFilterPanelSpec;

  readonly alertId: string;
  withAlertId(alertId: string): GenericAlertFilterPanelSpec;
}

