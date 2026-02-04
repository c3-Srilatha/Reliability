export interface FilterNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FilterNodeReact;

  readonly id: string;
  withId(id: string): FilterNodeReact;

  readonly name?: string | null;
  withName(name: string | null): FilterNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): FilterNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FilterNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FilterNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FilterNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): FilterNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): FilterNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): FilterNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): FilterNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): FilterNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): FilterNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): FilterNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): FilterNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): FilterNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): FilterNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): FilterNodeReact;

  readonly data?: FilterNode | null;
  withData(data: IFilterNode | null): FilterNodeReact;
}

