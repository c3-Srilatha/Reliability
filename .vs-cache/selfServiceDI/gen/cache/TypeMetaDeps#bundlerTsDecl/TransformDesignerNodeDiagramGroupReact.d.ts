export interface TransformDesignerNodeDiagramGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TransformDesignerNodeDiagramGroupReact;

  readonly id: string;
  withId(id: string): TransformDesignerNodeDiagramGroupReact;

  readonly name?: string | null;
  withName(name: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TransformDesignerNodeDiagramGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): TransformDesignerNodeDiagramGroupReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): TransformDesignerNodeDiagramGroupReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): TransformDesignerNodeDiagramGroupReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TransformDesignerNodeDiagramGroupReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TransformDesignerNodeDiagramGroupReact;

  readonly data?: NodeDiagramGroup | null;
  withData(data: INodeDiagramGroup | null): TransformDesignerNodeDiagramGroupReact;
}

