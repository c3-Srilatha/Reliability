// TypeScript definitions for the C3 type ReliabilityApplicationState

/**
 * Application state for the Reliability Application.
 * All shared data sources become fields in this application state.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityApplicationState
 */
declare interface IReliabilityApplicationState {

  /**
   * Various system fields.
   */
  meta?: IMeta;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  REDUX_NAMESPACE?: string;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  effectTriggers?: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger>;

  /**
   * Field used to represent the user's selected timezone which will be used to convert timestamps in the UI.
   */
  uiTimezone?: string;

  /**
   * Field used to represent the display label for the user's selected timezone.
   */
  uiTimezoneLabel?: string;

  /**
   * Field used to represent the offset information for the user's selected timezone.
   */
  uiTimezoneOffset?: string;

  /**
   * The id of the currently selected entity.
   * Used in various grids to store the id of the most recently selected row.
   */
  selectedEntityId?: string;

  /**
   * The ids of the currently selected entity.
   * Used in grids to store the id of the grid where the action was triggered
   */
  selectedEntityIds?: Array_Type<string> | Array<string>;

  /**
   * The id of the currently selected asset {@link ReliabilityAsset}.
   */
  selectedAssetId?: string;

  /**
   * The id of the currently selected side panel entity.
   * Used in various side panel components to store the id of the selected alert.
   */
  selectedSidePanelEntityId?: string;

  /**
   * The id of the selected item on CaseDetail and AlertDetail Page.
   */
  selectedTopFailureModeCardListItemId?: string;

  /**
   * The row data for the selected editable row in the grid.
   * Used in various grids to store the entire contents of the most recently selected row.
   */
  selectedRowData?: any;

  /**
   * The card data for the card being viewed in a card list.
   */
  selectedCardData?: any;

  /**
   * Used to set title, subtitle and visibility of an inline notification.
   */
  inlineNotificationConfig?: any;

  /**
   * The value of the filter panel, when the submit button is clicked.
   * Used to store the filter panel values in the application state and retrieve them later.
   */
  filterPanelValue?: any;

  /**
   * The Prediction Configuration ids for the selected editable row in the grid
   * Used for bulk retraining models
   */
  configIds?: Array_Type<string> | Array<string>;

  /**
   * The id of the FMLI of the selected item on TopFailureModeCardList on CaseDetail and AlertDetail Page.
   */
  selectedTopFailureModeCardListItemFMLIId?: string;

  /**
   * The id of the item selected in Recommendations Grid on CaseDetail and AlertDetail Page.
   */
  selectedFMRecommendationsGridItemId?: string;

  /**
   * The name of the currently selected entity.
   */
  selectedName?: string;

  /**
   * The name of the currently selected entity for the side panel.
   */
  selectedNameSidePanel?: string;

  /**
   * A boolean flag to indicate whether the user is adding to a case from the alert detail side panel.
   */
  addToCaseFromSidePanel?: boolean;

  /**
   * The list of all the {@link Facility#id}s that currently logged in user has been assigned to.
   * This list of IDs serves as the source of truth to perform facility-based filtering on any relevant UI components.
   */
  allFacilities?: Array_Type<Facility> | Array<IFacility>;

  /**
   * This field determines if the current {@link User} has access to the entity, to whose detail page they are navigating to.
   * On page load, this field is populated in `checkUserAuthorizationEpic`.
   */
  isUserUnauthorized?: boolean;

  /**
   * The list of {@link Facility#id}s obtained from the selected facilities in the global dropdown filter.
   * This list of IDs serves as the source of truth to perform facility-based filtering on any relevant UI components.
   */
  selectedFacilities?: Array_Type<string> | Array<string>;

  /**
   * The string contents for names of {@link ReliabilityApplicationState#selectedFacilities} names separated by commas.
   */
  contentFrameSubtitle?: string;

  /**
   * The id of the FailureModeLineItem to be deleted.
   */
  fmliToBeDeleted?: string;

  /**
   * The MLPredictonConfiguration to compare on the Model Detail Page.
   */
  comparisonModel?: any;

  /**
   * When set to true, allows the user to preset filter panel values with Chart configuration data.
   */
  presetFilterPanelStatus?: boolean;

  /**
   * Settings set by users from the Bulk Sensor Association UI.
   *
   * **Note**: This field is used for Latest Correlation Configuration Page, and is populated using
   * {LatestCorrelationFetchDataEpic}.
   */
  latestCorrelationConfig?: IBulkSensorAssociationUiSettings;

