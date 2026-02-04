export interface PresentationalTreeNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalTreeNodeReact;

  readonly id: string;
  withId(id: string): PresentationalTreeNodeReact;

  readonly name?: string | null;
  withName(name: string | null): PresentationalTreeNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalTreeNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalTreeNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalTreeNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalTreeNodeReact;

  readonly actions?: C3.Array<UiSdlAction | null>;
  withActions(actions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): PresentationalTreeNodeReact;

  readonly checked?: boolean;
  withChecked(checked: boolean): PresentationalTreeNodeReact;

  readonly children?: C3.Array<PresentationalTreeNode | null>;
  withChildren(children: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): PresentationalTreeNodeReact;

  readonly content?: string | null | UiSdlDynamicValueSpec | null | null;
  withContent(content: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalTreeNodeReact;

  readonly descendantsIds?: C3.Array<string | null>;
  withDescendantsIds(descendantsIds: C3.Array<string | null> | Array<string | null>): PresentationalTreeNodeReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): PresentationalTreeNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): PresentationalTreeNodeReact;

  readonly icon?: string | null;
  withIcon(icon: string | null): PresentationalTreeNodeReact;

  readonly iconTooltip?: string | null;
  withIconTooltip(iconTooltip: string | null): PresentationalTreeNodeReact;

  readonly indeterminate?: boolean;
  withIndeterminate(indeterminate: boolean): PresentationalTreeNodeReact;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): PresentationalTreeNodeReact;

  readonly image?: string | null;
  withImage(image: string | null): PresentationalTreeNodeReact;

  readonly overlayIcon?: string | null;
  withOverlayIcon(overlayIcon: string | null): PresentationalTreeNodeReact;

  readonly overlayIconColor?: string | null;
  withOverlayIconColor(overlayIconColor: string | null): PresentationalTreeNodeReact;

  readonly parent?: PresentationalTreeNode | null;
  withParent(parent: IPresentationalTreeNode | null): PresentationalTreeNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): PresentationalTreeNodeReact;

  readonly selectable?: boolean;
  withSelectable(selectable: boolean): PresentationalTreeNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): PresentationalTreeNodeReact;

  readonly showCheckbox?: boolean;
  withShowCheckbox(showCheckbox: boolean): PresentationalTreeNodeReact;

  readonly showChildrenCount?: boolean;
  withShowChildrenCount(showChildrenCount: boolean): PresentationalTreeNodeReact;

  readonly showMinimizedChildren?: boolean;
  withShowMinimizedChildren(showMinimizedChildren: boolean): PresentationalTreeNodeReact;

  readonly statuses?: C3.Array<PresentationalTreeNodeStatus | null>;
  withStatuses(statuses: C3.Array<PresentationalTreeNodeStatus | null> | Array<IPresentationalTreeNodeStatus | null>): PresentationalTreeNodeReact;

  readonly rightIcon?: string | null;
  withRightIcon(rightIcon: string | null): PresentationalTreeNodeReact;

  readonly rightIconColor?: string | null;
  withRightIconColor(rightIconColor: string | null): PresentationalTreeNodeReact;

  readonly rightIconTooltip?: string | null;
  withRightIconTooltip(rightIconTooltip: string | null): PresentationalTreeNodeReact;

  readonly rightImage?: string | null;
  withRightImage(rightImage: string | null): PresentationalTreeNodeReact;
}

