export interface TestNodeWithButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestNodeWithButtonReact;

  readonly id: string;
  withId(id: string): TestNodeWithButtonReact;

  readonly name?: string | null;
  withName(name: string | null): TestNodeWithButtonReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TestNodeWithButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TestNodeWithButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TestNodeWithButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TestNodeWithButtonReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): TestNodeWithButtonReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): TestNodeWithButtonReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): TestNodeWithButtonReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): TestNodeWithButtonReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): TestNodeWithButtonReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): TestNodeWithButtonReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): TestNodeWithButtonReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): TestNodeWithButtonReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): TestNodeWithButtonReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TestNodeWithButtonReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TestNodeWithButtonReact;

  readonly data?: TestNodeWithButton | null;
  withData(data: ITestNodeWithButton | null): TestNodeWithButtonReact;
}

