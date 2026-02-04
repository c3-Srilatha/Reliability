export interface LukeTestNodeDiagramNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestNodeDiagramNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestNodeDiagramNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestNodeDiagramNode;
}

