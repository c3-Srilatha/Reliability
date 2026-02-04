export interface LukeTestTestNodeWithDropdown {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestTestNodeWithDropdown;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestTestNodeWithDropdown;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestTestNodeWithDropdown;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestTestNodeWithDropdown;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestTestNodeWithDropdown;

  readonly nameSelector?: string | null;
  withNameSelector(nameSelector: string | null): LukeTestTestNodeWithDropdown;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestTestNodeWithDropdown;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestTestNodeWithDropdown;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestTestNodeWithDropdown;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestTestNodeWithDropdown;

  readonly radioButtonInputSelector?: string | null;
  withRadioButtonInputSelector(radioButtonInputSelector: string | null): LukeTestTestNodeWithDropdown;

  readonly radioButtonLabelSelector?: string | null;
  withRadioButtonLabelSelector(radioButtonLabelSelector: string | null): LukeTestTestNodeWithDropdown;
}

