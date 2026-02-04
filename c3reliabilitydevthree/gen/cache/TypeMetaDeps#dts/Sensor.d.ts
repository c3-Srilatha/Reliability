// TypeScript definitions for the C3 type Sensor

/**
 * @inheritdoc
 *
 * @remarks this represents a value passed to a method that expects an instance of Sensor
 */
declare interface ISensor {

  /**
   * Latest uploaded asset hierarchy file or spreadsheet containing the entity.
   */
  assetOnboardingSourceFile?: IAssetOnboardingSourceFile | null;

  /**
   * Indicates when the configuration of this asset was last updated.
   */
  configurationLastUpdated?: DateTime | Date | string | null;

  /**
   * A unique identifier that can be manually assigned or generated automatically during object creation. This
   * identifier cannot be altered after the object has been persisted.
   */
  id: string;

  /**
   * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
   * crucial for accessing previous versions of an object and is entirely managed by the system.
   *
   * @see Ann.Db#versionHistory
   */
  versionEdits?: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>;

  /**
   * Additional display name for the sensor. This is the secondary name used to display this sensor in the UI.
   */
  name?: string | null;

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Version number used for optimistic concurrency.  Automatically managed by the system.
   *
   * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
   * be done with great caution.
   */
  version?: number | null;

  /**
   * Persists concrete type with bindings for generic types where instance has parameter bindings
   */
  typeWithBindings?: IType | null;

  /**
   * @inheritdoc
   */
  facilityFilterPaths?: C3.Array<string | null> | Array<string | null>;

  /**
   * This ID is used to determine which import this entity belongs to.
   */
  trackingIdForImport?: string | null;

  /**
   * List of {@link AclEntry} entries governing who can read/update/remove Objs.
   */
  acl?: C3.Array<AclEntry | null> | Array<IAclEntry | null>;

  /**
   * References to MemberToEntity that map to this instance.
   */
  memberIntersections?: C3.Array<MemberToPhysicalAsset | null> | Array<IMemberToPhysicalAsset | null>;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  typeIdent?: string | null;

  /**
   * The historical location/address for the asset.
   */
  locationHistory?: C3.Array<PhysicalAssetLocationHistory | null> | Array<IPhysicalAssetLocationHistory | null>;

  /**
   * The current location/address for this asset.
   */
  location?: IPhysicalAssetLocation | null;

  /**
   * Description of the sensor.
   */
  description?: string | null;

  /**
   * Real-time location data for a moving asset.
   */
  realTimeLocations?: C3.Array<PhysicalAssetRealTimeLocation | null> | Array<IPhysicalAssetRealTimeLocation | null>;

  /**
   * All incoming {@link ReliabilityAssetSensorHierarchicalRelation}s. See #assetRelations.
   */
  parentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>;

  /**
   * Child relations, where 'from' refers to this asset.
   */
  childRelations?: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>;

  /**
   * Ancestors in the asset hierarchy throughout history.
   */
  denormAncestors?: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>;

  /**
   * Descendants in the asset hierarchy throughout history.
   */
  denormDescendants?: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>;

  /**
   * The historical relative positions of this physical asset.
   */
  relativePositionHistory?: C3.Array<PhysicalAssetRelativePositionHistory | null> | Array<IPhysicalAssetRelativePositionHistory | null>;

  /**
   * The current relative position of this physical asset.
   */
  relativePosition?: IPhysicalAssetRelativePosition | null;

  /**
   * Physical measurement series related to this asset.
   */
  measurements?: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>;

  /**
   * Point measurement series for time-series metrics related to the asset.
   */
  pointMeasurements?: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>;

  /**
   * The event history for this physical asset.
   */
  events?: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>;

  /**
   * The {@link Sensor}s associated with this {@link PhysicalAsset}.
   *
   * This field establishes the relationship between the physical asset and its associated sensors,
   * using a filter to only include sensors in the relation (where the type of relation is 'SENSOR').
   */
  childSensorRelations?: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>;

  /**
   * The active {@link TimeToEventPrediction} objects directly belonging to this asset
   */
  timeToEventPredictions?: C3.Array<TimeToEventPrediction | null> | Array<ITimeToEventPrediction | null>;

  /**
   * The relations to {@link EventCategory} this asset has
   */
  eventCategoryRelations?: C3.Array<PhysicalAssetEventCategoryRelation | null> | Array<IPhysicalAssetEventCategoryRelation | null>;

  /**
   * Relations to {@link ParsableDiagram}s which have been linked to this asset.
   */
  diagramRelations?: C3.Array<ParsableDiagramToPhysicalAssetRelation | null> | Array<IParsableDiagramToPhysicalAssetRelation | null>;

  /**
   * Count of {@link ParsableDiagram}s which have been linked to this asset.
   */
  numDiagramRelations?: number | null;

  /**
   * The type of data series that describes a measurement value on an asset.
   * In a typical deployment, the types of sensors include, but are not limited to,
   * TAGs, LMIs, VSLs, etc.
   */
  sensorType?: string | null;

  /**
   * Reference to a data series describing a measurement value on an asset
   * (e.g., pressure, temperature, flow rate, setpoint, process value);
   * usually an alphanumeric identifier "61PI0207"
   * This is the primary name field used to display this sensor in the UI. Ideally matches the id.
   */
  tag?: string | null;

  /**
   * Tag creation datetime.
   */
  creationDate?: DateTime | Date | string | null;

  /**
   * Sampling rate for measurements (in seconds).
   */
  samplingRate?: number | null;

  /**
   * Expected compression deviation (value between 0 to 1).
   */
  compressionDeviation?: number | null;

  /**
   * Maximum compression for Pi data (in number of seconds).
   */
  compressionMax?: number | null;

  /**
   * Name of the reference diagram.
   */
  referenceDiagram?: string | null;

  /**
   * Name of the instrument.
   */
  instrumentName?: string | null;

  /**
   * The transmitting status of the sensor.
   */
  status?: string | null;

  /**
   * A Sensor will usually have lower and upper limits of
   * measurement data in its time series. Below the lower bound,
   * the data is considered invalid. Beyond the upper bound,
   * the data is considered invalid. Invalidity may be due to wrong
   * calibration of the Sensor, incorrect storage of the measurement
   * value in the database, human error while extracting the data, etc.
   * To account for these errors, there is a provision to set the lower
   * and upper operational measurement bounds for the time series data
   * of the Sensor.
   * For more information on how to set these bounds and manipulate them,
   * refer to {@link getMeasurementBounds}, {@link setMeasurementBounds},
   * and {@link resetMeasurementBounds}.
   */
  measurementBounds?: ISensorMeasurementBounds | null;

  /**
   * All measurement series, including {@link PointPhysicalMeasurementSeries} and {@link PhysicalMeasurementSeries}
   */
  series?: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>;

  /**
   * The last time the {@link Sensor} has had maintenance.
   */
  maintenanceHistory?: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>;

  /**
   * {@link PointPhysicalMeasurementSeries} for this tag
   */
  pointSeries?: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>;

  /**
   * {@link PhysicalMeasurementSeries} for this tag
   */
  physicalSeries?: C3.Array<PhysicalMeasurementSeries | null> | Array<IPhysicalMeasurementSeries | null>;

  /**
   * {@link Unit} for the sensor derived from the first series in the list of series.
   * If the series is empty, the unit is set to the fallback unit.
   */
  unitConstraint?: IUnit | null;

  /**
   * The {@link SensorDataSummary} objects for this sensor which hold aggregated statistics
   * about the quality of the sensor's data.
   */
  dataSummaries?: C3.Array<SensorDataSummary | null> | Array<ISensorDataSummary | null>;

  /**
   * Non-persisted field populated by {@link fetchForDataThresholds} which represents the
   * percentage of data which is flatlined across the queried time range.
   */
  flatlinePercentage?: number | null;

  /**
   * Non-persisted field populated by {@link fetchForDataThresholds} which represents the
   * percentage of data which is missing across the queried time range.
   */
  missingPercentage?: number | null;

  /**
   * Sensor time series are usually used directly as features in several machine learning models. To be used
   * as a feature, a sensor should have a metric written against it from the {@link ReliabilityAsset} source Type.
   * This implies that there needs to exist one unique metric, i.e., {@link Metric#name}, per Sensor.
   *
   * The {@link id} is an unbounded string, i.e., it may have special characters or it may start with a number.
   * The Metric Engine does not support {@link Metric#name}s which follow this pattern. To ensure that there
   * are safe ids to be used within metrics, use this field within the {@link SimpleMetric#path} to filter
   * for the correct Sensor.
   *
   * For all {@link ReliabilityAssetSensorRelation} objects that do not have the
   * {@link ReliabilityAssetSensorRelation#expectedSensor} field populated, it is suggested
   * to use this field within the {@link SimpleMetric#path} and {@link SimpleMetric#name} so that
   * it is guaranteed that all metrics will evaluate.
   *
   * Furthermore, since this field is persisted in the table, developers can use this Type as a map
   * between the `metricSafeId` and the {@link id}. For example, in the UI, if the feature contributions
   * of the Sensor have to be displayed, the metric name will be determined by this field. However, logic
   * can be added to dynamically change the display id of the sensor by fetching the id based on a filter
   * on this field.
   */
  metricSafeId?: string | null;

  /**
   * Current incoming {@link ReliabilityAssetSensorHierarchicalRelation}s. See #assetRelations.
   */
  currentParentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>;

  /**
   * Display name which attempts to use {@link Sensor#tag tag} field; otherwise, uses the {@link Sensor#name name} field.
   * Falls back on id, if neither tag nor name exists.
   */
  displayName?: string | null;

  /**
   * All related {@link ReliabilityAssetSensorRelation}. See {@link ReliabilityAssetSensorRelation} for more details
   * about these relations.
   */
  assetRelations?: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>;

  /**
   * Currently related {@link ReliabilityAssetSensorRelation}. See #assetRelations.
   */
  currentReliabilityAssetSensorRelations?: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>;

