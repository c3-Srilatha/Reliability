export interface PresentationalTreeViewReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalTreeViewReact;

  readonly id?: string | null;
  withId(id: string | null): PresentationalTreeViewReact;

  readonly name?: string | null;
  withName(name: string | null): PresentationalTreeViewReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalTreeViewReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalTreeViewReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalTreeViewReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalTreeViewReact;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): PresentationalTreeViewReact;

  readonly selectable?: boolean;
  withSelectable(selectable: boolean): PresentationalTreeViewReact;

  readonly signature?: string | null;
  withSignature(signature: string | null): PresentationalTreeViewReact;

  readonly checked?: C3.Map<string | null, boolean>;
  withChecked(checked: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): PresentationalTreeViewReact;

  readonly expanded?: C3.Map<string | null, boolean>;
  withExpanded(expanded: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): PresentationalTreeViewReact;

  readonly height?: number | null;
  withHeight(height: number | null): PresentationalTreeViewReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): PresentationalTreeViewReact;

  readonly roots?: C3.Array<PresentationalTreeNode | null>;
  withRoots(roots: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): PresentationalTreeViewReact;

  readonly flattenedNodes?: C3.Map<string | null, PresentationalTreeNode | null>;
  withFlattenedNodes(flattenedNodes: C3.Map<string | null, PresentationalTreeNode | null> | {[key: string | null]: IPresentationalTreeNode | null}): PresentationalTreeViewReact;

  readonly selectedNode?: string | null;
  withSelectedNode(selectedNode: string | null): PresentationalTreeViewReact;

  readonly width?: number | null;
  withWidth(width: number | null): PresentationalTreeViewReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlComponent | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlComponent | null> | null): PresentationalTreeViewReact;

  readonly shouldOpenToSelectedPath?: boolean;
  withShouldOpenToSelectedPath(shouldOpenToSelectedPath: boolean): PresentationalTreeViewReact;
}

