export interface ReliabilityAsset {

  readonly id: string;
  withId(id: string): ReliabilityAsset;

  readonly assetOnboardingSourceFile?: AssetOnboardingSourceFile | null;
  withAssetOnboardingSourceFile(assetOnboardingSourceFile: IAssetOnboardingSourceFile | null): ReliabilityAsset;

  readonly configurationLastUpdated?: DateTime | null;
  withConfigurationLastUpdated(configurationLastUpdated: DateTime | Date | string | null): ReliabilityAsset;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ReliabilityAsset;

  readonly name?: string | null;
  withName(name: string | null): ReliabilityAsset;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ReliabilityAsset;

  readonly version?: number | null;
  withVersion(version: number | null): ReliabilityAsset;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityAsset;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): ReliabilityAsset;

  readonly dataValidationRuns?: C3.Array<DataValidationRun | null>;
  withDataValidationRuns(dataValidationRuns: C3.Array<DataValidationRun | null> | Array<IDataValidationRun | null>): ReliabilityAsset;

  readonly latestDataValidationRun?: DataValidationRun | null;
  withLatestDataValidationRun(latestDataValidationRun: IDataValidationRun | null): ReliabilityAsset;

  readonly datasetPreparationRuns?: C3.Array<ReliabilityMlDatasetPreparationRun | null>;
  withDatasetPreparationRuns(datasetPreparationRuns: C3.Array<ReliabilityMlDatasetPreparationRun | null> | Array<IReliabilityMlDatasetPreparationRun | null>): ReliabilityAsset;

  readonly latestDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun | null;
  withLatestDatasetPreparationRun(latestDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  readonly completeDatasetPreparationRuns?: C3.Array<ReliabilityMlDatasetPreparationRun | null>;
  withCompleteDatasetPreparationRuns(completeDatasetPreparationRuns: C3.Array<ReliabilityMlDatasetPreparationRun | null> | Array<IReliabilityMlDatasetPreparationRun | null>): ReliabilityAsset;

  readonly latestCompleteDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun | null;
  withLatestCompleteDatasetPreparationRun(latestCompleteDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  readonly completeRiskDatasetPreparationRuns?: C3.Array<ReliabilityMlDatasetPreparationRun | null>;
  withCompleteRiskDatasetPreparationRuns(completeRiskDatasetPreparationRuns: C3.Array<ReliabilityMlDatasetPreparationRun | null> | Array<IReliabilityMlDatasetPreparationRun | null>): ReliabilityAsset;

  readonly latestCompleteRiskDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun | null;
  withLatestCompleteRiskDatasetPreparationRun(latestCompleteRiskDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  readonly countOfCompleteDatasetPreparationRuns?: number | null;
  withCountOfCompleteDatasetPreparationRuns(countOfCompleteDatasetPreparationRuns: number | null): ReliabilityAsset;

  readonly datasetPreparationStatus?: string | null;
  withDatasetPreparationStatus(datasetPreparationStatus: string | null): ReliabilityAsset;

  readonly targetTag?: ExpectedSensor | null;
  withTargetTag(targetTag: IExpectedSensor | null): ReliabilityAsset;

  readonly sensorAssociationRuns?: C3.Array<ReliabilityAssetSensorAssociationRun | null>;
  withSensorAssociationRuns(sensorAssociationRuns: C3.Array<ReliabilityAssetSensorAssociationRun | null> | Array<IReliabilityAssetSensorAssociationRun | null>): ReliabilityAsset;

  readonly latestSensorAssociationRun?: ReliabilityAssetSensorAssociationRun | null;
  withLatestSensorAssociationRun(latestSensorAssociationRun: IReliabilityAssetSensorAssociationRun | null): ReliabilityAsset;

  readonly inProgressSensorAssociationRuns?: C3.Array<ReliabilityAssetSensorAssociationRun | null>;
  withInProgressSensorAssociationRuns(inProgressSensorAssociationRuns: C3.Array<ReliabilityAssetSensorAssociationRun | null> | Array<IReliabilityAssetSensorAssociationRun | null>): ReliabilityAsset;

  readonly completeSensorAssociationRuns?: C3.Array<ReliabilityAssetSensorAssociationRun | null>;
  withCompleteSensorAssociationRuns(completeSensorAssociationRuns: C3.Array<ReliabilityAssetSensorAssociationRun | null> | Array<IReliabilityAssetSensorAssociationRun | null>): ReliabilityAsset;

  readonly latestCompleteSensorAssociationRun?: ReliabilityAssetSensorAssociationRun | null;
  withLatestCompleteSensorAssociationRun(latestCompleteSensorAssociationRun: IReliabilityAssetSensorAssociationRun | null): ReliabilityAsset;

  readonly sensorAssociationStatus?: string | null;
  withSensorAssociationStatus(sensorAssociationStatus: string | null): ReliabilityAsset;

  readonly trackingIdForImport?: string | null;
  withTrackingIdForImport(trackingIdForImport: string | null): ReliabilityAsset;

  readonly acl?: C3.Array<AclEntry | null>;
  withAcl(acl: C3.Array<AclEntry | null> | Array<IAclEntry | null>): ReliabilityAsset;

  readonly memberIntersections?: C3.Array<MemberToPhysicalAsset | null>;
  withMemberIntersections(memberIntersections: C3.Array<MemberToPhysicalAsset | null> | Array<IMemberToPhysicalAsset | null>): ReliabilityAsset;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): ReliabilityAsset;

  readonly locationHistory?: C3.Array<PhysicalAssetLocationHistory | null>;
  withLocationHistory(locationHistory: C3.Array<PhysicalAssetLocationHistory | null> | Array<IPhysicalAssetLocationHistory | null>): ReliabilityAsset;

  readonly location?: PhysicalAssetLocation | null;
  withLocation(location: IPhysicalAssetLocation | null): ReliabilityAsset;

  readonly description?: string | null;
  withDescription(description: string | null): ReliabilityAsset;

  readonly realTimeLocations?: C3.Array<PhysicalAssetRealTimeLocation | null>;
  withRealTimeLocations(realTimeLocations: C3.Array<PhysicalAssetRealTimeLocation | null> | Array<IPhysicalAssetRealTimeLocation | null>): ReliabilityAsset;

  readonly parentRelations?: C3.Array<ReliabilityAssetHierarchicalRelation | null>;
  withParentRelations(parentRelations: C3.Array<ReliabilityAssetHierarchicalRelation | null> | Array<IReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly childRelations?: C3.Array<ReliabilityAssetHierarchicalRelation | null>;
  withChildRelations(childRelations: C3.Array<ReliabilityAssetHierarchicalRelation | null> | Array<IReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly denormAncestors?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormAncestors(denormAncestors: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly denormDescendants?: C3.Array<PhysicalAssetHierarchyDenorm | null>;
  withDenormDescendants(denormDescendants: C3.Array<PhysicalAssetHierarchyDenorm | null> | Array<IPhysicalAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly relativePositionHistory?: C3.Array<PhysicalAssetRelativePositionHistory | null>;
  withRelativePositionHistory(relativePositionHistory: C3.Array<PhysicalAssetRelativePositionHistory | null> | Array<IPhysicalAssetRelativePositionHistory | null>): ReliabilityAsset;

  readonly relativePosition?: PhysicalAssetRelativePosition | null;
  withRelativePosition(relativePosition: IPhysicalAssetRelativePosition | null): ReliabilityAsset;

  readonly measurements?: C3.Array<BasePhysicalMeasurementSeries | null>;
  withMeasurements(measurements: C3.Array<BasePhysicalMeasurementSeries | null> | Array<IBasePhysicalMeasurementSeries | null>): ReliabilityAsset;

  readonly pointMeasurements?: C3.Array<PointPhysicalMeasurementSeries | null>;
  withPointMeasurements(pointMeasurements: C3.Array<PointPhysicalMeasurementSeries | null> | Array<IPointPhysicalMeasurementSeries | null>): ReliabilityAsset;

  readonly events?: C3.Array<ReliabilityAssetEvent | null>;
  withEvents(events: C3.Array<ReliabilityAssetEvent | null> | Array<IReliabilityAssetEvent | null>): ReliabilityAsset;

  readonly childSensorRelations?: C3.Array<PhysicalAssetHierarchyRelation | null>;
  withChildSensorRelations(childSensorRelations: C3.Array<PhysicalAssetHierarchyRelation | null> | Array<IPhysicalAssetHierarchyRelation | null>): ReliabilityAsset;

  readonly timeToEventPredictions?: C3.Array<TimeToEventPrediction | null>;
  withTimeToEventPredictions(timeToEventPredictions: C3.Array<TimeToEventPrediction | null> | Array<ITimeToEventPrediction | null>): ReliabilityAsset;

  readonly eventCategoryRelations?: C3.Array<PhysicalAssetEventCategoryRelation | null>;
  withEventCategoryRelations(eventCategoryRelations: C3.Array<PhysicalAssetEventCategoryRelation | null> | Array<IPhysicalAssetEventCategoryRelation | null>): ReliabilityAsset;

  readonly diagramRelations?: C3.Array<ParsableDiagramToPhysicalAssetRelation | null>;
  withDiagramRelations(diagramRelations: C3.Array<ParsableDiagramToPhysicalAssetRelation | null> | Array<IParsableDiagramToPhysicalAssetRelation | null>): ReliabilityAsset;

  readonly numDiagramRelations?: number | null;
  withNumDiagramRelations(numDiagramRelations: number | null): ReliabilityAsset;

  readonly assetClass?: AssetClass | null;
  withAssetClass(assetClass: IAssetClass | null): ReliabilityAsset;

  readonly hierarchyTemplateAssetId?: string | null;
  withHierarchyTemplateAssetId(hierarchyTemplateAssetId: string | null): ReliabilityAsset;

  readonly relDenormAncestors?: C3.Array<ReliabilityAssetHierarchyDenorm | null>;
  withRelDenormAncestors(relDenormAncestors: C3.Array<ReliabilityAssetHierarchyDenorm | null> | Array<IReliabilityAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly currentRelDenormAncestors?: C3.Array<ReliabilityAssetHierarchyDenorm | null>;
  withCurrentRelDenormAncestors(currentRelDenormAncestors: C3.Array<ReliabilityAssetHierarchyDenorm | null> | Array<IReliabilityAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly currentAncestorsAndSelf?: C3.Array<ReliabilityAsset | null>;
  withCurrentAncestorsAndSelf(currentAncestorsAndSelf: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): ReliabilityAsset;

  readonly relDenormDescendants?: C3.Array<ReliabilityAssetHierarchyDenorm | null>;
  withRelDenormDescendants(relDenormDescendants: C3.Array<ReliabilityAssetHierarchyDenorm | null> | Array<IReliabilityAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly currentRelDenormDescendants?: C3.Array<ReliabilityAssetHierarchyDenorm | null>;
  withCurrentRelDenormDescendants(currentRelDenormDescendants: C3.Array<ReliabilityAssetHierarchyDenorm | null> | Array<IReliabilityAssetHierarchyDenorm | null>): ReliabilityAsset;

  readonly currentChildrenAndSelf?: C3.Array<ReliabilityAsset | null>;
  withCurrentChildrenAndSelf(currentChildrenAndSelf: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): ReliabilityAsset;

  readonly numCurrentDescendants?: number | null;
  withNumCurrentDescendants(numCurrentDescendants: number | null): ReliabilityAsset;

  readonly currentChildren?: C3.Array<ReliabilityAsset | null>;
  withCurrentChildren(currentChildren: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): ReliabilityAsset;

  readonly currentSensorHierarchicalRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withCurrentSensorHierarchicalRelations(currentSensorHierarchicalRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): ReliabilityAsset;

  readonly sensorHierarchicalRelations?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withSensorHierarchicalRelations(sensorHierarchicalRelations: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): ReliabilityAsset;

  readonly currentSensorDenormDescendants?: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null>;
  withCurrentSensorDenormDescendants(currentSensorDenormDescendants: C3.Array<ReliabilityAssetSensorHierarchicalRelation | null> | Array<IReliabilityAssetSensorHierarchicalRelation | null>): ReliabilityAsset;

  readonly sensorRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withSensorRelations(sensorRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): ReliabilityAsset;

  readonly currentSensorRelations?: C3.Array<ReliabilityAssetSensorRelation | null>;
  withCurrentSensorRelations(currentSensorRelations: C3.Array<ReliabilityAssetSensorRelation | null> | Array<IReliabilityAssetSensorRelation | null>): ReliabilityAsset;

  readonly depth?: number | null;
  withDepth(depth: number | null): ReliabilityAsset;

  readonly hierarchyClassification?: string | null;
  withHierarchyClassification(hierarchyClassification: string | null): ReliabilityAsset;

  readonly functionalLocation?: string | null;
  withFunctionalLocation(functionalLocation: string | null): ReliabilityAsset;

  readonly linked3DModel?: ReliabilityAsset3dmodel | null;
  withLinked3DModel(linked3DModel: IReliabilityAsset3dmodel | null): ReliabilityAsset;

  readonly linked3DModelToDisplay?: ReliabilityAsset3dmodel | null;
  withLinked3DModelToDisplay(linked3DModelToDisplay: IReliabilityAsset3dmodel | null): ReliabilityAsset;

  readonly currentParentRelations?: C3.Array<ReliabilityAssetHierarchicalRelation | null>;
  withCurrentParentRelations(currentParentRelations: C3.Array<ReliabilityAssetHierarchicalRelation | null> | Array<IReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly numChildRelations?: number | null;
  withNumChildRelations(numChildRelations: number | null): ReliabilityAsset;

  readonly currentChildRelations?: C3.Array<ReliabilityAssetHierarchicalRelation | null>;
  withCurrentChildRelations(currentChildRelations: C3.Array<ReliabilityAssetHierarchicalRelation | null> | Array<IReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly facilityRelations?: C3.Array<FacilityReliabilityAssetHierarchicalRelation | null>;
  withFacilityRelations(facilityRelations: C3.Array<FacilityReliabilityAssetHierarchicalRelation | null> | Array<IFacilityReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly currentFacilityRelations?: C3.Array<FacilityReliabilityAssetHierarchicalRelation | null>;
  withCurrentFacilityRelations(currentFacilityRelations: C3.Array<FacilityReliabilityAssetHierarchicalRelation | null> | Array<IFacilityReliabilityAssetHierarchicalRelation | null>): ReliabilityAsset;

  readonly directWorkOrders?: C3.Array<WorkOrder | null>;
  withDirectWorkOrders(directWorkOrders: C3.Array<WorkOrder | null> | Array<IWorkOrder | null>): ReliabilityAsset;

  readonly regionName?: string | null;
  withRegionName(regionName: string | null): ReliabilityAsset;

  readonly members?: C3.Array<Member | null>;
  withMembers(members: C3.Array<Member | null> | Array<IMember | null>): ReliabilityAsset;

  readonly capacity?: ExactDimension | null;
  withCapacity(capacity: IExactDimension | null): ReliabilityAsset;

  readonly documents?: C3.Array<AssetDocument | null>;
  withDocuments(documents: C3.Array<AssetDocument | null> | Array<IAssetDocument | null>): ReliabilityAsset;

  readonly facility?: Facility | null;
  withFacility(facility: IFacility | null): ReliabilityAsset;

  readonly rootAsset?: ReliabilityAsset | null;
  withRootAsset(rootAsset: IReliabilityAsset | null): ReliabilityAsset;

  readonly parentAsset?: ReliabilityAsset | null;
  withParentAsset(parentAsset: IReliabilityAsset | null): ReliabilityAsset;

  readonly characteristics?: C3.Array<ReliabilityAssetCharacteristicValue | null>;
  withCharacteristics(characteristics: C3.Array<ReliabilityAssetCharacteristicValue | null> | Array<IReliabilityAssetCharacteristicValue | null>): ReliabilityAsset;

  readonly assetImportanceLevel?: ReliabilityAssetImportance | null;
  withAssetImportanceLevel(assetImportanceLevel: IReliabilityAssetImportance | null): ReliabilityAsset;

  readonly currentModelRelations?: C3.Array<ReliabilityAssetToModelRelation | null>;
  withCurrentModelRelations(currentModelRelations: C3.Array<ReliabilityAssetToModelRelation | null> | Array<IReliabilityAssetToModelRelation | null>): ReliabilityAsset;

  readonly riskModelValidationRelations?: C3.Array<ReliabilityAssetToRiskModelValidationRelation | null>;
  withRiskModelValidationRelations(riskModelValidationRelations: C3.Array<ReliabilityAssetToRiskModelValidationRelation | null> | Array<IReliabilityAssetToRiskModelValidationRelation | null>): ReliabilityAsset;

  readonly currentReliabilityRiskModelRelations?: C3.Array<ReliabilityAssetToRiskModelRelation | null>;
  withCurrentReliabilityRiskModelRelations(currentReliabilityRiskModelRelations: C3.Array<ReliabilityAssetToRiskModelRelation | null> | Array<IReliabilityAssetToRiskModelRelation | null>): ReliabilityAsset;

  readonly alerts?: C3.Array<ReliabilityAssetAlert | null>;
  withAlerts(alerts: C3.Array<ReliabilityAssetAlert | null> | Array<IReliabilityAssetAlert | null>): ReliabilityAsset;

  readonly countOfLiveProjects?: number | null;
  withCountOfLiveProjects(countOfLiveProjects: number | null): ReliabilityAsset;

  readonly reliabilityRiskModelRelations?: C3.Array<ReliabilityAssetToRiskModelRelation | null>;
  withReliabilityRiskModelRelations(reliabilityRiskModelRelations: C3.Array<ReliabilityAssetToRiskModelRelation | null> | Array<IReliabilityAssetToRiskModelRelation | null>): ReliabilityAsset;

  readonly totalModelCount?: number | null;
  withTotalModelCount(totalModelCount: number | null): ReliabilityAsset;

  readonly modelRelations?: C3.Array<ReliabilityAssetToModelRelation | null>;
  withModelRelations(modelRelations: C3.Array<ReliabilityAssetToModelRelation | null> | Array<IReliabilityAssetToModelRelation | null>): ReliabilityAsset;

  readonly latestAlert?: ReliabilityAssetAlert | null;
  withLatestAlert(latestAlert: IReliabilityAssetAlert | null): ReliabilityAsset;

  readonly directAlerts?: C3.Array<ReliabilityAssetAlert | null>;
  withDirectAlerts(directAlerts: C3.Array<ReliabilityAssetAlert | null> | Array<IReliabilityAssetAlert | null>): ReliabilityAsset;

  readonly hasCurrentModelRelations?: boolean;
  withHasCurrentModelRelations(hasCurrentModelRelations: boolean): ReliabilityAsset;

  readonly mutedModels?: number | null;
  withMutedModels(mutedModels: number | null): ReliabilityAsset;

  readonly countOfProjects?: number | null;
  withCountOfProjects(countOfProjects: number | null): ReliabilityAsset;

  readonly numCases?: number | null;
  withNumCases(numCases: number | null): ReliabilityAsset;

  readonly caseRelations?: C3.Array<ReliabilityAssetCaseToAssetRelation | null>;
  withCaseRelations(caseRelations: C3.Array<ReliabilityAssetCaseToAssetRelation | null> | Array<IReliabilityAssetCaseToAssetRelation | null>): ReliabilityAsset;

  readonly recentAlerts?: C3.Array<ReliabilityAssetAlert | null>;
  withRecentAlerts(recentAlerts: C3.Array<ReliabilityAssetAlert | null> | Array<IReliabilityAssetAlert | null>): ReliabilityAsset;

  readonly numLiveModels?: number | null;
  withNumLiveModels(numLiveModels: number | null): ReliabilityAsset;

  readonly latestRegime?: ReliabilityAssetRegime | null;
  withLatestRegime(latestRegime: IReliabilityAssetRegime | null): ReliabilityAsset;

  readonly reliabilityRiskLiveModel?: ReliabilityMlModel | null;
  withReliabilityRiskLiveModel(reliabilityRiskLiveModel: IReliabilityMlModel | null): ReliabilityAsset;

  readonly lastModelSetupUpdateDate?: DateTime | null;
  withLastModelSetupUpdateDate(lastModelSetupUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  readonly reliabilityRiskModelDeploymentStatus?: string | null;
  withReliabilityRiskModelDeploymentStatus(reliabilityRiskModelDeploymentStatus: string | null): ReliabilityAsset;

  readonly numModels?: number | null;
  withNumModels(numModels: number | null): ReliabilityAsset;

  readonly latestAlerts?: C3.Array<ReliabilityAssetAlert | null>;
  withLatestAlerts(latestAlerts: C3.Array<ReliabilityAssetAlert | null> | Array<IReliabilityAssetAlert | null>): ReliabilityAsset;

  readonly numOpenCases?: number | null;
  withNumOpenCases(numOpenCases: number | null): ReliabilityAsset;

  readonly numLatestDirectAlerts?: number | null;
  withNumLatestDirectAlerts(numLatestDirectAlerts: number | null): ReliabilityAsset;

  readonly pastMaintenance?: C3.Array<WorkOrder | null>;
  withPastMaintenance(pastMaintenance: C3.Array<WorkOrder | null> | Array<IWorkOrder | null>): ReliabilityAsset;

  readonly displaySensorMappingStatus?: string | null;
  withDisplaySensorMappingStatus(displaySensorMappingStatus: string | null): ReliabilityAsset;

  readonly riskScoreIdCalc?: string | null;
  withRiskScoreIdCalc(riskScoreIdCalc: string | null): ReliabilityAsset;

  readonly numSensorFeatures?: number | null;
  withNumSensorFeatures(numSensorFeatures: number | null): ReliabilityAsset;

  readonly lastConfiguredReliabilityRiskModelDate?: DateTime | null;
  withLastConfiguredReliabilityRiskModelDate(lastConfiguredReliabilityRiskModelDate: DateTime | Date | string | null): ReliabilityAsset;

  readonly configurationLastUpdatedDate?: DateTime | null;
  withConfigurationLastUpdatedDate(configurationLastUpdatedDate: DateTime | Date | string | null): ReliabilityAsset;

  readonly assetLevel?: string | null;
  withAssetLevel(assetLevel: string | null): ReliabilityAsset;

  readonly anomalousPeriods?: C3.Array<ReliabilityAssetAnomalousPeriod | null>;
  withAnomalousPeriods(anomalousPeriods: C3.Array<ReliabilityAssetAnomalousPeriod | null> | Array<IReliabilityAssetAnomalousPeriod | null>): ReliabilityAsset;

  readonly numOpenDescendentSensorAlerts?: number | null;
  withNumOpenDescendentSensorAlerts(numOpenDescendentSensorAlerts: number | null): ReliabilityAsset;

  readonly numRetiredModels?: number | null;
  withNumRetiredModels(numRetiredModels: number | null): ReliabilityAsset;

  readonly riskScoreValueCalc?: number | null;
  withRiskScoreValueCalc(riskScoreValueCalc: number | null): ReliabilityAsset;

  readonly numRiskModels?: number | null;
  withNumRiskModels(numRiskModels: number | null): ReliabilityAsset;

  readonly numWorkOrders?: number | null;
  withNumWorkOrders(numWorkOrders: number | null): ReliabilityAsset;

  readonly displayedHighRiskThreshold?: number | null;
  withDisplayedHighRiskThreshold(displayedHighRiskThreshold: number | null): ReliabilityAsset;

  readonly riskScoreValue?: number | null;
  withRiskScoreValue(riskScoreValue: number | null): ReliabilityAsset;

  readonly modelConfigRunRelations?: C3.Array<ReliabilityAssetToModelConfigRunRelation | null>;
  withModelConfigRunRelations(modelConfigRunRelations: C3.Array<ReliabilityAssetToModelConfigRunRelation | null> | Array<IReliabilityAssetToModelConfigRunRelation | null>): ReliabilityAsset;

  readonly numLatestOpenAlerts?: number | null;
  withNumLatestOpenAlerts(numLatestOpenAlerts: number | null): ReliabilityAsset;

  readonly riskLevel?: string | null;
  withRiskLevel(riskLevel: string | null): ReliabilityAsset;

  readonly directCases?: C3.Array<ReliabilityAssetCase | null>;
  withDirectCases(directCases: C3.Array<ReliabilityAssetCase | null> | Array<IReliabilityAssetCase | null>): ReliabilityAsset;

  readonly riskScoreId?: string | null;
  withRiskScoreId(riskScoreId: string | null): ReliabilityAsset;

  readonly isSensorMappingComplete?: boolean;
  withIsSensorMappingComplete(isSensorMappingComplete: boolean): ReliabilityAsset;

  readonly mutedPeriods?: C3.Array<AlertMutedPeriod | null>;
  withMutedPeriods(mutedPeriods: C3.Array<AlertMutedPeriod | null> | Array<IAlertMutedPeriod | null>): ReliabilityAsset;

  readonly reliabilityRiskLiveModelName?: string | null;
  withReliabilityRiskLiveModelName(reliabilityRiskLiveModelName: string | null): ReliabilityAsset;

  readonly sensorMappingStatus?: string | null;
  withSensorMappingStatus(sensorMappingStatus: string | null): ReliabilityAsset;

  readonly numOpenDescendentAlerts?: number | null;
  withNumOpenDescendentAlerts(numOpenDescendentAlerts: number | null): ReliabilityAsset;

  readonly numLatestOpenDirectAlerts?: number | null;
  withNumLatestOpenDirectAlerts(numLatestOpenDirectAlerts: number | null): ReliabilityAsset;

  readonly lastCorrelationModelSetupUpdateDate?: DateTime | null;
  withLastCorrelationModelSetupUpdateDate(lastCorrelationModelSetupUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  readonly numLatestOpenSensorAlerts?: number | null;
  withNumLatestOpenSensorAlerts(numLatestOpenSensorAlerts: number | null): ReliabilityAsset;

  readonly numOpenDirectAlerts?: number | null;
  withNumOpenDirectAlerts(numOpenDirectAlerts: number | null): ReliabilityAsset;

  readonly regimes?: C3.Array<ReliabilityAssetRegime | null>;
  withRegimes(regimes: C3.Array<ReliabilityAssetRegime | null> | Array<IReliabilityAssetRegime | null>): ReliabilityAsset;

  readonly numOpenSensorAlerts?: number | null;
  withNumOpenSensorAlerts(numOpenSensorAlerts: number | null): ReliabilityAsset;

  readonly lastModelConfigStatus?: string | null;
  withLastModelConfigStatus(lastModelConfigStatus: string | null): ReliabilityAsset;

  readonly cases?: C3.Array<ReliabilityAssetCase | null>;
  withCases(cases: C3.Array<ReliabilityAssetCase | null> | Array<IReliabilityAssetCase | null>): ReliabilityAsset;

  readonly numOpenDirectChildrenAlerts?: number | null;
  withNumOpenDirectChildrenAlerts(numOpenDirectChildrenAlerts: number | null): ReliabilityAsset;

  readonly lastModelConfigUpdateDate?: DateTime | null;
  withLastModelConfigUpdateDate(lastModelConfigUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  readonly numCandidateModels?: number | null;
  withNumCandidateModels(numCandidateModels: number | null): ReliabilityAsset;

  readonly displayedMediumRiskThreshold?: number | null;
  withDisplayedMediumRiskThreshold(displayedMediumRiskThreshold: number | null): ReliabilityAsset;

  readonly plannedMaintenance?: C3.Array<WorkOrder | null>;
  withPlannedMaintenance(plannedMaintenance: C3.Array<WorkOrder | null> | Array<IWorkOrder | null>): ReliabilityAsset;

  readonly failureModes?: C3.Array<FailureMode | null>;
  withFailureModes(failureModes: C3.Array<FailureMode | null> | Array<IFailureMode | null>): ReliabilityAsset;

  readonly numOpenAlerts?: number | null;
  withNumOpenAlerts(numOpenAlerts: number | null): ReliabilityAsset;

  readonly displayedRiskScore?: number | null;
  withDisplayedRiskScore(displayedRiskScore: number | null): ReliabilityAsset;

  readonly numChildModels?: number | null;
  withNumChildModels(numChildModels: number | null): ReliabilityAsset;

  readonly numOpenDirectCases?: number | null;
  withNumOpenDirectCases(numOpenDirectCases: number | null): ReliabilityAsset;

  readonly numAllLatestAlerts?: number | null;
  withNumAllLatestAlerts(numAllLatestAlerts: number | null): ReliabilityAsset;

  readonly riskLevelDisplayName?: string | null;
  withRiskLevelDisplayName(riskLevelDisplayName: string | null): ReliabilityAsset;

  readonly sensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withSensorAlerts(sensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): ReliabilityAsset;

  readonly numChallengerModels?: number | null;
  withNumChallengerModels(numChallengerModels: number | null): ReliabilityAsset;

  readonly daysSinceLastUpdatedReliabilityRiskModels?: number | null;
  withDaysSinceLastUpdatedReliabilityRiskModels(daysSinceLastUpdatedReliabilityRiskModels: number | null): ReliabilityAsset;

  readonly latestSensorAlerts?: C3.Array<SensorHealthAlert | null>;
  withLatestSensorAlerts(latestSensorAlerts: C3.Array<SensorHealthAlert | null> | Array<ISensorHealthAlert | null>): ReliabilityAsset;

  readonly assignedProjects?: C3.Array<ReliabilityMl.Project | null>;
  withAssignedProjects(assignedProjects: C3.Array<ReliabilityMl.Project | null> | Array<IReliabilityMl.Project | null>): ReliabilityAsset;

  readonly geoLocation?: LatLong | null;
  withGeoLocation(geoLocation: ILatLong | null): ReliabilityAsset;

  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): ReliabilityAsset;

  readonly diagramConfigs?: C3.Array<ProcessDiagramConfig | null>;
  withDiagramConfigs(diagramConfigs: C3.Array<ProcessDiagramConfig | null> | Array<IProcessDiagramConfig | null>): ReliabilityAsset;
}

