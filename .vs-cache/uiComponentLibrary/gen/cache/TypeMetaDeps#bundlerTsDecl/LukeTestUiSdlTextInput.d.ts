export interface LukeTestUiSdlTextInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlTextInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlTextInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlTextInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlTextInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlTextInput;

  readonly inputEl?: string | null;
  withInputEl(inputEl: string | null): LukeTestUiSdlTextInput;

  readonly confirmableInputActivationSelector?: string | null;
  withConfirmableInputActivationSelector(confirmableInputActivationSelector: string | null): LukeTestUiSdlTextInput;

  readonly confirmableButtonContainerSelector?: string | null;
  withConfirmableButtonContainerSelector(confirmableButtonContainerSelector: string | null): LukeTestUiSdlTextInput;

  readonly confirmableCheckButtonSelector?: string | null;
  withConfirmableCheckButtonSelector(confirmableCheckButtonSelector: string | null): LukeTestUiSdlTextInput;

  readonly confirmableCancelButtonSelector?: string | null;
  withConfirmableCancelButtonSelector(confirmableCancelButtonSelector: string | null): LukeTestUiSdlTextInput;
}

