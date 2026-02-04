export interface Sensor {

  readonly assetOnboardingSourceFile?: AssetOnboardingSourceFile | null;
  withAssetOnboardingSourceFile(assetOnboardingSourceFile: IAssetOnboardingSourceFile | null): Sensor;

  readonly configurationLastUpdated?: DateTime | null;
  withConfigurationLastUpdated(configurationLastUpdated: DateTime | Date | string | null): Sensor;

  readonly id: string;
  withId(id: string): Sensor;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Sensor;

  readonly name?: string | null;
  withName(name: string | null): Sensor;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): Sensor;

  readonly version?: number | null;
  withVersion(version: number | null): Sensor;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): Sensor;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): Sensor;

  readonly trackingIdForImport?: string | null;
  withTrackingIdForImport(trackingIdForImport: string | null): Sensor;

  readonly acl?: C3.Array<AclEntry | null>;
  withAcl(acl: C3.Array<AclEntry | null> | Array<IAclEntry | null>): Sensor;

  readonly memberIntersections?: C3.Array<MemberToPhysicalAsset | null>;
  withMemberIntersections(memberIntersections: C3.Array<MemberToPhysicalAsset | null> | Array<IMemberToPhysicalAsset | null>): Sensor;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): Sensor;

  readonly locationHistory?: C3.Array<PhysicalAssetLocationHistory | null>;
  withLocationHistory(locationHistory: C3.Array<PhysicalAssetLocationHistory | null> | Array<IPhysicalAssetLocationHistory | null>): Sensor;

  readonly location?: PhysicalAssetLocation | null;
  withLocation(location: IPhysicalAssetLocation | null): Sensor;

  readonly description?: string | null;
  withDescription(description: string | null): Sensor;

  readonly realTimeLocations?: C3.Array<PhysicalAssetRealTimeLocation | null>;
  withRealTimeLocations(realTimeLocations: C3.Array<PhysicalAssetRealTimeLocation | null> | Array<IPhysicalAssetRealTimeLocation | null>): Sensor;

  readonly parentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withParentRelations(parentRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): Sensor;

  readonly childRelations?: C3.Array<PhysicalAssetHierarchyRelation | null>;
  withChildRelations(childRelations: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>): Sensor;

  readonly denormAncestors?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormAncestors(denormAncestors: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): Sensor;

  readonly denormDescendants?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormDescendants(denormDescendants: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): Sensor;

  readonly relativePositionHistory?: C3.Array<PhysicalAssetRelativePositionHistory | null>;
  withRelativePositionHistory(relativePositionHistory: C3.Array<PhysicalAssetRelativePositionHistory | null> | Array<IPhysicalAssetRelativePositionHistory | null>): Sensor;

  readonly relativePosition?: PhysicalAssetRelativePosition | null;
  withRelativePosition(relativePosition: IPhysicalAssetRelativePosition | null): Sensor;

  readonly measurements?: C3.Array<BasePhysicalMeasurementSeries | null>;
  withMeasurements(measurements: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>): Sensor;

  readonly pointMeasurements?: C3.Array<PointPhysicalMeasurementSeries | null>;
  withPointMeasurements(pointMeasurements: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>): Sensor;

  readonly events?: C3.Array<PhysicalAssetEvent | null>;
  withEvents(events: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>): Sensor;

  readonly childSensorRelations?: C3.Array<PhysicalAssetHierarchyRelation | null>;
  withChildSensorRelations(childSensorRelations: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>): Sensor;

  readonly timeToEventPredictions?: C3.Array<TimeToEventPrediction | null>;
  withTimeToEventPredictions(timeToEventPredictions: C3.Array<TimeToEventPrediction | null> | Array<ITimeToEventPrediction | null>): Sensor;

  readonly eventCategoryRelations?: C3.Array<PhysicalAssetEventCategoryRelation | null>;
  withEventCategoryRelations(eventCategoryRelations: C3.Array<PhysicalAssetEventCategoryRelation | null> | Array<IPhysicalAssetEventCategoryRelation | null>): Sensor;

  readonly diagramRelations?: C3.Array<ParsableDiagramToPhysicalAssetRelation | null>;
  withDiagramRelations(diagramRelations: C3.Array<ParsableDiagramToPhysicalAssetRelation | null> | Array<IParsableDiagramToPhysicalAssetRelation | null>): Sensor;

  readonly numDiagramRelations?: number | null;
  withNumDiagramRelations(numDiagramRelations: number | null): Sensor;

  readonly sensorType?: string | null;
  withSensorType(sensorType: string | null): Sensor;

  readonly tag?: string | null;
  withTag(tag: string | null): Sensor;

  readonly creationDate?: DateTime | null;
  withCreationDate(creationDate: DateTime | Date | string | null): Sensor;

  readonly samplingRate?: number | null;
  withSamplingRate(samplingRate: number | null): Sensor;

  readonly compressionDeviation?: number | null;
  withCompressionDeviation(compressionDeviation: number | null): Sensor;

  readonly compressionMax?: number | null;
  withCompressionMax(compressionMax: number | null): Sensor;

  readonly referenceDiagram?: string | null;
  withReferenceDiagram(referenceDiagram: string | null): Sensor;

  readonly instrumentName?: string | null;
  withInstrumentName(instrumentName: string | null): Sensor;

  readonly status?: string | null;
  withStatus(status: string | null): Sensor;

  readonly measurementBounds?: SensorMeasurementBounds | null;
  withMeasurementBounds(measurementBounds: ISensorMeasurementBounds | null): Sensor;

  readonly series?: C3.Array<BasePhysicalMeasurementSeries | null>;
  withSeries(series: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>): Sensor;

  readonly maintenanceHistory?: C3.Array<PhysicalAssetEvent | null>;
  withMaintenanceHistory(maintenanceHistory: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>): Sensor;

  readonly pointSeries?: C3.Array<PointPhysicalMeasurementSeries | null>;
  withPointSeries(pointSeries: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>): Sensor;

  readonly physicalSeries?: C3.Array<PhysicalMeasurementSeries | null>;
  withPhysicalSeries(physicalSeries: C3.Array<PhysicalMeasurementSeries | null> | Array<IPhysicalMeasurementSeries | null>): Sensor;

  readonly unitConstraint?: Unit | null;
  withUnitConstraint(unitConstraint: IUnit | null): Sensor;

  readonly dataSummaries?: C3.Array<SensorDataSummary | null>;
  withDataSummaries(dataSummaries: C3.Array<SensorDataSummary | null> | Array<ISensorDataSummary | null>): Sensor;

  readonly flatlinePercentage?: number | null;
  withFlatlinePercentage(flatlinePercentage: number | null): Sensor;

  readonly missingPercentage?: number | null;
  withMissingPercentage(missingPercentage: number | null): Sensor;

  readonly metricSafeId?: string | null;
  withMetricSafeId(metricSafeId: string | null): Sensor;

  readonly currentParentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withCurrentParentRelations(currentParentRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): Sensor;

  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): Sensor;

  readonly assetRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withAssetRelations(assetRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): Sensor;

  readonly currentReliabilityAssetSensorRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withCurrentReliabilityAssetSensorRelations(currentReliabilityAssetSensorRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): Sensor;

  readonly parentAsset?: ReliabilityAsset | null;
  withParentAsset(parentAsset: IReliabilityAsset | null): Sensor;

  readonly evaluator?: ReliabilityMetricEvaluator | null;
  withEvaluator(evaluator: IReliabilityMetricEvaluator | null): Sensor;

  readonly isMonitoredAsString?: string | null;
  withIsMonitoredAsString(isMonitoredAsString: string | null): Sensor;

  readonly monitoredAlertCategories?: C3.Array<SensorHealthCategory | null>;
  withMonitoredAlertCategories(monitoredAlertCategories: C3.Array<SensorHealthCategory | null> | Array<ISensorHealthCategory | null>): Sensor;

  readonly monitoredAlertCategoriesAsString?: string | null;
  withMonitoredAlertCategoriesAsString(monitoredAlertCategoriesAsString: string | null): Sensor;

  readonly sensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withSensorAlerts(sensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): Sensor;

  readonly latestOpenSensorAlert?: SensorHealthAlert | null;
  withLatestOpenSensorAlert(latestOpenSensorAlert: ISensorHealthAlert | null): Sensor;

  readonly openSensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withOpenSensorAlerts(openSensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): Sensor;

  readonly isMonitored?: boolean;
  withIsMonitored(isMonitored: boolean): Sensor;

  readonly latestSensorAlert?: SensorHealthAlert | null;
  withLatestSensorAlert(latestSensorAlert: ISensorHealthAlert | null): Sensor;

  readonly operationalStatus?: SensorOperationalStatusTimedValue | null;
  withOperationalStatus(operationalStatus: ISensorOperationalStatusTimedValue | null): Sensor;

  readonly mutedDisplayStatusLabel?: string | null;
  withMutedDisplayStatusLabel(mutedDisplayStatusLabel: string | null): Sensor;

  readonly updatedTimestamp?: DateTime | null;
  withUpdatedTimestamp(updatedTimestamp: DateTime | Date | string | null): Sensor;

  readonly mutedPeriods?: C3.Array<AlertMutedPeriod | null>;
  withMutedPeriods(mutedPeriods: C3.Array<AlertMutedPeriod | null> | Array<IAlertMutedPeriod | null>): Sensor;

  readonly earliestPointSeriesDate?: DateTime | null;
  withEarliestPointSeriesDate(earliestPointSeriesDate: DateTime | Date | string | null): Sensor;

  readonly operationalStatusHistory?: C3.Array<SensorOperationalStatus | null>;
  withOperationalStatusHistory(operationalStatusHistory: C3.Array<SensorOperationalStatus | null> | Array<ISensorOperationalStatus | null>): Sensor;

  readonly dataReport?: C3.Array<SensorDataReport | null>;
  withDataReport(dataReport: C3.Array<SensorDataReport | null> | Array<ISensorDataReport | null>): Sensor;

  readonly latestPointSeriesDate?: DateTime | null;
  withLatestPointSeriesDate(latestPointSeriesDate: DateTime | Date | string | null): Sensor;

  readonly fallbackUnit?: Unit | null;
  withFallbackUnit(fallbackUnit: IUnit | null): Sensor;

  readonly protectionLoopRelation?: ProtectionLoopSensorRelation | null;
  withProtectionLoopRelation(protectionLoopRelation: IProtectionLoopSensorRelation | null): Sensor;

  readonly currentMutedPeriod?: AlertMutedPeriod | null;
  withCurrentMutedPeriod(currentMutedPeriod: IAlertMutedPeriod | null): Sensor;

  readonly isMuted?: boolean;
  withIsMuted(isMuted: boolean): Sensor;

  readonly numOpenSensorAlerts?: number | null;
  withNumOpenSensorAlerts(numOpenSensorAlerts: number | null): Sensor;
}