  /**
   * The {@link ReliabilityAsset} which is currently the direct parent of this {@link Sensor}. See #assetRelations.
   */
  parentAsset?: IReliabilityAsset | null;

  /**
   * Helper type to evaluate User-Defined Metrics of {@link ReliabilityMetric} type.
   */
  evaluator?: IReliabilityMetricEvaluator | null;

  /**
   * The monitored status displayed in the grid
   */
  isMonitoredAsString?: string | null;

  /**
   * The array of monitored {@link SensorHealthCategory}s
   */
  monitoredAlertCategories?: C3.Array<SensorHealthCategory | null> | Array<ISensorHealthCategory | null>;

  /**
   * The monitored alert flags represented as a string to display in the grid.
   */
  monitoredAlertCategoriesAsString?: string | null;

  /**
   * List of {@link SensorHealthAlert}
   */
  sensorAlerts?: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>;

  /**
   * The latest triggered {@link SensorHealthAlert} that is still open.
   */
  latestOpenSensorAlert?: ISensorHealthAlert | null;

  /**
   * List of {@link SensorHealthAlert}
   */
  openSensorAlerts?: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>;

  /**
   * Whether or not this sensor is monitored for sensor health purposes.
   */
  isMonitored?: boolean;

  /**
   * The latest triggered {@link SensorHealthAlert} for this Sensor.
   */
  latestSensorAlert?: ISensorHealthAlert | null;

  /**
   * The current operational status of the sensor, which indicates if it should be included in a
   * {@link ReliabilityRiskMlModel}.
   *
   * @see FaultySensor
   */
  operationalStatus?: ISensorOperationalStatusTimedValue | null;

  /**
   * The status label for alerts for this sensor, indicating whether they are currently muted or unmuted.
   * This field is intended to be used only in the UI for display or filtering purposes.
   */
  mutedDisplayStatusLabel?: string | null;

  /**
   * The latest time that any field or relation for this Sensor was modified
   */
  updatedTimestamp?: DateTime | Date | string | null;

  /**
   * {@link AlertMutedPeriod}s during which alerts from this sensor have been muted.
   */
  mutedPeriods?: C3.Array<AlertMutedPeriod | null> | Array<IAlertMutedPeriod | null>;

  /**
   * Populated when this Sensor's {@link PointPhysicalMeasurementSeries} are normalized.
   * This indicates the earliest data point across all {@link PointPhysicalMeasurementSeries} for this Sensor.
   */
  earliestPointSeriesDate?: DateTime | Date | string | null;

  /**
   * The history of operational statuses of the sensor.
   * @see Sensor#operationalStatus
   */
  operationalStatusHistory?: C3.Array<SensorOperationalStatus | null> | Array<ISensorOperationalStatus | null>;

  /**
   * Represents an array of sensor data report of a time window.
   */
  dataReport?: C3.Array<SensorDataReport | null> | Array<ISensorDataReport | null>;

  /**
   * Populated when this Sensor's {@link PointPhysicalMeasurementSeries} are normalized.
   * This indicates the latest data point across all {@link PointPhysicalMeasurementSeries} for this Sensor.
   */
  latestPointSeriesDate?: DateTime | Date | string | null;

  /**
   * The fall back {@link Unit} for this sensor given that the sensor has no series to inform the unit.
   */
  fallbackUnit?: IUnit | null;

  /**
   * The {@link ProtectionLoop} this {@link Sensor} belongs to.
   */
  protectionLoopRelation?: IProtectionLoopSensorRelation | null;

  /**
   * The current {@link AlertMutedPeriod} for this sensor, if one exists.
   */
  currentMutedPeriod?: IAlertMutedPeriod | null;

  /**
   * Indicates whether alerts for this sensor are currently muted.
   */
  isMuted?: boolean;

  /**
   * Count of #openSensorAlerts. See {@link SensorHealthAlert} for more info.
   *
   * As a calc field, this should not be sorted on.
   */
  numOpenSensorAlerts?: number | null;
}

/**
 * @inheritdoc
 *
 * @remarks this represents a made instance of Sensor
 */
declare class Sensor extends Obj {

  /**
   * Latest uploaded asset hierarchy file or spreadsheet containing the entity.
   */
  readonly assetOnboardingSourceFile?: AssetOnboardingSourceFile | null;
  withAssetOnboardingSourceFile(assetOnboardingSourceFile: IAssetOnboardingSourceFile | null): Sensor;

  /**
   * Indicates when the configuration of this asset was last updated.
   */
  readonly configurationLastUpdated?: DateTime | null;
  withConfigurationLastUpdated(configurationLastUpdated: DateTime | Date | string | null): Sensor;

  /**
   * A unique identifier that can be manually assigned or generated automatically during object creation. This
   * identifier cannot be altered after the object has been persisted.
   */
  readonly id: string;
  withId(id: string): Sensor;

  /**
   * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
   * crucial for accessing previous versions of an object and is entirely managed by the system.
   *
   * @see Ann.Db#versionHistory
   */
  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Sensor;

