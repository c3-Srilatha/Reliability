export interface LukeTestCustomNodeWithButton {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCustomNodeWithButton;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestCustomNodeWithButton;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestCustomNodeWithButton;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestCustomNodeWithButton;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestCustomNodeWithButton;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestCustomNodeWithButton;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestCustomNodeWithButton;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestCustomNodeWithButton;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestCustomNodeWithButton;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestCustomNodeWithButton;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestCustomNodeWithButton;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestCustomNodeWithButton;

  readonly buttonSelector?: string | null;
  withButtonSelector(buttonSelector: string | null): LukeTestCustomNodeWithButton;
}

