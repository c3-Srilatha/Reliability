export interface LukeTestUiSdlDiagramCircularNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramCircularNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestUiSdlDiagramCircularNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestUiSdlDiagramCircularNode;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestUiSdlDiagramCircularNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlDiagramCircularNode;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlDiagramCircularNode;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramCircularNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestUiSdlDiagramCircularNode;
}

