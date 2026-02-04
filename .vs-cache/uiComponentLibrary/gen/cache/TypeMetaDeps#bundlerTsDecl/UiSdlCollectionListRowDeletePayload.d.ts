export interface UiSdlCollectionListRowDeletePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollectionListRowDeletePayload;

  readonly data: any;
  withData(data: any): UiSdlCollectionListRowDeletePayload;

  readonly index: number;
  withIndex(index: number): UiSdlCollectionListRowDeletePayload;
}

