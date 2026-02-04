export interface LukeTestUiSdlBaseDataGridTextInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlBaseDataGridTextInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlBaseDataGridTextInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly inputEl?: string | null;
  withInputEl(inputEl: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly confirmableInputActivationSelector?: string | null;
  withConfirmableInputActivationSelector(confirmableInputActivationSelector: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly confirmableButtonContainerSelector?: string | null;
  withConfirmableButtonContainerSelector(confirmableButtonContainerSelector: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly confirmableCheckButtonSelector?: string | null;
  withConfirmableCheckButtonSelector(confirmableCheckButtonSelector: string | null): LukeTestUiSdlBaseDataGridTextInput;

  readonly confirmableCancelButtonSelector?: string | null;
  withConfirmableCancelButtonSelector(confirmableCancelButtonSelector: string | null): LukeTestUiSdlBaseDataGridTextInput;
}

