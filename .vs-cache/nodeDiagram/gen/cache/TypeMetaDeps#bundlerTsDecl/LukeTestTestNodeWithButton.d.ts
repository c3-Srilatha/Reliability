export interface LukeTestTestNodeWithButton {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestTestNodeWithButton;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestTestNodeWithButton;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestTestNodeWithButton;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestTestNodeWithButton;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestTestNodeWithButton;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestTestNodeWithButton;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestTestNodeWithButton;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestTestNodeWithButton;

  readonly buttonSelector?: string | null;
  withButtonSelector(buttonSelector: string | null): LukeTestTestNodeWithButton;
}

