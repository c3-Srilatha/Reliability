export interface LukeTestCircularDiagramNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCircularDiagramNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestCircularDiagramNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestCircularDiagramNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestCircularDiagramNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestCircularDiagramNode;

  readonly nameSelector?: string | null;
  withNameSelector(nameSelector: string | null): LukeTestCircularDiagramNode;
}

