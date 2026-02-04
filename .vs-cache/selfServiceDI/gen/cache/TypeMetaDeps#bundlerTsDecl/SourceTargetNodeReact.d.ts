export interface SourceTargetNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SourceTargetNodeReact;

  readonly id: string;
  withId(id: string): SourceTargetNodeReact;

  readonly name?: string | null;
  withName(name: string | null): SourceTargetNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): SourceTargetNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SourceTargetNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SourceTargetNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SourceTargetNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): SourceTargetNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): SourceTargetNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): SourceTargetNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): SourceTargetNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): SourceTargetNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): SourceTargetNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): SourceTargetNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): SourceTargetNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): SourceTargetNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): SourceTargetNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): SourceTargetNodeReact;

  readonly data?: SourceTargetNode | null;
  withData(data: ISourceTargetNode | null): SourceTargetNodeReact;
}

