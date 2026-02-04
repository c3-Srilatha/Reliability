export interface NodeDiagramEdge<D> {

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): NodeDiagramEdge;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): NodeDiagramEdge;

  readonly id: string;
  withId(id: string): NodeDiagramEdge;

  readonly source: string;
  withSource(source: string): NodeDiagramEdge;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): NodeDiagramEdge;

  readonly target: string;
  withTarget(target: string): NodeDiagramEdge;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): NodeDiagramEdge;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdge;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdge;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramEdge;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramEdge;

  readonly data?: D | null;
  withData(data: D | null): NodeDiagramEdge;
}

