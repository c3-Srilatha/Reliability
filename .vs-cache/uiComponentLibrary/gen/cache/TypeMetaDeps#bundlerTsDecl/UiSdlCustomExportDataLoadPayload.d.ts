export interface UiSdlCustomExportDataLoadPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCustomExportDataLoadPayload;

  readonly c3function?: string | null;
  withC3function(c3function: string | null): UiSdlCustomExportDataLoadPayload;

  readonly c3type?: string | null;
  withC3type(c3type: string | null): UiSdlCustomExportDataLoadPayload;

  readonly c3args?: any | null;
  withC3args(c3args: any | null): UiSdlCustomExportDataLoadPayload;
}

