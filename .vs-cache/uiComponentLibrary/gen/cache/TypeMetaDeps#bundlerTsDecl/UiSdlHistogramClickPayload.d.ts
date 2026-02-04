export interface UiSdlHistogramClickPayload {

  readonly data?: C3.Array<any>;
  withData(data: C3.Array<any> | Array<any>): UiSdlHistogramClickPayload;

  readonly dataIndex?: number | null;
  withDataIndex(dataIndex: number | null): UiSdlHistogramClickPayload;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHistogramClickPayload;

  readonly seriesIndex?: number | null;
  withSeriesIndex(seriesIndex: number | null): UiSdlHistogramClickPayload;

  readonly seriesName?: string | null;
  withSeriesName(seriesName: string | null): UiSdlHistogramClickPayload;

  readonly eventType?: string | null;
  withEventType(eventType: string | null): UiSdlHistogramClickPayload;

  readonly value?: C3.Array<any>;
  withValue(value: C3.Array<any> | Array<any>): UiSdlHistogramClickPayload;
}

