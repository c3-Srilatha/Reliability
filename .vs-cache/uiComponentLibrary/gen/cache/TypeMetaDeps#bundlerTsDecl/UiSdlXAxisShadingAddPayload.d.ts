export interface UiSdlXAxisShadingAddPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlXAxisShadingAddPayload;

  readonly markerIdentifier?: string | null;
  withMarkerIdentifier(markerIdentifier: string | null): UiSdlXAxisShadingAddPayload;

  readonly fromDate?: DateTime | null;
  withFromDate(fromDate: DateTime | Date | string | null): UiSdlXAxisShadingAddPayload;

  readonly toDate?: DateTime | null;
  withToDate(toDate: DateTime | Date | string | null): UiSdlXAxisShadingAddPayload;

  readonly areaLabel?: string | null;
  withAreaLabel(areaLabel: string | null): UiSdlXAxisShadingAddPayload;
}

