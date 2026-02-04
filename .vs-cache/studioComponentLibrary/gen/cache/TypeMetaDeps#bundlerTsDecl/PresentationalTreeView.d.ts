export interface PresentationalTreeView {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalTreeView;

  readonly id?: string | null;
  withId(id: string | null): PresentationalTreeView;

  readonly name?: string | null;
  withName(name: string | null): PresentationalTreeView;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalTreeView;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalTreeView;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalTreeView;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalTreeView;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): PresentationalTreeView;

  readonly selectable?: boolean;
  withSelectable(selectable: boolean): PresentationalTreeView;

  readonly signature?: string | null;
  withSignature(signature: string | null): PresentationalTreeView;

  readonly checked?: C3.Map<string | null, boolean>;
  withChecked(checked: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): PresentationalTreeView;

  readonly expanded?: C3.Map<string | null, boolean>;
  withExpanded(expanded: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): PresentationalTreeView;

  readonly height?: number | null;
  withHeight(height: number | null): PresentationalTreeView;

  readonly loading?: boolean;
  withLoading(loading: boolean): PresentationalTreeView;

  readonly roots?: C3.Array<PresentationalTreeNode | null>;
  withRoots(roots: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): PresentationalTreeView;

  readonly flattenedNodes?: C3.Map<string | null, PresentationalTreeNode | null>;
  withFlattenedNodes(flattenedNodes: C3.Map<string | null, PresentationalTreeNode | null> | {[key: string | null]: IPresentationalTreeNode | null}): PresentationalTreeView;

  readonly selectedNode?: string | null;
  withSelectedNode(selectedNode: string | null): PresentationalTreeView;

  readonly width?: number | null;
  withWidth(width: number | null): PresentationalTreeView;

  readonly emptyState?: UiSdlComponentRef<UiSdlComponent | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlComponent | null> | null): PresentationalTreeView;

  readonly shouldOpenToSelectedPath?: boolean;
  withShouldOpenToSelectedPath(shouldOpenToSelectedPath: boolean): PresentationalTreeView;
}

