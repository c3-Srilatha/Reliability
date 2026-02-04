export interface SourceFieldNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SourceFieldNodeReact;

  readonly id: string;
  withId(id: string): SourceFieldNodeReact;

  readonly name?: string | null;
  withName(name: string | null): SourceFieldNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): SourceFieldNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SourceFieldNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SourceFieldNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SourceFieldNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): SourceFieldNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): SourceFieldNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): SourceFieldNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): SourceFieldNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): SourceFieldNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): SourceFieldNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): SourceFieldNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): SourceFieldNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): SourceFieldNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): SourceFieldNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): SourceFieldNodeReact;

  readonly data?: SourceFieldNode | null;
  withData(data: ISourceFieldNode | null): SourceFieldNodeReact;
}

