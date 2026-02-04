export interface BasicDiagramEdgeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BasicDiagramEdgeReact;

  readonly id: string;
  withId(id: string): BasicDiagramEdgeReact;

  readonly name?: string | null;
  withName(name: string | null): BasicDiagramEdgeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BasicDiagramEdgeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BasicDiagramEdgeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BasicDiagramEdgeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BasicDiagramEdgeReact;

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): BasicDiagramEdgeReact;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): BasicDiagramEdgeReact;

  readonly source: string;
  withSource(source: string): BasicDiagramEdgeReact;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): BasicDiagramEdgeReact;

  readonly target: string;
  withTarget(target: string): BasicDiagramEdgeReact;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): BasicDiagramEdgeReact;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): BasicDiagramEdgeReact;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): BasicDiagramEdgeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): BasicDiagramEdgeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): BasicDiagramEdgeReact;

  readonly data?: BasicDiagramEdge | null;
  withData(data: IBasicDiagramEdge | null): BasicDiagramEdgeReact;
}

