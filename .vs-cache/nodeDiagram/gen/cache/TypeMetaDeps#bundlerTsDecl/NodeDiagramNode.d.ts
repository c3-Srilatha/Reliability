export interface NodeDiagramNode<D> {

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): NodeDiagramNode;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): NodeDiagramNode;

  readonly id: string;
  withId(id: string): NodeDiagramNode;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): NodeDiagramNode;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): NodeDiagramNode;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): NodeDiagramNode;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): NodeDiagramNode;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): NodeDiagramNode;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): NodeDiagramNode;

  readonly selected?: boolean;
  withSelected(selected: boolean): NodeDiagramNode;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): NodeDiagramNode;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): NodeDiagramNode;

  readonly data?: D | null;
  withData(data: D | null): NodeDiagramNode;
}

