export interface UiSdlCardListDataSpec {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlCardListDataSpec;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlCardListDataSpec;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlCardListDataSpec;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCardListDataSpec;

  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec | null;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlCardListDataSpec;

  readonly dataType: string;
  withDataType(dataType: string): UiSdlCardListDataSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlCardListDataSpec;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlCardListDataSpec;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCardListDataSpec;

  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlCardListDataSpec;

  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlCardListDataSpec;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlCardListDataSpec;

  readonly fieldsDependenceMapping?: C3.Array<UiSdlFieldsDependenceMapping | null>;
  withFieldsDependenceMapping(fieldsDependenceMapping: C3.Array<UiSdlFieldsDependenceMapping | null> | Array<IUiSdlFieldsDependenceMapping | null>): UiSdlCardListDataSpec;

  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlCardListDataSpec;

  readonly link?: UiSdlCardListLinkFieldSetting | null;
  withLink(link: IUiSdlCardListLinkFieldSetting | null): UiSdlCardListDataSpec;

  readonly header?: UiSdlFieldBasedDataDynamicValueSpecSetting | null;
  withHeader(header: IUiSdlFieldBasedDataDynamicValueSpecSetting | null): UiSdlCardListDataSpec;

  readonly subHeader?: UiSdlFieldBasedDataDynamicValueSpecSetting | null;
  withSubHeader(subHeader: IUiSdlFieldBasedDataDynamicValueSpecSetting | null): UiSdlCardListDataSpec;

  readonly numericalIndicator?: UiSdlCardListNumericalIndicatorFieldSetting | null;
  withNumericalIndicator(numericalIndicator: IUiSdlCardListNumericalIndicatorFieldSetting | null): UiSdlCardListDataSpec;

  readonly contentBodyText?: UiSdlCardListContentBodyTextFieldSetting | null;
  withContentBodyText(contentBodyText: IUiSdlCardListContentBodyTextFieldSetting | null): UiSdlCardListDataSpec;

  readonly footerText?: UiSdlFieldBasedDataDynamicValueSpecSetting | null;
  withFooterText(footerText: IUiSdlFieldBasedDataDynamicValueSpecSetting | null): UiSdlCardListDataSpec;

  readonly numberOfCards?: number | null;
  withNumberOfCards(numberOfCards: number | null): UiSdlCardListDataSpec;

  readonly filterSpec?: FetchFilterSpec | null;
  withFilterSpec(filterSpec: IFetchFilterSpec | null): UiSdlCardListDataSpec;

  readonly sortFields?: C3.Array<UiSdlCardListSortFieldDataSpecSetting | null>;
  withSortFields(sortFields: C3.Array<UiSdlCardListSortFieldDataSpecSetting | null> | Array<IUiSdlCardListSortFieldDataSpecSetting | null>): UiSdlCardListDataSpec;
}

