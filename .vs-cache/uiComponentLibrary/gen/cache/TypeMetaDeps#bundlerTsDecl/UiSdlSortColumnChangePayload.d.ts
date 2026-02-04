export interface UiSdlSortColumnChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSortColumnChangePayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSortColumnChangePayload;

  readonly descending?: boolean;
  withDescending(descending: boolean): UiSdlSortColumnChangePayload;
}

