export interface TargetNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TargetNodeReact;

  readonly id: string;
  withId(id: string): TargetNodeReact;

  readonly name?: string | null;
  withName(name: string | null): TargetNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TargetNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TargetNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TargetNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TargetNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): TargetNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): TargetNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): TargetNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): TargetNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): TargetNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): TargetNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): TargetNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): TargetNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): TargetNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TargetNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TargetNodeReact;

  readonly data?: TargetNode | null;
  withData(data: ITargetNode | null): TargetNodeReact;
}

