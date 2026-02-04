export interface MetricConfigApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetricConfigApplicationState;

  readonly id?: string | null;
  withId(id: string | null): MetricConfigApplicationState;

  readonly name?: string | null;
  withName(name: string | null): MetricConfigApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetricConfigApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetricConfigApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetricConfigApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetricConfigApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): MetricConfigApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): MetricConfigApplicationState;

  readonly selectedMetricId?: string | null;
  withSelectedMetricId(selectedMetricId: string | null): MetricConfigApplicationState;

  readonly selectedMetricRowData?: ReliabilityMetric | null;
  withSelectedMetricRowData(selectedMetricRowData: IReliabilityMetric | null): MetricConfigApplicationState;

  readonly metricFormValues?: ReliabilityMetric | null;
  withMetricFormValues(metricFormValues: IReliabilityMetric | null): MetricConfigApplicationState;

  readonly childMetrics?: C3.Array<ReliabilityMetric | null>;
  withChildMetrics(childMetrics: C3.Array<ReliabilityMetric | null> | Array<IReliabilityMetric | null>): MetricConfigApplicationState;

  readonly currentPlottedMetricSpec?: CreateMetricConfigurationPreviewChartHelperSpec | null;
  withCurrentPlottedMetricSpec(currentPlottedMetricSpec: ICreateMetricConfigurationPreviewChartHelperSpec | null): MetricConfigApplicationState;

  readonly isExpressionValid?: boolean;
  withIsExpressionValid(isExpressionValid: boolean): MetricConfigApplicationState;

  readonly isNewMetric?: boolean;
  withIsNewMetric(isNewMetric: boolean): MetricConfigApplicationState;

  readonly redirectTo?: string | null;
  withRedirectTo(redirectTo: string | null): MetricConfigApplicationState;
}

