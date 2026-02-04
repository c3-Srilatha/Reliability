export interface LukeTestUiSdlDiagramExpandableNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramExpandableNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestUiSdlDiagramExpandableNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly nodeExpansionIconSelector?: string | null;
  withNodeExpansionIconSelector(nodeExpansionIconSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly simpleNodeChildContainerSelector?: string | null;
  withSimpleNodeChildContainerSelector(simpleNodeChildContainerSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly simpleNodeChildSelector?: string | null;
  withSimpleNodeChildSelector(simpleNodeChildSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly simpleNodeChildTitleSelector?: string | null;
  withSimpleNodeChildTitleSelector(simpleNodeChildTitleSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly simpleNodeChildSubtitleSelector?: string | null;
  withSimpleNodeChildSubtitleSelector(simpleNodeChildSubtitleSelector: string | null): LukeTestUiSdlDiagramExpandableNode;

  readonly simpleNodeChildIconSelector?: string | null;
  withSimpleNodeChildIconSelector(simpleNodeChildIconSelector: string | null): LukeTestUiSdlDiagramExpandableNode;
}

