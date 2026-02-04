export interface LukeTestCustomNodeWithDropdown {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCustomNodeWithDropdown;

  readonly nodeEl: LukeBrowserWebElement;
  withNodeEl(nodeEl: ILukeBrowserWebElement): LukeTestCustomNodeWithDropdown;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): LukeTestCustomNodeWithDropdown;

  readonly nodeSelector?: string | null;
  withNodeSelector(nodeSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly nodeContextMenuActionItem?: string | null;
  withNodeContextMenuActionItem(nodeContextMenuActionItem: string | null): LukeTestCustomNodeWithDropdown;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestCustomNodeWithDropdown;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestCustomNodeWithDropdown;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestCustomNodeWithDropdown;

  readonly radioButtonInputSelector?: string | null;
  withRadioButtonInputSelector(radioButtonInputSelector: string | null): LukeTestCustomNodeWithDropdown;

  readonly radioButtonLabelSelector?: string | null;
  withRadioButtonLabelSelector(radioButtonLabelSelector: string | null): LukeTestCustomNodeWithDropdown;
}

