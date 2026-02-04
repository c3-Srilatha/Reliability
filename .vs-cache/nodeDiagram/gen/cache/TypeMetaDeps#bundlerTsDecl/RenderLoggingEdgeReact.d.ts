export interface RenderLoggingEdgeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): RenderLoggingEdgeReact;

  readonly id: string;
  withId(id: string): RenderLoggingEdgeReact;

  readonly name?: string | null;
  withName(name: string | null): RenderLoggingEdgeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): RenderLoggingEdgeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): RenderLoggingEdgeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): RenderLoggingEdgeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): RenderLoggingEdgeReact;

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): RenderLoggingEdgeReact;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): RenderLoggingEdgeReact;

  readonly source: string;
  withSource(source: string): RenderLoggingEdgeReact;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): RenderLoggingEdgeReact;

  readonly target: string;
  withTarget(target: string): RenderLoggingEdgeReact;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): RenderLoggingEdgeReact;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): RenderLoggingEdgeReact;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): RenderLoggingEdgeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): RenderLoggingEdgeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): RenderLoggingEdgeReact;

  readonly data?: RenderLoggingEdge | null;
  withData(data: IRenderLoggingEdge | null): RenderLoggingEdgeReact;
}

