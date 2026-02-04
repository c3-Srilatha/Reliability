export interface UiSdlCollectionListRowClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollectionListRowClickPayload;

  readonly data?: any | null;
  withData(data: any | null): UiSdlCollectionListRowClickPayload;

  readonly index: number;
  withIndex(index: number): UiSdlCollectionListRowClickPayload;

  readonly label: string;
  withLabel(label: string): UiSdlCollectionListRowClickPayload;
}

