export interface PresentationalTreeNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalTreeNode;

  readonly id: string;
  withId(id: string): PresentationalTreeNode;

  readonly name?: string | null;
  withName(name: string | null): PresentationalTreeNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalTreeNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalTreeNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalTreeNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalTreeNode;

  readonly actions?: C3.Array<UiSdlAction | null>;
  withActions(actions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): PresentationalTreeNode;

  readonly checked?: boolean;
  withChecked(checked: boolean): PresentationalTreeNode;

  readonly children?: C3.Array<PresentationalTreeNode | null>;
  withChildren(children: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): PresentationalTreeNode;

  readonly content?: string | null | UiSdlDynamicValueSpec | null | null;
  withContent(content: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalTreeNode;

  readonly descendantsIds?: C3.Array<string | null>;
  withDescendantsIds(descendantsIds: C3.Array<string | null> | Array<string | null>): PresentationalTreeNode;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): PresentationalTreeNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): PresentationalTreeNode;

  readonly icon?: string | null;
  withIcon(icon: string | null): PresentationalTreeNode;

  readonly iconTooltip?: string | null;
  withIconTooltip(iconTooltip: string | null): PresentationalTreeNode;

  readonly indeterminate?: boolean;
  withIndeterminate(indeterminate: boolean): PresentationalTreeNode;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): PresentationalTreeNode;

  readonly image?: string | null;
  withImage(image: string | null): PresentationalTreeNode;

  readonly overlayIcon?: string | null;
  withOverlayIcon(overlayIcon: string | null): PresentationalTreeNode;

  readonly overlayIconColor?: string | null;
  withOverlayIconColor(overlayIconColor: string | null): PresentationalTreeNode;

  readonly parent?: PresentationalTreeNode | null;
  withParent(parent: IPresentationalTreeNode | null): PresentationalTreeNode;

  readonly selected?: boolean;
  withSelected(selected: boolean): PresentationalTreeNode;

  readonly selectable?: boolean;
  withSelectable(selectable: boolean): PresentationalTreeNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): PresentationalTreeNode;

  readonly showCheckbox?: boolean;
  withShowCheckbox(showCheckbox: boolean): PresentationalTreeNode;

  readonly showChildrenCount?: boolean;
  withShowChildrenCount(showChildrenCount: boolean): PresentationalTreeNode;

  readonly showMinimizedChildren?: boolean;
  withShowMinimizedChildren(showMinimizedChildren: boolean): PresentationalTreeNode;

  readonly statuses?: C3.Array<PresentationalTreeNodeStatus | null>;
  withStatuses(statuses: C3.Array<PresentationalTreeNodeStatus | null> | Array<IPresentationalTreeNodeStatus | null>): PresentationalTreeNode;

  readonly rightIcon?: string | null;
  withRightIcon(rightIcon: string | null): PresentationalTreeNode;

  readonly rightIconColor?: string | null;
  withRightIconColor(rightIconColor: string | null): PresentationalTreeNode;

  readonly rightIconTooltip?: string | null;
  withRightIconTooltip(rightIconTooltip: string | null): PresentationalTreeNode;

  readonly rightImage?: string | null;
  withRightImage(rightImage: string | null): PresentationalTreeNode;
}

