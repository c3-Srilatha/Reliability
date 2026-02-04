export interface UiSdlPaginationSkipSizeDataOffsetChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPaginationSkipSizeDataOffsetChangePayload;

  readonly paginationDataSkipSize: number;
  withPaginationDataSkipSize(paginationDataSkipSize: number): UiSdlPaginationSkipSizeDataOffsetChangePayload;

  readonly dataOffset: number;
  withDataOffset(dataOffset: number): UiSdlPaginationSkipSizeDataOffsetChangePayload;
}