  /**
   * Additional display name for the sensor. This is the secondary name used to display this sensor in the UI.
   */
  readonly name?: string | null;
  withName(name: string | null): Sensor;

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): Sensor;

  /**
   * Version number used for optimistic concurrency.  Automatically managed by the system.
   *
   * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
   * be done with great caution.
   */
  readonly version?: number | null;
  withVersion(version: number | null): Sensor;

  /**
   * Persists concrete type with bindings for generic types where instance has parameter bindings
   */
  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): Sensor;

  /**
   * @inheritdoc
   */
  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): Sensor;

  /**
   * This ID is used to determine which import this entity belongs to.
   */
  readonly trackingIdForImport?: string | null;
  withTrackingIdForImport(trackingIdForImport: string | null): Sensor;

  /**
   * List of {@link AclEntry} entries governing who can read/update/remove Objs.
   */
  readonly acl?: C3.Array<AclEntry | null>;
  withAcl(acl: C3.Array<AclEntry | null> | Array<IAclEntry | null>): Sensor;

  /**
   * References to MemberToEntity that map to this instance.
   */
  readonly memberIntersections?: C3.Array<MemberToPhysicalAsset | null>;
  withMemberIntersections(memberIntersections: C3.Array<MemberToPhysicalAsset | null> | Array<IMemberToPhysicalAsset | null>): Sensor;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): Sensor;

  /**
   * The historical location/address for the asset.
   */
  readonly locationHistory?: C3.Array<PhysicalAssetLocationHistory | null>;
  withLocationHistory(locationHistory: C3.Array<PhysicalAssetLocationHistory | null> | Array<IPhysicalAssetLocationHistory | null>): Sensor;

  /**
   * The current location/address for this asset.
   */
  readonly location?: PhysicalAssetLocation | null;
  withLocation(location: IPhysicalAssetLocation | null): Sensor;

  /**
   * Description of the sensor.
   */
  readonly description?: string | null;
  withDescription(description: string | null): Sensor;

  /**
   * Real-time location data for a moving asset.
   */
  readonly realTimeLocations?: C3.Array<PhysicalAssetRealTimeLocation | null>;
  withRealTimeLocations(realTimeLocations: C3.Array<PhysicalAssetRealTimeLocation | null> | Array<IPhysicalAssetRealTimeLocation | null>): Sensor;

  /**
   * All incoming {@link ReliabilityAssetSensorHierarchicalRelation}s. See #assetRelations.
   */
  readonly parentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withParentRelations(parentRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): Sensor;

  /**
   * Child relations, where 'from' refers to this asset.
   */
  readonly childRelations?: C3.Array<PhysicalAssetHierarchyRelation | null>;
  withChildRelations(childRelations: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>): Sensor;

  /**
   * Ancestors in the asset hierarchy throughout history.
   */
  readonly denormAncestors?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormAncestors(denormAncestors: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): Sensor;

  /**
   * Descendants in the asset hierarchy throughout history.
   */
  readonly denormDescendants?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormDescendants(denormDescendants: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): Sensor;

  /**
   * The historical relative positions of this physical asset.
   */
  readonly relativePositionHistory?: C3.Array<PhysicalAssetRelativePositionHistory | null>;
  withRelativePositionHistory(relativePositionHistory: C3.Array<PhysicalAssetRelativePositionHistory | null> | Array<IPhysicalAssetRelativePositionHistory | null>): Sensor;

  /**
   * The current relative position of this physical asset.
   */
  readonly relativePosition?: PhysicalAssetRelativePosition | null;
  withRelativePosition(relativePosition: IPhysicalAssetRelativePosition | null): Sensor;

  /**
   * Physical measurement series related to this asset.
   */
  readonly measurements?: C3.Array<BasePhysicalMeasurementSeries | null>;
  withMeasurements(measurements: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>): Sensor;

  /**
   * Point measurement series for time-series metrics related to the asset.
   */
  readonly pointMeasurements?: C3.Array<PointPhysicalMeasurementSeries | null>;
  withPointMeasurements(pointMeasurements: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>): Sensor;

  /**
   * The event history for this physical asset.
   */
  readonly events?: C3.Array<PhysicalAssetEvent | null>;
  withEvents(events: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>): Sensor;

  /**
   * The {@link Sensor}s associated with this {@link PhysicalAsset}.
   *
   * This field establishes the relationship between the physical asset and its associated sensors,
   * using a filter to only include sensors in the relation (where the type of relation is 'SENSOR').
   */
  readonly childSensorRelations?: C3.Array<PhysicalAssetHierarchyRelation | null>;
  withChildSensorRelations(childSensorRelations: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>): Sensor;

  /**
   * The active {@link TimeToEventPrediction} objects directly belonging to this asset
   */
  readonly timeToEventPredictions?: C3.Array<TimeToEventPrediction | null>;
  withTimeToEventPredictions(timeToEventPredictions: C3.Array<TimeToEventPrediction | null> | Array<ITimeToEventPrediction | null>): Sensor;

  /**
   * The relations to {@link EventCategory} this asset has
   */
  readonly eventCategoryRelations?: C3.Array<PhysicalAssetEventCategoryRelation | null>;
  withEventCategoryRelations(eventCategoryRelations: C3.Array<PhysicalAssetEventCategoryRelation | null> | Array<IPhysicalAssetEventCategoryRelation | null>): Sensor;

  /**
   * Relations to {@link ParsableDiagram}s which have been linked to this asset.
   */
  readonly diagramRelations?: C3.Array<ParsableDiagramToPhysicalAssetRelation | null>;
  withDiagramRelations(diagramRelations: C3.Array<ParsableDiagramToPhysicalAssetRelation | null> | Array<IParsableDiagramToPhysicalAssetRelation | null>): Sensor;

  /**
   * Count of {@link ParsableDiagram}s which have been linked to this asset.
   */
  readonly numDiagramRelations?: number | null;
  withNumDiagramRelations(numDiagramRelations: number | null): Sensor;

  /**
   * The type of data series that describes a measurement value on an asset.
   * In a typical deployment, the types of sensors include, but are not limited to,
   * TAGs, LMIs, VSLs, etc.
   */
  readonly sensorType?: string | null;
  withSensorType(sensorType: string | null): Sensor;

  /**
   * Reference to a data series describing a measurement value on an asset
   * (e.g., pressure, temperature, flow rate, setpoint, process value);
   * usually an alphanumeric identifier "61PI0207"
   * This is the primary name field used to display this sensor in the UI. Ideally matches the id.
   */
  readonly tag?: string | null;
  withTag(tag: string | null): Sensor;

  /**
   * Tag creation datetime.
   */
  readonly creationDate?: DateTime | null;
  withCreationDate(creationDate: DateTime | Date | string | null): Sensor;

  /**
   * Sampling rate for measurements (in seconds).
   */
  readonly samplingRate?: number | null;
  withSamplingRate(samplingRate: number | null): Sensor;

  /**
   * Expected compression deviation (value between 0 to 1).
   */
  readonly compressionDeviation?: number | null;
  withCompressionDeviation(compressionDeviation: number | null): Sensor;

  /**
   * Maximum compression for Pi data (in number of seconds).
   */
  readonly compressionMax?: number | null;
  withCompressionMax(compressionMax: number | null): Sensor;

  /**
   * Name of the reference diagram.
   */
  readonly referenceDiagram?: string | null;
  withReferenceDiagram(referenceDiagram: string | null): Sensor;

  /**
   * Name of the instrument.
   */
  readonly instrumentName?: string | null;
  withInstrumentName(instrumentName: string | null): Sensor;

  /**
   * The transmitting status of the sensor.
   */
  readonly status?: string | null;
  withStatus(status: string | null): Sensor;

  /**
   * A Sensor will usually have lower and upper limits of
   * measurement data in its time series. Below the lower bound,
   * the data is considered invalid. Beyond the upper bound,
   * the data is considered invalid. Invalidity may be due to wrong
   * calibration of the Sensor, incorrect storage of the measurement
   * value in the database, human error while extracting the data, etc.
   * To account for these errors, there is a provision to set the lower
   * and upper operational measurement bounds for the time series data
   * of the Sensor.
   * For more information on how to set these bounds and manipulate them,
   * refer to {@link getMeasurementBounds}, {@link setMeasurementBounds},
   * and {@link resetMeasurementBounds}.
   */
  readonly measurementBounds?: SensorMeasurementBounds | null;
  withMeasurementBounds(measurementBounds: ISensorMeasurementBounds | null): Sensor;

  /**
   * All measurement series, including {@link PointPhysicalMeasurementSeries} and {@link PhysicalMeasurementSeries}
   */
  readonly series?: C3.Array<BasePhysicalMeasurementSeries | null>;
  withSeries(series: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>): Sensor;

  /**
   * The last time the {@link Sensor} has had maintenance.
   */
  readonly maintenanceHistory?: C3.Array<PhysicalAssetEvent | null>;
  withMaintenanceHistory(maintenanceHistory: C3.Array<PhysicalAssetEvent | null> | Array<IPhysicalAssetEvent | null>): Sensor;

  /**
   * {@link PointPhysicalMeasurementSeries} for this tag
   */
  readonly pointSeries?: C3.Array<PointPhysicalMeasurementSeries | null>;
  withPointSeries(pointSeries: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>): Sensor;

  /**
   * {@link PhysicalMeasurementSeries} for this tag
   */
  readonly physicalSeries?: C3.Array<PhysicalMeasurementSeries | null>;
  withPhysicalSeries(physicalSeries: C3.Array<PhysicalMeasurementSeries | null> | Array<IPhysicalMeasurementSeries | null>): Sensor;

  /**
   * {@link Unit} for the sensor derived from the first series in the list of series.
   * If the series is empty, the unit is set to the fallback unit.
   */
  readonly unitConstraint?: Unit | null;
  withUnitConstraint(unitConstraint: IUnit | null): Sensor;

  /**
   * The {@link SensorDataSummary} objects for this sensor which hold aggregated statistics
   * about the quality of the sensor's data.
   */
  readonly dataSummaries?: C3.Array<SensorDataSummary | null>;
  withDataSummaries(dataSummaries: C3.Array<SensorDataSummary | null> | Array<ISensorDataSummary | null>): Sensor;

  /**
   * Non-persisted field populated by {@link fetchForDataThresholds} which represents the
   * percentage of data which is flatlined across the queried time range.
   */
  readonly flatlinePercentage?: number | null;
  withFlatlinePercentage(flatlinePercentage: number | null): Sensor;

  /**
   * Non-persisted field populated by {@link fetchForDataThresholds} which represents the
   * percentage of data which is missing across the queried time range.
   */
  readonly missingPercentage?: number | null;
  withMissingPercentage(missingPercentage: number | null): Sensor;

  /**
   * Sensor time series are usually used directly as features in several machine learning models. To be used
   * as a feature, a sensor should have a metric written against it from the {@link ReliabilityAsset} source Type.
   * This implies that there needs to exist one unique metric, i.e., {@link Metric#name}, per Sensor.
   *
   * The {@link id} is an unbounded string, i.e., it may have special characters or it may start with a number.
   * The Metric Engine does not support {@link Metric#name}s which follow this pattern. To ensure that there
   * are safe ids to be used within metrics, use this field within the {@link SimpleMetric#path} to filter
   * for the correct Sensor.
   *
   * For all {@link ReliabilityAssetSensorRelation} objects that do not have the
   * {@link ReliabilityAssetSensorRelation#expectedSensor} field populated, it is suggested
   * to use this field within the {@link SimpleMetric#path} and {@link SimpleMetric#name} so that
   * it is guaranteed that all metrics will evaluate.
   *
   * Furthermore, since this field is persisted in the table, developers can use this Type as a map
   * between the `metricSafeId` and the {@link id}. For example, in the UI, if the feature contributions
   * of the Sensor have to be displayed, the metric name will be determined by this field. However, logic
   * can be added to dynamically change the display id of the sensor by fetching the id based on a filter
   * on this field.
   */
  readonly metricSafeId?: string | null;
  withMetricSafeId(metricSafeId: string | null): Sensor;

  /**
   * Current incoming {@link ReliabilityAssetSensorHierarchicalRelation}s. See #assetRelations.
   */
  readonly currentParentRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withCurrentParentRelations(currentParentRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): Sensor;

  /**
   * Display name which attempts to use {@link Sensor#tag tag} field; otherwise, uses the {@link Sensor#name name} field.
   * Falls back on id, if neither tag nor name exists.
   */
  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): Sensor;

  /**
   * All related {@link ReliabilityAssetSensorRelation}. See {@link ReliabilityAssetSensorRelation} for more details
   * about these relations.
   */
  readonly assetRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withAssetRelations(assetRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): Sensor;

  /**
   * Currently related {@link ReliabilityAssetSensorRelation}. See #assetRelations.
   */
  readonly currentReliabilityAssetSensorRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withCurrentReliabilityAssetSensorRelations(currentReliabilityAssetSensorRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): Sensor;

  /**
   * The {@link ReliabilityAsset} which is currently the direct parent of this {@link Sensor}. See #assetRelations.
   */
  readonly parentAsset?: ReliabilityAsset | null;
  withParentAsset(parentAsset: IReliabilityAsset | null): Sensor;

  /**
   * Helper type to evaluate User-Defined Metrics of {@link ReliabilityMetric} type.
   */
  readonly evaluator?: ReliabilityMetricEvaluator | null;
  withEvaluator(evaluator: IReliabilityMetricEvaluator | null): Sensor;

  /**
   * The monitored status displayed in the grid
   */
  readonly isMonitoredAsString?: string | null;
  withIsMonitoredAsString(isMonitoredAsString: string | null): Sensor;

  /**
   * The array of monitored {@link SensorHealthCategory}s
   */
  readonly monitoredAlertCategories?: C3.Array<SensorHealthCategory | null>;
  withMonitoredAlertCategories(monitoredAlertCategories: C3.Array<SensorHealthCategory | null> | Array<ISensorHealthCategory | null>): Sensor;

  /**
   * The monitored alert flags represented as a string to display in the grid.
   */
  readonly monitoredAlertCategoriesAsString?: string | null;
  withMonitoredAlertCategoriesAsString(monitoredAlertCategoriesAsString: string | null): Sensor;

  /**
   * List of {@link SensorHealthAlert}
   */
  readonly sensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withSensorAlerts(sensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): Sensor;

  /**
   * The latest triggered {@link SensorHealthAlert} that is still open.
   */
  readonly latestOpenSensorAlert?: SensorHealthAlert | null;
  withLatestOpenSensorAlert(latestOpenSensorAlert: ISensorHealthAlert | null): Sensor;

  /**
   * List of {@link SensorHealthAlert}
   */
  readonly openSensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withOpenSensorAlerts(openSensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): Sensor;

  /**
   * Whether or not this sensor is monitored for sensor health purposes.
   */
  readonly isMonitored?: boolean;
  withIsMonitored(isMonitored: boolean): Sensor;

  /**
   * The latest triggered {@link SensorHealthAlert} for this Sensor.
   */
  readonly latestSensorAlert?: SensorHealthAlert | null;
  withLatestSensorAlert(latestSensorAlert: ISensorHealthAlert | null): Sensor;

  /**
   * The current operational status of the sensor, which indicates if it should be included in a
   * {@link ReliabilityRiskMlModel}.
   *
   * @see FaultySensor
   */
  readonly operationalStatus?: SensorOperationalStatusTimedValue | null;
  withOperationalStatus(operationalStatus: ISensorOperationalStatusTimedValue | null): Sensor;

  /**
   * The status label for alerts for this sensor, indicating whether they are currently muted or unmuted.
   * This field is intended to be used only in the UI for display or filtering purposes.
   */
  readonly mutedDisplayStatusLabel?: string | null;
  withMutedDisplayStatusLabel(mutedDisplayStatusLabel: string | null): Sensor;

  /**
   * The latest time that any field or relation for this Sensor was modified
   */
  readonly updatedTimestamp?: DateTime | null;
  withUpdatedTimestamp(updatedTimestamp: DateTime | Date | string | null): Sensor;

  /**
   * {@link AlertMutedPeriod}s during which alerts from this sensor have been muted.
   */
  readonly mutedPeriods?: C3.Array<AlertMutedPeriod | null>;
  withMutedPeriods(mutedPeriods: C3.Array<AlertMutedPeriod | null> | Array<IAlertMutedPeriod | null>): Sensor;

  /**
   * Populated when this Sensor's {@link PointPhysicalMeasurementSeries} are normalized.
   * This indicates the earliest data point across all {@link PointPhysicalMeasurementSeries} for this Sensor.
   */
  readonly earliestPointSeriesDate?: DateTime | null;
  withEarliestPointSeriesDate(earliestPointSeriesDate: DateTime | Date | string | null): Sensor;

  /**
   * The history of operational statuses of the sensor.
   * @see Sensor#operationalStatus
   */
  readonly operationalStatusHistory?: C3.Array<SensorOperationalStatus | null>;
  withOperationalStatusHistory(operationalStatusHistory: C3.Array<SensorOperationalStatus | null> | Array<ISensorOperationalStatus | null>): Sensor;

  /**
   * Represents an array of sensor data report of a time window.
   */
  readonly dataReport?: C3.Array<SensorDataReport | null>;
  withDataReport(dataReport: C3.Array<SensorDataReport | null> | Array<ISensorDataReport | null>): Sensor;

  /**
   * Populated when this Sensor's {@link PointPhysicalMeasurementSeries} are normalized.
   * This indicates the latest data point across all {@link PointPhysicalMeasurementSeries} for this Sensor.
   */
  readonly latestPointSeriesDate?: DateTime | null;
  withLatestPointSeriesDate(latestPointSeriesDate: DateTime | Date | string | null): Sensor;

  /**
   * The fall back {@link Unit} for this sensor given that the sensor has no series to inform the unit.
   */
  readonly fallbackUnit?: Unit | null;
  withFallbackUnit(fallbackUnit: IUnit | null): Sensor;

  /**
   * The {@link ProtectionLoop} this {@link Sensor} belongs to.
   */
  readonly protectionLoopRelation?: ProtectionLoopSensorRelation | null;
  withProtectionLoopRelation(protectionLoopRelation: IProtectionLoopSensorRelation | null): Sensor;

  /**
   * The current {@link AlertMutedPeriod} for this sensor, if one exists.
   */
  readonly currentMutedPeriod?: AlertMutedPeriod | null;
  withCurrentMutedPeriod(currentMutedPeriod: IAlertMutedPeriod | null): Sensor;

  /**
   * Indicates whether alerts for this sensor are currently muted.
   */
  readonly isMuted?: boolean;
  withIsMuted(isMuted: boolean): Sensor;

  /**
   * Count of #openSensorAlerts. See {@link SensorHealthAlert} for more info.
   *
   * As a calc field, this should not be sorted on.
   */
  readonly numOpenSensorAlerts?: number | null;
  withNumOpenSensorAlerts(numOpenSensorAlerts: number | null): Sensor;

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): Sensor | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): Sensor | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): Sensor | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Sensor | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Sensor;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Sensor;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Sensor;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Sensor | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Sensor | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Sensor;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Sensor;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Sensor;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Sensor;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): Sensor;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): Sensor;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Sensor;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Sensor;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): Sensor;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): Sensor;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): Sensor;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Sensor;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Sensor;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Sensor;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Sensor;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): Sensor;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): Sensor;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): Sensor;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): Sensor;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): Sensor;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): Sensor;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Sensor;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Sensor;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Sensor;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Sensor;

  mergeJson(json: any | null): Sensor;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Sensor;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Sensor;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Sensor | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Sensor | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Sensor | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Sensor | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Sensor | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Sensor | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Sensor | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Sensor | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Sensor | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Sensor;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Sensor;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Sensor;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Sensor;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Sensor;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): Sensor;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Sensor | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Sensor;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): Sensor;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Sensor;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Sensor>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Sensor;

  /**
   * API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
   * @return a list of metrics
   */
  static listMetrics(): C3.Array<Metric | null>;

  /**
   * List of simple and compound metrics for this type
   * @return ListMetricsResult
   */
  static listMetricsByKind(): ListMetricsResult | null;

  /**
   * Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
   * @return the SimpleMetric for the source type or parent type based on whats present
   */
  static getSimpleMetric(metricName: string): SimpleMetric | null;

  /**
   * API to be used for evaluating single source with single metric
   * @param spec
   *          The spec which specifies the sourceId / start / end / metricName / grain
   * @return a Timeseries for the given spec
   */
  static evalMetric(spec?: EvalMetricSpec | null): Timeseries<any> | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  static evalMetrics(spec?: EvalMetricsSpec | null): EvalMetricsResult | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return stream of evaluation containing multiple source and multiple metrics one source at a time
   */
  static evalMetricsStream(spec?: EvalMetricsSpec | null): EvalMetricsResultStream | null;

  /**
   * This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
   * Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
   * this api will be handy for just accessing the scalar value easily
   * @param spec
   *          EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
   *          The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
   *          and stick it in as the scalar value with the appropriate unit
   * @return The map of srcId -> expression -> Aggregated value with unit
   */
  static evalAggregateMetrics(spec?: EvalMetricsSpec | null): C3.Map<string | null, C3.Map<string | null, Dimension | null>>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information
   * @return 1 timeseries which is an aggregation of all the sources' timeseries
   */
  static rollupMetric(spec?: RollupMetricSpec | null): Timeseries<any> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetrics(spec?: RollupMetricSpec | null): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetricsWithMetadata(spec?: RollupMetricSpec | null, overrideMetrics?: C3.Array<Metric | null>): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * Returns all the variables in the given expression
   * @param expression
   *                The expression for which you need to find variables
   * @return a list of all the variables in the metric expression
   */
  static metricVariables(expression: string): C3.Array<MetricVariable | null>;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return the result which contains the result of metric evaluations for various sources
   */
  static evalMetricsWithMetadata(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResult | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return stream of result which contains the result of metric evaluations for various sources one source at a time
   */
  static evalMetricsWithMetadataStream(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResultStream | null;

  /**
   * The api should be used to export all the source data to s3
   * This includes extracting the relational data, timeseries data and tsDecl data
   * It internally creates a map reduce job to write data to s3
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @param numObjPerFile (optional)
   *          Number of objects per file to be created in S3
   * @param typeForSrcIds (optional)
   *          If this type is specified then ids for exporting src type objects will be picked from this type and not
   *          from the spec object
   * @return the export job object for tracking status
   */
  static exportMetricsDataJob(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null, numObjPerFile?: number | null, typeForSrcIds?: Type | null): Export | null;

  /**
   * API used to import all the exported data in s3
   * @param filePrefix (optional)
   *          Optional filePrefix to used to get files from S3
   * @return the import job object for tracking status
   */
  static importMetricsDataJob(filePrefix?: string | null): Import | null;

  /**
   * The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
   * This includes extracting the relational data, timeseries data and tsDecl data
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static extractMetricsData(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null): ExportedObj | null;

  /**
   * API is supposed to import the data that was exported using the extractMetricsData api
   * @param input
   *          Input is a map of typeName to array of array of objects grouped by a batch size
   *          ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static importMetricsData(input?: ExportedObj | null): void;

  /**
   * This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
   * via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
   * There is no invalidation of this cache and should be refreshed manually
   * @param ids
   *          The src ids that need to be cached.
   * @param metricNames (optional)
   *          The list of metrics that need to be cached. This could be simple and/or compound or a mix.
   *                                          This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param startDate (optional)
   *          Optional evaluation start date for caching metrics
   * @param endDate (optional)
   *          Optional evaluation end date for caching metrics
   */
  static refreshMetricsCache(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null): void;

  /**
   * This api should be used to kick of the metrics cache refresh map reduce job
   * @param metricNames (optional)
   *                The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
   *                This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param filter (optional)
   *                Filter out certain source ids
   * @param startDate (optional)
   *                Optional start date for caching metrics
   * @param endDate (optional)
   *                Optional end date for caching metrics
   */
  static startMetricsCacheRefreshJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null): MetricsCacheRefreshJob | null;

  /**
   * This provides the status for the metrics cache refresh job
   */
  static metricsCacheRefreshJobStatus(): MapReduceStatus | null;

  /**
   * API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
   * for a metric source combination in a given time range
   * @param ids
   *         list of ids that stats need to be computed for
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static generateMetricsStats(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): void;

  /**
   * Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param batchSize
   *         No of sources to be included in 1 map reduce job: Default: 100
   * @param filter
   *         Filter criteria on the source type
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static startMetricsStatsJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): MetricsStatsJob | null;

  /**
   * API to report the status of currently running metrics stats job
   */
  static metricsStatsJobStatus(): MapReduceStatus | null;

  /**
   * Provides histogram data for a given set of ids and metrics.
   *
   * The period of histogram data can be specified through either period parameter or start and end parameters,
   * and period parameter has higher priority than start and end parameters which means the internal API will choose
   * period other than start and end if period parameter is available.
   *
   * @param ids
   *          Array of source ids
   * @param metricName
   *          CompoundMetricId
   * @param period
   *          Time period (e.g., last12m, 2012, 2013, 2014)
   * @param start
   *          Start of benchmarking period
   * @param end
   *          End of benchmarking period
   * @param ignoreZeroValues
   *          Flag indicates whether to ignore zero values.
   *          If true, any points with a zero value will not be factored into the histogram
   * @param binningType
   *          Whether to bin by 'value' or 'quantile'
   * @param numberBins
   *          How many bins to split the data into
   * @return Histogram data contains buckets info and data info
   */
  static getDistribution(ids: C3.Array<string | null> | null, metricName: string, period?: string | null, start?: DateTime | null, end?: DateTime | null, ignoreZeroValues?: boolean, binningType?: string | null, numberBins?: number | null): HistogramEvaluationResult | null;

  /**
   * Compute stats for every timeseries obtained by the metric / source combination
   * @param spec
   *          Provide the spec for which stats need to be computed
   * @return stats for every timeseries obtained for every source metric combination
   */
  static evalMetricsStats(spec: EvalMetricsSpec): C3.Map<string | null, C3.Map<string | null, TimeseriesStats | null>>;

  /**
   * The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
   * bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
   * This ends up re-using the fnd cache/ asTimeseries cache too
   * Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
   * @param spec
   *          EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
   *          going to be called with
   * @return a cache key that eval metrics produces for this spec (this cache is on the current action)
   */
  static startEvalMetricsBatch(spec: EvalMetricsSpec): string | null;

  /**
   * Cleans up and closes the eval metrics batch
   * @param keys
   *              Cleans up the eval metrics batch objects for the given cache keys
   * @return the current number of the cached evaluator instances
   */
  static endEvalMetricsBatch(key: string): number | null;

  /**
   * Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
   * @param key
   *              Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
   * @param start
   *              start date for metrics evaluation
   * @param end
   *              end date for metrics evaluation
   * @return EvalMetricsResult for the given start and end and the spec from the cached key
   */
  static evalMetricsBatch(key: string, start: DateTime, end: DateTime): EvalMetricsResult | null;

  /**
   * API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
   * @param spec
   *          Eval metrics spec to be used to figure out the eval metrics batch key
   * return the eval metrics batch key for the spec or null if one does not exist
   */
  static evalMetricsBatchKey(spec: EvalMetricsSpec): string | null;

  /**
   * Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
   * This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
   * filter/ limit / include do not match as is it will return false.
   * @param this
   *          Parent EvalMetricsSpec which acts as the superset
   * @param child
   *          Child EvalMetricsSpec which acts as the subset
   * @return whether child is a subset of this EvalMetricsSpec
   */
  static isSubset(parent: EvalMetricsSpec, child: EvalMetricsSpec): boolean;

  /**
   * API to estimate the size of objects in eval metrics batch cache.
   * This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
   * info to be used during evaluation), normalized data cache, and tsDecl cache
   * @param key
   *        Eval Metrics Batch cache key for which size needs to be estimated
   * @return object that gives the size of evaluator, normalized data cache and tsDecl cache
   */
  static estimateEvalMetricsBatchCacheSize(key: string): EvalMetricsBatchCacheSize | null;

  /**
   * Lists all the cached keys in the eval metrics batch
   * @return list of keys
   */
  static listEvalMetricsBatchKeys(): C3.Array<string | null>;

  /**
   * Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
   * src type fetch spec
   * @param Eval metrics spec that would be used for evalMetrics
   * @return EvalPlan with hierarchies and srcTypeFetchSpec populated
   */
  static getExportEvalPlan(spec?: EvalMetricsSpec | null): EvalPlan | null;

  /**
   * For internal use only:
   * Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
   * with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
   */
  static generateEvalMetricsSpec(spec: EvalMetricsSpec, overrideMetrics?: C3.Array<Metric | null>): Pair<EvalMetricsSpec | null, C3.Array<Metric | null>>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<Sensor | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<Sensor | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<Sensor | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<Sensor | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
   * Support column alias for evaluate & evalMetrics by passing an ObjNode
   * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
   * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
   */
  static eval(spec?: EvalSpec | null): Data | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluate(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
   * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
   * conditions are met.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates a single projection expression for timeseries data.
   *
   * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
   * or {@link MetricEvaluatable.evalMetrics} should be used instead.
   *
   * @param spec
   *           Specification of the projection expression and which timeseries to evaluate.
   * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
   *
   * @see MetricEvaluatable
   */
  static tsEval(spec: TSEvalSpec): Obj | null;

  /**
   * All features defined for this type
   */
  static features(): Stream<Feature | null>;

  /**
   * Evaluate i.e. retrieve data for a given feature for this instance
   * @param feature
   *        feature name used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines, then:
   * ```python
   * wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
   * wt1.evalFeature(feature="activePowerAvgFeature", start='2018-01-01', end='2022-01-01')
   * wt1.evalFeature(feature="generatorRotationSpeedAvgFeature", start='2018-01-01', end='2022-01-01')
   * ```
   */
  evalFeature(feature: string, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set for this instance
   * @param featureSet
   *        featureSet used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines.
   * We create (or already have a) Feature.Set like below:
   * ```python
   * wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * wt1.evalFeatureSet(featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   */
  evalFeatureSet(featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set and list of instances
   * order of subject column in returned data will be same as that of provided subject batch
   *
   * @param batch
   *        subjects used to read data
   * @param featureSet
   *        feature set used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Let's assume that we create (or already have a) Feature.Set like below:
   * ```python
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * c3.WindTurbine.evalFeatureSetBatch(batch=['TURBINE-1', 'TURBINE-1'],  featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   *
   * For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
   * it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
   * and the first 10 subjects that has such valueType in the evaluated data.
   * User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
   *
   * e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
   * while for sub3 the ValueType is Double.
   */
  static evalFeatureSetBatch(batch: C3.Array<Sensor | null>, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set and instances satisfying a filter expression
   * Please note that the output will have subjects ordered in the same way as fetched from the db using the provided filter.
   * By default, its in the ascending order of the `id` field.
   *
   * @param featureSet
   *        feature set used to read data
   * @param filter
   *        filter used to filter subjects associated with the feature set
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Let's assume that we create (or already have a) Feature.Set like below:
   * ```python
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * c3.WindTurbine.evalFeatureSetBatch(filter="name=='TURBINE-1'", featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   * Please note that all the nuances of merging multiple features together are part of the Feature.Set itself.
   * The above call will allow us to eval feature set along in a specific timerange exposed via EvalFeatureSpec.
   *
   * For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
   * it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
   * and the first 10 subjects that has such valueType in the evaluated data.
   * User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
   *
   * e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
   * while for sub3 the ValueType is Double.
   */
  static evalFeatureSetBatch(filter: string, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features for this instance
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * wt.evalFeatures(features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  evalFeatures(features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features and list of instances
   * @param batch
   *        subjects used to read data
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * c3.WindTurbine.evalFeaturesBatch(batch=['TURBINE-1', 'TURBINE-1'], features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  static evalFeaturesBatch(batch: C3.Array<Sensor | null>, features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features and instances satisfying a filter expression
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param filter
   *        filter used to filter subjects associated with the features
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * c3.WindTurbine.evalFeaturesBatch(filter="name=='TURBINE-2'", features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  static evalFeaturesBatch(filter: string, features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Creates a Data instance with two columns, subject and datetimes
   */
  dataFromDates(dates?: C3.Array<DateTime | null>): Data | null;

  /**
   * Creates a Data instance with two columns, subject and timeranges
   */
  dataFromTimeRanges(timeRanges?: C3.Array<TimeRange | null>): Data | null;

  /**
   * Used internally to fetch as a stream (e.g. FetchResultOvi)
   */
  static fetchOvi(spec?: FetchSpec | null): any;

  /**
   * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
   *
   * @param include
   *           Optional include spec to retrieve.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  get(include?: string | null): Sensor | null;

  /**
   * Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
   * to fetch the obj, it will not be returned.
   *
   * @param include
   *           Optional include spec to retrieve.  Note that the include spec should reference only fields that are
   *           valid in the returned obj's type.  Otherwise an error may be thrown.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  getSpecific(include?: string | null): Sensor | null;

  /**
   * Function to check if an obj was already fetched with an include that contains at least the fields of a specified
   * include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
   * if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
   * specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
   * the behavior.
   *
   * @param spec
   *           Spec that controls various aspects of the function's behavior.
   * @return instance of the obj with all requested fields.
   */
  getMissing(spec: GetMissingSpec): Sensor;

  /**
   * Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
   * that are stored in Cassandra.
   *
   * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
   * apis as fast as direct IO apis.
   * Use with caution!!!
   *
   * @param include
   *           Optional include spec to retrieve.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  getDirect(include?: string | null): Sensor | null;

  /**
   * Applies a reverse edit (e.g. VersionEdit) to an instance.
   *
   * @param versionEdit
   *        Reverse edit to apply
   *
   * @return The instance after applying the reverse edit.
   */
  applyReverseEdit(versionEdit: VersionEdit): Sensor;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Sensor | null;

  /**
   * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance already exist.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
   *         will have only those fields populated. Otherwise only the id field will be populated.
   */
  create(spec?: UpsertSpec | null): Sensor | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
   *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static createBatch(objs: C3.Array<Sensor | null> | null, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
   *          `spec.includeObjsInResults`.
   */
  static createBatchObjStream(objs: Stream<Sensor | null> | null, spec?: CreateBatchObjStreamSpec | null): ObjList<Sensor | null> | null;

  /**
   * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance does not already exist.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
   *         obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  update(srcObj?: Sensor | null, spec?: UpsertSpec | null): Sensor | null;

  /**
   * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
   * exception will be thrown.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
   *        doesn't already exist.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
   *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  upsert(srcObj?: Sensor | null, spec?: UpsertSpec | null): Sensor | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
   * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
   * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
   * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
   * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
   *
   * For collections, the merge operation is applied to every element in the source and updated collection rather than
   * merging the collections themselves.  This means that every element will be merged with the element with the same
   * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
   * add/append elements to a collection.
   *
   * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
   *
   * If the operation fails an exception will be thrown.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   *
   * @see Mergespec#csvInclude
   */
  merge(spec?: MergeSpec | null): Sensor | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   */
  merge(mergeInclude: string, spec?: MergeSpec | null): Sensor | null;

  /**
   * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   *
   * @return The created or updated obj.
   */
  touch(spec?: TouchSpec | null): Sensor | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
   *
   * @param objs
   *        Updated objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
   *        replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateBatch(objs: C3.Array<Sensor | null> | null, srcObjs?: C3.Array<Sensor | null>, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
   * called again to provide updated instances to be updated. If the operation fails for other reasons and
   * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateObjs(objs: λSupplier<C3.Array<Sensor | null>>, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Updated or new objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
   *        existing one if it doesn't already exist.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertBatch(objs: C3.Array<Sensor | null> | null, srcObjs?: C3.Array<Sensor | null>, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
   * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
   * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
   * {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertObjs(objs: λSupplier<C3.Array<Sensor | null>>, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
   * objs will be considered an error.
   *
   * @param objs
   *        Objs to touch.
   *
   * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
   *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static touchBatch(objs: C3.Array<Sensor | null> | null, spec?: TouchSpec | null): ObjList<Sensor | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#mergeInclude
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: C3.Array<Sensor | null> | null, spec?: MergeSpec | null): ObjList<Sensor | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: C3.Array<Sensor | null> | null, mergeInclude: string, spec?: MergeSpec | null): ObjList<Sensor | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
   * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
   * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
   * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
   * operation is described in the {@link merge} function.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   *
   * @param objs
   *        Lambda providing objs to be merged
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeObjs(objs: λSupplier<C3.Array<Sensor | null>>, mergeInclude: string, spec?: MergeSpec | null): ObjList<Sensor | null> | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
   * functions, the set of fields to be merged can be controlled by specifying an include spec in either
   * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
   * can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
   * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: Sensor | null, spec?: MergeAllSpec | null): number | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
   * controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
   * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: Sensor | null, mergeInclude: string, spec?: MergeAllSpec | null): number | null;

  /**
   * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
   *
   * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param spec
   *         Various parameters that control the operation of function.
   * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
   *
   * @see Ann.Db#archive
   */
  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
   * reported in the returned {@link ObjList}.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param objs
   *         Objs to remove.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
   *
   * @see Ann.Db#archive
   */
  static removeBatch(objs: C3.Array<Sensor | null> | null, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Removes multiple instances of a C3 type based.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param spec
   *         Spec controlling the operation
   * @param confirm
   *         Must be specified as true.  Otherwise request will be rejected.
   * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
   *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
   *         connection can't return the value).  In those cases, this will return -1.
   */
  static removeAll(spec?: RemoveAllSpec | null, confirm: boolean): number;

  /**
   * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
   *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static replace(objs: C3.Array<Sensor | null> | null, spec?: UpsertSpec | null): ObjList<Sensor | null> | null;

  /**
   * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
   * {@link removeBatch} functions). If the operation fails an exception will be thrown.
   *
   * @return The recovered obj instance with all of its fields populated.
   *
   * @see Ann.Db#archive
   */
  unremove(): Sensor | null;

  /**
   * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
   * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
   * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
   * generate the id based on other field values present in the input.  Note that if an instance already exists with the
   * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
   * existing instances for performing updates.
   */
  generateUniqueId(): string;

  /**
   * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be created.  The objs will be the entire input objs being created.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeCreate(objs: C3.Array<Sensor | null> | null): ObjList<Sensor | null>;

  /**
   * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be updated.  By default the objs will be the complete original source
   *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
   *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
   *           will have at least those requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeUpdate(objs: C3.Array<Sensor | null> | null): ObjList<Sensor | null>;

  /**
   * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be removed.  By default the objs will be the complete original source
   *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
   *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
   *           requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeRemove(objs: C3.Array<Sensor | null> | null): ObjList<Sensor | null>;

  /**
   * Callback that is called synchronously during a request that creates objs after those objs are created.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were created.  The objs will already have been created.  By default, only the id
   *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterCreate(objs: C3.Array<Sensor | null> | null): C3.Array<ObjError | null>;

  /**
   * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterUpdate(objs: C3.Array<Sensor | null> | null): C3.Array<ObjError | null>;

  /**
   * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
   * @return List of any errors that were encountered.
   */
  static afterRemove(objs: C3.Array<Sensor | null> | null): C3.Array<ObjError | null>;

  /**
   * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
   * valid for C3 types that are stored in Cassandra.
   *
   * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
   * apis as fast as direct IO apis.
   * Use with caution!!!
   *
   * @param clearNullValues
   *           If true then map keys with null values will be cleared.
   * @return The created or updated obj with only the id populated if it exists and null otherwise.
   */
  upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

  /**
   * Begin an upsert operation to the secondary data store.
   *
   * IMPORTANT:
   *
   * 1. This is only valid for types that specify a secondary datastore.
   * 2. Currently only types that are not extendable are supported.
   *
   * @param type
   *           Type that the upsert operation is for.
   *
   * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
   */
  static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

  /**
   * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
   * defaulting to using multi-row sql for the deletes.
   *
   * @param spec
   *        Spec controlling the operation
   * @param confirm
   *        Must be specified as true.  Otherwise request will be rejected.
   */
  static clearCollection(spec?: ClearCollectionSpec | null, confirm: boolean): void;

  /**
   * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were created.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static created(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static updated(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
   * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
   * archive operation or it is physically removed.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static removed(txn: Transaction): void;

  /**
   * Used internally to evaluate as a stream
   */
  static evaluateOvi(spec?: EvaluateSpec | null): any;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
   * as stream of Arrow batches.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Refreshes calc fields for objs for a type based on a spec.
   *
   * @param spec
   *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
   *        other options that control the operation.
   * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshCalcFields(spec?: RefreshCalcFieldsSpec | null): RefreshCalcFieldsBatchJob | null;

  /**
   * Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
   * specified fields will be refreshed.
   *
   * @param spec
   *        Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
   *        other options that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec | null): RefreshDefaultFieldsBatchJob | null;

  /**
   * Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
   * and no types that extend them have unique indexes, this does nothing.
   *
   * @param spec
   *        Spec that indicates which objs to refresh unique indexes for along with other options that control
   *        the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec | null): RefreshUniqueIndexesBatchJob | null;

  /**
   * Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
   * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
   *
   * @param spec
   *        Indicates which objs to refresh analytics for and what time range to use, along with other options that
   *        control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   *
   * @see AnalyticsContainer
   * @see SimpleMetric
   */
  static refreshAnalytics(spec?: RefreshAnalyticsSpec | null): RefreshAnalyticsBatchJob | null;

  /**
   * Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
   * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
   * {@link SimpleMetric.cacheInterval} are considered.
   *
   * @param spec
   *        Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
   *        that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   *
   * @see SimpleMetric
   */
  static refreshMetrics(spec?: RefreshMetricsSpec | null): RefreshMetricsBatchJob | null;

  /**
   * Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
   * function will be called.  For those that have both, only the updated will be called.  If only created should be
   * called in all cases, set the 'spec.createdOnly' field to true.
   *
   * @param spec
   *           Indicates which objs to call the functions for, along with other options that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec | null): RunCreatedOrUpdatedBatchJob | null;

  /**
   * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
   *
   * @param spec
   *        Indicates which types of dependencies should be refreshed along with other parameters that control the
   *        operation of the function.
   */
  static refreshDeps(spec?: RefreshDepsSpec | null): void;

  /**
   * Performs the refresh operation.
   *
   * @param type
   *        Type being refreshed.
   * @param jobType
   *        Batch job type to for refresh.
   * @param spec
   *        Parameters for the refresh operation.
   *
   * @return The batch job that was started.
   */
  static processRefresh(type: Type, jobType: Type, spec: ObjBatch): RefreshBatchJob<any, any, any> | null;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportData(spec?: StartImportDataSpec | null): PushStream<Sensor | null>;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<Sensor | null>;

  /**
   * Imports instances into a C3 type from a file stored in Cassandra.
   *
   * @param spec
   *        Various parameters that control the operation of function.
   * @param async
   *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
   *        synchronous)
   * @return various statistics and errors for the import operation.
   */
  static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;

  /**
   * Exports instances of a C3 type to Cassandra.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return A reference to the Content obj created that contains the exported data and various statistics about the
   *         export.
   */
  static exportData(spec: ExportDataSpec): ExportDataResult | null;

  /**
   * Exports instances of a C3 type to S3 for importing into Redshift.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return Number of objs exported.
   */
  static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): Sensor | null;

  /**
   * Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
   * returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
   * {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
   * the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
   * separate query) to return the requested data from the reference.
   *
   * Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
   * way other than what is described above will ALWAYS return false.
   *
   * @return the current value of the {@link meta#referenceInvalid} field for the instance.
   *
   * @see Meta#referenceInvalid
   */
  referenceInvalid(): boolean;

  /**
   * Generates new unique ids for C3 Obj instances
   *
   * @param count
   *           Number of ids to generate.  Default is 1.
   * @return The requested number of new unique ids.
   */
  static generateNewIds(count?: number | null): C3.Array<string | null>;

  /**
   * Generates synthetic data for a C3 type.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return Various statistics for the operation.
   */
  static generateData(spec?: GenerateDataSpec | null): ActionStats | null;

  /**
   * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
   */
  static profileData(spec?: FetchSpec | null): GenerateDataSpec | null;

  /**
   * Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
   * such that a subsequent upsert will create a new instance.
   *
   * @return The requested obj without any of its identifying fields.
   */
  withoutIdentity(): Sensor | null;

  /**
   * Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
   * type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
   * that type's base type chain.
   *
   * @return The type hierarchy for the requested obj.
   */
  typeOf(): EntityType | null;

  /**
   * Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
   * C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
   * as that type's base type chain.
   *
   * @param objs
   *           Obj instances to get the type hierarchy for.
   * @return The type hierarchies for the requested objs.
   */
  static typeOfBatch(objs: C3.Array<Sensor | null> | null): C3.Array<EntityType | null>;

  /**
   * @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
   *         The type itself is returned in all other cases.
   */
  static getRootType(): Type | null;

  /**
   * Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
   * internally during provisioning and should not need to be called manually.
   *
   * @param throwOnNonUniqueIndexError
   *        true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
   *        false, that will be considered benign as it means some other thread process is creating the necessary
   *        indexes.
   *
   * @return True if the operation caused any DLL changes and false if did not.
   */
  static upsertCollection(throwOnNonUniqueIndexError?: boolean): boolean;

  /**
   * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
   *
   * @type
   *         The Type to validate the schema of.
   * @return true if the schema was updated in this JVM/app
   */
  static validateSchema(type: Type): boolean;

  /**
   * Callback that is called synchronously in response to a call to {@link upsertCollection}.
   */
  static collectionUpserted(): void;

  /**
   * Callback that is called synchronously in response to a call to {@link clearCollection}.
   */
  static collectionCleared(): void;

  /**
   * Used only by DatabaseTestEngine
   */
  static dbEcho(template?: Sensor | null, count?: number | null, sendBack?: boolean): number | null;

  /**
   * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
   * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
   * condition is considered to be when there is no entry in the reference type for the obj being validated.
   *
   * @param spec
   *           Indicates which references in which types/fields to check.
   * @return List of references that were found to be invalid along with details of why they are invalid.
   */
  static checkReferences(spec?: CheckReferencesSpec | null): CheckReferencesResult | null;

  /**
   * Determines is a path is valid as a filter expression in a fetch call.
   *
   * @param path
   *           Path to validate.
   * @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
   *         itself is invalid, an exception is thrown
   */
  static validatePath(path: string): ValidatePathResult | null;

  /**
   * @return The db table name for relational types and the column family name for Cassandra types
   */
  static schema(): SchemaInfo | null;

  /**
   * Gets all of the dependencies that could invalidate a stored calc field.
   *
   * @param fieldName
   *         The name of the field to find all dependencies of.
   * @return A list of dependencies that can invalidate the stored calc field.
   */
  static calcFieldDeps(fieldName: string): C3.Array<string | null>;

  /**
   * Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
   * IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
   *
   * @param range
   *        Time range to invalidate for.  If null, invalidation will be across all time.
   * @param fields
   *        Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
   *        not used as we don't keep dependency info at the field level.
   * @param autoCommit
   *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
   *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
   *        that state until they are either committed or aborted.
   */
  invalidateTsHeader(range?: TimeRange | null, fields?: C3.Array<string | null>, autoCommit?: boolean): void;

  /**
   * Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
   * {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
   *
   * @param tsInvalidations
   *        Time range to invalidate for.  If null, invalidation will be across all time.
   * @param autoCommit
   *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
   *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
   *        that state until they are either committed or aborted.
   */
  static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation | null>, autoCommit?: boolean): void;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
   * call action for each batch of `spec.batchSize`.
   *
   * @param spec
   *         A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
   * @param action
   *         The lambda to apply to each batch of objs.
   *
   * @return the ID of the started ObjBatchMapReduceJob
   */
  static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<C3.Array<Obj | null>, any>): string;

  /**
   * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
   * calling a transform for it.
   *
   *
   * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
   */
  static callbackLogic(objs: C3.Array<Sensor | null> | null, callback?: λFunction<Sensor | null, Sensor | null> | null): ObjList<Sensor | null>;

  /**
   * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
   * calling a transform for it.
   */
  static afterCallbackLogic(objs: C3.Array<Sensor | null> | null, callback?: λFunction<Sensor | null, Sensor | null> | null): C3.Array<ObjError | null>;

  /**
   * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
   *         be only 1.  If it does, then there will be multiple.
   */
  static idColNames(): C3.Array<string | null>;

  /**
   * True if this field is unique
   */
  static isUnique(fieldPath: string): boolean;

  /**
   * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
   * themselves, or there is a unique index that is a subset of the specified fields.
   */
  static isUnique(fieldPaths: C3.Array<string | null>): boolean;

  /**
   * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
   * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
   * @param name
   *          The name of field to check
   * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
   */
  static isSystemField(name: string): boolean;

  /**
   * Get a filter that can be used to filter this type by {@link Facility}.
   *
   * @param facilities
   *        The list of {@link Facility}s to filter by.
   * @returns
   *        A string serialized {@link Filter} that can be used to filter this type by {@link Facility}.
   */
  static getFacilityFilter(facilities?: C3.Array<Facility | null>): string | null;

  /**
   * Determines the the current user can read this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can read this instance.
   */
  myUserCanRead(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current update can read this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can update this instance.
   */
  myUserCanUpdate(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current user can remove this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can remove this instance.
   */
  myUserCanRemove(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current user can modify the ACL for this instance. Note that it requires `acl` field to
   * be populated. If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can read this instance.
   */
  myUserCanModifyAcl(getIfAclIsMissing?: boolean): boolean;

  /**
   * `true` if ACL enforced for current user and the specified type.
   */
  static isAclEnforcedForMyUser(type: Type): boolean;

  /**
   * Gets the default acl for newly created objs of the specified type for my user.  For a type that is currently
   * enforcing acl (e.g. enabled via {@link EnableAclPrivilege} or {@link Ann.Db#enforceAcl}, if the obj is being
   * created by anyone other than the authorizer, the default entry will grant the creator full access.  This
   * default entry will be removed if `populateAcl` is called and that creates entries specified by the
   * {@link AclPrivilege} entries.
   *
   * @param type
   *        Type to get the default acl for.  If this type does not mixin {@link AclEnabled}, then null will be
   *        returned.
   *
   * @return the default acl for newly created objs of the specified type for my user.
   */
  static defaultAclForMyUser(type: Type): AclEntry | null;

  /**
   * Populates the acl entries for the specified Objs. The acl entries will be populated based on the
   * {@link AclPrivilege} entries defined for the type.
   *
   * @param objs
   *        List of objs to populate the acls for. If null, the acls for all entries will be populated.
   */
  static populateAcl(objs?: C3.Array<Sensor | null>): number | null;

  /**
   * Refreshes acl entries for the specified Objs as determined by the {@link RefreshAclsSpec}. The acl entries
   * will be refreshed based on the {@link AclPrivilege} entries defined for the type.
   *
   * @param spec
   *          Indicates which objs to refresh acls for along with other options that control the operation.
   * @return
   *          If {@link RefreshAclsSpec.async} is true, returns the BatchJob that was created/used for processing the
   *          request, null otherwise.
   */
  static refreshAcls(spec?: RefreshAclsSpec | null): Obj | null;

  /**
   * Creates (or updates existing) entry with all but modify ACL permissions.
   */
  grantMemberReadUpdateRemove(member: AccessControlEntity): Sensor;

  /**
   * Merges an acl entry to the acl for an obj but does not persist the changes.  If an existing entry for the
   * member exists with the same source as the new one, the permissions granted by the new one will be added to
   * that entry, otherwise a new entry will be created/added.
   *
   * @return the obj with the new acl after merging the indicated entry.
   */
  mergeAclEntry(entry: AclEntry): Sensor;

  /**
   * Merges acl entries to the acl for an obj but does not persist the changes.  If an existing entry for the
   * member exists with the same source as the new one, the permissions granted by the new one will be added to
   * that entry, otherwise a new entry will be created/added.
   *
   * @return the obj with the new acl after merging the indicated entry.
   */
  mergeAclEntries(entries: C3.Array<AclEntry | null> | null): Sensor;

  /**
   * @return True if there are {@link AclPrivilege} entries defined for the type.
   */
  static hasPrivileges(): boolean;

  /**
   * Returns true if the current user is allowed to skip authorization checks to access this instance without checking ACLs.
   */
  static skipAuthz(): boolean;

  /**
   * This private action is only used to check for ACL access when using Permission with dataPermission
   */
  static modifyAcl(): void;

  /**
   * Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
   *
   * @see typeIdent
   */
  static typeForTypeIdent(typeName: string, typeIdent: string | null, failIfMissing?: boolean): Type | null;

  /**
   * Utility method used to get the type ident value for a give sub type.
   *
   * @see typeIdent
   */
  static typeIdentForType(typeName: string, failIfMissing?: boolean): string | null;

  /**
   * return the typeIdent as a string
   */
  static myTypeIdent(): string | null;

  /**
   * For a Sensor, returns the {@link SensorMeasurementBounds} if
   * it exists. If the bounds have not been set previously, then
   * this function returns a `null`/`None` object.
   */
  getMeasurementBounds(): SensorMeasurementBounds | null;

  /**
   * Users may use this function to set the lower and upper operational
   * measurement bounds on the time series of Sensor values.
   * The two arguments to this function are optional. If neither of them
   * are provided, this function will raise an error. If only one of them is
   * provided, then only its value will be updated in the database.
   */
  setMeasurementBounds(lowerBound?: number | null, upperBound?: number | null): SensorMeasurementBounds;

  /**
   * Users may use this function to reset one or both bounds on the Sensor.
   * Reseting implies that the corresponding value in the database will be
   * deleted and will remain empty until it is set again using the
   * {@link setMeasurementBounds} function.
   */
  resetMeasurementBounds(boundsType: string): SensorMeasurementBounds;

  /**
   * Fetches sensors which stay below all thresholds for flatline and missing data. Populates {@link flatlinePercentage}
   * and {@link missingPercentage} in returned objects.
   *
   * Uses all {@link SensorDataSummary} entities which overlap with the queried {@link SensorDataSummarySpec#timeRange} to compute
   * a quick estimate of the percentage of data which is flatlined and missing. As such, the returned {@link flatlinePercentage}
   * and {@link missingPercentage} are actually across a time range which may be larger than the queried time range by up to a week
   * on either end.
   *
   * @param spec
   *     {@link SensorDataSummarySpec} which specifies which sensors are in scope, as well as the relevant interval and time range.
   * @param flatlinePercentage
   *     The threshold for how much data is flatlined. By default, "flatline" means that the sensor value has been the same for the last 6 hours.
   * @param missingPercentage
   *     The threshold for how much data is missing.
   * @param fetchSpec
   *     Additional optional {@link FetchSpec} used to control pagination. Only the `offset` and `limit` arguments are respected.
   * @param returnSensorsBelowAllThresholds
   *     If `true`, returns sensors which stay below all thresholds. If `false`, returns the sensors which break at least one threshold.
   * @param createMissingDataSummaries
   *     If `true`, creates {@link SensorDataSummary} entities for sensors and time ranges which do not have any.
   *     If `false`, does not create any new entities. Should only be set to `false` if the caller is certain that all relevant data summaries are
   *     already present.
   * @return
   *     All sensors in scope which meet all thresholds if returnSensorsBelowAllThresholds is true, or vice versa if false.
   */
  static fetchForDataThresholds(spec: SensorDataSummarySpec, flatlinePercentage: number, missingPercentage: number, fetchSpec?: FetchSpec | null, returnSensorsBelowAllThresholds?: boolean, createMissingDataSummaries?: boolean): FetchResult<Sensor | null> | null;

  /**
   * The function to know if a {@link Sensor} is normalized.
   */
  isNormalized(asOf?: DateTime | null): boolean;

  /**
   * Returns the latest Sensor values.
   *
   * @param sensorIds
   *     The list of sensor IDs to get values for.
   * @param asOf
   *     The time we want sensor values for. Used as the end of the evaluation period in metric evaluation. Defaults to now.
   * @param metricName
   *     The metric to use to evaluate the sensor value. Defaults to {@link ReliabilityMLConfig#sensorValueMetricName}.
   * @return map<string, double>
   *     A map from {@link Sensor#id} to sensor value.
   */
  static getSensorValues(sensorIds: C3.Array<string | null>, asOf?: DateTime | null, metricName?: string | null): C3.Map<string | null, number | null>;

  /**
   * Returns the expected sensor that this Sensor represents in the context of the provided {@link ReliabilityAsset}.
   */
  getExpectedSensorForAsset(asset: ReliabilityAsset): ExpectedSensor | null;

  /**
   * Returns a mapping of sensor IDs to their respective variances for the given sensor data summary spec.
   *
   * @param sensorDataSummarySpec
   *     The {@link SensorDataSummarySpec} to get sensor variances for.
   * @return map<string, double>
   *     A map from {@link Sensor#id} to sensor variance.
   */
  static getSensorVariancesForDataReport(sensorDataSummarySpec?: SensorDataSummarySpec | null): C3.Map<string | null, number | null>;

  /**
   * Returns the timestamp of the latest normalized data among all given sensors, or null if no normalized data
   * is present.
   */
  static getLatestDataTimestamp(sensors?: C3.Array<Sensor | null>): DateTime | null;

  /**
   * Returns the latest Sensor values.
   *
   * @param sensorIds
   *     The list of sensor IDs to get values for.
   * @param asOf
   *     The time we want sensor variances for. Used as the end of the evaluation period in metric evaluation. Defaults to now.
   * @param horizon
   *     The amount of time to look back to calculate variance. Defaults to {@link ReliabilityMLConfig#featureVarianceLookbackHorizon}.
   * @param interval
   *     The interval of evaluation. Defaults to {@link ReliabilityMLConfig#featureVarianceEvalInterval}.
   * @return map<string, double>
   *     A map from {@link Sensor#id} to sensor variance.
   */
  static getSensorVariances(sensorIds: C3.Array<string | null>, asOf?: DateTime | null, horizon?: number | null, interval?: string | null): C3.Map<string | null, number | null>;

  /**
   * Updates the monitor settings for the given sensors.
   *
   * @param sensorIds
   *     The list of sensor ids to update.
   * @param alertFlagsToSet
   *     The list of alert flags to set.
   */
  static updateMonitorSettings(sensorIds?: C3.Array<string | null>, alertFlagsToSet?: C3.Array<string | null>): void;

  /**
   * For a group of {@link Sensor}s that satisfy the filter expression, this function computes the
   * number of {@link Sensor}s that are deviating from the rest.
   *
   * @param filter
   *     A valid filter expression applicable to the Sensor Type that refers to a list of {@link Sensor}s.
   * @param spec
   *     A {@link SensorDeviationSpec} that provides the specifics of the computation of Sensor deviations.
   * @param deviationThreshold
   *     {@link Sensor}s may deviate from one another by a small amount and, yet, be considered similar. This defines the threshold beyond which deviations are considered large enough for {@link Sensor}s to be classified into different buckets.
   * @return int
   *     Returns the number of {@link Sensor}s that are deviating from the rest.
   */
  static evaluateNumberOfDeviatingSensors(filter: string, spec: SensorDeviationSpec, deviationThreshold?: number | null): number | null;

  /**
   * Returns the expected sensors that {@link Sensor}s represents in the context of the provided {@link ReliabilityAsset}.
   * Returns a map from {@link Sensor#id} to its {@link ExpectedSensor} or null, if one is not found.
   */
  static getExpectedSensorsForAsset(sensors: C3.Array<Sensor | null>, asset: ReliabilityAsset): C3.Map<string | null, ExpectedSensor | null>;

  /**
   * Return the url for the zip file including csvs for asset hierarchy data.
   */
  static getExportDataUrl(filename?: string | null, filter?: string | null): string | null;

  /**
   * The function to know if a {@link SensorHealthAlert} should be muted.
   */
  alertsAreMuted(timestamp: DateTime, alertType: ReliabilityAlertType): boolean;

  /**
   * Updates the operational status and duration for the given sensors.
   *
   * @param sensorIds
   *    The list of {@link Sensor} IDs to update.
   * @param operationalStatus
   *    The {@link SensorOperationalStatusTimedValue#status} of the {@link Sensor} of type {@link SensorOperationalStatusEnum}
   * @param duration
   *    The {@link SensorOperationalStatusTimedValue#endDate} to be added from DateTime.now() of type {@link Duration}
   */
  static updateOperatingStatusSettings(sensorIds: C3.Array<string>, operationalStatus: string, duration?: Duration | null): void;

  /**
   * Updates the #operationalStatus of {@link Sensor}s from [Faulty](SensorOperationalStatusEnum#FAULTY) to
   * [Operational](SensorOperationalStatusEnum#OPERATIONAL) if their [endDate](SensorOperationalStatusTimedValue#endDate)
   * has expired. This method is intended to be used by the `UpdateExpiredFaultySensors` cronjob.
   *
   * @param limit
   *     Maximum number of faulty {@link Sensor}s to process.
   */
  static updateExpiredFaultySensors(limit?: number | null): void;

  /**
   * Computes the pairwise deviations over all unique pairs of {@link Sensor}s by calling
   * {@link computeDeviationFromSensor} over a list of {@link Sensor}s.
   *
   * @param filter
   *     A valid filter expression applicable to the Sensor Type that refers to a list of {@link Sensor}s.
   * @param spec
   *     A {@link SensorDeviationSpec} that provides the specifics of the computation of Sensor deviations.
   * @return [Triple<string, string, double>]
   *     An array of {@link Triple}s where the first and second items are {@link Sensor#id}s and the third item is the deviation between the two {@link Sensor}s.
   */
  static computePairwiseSensorDeviations(filter: string, spec: SensorDeviationSpec): C3.Array<Triple<string | null, string | null, number | null> | null>;

  /**
   * Computes the deviation between this Sensor and another.
   *  Deviations are measured over a time range and aggregated to a single number, measured
   * as a percentage or in absolute value, according to the spec passed into the function.
   * @param other
   *     The sensor against which to compute deviations.
   * @param spec
   *     A {@link SensorDeviationSpec} that provides the parameters of the computation of Sensor deviations.
   * @return double
   *     The deviation between the two {@link Sensor}s.
   */
  computeDeviationFromSensor(other: Sensor, spec: SensorDeviationSpec): number | null;

  /**
   * Returns the nunber of redundant sensors which are considered pairwise-deviating
   * in the list of provided sensors.
   */
  static computeNumberDeviations(): number | null;

  /**
   * For a group of {@link Sensor}s that satisfy the filter expression, this function derives groups of
   * {@link Sensor}s that do not deviate from one another.
   *
   * @param filter
   *     A valid filter expression applicable to the Sensor Type that refers to a list of {@link Sensor}s.
   * @param spec
   *     A {@link SensorDeviationSpec} that provides the specifics of the computation of Sensor deviations.
   * @param deviationThreshold
   *     {@link Sensor}s may deviate from one another by a small amount and, yet, be considered similar.
   * This defines the thresholld beyond which deviations are considered large enough for {@link Sensor}s to be classified into different buckets.
   * @return [[string]]
   *     Each item in this array represents a bucket of similarly valued {@link Sensor}s. Each item in the inner array refers to a {@link Sensor#id}.
   */
  static evaluateGroupsOfSimilarValuedSensors(filter: string, spec: SensorDeviationSpec, deviationThreshold?: number | null): C3.Array<C3.Array<string | null>>;

  /**
   * Returns a list of sensors where the operational status has changed between a start and end date. The function looks
   * if the timestamp or the endDate of the #operationalStatus falls within the passed time frame.
   *
   * @param startDate
   *     The starting datetime to filter sensor status changes. If null, this is beginning of time.
   * @param endDate
   *     The ending datetime to filter sensor status changes.
   * @return [Sensor]
   *     An array of {@link Sensor}s which have changed its #operationalStatus between the start and end date.
   */
  static fetchSensorsWithOperationalStatusChange(startDate?: DateTime | null, endDate: DateTime): C3.Array<Sensor | null>;

  /**
   * Updates the sensor using the form object from the Asset Hierarchy grid.
   */
  static updateSensor(obj: any): void;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
