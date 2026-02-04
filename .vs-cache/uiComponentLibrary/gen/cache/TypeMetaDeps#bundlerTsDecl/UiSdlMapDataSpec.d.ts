export interface UiSdlMapDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMapDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlMapDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlMapDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMapDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlMapDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlMapDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlMapDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMapDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMapDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlMapDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlMapDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlMapDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlMapDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlMapDataSpec;

  readonly latitude: UiSdlFieldBasedDataSpecSetting;
  withLatitude(latitude: IUiSdlFieldBasedDataSpecSetting): UiSdlMapDataSpec;

  readonly longitude: UiSdlFieldBasedDataSpecSetting;
  withLongitude(longitude: IUiSdlFieldBasedDataSpecSetting): UiSdlMapDataSpec;

  readonly markerColor?: UiSdlMapMarkerColorFieldSetting | null;
  withMarkerColor(markerColor: IUiSdlMapMarkerColorFieldSetting | null): UiSdlMapDataSpec;

  readonly markerOpacity?: number | null;
  withMarkerOpacity(markerOpacity: number | null): UiSdlMapDataSpec;

  readonly layerAttribute?: UiSdlFieldBasedDataSpecSetting | null;
  withLayerAttribute(layerAttribute: IUiSdlFieldBasedDataSpecSetting | null): UiSdlMapDataSpec;

  readonly markerShape?: UiSdlMapMarkerShapeFieldSetting | null;
  withMarkerShape(markerShape: IUiSdlMapMarkerShapeFieldSetting | null): UiSdlMapDataSpec;

  readonly markerLabel?: UiSdlFieldBasedDataSpecSetting | null;
  withMarkerLabel(markerLabel: IUiSdlFieldBasedDataSpecSetting | null): UiSdlMapDataSpec;

  readonly markerImage?: UiSdlFieldBasedDataSpecSetting | null;
  withMarkerImage(markerImage: IUiSdlFieldBasedDataSpecSetting | null): UiSdlMapDataSpec;

  readonly tooltipHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withTooltipHeader(tooltipHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlMapDataSpec;

  readonly tooltipSubHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withTooltipSubHeader(tooltipSubHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlMapDataSpec;

  readonly tooltipAdditionalFields?: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null>;
  withTooltipAdditionalFields(tooltipAdditionalFields: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null> | Array<IUiSdlMapTooltipAdditionalFieldDataSpecSetting | null>): UiSdlMapDataSpec;

  readonly legends?: C3.Array<UiSdlMapLegendConfig | null>;
  withLegends(legends: C3.Array<UiSdlMapLegendConfig | null> | Array<IUiSdlMapLegendConfig | null>): UiSdlMapDataSpec;
}

