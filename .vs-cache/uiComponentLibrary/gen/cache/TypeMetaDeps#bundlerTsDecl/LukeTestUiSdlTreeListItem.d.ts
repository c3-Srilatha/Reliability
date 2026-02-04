export interface LukeTestUiSdlTreeListItem {

  readonly text?: string | null;
  withText(text: string | null): LukeTestUiSdlTreeListItem;

  readonly icon?: string | null;
  withIcon(icon: string | null): LukeTestUiSdlTreeListItem;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): LukeTestUiSdlTreeListItem;

  readonly isExpanded?: boolean;
  withIsExpanded(isExpanded: boolean): LukeTestUiSdlTreeListItem;

  readonly isCollapsed?: boolean;
  withIsCollapsed(isCollapsed: boolean): LukeTestUiSdlTreeListItem;

  readonly isDisabled?: boolean;
  withIsDisabled(isDisabled: boolean): LukeTestUiSdlTreeListItem;

  readonly itemActions?: C3.Array<string | null>;
  withItemActions(itemActions: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlTreeListItem;
}

