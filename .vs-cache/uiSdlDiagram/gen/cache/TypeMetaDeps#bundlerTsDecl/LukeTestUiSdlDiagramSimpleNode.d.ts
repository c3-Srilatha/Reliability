export interface LukeTestUiSdlDiagramSimpleNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramSimpleNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestUiSdlDiagramSimpleNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestUiSdlDiagramSimpleNode;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestUiSdlDiagramSimpleNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlDiagramSimpleNode;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlDiagramSimpleNode;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramSimpleNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestUiSdlDiagramSimpleNode;
}

