export interface AlertMutedPeriodApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AlertMutedPeriodApplicationState;

  readonly id?: string | null;
  withId(id: string | null): AlertMutedPeriodApplicationState;

  readonly name?: string | null;
  withName(name: string | null): AlertMutedPeriodApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): AlertMutedPeriodApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AlertMutedPeriodApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AlertMutedPeriodApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AlertMutedPeriodApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): AlertMutedPeriodApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): AlertMutedPeriodApplicationState;

  readonly muteDuration?: DateTime | null;
  withMuteDuration(muteDuration: DateTime | Date | string | null): AlertMutedPeriodApplicationState;

  readonly applyNewMuteDurationToAll?: boolean;
  withApplyNewMuteDurationToAll(applyNewMuteDurationToAll: boolean): AlertMutedPeriodApplicationState;

  readonly muteChildAssets?: boolean;
  withMuteChildAssets(muteChildAssets: boolean): AlertMutedPeriodApplicationState;

  readonly allAssets?: C3.Array<string | null>;
  withAllAssets(allAssets: C3.Array<string | null> | Array<string | null>): AlertMutedPeriodApplicationState;

  readonly muteAssetAlerts?: boolean;
  withMuteAssetAlerts(muteAssetAlerts: boolean): AlertMutedPeriodApplicationState;

  readonly muteSensorAlerts?: boolean;
  withMuteSensorAlerts(muteSensorAlerts: boolean): AlertMutedPeriodApplicationState;

  readonly mutedPeriodOverrides?: C3.Map<string | null, any>;
  withMutedPeriodOverrides(mutedPeriodOverrides: C3.Map<string | null, any> | {[key: string | null]: any}): AlertMutedPeriodApplicationState;

  readonly existingMutedPeriods?: C3.Map<string | null, AlertMutedPeriod | null>;
  withExistingMutedPeriods(existingMutedPeriods: C3.Map<string | null, AlertMutedPeriod | null> | {[key: string | null]: IAlertMutedPeriod | null}): AlertMutedPeriodApplicationState;

  readonly newMutedPeriods?: C3.Map<string | null, any>;
  withNewMutedPeriods(newMutedPeriods: C3.Map<string | null, any> | {[key: string | null]: any}): AlertMutedPeriodApplicationState;

  readonly assetGraphData?: any | null;
  withAssetGraphData(assetGraphData: any | null): AlertMutedPeriodApplicationState;

  readonly currentAssetId?: string | null;
  withCurrentAssetId(currentAssetId: string | null): AlertMutedPeriodApplicationState;

  readonly selectedSensorsIds?: C3.Array<string | null>;
  withSelectedSensorsIds(selectedSensorsIds: C3.Array<string | null> | Array<string | null>): AlertMutedPeriodApplicationState;

  readonly sensors?: C3.Array<Sensor | null>;
  withSensors(sensors: C3.Array<Sensor | null> | Array<ISensor | null>): AlertMutedPeriodApplicationState;

  readonly models?: C3.Array<ReliabilityMlModel | null>;
  withModels(models: C3.Array<ReliabilityMlModel | null> | Array<IReliabilityMlModel | null>): AlertMutedPeriodApplicationState;

  readonly selectedSensorHealthAlertsIds?: C3.Array<string | null>;
  withSelectedSensorHealthAlertsIds(selectedSensorHealthAlertsIds: C3.Array<string | null> | Array<string | null>): AlertMutedPeriodApplicationState;
}