  /**
   * The list of ids of the parents to be fetch for an alert. This is used for showing the comments and files on the Case Detail Page.
   */
  selectedAlertParentIds?: Array_Type<string> | Array<string>;

  /**
   * The id of the selected comment for which the files need to fetched in the Alert Detail Page.
   */
  selectedComment?: string;

  /**
   * Determines whether to render the Swap Asset Sensor Affected Sensor Grid in Swap Asset Class UI Workflow.
   */
  showSwapAssetAffectedSensorGrid?: boolean;

  /**
   * Selected {@link ReliabilityAssetToModelRelation} used to plot the features in Asset Details - Asset Models.
   */
  selectedAssetModelRelation?: IReliabilityAssetToModelRelation;

  /**
   * AssetDetailModelsModelOutputChart
   *  Selected necessary date data used to plot the {AssetDetailModelsModelOutputChartHelper} in
   *  Asset Details - Asset Models.
   */
  selectedChartDate?: ITimeInfo;

  /**
   * Filter used on "To Do Alerts" page for filtering alerts by date.
   * Updated by {ToDoAlertsDateRangeSelectorEpic} when the date range is changed, or the page is loaded using
   * {ToDoAlertsDateRangeSelectorPrepopulationEpic}.
   *
   * **NOTE**: Is expected that this field contains a date in ISO format. (ex: `2024-04-11T06:00:00.000Z`)
   */
  alertFilteringStartDate?: string;

  /**
   * {@link Period} representation of #alertFilteringStartDate.
   */
  alertFilteringStartDatePeriod?: string;

  /**
   * Stores the id of the grid component to refresh after creating a new {@link WorkOrder}.
   */
  workOrdersGridId?: string;

  /**
   * Field used to retrieve the base model information, this should be a component ID.
   */
  retrainModelDataSourceId?: string;

  /**
   * Modal data used when opening a Sensor Settings Modal
   * See {@link Sensor#updateMonitorSettings} and {@link Sensor#updateOperatingStatusSettings}.
   *
   * dataSourceIdToRefreshOnComplete - the source component dataSpec_ds where the SensorSettingsModal was opened from. Used to refresh grids after update
   * monitorSettingsEnabled - used in the cases where the call to operatingStatusUpdateRequest is needed only and the monitorSettingsUpdateRequest can be skipped
   */
  sensorSettingsModalConfigData?: ISensorSettingsModalConfigData;

  /**
   * The necessary metadata used to call {UpdateSensorSettingsEpic}
   *
   * sensorIds - The list of {@link Sensor#id}s that will be updated by the actions from { UpdateSensorSettingsEpic}.
   * doUpdateMonitorSettings - The boolean toggle in the `Reliability.ChangeSensorMonitorSettingsModalForm` that indicates if monitorSettingsUpdateRequest should be called
   * alertFlags - The list of selected {@link Sensor#monitoredAlertCategories} to update a {@link Sensor}
   * operationalStatus - The {@link SensorOperationalStatusTimedValue#status} of the {@link Sensor} of type {@link SensorOperationalStatusEnum}
   * duration - The {@link SensorOperationalStatusTimedValue#endDate} to be added from DateTime.now() of type {@link Duration}
   */
  pendingSensorSettingsChanges?: IPendingSensorSettingsChanges;

  /**
   * Represent the current ML project ID to be considered in current context.
   *
   * Currently being used by the update model modal to determine the type of ml model being cloned.
   */
  mlProjectId?: string;
}

/**
 * Application state for the Reliability Application.
 * All shared data sources become fields in this application state.
 *
 * @remarks this represents a made instance of ReliabilityApplicationState
 */
