export interface RenderLoggingNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): RenderLoggingNodeReact;

  readonly id: string;
  withId(id: string): RenderLoggingNodeReact;

  readonly name?: string | null;
  withName(name: string | null): RenderLoggingNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): RenderLoggingNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): RenderLoggingNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): RenderLoggingNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): RenderLoggingNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): RenderLoggingNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): RenderLoggingNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): RenderLoggingNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): RenderLoggingNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): RenderLoggingNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): RenderLoggingNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): RenderLoggingNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): RenderLoggingNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): RenderLoggingNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): RenderLoggingNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): RenderLoggingNodeReact;

  readonly data?: RenderLoggingNode | null;
  withData(data: IRenderLoggingNode | null): RenderLoggingNodeReact;
}

