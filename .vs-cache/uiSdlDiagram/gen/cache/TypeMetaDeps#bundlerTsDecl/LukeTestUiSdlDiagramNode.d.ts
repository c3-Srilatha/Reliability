export interface LukeTestUiSdlDiagramNode {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramNode;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestUiSdlDiagramNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestUiSdlDiagramNode;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestUiSdlDiagramNode;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlDiagramNode;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlDiagramNode;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramNode;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestUiSdlDiagramNode;
}

