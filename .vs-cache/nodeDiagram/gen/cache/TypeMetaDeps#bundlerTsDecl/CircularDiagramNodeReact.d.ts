export interface CircularDiagramNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CircularDiagramNodeReact;

  readonly id: string;
  withId(id: string): CircularDiagramNodeReact;

  readonly name?: string | null;
  withName(name: string | null): CircularDiagramNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): CircularDiagramNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CircularDiagramNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CircularDiagramNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CircularDiagramNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): CircularDiagramNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): CircularDiagramNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): CircularDiagramNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): CircularDiagramNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): CircularDiagramNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): CircularDiagramNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): CircularDiagramNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): CircularDiagramNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): CircularDiagramNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): CircularDiagramNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): CircularDiagramNodeReact;

  readonly data?: CircularDiagramNode | null;
  withData(data: ICircularDiagramNode | null): CircularDiagramNodeReact;
}

