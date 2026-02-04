export interface BasicDiagramNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BasicDiagramNodeReact;

  readonly id: string;
  withId(id: string): BasicDiagramNodeReact;

  readonly name?: string | null;
  withName(name: string | null): BasicDiagramNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BasicDiagramNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BasicDiagramNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BasicDiagramNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BasicDiagramNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): BasicDiagramNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): BasicDiagramNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): BasicDiagramNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): BasicDiagramNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): BasicDiagramNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): BasicDiagramNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): BasicDiagramNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): BasicDiagramNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): BasicDiagramNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): BasicDiagramNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): BasicDiagramNodeReact;

  readonly data?: CircularDiagramNode | null;
  withData(data: ICircularDiagramNode | null): BasicDiagramNodeReact;
}

