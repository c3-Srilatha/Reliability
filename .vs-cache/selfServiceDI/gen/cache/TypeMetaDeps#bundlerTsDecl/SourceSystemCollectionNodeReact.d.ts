export interface SourceSystemCollectionNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SourceSystemCollectionNodeReact;

  readonly id: string;
  withId(id: string): SourceSystemCollectionNodeReact;

  readonly name?: string | null;
  withName(name: string | null): SourceSystemCollectionNodeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): SourceSystemCollectionNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SourceSystemCollectionNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SourceSystemCollectionNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SourceSystemCollectionNodeReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): SourceSystemCollectionNodeReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): SourceSystemCollectionNodeReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): SourceSystemCollectionNodeReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): SourceSystemCollectionNodeReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): SourceSystemCollectionNodeReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): SourceSystemCollectionNodeReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): SourceSystemCollectionNodeReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): SourceSystemCollectionNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): SourceSystemCollectionNodeReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): SourceSystemCollectionNodeReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): SourceSystemCollectionNodeReact;

  readonly data?: SourceSystemCollectionNode | null;
  withData(data: ISourceSystemCollectionNode | null): SourceSystemCollectionNodeReact;
}

