export interface LukeTestUiSdlCodeEditor {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCodeEditor;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCodeEditor;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCodeEditor;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCodeEditor;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCodeEditor;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlCodeEditor;

  readonly actionsSelector?: string | null;
  withActionsSelector(actionsSelector: string | null): LukeTestUiSdlCodeEditor;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUiSdlCodeEditor;
}

