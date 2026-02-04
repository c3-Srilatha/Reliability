export interface UnstructuredDINodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UnstructuredDINodeReact;

  readonly id: string;
  withId(id: string): UnstructuredDINodeReact;

  readonly name?: string | null;
  withName(name: string | null): UnstructuredDINodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UnstructuredDINodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UnstructuredDINodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UnstructuredDINodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UnstructuredDINodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): UnstructuredDINodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): UnstructuredDINodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): UnstructuredDINodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): UnstructuredDINodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): UnstructuredDINodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): UnstructuredDINodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): UnstructuredDINodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): UnstructuredDINodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): UnstructuredDINodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): UnstructuredDINodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UnstructuredDINodeReact;

  readonly data?: UnstructuredDINode | null;
  withData(data: IUnstructuredDINode | null): UnstructuredDINodeReact;
}

