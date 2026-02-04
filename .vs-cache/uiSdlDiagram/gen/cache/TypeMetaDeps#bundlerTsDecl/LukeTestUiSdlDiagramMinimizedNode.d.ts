export interface LukeTestUiSdlDiagramMinimizedNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramMinimizedNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestUiSdlDiagramMinimizedNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestUiSdlDiagramMinimizedNode;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestUiSdlDiagramMinimizedNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlDiagramMinimizedNode;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlDiagramMinimizedNode;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramMinimizedNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestUiSdlDiagramMinimizedNode;
}

