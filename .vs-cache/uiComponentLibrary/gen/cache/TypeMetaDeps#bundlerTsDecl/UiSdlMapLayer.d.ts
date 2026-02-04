export interface UiSdlMapLayer {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMapLayer;

  readonly layerMarkers?: C3.Array<UiSdlMapMarker | null>;
  withLayerMarkers(layerMarkers: C3.Array<UiSdlMapMarker | null> | Array<IUiSdlMapMarker | null>): UiSdlMapLayer;

  readonly layerPolygonCoordinates?: any | null;
  withLayerPolygonCoordinates(layerPolygonCoordinates: any | null): UiSdlMapLayer;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMapLayer;

  readonly layerAttribute?: string | null;
  withLayerAttribute(layerAttribute: string | null): UiSdlMapLayer;

  readonly isOnByDefault?: boolean;
  withIsOnByDefault(isOnByDefault: boolean): UiSdlMapLayer;

  readonly isSelected?: boolean;
  withIsSelected(isSelected: boolean): UiSdlMapLayer;

  readonly isMultiLayerVisualizable?: boolean;
  withIsMultiLayerVisualizable(isMultiLayerVisualizable: boolean): UiSdlMapLayer;

  readonly opacity?: number | null;
  withOpacity(opacity: number | null): UiSdlMapLayer;
}

