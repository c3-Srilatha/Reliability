export interface LukeTestUiSdlTextAreaInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlTextAreaInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlTextAreaInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlTextAreaInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlTextAreaInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlTextAreaInput;

  readonly inputEl?: string | null;
  withInputEl(inputEl: string | null): LukeTestUiSdlTextAreaInput;

  readonly confirmableInputActivationSelector?: string | null;
  withConfirmableInputActivationSelector(confirmableInputActivationSelector: string | null): LukeTestUiSdlTextAreaInput;

  readonly confirmableButtonContainerSelector?: string | null;
  withConfirmableButtonContainerSelector(confirmableButtonContainerSelector: string | null): LukeTestUiSdlTextAreaInput;

  readonly confirmableCheckButtonSelector?: string | null;
  withConfirmableCheckButtonSelector(confirmableCheckButtonSelector: string | null): LukeTestUiSdlTextAreaInput;

  readonly confirmableCancelButtonSelector?: string | null;
  withConfirmableCancelButtonSelector(confirmableCancelButtonSelector: string | null): LukeTestUiSdlTextAreaInput;
}

