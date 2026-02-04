export interface SourceTargetNodeAdderEdgeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SourceTargetNodeAdderEdgeReact;

  readonly id: string;
  withId(id: string): SourceTargetNodeAdderEdgeReact;

  readonly name?: string | null;
  withName(name: string | null): SourceTargetNodeAdderEdgeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): SourceTargetNodeAdderEdgeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SourceTargetNodeAdderEdgeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SourceTargetNodeAdderEdgeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SourceTargetNodeAdderEdgeReact;

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): SourceTargetNodeAdderEdgeReact;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): SourceTargetNodeAdderEdgeReact;

  readonly source: string;
  withSource(source: string): SourceTargetNodeAdderEdgeReact;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): SourceTargetNodeAdderEdgeReact;

  readonly target: string;
  withTarget(target: string): SourceTargetNodeAdderEdgeReact;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): SourceTargetNodeAdderEdgeReact;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): SourceTargetNodeAdderEdgeReact;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): SourceTargetNodeAdderEdgeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): SourceTargetNodeAdderEdgeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): SourceTargetNodeAdderEdgeReact;

  readonly data?: SourceTargetNodeAdderEdge | null;
  withData(data: ISourceTargetNodeAdderEdge | null): SourceTargetNodeAdderEdgeReact;
}

