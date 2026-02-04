export interface NodeDiagramGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramGroupReact;

  readonly id: string;
  withId(id: string): NodeDiagramGroupReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramGroupReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): NodeDiagramGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramGroupReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): NodeDiagramGroupReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): NodeDiagramGroupReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): NodeDiagramGroupReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): NodeDiagramGroupReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): NodeDiagramGroupReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): NodeDiagramGroupReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): NodeDiagramGroupReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): NodeDiagramGroupReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): NodeDiagramGroupReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramGroupReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramGroupReact;

  readonly data?: NodeDiagramGroup | null;
  withData(data: INodeDiagramGroup | null): NodeDiagramGroupReact;
}

