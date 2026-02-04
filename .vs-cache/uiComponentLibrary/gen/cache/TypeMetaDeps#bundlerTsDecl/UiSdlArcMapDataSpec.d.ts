export interface UiSdlArcMapDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlArcMapDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlArcMapDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlArcMapDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlArcMapDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlArcMapDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlArcMapDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlArcMapDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlArcMapDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlArcMapDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlArcMapDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlArcMapDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlArcMapDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlArcMapDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlArcMapDataSpec;

  readonly startLatitude: UiSdlFieldBasedDataSpecSetting;
  withStartLatitude(startLatitude: IUiSdlFieldBasedDataSpecSetting): UiSdlArcMapDataSpec;

  readonly startLongitude: UiSdlFieldBasedDataSpecSetting;
  withStartLongitude(startLongitude: IUiSdlFieldBasedDataSpecSetting): UiSdlArcMapDataSpec;

  readonly endLatitude: UiSdlFieldBasedDataSpecSetting;
  withEndLatitude(endLatitude: IUiSdlFieldBasedDataSpecSetting): UiSdlArcMapDataSpec;

  readonly endLongitude: UiSdlFieldBasedDataSpecSetting;
  withEndLongitude(endLongitude: IUiSdlFieldBasedDataSpecSetting): UiSdlArcMapDataSpec;

  readonly arcColor?: UiSdlMapMarkerColorFieldSetting | null;
  withArcColor(arcColor: IUiSdlMapMarkerColorFieldSetting | null): UiSdlArcMapDataSpec;

  readonly startMarkerColor?: UiSdlMapMarkerColorFieldSetting | null;
  withStartMarkerColor(startMarkerColor: IUiSdlMapMarkerColorFieldSetting | null): UiSdlArcMapDataSpec;

  readonly endMarkerColor?: UiSdlMapMarkerColorFieldSetting | null;
  withEndMarkerColor(endMarkerColor: IUiSdlMapMarkerColorFieldSetting | null): UiSdlArcMapDataSpec;

  readonly arcTooltipHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withArcTooltipHeader(arcTooltipHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly arcTooltipSubHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withArcTooltipSubHeader(arcTooltipSubHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly arcTooltipAdditionalFields?: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null>;
  withArcTooltipAdditionalFields(arcTooltipAdditionalFields: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null> | Array<IUiSdlMapTooltipAdditionalFieldDataSpecSetting | null>): UiSdlArcMapDataSpec;

  readonly startTooltipHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withStartTooltipHeader(startTooltipHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly startTooltipSubHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withStartTooltipSubHeader(startTooltipSubHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly startTooltipAdditionalFields?: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null>;
  withStartTooltipAdditionalFields(startTooltipAdditionalFields: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null> | Array<IUiSdlMapTooltipAdditionalFieldDataSpecSetting | null>): UiSdlArcMapDataSpec;

  readonly endTooltipHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withEndTooltipHeader(endTooltipHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly endTooltipSubHeader?: UiSdlFieldBasedDataSpecSetting | null;
  withEndTooltipSubHeader(endTooltipSubHeader: IUiSdlFieldBasedDataSpecSetting | null): UiSdlArcMapDataSpec;

  readonly endTooltipAdditionalFields?: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null>;
  withEndTooltipAdditionalFields(endTooltipAdditionalFields: C3.Array<UiSdlMapTooltipAdditionalFieldDataSpecSetting | null> | Array<IUiSdlMapTooltipAdditionalFieldDataSpecSetting | null>): UiSdlArcMapDataSpec;
}