declare class ReliabilityApplicationState extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): ReliabilityApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): ReliabilityApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): ReliabilityApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData;
  withDataSpec(dataSpec: IUiSdlNoData | null): ReliabilityApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ReliabilityApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ReliabilityApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ReliabilityApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): ReliabilityApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: Array_Type<UiSdlEffectTrigger>;
  withEffectTriggers(effectTriggers: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger> | null): ReliabilityApplicationState;

  /**
   * Field used to represent the user's selected timezone which will be used to convert timestamps in the UI.
   */
  readonly uiTimezone?: string;
  withUiTimezone(uiTimezone: string | null): ReliabilityApplicationState;

  /**
   * Field used to represent the display label for the user's selected timezone.
   */
  readonly uiTimezoneLabel?: string;
  withUiTimezoneLabel(uiTimezoneLabel: string | null): ReliabilityApplicationState;

  /**
   * Field used to represent the offset information for the user's selected timezone.
   */
  readonly uiTimezoneOffset?: string;
  withUiTimezoneOffset(uiTimezoneOffset: string | null): ReliabilityApplicationState;

  /**
   * The id of the currently selected entity.
   * Used in various grids to store the id of the most recently selected row.
   */
  readonly selectedEntityId?: string;
  withSelectedEntityId(selectedEntityId: string | null): ReliabilityApplicationState;

  /**
   * The ids of the currently selected entity.
   * Used in grids to store the id of the grid where the action was triggered
   */
  readonly selectedEntityIds?: Array_Type<string>;
  withSelectedEntityIds(selectedEntityIds: Array_Type<string> | Array<string> | null): ReliabilityApplicationState;

  /**
   * The id of the currently selected asset {@link ReliabilityAsset}.
   */
  readonly selectedAssetId?: string;
  withSelectedAssetId(selectedAssetId: string | null): ReliabilityApplicationState;

  /**
   * The id of the currently selected side panel entity.
   * Used in various side panel components to store the id of the selected alert.
   */
  readonly selectedSidePanelEntityId?: string;
  withSelectedSidePanelEntityId(selectedSidePanelEntityId: string | null): ReliabilityApplicationState;

  /**
   * The id of the selected item on CaseDetail and AlertDetail Page.
   */
  readonly selectedTopFailureModeCardListItemId?: string;
  withSelectedTopFailureModeCardListItemId(selectedTopFailureModeCardListItemId: string | null): ReliabilityApplicationState;

  /**
   * The row data for the selected editable row in the grid.
   * Used in various grids to store the entire contents of the most recently selected row.
   */
  readonly selectedRowData?: any;
  withSelectedRowData(selectedRowData: any | null): ReliabilityApplicationState;

  /**
   * The card data for the card being viewed in a card list.
   */
  readonly selectedCardData?: any;
  withSelectedCardData(selectedCardData: any | null): ReliabilityApplicationState;

  /**
   * Used to set title, subtitle and visibility of an inline notification.
   */
  readonly inlineNotificationConfig?: any;
  withInlineNotificationConfig(inlineNotificationConfig: any | null): ReliabilityApplicationState;

  /**
   * The value of the filter panel, when the submit button is clicked.
   * Used to store the filter panel values in the application state and retrieve them later.
   */
  readonly filterPanelValue?: any;
  withFilterPanelValue(filterPanelValue: any | null): ReliabilityApplicationState;

  /**
   * The Prediction Configuration ids for the selected editable row in the grid
   * Used for bulk retraining models
   */
  readonly configIds?: Array_Type<string>;
  withConfigIds(configIds: Array_Type<string> | Array<string> | null): ReliabilityApplicationState;

  /**
   * The id of the FMLI of the selected item on TopFailureModeCardList on CaseDetail and AlertDetail Page.
   */
  readonly selectedTopFailureModeCardListItemFMLIId?: string;
  withSelectedTopFailureModeCardListItemFMLIId(selectedTopFailureModeCardListItemFMLIId: string | null): ReliabilityApplicationState;

  /**
   * The id of the item selected in Recommendations Grid on CaseDetail and AlertDetail Page.
   */
  readonly selectedFMRecommendationsGridItemId?: string;
  withSelectedFMRecommendationsGridItemId(selectedFMRecommendationsGridItemId: string | null): ReliabilityApplicationState;

  /**
   * The name of the currently selected entity.
   */
  readonly selectedName?: string;
  withSelectedName(selectedName: string | null): ReliabilityApplicationState;

  /**
   * The name of the currently selected entity for the side panel.
   */
  readonly selectedNameSidePanel?: string;
  withSelectedNameSidePanel(selectedNameSidePanel: string | null): ReliabilityApplicationState;

  /**
   * A boolean flag to indicate whether the user is adding to a case from the alert detail side panel.
   */
  readonly addToCaseFromSidePanel?: boolean;
  withAddToCaseFromSidePanel(addToCaseFromSidePanel: boolean): ReliabilityApplicationState;

  /**
   * The list of all the {@link Facility#id}s that currently logged in user has been assigned to.
   * This list of IDs serves as the source of truth to perform facility-based filtering on any relevant UI components.
   */
  readonly allFacilities?: Array_Type<Facility>;
  withAllFacilities(allFacilities: Array_Type<Facility> | Array<IFacility> | null): ReliabilityApplicationState;

  /**
   * This field determines if the current {@link User} has access to the entity, to whose detail page they are navigating to.
   * On page load, this field is populated in `checkUserAuthorizationEpic`.
   */
  readonly isUserUnauthorized?: boolean;
  withIsUserUnauthorized(isUserUnauthorized: boolean): ReliabilityApplicationState;

  /**
   * The list of {@link Facility#id}s obtained from the selected facilities in the global dropdown filter.
   * This list of IDs serves as the source of truth to perform facility-based filtering on any relevant UI components.
   */
  readonly selectedFacilities?: Array_Type<string>;
  withSelectedFacilities(selectedFacilities: Array_Type<string> | Array<string> | null): ReliabilityApplicationState;

  /**
   * The string contents for names of {@link ReliabilityApplicationState#selectedFacilities} names separated by commas.
   */
  readonly contentFrameSubtitle?: string;
  withContentFrameSubtitle(contentFrameSubtitle: string | null): ReliabilityApplicationState;

  /**
   * The id of the FailureModeLineItem to be deleted.
   */
  readonly fmliToBeDeleted?: string;
  withFmliToBeDeleted(fmliToBeDeleted: string | null): ReliabilityApplicationState;

  /**
   * The MLPredictonConfiguration to compare on the Model Detail Page.
   */
  readonly comparisonModel?: any;
  withComparisonModel(comparisonModel: any | null): ReliabilityApplicationState;

  /**
   * When set to true, allows the user to preset filter panel values with Chart configuration data.
   */
  readonly presetFilterPanelStatus?: boolean;
  withPresetFilterPanelStatus(presetFilterPanelStatus: boolean): ReliabilityApplicationState;

  /**
   * Settings set by users from the Bulk Sensor Association UI.
   *
   * **Note**: This field is used for Latest Correlation Configuration Page, and is populated using
   * {LatestCorrelationFetchDataEpic}.
   */
  readonly latestCorrelationConfig?: BulkSensorAssociationUiSettings;
  withLatestCorrelationConfig(latestCorrelationConfig: IBulkSensorAssociationUiSettings | null): ReliabilityApplicationState;

  /**
   * The list of ids of the parents to be fetch for an alert. This is used for showing the comments and files on the Case Detail Page.
   */
  readonly selectedAlertParentIds?: Array_Type<string>;
  withSelectedAlertParentIds(selectedAlertParentIds: Array_Type<string> | Array<string> | null): ReliabilityApplicationState;

  /**
   * The id of the selected comment for which the files need to fetched in the Alert Detail Page.
   */
  readonly selectedComment?: string;
  withSelectedComment(selectedComment: string | null): ReliabilityApplicationState;

  /**
   * Determines whether to render the Swap Asset Sensor Affected Sensor Grid in Swap Asset Class UI Workflow.
   */
  readonly showSwapAssetAffectedSensorGrid?: boolean;
  withShowSwapAssetAffectedSensorGrid(showSwapAssetAffectedSensorGrid: boolean): ReliabilityApplicationState;

  /**
   * Selected {@link ReliabilityAssetToModelRelation} used to plot the features in Asset Details - Asset Models.
   */
  readonly selectedAssetModelRelation?: ReliabilityAssetToModelRelation;
  withSelectedAssetModelRelation(selectedAssetModelRelation: IReliabilityAssetToModelRelation | null): ReliabilityApplicationState;

  /**
   * AssetDetailModelsModelOutputChart
   *  Selected necessary date data used to plot the {AssetDetailModelsModelOutputChartHelper} in
   *  Asset Details - Asset Models.
   */
  readonly selectedChartDate?: TimeInfo;
  withSelectedChartDate(selectedChartDate: ITimeInfo | null): ReliabilityApplicationState;

  /**
   * Filter used on "To Do Alerts" page for filtering alerts by date.
   * Updated by {ToDoAlertsDateRangeSelectorEpic} when the date range is changed, or the page is loaded using
   * {ToDoAlertsDateRangeSelectorPrepopulationEpic}.
   *
   * **NOTE**: Is expected that this field contains a date in ISO format. (ex: `2024-04-11T06:00:00.000Z`)
   */
  readonly alertFilteringStartDate?: string;
  withAlertFilteringStartDate(alertFilteringStartDate: string | null): ReliabilityApplicationState;

  /**
   * {@link Period} representation of #alertFilteringStartDate.
   */
  readonly alertFilteringStartDatePeriod?: string;
  withAlertFilteringStartDatePeriod(alertFilteringStartDatePeriod: string | null): ReliabilityApplicationState;

  /**
   * Stores the id of the grid component to refresh after creating a new {@link WorkOrder}.
   */
  readonly workOrdersGridId?: string;
  withWorkOrdersGridId(workOrdersGridId: string | null): ReliabilityApplicationState;

  /**
   * Field used to retrieve the base model information, this should be a component ID.
   */
  readonly retrainModelDataSourceId?: string;
  withRetrainModelDataSourceId(retrainModelDataSourceId: string | null): ReliabilityApplicationState;

  /**
   * Modal data used when opening a Sensor Settings Modal
   * See {@link Sensor#updateMonitorSettings} and {@link Sensor#updateOperatingStatusSettings}.
   *
   * dataSourceIdToRefreshOnComplete - the source component dataSpec_ds where the SensorSettingsModal was opened from. Used to refresh grids after update
   * monitorSettingsEnabled - used in the cases where the call to operatingStatusUpdateRequest is needed only and the monitorSettingsUpdateRequest can be skipped
   */
  readonly sensorSettingsModalConfigData?: SensorSettingsModalConfigData;
  withSensorSettingsModalConfigData(sensorSettingsModalConfigData: ISensorSettingsModalConfigData | null): ReliabilityApplicationState;

  /**
   * The necessary metadata used to call {UpdateSensorSettingsEpic}
   *
   * sensorIds - The list of {@link Sensor#id}s that will be updated by the actions from { UpdateSensorSettingsEpic}.
   * doUpdateMonitorSettings - The boolean toggle in the `Reliability.ChangeSensorMonitorSettingsModalForm` that indicates if monitorSettingsUpdateRequest should be called
   * alertFlags - The list of selected {@link Sensor#monitoredAlertCategories} to update a {@link Sensor}
   * operationalStatus - The {@link SensorOperationalStatusTimedValue#status} of the {@link Sensor} of type {@link SensorOperationalStatusEnum}
   * duration - The {@link SensorOperationalStatusTimedValue#endDate} to be added from DateTime.now() of type {@link Duration}
   */
  readonly pendingSensorSettingsChanges?: PendingSensorSettingsChanges;
  withPendingSensorSettingsChanges(pendingSensorSettingsChanges: IPendingSensorSettingsChanges | null): ReliabilityApplicationState;

  /**
   * Represent the current ML project ID to be considered in current context.
   *
   * Currently being used by the update model modal to determine the type of ml model being cloned.
   */
  readonly mlProjectId?: string;
  withMlProjectId(mlProjectId: string | null): ReliabilityApplicationState;

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
  static fromJson(json: any): ReliabilityApplicationState | null;

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
  static fromJsonString(json: string): ReliabilityApplicationState | null;

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
  static fromXmlString(xml: string): ReliabilityApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityApplicationState>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityApplicationState>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityApplicationState;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityApplicationState;

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
  withoutFieldAtPath(path: string): ReliabilityApplicationState;

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
  withoutField(field: string): ReliabilityApplicationState;

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
  withoutField(field: FieldType): ReliabilityApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityApplicationState;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityApplicationState;

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
  defaultField(field: string): ReliabilityApplicationState;

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
  defaultField(field: FieldType): ReliabilityApplicationState;

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
  unsetField(field: string): ReliabilityApplicationState;

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
  unsetField(field: FieldType): ReliabilityApplicationState;

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
  removeField(field: string): ReliabilityApplicationState;

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
  removeField(field: FieldType): ReliabilityApplicationState;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityApplicationState;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityApplicationState;

  mergeJson(json: any): ReliabilityApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityApplicationState>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityApplicationState> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityApplicationState> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityApplicationState>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityApplicationState> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityApplicationState> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityApplicationState> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityApplicationState>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityApplicationState>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityApplicationState;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityApplicationState;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): ReliabilityApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityApplicationState;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ReliabilityApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityApplicationState> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityApplicationState;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<ReliabilityApplicationState>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<ReliabilityApplicationState>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<ReliabilityApplicationState> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ReliabilityApplicationState>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

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
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

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
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<ReliabilityApplicationState>;

  save(subPath?: string, contentType?: string): ReliabilityApplicationState;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: ReliabilityApplicationState, spec?: UpsertSpec): ReliabilityApplicationState | null;

  upsert(srcObj?: ReliabilityApplicationState, spec?: UpsertSpec): ReliabilityApplicationState | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

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
  static fromString(s: string): ReliabilityApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): ReliabilityApplicationState | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: ReliabilityApplicationState, state: UiSdlReduxState): ReliabilityApplicationState | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Gets the namespace for this state
   * @return the namespace
   */
  static getStateNamespace(): string | null;

  /**
   * Gets the namespace for the initial state
   * @return the namespace
   */
  static getInitialStateNamespace(): string | null;

  /**
   * Gets the entire path to the state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the state
   */
  static getConfigStatePath(id?: string): Array_Type<string> | null;

  /**
   * Gets the enire path to the initial state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the initial state
   */
  static getInitialConfigStatePath(id?: string): Array_Type<string> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getInitialConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setInitialConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Determines whether or not the `UiSdlState` can update state outside of its own state
   * @return true if the `UiSdlState` should not be able to set state outside of its own state
   */
  static isLimitEffectOnState(): boolean;

  /**
   * Retrieves config value from application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static getConfigFromApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  /**
   * Sets config value in application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @param value
   *           The config value to set.
   * @returns Redux state.
   */
  static setConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>, value: any): UiSdlReduxState;

  /**
   * Remove config value in the state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static removeConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  /**
   * Triggers when the `UiSdlApplicationState` is initialized.
   *
   * @param stateId
   *            Id of the state.
   * @return a 'APPLICATION_STATE_INITIALIZE' action.
   */
  static initializeApplicationStateAction(stateId: string): UiSdlApplicationStateInitializeAction;

  /**
   * Action to delete data in a certain slice of the application state
   *
   * @param stateId
   *            Id of the state.
   * @param ids
   *            Ids of the objects to be deleted
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_DELETE' action.
   */
  static applicationStateDeleteDataAction(stateId: string, ids?: Array_Type<string>, dataPath?: string): UiSdlApplicationStateDataDeleteAction;

  /**
   * Action to add data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_ADD' action.
   */
  static applicationStateAddDataAction(stateId: string, id?: string, dataPath?: string): UiSdlApplicationStateDataAddAction;

  /**
   * Action to modify data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_MODIFY_ADD' action.
   */
  static applicationStateModifyDataAction(stateId: string, id?: string, dataPath?: string, field?: string, newValue?: any): UiSdlApplicationStateDataModifyAction;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataDeleteEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataAddEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataModifyEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction): UiSdlReduxState;

  /**
   * Generates a function that is able to return the application metadata from the redux state.
   * @param applicationId
   *            The application ID to generate a selector for
   * @return a function that can return the metadata for the applicationID when given the redux state
   */
  static generateSelector(applicationId?: string): λFunction<UiSdlReduxState | null, UiSdlImmutableJS<UiSdlApplicationState> | null> | null;

  /**
   * Creates a redux action to get the passed in configs.
   *
   * @param componentId
   *          The ID of the {@link UiConfigPageContainer}.
   * @param configs
   *          An array of config spec to get.
   * @returns redux action
   */
  static getConfigsAction(componentId: string, configs: Array_Type<UiConfigGetSpec>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `GET_CONFIGS`, internally gets the configuration and then sets it in the redux state.
   * Differs from {@link UiSdlUseConfig} by enabling fetching of multiple {@link Config}
   * values with a single network request.
   *
   * @param actionStream
   *          {@link UiSdlObservable} action stream.
   * @param stateStream
   *          The current {@link UiSdlReduxState} of the application.
   * @returns A {@link UiSdlObservable} action stream.
   */
  static configGetEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Gets the configurations as specified by the passed in {@link UiConfigGetSpec}s.
   * @param getConfigSpecs
   *        An array of actions used to retrieve different configs.
   * @return A map of {@link UiConfigGetSpec#configType} to the result of {@link UiConfigGetSpec#actionName}.
   */
  static getConfigs(getConfigSpecs?: Array_Type<UiConfigGetSpec>): Map_Type<string, any> | null;

  /**
   * Sets the user selected timezone
   *
   * @param timezoneInfo
   *        The json object containing uiTimezone, uiTimezoneLabel, and uiTimezoneOffset to set
   * @returns a Redux action of type `SET_UI_TIMEZONE`
   */
  static setUiTimezoneAction(timezoneInfo: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_UI_TIMEZONE` and sets the user selected timezone
   *
   * @param state
   *         Redux state
   * @param action
   *         Redux action
   * @returns a new Redux state
   */
  static setUiTimezoneReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the sections in the side menu
   *
   * @param navMenuSections
   *        The sections to set
   * @returns a Redux action of type `NAV_MENU_SECTIONS_SET`.
   */
  static setNavMenuSectionsAction(navMenuSections: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `NAV_MENU_SECTIONS_SET` and sets the sections in the side menu
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setNavMenuSectionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the items in the page title
   *
   * @param pageTitleTabs
   *        A JSON array of the tabs to set
   * @returns a Redux action of type `PAGE_TITLE_TABS_SET`.
   */
  static setPageTitleTabsAction(pageTitleTabs: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PAGE_TITLE_TABS_SET` and sets the tab items on the Confg Page Title
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setPageTitleTabsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to change a field in this state. Either value or path must be passed in.
   *
   * @param stateId
   *           The id of this application state.
   * @param field
   *            The field in application state to be updated.
   * @param value
   *            The value to update the state field with. This is optional since you can also include a path to the value instead.
   * @param path
   *            The path the value to update the state field with (optional).
   * @param sourceId
   *            The id of the application state/component to get the value from. Uses `path` to traverse the source
   *            application state/component.
   * @returns a Redux action of type `SET_FIELD`.
   */
  static setFieldAction(stateId: string, field: string, value?: any, path?: string, sourceId?: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FIELD` and store selected value in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setFieldReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `TOGGLE_SELECTED_ID` and store/delete selected id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static toggleSelectedIdReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SELECT_ID_SET` and store selected id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SELECT_SIDE_PANEL_ID_SET` and store selected id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectSidePanelIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `TOP_FAILURE_MODES_CARD_ID_SET` and store selected id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectTopFailureModeCardListItemIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SELECT_ROW_SET` and store selected row data in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedRowSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `MULTI_SELECT_ROW_SET` and store selected row data in application state in an array.
   * Listens for actions of type `SELECT_ROW_SET` and store id selected row data in application state in an array.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedMultipleRowSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type 'SELECT_ROWS_CONFIG_ID_SET' and selected row config ids in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedRowsConfigIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `TOP_FAILURE_MODES_CARD_FMLI_ID_SET` and store selected id in application state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedTopFailureModeCardListItemFMLIIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `TOP_FAILURE_MODES_CARD_FMLI_ID_SET` and store selected id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedFMRecommendationsGridItemIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SELECT_CARD_SET` and store selected card data in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedCardSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set selected entity's name.
   *
   * @param stateId
   *           The id of this application state.
   * @returns a Redux action of type `GRID_EDITS_RESET`.
   */
  static setSelectedNameAction(stateId: string, name: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SELECTED_NAME_SET` and store selected entity's name in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedNameSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set selected entity's name.
   *
   * @param stateId
   *           The id of this application state.
   * @returns a Redux action of type `GRID_EDITS_RESET`.
   */
  static setSelectedNameSidePanelAction(stateId: string, name: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SELECTED_NAME_SET` and store selected entity's name in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static selectedNameSidePanelSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `DELETE_FMLI_ID_SET` and store selected FMLI's id in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static fmlToBeDeletedSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `CLEAR_FORM` and clears form.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static clearFormReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update preset filter panel status
   *
   * @param stateId
   *            The id of this application state.
   * @param status
   *            The new preset filter status
   * @returns a Redux action of type `PRESET_FILTER_PANEL_STATUS_UPDATE`.
   */
  static updatePresetFilterPanelStatusAction(stateId: string, status?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PRESET_FILTER_PANEL_STATUS_UPDATE` and updates `presetFilterPanelStatus`
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static presetFilterStatusUpdateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered whenever a particular input is intended to be enabled or disabled.
   * * Custom implementation of the action defined in {@link UiSdlForm} to accomodate for {@link UiSdlFieldGroup}s.
   *
   * @param id
   *            Id of the component.
   * @param field
   *            The field to be enabled/disabled.
   * @param disable
   *            Whtether to enable or to disable the input. Setting to true will disable the input and setting to false
   *            will enable it.
   *
   * @return An 'INPUT_(ENABLE|DISABLE)' action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   */
  static enableDisableGroupedInputAction(id: string, field: string, disable?: boolean): UiSdlInputEnableDisableAction;

  /**
   * Listens for actions of type `INPUT_ENABLE`,and sets the 'disabled' property on the input to be false.
   * Custom implementation of the reducer defined in {@link UiSdlForm} to accomodate for {@link UiSdlFieldGroup}s.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static groupedInputEnableEffect(state: UiSdlReduxState, action: UiSdlInputEnableDisableAction): UiSdlReduxState;

  /**
   * Listens for actions of type `INPUT_DISABLE`, and sets the 'disabled' property on the input to be true.
   * Custom implementation of the reducer defined in {@link UiSdlForm} to accomodate for {@link UiSdlFieldGroup}s.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static groupedInputDisableEffect(state: UiSdlReduxState, action: UiSdlInputEnableDisableAction): UiSdlReduxState;

  /**
   * Listens for actions of type `INPUT_ENABLE`,and sets the 'disabled' property on the input to be false.
   * Custom implementation of the effect defined in {@link UiSdlForm} to accomodate for {@link UiSdlFieldGroup}s.
   *
   * @param state
   *        Redux state.
   * @param fieldName
   *        The field to enable or disable.
   * @param disable
   *        A boolean indicating whether the field should be disabled or enabled.
   * @param componentId
   *        The component ID used to retrieve the field in the state.
   *
   * @returns A new Redux state.
   */
  static enableDisableGroupedInputEffect(state: UiSdlReduxState, fieldName: string, disable?: boolean, componentId: string): UiSdlReduxState;

  /**
   * An action to update the data in state
   *
   * @param dataSource
   *            The datasource id.
   * @param values
   *            The new values that the datasource will be populated with
   */
  static setDataInStateAction(dataSource: string, values?: Array_Type<string>): void;

  /**
   * Triggered to set a new value at a desired data path of a component
   *
   * @param stateId
   *        The id of the application state.
   * @param componentId
   *        The id of the component
   * @param dataPath
   *        The path to the field which needs to be changed within the component
   * @param newValue
   *        The new value which will be set
   *
   * @returns a new Redux action.
   */
  static setComponentFieldAction(stateId: string, componentId: string, dataPath: Array_Type<string>, newValue?: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_DATA_IN_STATE` and sets the filter dropdown options.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setDataInStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `FORM_FIELD_GROUPS_HIDE` and hides/unhides relevant form field groups.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static hideFormFieldGroupsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SET_DATA_TYPE` and updates the specified data source.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setDataSourceReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the specified data source.
   *
   * @param stateId
   *           The id of this application state.
   * @param newValue
   *           The new value that the respective field for the data source will be set to.
   * @param componentId
   *           The id of the component represeting the data source.
   * @param path
   *           Path to the field to set for the data source.
   * @return a Redux action of type `SET_DATA_TYPE` with payload = `newType`
   */
  static setDataSourceAction(stateId?: string, newValue: string, componentId?: string, path?: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `REMOVE_DYN_COMPONENT` and clears state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static removeDynamicComponentFromStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `ITEM_CHANGE` and Updates the Specified data source.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static workOrderPartsQuantityEdit(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `CLICK_LISTENER` and updates specified data source.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static primaryButtonClickListener(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `SET_COMPONENT_FIELD` and set the new value in the component.
   *
   * @param state
   *        Redux state.
   * @param action
   *        Redux action.
   * @returns a new Redux state.
   */
  static setComponentFieldReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Helper function for use in [epics](UiSdlEpic) to determine the metadata path in [Redux state](UiSdlReduxState)
   * to a specific [form](UiSdlForm) / [filter panel](UiSdlFilterPanel) field.
   *
   * @param state
   *        The current Redux state of the application.
   * @param componentId
   *        The ID of the form / filter panel to determine the path from.
   * @param fieldName
   *        The label for the field on either the form or filter panel.
   * @param trailingPath
   *        An optional path to be appended to the resolved path for `fieldName`.
   * @return The path to the field in Redux state. E.g.,
   *
   * ```
   * ['dataSpec', 'fieldSets', 0, 'fields', 1, 'inputElement', 'fieldGroupFields', '0']
   * ```
   */
  static getFormFieldPath(state: UiSdlReduxState, componentId: string, fieldName: string, trailingPath?: Array_Type<string | number> = '[]'): Array_Type<string | number>;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
