export interface NodeDiagramEdgeReact<D> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramEdgeReact;

  readonly id: string;
  withId(id: string): NodeDiagramEdgeReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramEdgeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): NodeDiagramEdgeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramEdgeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramEdgeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramEdgeReact;

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): NodeDiagramEdgeReact;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): NodeDiagramEdgeReact;

  readonly source: string;
  withSource(source: string): NodeDiagramEdgeReact;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): NodeDiagramEdgeReact;

  readonly target: string;
  withTarget(target: string): NodeDiagramEdgeReact;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): NodeDiagramEdgeReact;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdgeReact;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): NodeDiagramEdgeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramEdgeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramEdgeReact;

  readonly data?: D | null;
  withData(data: D | null): NodeDiagramEdgeReact;
}

