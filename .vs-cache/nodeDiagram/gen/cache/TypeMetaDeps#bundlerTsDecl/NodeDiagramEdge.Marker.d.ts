declare namespace NodeDiagramEdge {
  export interface Marker {

    readonly kind?: string | null;
    withKind(kind: string | null): NodeDiagramEdge.Marker;

    readonly color?: string | null;
    withColor(color: string | null): NodeDiagramEdge.Marker;

    readonly width?: number | null;
    withWidth(width: number | null): NodeDiagramEdge.Marker;

    readonly height?: number | null;
    withHeight(height: number | null): NodeDiagramEdge.Marker;

    readonly markerUnits?: string | null;
    withMarkerUnits(markerUnits: string | null): NodeDiagramEdge.Marker;

    readonly orient?: string | null;
    withOrient(orient: string | null): NodeDiagramEdge.Marker;

    readonly strokeWidth?: number | null;
    withStrokeWidth(strokeWidth: number | null): NodeDiagramEdge.Marker;
  }
}

