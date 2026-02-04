export interface TestDuckyEdgeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestDuckyEdgeReact;

  readonly id: string;
  withId(id: string): TestDuckyEdgeReact;

  readonly name?: string | null;
  withName(name: string | null): TestDuckyEdgeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TestDuckyEdgeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TestDuckyEdgeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TestDuckyEdgeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TestDuckyEdgeReact;

  readonly EDGE_CLASSNAME?: string | null;
  withEDGE_CLASSNAME(EDGE_CLASSNAME: string | null): TestDuckyEdgeReact;

  readonly DEFAULT_EDGE_DATA_TYPE?: string | null;
  withDEFAULT_EDGE_DATA_TYPE(DEFAULT_EDGE_DATA_TYPE: string | null): TestDuckyEdgeReact;

  readonly source: string;
  withSource(source: string): TestDuckyEdgeReact;

  readonly sourceHandle?: string | null;
  withSourceHandle(sourceHandle: string | null): TestDuckyEdgeReact;

  readonly target: string;
  withTarget(target: string): TestDuckyEdgeReact;

  readonly targetHandle?: string | null;
  withTargetHandle(targetHandle: string | null): TestDuckyEdgeReact;

  readonly markerEnd?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerEnd(markerEnd: INodeDiagramEdge.Marker | null | string | null | null): TestDuckyEdgeReact;

  readonly markerStart?: NodeDiagramEdge.Marker | null | string | null | null;
  withMarkerStart(markerStart: INodeDiagramEdge.Marker | null | string | null | null): TestDuckyEdgeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TestDuckyEdgeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TestDuckyEdgeReact;

  readonly data?: TestDuckyEdge | null;
  withData(data: ITestDuckyEdge | null): TestDuckyEdgeReact;
}

