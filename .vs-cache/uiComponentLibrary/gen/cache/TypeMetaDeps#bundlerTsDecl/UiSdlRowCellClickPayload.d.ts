export interface UiSdlRowCellClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlRowCellClickPayload;

  readonly dataItem?: any | null;
  withDataItem(dataItem: any | null): UiSdlRowCellClickPayload;

  readonly obj?: any | null;
  withObj(obj: any | null): UiSdlRowCellClickPayload;
}

