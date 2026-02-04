export interface NodeDiagramNodeReact<D> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramNodeReact;

  readonly id: string;
  withId(id: string): NodeDiagramNodeReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): NodeDiagramNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): NodeDiagramNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): NodeDiagramNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): NodeDiagramNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): NodeDiagramNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): NodeDiagramNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): NodeDiagramNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): NodeDiagramNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): NodeDiagramNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): NodeDiagramNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramNodeReact;

  readonly data?: D | null;
  withData(data: D | null): NodeDiagramNodeReact;
}

