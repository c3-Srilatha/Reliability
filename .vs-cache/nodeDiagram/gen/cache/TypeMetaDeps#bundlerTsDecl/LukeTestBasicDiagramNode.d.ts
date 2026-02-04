export interface LukeTestBasicDiagramNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestBasicDiagramNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestBasicDiagramNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestBasicDiagramNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestBasicDiagramNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestBasicDiagramNode;

  readonly nameSelector?: string | null;
  withNameSelector(nameSelector: string | null): LukeTestBasicDiagramNode;
}

