export interface LukeTestUiSdlCheckboxTree {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCheckboxTree;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCheckboxTree;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCheckboxTree;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxNodeSelector?: string | null;
  withCheckboxNodeSelector(checkboxNodeSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxLabelSelector?: string | null;
  withCheckboxLabelSelector(checkboxLabelSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxInputSelector?: string | null;
  withCheckboxInputSelector(checkboxInputSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxButtonSelector?: string | null;
  withCheckboxButtonSelector(checkboxButtonSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxIconSelectedSelector?: string | null;
  withCheckboxIconSelectedSelector(checkboxIconSelectedSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxIconUnselectedSelector?: string | null;
  withCheckboxIconUnselectedSelector(checkboxIconUnselectedSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxIconHalfSelectedSelector?: string | null;
  withCheckboxIconHalfSelectedSelector(checkboxIconHalfSelectedSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxCollapseButtonSelector?: string | null;
  withCheckboxCollapseButtonSelector(checkboxCollapseButtonSelector: string | null): LukeTestUiSdlCheckboxTree;

  readonly checkboxCollapseButtonOpenedSelector?: string | null;
  withCheckboxCollapseButtonOpenedSelector(checkboxCollapseButtonOpenedSelector: string | null): LukeTestUiSdlCheckboxTree;
}

