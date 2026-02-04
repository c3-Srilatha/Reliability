export interface MappingNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MappingNodeReact;

  readonly id: string;
  withId(id: string): MappingNodeReact;

  readonly name?: string | null;
  withName(name: string | null): MappingNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): MappingNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MappingNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MappingNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MappingNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): MappingNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): MappingNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): MappingNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): MappingNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): MappingNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): MappingNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): MappingNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): MappingNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): MappingNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): MappingNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): MappingNodeReact;

  readonly data?: MappingNode | null;
  withData(data: IMappingNode | null): MappingNodeReact;
}

