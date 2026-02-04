export interface UiSdlChartClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChartClickPayload;

  readonly data?: C3.Array<any>;
  withData(data: C3.Array<any> | Array<any>): UiSdlChartClickPayload;

  readonly dataIndex?: number | null;
  withDataIndex(dataIndex: number | null): UiSdlChartClickPayload;

  readonly name?: string | null;
  withName(name: string | null): UiSdlChartClickPayload;

  readonly seriesIndex?: number | null;
  withSeriesIndex(seriesIndex: number | null): UiSdlChartClickPayload;

  readonly seriesName?: string | null;
  withSeriesName(seriesName: string | null): UiSdlChartClickPayload;

  readonly eventType?: string | null;
  withEventType(eventType: string | null): UiSdlChartClickPayload;

  readonly value?: C3.Array<any>;
  withValue(value: C3.Array<any> | Array<any>): UiSdlChartClickPayload;
}

