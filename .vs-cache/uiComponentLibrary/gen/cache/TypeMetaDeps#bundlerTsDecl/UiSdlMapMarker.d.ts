export interface UiSdlMapMarker {

  readonly data?: any;
  withData(data: any): UiSdlMapMarker;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): UiSdlMapMarker;

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): UiSdlMapMarker;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMapMarker;

  readonly opacity?: number | null;
  withOpacity(opacity: number | null): UiSdlMapMarker;

  readonly tooltipHeader?: any;
  withTooltipHeader(tooltipHeader: any): UiSdlMapMarker;

  readonly tooltipSubHeader?: any;
  withTooltipSubHeader(tooltipSubHeader: any): UiSdlMapMarker;

  readonly tooltipAdditionalFields?: any;
  withTooltipAdditionalFields(tooltipAdditionalFields: any): UiSdlMapMarker;

  readonly layerAttribute?: string | null;
  withLayerAttribute(layerAttribute: string | null): UiSdlMapMarker;

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlMapMarker;
}

