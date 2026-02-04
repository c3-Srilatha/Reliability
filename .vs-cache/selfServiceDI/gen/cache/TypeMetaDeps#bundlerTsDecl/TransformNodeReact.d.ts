export interface TransformNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TransformNodeReact;

  readonly id: string;
  withId(id: string): TransformNodeReact;

  readonly name?: string | null;
  withName(name: string | null): TransformNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TransformNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TransformNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TransformNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TransformNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): TransformNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): TransformNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): TransformNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): TransformNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): TransformNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): TransformNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): TransformNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): TransformNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): TransformNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TransformNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TransformNodeReact;

  readonly data?: TransformNode | null;
  withData(data: ITransformNode | null): TransformNodeReact;
}

