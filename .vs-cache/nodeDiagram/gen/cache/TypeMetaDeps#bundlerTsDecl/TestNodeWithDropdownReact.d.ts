export interface TestNodeWithDropdownReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestNodeWithDropdownReact;

  readonly id: string;
  withId(id: string): TestNodeWithDropdownReact;

  readonly name?: string | null;
  withName(name: string | null): TestNodeWithDropdownReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): TestNodeWithDropdownReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TestNodeWithDropdownReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TestNodeWithDropdownReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TestNodeWithDropdownReact;

  readonly NODE_CLASSNAME?: string | null;
  withNODE_CLASSNAME(NODE_CLASSNAME: string | null): TestNodeWithDropdownReact;

  readonly DEFAULT_NODE_DATA_TYPE?: string | null;
  withDEFAULT_NODE_DATA_TYPE(DEFAULT_NODE_DATA_TYPE: string | null): TestNodeWithDropdownReact;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): TestNodeWithDropdownReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): TestNodeWithDropdownReact;

  readonly position?: GeomPoint | null;
  withPosition(position: IGeomPoint | null): TestNodeWithDropdownReact;

  readonly sourcePosition?: string | null;
  withSourcePosition(sourcePosition: string | null): TestNodeWithDropdownReact;

  readonly targetPosition?: string | null;
  withTargetPosition(targetPosition: string | null): TestNodeWithDropdownReact;

  readonly size?: [width: number | null, height: number | null] | null;
  withSize(size: [width: number | null, height: number | null] | null): TestNodeWithDropdownReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): TestNodeWithDropdownReact;

  readonly classNames?: C3.Array<string | null>;
  withClassNames(classNames: C3.Array<string | null> | Array<string | null>): TestNodeWithDropdownReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TestNodeWithDropdownReact;

  readonly data?: TestNodeWithDropdown | null;
  withData(data: ITestNodeWithDropdown | null): TestNodeWithDropdownReact;
}

